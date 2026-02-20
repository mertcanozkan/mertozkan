'use client';

import { FormEvent, useState } from 'react';

type State = {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
};

type ApiPayload = {
  error?: string;
  message?: string;
};

const initialState: State = { status: 'idle', message: '' };
const fieldClass =
  'mt-1 w-full rounded-xl border border-black/15 bg-white/70 px-4 py-3 text-sm transition focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/20';

async function parseApiPayload(response: Response): Promise<ApiPayload> {
  const contentType = response.headers.get('content-type') ?? '';
  const responseClone = response.clone();

  if (contentType.includes('application/json')) {
    try {
      return (await response.json()) as ApiPayload;
    } catch {
      const rawFallback = await responseClone.text();
      const looksLikeHtmlFallback = rawFallback.trimStart().startsWith('<');

      if (looksLikeHtmlFallback) {
        return { error: 'Server returned an unexpected response. Please try again.' };
      }

      return { error: rawFallback || 'Unexpected server response.' };
    }
  }

  const raw = await response.text();
  const looksLikeHtml = raw.trimStart().startsWith('<');

  if (looksLikeHtml) {
    return { error: 'Server returned an unexpected response. Please try again.' };
  }

  return { error: raw || 'Unexpected server response.' };
}

export function QuoteForm() {
  const [state, setState] = useState<State>(initialState);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setState({ status: 'loading', message: 'Submitting quote request...' });

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          projectType: formData.get('projectType'),
          budget: formData.get('budget'),
          timeline: formData.get('timeline'),
          requirements: formData.get('requirements')
        })
      });

      const data = await parseApiPayload(response);

      if (!response.ok) {
        throw new Error(data.error ?? data.message ?? `Quote request failed (${response.status})`);
      }

      setState({ status: 'success', message: data.message ?? 'Quote request submitted successfully.' });
      form.reset();
    } catch (error) {
      setState({ status: 'error', message: error instanceof Error ? error.message : 'Unexpected error' });
    }
  }

  return (
    <form id="quote" onSubmit={handleSubmit} className="space-y-3" aria-busy={state.status === 'loading'}>
      <div>
        <label htmlFor="quote-name" className="text-xs font-medium text-ink/80">
          Name
        </label>
        <input
          id="quote-name"
          name="name"
          type="text"
          placeholder="Your Name"
          autoComplete="name"
          required
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="quote-email" className="text-xs font-medium text-ink/80">
          Email
        </label>
        <input
          id="quote-email"
          name="email"
          type="email"
          placeholder="Email Address"
          autoComplete="email"
          required
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="quote-project-type" className="text-xs font-medium text-ink/80">
          Project Type
        </label>
        <select id="quote-project-type" name="projectType" required className={fieldClass} defaultValue="">
          <option value="" disabled>
            Select project type
          </option>
          <option>Landing Page</option>
          <option>Corporate Website</option>
          <option>SaaS Application</option>
          <option>E-Commerce Store</option>
          <option>Custom Web App</option>
        </select>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <label htmlFor="quote-budget" className="text-xs font-medium text-ink/80">
            Estimated Budget
          </label>
          <input
            id="quote-budget"
            name="budget"
            type="text"
            placeholder="Estimated Budget"
            required
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="quote-timeline" className="text-xs font-medium text-ink/80">
            Desired Timeline
          </label>
          <input
            id="quote-timeline"
            name="timeline"
            type="text"
            placeholder="Desired Timeline"
            required
            className={fieldClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="quote-requirements" className="text-xs font-medium text-ink/80">
          Requirements
        </label>
        <textarea
          id="quote-requirements"
          name="requirements"
          placeholder="Share the detailed requirements, goals, must-have features, and references"
          required
          rows={6}
          className={fieldClass}
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-700"
        disabled={state.status === 'loading'}
      >
        {state.status === 'loading' ? 'Submitting...' : 'Request Quote'}
      </button>
      {state.message ? (
        <p
          role={state.status === 'error' ? 'alert' : 'status'}
          aria-live={state.status === 'error' ? 'assertive' : 'polite'}
          className={`text-xs ${state.status === 'error' ? 'text-red-700' : 'text-accent'}`}
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
