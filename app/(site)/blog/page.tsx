import type { Metadata } from 'next';
import { seoMetadata } from '@/lib/seo';
import Link from 'next/link';
import Image from 'next/image';
import { blogCategories } from '@/lib/data';
import { getPosts } from '@/lib/blog';

// Rebuild this page from Sanity at most once every 60s (ISR) so newly
// published posts appear on the live site without a manual redeploy.
export const revalidate = 60;

export const metadata: Metadata = seoMetadata('/blog');

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
                        /* Two-up grid inside the 1440px wrap: each card is about
                           675px wide, not 380px. The old value made Next serve a
                           small file that the browser then upscaled. */
                        sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 690px"
                        quality={85}
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
