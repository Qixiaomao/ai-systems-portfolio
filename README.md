# Yiming Huang Portfolio

A bilingual personal portfolio built with Next.js and Tailwind CSS for presenting my work as an AI systems researcher and engineer.

## Project Overview

This project is a public-facing technical portfolio site that combines:

- a homepage with a strong research-engineering identity
- a project showcase with direct GitHub repository links
- a research direction page for current interests and focus areas
- a structured resume-style page for background and capabilities
- bilingual presentation in English and Chinese

The goal is to provide a clean and maintainable personal site that works both as a professional introduction and as a long-term technical profile.

## Tech Stack

- Next.js
- React
- Tailwind CSS
- TypeScript
- Lucide React
- Vercel-ready deployment workflow

## Key Features

- Bilingual routes: `en` and `zh`
- Homepage with strong visual hero and structured content sections
- Dedicated `Research`, `Projects`, and `Resume` pages
- Clickable project titles that link to GitHub repositories when available
- QR-based technical insight / WeChat section
- Desktop and mobile responsive layout
- Centralized content management through `lib/content.ts`
- Public-safe materials section without exposing private resume PDFs by default

## Project Structure

```text
app/            Next.js routes and global styles
components/     Layout, sections, and UI components
lib/            Main structured content and utilities
public/         Static assets such as images
docs/           Planning and maintenance documents
skills/         Local Codex helper skills used in development
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Run lint:

```bash
npm run lint
```

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm run start
```

## Content Management

Most of the site content is currently managed in:

- `lib/content.ts`

Static assets are stored in:

- `public/images/qr/`
- `public/images/backgrounds/`

If you are maintaining this project locally, see:

- [`docs/content-update-guide.md`](./docs/content-update-guide.md)
- [`docs/local-file-tree-guide.md`](./docs/local-file-tree-guide.md)

## Pages

- `/en`
- `/zh`
- `/en/research`
- `/zh/research`
- `/en/projects`
- `/zh/projects`
- `/en/resume`
- `/zh/resume`

## Notes

- The project currently uses a structured content file instead of a CMS.
- Some folders such as `content/` are reserved for future expansion.
- `Area.html` is kept as a local design reference and is not part of the live Next.js app.
- Public deployment is intentionally configured to avoid directly exposing private resume PDFs.

## License

Personal portfolio project. Reuse with attribution and adaptation as appropriate.
