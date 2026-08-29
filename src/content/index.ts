import { PageContentData } from '@/lib/types';

// Map of dynamic content loaders
const contentLoaders: Record<string, () => Promise<{ content: PageContentData }>> = {
  'home': () => import('./pages/home'),
  'kontak': () => import('./pages/kontak'),
  'jenis-pelatihan': () => import('./pages/jenis-pelatihan'),
  'in-house-training': () => import('./pages/in-house-training'),
  'pelatihan-publik': () => import('./pages/pelatihan-publik'),
  'pelatihan-korporat-customized': () => import('./pages/pelatihan-korporat-customized'),
  'in-house-vs-publik-vs-blended': () => import('./pages/in-house-vs-publik-vs-blended'),
  'industri': () => import('./pages/industri'),
  'manufaktur': () => import('./pages/manufaktur'),
  'konstruksi': () => import('./pages/konstruksi'),
  'pertambangan-migas': () => import('./pages/pertambangan-migas'),
  'kesehatan-rumah-sakit': () => import('./pages/kesehatan-rumah-sakit'),
  'logistik-pergudangan': () => import('./pages/logistik-pergudangan'),
  'perbankan-keuangan': () => import('./pages/perbankan-keuangan'),
  'peran-jabatan': () => import('./pages/peran-jabatan'),
  'hrd-manager': () => import('./pages/hrd-manager'),
  'supervisor-team-leader': () => import('./pages/supervisor-team-leader'),
  'safety-officer-k3': () => import('./pages/safety-officer-k3'),
  'manajer-operasional': () => import('./pages/manajer-operasional'),
  'staff-baru-onboarding': () => import('./pages/staff-baru-onboarding'),
  'kategori-pelatihan': () => import('./pages/kategori-pelatihan'),
  'k3-keselamatan-kerja': () => import('./pages/k3-keselamatan-kerja'),
  'manajemen-sdm': () => import('./pages/manajemen-sdm'),
  'kepemimpinan': () => import('./pages/kepemimpinan'),
  'customer-service-soft-skills': () => import('./pages/customer-service-soft-skills'),
  'keuangan-akuntansi': () => import('./pages/keuangan-akuntansi'),
  'sertifikasi-bnsp': () => import('./pages/sertifikasi-bnsp'),
  'konsultasi-pengembangan-kompetensi': () => import('./pages/konsultasi-pengembangan-kompetensi'),
  'training-needs-analysis': () => import('./pages/training-needs-analysis'),
  'penyusunan-kurikulum-korporat': () => import('./pages/penyusunan-kurikulum-korporat'),
  'competency-mapping': () => import('./pages/competency-mapping'),
  'evaluasi-pasca-training-roi': () => import('./pages/evaluasi-pasca-training-roi'),
  'tentang-kami': () => import('./pages/tentang-kami'),
  'faq': () => import('./pages/faq'),
  'glosarium': () => import('./pages/glosarium'),
  'studi-kasus': () => import('./pages/studi-kasus'),
  'blog': () => import('./pages/blog'),
};

export async function getPageContent(key: string): Promise<PageContentData | null> {
  const loader = contentLoaders[key];
  if (!loader) return null;
  const mod = await loader();
  return mod.content;
}
