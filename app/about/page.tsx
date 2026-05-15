import Link from "next/link";
import { ArrowLeft, BookOpen, Globe, Shield, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Mufti AI",
  description: "Learn about Mufti AI, its purpose, scope, and disclaimers.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-10">
        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="bg-primary rounded-2xl p-8 text-white mb-8">
          <h1 className="text-3xl font-heading font-bold mb-2">About Mufti AI</h1>
          <p className="text-white/80 font-arabic text-lg mb-1">
            بسم الله الرحمن الرحيم
          </p>
          <p className="text-white/90">
            Your dedicated AI guide for Udhiyyah (Qurbani) rulings
          </p>
        </div>

        {/* What is Mufti AI */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-primary-light rounded-lg flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-primary" />
            </div>
            <h2 className="text-lg font-heading font-semibold text-gray-900">
              What is Mufti AI?
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-3">
            Mufti AI is an AI-powered educational chatbot specializing exclusively in{" "}
            <strong>Udhiyyah (Qurbani)</strong> — the Islamic sacrifice performed on Eid
            al-Adha. It was built to help Muslims quickly access reliable information about
            the rulings of Udhiyyah without needing to search through lengthy books or wait
            for scholar availability.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The chatbot draws on classical Islamic scholarship and presents rulings from the
            four major Sunni madhabs: <strong>Hanafi, Maliki, Shafi&apos;i, and Hanbali</strong>.
          </p>
        </section>

        {/* Disclaimer */}
        <section className="bg-amber-50 rounded-2xl border border-amber-200 p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-amber-700" />
            </div>
            <h2 className="text-lg font-heading font-semibold text-amber-900">
              Important Disclaimer
            </h2>
          </div>
          <p className="text-amber-800 leading-relaxed mb-3">
            Mufti AI is an <strong>educational tool only</strong>. It does not issue
            official fatwas (binding religious verdicts). The information provided is
            based on classical scholarly texts and is intended to help you understand
            general rulings.
          </p>
          <p className="text-amber-800 leading-relaxed">
            For official religious rulings specific to your situation, please consult a
            qualified Islamic scholar or mufti in your local community.
          </p>
        </section>

        {/* Languages */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-primary-light rounded-lg flex items-center justify-center">
              <Globe className="w-4 h-4 text-primary" />
            </div>
            <h2 className="text-lg font-heading font-semibold text-gray-900">
              Supported Languages
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { lang: "English", note: "Default language" },
              { lang: "Arabic (عربي)", note: "Full support with Islamic terminology" },
              { lang: "Malayalam (മലയാളം)", note: "Regional support" },
            ].map(({ lang, note }) => (
              <div key={lang} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-900 text-sm">{lang}</p>
                <p className="text-xs text-gray-500 mt-1">{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Topics covered */}
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
          <h2 className="text-lg font-heading font-semibold text-gray-900 mb-4">
            Topics Covered
          </h2>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              "Who is obligated or recommended to perform Udhiyyah",
              "Valid and invalid animals for sacrifice",
              "Age and health conditions of the animal",
              "Correct time window (days of Eid al-Adha)",
              "Sharing a cow or camel between 7 people",
              "Distribution of meat (thirds rule)",
              "Udhiyyah on behalf of deceased relatives",
              "Online / virtual Udhiyyah services",
              "Hair and nail cutting restrictions in Dhul Hijjah",
              "Financial eligibility (nisab threshold)",
              "Combining Aqiqah with Udhiyyah",
              "Using the skin, bones, and by-products",
            ].map((topic) => (
              <li key={topic} className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/chat"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-2xl shadow-md transition-all duration-200 hover:scale-105 active:scale-100"
          >
            <MessageCircle className="w-5 h-5" />
            Start Chatting
          </Link>
        </div>
      </div>
    </div>
  );
}
