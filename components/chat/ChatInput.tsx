"use client";

import { useState, KeyboardEvent, useRef, useEffect } from "react";
import { Icons } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSend: (text: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [value]);

  const handleSend = () => {
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className="flex items-end gap-3 px-4 py-4"
      style={{
        background: "linear-gradient(to top, #fffdf7, #f7f3eb)",
        borderTop: "1px solid rgba(229,231,235,0.5)",
      }}
    >
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder="Ask about Udhiyyah rulings..."
        rows={1}
        className={cn(
          "flex-1 resize-none text-sm text-foreground placeholder:text-muted-foreground/60",
          "px-5 py-3.5 max-h-[120px] overflow-y-auto transition-all duration-200 clay-input",
          disabled && "opacity-50 cursor-not-allowed"
        )}
      />
      <button
        onClick={handleSend}
        disabled={disabled || !value.trim()}
        aria-label="Send message"
        className={cn(
          "flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200",
          disabled || !value.trim()
            ? "bg-muted text-muted-foreground cursor-not-allowed opacity-50"
            : "clay-btn bg-primary text-white"
        )}
        style={
          !disabled && value.trim()
            ? { boxShadow: "0 4px 16px rgba(29,158,117,0.45), inset 0 1px 0 rgba(255,255,255,0.2)" }
            : undefined
        }
      >
        <Icons.Send className="w-4.5 h-4.5 ml-0.5" />
      </button>
    </div>
  );
}
