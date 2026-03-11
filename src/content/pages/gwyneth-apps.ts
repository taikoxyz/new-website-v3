import type { GwynethAppsPageData } from "@/content/types";

export const gwynethAppsPageData: GwynethAppsPageData = {
  id: 1,
  hero_title: "Gwyneth Apps",
  hero_about_suptitle: "About Gwyneth Apps",
  hero_about_text:
    "Explore applications building on and integrating with Gwyneth, Taiko's Based Booster Rollup.",
  hero_about_btn: {
    id: 1,
    name: "Learn more about Gwyneth",
    link: "/gwyneth",
    variant: "primary",
    newTab: false,
    disabledArrow: false,
  },
  hero_dapps: {
    id: 1,
    name: "dApps",
    value: "0",
    icons: [],
  },
  disclaimer_title: "Disclaimer",
  disclaimer_text:
    "The following applications allege they are building on or integrating with Gwyneth. Please note that no guarantee is made as to the authenticity, veracity, or safety of any of these protocols. You assume all risks for using any links, so please conduct your own research and exercise caution.",
  disclaimer_active: true,
  apps_list: [],
};
