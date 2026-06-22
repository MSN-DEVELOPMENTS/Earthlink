import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollReveal from '@/components/ScrollReveal';

// Single typeface across the whole site.
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
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

// Structured data so Google can show Earthlink as a real-estate business.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Earthlink Real Estate',
  description: 'Dubai real estate brokerage — buying, leasing, and investing, backed by ERE.',
  url: siteUrl,
  telephone: '+971528701177',
  email: 'info@earthlink.ae',
  areaServed: 'Dubai, United Arab Emirates',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Enables scroll-reveal only when JS runs; failsafe shows everything
            after 1.8s so content can never stay hidden on a slow connection. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{document.documentElement.classList.add('reveal-ready');" +
              "window.__revealFailsafe=setTimeout(function(){if(!window.__revealActive){" +
              "var e=document.querySelectorAll('.reveal');for(var i=0;i<e.length;i++){e[i].classList.add('in');}}},1800);" +
              "}catch(_){}})();",
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollReveal />
      </body>
    </html>
  );
}
