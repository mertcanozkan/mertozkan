import { Reveal } from '@/components/Reveal';
import { testimonials } from '@/lib/portfolio-data';

export function TestimonialsSection() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="py-24 bg-black/[0.02] dark:bg-white/[0.02]">
      <div className="section-shell">
        <Reveal>
          <h2 id="testimonials-title" className="section-heading font-[var(--font-heading)] text-center">
            Client Feedback
          </h2>
          <p className="section-subtitle text-center mx-auto max-w-2xl">
            What partners and clients say about the collaboration and results.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:max-w-5xl lg:mx-auto">
          {testimonials.map((item, index) => (
            <Reveal key={item.author} delay={100 * index}>
              <blockquote className="panel h-full p-8 flex flex-col justify-between">
                <p className="text-lg text-ink/80 leading-relaxed font-medium">“{item.quote}”</p>
                <footer className="mt-8 text-sm font-semibold tracking-[0.15em] text-accent uppercase">
                  {item.author}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
