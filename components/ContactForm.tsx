'use client';

import { FormEvent, useState } from 'react';

type State = {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
};

const initialState: State = { status: 'idle', message: '' };
const fieldClass =
  'mt-1 w-full rounded-xl border border-black/15 bg-white/70 px-4 py-3 text-sm transition focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/20';

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
    <form onSubmit={handleSubmit} className="space-y-3" aria-busy={state.status === 'loading'}>
      <div>
        <label htmlFor="contact-name" className="text-xs font-medium text-ink/80">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          placeholder="Your Name"
          autoComplete="name"
          required
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="text-xs font-medium text-ink/80">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          placeholder="Email Address"
          autoComplete="email"
          required
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="text-xs font-medium text-ink/80">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Tell me about your project"
          required
          rows={5}
          className={fieldClass}
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-black"
        disabled={state.status === 'loading'}
      >
        {state.status === 'loading' ? 'Sending...' : 'Send Message'}
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
