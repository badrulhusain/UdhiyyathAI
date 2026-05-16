"use client";

import { SUGGESTION_CHIPS } from "@/lib/constants";

interface SuggestionChipsProps {
  onSelect: (text: string) => void;
  disabled?: boolean;
}

export function SuggestionChips({ onSelect, disabled }: SuggestionChipsProps) {
  return (
    <div className="flex flex-wrap gap-2 px-4 pb-3 pt-1">
      {SUGGESTION_CHIPS.map((chip) => (
        <button
          key={chip}
          onClick={() => onSelect(chip)}
          disabled={disabled}
          className="text-xs font-semibold text-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap clay-pill"
          style={{
            background: "linear-gradient(135deg, #E1F5EE, #fffdf7)",
            boxShadow: "0 3px 10px rgba(29,158,117,0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
          }}
          onMouseEnter={(e) => {
            if (!disabled) {
              (e.currentTarget as HTMLButtonElement).style.background =
                "linear-gradient(135deg, #1D9E75, #147556)";
              (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 5px 16px rgba(29,158,117,0.35), inset 0 1px 0 rgba(255,255,255,0.2)";
            }
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "linear-gradient(135deg, #E1F5EE, #fffdf7)";
            (e.currentTarget as HTMLButtonElement).style.color = "#1D9E75";
            (e.currentTarget as HTMLButtonElement).style.boxShadow =
              "0 3px 10px rgba(29,158,117,0.12), inset 0 1px 0 rgba(255,255,255,0.8)";
          }}
        >
          {chip}
        </button>
      ))}
    </div>
  );
}
