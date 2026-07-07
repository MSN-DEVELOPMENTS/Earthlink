import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

// Recovery index — the useful destinations someone who hit a dead link most
// likely wanted. Doubles as the brand's "Editorial Index" signature.
const index = [
  { label: 'Properties', href: '/properties' },
  { label: 'Developers', href: '/developers' },
  { label: 'Media Center', href: '/media-center' },
  { label: 'Contact', href: '/contact' },
];

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="nf">
          <div className="wrap nf-inner">
            <span className="eyebrow nf-eyebrow">Error 404 · Not on the map</span>

            <div className="nf-code" aria-hidden="true">
              4<span className="nf-o">0</span>4
            </div>

            <h1 className="nf-title">This address isn&rsquo;t listed.</h1>

            <p className="nf-lead">
              The page you&rsquo;re looking for may have sold, moved, or never
              existed. Here&rsquo;s the way back to the ones that are live.
            </p>

            <div className="hero-btns nf-btns">
              <Link href="/properties" className="btn btn-gold">Browse properties</Link>
              <Link href="/" className="btn btn-glass">Back to home</Link>
            </div>

            <nav className="nf-index" aria-label="Popular destinations">
              <span className="nf-index-label">Or jump to</span>
              <ul>
                {index.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
