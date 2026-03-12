import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gwyneth",
  description:
    "Discover Gwyneth, Taiko's based booster rollup enabling native cross-chain composability for Ethereum.",
  openGraph: {
    title: "Gwyneth — Taiko",
    description:
      "Discover Gwyneth, Taiko's based booster rollup enabling native cross-chain composability for Ethereum.",
    url: "https://taiko.xyz/gwyneth",
  },
  twitter: {
    title: "Gwyneth — Taiko",
    description:
      "Discover Gwyneth, Taiko's based booster rollup enabling native cross-chain composability for Ethereum.",
  },
  alternates: {
    canonical: "/gwyneth",
  },
};

export default function GwynethLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
