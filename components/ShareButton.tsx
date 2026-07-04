'use client';

import { useState } from 'react';

/* Small share control for the property detail page. On devices that support the
   Web Share API (most phones) it opens the native share sheet — WhatsApp, etc.
   Elsewhere (desktop) it copies the page link and shows brief confirmation. */
export default function ShareButton({
  title,
  text,
}: {
  title: string;
  text?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const data = { title, text: text ?? title, url };

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share(data);
        return;
      } catch {
        // User dismissed the sheet, or share failed — fall through to copy.
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — nothing else we can safely do.
    }
  }

  return (
    <button
      type="button"
      className="share-btn"
      onClick={handleShare}
      aria-label={`Share ${title}`}
      title="Share this property"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.6" y1="13.5" x2="15.4" y2="17.5" />
        <line x1="15.4" y1="6.5" x2="8.6" y2="10.5" />
      </svg>
      <span className="share-btn-label">{copied ? 'Link copied' : 'Share'}</span>
    </button>
  );
}
