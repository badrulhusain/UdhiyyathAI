import Link from "next/link";
import { ArrowLeft, MessageCircle, CheckCircle2, AlertTriangle, Clock, Scissors, Share2, Beef, User } from "lucide-react";
import { Icons } from "@/components/ui/Icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Udhiyyah Guide — Complete Step-by-Step Guide",
  description: "A comprehensive guide to performing Udhiyyah (Qurbani) correctly, covering eligibility, animals, timing, slaughter and distribution.",
};

const steps = [
  {
    step: "01",
    icon: User,
    title: "Eligibility (Who Must Perform It?)",
    color: "primary",
    bg: "from-primary/8 to-primary/4",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    content: [
      {
        heading: "Hanafi (Wajib — Obligatory)",
        body: "Every adult, sane, resident (muqim) Muslim who possesses nisab wealth (above basic needs and debts) during the days of Eid al-Adha. Each person meeting this threshold must perform their own Udhiyyah — one sheep or goat does not cover other household members.",
      },
      {
        heading: "Shafi'i / Maliki / Hanbali (Sunnah Mu'akkadah)",
        body: "Strongly recommended sunnah for anyone with the financial ability. One sheep or goat covers the entire household. Not performing it is disliked but not sinful (except some Maliki scholars consider it wajib).",
      },
    ],
    note: "Travelers (77km+) are exempt from the Hanafi wajib ruling. Other madhabs still encourage it.",
  },
  {
    step: "02",
    icon: Beef,
    title: "Valid Animals & Conditions",
    color: "gold",
    bg: "from-gold/8 to-gold/4",
    iconBg: "bg-gold/10",
    iconColor: "text-gold-dark",
    content: [
      {
        heading: "Permitted Animals (An'am)",
        body: "Sheep (including ram) · Goat · Cow (including buffalo) · Camel. No poultry, fish, or wild animals.",
      },
      {
        heading: "Minimum Ages",
        body: "Sheep: 1 year (exception: 6-month jadha' if it appears 1 year old — valid in Hanafi & Hanbali). Goat: 1 year. Cow/Buffalo: 2 years. Camel: 5 years.",
      },
      {
        heading: "Sharing Large Animals",
        body: "One cow or camel may be shared by up to 7 people. Each share counts as one full Udhiyyah. All sharers must have a valid ibadah intention — a general feast intention does not count.",
      },
    ],
    note: "A castrated animal or one born without horns is valid and some scholars consider it preferred.",
  },
  {
    step: "03",
    icon: AlertTriangle,
    title: "Disqualifying Defects",
    color: "destructive",
    bg: "from-red-50 to-orange-50",
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
    content: [
      {
        heading: "Invalid (Agreed Upon)",
        body: "Blind in one or both eyes · Extremely emaciated (no marrow in bones) · Severely lame (cannot walk to slaughter) · Majority of ear or tail missing · Visibly sick in a condition-affecting way.",
      },
      {
        heading: "Valid Despite Minor Defects",
        body: "Missing a few teeth · Born without horns · Slightly lame but able to walk · Small portion of ear or tail missing.",
      },
    ],
    note: "General rule: defects that significantly reduce meat value → invalid. Minor defects → valid but disliked (makruh).",
  },
  {
    step: "04",
    icon: Clock,
    title: "Correct Timing",
    color: "primary",
    bg: "from-primary/8 to-primary/4",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    content: [
      {
        heading: "When it Begins",
        body: "After the Eid prayer on 10 Dhul Hijjah. Slaughtering before the Eid prayer does not count as Udhiyyah. In Hanafi: after the Eid prayer of the nearest city.",
      },
      {
        heading: "When it Ends",
        body: "Majority opinion: sunset of 12 Dhul Hijjah (3 days total: 10, 11, 12). Some Hanbali scholars: until sunset of 13 Dhul Hijjah (4 days).",
      },
      {
        heading: "Most Virtuous Time",
        body: "The day of Eid (10 Dhul Hijjah) is the most virtuous. Nighttime sacrifice is permissible but disliked by some scholars due to difficulty ensuring correct slaughter.",
      },
    ],
    note: "If the time passes without sacrifice: Hanafi — give the designated animal (or its value) in charity. Other madhabs — missed sunnah; sadaqah is recommended.",
  },
  {
    step: "05",
    icon: Scissors,
    title: "Dhul Hijjah Restriction",
    color: "gold",
    bg: "from-gold/8 to-gold/4",
    iconBg: "bg-gold/10",
    iconColor: "text-gold-dark",
    content: [
      {
        heading: "Hair & Nail Cutting",
        body: "From 1 Dhul Hijjah until after the sacrifice: the person intending Udhiyyah should avoid cutting hair, nails, or skin. Basis: \"Whoever intends to sacrifice, let him not cut his hair or nails when Dhul Hijjah begins.\" (Sahih Muslim)",
      },
      {
        heading: "Madhab Rulings",
        body: "Hanbali: prohibited (haram). Maliki: strongly disliked (makruh). Shafi'i: disliked (makruh). Hanafi: not prohibited; leaving it is a sunnah.",
      },
    ],
    note: "This applies to the person paying for the Udhiyyah — not necessarily all family members. If cut accidentally, make istighfar; no kaffara is required.",
  },
  {
    step: "06",
    icon: Share2,
    title: "Distribution of Meat",
    color: "primary",
    bg: "from-primary/8 to-primary/4",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    content: [
      {
        heading: "Recommended Division (Mustahabb)",
        body: "⅓ for yourself and family · ⅓ for relatives and friends · ⅓ for the poor and needy. This is recommended, not obligatory, in most madhabs.",
      },
      {
        heading: "Key Rules",
        body: "You may NOT sell the meat, skin, wool, or any part of the animal. These may only be given as gifts or in charity. The butcher must be paid separately in cash — not from the animal or its parts.",
      },
      {
        heading: "Feeding Non-Muslims",
        body: "Permissible according to the majority. Some Hanafi scholars prefer not giving to non-Muslims in voluntary charity (there is ikhtilaf on this point).",
      },
    ],
    note: "In Hanafi: permissible to give all in charity, but recommended to eat from one's own Udhiyyah.",
  },
];

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative hero-gradient">
        <div className="absolute inset-0 bg-arabesque opacity-[0.07] pointer-events-none" />
        <div className="absolute top-8 right-8 w-40 h-40 rounded-full bg-white/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 pt-8 pb-12">
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
              <Icons.Mosque className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="font-arabic text-base text-white/75 block">الأضحية — دليل كامل</span>
              <h1 className="text-3xl font-heading font-bold text-white">Udhiyyah Complete Guide</h1>
            </div>
          </div>
          <p className="text-white/75 max-w-xl leading-relaxed text-sm">
            A step-by-step reference covering eligibility, animal conditions, correct timing, and meat distribution — based on the four major madhabs.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="max-w-3xl mx-auto px-6 pt-10 pb-20 space-y-5">
        {steps.map(({ step, icon: Icon, title, bg, iconBg, iconColor, content, note }) => (
          <div
            key={step}
            className={`clay-card bg-gradient-to-br ${bg} p-7`}
          >
            <div className="flex items-start gap-4 mb-5">
              <div className="flex-shrink-0 flex flex-col items-center gap-1.5">
                <div
                  className={`w-11 h-11 rounded-[0.875rem] ${iconBg} flex items-center justify-center`}
                  style={{ boxShadow: "0 3px 10px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)" }}
                >
                  <Icon className={`w-5 h-5 ${iconColor}`} />
                </div>
                <span className="text-xs font-bold text-muted-foreground/50 tracking-widest">{step}</span>
              </div>
              <h2 className="text-lg font-heading font-bold text-foreground pt-1">{title}</h2>
            </div>

            <div className="space-y-4 ml-0 sm:ml-15">
              {content.map(({ heading, body }) => (
                <div key={heading}>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1.5">{heading}</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">{body}</p>
                </div>
              ))}

              {note && (
                <div
                  className="flex items-start gap-2 rounded-xl px-4 py-3 mt-2"
                  style={{
                    background: "rgba(255,255,255,0.6)",
                    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.04)",
                  }}
                >
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground leading-relaxed">{note}</p>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Additional Topics */}
        <div className="clay-card p-7">
          <h2 className="text-lg font-heading font-bold text-foreground mb-5">Additional Topics</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: "Udhiyyah for the Deceased", desc: "Permissible and rewarding in all four madhabs. If the deceased made a bequest, it becomes obligatory from the estate." },
              { title: "Online / Virtual Udhiyyah", desc: "Permissible if the organization acts as wakil, slaughters within the correct time window, and the animal meets all valid conditions." },
              { title: "Combining Aqiqah + Udhiyyah", desc: "Hanafi & Shafi'i: generally not permissible in one animal. Some Maliki / Hanbali scholars permit it." },
              { title: "Skin, Bones & By-products", desc: "May not be sold. May be kept for personal use or given in charity. Butcher must be paid in cash only." },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="rounded-[1rem] p-4"
                style={{
                  background: "linear-gradient(135deg, #ffffff, #f7f3eb)",
                  boxShadow: "0 3px 12px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.9)",
                }}
              >
                <p className="font-semibold text-foreground text-sm mb-1.5">{title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="rounded-[1.5rem] p-7 text-center"
          style={{
            background: "linear-gradient(135deg, #1D9E75, #147556)",
            boxShadow: "0 12px 40px rgba(29,158,117,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
          }}
        >
          <div className="font-arabic text-2xl text-white/80 mb-3">الحمد لله</div>
          <p className="text-white/80 text-sm mb-5 max-w-sm mx-auto">
            Have specific questions? Our AI assistant can answer based on your madhab preference.
          </p>
          <Link
            href="/chat"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-3.5 rounded-full transition-all duration-200 hover:bg-cream hover:-translate-y-0.5 text-sm"
            style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.9)" }}
          >
            <MessageCircle className="w-4 h-4" />
            Ask the AI Assistant
          </Link>
        </div>
      </div>
    </div>
  );
}
