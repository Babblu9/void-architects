import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All imagery is now local (/public/projects). AVIF/WebP for perf.
    formats: ["image/avif", "image/webp"],
  },
  // Work merged into the Clients page — keep the old URL alive.
  async redirects() {
    return [{ source: "/work", destination: "/clients", permanent: true }];
  },
};

export default nextConfig;
