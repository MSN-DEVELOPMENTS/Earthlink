'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Reveals elements with the `.reveal` class as they scroll into view.
 * Re-runs on every route change so newly mounted pages animate too.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Tell the inline failsafe (in layout.tsx) that the real animation is live.
    const w = window as unknown as { __revealActive?: boolean; __revealFailsafe?: number };
    w.__revealActive = true;
    if (w.__revealFailsafe) clearTimeout(w.__revealFailsafe);

    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 70}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
