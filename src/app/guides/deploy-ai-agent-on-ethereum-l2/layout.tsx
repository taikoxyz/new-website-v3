import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Deploy AI Agents on Taiko",
  description:
    "Deploy autonomous AI agents on Taiko, an Ethereum L2 with sub-cent fees, ERC-8004 support and censorship-resistant sequencing.",
  openGraph: {
    title: "How to Deploy AI Agents on Taiko \u2013 Taiko",
    description:
      "Deploy autonomous AI agents on Taiko, an Ethereum L2 with sub-cent fees, ERC-8004 support and censorship-resistant sequencing.",
    url: "https://taiko.xyz/guides/deploy-ai-agent-on-ethereum-l2",
  },
  twitter: {
    title: "How to Deploy AI Agents on Taiko \u2013 Taiko",
    description:
      "Deploy autonomous AI agents on Taiko, an Ethereum L2 with sub-cent fees, ERC-8004 support and censorship-resistant sequencing.",
  },
  alternates: {
    canonical: "/guides/deploy-ai-agent-on-ethereum-l2",
  },
};

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
