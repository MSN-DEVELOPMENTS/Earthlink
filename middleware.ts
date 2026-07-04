import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/* Pre-launch gate.
   The public sees the Coming Soon holding page at every URL. Visiting /staging
   once sets an unlock cookie and drops you into the real site at its normal URLs
   (/about, /properties, …) — so the team can keep working on the live domain
   while the public stays behind Coming Soon.

   To launch: delete this file (and app/coming-soon) and redeploy. */

const UNLOCK_COOKIE = 'ere_preview';
const UNLOCK_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // /lock re-locks this browser (clears the cookie) so you can see the public
  // Coming Soon view again.
  if (pathname === '/lock') {
    const res = NextResponse.redirect(new URL('/', req.url));
    res.cookies.delete(UNLOCK_COOKIE);
    return res;
  }

  // /staging (and anything under it) is the unlock: set the cookie, then send
  // the visitor into the real site.
  if (pathname === '/staging' || pathname.startsWith('/staging/')) {
    const res = NextResponse.redirect(new URL('/', req.url));
    res.cookies.set(UNLOCK_COOKIE, '1', {
      path: '/',
      maxAge: UNLOCK_MAX_AGE,
      sameSite: 'lax',
    });
    return res;
  }

  // Unlocked visitors see the real site untouched.
  if (req.cookies.has(UNLOCK_COOKIE)) {
    return NextResponse.next();
  }

  // Let the holding page itself render (avoids a rewrite loop).
  if (pathname === '/coming-soon') {
    return NextResponse.next();
  }

  // Everyone else → Coming Soon, keeping the URL they typed.
  return NextResponse.rewrite(new URL('/coming-soon', req.url));
}

// Skip Next internals and static assets so images, fonts, favicon, and the
// crawler files keep serving normally.
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|logo.png|robots.txt|sitemap.xml|.*\\.(?:png|jpe?g|gif|svg|webp|ico|woff2?|ttf|mp4)).*)',
  ],
};
