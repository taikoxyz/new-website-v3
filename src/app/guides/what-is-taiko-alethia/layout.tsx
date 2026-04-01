import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taiko Alethia is the Based Rollup for AI Agents \u2013 Taiko",
  description:
    "An Ethereum-equivalent rollup designed for based sequencing, where AI agents and decentralized applications scale at sub-cent cost.",
  openGraph: {
    title: "Taiko Alethia is the Based Rollup for AI Agents \u2013 Taiko",
    description:
      "An Ethereum-equivalent rollup designed for based sequencing, where AI agents and decentralized applications scale at sub-cent cost.",
    url: "https://taiko.xyz/guides/what-is-taiko-alethia",
  },
  twitter: {
    title: "Taiko Alethia is the Based Rollup for AI Agents \u2013 Taiko",
    description:
      "An Ethereum-equivalent rollup designed for based sequencing, where AI agents and decentralized applications scale at sub-cent cost.",
  },
  alternates: {
    canonical: "/guides/what-is-taiko-alethia",
  },
};

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
