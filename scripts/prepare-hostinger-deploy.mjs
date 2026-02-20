import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const standaloneDir = resolve(root, '.next/standalone');
const staticDir = resolve(root, '.next/static');
const publicDir = resolve(root, 'public');
const outputDir = resolve(root, 'deploy/hostinger');

if (!existsSync(standaloneDir)) {
  throw new Error('Missing .next/standalone. Run "next build" before preparing deployment.');
}

if (!existsSync(staticDir)) {
  throw new Error('Missing .next/static. Build output is incomplete.');
}

rmSync(outputDir, { force: true, recursive: true });
mkdirSync(outputDir, { recursive: true });

// Standalone contains server.js and runtime deps for Next production server.
cpSync(standaloneDir, outputDir, { recursive: true });

// Static assets are required for CSS/JS chunks (including Tailwind output).
const outputNextDir = resolve(outputDir, '.next');
mkdirSync(outputNextDir, { recursive: true });
cpSync(staticDir, resolve(outputNextDir, 'static'), { recursive: true });

if (existsSync(publicDir)) {
  cpSync(publicDir, resolve(outputDir, 'public'), { recursive: true });
}

console.log('Hostinger deployment bundle prepared at deploy/hostinger');
