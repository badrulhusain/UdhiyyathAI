import Link from "next/link";
import { MessageCircle, BookOpen, Shield, Globe } from "lucide-react";
import { DISCLAIMER } from "@/lib/constants";
import { Icons } from "@/components/ui/Icons";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-bg flex flex-col relative overflow-hidden">
      {/* Geometric pattern background */}
      <div className="absolute inset-0 bg-primary bg-arabesque opacity-10 mix-blend-overlay pointer-events-none" />
      
      {/* Main Header Area */}
      <div className="relative bg-primary w-full pb-16 rounded-b-[3rem] shadow-xl">
        <div className="absolute inset-0 bg-arabesque opacity-10 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
          {/* Subtle Bismillah Badge */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-arabic text-lg mb-8 shadow-sm">
            بسم الله الرحمن الرحيم
          </div>

          {/* Logo / Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-md mb-8 shadow-2xl border border-white/20">
            <Icons.Mosque className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-bold text-white mb-4 tracking-tight drop-shadow-md">
            Udhiyyah AI
          </h1>
          <p className="text-xl text-surface/90 mb-10 max-w-xl mx-auto font-medium leading-relaxed">
            Your Islamic AI assistant guiding you through Udhiyyah (Qurbani) rulings, animal selection, timing, and distribution.
          </p>

          <Link
            href="/chat"
            className="inline-flex items-center gap-3 bg-surface hover:bg-white text-accent font-bold px-10 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            Start Assisting
          </Link>
        </div>
      </div>

      {/* Features section */}
      <div className="relative max-w-4xl mx-auto px-6 py-16 w-full flex-grow z-10 -mt-8">
        
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-surface rounded-2xl flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-foreground mb-3 text-lg">
              Scholarly Guidance
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Authentic rulings based on the four major madhabs, clearly referenced for your peace of mind.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-surface rounded-2xl flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-foreground mb-3 text-lg">
              Comprehensive
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Covers everything from selecting the right animal to the correct time of slaughter and meat distribution.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-surface rounded-2xl flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-foreground mb-3 text-lg">
              Multilingual
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Available in English, Arabic, and Urdu to serve the global Muslim ummah.
            </p>
          </div>
        </div>

        {/* Sample questions */}
        <div className="bg-white rounded-3xl shadow-sm border border-border p-8 mb-12">
          <h3 className="font-heading font-bold text-foreground mb-6 text-xl">
            Ask about...
          </h3>
          <div className="flex flex-wrap gap-3">
            {["Who must perform it?", "Which animals qualify?", "How to distribute meat?", "When is the time for slaughter?", "What are the sunnahs?"].map((chip) => (
              <span
                key={chip}
                className="text-sm font-medium px-4 py-2 rounded-full bg-surface text-accent border border-primary/20 hover:bg-primary hover:text-white transition-colors cursor-default"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative mt-auto border-t border-border bg-white z-10">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center">
          <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
            {DISCLAIMER || "This AI tool provides general educational guidance based on classical Islamic texts. For complex personal fatwas, please consult a qualified local scholar."}
          </p>
          <div className="flex items-center justify-center gap-8 text-sm font-medium text-muted-foreground">
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/chat" className="hover:text-primary transition-colors">
              Chat
            </Link>
          </div>
          <p className="text-xs text-muted-foreground/60 mt-6">
            © {new Date().getFullYear()} Udhiyyah AI. Guided by knowledge.
          </p>
        </div>
      </footer>
    </div>
  );
}
