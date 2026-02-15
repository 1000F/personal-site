# personal-site

Simple, fast personal site (Paul Graham structure + Miami ’80s styling) with Substack posts pulled from RSS.

## Run locally

This repo currently works best with **Node 20** (Node 25 can fail on esbuild).

```bash
cd /Users/adamobrien/clawd/personal-site
/opt/homebrew/opt/node@20/bin/npm install
/opt/homebrew/opt/node@20/bin/npm run dev
```

Open: http://127.0.0.1:4321/

## Build

```bash
/opt/homebrew/opt/node@20/bin/npm run build
```

## Substack

Configured in `src/pages/index.astro`:
- Publication: https://moreblood.substack.com
- Feed: https://moreblood.substack.com/feed

## Deploy (adamobrien.com)

Recommended: **Cloudflare Pages** (easy custom domain) or **Vercel**.

Cloudflare Pages (high level):
- Connect repo
- Build command: `npm run build`
- Output directory: `dist`
- Set Node version to 20
- Add custom domain: `adamobrien.com` and `www.adamobrien.com`

If you tell me whether you prefer Cloudflare Pages or Vercel, I’ll give exact click-by-click steps.
