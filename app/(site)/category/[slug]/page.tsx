import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { dynamicSeoMetadata } from '@/lib/seo';
import { getCategories, getCategoryBySlug, getPostsByCategory } from '@/lib/categories';

/* Archive page for one blog category, newest first. Categories are blog-only,
   so news articles never appear here (see lib/categories.ts). */

// Rebuild from Sanity at most once every 60s (ISR), matching /blog and /news.
export const revalidate = 60;

export async function generateStaticParams() {
  // Every category, not just the ones currently in use: a category that gains
  // its first article between rebuilds still resolves (dynamicParams default).
  const categories = await getCategories();
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const category = await getCategoryBySlug(params.slug);
  if (!category) return { title: 'Category' };
  const path = `/category/${category.slug}`;
  const base = dynamicSeoMetadata(path, {
    title: withBrand(category.seoTitle || category.title),
    description:
      category.metaDescription ||
      category.description ||
      `Articles and updates from Earth Link Real Estate filed under ${category.title}.`,
  });
  return {
    ...base,
    // Fallback titles come back as plain strings, which the site-wide
    // "%s — Earth Link Real Estate" template would append the brand to a
    // second time. Ours already carries it, so mark it absolute. Titles from
    // the SEO sheet are already absolute and pass through untouched.
    title: typeof base.title === 'string' ? { absolute: base.title } : base.title,
  };
}

const BRAND = 'Earth Link Real Estate';

/* Editors may or may not type the brand into the Studio SEO title field, so
   append it only when it isn't there already. */
function withBrand(title: string): string {
  return title.includes(BRAND) ? title : `${title} | ${BRAND}`;
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const category = await getCategoryBySlug(params.slug);
  if (!category) notFound();

  const posts = await getPostsByCategory(params.slug);

  return (
    <>
      {/* ===== HEADER — cover photo behind the title when the category has
           one in Studio, otherwise the plain paper head. ===== */}
      <section className={`page-head${category.img ? ' page-head--cover' : ''}`}>
        {category.img && (
          <>
            <div className="page-head-img" aria-hidden="true">
              <Image
                src={category.img}
                alt={category.imageAlt || ''}
                fill
                sizes="100vw"
                priority
                quality={85}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="page-head-overlay" aria-hidden="true" />
          </>
        )}
        <div className="wrap">
          <span className="eyebrow reveal" style={{ display: 'block', marginBottom: 14 }}>Category</span>
          <h1 className="reveal">{category.title}</h1>
          {category.description && <p className="reveal">{category.description}</p>}
        </div>
      </section>

      {/* ===== ARTICLES ===== */}
      <section id="articles">
        <div className="wrap">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="eyebrow">
              {posts.length} {posts.length === 1 ? 'Article' : 'Articles'}
            </span>
            <h2 className="section-title" style={{ marginTop: 12 }}>Filed under {category.title}</h2>
          </div>

          {posts.length > 0 ? (
            <div className="blog-grid">
              {posts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="blog-card reveal">
                  <div className="blog-card-img">
                    {post.img && (
                      <Image
                        src={post.img}
                        alt={post.imageAlt || post.title}
                        fill
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
          ) : (
            <p className="cat-empty reveal">
              Nothing filed under {category.title} yet. Read the{' '}
              <Link href="/blog">journal</Link> in the meantime.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
