# Earthlink Real Estate

Dubai real estate brokerage website, built with **Next.js (App Router)** and **TypeScript**.

## Tech

- **Next.js 14** + React 18 (App Router)
- **TypeScript**
- Custom CSS (gold / glass theme) in `app/globals.css`
- No database yet — contact forms show a confirmation message (a backend can be added later)

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Project structure

```  
Earthlink/
├── app/                      # Pages (App Router)
│   ├── layout.tsx            # Root layout: fonts, Header, Footer, WhatsApp
│   ├── globals.css           # All styles (gold / glass theme)
│   ├── page.tsx              # Home
│   ├── about/page.tsx        # About
│   ├── projects/page.tsx     # Projects (Current Selection table)
│   ├── blog/page.tsx         # Blog index
│   ├── blog/[slug]/page.tsx  # Blog post
│   └── contact/page.tsx      # Contact (two forms)
├── components/               # Reusable UI
│   ├── Header.tsx            # Nav + mobile menu (client)
│   ├── Footer.tsx
│   ├── WhatsAppButton.tsx
│   ├── ScrollReveal.tsx      # Scroll-in animations (client)
│   ├── InquiryForm.tsx       # "Send Us a Message" (client)
│   └── BookingForm.tsx       # "Book a Consultation" (client)
├── lib/
│   └── data.ts               # All site content (edit copy here)
└── public/                   # Static assets
```

## Editing content

All page copy — services, communities, projects, blog posts, contact details —
lives in **`lib/data.ts`**. Edit that one file to update the site.

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About |
| `/projects` | Projects |
| `/blog` | Blog index |
| `/blog/[slug]` | Blog post |
| `/contact` | Contact |

## Notes / next steps

- Contact forms (`InquiryForm`, `BookingForm`) currently show a confirmation only.
  Wire them to an email service or API route when ready.
- Content can later be moved to a CMS (e.g. Sanity) if editable content is needed.
- Images use Unsplash URLs as placeholders; swap for real photography in `lib/data.ts`.
