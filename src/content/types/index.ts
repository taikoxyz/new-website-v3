// Content type definitions for static file-based content

export interface BaseFields {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface BlogPost extends BaseFields {
  title: string;
  slug: string;
  link: string;
  date: string;
  timeToRead: string;
  category: BlogCategory;
  image: string;
  content: string;
}

export interface BlogCategory {
  id: number;
  name: string;
}

export interface BlogNear {
  prev: BlogShort | null;
  next: BlogShort | null;
}

export interface BlogShort {
  id: number;
  title: string;
  slug: string;
}

export interface Career extends BaseFields {
  title: string;
  slug: string;
  type: string;
  location: string;
  content: string; // MDX content body
  howToApply?: string;
}

export interface Event extends BaseFields {
  title: string;
  slug: string;
  location: string;
  date: string;
  image: string;
}

export interface EventLocation {
  name: string;
}

export interface Project extends BaseFields {
  icon: string;
  name: string;
  link: string;
  description: string;
  type: "Testnet" | "Coming Soon" | "Mainnet";
  categories: string[];
}

export interface ProjectCategory extends BaseFields {
  name: string;
  count: number;
}

// Navigation types
export interface NavItemLink {
  name: string;
  icon: string;
  href?: string;
  desc?: string;
  disabled?: boolean;
  children?: {
    name: string;
    desc: string;
    href: string;
  }[];
}

export interface NavItem {
  name: string;
  img: string;
  children: NavItemLink[][];
}

export interface FooterNavGroup {
  title: string;
  list: {
    name: string;
    url: string;
  }[];
}

export interface SocialLink {
  icon: string;
  name?: string;
  url: string;
}

// Page content types

export interface ExploreScreen {
  id: number;
  title: string;
  text: string;
  suptitle: string;
  link: ButtonData;
}

export interface RoadmapListItem {
  id: number;
  text: string;
}

export interface RoadmapList {
  id: number;
  title: string;
  data: RoadmapListItem[];
}

export interface HomePageData {
  hero_title: string;
  hero_buttons: ButtonData[];
  about_suptitle: string;
  about_title: string;
  about_text: string;
  solution_screen_1_suptitle: string;
  solution_screen_1_title: string;
  solution_screen_2_title: string;
  solution_screen_3_title: string;
  solution_screen_4_title: string;
  solution_screen_2_btn: ButtonData;
  solution_screen_3_btn: ButtonData;
  solution_screen_4_btn: ButtonData;
  governance_suptitle: string;
  governance_title: string;
  governance_text: string;
  explore_screens: ExploreScreen[];
  roadmap_suptitle: string;
  roadmap_title: string;
  roadmap_list: RoadmapList[];
}

export interface SolutionsPageData {
  hero: {
    ourSolutions: string;
    title: string;
    text: string;
  };
  platform: {
    suptitle: string;
    title: string;
    learnMore: string;
    goTo: string;
    items: {
      icon: string;
      title: string;
      text: string;
      image: { default: string; webp: string };
      url: string;
    }[];
  };
  infrastructure: {
    suptitle: string;
    learnMore: string;
    items: {
      title: string;
      icon: string;
      iconLottie: string;
      text: string;
      url: string;
    }[];
  };
}

export interface AboutPageData {
  ourBrand: string;
  viewBrand: string;
  hero: { title: string };
  community: { suptitle: string; title: string; text: string };
  mission: {
    suptitle: string;
    title: string;
    text: string;
    fact: { title: string; text_1: string; text_2: string };
  };
  careers: {
    suptitle: string;
    title: string;
    text: string;
    viewBtn: string;
  };
}

export interface EcosystemPageData {
  title: string;
  suptitle: string;
  text: string;
  joinOurEcosystem: string;
  dapps: string;
  searchProjects: string;
  allTypes: string;
  allCategories: string;
  lastUpdated: string;
  viewMore: string;
  grant: {
    suptitle: string;
    text: string;
    applyText: string;
    contactUs: string;
  };
  disclaimer: {
    text: string;
    actions: Array<{
      label: string;
      href: string;
      variant: "primary" | "ghost";
    }>;
  };
}

export interface EventsPageData {
  suptitle: string;
  title: string;
  text: string;
  learnMore: string;
  eventSchedule: string;
  eventName: string;
  location: string;
  month: string;
}

export interface BlogPageData {
  date: { title: string; value: string }[];
}

export interface CareersPageData {
  hero: { title: string; aboutBtn: string };
  about: { suptitle: string; title: string; text: string };
  positions: {
    title: string;
    position: string;
    location: string;
    type: string;
  };
  banner: { title: string; contactUs: string };
}

export interface BrandAssetsPageData {
  hero: { title: string; text: string };
  logo: {
    suptitle: string;
    button: string;
    logos: {
      id: number;
      img: string;
      background: string;
      backgroundImage?: string;
    }[];
  };
  colorPalette: {
    suptitle: string;
    colors: {
      title: string;
      items: { name: string; color: string }[];
    }[];
  };
  topography: {
    suptitle: string;
    title: string;
    downloadFont: string;
    list: { title: string; text: string }[];
    fonts: {
      title: string;
      fontFamily: string;
      font: string;
      variants: { name: string; weight: number }[];
      url: string;
    }[];
  };
  brandBook: { title: string; button: string };
}

export interface GrantProgramPageData {
  hero: { title: string; text: string };
  keyDates: {
    title: string;
    dateTitle: string;
    descriptionTitle: string;
    items: { date: string; description: string }[];
  };
  mission: {
    title: string;
    items: { icon: string; title: string; text: string }[];
  };
  community: {
    suptitle: string;
    title: string;
    text: string;
    learnMore: string;
  };
  track: {
    title: string;
    applyNow: string;
    items: {
      icon: string;
      title: string;
      track: string;
      link: string;
      text: string;
      timeline: string;
      active: boolean;
    }[];
  };
  support: {
    title: string;
    text: string;
    faqs: { q: string; a: string }[];
  };
  banner: { title: string; learnMore: string };
}

export interface CommonLabels {
  applyOurGrantsProgram: string;
  learnMore: string;
  filtersTitle: string;
  blogTitle: string;
  contentTitle: string;
  shareTitle: string;
  viewMore: string;
  time: string;
  topic: string;
  applyForm: {
    applyNow: string;
    text: string;
    email: string;
    extraInfo: string;
    attachCV: string;
  };
  uploadFile: {
    empty_text: string;
    fill_text: string;
    new_text: string;
  };
}

export interface ArticleLabels {
  howToApply: string;
  latestArticles: string;
  previous: string;
  next: string;
}

export interface PositionLabels {
  taikoCareers: string;
  applyNow: string;
  aboutPosition: string;
  howToApply: string;
}

// Utility types from source repo
export interface ButtonData {
  id: number;
  name: string;
  link: string;
  variant: string;
  newTab: boolean;
  disabledArrow: boolean;
}

export interface ImageData {
  url: string;
  alternativeText: string | null;
}

// Alethia / Gwyneth shared page types
export interface FeatureItem {
  id: number;
  title: string;
  text: string;
  disabled: boolean;
  icon?: string;
}

export interface CardItem {
  id: number;
  title: string;
  text: string;
  href: string;
  disabled: boolean;
  icon: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface AlethiaGwynethPageData {
  id: number;
  hero_title: string;
  hero_text: string;
  hero_logo: string;
  about_title: string;
  about_text: string;
  about_subtext: string;
  features_suptitle: string;
  features_list: FeatureItem[];
  cards_list: CardItem[];
  explore_suptitle: string;
  explore_title: string;
  explore_text: string;
  explore_background: string;
  faq_title: string;
  faq_text: string;
  faq_data: FaqItem[];
}

// DAO page types
export interface DaoPageData {
  id: number;
  welcome_suptitle: string;
  welcome_title: string;
  welcome_text: string;
  welcome_btn?: ButtonData;
  about_suptitle: string;
  about_title: string;
  about_text: string;
  about_features: FeatureItem[];
  about_join_suptitle: string;
  about_join_title: string;
  about_join_btn?: ButtonData;
  faq_title: string;
  faq_text: string;
  faq_data: FaqItem[];
}

// Gwyneth Apps page types
export interface GwynethAppsItem {
  id: number;
  name: string;
  text: string;
  type: string;
  active: boolean;
  icon: string;
  categories: string[];
  url?: string;
}

export interface GwynethAppsPageData {
  id: number;
  hero_title: string;
  hero_about_suptitle: string;
  hero_about_text: string;
  hero_about_btn?: ButtonData;
  hero_dapps?: {
    id: number;
    name: string;
    value: string;
    icons: string[];
  };
  disclaimer_title: string;
  disclaimer_text: string;
  disclaimer_active: boolean;
  apps_list: GwynethAppsItem[];
}
