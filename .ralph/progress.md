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

## [2026-03-11] - S03: Shared UI Components
Thread:
Run: 20260311-151158-48493 (iteration 3)
Run log: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-3.log
Run summary: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-3.md
- Guardrails reviewed: yes
- No-commit run: false
- Commit: dbda346 feat(components): port all shared UI components from source repo
- Post-commit status: clean
- Verification:
  - Command: pnpm tsc --noEmit -> PASS (no type errors)
  - Command: pnpm run build -> PASS (compiled successfully, warnings only)
  - Command: Browser screenshot -> PASS (components render correctly at localhost:3000)
- Files changed:
  - src/lib/hooks/use-click-outside.ts (click outside detection hook)
  - src/lib/hooks/use-aos.ts (animate on scroll hook)
  - src/lib/hooks/index.ts (barrel export)
  - src/lib/utils/aos.ts (scroll animation utility)
  - src/lib/utils/index.ts (barrel export)
  - src/components/sprite/index.tsx (SVG sprite renderer)
  - src/components/image/index.tsx (Next.js Image wrapper)
  - src/components/next-link/index.tsx (Next Link wrapper)
  - src/components/text-splitter/index.tsx (text animation splitter)
  - src/components/label/ (label badge component + SCSS)
  - src/components/media-query/index.tsx (responsive conditional rendering)
  - src/components/media-loader/index.ts (priority-based media loader)
  - src/components/icon/ (icon wrapper + SCSS with pulse animation)
  - src/components/buttons/button/ (polymorphic button + SCSS with animated width)
  - src/components/buttons/arrow-button/ (directional nav button + SCSS)
  - src/components/buttons/back-link/ (back navigation link + SCSS)
  - src/components/input/ (flexible input/textarea + types + lib + SCSS)
  - src/components/select/ (searchable select dropdown + SCSS)
  - src/components/select-2/ (advanced select with context provider: 4 sub-components + types + lib)
  - src/components/multi-select/ (checkbox multi-select + SCSS)
  - src/components/file-input/ (file input wrapper + SCSS)
  - src/components/drag-file/index.tsx (drag-and-drop file handler)
  - src/components/accordion/ (compound accordion with Button/Content subcomponents + SCSS)
  - src/components/accordeon/ (FAQ-style accordion with plus icon + SCSS)
  - src/components/modal/ (full modal system: Modal component + ModalProvider + useModal/useModalActive hooks + types + SCSS)
  - src/components/share-button/ (social share: Facebook/Twitter/LinkedIn + SCSS)
  - src/components/link-dropdown/ (dropdown menu with CSSTransition + SCSS)
  - src/components/alert-card/ (notification bell dropdown with CardContent + SCSS)
  - src/components/rich-text/ (HTML content renderer replacing Strapi BlocksRenderer + SCSS)
  - src/components/subscribe-section/ (newsletter section wrapper + SCSS)
  - src/components/socials/ (social media icons with socialsNav data + SCSS)
  - src/components/banner/ (info banner with Icon + SCSS with gradient stroke)
  - src/components/grants/ (grants factory banner + responsive SCSS)
  - src/components/range-calendar/ (date range picker: 5 sub-components + context provider + utils + types + SCSS)
- What was implemented:
  - Ported all 28 listed UI components from source repo with SCSS Module styling
  - Created shared hooks: useClickOutside (mousedown outside detection), useAos (IntersectionObserver-like scroll detection)
  - Created animateOnScroll utility for scroll-triggered animations
  - Adapted all components from Pages Router patterns to App Router (added 'use client' where needed)
  - Removed all withTranslation/i18n HOC dependencies
  - Replaced Strapi BlocksRenderer with HTML dangerouslySetInnerHTML renderer for RichText
  - Adapted SubscribeSection to accept children prop instead of importing FooterSubscribe feature
  - Replaced SVG asset imports (arrow-down.svg, arrow-left.svg) with inline SVGs for RangeCalendar and Select-2
  - Modal provider adapted from withModal HOC (_app pattern) to ModalProvider component (App Router pattern)
  - Fixed JSX.Element references to React.ReactNode for React 19 compatibility
  - All 111 files committed, TypeScript clean, build passes
- **Learnings for future iterations:**
  - React 19 removes global JSX namespace — use React.ReactNode instead of JSX.Element
  - @typescript-eslint rules are NOT configured in this project's ESLint — don't use eslint-disable comments for those rules
  - Source repo's Select-2 used an imported arrow-down.svg asset — replaced with inline SVG to avoid asset dependencies
  - Source repo's RangeCalendar imported arrow-left.svg — replaced with inline SVG
  - Source repo's Modal used withModal HOC wrapping _app.tsx — adapted to ModalProvider component for App Router
  - Source repo's RichText used @strapi/blocks-react-renderer — replaced with dangerouslySetInnerHTML for static HTML content
  - Source repo's SubscribeSection imported FooterSubscribe feature — adapted to accept children prop
  - Source repo has two accordion variants: Accordion (compound pattern with displayNames) and Accordeon (simple Q&A with Sprite)
  - SCSS variables ($kColorPink, $kFontPublicSans, $kFontClashGrotesk, $kDefaultFont, $kColorBlack, etc.) are auto-injected
  - Components live in src/components/, hooks in src/lib/hooks/, utilities in src/lib/utils/
---

## [2026-03-11] - S04: Utilities, Hooks & Animation Setup
Thread:
Run: 20260311-151158-48493 (iteration 4)
Run log: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-4.log
Run summary: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-4.md
- Guardrails reviewed: yes
- No-commit run: false
- Commit: 07c7f4e feat(lib): port utilities, hooks, animations, and GSAP/Lottie setup
- Post-commit status: clean
- Verification:
  - Command: pnpm tsc --noEmit -> PASS (no type errors)
  - Command: pnpm run build -> PASS (compiled successfully, warnings only from existing code)
- Files changed:
  - src/lib/utils/animate.ts (requestAnimationFrame animation with timing/easing)
  - src/lib/utils/browser.ts (css helper, executeOnReadyPage)
  - src/lib/utils/sticky-scroll.ts (scroll progress within sticky containers)
  - src/lib/utils/format.ts (formatNumberWithZero, formatNumberWithSeparator, formatDate with dayjs)
  - src/lib/utils/formatter.ts (startFromZero number padding)
  - src/lib/utils/numbers.ts (getRandomBetween)
  - src/lib/utils/loadImage.ts (promise-based image loader with cache)
  - src/lib/utils/loadVideo.ts (promise-based video loader with cache)
  - src/lib/utils/typescript.ts (GetComponentProps, Optional, IEmptyFunction, PromiseReturnType)
  - src/lib/utils/create-provider.tsx (Context API provider factory)
  - src/lib/utils/features-height-calc.ts (equal-height grid calculation)
  - src/lib/utils/index.ts (barrel export for all utilities)
  - src/lib/hooks/use-object-state/ (useObjectState hook with types)
  - src/lib/hooks/use-media-query.ts (window resize tracking)
  - src/lib/hooks/use-input.ts (input state with typing debounce)
  - src/lib/hooks/use-search-params-setter.ts (URL search params management)
  - src/lib/hooks/use-scroll-progress.ts (element scroll progress 0-1)
  - src/lib/hooks/use-form/ (complete form management with Yup validation)
  - src/lib/hooks/index.ts (barrel export for all hooks)
  - src/lib/gsap/index.ts (GSAP + ScrollTrigger client-side registration)
  - src/animations/SequentialDots/ (canvas-based dot animation: SequentialDots, SequentialDotsGroup, types)
  - src/components/lottie-player/index.tsx (SSR-safe Lottie player via dynamic import)
- What was implemented:
  - Ported 12 utility functions from source repo's shared/lib/utils/
  - Ported 8 custom hooks (useForm, useMediaQuery, useSearchParams, useScrollProgress, useObjectState, useInput + existing useAos, useClickOutside)
  - Set up GSAP ScrollTrigger global registration in client-only module (src/lib/gsap/index.ts)
  - Ported SequentialDots canvas animation (SequentialDots class + SequentialDotsGroup)
  - Created Lottie player wrapper with next/dynamic SSR-safe import
  - SVG sprite system was already ported in S03 (src/components/sprite/)
  - All code uses 'use client' directive where needed for client-side APIs
- **Learnings for future iterations:**
  - dayjs isToday plugin needs explicit import and extend call
  - GSAP ScrollTrigger must be registered client-side only — use 'use client' directive
  - Lottie player must use dynamic import with ssr: false to avoid SSR errors
  - SequentialDots uses @/ path alias to import from lib/utils
  - useObjectState is a dependency for useMediaQuery and useInput — must be ported first
  - useForm depends on yup for validation schema — already installed in S01
  - Source repo had an axios instance utility — skipped as this project has no external API
  - Source repo had file-server-path utility for Strapi URLs — skipped as content is static
---

## [2026-03-11] - S05: Root Layout, Header & Footer
Thread:
Run: 20260311-151158-48493 (iteration 5)
Run log: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-5.log
Run summary: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-5.md
- Guardrails reviewed: yes
- No-commit run: false
- Commit: da2eab6 feat(layout): port root layout, header, footer, and mobile menu
- Post-commit status: clean
- Verification:
  - Command: pnpm tsc --noEmit -> PASS (no type errors)
  - Command: pnpm run build -> PASS (compiled successfully, warnings only from pre-existing code)
  - Command: Browser screenshot desktop -> PASS (header, footer, mega-menu all render correctly)
  - Command: Browser mega-menu hover -> PASS (Alethia dropdown shows links, icons, video)
- Files changed:
  - src/app/layout.tsx (font preloading, SEO metadata, Providers wrapper, viewport export)
  - src/app/page.tsx (updated to use DefaultLayout with SubscribeSection)
  - src/app/providers.tsx (client component: AppProvider + ModalProvider + AOS setup)
  - src/app/providers/app-context.tsx (AppContext with menuActive state via useObjectState)
  - src/components/icons/arrow-down.tsx (ArrowDown SVG icon component)
  - src/components/icons/arrow-link.tsx (ArrowLink SVG icon component)
  - src/widgets/header/index.tsx (Header with logo, mega-menu, socials, alert, hamburger)
  - src/widgets/header/header.module.scss (fixed header, burger animation, responsive)
  - src/widgets/header/ui/header-navigation/index.tsx (mega-menu with 5 nav groups, media, accordions)
  - src/widgets/header/ui/header-navigation/header-navigation.module.scss (mega-menu dropdown styles)
  - src/widgets/footer/index.tsx (Footer with nav columns from getOneLevelLinks)
  - src/widgets/footer/footer.module.scss (footer layout, responsive)
  - src/widgets/footer-socials/index.tsx (FooterSocials grid with 5 social links)
  - src/widgets/footer-socials/footer-socials.module.scss (social grid, hover colors)
  - src/features/footer-subscribe/index.tsx (FooterSubscribe newsletter form)
  - src/features/footer-subscribe/footer-subscribe.module.scss (gradient subscribe bar, responsive)
  - src/widgets/menu/index.tsx (mobile menu overlay with CSSTransition)
  - src/widgets/menu/menu.module.scss (fullscreen menu, social grid, transitions)
  - src/widgets/menu/ui/menu-link-group/index.tsx (collapsible nav group for mobile)
  - src/widgets/menu/ui/menu-link-group/menu-link-group.module.scss (group styles, accordions)
  - src/widgets/menu/ui/menu-link-group/alert-menu.tsx (AlertMenuItem for mobile menu)
  - src/widgets/layouts/default-layout/index.tsx (Header + Menu + children + Footer)
  - src/widgets/layouts/side-layout/index.tsx (sidebar + main content layout)
  - src/widgets/layouts/side-layout/side-layout.module.scss (responsive sidebar widths)
- What was implemented:
  - Root layout updated with font preloading for all 10 woff2 fonts, SEO metadata via Next.js Metadata API, viewport export, and client-side Providers wrapper (AppProvider + ModalProvider + AOS)
  - Header component with sticky positioning, Taiko logo, mega-menu navigation (5 groups: Alethia, Gwyneth, Governance, Learn, Engage), header socials, AlertCard, and mobile hamburger toggle
  - HeaderNavigation with CSSTransition dropdowns, nav link icons, video/image media panels, nested accordions for sub-links (e.g., Block Explorers), "Coming soon" badges, and asset preloading
  - Footer with "Join the taiko community" title, FooterSocials grid (discord, twitter, paragraph, forum, youtube), navigation columns from getOneLevelLinks, Taiko Labs description, copyright
  - FooterSubscribe newsletter form with gradient background, animated expand, Icon pulse, responsive layout
  - Mobile Menu with CSSTransition overlay, MenuLinkGroup collapsible nav groups, AlertMenuItem, social links grid
  - DefaultLayout (Header + dynamic Menu + children + Footer) and SideLayout (responsive sidebar + main)
  - AppContext with menuActive state using useObjectState hook, exposed via useApp hook
  - ArrowDown and ArrowLink SVG icon components for nav indicators
- **Learnings for future iterations:**
  - React 19 removed findDOMNode — CSSTransition requires nodeRef prop to work without errors
  - react/no-children-prop lint rule — use nested JSX children instead of children prop for MediaQuery
  - Next.js 15 separates viewport from metadata — use `export const viewport: Viewport` for viewport config
  - Source repo's navigation data was fetched via react-query — replaced with static import from navigation.ts
  - Source repo's footer socials and menu socials used useTranslationObject hook — replaced with direct static data imports
  - Source repo's fileServerPath utility (for Strapi media URLs) is unnecessary — static assets use direct paths
  - Widgets directory (src/widgets/) follows source repo's FSD (Feature-Sliced Design) structure for page-level components
  - Features directory (src/features/) used for cross-cutting features like footer-subscribe
---

## [2026-03-11] - S06: Homepage
Thread:
Run: 20260311-151158-48493 (iteration 6)
Run log: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-6.log
Run summary: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-6.md
- Guardrails reviewed: yes
- No-commit run: false
- Commit: 7c4a9f7 feat(homepage): port all homepage sections with GSAP scroll animations
- Post-commit status: clean
- Verification:
  - Command: pnpm tsc --noEmit -> PASS (no type errors)
  - Command: pnpm run build -> PASS (compiled successfully, 81.4 kB page size)
  - Command: Browser screenshot Hero -> PASS (title, CTA buttons, Taiko logo, grid)
  - Command: Browser screenshot Scaling -> PASS (Rays SVG, horizontal scroll content)
  - Command: Browser screenshot About -> PASS (label, title, text, AboutGrid SVG)
  - Command: Browser screenshot Governance -> PASS (title, description, video/image)
  - Command: Browser screenshot Ecosystem -> PASS (Grant Factory banners visible)
  - Command: Browser screenshot Footer -> PASS (Subscribe, social links, nav columns)
- Files changed:
  - src/content/types/index.ts (added ExploreScreen, RoadmapListItem, RoadmapList interfaces; extended HomePageData with flat CMS-style fields)
  - src/content/pages/home.ts (added hero_buttons, solution_screen_* titles/buttons, about_*, governance_*, explore_screens, roadmap_*)
  - src/app/page.tsx (full homepage with dynamic HomePagination, all Screens.*, WrapSVG, MediaQuery)
  - src/app/home.module.scss (root background white)
  - src/widgets/layouts/default-layout/index.tsx (added className prop, Fragment -> div wrapper)
  - src/widgets/home-screens/index.ts (barrel export)
  - src/widgets/home-screens/lib/index.ts (HOME_PAG section ID constants)
  - src/widgets/home-screens/lib/taiko-icon-animation.ts (GSAP timeline for Taiko/Ethereum icon alternation)
  - src/widgets/home-screens/components/Taiko/index.tsx (TaikoIcon SVG with animated gradient rotation)
  - src/widgets/home-screens/components/Ethereum.tsx (Ethereum wireframe SVG)
  - src/widgets/home-screens/components/Rays.tsx (3 curved SVG paths with gradient strokes)
  - src/widgets/home-screens/components/AboutGrid.tsx (grid SVG for About section)
  - src/widgets/home-screens/components/JourneyPath.tsx (masked SVG path for roadmap)
  - src/widgets/home-screens/components/HomePagination/ (sidebar navigation dots + SCSS)
  - src/widgets/home-screens/components/WrapSVG/ (parallax shape reveal wrapper + SCSS)
  - src/widgets/home-screens/ui/hero/ (hero section with animated title + SCSS)
  - src/widgets/home-screens/ui/scaling/ (horizontal scroll with 4 screens, GSAP pinning + SCSS)
  - src/widgets/home-screens/ui/explore/ (Alethia/Gwyneth split screen with hover toggle + SCSS)
  - src/widgets/home-screens/ui/about/ (AboutGrid SVG reveal, TextSplitter text animation + SCSS)
  - src/widgets/home-screens/ui/journey/ (JourneyPath SVG stroke reveal + 6 JourneyItems + SCSS)
  - src/widgets/home-screens/ui/journey-item/ (expandable roadmap items with color variants + SCSS)
  - src/widgets/home-screens/ui/governance/ (dot pattern background, video with blend mode + SCSS)
  - src/widgets/home-screens/ui/ecosystem/ (Banner + GrantsBanner wrappers + SCSS)
  - src/widgets/home-screens/ui/subscribe/ (FooterSubscribe wrapper + SCSS)
  - src/widgets/home-screens/ui/index.ts (barrel export for all 8 sections)
- What was implemented:
  - Ported all 8 homepage sections from source repo with GSAP ScrollTrigger animations
  - Hero: full viewport with animated title, WrapperButtonList CTA buttons, TaikoIcon with GSAP scroll parallax
  - Scaling: horizontal scroll with 4 pinned 100vw screens, SequentialDots canvas, Rays SVG stroke animation, taikoIconAnimation
  - Explore: split-screen Alethia/Gwyneth with hover state toggle, ScrollTrigger pin, rotating Taiko logo
  - About: AboutGrid SVG stroke reveal, TextSplitter word-by-word opacity animation
  - Journey: JourneyPath SVG stroke animation, 6 absolutely-positioned JourneyItem components with skewY transforms
  - Governance: dot pattern background, governance video with mix-blend-mode darken
  - Ecosystem: Reuses existing Banner and GrantsBanner components for Trailblazer/Grant Factory CTAs
  - Subscribe: Wraps existing FooterSubscribe component
  - HomePagination: fixed sidebar dots tracking scroll progress across sections
  - WrapSVG: parallax shape reveal/hide wrapper using wrap-shapes.webp images
  - Extended HomePageData with flat CMS-style fields for hero_buttons, solution screens, about, governance, explore, roadmap
  - Fixed about_title raw HTML tag rendering (removed <strong> tags incompatible with TextSplitter character splitting)
- **Learnings for future iterations:**
  - TextSplitter splits by character (empty string) — HTML tags like <strong> get broken into individual characters and render as literal text
  - Source repo's flat CMS fields (hero_title, solution_screen_1_title) coexist with structured fields (hero.title) — both needed for different components
  - taikoIconAnimation uses GSAP timeline with play/finish callbacks for alternating icon animations
  - HomePagination must be dynamically imported with ssr: false (uses window/document)
  - WrapSVG uses wrap-shapes.webp images positioned absolutely with parallax transforms
  - JourneyItem uses border-image for gradient borders and backdrop-filter for blur effect
  - Scaling section uses gsap.to with xPercent for horizontal scroll pinning
---
