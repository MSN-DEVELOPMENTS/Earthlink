# Earthlink Real Estate — "Black & Gold" Luxury Rebrand

**Date:** 2026-06-27
**Status:** Approved (design)

## Goal

Re-skin the entire site from its current "navy/slate corporate" feel into a
**black-and-champagne-gold luxury** identity that matches the Earthlink logo
(gold EARTHLINK wordmark with an integrated Burj Khalifa motif on black).

Decisions locked with the user:

- **Scope:** Full luxury rebrand across all pages.
- **Mood:** All-dark — near-black surfaces, champagne gold accents, off-white text.
- **Headings:** Elegant serif (Cormorant Garamond) + Montserrat for body/UI.
- **Logo:** Re-create as a clean SVG now; swap in the user's `public/logo.png`
  later if provided.

This is a **token + font + component-class** rebrand. Page structure and
layouts stay the same; only the visual skin changes.

## Constraints / non-goals

- No new dependencies beyond an additional Google font.
- No layout/markup restructuring except: header/footer logo swap, hero scrim,
  and hero alignment consistency.
- Keep accessibility: text must clear AA contrast against the new dark surfaces;
  focus rings and selection stay gold.
- No content/copy changes.

## Architecture

The site is driven by:
- `app/layout.tsx` — single `next/font` import (Montserrat).
- `app/globals.css` — CSS custom-property tokens + all component styles.
- `components/Header.tsx`, `components/Footer.tsx` — chrome.
- `components/WhatsAppButton.tsx` — floating chat button.

The rebrand is therefore concentrated in tokens + fonts + a handful of
component classes.

## Design detail

### 1. Palette (token swap in `globals.css :root`)

| Token            | Current        | New                          |
|------------------|----------------|------------------------------|
| `--ink` (bg)     | `#15232b`      | near-black `#0c0e0f`         |
| body background  | `#f4f1e9`      | near-black `#0c0e0f`         |
| surface/cards    | `#ffffff`      | charcoal `#15181a`           |
| surface-2        | `#ece6da`      | `#1c2023`                    |
| text             | dark ink       | warm off-white `#ece6da`     |
| `--muted`        | `#5f686d`      | warm grey `#9a948a` (AA on dark) |
| `--champagne`    | `#c3a97c`      | unchanged — now the star     |
| `--champagne-ink`| `#8A7664`      | brighten to `#d8c096` for dark surfaces |
| `--line`         | `#e4ddcf`      | `rgba(195,169,124,.18)` (gold hairline) |
| `--line-2`       | `#d3c9b5`      | `rgba(195,169,124,.32)`      |

Gold stays scarce: accents, hairlines, logo, primary CTAs, hover states only.

### 2. Typography (`app/layout.tsx` + tokens)

- Add **Cormorant Garamond** (weights 400/500/600) via `next/font/google`,
  exposed as `--font-display`.
- Keep **Montserrat** as `--font-main` for body, eyebrows, buttons, UI.
- `--display` token → `var(--font-display)`; `--body` stays Montserrat.
- Headings: lift weight/size for serif rhythm; keep the two-tone treatment
  (off-white headline + gold accent word). Remove `text-transform: capitalize`
  on headings (serif reads better in natural case).

### 3. Header / Footer

- Replace `<span class="mark">E</span>Earthlink` with the gold logo SVG
  (`public/logo.svg`), wrapped so it swaps to `public/logo.png` if present.
- Nav: transparent over heroes → solid near-black + gold hairline on scroll
  (reuse existing `.scrolled` logic).
- "Book a Consultation" → solid gold button (`.btn-gold` re-themed: gold fill,
  near-black text).
- Footer re-themed to the dark palette with gold hairlines and logo.

### 4. Heroes (all pages — consistent)

- Add a strong dark gradient scrim (bottom-left, fading up/right) under hero
  text so off-white/gold always reads against bright photos.
- **Left-align** hero text on every page (fixes home-left vs about-center).
- Serif headline + gold accent word + gold `◆` eyebrow.

### 5. Content sections (all-dark)

Re-theme to charcoal surfaces / gold hairlines / off-white text with slow
(.3–.5s) gold hover transitions:

- `.glass` cards (services), `.step`, stats/about, `.pcard` property cards.
- Contact form, FAQ, testimonials, blog list + post, developers list + detail,
  property detail + gallery.

### 6. Details

- `WhatsAppButton` → gold background, near-black icon (removes clashing green).
- Optional: faint Burj-motif watermark as a section divider (low priority).
- Selection + focus rings stay gold.

## Files touched

- `app/layout.tsx` — add Cormorant Garamond font.
- `app/globals.css` — bulk of the work: tokens + component re-theme.
- `components/Header.tsx` — logo swap.
- `components/Footer.tsx` — logo + dark theme verification.
- `components/WhatsAppButton.tsx` — gold recolor.
- `public/logo.svg` — new SVG wordmark (NEW).

## Testing / verification

- Build passes (`next build` / lint).
- Visual pass on every route: `/`, `/about`, `/properties`, `/properties/[slug]`,
  `/developers`, `/developers/[slug]`, `/contact`, `/blog`, `/blog/[slug]`.
- Contrast check: body text, muted text, and gold accents all readable on the
  new dark surfaces (AA).
- Heroes: text legible over photos via the scrim; left-aligned everywhere.
- Mobile: header menu, hero, and cards still work at small widths.

## Out of scope

- Copy/content changes, new sections, CMS/data changes, new pages.
