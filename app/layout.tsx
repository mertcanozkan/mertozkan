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
  metadataBase: new URL('https://mertcan.dev'),
  openGraph: {
    title: 'MERTCAN | Modern Web Developer Portfolio',
    description: 'Performance-focused web developer portfolio with quote and contact workflows.',
    url: 'https://mertcan.dev',
    siteName: 'MERTCAN Portfolio',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MERTCAN | Modern Web Developer Portfolio',
    description: 'Performance-focused web developer portfolio with quote and contact workflows.'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} font-[var(--font-body)] text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
