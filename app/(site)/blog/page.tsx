import type { Metadata } from 'next';
import { blogCategories } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Blog',
  alternates: { canonical: '/blog' },
  description: 'Clear market insight on Dubai real estate: prices, yields, neighbourhood guides, and investor notes.',
};

export default function BlogPage() {
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
