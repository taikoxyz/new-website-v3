# Agents

## Build & Dev

```bash
pnpm install        # Install dependencies
pnpm run dev        # Start dev server (port 3000)
pnpm run build      # Production build
pnpm run lint       # ESLint
pnpm tsc --noEmit   # TypeScript check
```

## Project Structure

- `src/app/` — Next.js 15 App Router (layout, pages)
- `src/app/scss/` — Global SCSS (vars, mixins, reset, fonts, custom, style)
- `public/` — Static assets (fonts, images, media, Lottie JSON, documents, favicon)

## SCSS

Variables and mixins are auto-injected into all SCSS files via `next.config.ts` `sassOptions.additionalData`.
