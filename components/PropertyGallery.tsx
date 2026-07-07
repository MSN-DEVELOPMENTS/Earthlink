'use client';

import { useState } from 'react';
import Image from 'next/image';

/* Detail-page photo gallery: one large active image with a row of clickable
   thumbnails beneath it. Falls back to a single image when only one is given. */
export default function PropertyGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const photos = images && images.length ? images : [];
  const [active, setActive] = useState(0);

  if (!photos.length) return null;

  return (
    <div className="prop-gallery reveal">
      <div className="detail-media">
        <Image
          src={photos[active]}
          alt={alt}
          fill
          priority
          quality={90}
          sizes="(max-width: 860px) 100vw, 50vw"
          style={{ objectFit: 'cover' }}
        />
      </div>

      {photos.length > 1 && (
        <div className="prop-thumbs" role="group" aria-label={`${alt} photos`}>
          {photos.map((src, i) => (
            <button
              key={src}
              type="button"
              className={`prop-thumb${i === active ? ' is-active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Show photo ${i + 1} of ${photos.length}`}
              aria-current={i === active}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="120px"
                style={{ objectFit: 'cover' }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
