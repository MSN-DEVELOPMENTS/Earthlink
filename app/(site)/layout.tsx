import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollReveal from '@/components/ScrollReveal';

// Structured data so Google can show Earthlink as a real-estate business.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Earthlink Real Estate',
  description: 'Dubai real estate brokerage — buying, leasing, and investing, backed by ERE.',
  url: 'https://earthlink.ae',
  telephone: '+971528701177',
  email: 'info@eregroup.ae',
  areaServed: 'Dubai, United Arab Emirates',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
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
    </>
  );
}
