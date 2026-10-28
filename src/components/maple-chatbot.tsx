"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";

import { mapleLogo } from "@/content/brand";
import { getInitialGreeting } from "@/lib/chatbot/engine";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const QUICK_PROMPTS = [
  "What services do you offer?",
  "Tell me about AI capabilities",
  "Which industries do you serve?",
  "How can I contact you?",
];

function formatAssistantMessage(content: string) {
  const blocks = content.split(/\n\n---\n\n/);

  return blocks.map((block, blockIndex) => {
    const lines = block.split("\n");
    return (
      <div key={blockIndex} className={blockIndex > 0 ? "mt-3 border-t border-slate-200/80 pt-3" : undefined}>
        {lines.map((line, lineIndex) => {
          const parts = line.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).filter(Boolean);

          return (
            <p
              key={lineIndex}
              className={
                line.startsWith("•")
                  ? "ml-1 text-[13px] leading-[1.55] text-[#475569]"
                  : "text-[13px] leading-[1.55] text-[#475569]"
              }
            >
              {parts.map((part, partIndex) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                  return (
                    <strong key={partIndex} className="font-semibold text-[#1C2340]">
                      {part.slice(2, -2)}
                    </strong>
                  );
                }

                const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
                if (linkMatch) {
                  return (
                    <a
                      key={partIndex}
                      href={linkMatch[2]}
                      className="font-medium text-[#4361EE] underline-offset-2 hover:underline"
                    >
                      {linkMatch[1]}
                    </a>
                  );
                }

                return <span key={partIndex}>{part}</span>;
              })}
            </p>
          );
        })}
      </div>
    );
  });
}

export function MapleChatbot() {
  const dialogTitleId = useId();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [greeted, setGreeted] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, []);

  useEffect(() => {
    if (open && !greeted) {
      setMessages([{ id: "welcome", role: "assistant", content: getInitialGreeting() }]);
      setGreeted(true);
    }
  }, [open, greeted]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading, scrollToBottom]);

  useEffect(() => {
    if (open) {
      const timer = window.setTimeout(() => inputRef.current?.focus(), 120);
      return () => window.clearTimeout(timer);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      const data = (await response.json()) as { reply?: string; error?: string };

      const reply =
        response.ok && data.reply
          ? data.reply
          : "I'm having a little trouble responding right now. Please try again, or email us at hello@mapleaitechnologies.com.";

      setMessages((prev) => [
        ...prev,
        { id: `assistant-${Date.now()}`, role: "assistant", content: reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-error-${Date.now()}`,
          role: "assistant",
          content:
            "I couldn't reach the server just now. Please try again shortly, or contact us at hello@mapleaitechnologies.com.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {open && (
        <div
          className="maple-chatbot__panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby={dialogTitleId}
        >
          <header className="maple-chatbot__header">
            <div className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={mapleLogo.src} alt="" className="maple-chatbot__avatar" height={32} />
              <div>
                <p id={dialogTitleId} className="maple-chatbot__title">
                  Maple AI Assistant
                </p>
                <p className="maple-chatbot__subtitle">Here to help with our services</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="maple-chatbot__close"
              aria-label="Close chat"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M2 2l12 12M14 2L2 14"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </header>

          <div ref={listRef} className="maple-chatbot__messages" aria-live="polite">
            {messages.map((message) => (
              <div
                key={message.id}
                className={
                  message.role === "user"
                    ? "maple-chatbot__bubble maple-chatbot__bubble--user"
                    : "maple-chatbot__bubble maple-chatbot__bubble--assistant"
                }
              >
                {message.role === "assistant" ? (
                  formatAssistantMessage(message.content)
                ) : (
                  <p className="text-[13px] leading-[1.5]">{message.content}</p>
                )}
              </div>
            ))}

            {loading && (
              <div className="maple-chatbot__bubble maple-chatbot__bubble--assistant">
                <p className="maple-chatbot__typing" aria-label="Assistant is typing">
                  <span />
                  <span />
                  <span />
                </p>
              </div>
            )}
          </div>

          {messages.length <= 1 && !loading && (
            <div className="maple-chatbot__quick-prompts">
              {QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  className="maple-chatbot__chip"
                  onClick={() => sendMessage(prompt)}
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          <form
            className="maple-chatbot__composer"
            onSubmit={(event) => {
              event.preventDefault();
              void sendMessage(input);
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about services, AI, industries…"
              className="maple-chatbot__input"
              maxLength={2000}
              disabled={loading}
              aria-label="Chat message"
            />
            <button type="submit" className="maple-chatbot__send" disabled={loading || !input.trim()}>
              Send
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="maple-chatbot__launcher"
        aria-expanded={open}
        aria-label={open ? "Close Maple AI chat" : "Open Maple AI chat"}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M2 2l12 12M14 2L2 14"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={mapleLogo.src} alt="" className="h-8 w-8 object-contain" height={32} />
            <span className="maple-chatbot__launcher-label">Chat</span>
          </>
        )}
      </button>
    </>
  );
}
