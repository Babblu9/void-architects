import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: "Void",
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f6f5f5", // matches var(--paper) oklch(0.964 0.002 250)
    theme_color: "#17181c",      // matches var(--ink) oklch(0.17 0.006 265)
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
