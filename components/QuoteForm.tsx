'use client';

import { FormEvent, useState } from 'react';

type State = {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
};

const initialState: State = { status: 'idle', message: '' };

export function QuoteForm() {
  const [state, setState] = useState<State>(initialState);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

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

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? 'Quote request failed');
      }

      setState({ status: 'success', message: data.message });
      event.currentTarget.reset();
    } catch (error) {
      setState({ status: 'error', message: error instanceof Error ? error.message : 'Unexpected error' });
    }
  }

  return (
    <form id="quote" onSubmit={handleSubmit} className="space-y-3">
      <input
        name="name"
        type="text"
        placeholder="Your Name"
        required
        className="w-full rounded-xl border border-black/15 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-accent"
      />
      <input
        name="email"
        type="email"
        placeholder="Email Address"
        required
        className="w-full rounded-xl border border-black/15 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-accent"
      />
      <select
        name="projectType"
        required
        className="w-full rounded-xl border border-black/15 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-accent"
        defaultValue=""
      >
        <option value="" disabled>
          Project Type
        </option>
        <option>Landing Page</option>
        <option>Corporate Website</option>
        <option>SaaS Application</option>
        <option>E-Commerce Store</option>
        <option>Custom Web App</option>
      </select>
      <div className="grid gap-3 md:grid-cols-2">
        <input
          name="budget"
          type="text"
          placeholder="Estimated Budget"
          required
          className="w-full rounded-xl border border-black/15 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-accent"
        />
        <input
          name="timeline"
          type="text"
          placeholder="Desired Timeline"
          required
          className="w-full rounded-xl border border-black/15 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-accent"
        />
      </div>
      <textarea
        name="requirements"
        placeholder="Share the detailed requirements, goals, must-have features, and references"
        required
        rows={6}
        className="w-full rounded-xl border border-black/15 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-accent"
      />
      <button
        type="submit"
        className="w-full rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-700"
        disabled={state.status === 'loading'}
      >
        {state.status === 'loading' ? 'Submitting...' : 'Request Quote'}
      </button>
      {state.message ? (
        <p className={`text-xs ${state.status === 'error' ? 'text-red-600' : 'text-accent'}`}>{state.message}</p>
      ) : null}
    </form>
  );
}
