# Giga Web Accessibility

Modern full-stack application that powers the Giga Web Accessibility platform. The project provides an Express-based API, a Vite/React frontend, and a shared TypeScript schema layer backed by PostgreSQL (Neon) via Drizzle ORM.

## Tech Stack

- **Frontend**: React 18, Wouter, Tailwind CSS + shadcn/ui, TanStack Query, Vite.
- **Backend**: Express 4, express-session with Postgres store, Drizzle ORM, TypeScript.
- **Infrastructure**: Neon PostgreSQL, Docker Compose (with Traefik + Redis integration hooks), ESBuild bundling.

## Prerequisites

1. Node.js 20+ and npm 10+.
2. PostgreSQL database (Neon connection string recommended).
3. Optional: Docker + Docker Compose for containerized deployments.

## Getting Started

```bash
git clone <repo-url>
cd GigaWebAccessibility
npm install
cp .env.example .env   # if you keep a template around
```

Update `.env` with valid credentials (`DATABASE_URL`, `SESSION_SECRET`, etc.).

### Run in Development

```bash
npm run dev
```

This runs the backend (Express + Vite middleware) and serves the React app with hot-module reload.

### Database Schema

Use Drizzle to sync schema changes:

```bash
npm run db:push
```

This command requires `DATABASE_URL` to be reachable from your machine. Run it any time you adjust `shared/schema.ts`.

### Production Build & Start

```bash
npm run build   # Vite frontend bundle + ESBuild backend bundle
npm run start   # serves dist/index.js (expects dist/public from build step)
```

For managed hosting, `scripts/start-production.sh` runs `npm run db:push` before booting the compiled server.

### Docker Compose

1. Ensure the `.env` file exists.
2. Provision the external `web` network and Redis secret referenced in `docker-compose.yml`.
3. Run `docker compose up --build -d` to deploy behind Traefik (see labels inside the compose file).

## Project Structure

```
frontend/            # Vite + React application
  src/
    components/      # UI widgets (shadcn)
    hooks/           # Custom React hooks
    contexts/        # React context providers
    pages/           # Routed screens
    services/        # Query client, helpers
    assets/          # Styles & media
backend/
  src/
    controllers/     # Route registration
    services/        # (future business logic)
    repositories/    # Storage adapters (in-memory for now)
    middlewares/     # Express middleware
    utils/           # Vite adapter, DB connectors
shared/              # Drizzle schemas + shared types
scripts/             # Deployment helpers (start-production.sh)
docker-compose.yml
tailwind.config.ts
tsconfig.json
vite.config.ts
```

## npm Scripts

| Script           | Description |
| ---------------- | ----------- |
| `npm run dev`    | Starts Express + Vite in development mode. |
| `npm run build`  | Bundles frontend (Vite) and backend (ESBuild). |
| `npm run start`  | Runs the compiled server from `dist/index.js`. |
| `npm run check`  | Type-checks the entire monorepo via `tsc`. |
| `npm run db:push`| Pushes schema changes to the configured database. |

## Troubleshooting

- **`npm run db:push` fails**: confirm `DATABASE_URL` (with SSL options for Neon) is reachable and that your IP has access.
- **Frontend assets missing**: always run `npm run build` before `npm run start` or during deployments.
- **Session issues**: ensure `SESSION_SECRET` is long and consistent between restarts; session table must exist (`connect-pg-simple` expects `sessions` table).

For more operational detail, see `server-running-guide.md` and `replit.md`.
