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
    wt_jadwal: '/jenis-pelatihan/pelatihan-publik/',
    wt_perusahaan: '/tentang-kami/',
    wt_klien: '/studi-kasus/',
    wt_sdm: '/kategori-pelatihan/manajemen-sdm/',
    wt_satpam: '/kategori-pelatihan/k3-keselamatan-kerja/',
    wt_iso: '/kategori-pelatihan/internal-audit-iso-9001-2015/',
    wt_ak3u: '/kategori-pelatihan/ahli-k3-umum-kemnaker/',
    ahlik3umum: '/kategori-pelatihan/ahli-k3-umum-kemnaker/',
    smk3: '/kategori-pelatihan/panduan-audit-smk3-pp-50-2012/',
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
  footerPopularPrograms: [
    { key: 'ahli-k3-umum', label: 'Ahli K3 Umum Kemnaker', href: '/kategori-pelatihan/ahli-k3-umum/' },
    { key: 'petugas-p3k-di-tempat-kerja', label: 'Petugas P3K Tempat Kerja', href: '/kategori-pelatihan/petugas-p3k-di-tempat-kerja/' },
    { key: 'petugas-peran-kebakaran', label: 'Petugas Peran Kebakaran', href: '/kategori-pelatihan/petugas-peran-kebakaran/' },
    { key: 'bekerja-di-ketinggian', label: 'Bekerja di Ketinggian (TKPK)', href: '/kategori-pelatihan/bekerja-di-ketinggian/' },
    { key: 'operator-forklift', label: 'Operator Forklift SIO K3', href: '/kategori-pelatihan/operator-forklift/' },
    { key: 'confined-space-entry', label: 'K3 Ruang Terbatas (Confined Space)', href: '/kategori-pelatihan/confined-space-entry/' },
    { key: 'lockout-tagout-loto', label: 'Lockout Tagout (LOTO) Listrik', href: '/kategori-pelatihan/lockout-tagout-loto/' },
    { key: 'matrix-hiradc-dan-ibprp', label: 'Manajemen Risiko HIRADC', href: '/kategori-pelatihan/matrix-hiradc-dan-ibprp/' },
    { key: 'training-needs-analysis', label: 'Training Needs Analysis (TNA)', href: '/konsultasi-pengembangan-kompetensi/training-needs-analysis/' },
  ],
  footerRegional: [
    { key: 'in-house-training-k3-cikarang', label: 'In-House K3 Cikarang & Bekasi', href: '/jenis-pelatihan/in-house-training-k3-cikarang/' },
    { key: 'in-house-training-k3-karawang', label: 'In-House K3 Karawang (KIIC)', href: '/jenis-pelatihan/in-house-training-k3-karawang/' },
    { key: 'in-house-training-k3-cilegon', label: 'In-House K3 Cilegon (Baja & Kimia)', href: '/jenis-pelatihan/in-house-training-k3-cilegon/' },
    { key: 'in-house-training-k3-balikpapan', label: 'In-House K3 Balikpapan (Migas & IKN)', href: '/jenis-pelatihan/in-house-training-k3-balikpapan/' },
    { key: 'in-house-training-k3-batam', label: 'In-House K3 Batam (Shipyard & Elektronik)', href: '/jenis-pelatihan/in-house-training-k3-batam/' },
    { key: 'in-house-training-k3-surabaya', label: 'In-House K3 Surabaya & Sidoarjo', href: '/jenis-pelatihan/in-house-training-k3-surabaya/' },
    { key: 'in-house-training-k3-morowali', label: 'In-House K3 Morowali (IMIP)', href: '/jenis-pelatihan/in-house-training-k3-morowali/' },
    { key: 'in-house-training-k3-gresik', label: 'In-House K3 Gresik (JIIPE)', href: '/jenis-pelatihan/in-house-training-k3-gresik/' },
  ],
  footerIndustryRoles: [
    { key: 'manufaktur-otomotif-dan-elektronik', label: 'K3 Manufaktur & Otomotif', href: '/industri/manufaktur-otomotif-dan-elektronik/' },
    { key: 'konstruksi-gedung-dan-infrastruktur', label: 'K3 Konstruksi Gedung (SMKK)', href: '/industri/konstruksi-gedung-dan-infrastruktur/' },
    { key: 'safety-officer', label: 'Kompetensi Safety Officer', href: '/peran-jabatan/safety-officer/' },
    { key: 'hrd-manager', label: 'Pengembangan HRD Manager', href: '/peran-jabatan/hrd-manager/' },
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
  'higiene-industri': '/media/pelatihan-067.webp',
  'petugas-p3k-di-tempat-kerja': '/media/pelatihan-001.webp',
  'dokter-perusahaan-hiperkes': '/media/pelatihan-002.webp',
  'audiometri-dan-hearing-conservation': '/media/pelatihan-003.webp',
  'spirometri-dan-kesehatan-paru-kerja': '/media/pelatihan-004.webp',
  'pengukuran-kebisingan-dan-getaran': '/media/pelatihan-005.webp',
  'pengukuran-kualitas-udara-ruangan': '/media/pelatihan-006.webp',
  'pengendalian-vektor-dan-sanitasi-industri': '/media/pelatihan-007.webp',
  'pemeriksaan-kesehatan-kerja-mcu': '/media/pelatihan-008.webp',
  'ahli-k3-konstruksi': '/media/pelatihan-009.webp',
  'petugas-k3-konstruksi': '/media/pelatihan-010.webp',
  'k3-pekerjaan-galian-excavation': '/media/pelatihan-011.webp',
  'k3-pembongkaran-demolition': '/media/pelatihan-012.webp',
  'pengawas-operasional-pertama-pop': '/media/pelatihan-013.webp',
  'pengawas-operasional-madya-pom': '/media/pelatihan-014.webp',
  'k3-terowongan-dan-underground-mining': '/media/pelatihan-015.webp',
  'k3-pekerjaan-bawah-air-commercial-diving': '/media/pelatihan-016.webp',
  'k3-konstruksi-jembatan-dan-elevated': '/media/pelatihan-017.webp',
  'ahli-k3-umum': '/media/pelatihan-018.webp',
  'audit-smk3-pp-50-2012': '/media/pelatihan-019.webp',
  'lead-auditor-iso-45001': '/media/pelatihan-020.webp',
  'hiradc-manajemen-risiko': '/media/pelatihan-021.webp',
  'job-safety-analysis-jsa-authoring': '/media/pelatihan-022.webp',
  'investigasi-kecelakaan-kerja': '/media/pelatihan-023.webp',
  'behavior-based-safety-bbs': '/media/pelatihan-024.webp',
  'safety-leadership-dan-culture': '/media/pelatihan-025.webp',
  'defensive-driving-training': '/media/pelatihan-026.webp',
  'k3-maritim-dan-kepelabuhanan': '/media/pelatihan-027.webp',
  'k3-rumah-sakit-k3rs': '/media/pelatihan-028.webp',
  'k3-perkantoran-dan-gedung-pemerintah': '/media/pelatihan-029.webp',
  'k3-radiasi-industri': '/media/pelatihan-030.webp',
  'k3-pembangkit-listrik-pltu-pltgu': '/media/pelatihan-031.webp',
  'k3-industri-makanan-dan-minuman': '/media/pelatihan-032.webp',
  'contractor-safety-management-system-csms': '/media/pelatihan-033.webp',
};

export function imgPath(key: string): string {
  if (mediaPhotoMap[key]) {
    return mediaPhotoMap[key];
  }
  // Deterministic fallback to high-res media photo 001 to 067
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash = (hash << 5) - hash + key.charCodeAt(i);
    hash |= 0;
  }
  const photoIndex = (Math.abs(hash) % 67) + 1;
  const padIndex = photoIndex.toString().padStart(3, '0');
  return `/media/pelatihan-${padIndex}.webp`;
}

export function fullImgUrl(key: string): string {
  return `${SITE.baseUrl}${imgPath(key)}`;
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
