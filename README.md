# Maple AI Technologies Website

High-conversion, enterprise-style marketing website built with Next.js App Router and Tailwind CSS.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The Dataiku homepage replica is a static page in `homepage-replica/` and is served at [http://localhost:3002](http://localhost:3002).

## Contact Form Integration

The contact form posts to `POST /api/contact`.

### Google Calendar scheduling (“Let’s talk”)

The homepage **Let’s talk** button opens your Google Calendar appointment page in a popup. Add to `.env.local`:

```bash
NEXT_PUBLIC_GOOGLE_CALENDAR_SCHEDULING_URL=https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID
```

Get the URL from Google Calendar → **Appointment schedules** → your schedule → **Share** → copy the booking link. If unset, the button falls back to `/contact`.

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
