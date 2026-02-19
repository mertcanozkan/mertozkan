import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { services } from '@/lib/portfolio-data';

export function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-title" className="py-24">
      <div className="section-shell">
        <Reveal>
          <h2 id="services-title" className="section-heading font-[var(--font-heading)]">
            Services
          </h2>
          <p className="section-subtitle">End-to-end web development support from product strategy to production deployment.</p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={120 * index}>
              {service.href ? (
                <Link href={service.href} className="block h-full focus-visible:rounded-3xl">
                  <article className="panel group h-full p-6 transition hover:-translate-y-1 hover:border-accent/40">
                    <h3 className="font-[var(--font-heading)] text-xl font-semibold">{service.title}</h3>
                    <p className="mt-3 text-sm text-ink/70">{service.details}</p>
                    <span className="mt-6 inline-block text-xs font-semibold tracking-[0.15em] text-accent transition group-hover:tracking-[0.2em]">
                      VIEW SERVICE DETAILS
                    </span>
                  </article>
                </Link>
              ) : (
                <article className="panel group h-full p-6 transition hover:-translate-y-1 hover:border-accent/40">
                  <h3 className="font-[var(--font-heading)] text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm text-ink/70">{service.details}</p>
                  <span className="mt-6 inline-block text-xs font-semibold tracking-[0.15em] text-accent transition group-hover:tracking-[0.2em]">
                    SCALABLE DELIVERY
                  </span>
                </article>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
