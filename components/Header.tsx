'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { navItems } from '@/lib/portfolio-data';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuId = 'mobile-primary-nav';

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell py-4">
        <div className="panel flex items-center justify-between px-5 py-3">
          <Link
            href="#home"
            className="inline-flex items-center font-[var(--font-heading)] text-sm tracking-[0.3em]"
            aria-label="MERTCAN Home"
          >
            <span className="font-extrabold text-ink dark:text-white">MERT</span>
            <span className="font-semibold text-accent">CAN</span>
          </Link>
          <button
            type="button"
            className="rounded-full border border-black/10 px-3 py-1 text-xs md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            aria-controls={mobileMenuId}
          >
            MENU
          </button>
          <nav aria-label="Primary" className="hidden items-center gap-5 text-sm md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-accent focus-visible:rounded-sm">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        {isOpen ? (
          <nav id={mobileMenuId} aria-label="Mobile primary" className="panel mt-2 flex flex-col gap-3 px-5 py-4 text-sm md:hidden">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="focus-visible:rounded-sm">
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
