import { NextRequest, NextResponse } from "next/server";
import { callOpenRouter } from "@/lib/anthropic";
import { SYSTEM_PROMPT } from "@/lib/system-prompt";
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

    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...validMessages.map((m) => ({ role: m.role, content: m.content })),
    ];

    const stream = await callOpenRouter(messages);

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error: unknown) {
    console.error("Chat API error:", error);

    if (error instanceof Error && error.message.startsWith("All models rate limited")) {
      return NextResponse.json(
        { error: "All models are currently rate limited. Please wait a moment and try again." },
        { status: 429 }
      );
    }

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
