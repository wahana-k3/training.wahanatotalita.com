import * as fs from 'fs';
import * as path from 'path';

const pagesDir = path.join(process.cwd(), 'src', 'content', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.ts'));

// Specific URL replacements
const urlReplacements: [RegExp, string][] = [
  // In-House regional hub corrections
  [/\/kategori-pelatihan\/in-house-training-k3-duri-dumai\//g, '/jenis-pelatihan/in-house-training-k3-duri-dumai/'],
  [/\/kategori-pelatihan\/in-house-training-k3-pekanbaru\//g, '/jenis-pelatihan/in-house-training-k3-pekanbaru/'],
  [/\/kategori-pelatihan\/in-house-training-k3-cikarang\//g, '/jenis-pelatihan/in-house-training-k3-cikarang/'],
  [/\/kategori-pelatihan\/in-house-training-k3-karawang\//g, '/jenis-pelatihan/in-house-training-k3-karawang/'],
  [/\/kategori-pelatihan\/in-house-training-k3-kendal-semarang\//g, '/jenis-pelatihan/in-house-training-k3-kendal-semarang/'],
  [/\/kategori-pelatihan\/in-house-training-k3-solo-surakarta\//g, '/jenis-pelatihan/in-house-training-k3-solo-surakarta/'],
  [/\/kategori-pelatihan\/in-house-training-k3-cilegon\//g, '/jenis-pelatihan/in-house-training-k3-cilegon/'],
  [/\/kategori-pelatihan\/in-house-training-k3-serang-banten\//g, '/jenis-pelatihan/in-house-training-k3-serang-banten/'],
  [/\/kategori-pelatihan\/in-house-training-k3-batam\//g, '/jenis-pelatihan/in-house-training-k3-batam/'],
  [/\/kategori-pelatihan\/in-house-training-k3-balikpapan\//g, '/jenis-pelatihan/in-house-training-k3-balikpapan/'],
  [/\/kategori-pelatihan\/in-house-training-k3-samarinda\//g, '/jenis-pelatihan/in-house-training-k3-samarinda/'],
  [/\/kategori-pelatihan\/in-house-training-k3-banjarmasin\//g, '/jenis-pelatihan/in-house-training-k3-banjarmasin/'],
  [/\/kategori-pelatihan\/in-house-training-k3-palembang\//g, '/jenis-pelatihan/in-house-training-k3-palembang/'],
  [/\/kategori-pelatihan\/in-house-training-k3-morowali\//g, '/jenis-pelatihan/in-house-training-k3-morowali/'],
  [/\/kategori-pelatihan\/in-house-training-k3-manado-bitung\//g, '/jenis-pelatihan/in-house-training-k3-manado-bitung/'],
  [/\/kategori-pelatihan\/in-house-training-k3-medan\//g, '/jenis-pelatihan/in-house-training-k3-medan/'],
  [/\/kategori-pelatihan\/in-house-training-k3-makassar\//g, '/jenis-pelatihan/in-house-training-k3-makassar/'],
  [/\/kategori-pelatihan\/in-house-training-k3-pasuruan\//g, '/jenis-pelatihan/in-house-training-k3-pasuruan/'],
  [/\/kategori-pelatihan\/in-house-training-k3-bontang\//g, '/jenis-pelatihan/in-house-training-k3-bontang/'],
  [/\/kategori-pelatihan\/in-house-training-k3-timika\//g, '/jenis-pelatihan/in-house-training-k3-timika/'],
  [/\/kategori-pelatihan\/in-house-training-k3-lampung\//g, '/jenis-pelatihan/in-house-training-k3-lampung/'],
  [/\/kategori-pelatihan\/in-house-training-k3-bali-denpasar\//g, '/jenis-pelatihan/in-house-training-k3-bali-denpasar/'],

  // Legacy mappings
  [/\/kategori-pelatihan\/ahli-k3-umum-kemnaker\//g, '/kategori-pelatihan/ahli-k3-umum/'],
  [/\/kategori-pelatihan\/pelatihan-k3-balikpapan-ikn\//g, '/jenis-pelatihan/in-house-training-k3-balikpapan/'],
  [/\/kategori-pelatihan\/pelatihan-k3-batam-kepri\//g, '/jenis-pelatihan/in-house-training-k3-batam/'],
  [/\/pelatihan\/tkbt-ii-surabaya\//g, '/kategori-pelatihan/tenaga-kerja-bangunan-tinggi-tkbt/'],
  
  // Specific course names
  [/\/kategori-pelatihan\/petugas-pemadam-kebakaran-kelas-d\//g, '/kategori-pelatihan/petugas-peran-kebakaran/'],
  [/\/kategori-pelatihan\/p3k-pertolongan-pertama\//g, '/kategori-pelatihan/petugas-p3k-di-tempat-kerja/'],
  [/\/kategori-pelatihan\/alat-berat-excavator-dump-truck\//g, '/kategori-pelatihan/operator-excavator/'],
  
  // Industries
  [/\/industri\/makanan-dan-minuman-fnb\//g, '/industri/makanan-minuman-dan-fmcg/'],
  [/\/industri\/pabrik-gula-dan-agroindustri\//g, '/industri/makanan-minuman-dan-fmcg/'],
  [/\/industri\/perkebunan-kelapa-sawit\//g, '/industri/perkebunan-dan-pabrik-kelapa-sawit/'],
];

let fixedCount = 0;
for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  for (const [pattern, replacement] of urlReplacements) {
    content = content.replace(pattern, replacement);
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    fixedCount++;
    console.log(`[Fixed URLs in] ${file}`);
  }
}

console.log(`[Comprehensive URL Fixer] Finished. Fixed ${fixedCount} files.`);
