"use client";

import { useState } from "react";
import { X } from "lucide-react";

export function SettingsModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [madhab, setMadhab] = useState("Hanafi");
  const [language, setLanguage] = useState("English");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
      <div
        className="w-full max-w-md rounded-[1.75rem] p-7 relative animate-fade-in-up overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #ffffff, #f7f3eb)",
          boxShadow: "0 24px 64px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
        }}
      >
        {/* Subtle arabesque watermark */}
        <div className="absolute inset-0 bg-arabesque-fine opacity-[0.04] pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-heading font-bold text-primary">Settings</h2>
            <button
              onClick={onClose}
              aria-label="Close"
              className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Madhab Preference
              </label>
              <select
                value={madhab}
                onChange={(e) => setMadhab(e.target.value)}
                className="w-full rounded-[1rem] px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none cursor-pointer transition-all"
                style={{
                  background: "linear-gradient(135deg, #ffffff, #f7f3eb)",
                  boxShadow: "inset 0 2px 8px rgba(0,0,0,0.06), inset 0 1px 2px rgba(0,0,0,0.04)",
                }}
              >
                <option value="Hanafi">Hanafi</option>
                <option value="Shafi'i">Shafi&apos;i</option>
                <option value="Maliki">Maliki</option>
                <option value="Hanbali">Hanbali</option>
                <option value="All">Show All Rulings</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Language
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full rounded-[1rem] px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none cursor-pointer transition-all"
                style={{
                  background: "linear-gradient(135deg, #ffffff, #f7f3eb)",
                  boxShadow: "inset 0 2px 8px rgba(0,0,0,0.06), inset 0 1px 2px rgba(0,0,0,0.04)",
                }}
              >
                <option value="English">English</option>
                <option value="Arabic">Arabic (عربي)</option>
                <option value="Urdu">Urdu (اردو)</option>
              </select>
            </div>
          </div>

          <div className="mt-7 flex justify-end">
            <button
              onClick={onClose}
              className="clay-btn bg-primary text-white px-7 py-2.5 text-sm"
            >
              Save &amp; Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
