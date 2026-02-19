'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navItems } from '@/lib/portfolio-data';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell py-4">
        <div className="panel flex items-center justify-between px-5 py-3">
          <Link href="#home" className="font-[var(--font-heading)] text-sm font-semibold tracking-[0.3em]">
            MERTCAN
          </Link>
          <button
            type="button"
            className="rounded-full border border-black/10 px-3 py-1 text-xs md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            MENU
          </button>
          <nav className="hidden items-center gap-5 text-sm md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-accent">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        {isOpen ? (
          <nav className="panel mt-2 flex flex-col gap-3 px-5 py-4 text-sm md:hidden">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
