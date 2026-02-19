import { NextResponse } from 'next/server';

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactBody;

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
  }

  return NextResponse.json({
    message: 'Thanks. Your message has been received. MERTCAN will contact you shortly.'
  });
}
