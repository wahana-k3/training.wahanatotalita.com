import * as fs from 'fs';
import * as path from 'path';

const pagesDir = path.join(process.cwd(), 'src', 'content', 'pages');
const contentIndexPath = path.join(process.cwd(), 'src', 'content', 'index.ts');
const topicQueuePath = path.join(process.cwd(), 'content', 'topic-queue.json');

// 1. Read all files in src/content/pages
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.ts'));
console.log(`Found ${files.length} content files in ${pagesDir}`);

// 2. Fix broken links across all files
const linkFixes: [RegExp, string][] = [
  [/href="\/kategori-pelatihan\/pelatihan-k3-balikpapan-ikn\/"/g, 'href="/kategori-pelatihan/in-house-training-k3-balikpapan/"'],
  [/href="\/kategori-pelatihan\/pelatihan-k3-batam-kepri\/"/g, 'href="/kategori-pelatihan/in-house-training-k3-batam/"'],
  [/href="\/pelatihan\/tkbt-ii-surabaya\/"/g, 'href="/kategori-pelatihan/tenaga-kerja-bangunan-tinggi-tkbt/"'],
  [/href="\/kategori-pelatihan\/ahli-k3-umum-kemnaker\/"/g, 'href="/kategori-pelatihan/ahli-k3-umum/"'],
  [/href="\/industri\/makanan-dan-minuman-fnb\/"/g, 'href="/industri/makanan-minuman-dan-fmcg/"'],
  [/https:\/\/wahanatotalita\.com\//g, '/'],
];

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;
  for (const [pattern, replacement] of linkFixes) {
    content = content.replace(pattern, replacement);
  }
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`[Link Fixed] ${file}`);
  }
}

// 3. Generate src/content/index.ts
const loaderEntries = files.map(file => {
  const key = file.replace(/\.ts$/, '');
  return `  '${key}': () => import('./pages/${key}'),`;
}).join('\n');

const indexContent = `import { PageContentData } from '@/lib/types';

// Map of dynamic content loaders
const contentLoaders: Record<string, () => Promise<{ content: PageContentData }>> = {
${loaderEntries}
};

export async function getPageContent(key: string): Promise<PageContentData | null> {
  const loader = contentLoaders[key];
  if (!loader) return null;
  const mod = await loader();
  return mod.content;
}
`;

fs.writeFileSync(contentIndexPath, indexContent, 'utf-8');
console.log(`[Content Index] Generated ${contentIndexPath} with ${files.length} loaders`);

// 4. Update topic-queue.json
const topicQueue = JSON.parse(fs.readFileSync(topicQueuePath, 'utf-8'));
const queueKeys = new Set(topicQueue.sections.live.map((p: any) => p.key));

// Fix any slug to key in topicQueue
topicQueue.sections.live.forEach((p: any) => {
  if (!p.key && p.slug) {
    p.key = p.slug;
  }
  if (p.key === 'lisensi-operator-forklift-kemnaker' && p.path === 'kategori-pelatihan/lisensi-operator-forklift-kemnaker/') {
    // ok
  }
});

topicQueue.summary = {
  total_live: topicQueue.sections.live.length,
  total_next_batch: 0,
  total_backlog: 0
};

fs.writeFileSync(topicQueuePath, JSON.stringify(topicQueue, null, 2), 'utf-8');
console.log(`[Topic Queue] Synced ${topicQueue.sections.live.length} live pages`);
