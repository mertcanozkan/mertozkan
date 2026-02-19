'use client';

import { useEffect, useState } from 'react';

const THEME_KEY = 'theme-preference';

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M14.77 4.2a.75.75 0 0 1 .35 1.02A7.5 7.5 0 1 0 18.78 16a.75.75 0 0 1 .97.98 9 9 0 1 1-4.98-12.44Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M12 7.75a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5Zm0-5a.75.75 0 0 1 .75.75V5a.75.75 0 0 1-1.5 0V3.5a.75.75 0 0 1 .75-.75Zm0 16.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V20a.75.75 0 0 1 .75-.75ZM4.22 5.28a.75.75 0 0 1 1.06 0l1.06 1.06a.75.75 0 1 1-1.06 1.06L4.22 6.34a.75.75 0 0 1 0-1.06Zm13.44 13.44a.75.75 0 0 1 1.06 0l1.06 1.06a.75.75 0 1 1-1.06 1.06l-1.06-1.06a.75.75 0 0 1 0-1.06ZM2.75 12a.75.75 0 0 1 .75-.75H5a.75.75 0 0 1 0 1.5H3.5a.75.75 0 0 1-.75-.75Zm16.25 0a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 19 12ZM5.28 19.78a.75.75 0 0 1 0-1.06l1.06-1.06a.75.75 0 1 1 1.06 1.06l-1.06 1.06a.75.75 0 0 1-1.06 0Zm13.44-13.44a.75.75 0 0 1 0-1.06l1.06-1.06a.75.75 0 1 1 1.06 1.06l-1.06 1.06a.75.75 0 0 1-1.06 0Z" />
    </svg>
  );
}

export function ThemeToggleButton() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    setIsDark(root.classList.contains('dark'));
    setMounted(true);
  }, []);

  function toggleTheme() {
    const nextValue = !isDark;
    const root = document.documentElement;
    root.classList.toggle('dark', nextValue);
    localStorage.setItem(THEME_KEY, nextValue ? 'dark' : 'light');
    setIsDark(nextValue);
  }

  if (!mounted) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="fixed bottom-6 left-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/15 bg-white/90 text-ink shadow-panel backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-accent/60 hover:text-accent dark:border-white/20 dark:bg-[#151b1f]/90 dark:text-white"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
