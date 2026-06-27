import type { Metadata } from 'next';
<<<<<<< HEAD
import { Montserrat } from 'next/font/google';
=======
<<<<<<< Updated upstream
import { Inter } from 'next/font/google';
>>>>>>> staging
import './globals.css';

// Single typeface across the site — Montserrat, with Light (300) as the default weight.
const montserrat = Montserrat({
  subsets: ['latin'],
<<<<<<< HEAD
  weight: ['300', '400', '500', '600', '700'],
=======
  weight: ['300', '400', '500', '600', '700', '800'],
=======
import { Lato } from 'next/font/google';
import './globals.css';

// Site typeface — Lato (the same body font as emaar.com). Headings use Optima
// where available with a humanist fallback chain (see --display in globals.css).
const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
>>>>>>> Stashed changes
>>>>>>> staging
  style: ['normal', 'italic'],
  variable: '--font-main',
  display: 'swap',
});

// NOTE: update siteUrl to the real production domain before launch.
const siteUrl = 'https://earthlink.ae';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Earthlink Real Estate — Dubai Brokerage',
    template: '%s — Earthlink Real Estate',
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
  applicationName: 'Earthlink Real Estate',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Earthlink Real Estate',
    title: 'Earthlink Real Estate — Dubai Brokerage',
    description:
      'Buy, lease, or invest in Dubai with advice you can trust. Ten years of local deals, backed by ERE.',
    url: siteUrl,
    locale: 'en_AE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Earthlink Real Estate — Dubai Brokerage',
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
<<<<<<< HEAD
    <html lang="en" className={montserrat.variable} suppressHydrationWarning>
=======
<<<<<<< Updated upstream
    <html lang="en" className={inter.variable} suppressHydrationWarning>
=======
    <html lang="en" className={lato.variable} suppressHydrationWarning>
>>>>>>> Stashed changes
>>>>>>> staging
      <body>{children}</body>
    </html>
  );
}
