# Mufti AI — Udhiyyah Fatwa Chatbot

An AI-powered Islamic Q&A chatbot focused exclusively on Udhiyyah (Qurbani/Eid al-Adha sacrifice) rulings.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **AI**: Anthropic Claude API (`claude-sonnet-4-5`)
- **Deployment**: Vercel

## Features

- Answers Udhiyyah questions across all 4 Sunni madhabs (Hanafi, Maliki, Shafi'i, Hanbali)
- Supports English, Arabic, and Malayalam
- Suggestion chips for common questions
- Markdown-rendered responses
- Mobile-first responsive design

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Anthropic API key:

```
ANTHROPIC_API_KEY=sk-ant-your-key-here
```

Get your API key at https://console.anthropic.com

### 3. Run the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Project Structure

```
mufti-ai/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Landing page
│   ├── chat/page.tsx           # Chat interface
│   ├── about/page.tsx          # About page
│   └── api/chat/route.ts       # Claude API route
├── components/
│   ├── chat/                   # Chat components
│   └── layout/                 # Header, Footer
├── lib/
│   ├── system-prompt.ts        # Full chatbot system prompt
│   ├── anthropic.ts            # Anthropic client
│   ├── types.ts                # TypeScript types
│   └── constants.ts            # App constants
└── hooks/
    ├── useChat.ts              # Chat state management
    └── useAutoScroll.ts        # Auto-scroll
```

## Deploy to Vercel

1. Push to GitHub
2. Import repo at https://vercel.com
3. Add ANTHROPIC_API_KEY in Vercel Environment Variables
4. Deploy

## Disclaimer

Mufti AI is an educational tool only. For binding Islamic rulings, consult a qualified local scholar.
