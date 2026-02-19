import Image from 'next/image';
import Link from 'next/link';
import { contactDetails, highlights } from '@/lib/portfolio-data';
import { Reveal } from '@/components/Reveal';

const heroImage =
  'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=2000';

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative min-h-screen overflow-hidden pb-12 pt-36 md:pt-44">
      <Image
        src={heroImage}
        alt="Modern workspace with laptop for web development"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0b1110]/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.24),transparent_40%)]" />

      <div className="section-shell relative z-10 grid-layer">
        <Reveal className="max-w-3xl">
          <p className="font-[var(--font-heading)] text-xs tracking-[0.35em] text-white/80">WEB DEVELOPER PORTFOLIO</p>
          <h1 id="hero-title" className="mt-5 font-[var(--font-heading)] text-5xl font-semibold leading-tight text-white md:text-7xl">
            MERTCAN
            <span className="block text-white/70">Building digital products that feel sharp and scale cleanly.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-sm text-white/80 md:text-base">
            Modern full-stack web development with performance-first engineering, premium interface design, and clear delivery
            structure for startups, agencies, and product teams.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="#quote"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-white/90 focus-visible:outline-white"
            >
              Request a Quote
            </Link>
            <Link
              href={`https://wa.me/${contactDetails.whatsappNumber}?text=Hi%20MERTCAN%2C%20I%20want%20to%20discuss%20a%20web%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp about a project (opens in a new tab)"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white focus-visible:outline-white"
            >
              WhatsApp Chat
            </Link>
          </div>
        </Reveal>

        <Reveal delay={180} className="mt-14 grid gap-4 md:grid-cols-4">
          {highlights.map((item) => (
            <article key={item.label} className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-sm">
              <p className="text-2xl font-semibold text-white md:text-3xl">{item.value}</p>
              <p className="mt-1 text-xs text-white/75">{item.label}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
