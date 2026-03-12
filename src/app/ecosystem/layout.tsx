import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecosystem",
  description:
    "Explore the Taiko ecosystem of dApps, tools, and infrastructure built on the most developer-friendly Ethereum L2.",
  openGraph: {
    title: "Ecosystem — Taiko",
    description:
      "Explore the Taiko ecosystem of dApps, tools, and infrastructure built on the most developer-friendly Ethereum L2.",
    url: "https://taiko.xyz/ecosystem",
  },
  twitter: {
    title: "Ecosystem — Taiko",
    description:
      "Explore the Taiko ecosystem of dApps, tools, and infrastructure built on the most developer-friendly Ethereum L2.",
  },
  alternates: {
    canonical: "/ecosystem",
  },
};

export default function EcosystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
