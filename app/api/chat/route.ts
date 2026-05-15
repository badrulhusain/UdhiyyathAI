import { NextRequest, NextResponse } from "next/server";
import { groq } from "@/lib/anthropic";
import { SYSTEM_PROMPT } from "@/lib/system-prompt";
import { MODEL, MAX_TOKENS, TEMPERATURE } from "@/lib/constants";
import { ChatRequest } from "@/lib/types";

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

    const completion = await groq.chat.completions.create({
      model: MODEL,
      max_tokens: MAX_TOKENS,
      temperature: TEMPERATURE,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...validMessages.map((m) => ({
          role: m.role as "user" | "assistant",
          content: m.content,
        })),
      ],
    });

    const text = completion.choices[0]?.message?.content ?? "";

    return NextResponse.json({
      role: "assistant",
      content: text,
    });
  } catch (error: unknown) {
    console.error("Chat API error:", error);

    if (error && typeof error === "object" && "status" in error) {
      const apiError = error as { status: number };
      if (apiError.status === 429) {
        return NextResponse.json(
          { error: "Please wait a moment and try again." },
          { status: 429 }
        );
      }
    }

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
