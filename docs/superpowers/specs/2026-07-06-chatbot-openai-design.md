# Chatbot (OpenAI) — Design Spec

**Date:** 2026-07-06
**Status:** Approved for build
**Supersedes:** `2026-07-03-chatbot-widget-design.md` (UI-shell-only spec; never implemented).

## Goal

Add an AI-powered floating chat assistant to the Earth Link Real Estate site. It
answers property and FAQ questions grounded in the site's Sanity content, and
captures/hands off leads three ways (email, WhatsApp, book-a-consultation). The
company provided an OpenAI API key; the model is configurable via env and
defaults to `gpt-4o-mini`.

## Scope (what the bot does)

- **Answer property questions** — grounded in the live Sanity listings (small
  catalog, < ~50), so it never invents listings.
- **Capture & qualify leads** — collect name, contact, intent, budget, area.
- **General FAQ / site help** — about Earth Link, services, and process.
- **Book consultations / hand off** — surface WhatsApp and booking actions.

## Approach

Use the **Vercel AI SDK** (`ai` + `@ai-sdk/openai`) for streaming, tool-calling,
and the `useChat` React hook. The OpenAI key is used directly server-side (no
Vercel AI Gateway). Rejected alternative: raw `openai` SDK — more manual
streaming/state code for no benefit.

Grounding strategy: **full catalog in context**. The small listing count means
we can load a compact text summary of all listings into the system prompt each
request (cached in-memory ~5 min), rather than live tool-calling search.

## Components & files

| File | Role |
|------|------|
| `components/ChatWidget.tsx` | `'use client'`. Floating gold bubble stacked **above** the WhatsApp button, expandable panel. Uses `useChat` for streaming. Renders message list, typing indicator, input, and footer quick-action buttons (WhatsApp / Book a consultation). Owns UI state. |
| `app/api/chat/route.ts` | Node runtime (`runtime = 'nodejs'`). `streamText` with the OpenAI model. Loads the catalog summary, builds the system prompt, exposes the `captureLead` tool, streams the reply. Key stays server-side. |
| `lib/chatbot/catalog.ts` | Fetches listings from Sanity via the existing client, builds a compact text summary, caches in-memory (~5 min TTL). |
| `lib/chatbot/prompt.ts` | Assembles the system prompt: Earth Link persona, guardrails, the catalog summary, and contact/WhatsApp/booking info. |
| `lib/chatbot/lead.ts` | Shared nodemailer lead-emailer. Reuses the existing SMTP env vars and `CONTACT_FORM_TO`. |
| `app/(site)/layout.tsx` | Mount `<ChatWidget />` next to the existing `<WhatsAppButton />`. |
| `app/globals.css` | New `/* Chat widget */` section using `.chat-*` plain classes, matching the existing `.wa` button convention (black/gold, PT Serif accents). |

**New dependencies:** `ai`, `@ai-sdk/openai`, `zod`.

**Environment variables:**

- `OPENAI_API_KEY` — required (company-provided).
- `OPENAI_MODEL` — optional, defaults to `gpt-4o-mini`. Lets the key owner switch
  models with no code change if their key is scoped differently.
- Reuses existing `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`,
  `SMTP_FROM`, `CONTACT_FORM_TO` for lead email.
- WhatsApp number comes from `lib/data.ts` → `contact.whatsapp`
  (`https://wa.me/971528701177`).

## Layout & behavior

- **Bubble:** champagne-gold circle (56px), black chat icon — same visual
  language as the `.wa` WhatsApp button.
- **Placement:** bottom-right, **stacked above** the WhatsApp button
  (`bottom: ~96px`), same `z-index: 1100`. The two never overlap.
- **Panel:** opens above the bubble. Black background, gold header
  ("Chat with Earth Link"), scrollable streaming message list, input + send,
  and a footer with WhatsApp + Book-a-consultation buttons.
- **Accessibility:** `aria-label` on bubble, `role="dialog"` on panel, Escape
  closes, focus moves to input on open.
- **Responsive:** near full-width panel on mobile; bubble stays clear of the
  WhatsApp button on all breakpoints.

## Data flow

1. Visitor opens the widget and types.
2. `useChat` POSTs the conversation to `/api/chat`.
3. Route loads the cached Sanity catalog summary → builds the system prompt →
   calls OpenAI with the `captureLead` tool available → streams the answer.
4. **Property/FAQ questions** → answered from the catalog + persona (grounded).
5. **Buying intent** → bot collects name + contact + intent/budget/area, calls
   `captureLead` → emails the team → confirms and surfaces WhatsApp / booking.
6. **Guardrails** → system prompt keeps replies to Earth Link / Dubai real
   estate; politely deflects off-topic requests.

## Lead handoff (all three)

- **Email:** `captureLead` tool → `lib/chatbot/lead.ts` → team inbox (same pipe
  as the contact form). Tool schema: `name`, `contact` (email or phone),
  `intent` (buy/rent/invest), `budget`, `area`, `notes`.
- **WhatsApp:** always-visible footer button → `wa.me/971528701177` with a
  prefilled message. Bot can also suggest it.
- **Booking:** footer button / bot suggestion → the Book-a-Consultation flow.

## Error handling

- Missing `OPENAI_API_KEY` → route returns a friendly "chat unavailable"
  message; widget degrades gracefully (input disabled with a note).
- OpenAI / network failure → graceful apology that points to WhatsApp.
- SMTP missing or send fails → `captureLead` returns a soft failure so the bot
  hands off to WhatsApp/booking instead of silently losing the lead.

## Testing / verification

- Run dev server; open the widget.
- Ask a property question → verify the answer matches real Sanity listings.
- Ask an off-topic question → verify polite deflection.
- Walk through a lead capture → verify the email arrives (or is logged when SMTP
  is unset) and the confirmation + handoff buttons appear.
- `curl` `/api/chat` to confirm the route streams and handles the no-key case.

## Out of scope (YAGNI)

- Message history/persistence across reloads.
- Accounts / auth / conversation storage in a DB.
- Voice, multi-language.
- Rate limiting — noted as optional; a light per-IP throttle can be added later
  if abuse appears.

## Cost

`gpt-4o-mini` + a small catalog in context ≈ a fraction of a cent per
conversation.
