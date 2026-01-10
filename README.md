# Mojito Website

Bar/restaurant website with animations built with React, TypeScript, and GSAP.

## Technologies

- **React 19.2** - UI framework
- **TypeScript 5.9** - type-safe JavaScript
- **Vite 7.3** - build tool
- **GSAP 3.14** - animation library with SplitText & ScrollTrigger
- **Tailwind CSS 4.1** - utility-first styling
- **react-responsive** - responsive breakpoints

## Structure

The project contains the following sections:

- Navbar - navigation menu
- Hero - hero section with video background
- Cocktails - cocktail list
- About - bar information
- Art - gallery
- Menu - food menu
- Contact - contact form

## Installation

```bash
npm install
```

## Usage

Development server:

```bash
npm run dev
```

TypeScript type checking:

```bash
npm run type-check
```

Production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Lint code:

```bash
npm run lint
```

## GSAP Animations

The project uses the following GSAP plugins:

- ScrollTrigger - scroll-based animations
- SplitText - text animations by characters and words

## Configuration

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript compiler options
- `eslint.config.js` - ESLint rules (with TypeScript support)
- `constants/index.ts` - menu and cocktails data with TypeScript types
- `src/vite-env.d.ts` - TypeScript declarations for assets and GSAP
