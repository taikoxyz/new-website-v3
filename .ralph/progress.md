# Progress Log
Started: Wed 11 Mar 2026 15:06:21 -04

## Codebase Patterns
- (add reusable patterns here)

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
