# Glocal Studio

Marketing website for Glocal Studio: a server-side-rendered React 18 app served by Express 4 and bundled with Webpack 5. Deployed on Vercel.

## Requirements

- **Node.js 24** (see `.nvmrc`; run `nvm use` if you use nvm). Node 22.9+ also works locally. Node 20 and older will **not** work: the npm scripts use `node --env-file-if-exists`.
- **npm** (comes with Node)
- **Git**

Check your versions:

```bash
node -v   # should print v24.x
npm -v
```

## Getting started

```bash
git clone https://github.com/rajjaiswal3858/glocal_studio.git
cd glocal_studio
npm ci
npm run dev
```

Then open http://localhost:3000/.

`npm run dev` runs three processes in parallel: the server and client Webpack builds in watch mode, plus `nodemon`, which restarts the server whenever the build changes. On a fresh clone the first build takes 1–2 minutes. The server waits for it (`[wait-for-build] Waiting for the first Webpack build to finish...`) and starts as soon as it's done (`Server is running on port 3000`).

> **Downloaded a ZIP instead of cloning?** Make sure it fully extracted. If you see errors like `Can't resolve './components/Icons'` or `Can't resolve './containers/Home'`, the `src/components`, `src/containers`, `src/context`, `src/utils` or `src/styles` folders are missing. Re-extract the ZIP (use 7-Zip if Windows' built-in extractor fails) or use `git clone`.

## Environment variables (optional)

The site runs without a `.env` file. You only need one for the contact form to send emails:

```bash
cp .env.example .env      # Windows PowerShell: copy .env.example .env
```

| Variable | Used for |
| --- | --- |
| `BREVO_API_KEY` | Sending contact-form emails through Brevo |
| `TURNSTILE_SECRET_KEY` | Verifying the Cloudflare Turnstile anti-spam check |

Never commit `.env`; it's already in `.gitignore`. Set the same keys in the Vercel project settings for production.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server with live rebuilds at http://localhost:3000 |
| `npm run build` | Production build into `build/` |
| `npm start` | Runs the production build (run `npm run build` first) |
| `npm run lint` | ESLint over `src/` |

To use a different port: `PORT=4000 npm start` (PowerShell: `$env:PORT=4000; npm start`).

## Deploy

The site deploys to Vercel from GitHub; `vercel.json` holds the build configuration. For manual deploys, install the Vercel CLI (`npm i -g vercel`) and run `vercel` from the project root.
