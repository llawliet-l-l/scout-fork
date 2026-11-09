# Scout

Scout is a benchmark of Rango's token coverage and routing as a B2C Customer experiences it.

## Setup

Use Node 24, then run `corepack enable` and `yarn install`. Copy `.env.example` to `.env.local` and fill it in.

| Command          | What it does                                          |
| ---------------- | ----------------------------------------------------- |
| `yarn dev`       | Starts the dev server at <http://localhost:3000>.     |
| `yarn build`     | Builds the production app.                            |
| `yarn lint`      | Runs ESLint.                                          |
| `yarn typecheck` | Generates Next's route types and runs `tsc --noEmit`. |
| `yarn test`      | Runs the vitest suite once.                           |
| `yarn format`    | Formats every file with Prettier.                     |

## Environment variables

| Variable                     | Required | Purpose                                                       |
| ---------------------------- | -------- | ------------------------------------------------------------- |
| `RANGO_API_KEY`              | Required | Rango API key.                                                |
| `REFERENCE_PROVIDER_API_KEY` | Required | Reference Provider API key.                                   |
| `RANGO_API_BASE_URL`         | Optional | Rango API base URL. Defaults to `https://api.rango.exchange`. |

## Deploys

GitHub Actions runs the Vercel CLI: pull requests get preview deploys and `main` deploys to production.
It needs the GitHub secrets `VERCEL_TOKEN`, `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID`.
