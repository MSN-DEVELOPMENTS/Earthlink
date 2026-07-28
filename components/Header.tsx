'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navLinks } from '@/lib/site-config';

type NavCategory = { title: string; slug: string };

export default function Header({ categories = [] }: { categories?: NavCategory[] }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // Media Center dropdown, and the Blogs flyout nested inside it.
  const [mediaOpen, setMediaOpen] = useState(false);
  const [blogsOpen, setBlogsOpen] = useState(false);

  // Add a shadow/blur to the nav once the page is scrolled. The listener is
  // passive so it never blocks scrolling, and the work is coalesced into one
  // frame instead of running on every scroll event.
  useEffect(() => {
    let queued = false;
    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        setScrolled(window.scrollY > 30);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu and both dropdowns whenever the route changes.
  useEffect(() => {
    setOpen(false);
    setMediaOpen(false);
    setBlogsOpen(false);
  }, [pathname]);

  const closeMedia = () => {
    setMediaOpen(false);
    setBlogsOpen(false);
  };

  // Media Center stays highlighted across everything it contains.
  const inMediaCenter =
    pathname.startsWith('/media-center') ||
    pathname.startsWith('/news') ||
    pathname.startsWith('/blog') ||
    pathname.startsWith('/category');

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}${open ? ' menu-open' : ''}`} id="nav">
      <div className="wrap">
        <div className="nav-inner">
          <Link href="/" className="logo" aria-label="Earth Link Real Estate — home">
            <img src="/logo.png" alt="Earth Link Real Estate" className="logo-img" />
          </Link>

          <nav className={`links${open ? ' open' : ''}`} id="navlinks">
            {navLinks.map((link) =>
              link.href === '/media-center' ? (
                /* Media Center → News / Blogs → the blog categories.
                   Hover opens it on desktop; tap toggles it on touch. */
                <div
                  key={link.href}
                  className={`nav-drop${mediaOpen ? ' is-open' : ''}`}
                  onMouseEnter={() => setMediaOpen(true)}
                  onMouseLeave={closeMedia}
                >
                  <button
                    type="button"
                    className={`nav-drop-btn${inMediaCenter ? ' active' : ''}`}
                    aria-expanded={mediaOpen}
                    onClick={() => setMediaOpen((v) => !v)}
                  >
                    {link.label}
                    <span className="nav-caret" aria-hidden="true" />
                  </button>

                  <div className="nav-panel">
                    <Link href="/media-center">Overview</Link>
                    <Link href="/news">News</Link>

                    <div
                      className={`nav-sub${blogsOpen ? ' is-open' : ''}`}
                      onMouseEnter={() => setBlogsOpen(true)}
                      onMouseLeave={() => setBlogsOpen(false)}
                    >
                      {/* Blogs itself goes to the full blog listing; the flyout
                          beside it narrows that listing down to one category. */}
                      <Link href="/blog" className="nav-sub-btn" aria-expanded={blogsOpen}>
                        Blogs
                        <span className="nav-chevron" aria-hidden="true" />
                      </Link>

                      <div className="nav-sub-panel">
                        {categories.map((c) => (
                          <Link key={c.slug} href={`/category/${c.slug}`}>
                            {c.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={pathname === link.href ? 'active' : ''}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <Link href="/contact" className="btn btn-gold" style={{ padding: '10px 20px' }}>
            Book a Consultation
          </Link>

          <button
            className="burger"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
