export type Service = {
  title: string;
  details: string;
};

export type Project = {
  title: string;
  category: string;
  summary: string;
  stack: string[];
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
    details: 'High-performance websites and apps with architecture designed for scale, observability, and business growth.'
  },
  {
    title: 'UI Engineering',
    details: 'Pixel-accurate interfaces with purposeful interaction design, accessibility compliance, and polished motion.'
  },
  {
    title: 'Performance & SEO',
    details: 'Core Web Vitals optimization, technical SEO foundations, and measurable speed improvements.'
  },
  {
    title: 'Long-Term Product Support',
    details: 'Maintenance, feature iterations, analytics-driven experiments, and release planning for continuous improvement.'
  }
];

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
