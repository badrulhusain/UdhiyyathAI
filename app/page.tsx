import Link from "next/link";
import { MessageCircle, BookOpen, Shield, Globe, ChevronRight, HelpCircle, ScrollText } from "lucide-react";
import { Icons } from "@/components/ui/Icons";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col overflow-hidden">

      {/* ── Hero Header ── */}
      <div className="relative hero-gradient pb-32 overflow-hidden">
        {/* Arabesque watermark */}
        <div className="absolute inset-0 bg-arabesque opacity-[0.07] pointer-events-none" />
        {/* Floating decorative orbs */}
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-white/5 blur-2xl pointer-events-none" />
        <div className="absolute bottom-16 left-6 w-28 h-28 rounded-full bg-gold/10 blur-xl pointer-events-none" />

        {/* Nav bar */}
        <nav className="relative z-10 flex items-center justify-between max-w-4xl mx-auto px-6 pt-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
              <Icons.Crescent className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-heading font-bold text-sm">Udhiyyah AI</span>
          </div>
          <div className="flex items-center gap-1">
            {[
              { href: "/guide", label: "Guide" },
              { href: "/madhabs", label: "Madhabs" },
              { href: "/faq", label: "FAQ" },
              { href: "/about", label: "About" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-3 py-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 text-sm font-medium transition-all duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Hero content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-14 pb-6 text-center">
          {/* Bismillah badge */}
          <div className="inline-block mb-8 animate-fade-in-up">
            <span
              className="font-arabic text-xl text-white/90 px-6 py-2 rounded-full"
              style={{
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}
            >
              بسم الله الرحمن الرحيم
            </span>
          </div>

          {/* Floating mosque icon */}
          <div className="flex justify-center mb-8 animate-float">
            <div
              className="w-24 h-24 rounded-[2rem] flex items-center justify-center"
              style={{
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.3)",
              }}
            >
              <Icons.Mosque className="w-12 h-12 text-white" />
            </div>
          </div>

          <h1 className="text-5xl sm:text-7xl font-heading font-bold text-white mb-4 tracking-tight leading-none">
            Udhiyyah AI
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-lg mx-auto leading-relaxed">
            Your Islamic AI assistant for Qurbani rulings — animal selection, timing, and distribution across all four madhabs.
          </p>

          {/* CTA */}
          <Link
            href="/chat"
            className="clay-btn bg-white text-primary px-10 py-4 text-base hover:bg-cream"
            style={{
              boxShadow: "0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.9)",
            }}
          >
            <MessageCircle className="w-5 h-5" />
            Start Asking
          </Link>
        </div>
      </div>

      {/* ── Feature Cards ── */}
      <div className="relative max-w-4xl mx-auto px-6 w-full -mt-20 z-10">
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            {
              icon: BookOpen,
              title: "Scholarly Guidance",
              desc: "Authentic rulings from the four major madhabs — Hanafi, Maliki, Shafi'i, Hanbali.",
              color: "text-primary",
              bg: "bg-primary/10",
            },
            {
              icon: Shield,
              title: "Comprehensive",
              desc: "Covers eligibility, animal selection, slaughter timing, meat distribution and more.",
              color: "text-gold",
              bg: "bg-gold/10",
            },
            {
              icon: Globe,
              title: "Multilingual",
              desc: "Available in English, Arabic, and Urdu to serve the global Muslim ummah.",
              color: "text-sage",
              bg: "bg-sage/20",
            },
          ].map(({ icon: Icon, title, desc, color, bg }) => (
            <div
              key={title}
              className="clay-card p-7 hover:-translate-y-1 transition-all duration-300 hover:shadow-clay-lg"
            >
              <div className={`w-12 h-12 ${bg} rounded-2xl flex items-center justify-center mb-5`}
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)" }}
              >
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2 text-base">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Quick Links ── */}
      <div className="relative max-w-4xl mx-auto px-6 w-full mt-10 z-10">
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            {
              href: "/guide",
              icon: ScrollText,
              label: "Udhiyyah Guide",
              sub: "Step-by-step complete guide",
              gradient: "from-primary/5 to-primary/10",
            },
            {
              href: "/madhabs",
              icon: BookOpen,
              label: "Four Madhabs",
              sub: "Comparative rulings",
              gradient: "from-gold/5 to-gold/10",
            },
            {
              href: "/faq",
              icon: HelpCircle,
              label: "FAQ",
              sub: "Common questions answered",
              gradient: "from-sage/10 to-sage/20",
            },
          ].map(({ href, icon: Icon, label, sub, gradient }) => (
            <Link
              key={href}
              href={href}
              className={`clay-card bg-gradient-to-br ${gradient} p-5 flex items-center gap-4 group hover:-translate-y-1 transition-all duration-300 hover:shadow-clay-lg`}
            >
              <div className="w-10 h-10 rounded-xl bg-white/60 flex items-center justify-center flex-shrink-0"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)" }}
              >
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-heading font-bold text-foreground text-sm">{label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
            </Link>
          ))}
        </div>
      </div>

      {/* ── Sample Questions ── */}
      <div className="relative max-w-4xl mx-auto px-6 w-full mt-10 mb-16 z-10">
        <div className="clay-card p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
              <Icons.Crescent className="w-4 h-4 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-foreground text-lg">Ask about...</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "Who must perform Udhiyyah?",
              "Which animals qualify?",
              "How to distribute meat?",
              "When is the time for slaughter?",
              "Can 7 people share a cow?",
              "Udhiyyah for the deceased?",
            ].map((chip) => (
              <Link
                key={chip}
                href={`/chat`}
                className="clay-pill bg-gradient-to-br from-primary/5 to-primary/10 text-primary border-0 font-medium text-sm"
              >
                {chip}
              </Link>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-border/50">
            <Link
              href="/chat"
              className="clay-btn bg-primary text-white px-8 py-3.5 text-sm w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-4 h-4" />
              Open Chat Assistant
            </Link>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="mt-auto border-t border-border/50 bg-white/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icons.Crescent className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="font-heading font-bold text-foreground text-sm">Udhiyyah AI</span>
            </div>
            <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
              {[
                { href: "/guide", label: "Guide" },
                { href: "/madhabs", label: "Madhabs" },
                { href: "/faq", label: "FAQ" },
                { href: "/about", label: "About" },
                { href: "/chat", label: "Chat" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="hover:text-primary transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <p className="text-xs text-muted-foreground/70 mt-5 text-center leading-relaxed max-w-2xl mx-auto">
            Educational tool only. For binding religious rulings, please consult a qualified Islamic scholar.
          </p>
          <p className="text-xs text-muted-foreground/50 mt-3 text-center">
            © {new Date().getFullYear()} Udhiyyah AI. Guided by knowledge.
          </p>
        </div>
      </footer>
    </div>
  );
}
