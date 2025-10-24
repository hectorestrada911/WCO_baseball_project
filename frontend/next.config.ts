import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Set the output file tracing root to avoid workspace detection issues
  outputFileTracingRoot: path.join(__dirname),
  // Ensure proper asset handling
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
};

export default nextConfig;
