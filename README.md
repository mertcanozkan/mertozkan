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

For Hostinger mail (`smtp.hostinger.com`), the API now defaults to:

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
