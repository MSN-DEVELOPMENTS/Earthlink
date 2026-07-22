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
const ASSET_VERSION = '4';

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

    // Two timers race, and whichever fires first starts the video.
    //
    // The point of waiting at all is to let the headline and above-the-fold
    // images paint before we ask for ~1MB of video. `window.load` is the ideal
    // moment for that, but it must never be the ONLY trigger: it waits on every
    // image on the page, including the remote Bayut photos, so a single slow or
    // stalled request means it fires very late or not at all — and the hero
    // would sit on the poster until the visitor reloaded.
    //
    // So the load event is treated as an optimisation, and the cap guarantees
    // the video always starts on its own within ~600ms of mount.
    let started = false;
    const start = () => {
      if (started) return;
      started = true;
      setLoad(true);
    };

    const cap = setTimeout(start, 600);
    const onLoad = () => setTimeout(start, 200);

    if (document.readyState === 'complete') onLoad();
    else window.addEventListener('load', onLoad, { once: true });

    return () => {
      clearTimeout(cap);
      window.removeEventListener('load', onLoad);
    };
  }, []);

  // `autoPlay` only applies to the source the element had when it mounted, so a
  // source attached later loads but never starts — it has to be started by hand.
  // Beyond that first call, a background hero has several ways of quietly
  // stopping: the autoplay policy can refuse before any user gesture, a browser
  // pauses offscreen/backgrounded video and does not always resume it, and
  // mobile Safari pauses on tab switch. Each of those is handled below so the
  // video is playing whenever the page is actually being looked at. Continuous
  // replay itself comes from the `loop` attribute.
  useEffect(() => {
    const el = ref.current;
    if (!load || !el) return;

    let cancelled = false;
    // Bounded so a browser that flatly refuses playback cannot spin forever.
    let attempts = 0;
    const MAX_ATTEMPTS = 12;

    const play = () => {
      if (cancelled || !el.paused || attempts >= MAX_ATTEMPTS) return;
      attempts += 1;
      el.play().catch(() => {
        /* refused for now — a later gesture or visibility change retries */
      });
    };

    // A user gesture lifts the autoplay restriction in every browser that has
    // one, so retry on the first interaction of any kind.
    const onGesture = () => {
      attempts = 0;
      play();
    };

    const onVisibility = () => {
      if (document.visibilityState !== 'visible') return;
      attempts = 0;
      play();
    };

    // Wait for decodable data before calling play(), otherwise load() and play()
    // race and the play promise is aborted.
    el.addEventListener('canplay', play);
    el.addEventListener('loadeddata', play);
    // If anything pauses it while the page is visible, resume.
    el.addEventListener('pause', onVisibility);
    document.addEventListener('visibilitychange', onVisibility);
    const gestures = ['pointerdown', 'touchstart', 'keydown', 'scroll'] as const;
    gestures.forEach((g) => window.addEventListener(g, onGesture, { passive: true, once: true }));

    el.load();

    return () => {
      cancelled = true;
      el.removeEventListener('canplay', play);
      el.removeEventListener('loadeddata', play);
      el.removeEventListener('pause', onVisibility);
      document.removeEventListener('visibilitychange', onVisibility);
      gestures.forEach((g) => window.removeEventListener(g, onGesture));
    };
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
