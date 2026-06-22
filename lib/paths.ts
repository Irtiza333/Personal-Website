// Prepend the deployment base path to static asset URLs that live in /public.
// Next.js automatically adds basePath to <Link> and next/image, but NOT to
// plain <img src> or <a href> pointing at files in /public, so use this there.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBase(path: string): string {
  if (/^https?:\/\//.test(path) || path.startsWith("mailto:")) return path;
  if (!path.startsWith("/")) return `${BASE}/${path}`;
  return `${BASE}${path}`;
}
