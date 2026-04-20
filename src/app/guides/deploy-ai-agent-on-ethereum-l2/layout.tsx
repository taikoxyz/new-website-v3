import type { Metadata } from "next";

const TITLE = "How to Deploy AI Agents on Taiko";
const DESCRIPTION =
  "Deploy autonomous AI agents on Taiko, an Ethereum L2 with sub-cent fees, ERC-8004 support and censorship-resistant sequencing.";
const URL = "https://taiko.xyz/guides/deploy-ai-agent-on-ethereum-l2";
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
    canonical: "/guides/deploy-ai-agent-on-ethereum-l2",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: TITLE,
  description: DESCRIPTION,
  url: URL,
  image: IMAGE,
  totalTime: "PT30M",
  publisher: {
    "@type": "Organization",
    name: "Taiko Labs",
    url: "https://taiko.xyz",
    logo: {
      "@type": "ImageObject",
      url: "https://taiko.xyz/img/logo.svg",
    },
  },
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Set Up Your Environment",
      url: `${URL}#step-1-set-up-your-environment`,
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Register Your Agent (ERC-8004)",
      url: `${URL}#step-2-register-your-agent-erc-8004`,
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Build Reputation",
      url: `${URL}#step-3-build-reputation`,
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Execute",
      url: `${URL}#step-4-execute`,
    },
  ],
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
