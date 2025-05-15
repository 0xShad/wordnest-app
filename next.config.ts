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

      {
        protocol: "https",
        hostname: "kinde-oss.github.io",
        port: "",
      },

      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },

      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
      },

      {
        protocol: "https",
        hostname: "www.gravatar.com",
        port: "",
      }
    ],
  },
};

export default nextConfig;
