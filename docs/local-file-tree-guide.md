# Local File Tree Guide

This file is for local maintenance.

Use it when you want to quickly find:

- where content lives
- where assets live
- where layout lives
- which files are safe to edit for routine updates

## Project Tree

```text
My-resume/
├─ app/
│  ├─ [lang]/
│  │  ├─ page.tsx
│  │  ├─ projects/page.tsx
│  │  ├─ research/page.tsx
│  │  └─ resume/page.tsx
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ components/
│  ├─ layout/
│  │  ├─ language-switcher.tsx
│  │  ├─ scroll-to-top.tsx
│  │  └─ site-header.tsx
│  ├─ sections/
│  │  ├─ background-section.tsx
│  │  ├─ focus-section.tsx
│  │  ├─ hero-section.tsx
│  │  ├─ materials-section.tsx
│  │  ├─ page-hero.tsx
│  │  └─ projects-section.tsx
│  └─ ui/
│     └─ button.tsx
├─ content/
│  ├─ en/
│  │  └─ skills/
│  ├─ zh/
│  │  └─ skills/
│  └─ README.md
├─ docs/
│  ├─ content-update-guide.md
│  ├─ homepage-bilingual-copy.md
│  ├─ homepage-content-outline.md
│  ├─ local-file-tree-guide.md
│  └─ site-information-architecture.md
├─ lib/
│  ├─ content.ts
│  └─ utils.ts
├─ public/
│  ├─ images/
│  │  ├─ backgrounds/
│  │  └─ qr/
├─ skills/
│  └─ context-compression/
├─ Area.html
├─ components.json
├─ eslint.config.mjs
├─ next.config.ts
├─ package.json
├─ postcss.config.mjs
└─ tsconfig.json
```

## What Each Part Is For

### `app/`

This is the Next.js App Router entry.

- `app/[lang]/page.tsx`
  Homepage route for `en` and `zh`
- `app/[lang]/research/page.tsx`
  Research page
- `app/[lang]/projects/page.tsx`
  Projects page
- `app/[lang]/resume/page.tsx`
  Resume page
- `app/layout.tsx`
  Global root layout
- `app/globals.css`
  Global styles and visual system

Edit `app/` only when you want to change page structure or routing.

### `components/layout/`

Global layout-related UI.

- `site-header.tsx`
  Navigation bar, mobile menu, desktop header
- `language-switcher.tsx`
  EN / 中文 switching
- `scroll-to-top.tsx`
  Floating back-to-top button

### `components/sections/`

Homepage and page section components.

- `hero-section.tsx`
  Homepage hero
- `focus-section.tsx`
  Homepage research focus
- `projects-section.tsx`
  Homepage selected projects preview
- `background-section.tsx`
  Homepage background/profile section
- `materials-section.tsx`
  Homepage materials section
- `page-hero.tsx`
  Shared hero used by inner pages

If you want to adjust layout, spacing, card arrangement, or UI interaction, these are the first files to check.

### `components/ui/`

Small reusable UI primitives.

- `button.tsx`
  Shared button and button link styles

### `lib/`

Core content and helper logic.

- `content.ts`
  Main structured content source for the whole site
- `utils.ts`
  Small utility helpers

For normal content updates, `lib/content.ts` is the most important file in the whole project.

### `public/`

Static assets served directly by Next.js.

- `public/images/qr/`
  QR code images
- `public/images/backgrounds/`
  Future local background assets

Use `public/` when replacing files without changing layout code.

### `docs/`

Planning and maintenance documents.

- `content-update-guide.md`
  Main guide for how to edit content
- `local-file-tree-guide.md`
  This local file tree explanation
- other docs
  planning/reference materials from the build process

### `content/`

Reserved space for future structured content.

Right now the live site content is still mainly in `lib/content.ts`.

### `skills/`

Local Codex skill files used during development.

Current custom skill:

- `skills/context-compression/`

## Fast Maintenance Map

If you want to update text:

- edit `lib/content.ts`

If you want to replace the WeChat QR code:

- replace file in `public/images/qr/`

If you want to change homepage section layout:

- edit `components/sections/*`

If you want to change navigation:

- edit `components/layout/site-header.tsx`
- edit `components/layout/language-switcher.tsx`

If you want to change global style or spacing:

- edit `app/globals.css`

## Files You Will Most Likely Edit Later

For routine updates, these are the most common files:

- `lib/content.ts`
- `public/images/qr/wechat-tech-insights.jpg`
- `app/globals.css`

## Files You Usually Should Not Touch For Routine Updates

Unless you are changing tooling or framework setup, you normally do not need to edit:

- `package.json`
- `tsconfig.json`
- `postcss.config.mjs`
- `eslint.config.mjs`
- `components.json`

## Suggested Update Order

When maintaining the site later, use this order:

1. Update content in `lib/content.ts`
2. Replace assets in `public/` if needed
3. Run local preview
4. Run checks before commit

## Local Commands

```bash
npm run dev
npm run lint
npm run build
```

