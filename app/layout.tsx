import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Amiri } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Udhiyyah AI — Islamic Qurbani Guide",
  description:
    "Get instant, scholar-informed answers on Udhiyyah (Qurbani) rulings based on the four major madhabs.",
  keywords: ["Udhiyyah", "Qurbani", "Islamic fatwa", "Eid al-Adha", "Islamic rulings"],
  openGraph: {
    title: "Udhiyyah AI — Your Qurbani Guide",
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
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} ${amiri.variable}`}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
