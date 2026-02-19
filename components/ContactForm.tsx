'use client';

import { FormEvent, useState } from 'react';

type State = {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
};

const initialState: State = { status: 'idle', message: '' };

export function ContactForm() {
  const [state, setState] = useState<State>(initialState);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setState({ status: 'loading', message: 'Sending your message...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message')
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? 'Request failed');
      }

      setState({ status: 'success', message: data.message });
      event.currentTarget.reset();
    } catch (error) {
      setState({ status: 'error', message: error instanceof Error ? error.message : 'Unexpected error' });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
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
      <textarea
        name="message"
        placeholder="Tell me about your project"
        required
        rows={5}
        className="w-full rounded-xl border border-black/15 bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-accent"
      />
      <button
        type="submit"
        className="w-full rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-black"
        disabled={state.status === 'loading'}
      >
        {state.status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
      {state.message ? (
        <p className={`text-xs ${state.status === 'error' ? 'text-red-600' : 'text-accent'}`}>{state.message}</p>
      ) : null}
    </form>
  );
}
