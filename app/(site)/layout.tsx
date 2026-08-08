import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import ScrollReveal from '@/components/ScrollReveal';
import { getCategoriesInUse } from '@/lib/categories';

// Structured data so Google can show Earth Link as a real-estate business.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Earth Link Real Estate',
  description: 'Dubai real estate brokerage — buying, leasing, and investing, backed by ERE.',
  url: 'https://www.eregroup.ae',
  telephone: '+971528701177',
  email: 'info@eregroup.ae',
  areaServed: 'Dubai, United Arab Emirates',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
};

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  /* Blog categories drive the Media Center → Blogs submenu in the header.
     Only categories that actually hold an article — an empty archive linked
     from every page on the site is ~500 internal links pointing at a page with
     nothing on it, which spends crawl budget and dilutes the links that matter.
     Same rule the /blog filter chips and the sitemap already use; a category
     rejoins the menu on its own once its first article is filed. */
  const categories = await getCategoriesInUse();

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
      <Header categories={categories.map((c) => ({ title: c.title, slug: c.slug }))} />
      <main>{children}</main>
      <Footer />
      <ChatWidget />
      <ScrollReveal />
    </>
  );
}
