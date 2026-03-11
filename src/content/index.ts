// Content barrel export — all static content for the site

// Page data
export {
  homePageData,
  solutionsPageData,
  aboutPageData,
  ecosystemPageData,
  eventsPageData,
  blogPageData,
  careersPageData,
  brandAssetsPageData,
  grantProgramPageData,
  commonLabels,
  articleLabels,
  positionLabels,
  alethiaPageData,
  gwynethPageData,
  gwynethAppsPageData,
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
  blogCategories,
  projectCategories,
  projects,
  PRIORITY_PROJECT_IDS,
} from "./data";

// Content utility functions (server-side only — uses fs)
export {
  getBlogs,
  getBlog,
  getBlogNear,
  getBlogCategories,
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
