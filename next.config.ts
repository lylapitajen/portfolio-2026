import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/**`)],
    //TODO : Remove this when deploying to production
    dangerouslyAllowLocalIP: true,
  },
};

export default nextConfig;
