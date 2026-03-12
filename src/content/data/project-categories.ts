import type { ProjectCategory } from "@/content/types";

// Project categories — fetched from Strapi /project-categories endpoint.
// Counts are computed dynamically in getProjectCategories() from actual project data.
export const projectCategories: ProjectCategory[] = [
  {
    id: 37,
    name: "DeFi",
    count: 0,
    createdAt: "2024-03-27T06:23:51.928Z",
    updatedAt: "2025-02-07T06:55:32.058Z",
  },
  {
    id: 38,
    name: "Wallet",
    count: 0,
    createdAt: "2024-03-27T06:24:06.274Z",
    updatedAt: "2025-02-07T06:55:32.237Z",
  },
  {
    id: 39,
    name: "Tooling",
    count: 0,
    createdAt: "2024-03-27T06:24:12.876Z",
    updatedAt: "2025-02-07T06:55:32.272Z",
  },
  {
    id: 40,
    name: "Infrastructure",
    count: 0,
    createdAt: "2024-03-27T06:24:25.403Z",
    updatedAt: "2025-02-07T06:55:32.325Z",
  },
  {
    id: 41,
    name: "Gaming",
    count: 0,
    createdAt: "2024-03-27T06:24:34.052Z",
    updatedAt: "2025-02-07T06:55:32.377Z",
  },
  {
    id: 42,
    name: "Community",
    count: 0,
    createdAt: "2024-03-27T06:24:42.006Z",
    updatedAt: "2025-02-07T06:55:32.458Z",
  },
  {
    id: 43,
    name: "NFT",
    count: 0,
    createdAt: "2024-03-27T06:24:54.469Z",
    updatedAt: "2025-02-07T06:55:32.560Z",
  },
  {
    id: 44,
    name: "Privacy",
    count: 0,
    createdAt: "2024-03-27T06:25:03.201Z",
    updatedAt: "2025-02-07T06:55:32.633Z",
  },
  {
    id: 45,
    name: "Explorers",
    count: 0,
    createdAt: "2024-04-12T06:46:03.269Z",
    updatedAt: "2025-02-07T06:55:32.669Z",
  },
  {
    id: 46,
    name: "CEX",
    count: 0,
    createdAt: "2025-06-04T10:34:03.974Z",
    updatedAt: "2025-06-04T10:34:03.974Z",
  },
];
