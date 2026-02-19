import { NextResponse } from 'next/server';

type QuoteBody = {
  name?: string;
  email?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  requirements?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as QuoteBody;

  if (!body.name || !body.email || !body.projectType || !body.budget || !body.timeline || !body.requirements) {
    return NextResponse.json(
      {
        error: 'Please complete all fields so a realistic quote can be prepared.'
      },
      { status: 400 }
    );
  }

  return NextResponse.json({
    message: 'Quote request submitted successfully. You can expect a response with next steps soon.'
  });
}
