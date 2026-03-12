import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gwyneth Apps",
  description:
    "Explore decentralized applications built on Gwyneth, Taiko's based booster rollup.",
  openGraph: {
    title: "Gwyneth Apps — Taiko",
    description:
      "Explore decentralized applications built on Gwyneth, Taiko's based booster rollup.",
    url: "https://taiko.xyz/gwyneth/apps",
  },
  twitter: {
    title: "Gwyneth Apps — Taiko",
    description:
      "Explore decentralized applications built on Gwyneth, Taiko's based booster rollup.",
  },
  alternates: {
    canonical: "/gwyneth/apps",
  },
};

export default function GwynethAppsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
