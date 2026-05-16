import { DISCLAIMER } from "@/lib/constants";

export function Footer() {
  return (
    <footer
      className="border-t border-border/40"
      style={{ background: "linear-gradient(to bottom, #fffdf7, #f7f3eb)" }}
    >
      <div className="max-w-4xl mx-auto px-6 py-4 text-center">
        <p className="text-[11px] text-muted-foreground/70 leading-relaxed">{DISCLAIMER}</p>
      </div>
    </footer>
  );
}
