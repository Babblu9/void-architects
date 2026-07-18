import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // ponytail: placeholder photos off Unsplash CDN. Swap for local /public
    // images once the client sends real project photos — then delete this block.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
