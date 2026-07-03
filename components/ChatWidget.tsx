'use client';

import { useEffect, useRef, useState } from 'react';
import { getBotReply } from '@/lib/chatbot';

type Message = { id: number; role: 'user' | 'bot'; text: string };

const GREETING: Message = {
  id: 0,
  role: 'bot',
  text: 'Hi! 👋 Welcome to Earth Link Real Estate. How can we help you today?',
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(1);

  // Move focus into the field when the panel opens.
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // Keep the newest message in view.
  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, isTyping]);

  // Escape closes the panel.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || isTyping) return;

    const userMsg: Message = { id: nextId.current++, role: 'user', text };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setIsTyping(true);

    const reply = await getBotReply(text);
    setMessages((m) => [...m, { id: nextId.current++, role: 'bot', text: reply }]);
    setIsTyping(false);
  }

  return (
    <>
      {open && (
        <div className="chat-panel" role="dialog" aria-label="Chat with Earth Link Real Estate">
          <header className="chat-header">
            <div>
              <strong>Earth Link Real Estate</strong>
              <small>We typically reply in a few minutes</small>
            </div>
            <button
              type="button"
              className="chat-close"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </header>

          <div className="chat-messages" ref={listRef}>
            {messages.map((m) => (
              <div key={m.id} className={`chat-msg chat-msg--${m.role}`}>
                {m.text}
              </div>
            ))}
            {isTyping && (
              <div className="chat-msg chat-msg--bot chat-typing" aria-live="polite">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </div>

          <form className="chat-input" onSubmit={handleSend}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message…"
              aria-label="Type your message"
            />
            <button type="submit" aria-label="Send message" disabled={!input.trim() || isTyping}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        className="chat-bubble"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        aria-expanded={open}
      >
        {open ? (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        )}
      </button>
    </>
  );
}
