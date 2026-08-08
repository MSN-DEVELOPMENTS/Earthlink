/* One-off migration: rename three blog categories.

   The team relabelled the category list, and the slugs moved with the titles:

     Buying in Dubai and the UAE            → Dubai Community
     Real Estate Investment in the UAE      → Real Estate Investment
     Commercial Real Estate Renting in Dubai → Selling in Dubai

   (UAE Property Market and Renting in Dubai are unchanged.)

   This patches the existing documents in place rather than creating new ones,
   so `_id` stays as `category-<old-slug>` and every post reference keeps
   resolving. The id is internal — only `slug.current` drives the URL, and the
   three old /category/<slug> paths are 301'd in next.config.mjs.

   Run with:  npx sanity exec scripts/rename-categories.ts --with-user-token

   That borrows your logged-in CLI session, so it needs no SANITY_API_TOKEN.

   Idempotent — a document already carrying the new slug is skipped. */
import { getCliClient } from 'sanity/cli';

/* Keep in step with the `categories` fallback array in lib/data.ts. Inlined
   rather than imported because that module uses the `@/` path alias, which
   bare Node cannot resolve. */
const RENAMES = [
  {
    id: 'category-buying-in-dubai-and-the-uae',
    title: 'Dubai Community',
    slug: 'dubai-community',
    description: 'Neighbourhoods across Dubai, and what living in each one is actually like.',
  },
  {
    id: 'category-real-estate-investment-in-the-uae',
    title: 'Real Estate Investment',
    slug: 'real-estate-investment',
    description: 'Yield, strategy, and the costs that decide a return.',
  },
  {
    id: 'category-commercial-real-estate-renting-in-dubai',
    title: 'Selling in Dubai',
    slug: 'selling-in-dubai',
    description: 'Pricing, listing, and closing a sale, and what each stage involves.',
  },
];

const client = getCliClient({ apiVersion: '2024-01-01' });

type Doc = { _id: string; title?: string; slug?: { current?: string } };

async function run() {
  const { projectId, dataset } = client.config();
  if (!client.config().token) {
    throw new Error(
      'No token — run with: npx sanity exec scripts/rename-categories.ts --with-user-token'
    );
  }

  console.log(`Renaming ${RENAMES.length} categories in ${projectId}/${dataset}…\n`);

  let renamed = 0;
  let skipped = 0;

  for (const r of RENAMES) {
    const doc = await client.fetch<Doc | null>(`*[_id == $id][0]{_id, title, slug}`, {
      id: r.id,
    });

    if (!doc) {
      console.warn(`  ! ${r.id} not found — skipped (rename it by hand in Studio)`);
      continue;
    }

    if (doc.slug?.current === r.slug) {
      console.log(`  · ${r.title} — already renamed`);
      skipped++;
      continue;
    }

    await client
      .patch(r.id)
      .set({
        title: r.title,
        slug: { _type: 'slug', current: r.slug },
        description: r.description,
      })
      .commit();

    console.log(`  ✓ "${doc.title}" → "${r.title}" (${r.slug})`);
    renamed++;
  }

  console.log(`\nDone. ${renamed} renamed, ${skipped} already up to date.`);
  console.log('Old /category/<slug> URLs are 301’d in next.config.mjs — no action needed there.');
}

run().catch((e) => {
  console.error('\nRename failed:', e.message);
  process.exit(1);
});
