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

function env(name: string) {
  const value = process.env[name];
  return typeof value === 'string' ? value.trim() : '';
}

function parseBoolean(value: string, fallback: boolean) {
  if (!value) return fallback;
  return value.toLowerCase() === 'true';
}

function createTransport() {
  const host = env('SMTP_HOST');
  const user = env('SMTP_USER');
  const pass = env('SMTP_PASS');
  const explicitPort = env('SMTP_PORT');
  const explicitSecure = env('SMTP_SECURE');
  const portValue = explicitPort || (host === 'smtp.hostinger.com' ? '465' : '587');
  const secureValue = explicitSecure || (host === 'smtp.hostinger.com' ? 'true' : 'false');
  const requireTLSValue = env('SMTP_REQUIRE_TLS') || 'false';
  const tlsRejectUnauthorizedValue = env('SMTP_TLS_REJECT_UNAUTHORIZED') || 'true';
  const smtpClientName = env('SMTP_CLIENT_NAME') || 'mertcan.co.uk';

  if (!host || !user || !pass) {
    throw new MailConfigError('SMTP is not fully configured. Ensure SMTP_HOST, SMTP_USER, and SMTP_PASS are set.');
  }

  const port = Number.parseInt(portValue, 10);
  const secure = parseBoolean(secureValue, false);
  const requireTLS = parseBoolean(requireTLSValue, false);
  const tlsRejectUnauthorized = parseBoolean(tlsRejectUnauthorizedValue, true);

  if (Number.isNaN(port)) {
    throw new MailConfigError('SMTP_PORT must be a valid number.');
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    name: smtpClientName,
    requireTLS,
    connectionTimeout: 20_000,
    greetingTimeout: 20_000,
    socketTimeout: 30_000,
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

  const recipient = env('CONTACT_RECEIVER_EMAIL') || 'hello@mertcan.co.uk';
  const smtpUser = env('SMTP_USER');
  const from = env('SMTP_FROM') || (smtpUser ? `MERTCAN Web Development Services <${smtpUser}>` : '');
  const safeName = escapeHtml(body.name);
  const safeEmail = escapeHtml(body.email);
  const safeMessage = escapeHtml(body.message).replace(/\n/g, '<br/>');

  try {
    if (!from) {
      throw new MailConfigError('SMTP_FROM is missing and no SMTP_USER is available for fallback sender address.');
    }

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
