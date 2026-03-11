import type { NavItem, NavItemLink, FooterNavGroup, SocialLink } from "@/content/types";

// Header mega-menu navigation — ported from source repo's hardcoded navigation
export const headerNavigation: NavItem[] = [
  {
    name: "Alethia",
    img: "/media/menu-alethia.mp4",
    children: [
      [
        {
          name: "About",
          href: "/alethia",
          icon: "/img/header/about.svg",
        },
        {
          name: "Apps",
          href: "https://taiko.xyz/ecosystem",
          icon: "/img/header/apps.svg",
        },
        {
          name: "Docs",
          href: "https://docs.taiko.xyz/start-here/getting-started",
          icon: "/img/header/docs.svg",
        },
      ],
      [
        {
          name: "Block Explorers",
          icon: "/img/header/explorers.svg",
          children: [
            {
              name: "Taikoscan.io",
              desc: "By Etherscan",
              href: "https://taikoscan.io/",
            },
            {
              name: "Taikoexplorer.com/",
              desc: "By Routescan",
              href: "https://taikoscan.network/",
            },
            {
              name: "Taikoscan.net",
              desc: "By Socialscan",
              href: "https://taikoscan.net/",
            },
          ],
        },
      ],
    ],
  },
  {
    name: "Gwyneth",
    img: "/media/menu-gwyneth.mp4",
    children: [
      [
        {
          name: "About",
          href: "/gwyneth",
          icon: "/img/header/about.svg",
        },
        {
          name: "Apps",
          href: "",
          icon: "/img/header/apps.svg",
          disabled: true,
        },
        {
          name: "Docs",
          href: "https://docs.taiko.xyz/start-here/getting-started",
          icon: "/img/header/docs.svg",
        },
        {
          name: "Block Explorers",
          icon: "/img/header/explorers.svg",
          href: "",
        },
      ],
    ],
  },
  {
    name: "Governance",
    img: "/media/menu-governance.mp4",
    children: [
      [
        {
          name: "Learn",
          href: "https://taiko.mirror.xyz/9lW3JdFnMJGtoPbmXqFS32XNxf_iK0VDx0vGWk2K7Eo",
          icon: "/img/header/learn.svg",
        },
        {
          name: "Aragon",
          href: "https://dao.taiko.xyz/",
          icon: "/img/header/aragon.svg",
        },
      ],
    ],
  },
  {
    name: "Learn",
    img: "/media/menu-learn.mp4",
    children: [
      [
        {
          name: "About",
          href: "/about",
          icon: "/img/header/about.svg",
        },
        {
          name: "Blog",
          href: "/blog",
          icon: "/img/header/blog.svg",
        },
        {
          name: "Brand Kit",
          href: "/brand-assets",
          icon: "/img/header/brand-kit.svg",
        },
        {
          name: "Careers",
          href: "/careers",
          icon: "/img/header/careers.svg",
        },
      ],
    ],
  },
  {
    name: "Engage",
    img: "/img/header/taiko-engage.jpg",
    children: [
      [
        {
          name: "Trailblazer",
          href: "https://trailblazers.taiko.xyz/",
          icon: "/img/header/trailblazer.svg",
        },
        {
          name: "Snaefell NFT",
          href: "https://snaefellnft.taiko.xyz/",
          icon: "/img/header/snaefell.svg",
        },
        {
          name: "Taikoons NFT",
          href: "https://taikoons.taiko.xyz/",
          icon: "/img/header/taikoons.svg",
        },
      ],
    ],
  },
];

// Footer navigation columns
export const footerNav: FooterNavGroup[] = [
  {
    title: "About",
    list: [
      { name: "Blog", url: "/blog" },
      { name: "Careers", url: "/careers" },
      { name: "Brand kit", url: "/brand-assets" },
    ],
  },
  {
    title: "Developers",
    list: [
      {
        name: "Get started",
        url: "https://docs.taiko.xyz/start-here/getting-started",
      },
      { name: "GitHub", url: "https://github.com/taikoxyz" },
    ],
  },
  {
    title: "Solutions",
    list: [
      { name: "Bridge", url: "https://bridge.taiko.xyz/" },
      { name: "Documentation", url: "https://docs.taiko.xyz/" },
      { name: "Explorer", url: "https://taikoscan.io/" },
    ],
  },
];

// Footer content
export const footerContent = {
  copyright: "\u00A9 2024 Taiko Labs",
  joinTaiko: 'Join the taiko <b>community</b>',
  content: {
    title: "Taiko Labs",
    text: "The most developer-friendly and secure Ethereum scaling solution.",
  },
  subscribe: {
    stayUpdated:
      "Stay updated! \nDive into the latest Taiko developer news",
    subscribe: "Subscribe",
    email: "Email",
  },
};

// Footer social links
export const footerSocials: SocialLink[] = [
  {
    icon: "gsocial:discord",
    name: "discord",
    url: "https://discord.com/invite/taikoxyz",
  },
  {
    icon: "gsocial:twitter",
    name: "twitter",
    url: "https://twitter.com/taikoxyz",
  },
  {
    icon: "gsocial:paragraph",
    name: "paragraph",
    url: "https://paragraph.com/@taiko-labs",
  },
  {
    icon: "gsocial:taiko",
    name: "forum",
    url: "https://community.taiko.xyz/",
  },
  {
    icon: "gsocial:youtube",
    name: "youtube",
    url: "https://www.youtube.com/@taikoxyz",
  },
];

// Header social links
export const headerSocials: SocialLink[] = [
  { icon: "socials:github", url: "https://github.com/taikoxyz" },
  { icon: "socials:twitter", url: "https://twitter.com/taikoxyz" },
  {
    icon: "socials:discord",
    url: "https://discord.com/invite/taikoxyz",
  },
];

// Utility: flatten header nav to one-level links (used by footer/mobile)
export function getOneLevelLinks(group = false) {
  return headerNavigation
    .map((item) => ({
      name: item.name,
      links: item.children.flat(),
    }))
    .map((item) => {
      const links: NavItemLink[] = [];

      if (group) {
        links.push(...item.links);
      } else {
        for (const { children, ...child } of item.links) {
          if (children) {
            links.push(...(children as NavItemLink[]));
          } else {
            links.push(child as NavItemLink);
          }
        }
      }

      return { name: item.name, links };
    });
}
