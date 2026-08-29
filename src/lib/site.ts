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

export function imgPath(key: string): string {
  return `/assets/img/${key}.svg`;
}

export function fullImgUrl(key: string): string {
  return `${SITE.baseUrl}/assets/img/${key}.svg`;
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
