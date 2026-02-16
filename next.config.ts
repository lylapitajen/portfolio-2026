import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: new URL(process.env.NEXT_PUBLIC_STRAPI_API_URL as string).hostname,
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "strapi.lylapitajen.com",
        pathname: "/uploads/**",
      },
    ],
  },
  turbopack: {
    root: path.join(__dirname, ".."),
  },
};

export default nextConfig;
