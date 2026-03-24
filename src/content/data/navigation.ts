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
          href: "/ecosystem",
          icon: "/img/header/apps.svg",
        },
        {
          name: "Taiko Takeoff",
          href: "https://takeoff.taiko.xyz/",
          icon: "/img/header/trailblazer.svg",
        },
        {
          name: "Docs",
          href: "https://docs.taiko.xyz/start-here/getting-started",
          icon: "/img/header/docs.svg",
        },
        {
          name: "Whitepaper",
          href: "https://github.com/taikoxyz/taiko-mono/tree/main/packages/whitepaper",
          icon: "/img/header/docs.svg",
        },
      ],
      [
        {
          name: "Bridge",
          href: "https://bridge.taiko.xyz/",
          icon: "/img/header/apps.svg",
        },
        {
          name: "Swap",
          href: "https://swap.taiko.xyz/",
          icon: "/img/header/apps.svg",
        },
        {
          name: "Proofs",
          href: "https://proofs.taiko.xyz/",
          icon: "/img/header/docs.svg",
        },
        {
          name: "Status",
          href: "https://status.taiko.xyz/",
          icon: "/img/header/about.svg",
        },
        {
          name: "Block Explorers",
          icon: "/img/header/explorers.svg",
          children: [
            {
              name: "Taikoscan.io",
              desc: "By Etherscan",
              href: "https://taikoscan.io/",
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
          href: "/gwyneth/apps",
          icon: "/img/header/apps.svg",
        },
        {
          name: "Docs",
          href: "https://docs.taiko.xyz/start-here/getting-started",
          icon: "/img/header/docs.svg",
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
          href: "/dao",
          icon: "/img/header/learn.svg",
        },
        {
          name: "DAO App",
          href: "https://dao.taiko.xyz/",
          icon: "/img/header/aragon.svg",
        },
        {
          name: "Docs",
          href: "https://dao-docs.taiko.xyz/start-here/getting-started",
          icon: "/img/header/docs.svg",
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
        {
          name: "Grants",
          href: "/grant-program",
          icon: "/img/header/careers.svg",
        },
        {
          name: "Proving Ground",
          href: "https://provinggroundxyz.substack.com/",
          icon: "/img/header/blog.svg",
        },
      ],
      [
        {
          name: "Guides",
          icon: "/img/header/docs.svg",
          children: [
            {
              name: "Deploy AI Agents on Taiko",
              desc: "ERC-8004, sub-cent fees, censorship-resistant sequencing",
              href: "/guides/deploy-ai-agent-on-ethereum-l2",
            },
          ],
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
    icon: "gsocial:substack",
    name: "proving ground",
    url: "https://provinggroundxyz.substack.com/",
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
