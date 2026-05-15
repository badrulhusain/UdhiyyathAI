import { ChatWindow } from "@/components/chat/ChatWindow";
import { Sidebar } from "@/components/chat/Sidebar";
import { Header } from "@/components/layout/Header";
// import { Sidebar } from "@/components/chat/Sidebar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat — Udhiyyah AI",
  description: "Ask your Udhiyyah questions and get instant Islamic guidance.",
};

export default function ChatPage() {
  return (
    <div className="flex flex-col h-dvh bg-neutral-bg font-sans">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar for desktop, collapsible on mobile */}
        <div className="hidden md:block w-72 border-r border-border bg-white flex-shrink-0">
          <Sidebar />
        </div>
        <main className="flex-1 overflow-hidden flex flex-col relative">
          <div className="absolute inset-0 bg-arabesque opacity-[0.03] mix-blend-multiply pointer-events-none" />
          <ChatWindow />
        </main>
      </div>
    </div>
  );
}
