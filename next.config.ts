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
  async redirects() {
    return [
      {
        source: "/alethia",
        destination: "/taiko-blockchain",
        permanent: true,
      },
      {
        source: "/guides/what-is-taiko-alethia",
        destination: "/guides/what-is-taiko-blockchain",
        permanent: true,
      },
      {
        source: "/guides/what-is-taiko-alethia.md",
        destination: "/guides/what-is-taiko-blockchain.md",
        permanent: true,
      },
      {
        source: "/guides/deploy-ai-agent-on-ethereum-l2",
        destination: "/guides/deploy-ai-agent-on-taiko-network",
        permanent: true,
      },
      {
        source: "/guides/deploy-ai-agent-on-ethereum-l2.md",
        destination: "/guides/deploy-ai-agent-on-taiko-network.md",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
