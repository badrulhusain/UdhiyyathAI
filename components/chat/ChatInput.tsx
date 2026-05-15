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
    <div className="flex items-end gap-2 p-4 bg-white border-t border-gray-100">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder="Ask about Udhiyyah rulings..."
        rows={1}
        className={cn(
          "flex-1 resize-none rounded-[2rem] border border-border bg-white px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 max-h-[120px] overflow-y-auto shadow-sm",
          disabled && "opacity-60 cursor-not-allowed"
        )}
      />
      <button
        onClick={handleSend}
        disabled={disabled || !value.trim()}
        aria-label="Send message"
        className={cn(
          "flex-shrink-0 w-11 h-11 rounded-full bg-primary flex items-center justify-center shadow-md transition-all duration-200",
          disabled || !value.trim()
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-primary-dark active:scale-95"
        )}
      >
        <Icons.Send className="w-5 h-5 text-white ml-0.5" />
      </button>
    </div>
  );
}
