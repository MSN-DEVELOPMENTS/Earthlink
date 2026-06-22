import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { posts } from '@/lib/data';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Post' };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <article>
      <section className="page-head">
        <div className="wrap">
          <p className="post-meta reveal">{post.category}</p>
          <h1 className="reveal" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>{post.title}</h1>
        </div>
      </section>

      <section style={{ paddingTop: 20 }}>
        <div className="wrap">
          <Link href="/blog" className="back-link">← Back to the journal</Link>
          <div className="about-img reveal" style={{ aspectRatio: '16 / 8', marginBottom: 36 }}>
            <Image
              src={post.img}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 800px) 100vw, 760px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="post-body reveal">
            {post.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="post-body" style={{ marginTop: 36, textAlign: 'center' }}>
            <Link href="/contact" className="btn btn-gold">Talk to a Consultant</Link>
          </div>
        </div>
      </section>
    </article>
  );
}
