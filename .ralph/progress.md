# Progress Log
Started: Wed 11 Mar 2026 15:06:21 -04

## Codebase Patterns
- Content lives in src/content/ — pages/, data/, blog/ (MDX), careers/ (MDX), types/
- gray-matter used for MDX frontmatter parsing in content utility functions
- Page data files are plain TypeScript objects matching source repo's i18n JSON structure
- Navigation data (header mega-menu, footer) is in src/content/data/navigation.ts

---

## [2026-03-11] - S01: Project Scaffolding & Static Assets
Thread:
Run: 20260311-151158-48493 (iteration 1)
Run log: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-1.log
Run summary: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-1.md
- Guardrails reviewed: yes
- No-commit run: false
- Commit: 797d2a2 feat(scaffold): initialize Next.js 15 project with static assets and SCSS
- Post-commit status: clean
- Verification:
  - Command: pnpm run build -> PASS (compiled successfully, no errors)
  - Command: pnpm tsc --noEmit -> PASS (no type errors)
  - Command: curl localhost:3777 -> PASS (HTTP 200)
  - Command: Browser screenshot -> PASS (page renders with SCSS styles applied)
- Files changed:
  - package.json (Next.js 15, React 19, sass, gsap, lottie, swiper, clsx, dayjs, yup, etc.)
  - pnpm-lock.yaml
  - tsconfig.json (baseUrl: './src', path aliases @/*)
  - next.config.ts (SASS additionalData, image remotePatterns, silenceDeprecations)
  - eslint.config.mjs (next/core-web-vitals)
  - .prettierrc
  - .gitignore
  - AGENTS.md
  - src/app/layout.tsx (root layout with SCSS import)
  - src/app/page.tsx (minimal home page)
  - src/app/scss/vars.scss (design tokens, colors, breakpoints)
  - src/app/scss/mixins.scss (responsive, font, utility mixins)
  - src/app/scss/fonts.scss (8 font-face declarations)
  - src/app/scss/reset.scss (element resets)
  - src/app/scss/custom.scss (swiper overrides)
  - src/app/scss/style.scss (global styles, container)
  - src/app/scss/index.scss (master import)
  - public/fonts/ (40 font files: 10 families x 4 formats)
  - public/img/ (163 images + 10 Lottie JSON files)
  - public/media/ (8 video files)
  - public/files/ (2 ZIP archives)
  - public/locales/en/ (14 i18n JSON files)
  - public/favicon.svg
- What was implemented:
  - Initialized Next.js 15 App Router project with TypeScript, SASS, pnpm
  - Installed all required dependencies (gsap, @gsap/react, lottie, react-transition-group, clsx, dayjs, swiper, use-debounce, yup)
  - Configured tsconfig.json with baseUrl './src' and @/* path aliases
  - Copied all static assets from source repo (fonts, images, Lottie, media, documents, favicon, locales)
  - Adapted SCSS design system (vars, mixins, reset, fonts, custom, style) with auto-injection via sassOptions
  - Configured next.config.ts for SASS compilation, image optimization, Vercel deployment
  - Set up ESLint (next/core-web-vitals) and Prettier
  - Created minimal App Router layout and page that compile and render correctly
- **Learnings for future iterations:**
  - SCSS vars and mixins are auto-injected via next.config.ts sassOptions.additionalData — no need to import in component SCSS modules
  - Use silenceDeprecations: ["import", "legacy-js-api"] to suppress Sass @import deprecation warnings
  - Source repo uses @import not @use — keep consistent for compatibility with existing SCSS modules
  - @eslint/eslintrc must be explicitly installed for eslint.config.mjs FlatCompat approach
  - Source repo has both old breakpoint vars ($kLaptopXXL etc.) and new ($xxxl etc.) — both are needed
---

## [2026-03-11] - S02: Content Extraction & Static Data Files
Thread:
Run: 20260311-151158-48493 (iteration 2)
Run log: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-2.log
Run summary: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-2.md
- Guardrails reviewed: yes
- No-commit run: false
- Commit: 810e8ad feat(content): extract all content into static TypeScript data files and MDX
- Post-commit status: clean
- Verification:
  - Command: pnpm tsc --noEmit -> PASS (no type errors)
  - Command: pnpm run build -> PASS (compiled successfully, no errors)
- Files changed:
  - src/content/types/index.ts (all content type definitions)
  - src/content/data/navigation.ts (header mega-menu, footer nav, social links, getOneLevelLinks)
  - src/content/data/events.ts (events data + event locations)
  - src/content/data/blog-categories.ts (blog categories)
  - src/content/data/project-categories.ts (ecosystem project categories)
  - src/content/data/projects.ts (ecosystem projects + priority IDs)
  - src/content/data/index.ts (barrel export)
  - src/content/pages/home.ts (home page data)
  - src/content/pages/solutions.ts (solutions page data)
  - src/content/pages/about.ts (about page data)
  - src/content/pages/ecosystem.ts (ecosystem page data)
  - src/content/pages/events.ts (events page data)
  - src/content/pages/blog.ts (blog page data/filter options)
  - src/content/pages/careers.ts (careers page data)
  - src/content/pages/brand-assets.ts (brand assets page data)
  - src/content/pages/grant-program.ts (grant program page data)
  - src/content/pages/common.ts (common labels, article labels, position labels)
  - src/content/pages/alethia.ts (alethia page data)
  - src/content/pages/gwyneth.ts (gwyneth page data)
  - src/content/pages/gwyneth-apps.ts (gwyneth apps page data)
  - src/content/pages/dao.ts (dao page data)
  - src/content/pages/index.ts (barrel export)
  - src/content/blog/*.mdx (5 blog posts with frontmatter)
  - src/content/careers/*.mdx (3 career positions with frontmatter)
  - src/content/utils.ts (getBlogs, getBlog, getBlogNear, getCareers, getCareer, getEvents, getEvent, getProjects, getProject, etc.)
  - src/content/index.ts (master barrel export)
  - package.json + pnpm-lock.yaml (added gray-matter dependency)
- What was implemented:
  - Extracted all 14 locale JSON files into typed TypeScript data files in src/content/pages/
  - Created page data for all pages: home, solutions, about, ecosystem, events, blog, careers, brand-assets, grant-program, alethia, gwyneth, gwyneth-apps, dao, and common labels
  - Created navigation data file with header mega-menu (5 groups with nested links), footer columns (3 groups), header socials (3), footer socials (5), and getOneLevelLinks utility
  - Created 5 blog posts as MDX files with frontmatter (title, slug, date, category, image, timeToRead)
  - Created 3 career positions as MDX files with frontmatter (title, slug, type, location)
  - Created static data files for events (3), ecosystem projects (2), blog categories (5), project categories (8)
  - Created content utility functions using gray-matter for MDX parsing: getBlogs, getBlog, getBlogNear, getBlogCategories, getCareers, getCareer, getEvents, getEvent, getEventLocations, getProjects, getProject, getProjectCategories
  - All types defined in src/content/types/index.ts matching source repo's Strapi type structure
- **Learnings for future iterations:**
  - Source repo used Strapi CMS with BlocksContent for rich text — replaced with MDX string content for static files
  - Alethia and Gwyneth share the same AlethiaGwynethPageData type (same as source repo's AlethiaGwynethData)
  - Source repo has no hardcoded blog/career/event data — all was from CMS. Sample content was created to establish the structure
  - gray-matter parses MDX frontmatter at build time — utility functions use Node.js fs (server-side only)
  - The header navigation in source repo has a hardcoded fallback in widgets/header/lib/navigation.ts — this was directly ported
  - Priority project IDs from source: ["1200", "1198"] — preserved for future ecosystem page filtering
---
