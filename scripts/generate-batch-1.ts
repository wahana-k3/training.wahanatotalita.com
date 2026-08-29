import fs from 'fs';
import path from 'path';
import { PageMeta, TopicQueue } from '../src/lib/types';
import { batch1Data } from './batch1-dataset';

// Path constants
const QUEUE_FILE = path.join(__dirname, '../content/topic-queue.json');
const CONTENT_DIR = path.join(__dirname, '../src/content/pages');
const CONTENT_INDEX_FILE = path.join(__dirname, '../src/content/index.ts');

async function runBatch1Generator() {
  console.log('====================================================');
  console.log('🚀 GENERATING BATCH 1 (33 HIGH-RISK OPERATIONS PAGES)');
  console.log('====================================================\n');

  // 1. Read existing topic-queue.json
  const topicQueue: TopicQueue = JSON.parse(fs.readFileSync(QUEUE_FILE, 'utf8'));

  // Ensure content directory exists
  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
  }

  const existingLiveKeys = new Set(topicQueue.sections.live.map((p) => p.key));
  let addedCount = 0;

  // 2. Iterate and generate each Batch 1 page
  for (let i = 0; i < batch1Data.length; i++) {
    const data = batch1Data[i];
    const prevKey = i > 0 ? batch1Data[i - 1].key : 'kategori-pelatihan';
    const nextKey = i < batch1Data.length - 1 ? batch1Data[i + 1].key : 'manajemen-sdm';

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
      batch: 'batch-1-high-risk-operations',
    };

    // Update topic queue
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

    // 3. Write individual page content file
    const contentFilePath = path.join(CONTENT_DIR, `${data.key}.ts`);
    const fileContent = `import { PageContentData } from '@/lib/types';

export const content: PageContentData = {
  key: ${JSON.stringify(data.key)},
  updated: "2026-08-29",
  faq: ${JSON.stringify(data.faq, null, 2)},
  html: ${JSON.stringify(data.html)}
};
`;
    fs.writeFileSync(contentFilePath, fileContent, 'utf8');
    console.log(`✅ [Created Content]: ${data.key}.ts`);
  }

  // Update summary counts
  topicQueue.summary.total_live = topicQueue.sections.live.length;
  fs.writeFileSync(QUEUE_FILE, JSON.stringify(topicQueue, null, 2), 'utf8');
  console.log(`\n🎉 Stored ${batch1Data.length} Batch 1 pages in topic-queue.json (Total Live: ${topicQueue.summary.total_live})`);

  // 4. Update src/content/index.ts
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

runBatch1Generator().catch((err) => {
  console.error('Error generating Batch 1:', err);
  process.exit(1);
});
