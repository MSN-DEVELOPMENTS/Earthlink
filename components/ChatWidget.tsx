'use client';

import { useChat } from '@ai-sdk/react';
import { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { contact } from '@/lib/data';

// Our own site hosts — used to force any accidental absolute link back to an
// internal, same-tab path (the model sometimes prepends a domain).
const INTERNAL_HOSTS = /^https?:\/\/(www\.)?(earthlink\.ae|eregroup\.ae)/i;

// Render Markdown links: internal links (e.g. /properties/<slug>) navigate in
// the same tab; genuine external links (e.g. WhatsApp) open in a new tab.
const markdownComponents = {
  a({ href, children }: { href?: string; children?: React.ReactNode }) {
    let url = href || '';
    // Rewrite absolute links to our own site down to a relative path so they
    // stay on-site and never point at the wrong/parked domain.
    if (INTERNAL_HOSTS.test(url)) {
      try {
        url = new URL(url).pathname;
      } catch {
        /* leave as-is */
      }
    }
    const external = /^https?:\/\//i.test(url);
    return external ? (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ) : (
      <a href={url}>{children}</a>
    );
  },
};

const WHATSAPP_HREF = `${contact.whatsapp}?text=${encodeURIComponent(
  "Hi Earth Link, I'd like to know more about a property."
)}`;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const { messages, sendMessage, status, error } = useChat();
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const busy = status === 'submitted' || status === 'streaming';

  // Focus the input when the panel opens.
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // Keep the log scrolled to the latest message.
  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [messages, status]);

  // Keep the panel sized to the area above the on-screen keyboard on mobile.
  // visualViewport.height shrinks when the keyboard opens, so the input stays
  // visible instead of being covered.
  useEffect(() => {
    const vv = typeof window !== 'undefined' ? window.visualViewport : null;
    if (!vv) return;
    const root = document.documentElement;
    const update = () => {
      // Size + position of the visible area (above the keyboard). On mobile the
      // full-screen panel uses these so it always exactly fits the visible area,
      // even as the keyboard opens/closes.
      root.style.setProperty('--chat-vvh', `${vv.height}px`);
      root.style.setProperty('--chat-vtop', `${vv.offsetTop}px`);
    };
    update();
    vv.addEventListener('resize', update);
    vv.addEventListener('scroll', update);
    return () => {
      vv.removeEventListener('resize', update);
      vv.removeEventListener('scroll', update);
    };
  }, []);

  // Lock the page behind the chat while it's open (prevents the site drifting/
  // panning sideways under a full-screen mobile panel).
  useEffect(() => {
    if (open) document.body.classList.add('chat-open');
    else document.body.classList.remove('chat-open');
    return () => document.body.classList.remove('chat-open');
  }, [open]);

  // Escape closes the panel.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || busy) return;
    sendMessage({ text });
    setInput('');
  }

  return (
    <>
      {open && (
        <div className="chat-panel" role="dialog" aria-label="Chat with Earth Link">
          <div className="chat-head">
            <div className="chat-head-brand">
              <img src="/logo.png" alt="Earth Link Real Estate" className="chat-head-logo" />
              <span className="chat-head-title">Chat with Earth Link</span>
            </div>
            <button
              type="button"
              className="chat-close"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              &times;
            </button>
          </div>

          <div className="chat-log" ref={logRef}>
            {messages.length === 0 && (
              <div className="chat-msg chat-bot">
                Hi! I can help with Dubai properties, prices, and booking a
                consultation. What are you looking for?
              </div>
            )}

            {messages.map((m) => {
              const textParts = m.parts
                .filter((p): p is { type: 'text'; text: string } => p.type === 'text')
                .map((p) => p.text)
                .join('');
              if (!textParts) return null;
              const isUser = m.role === 'user';
              return (
                <div key={m.id} className={`chat-msg ${isUser ? 'chat-user' : 'chat-bot'}`}>
                  {isUser ? (
                    textParts
                  ) : (
                    <ReactMarkdown components={markdownComponents}>{textParts}</ReactMarkdown>
                  )}
                </div>
              );
            })}

            {status === 'submitted' && (
              <div className="chat-msg chat-bot chat-typing" aria-label="Assistant is typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}

            {error && (
              <div className="chat-msg chat-bot">
                Sorry, the chat is unavailable right now. Please reach us on
                WhatsApp and we&rsquo;ll help straight away.
              </div>
            )}
          </div>

          <form className="chat-input" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about a property&hellip;"
              aria-label="Type your message"
            />
            <button type="submit" disabled={busy || !input.trim()} aria-label="Send message">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
              </svg>
            </button>
          </form>

          <div className="chat-foot">
            <a
              className="chat-foot-btn"
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a className="chat-foot-btn" href="/contact">
              Book a consultation
            </a>
          </div>
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
            <path d="M18.3 5.71L12 12.01l-6.3-6.3-1.4 1.42L10.59 13.4l-6.3 6.3 1.41 1.41 6.3-6.3 6.3 6.3 1.41-1.41-6.3-6.3 6.3-6.29z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM7 9h10v2H7V9zm7 5H7v-2h7v2zm3-6H7V6h10v2z" />
          </svg>
        )}
      </button>
    </>
  );
}
