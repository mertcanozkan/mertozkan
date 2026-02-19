import { Reveal } from '@/components/Reveal';
import { projects } from '@/lib/portfolio-data';

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="py-24">
      <div className="section-shell">
        <Reveal>
          <h2 id="projects-title" className="section-heading font-[var(--font-heading)]">
            Featured Work
          </h2>
          <p className="section-subtitle">Selected projects showing technical depth, business alignment, and design quality.</p>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={100 * index}>
              <article className="panel h-full p-6 transition hover:-translate-y-1 hover:border-accent/40">
                <p className="text-xs font-semibold tracking-[0.2em] text-accent">{project.category}</p>
                <h3 className="mt-3 font-[var(--font-heading)] text-2xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm text-ink/70">{project.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-black/15 px-3 py-1 text-xs">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
