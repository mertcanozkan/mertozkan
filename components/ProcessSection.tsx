import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { processSteps, testimonials } from '@/lib/portfolio-data';

export function ProcessSection() {
  return (
    <section id="process" aria-labelledby="process-title" className="py-24">
      <div className="section-shell">
        <Reveal>
          <h2 id="process-title" className="section-heading font-[var(--font-heading)]">
            Process
          </h2>
          <p className="section-subtitle">A clear, low-friction workflow to keep scope, quality, and momentum aligned.</p>
          <Link
            href="/process"
            className="mt-5 inline-flex rounded-full border border-black/15 px-4 py-2 text-xs font-semibold tracking-[0.13em] text-ink transition hover:-translate-y-0.5 hover:border-accent hover:text-accent dark:text-white"
          >
            VIEW FULL PROCESS
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={90 * index}>
                <article className="panel flex gap-4 p-5">
                  <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-semibold text-accent">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-[var(--font-heading)] text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm text-ink/70">{step.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={220}>
            <div className="panel h-full p-6">
              <h3 className="font-[var(--font-heading)] text-xl font-semibold">Client Feedback</h3>
              <div className="mt-5 space-y-4">
                {testimonials.map((item) => (
                  <blockquote key={item.author} className="rounded-2xl border border-black/10 bg-white/70 p-4">
                    <p className="text-sm text-ink/75">“{item.quote}”</p>
                    <footer className="mt-3 text-xs font-semibold tracking-[0.15em] text-accent">{item.author}</footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
