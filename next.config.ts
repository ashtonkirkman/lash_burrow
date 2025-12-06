import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    qualities: [10, 50, 75, 100],   // <— allow quality=100 requests
  },
};

export default nextConfig;
