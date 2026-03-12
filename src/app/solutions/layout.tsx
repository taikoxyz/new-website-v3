import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Discover Taiko's Ethereum scaling solutions. Infrastructure and platform services for developers and enterprises.",
  openGraph: {
    title: "Solutions — Taiko",
    description:
      "Discover Taiko's Ethereum scaling solutions. Infrastructure and platform services for developers and enterprises.",
    url: "https://taiko.xyz/solutions",
  },
  twitter: {
    title: "Solutions — Taiko",
    description:
      "Discover Taiko's Ethereum scaling solutions. Infrastructure and platform services for developers and enterprises.",
  },
  alternates: {
    canonical: "/solutions",
  },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
