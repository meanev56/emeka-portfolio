import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.billionaires.africa",
      },
      {
        protocol: "https",
        hostname: "nairalytics.com",
      },
      {
        protocol: "https",
        hostname: "jittravels.ng",
      },
      {
        protocol: "https",
        hostname: "nmobile.ng",
      },
    ],
  },

  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;