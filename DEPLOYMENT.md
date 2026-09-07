# Deploying to Cloudflare

The site is a static Vite/React SPA, so it is deployed as a Cloudflare Worker
with [static assets](https://developers.cloudflare.com/workers/static-assets/).
No Worker script is needed — Cloudflare serves `dist/public` directly and falls
back to `index.html` for client-side routes (`not_found_handling:
"single-page-application"` in `wrangler.jsonc`).

The Express server in `server/` is only used for local/Node hosting and is not
part of the Cloudflare deployment.

## One-off deploy from your machine

```bash
pnpm install
npx wrangler login     # once, opens a browser
pnpm run deploy        # builds and deploys ("pnpm deploy" is a built-in pnpm command)
```

`pnpm run cf:preview` builds and serves the deployed setup locally on
`http://localhost:8787`.

## Deploy from CI

Create a Cloudflare API token with the **Edit Cloudflare Workers** template,
then set these as repository secrets — the `Deploy to Cloudflare Workers` workflow runs on every push to `main`:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## Configuration

- `wrangler.jsonc` — worker name (`yigal-website`) and asset settings.
- `client/public/_headers` — cache and security headers, copied into the build.

To use a custom domain, add the zone to Cloudflare and attach a route in the
Workers dashboard, or add a `routes` entry to `wrangler.jsonc`.
