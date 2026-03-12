import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Taiko, the community-driven project building the most developer-friendly Ethereum scaling solution.",
  openGraph: {
    title: "About — Taiko",
    description:
      "Learn about Taiko, the community-driven project building the most developer-friendly Ethereum scaling solution.",
    url: "https://taiko.xyz/about",
  },
  twitter: {
    title: "About — Taiko",
    description:
      "Learn about Taiko, the community-driven project building the most developer-friendly Ethereum scaling solution.",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
