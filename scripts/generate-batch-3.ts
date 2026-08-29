import fs from 'fs';
import path from 'path';
import { PageMeta, TopicQueue } from '../src/lib/types';
import { batch3List } from './batch3-master-data';
import { renderProgramHtml } from './master-batch1-data';

const QUEUE_FILE = path.join(__dirname, '../content/topic-queue.json');
const CONTENT_DIR = path.join(__dirname, '../src/content/pages');
const CONTENT_INDEX_FILE = path.join(__dirname, '../src/content/index.ts');

async function runBatch3Generator() {
  console.log('====================================================');
  console.log('🚀 GENERATING BATCH 3 (34 HEALTH, HYGIENE, MINING, AUDITING & SPECIALIZED PAGES)');
  console.log('====================================================\n');

  const topicQueue: TopicQueue = JSON.parse(fs.readFileSync(QUEUE_FILE, 'utf8'));

  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
  }

  const existingLiveKeys = new Set(topicQueue.sections.live.map((p) => p.key));
  let addedCount = 0;

  for (let i = 0; i < batch3List.length; i++) {
    const data = batch3List[i];
    const prevKey = i > 0 ? batch3List[i - 1].key : 'pengendalian-debu-dan-fumigasi';
    const nextKey = i < batch3List.length - 1 ? batch3List[i + 1].key : 'manajemen-sdm';

    const pageMeta: PageMeta = {
      key: data.key,
      n: topicQueue.sections.live.length + 1,
      path: `kategori-pelatihan/${data.key}/`,
      published: '2026-08-29',
      title: data.title,
      h1: data.h1,
      meta: data.meta,
      hub: 'kategori-pelatihan',
      type: 'article',
      prev: prevKey,
      next: nextKey,
      related: data.related,
      money: 'kontak',
      img_alt: data.imgAlt,
      status: 'live',
      batch: 'batch-3-health-hygiene-mining-auditing-specialized',
    };

    if (!existingLiveKeys.has(data.key)) {
      topicQueue.sections.live.push(pageMeta);
      existingLiveKeys.add(data.key);
      addedCount++;
    } else {
      const idx = topicQueue.sections.live.findIndex((p) => p.key === data.key);
      if (idx !== -1) {
        topicQueue.sections.live[idx] = pageMeta;
      }
    }

    // Generate comprehensive HTML body
    const htmlBody = renderProgramHtml(data);
    const contentFilePath = path.join(CONTENT_DIR, `${data.key}.ts`);
    const fileContent = `import { PageContentData } from '@/lib/types';

export const content: PageContentData = {
  key: ${JSON.stringify(data.key)},
  updated: "2026-08-29",
  faq: ${JSON.stringify(data.faqs, null, 2)},
  html: ${JSON.stringify(htmlBody)}
};
`;
    fs.writeFileSync(contentFilePath, fileContent, 'utf8');
    console.log(`✅ [Created Content]: ${data.key}.ts`);
  }

  topicQueue.summary.total_live = topicQueue.sections.live.length;
  fs.writeFileSync(QUEUE_FILE, JSON.stringify(topicQueue, null, 2), 'utf8');
  console.log(`\n🎉 Stored ${batch3List.length} Batch 3 pages in topic-queue.json (Total Live: ${topicQueue.summary.total_live})`);

  // Update src/content/index.ts
  const allPageKeys = topicQueue.sections.live.map((p) => p.key);
  const importsLines = allPageKeys
    .map((k) => `  '${k}': () => import('./pages/${k}'),`)
    .join('\n');

  const contentIndexCode = `import { PageContentData } from '@/lib/types';

// Map of dynamic content loaders
const contentLoaders: Record<string, () => Promise<{ content: PageContentData }>> = {
${importsLines}
};

export async function getPageContent(key: string): Promise<PageContentData | null> {
  const loader = contentLoaders[key];
  if (!loader) return null;
  const mod = await loader();
  return mod.content;
}
`;
  fs.writeFileSync(CONTENT_INDEX_FILE, contentIndexCode, 'utf8');
  console.log('✅ Updated src/content/index.ts with dynamic imports for all pages');
}

runBatch3Generator().catch((err) => {
  console.error('Error generating Batch 3:', err);
  process.exit(1);
});
