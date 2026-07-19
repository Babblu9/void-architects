import type { MetadataRoute } from "next";
import { SEO_PAGES, SITE } from "@/lib/data";

const ROUTES = ["services", "studio", "clients", "estimate", "contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, priority: 1, changeFrequency: "monthly" },
    ...ROUTES.map((r) => ({
      url: `${SITE.url}/${r}`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    })),
    ...SEO_PAGES.map((p) => ({
      url: `${SITE.url}/${p.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
  ];
}
