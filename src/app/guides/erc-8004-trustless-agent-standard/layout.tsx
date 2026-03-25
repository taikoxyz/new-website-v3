import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ERC-8004: The Trustless Agent Standard on Taiko",
  description:
    "A guide to ERC-8004 on Taiko: what it is, how it works and how to register an AI Agent.",
  openGraph: {
    title: "ERC-8004: The Trustless Agent Standard on Taiko \u2013 Taiko",
    description:
      "A guide to ERC-8004 on Taiko: what it is, how it works and how to register an AI Agent.",
    url: "https://taiko.xyz/guides/erc-8004-trustless-agent-standard",
  },
  twitter: {
    title: "ERC-8004: The Trustless Agent Standard on Taiko \u2013 Taiko",
    description:
      "A guide to ERC-8004 on Taiko: what it is, how it works and how to register an AI Agent.",
  },
  alternates: {
    canonical: "/guides/erc-8004-trustless-agent-standard",
  },
};

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
