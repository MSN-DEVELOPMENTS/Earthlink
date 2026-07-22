'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  /** Path to the mp4 under /public, without a cache-busting query. */
  src: string;
  /** Path to the poster jpg under /public, without a cache-busting query. */
  poster: string;
  className?: string;
};

/** Bump when a hero video or poster is re-exported so caches refresh. */
const ASSET_VERSION = '3';

/**
 * Background hero video that never competes with the first paint.
 *
 * The poster is the only thing the browser fetches up front. The mp4 source is
 * attached after the page has finished loading, so the video downloads with the
 * leftover bandwidth instead of racing the copy, fonts and above-the-fold
 * images. Visitors on a metered or 2G connection, and anyone who asks for
 * reduced motion, keep the poster and never download the video at all.
 */
export default function HeroVideo({ src, poster, className = 'hero-bg hero-video' }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const motionOk = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    const connOk = !conn?.saveData && !/(^|-)2g$/.test(conn?.effectiveType ?? '');
    if (!motionOk || !connOk) return;

    let timer: ReturnType<typeof setTimeout>;
    // Give the rest of the page a moment to settle before asking for ~2MB of video.
    const schedule = () => {
      timer = setTimeout(() => setLoad(true), 600);
    };

    if (document.readyState === 'complete') schedule();
    else window.addEventListener('load', schedule, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', schedule);
    };
  }, []);

  // `autoPlay` only applies to the source the element had when it mounted, so a
  // source attached later loads but never starts. Kick it off by hand; the
  // promise rejects harmlessly if a browser declines, leaving the poster up.
  useEffect(() => {
    const el = ref.current;
    if (!load || !el) return;

    const play = () => {
      el.play().catch(() => {
        /* poster stays visible — acceptable fallback */
      });
    };
    // Wait for decodable data before calling play(), otherwise load() and play()
    // race and the play promise is aborted.
    el.addEventListener('canplay', play);
    el.load();

    return () => el.removeEventListener('canplay', play);
  }, [load]);

  return (
    <video
      ref={ref}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      poster={`${poster}?v=${ASSET_VERSION}`}
      aria-hidden="true"
    >
      {load && <source src={`${src}?v=${ASSET_VERSION}`} type="video/mp4" />}
    </video>
  );
}
