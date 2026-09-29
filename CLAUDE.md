# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ByteSpace is a React-based web application built with modern tooling. The project appears to be in early development, with basic routing and a shared Header component implemented.

## Commands

```bash
npm run dev      # Start development server with HMR (Vite)
npm run build    # Type-check with TypeScript, then build production bundle
npm run lint     # Run ESLint across the codebase
npm run preview  # Preview production build locally
```

## Architecture

### Technology Stack
- **React 19** with TypeScript
- **Vite 8** for build tooling
- **Tailwind CSS v4** (via `@tailwindcss/vite` plugin)
- **React Router 8** for client-side routing
- **GSAP 3** available for animations (ScrollTrigger included)

### Project Structure
- `src/main.tsx` — Application entry point
- `src/App.tsx` — Root component with BrowserRouter and route definitions
- `src/pages/` — Page components (Home, Login, Register, NotFound)
- `src/shared/` — Shared/reusable components (e.g., Header)
- `src/utils/cn.ts` — Tailwind class merge utility (`clsx` + `tailwind-merge`)
- `src/assets/` — Static assets with auto-generated index exporting images and icons

### Styling
- Tailwind CSS v4 with custom theme tokens defined in `src/index.css` (`@theme` block)
- Custom button classes: `.theme-primary-btn`, `.theme-warning-btn`
- Primary brand color: `#0e52ff`
- Background: `#0E1116` (dark theme)

### Routing
Routes are defined in `App.tsx`:
- `/` — Home
- `/login` — Login
- `/register` — Register
- `*` — NotFound (catch-all)

### Fonts
- Primary fonts: "Satoshi" and "Clash Display" (self-hosted, not on Google Fonts)
- Font references appear in inline styles and `index.html`

## Development Notes

- The `src/assets/index.ts` file is auto-generated from Figma exports — avoid manual edits
- TypeScript is configured with strict linting (`noUnusedLocals`, `noUnusedParameters`)
- ESLint uses flat config format (`eslint.config.js`) with React Hooks and Refresh plugins
