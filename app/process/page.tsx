import type { Metadata } from 'next';
import Link from 'next/link';
import { BackToTopButton } from '@/components/BackToTopButton';
import { Footer } from '@/components/Footer';
import { ThemeToggleButton } from '@/components/ThemeToggleButton';
import { contactDetails } from '@/lib/portfolio-data';

const phases = [
  {
    title: 'Discovery & Alignment',
    duration: 'Week 1',
    summary:
      'Set clear goals, define measurable outcomes, and remove ambiguity before a single line of production code is written.',
    points: [
      'Business goals, KPI definitions, and outcome alignment',
      'Technical constraints, dependencies, and risk mapping',
      'Scope breakdown into launch-critical vs future milestones'
    ],
    deliverables: ['Discovery brief', 'Scope map', 'Milestone plan']
  },
  {
    title: 'Product Blueprint',
    duration: 'Week 1-2',
    summary:
      'Translate requirements into architecture and UX flows, so implementation starts with strong structure and no guesswork.',
    points: [
      'Information architecture and key user flow mapping',
      'Component strategy, API/data contracts, and edge-case handling',
      'Acceptance criteria and quality gates for release readiness'
    ],
    deliverables: ['Technical blueprint', 'Component plan', 'QA checklist']
  },
  {
    title: 'Build in Milestones',
    duration: 'Week 2+',
    summary: 'Deliver in focused increments, with frequent demos and continuous validation to keep momentum and quality high.',
    points: [
      'Incremental feature delivery with milestone demos',
      'Continuous QA for accessibility, performance, and regressions',
      'Backlog refinement based on evidence and stakeholder feedback'
    ],
    deliverables: ['Production increments', 'Release notes', 'Test evidence']
  },
  {
    title: 'Launch, Measure, Scale',
    duration: 'Post-launch',
    summary:
      'Launch with confidence, monitor real-world outcomes, then iterate based on behavior, conversion, and product signals.',
    points: [
      'Deployment safeguards, observability, and incident readiness',
      'Core Web Vitals, analytics, and conversion monitoring',
      'Optimization roadmap for growth and long-term maintainability'
    ],
    deliverables: ['Launch report', 'Optimization backlog', '90-day growth plan']
  }
];

const collaboration = [
  { label: 'Cadence', value: 'Weekly strategy sync + delivery checkpoint' },
  { label: 'Communication', value: 'Concise async updates via Slack/WhatsApp' },
  { label: 'Transparency', value: 'Shared backlog, priorities, and milestone ownership' },
  { label: 'Quality Control', value: 'Accessibility, SEO, and performance checks before release' }
];

const faqItems = [
  {
    question: 'How quickly can we start?',
    answer: 'Typically within 3-7 days after requirements are aligned and initial scope is approved.'
  },
  {
    question: 'Can this process work for startups?',
    answer: 'Yes. Milestones are designed for fast iteration while keeping technical quality and scalability intact.'
  },
  {
    question: 'Is post-launch support included?',
    answer: 'Yes. Ongoing support can cover maintenance, roadmap execution, and performance optimization.'
  }
];

export const metadata: Metadata = {
  title: 'Process | MERTCAN',
  description:
    'Detailed web development process used by MERTCAN from discovery to launch and long-term product optimization.',
  alternates: {
    canonical: 'https://www.mertcan.co.uk/process'
  }
};

export default function ProcessPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Web Development Delivery Process',
        provider: {
          '@type': 'Person',
          name: 'MERTCAN',
          url: 'https://www.mertcan.co.uk'
        },
        url: 'https://www.mertcan.co.uk/process',
        areaServed: 'GB'
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqItems.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      }
    ]
  };

  return (
    <main id="main-content" tabIndex={-1} className="overflow-x-clip pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div className="relative overflow-hidden pb-8 pt-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_14%,rgba(15,118,110,0.2),transparent_35%),radial-gradient(circle_at_90%_8%,rgba(10,10,10,0.12),transparent_25%)] dark:bg-[radial-gradient(circle_at_14%_14%,rgba(45,212,191,0.15),transparent_35%),radial-gradient(circle_at_90%_8%,rgba(148,163,184,0.08),transparent_25%)]" />

        <header className="section-shell relative z-10">
          <div className="panel flex flex-wrap items-center justify-between gap-3 px-5 py-4">
            <Link href="/" className="font-[var(--font-heading)] text-sm tracking-[0.2em]">
              <span className="font-extrabold text-ink dark:text-white">MERT</span>
              <span className="font-semibold text-accent">CAN</span>
            </Link>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/"
                className="rounded-full border border-black/15 px-4 py-2 text-xs font-semibold tracking-[0.12em] transition hover:border-accent hover:text-accent"
              >
                BACK TO SITE
              </Link>
              <Link
                href="/#quote"
                className="rounded-full bg-ink px-4 py-2 text-xs font-semibold tracking-[0.12em] text-white transition hover:bg-black"
              >
                REQUEST QUOTE
              </Link>
            </div>
          </div>
        </header>

        <section className="section-shell relative z-10 mt-8 grid-layer" aria-labelledby="process-page-title">
          <div className="panel p-7 md:p-10">
            <p className="text-xs font-semibold tracking-[0.2em] text-accent">IN-DEPTH PROCESS</p>
            <h1 id="process-page-title" className="mt-3 font-[var(--font-heading)] text-4xl font-semibold tracking-tight md:text-6xl">
              Delivery model built for clarity, speed, and scalable outcomes
            </h1>
            <p className="mt-5 max-w-3xl text-sm text-ink/75 md:text-base">
              This page breaks down the full workflow used to plan, build, launch, and continuously improve modern web products.
              Every phase includes explicit outcomes and quality controls.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <span className="rounded-full border border-black/15 px-3 py-1 text-xs font-semibold tracking-[0.12em] text-accent">
                ACCESSIBILITY-FIRST
              </span>
              <span className="rounded-full border border-black/15 px-3 py-1 text-xs font-semibold tracking-[0.12em] text-accent">
                PERFORMANCE-DRIVEN
              </span>
              <span className="rounded-full border border-black/15 px-3 py-1 text-xs font-semibold tracking-[0.12em] text-accent">
                SEO-ALIGNED
              </span>
            </div>
          </div>
        </section>
      </div>

      <section className="section-shell pt-6" aria-labelledby="phase-breakdown-title">
        <h2 id="phase-breakdown-title" className="section-heading font-[var(--font-heading)]">
          Phase Breakdown
        </h2>
        <p className="section-subtitle">A practical step-by-step process from discovery to post-launch optimization.</p>

        <div className="mt-8 grid gap-5">
          {phases.map((phase, index) => (
            <article key={phase.title} className="panel p-6 md:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-sm font-semibold text-accent">
                    {index + 1}
                  </span>
                  <h3 className="font-[var(--font-heading)] text-xl font-semibold md:text-2xl">{phase.title}</h3>
                </div>
                <p className="rounded-full border border-black/15 px-3 py-1 text-xs font-semibold tracking-[0.12em] text-accent">
                  {phase.duration}
                </p>
              </div>

              <p className="mt-4 text-sm text-ink/75">{phase.summary}</p>

              <div className="mt-5 grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
                <ul className="grid gap-2 text-sm text-ink/75">
                  {phase.points.map((point) => (
                    <li key={point} className="rounded-xl border border-black/10 bg-white/70 px-4 py-3">
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="rounded-2xl border border-black/10 bg-canvas/80 p-4">
                  <p className="text-xs font-semibold tracking-[0.14em] text-accent">KEY DELIVERABLES</p>
                  <ul className="mt-3 space-y-2 text-sm text-ink/75">
                    {phase.deliverables.map((item) => (
                      <li key={item} className="rounded-lg border border-black/10 bg-white/80 px-3 py-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell mt-10 grid gap-6 lg:grid-cols-2">
        <article className="panel p-6" aria-labelledby="collaboration-title">
          <h2 id="collaboration-title" className="font-[var(--font-heading)] text-2xl font-semibold">
            Collaboration Model
          </h2>
          <div className="mt-4 space-y-3 text-sm text-ink/75">
            {collaboration.map((item) => (
              <div key={item.label} className="rounded-xl border border-black/10 bg-white/70 px-4 py-3">
                <p className="text-xs font-semibold tracking-[0.13em] text-accent">{item.label}</p>
                <p className="mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="panel p-6" aria-labelledby="faq-title">
          <h2 id="faq-title" className="font-[var(--font-heading)] text-2xl font-semibold">
            Process FAQ
          </h2>
          <div className="mt-4 space-y-3">
            {faqItems.map((faq) => (
              <details key={faq.question} className="rounded-xl border border-black/10 bg-white/70 px-4 py-3">
                <summary className="cursor-pointer text-sm font-semibold">{faq.question}</summary>
                <p className="mt-2 text-sm text-ink/75">{faq.answer}</p>
              </details>
            ))}
          </div>
        </article>
      </section>

      <section className="section-shell mt-10" aria-labelledby="process-cta-title">
        <div className="panel flex flex-col items-start justify-between gap-4 p-6 md:flex-row md:items-center">
          <div>
            <h2 id="process-cta-title" className="font-[var(--font-heading)] text-2xl font-semibold">
              Ready to start your project?
            </h2>
            <p className="mt-1 text-sm text-ink/75">Send your requirements and get a realistic timeline with next steps.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/#quote"
              className="rounded-full bg-accent px-5 py-3 text-xs font-semibold tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:bg-teal-700"
            >
              REQUEST QUOTE
            </Link>
            <Link
              href={`https://wa.me/${contactDetails.whatsappNumber}?text=Hi%20MERTCAN%2C%20I%20want%20to%20discuss%20my%20project%20process.`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-black/15 px-5 py-3 text-xs font-semibold tracking-[0.12em] transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              WHATSAPP CHAT
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ThemeToggleButton />
      <BackToTopButton />
    </main>
  );
}
