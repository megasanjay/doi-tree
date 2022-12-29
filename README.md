# DOI Tree

DOI Tree is a web application that allows users to manage essential links within their research projects. The application is built using Next.js and Prisma. The application is currently in development.

## Features

This template comes with several essential features:

- Server side rendering setup for Mantine
- Color scheme is stored in cookie to avoid color scheme mismatch after hydration
- Storybook with color scheme toggle
- Jest with react testing library
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

## npm scripts

### Build and dev scripts

- `dev` – start dev server
- `build` – bundle application for production
- `export` – exports static website to `out` folder
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Prisma scripts

- `prisma:generate` – generates prisma client
- `prisma:studio` – starts prisma studio
- `prisma:migrate` – runs prisma migrate
- `prisma:migrate:dev` – runs prisma migrate in dev mode
- `prisma:migrate:reset` – resets database and runs prisma migrate
- `prisma:push` – pushes prisma schema to database

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier
