import { Reveal } from '@/components/Reveal';
import { performanceSEOContent } from '@/lib/portfolio-data';

export function PerformanceSEOSection() {
  return (
    <section id="performance-seo" aria-labelledby="performance-seo-title" className="scroll-mt-28 pb-8 pt-2 md:scroll-mt-32">
      <div className="section-shell">
        <Reveal>
          <div className="panel p-7 md:p-10">
            <p className="text-xs font-semibold tracking-[0.2em] text-accent">PERFORMANCE & SEO</p>
            <h2 id="performance-seo-title" className="mt-3 font-[var(--font-heading)] text-3xl font-semibold tracking-tight md:text-4xl">
              Fast, indexable, and conversion-ready web experiences
            </h2>
            <p className="mt-5 max-w-3xl text-sm text-ink/75 md:text-base">{performanceSEOContent.intro}</p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {performanceSEOContent.pillars.map((pillar, index) => (
                <Reveal key={pillar.title} delay={90 * index}>
                  <article className="rounded-2xl border border-black/10 bg-white/70 p-5">
                    <h3 className="font-[var(--font-heading)] text-lg font-semibold">{pillar.title}</h3>
                    <p className="mt-2 text-sm text-ink/70">{pillar.details}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={220}>
              <div className="mt-8 rounded-2xl border border-black/10 bg-canvas/80 p-5">
                <h3 className="font-[var(--font-heading)] text-xl font-semibold">What You Get</h3>
                <ul className="mt-4 grid gap-3 text-sm text-ink/75 md:grid-cols-2">
                  {performanceSEOContent.deliverables.map((item) => (
                    <li key={item} className="rounded-xl border border-black/10 bg-white/80 px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
