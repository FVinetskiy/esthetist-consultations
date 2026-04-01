import type { MetadataRoute } from "next";
import { getAllArticles } from "@/shared/config/articles";
import { getSiteUrl } from "@/shared/config/site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/articles`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/contacts`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ankety`, lastModified, changeFrequency: "monthly", priority: 0.65 },
    { url: `${base}/offer`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  const articles: MetadataRoute.Sitemap = getAllArticles().map((article) => ({
    url: `${base}/articles/${article.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...articles];
}
