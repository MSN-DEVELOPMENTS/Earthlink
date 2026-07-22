'use client';

import { useState } from 'react';
import Image from 'next/image';

/* Detail-page photo gallery: one large active image with a row of clickable
   thumbnails beneath it. Falls back to a single image when only one is given.

   Every photo is rendered stacked and loaded up front, and switching only
   toggles opacity — swapping the `src` on a single <Image> left a white hole
   while the next photo downloaded, which is what you saw when moving between
   listings. The frame keeps a paper tint underneath so nothing ever flashes
   white before the first photo paints. */
export default function PropertyGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const photos = images && images.length ? images : [];
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);

  if (!photos.length) return null;

  return (
    <div className="prop-gallery reveal">
      <div className={`detail-media${ready ? ' is-ready' : ''}`}>
        {photos.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={i === 0 ? alt : ''}
            fill
            priority={i === 0}
            loading={i === 0 ? undefined : 'eager'}
            quality={90}
            sizes="(max-width: 860px) 100vw, 50vw"
            className={`prop-shot${i === active ? ' is-active' : ''}`}
            style={{ objectFit: 'cover' }}
            onLoad={() => {
              if (i === 0) setReady(true);
            }}
          />
        ))}
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
                loading="eager"
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
