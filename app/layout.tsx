import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import './globals.css';

// Site typeface — Lato (the same body font as emaar.com). Headings use Optima
// where available with a humanist fallback chain (see --display in globals.css).
// Only the weights globals.css actually asks for are loaded. 900 was never used
// and the handful of italic rules synthesise fine, so dropping them removes five
// of the eight font files the browser used to preload on every page.
const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-main',
  display: 'swap',
});

// Base URL for canonical + Open Graph. Production uses the real domain; on a
// Vercel preview/staging deployment we use that deployment's own URL so a shared
// link (WhatsApp, etc.) resolves the OG image on the same deployment. Locally it
// falls back to localhost.
const siteUrl =
  process.env.VERCEL_ENV === 'production'
    ? 'https://www.eregroup.ae'
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Earth Link Real Estate — Dubai Brokerage',
    template: '%s — Earth Link Real Estate',
  },
  description:
    'Dubai real estate brokerage. Buying, leasing, or investing in Dubai works best with clear advice. Backed by ERE.',
  keywords: [
    'Dubai real estate',
    'Dubai property',
    'Dubai brokerage',
    'off-plan Dubai',
    'buy property Dubai',
    'rent property Dubai',
    'property investment Dubai',
  ],
  applicationName: 'Earth Link Real Estate',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Earth Link Real Estate',
    title: 'Earth Link Real Estate — Dubai Brokerage',
    description:
      'Buy, lease, or invest in Dubai with advice you can trust. Ten years of local deals, backed by ERE.',
    url: siteUrl,
    locale: 'en_AE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Earth Link Real Estate — Dubai Brokerage',
    description:
      'Buy, lease, or invest in Dubai with advice you can trust. Ten years of local deals, backed by ERE.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

// Google Tag Manager container ID (e.g. GTM-XXXXXXX). Set in Vercel env vars.
// GA4 and any future tags (Meta Pixel, Google Ads) are configured inside the
// GTM dashboard, so no code change is needed to add them later. When the ID is
// unset (local dev without the var) we skip the script entirely.
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={lato.variable} suppressHydrationWarning>
      {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
      <body>{children}</body>
    </html>
  );
}
