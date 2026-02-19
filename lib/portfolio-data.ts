export type Service = {
  title: string;
  details: string;
  href?: string;
};

export type Project = {
  title: string;
  category: string;
  summary: string;
  stack: string[];
};

export type CustomWebPlatformsContent = {
  intro: string;
  pillars: Array<{
    title: string;
    details: string;
  }>;
  deliverables: string[];
};

export type UIEngineeringContent = {
  intro: string;
  pillars: Array<{
    title: string;
    details: string;
  }>;
  deliverables: string[];
};

export type PerformanceSEOContent = {
  intro: string;
  pillars: Array<{
    title: string;
    details: string;
  }>;
  deliverables: string[];
};

export type LongTermProductSupportContent = {
  intro: string;
  pillars: Array<{
    title: string;
    details: string;
  }>;
  deliverables: string[];
};

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' }
];

export const highlights = [
  { value: '6+', label: 'Years Building on the Web' },
  { value: '80+', label: 'Projects Delivered' },
  { value: '24h', label: 'Average Response Time' },
  { value: '99%', label: 'Client Satisfaction' }
];

export const services: Service[] = [
  {
    title: 'Custom Web Platforms',
    details: 'High-performance websites and apps with architecture designed for scale, observability, and business growth.',
    href: '#custom-web-platforms'
  },
  {
    title: 'UI Engineering',
    details: 'Pixel-accurate interfaces with purposeful interaction design, accessibility compliance, and polished motion.',
    href: '#ui-engineering'
  },
  {
    title: 'Performance & SEO',
    details: 'Core Web Vitals optimization, technical SEO foundations, and measurable speed improvements.',
    href: '#performance-seo'
  },
  {
    title: 'Long-Term Product Support',
    details: 'Maintenance, feature iterations, analytics-driven experiments, and release planning for continuous improvement.',
    href: '#product-support'
  }
];

export const customWebPlatformsContent: CustomWebPlatformsContent = {
  intro:
    'Custom Web Platforms are built for teams that need more than a brochure site. Each platform is engineered around your workflows, users, and growth goals so the product remains fast, maintainable, and extensible over time.',
  pillars: [
    {
      title: 'Platform Architecture',
      details:
        'Modular frontend and backend architecture with clear boundaries, typed APIs, and maintainable repository structure.'
    },
    {
      title: 'Performance-First Delivery',
      details:
        'Optimized rendering strategies, caching, Core Web Vitals tuning, and observability to keep the platform responsive at scale.'
    },
    {
      title: 'Business Workflow Alignment',
      details:
        'Role-based experiences, admin tools, and automations mapped to your internal operations to reduce manual effort.'
    }
  ],
  deliverables: [
    'Product discovery and technical blueprint',
    'UI system and reusable component library',
    'Custom dashboards, integrations, and automation hooks',
    'Deployment pipeline, QA hardening, and monitoring setup'
  ]
};

export const uiEngineeringContent: UIEngineeringContent = {
  intro:
    'UI Engineering focuses on translating product goals into interfaces that feel precise, fast, and intuitive. Every screen is built with reusable components, accessibility standards, and animation systems that elevate usability without adding noise.',
  pillars: [
    {
      title: 'Design-System Thinking',
      details:
        'Reusable component architecture with tokenized spacing, typography, and color patterns for consistency across products.'
    },
    {
      title: 'Interaction Quality',
      details:
        'Purposeful transitions, hover states, and responsive behavior that guide users and improve perceived performance.'
    },
    {
      title: 'Accessibility by Default',
      details:
        'Keyboard-first interactions, semantic markup, and contrast-aware styling to meet modern accessibility expectations.'
    }
  ],
  deliverables: [
    'Component library and UI patterns',
    'Responsive layouts across mobile, tablet, and desktop',
    'Animation and interaction specs for key user flows',
    'Accessibility and UI QA pass before launch'
  ]
};

export const performanceSEOContent: PerformanceSEOContent = {
  intro:
    'Performance & SEO work ensures your website is both discoverable and consistently fast for real users. The approach blends technical SEO implementation with performance engineering so visibility, engagement, and conversion improve together.',
  pillars: [
    {
      title: 'Core Web Vitals Optimization',
      details:
        'LCP, CLS, and INP improvements through asset strategy, rendering optimization, and client-side performance tuning.'
    },
    {
      title: 'Technical SEO Foundations',
      details:
        'Structured data, metadata architecture, clean internal linking, and crawlable page structures for stronger indexing.'
    },
    {
      title: 'Measurement & Iteration',
      details:
        'Search and performance tracking with actionable reporting, then iterative fixes based on real user and ranking signals.'
    }
  ],
  deliverables: [
    'Technical audit for performance and SEO gaps',
    'Page-speed and rendering optimization rollout',
    'Metadata, schema, and indexation improvements',
    'Monitoring dashboards and monthly priority roadmap'
  ]
};

export const longTermProductSupportContent: LongTermProductSupportContent = {
  intro:
    'Long-Term Product Support keeps your platform stable, secure, and commercially effective after launch. The goal is steady product momentum through disciplined maintenance, data-driven iteration, and proactive issue prevention.',
  pillars: [
    {
      title: 'Stability & Maintenance',
      details:
        'Routine updates, dependency management, bug resolution, and uptime-focused monitoring to keep releases reliable.'
    },
    {
      title: 'Continuous Product Iteration',
      details:
        'Feature enhancements and UX refinements prioritized by business value, user feedback, and measurable impact.'
    },
    {
      title: 'Roadmap & Release Cadence',
      details:
        'Structured planning, milestone tracking, and predictable release cycles aligned with your growth objectives.'
    }
  ],
  deliverables: [
    'Monthly maintenance and support cycle',
    'Backlog triage and feature prioritization',
    'Performance and reliability check-ins',
    'Quarterly roadmap review with actionable next steps'
  ]
};

export const projects: Project[] = [
  {
    title: 'Pulse Commerce',
    category: 'E-Commerce Platform',
    summary: 'Redesigned checkout funnel and storefront architecture, improving conversion rates and delivery velocity.',
    stack: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL']
  },
  {
    title: 'Lumen SaaS Dashboard',
    category: 'B2B SaaS',
    summary: 'Built a data-dense dashboard with role-aware modules, live activity streams, and actionable analytics.',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'Prisma']
  },
  {
    title: 'Nordic Studio',
    category: 'Creative Agency Site',
    summary: 'Delivered a high-end editorial site with immersive storytelling, motion, and CMS-powered flexibility.',
    stack: ['Next.js', 'Framer Motion', 'Sanity', 'Vercel']
  }
];

export const processSteps = [
  {
    title: 'Discovery',
    text: 'Clarify goals, user needs, success metrics, and constraints before implementation starts.'
  },
  {
    title: 'Blueprint',
    text: 'Translate strategy into architecture, UX flows, component system, and a realistic delivery roadmap.'
  },
  {
    title: 'Build & Iterate',
    text: 'Ship in milestones with continuous QA, performance checks, and feedback loops.'
  },
  {
    title: 'Launch & Scale',
    text: 'Deploy confidently, monitor key metrics, and evolve based on usage insights and growth priorities.'
  }
];

export const testimonials = [
  {
    quote:
      'MERTCAN turned a complex requirement list into a refined product experience, while keeping communication precise and proactive.',
    author: 'Product Lead, Fintech Startup'
  },
  {
    quote:
      'Strong engineering discipline, thoughtful UX, and excellent ownership from planning through launch.',
    author: 'Founder, Digital Agency'
  }
];

export const contactDetails = {
  email: 'hello@mertcan.co.uk',
  whatsappNumber: '447599090900',
  whatsappLabel: '+447599090900',
  location: 'London, UK'
};
