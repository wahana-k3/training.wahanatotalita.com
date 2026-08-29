import * as fs from 'fs';
import * as path from 'path';

const pagesDir = path.join(process.cwd(), 'src', 'content', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.ts'));

const linkReplacements: [RegExp, string][] = [
  [/https:\/\/wahanatotalita\.com\/layanan-pemerintah/g, '/jenis-pelatihan/in-house-training/'],
  [/https:\/\/wahanatotalita\.com\/pelatihan-satpam/g, '/kategori-pelatihan/k3-keselamatan-kerja/'],
  [/https:\/\/wahanatotalita\.com\/pelatihan-manajemen-sdm/g, '/kategori-pelatihan/manajemen-sdm/'],
  [/https:\/\/wahanatotalita\.com\/pelatihan-iso/g, '/kategori-pelatihan/internal-audit-iso-9001-2015/'],
  [/https:\/\/wahanatotalita\.com\/pelatihan\/pelatihan-ahli-k3-umum-sertifikasi-bnsp\//g, '/kategori-pelatihan/sertifikasi-bnsp/'],
  [/https:\/\/wahanatotalita\.com\/pelatihan\/ahli-k3-umum-balikpapan\//g, '/kategori-pelatihan/pelatihan-k3-balikpapan-ikn/'],
  [/https:\/\/wahanatotalita\.com\/pelatihan-k3-batam\//g, '/kategori-pelatihan/pelatihan-k3-batam-kepri/'],
  [/https:\/\/wahanatotalita\.com\/jadwal\//g, '/jenis-pelatihan/pelatihan-publik/'],
  [/https:\/\/wahanatotalita\.com\/perusahaan/g, '/tentang-kami/'],
  [/https:\/\/wahanatotalita\.com\/klien/g, '/tentang-kami/'],
  [/https:\/\/wahanatotalita\.com\/tools\/safety-talk/g, '/kategori-pelatihan/k3-keselamatan-kerja/'],
  [/https:\/\/wahanatotalita\.com\/perpanjangan-skp/g, '/kategori-pelatihan/tata-cara-pelaporan-p2k3-disnaker/'],
  [/https:\/\/smk3\.wahanatotalita\.com\//g, '/kategori-pelatihan/panduan-audit-smk3-pp-50-2012/'],
  [/smk3\.wahanatotalita\.com/g, 'panduan audit SMK3 internal'],
  [/https:\/\/ahlik3umum\.wahanatotalita\.com\//g, '/kategori-pelatihan/ahli-k3-umum-kemnaker/'],
  [/ahlik3umum\.wahanatotalita\.com/g, 'panduan sertifikasi Ahli K3 Umum'],
  [/https:\/\/penaconsultant\.com\/pelatihan\/ahli-k3-umum-2/g, '/kategori-pelatihan/ahli-k3-umum-kemnaker/'],
  [/https:\/\/wahanatotalita\.com\/?/g, '/'],
];

let cleanedFilesCount = 0;

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  for (const [pattern, replacement] of linkReplacements) {
    content = content.replace(pattern, replacement);
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    cleanedFilesCount++;
    console.log(`[Cleaned] ${file}`);
  }
}

console.log(`[Link Cleaner] Successfully cleaned ${cleanedFilesCount} files in ${pagesDir}`);
