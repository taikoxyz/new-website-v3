import type { Metadata } from "next";

const TITLE = "ERC-8004: The Trustless Agent Standard on Taiko";
const DESCRIPTION =
  "A guide to ERC-8004 on Taiko: what it is, how it works and how to register an AI Agent.";
const URL = "https://taiko.xyz/guides/erc-8004-trustless-agent-standard";
const IMAGE = "https://taiko.xyz/img/og-image.png";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: `${TITLE} \u2013 Taiko`,
    description: DESCRIPTION,
    url: URL,
    type: "article",
    images: [{ url: IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} \u2013 Taiko`,
    description: DESCRIPTION,
    images: [IMAGE],
  },
  alternates: {
    canonical: "/guides/erc-8004-trustless-agent-standard",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: TITLE,
  description: DESCRIPTION,
  url: URL,
  mainEntityOfPage: URL,
  image: IMAGE,
  author: {
    "@type": "Organization",
    name: "Taiko Labs",
    url: "https://taiko.xyz",
  },
  publisher: {
    "@type": "Organization",
    name: "Taiko Labs",
    url: "https://taiko.xyz",
    logo: {
      "@type": "ImageObject",
      url: "https://taiko.xyz/img/logo.svg",
    },
  },
};

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
