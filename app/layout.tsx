import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';

// Site typeface — Lato (the same body font as emaar.com). Headings use Optima
// where available with a humanist fallback chain (see --display in globals.css).
const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-main',
  display: 'swap',
});

// Production domain — the live site is served here.
const siteUrl = 'https://www.eregroup.ae';

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={lato.variable} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
