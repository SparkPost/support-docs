// Temporary edge function for the support.sparkpost.com → archive.sparkpost.com
// migration. Until the CloudFront redirect distribution is live (then DNS for
// support.sparkpost.com flips off Netlify), this single Netlify deploy serves
// both hostnames. The desired SEO behavior is asymmetric:
//
//   archive.sparkpost.com: served as built — noindex <meta>, X-Robots-Tag, and
//     Disallow: / in robots.txt all intact, so search engines drop the archive.
//   support.sparkpost.com: keep search engines indexing as before, so existing
//     link equity is preserved until the CloudFront layer can 301 it to bird.com.
//
// Without this function, the noindex signals (set in seo.tsx, netlify.toml, and
// next-sitemap.js) would apply to both hostnames equally — which would start
// deindexing support.sparkpost.com before the 301s exist, losing link equity
// that would otherwise transfer to bird.com via the CloudFront redirects.
//
// This function differentiates by Host header:
//   - support.sparkpost.com: override X-Robots-Tag with "all", strip the noindex
//     <meta> from HTML responses, and override /robots.txt with a permissive
//     version.
//   - archive.sparkpost.com or any other host (deploy previews, *.netlify.app):
//     pass through unmodified.
//
// REMOVE THIS FUNCTION (and the netlify.toml registration) once the CloudFront
// cutover is complete — support.sparkpost.com will no longer hit Netlify, so the
// hostname-conditional logic becomes dead code.

import type { Context } from '@netlify/edge-functions';

const INDEX_HOST = 'support.sparkpost.com';

// Match <meta name="robots" content="...noindex..."> in either attribute order
// and with whitespace variations. Only the noindex/nofollow robots meta is
// targeted — any other meta tags (description, og:*, viewport, etc.) are left
// alone.
const NOINDEX_META_PATTERNS: RegExp[] = [
  /<meta\s[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex[^"']*["'][^>]*\/?>/gi,
  /<meta\s[^>]*content=["'][^"']*noindex[^"']*["'][^>]*name=["']robots["'][^>]*\/?>/gi,
];

export default async (request: Request, context: Context): Promise<Response | void> => {
  const host = request.headers.get('host') ?? '';

  // Only act on support.sparkpost.com. Every other host — including
  // archive.sparkpost.com, *.netlify.app deploy URLs, and deploy previews —
  // passes through with whatever the build emits (i.e. noindex stays on).
  if (host !== INDEX_HOST) return;

  const url = new URL(request.url);

  // Override /robots.txt with a permissive version so Google can crawl
  // support.sparkpost.com normally. Without this, the built robots.txt's
  // `Disallow: /` would block Google from re-crawling, which would prevent it
  // from seeing the 301s once CloudFront comes online.
  if (url.pathname === '/robots.txt') {
    return new Response('User-agent: *\n', {
      status: 200,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }

  // For everything else, fetch the response normally, then mutate it.
  const response = await context.next();

  // Override the X-Robots-Tag set in netlify.toml. `delete()` on this header is
  // silently ignored — Netlify re-applies the netlify.toml [[headers]] block
  // after the edge function returns, but it respects values WE set. So we
  // overwrite with "all" (canonical "ignore any prior noindex; index normally"),
  // which Google treats as equivalent to no header at all.
  response.headers.set('X-Robots-Tag', 'all');

  // Only HTML responses can carry the noindex <meta> tag. Skip non-HTML
  // (images, JS, CSS, JSON) to avoid pointlessly buffering large bodies.
  const contentType = response.headers.get('content-type') ?? '';
  if (!contentType.includes('text/html')) {
    return response;
  }

  let body = await response.text();
  for (const pattern of NOINDEX_META_PATTERNS) {
    body = body.replace(pattern, '');
  }

  // Rebuild the response with the mutated body. content-length is dropped so
  // Netlify recomputes it. content-encoding is dropped because response.text()
  // already decoded any gzip/brotli the origin sent — leaving the header on
  // would tell the client to decompress a now-plain-text body and fail.
  const headers = new Headers(response.headers);
  headers.delete('content-length');
  headers.delete('content-encoding');
  return new Response(body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
};

export const config = {
  path: '/*',
};
