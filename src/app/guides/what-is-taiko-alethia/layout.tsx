import type { Metadata } from "next";

const TITLE = "What is Taiko Alethia?";
const DESCRIPTION =
  "An Ethereum-equivalent rollup designed for based sequencing, where AI agents and decentralized applications scale at sub-cent cost.";
const URL = "https://taiko.xyz/guides/what-is-taiko-alethia";
const IMAGE = "https://taiko.xyz/img/og-image.png";

export const metadata: Metadata = {
  title: `${TITLE} \u2013 Taiko`,
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
    canonical: "/guides/what-is-taiko-alethia",
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
