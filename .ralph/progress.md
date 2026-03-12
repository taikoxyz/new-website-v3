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

## [2026-03-11] - S07: About Page
Thread:
Run: 20260311-151158-48493 (iteration 7)
Run log: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-7.log
Run summary: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-7.md
- Guardrails reviewed: yes
- No-commit run: false
- Commit: 039bd73 feat(about): port about page with all sections and responsive layout
- Post-commit status: clean
- Verification:
  - Command: pnpm tsc --noEmit -> PASS (no type errors)
  - Command: pnpm run build -> PASS (compiled successfully, 2.68 kB page size)
  - Command: Browser screenshot desktop (1440px) -> PASS (all 5 sections render correctly)
  - Command: Browser screenshot mobile (375px) -> PASS (responsive layout works across breakpoints)
- Files changed:
  - src/app/about/page.tsx (About page route with DefaultLayout wrapper)
  - src/app/about/about.module.scss (page gap spacing: 90px top padding, 60px section gap)
  - src/widgets/about-screens/index.ts (barrel export for all 5 sections)
  - src/widgets/about-screens/ui/hero/index.tsx (Hero section with dangerouslySetInnerHTML for styled title)
  - src/widgets/about-screens/ui/hero/hero.module.scss (centered title, pink accent, responsive font sizes)
  - src/widgets/about-screens/ui/community/index.tsx (Community section with GSAP animated counter 35->90+)
  - src/widgets/about-screens/ui/community/community.module.scss (two-column layout, circle image, responsive stacking)
  - src/widgets/about-screens/ui/mission/index.tsx (Mission section with image card, fact card with 96% stat)
  - src/widgets/about-screens/ui/mission/mission.module.scss (flex layout, info card with clock icon cutout)
  - src/widgets/about-screens/ui/brand/index.tsx (Brand section using shared Banner component)
  - src/widgets/about-screens/ui/careers/index.tsx (Careers section with background image, two-column content)
  - src/widgets/about-screens/ui/careers/careers.module.scss (absolute image, white box overlay, responsive)
- What was implemented:
  - Created /about route with 5 sections: Hero, Community, Mission, Brand, Careers
  - Hero: centered title with pink "economically" accent span, responsive font scaling (60px -> 32px)
  - Community: two-column with suptitle pill, title, text left; circle SVG with GSAP animated counter (35 -> 90+) right; responsive stacking at 900px
  - Mission: 43.5%/56.5% split with mission-card image left, content cards right; info card with clock icon cutout, 96% stat with divider, fact text
  - Brand: uses shared Banner component with book icon and "View brand assets" button linking to /brand-assets
  - Careers: absolute background image (desktop/mobile variants via MediaQuery), white overlay box with pink suptitle, two-column title + text/button, link to /careers
  - All content sourced from static aboutPageData in src/content/pages/about.ts
  - Responsive layout verified at desktop (1440px) and mobile (375px) breakpoints
- **Learnings for future iterations:**
  - About page content was already extracted in S02 (aboutPageData) — just needed to build the components
  - Source repo's Brand section had an empty SCSS file — no custom styles needed beyond the shared Banner
  - Community section uses useAos for scroll-triggered counter animation with GSAP gsap.to()
  - Careers section splits text by \n to render multiple paragraphs
  - Mission info card uses box-shadow trick for the clock icon cutout (rounded corner illusion)
---

## [2026-03-11] - S08: Blog Listing & Article Pages
Thread:
Run: 20260311-151158-48493 (iteration 8)
Run log: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-8.log
Run summary: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-8.md
- Guardrails reviewed: yes
- No-commit run: false
- Commit: 97954f2 feat(blog): add blog listing and article pages with filtering
- Post-commit status: clean
- Verification:
  - Command: pnpm tsc --noEmit -> PASS (no type errors)
  - Command: pnpm run build -> PASS (compiled successfully, blog 7.34 kB, blog/[slug] 4.09 kB)
  - Command: Browser screenshot blog listing -> PASS (3-column grid, filters sidebar, pagination)
  - Command: Browser screenshot blog article -> PASS (hero, preview, content, NEXT nav, latest carousel)
  - Command: Browser screenshot mobile -> PASS (single column responsive layout)
- Files changed:
  - src/entities/article/index.ts (barrel export for BlogItem and BlogSliderLayout)
  - src/entities/article/ui/blog-item/index.tsx (blog card with image, title, category tag, date, read time)
  - src/entities/article/ui/blog-item/blog-item.module.scss (card styling)
  - src/entities/article/ui/blog-slider-layout/index.tsx (Swiper carousel with custom SwiperInstance interface)
  - src/entities/article/ui/blog-slider-layout/blog-slider-layout.module.scss (carousel styling)
  - src/widgets/blog-screens/index.ts (barrel export)
  - src/widgets/blog-screens/lib/transform-filters.ts (date transform + category options builder)
  - src/widgets/blog-screens/provider/context.tsx (WithBlogFilter provider + useBlogFilter hook)
  - src/widgets/blog-screens/provider/types.ts (IBlogFilter, IBlogFilterContext)
  - src/widgets/blog-screens/ui/blog-filter/index.tsx (reusable filter dropdown)
  - src/widgets/blog-screens/ui/filter-date/index.tsx (date range filter with RangeCalendar)
  - src/widgets/blog-screens/ui/filter-category/index.tsx (category filter)
  - src/widgets/blog-screens/ui/side-filters/index.tsx (sidebar with date + category + reset)
  - src/widgets/blog-screens/ui/head/index.tsx ("Blog" title + mobile filter toggle)
  - src/widgets/blog-screens/ui/blogs/index.tsx (blog grid with filtering + pagination, 9 per page)
  - src/widgets/article-screens/index.ts (barrel export)
  - src/widgets/article-screens/lib/content.ts (getArticleAnchor, getArticleLinks for TOC)
  - src/widgets/article-screens/lib/types.ts (ArticleScreensEnum)
  - src/widgets/article-screens/ui/hero/index.tsx (article header with category, title, date, read time)
  - src/widgets/article-screens/ui/preview/index.tsx (featured image)
  - src/widgets/article-screens/ui/content/index.tsx (content wrapper with mobile SideNav)
  - src/widgets/article-screens/ui/content/article-content.tsx (markdownToHtml with XSS protection)
  - src/widgets/article-screens/ui/apply/index.tsx (How to Apply section)
  - src/widgets/article-screens/ui/links/index.tsx (prev/next navigation)
  - src/widgets/article-screens/ui/side-nav/index.tsx (table of contents)
  - src/widgets/article-screens/ui/share/index.tsx (Twitter + LinkedIn share)
  - src/widgets/article-screens/ui/side/index.tsx (desktop sidebar with back link, TOC, share)
  - src/widgets/article-screens/ui/latest-articles/index.tsx (BlogSliderLayout carousel)
  - src/app/blog/page.tsx (server component, calls getBlogs)
  - src/app/blog/blog-page-client.tsx (client component with filter provider)
  - src/app/blog/blog.module.scss (page padding)
  - src/app/blog/[slug]/page.tsx (dynamic article with generateStaticParams, generateMetadata)
  - src/app/blog/[slug]/article.module.scss (article layout spacing)
- What was implemented:
  - Blog listing page with 3-column responsive grid of blog cards
  - Client-side category filter (All topics + 5 categories from blogCategories)
  - Client-side date filter with predefined periods (Last week, Last month, etc.) + custom RangeCalendar
  - Pagination with 9 posts per page, "Showing X of Y articles" count
  - Blog article page with hero header (category tag, title, date, read time)
  - Custom markdownToHtml renderer with XSS protection (escapeHtml, sanitizeUrl)
  - Table of contents sidebar extracted from ## headings
  - Twitter + LinkedIn share buttons
  - Previous/Next article navigation using getBlogNear
  - Latest articles carousel using Swiper with BlogSliderLayout
  - Optional "How to Apply" section for career-type posts
  - SSG with generateStaticParams for all 5 blog posts
  - SEO metadata with markdown-stripped descriptions
  - Responsive layout: 3-col -> 2-col -> 1-col grid, sidebar collapses on mobile
- **Learnings for future iterations:**
  - Swiper v8 TypeScript types don't resolve cleanly with moduleResolution: bundler — define custom SwiperInstance interface
  - Use `'auto' as const` for Swiper slidesPerView to satisfy TypeScript
  - Next.js Link component requires href to always be defined — use separate render paths for Link vs div instead of conditional Tag pattern
  - markdownToHtml needs escapeHtml for heading IDs and sanitizeUrl for link hrefs to prevent XSS
  - SEO description from markdown content should strip syntax chars: replace(/[#*`\[\]_>]/g, '')
  - useMemo should not have side effects — use useEffect for resetting pagination on filter change
  - Source repo used React Query infinite scroll — replaced with simple client-side pagination (POSTS_PER_PAGE = 9)
  - Source repo used Strapi BlocksRenderer — replaced with custom markdownToHtml for static MDX content
---

## [2026-03-11] - S09: Careers Listing & Detail Pages
Thread:
Run: 20260311-151158-48493 (iteration 9)
Run log: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-9.log
Run summary: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-9.md
- Guardrails reviewed: yes
- No-commit run: false
- Commit: 67c908d feat(careers): add careers listing and detail pages with positions table
- Post-commit status: clean
- Verification:
  - Command: pnpm tsc --noEmit -> PASS (no type errors)
  - Command: pnpm run build -> PASS (careers 1.97 kB, careers/[slug] 1.89 kB, 15 pages total)
  - Command: Browser screenshot careers listing (1440px) -> PASS (hero, about, positions table, contact banner)
  - Command: Browser screenshot career detail (1440px) -> PASS (sidebar TOC, MDX content, Apply Now CTA)
  - Command: Browser screenshot mobile (375px) -> PASS (responsive layout, stacked positions, stacked banner)
- Files changed:
  - src/app/careers/page.tsx (careers listing route with server-side getCareers)
  - src/app/careers/[slug]/page.tsx (career detail with generateStaticParams, generateMetadata, SideLayout)
  - src/app/careers/[slug]/career.module.scss (detail page styling)
  - src/widgets/careers-screens/index.ts (barrel export)
  - src/widgets/careers-screens/ui/hero/index.tsx (hero with HTML title, About Taiko button)
  - src/widgets/careers-screens/ui/hero/hero.module.scss (centered title, pink span, responsive)
  - src/widgets/careers-screens/ui/about/index.tsx (about section with suptitle pill, rich title, text)
  - src/widgets/careers-screens/ui/about/about.module.scss (responsive about styling)
  - src/widgets/careers-screens/ui/positions/index.tsx (positions table with 3-column grid, linked rows)
  - src/widgets/careers-screens/ui/positions/positions.module.scss (table layout, mobile stacked cards)
  - src/widgets/careers-screens/ui/banner/index.tsx (contact banner with mailto CTA)
  - src/widgets/careers-screens/ui/banner/banner.module.scss (pink gradient, responsive stacking)
  - src/widgets/article-screens/index.ts (added SideNav export for career detail reuse)
- What was implemented:
  - Careers listing page (/careers) with 4 sections: Hero, About, Positions, ContactBanner
  - Hero: centered title with pink "Taiko's" span, "About Taiko" button linking to /about
  - About: suptitle pill, rich HTML title with pink "unlock Ethereum" span and external link, descriptive text
  - Positions: 3-column table (Position with arrow, Location, Type) with hover effect, links to /careers/[slug]
  - ContactBanner: pink gradient with "Don't see what you're looking for?" and "Contact us" mailto CTA
  - Career detail page (/careers/[slug]) using SideLayout with sidebar back link to /careers, TOC from headings, and main content
  - Position header with title, type (bag icon), location (square-aim icon) meta info
  - MDX content rendered via reused ArticleScreens.Content component (markdown to HTML)
  - "Apply now" CTA button with mailto link
  - SSG with generateStaticParams for all 3 career positions
  - SEO metadata with position title and description
  - Responsive: table collapses to stacked cards on mobile, banner stacks vertically
- **Learnings for future iterations:**
  - Career MDX files have "## How to Apply" in content body, not as separate howToApply frontmatter field — content renders inline via ArticleScreens.Content
  - Reusing article-screens SideNav required adding export to barrel file — career detail shares TOC pattern with blog articles
  - No "location" icon in sprite.svg — used "bag" for job type and "square-aim" for location
  - Positions table uses CSS grid for desktop (1fr 200px 200px) and flex-direction column for mobile
  - Contact banner uses same pink gradient as the article Apply section (linear-gradient 90deg #EA36A4 to #F997D0)
---

## [2026-03-11] - S10: Solutions Page
Thread:
Run: 20260311-151158-48493 (iteration 10)
Run log: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-10.log
Run summary: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-10.md
- Guardrails reviewed: yes
- No-commit run: false
- Commit: b929029 feat(solutions): add solutions page with hero, platform, and infrastructure sections
- Post-commit status: clean (only PRD JSON modified, which is not committed per rules)
- Verification:
  - Command: pnpm tsc --noEmit -> PASS (no type errors)
  - Command: pnpm run build -> PASS (solutions page 3.88 kB, 16 static pages)
  - Command: Browser screenshot desktop (1440px) -> PASS (hero, platform, infrastructure all render correctly)
  - Command: Browser screenshot mobile (375px) -> PASS (responsive layout works across breakpoints)
- Files changed:
  - src/app/solutions/page.tsx (solutions page route with DefaultLayout and SolutionsLayout wrapper)
  - src/widgets/solutions-screens/index.ts (barrel export)
  - src/widgets/solutions-screens/ui/index.ts (barrel export for Hero, Platform, Infrastructure, SolutionsLayout)
  - src/widgets/solutions-screens/ui/solutions-layout/index.tsx (max-width 1512px layout with left padding)
  - src/widgets/solutions-screens/ui/solutions-layout/solutions-layout.module.scss (layout and responsive padding)
  - src/widgets/solutions-screens/ui/hero/index.tsx (hero with suptitle, HTML title, gradient image, scroll-down button)
  - src/widgets/solutions-screens/ui/hero/hero.module.scss (flexbox layout, gradient image, scroll button with ring)
  - src/widgets/solutions-screens/ui/platform/index.tsx (platform section with Bridge and Explorer items)
  - src/widgets/solutions-screens/ui/platform/platform.module.scss (card layout with images, responsive stacking)
  - src/widgets/solutions-screens/ui/infrastructure/index.tsx (infrastructure with Lottie animations via MediaQuery)
  - src/widgets/solutions-screens/ui/infrastructure/infrastructure.module.scss (2-column grid, curved corner button)
- What was implemented:
  - Solutions page (/solutions) with 3 sections: Hero, Platform, Infrastructure
  - Hero: "OUR SOLUTIONS" pink suptitle, title with pink "secure" span, gradient hero image (desktop/mobile variants), scroll-down button with ring animation that smooth-scrolls to infrastructure
  - Platform: "OUR PLATFORM" suptitle with "Learn more about Taiko" button, Bridge and Explorer cards with icons (80x80), titles, descriptions, "Go to" buttons (target _blank), and product screenshots
  - Infrastructure: "OUR INFRASTRUCTURE" pink suptitle, 2-column grid with BCR (01) and BBR (02) items, Lottie animations via LottiePlayer (laptop.json, rocket.json), responsive placement (mobile: in header, desktop: after spacer), "Learn more" buttons with curved corner cutout effect (box-shadow trick)
  - SolutionsLayout wrapper with max-width 1512px, left padding 155px (collapses at tablet)
  - All content from static solutionsPageData in src/content/pages/solutions.ts
  - External links: Bridge (bridge.taiko.xyz), Explorer (taikoscan.io), BCR mirror post, BBR mirror post
  - Responsive: hero stacks vertically at tablet, platform items stack at tablet, infrastructure goes 1-col at tablet, all font sizes scale down at mobile
- **Learnings for future iterations:**
  - LottiePlayer (dynamic import with ssr: false) works well with MediaQuery for responsive Lottie placement
  - Infrastructure button cutout uses position: absolute + box-shadow pseudo-elements for the curved corner illusion — collapses to relative positioning at laptop-sm breakpoint
  - SolutionsLayout uses left padding (155px) to offset content from page edge, matching source repo's sidebar-aligned design
  - All solution page content was already extracted in S02 (solutionsPageData) — just needed widget components
  - MediaQuery children pattern works with JSX children (not children prop) per S05 learnings
---

## [2026-03-11] - S11: Ecosystem Page
Thread:
Run: 20260311-151158-48493 (iteration 11)
Run log: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-11.log
Run summary: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-11.md
- Guardrails reviewed: yes
- No-commit run: false
- Commit: 173beb1 feat(ecosystem): add ecosystem page with project grid, filtering, and grant section
- Post-commit status: clean
- Verification:
  - Command: pnpm tsc --noEmit -> PASS (no type errors)
  - Command: pnpm run build -> PASS (ecosystem page 9.88 kB, 17 static pages)
  - Command: Browser screenshot desktop (1440px) -> PASS (hero, controls, projects grid, grant, disclaimer)
  - Command: Browser screenshot mobile (375px) -> PASS (responsive layout, stacked filters, single-col grid)
- Files changed:
  - src/app/ecosystem/page.tsx (ecosystem page route with EcosystemProvider and DefaultLayout)
  - src/widgets/ecosystem-screens/index.ts (barrel export)
  - src/widgets/ecosystem-screens/ui/index.ts (barrel export for Hero, Controls, Projects, Grant, Disclaimer)
  - src/widgets/ecosystem-screens/provider/index.tsx (EcosystemProvider context with search/type/category filters)
  - src/widgets/ecosystem-screens/ui/hero/index.tsx (hero with Lottie animation, title, card, CTA, HeroDapps)
  - src/widgets/ecosystem-screens/ui/hero/hero.module.scss (responsive hero with overlaid card, dApps cutout)
  - src/widgets/ecosystem-screens/ui/hero-dapps/index.tsx (100+ dApps counter with logo avatars)
  - src/widgets/ecosystem-screens/ui/hero-dapps/hero-dapps.module.scss (avatar overlap, counter styling)
  - src/widgets/ecosystem-screens/ui/controls/index.tsx (search input, type Select2, category Select2)
  - src/widgets/ecosystem-screens/ui/controls/controls.module.scss (search field, selects, responsive stacking)
  - src/widgets/ecosystem-screens/ui/projects/index.tsx (filtered projects with useMemo, pagination state)
  - src/widgets/ecosystem-screens/ui/projects/projects.module.scss (last update pill, view more button)
  - src/widgets/ecosystem-screens/ui/projects-list/index.tsx (project card grid with icon, type badge, categories)
  - src/widgets/ecosystem-screens/ui/projects-list/projects-list.module.scss (4->3->2->1 responsive grid, card hover)
  - src/widgets/ecosystem-screens/ui/grant/index.tsx (grant section with suptitle, rich text, Banner CTA)
  - src/widgets/ecosystem-screens/ui/grant/grant.module.scss (two-column layout, gradient banner border)
  - src/widgets/ecosystem-screens/ui/disclaimer/index.tsx (disclaimer text with GitHub repo link)
  - src/widgets/ecosystem-screens/ui/disclaimer/disclaimer.module.scss (card with hover effect, pink text)
- What was implemented:
  - Ecosystem page (/ecosystem) with 5 sections: Hero, Controls, Projects, Grant, Disclaimer
  - Hero: Lottie animation (desktop/mobile variants via MediaQuery), "Explore the Taiko Ecosystem" title with pink span, white card overlay with description and "Submit your project" CTA, 100+ dApps counter with avatar logos and box-shadow cutout
  - Controls: search input with magnifier icon, type filter Select2 (All Types, Mainnet, Testnet, Coming Soon), category filter Select2 (All Categories + 8 project categories)
  - Projects: client-side filtering by search (name/description), type, and category using useMemo; pagination with 12 items per page and "View more" button; "Last updated on" timestamp pill with timer icon
  - ProjectsList: responsive grid (4->3->2->1 columns), project cards with icon, type badge (color-coded: green Mainnet, orange Testnet, gray Coming Soon), name, description (3-line clamp), category pills, hover elevation effect
  - Grant: two-column with "TAIKO GRANTS" pink suptitle, "Building on Taiko and need financial or other support? Apply for a grant!" rich text, Banner component with gradient border and "Learn more" CTA linking to /grant-program
  - Disclaimer: hoverable card with pink disclaimer text and GitHub repo link
  - EcosystemProvider context wrapping Controls + Projects for shared filter state
  - All content from static ecosystemPageData, projects, and projectCategories data files
- **Learnings for future iterations:**
  - EcosystemProvider needs to wrap both Controls and Projects since they share filter state — placed at page level
  - Select2 component from src/components/select-2 works well as drop-in replacement for source repo's TaikoSelect
  - Client-side filtering with useMemo is simpler than source repo's React Query infinite scroll approach
  - Project card type badges use data-type attribute for CSS color variants (green/orange/gray)
  - setGrid mixin uses flex with calc-based widths for responsive grid — matches source repo's grid pattern
  - LottiePlayer needs 'use client' wrapper component for SSR safety (already available from S04)
---

## [2026-03-11] - S12: Events Page
Thread:
Run: 20260311-151158-48493 (iteration 12)
Run log: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-12.log
Run summary: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-12.md
- Guardrails reviewed: yes
- No-commit run: false
- Commit: 86a826b feat(events): add events page with hero, schedule table, and client-side filtering
- Post-commit status: clean
- Verification:
  - Command: pnpm tsc --noEmit -> PASS
  - Command: pnpm run build -> PASS
  - Command: Browser desktop (1440px) -> PASS (hero, event list, filters render correctly)
  - Command: Browser mobile (375px) -> PASS (responsive layout, stacked event cards)
  - Command: Location filter test -> PASS (selecting "Tokyo, Japan" shows only ETH Tokyo 2024)
  - Command: Month filter dropdown -> PASS (opens with all 12 months)
- Files changed:
  - src/app/events/page.tsx
  - src/widgets/events-screens/index.ts
  - src/widgets/events-screens/ui/index.ts
  - src/widgets/events-screens/ui/hero/index.tsx
  - src/widgets/events-screens/ui/hero/hero.module.scss
  - src/widgets/events-screens/ui/events/index.tsx
  - src/widgets/events-screens/ui/events/events.module.scss
  - src/widgets/events-screens/ui/event-item/index.tsx
  - src/widgets/events-screens/ui/event-item/event-item.module.scss
  - src/components/select-2/ui/select-dropdown/index.tsx (fix: added nodeRef for React 19 compat)
- Implemented events page at /events with:
  - Hero section with background image, suptitle, title, description card, and "Learn more" link
  - Event schedule table with title, location, date, image, and "More" links
  - Client-side location filter using Select2 component
  - Client-side month filter using Select2 component
  - Responsive layout matching original source design across all breakpoints
  - Fixed pre-existing Select2 CSSTransition React 19 compatibility issue (findDOMNode removed)
- **Learnings for future iterations:**
  - CSSTransition from react-transition-group requires nodeRef prop for React 19 (findDOMNode removed)
  - Dev browser pages retain error state after JS crashes; restart dev server for clean testing
  - Event images are placeholders (referenced from old Strapi CMS, not in public/img/events/)
---

## [2026-03-11] - S13: Grant Program Page
Thread:
Run: 20260311-151158-48493 (iteration 13)
Run log: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-13.log
Run summary: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-13.md
- Guardrails reviewed: yes
- No-commit run: false
- Commit: 295b478 feat(grant-program): add grant program page with hero, key dates, mission, tracks, FAQs, and banner
- Post-commit status: clean
- Verification:
  - Command: pnpm run build -> PASS
  - Command: pnpm tsc --noEmit -> PASS
  - Command: Browser test (dev-browser) -> PASS (all sections render correctly)
- Files changed:
  - src/app/grant-program/page.tsx
  - src/app/grant-program/grant-program.module.scss
  - src/widgets/grant-program-screens/index.ts
  - src/widgets/grant-program-screens/ui/index.ts
  - src/widgets/grant-program-screens/ui/hero/index.tsx
  - src/widgets/grant-program-screens/ui/hero/hero.module.scss
  - src/widgets/grant-program-screens/ui/key-dates/index.tsx
  - src/widgets/grant-program-screens/ui/key-dates/key-dates.module.scss
  - src/widgets/grant-program-screens/ui/mission/index.tsx
  - src/widgets/grant-program-screens/ui/mission/mission.module.scss
  - src/widgets/grant-program-screens/ui/community/index.tsx
  - src/widgets/grant-program-screens/ui/community/community.module.scss
  - src/widgets/grant-program-screens/ui/tracks/index.tsx
  - src/widgets/grant-program-screens/ui/tracks/tracks.module.scss
  - src/widgets/grant-program-screens/ui/support/index.tsx
  - src/widgets/grant-program-screens/ui/support/support.module.scss
  - src/widgets/grant-program-screens/ui/process/index.tsx
  - src/widgets/grant-program-screens/ui/process/process.module.scss
- Implemented:
  - Grant Program page at /grant-program with all 7 sections
  - Hero section with banner image, HTML title with pink highlight, and description text
  - Key Dates section with two-column layout (title+arrow left, date/description table right)
  - Mission section with 4 mission items in responsive grid (4→2→1 columns), each with icon/title/text
  - Community section with suptitle, HTML title with pink highlights, multi-paragraph text, and "Learn more" button
  - Grant Tracks section with 3 track cards (Community/Partner/RFP), each showing icon, title, track label, description, timeline with open/closed status, and apply button; inactive tracks have reduced opacity
  - Support and FAQs section using existing Accordeon component for expandable Q&A pairs (4 FAQs)
  - Learn more banner using existing Banner component with star icon
  - All sections fully responsive with breakpoints matching existing site patterns
- **Learnings for future iterations:**
  - The about-screens widget uses a different barrel export pattern (direct exports from index.ts) vs events-screens (ui/ subfolder barrel)
  - The setGrid mixin targets `> li` selector by default — adding explicit list-style: none ensures no bullet artifacts in CSS modules
  - Content data in grant-program.ts uses HTML strings (e.g., `<span>`, `<b>`, `<u>`) that need dangerouslySetInnerHTML — safe since it's static repo data
  - The Accordeon component handles FAQ expand/collapse with height animation and click-outside-to-close
---

## [2026-03-11] - S14: Brand Assets Page
Thread:
Run: 20260311-151158-48493 (iteration 14)
Run log: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-14.log
Run summary: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-14.md
- Guardrails reviewed: yes
- No-commit run: false
- Commit: 82a8eeb feat(brand-assets): add brand assets page with logo, colors, typography, and brand book sections
- Post-commit status: clean
- Verification:
  - Command: pnpm run build -> PASS
  - Command: pnpm tsc --noEmit -> PASS
  - Command: Browser testing (dev-browser screenshots) -> PASS
- Files changed:
  - src/app/brand-assets/page.tsx
  - src/app/brand-assets/brand-assets.module.scss
  - src/widgets/brand-assets-screens/index.ts
  - src/widgets/brand-assets-screens/ui/index.ts
  - src/widgets/brand-assets-screens/ui/hero/index.tsx
  - src/widgets/brand-assets-screens/ui/hero/hero.module.scss
  - src/widgets/brand-assets-screens/ui/logo/index.tsx
  - src/widgets/brand-assets-screens/ui/logo/logo.module.scss
  - src/widgets/brand-assets-screens/ui/color-palette/index.tsx
  - src/widgets/brand-assets-screens/ui/color-palette/color-palette.module.scss
  - src/widgets/brand-assets-screens/ui/topography/index.tsx
  - src/widgets/brand-assets-screens/ui/topography/topography.module.scss
  - src/widgets/brand-assets-screens/ui/brand-book/index.tsx
  - src/widgets/brand-assets-screens/ui/brand-book/brand-book.module.scss
- Implemented brand assets page at /brand-assets with 5 sections:
  - Hero: title with pink accent span, description text
  - Logo: interactive logo selector with 4 variants on different backgrounds, download button
  - Color Palette: 2-column grid with primary (Taiko Pink, Deep Gray) and secondary colors, hex values, group labels
  - Typography: left card with suptitle/title/numbered font descriptions, right side with font showcases (Clash Grotesk, Public Sans), variants list, download buttons
  - Brand Book: Banner component linking to Figma brand guidelines
- **Learnings for future iterations:**
  - Content data and types were already defined in src/content/ — only widgets and page route needed creation
  - The source repo MediaQuery component was replaced with CSS show/hide for mobile vs desktop button visibility (simpler approach)
  - All responsive breakpoints match source repo exactly using existing SCSS variables
  - Brand assets page links from About page now resolve correctly
---

## [2026-03-11] - S15: Alethia & Gwyneth Pages
Thread: 
Run: 20260311-151158-48493 (iteration 15)
Run log: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-15.log
Run summary: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-15.md
- Guardrails reviewed: yes
- No-commit run: false
- Commit: 9bcacc7 feat(alethia-gwyneth): add Alethia and Gwyneth product pages with shared reusable component structure
- Post-commit status: clean
- Verification:
  - Command: pnpm run build -> PASS
  - Command: pnpm tsc --noEmit -> PASS
  - Command: Browser test /alethia -> PASS (all sections render, FAQ accordion works)
  - Command: Browser test /gwyneth -> PASS (all sections render, disabled cards shown correctly)
- Files changed:
  - src/app/alethia/page.tsx
  - src/app/alethia/alethia.module.scss
  - src/app/gwyneth/page.tsx
  - src/app/gwyneth/gwyneth.module.scss
  - src/widgets/product-page-screens/index.ts
  - src/widgets/product-page-screens/ui/index.ts
  - src/widgets/product-page-screens/ui/hero/index.tsx
  - src/widgets/product-page-screens/ui/hero/hero.module.scss
  - src/widgets/product-page-screens/ui/about/index.tsx
  - src/widgets/product-page-screens/ui/about/about.module.scss
  - src/widgets/product-page-screens/ui/features/index.tsx
  - src/widgets/product-page-screens/ui/features/features.module.scss
  - src/widgets/product-page-screens/ui/explore/index.tsx
  - src/widgets/product-page-screens/ui/explore/explore.module.scss
  - src/widgets/product-page-screens/ui/cards/index.tsx
  - src/widgets/product-page-screens/ui/cards/cards.module.scss
  - src/widgets/product-page-screens/ui/faq/index.tsx
  - src/widgets/product-page-screens/ui/faq/faq.module.scss
- Created reusable product-page-screens widget with 6 sections: Hero, About, Features, Explore, Cards, FAQ
- Both /alethia and /gwyneth pages use the same shared component structure with different data
- Disabled cards/features render with reduced opacity and no pointer events
- FAQ uses existing Accordeon component with smooth open/close animation
- **Learnings for future iterations:**
  - The widget pattern in this project uses barrel exports: ui/index.ts -> index.ts
  - Existing Accordeon component (not Accordion) is used for FAQ sections
  - Image assets referenced in content data may not all exist (e.g. card icons) but this doesn't break the build
  - Both pages use 'use client' directive since they use interactive components (accordion)
---

## [2026-03-11] - S15: Alethia & Gwyneth Pages (Verification)
Thread:
Run: 20260311-151158-48493 (iteration 16)
Run log: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-16.log
Run summary: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-16.md
- Guardrails reviewed: yes
- No-commit run: false
- Commit: 3d160d9 docs: add progress log and run summary for S15
- Post-commit status: clean
- Verification:
  - Command: pnpm run build -> PASS (alethia 3.19 kB, gwyneth 3.12 kB)
  - Command: pnpm tsc --noEmit -> PASS (no errors)
  - Command: Browser test /alethia desktop (1440px) -> PASS (all 6 sections render with correct content)
  - Command: Browser test /gwyneth desktop (1440px) -> PASS (all 6 sections render, disabled cards visible)
  - Command: Browser test /alethia mobile (375px) -> PASS (responsive stacking, font scaling)
  - Command: ARIA snapshot verification -> PASS (all headings, paragraphs, links, buttons present)
  - Command: FAQ accordion click test -> PASS (toggle buttons respond to interaction)
- Files changed:
  - .ralph/progress.md (this verification entry)
- Verification-only iteration; implementation was completed in iteration 15 (commit 9bcacc7)
- All acceptance criteria confirmed met via browser testing and build verification
- **Learnings for future iterations:**
  - Headless Chromium may not render CSS transitions correctly in zoomed screenshots — full-page screenshots are more reliable for visual verification
  - The dev server needs a few seconds to compile new routes before they return 200 (initial 404 is expected)
---

## [2026-03-11] - S15: Alethia & Gwyneth Pages
Thread:
Run: 20260311-151158-48493 (iteration 17)
Run log: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-17.log
Run summary: /Users/gustavo/apps/new-website-v3/.ralph/runs/run-20260311-151158-48493-iter-17.md
- Guardrails reviewed: yes
- No-commit run: false
- Commit: (see below) docs: add progress log and run summary for S15
- Post-commit status: clean
- Verification:
  - Command: pnpm run build -> PASS (22 static pages generated, no errors)
  - Command: pnpm tsc --noEmit -> PASS (no type errors)
  - Command: Browser /alethia desktop 1440px -> PASS (all sections render correctly)
  - Command: Browser /gwyneth desktop 1440px -> PASS (all sections render correctly)
  - Command: Browser FAQ accordion click -> PASS (expands/collapses with animation)
  - Command: Browser /alethia mobile 375px -> PASS (responsive layout correct)
  - Command: Browser /gwyneth mobile 375px -> PASS (responsive layout correct)
  - Command: Disabled cards visual check -> PASS (dimmed opacity, no pointer events)
- Files changed (from prior iterations, code commit 9bcacc7):
  - src/app/alethia/page.tsx
  - src/app/alethia/alethia.module.scss
  - src/app/gwyneth/page.tsx
  - src/app/gwyneth/gwyneth.module.scss
  - src/content/pages/alethia.ts
  - src/content/pages/gwyneth.ts
  - src/content/types/index.ts (AlethiaGwynethPageData, FeatureItem, CardItem, FaqItem)
  - src/widgets/product-page-screens/ (Hero, About, Features, Explore, Cards, Faq)
  - src/components/accordeon/ (accordion component for FAQ)
  - src/components/label/ (label/suptitle component)
- Implementation complete across iterations 13-17:
  - Reusable ProductPage component structure via product-page-screens widget
  - Both pages share Hero, About, Features, Explore, Cards, Faq sections
  - FAQ accordion with click-outside-to-close, animated height transition
  - Disabled cards/features show dimmed opacity state
  - Full responsive breakpoints (desktop, laptop, tablet, mobile)
- **Learnings for future iterations:**
  - S15 was implemented across multiple iterations due to commit/progress log issues
  - The actual code was solid from iteration 13 onward (commit 9bcacc7)
  - Browser verification is essential for confirming interactive features like accordions
---
