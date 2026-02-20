import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const preferredDistDir = process.env.HOSTINGER_BUNDLE === '1' ? 'next' : '.next';
const distDirCandidates = [preferredDistDir, '.next', 'next'].filter((value, index, list) => list.indexOf(value) === index);

const distDirName = distDirCandidates.find((dirName) => {
  const standalonePath = resolve(root, `${dirName}/standalone`);
  const staticPath = resolve(root, `${dirName}/static`);

  return existsSync(standalonePath) && existsSync(staticPath);
});

if (!distDirName) {
  throw new Error('Missing Next.js build output. Run "next build" before preparing deployment.');
}

const standaloneDir = resolve(root, `${distDirName}/standalone`);
const staticDir = resolve(root, `${distDirName}/static`);
const publicDir = resolve(root, 'public');
const outputDir = resolve(root, 'deploy/hostinger');

rmSync(outputDir, { force: true, recursive: true });
mkdirSync(outputDir, { recursive: true });

// Standalone contains server.js and runtime deps for Next production server.
cpSync(standaloneDir, outputDir, { recursive: true });

// Static assets are required for CSS/JS chunks (including Tailwind output).
const outputNextDir = resolve(outputDir, distDirName);
mkdirSync(outputNextDir, { recursive: true });
cpSync(staticDir, resolve(outputNextDir, 'static'), { recursive: true });

if (existsSync(publicDir)) {
  cpSync(publicDir, resolve(outputDir, 'public'), { recursive: true });
}

console.log('Hostinger deployment bundle prepared at deploy/hostinger');
