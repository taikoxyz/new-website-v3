import type { EcosystemPageData } from "@/content/types";

export const ecosystemPageData: EcosystemPageData = {
  title: "Explore the <span>Taiko</span> Ecosystem",
  suptitle: "About ecosystem",
  text: "Join a supportive, collaborative ecosystem with a greater purpose \u2013 permissionless, flexible, and dedicated to defining the future of Ethereum.",
  joinOurEcosystem: "Submit your project",
  dapps: "dApps",
  searchProjects: "Search for projects...",
  allTypes: "all types",
  allCategories: "all categories",
  lastUpdated: "Last updated on",
  viewMore: "View more",
  grant: {
    suptitle: "Taiko Grants",
    text: "Building on Taiko and need financial or other support? <br></br> <span>Apply for a grant!</span>",
    applyText: "Apply to our grants program",
    contactUs: "Learn more",
  },
  disclaimer: {
    text: "Listings are community-submitted and not endorsed by Taiko. We make no guarantees about the authenticity, security, or reliability of any listed project. Always do your own research before interacting with any application.",
    actions: [
      {
        label: "Submit a project",
        href: "https://github.com/taikoxyz/new-website-v3/issues/new?assignees=&labels=category.enhancement%2Cstatus.needs-triage&projects=&template=add_project.yml",
        variant: "primary",
      },
      {
        label: "Report an issue",
        href: "https://github.com/taikoxyz/new-website-v3/issues/new",
        variant: "ghost",
      },
    ],
  },
};
