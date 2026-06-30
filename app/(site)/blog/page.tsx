import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { blogCategories } from '@/lib/data';
import { getPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  alternates: { canonical: '/blog' },
  description: 'Clear market insight on Dubai real estate: prices, yields, neighbourhood guides, and investor notes.',
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      {/* ===== HEADER ===== */}
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow reveal" style={{ display: 'block', marginBottom: 14 }}>The Journal</span>
          <h1 className="reveal">Clear <span className="grad">Market Insight</span></h1>
          <p className="reveal">The Dubai market moves quickly. Our journal keeps it simple and useful.</p>
        </div>
      </section>

      {/* ===== LATEST ARTICLES ===== */}
      {posts.length > 0 && (
        <section id="articles">
          <div className="wrap">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
              <span className="eyebrow">Latest Articles</span>
              <h2 className="section-title" style={{ marginTop: 12 }}>From the journal</h2>
            </div>
            <div className="blog-grid">
              {posts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="blog-card reveal">
                  <div className="blog-card-img">
                    {post.img && (
                      <Image
                        src={post.img}
                        alt={post.imageAlt || post.title}
                        fill
                        sizes="(max-width: 800px) 100vw, 380px"
                        style={{ objectFit: 'cover' }}
                      />
                    )}
                  </div>
                  <div className="blog-card-body">
                    {post.category && <span className="blog-card-cat">{post.category}</span>}
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
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
            <h2 className="section-title" style={{ marginTop: 12 }}>Four kinds of writing</h2>
          </div>
          <div className="grid g-4">
            {blogCategories.map((c, i) => (
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
