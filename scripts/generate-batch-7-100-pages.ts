import * as fs from 'fs';
import * as path from 'path';
import { MultiArchetypeProgramDetail, renderMultiArchetypeHtml } from './multi-archetype-renderer';

// Import all Cluster datasets
import { batch7RegionalPages } from './batch7-part1-regional';
import { batch7RegionalPagesPart2 } from './batch7-part1-regional-part2';
import { batch7ReplacementPages } from './batch7-part1-regional-replacement';
import { batch7HeavyEquipmentPages } from './batch7-part2-heavy-equipment';
import { batch7HeavyEquipmentPagesPart2 } from './batch7-part2-heavy-equipment-part2';
import { batch7HeavyEquipmentPagesPart3 } from './batch7-part2-heavy-equipment-part3';
import { batch7HeavyEquipmentPagesPart4 } from './batch7-part2-heavy-equipment-part4';
import { batch7CompliancePages } from './batch7-part3-compliance';
import { batch7CompliancePagesPart2 } from './batch7-part3-compliance-part2';
import { batch7CompliancePagesPart3 } from './batch7-part3-compliance-part3';
import { batch7LeadershipPages } from './batch7-part4-leadership';
import { batch7LeadershipPagesPart2 } from './batch7-part4-leadership-part2';
import { batch7LeadershipPagesPart3 } from './batch7-part4-leadership-part3';

// Filter out any key that was already in legacy batches
const legacyDuplicateKeys = new Set([
  'in-house-training-k3-batam',
  'in-house-training-k3-cilegon',
  'in-house-training-k3-morowali',
  'in-house-training-k3-balikpapan',
  'in-house-training-k3-samarinda',
  'in-house-training-k3-medan',
  'in-house-training-k3-makassar',
  'in-house-training-k3-pasuruan',
  'in-house-training-k3-palembang',
  'in-house-training-k3-pekanbaru',
  'in-house-training-k3-bontang',
  'in-house-training-k3-timika',
  'pemeriksaan-kesehatan-kerja-mcu'
]);

const raw100Pages: MultiArchetypeProgramDetail[] = [
  ...batch7RegionalPages,
  ...batch7RegionalPagesPart2,
  ...batch7HeavyEquipmentPages,
  ...batch7HeavyEquipmentPagesPart2,
  ...batch7HeavyEquipmentPagesPart3,
  ...batch7HeavyEquipmentPagesPart4,
  ...batch7CompliancePages,
  ...batch7CompliancePagesPart2,
  ...batch7CompliancePagesPart3,
  ...batch7LeadershipPages,
  ...batch7LeadershipPagesPart2,
  ...batch7LeadershipPagesPart3
];

const deduplicatedPages = raw100Pages.filter(p => !legacyDuplicateKeys.has(p.key));
const all100Pages: MultiArchetypeProgramDetail[] = [
  ...deduplicatedPages,
  ...batch7ReplacementPages
];


console.log(`[Batch 7 Generator] Total programs to generate: ${all100Pages.length}`);

if (all100Pages.length !== 100) {
  console.warn(`[Warning] Expected 100 pages, got ${all100Pages.length}`);
}

const pagesDir = path.join(process.cwd(), 'src', 'content', 'pages');
const contentIndexPath = path.join(process.cwd(), 'src', 'content', 'index.ts');
const topicQueuePath = path.join(process.cwd(), 'content', 'topic-queue.json');

// 1. Generate individual page .ts files
let generatedCount = 0;
for (const detail of all100Pages) {
  const html = renderMultiArchetypeHtml(detail);
  const pageTsContent = `import { PageContentData } from '../types';

export const content: PageContentData = {
  title: ${JSON.stringify(detail.title)},
  description: ${JSON.stringify(detail.meta)},
  html: ${JSON.stringify(html)},
  headings: [
    { id: 'latar-belakang-dasar-hukum', text: 'Latar Belakang & Kerangka Hukum', level: 2 },
    { id: 'analisis-risiko-bahaya', text: 'Analisis Risiko & Identifikasi Bahaya Kritis', level: 2 },
    { id: 'struktur-silabus-pelatihan', text: 'Struktur Kurikulum & Silabus Pelatihan', level: 2 },
    { id: 'standar-kompetensi-teknis', text: 'Standar Parameter & Matriks Teknis', level: 2 },
    { id: 'peralatan-praktik-simulator', text: 'Peralatan Praktik & Simulator Pengujian', level: 2 },
    { id: 'peserta-wajib-persyaratan', text: 'Peserta yang Wajib Mengikuti Pelatihan', level: 2 },
    { id: 'studi-kasus-implementasi', text: 'Studi Kasus Implementasi Nyata di Lapangan', level: 2 },
    { id: 'tahapan-pelaksanaan-sertifikasi', text: 'Tahapan & Alur Pelaksanaan Sertifikasi', level: 2 },
    { id: 'pertanyaan-sering-diajukan', text: 'Pertanyaan yang Sering Diajukan (FAQ)', level: 2 }
  ],
  faq: [
    {
      q: 'Berapa lama durasi pelaksanaan pelatihan dan sertifikasi ini?',
      a: 'Durasi berkisar antara 2 hingga 4 hari kerja intensif (16 - 32 Jam Pelajaran @ 45 menit) yang memadukan materi teori regulasi, workshop studi kasus, dan ujian praktik operasional di lapangan.'
    },
    {
      q: 'Apakah sertifikat yang diterbitkan resmi diakui oleh Kementerian / BNSP?',
      a: 'Ya, seluruh sertifikat dan lisensi diterbitkan secara resmi oleh Kementerian Ketenagakerjaan RI (Kemnaker) / Badan Nasional Sertifikasi Profesi (BNSP) sesuai skema yang didaftarkan.'
    },
    {
      q: 'Apakah pelatihan ini dapat diselenggarakan secara In-House di lokasi perusahaan kami?',
      a: 'Ya, kami melayani program In-House Training yang disesuaikan secara khusus dengan kondisi fasilitas, mesin, dan SOP operasional internal perusahaan Anda di seluruh wilayah Indonesia.'
    }
  ]
};
`;

  const filePath = path.join(pagesDir, `${detail.key}.ts`);
  fs.writeFileSync(filePath, pageTsContent, 'utf-8');
  generatedCount++;
}

console.log(`[Batch 7 Generator] Successfully wrote ${generatedCount} page files in ${pagesDir}`);

// 2. Update src/content/index.ts
let contentIndexStr = fs.readFileSync(contentIndexPath, 'utf-8');

for (const detail of all100Pages) {
  const lineToInsert = `  '${detail.key}': () => import('./pages/${detail.key}'),`;
  if (!contentIndexStr.includes(`'${detail.key}':`)) {
    // Insert before the closing bracket of contentLoaders object
    const targetPattern = 'export const contentLoaders: Record<string, () => Promise<{ content: PageContentData }>> = {';
    if (contentIndexStr.includes(targetPattern)) {
      contentIndexStr = contentIndexStr.replace(
        targetPattern,
        `${targetPattern}\n${lineToInsert}`
      );
    }
  }
}

fs.writeFileSync(contentIndexPath, contentIndexStr, 'utf-8');
console.log(`[Batch 7 Generator] Updated ${contentIndexPath} with loader entries`);

// 3. Update content/topic-queue.json
const topicQueue: any = JSON.parse(fs.readFileSync(topicQueuePath, 'utf-8'));
if (!topicQueue.sections) {
  topicQueue.sections = { live: [] };
}
if (!topicQueue.sections.live) {
  topicQueue.sections.live = [];
}

const existingKeyMap = new Map<string, number>();
topicQueue.sections.live.forEach((item: any, idx: number) => {
  existingKeyMap.set(item.key || item.slug, idx);
});

let queueAdded = 0;
let currentN = topicQueue.sections.live.length + 1;

for (const detail of all100Pages) {
  const pageMetaEntry = {
    key: detail.key,
    n: currentN++,
    path: `${detail.hub}/${detail.key}/`,
    published: '2026-08-29',
    title: detail.title,
    h1: detail.h1,
    meta: detail.meta,
    hub: detail.hub,
    type: 'article',
    prev: '',
    next: '',
    related: detail.related || [],
    money: 'kontak',
    img_alt: detail.imgAlt,
    status: 'live',
    batch: 'batch-7',
    archetype: detail.archetype
  };

  if (existingKeyMap.has(detail.key)) {
    const idx = existingKeyMap.get(detail.key)!;
    topicQueue.sections.live[idx] = pageMetaEntry;
  } else {
    topicQueue.sections.live.push(pageMetaEntry);
    queueAdded++;
  }
}

topicQueue.summary = {
  total_live: topicQueue.sections.live.length,
  total_next_batch: 0,
  total_backlog: 0
};

fs.writeFileSync(topicQueuePath, JSON.stringify(topicQueue, null, 2), 'utf-8');
console.log(`[Batch 7 Generator] Synced all items to ${topicQueuePath} (Total live: ${topicQueue.sections.live.length})`);

