# Chatbot Widget — Design Spec

**Date:** 2026-07-03
**Status:** Approved for build (UI shell phase)

## Goal

Add a floating chat widget to the Earthlink site. Build the **UI shell with mock
replies now** so the company can approve the look. The actual chatbot backend
(confirmed to be **OpenAI**) is wired in later, once the company provides an API
key. The design keeps the backend behind a single swap point so wiring the real
bot never touches the UI.

## Rollout sequence

1. Build UI shell + mock reply → shown to company for visual approval.
2. Company approves the appearance.
3. Company provides `OPENAI_API_KEY`.
4. Add server API route + key → real AI chat, **no UI rework**.

## Components & files

| File | Role |
|------|------|
| `components/ChatWidget.tsx` | `'use client'` component. Floating bubble + expandable chat panel. Owns all UI state (`open`, `messages[]`, `input`, `isTyping`). |
| `lib/chatbot.ts` | **The seam.** Exports `getBotReply(text: string): Promise<string>`. Currently returns a canned reply after a short delay. This is the only file that changes when the real bot is wired. |
| `app/globals.css` | New `/* Chat widget */` section, plain-class convention matching the existing `.wa` floating button (not styled-components). |
| `app/(site)/layout.tsx` | Mount `<ChatWidget />` next to the existing `<WhatsAppButton />`. |
| `app/api/chat/route.ts` | **Later (phase 2).** Server route reading `OPENAI_API_KEY` and calling OpenAI. Keeps the key server-side. Not built in phase 1. |

## Layout & behavior

- **Bubble:** champagne-gold circle (56px), black chat icon — same visual
  language as the existing WhatsApp button.
- **Placement:** bottom-right, **stacked above** the WhatsApp button
  (`bottom: ~96px` = WhatsApp bottom 24px + its 56px height + ~16px gap), same
  `z-index: 1100`. The two buttons never overlap.
- **Panel:** opens above the bubble. Black background, gold header
  ("Chat with Earthlink"), scrollable message list, text input + send button.
  Bot messages left/dark, user messages right/gold.
- **Mock flow:** user types → their message appears → brief "typing…" indicator
  → `getBotReply()` returns a canned response (e.g. *"Thanks for reaching out! An
  Earthlink advisor will assist you shortly."*).
- **Accessibility:** `aria-label` on bubble, `role="dialog"` on panel, Escape
  closes it, focus moves to the input on open.
- **Responsive:** near full-width panel on mobile; bubble stays clear of the
  WhatsApp button on all breakpoints.

## Backend seam (phase 2, for reference)

`getBotReply` will swap from a mock to:

```ts
export async function getBotReply(text: string): Promise<string> {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: text }),
  });
  const data = await res.json();
  return data.reply;
}
```

`app/api/chat/route.ts` reads `process.env.OPENAI_API_KEY` server-side and calls
OpenAI. The browser never sees the key. The `ChatWidget` component is unchanged.

## Out of scope (YAGNI, phase 1)

- Real API / OpenAI calls
- Message persistence or history across reloads
- Auth, rate limiting, conversation storage

These arrive with the chosen backend in phase 2.
