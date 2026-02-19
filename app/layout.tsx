import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading'
});

export const metadata: Metadata = {
  title: 'MERTCAN | Modern Web Developer Portfolio',
  description:
    'Modern Next.js portfolio for MERTCAN featuring premium UI motion, project showcases, and streamlined quote/contact workflows.',
  applicationName: 'MERTCAN Portfolio',
  manifest: '/manifest.webmanifest',
  metadataBase: new URL('https://www.mertcan.co.uk'),
  alternates: {
    canonical: 'https://www.mertcan.co.uk'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  authors: [{ name: 'MERTCAN', url: 'https://www.mertcan.co.uk' }],
  creator: 'MERTCAN',
  publisher: 'MERTCAN',
  openGraph: {
    title: 'MERTCAN | Modern Web Developer Portfolio',
    description: 'Performance-focused web developer portfolio with quote and contact workflows.',
    url: 'https://www.mertcan.co.uk',
    siteName: 'MERTCAN Portfolio',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=2000',
        width: 2000,
        height: 1200,
        alt: 'Modern workspace with laptop for web development'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MERTCAN | Modern Web Developer Portfolio',
    description: 'Performance-focused web developer portfolio with quote and contact workflows.',
    images: ['https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=2000']
  },
  keywords: [
    'Web Developer London',
    'Next.js Developer',
    'UI Engineering',
    'Performance SEO',
    'Custom Web Platforms'
  ]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} font-[var(--font-body)] text-ink antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(()=>{try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('motion-safe')}}catch(_){}})();"
          }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
