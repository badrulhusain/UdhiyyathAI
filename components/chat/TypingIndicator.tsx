"use client";

function BotAvatar() {
  return (
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-sm">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2C8 2 5 5 5 8c0 1.5.5 2.8 1.3 3.8L5 15h14l-1.3-3.2C18.5 10.8 19 9.5 19 8c0-3-3-6-7-6z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15v4h6v-4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 19h10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2" />
      </svg>
    </div>
  );
}

export function TypingIndicator() {
  return (
    <div className="flex gap-3 w-full flex-row">
      <BotAvatar />
      <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
        <div className="flex items-center gap-1 h-5">
          <span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
          <span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
          <span className="w-2 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </div>
  );
}
