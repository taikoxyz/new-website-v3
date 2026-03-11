import type { AlethiaGwynethPageData } from "@/content/types";

export const gwynethPageData: AlethiaGwynethPageData = {
  id: 2,
  hero_title: "Gwyneth",
  hero_text:
    "A based booster rollup — scale natively, compose synchronously across all L2s.",
  hero_logo: "/img/gwyneth/logo.svg",
  about_title: "What is Gwyneth?",
  about_text:
    "Gwyneth is Taiko's Based Booster Rollup (BBR), enabling applications to deploy once on Ethereum and scale natively across all L2 instances.",
  about_subtext:
    "Gwyneth eliminates liquidity fragmentation and enables synchronous composability across the L2 ecosystem.",
  features_suptitle: "Key Features",
  features_list: [
    {
      id: 1,
      title: "Native Scaling",
      text: "Deploy on Ethereum L1 and automatically scale across all L2 instances.",
      disabled: false,
    },
    {
      id: 2,
      title: "Synchronous Composability",
      text: "Cross-L2 interactions happen atomically — no bridging delays.",
      disabled: false,
    },
    {
      id: 3,
      title: "No Redeployment",
      text: "Existing L1 contracts work on Gwyneth without code changes.",
      disabled: false,
    },
    {
      id: 4,
      title: "Unified Liquidity",
      text: "Liquidity is shared across all L2 instances, eliminating fragmentation.",
      disabled: false,
    },
  ],
  cards_list: [
    {
      id: 1,
      title: "About",
      text: "Learn about Gwyneth's architecture",
      href: "https://taiko.mirror.xyz/anPjF35Mrc_xzYgOTbUmfjr_MlhE3L8ZBZIxqmz9GZ8",
      disabled: false,
      icon: "/img/gwyneth/card-about.svg",
    },
    {
      id: 2,
      title: "Apps",
      text: "Explore applications on Gwyneth",
      href: "",
      disabled: true,
      icon: "/img/gwyneth/card-apps.svg",
    },
    {
      id: 3,
      title: "Documentation",
      text: "Technical documentation for Gwyneth",
      href: "https://docs.taiko.xyz/start-here/getting-started",
      disabled: false,
      icon: "/img/gwyneth/card-docs.svg",
    },
    {
      id: 4,
      title: "Block Explorers",
      text: "View transactions on Gwyneth",
      href: "",
      disabled: true,
      icon: "/img/gwyneth/card-explorer.svg",
    },
  ],
  explore_suptitle: "Explore Gwyneth",
  explore_title: "The future of Ethereum scaling",
  explore_text:
    "Gwyneth combines based rollups and booster rollups to deliver native scaling with synchronous composability.",
  explore_background: "/img/gwyneth/explore.webp",
  faq_title: "Frequently Asked Questions",
  faq_text: "Common questions about Gwyneth",
  faq_data: [
    {
      id: 1,
      question: "What is a Based Booster Rollup?",
      answer:
        "A Based Booster Rollup merges based rollups and booster rollups, enabling dApps to deploy on Ethereum and scale natively across all L2s without redeployment.",
    },
    {
      id: 2,
      question: "When will Gwyneth launch?",
      answer:
        "Gwyneth is currently in development. Follow our blog and social channels for the latest updates on the development timeline.",
    },
    {
      id: 3,
      question: "How does Gwyneth solve liquidity fragmentation?",
      answer:
        "Gwyneth shards transaction execution and storage while maintaining a unified state view, so liquidity is shared across all L2 instances.",
    },
  ],
};
