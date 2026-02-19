import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProcessSection } from '@/components/ProcessSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ServicesSection } from '@/components/ServicesSection';

export default function HomePage() {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'MERTCAN',
    jobTitle: 'Web Developer',
    url: 'https://mertcan.dev',
    email: 'hello@mertcan.dev',
    knowsAbout: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Web Performance']
  };

  return (
    <main className="overflow-x-clip">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <Header />
      <Hero />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
