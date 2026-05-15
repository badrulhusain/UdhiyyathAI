import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mufti AI — Udhiyyah Fatwa Chatbot",
  description:
    "Get instant, scholar-informed answers on Udhiyyah (Qurbani) rulings based on the four major madhabs.",
  keywords: ["Udhiyyah", "Qurbani", "Islamic fatwa", "Eid al-Adha", "Islamic rulings"],
  openGraph: {
    title: "Mufti AI — Your Udhiyyah Guide",
    description:
      "AI-powered chatbot for Udhiyyah (Qurbani) rulings — Hanafi, Maliki, Shafi'i, Hanbali.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-background text-gray-900">
        {children}
      </body>
    </html>
  );
}
