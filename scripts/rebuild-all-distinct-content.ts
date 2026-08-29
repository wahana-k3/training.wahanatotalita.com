import fs from 'fs';
import path from 'path';
import { TopicQueue } from '../src/lib/types';
import { allBatch1Programs } from './complete-batch1-master';
import { batch2List } from './batch2-master-data';
import { batch3List } from './batch3-master-data';
import { batch4List } from './batch4-master-data';
import { batch5List } from './batch5-master-data';
import { batch6List } from './batch6-master-data';
import {
  MultiArchetypeProgramDetail,
  renderMultiArchetypeHtml,
} from './multi-archetype-renderer';

const QUEUE_FILE = path.join(__dirname, '../content/topic-queue.json');
const CONTENT_DIR = path.join(__dirname, '../src/content/pages');

async function rebuildAllDistinctContent() {
  console.log('====================================================');
  console.log('🚀 REBUILDING ALL CONTENT WITH DISTINCT INFORMATION ARCHITECTURES & OPTIMIZED METADATA');
  console.log('====================================================\n');

  const topicQueue: TopicQueue = JSON.parse(fs.readFileSync(QUEUE_FILE, 'utf8'));

  // Merge all program datasets
  const allMasterData: MultiArchetypeProgramDetail[] = [
    ...allBatch1Programs,
    ...batch2List,
    ...batch3List,
    ...batch4List,
    ...batch5List,
    ...batch6List,
  ];

  const dataMap = new Map<string, MultiArchetypeProgramDetail>();
  allMasterData.forEach((d) => {
    dataMap.set(d.key, d);
  });

  let updatedMetaCount = 0;
  let reRenderedCount = 0;

  for (let i = 0; i < topicQueue.sections.live.length; i++) {
    const page = topicQueue.sections.live[i];
    const data = dataMap.get(page.key);

    if (data) {
      data.hub = page.hub;
      data.path = page.path;

      // 1. Standardize Meta Description (Target: 125 - 155 chars)
      let meta = page.meta || data.meta || '';
      if (meta.length > 165) {
        // Clean truncation at last sentence or word boundary
        const trimmed = meta.slice(0, 155);
        const lastPeriod = trimmed.lastIndexOf('.');
        if (lastPeriod > 100) {
          meta = trimmed.slice(0, lastPeriod + 1);
        } else {
          const lastSpace = trimmed.lastIndexOf(' ');
          meta = trimmed.slice(0, lastSpace) + '...';
        }
      } else if (meta.length < 110) {
        meta = `${meta} Konsultasi silabus resmi Kemnaker RI & penawaran in-house via WhatsApp.`;
        if (meta.length > 165) {
          meta = meta.slice(0, 155) + '...';
        }
      }

      page.meta = meta;
      data.meta = meta;
      updatedMetaCount++;

      // 2. Standardize Title Length (Target: 40 - 68 chars)
      if (page.title.length > 70) {
        page.title = page.title.replace(': Panduan Lengkap & Sertifikasi Kemnaker RI', ': Sertifikasi Kemnaker RI')
          .replace(': Panduan Lengkap & Kepatuhan Legalitas Kemnaker', ': Sertifikasi Kemnaker RI')
          .replace(': Panduan & Kualifikasi Resmi Kemnaker RI', ': Lisensi Kemnaker RI')
          .replace(': Regulasi & Kaidah Minerba', ': Regulasi KaIT Minerba');
      }

      // 3. Render HTML using Multi-Archetype Renderer
      const distinctHtml = renderMultiArchetypeHtml(data);

      // 4. Save to content file
      const contentFilePath = path.join(CONTENT_DIR, `${page.key}.ts`);
      const fileContent = `import { PageContentData } from '@/lib/types';

export const content: PageContentData = {
  key: ${JSON.stringify(page.key)},
  updated: "2026-08-29",
  faq: ${JSON.stringify(data.faqs || [], null, 2)},
  html: ${JSON.stringify(distinctHtml)}
};
`;
      fs.writeFileSync(contentFilePath, fileContent, 'utf8');
      reRenderedCount++;
    }
  }

  // Save updated topic queue
  fs.writeFileSync(QUEUE_FILE, JSON.stringify(topicQueue, null, 2), 'utf8');

  console.log(`✅ Standardized metadata for ${updatedMetaCount} pages.`);
  console.log(`🎉 Re-rendered ${reRenderedCount} pages with 5 distinct information architectures!`);
}

rebuildAllDistinctContent().catch((err) => {
  console.error('Rebuild failed:', err);
  process.exit(1);
});
