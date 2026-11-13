import type { NextConfig } from "next";
import versionData from "./src/version.json";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.0.108:3000",
    "192.168.0.108",
    "localhost:3000",
    "127.0.0.1:3000",
  ],
  env: {
    NEXT_PUBLIC_APP_VERSION: versionData.tag,
    NEXT_PUBLIC_BUILD_DATE: versionData.buildDate,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
