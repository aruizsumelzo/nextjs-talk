import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["three"],
  images: {
    domains: ["localhost"],
  },
};

export default nextConfig;
