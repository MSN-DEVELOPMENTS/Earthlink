import QRCode from 'react-qr-code';

type PropertyQrProps = {
  /** External listing URL to encode (a property's Bayut page). */
  url: string;
  /** Rendered width/height of the QR in px. */
  size?: number;
  className?: string;
};

/* Renders an SVG QR code that encodes a property's external listing URL, so
   scanning it opens the Bayut page. Pure SVG output (no canvas, no runtime
   image fetching), so it is safe to render on the server.

   The QR sits in a solid white, padded box so its dark modules keep enough
   contrast to scan regardless of the surrounding light/dark theme. */
export default function PropertyQr({ url, size = 120, className }: PropertyQrProps) {
  // No listing URL → render nothing rather than a broken/empty box.
  if (!url || !url.trim()) return null;

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
      <QRCode
        value={url}
        size={size}
        bgColor="#ffffff"
        fgColor="#000000"
        level="M"
        role="img"
        aria-label="QR code linking to this property on Bayut"
        style={{ display: 'block', width: size, height: 'auto', maxWidth: '100%' }}
      />
    </div>
  );
}
