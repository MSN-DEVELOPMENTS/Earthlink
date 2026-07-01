import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Media Center',
  alternates: { canonical: '/media-center' },
  description: 'The Earthlink Real Estate Media Center — our blog of market insight and guides, and the latest company news.',
};

const sections = [
  {
    href: '/blog',
    eyebrow: 'The Journal',
    title: 'Blog',
    text: 'Clear market intelligence, neighbourhood guides, and investor notes on Dubai real estate.',
    img: '/blog/blog-hub.jpg',
    imgAlt: 'Dubai skyline silhouette at sunset reflected over the water',
  },
  {
    href: '/news',
    eyebrow: 'Newsroom',
    title: 'News',
    text: 'Press releases, company milestones, market updates, and events from the Earthlink team.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    imgAlt: 'Modern Dubai office tower against a clear sky',
  },
];

export default function MediaCenterPage() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow reveal" style={{ display: 'block', marginBottom: 14 }}>Media Center</span>
          <h1 className="reveal">News &amp; <span className="grad">Insight</span></h1>
          <p className="reveal">Everything we publish, in one place — long-form insight in the journal, and timely updates in the newsroom.</p>
        </div>
      </section>

      {/* ===== SECTIONS ===== */}
      <section id="sections" className="media-sections">
        <div className="wrap wrap--wide">
          <div className="blog-grid blog-grid--duo">
            {sections.map((s) => (
              <Link href={s.href} key={s.href} className="blog-card reveal">
                <div className="blog-card-img">
                  <Image
                    src={s.img}
                    alt={s.imgAlt}
                    fill
                    sizes="(max-width: 800px) 100vw, 820px"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="blog-card-body">
                  <span className="blog-card-cat">{s.eyebrow}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <span className="blog-card-more">Explore {s.title} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
