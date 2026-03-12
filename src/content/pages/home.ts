import type { HomePageData } from "@/content/types";

export const homePageData: HomePageData = {
  hero: {
    title: "Taiko is Ethereum, enhanced.",
    text: "Inspired, secured, and sequenced by Ethereum",
    taiko: {
      is: "Taiko is:",
      value: "Permissionless",
      labels: [
        "Permissionless",
        "Ethereum-equivalent",
        "Open-source",
        "based",
      ],
    },
    startBuilding: "Start building",
    bridgeToTaiko: "Bridge to Taiko",
    scrollToExplore: "Scroll to explore",
  },
  hero_title: "Taiko is Ethereum, enhanced.",
  hero_buttons: [
    {
      id: 1,
      name: "Start building",
      link: "https://docs.taiko.xyz",
      variant: "pink",
      newTab: true,
      disabledArrow: false,
    },
    {
      id: 2,
      name: "Bridge to Taiko",
      link: "https://bridge.taiko.xyz",
      variant: "pink-outlined",
      newTab: true,
      disabledArrow: false,
    },
    {
      id: 3,
      name: "Swap on Taiko",
      link: "https://swap.taiko.xyz",
      variant: "pink-outlined",
      newTab: true,
      disabledArrow: false,
    },
  ],
  blog: {
    title: "Blog",
  },
  advantages: [
    {
      id: "aicon-seamless",
      icon: "aicon:seamless",
      title: "seamless UX",
      text: "Taiko is an Ethereum-equivalent (Type 1) ZK-EVM, maximally compatible with Ethereum. No additional compiling, reaudits, or tooling needed. Everything works out of the box, guaranteed.",
      colors: {
        icon: "#E81899",
        text: "#0B101B",
        background: "#EFEFEF",
      },
    },
    {
      id: "aicon-community",
      icon: "aicon:community",
      title: "community-aligned",
      text: "We build with the support of our community and fully open-source. Meaning it\u2019s free to use and modify Taiko\u2019s source code with the permissive license.",
      colors: {
        icon: "#E81899",
        text: "#0B101B",
        background: "#FFE2A0",
      },
    },
    {
      id: "aicon-security",
      icon: "aicon:security",
      title: "security-first",
      text: "Taiko demands no additional trust assumptions to Ethereum. As a based rollup with a permissionless (& decentralized) proposer/prover network from Day 1, Taiko inherits Ethereum\u2019s level of decentralization.",
      colors: {
        icon: "#FFFFFF",
        text: "#FFFFFF",
        background: "#E81899",
      },
    },
    {
      id: "aicon-based",
      icon: "aicon:based",
      title: "based",
      text: "Taiko is a based rollup: the transaction sequencing on Taiko is done by Ethereum validators. Based sequencing is maximally simple and inherits Ethereum\u2019s liveness and credible neutrality.",
      colors: {
        icon: "#FFFFFF",
        text: "#FFFFFF",
        background: "#6321B6",
      },
    },
  ],
  about: {
    suptitle: "About us",
    title: "Getting started with <strong>Taiko</strong>",
    text: "Taiko is compatible with Ethereum at the bytecode-level, meaning everything works right out of the box.",
    startBuilding: "Start building",
    list: [
      {
        icon: "about:ethereum",
        title: "Bridge your ETH",
        text: "You can bridge your ETH to Taiko using our native bridge or another ecosystem bridge. For a walkthrough, start with the user guide\u2019s setup page.",
      },
      {
        icon: "about:link",
        title: "Change RPC provider",
        text: "To configure your Ethereum tools to Taiko you\u2019ll just need to point your favorite builder tools to a Taiko RPC Provider.",
      },
      {
        icon: "about:settings",
        title: "Build with your usual developer tools",
        text: "Start building with your favorite developer toolkit.",
      },
    ],
  },
  about_suptitle: "ABOUT TAIKO",
  about_title: "We envision a based, fearless, ownerless, and unstoppable ecosystem",
  about_text:
    "Our mission is to scale Ethereum while staying true to the principles that made it thrive. No centralized sequencers, no compromises. In the future, Taiko won\u2019t need leaders, only those driven to change the world one block at a time.",
  solutions: {
    solutions: "Our solutions",
    list: [
      {
        title:
          "<strong>Based Contestable Rollups</strong> \u2014 a modular, multi-proof design",
        extraTitle: "a modular, multi-proof design",
        title_short: "Based Contestable Rollup",
        text: "Combining the best of optimistic and ZK-rollups to maximally reduce costs and increase decentralization.",
        icon: "laptop",
        iconLottie: "/img/laptop.json",
      },
      {
        title:
          "<strong>Based Booster Rollups</strong> \u2014 scale natively, compose synchronously",
        extraTitle: "scale natively, compose synchronously",
        title_short: "Based Booster Rollup",
        text: "Deploy on Ethereum and scale natively across all L2s.",
        icon: "rocket",
        iconLottie: "/img/rocket.json",
      },
    ],
  },
  solution_screen_1_suptitle: "ETHEREUM SCALING SOLUTION",
  solution_screen_1_title:
    "Taiko<br>is based",
  solution_screen_2_title:
    "<span>1</span> DAO",
  solution_screen_3_title:
    "<span>1</span> Token",
  solution_screen_4_title:
    "<span>1</span> Community",
  solution_screen_2_btn: {
    id: 10,
    name: "Learn More",
    link: "/dao",
    variant: "pink",
    newTab: false,
    disabledArrow: false,
  },
  solution_screen_3_btn: {
    id: 11,
    name: "Learn More",
    link: "https://docs.taiko.xyz/network-reference/addresses",
    variant: "pink",
    newTab: true,
    disabledArrow: false,
  },
  solution_screen_4_btn: {
    id: 12,
    name: "Learn More",
    link: "https://discord.gg/taikoxyz",
    variant: "pink",
    newTab: true,
    disabledArrow: false,
  },
  ecosystem: {
    title: "Explore \nour ecosystem",
    text: "Become part of an accessible, open and inclusive ecosystem driven by a shared mission \u2014 nurturing Ethereum\u2019s Infinite Garden.",
    exploreButton: "Explore the ecosystem",
    dapps: "DAPPS",
  },
  governance_suptitle: "Governance",
  governance_title: "Taiko is Governed by the Community",
  governance_text:
    "As a based rollup, we strive to be completely decentralized. Achieving this requires a robust and decentralized governance structure. Our DAO empowers the community, making decision-making accessible to anyone who wants to participate",
  explore_screens: [
    {
      id: 1,
      title: "Taiko\nAlethia",
      text: "Alethia is Taiko. A type-1 general purpose based Rollup with no centralized sequencer.",
      suptitle: "TAIKO ALETHIA",
      link: {
        id: 20,
        name: "Explore Alethia",
        link: "/alethia",
        variant: "pink",
        newTab: false,
        disabledArrow: false,
      },
    },
    {
      id: 2,
      title: "Taiko\nGwyneth",
      text: "Gwyneth is Taiko. A based rollup synchronously composable with Ethereum.",
      suptitle: "TAIKO GWYNETH",
      link: {
        id: 21,
        name: "Explore Gwyneth",
        link: "/gwyneth",
        variant: "pink-outlined",
        newTab: false,
        disabledArrow: false,
      },
    },
  ],
  roadmap_suptitle: "Roadmap",
  roadmap_title: "Explore our journey ahead",
  roadmap_list: [
    {
      id: 1,
      title: "Q1 2025",
      data: [
        { id: 1, text: "DAO deployed on testnet" },
        { id: 2, text: "100% ZK coverage for Taiko-proposed blocks" },
        { id: 3, text: "Gwyneth ULTRA TX integration and L1-L2 liquidity sharing demo" },
        { id: 4, text: "First Based Rollup Summit (SF)" },
        { id: 5, text: "TAIKO listed on Revolut" },
      ],
    },
    {
      id: 2,
      title: "Q2 2025",
      data: [
        { id: 6, text: "DAO governance on mainnet" },
        { id: 7, text: "Based preconfirmations on testnet" },
        { id: 8, text: "TAIKO listed on Binance Futures" },
        { id: 9, text: "Based Rollup Summit (Cannes)" },
      ],
    },
    {
      id: 3,
      title: "Q3 2025",
      data: [
        { id: 10, text: "Whitelisted preconfirmations on mainnet" },
        { id: 11, text: "Post-launch stability optimizations for preconfirmations" },
        { id: 12, text: "Launch Gwyneth testnet" },
      ],
    },
    {
      id: 4,
      title: "Q4 2025",
      data: [
        { id: 13, text: "Shasta hard fork: improved base fees, 100% ZK, lower costs" },
        { id: 14, text: "Launch Gwyneth mainnet" },
        { id: 15, text: "Upgrade Taiko EVM to Pectra (EIP-7702: AA)" },
      ],
    },
    {
      id: 5,
      title: "Q1 2026",
      data: [
        { id: 16, text: "Fully decentralized preconfirmations" },
        { id: 17, text: "Formal specification for the preconfirmation protocol" },
      ],
    },
    {
      id: 6,
      title: "Q2 2026",
      data: [
        { id: 18, text: "Sub-1s preconfirmation latency" },
        { id: 19, text: "Lower finality to enable fast withdrawals and cross-rollup interop" },
        { id: 20, text: "Advance toward Stage 2 rollup classification" },
      ],
    },
  ],
  trailblazerBanner: {
    button: "Start your journey",
    text: "Embark on the Trailblazers Journey: Unleash your potential in the Taiko universe!",
  },
  grantFactoryBanner: {
    button: "Join now",
    text: "Total Prize Pool",
  },
};
