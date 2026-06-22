import { ImageResponse } from 'next/og';

// Branded social-share card, generated automatically (no static asset needed).
export const alt = 'Earthlink Real Estate — Dubai Brokerage';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
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
          background: 'linear-gradient(135deg, #1f3643 0%, #15232b 100%)',
          fontFamily: 'Georgia, serif',
        }}
      >
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
            Earthlink
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
    { ...size }
  );
}
