import QRCode from 'react-qr-code';

type PropertyQrProps = {
  /** URL to encode — the property's DLD Trakheesi permit validation link. */
  url: string;
  /** Rendered width/height of the QR in px. */
  size?: number;
  className?: string;
};

/* Renders an SVG QR code that encodes a property's DLD Trakheesi permit
   validation URL, so scanning it opens the Dubai Land Department page that
   verifies the listing's permit. Pure SVG output (no canvas, no runtime
   image fetching), so it is safe to render on the server.

   A DLD palm-tree logo sits in the centre (matching Bayut's Trakheesi QR),
   inside a white circle. The QR uses the highest error-correction level (H)
   so the covered centre modules are recoverable and the code still scans.

   The QR sits in a solid white, padded box so its dark modules keep enough
   contrast to scan regardless of the surrounding light/dark theme. */
export default function PropertyQr({ url, size = 120, className }: PropertyQrProps) {
  // No listing URL → render nothing rather than a broken/empty box.
  if (!url || !url.trim()) return null;

  // Centre logo sized to ~30% of the QR — large enough to read, small enough
  // that level-H error correction still recovers the covered modules.
  const logo = Math.round(size * 0.3);
  const circle = Math.round(logo * 1.28);

  return (
    <div
      className={className}
      style={{
        display: 'inline-block',
        background: '#fff',
        padding: 10,
        borderRadius: 'var(--radius)',
        border: '1px solid var(--line-2)',
        lineHeight: 0,
      }}
    >
      <div style={{ position: 'relative', width: size, height: size }}>
        <QRCode
          value={url}
          size={size}
          bgColor="#ffffff"
          fgColor="#000000"
          level="H"
          role="img"
          aria-label="QR code to verify this property's DLD Trakheesi permit"
          style={{ display: 'block', width: size, height: 'auto', maxWidth: '100%' }}
        />
        {/* White circle + DLD palm-tree logo, centred over the QR. */}
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: circle,
            height: circle,
            background: '#fff',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/dld-logo.svg" alt="" width={logo} height={logo} style={{ display: 'block' }} />
        </span>
      </div>
    </div>
  );
}
