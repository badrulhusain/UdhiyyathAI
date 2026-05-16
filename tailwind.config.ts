import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F7F3EB",
        foreground: "#1A1A1A",
        border: "#E5E7EB",
        input: "#E5E7EB",
        ring: "#1D9E75",
        surface: "#FFFDF7",
        "neutral-bg": "#F7F3EB",
        primary: {
          DEFAULT: "#1D9E75",
          dark: "#147556",
          light: "#E1F5EE",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#0F6E56",
          foreground: "#FFFFFF",
        },
        gold: {
          DEFAULT: "#D4A853",
          light: "#FBF0D9",
          dark: "#A87E32",
        },
        sand: "#F5EDD8",
        sage: "#8DB5A0",
        cream: "#FFFDF7",
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1A1A1A",
        },
        muted: {
          DEFAULT: "#F3F4F6",
          foreground: "#6B7280",
        },
        destructive: {
          DEFAULT: "#DC2626",
          foreground: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        heading: ["var(--font-plus-jakarta)", "Plus Jakarta Sans", "-apple-system", "sans-serif"],
        arabic: ["var(--font-amiri)", "Amiri", "Georgia", "serif"],
      },
      borderRadius: {
        lg: "0.625rem",
        md: "0.5rem",
        sm: "0.375rem",
        clay: "1.5rem",
        "clay-lg": "2rem",
        "clay-xl": "2.5rem",
      },
      boxShadow: {
        clay: "0 8px 32px rgba(29,158,117,0.12), 0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)",
        "clay-lg": "0 16px 48px rgba(29,158,117,0.18), 0 4px 16px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
        "clay-sm": "0 4px 16px rgba(29,158,117,0.1), 0 1px 4px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.6)",
        "clay-btn": "0 6px 20px rgba(29,158,117,0.45), 0 2px 6px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.25)",
        "clay-gold": "0 8px 32px rgba(212,168,83,0.3), 0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.8)",
        "clay-inset": "inset 0 2px 10px rgba(0,0,0,0.08), inset 0 1px 3px rgba(0,0,0,0.04)",
        "clay-white": "0 8px 32px rgba(255,255,255,0.25), 0 2px 8px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.4)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.25s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
        "bounce-dots": "bounceDots 1.4s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        bounceDots: {
          "0%, 80%, 100%": { transform: "scale(0.8)", opacity: "0.5" },
          "40%": { transform: "scale(1.2)", opacity: "1" },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
