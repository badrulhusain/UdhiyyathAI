import Link from "next/link";
import { ArrowLeft, BookOpen, Globe, Shield, MessageCircle, ScrollText, CheckCircle2 } from "lucide-react";
import { Icons } from "@/components/ui/Icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Udhiyyah AI",
  description: "Learn about Udhiyyah AI, its purpose, scope, and disclaimers.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative hero-gradient">
        <div className="absolute inset-0 bg-arabesque opacity-[0.07] pointer-events-none" />
        <div className="absolute top-8 right-8 w-32 h-32 rounded-full bg-white/5 blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 pt-8 pb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-10 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-16 h-16 rounded-[1.25rem] flex items-center justify-center"
              style={{
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.3)",
              }}
            >
              <Icons.Mosque className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="font-arabic text-lg text-white/80 block">بسم الله الرحمن الرحيم</span>
              <h1 className="text-3xl font-heading font-bold text-white mt-1">About Udhiyyah AI</h1>
            </div>
          </div>
          <p className="text-white/75 max-w-xl leading-relaxed">
            Your dedicated AI guide for Udhiyyah (Qurbani) rulings, built to help the global ummah access scholarly knowledge.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pt-10 pb-20 space-y-5">

        {/* What is it */}
        <div className="clay-card p-7">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center"
              style={{ boxShadow: "0 2px 8px rgba(29,158,117,0.12), inset 0 1px 0 rgba(255,255,255,0.8)" }}>
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-lg font-heading font-bold text-foreground">What is Udhiyyah AI?</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-3 text-sm">
            Udhiyyah AI is an educational chatbot specializing exclusively in{" "}
            <strong className="text-foreground">Udhiyyah (Qurbani)</strong> — the Islamic sacrifice performed on Eid al-Adha. It was built to help Muslims quickly access reliable information about the rulings of Udhiyyah without needing to search through lengthy books.
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm">
            The chatbot draws on classical Islamic scholarship and presents rulings from the four major Sunni madhabs:{" "}
            <strong className="text-foreground">Hanafi, Maliki, Shafi&apos;i, and Hanbali</strong>.
          </p>
        </div>

        {/* Disclaimer */}
        <div
          className="rounded-[1.5rem] p-7"
          style={{
            background: "linear-gradient(135deg, #fffbeb, #fef3c7)",
            boxShadow: "0 8px 32px rgba(212,168,83,0.18), 0 2px 8px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.8)",
          }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center">
              <Shield className="w-5 h-5 text-gold-dark" />
            </div>
            <h2 className="text-lg font-heading font-bold text-amber-900">Important Disclaimer</h2>
          </div>
          <p className="text-amber-800 leading-relaxed mb-3 text-sm">
            Udhiyyah AI is an <strong>educational tool only</strong>. It does not issue official fatwas (binding religious verdicts). The information provided is based on classical scholarly texts for general understanding.
          </p>
          <p className="text-amber-800 leading-relaxed text-sm">
            For official religious rulings specific to your situation, please consult a qualified Islamic scholar or mufti in your local community.
          </p>
        </div>

        {/* Languages */}
        <div className="clay-card p-7">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-sage/20 flex items-center justify-center"
              style={{ boxShadow: "0 2px 8px rgba(141,181,160,0.2), inset 0 1px 0 rgba(255,255,255,0.8)" }}>
              <Globe className="w-5 h-5 text-sage" />
            </div>
            <h2 className="text-lg font-heading font-bold text-foreground">Supported Languages</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { lang: "English", note: "Default language", flag: "🇬🇧" },
              { lang: "Arabic (عربي)", note: "Full Islamic terminology", flag: "🌙" },
              { lang: "Malayalam (മലയാളം)", note: "Regional support", flag: "🌿" },
            ].map(({ lang, note, flag }) => (
              <div
                key={lang}
                className="rounded-[1rem] p-4 bg-gradient-to-br from-background to-sand/40"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)" }}
              >
                <span className="text-2xl block mb-2">{flag}</span>
                <p className="font-semibold text-foreground text-sm">{lang}</p>
                <p className="text-xs text-muted-foreground mt-1">{note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Topics */}
        <div className="clay-card p-7">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <ScrollText className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-lg font-heading font-bold text-foreground">Topics Covered</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-2">
            {[
              "Who is obligated to perform Udhiyyah",
              "Valid and invalid animals for sacrifice",
              "Age and health conditions of the animal",
              "Correct time window (days of Eid al-Adha)",
              "Sharing a cow or camel between 7 people",
              "Distribution of meat (thirds rule)",
              "Udhiyyah on behalf of deceased relatives",
              "Online / virtual Udhiyyah services",
              "Hair and nail cutting in Dhul Hijjah",
              "Financial eligibility (nisab threshold)",
              "Combining Aqiqah with Udhiyyah",
              "Using the skin, bones, and by-products",
            ].map((topic) => (
              <div key={topic} className="flex items-start gap-2.5 text-sm text-muted-foreground py-1">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link
            href="/chat"
            className="clay-btn bg-primary text-white px-10 py-4 text-base inline-flex"
          >
            <MessageCircle className="w-5 h-5" />
            Start Chatting
          </Link>
        </div>
      </div>
    </div>
  );
}
