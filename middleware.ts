import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/* The sale/rent listing views used to be query strings off /properties
   (?type=sale, ?type=rent), which search engines index as duplicates of the
   unfiltered page. They are real routes now, so the old links are permanently
   redirected onto them.

   This lives in middleware rather than next.config.mjs because redirects()
   copies the incoming query onto the destination — /properties?type=sale would
   land on /properties/for-sale?type=sale, recreating the duplicate URL. Here
   the query is dropped, so the redirect ends on a clean path. */

const LISTING_ROUTES: Record<string, string> = {
  sale: '/properties/for-sale',
  rent: '/properties/for-rent',
};

export function middleware(request: NextRequest) {
  const type = request.nextUrl.searchParams.get('type');
  if (type === null) return NextResponse.next();

  const url = request.nextUrl.clone();
  // An unrecognised type (an old or mistyped link) has no view of its own, so
  // it goes to the full listing rather than 404ing or sitting there as another
  // crawlable copy of /properties.
  url.pathname = LISTING_ROUTES[type] ?? '/properties';
  url.search = '';
  return NextResponse.redirect(url, 308);
}

export const config = {
  // Only the listing index carries this parameter; every other route is
  // untouched and never pays for a middleware hop.
  matcher: '/properties',
};
