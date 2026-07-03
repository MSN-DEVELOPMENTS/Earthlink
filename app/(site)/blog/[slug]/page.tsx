import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { PortableText } from 'next-sanity';
import type { PortableTextComponents } from '@portabletext/react';
import { getPostBySlug, getPostSlugs } from '@/lib/blog';
import { dynamicSeoMetadata } from '@/lib/seo';

// Rebuild each post from Sanity at most once every 60s (ISR); new posts not
// present at build time are generated on first visit (dynamicParams default).
export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: 'Post' };
  return dynamicSeoMetadata(`/blog/${post.slug}`, {
    title: post.seoTitle || post.title,
    description: post.metaDescription || post.excerpt,
  });
}

/* Render the Portable Text body with the site's own elements/classes. */
const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h2: ({ children }) => <h2 className="post-h2">{children}</h2>,
    blockquote: ({ children }) => <blockquote className="post-quote">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className="post-ul">{children}</ul>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    link: ({ children, value }) => {
      const href = (value as { href?: string })?.href || '#';
      const internal = href.startsWith('/');
      return internal ? (
        <Link href={href}>{children}</Link>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
      );
    },
  },
};

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article>
      <section className="page-head">
        <div className="wrap">
          {post.category && <p className="post-meta reveal">{post.category}</p>}
          <h1 className="reveal" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>{post.title}</h1>
        </div>
      </section>

      <section className="section-light" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <Link href="/blog" className="back-link">← Back to the journal</Link>

          {post.img && (
            <div className="about-img reveal" style={{ aspectRatio: '16 / 8', marginBottom: 36 }}>
              <Image
                src={post.img}
                alt={post.imageAlt || post.title}
                fill
                priority
                sizes="(max-width: 800px) 100vw, 760px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          )}

          <div className="post-body reveal">
            <PortableText value={post.body} components={components} />

            {post.faqs && post.faqs.length > 0 && (
              <div className="post-faq">
                <h2 className="post-h2">Frequently Asked Questions</h2>
                <dl className="faq-list">
                  {post.faqs.map((f) => (
                    <div className="faq-item" key={f.question}>
                      <dt>{f.question}</dt>
                      <dd>{f.answer}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
        </div>
      </section>
    </article>
  );
}
