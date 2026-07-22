'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navLinks } from '@/lib/site-config';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}${open ? ' menu-open' : ''}`} id="nav">
      <div className="wrap">
        <div className="nav-inner">
          <Link href="/" className="logo" aria-label="Earth Link Real Estate — home">
            <img src="/logo.png" alt="Earth Link Real Estate" className="logo-img" />
          </Link>

          <nav className={`links${open ? ' open' : ''}`} id="navlinks">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? 'active' : ''}
              >
                {link.label}
              </Link>
            ))}
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
