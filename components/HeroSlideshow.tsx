'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type Slide = { src: string; alt: string };

const SLIDES: Slide[] = [
  { src: '/home/hero-1.jpg', alt: 'Dubai skyline view' },
  { src: '/home/hero-2.jpg', alt: 'Dubai waterfront living' },
  { src: '/home/hero-3.jpg', alt: 'Dubai luxury development' },
  { src: '/home/hero-4.jpg', alt: 'Dubai residential community' },
];

const INTERVAL = 5000; // ms each slide is shown

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero-bg hero-slideshow" aria-hidden="true">
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className={`hero-slide${i === active ? ' is-active' : ''}`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
      ))}
    </div>
  );
}
