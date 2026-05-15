"use client";

import { Icons } from "@/components/ui/Icons";

export function WelcomeMessage() {
  return (
    <div className="flex gap-3 w-full flex-row animate-fade-in-up">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm mt-1">
        <Icons.Leaf className="w-4 h-4 text-white" />
      </div>

      <div className="max-w-[85%] bg-white border border-border rounded-2xl rounded-bl-none px-5 py-4 shadow-sm relative">
        <div className="absolute -top-3 left-4 bg-surface border border-primary/20 text-primary font-arabic text-sm px-3 py-0.5 rounded-full shadow-sm">
          بسم الله
        </div>
        
        <p className="text-sm text-foreground leading-relaxed mt-2">
          <span className="font-semibold">As-salamu alaykum!</span> Welcome to{" "}
          <span className="text-primary font-semibold">Udhiyyah AI</span>.
        </p>
        <p className="text-sm text-foreground/90 leading-relaxed mt-2">
          I can guide you through the rulings of Udhiyyah (Qurbani) — from eligibility and animal selection to the time of slaughter and distribution of meat, referencing the four major madhabs.
        </p>
        <p className="text-xs text-accent bg-surface/50 border border-primary/10 rounded-lg px-3 py-2 mt-3 italic">
          <span className="font-semibold not-italic">Note:</span> This is an educational tool. For complex personal rulings, please consult a qualified scholar.
        </p>
        <p className="text-[10px] text-muted-foreground mt-2">
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  );
}
