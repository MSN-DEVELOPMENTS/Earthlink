'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Parallax for large framed images (`.hero-media`, `.about-img`): the inner
 * <img> is slightly over-scaled and drifts vertically as the element passes
 * through the viewport, so the picture appears to move within its rounded
 * frame on scroll. Skipped entirely when the user prefers reduced motion.
 */
export default function ScrollParallax() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const items = Array.from(
      document.querySelectorAll<HTMLElement>('.hero-media, .about-img')
    )
      .map((el) => ({ el, img: el.querySelector('img') }))
      .filter((x): x is { el: HTMLElement; img: HTMLImageElement } => !!x.img);

    if (!items.length) return;

    let raf = 0;

    const update = () => {
      const vh = window.innerHeight;
      items.forEach(({ el, img }) => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -120 || rect.top > vh + 120) return; // offscreen
        // -1 (element above centre) .. +1 (element below centre)
        const p = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
        const shift = Math.max(-1, Math.min(1, p)) * -7; // drift ±7%
        img.style.transform = `translateY(${shift.toFixed(2)}%) scale(1.14)`;
      });
      raf = 0;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return null;
}
