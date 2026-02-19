export function Footer() {
  return (
    <footer className="border-t border-black/10 py-8">
      <div className="section-shell flex flex-col gap-3 text-xs text-ink/60 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} MERTCAN. All rights reserved.</p>
        <p>Built with Next.js + Tailwind CSS.</p>
      </div>
    </footer>
  );
}
