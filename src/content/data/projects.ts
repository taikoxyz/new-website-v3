import type { Project } from "@/content/types";

// Ecosystem projects — originally fetched from Strapi /ecosystems endpoint.
// Add/remove projects here as needed.
export const projects: Project[] = [
  {
    id: 1,
    name: "Taiko Bridge",
    link: "https://bridge.taiko.xyz/",
    description:
      "Taiko\u2019s canonical bridge for transferring assets between Ethereum and Taiko.",
    icon: "/img/ecosystem/taiko-bridge.png",
    type: "Mainnet",
    categories: ["Bridge", "Infrastructure"],
    createdAt: "2024-01-01T00:00:00.000Z",
    updatedAt: "2024-01-01T00:00:00.000Z",
    publishedAt: "2024-01-01T00:00:00.000Z",
  },
  {
    id: 2,
    name: "Taikoscan",
    link: "https://taikoscan.io/",
    description:
      "Block explorer for the Taiko network, powered by Etherscan.",
    icon: "/img/ecosystem/taikoscan.png",
    type: "Mainnet",
    categories: ["Infrastructure", "Tools"],
    createdAt: "2024-01-01T00:00:00.000Z",
    updatedAt: "2024-01-01T00:00:00.000Z",
    publishedAt: "2024-01-01T00:00:00.000Z",
  },
];

// Priority project IDs — shown first in ecosystem listing
export const PRIORITY_PROJECT_IDS = ["1200", "1198"];
