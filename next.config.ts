import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactCompiler: true,
  experimental: {
    typedEnv: true,
  },
  images: {
    qualities: [75, 100],
  },
};

export default nextConfig;
