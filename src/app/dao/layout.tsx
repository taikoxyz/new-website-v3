import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DAO",
  description:
    "Participate in Taiko DAO governance. Shape the future of decentralized Ethereum scaling through community-driven decision making.",
  openGraph: {
    title: "DAO — Taiko",
    description:
      "Participate in Taiko DAO governance. Shape the future of decentralized Ethereum scaling through community-driven decision making.",
    url: "https://taiko.xyz/dao",
  },
  twitter: {
    title: "DAO — Taiko",
    description:
      "Participate in Taiko DAO governance. Shape the future of decentralized Ethereum scaling through community-driven decision making.",
  },
  alternates: {
    canonical: "/dao",
  },
};

export default function DaoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
