import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alethia",
  description:
    "Discover Alethia, Taiko's based contestable rollup providing secure and decentralized Ethereum scaling.",
  openGraph: {
    title: "Alethia — Taiko",
    description:
      "Discover Alethia, Taiko's based contestable rollup providing secure and decentralized Ethereum scaling.",
    url: "https://taiko.xyz/alethia",
  },
  twitter: {
    title: "Alethia — Taiko",
    description:
      "Discover Alethia, Taiko's based contestable rollup providing secure and decentralized Ethereum scaling.",
  },
  alternates: {
    canonical: "/alethia",
  },
};

export default function AlethiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
