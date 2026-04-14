import type { AlethiaGwynethPageData } from "@/content/types";

export const gwynethPageData: AlethiaGwynethPageData = {
  id: 2,
  hero_title: "Synchronous composability unlocked",
  hero_text:
    "A multi-chain execution system with atomic transactions across EVM chains and no centralized sequencer",
  hero_logo: "/img/gwyneth/taikogwyneth-logo.svg",
  about_title: "Gwyneth is Taiko",
  about_text:
    "Multi-chain composability on Ethereum",
  about_subtext: "Ownerless, permissionless, decentralized",
  features_suptitle: "Key Features",
  features_list: [
    {
      id: 1,
      title: "Synchronously Composable",
      text: "Execute atomic transactions across multiple chains, including the L1, in a single operation.",
      disabled: false,
      icon: "/img/gwyneth/icon-link.svg",
    },
    {
      id: 2,
      title: "Validated on Ethereum",
      text: "All cross-chain transactions are sequenced and confirmed by Ethereum validators for security and reliability.",
      disabled: false,
      icon: "/img/gwyneth/icon-shield.svg",
    },
    {
      id: 3,
      title: "Forever Based",
      text: "Gwyneth inherits Ethereum\u2019s sequencing and finality guarantees, keeping it fully aligned with the base layer.",
      disabled: false,
      icon: "/img/gwyneth/icon-anchor.svg",
    },
  ],
  cards_list: [
    {
      id: 1,
      title: "Documentation",
      text: "Everything you need to build on Gwyneth",
      href: "https://docs.taiko.xyz/",
      disabled: false,
      icon: "/img/alethia/docs.svg",
    },
    {
      id: 2,
      title: "Join Testnet",
      text: "Try and experience Gwyneth yourself",
      href: "",
      disabled: true,
      icon: "/img/alethia/ecosystem.svg",
    },
    {
      id: 3,
      title: "Discover the Ecosystem",
      text: "Explore the growing Gwyneth ecosystem",
      href: "",
      disabled: true,
      icon: "/img/alethia/ecosystem.svg",
    },
    {
      id: 4,
      title: "Community",
      text: "Become a part of our great Taiko community. We are stronger with you!",
      href: "https://x.com/gwyneth_taiko",
      disabled: false,
      icon: "/img/alethia/community.svg",
    },
  ],
  explore_suptitle: "A PURIST APPROACH TO ETHEREUM'S FUTURE",
  explore_title:
    "Ready to accelerate today and build the united future of Ethereum?",
  explore_text: "Gwyneth welcomes bold visionaries.",
  explore_background: "/img/gwyneth/explore.webp",
  faq_title: "Frequently Asked Questions",
  faq_text: "Learn more about Gwyneth",
  faq_data: [
    {
      id: 1,
      question: "What is Taiko Gwyneth?",
      answer:
        "Taiko Gwyneth is a synchronously composable rollup designed to scale Ethereum horizontally. It consists of multiple identical Ethereum equivalent L2s with additional functionality to make it easy to do cross-chain calls. The function of each L2 is to add extra parallel processing and storage capacity to the Gwyneth network.",
    },
    {
      id: 2,
      question: "How does Taiko Gwyneth work?",
      answer:
        "At its core, Taiko Gwyneth is a horizontal Ethereum scaling solution. Combining based sequencing, real-time proving, and booster functionality, Taiko Gwyneth creates a unified, horizontal scaling environment where each L2 can talk to each other and L1 seamlessly.\n\nTaiko Gwyneth also supports based preconfirmations for faster transactions while maintaining the security and liveness benefits of based sequencing.\n\nRead this article for a more in-depth explanation on how Gwyneth works.",
    },
    {
      id: 3,
      question: "What is synchronous composability?",
      answer:
        "Synchronous composability enables direct interactions between L1 and L2s. Within the Taiko Gwyneth network, all L2s can not only access each other synchronously but also interact with L1 synchronously when supported by the L1 proposer. \u201cAccess\u201d means each L2 can read and write all states as if they are part of the same chain. From the user\u2019s perspective, it looks like the transactions run on a single chain.\n\nTaiko Gwyneth achieves synchronous composability through based sequencing and real-time proving using TEEs and AVS/multi-sig provers (and later ZK proofs as well when they are fast enough).",
    },
    {
      id: 4,
      question: "What differentiates Taiko Gwyneth from others?",
      answer:
        "Taiko Gwyneth\u2019s architecture allows it to achieve synchronous composability with the L2s within the network, as well as Ethereum L1. This is unique in the current rollup landscape. On top of that, Taiko Gwyneth strives not only to scale Ethereum but also unify it.\n\nIn general, the values that we espouse at Taiko Gwyneth are those of integrity, decentralization, and security. Our goal is to stick to Ethereum philosophically and technologically as much as possible.",
    },
    {
      id: 5,
      question: "How can I start building on Taiko Gwyneth?",
      answer:
        "Taiko Gwyneth is currently developing an internal devnet. Developers will be able to build on Taiko Gwyneth once it launches. Mainnet is scheduled for the first half of 2025.",
    },
    {
      id: 6,
      question: "What is Taiko Gwyneth\u2019s end goal?",
      answer:
        "Taiko Gwyneth\u2019s end goal is a synchronously composable Ethereum world where transacting on L2s and L1 feels exactly the same, with no strings. We call this world the Based Singularity.",
    },
  ],
};
