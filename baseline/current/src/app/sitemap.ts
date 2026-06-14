import type { MetadataRoute } from "next";
import fs from "node:fs/promises";
import path from "node:path";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://nemoagent.ru";
  const staticUrls: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/pricing`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/articles`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/offer`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
  ];
  try {
    const dir = path.join(process.cwd(), "content", "articles");
    const files = await fs.readdir(dir);
    const articles: MetadataRoute.Sitemap = files.filter((f) => f.endsWith(".mdx")).map((f) => ({
      url: `${base}/articles/${f.replace(/\.mdx$/, "")}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }));
    return [...staticUrls, ...articles];
  } catch {
    return staticUrls;
  }
}
