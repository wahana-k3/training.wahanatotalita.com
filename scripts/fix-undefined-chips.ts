import * as fs from 'fs';
import * as path from 'path';

const repoRoot = 'c:/Users/ASUS/Pictures/pena_platform';
const topicQueuePath = path.join(repoRoot, 'content', 'topic-queue.json');
const topicQueue = JSON.parse(fs.readFileSync(topicQueuePath, 'utf8'));
const livePages = topicQueue.sections.live;

const pagesDir = path.join(repoRoot, 'src', 'content', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.ts'));

// 1. Build a comprehensive path-to-label map
const pathToLabel = new Map<string, string>();

// Fallback label cleaner
function cleanTitle(title: string, h1?: string): string {
  if (!title) return 'Pelatihan Terkait';
  // If title has a colon, usually the main topic name is before the colon
  let clean = title;
  if (clean.includes(':')) {
    clean = clean.split(':')[0].trim();
  }
  // Remove trailing "— ..." or "- ..."
  if (clean.includes('—')) {
    clean = clean.split('—')[0].trim();
  }
  if (clean.includes(' - ')) {
    clean = clean.split(' - ')[0].trim();
  }
  // Remove boilerplate prefix if needed or keep concise
  clean = clean.replace(/^Pelatihan\s+Pelatihan\s+/i, 'Pelatihan ');
  return clean.trim();
}

// Populate from topic queue
livePages.forEach((p: any) => {
  const normPath = '/' + p.path.replace(/^\/|\/$/g, '') + (p.path === '' ? '' : '/');
  const label = cleanTitle(p.title, p.h1);
  pathToLabel.set(normPath, label);
  pathToLabel.set(normPath.replace(/\/$/, ''), label);
  pathToLabel.set(p.key, label);
});

// Add explicit static & hub routes
const standardLabels: Record<string, string> = {
  '/': 'Beranda Pelatihan Korporat',
  '/jenis-pelatihan/': 'Jenis Pelatihan Korporat',
  '/jenis-pelatihan/in-house-training/': 'Layanan In-House Training Korporat',
  '/jenis-pelatihan/pelatihan-publik/': 'Pelatihan Publik Korporat',
  '/jenis-pelatihan/pelatihan-korporat-customized/': 'Pelatihan Korporat Customized',
  '/jenis-pelatihan/in-house-vs-publik-vs-blended/': 'In-House vs Publik vs Blended',
  '/industri/': 'Pelatihan per Industri',
  '/industri/manufaktur/': 'Panduan K3 Sektor Manufaktur',
  '/industri/konstruksi/': 'Panduan K3 Sektor Konstruksi',
  '/industri/pertambangan-migas/': 'Panduan K3 Pertambangan & Migas',
  '/industri/kesehatan-rumah-sakit/': 'Panduan K3 Sektor Rumah Sakit',
  '/industri/logistik-pergudangan/': 'Panduan K3 Logistik & Pergudangan',
  '/industri/perbankan-keuangan/': 'Pelatihan Sektor Perbankan & Keuangan',
  '/peran-jabatan/': 'Pelatihan per Peran & Jabatan',
  '/peran-jabatan/hrd-manager/': 'Pelatihan HRD & HR Manager',
  '/peran-jabatan/supervisor-team-leader/': 'Pelatihan Supervisor & Team Leader',
  '/peran-jabatan/safety-officer-k3/': 'Pelatihan Safety Officer K3',
  '/peran-jabatan/manajer-operasional/': 'Pelatihan Manajer Operasional',
  '/kategori-pelatihan/': 'Kategori Pelatihan K3 & Manajemen',
  '/kategori-pelatihan/k3-keselamatan-kerja/': 'Panduan Pelatihan K3 Terlengkap',
  '/kategori-pelatihan/manajemen-sdm/': 'Pelatihan Manajemen SDM Modern',
  '/kategori-pelatihan/sertifikasi-bnsp/': 'Pelatihan & Sertifikasi BNSP',
  '/kategori-pelatihan/ahli-k3-umum/': 'Sertifikasi Ahli K3 Umum Kemnaker',
  '/kategori-pelatihan/petugas-p3k-di-tempat-kerja/': 'Pelatihan Petugas P3K di Tempat Kerja',
  '/kategori-pelatihan/petugas-peran-kebakaran/': 'Pelatihan Petugas Peran Kebakaran',
  '/konsultasi-pengembangan-kompetensi/': 'Layanan Konsultasi Kompetensi SDM',
  '/konsultasi-pengembangan-kompetensi/training-needs-analysis/': 'Panduan Training Needs Analysis (TNA)',
  '/konsultasi-pengembangan-kompetensi/evaluasi-pasca-training-roi/': 'Evaluasi Pasca-Training & ROI',
  '/kontak/': 'Konsultasi & Penawaran In-House Training',
  '/studi-kasus/': 'Studi Kasus & Klien',
  '/faq/': 'Pertanyaan yang Sering Diajukan (FAQ)',
  '/glosarium/': 'Glosarium Istilah K3 & Pelatihan',
  '/tentang-kami/': 'Tentang Wahana Totalita',
};

for (const [p, l] of Object.entries(standardLabels)) {
  pathToLabel.set(p, l);
  pathToLabel.set(p.replace(/\/$/, ''), l);
}

function resolveLabel(href: string): string {
  const cleanHref = href.split('#')[0].split('?')[0];
  const normPath = '/' + cleanHref.replace(/^\/|\/$/g, '') + (cleanHref === '/' ? '' : '/');

  if (pathToLabel.has(normPath)) {
    return pathToLabel.get(normPath)!;
  }
  if (pathToLabel.has(cleanHref)) {
    return pathToLabel.get(cleanHref)!;
  }

  // Derive from slug if not directly found
  const slug = cleanHref.replace(/^\/|\/$/g, '').split('/').pop() || '';
  const queueItem = livePages.find((q: any) => q.key === slug);
  if (queueItem) {
    return cleanTitle(queueItem.title, queueItem.h1);
  }

  // Format slug to readable title
  return slug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

let totalFilesFixed = 0;
let totalLinksFixed = 0;

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Match both escaped and unescaped patterns of:
  // <a href="..." class="btn-chip" title="undefined"><span>👉 undefined</span></a>
  // or <a href=\"...\" class=\"btn-chip\" title=\"undefined\"><span>👉 undefined</span></a>
  
  // Regex to match chips with undefined
  const chipRegex = /<a\s+([^>]*?)href=(\\?["'])([^"'\\]+)(\\?["'])([^>]*?)class=(\\?["'])btn-chip(\\?["'])([^>]*?)title=(\\?["'])undefined(\\?["'])([^>]*?)><span>👉\s*undefined<\/span><\/a>/g;
  
  let matchCountInFile = 0;
  
  // Pattern 1: title="undefined"><span>👉 undefined</span></a>
  content = content.replace(chipRegex, (fullMatch, preHref, q1, href, q2, mid, q3, q4, mid2, q5, q6, post) => {
    matchCountInFile++;
    totalLinksFixed++;
    const label = resolveLabel(href);
    // Preserve escaping style
    const isEscaped = q1.includes('\\');
    const escQuote = isEscaped ? '\\"' : '"';
    return `<a href=${escQuote}${href}${escQuote} class=${escQuote}btn-chip${escQuote} title=${escQuote}${label}${escQuote}><span>👉 ${label}</span></a>`;
  });

  // Pattern 2: More general regex for any btn-chip having undefined in title or inner span
  const generalUndefinedChipRegex = /<a\s+href=(\\?["'])([^"'\\]+)(\\?["'])\s+class=(\\?["'])btn-chip(\\?["'])\s+title=(\\?["'])undefined(\\?["'])><span>👉\s*undefined<\/span><\/a>/g;
  content = content.replace(generalUndefinedChipRegex, (fullMatch, q1, href, q2, q3, q4, q5, q6) => {
    matchCountInFile++;
    totalLinksFixed++;
    const label = resolveLabel(href);
    const isEscaped = q1.includes('\\');
    const escQuote = isEscaped ? '\\"' : '"';
    return `<a href=${escQuote}${href}${escQuote} class=${escQuote}btn-chip${escQuote} title=${escQuote}${label}${escQuote}><span>👉 ${label}</span></a>`;
  });

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    totalFilesFixed++;
    console.log(`[Fixed] ${file} (${matchCountInFile} links updated)`);
  }
}

console.log('====================================================');
console.log('🎉 EDITORIAL CROSSLINKS REPAIR REPORT');
console.log('====================================================');
console.log(`Total Files Fixed: ${totalFilesFixed}`);
console.log(`Total Individual Link Chips Fixed: ${totalLinksFixed}`);
console.log('====================================================\n');
