import type { NextConfig } from "next";
import versionData from "./src/version.json";

const nextConfig: NextConfig = {
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
