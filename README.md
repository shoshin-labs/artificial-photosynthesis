# Made from Air

A lightweight public-facing library for CO2-made products, fossil-free materials, and the companies turning carbon into fuels, chemicals, and consumer-product inputs.

## What it includes

- Editorial homepage framing the project as a live archive and highlight reel
- A library page that now foregrounds the freshest 2025–2026 Twelve material
- Audience-guided entry points for brand teams, investors, journalists, and commercial partners
- Official videos, press coverage, and adjacent market/context links
- A deployable static `dist/` output for Cloudflare Pages

## Local preview

```bash
./serve.sh
```

The script binds to `127.0.0.1`, starts at port `8095`, and automatically picks the first free port in a short range.

If you are checking the library directly, use the explicit page URL:

- `http://127.0.0.1:<port>/index.html`
- `http://127.0.0.1:<port>/library.html`

## Cloudflare Pages deploy

This repo deploys to the Cloudflare Pages project `made-from-air`.

To deploy again:

```bash
npx wrangler pages deploy dist --project-name=made-from-air --branch=main
```
