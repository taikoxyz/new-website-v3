// Content barrel export — all static content for the site

// Page data
export {
  homePageData,
  solutionsPageData,
  aboutPageData,
  ecosystemPageData,
  eventsPageData,
  careersPageData,
  brandAssetsPageData,
  grantProgramPageData,
  commonLabels,
  articleLabels,
  positionLabels,
  taikoBlockchainPageData,
  daoPageData,
} from "./pages";

// Static data
export {
  headerNavigation,
  footerNav,
  footerContent,
  footerSocials,
  headerSocials,
  getOneLevelLinks,
  events,
  eventLocations,
  projectCategories,
  projects,
  PRIORITY_PROJECT_IDS,
} from "./data";

// Content utility functions (server-side only — uses fs)
export {
  getCareers,
  getCareer,
  getEvents,
  getEvent,
  getEventLocations,
  getProjects,
  getProject,
  getProjectCategories,
} from "./utils";

// Types
export type * from "./types";
