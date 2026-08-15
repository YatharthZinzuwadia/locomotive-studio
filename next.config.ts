import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/locomotive-studio",
  assetPrefix: "/locomotive-studio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
