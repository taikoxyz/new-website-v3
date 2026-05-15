import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taiko Blockchain",
  description:
    "Discover Taiko Blockchain, a based contestable rollup providing secure and decentralized Ethereum scaling.",
  openGraph: {
    title: "Taiko Blockchain — Taiko",
    description:
      "Discover Taiko Blockchain, a based contestable rollup providing secure and decentralized Ethereum scaling.",
    url: "https://taiko.xyz/taiko-blockchain",
  },
  twitter: {
    title: "Taiko Blockchain — Taiko",
    description:
      "Discover Taiko Blockchain, a based contestable rollup providing secure and decentralized Ethereum scaling.",
  },
  alternates: {
    canonical: "/taiko-blockchain",
  },
};

export default function TaikoBlockchainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
