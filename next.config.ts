import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "global.unitednations.entermediadb.net",
        port: "",
      },
    ],
  },
};

export default nextConfig;
