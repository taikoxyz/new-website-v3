import type { BlogCategory } from "@/content/types";

// Blog categories — originally fetched from Strapi /blog-categories endpoint.
export const blogCategories: BlogCategory[] = [
  { id: 1, name: "Protocol" },
  { id: 2, name: "Ecosystem" },
  { id: 3, name: "Company" },
  { id: 4, name: "Technical" },
  { id: 5, name: "Community" },
];
