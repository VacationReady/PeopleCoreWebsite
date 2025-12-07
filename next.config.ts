import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Enable TypeScript checking during builds
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
