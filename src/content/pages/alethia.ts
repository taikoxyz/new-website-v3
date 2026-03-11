import type { AlethiaGwynethPageData } from "@/content/types";

export const alethiaPageData: AlethiaGwynethPageData = {
  id: 1,
  hero_title: "Alethia",
  hero_text:
    "A based contestable rollup — Taiko's first rollup, live on Ethereum Mainnet.",
  hero_logo: "/img/alethia/logo.svg",
  about_title: "What is Alethia?",
  about_text:
    "Alethia is Taiko's flagship Based Contestable Rollup (BCR), combining the strengths of optimistic and ZK-rollups into a modular, multi-proof design.",
  about_subtext:
    "Alethia inherits Ethereum's security, liveness, and credible neutrality through based sequencing.",
  features_suptitle: "Key Features",
  features_list: [
    {
      id: 1,
      title: "Based Sequencing",
      text: "Transaction ordering is handled by Ethereum L1 validators — no centralized sequencer.",
      disabled: false,
    },
    {
      id: 2,
      title: "Multi-Proof System",
      text: "A contestation mechanism with multiple proof systems for maximum security.",
      disabled: false,
    },
    {
      id: 3,
      title: "EVM Equivalent",
      text: "Type 1 ZK-EVM compatibility — all Ethereum tooling works out of the box.",
      disabled: false,
    },
    {
      id: 4,
      title: "Permissionless",
      text: "Anyone can propose and prove blocks from day one.",
      disabled: false,
    },
  ],
  cards_list: [
    {
      id: 1,
      title: "Bridge",
      text: "Transfer assets between Ethereum and Alethia",
      href: "https://bridge.taiko.xyz/",
      disabled: false,
      icon: "/img/alethia/card-bridge.svg",
    },
    {
      id: 2,
      title: "Explorer",
      text: "View transactions and contracts on Alethia",
      href: "https://taikoscan.io/",
      disabled: false,
      icon: "/img/alethia/card-explorer.svg",
    },
    {
      id: 3,
      title: "Documentation",
      text: "Learn how to build on Alethia",
      href: "https://docs.taiko.xyz/start-here/getting-started",
      disabled: false,
      icon: "/img/alethia/card-docs.svg",
    },
  ],
  explore_suptitle: "Explore Alethia",
  explore_title: "Start building on Alethia",
  explore_text:
    "Deploy your existing Ethereum smart contracts without any modifications. Everything works out of the box.",
  explore_background: "/img/alethia/explore.webp",
  faq_title: "Frequently Asked Questions",
  faq_text: "Common questions about Alethia",
  faq_data: [
    {
      id: 1,
      question: "What is the difference between Alethia and other rollups?",
      answer:
        "Alethia is a based rollup, meaning transaction sequencing is done by Ethereum validators. This makes it maximally decentralized from day one, unlike rollups that rely on centralized sequencers.",
    },
    {
      id: 2,
      question: "Is Alethia compatible with my existing Ethereum dApp?",
      answer:
        "Yes! Alethia uses a Type 1 ZK-EVM, which means it is fully Ethereum-equivalent at the bytecode level. No recompilation or changes needed.",
    },
    {
      id: 3,
      question: "How do I bridge assets to Alethia?",
      answer:
        "You can use the Taiko Bridge at bridge.taiko.xyz to transfer ETH and other supported tokens between Ethereum and Alethia.",
    },
  ],
};
