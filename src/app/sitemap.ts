import type { MetadataRoute } from "next";
import { SEO_PAGES, SITE } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, priority: 1, changeFrequency: "monthly" },
    ...SEO_PAGES.map((p) => ({
      url: `${SITE.url}/${p.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
  ];
}
