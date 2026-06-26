# Repository Guidelines

## Project Structure & Module Organization

This is a Vite + React + TypeScript site. Application code lives in `src/`: pages in `src/pages`, reusable components in `src/components`, shadcn UI primitives in `src/components/ui`, hooks in `src/hooks`, services in `src/services`, and shared helpers in `src/lib`. Tests are colocated with code when practical, with setup in `src/test/setup.ts`. Static assets are under `public/`, documentation in `docs/`, and automation scripts in `scripts/`.

## Build, Test, and Development Commands

- `npm i`: install dependencies from `package-lock.json`.
- `npm run dev`: start the local Vite server.
- `npm run build`: create a production build in `dist/`.
- `npm run preview`: serve the built app locally.
- `npm run lint` / `npm run lint:fix`: check or fix ESLint issues.
- `npm run typecheck`: run TypeScript without emitting files.
- `npm run test`, `npm run test:watch`, `npm run test:coverage`: run Vitest once, in watch mode, or with V8 coverage.

## Coding Style & Naming Conventions

Use TypeScript and React function components. Keep component filenames in PascalCase, such as `Header.tsx`, and hooks in camelCase with a `use` prefix. Prefer the `@/` alias for imports from `src`. Style UI with Tailwind utilities and existing shadcn/Radix components before adding new patterns. Follow the current two-space indentation style.

## Testing Guidelines

Vitest runs in `jsdom` with Testing Library matchers configured in `src/test/setup.ts`. Name tests `*.test.ts` or `*.test.tsx` and colocate them near the module under test. Add focused tests for user-visible behavior, routing, forms, analytics, and shared UI state.

## Commit & Pull Request Guidelines

Recent history uses Conventional Commit-style messages such as `feat: configure GA`, `fix: lint error`, and scoped forms like `feat(branding): update OG images`. Keep commits small and describe the user-facing change or fix. Pull requests should include a concise summary, testing performed, linked issues when applicable, and screenshots for visual changes.

## Security & Configuration Tips

Do not commit secrets. Follow `docs/` setup guides for EmailJS, Google Analytics, and GitHub secrets. Keep public assets intentional and optimized because files in `public/` are served directly.
