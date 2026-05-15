import type { TaikoBlockchainPageData } from "@/content/types";

export const taikoBlockchainPageData: TaikoBlockchainPageData = {
  id: 1,
  hero_title: "The based way of scaling Ethereum.",
  hero_text:
    "A type-1 general-purpose based rollup with no centralized sequencer.",
  hero_logo: "/img/taiko-blockchain/taikoblockchain-logo.svg",
  about_title: "Taiko",
  about_text: "A based rollup on Ethereum",
  about_subtext: "Ownerless, permissionless, decentralized.",
  features_suptitle: "Key Features",
  features_list: [
    {
      id: 1,
      title: "Decentralized, Truly",
      text: "With based sequencing, Taiko’s block-building process is open (and potentially profitable) for everyone!",
      disabled: false,
    },
    {
      id: 2,
      title: "Based of Both Worlds",
      text: "Everything good about Ethereum meets everything good about L2s. No compromise, pure advancement.",
      disabled: false,
    },
    {
      id: 3,
      title: "Easiest to Migrate",
      text: "Type-1 ZK-VM allows dApps to migrate easily. Anything that works on Ethereum works on Taiko. No changes needed.",
      disabled: false,
    },
    {
      id: 4,
      title: "Ownerless",
      text: "Taiko strives to be ownerless by being owned by the community. Take control.",
      disabled: false,
    },
    {
      id: 5,
      title: "Power of Preconfirmations",
      text: "Transactions as fast as a centralized exchange, but fully decentralized.",
      disabled: false,
    },
    {
      id: 6,
      title: "A Passionate Community",
      text: "Taiko draws its power from a community full of Trailblazers. Become one.",
      disabled: false,
    },
  ],
  cards_list: [
    {
      id: 1,
      title: "Documentation",
      text: "Everything you need to build on Taiko.",
      href: "https://docs.taiko.xyz/",
      disabled: false,
      icon: "/img/taiko-blockchain/docs.svg",
    },
    {
      id: 2,
      title: "Discover the Ecosystem",
      text: "150+ dApps and counting. Find what you’re into!",
      href: "/ecosystem",
      disabled: false,
      icon: "/img/taiko-blockchain/ecosystem.svg",
    },
    {
      id: 3,
      title: "Community",
      text: "Become a part of our great Taiko community. We are stronger with you!",
      href: "https://discord.gg/taikoxyz",
      disabled: false,
      icon: "/img/taiko-blockchain/community.svg",
    },
  ],
  explore_suptitle: "",
  explore_title:
    "Are you a visionary builder?\nAn opportunity-seeking user?\nA bold trailblazer?",
  explore_text:
    "Taiko is open to all! Explore, discover, and participate. Taiko is yours!",
  explore_background: "/img/taiko-blockchain/explore.webp",
  faq_title: "Frequently Asked Questions",
  faq_text: "Read answers to the most common questions about Taiko.",
  faq_data: [
    {
      id: 1,
      question: "What is Taiko?",
      answer:
        "Taiko is a based rollup. A scaling solution that is highly configurable, fully open source, permissionless, decentralized and Ethereum-equivalent. There are no centralized actors that operate the network; all operations are permissionlessly run by the community.",
    },
    {
      id: 2,
      question: "How Does Taiko Work?",
      answer:
        "Rollups have three core modules:\n\n1. Data Availability: (where they store their data).\n2. Execution (how they execute transactions)\n3. Sequencing (who orders the transactions)\n\nTraditional rollups only use Ethereum for one of these modules – Data Availability. Unlike other rollups, Taiko also uses Ethereum for sequencing.",
    },
    {
      id: 3,
      question: "What differentiates Taiko from others?",
      answer:
        "Permissionless and decentralized: Taiko is a based rollup, the first of its class. Lacking a centralized sequencer, it relies on Ethereum validators to sequence transactions and blocks, elevating Taiko’s permissionless and decentralized ethos.\n\nFrictionless developer experience: Taiko utilizes an Ethereum-equivalent zkEVM (type-1) to achieve execution-level compatibility with Ethereum, essentially offering “Ethereum at scale.”\n\nHighly configurable and future-compatible: Designed as a Contestable Rollup, Taiko permits app chains to define their proof systems and to embrace newer, more efficient ZK proofs as technology progresses, all without the need to amend Taiko’s core protocol.",
    },
    {
      id: 4,
      question: "How can I start building on Taiko?",
      answer:
        "Today, Taiko is live and fully compatible with Ethereum. No additional compiling, re-audits, or tooling needed. Everything works out of the box, guaranteed. Start from here now.",
    },
    {
      id: 5,
      question: "What is Taiko’s end goal?",
      answer:
        "To be censorship-resistant, unstoppable, ownerless, and a natural hub for real-world applications that require these critical properties. A natural extension of Ethereum.",
    },
  ],
};
