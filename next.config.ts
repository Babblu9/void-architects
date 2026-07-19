import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All imagery is now local (/public/projects). AVIF/WebP for perf.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
