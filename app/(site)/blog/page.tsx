import type { Metadata } from 'next';
import { seoMetadata } from '@/lib/seo';
import ArticleFilter from '@/components/ArticleFilter';
import { getPosts } from '@/lib/blog';
import { getCategories } from '@/lib/categories';

// Rebuild this page from Sanity at most once every 60s (ISR) so newly
// published posts appear on the live site without a manual redeploy.
export const revalidate = 60;

export const metadata: Metadata = seoMetadata('/blog');

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([getPosts(), getCategories()]);

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
            <ArticleFilter
              items={posts}
              categories={categories}
              basePath="/blog"
              /* Two-up grid inside the 1440px wrap: each card is about
                 675px wide, not 380px. The old value made Next serve a
                 small file that the browser then upscaled. */
              sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 690px"
              quality={85}
            />
          </div>
        </section>
      )}
    </>
  );
}
