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

export const metadata: Metadata = {
  title: 'Earthlink Real Estate — Dubai Brokerage',
  description:
    'Dubai real estate brokerage. Buying, leasing, or investing in Dubai works best with clear advice. Backed by ERE.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
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
