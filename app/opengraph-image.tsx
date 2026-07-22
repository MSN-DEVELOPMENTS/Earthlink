import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Social-share card. Deliberately a plain reproduction of the homepage hero —
// the hero photo with the site title over it, nothing else. No eyebrow, no
// tagline, no logo badge: a shared link should look like the page it opens.
export const alt = 'Earth Link Real Estate — Dubai Brokerage';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Locally bundled PT Serif so the card never depends on a network font fetch at
// build time.
const fontsDir = join(process.cwd(), 'public', 'fonts');

export default async function OpengraphImage() {
  const [serifRegular, heroPoster] = await Promise.all([
    readFile(join(fontsDir, 'PTSerif-Regular.ttf')),
    // Read the hero image from disk and inline it as a data URI. Fetching it by
    // URL would fail on protection-gated preview deployments.
    readFile(join(process.cwd(), 'public', 'home', 'hero-poster.jpg')),
  ]);

  const heroSrc = `data:image/jpeg;base64,${heroPoster.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0c0e0f',
          fontFamily: 'PT Serif',
        }}
      >
        {/* Hero photo, full-bleed */}
        <img
          src={heroSrc}
          width={size.width}
          height={size.height}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${size.width}px`,
            height: `${size.height}px`,
            objectFit: 'cover',
          }}
        />

        {/* The same light scrim the hero uses, so the title stays readable over
            the bright part of the sky without dimming the photo. */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${size.width}px`,
            height: `${size.height}px`,
            background:
              'linear-gradient(180deg, rgba(12,14,15,0.30) 0%, rgba(12,14,15,0.12) 45%, rgba(12,14,15,0.38) 100%)',
          }}
        />

        {/* Title, centred — matching the hero: white lead, champagne accent. */}
        {/* The word gap comes from flex `gap`, not a trailing space — Satori
            collapses trailing whitespace inside a span, which ran the two halves
            of the title together. */}
        <div
          style={{
            display: 'flex',
            gap: '26px',
            fontSize: '96px',
            letterSpacing: '-1px',
            textShadow: '0 2px 28px rgba(10,18,23,0.45)',
          }}
        >
          <span style={{ color: '#f4f0e8' }}>Earth Link</span>
          <span style={{ color: '#c3a97c' }}>Real Estate</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'PT Serif', data: serifRegular, weight: 400, style: 'normal' }],
    }
  );
}
