import { BackToTopButton } from '@/components/BackToTopButton';
import { ContactSection } from '@/components/ContactSection';
import { CustomWebPlatformsSection } from '@/components/CustomWebPlatformsSection';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { LongTermProductSupportSection } from '@/components/LongTermProductSupportSection';
import { PerformanceSEOSection } from '@/components/PerformanceSEOSection';
import { ProcessSection } from '@/components/ProcessSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ThemeToggleButton } from '@/components/ThemeToggleButton';
import { UIEngineeringSection } from '@/components/UIEngineeringSection';

export default function HomePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://www.mertcan.co.uk/#website',
        name: 'MERTCAN Portfolio',
        url: 'https://www.mertcan.co.uk',
        inLanguage: 'en-GB'
      },
      {
        '@type': 'Person',
        '@id': 'https://www.mertcan.co.uk/#person',
        name: 'MERTCAN',
        jobTitle: 'Web Developer',
        url: 'https://www.mertcan.co.uk',
        email: 'hello@mertcan.co.uk',
        worksFor: {
          '@type': 'Organization',
          name: 'MERTCAN'
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'sales',
            email: 'hello@mertcan.co.uk',
            telephone: '+447599090900',
            areaServed: 'GB'
          }
        ],
        knowsAbout: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Web Performance', 'Technical SEO']
      }
    ]
  };

  return (
    <main id="main-content" tabIndex={-1} className="overflow-x-clip">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />
      <Hero />
      <ServicesSection />
      <CustomWebPlatformsSection />
      <UIEngineeringSection />
      <PerformanceSEOSection />
      <LongTermProductSupportSection />
      <ProjectsSection />
      <ProcessSection />
      <ContactSection />
      <ThemeToggleButton />
      <BackToTopButton />
      <Footer />
    </main>
  );
}
