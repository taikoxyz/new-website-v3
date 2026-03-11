import type { HomePageData } from "@/content/types";

export const homePageData: HomePageData = {
  hero: {
    title: "a based rollup",
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
  hero_title: "a based rollup",
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
  about_suptitle: "About us",
  about_title: "Getting started with Taiko",
  about_text:
    "Taiko is compatible with Ethereum at the bytecode-level, meaning everything works right out of the box.",
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
  solution_screen_1_suptitle: "Our solutions",
  solution_screen_1_title:
    "Scaling Ethereum with <span>based rollups</span>",
  solution_screen_2_title:
    "<span>Taiko DAO</span> \u2014 community driven governance from Day 1",
  solution_screen_3_title:
    "<span>TKO token</span> \u2014 powering the Taiko ecosystem",
  solution_screen_4_title:
    "Join a <span>community</span> of builders and innovators",
  solution_screen_2_btn: {
    id: 10,
    name: "Explore DAO",
    link: "/dao",
    variant: "pink",
    newTab: false,
    disabledArrow: false,
  },
  solution_screen_3_btn: {
    id: 11,
    name: "Learn more",
    link: "https://docs.taiko.xyz",
    variant: "pink",
    newTab: true,
    disabledArrow: false,
  },
  solution_screen_4_btn: {
    id: 12,
    name: "Join the community",
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
  governance_title: "Governed by the community",
  governance_text:
    "Taiko is governed by the community through a decentralized governance model. Token holders can participate in shaping the protocol\u2019s future through on-chain voting and proposals.",
  explore_screens: [
    {
      id: 1,
      title: "Alethia",
      text: "A based contestable rollup \u2014 combining the best of optimistic and ZK-rollups.",
      suptitle: "Alethia",
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
      title: "Gwyneth",
      text: "A based booster rollup \u2014 scale natively, compose synchronously.",
      suptitle: "Gwyneth",
      link: {
        id: 21,
        name: "Explore Gwyneth",
        link: "/gwyneth",
        variant: "pink",
        newTab: false,
        disabledArrow: false,
      },
    },
  ],
  roadmap_suptitle: "Roadmap",
  roadmap_title: "The journey so far and what\u2019s next",
  roadmap_list: [
    {
      id: 1,
      title: "Q2 2024",
      data: [
        { id: 1, text: "<strong>Taiko Mainnet Launch</strong>" },
        { id: 2, text: "<strong>Token Generation Event</strong>" },
        { id: 3, text: "<strong>Airdrop and CEX Listing</strong>" },
      ],
    },
    {
      id: 2,
      title: "Q3 2024",
      data: [
        {
          id: 4,
          text: "<strong>Mainnet:</strong> Gas Optimization 30% reduction in L1 gas costs",
        },
        { id: 5, text: "<strong>Testnet:</strong> Hekla Upgrade" },
        { id: 6, text: "<strong>Testnet:</strong> Ontake Hardfork" },
        {
          id: 7,
          text: "<strong>Testnet:</strong> zkVM Proof Integration",
        },
      ],
    },
    {
      id: 3,
      title: "Q4 2024",
      data: [
        { id: 8, text: "<strong>Mainnet:</strong> Ontake Hardfork" },
        {
          id: 9,
          text: "<strong>Mainnet:</strong> zkVM Proof Integration",
        },
        {
          id: 10,
          text: "<strong>Devnet:</strong> Preconfirmation Demo",
        },
        {
          id: 11,
          text: "<strong>Testnet:</strong> Decentralized Security Council for Hekla",
        },
        { id: 12, text: "<strong>Devnet:</strong> Gwyneth Launch" },
      ],
    },
    {
      id: 4,
      title: "Q1 2025",
      data: [
        { id: 13, text: "<strong>Testnet:</strong> Gwyneth Launch" },
      ],
    },
    {
      id: 5,
      title: "Q2 2025",
      data: [
        {
          id: 14,
          text: "<strong>Mainnet:</strong> Decentralized Security Council",
        },
        { id: 15, text: "<strong>DAO Implemented</strong>" },
        {
          id: 16,
          text: "<strong>Mainnet: Gwyneth</strong> Mainnet launch",
        },
      ],
    },
    {
      id: 6,
      title: "H1 2025",
      data: [
        {
          id: 17,
          text: "<strong>Q3 Testnet:</strong> Hekla Preconfirmation",
        },
        {
          id: 18,
          text: "<strong>Q4 Mainnet:</strong> Preconfirmation",
        },
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
