"use client";

import ReactMarkdown from "react-markdown";
import { Message } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/Icons";

interface MessageBubbleProps {
  message: Message;
}

function BotAvatar() {
  return (
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm mt-1">
      <Icons.Leaf className="w-4 h-4 text-white" />
    </div>
  );
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex gap-3 w-full animate-fade-in-up",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      {!isUser && <BotAvatar />}

      <div
        className={cn(
          "max-w-[85%] px-5 py-3.5 shadow-sm",
          isUser
            ? "bg-primary text-white rounded-2xl rounded-br-none"
            : "bg-white border border-border text-foreground rounded-2xl rounded-bl-none"
        )}
      >
        {isUser ? (
          <p className="text-sm leading-relaxed whitespace-pre-wrap">
            {message.content}
          </p>
        ) : (
          <div className="text-sm leading-relaxed prose prose-sm max-w-none prose-headings:text-foreground prose-headings:font-bold prose-headings:font-heading prose-p:text-foreground/90 prose-strong:text-foreground prose-li:text-foreground/90 prose-a:text-primary prose-em:text-accent prose-em:italic">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        )}
        <p
          className={cn(
            "text-[10px] mt-2 select-none",
            isUser ? "text-white/70 text-right" : "text-muted-foreground"
          )}
        >
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
}
