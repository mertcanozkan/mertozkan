# MERTCAN Portfolio

Ultra-modern portfolio website built with Next.js and Tailwind CSS.

## Features

- Animated hero with Pexels background image
- Scroll reveal transitions and hover interactions
- Services, projects, process, testimonials
- Contact form API endpoint (`/api/contact`)
- Quote request API endpoint (`/api/quote`)
- One-click WhatsApp contact CTA
- Modular component and data structure for scaling

## Run locally

```bash
npm install
npm run dev
```

Then visit `http://localhost:3000`.

## SMTP setup for contact form

Contact form submissions are sent to `hello@mertcan.co.uk` via SMTP.

1. Fill in `/Users/mertozkan/Dev/WebDev/GitHub/mertozkan/.env` with your SMTP provider values.
2. Restart the dev server after updating env values.

Required env keys:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`
- `CONTACT_RECEIVER_EMAIL`

Optional:

- `SMTP_REQUIRE_TLS`
- `SMTP_TLS_REJECT_UNAUTHORIZED`

Troubleshooting:

- If your provider uses SSL on port `465`, use `SMTP_PORT=465` and `SMTP_SECURE=true`.
- If your provider uses STARTTLS on `587`, use `SMTP_PORT=587` and `SMTP_SECURE=false`.
- In development, the API now returns a clearer SMTP configuration error when vars are missing.

## Hostinger deployment notes

Use a Node.js app deployment (not static-only hosting), because this project uses Next.js API routes for form submission.

### 1. Build a Hostinger-ready bundle

```bash
npm install
npm run build:hostinger
```

Upload the full contents of `deploy/hostinger/` to your Hostinger Node app directory.

Important: do not upload only `next/standalone` by itself.  
If `next/static` is missing, the site renders as unstyled HTML (no Tailwind/CSS).

This project uses conditional build output:

- CI/server builds: `.next` (default Next.js output)
- Manual Hostinger bundle (`npm run build:hostinger`): `next` (non-hidden directory)

If you use Hostinger CI/CD instead of manual upload:

- Build command: `npm run build`
- Output directory: `.next`
- Start command: `npm run start:standalone` (for Node app hosting)

### 2. Start command on Hostinger

Set startup command to:

```bash
node server.js
```

### 3. Environment variables

For Hostinger mail (`smtp.hostinger.com`), the API defaults to:

- `SMTP_PORT=465`
- `SMTP_SECURE=true`

If you prefer STARTTLS, explicitly set:

- `SMTP_PORT=587`
- `SMTP_SECURE=false`

Recommended values for Hostinger:

- `SMTP_HOST=smtp.hostinger.com`
- `SMTP_USER=hello@mertcan.co.uk`
- `SMTP_PASS=<your mailbox password>`
- `SMTP_FROM="MERTCAN Web Development Services <hello@mertcan.co.uk>"`
- `CONTACT_RECEIVER_EMAIL=hello@mertcan.co.uk`

Optional:

- `SMTP_CLIENT_NAME=mertcan.co.uk`

### 4. Quick production checks

After deploy, verify:

- `https://www.mertcan.co.uk/_next/static/` does not redirect to your HTML page.
- `https://www.mertcan.co.uk/api/contact` returns JSON for POST requests (not HTML).

If you see `Unexpected token '<'` in the form, the server is returning an HTML error page instead of JSON, usually due to incorrect routing or missing Node app runtime.
