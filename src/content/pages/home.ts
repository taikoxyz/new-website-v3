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
  ecosystem: {
    title: "Explore \nour ecosystem",
    text: "Become part of an accessible, open and inclusive ecosystem driven by a shared mission \u2014 nurturing Ethereum\u2019s Infinite Garden.",
    exploreButton: "Explore the ecosystem",
    dapps: "DAPPS",
  },
  trailblazerBanner: {
    button: "Start your journey",
    text: "Embark on the Trailblazers Journey: Unleash your potential in the Taiko universe!",
  },
  grantFactoryBanner: {
    button: "Join now",
    text: "Total Prize Pool",
  },
};
