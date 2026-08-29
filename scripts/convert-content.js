const fs = require('fs');
const path = require('path');

const topicQueue = JSON.parse(fs.readFileSync(path.join(__dirname, '../content/topic-queue.json'), 'utf8'));
const pagesMap = new Map();
topicQueue.sections.live.forEach(p => pagesMap.set(p.key, p));

const SITE = {
  baseUrl: 'https://training.wahanatotalita.com',
  siteName: 'Pelatihan Korporat Indonesia',
  tagline: 'Panduan & Konsultasi Pengembangan Kompetensi',
  orgName: 'Wahana Totalita Konsultan',
  orgUrl: 'https://wahanatotalita.com',
  orgCity: 'Yogyakarta',
  orgRegion: 'Daerah Istimewa Yogyakarta',
  orgCountry: 'ID',
  waNumber: '628122969435',
  waDisplay: '+62 812-2969-435',
  waPrefill: 'Halo, saya ingin diskusi mengenai kebutuhan pelatihan untuk perusahaan kami.',
  email: 'info@wahanatotalita.com',
  external: {
    wt_jadwal: 'https://wahanatotalita.com/jadwal/',
    wt_perusahaan: 'https://wahanatotalita.com/perusahaan',
    wt_klien: 'https://wahanatotalita.com/klien',
    wt_sdm: 'https://wahanatotalita.com/pelatihan-manajemen-sdm',
    wt_satpam: 'https://wahanatotalita.com/pelatihan-satpam',
    wt_iso: 'https://wahanatotalita.com/pelatihan-iso',
    wt_ak3u: 'https://wahanatotalita.com/pelatihan/pelatihan-ahli-k3-umum-sertifikasi-bnsp/',
    ahlik3umum: 'https://ahlik3umum.wahanatotalita.com/',
    smk3: 'https://smk3.wahanatotalita.com/',
  }
};

function pageUrl(key) {
  const p = pagesMap.get(key);
  if (!p) return `/${key}/`;
  return p.path === '' ? '/' : `/${p.path}`;
}

function waUrl(custom) {
  const msg = custom || SITE.waPrefill;
  return `https://wa.me/${SITE.waNumber}?text=${encodeURIComponent(msg)}`;
}

const contentDir = path.join(__dirname, '../training.publichtml/content');
const outDir = path.join(__dirname, '../src/content/pages');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.php'));
console.log(`Converting ${files.length} content PHP files...`);

for (const file of files) {
  const key = file.replace(/\.php$/, '');
  const raw = fs.readFileSync(path.join(contentDir, file), 'utf8');

  // Extract $updated
  let updated = null;
  const updatedMatch = raw.match(/\$updated\s*=\s*'([^']+)';/);
  if (updatedMatch) {
    updated = updatedMatch[1];
  }

  // Extract $faq
  const faq = [];
  const faqBlockMatch = raw.match(/\$faq\s*=\s*\[([\s\S]*?)\];/);
  if (faqBlockMatch) {
    const itemMatches = [...faqBlockMatch[1].matchAll(/\['q'\s*=>\s*'([^']*)',\s*'a'\s*=>\s*'([^']*)'\]/g)];
    for (const im of itemMatches) {
      faq.push({
        q: im[1].replace(/\\'/g, "'"),
        a: im[2].replace(/\\'/g, "'")
      });
    }
  }

  // Strip PHP headers ($updated = ..., $faq = ..., session checks)
  let body = raw.replace(/<\?php[\s\S]*?\?>/i, '').trim();

  // Clean kontak session PHP if present
  body = body.replace(/<\?php\s+if\s*\(\$formError\):[\s\S]*?<\?php\s+endif;\s*\?>/g, '');

  // 1. <?= ilink('key', 'text') ?>
  body = body.replace(/<\?=\s*ilink\('([^']+)',\s*'([^']+)'\)\s*\?>/g, (m, k, txt) => {
    return `<a href="${pageUrl(k)}">${txt}</a>`;
  });

  // 2. <?= ilink('key') ?>
  body = body.replace(/<\?=\s*ilink\('([^']+)'\)\s*\?>/g, (m, k) => {
    const p = pagesMap.get(k);
    const txt = p ? p.h1 : k;
    return `<a href="${pageUrl(k)}">${txt}</a>`;
  });

  // 3. <?= ext_link('key', 'text') ?>
  body = body.replace(/<\?=\s*ext_link\('([^']+)',\s*'([^']+)'\)\s*\?>/g, (m, k, txt) => {
    const url = SITE.external[k] || '#';
    return `<a href="${url}">${txt}</a>`;
  });

  // 4. <?= e(page_url('key')) ?>
  body = body.replace(/<\?=\s*e\(page_url\('([^']+)'\)\)\s*\?>/g, (m, k) => pageUrl(k));
  body = body.replace(/<\?=\s*page_url\('([^']+)'\)\s*\?>/g, (m, k) => pageUrl(k));

  // 5. <?= e(wa_url('...')) ?>
  body = body.replace(/<\?=\s*e\(wa_url\('([^']+)'\)\)\s*\?>/g, (m, msg) => waUrl(msg));
  body = body.replace(/<\?=\s*e\(wa_url\(\)\)\s*\?>/g, () => waUrl());
  body = body.replace(/<\?=\s*wa_url\(\)\s*\?>/g, () => waUrl());

  // 6. SITE vars
  body = body.replace(/<\?=\s*e\(\$SITE\['org_name'\]\)\s*\?>/g, SITE.orgName);
  body = body.replace(/<\?=\s*e\(\$SITE\['org_city'\]\)\s*\?>/g, SITE.orgCity);
  body = body.replace(/<\?=\s*e\(\$SITE\['org_url'\]\)\s*\?>/g, SITE.orgUrl);
  body = body.replace(/<\?=\s*e\(\$SITE\['wa_display'\]\)\s*\?>/g, SITE.waDisplay);
  body = body.replace(/<\?=\s*e\(\$SITE\['site_name'\]\)\s*\?>/g, SITE.siteName);
  body = body.replace(/<\?=\s*e\(\$SITE\['email'\]\)\s*\?>/g, SITE.email);

  // 7. Page properties
  body = body.replace(/<\?=\s*e\(\$page\['h1'\]\)\s*\?>/g, () => {
    const p = pagesMap.get(key);
    return p ? p.h1 : '';
  });

  // Check remaining PHP tags
  const remainingPhp = body.match(/<\?[\s\S]*?\?>/g);
  if (remainingPhp) {
    console.warn(`Warning: remaining PHP tags in ${key}:`, remainingPhp);
  }

  const tsContent = `import { PageContentData } from '@/lib/types';

export const content: PageContentData = {
  key: ${JSON.stringify(key)},
  updated: ${JSON.stringify(updated)},
  faq: ${JSON.stringify(faq, null, 2)},
  html: ${JSON.stringify(body)}
};
`;

  fs.writeFileSync(path.join(outDir, `${key}.ts`), tsContent, 'utf8');
}

console.log(`Successfully converted all ${files.length} individual content files into src/content/pages/*.ts`);
