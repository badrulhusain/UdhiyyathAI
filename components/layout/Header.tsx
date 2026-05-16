"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Icons } from "@/components/ui/Icons";
import { useState } from "react";
import { SettingsModal } from "../chat/SettingsModal";

export function Header() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <>
      <header
        className="flex items-center justify-between px-4 py-3 flex-shrink-0 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1D9E75, #147556)",
          boxShadow: "0 4px 20px rgba(29,158,117,0.3), 0 1px 0 rgba(255,255,255,0.1)",
        }}
      >
        <div className="absolute inset-0 bg-arabesque opacity-[0.06] pointer-events-none" />

        <div className="flex items-center gap-3 relative z-10">
          <Link
            href="/"
            aria-label="Back to home"
            className="flex items-center justify-center w-8 h-8 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>

          <div
            className="w-9 h-9 rounded-[0.75rem] flex items-center justify-center"
            style={{
              background: "rgba(255,255,255,0.18)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.3)",
            }}
          >
            <Icons.Crescent className="w-5 h-5 text-white" />
          </div>

          <div>
            <h1 className="text-white font-heading font-bold text-base leading-tight">
              Udhiyyah AI
            </h1>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
              <p className="text-white/70 text-[11px] font-medium tracking-wide">
                Online · Islamic guidance
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsSettingsOpen(true)}
          aria-label="Settings"
          className="relative z-10 w-9 h-9 rounded-full text-white/70 hover:text-white hover:bg-white/10 flex items-center justify-center transition-all duration-200"
        >
          <Icons.Settings className="w-4.5 h-4.5" />
        </button>
      </header>

      <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </>
  );
}
