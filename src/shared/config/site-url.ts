/**
 * Production: set NEXT_PUBLIC_SITE_URL in the host (e.g. Render) to your public origin,
 * e.g. https://your-domain.onrender.com — without trailing slash.
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) {
    return raw.replace(/\/$/, "");
  }
  return "http://localhost:3000";
}

export function getCanonicalPath(path: string): string {
  const base = getSiteUrl();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized === "//" ? "/" : normalized}`;
}
