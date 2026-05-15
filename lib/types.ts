export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface ChatSession {
  id: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ChatRequest {
  messages: Array<{ role: string; content: string }>;
}

export interface ChatResponse {
  role: "assistant";
  content: string;
}
