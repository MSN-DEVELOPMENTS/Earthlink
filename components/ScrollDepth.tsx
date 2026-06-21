'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Adds a depth effect to horizontal-scroll rails (`.comm-grid`): as the user
 * scrolls sideways, each tile's shadow lifts slightly upward and the tile
 * rises, then eases back to rest. Sets a `--shift` CSS variable the stylesheet
 * reads. Skipped entirely when the user prefers reduced motion.
 */
export default function ScrollDepth() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rails = Array.from(document.querySelectorAll<HTMLElement>('.comm-grid'));
    const cleanups: Array<() => void> = [];

    rails.forEach((rail) => {
      let shift = 0;
      let target = 0;
      let raf = 0;
      let lastLeft = rail.scrollLeft;

      const frame = () => {
        shift += (target - shift) * 0.18;
        target *= 0.86; // ease the lift back to rest when scrolling stops
        rail.style.setProperty('--shift', shift.toFixed(2) + 'px');
        if (Math.abs(shift) > 0.1 || Math.abs(target) > 0.1) {
          raf = requestAnimationFrame(frame);
        } else {
          rail.style.setProperty('--shift', '0px');
          raf = 0;
        }
      };

      const onScroll = () => {
        const dx = Math.abs(rail.scrollLeft - lastLeft);
        lastLeft = rail.scrollLeft;
        target = Math.min(12, target + dx * 0.5); // cap the lift at 12px
        if (!raf) raf = requestAnimationFrame(frame);
      };

      rail.addEventListener('scroll', onScroll, { passive: true });
      cleanups.push(() => {
        rail.removeEventListener('scroll', onScroll);
        if (raf) cancelAnimationFrame(raf);
      });
    });

    return () => cleanups.forEach((c) => c());
  }, [pathname]);

  return null;
}
