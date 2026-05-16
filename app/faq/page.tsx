"use client";

import Link from "next/link";
import { ArrowLeft, MessageCircle, ChevronDown } from "lucide-react";
import { Icons } from "@/components/ui/Icons";
import { useState } from "react";

const faqs = [
  {
    category: "Eligibility",
    color: "primary",
    badge: "bg-primary/10 text-primary",
    questions: [
      {
        q: "Is Udhiyyah obligatory on me?",
        a: "It depends on your madhab. In the Hanafi school, it is wajib (obligatory) for every adult, sane, resident Muslim who possesses nisab wealth during the days of Eid. In the Shafi'i, Maliki (minority view), and Hanbali schools, it is a strongly emphasized sunnah — highly encouraged but not sinful to miss.",
      },
      {
        q: "Am I exempt if I'm a traveler?",
        a: "In the Hanafi school, a traveler (one who has journeyed 77km or more) is exempt from the wajib ruling. The other madhabs still encourage travelers to perform Udhiyyah but do not consider it obligatory.",
      },
      {
        q: "Does one animal cover my whole family?",
        a: "In the Shafi'i, Maliki, and Hanbali madhabs, one sheep or goat is sufficient for a person and their entire household. In the Hanafi school, one animal covers only one person — each qualifying household member must sacrifice separately.",
      },
      {
        q: "I'm in financial hardship — must I still do it?",
        a: "No. Udhiyyah is only required when you possess nisab wealth above your basic needs and debts. If debts exceed your assets, you are not required and are not sinful. For complex situations, consult a local scholar.",
      },
    ],
  },
  {
    category: "Animals",
    color: "gold",
    badge: "bg-gold/10 text-gold-dark",
    questions: [
      {
        q: "Which animals are valid for Udhiyyah?",
        a: "Sheep (including ram), goat, cow (including buffalo), and camel. Poultry, fish, wild animals, and non-halal animals are not valid.",
      },
      {
        q: "What is the minimum age for each animal?",
        a: "Sheep: 1 year (exception: a 6-month-old that appears 1 year old, the jadha', is valid in Hanafi and Hanbali). Goat: 1 year. Cow/Buffalo: 2 years. Camel: 5 years.",
      },
      {
        q: "Can 7 people share one cow?",
        a: "Yes. One cow or camel can be shared by up to 7 people, with each share counting as one full Udhiyyah. All sharers must have a valid ibadah intention — sharing for a general feast does not count.",
      },
      {
        q: "My goat has a small piece of its ear missing — is it still valid?",
        a: "A small portion of ear or tail missing is valid but slightly disliked (makruh). The general rule: defects that significantly reduce meat value make the animal invalid. Minor defects are valid but disliked.",
      },
      {
        q: "Is a castrated animal or one without horns valid?",
        a: "Yes, and some scholars consider these animals preferred since they tend to have more meat.",
      },
    ],
  },
  {
    category: "Timing",
    color: "primary",
    badge: "bg-primary/10 text-primary",
    questions: [
      {
        q: "When can I slaughter?",
        a: "After the Eid prayer on 10 Dhul Hijjah. Slaughtering before the Eid prayer does not count as Udhiyyah. In Hanafi: after the Eid prayer of the nearest city.",
      },
      {
        q: "What is the last day I can slaughter?",
        a: "The majority of scholars (Hanafi, Maliki, Shafi'i): until sunset of 12 Dhul Hijjah. The Hanbali school allows until sunset of 13 Dhul Hijjah. The most virtuous day is 10 Dhul Hijjah (Eid day).",
      },
      {
        q: "Can I slaughter at night?",
        a: "It is permissible according to most scholars, but disliked (makruh) by some because nighttime slaughter makes it harder to ensure the cut is performed correctly.",
      },
      {
        q: "I missed the days entirely — what do I do?",
        a: "In the Hanafi school: if the animal was designated, give it in charity; if not designated, give its equivalent value in charity. In other madhabs: it was a missed sunnah; giving sadaqah (voluntary charity) is recommended.",
      },
    ],
  },
  {
    category: "Distribution & Rulings",
    color: "sage",
    badge: "bg-sage/20 text-accent",
    questions: [
      {
        q: "How should I distribute the meat?",
        a: "The recommended division (mustahabb) is: ⅓ for yourself and family, ⅓ for relatives and friends, ⅓ for the poor and needy. This is recommended, not obligatory, in most madhabs.",
      },
      {
        q: "Can I sell the meat or skin?",
        a: "No. You cannot sell the meat, skin, wool, fat, or any part of the sacrificed animal for money. These may only be kept for personal use or given as gifts/charity. The butcher must be paid separately in cash.",
      },
      {
        q: "Can I cut my hair or nails before Eid?",
        a: "From 1 Dhul Hijjah until after your sacrifice, it is recommended to avoid cutting hair, nails, or skin. Ruling varies: Hanbali (haram), Maliki (strongly makruh), Shafi'i (makruh), Hanafi (sunnah to avoid, not prohibited).",
      },
      {
        q: "Can I perform Udhiyyah for my deceased father?",
        a: "Yes — performing Udhiyyah on behalf of a deceased person is permissible and rewarding in all four madhabs, and the deceased receives the reward (thawab). If the deceased made a bequest for it, it becomes obligatory from the estate.",
      },
      {
        q: "Is online / virtual Udhiyyah valid?",
        a: "Yes, according to the majority of contemporary scholars — as long as the organization acts as your agent (wakil), slaughters within the correct time window, uses a valid animal, and is reputable and trustworthy. For country-specific certifications, consult a local scholar.",
      },
      {
        q: "Can I combine Aqiqah and Udhiyyah in one animal?",
        a: "Hanafi and Shafi'i: generally not permissible — separate animals or separate shares are required. Some Maliki and Hanbali scholars permit one animal to serve both intentions. Follow your madhab or consult a local scholar.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-[1rem] overflow-hidden transition-all duration-300"
      style={{
        background: open
          ? "linear-gradient(135deg, #ffffff, #f7f3eb)"
          : "rgba(255,255,255,0.5)",
        boxShadow: open
          ? "0 4px 20px rgba(29,158,117,0.1), inset 0 1px 0 rgba(255,255,255,0.9)"
          : "0 2px 8px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,0.8)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
      >
        <span className="text-sm font-semibold text-foreground leading-snug">{q}</span>
        <ChevronDown
          className={`w-4 h-4 text-primary flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5">
          <div className="h-px bg-border/40 mb-4" />
          <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative hero-gradient pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-arabesque opacity-[0.07] pointer-events-none" />
        <div className="absolute top-12 right-6 w-32 h-32 rounded-full bg-white/5 blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 pt-8">
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
              <span className="font-arabic text-base text-white/75 block">الأسئلة الشائعة</span>
              <h1 className="text-3xl font-heading font-bold text-white">Frequently Asked Questions</h1>
            </div>
          </div>
          <p className="text-white/75 max-w-xl leading-relaxed text-sm">
            Common questions about Udhiyyah (Qurbani) answered based on classical Islamic scholarship.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 -mt-12 pb-20 space-y-5">
        {faqs.map(({ category, badge, questions }) => (
          <div key={category} className="clay-card p-7">
            <div className="flex items-center gap-3 mb-5">
              <span className={`clay-badge text-xs font-bold ${badge}`}>{category}</span>
            </div>
            <div className="space-y-2.5">
              {questions.map(({ q, a }) => (
                <FAQItem key={q} q={q} a={a} />
              ))}
            </div>
          </div>
        ))}

        {/* Still have questions */}
        <div
          className="rounded-[1.5rem] p-7 text-center"
          style={{
            background: "linear-gradient(135deg, #1D9E75, #147556)",
            boxShadow: "0 12px 40px rgba(29,158,117,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
          }}
        >
          <span className="font-arabic text-2xl text-white/80 block mb-3">وَاللَّهُ أَعْلَمُ</span>
          <p className="text-white font-heading font-bold text-lg mb-2">Still have questions?</p>
          <p className="text-white/75 text-sm mb-6 max-w-sm mx-auto">
            Our AI assistant can answer in detail based on your specific madhab preference.
          </p>
          <Link
            href="/chat"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-3.5 rounded-full text-sm transition-all duration-200 hover:bg-cream hover:-translate-y-0.5"
            style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.9)" }}
          >
            <MessageCircle className="w-4 h-4" />
            Ask Udhiyyah AI
          </Link>
        </div>
      </div>
    </div>
  );
}
