import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,   // still valid
  typedRoutes: true,       // ✅ moved out of experimental
  // ⚠ remove swcMinify (Next.js 15 always uses SWC)
};

export default nextConfig;
