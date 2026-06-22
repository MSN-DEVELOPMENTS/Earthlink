import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env';

// `projectId` falls back to a valid placeholder so this module never throws at
// import time; real fetches are guarded by `isSanityConfigured`.
// Token is read server-side only (never NEXT_PUBLIC), so it can read a private
// dataset without exposing the secret to the browser.
export const client = createClient({
  projectId: projectId || 'placeholder',
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  perspective: 'published',
});
