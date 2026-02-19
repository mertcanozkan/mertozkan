import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
};

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
  const portValue = process.env.SMTP_PORT ?? '587';
  const secureValue = process.env.SMTP_SECURE ?? 'false';

  if (!host || !user || !pass) {
    throw new Error('SMTP host, user, or password is missing.');
  }

  const port = Number.parseInt(portValue, 10);
  const secure = secureValue.toLowerCase() === 'true';

  if (Number.isNaN(port)) {
    throw new Error('SMTP port is invalid.');
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass
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
  const from = process.env.SMTP_FROM ?? `MERTCAN Portfolio <${recipient}>`;
  const safeName = escapeHtml(body.name);
  const safeEmail = escapeHtml(body.email);
  const safeMessage = escapeHtml(body.message).replace(/\n/g, '<br/>');

  try {
    const transporter = createTransport();

    await transporter.sendMail({
      to: recipient,
      from,
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

    return NextResponse.json(
      { error: 'Message could not be sent right now. Please try again shortly.' },
      { status: 500 }
    );
  }

  return NextResponse.json({
    message: 'Thanks. Your message has been received. MERTCAN will contact you shortly.'
  });
}
