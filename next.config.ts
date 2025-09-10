import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ✅ Skip ESLint checks during builds on Vercel
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
