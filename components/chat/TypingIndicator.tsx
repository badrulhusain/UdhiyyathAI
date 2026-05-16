"use client";

import { Icons } from "@/components/ui/Icons";

export function TypingIndicator() {
  return (
    <div className="flex gap-2.5 w-full flex-row">
      <div
        className="flex-shrink-0 w-8 h-8 rounded-[0.625rem] flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #1D9E75, #147556)",
          boxShadow: "0 3px 12px rgba(29,158,117,0.35), inset 0 1px 0 rgba(255,255,255,0.2)",
        }}
      >
        <Icons.Leaf className="w-4 h-4 text-white" />
      </div>

      <div
        className="rounded-[1.25rem] rounded-bl-[0.375rem] px-5 py-3.5"
        style={{
          background: "linear-gradient(135deg, #ffffff, #f7f3eb)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)",
        }}
      >
        <div className="flex items-center gap-1.5 h-5">
          <span className="w-2 h-2 rounded-full bg-primary dot-bounce dot-bounce-1" />
          <span className="w-2 h-2 rounded-full bg-primary dot-bounce dot-bounce-2" />
          <span className="w-2 h-2 rounded-full bg-primary dot-bounce dot-bounce-3" />
        </div>
      </div>
    </div>
  );
}
