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
    <div
      className="flex-shrink-0 w-8 h-8 rounded-[0.625rem] flex items-center justify-center mt-1"
      style={{
        background: "linear-gradient(135deg, #1D9E75, #147556)",
        boxShadow: "0 3px 12px rgba(29,158,117,0.35), inset 0 1px 0 rgba(255,255,255,0.2)",
      }}
    >
      <Icons.Leaf className="w-4 h-4 text-white" />
    </div>
  );
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex gap-2.5 w-full animate-fade-in-up",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      {!isUser && <BotAvatar />}

      <div
        className={cn(
          "max-w-[82%] px-4 py-3 rounded-[1.25rem]",
          isUser
            ? "rounded-br-[0.375rem] bubble-user text-white"
            : "rounded-bl-[0.375rem] bubble-bot text-foreground"
        )}
      >
        {isUser ? (
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
        ) : (
          <div className="text-sm leading-relaxed prose prose-sm max-w-none prose-headings:text-foreground prose-headings:font-bold prose-headings:font-heading prose-p:text-foreground/90 prose-strong:text-foreground prose-li:text-foreground/90 prose-a:text-primary prose-em:text-accent prose-em:italic">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        )}
        <p
          className={cn(
            "text-[10px] mt-2 select-none",
            isUser ? "text-white/60 text-right" : "text-muted-foreground"
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
