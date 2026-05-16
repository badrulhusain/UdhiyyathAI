import { NextRequest, NextResponse } from "next/server";
import { SYSTEM_PROMPT } from "@/lib/system-prompt";
import { ChatRequest } from "@/lib/types";

const PROVIDERS = [
  {
    name: "Groq",
    url: "https://api.groq.com/openai/v1/chat/completions",
    model: "llama-3.1-8b-instant",
    apiKey: () => process.env.GROQ_API_KEY,
  },
  {
    name: "Cerebras",
    url: "https://api.cerebras.ai/v1/chat/completions",
    model: "llama3.1-8b",
    apiKey: () => process.env.CEREBRAS_API_KEY,
  },
  {
    name: "DeepSeek",
    url: "https://api.deepseek.com/chat/completions",
    model: "deepseek-chat",
    apiKey: () => process.env.DEEPSEEK_API_KEY,
  },
  {
    name: "Together AI",
    url: "https://api.together.xyz/v1/chat/completions",
    model: "meta-llama/Llama-3-8b-chat-hf",
    apiKey: () => process.env.TOGETHER_API_KEY,
  },
] as const;

const TIMEOUT_MS = 10_000;

export async function POST(request: NextRequest) {
  try {
    const body: ChatRequest = await request.json();

    if (!body.messages || !Array.isArray(body.messages) || body.messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid request: messages array is required" },
        { status: 400 }
      );
    }

    const validMessages = body.messages.filter(
      (m) =>
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0 &&
        m.content.length <= 4000
    );

    if (validMessages.length === 0) {
      return NextResponse.json(
        { error: "Invalid request: no valid messages found" },
        { status: 400 }
      );
    }

    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...validMessages.map((m) => ({ role: m.role, content: m.content })),
    ];

    const stream = await callWithFallback(messages);

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error: unknown) {
    console.error("Chat API error:", error);

    if (error instanceof Error && error.message === "ALL_PROVIDERS_FAILED") {
      return NextResponse.json(
        { error: "All providers busy. Try again." },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

async function callWithFallback(
  messages: Array<{ role: string; content: string }>
): Promise<ReadableStream<Uint8Array>> {
  for (const provider of PROVIDERS) {
    const apiKey = provider.apiKey();
    if (!apiKey) {
      console.log(`⏭ [${provider.name}] No API key — skipping`);
      continue;
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);
    const start = Date.now();

    console.log(`⚡ [${provider.name}] Trying...`);

    try {
      const res = await fetch(provider.url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: provider.model,
          messages,
          max_tokens: 500,
          temperature: 0.7,
          stream: true,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (res.status === 429) {
        console.log(`❌ [${provider.name}] Failed: 429 - trying next provider...`);
        continue;
      }

      if (!res.ok) {
        const errText = await res.text().catch(() => String(res.status));
        console.log(`❌ [${provider.name}] Failed: ${res.status} ${errText} - trying next provider...`);
        continue;
      }

      const elapsed = Date.now() - start;
      console.log(`✅ [${provider.name}] Success in ${elapsed}ms`);
      return sseToTextStream(res.body!);
    } catch (err) {
      clearTimeout(timeout);
      const msg =
        (err as Error).name === "AbortError"
          ? `timeout after ${TIMEOUT_MS}ms`
          : (err as Error).message;
      console.log(`❌ [${provider.name}] Failed: ${msg} - trying next provider...`);
    }
  }

  throw new Error("ALL_PROVIDERS_FAILED");
}

function sseToTextStream(body: ReadableStream<Uint8Array>): ReadableStream<Uint8Array> {
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  let buffer = "";

  return new ReadableStream({
    async start(controller) {
      const reader = body.getReader();
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";

          for (const line of lines) {
            if (!line.startsWith("data: ")) continue;
            const data = line.slice(6).trim();
            if (data === "[DONE]") {
              controller.close();
              return;
            }
            try {
              const chunk = JSON.parse(data);
              const text = chunk.choices?.[0]?.delta?.content;
              if (text) controller.enqueue(encoder.encode(text));
            } catch {
              // skip malformed SSE chunks
            }
          }
        }
        controller.close();
      } catch (err) {
        controller.error(err);
      } finally {
        reader.releaseLock();
      }
    },
  });
}
