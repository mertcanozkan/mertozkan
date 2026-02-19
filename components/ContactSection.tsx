import Link from 'next/link';
import { ContactForm } from '@/components/ContactForm';
import { QuoteForm } from '@/components/QuoteForm';
import { Reveal } from '@/components/Reveal';
import { contactDetails } from '@/lib/portfolio-data';

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="section-shell">
        <Reveal>
          <h2 className="section-heading font-[var(--font-heading)]">Let&apos;s Build Your Next Project</h2>
          <p className="section-subtitle">
            Reach out directly, request a detailed quote, or start instantly via WhatsApp.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Reveal className="panel p-6 lg:col-span-1">
            <h3 className="font-[var(--font-heading)] text-xl font-semibold">Direct Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-ink/80">
              <li>
                <span className="block text-xs uppercase tracking-[0.2em] text-ink/50">Email</span>
                <a href={`mailto:${contactDetails.email}`} className="font-medium hover:text-accent">
                  {contactDetails.email}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-[0.2em] text-ink/50">WhatsApp</span>
                <Link
                  href={`https://wa.me/${contactDetails.whatsappNumber}?text=Hi%20MERTCAN%2C%20I%20would%20like%20a%20project%20quote.`}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium hover:text-accent"
                >
                  {contactDetails.whatsappLabel}
                </Link>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-[0.2em] text-ink/50">Location</span>
                <p className="font-medium">{contactDetails.location}</p>
              </li>
            </ul>
            <Link
              href={`https://wa.me/${contactDetails.whatsappNumber}?text=Hi%20MERTCAN%2C%20I%20want%20to%20chat%20about%20a%20project.`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full bg-ink px-5 py-3 text-xs font-semibold tracking-[0.15em] text-white transition hover:-translate-y-0.5"
            >
              WHATSAPP NOW
            </Link>
          </Reveal>

          <Reveal delay={100} className="panel p-6 lg:col-span-1">
            <h3 className="font-[var(--font-heading)] text-xl font-semibold">Send Message</h3>
            <p className="mt-2 text-sm text-ink/70">Use this form for general inquiries or collaboration requests.</p>
            <div className="mt-5">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={180} className="panel p-6 lg:col-span-1">
            <h3 className="font-[var(--font-heading)] text-xl font-semibold">Request a Quote</h3>
            <p className="mt-2 text-sm text-ink/70">Share requirements and get a tailored estimate and delivery plan.</p>
            <div className="mt-5">
              <QuoteForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
