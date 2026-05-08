# Maple AI Technologies Website

High-conversion, enterprise-style marketing website built with Next.js App Router and Tailwind CSS.

## Local Development

```bash
npm install
npm run dev -- -p 3002
```

Open [http://localhost:3002](http://localhost:3002).

## Contact Form Integration

The contact form posts to `POST /api/contact`.

### Environment Variables

Create `.env.local` with:

```bash
CONTACT_WEBHOOK_URL=https://your-webhook-endpoint.example.com
CONTACT_WEBHOOK_SECRET=your-secret-value
CONTACT_WEBHOOK_SECRET_HEADER=x-webhook-secret
```

- `CONTACT_WEBHOOK_URL`: destination for CRM/automation ingestion.
- `CONTACT_WEBHOOK_SECRET`: optional secret value sent in a header.
- `CONTACT_WEBHOOK_SECRET_HEADER`: optional header name override (defaults to `x-webhook-secret`).

If no webhook URL is set, submissions are logged server-side during development.

## SEO and Crawling

- Global metadata, Open Graph, and Twitter cards are configured in `src/app/layout.tsx`.
- Dynamic social preview images are served by:
  - `src/app/opengraph-image.tsx`
  - `src/app/twitter-image.tsx`
- Production crawl setup:
  - `src/app/sitemap.ts`
  - `src/app/robots.ts`

## Build and Quality

```bash
npm run lint
npm run build
```
