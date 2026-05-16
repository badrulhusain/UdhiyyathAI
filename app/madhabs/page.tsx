import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Icons } from "@/components/ui/Icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Four Madhabs — Udhiyyah AI",
  description: "Compare Udhiyyah rulings across the four major Sunni madhabs: Hanafi, Maliki, Shafi'i, and Hanbali.",
};

const madhabs = [
  {
    name: "Hanafi",
    arabic: "حنفي",
    scholar: "Imam Abu Hanifa (d. 767 CE)",
    color: "primary",
    gradient: "from-primary/10 to-primary/5",
    border: "border-primary/20",
    badge: "bg-primary/10 text-primary",
    primary_source: "Radd al-Muhtar (Ibn 'Abidin), Al-Hidaya (al-Marghinani)",
    rulings: [
      {
        topic: "Ruling on Udhiyyah",
        ruling: "Wajib (obligatory)",
        detail: "Upon every adult, sane, resident Muslim who possesses nisab wealth during the days of Eid.",
      },
      {
        topic: "Household Coverage",
        ruling: "Individual",
        detail: "One sheep/goat covers only one person. Each qualifying member of the household must perform their own.",
      },
      {
        topic: "Nisab Threshold",
        ruling: "Required",
        detail: "612.36g silver or 87.48g gold equivalent, above basic needs and debts. Does not need to be held for a full year.",
      },
      {
        topic: "Slaughter Window",
        ruling: "10–12 Dhul Hijjah",
        detail: "After the Eid prayer of the nearest city. Ends at sunset of 12 Dhul Hijjah.",
      },
      {
        topic: "Hair/Nail Cutting",
        ruling: "Not prohibited (Sunnah to avoid)",
        detail: "Leaving it is a sunnah but not haram.",
      },
      {
        topic: "Sharing Cow/Camel",
        ruling: "Up to 7 people",
        detail: "All sharers must have a valid ibadah intention.",
      },
    ],
  },
  {
    name: "Maliki",
    arabic: "مالكي",
    scholar: "Imam Malik ibn Anas (d. 795 CE)",
    color: "gold",
    gradient: "from-gold/10 to-gold/5",
    border: "border-gold/20",
    badge: "bg-gold/10 text-gold-dark",
    primary_source: "Al-Sharh al-Kabir (al-Dardir), Mukhtasar Khalil",
    rulings: [
      {
        topic: "Ruling on Udhiyyah",
        ruling: "Wajib (majority Maliki view) / Sunnah Mu'akkadah (minority)",
        detail: "Many Maliki scholars consider it obligatory for the financially capable, similar to Hanafi.",
      },
      {
        topic: "Household Coverage",
        ruling: "One suffices for household",
        detail: "One sheep or goat covers the person and their entire household (differing from Hanafi).",
      },
      {
        topic: "Nisab Threshold",
        ruling: "General financial ability",
        detail: "No strict nisab formula; recommended for those of general financial means.",
      },
      {
        topic: "Slaughter Window",
        ruling: "10–12 Dhul Hijjah",
        detail: "After Eid prayer. Ends at sunset of 12 Dhul Hijjah according to the mu'tamad.",
      },
      {
        topic: "Hair/Nail Cutting",
        ruling: "Strongly disliked (Makruh)",
        detail: "Cutting from 1 Dhul Hijjah until after sacrifice is strongly disliked.",
      },
      {
        topic: "Sharing Cow/Camel",
        ruling: "Up to 7 people",
        detail: "Sharing is valid with proper intentions.",
      },
    ],
  },
  {
    name: "Shafi'i",
    arabic: "شافعي",
    scholar: "Imam al-Shafi'i (d. 820 CE)",
    color: "sage",
    gradient: "from-sage/15 to-sage/5",
    border: "border-sage/30",
    badge: "bg-sage/20 text-accent",
    primary_source: "Al-Majmu' (al-Nawawi), Tuhfat al-Muhtaj (Ibn Hajar al-Haytami)",
    rulings: [
      {
        topic: "Ruling on Udhiyyah",
        ruling: "Sunnah Mu'akkadah",
        detail: "Strongly emphasized sunnah for those with financial ability. Not performing it is disliked.",
      },
      {
        topic: "Household Coverage",
        ruling: "One suffices for household",
        detail: "One sheep or goat covers the person and their entire household and earns them all thawab.",
      },
      {
        topic: "Nisab Threshold",
        ruling: "General ability",
        detail: "Recommended for anyone who can afford it without financial hardship.",
      },
      {
        topic: "Slaughter Window",
        ruling: "10–12 Dhul Hijjah",
        detail: "Begins after Eid prayer. Ends at sunset of 12 Dhul Hijjah (the mu'tamad position).",
      },
      {
        topic: "Hair/Nail Cutting",
        ruling: "Disliked (Makruh)",
        detail: "Disliked from 1 Dhul Hijjah until after the sacrifice.",
      },
      {
        topic: "Sharing Cow/Camel",
        ruling: "Up to 7 people",
        detail: "Each share is one full Udhiyyah. All must have valid ibadah intentions.",
      },
    ],
  },
  {
    name: "Hanbali",
    arabic: "حنبلي",
    scholar: "Imam Ahmad ibn Hanbal (d. 855 CE)",
    color: "primary",
    gradient: "from-primary/8 to-gold/5",
    border: "border-primary/15",
    badge: "bg-primary/10 text-primary",
    primary_source: "Al-Mughni (Ibn Qudama), Al-Insaf (al-Mardawi)",
    rulings: [
      {
        topic: "Ruling on Udhiyyah",
        ruling: "Sunnah Mu'akkadah (very strongly emphasized)",
        detail: "Some Hanbali scholars consider it wajib. Strongly urged for the financially capable.",
      },
      {
        topic: "Household Coverage",
        ruling: "One suffices for household",
        detail: "One sheep or goat is sufficient for a person and their dependents.",
      },
      {
        topic: "Nisab Threshold",
        ruling: "General financial ability",
        detail: "Recommended for those with means after essential expenses.",
      },
      {
        topic: "Slaughter Window",
        ruling: "10–13 Dhul Hijjah (4 days)",
        detail: "Notable distinction: extends to sunset of 13 Dhul Hijjah (Tashriq days), unlike other madhabs.",
      },
      {
        topic: "Hair/Nail Cutting",
        ruling: "Prohibited (Haram)",
        detail: "Strictly prohibited from 1 Dhul Hijjah until after the sacrifice. Strongest ruling of all madhabs.",
      },
      {
        topic: "Sharing Cow/Camel",
        ruling: "Up to 7 people",
        detail: "Valid; some scholars permit the jadha' lamb (6-month old appearing 1-year) in necessity.",
      },
    ],
  },
];

export default function MadhabsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative hero-gradient pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-arabesque opacity-[0.07] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-10 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-5">
            <div
              className="w-14 h-14 rounded-[1.25rem] flex items-center justify-center"
              style={{
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.3)",
              }}
            >
              <Icons.Crescent className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="font-arabic text-base text-white/75 block">المذاهب الأربعة</span>
              <h1 className="text-3xl font-heading font-bold text-white">The Four Madhabs</h1>
            </div>
          </div>
          <p className="text-white/75 max-w-xl leading-relaxed text-sm">
            Compare Udhiyyah rulings across Hanafi, Maliki, Shafi&apos;i, and Hanbali schools of jurisprudence.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-12 pb-20 space-y-5">

        {/* Madhab cards */}
        {madhabs.map((m) => (
          <div
            key={m.name}
            className={`clay-card bg-gradient-to-br ${m.gradient} p-7`}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className={`clay-badge text-xs font-bold ${m.badge}`}>
                    {m.name} School
                  </span>
                  <span className="font-arabic text-xl text-muted-foreground">{m.arabic}</span>
                </div>
                <p className="text-xs text-muted-foreground">{m.scholar}</p>
                <p className="text-xs text-muted-foreground/70 mt-0.5">
                  <span className="font-semibold">Primary Sources:</span> {m.primary_source}
                </p>
              </div>
            </div>

            {/* Rulings grid */}
            <div className="grid sm:grid-cols-2 gap-3">
              {m.rulings.map(({ topic, ruling, detail }) => (
                <div
                  key={topic}
                  className="rounded-[1rem] p-4"
                  style={{
                    background: "rgba(255,255,255,0.65)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)",
                  }}
                >
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">{topic}</p>
                  <p className="text-sm font-semibold text-foreground mb-1">{ruling}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Comparison note */}
        <div
          className="clay-card p-7"
        >
          <h2 className="text-base font-heading font-bold text-foreground mb-4">Key Differences at a Glance</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="text-left border-b border-border/50">
                  <th className="pb-3 font-bold text-muted-foreground uppercase tracking-wider pr-4">Topic</th>
                  {["Hanafi", "Maliki", "Shafi'i", "Hanbali"].map((m) => (
                    <th key={m} className="pb-3 font-bold text-foreground pr-4">{m}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                {[
                  { topic: "Obligation", values: ["Wajib", "Wajib/Sunnah", "Sunnah", "Sunnah*"] },
                  { topic: "Slaughter Days", values: ["3 days", "3 days", "3 days", "4 days"] },
                  { topic: "Hair/Nails", values: ["Sunnah to avoid", "Makruh", "Makruh", "Haram"] },
                  { topic: "1 animal/household", values: ["No (individual)", "Yes", "Yes", "Yes"] },
                ].map(({ topic, values }) => (
                  <tr key={topic}>
                    <td className="py-3 font-semibold text-foreground/80 pr-4 whitespace-nowrap">{topic}</td>
                    {values.map((v, i) => (
                      <td key={i} className="py-3 text-muted-foreground pr-4">{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground/60 mt-4">* Some Hanbali scholars consider it wajib.</p>
        </div>

        {/* CTA */}
        <div className="text-center pt-2">
          <Link
            href="/chat"
            className="clay-btn bg-primary text-white px-10 py-4 text-sm inline-flex"
          >
            <MessageCircle className="w-4 h-4" />
            Ask a Madhab-Specific Question
          </Link>
        </div>
      </div>
    </div>
  );
}
