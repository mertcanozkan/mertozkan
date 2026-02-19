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
- `CONTACT_RECEIVER_EMAIL`

Optional:

- `SMTP_FROM`
