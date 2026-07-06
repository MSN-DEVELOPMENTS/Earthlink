import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Branded social-share card built over the homepage hero photo (the desert
// dune), so link previews match what visitors first see on the site.
export const alt = 'Earth Link Real Estate — Dubai Brokerage';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Locally bundled PT Serif (a Georgia-like screen serif) so the card never
// depends on a network font fetch at build time.
const fontsDir = join(process.cwd(), 'public', 'fonts');

export default async function OpengraphImage() {
  const [serifRegular, serifBold, serifBoldItalic, heroPoster] = await Promise.all([
    readFile(join(fontsDir, 'PTSerif-Regular.ttf')),
    readFile(join(fontsDir, 'PTSerif-Bold.ttf')),
    readFile(join(fontsDir, 'PTSerif-BoldItalic.ttf')),
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
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: '#15232b',
          fontFamily: 'PT Serif',
        }}
      >
        {/* Hero photo, full-bleed */}
        <img
          src={heroSrc}
          width={size.width}
          height={size.height}
          style={{ position: 'absolute', top: 0, left: 0, width: `${size.width}px`, height: `${size.height}px`, objectFit: 'cover' }}
        />
        {/* Dark scrim so the branding stays legible over the photo */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${size.width}px`,
            height: `${size.height}px`,
            background: 'linear-gradient(135deg, rgba(21,35,43,0.82) 0%, rgba(21,35,43,0.45) 55%, rgba(21,35,43,0.75) 100%)',
          }}
        />
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '14px',
              background: '#c3a97c',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#1f3643',
              fontSize: '38px',
              fontWeight: 700,
            }}
          >
            E
          </div>
          <div style={{ color: '#f4f1e9', fontSize: '34px', fontWeight: 700, letterSpacing: '-0.5px' }}>
            Earth Link
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div style={{ color: '#c3a97c', fontSize: '24px', letterSpacing: '4px', textTransform: 'uppercase' }}>
            Dubai Brokerage · Backed by ERE
          </div>
          <div style={{ color: '#f4f1e9', fontSize: '76px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-2px' }}>
            Dubai real estate,
          </div>
          <div style={{ color: '#c3a97c', fontSize: '76px', fontWeight: 700, fontStyle: 'italic', lineHeight: 1.05, letterSpacing: '-2px' }}>
            made clear.
          </div>
        </div>

        <div style={{ color: '#9fb0b8', fontSize: '26px', display: 'flex' }}>
          Buy, lease, or invest with advice you can trust.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'PT Serif', data: serifRegular, weight: 400, style: 'normal' },
        { name: 'PT Serif', data: serifBold, weight: 700, style: 'normal' },
        { name: 'PT Serif', data: serifBoldItalic, weight: 700, style: 'italic' },
      ],
    }
  );
}
