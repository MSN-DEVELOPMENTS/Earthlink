export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

// NEXT_PUBLIC_* is used by the Next.js site; SANITY_STUDIO_* is what the
// hosted-studio build (sanity deploy) inlines. Fall back to the real project
// id so the deployed Studio always connects to the correct project.
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  process.env.SANITY_STUDIO_PROJECT_ID ||
  'kk585c8w';

// True once a real Project ID has been supplied in .env.local.
export const isSanityConfigured = projectId.length > 0;
