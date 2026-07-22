// Imported from @sanity/client rather than next-sanity on purpose. The
// next-sanity entry point pulls in the visual-editing client components, which
// dragged ~180KB of Sanity runtime (buffer/base64/uuid polyfills included) into
// the browser bundle of every page that reads content. This is the same
// createClient, without the client-component baggage.
import { createClient } from '@sanity/client';
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
