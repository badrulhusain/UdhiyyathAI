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
    <div className="flex flex-col h-full bg-[#FAFAF8]">
      {/* Messages area */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scroll-smooth"
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
        <div className="mx-4 mb-2 flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span className="flex-1">{error}</span>
          <button onClick={dismissError} aria-label="Dismiss error">
            <X className="w-4 h-4 hover:text-red-900" />
          </button>
        </div>
      )}

      {/* Suggestion chips — shown until first message */}
      {showChips && (
        <SuggestionChips onSelect={sendMessage} disabled={isLoading} />
      )}

      {/* Input */}
      <ChatInput onSend={sendMessage} disabled={isLoading} />
    </div>
  );
}
