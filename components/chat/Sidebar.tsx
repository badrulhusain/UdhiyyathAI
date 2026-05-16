"use client";

import { BookOpen, HelpCircle, Clock, HeartHandshake, ExternalLink } from "lucide-react";
import Link from "next/link";

export function Sidebar() {
  const topics = [
    { name: "Rulings & Eligibility", icon: BookOpen },
    { name: "Selecting Animals", icon: HelpCircle },
    { name: "Timing & Procedure", icon: Clock },
    { name: "Distribution of Meat", icon: HeartHandshake },
  ];

  return (
    <div
      className="h-full flex flex-col"
      style={{ background: "linear-gradient(180deg, #fffdf7 0%, #f7f3eb 100%)" }}
    >
      <div className="p-5 pb-3 border-b border-border/40">
        <h2 className="text-sm font-heading font-bold text-muted-foreground uppercase tracking-wider">
          Topics
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-1 scrollbar-thin">
        {topics.map((topic, i) => (
          <button
            key={i}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-[1rem] text-left transition-all duration-200 group hover:-translate-y-0.5"
            style={{ background: "transparent" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "linear-gradient(135deg, #E1F5EE, #fffdf7)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 3px 12px rgba(29,158,117,0.1), inset 0 1px 0 rgba(255,255,255,0.8)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
            }}
          >
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 text-primary transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, #E1F5EE, #fffdf7)",
                boxShadow: "0 2px 8px rgba(29,158,117,0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
              }}
            >
              <topic.icon className="w-4 h-4" />
            </div>
            <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
              {topic.name}
            </span>
          </button>
        ))}
      </div>

      <div className="p-4 mt-auto border-t border-border/40">
        <div
          className="rounded-[1.25rem] p-4"
          style={{
            background: "linear-gradient(135deg, #E1F5EE, #fffdf7)",
            boxShadow: "0 4px 16px rgba(29,158,117,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
          }}
        >
          <p className="text-xs font-semibold text-primary mb-1">Need a specific Fatwa?</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Consult your local scholars for complex personal rulings.
          </p>
          <Link
            href="/guide"
            className="mt-3 flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
          >
            View Udhiyyah Guide
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
