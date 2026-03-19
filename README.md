# Taiko Website

The official [taiko.xyz](https://taiko.xyz) website — a static Next.js site with zero CMS dependencies.

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **SCSS Modules** for styling
- **GSAP** for animations
- **pnpm** as package manager

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm >= 10

### Install dependencies

```bash
pnpm install
```

### Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
pnpm build
pnpm start
```

### Lint and type-check

```bash
pnpm lint
pnpm tsc --noEmit
```

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── about/            # About page
│   ├── alethia/          # Alethia product page
│   ├── blog/             # Blog listing + [slug] posts
│   ├── brand-assets/     # Brand kit
│   ├── careers/          # Careers listing + [slug] postings
│   ├── dao/              # DAO / Governance info
│   ├── ecosystem/        # Ecosystem dApps directory
│   ├── events/           # Events listing
│   ├── grant-program/    # Grants program
│   ├── gwyneth/          # Gwyneth product page + /apps
│   └── solutions/        # Solutions page
├── components/           # Reusable UI components
├── content/
│   ├── data/             # Static data (projects, blogs, navigation)
│   ├── pages/            # Page-specific content
│   └── types/            # TypeScript type definitions
├── features/             # Feature-level components (e.g. newsletter)
├── lib/                  # Utilities and hooks
└── widgets/              # Page-section components (hero, features, etc.)

public/
├── fonts/                # Custom fonts
├── img/                  # Images organized by page
├── media/                # Videos and animations
└── files/                # Downloadable documents
```

## Content Management

All content is defined as static TypeScript in `src/content/`. There is no CMS — to update text, images, or data, edit the relevant file in `src/content/pages/` or `src/content/data/` and rebuild.
