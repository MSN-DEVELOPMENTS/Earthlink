/* One-off migration: import the hardcoded properties from lib/data.ts into Sanity.
   Run with:  node --env-file=.env.local scripts/migrate-properties.ts
   Idempotent — uses a deterministic _id per property, so re-running updates
   rather than duplicating. */
import { createClient } from '@sanity/client';
import { properties } from '../lib/data.ts';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function uploadImage(url: string, filename: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`fetch ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const asset = await client.assets.upload('image', buf, { filename });
  return asset._id;
}

async function run() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.SANITY_API_TOKEN) {
    throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN in .env.local');
  }
  console.log(`Importing ${properties.length} properties into project ${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}…\n`);

  for (let i = 0; i < properties.length; i++) {
    const p = properties[i];
    let image: unknown = undefined;
    try {
      const ref = await uploadImage(p.img, `${p.slug}.jpg`);
      image = { _type: 'image', asset: { _type: 'reference', _ref: ref } };
    } catch (e) {
      console.warn(`  ! image upload failed for ${p.name}: ${(e as Error).message}`);
    }

    await client.createOrReplace({
      _id: `property-${p.slug}`,
      _type: 'property',
      name: p.name,
      slug: { _type: 'slug', current: p.slug },
      tag: p.tag,
      location: p.location,
      type: p.type,
      beds: p.beds,
      area: p.area,
      price: p.price,
      ref: p.ref,
      permit: p.permit,
      description: p.description,
      order: i,
      ...(image ? { image } : {}),
    });
    console.log(`  ✓ ${p.name}`);
  }
  console.log('\nDone. Visit /studio to see them.');
}

run().catch((e) => {
  console.error('\nMigration failed:', e.message);
  process.exit(1);
});
