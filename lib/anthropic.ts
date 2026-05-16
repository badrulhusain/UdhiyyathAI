const FREE_MODELS = [
  "meta-llama/llama-3.2-3b-instruct:free",
  "deepseek/deepseek-v4-flash:free",
  "google/gemma-4-31b-it:free",
  "meta-llama/llama-3.3-70b-instruct:free",
];

const CONNECT_TIMEOUT_MS = 25_000;
const RATE_LIMIT_COOLDOWN_MS = 60_000;

// Persists across requests in the same server process
const rateLimitedUntil = new Map<string, number>();

function isBanned(model: string): boolean {
  const until = rateLimitedUntil.get(model);
  if (!until) return false;
  if (Date.now() > until) {
    rateLimitedUntil.delete(model);
    return false;
  }
  return true;
}

function banModel(model: string): void {
  rateLimitedUntil.set(model, Date.now() + RATE_LIMIT_COOLDOWN_MS);
  console.warn(`${model} banned for ${RATE_LIMIT_COOLDOWN_MS / 1000}s`);
}

export async function callOpenRouter(
  messages: Array<{ role: string; content: string }>
): Promise<ReadableStream<Uint8Array>> {
  for (const model of FREE_MODELS) {
    if (isBanned(model)) {
      console.log(`Skipping ${model} (rate limited, cooling down)`);
      continue;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), CONNECT_TIMEOUT_MS);

    try {
      console.log(`Trying model: ${model}`);

      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://mufti-ai.com",
          "X-Title": "Mufti AI",
        },
        body: JSON.stringify({
          model,
          messages,
          max_tokens: 500,
          temperature: 0.7,
          stream: true,
        }),
        signal: controller.signal,
      });

      // Headers received — cancel the timeout so it can't abort body streaming
      clearTimeout(timeoutId);

      if (res.status === 429) {
        banModel(model);
        continue;
      }

      if (!res.ok) {
        const err = await res.json();
        console.error(`${model} error:`, err);
        continue;
      }

      return sseToTextStream(res.body!);
    } catch (err) {
      clearTimeout(timeoutId);
      if ((err as Error).name === "AbortError") {
        console.warn(`${model} timed out after ${CONNECT_TIMEOUT_MS}ms. Switching...`);
      } else {
        console.error(`${model} failed:`, (err as Error).message);
      }
      continue;
    }
  }

  throw new Error("All models rate limited. Please wait a moment and try again.");
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
