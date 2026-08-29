import topicQueue from '@/../content/topic-queue.json';
import { PageMeta, TopicQueue } from './types';

export const SITE = {
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
  } as Record<string, string>,
  nav: [
    { label: 'Beranda', key: 'home', href: '/' },
    { label: 'Jenis Pelatihan', key: 'jenis-pelatihan', href: '/jenis-pelatihan/' },
    { label: 'Industri', key: 'industri', href: '/industri/' },
    { label: 'Peran & Jabatan', key: 'peran-jabatan', href: '/peran-jabatan/' },
    { label: 'Kategori', key: 'kategori-pelatihan', href: '/kategori-pelatihan/' },
    { label: 'Konsultasi', key: 'konsultasi-pengembangan-kompetensi', href: '/konsultasi-pengembangan-kompetensi/' },
    { label: 'Kontak', key: 'kontak', href: '/kontak/' },
  ],
  footerPillars: [
    { key: 'jenis-pelatihan', label: 'Jenis Pelatihan', href: '/jenis-pelatihan/' },
    { key: 'industri', label: 'Industri', href: '/industri/' },
    { key: 'peran-jabatan', label: 'Peran & Jabatan', href: '/peran-jabatan/' },
    { key: 'kategori-pelatihan', label: 'Kategori Pelatihan', href: '/kategori-pelatihan/' },
    { key: 'konsultasi-pengembangan-kompetensi', label: 'Konsultasi & Pengembangan Kompetensi', href: '/konsultasi-pengembangan-kompetensi/' },
  ],
  footerPlatform: [
    { key: 'tentang-kami', label: 'Tentang Kami', href: '/tentang-kami/' },
    { key: 'blog', label: 'Blog', href: '/blog/' },
    { key: 'studi-kasus', label: 'Studi Kasus', href: '/studi-kasus/' },
    { key: 'glosarium', label: 'Glosarium', href: '/glosarium/' },
    { key: 'faq', label: 'FAQ', href: '/faq/' },
    { key: 'kontak', label: 'Konsultasi Gratis', href: '/kontak/' },
  ],
  hubNames: {
    'jenis-pelatihan': 'Jenis Pelatihan',
    'industri': 'Industri',
    'peran-jabatan': 'Peran & Jabatan',
    'kategori-pelatihan': 'Kategori Pelatihan',
    'konsultasi-pengembangan-kompetensi': 'Konsultasi & Pengembangan Kompetensi',
    'utility': 'Informasi',
  } as Record<string, string>,
  hubPages: {
    'jenis-pelatihan': 'jenis-pelatihan',
    'industri': 'industri',
    'peran-jabatan': 'peran-jabatan',
    'kategori-pelatihan': 'kategori-pelatihan',
    'konsultasi-pengembangan-kompetensi': 'konsultasi-pengembangan-kompetensi',
    'utility': 'home',
  } as Record<string, string>,
};

export const typedTopicQueue = topicQueue as TopicQueue;
export const allLivePages: PageMeta[] = typedTopicQueue.sections.live;

export function getPageMeta(key: string): PageMeta | undefined {
  return allLivePages.find((p) => p.key === key);
}

export function getPageByPath(path: string): PageMeta | undefined {
  const normalized = path.replace(/^\/|\/$/g, '');
  return allLivePages.find((p) => p.path.replace(/^\/|\/$/g, '') === normalized);
}

export function pageUrl(key: string): string {
  const p = getPageMeta(key);
  if (!p) return '/';
  return p.path === '' ? '/' : `/${p.path}`;
}

export function fullPageUrl(key: string): string {
  const p = getPageMeta(key);
  if (!p) return `${SITE.baseUrl}/`;
  return `${SITE.baseUrl}/${p.path}`;
}

const mediaPhotoMap: Record<string, string> = {
  'confined-space-entry': '/media/pelatihan-001.webp',
  'teknisi-k3-ruang-terbatas': '/media/pelatihan-002.webp',
  'rescue-ruang-terbatas': '/media/pelatihan-003.webp',
  'gas-tester': '/media/pelatihan-004.webp',
  'gas-detector': '/media/pelatihan-005.webp',
  'working-at-height': '/media/pelatihan-006.webp',
  'bekerja-di-ketinggian': '/media/pelatihan-007.webp',
  'fall-protection': '/media/pelatihan-008.webp',
  'rope-access-dasar': '/media/pelatihan-009.webp',
  'rescue-di-ketinggian': '/media/pelatihan-010.webp',
  'operator-scaffolding': '/media/pelatihan-011.webp',
  'pengawas-scaffolding': '/media/pelatihan-012.webp',
  'scaffolding-inspector': '/media/pelatihan-013.webp',
  'rigger': '/media/pelatihan-014.webp',
  'signalman': '/media/pelatihan-015.webp',
  'lifting-supervisor': '/media/pelatihan-016.webp',
  'lifting-operation-safety': '/media/pelatihan-017.webp',
  'operator-forklift': '/media/pelatihan-018.webp',
  'operator-reach-truck': '/media/pelatihan-019.webp',
  'operator-pallet-stacker': '/media/pelatihan-020.webp',
  'operator-crane': '/media/pelatihan-021.webp',
  'operator-mobile-crane': '/media/pelatihan-022.webp',
  'operator-overhead-crane': '/media/pelatihan-023.webp',
  'operator-gantry-crane': '/media/pelatihan-024.webp',
  'operator-hoist': '/media/pelatihan-025.webp',
  'operator-excavator': '/media/pelatihan-026.webp',
  'operator-wheel-loader': '/media/pelatihan-027.webp',
  'operator-bulldozer': '/media/pelatihan-028.webp',
  'operator-dump-truck': '/media/pelatihan-029.webp',
  'keselamatan-alat-berat': '/media/pelatihan-030.webp',
  'hot-work-safety': '/media/pelatihan-031.webp',
  'fire-watch': '/media/pelatihan-032.webp',
  'permit-to-work': '/media/pelatihan-033.webp',
  'k3-listrik': '/media/pelatihan-034.webp',
  'teknisi-k3-listrik': '/media/pelatihan-035.webp',
  'ahli-k3-listrik': '/media/pelatihan-036.webp',
  'lockout-tagout-loto': '/media/pelatihan-037.webp',
  'arc-flash-safety': '/media/pelatihan-038.webp',
  'keselamatan-tegangan-tinggi': '/media/pelatihan-039.webp',
  'inspeksi-panel-listrik': '/media/pelatihan-040.webp',
  'grounding-dan-lightning-protection': '/media/pelatihan-041.webp',
  'machine-guarding': '/media/pelatihan-042.webp',
  'operator-boiler': '/media/pelatihan-043.webp',
  'inspeksi-bejana-tekan': '/media/pelatihan-044.webp',
  'keselamatan-rotating-equipment': '/media/pelatihan-045.webp',
  'welding-safety': '/media/pelatihan-046.webp',
  'k3-pesawat-tenaga-dan-produksi': '/media/pelatihan-047.webp',
  'ergonomi-industri': '/media/pelatihan-048.webp',
  'fire-fighting-dasar': '/media/pelatihan-049.webp',
  'petugas-peran-kebakaran': '/media/pelatihan-050.webp',
  'regu-pemadam-kebakaran': '/media/pelatihan-051.webp',
  'ahli-k3-kebakaran': '/media/pelatihan-052.webp',
  'penggunaan-apar': '/media/pelatihan-053.webp',
  'hydrant-dan-sprinkler': '/media/pelatihan-054.webp',
  'fire-risk-assessment': '/media/pelatihan-055.webp',
  'emergency-response-team': '/media/pelatihan-056.webp',
  'simulasi-evakuasi-gedung': '/media/pelatihan-057.webp',
  'h2s-safety': '/media/pelatihan-058.webp',
  'chemical-handling': '/media/pelatihan-059.webp',
  'pengelolaan-limbah-b3': '/media/pelatihan-060.webp',
  'spill-response-kit': '/media/pelatihan-061.webp',
  'msds-dan-gds-labelling': '/media/pelatihan-062.webp',
  'petugas-k3-kimia': '/media/pelatihan-063.webp',
  'ahli-k3-kimia': '/media/pelatihan-064.webp',
  'k3-laboratorium': '/media/pelatihan-065.webp',
  'pengendalian-debu-dan-fumigasi': '/media/pelatihan-066.webp',
};

export function imgPath(key: string): string {
  if (mediaPhotoMap[key]) {
    return mediaPhotoMap[key];
  }
  return `/assets/img/${key}.svg`;
}

export function fullImgUrl(key: string): string {
  const rel = imgPath(key);
  return `${SITE.baseUrl}${rel}`;
}

export function waUrl(custom?: string): string {
  const msg = custom ?? SITE.waPrefill;
  return `https://wa.me/${SITE.waNumber}?text=${encodeURIComponent(msg)}`;
}

export function tglId(iso: string): string {
  const bulan = [
    '', 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
  ];
  const [year, month, day] = iso.split('-').map(Number);
  if (!year || !month || !day) return iso;
  return `${day} ${bulan[month]} ${year}`;
}

export function buildToc(html: string): { id: string; text: string }[] {
  const toc: { id: string; text: string }[] = [];
  const regex = new RegExp('<h2\\s+id="([^"]+)"[^>]*>([\\s\\S]*?)<\\/h2>', 'g');
  let m: RegExpExecArray | null;
  while ((m = regex.exec(html)) !== null) {
    const text = m[2].replace(/<[^>]+>/g, '').trim();
    toc.push({ id: m[1], text });
  }
  return toc;
}

export function getHubChildren(hubSlug: string): PageMeta[] {
  return allLivePages
    .filter((p) => p.hub === hubSlug && p.type === 'article')
    .sort((a, b) => (a.n || 0) - (b.n || 0));
}
