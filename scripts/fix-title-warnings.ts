import fs from 'fs';
import path from 'path';
import { TopicQueue } from '../src/lib/types';

const QUEUE_FILE = path.join(__dirname, '../content/topic-queue.json');

function fixTitles() {
  const queue: TopicQueue = JSON.parse(fs.readFileSync(QUEUE_FILE, 'utf8'));

  const titleMap: Record<string, string> = {
    'pelatihan-korporat-customized': 'Pelatihan Korporat Customized: Kurikulum Berbasis Masalah Nyata',
    'regu-pemadam-kebakaran': 'Pelatihan Regu Pemadam Kebakaran: Sertifikasi K3 Kelas C & B',
    'higiene-industri': 'Pelatihan Higiene Industri: Pengukuran Faktor Bahaya Lingkungan',
    'k3-konstruksi-jembatan-dan-elevated': 'Pelatihan K3 Konstruksi Jembatan & Struktur Melayang Elevated',
    'scaffolding-supervisor': 'Pelatihan Scaffolding Supervisor: Sertifikasi Kemnaker Resmi',
    'in-house-training-k3-cikarang': 'In-House Training K3 Cikarang & Bekasi: MM2100, GIIC, Jababeka',
  };

  const metaMap: Record<string, string> = {
    'training-needs-analysis':
      'Panduan Training Needs Analysis (TNA): 3 level analisis, metode wawancara, DIF analysis, dan cara menerjemahkan hasil TNA ke silabus pelatihan korporat.',
  };

  queue.sections.live.forEach((p) => {
    if (titleMap[p.key]) {
      console.log(`Updated title for [${p.key}]: "${p.title}" -> "${titleMap[p.key]}"`);
      p.title = titleMap[p.key];
    }
    if (metaMap[p.key]) {
      console.log(`Updated meta for [${p.key}]: "${p.meta}" -> "${metaMap[p.key]}"`);
      p.meta = metaMap[p.key];
    }
  });

  fs.writeFileSync(QUEUE_FILE, JSON.stringify(queue, null, 2), 'utf8');
  console.log('✅ Successfully updated all warning titles and meta descriptions.');
}

fixTitles();
