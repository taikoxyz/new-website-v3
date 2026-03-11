import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  sassOptions: {
    additionalData: `
      @import "app/scss/vars.scss";
      @import "app/scss/mixins.scss";
    `,
    includePaths: [path.join(__dirname, "src")],
    silenceDeprecations: ["import", "legacy-js-api"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
