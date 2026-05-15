"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Icons } from "@/components/ui/Icons";
import { useState } from "react";
// import { SettingsModal } from "@/components/chat/SettingsModal";
import {SettingsModal} from "../chat/SettingsModal";
export function Header() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-4 py-3 bg-primary shadow-sm flex-shrink-0 relative overflow-hidden">
        {/* Optional subtle arabesque pattern watermark at low opacity */}
        <div className="absolute inset-0 bg-arabesque opacity-5 pointer-events-none" />
        
        <div className="flex items-center gap-3 relative z-10">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mr-2"
            aria-label="Back to home"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>

          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <Icons.Crescent className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-white font-heading font-bold text-lg leading-tight">
              Udhiyyah AI
            </h1>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <p className="text-white/80 text-xs font-medium tracking-wide">
                Online · Islamic guidance assistant
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsSettingsOpen(true)}
          className="text-white/80 hover:text-white transition-colors relative z-10 p-2"
          aria-label="Settings"
          title="Settings"
        >
          <Icons.Settings className="w-5 h-5" />
        </button>
      </header>

      <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </>
  );
}
