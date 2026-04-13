"use client";

import { useState, useEffect, useRef } from "react";
import { X, Send, GraduationCap, CreditCard, Headphones, Rocket } from "lucide-react";

const quickActions = [
  { label: "Features", icon: Rocket, message: "Tell me about Osmium's key features" },
  { label: "Pricing", icon: CreditCard, message: "What are the pricing plans?" },
  { label: "Exams", icon: GraduationCap, message: "Which exams does Osmium support?" },
  { label: "Support", icon: Headphones, message: "I need help with my account" },
];

const responses: Record<string, string> = {
  features:
    "Osmium offers AI-powered mock tests trained on thousands of past papers, a 24/7 AI study mentor, career path mapping, interactive learning with 5 modes per lesson, progress analytics, and WhatsApp integration — all in one platform! 🚀",
  pricing:
    "We have 3 plans:\n\n• **Free** — 2 mock tests/month, basic AI features\n• **Pro** — 15 mock tests/month, advanced AI career guidance\n• **Premium** — 30 mock tests/month, expert AI features + priority support\n\nVisit /pricing for full details!",
  exams:
    "Osmium supports a wide range of Indian competitive exams including JEE, NEET, CUET, UPSC, SSC, banking exams, and more. Our AI adapts to each exam's unique pattern and question style. 📚",
  support:
    "For account help, you can:\n\n• Email us at hello@navchetna.tech\n• Visit /contact to reach our team\n• Check /pricing for plan upgrades\n\nWe typically respond within a few hours!",
  default:
    "Thanks for reaching out! I can help with information about Osmium's features, pricing, supported exams, or account support. What would you like to know? 😊",
};

function getResponse(msg: string): string {
  const lower = msg.toLowerCase();
  if (lower.includes("feature") || lower.includes("what can") || lower.includes("what does"))
    return responses.features;
  if (lower.includes("pric") || lower.includes("cost") || lower.includes("plan") || lower.includes("free"))
    return responses.pricing;
  if (lower.includes("exam") || lower.includes("jee") || lower.includes("neet") || lower.includes("support"))
    return lower.includes("support") || lower.includes("account") || lower.includes("help with")
      ? responses.support
      : responses.exams;
  if (lower.includes("account") || lower.includes("help") || lower.includes("contact"))
    return responses.support;
  return responses.default;
}

interface Message {
  role: "user" | "bot";
  text: string;
}

export function HelpButton() {
  const [open, setOpen] = useState(false);
  const [view] = useState<"chat">("chat");
  const [visible, setVisible] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowH = window.innerHeight;
      const docH = document.documentElement.scrollHeight;
      const pastHero = scrollY > windowH * 0.8;
      const nearFooter = scrollY + windowH > docH - 300;
      setVisible(pastHero && !nearFooter);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (view === "chat" && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [view]);

  const handleClose = () => {
    setOpen(false);
    setMessages([]);
    setTyping(false);
    setInput("");
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const botMsg: Message = { role: "bot", text: getResponse(text) };
      setMessages((prev) => [...prev, botMsg]);
      setTyping(false);
    }, 800 + Math.random() * 600);
  };

  const handleQuickAction = (msg: string) => {
    sendMessage(msg);
  };

  if (!visible && !open) return null;

  return (
    <div
      className="pointer-events-none fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.5s, transform 0.5s",
      }}
    >
      {/* Panel */}
      <div
        className="pointer-events-auto overflow-hidden"
        style={{
          width: "22rem",
          maxHeight: open ? "32rem" : "0px",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0) scale(1)" : "translateY(8px) scale(0.96)",
          transition: "max-height 0.35s ease, opacity 0.25s ease, transform 0.3s ease",
          transformOrigin: "bottom right",
        }}
      >
        <div
          className="rounded-2xl overflow-hidden flex flex-col"
          style={{
            backgroundColor: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.06)",
          }}
        >
          {view === "chat" && (
            <>
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-black/[0.06] flex-none">
                <div className="flex items-center gap-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo.png" alt="Osmium" className="h-4 w-auto" />
                  <p className="type-xs font-semibold text-black">Osmium AI</p>
                </div>
                <button
                  onClick={handleClose}
                  className="size-7 rounded-full hover:bg-black/5 flex items-center justify-center transition-colors"
                >
                  <X className="size-3.5 text-warm-500" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-auto overflow-y-auto scrollbar-none px-4 py-4 flex flex-col gap-3" style={{ minHeight: "16rem", maxHeight: "20rem" }}>
                {messages.length === 0 && !typing && (
                  <div className="flex-auto flex flex-col items-center justify-center gap-3 text-center py-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/logo.png" alt="Osmium" className="h-8 w-auto opacity-30" />
                    <p className="type-xs text-warm-400">Ask me anything about Osmium</p>
                  </div>
                )}

                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    {msg.role === "bot" && (
                      <div className="flex gap-2 max-w-[85%]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/logo.png" alt="" className="h-3.5 w-auto flex-none mt-1.5" />
                        <div className="bg-[#f5f3f1] rounded-2xl rounded-tl-sm px-3.5 py-2.5">
                          <p className="type-xs text-black leading-relaxed whitespace-pre-line">{msg.text}</p>
                        </div>
                      </div>
                    )}
                    {msg.role === "user" && (
                      <div className="bg-black rounded-2xl rounded-br-sm px-3.5 py-2.5 max-w-[85%]">
                        <p className="type-xs text-white leading-relaxed">{msg.text}</p>
                      </div>
                    )}
                  </div>
                ))}

                {typing && (
                  <div className="flex gap-2 max-w-[85%]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/logo.png" alt="" className="h-3.5 w-auto flex-none mt-1.5" />
                    <div className="bg-[#f5f3f1] rounded-2xl rounded-tl-sm px-3.5 py-2.5">
                      <div className="flex gap-1 items-center h-4">
                        <span className="size-1.5 rounded-full bg-warm-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="size-1.5 rounded-full bg-warm-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="size-1.5 rounded-full bg-warm-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick chips if no messages yet */}
              {messages.length === 0 && !typing && (
                <div className="flex-none px-4 pb-2">
                  <div className="flex flex-wrap gap-1.5">
                    {quickActions.map((action) => (
                      <button
                        key={action.label}
                        onClick={() => sendMessage(action.message)}
                        className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-3 py-1.5 transition-all hover:bg-black/[0.03] hover:border-black/[0.15] active:scale-95"
                      >
                        <action.icon className="size-3 text-warm-500" />
                        <span className="type-2xs font-medium text-warm-700">{action.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="flex-none px-4 pb-3 pt-2 border-t border-black/[0.04]">
                <div className="flex items-center gap-2 rounded-xl bg-[#f5f3f1] px-3 py-2 ring-[0.5px] ring-inset ring-black/[0.06] focus-within:ring-black/[0.15] transition-all">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask anything..."
                    className="flex-auto bg-transparent outline-none type-xs text-black placeholder:text-warm-400"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") sendMessage(input);
                    }}
                  />
                  <button
                    className={`size-7 rounded-full flex items-center justify-center flex-none transition-all duration-200 ${
                      input.trim() ? "bg-black hover:bg-warm-800 scale-100" : "bg-black/20 scale-95"
                    }`}
                    disabled={!input.trim()}
                    onClick={() => sendMessage(input)}
                  >
                    <Send className="size-3 text-white" />
                  </button>
                </div>
                <p className="type-2xs text-warm-300 text-center mt-1.5">Powered by Osmium AI</p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Floating button */}
      <button
        onClick={() => {
          if (open) handleClose();
          else setOpen(true);
        }}
        className="pointer-events-auto flex items-center gap-2.5 rounded-full px-4 pl-3.5 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.03] active:scale-95"
        style={{
          backgroundColor: open ? "rgba(0,0,0,0.9)" : "rgba(245,242,239,0.9)",
          height: 48,
          boxShadow: "0 4px 16px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.06)",
        }}
      >
        {open ? (
          <X className="size-4 text-white" />
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="Osmium" className="h-5 w-auto" />
          </>
        )}
        <p className={`type-sm font-medium whitespace-nowrap ${open ? "text-white" : "text-black"}`}>
          {open ? "Close" : (
            <>
              <span className="md:hidden">Help</span>
              <span className="hidden md:inline">Need help?</span>
            </>
          )}
        </p>
      </button>
    </div>
  );
}
