import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
};

class MailConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MailConfigError';
  }
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function createTransport() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM;
  const portValue = process.env.SMTP_PORT ?? '587';
  const secureValue = process.env.SMTP_SECURE ?? 'false';
  const requireTLSValue = process.env.SMTP_REQUIRE_TLS ?? 'false';
  const tlsRejectUnauthorizedValue = process.env.SMTP_TLS_REJECT_UNAUTHORIZED ?? 'true';

  if (!host || !user || !pass || !from) {
    throw new MailConfigError(
      'SMTP is not fully configured. Ensure SMTP_HOST, SMTP_USER, SMTP_PASS, and SMTP_FROM are set in .env.'
    );
  }

  const port = Number.parseInt(portValue, 10);
  const secure = secureValue.toLowerCase() === 'true';
  const requireTLS = requireTLSValue.toLowerCase() === 'true';
  const tlsRejectUnauthorized = tlsRejectUnauthorizedValue.toLowerCase() === 'true';

  if (Number.isNaN(port)) {
    throw new MailConfigError('SMTP_PORT must be a valid number.');
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    requireTLS,
    auth: {
      user,
      pass
    },
    tls: {
      rejectUnauthorized: tlsRejectUnauthorized
    }
  });
}

export async function POST(request: Request) {
  const body = (await request.json()) as ContactBody;

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
  }

  if (!isValidEmail(body.email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  const recipient = process.env.CONTACT_RECEIVER_EMAIL ?? 'hello@mertcan.co.uk';
  const from = process.env.SMTP_FROM;
  const safeName = escapeHtml(body.name);
  const safeEmail = escapeHtml(body.email);
  const safeMessage = escapeHtml(body.message).replace(/\n/g, '<br/>');

  try {
    const transporter = createTransport();
    await transporter.verify();

    await transporter.sendMail({
      to: recipient,
      from: from!,
      replyTo: body.email,
      subject: `New Contact Form Submission from ${body.name}`,
      text: `Name: ${body.name}\nEmail: ${body.email}\n\nMessage:\n${body.message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `
    });
  } catch (error) {
    console.error('Contact form email failed:', error);

    const isProduction = process.env.NODE_ENV === 'production';
    const errorMessage = error instanceof Error ? error.message : 'Unknown mail error.';
    const errorCode =
      typeof error === 'object' && error !== null && 'code' in error ? String((error as { code?: unknown }).code) : '';
    const debugMessage = errorCode ? `${errorCode}: ${errorMessage}` : errorMessage;

    if (error instanceof MailConfigError) {
      return NextResponse.json({ error: errorMessage }, { status: 500 });
    }

    if (!isProduction) {
      return NextResponse.json({ error: debugMessage }, { status: 502 });
    }

    return NextResponse.json(
      { error: 'Message could not be sent right now. Please check SMTP settings and try again.' },
      { status: 502 }
    );
  }

  return NextResponse.json({
    message: 'Thanks. Your message has been received. MERTCAN will contact you shortly.'
  });
}
