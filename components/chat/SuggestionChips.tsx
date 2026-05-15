"use client";

import { SUGGESTION_CHIPS } from "@/lib/constants";

interface SuggestionChipsProps {
  onSelect: (text: string) => void;
  disabled?: boolean;
}

export function SuggestionChips({ onSelect, disabled }: SuggestionChipsProps) {
  return (
    <div className="flex flex-wrap gap-2 px-4 pb-2">
      {SUGGESTION_CHIPS.map((chip) => (
        <button
          key={chip}
          onClick={() => onSelect(chip)}
          disabled={disabled}
          className="text-xs font-semibold px-4 py-2 rounded-full border border-primary text-primary bg-surface hover:bg-primary hover:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-sm"
        >
          {chip}
        </button>
      ))}
    </div>
  );
}
