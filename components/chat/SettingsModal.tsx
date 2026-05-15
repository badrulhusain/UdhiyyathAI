"use client";

import { useState } from "react";

export function SettingsModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [madhab, setMadhab] = useState("Hanafi");
  const [language, setLanguage] = useState("English");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl border border-border p-6 overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        <h2 className="text-xl font-heading font-bold text-primary mb-6">Settings</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Madhab Preference</label>
            <select
              value={madhab}
              onChange={(e) => setMadhab(e.target.value)}
              className="w-full bg-surface border border-primary/20 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
            >
              <option value="Hanafi">Hanafi</option>
              <option value="Shafi'i">Shafi'i</option>
              <option value="Maliki">Maliki</option>
              <option value="Hanbali">Hanbali</option>
              <option value="All">Show All Rulings</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full bg-surface border border-primary/20 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
            >
              <option value="English">English</option>
              <option value="Arabic">Arabic (عربي)</option>
              <option value="Urdu">Urdu (اردو)</option>
            </select>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="bg-primary text-white font-semibold px-6 py-2.5 rounded-xl hover:bg-primary-dark transition-colors shadow-md"
          >
            Save & Close
          </button>
        </div>
      </div>
    </div>
  );
}
