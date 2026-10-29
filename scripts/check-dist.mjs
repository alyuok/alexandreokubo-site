// Conferência do build: links internos quebrados e páginas fora do sitemap.
// Uso: npm run build && npm run check (ou PREVIEW_DRAFTS=1 npm run build && npm run check)
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = 'dist';
const SITE = 'https://alexandreokubo.com.br';

if (!existsSync(DIST)) {
  console.error('Pasta dist não encontrada. Rode o build antes.');
  process.exit(1);
}

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const htmlFiles = walk(DIST).filter((f) => f.endsWith('.html'));
const pageUrl = (file) => '/' + relative(DIST, file).replace(/index\.html$/, '').replace(/\\/g, '/');

// Um caminho interno existe se houver o arquivo ou o index.html da pasta.
const exists = (path) => {
  const clean = decodeURI(path.split(/[?#]/)[0]);
  const target = join(DIST, clean);
  if (clean.endsWith('/')) return existsSync(join(target, 'index.html'));
  return existsSync(target) && statSync(target).isFile();
};

const broken = [];
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  for (const [, attr, url] of html.matchAll(/\s(href|src)="(\/(?!\/)[^"]*)"/g)) {
    if (!exists(url)) broken.push(`${pageUrl(file)} → ${attr}="${url}"`);
  }
}

const sitemap = existsSync(join(DIST, 'sitemap-0.xml')) ? readFileSync(join(DIST, 'sitemap-0.xml'), 'utf8') : '';
const inSitemap = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(SITE, '')));
const pages = htmlFiles.map(pageUrl).filter((u) => !u.startsWith('/404'));
const missing = pages.filter((u) => !inSitemap.has(u));
const orphan = [...inSitemap].filter((u) => !exists(u));

const report = (label, list) => {
  if (!list.length) return;
  console.error(`\n${label} (${list.length}):`);
  list.forEach((l) => console.error('  ' + l));
};
report('Links internos quebrados', broken);
report('Páginas fora do sitemap', missing);
report('URLs do sitemap sem página', orphan);

const errors = broken.length + missing.length + orphan.length;
console.log(`\n${pages.length} páginas conferidas, ${inSitemap.size} URLs no sitemap, ${errors} problema(s).`);
process.exit(errors ? 1 : 0);
