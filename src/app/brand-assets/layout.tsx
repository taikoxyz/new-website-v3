import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Assets",
  description:
    "Download Taiko brand assets including logos, color palettes, typography guidelines, and brand book.",
  openGraph: {
    title: "Brand Assets — Taiko",
    description:
      "Download Taiko brand assets including logos, color palettes, typography guidelines, and brand book.",
    url: "https://taiko.xyz/brand-assets",
  },
  twitter: {
    title: "Brand Assets — Taiko",
    description:
      "Download Taiko brand assets including logos, color palettes, typography guidelines, and brand book.",
  },
  alternates: {
    canonical: "/brand-assets",
  },
};

export default function BrandAssetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
