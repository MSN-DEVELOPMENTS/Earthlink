/* One-off migration: introduce blog categories.

   `post.category` used to be a hardcoded string dropdown; it is now a
   reference to a `category` document the team edits in Studio. News dropped
   its category field entirely. This script:
     1. creates the five seed categories,
     2. repoints every post whose `category` is still a plain string, and
     3. clears the leftover string off news documents.

   Run with:  npx sanity exec scripts/migrate-categories.ts --with-user-token

   That borrows your logged-in CLI session, so it needs no SANITY_API_TOKEN —
   which matters, because the token in .env is revoked.

   Idempotent — categories use a deterministic _id, and step 2 skips any doc
   whose category is already a reference, so re-running is safe. */
import { getCliClient } from 'sanity/cli';

/* Deliberately inlined rather than imported from lib/data.ts: that module
   imports through the `@/` path alias, which bare Node cannot resolve.

   SUPERSEDED — three of these were later renamed (see
   scripts/rename-categories.ts), so this list is the historical seed, not the
   current one; lib/data.ts holds the live titles and slugs. Do not re-run this
   script: createOrReplace on the same ids would revert the rename. */
const categories = [
  {
    title: 'Buying in Dubai and the UAE',
    slug: 'buying-in-dubai-and-the-uae',
    description: 'Every step of buying a home in Dubai and the wider UAE, in plain order.',
  },
  {
    title: 'UAE Property Market',
    slug: 'uae-property-market',
    description: 'Prices, yields, and demand across Dubai and the UAE, explained simply.',
  },
  {
    title: 'Real Estate Investment in the UAE',
    slug: 'real-estate-investment-in-the-uae',
    description: 'Yield, strategy, and the costs that decide a return.',
  },
  {
    title: 'Commercial Real Estate Renting in Dubai',
    slug: 'commercial-real-estate-renting-in-dubai',
    description: 'Office, retail, and warehouse space, and what leasing one involves.',
  },
  {
    title: 'Renting in Dubai',
    slug: 'renting-in-dubai',
    description: 'What tenants need to know, from budgets and contracts to renewals.',
  },
];

// projectId/dataset come from sanity.cli.ts; the token comes from the CLI
// session when run with --with-user-token.
const client = getCliClient({ apiVersion: '2024-01-01' });

const idFor = (slug: string) => `category-${slug}`;

/* Old blog string values → new category slug. Anything not listed here is
   matched by title, and reported if it still finds nothing. */
const RENAMES: Record<string, string> = {
  'Market Intelligence': 'uae-property-market',
  'Market Update': 'uae-property-market',
  'Investor Notes': 'real-estate-investment-in-the-uae',
  'Buyer & Tenant Guides': 'buying-in-dubai-and-the-uae',
  // No equivalent among the five: they are all property topics. Files under
  // the closest match rather than dropping the label.
  'Neighbourhood Guides': 'buying-in-dubai-and-the-uae',
};

type Doc = { _id: string; _type: string; title?: string; category?: unknown };

async function run() {
  const { projectId, dataset } = client.config();
  if (!client.config().token) {
    throw new Error('No token — run with: npx sanity exec scripts/migrate-categories.ts --with-user-token');
  }

  console.log(`Seeding ${categories.length} categories into ${projectId}/${dataset}…\n`);

  for (let i = 0; i < categories.length; i++) {
    const c = categories[i];
    await client.createOrReplace({
      _id: idFor(c.slug),
      _type: 'category',
      title: c.title,
      slug: { _type: 'slug', current: c.slug },
      description: c.description,
      order: i,
    });
    console.log(`  ✓ ${c.title}`);
  }

  console.log('\nRepointing existing articles…\n');

  const docs = await client.fetch<Doc[]>(
    `*[_type in ["post", "news"]]{_id, _type, title, category}`
  );

  let moved = 0;
  let skipped = 0;
  let cleared = 0;

  for (const doc of docs) {
    // Already a reference (or empty) — nothing to migrate.
    if (typeof doc.category !== 'string') {
      skipped++;
      continue;
    }

    // News no longer has a category field at all. Clear the leftover string so
    // Studio doesn't flag it as an unknown field on the document.
    if (doc._type === 'news') {
      await client.patch(doc._id).unset(['category']).commit();
      console.log(`  ✓ ${doc.title} — cleared "${doc.category}" (news has no category)`);
      cleared++;
      continue;
    }

    const old = doc.category;
    const slug =
      RENAMES[old] ?? categories.find((c) => c.title === old)?.slug;

    if (!slug) {
      console.warn(`  ! no category matches "${old}" (${doc._type}: ${doc.title}) — left unchanged`);
      continue;
    }

    await client
      .patch(doc._id)
      .set({ category: { _type: 'reference', _ref: idFor(slug) } })
      .commit();

    console.log(`  ✓ ${doc.title} — "${old}" → ${slug}`);
    moved++;
  }

  console.log(`\nDone. ${moved} posts repointed, ${cleared} news cleared, ${skipped} already migrated.`);
  console.log('Run `npx sanity deploy` so the hosted Studio picks up the new schema.');
}

run().catch((e) => {
  console.error('\nMigration failed:', e.message);
  process.exit(1);
});
