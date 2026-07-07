import type { Metadata } from 'next';
import { seoMetadata } from '@/lib/seo';
import Link from 'next/link';
import Image from 'next/image';
import { newsCategories } from '@/lib/data';
import { getNews } from '@/lib/news';

export const metadata: Metadata = seoMetadata('/news');

export default async function NewsPage() {
  const items = await getNews();

  return (
    <>
      {/* ===== HEADER ===== */}
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow reveal" style={{ display: 'block', marginBottom: 14 }}>Media Center</span>
          <h1 className="reveal">Latest <span className="grad">News</span></h1>
          <p className="reveal">Announcements, milestones, and quick updates from the Earth Link team.</p>
        </div>
      </section>

      {/* ===== LATEST NEWS ===== */}
      {items.length > 0 && (
        <section id="articles">
          <div className="wrap">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
              <span className="eyebrow">Newsroom</span>
              <h2 className="section-title" style={{ marginTop: 12 }}>From the newsroom</h2>
            </div>
            <div className="blog-grid">
              {items.map((item) => (
                <Link href={`/news/${item.slug}`} key={item.slug} className="blog-card reveal">
                  <div className="blog-card-img">
                    {item.img && (
                      <Image
                        src={item.img}
                        alt={item.imageAlt || item.title}
                        fill
                        sizes="(max-width: 800px) 100vw, 380px"
                        style={{ objectFit: 'cover' }}
                      />
                    )}
                  </div>
                  <div className="blog-card-body">
                    {item.category && <span className="blog-card-cat">{item.category}</span>}
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                    <span className="blog-card-more">Read article →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== WHAT YOU WILL FIND ===== */}
      <section id="categories" className="section-light">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="eyebrow">What You Will Find</span>
            <h2 className="section-title" style={{ marginTop: 12 }}>Kinds of updates</h2>
          </div>
          <div className="grid g-4">
            {newsCategories.map((c, i) => (
              <div className="glass card reveal" key={c.title}>
                <div className="ic">{String(i + 1).padStart(2, '0')}</div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
