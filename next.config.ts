import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/**`)],
  },
  turbopack: {
    root: path.join(__dirname, ".."),
  },
};

export default nextConfig;
