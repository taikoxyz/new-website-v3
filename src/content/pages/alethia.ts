import type { AlethiaGwynethPageData } from "@/content/types";

export const alethiaPageData: AlethiaGwynethPageData = {
  id: 1,
  hero_title: "The based way of scaling Ethereum.",
  hero_text:
    "A type-1 general-purpose based rollup with no centralized sequencer.",
  hero_logo: "/img/alethia/taikoalethia-logo.svg",
  about_title: "Alethia is Taiko",
  about_text: "A based rollup on Ethereum",
  about_subtext: "Ownerless, permissionless, decentralized.",
  features_suptitle: "Key Features",
  features_list: [
    {
      id: 1,
      title: "Decentralized, Truly",
      text: "With based sequencing, Alethia\u2019s block-building process is open (and potentially profitable) for everyone!",
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
      text: "Type-1 ZK-VM allows dApps to migrate easily. Anything that works on Ethereum works on Alethia. No changes needed.",
      disabled: false,
    },
    {
      id: 4,
      title: "Ownerless",
      text: "Alethia strives to be ownerless by being owned by the community. Take control.",
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
      text: "Alethia draws her power from a community full of Trailblazers. Become one.",
      disabled: false,
    },
  ],
  cards_list: [
    {
      id: 1,
      title: "Documentation",
      text: "Everything you need to build  on Alethia.",
      href: "https://docs.taiko.xyz/",
      disabled: false,
      icon: "/img/alethia/docs.svg",
    },
    {
      id: 2,
      title: "Discover the Ecosystem",
      text: "150+ dApps and counting. Find what you\u2019re into!",
      href: "/ecosystem",
      disabled: false,
      icon: "/img/alethia/ecosystem.svg",
    },
    {
      id: 3,
      title: "Community",
      text: "Become a part of our great Taiko community. We are stronger with you!",
      href: "https://discord.com/invite/taiko-984015101017346058",
      disabled: false,
      icon: "/img/alethia/community.svg",
    },
  ],
  explore_suptitle: "",
  explore_title:
    "Are you a visionary builder?\nAn opportunity-seeking user?\nA bold trailblazer?",
  explore_text:
    "Alethia is open to all! Explore, discover, and participate. Alethia is yours!",
  explore_background: "/img/alethia/explore.webp",
  faq_title: "Frequently Asked Questions",
  faq_text: "Read answers to the most common questions about Alethia.",
  faq_data: [
    {
      id: 1,
      question: "What is Taiko Alethia?",
      answer:
        "Taiko Alethia is a based rollup. A scaling solution that highly configurable, fully open source, permissionless, decentralized and Ethereum-equivalent. There are no centralized actors that operate the network; all operations are permissionlessly run by the community.",
    },
    {
      id: 2,
      question: "How Does Taiko Alethia Work?",
      answer:
        "Rollups have three core modules:\n\n1. Data Availability: (where they store their data).\n2. Execution (how they execute transactions)\n3. Sequencing (who orders the transactions)\n\nTraditional rollups only use Ethereum for one of these modules \u2013 Data Availability. Unlike other rollups, Taiko also uses Ethereum for sequencing.",
    },
    {
      id: 3,
      question: "What differentiates Taiko Alethia from others?",
      answer:
        "Permissionless and decentralized: Taiko Alethia is a based rollup, the first of its class. Lacking a centralized sequencer, it relies on Ethereum validators to sequence transactions and blocks, elevating Taiko\u2019s permissionless and decentralized ethos.\n\nFrictionless developer experience: Taiko Alethia utilizes an Ethereum-equivalent zkEVM (type-1) to achieve execution-level compatibility with Ethereum, essentially offering \u201cEthereum at scale.\u201d\n\nHighly configurable and future-compatible: Designed as a Contestable Rollup, Taiko Alethia permits app chains to define their proof systems and to embrace newer, more efficient ZK proofs as technology progresses, all without the need to amend Taiko\u2019s core protocol.",
    },
    {
      id: 4,
      question: "How can I start building on Taiko Alethia?",
      answer:
        "Today, Taiko Alethia is live and fully compatible with Ethereum. No additional compiling, re-audits, or tooling needed. Everything works out of the box, guaranteed. Start from here now.",
    },
    {
      id: 5,
      question: "What is Taiko\u2019s end goal?",
      answer:
        "To be censorship-resistant, unstoppable, ownerless, and a natural hub for real-world applications that require these critical properties. A natural extension of Ethereum.",
    },
  ],
};
