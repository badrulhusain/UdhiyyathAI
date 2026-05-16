"use client";

import { Icons } from "@/components/ui/Icons";

export function WelcomeMessage() {
  return (
    <div className="flex gap-2.5 w-full flex-row animate-fade-in-up">
      <div
        className="flex-shrink-0 w-8 h-8 rounded-[0.625rem] flex items-center justify-center mt-1"
        style={{
          background: "linear-gradient(135deg, #1D9E75, #147556)",
          boxShadow: "0 3px 12px rgba(29,158,117,0.35), inset 0 1px 0 rgba(255,255,255,0.2)",
        }}
      >
        <Icons.Leaf className="w-4 h-4 text-white" />
      </div>

      <div
        className="max-w-[85%] rounded-[1.25rem] rounded-bl-[0.375rem] px-5 py-4 relative"
        style={{
          background: "linear-gradient(135deg, #ffffff, #f7f3eb)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)",
        }}
      >
        {/* Bismillah badge */}
        <div
          className="absolute -top-3 left-4 font-arabic text-sm text-primary px-3 py-0.5 rounded-full"
          style={{
            background: "linear-gradient(135deg, #E1F5EE, #fffdf7)",
            boxShadow: "0 2px 8px rgba(29,158,117,0.15), inset 0 1px 0 rgba(255,255,255,0.8)",
          }}
        >
          بسم الله
        </div>

        <p className="text-sm text-foreground leading-relaxed mt-2">
          <span className="font-semibold">As-salamu alaykum!</span> Welcome to{" "}
          <span className="text-primary font-semibold">Udhiyyah AI</span>.
        </p>
        <p className="text-sm text-foreground/80 leading-relaxed mt-2">
          I can guide you through the rulings of Udhiyyah (Qurbani) — from eligibility and animal selection to slaughter timing and meat distribution, referencing the four major madhabs.
        </p>
        <div
          className="mt-3 px-3 py-2 rounded-xl text-xs text-primary/80 italic"
          style={{
            background: "rgba(29,158,117,0.06)",
            boxShadow: "inset 0 1px 3px rgba(29,158,117,0.08)",
          }}
        >
          <span className="font-semibold not-italic">Note:</span> This is an educational tool. For personal rulings, please consult a qualified scholar.
        </div>
        <p className="text-[10px] text-muted-foreground mt-2">
          {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </p>
      </div>
    </div>
  );
}
