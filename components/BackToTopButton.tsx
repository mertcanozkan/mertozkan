'use client';

import { useEffect, useState } from 'react';

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsVisible(window.scrollY > 480);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  function scrollToTop() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 rounded-full border border-black/15 bg-white px-4 py-3 text-xs font-semibold tracking-[0.12em] text-ink shadow-panel transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:text-accent focus-visible:border-accent dark:border-white/20 dark:bg-[#151b1f]/90 dark:text-white ${
        isVisible ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      TOP
    </button>
  );
}
