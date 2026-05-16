import { ChatWindow } from "@/components/chat/ChatWindow";
import { Header } from "@/components/layout/Header";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Chat — Udhiyyah AI",
  description: "Ask your Udhiyyah questions and get instant Islamic guidance.",
};

export default function ChatPage() {
  return (
    <div className="flex flex-col h-dvh font-sans" style={{ background: "linear-gradient(180deg, #f7f3eb 0%, #fffdf7 100%)" }}>
      <Header />
      <main className="flex-1 overflow-hidden flex flex-col relative">
        <div className="absolute inset-0 bg-arabesque opacity-[0.025] pointer-events-none" />
        <ChatWindow />
      </main>
    </div>
  );
}
