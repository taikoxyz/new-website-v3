import type { SolutionsPageData } from "@/content/types";

export const solutionsPageData: SolutionsPageData = {
  hero: {
    ourSolutions: "Our solutions",
    title:
      "The most developer-friendly and <span>secure</span> Ethereum scaling solution",
    text: "Preserving Ethereum\u2019s essence, reducing costs, and pioneering native scaling with Based Contestable and Based Booster Rollups.",
  },
  platform: {
    suptitle: "Our platform",
    title: "Scaling natively, compose maximally",
    learnMore: "Learn more about Taiko",
    goTo: "Go to",
    items: [
      {
        icon: "/img/solutions/icon-bridge.svg",
        title: "Bridge",
        text: "Taiko\u2019s canonical bridge is the gateway to interacting with our ecosystem.",
        image: {
          default: "/img/solutions/item-bridge.png",
          webp: "/img/solutions/item-bridge.png",
        },
        url: "https://bridge.taiko.xyz/",
      },
      {
        icon: "/img/solutions/icon-explorer.svg",
        title: "Explorer",
        text: "Search and analyze contracts and transactions on the Taiko blockchain.",
        image: {
          default: "/img/solutions/item-explorer.png",
          webp: "/img/solutions/item-explorer.png",
        },
        url: "https://taikoscan.io/",
      },
    ],
  },
  infrastructure: {
    suptitle: "Our infrastructure",
    learnMore: "Learn more",
    items: [
      {
        title:
          "Based Contestable Rollups \u2014 a modular, multi-proof design",
        icon: "/img/solutions/icon-laptop.svg",
        iconLottie: "/img/laptop.json",
        text: "BCRs unlock a new paradigm in Ethereum scaling. By combining the superpowers of Ethereum sequencing and integrating a contestation mechanism with a multi-proof design, BCRs maximally reduce transaction costs and increase decentralization.",
        url: "https://taiko.mirror.xyz/Z4I5ZhreGkyfdaL5I9P0Rj0DNX4zaWFmcws-0CVMJ2A",
      },
      {
        title:
          "Based Booster Rollups \u2014 scale natively, compose synchronously",
        icon: "/img/solutions/icon-rocket.svg",
        iconLottie: "/img/rocket.json",
        text: "BBRs merge based rollups and booster rollups, scaling Ethereum dapps without redeployment on all L2s. By sharding transaction execution and storage, BBRs minimize developer effort and redeployment costs, thereby solving liquidity fragmentation across L2s.",
        url: "https://taiko.mirror.xyz/anPjF35Mrc_xzYgOTbUmfjr_MlhE3L8ZBZIxqmz9GZ8",
      },
    ],
  },
};
