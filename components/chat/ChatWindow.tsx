"use client";

import { useRef } from "react";
import { MessageBubble } from "./MessageBubble";
import { TypingIndicator } from "./TypingIndicator";
import { SuggestionChips } from "./SuggestionChips";
import { WelcomeMessage } from "./WelcomeMessage";
import { ChatInput } from "./ChatInput";
import { useChat } from "@/hooks/useChat";
import { useAutoScroll } from "@/hooks/useAutoScroll";
import { AlertCircle, X } from "lucide-react";

export function ChatWindow() {
  const { messages, isLoading, error, sendMessage, dismissError } = useChat();
  const scrollRef = useRef<HTMLDivElement>(null);

  useAutoScroll(scrollRef, [messages, isLoading]);

  const showChips = messages.length === 0;

  return (
    <div
      className="flex flex-col h-full"
      style={{ background: "linear-gradient(180deg, #f7f3eb 0%, #fffdf7 100%)" }}
    >
      {/* Messages area */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-4 py-5 space-y-4 scroll-smooth scrollbar-thin"
      >
        <WelcomeMessage />

        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}

        {isLoading && <TypingIndicator />}

        <div className="h-1" />
      </div>

      {/* Error banner */}
      {error && (
        <div
          className="mx-4 mb-2 flex items-center gap-2 px-4 py-3 text-sm text-red-700 rounded-[1rem]"
          style={{
            background: "linear-gradient(135deg, #fff5f5, #fee2e2)",
            boxShadow: "0 4px 16px rgba(220,38,38,0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
          }}
        >
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span className="flex-1">{error}</span>
          <button onClick={dismissError} aria-label="Dismiss error">
            <X className="w-4 h-4 hover:text-red-900" />
          </button>
        </div>
      )}

      {showChips && <SuggestionChips onSelect={sendMessage} disabled={isLoading} />}

      <ChatInput onSend={sendMessage} disabled={isLoading} />
    </div>
  );
}
