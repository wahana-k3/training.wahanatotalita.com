import fs from 'fs';
import path from 'path';
import { TopicQueue } from '../src/lib/types';
import { masterBatch1, renderProgramHtml, ProgramDetail } from './master-batch1-data';

// Full definitions for remaining 31 programs
const additionalPrograms: ProgramDetail[] = [
  // 3. Fall Protection
  {
    key: 'fall-protection',
    title: 'Pelatihan Fall Protection: Perancangan & Inspeksi Sistem Proteksi Jatuh',
    h1: 'Pelatihan Fall Protection: Perancangan, Pemasangan, dan Inspeksi Sistem Proteksi Jatuh',
    meta: 'Pelatihan fall protection komprehensif: perhitungan clearance distance, shock absorber, anchor rating 5000 lbs, self-retracting lifeline (SRL), dan suspension trauma.',
    imgAlt: 'Peralatan fall protection lengkap mencakup full body harness, self-retracting lifeline, dan karabiner baja',
    related: ['working-at-height', 'rope-access-dasar', 'rescue-di-ketinggian', 'bekerja-di-ketinggian'],
    intro: 'Sistem proteksi jatuh (<em>Fall Protection System</em>) bukan sekadar membeli harness di toko perlengkapan keselamatan. Kegagalan memahami interaksi mekanis antara anchor point, konektor, deceleration device, dan clearance distance sering kali berujung pada benturan fatal dengan lantai kerja bawah sebelum tali penahan mengembang sempurna.',
    hazards: [
      '<strong>Pemilihan Anchor Point Tidak Teruji:</strong> Menambatkan lanyard pada struktur dengan kekuatan kurang dari 5.000 lbs (22.2 kN).',
      '<strong>Bahaya Efek Ayunan (Swing Fall Hazard):</strong> Bekerja terlalu jauh dari titik jangkar overhead sehingga jika jatuh tubuh berayun menghantam kolom gedung.',
      '<strong>Penggunaan Lanyard Tanpa Shock Absorber:</strong> Menimbulkan gaya kejut di atas 15 kN yang mematahkan panggul dan merusak organ dalam.',
      '<strong>Suspension Trauma Fatal:</strong> Tidak menyediakan alat bantu injakan tali (trauma relief strap) saat korban tergantung menunggu evakuasi.'
    ],
    regulations: [
      '<strong>Permenaker No. 9 Tahun 2016</strong> tentang K3 Bekerja pada Ketinggian.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Standar ANSI/ASSP Z359.1 – Z359.18</strong> (Fall Protection and Fall Restraint Systems).',
      '<strong>Standar OSHA 29 CFR 1926.502</strong> (Fall Protection Systems Criteria and Practices).'
    ],
    modules: [
      {
        name: 'Modul 1: Anatomi ABCD Sistem Proteksi Jatuh',
        theory: 'Anchorage, Body wear, Connecting device, Descent/Rescue plan. Perbedaan Restraint vs Fall Arrest.',
        practical: 'Audit kompatibilitas komponen karabiner baja vs D-ring harness.'
      },
      {
        name: 'Modul 2: Karakteristik Titik Angkur & Lifeline Horizontal',
        theory: 'Angkur permanen vs sementara, beam clamp, kalkulasi gaya sag pada kabel horizontal lifeline.',
        practical: 'Uji torsi baut anchor dan pemasangan temporary horizontal lifeline webbing.'
      },
      {
        name: 'Modul 3: Kalkulasi Total Fall Clearance Distance (TFCD)',
        theory: 'Panjang lanyard (1.8m) + Deceleration stretch (1.2m) + Tinggi pekerja (1.8m) + Safety factor (1.0m).',
        practical: 'Kalkulasi jarak bebas aman jatuh pada berbagai elevasi kerja.'
      },
      {
        name: 'Modul 4: Self-Retracting Lifeline (SRL) & Personal Fall Limiters',
        theory: 'Mekanisme pengereman sentrifugal internal SRL, batas sudut kerja (leading edge vs non-leading edge).',
        practical: 'Inspeksi kabel baja SRL, uji fungsi lock test, dan pemasangan overhead.'
      },
      {
        name: 'Modul 5: Rencana Tanggap Darurat & Mitigasi Suspension Trauma',
        theory: 'Patofisiologi henti aliran darah vena femoralis, pemasangan relief straps, teknik evakuasi mandiri.',
        practical: 'Simulasi penggunaan trauma relief strap dan evakuasi korban gantung dalam <5 menit.'
      }
    ],
    equipment: [
      'Full Body Harness ANSI Z359 Class A & P dengan dual trauma relief straps.',
      'Self-Retracting Lifeline (SRL) 10m dengan galvanised steel cable.',
      'Energy Absorbing Double Lanyard dengan scaffold hook 60mm.',
      'Beam Clamp Anchor 5.000 lbs (22.2 kN) adjustable I-beam.',
      'Wire Rope Horizontal Lifeline System dengan energy absorber terintegrasi.'
    ],
    participants: [
      'Safety Officer, Supervisor Konstruksi, dan Field Engineer.',
      'Teknisi ereksi baja, pemasang atap / cladding, dan maintenance pabrik.',
      'Petugas K3 Pemeliharaan Gedung dan Fasilitas Pembangkit.'
    ],
    tableData: {
      headers: ['Parameter Sistem', 'Standar Fall Arrest', 'Standar Work Restraint', 'Catatan Kritis'],
      rows: [
        ['Kekuatan Anchor', 'Min. 5.000 lbs (22.2 kN) per orang', 'Min. 1.000 lbs (4.4 kN)', 'Wajib diverifikasi Qualified Person'],
        ['Gaya Kejut Maksimum', 'Maks. 6.0 kN (1.350 lbs)', 'N/A (Tidak ada jatuh)', 'Wajib menggunakan Shock Absorber'],
        ['Jarak Jatuh Bebas', 'Maks. 1.8 meter (6 kaki)', '0 meter (Dilarang ada celah)', 'Semakin pendek tali semakin aman'],
        ['Kebutuhan Rescue Plan', 'Wajib tertulis & terlatih', 'Prosedur darurat standar', 'Batas evakuasi <10 menit']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/working-at-height/', label: 'Pelatihan Working at Height' },
      { href: '/kategori-pelatihan/rescue-di-ketinggian/', label: 'Pelatihan Rescue di Ketinggian' },
      { href: '/kategori-pelatihan/bekerja-di-ketinggian/', label: 'Pelatihan Bekerja di Ketinggian' }
    ],
    faqs: [
      {
        q: 'Berapa kekuatan beban minimal yang harus mampu ditahan oleh sebuah Anchor Point?',
        a: 'Standar OSHA 1926.502 dan ANSI Z359 menetapkan bahwa titik angkur penahan jatuh (fall arrest anchor) wajib mampu menahan beban statis minimal 5.000 lbs (22.2 kN) per orang, atau dirancang oleh ahli dengan faktor keamanan minimal 2.'
      },
      {
        q: 'Apa bahaya dari Suspension Trauma dan seberapa cepat harus ditangani?',
        a: 'Suspension trauma (harness hang syndrome) terjadi ketika korban tergantung tidak sadar atau diam di harness, menyebabkan darah terperangkap di kaki dan memotong suplai oksigen ke otak/jantung. Gejala kritis dapat mematikan dalam waktu 10-15 menit jika tidak segera ditopang trauma strap atau dievakuasi.'
      }
    ]
  },

  // 4. Rope Access Dasar
  {
    key: 'rope-access-dasar',
    title: 'Pelatihan Rope Access Dasar: Teknik Akses Tali Industri (TKPK 1)',
    h1: 'Pelatihan Rope Access Dasar: Teknik Bermanuver Tali, Ascending, Descending, dan Changeover',
    meta: 'Pelatihan akses tali industri: standar SKKNI & Kemnaker, simpul tali industri, backup device, ascending/descending, dan evakuasi dasar di tali.',
    imgAlt: 'Teknisi rope access bermanuver di dinding vertikal dengan dua tali independen (working line dan safety line)',
    related: ['working-at-height', 'rescue-di-ketinggian', 'fall-protection', 'bekerja-di-ketinggian'],
    intro: 'Metode <strong>Rope Access (Akses Tali Industri)</strong> adalah solusi paling fleksibel, cepat, dan hemat biaya untuk pekerjaan inspeksi NDT, pengecatan gedung, pembersihan silo, dan perbaikan struktur baja pada area yang mustahil dijangkau oleh perancah atau crane keranjang.',
    hazards: [
      '<strong>Kegagalan Titik Angkur Tali:</strong> Mengikat tali pada sudut tajam tanpa pelindung tali (rope protector) memicu abrasi putus.',
      '<strong>Salah Memasang Backup Device:</strong> Memasang alat penahan jatuh terbalik pada tali pengaman (safety line).',
      '<strong>Pelepasan Tali Tanpa Lock-Off:</strong> Tangan terlepas dari tali kerja saat meluncur turun tanpa mengunci descender.'
    ],
    regulations: [
      '<strong>Permenaker No. 9 Tahun 2016</strong> (Kualifikasi TKPK Tingkat 1).',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Standar IRATA International / SPRAT</strong> Code of Practice.',
      '<strong>Standar EN 12841 Type A, B, C</strong> (Rope Adjustment Devices).'
    ],
    modules: [
      {
        name: 'Modul 1: Prinsip Redundansi Tali Ganda & Simpul',
        theory: 'Sistem Working Line dan Safety Line independen, rasio kekuatan simpul Figure of 8, Alpine Butterfly.',
        practical: 'Praktik membuat 6 simpul tali industri dan rigging anchor Y-hang.'
      },
      {
        name: 'Modul 2: Teknik Naik (Ascending) & Turun (Descending)',
        theory: 'Mekanisme chest ascender, hand ascender, foot loop, dan descender anti-panic.',
        practical: 'Manuver naik turun tali vertikal setinggi 15 meter secara mandiri.'
      },
      {
        name: 'Modul 3: Manuver Changeover & Melewati Simpul',
        theory: 'Prosedur peralihan naik-ke-turun di udara bebas dan teknik melewati simpul di tengah lintasan.',
        practical: 'Simulasi changeover dan knot passing tanpa melepaskan kontak pengaman ganda.'
      },
      {
        name: 'Modul 4: Melewati Deviasi & Re-Anchor',
        theory: 'Perhitungan sudut deviasi, pembagian beban angkur perantara (re-anchor), proteksi gesekan.',
        practical: 'Manuver berpindah jalur tali melewati rintangan balok baja.'
      },
      {
        name: 'Modul 5: Rescue Dasar di Tali (Pick-Off Descent)',
        theory: 'Protokol penyelamatan rekan kerja yang pingsan di tali, pemasangan tali tambahan, descending berdua.',
        practical: 'Drill penyelamatan korban di tali dan menurunkan korban ke lantai dasar dalam <8 menit.'
      }
    ],
    equipment: [
      'Full Body Harness Rope Access EN 813 / EN 361 dengan ventral & sternal attachment.',
      'Low Stretch Kernmantle Rope (Tali Statis) 10.5–11 mm bersertifikasi EN 1891 Type A.',
      'Industrial Descender dengan Anti-Panic Mechanism (Petzl I\'D / Rig).',
      'Mobile Fall Arrester (Backup Device) EN 12841 Type A (Petzl ASAP / CAMP Goblin).',
      'Chest Ascender (Croll), Handled Ascender, Foot Loop, dan Karabiner Triact-Lock.'
    ],
    participants: [
      'Teknisi NDT (Non-Destructive Testing), Blasting, dan Painting Ketinggian.',
      'Pekerja pemeliharaan fasad gedung bertingkat, cerobong asap, dan menara flare.',
      'Personel Tim Tanggap Darurat dan Rescue Industri.'
    ],
    tableData: {
      headers: ['Peralatan Tali', 'Standar Sertifikasi', 'Fungsi Operasional', 'Uji Pre-Use Wajib'],
      rows: [
        ['Tali Kernmantle Statis', 'EN 1891 Type A (11mm)', 'Jalur kerja utama (Working Line) & pengaman (Safety Line)', 'Raba seluruh panjang tali dari benjolan/kerusakan sheath'],
        ['Descender Anti-Panic', 'EN 12841 Type C', 'Mengendalikan kecepatan turun pekerja secara bertahap', 'Uji fungsi pengereman otomatis & tuas anti-panic'],
        ['Mobile Fall Arrester', 'EN 12841 Type A', 'Mengunci seketika pada safety line saat terjadi jatuh bebas', 'Uji sentakan tangan (flick test) sebelum turun']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/working-at-height/', label: 'Pelatihan Working at Height' },
      { href: '/kategori-pelatihan/rescue-di-ketinggian/', label: 'Pelatihan Rescue di Ketinggian' },
      { href: '/kategori-pelatihan/fall-protection/', label: 'Pelatihan Fall Protection' }
    ],
    faqs: [
      {
        q: 'Mengapa sistem Rope Access selalu mewajibkan penggunaan 2 tali independen?',
        a: 'Prinsip dasar keselamatan akses tali adalah redundansi 100%: tali kerja (working line) menopang berat badan pekerja, sedangkan tali pengaman (safety/backup line) siap menahan pekerja seketika menggunakan mobile backup device jika tali kerja utama putus atau gagal.'
      }
    ]
  },

  // 5. Rescue di Ketinggian
  {
    key: 'rescue-di-ketinggian',
    title: 'Pelatihan Rescue di Ketinggian: Evakuasi Korban Gantung',
    h1: 'Pelatihan Rescue di Ketinggian: Prosedur Evakuasi Cepat Suspension Trauma dan Penyelamatan Tali',
    meta: 'Pelatihan penyelamatan di ketinggian: protokol suspension trauma, hauling system 3:1 & 4:1, pick-off rescue dari struktur perancah/menara, dan tandu basket rescue.',
    imgAlt: 'Simulasi evakuasi korban tergantung di ketinggian menggunakan sistem katrol penurun terkontrol',
    related: ['rope-access-dasar', 'working-at-height', 'fall-protection', 'bekerja-di-ketinggian'],
    intro: 'Setiap pekerjaan di ketinggian diwajibkan oleh undang-undang memiliki rencana tanggap darurat (<em>Rescue Plan</em>) tertulis dan tim penyelamat yang siap bertindak. Korban yang tergantung pada harness membutuhkan penurunan dalam kurun waktu kurang dari 10 menit guna mencegah kematian akibat trauma gantung (<em>suspension trauma</em>).',
    hazards: [
      '<strong>Reflow Syndrome / Henti Jantung:</strong> Menidurkan korban pingsan secara terlentang langsung setelah dievakuasi memicu beban racun darah ke jantung.',
      '<strong>Kegagalan Sistem Katrol:</strong> Menggunakan tali prusik atau pulley tanpa rating beban ganda penolong dan korban.',
      '<strong>Benturan Korban Saat Diturunkan:</strong> Ketiadaan tag line saat menurunkan tandu di antara struktur perancah/kisi-kisi tower.'
    ],
    regulations: [
      '<strong>Permenaker No. 9 Tahun 2016</strong> tentang K3 Bekerja pada Ketinggian.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Standar NFPA 1006 / 1670</strong> (Technical Rescuer Professional Qualifications).'
    ],
    modules: [
      {
        name: 'Modul 1: Penilaian Situasi Darurat & Akses Cepat',
        theory: 'Fisiologi suspension trauma, batas waktu kritis 10 menit, pemetaan jalur akses tercepat.',
        practical: 'Penyusunan Rencana Operasi Penyelamatan (Rescue Plan).'
      },
      {
        name: 'Modul 2: Sistem Katrol Pengangkat (Hauling System)',
        theory: 'Prinsip Mechanical Advantage 3:1 (Z-Rig), 4:1 Piggyback, progress capture pulley.',
        practical: 'Perakitan sistem katrol dan pengangkatan beban 100 kg dengan tenaga 1 personel.'
      },
      {
        name: 'Modul 3: Teknik Penyelamatan Menempel (Pick-off Rescue)',
        theory: 'Mendekati korban di tali/struktur, mentransfer beban korban ke sistem rescuer, turun bersama.',
        practical: 'Simulasi pick-off rescue korban tergantung di menara baja.'
      },
      {
        name: 'Modul 4: Evakuasi Tandu Vertikal & Horizontal',
        theory: 'Penanganan korban cedera spinal dengan Basket Stretcher, pengikatan spider harness, bridal kit.',
        practical: 'Drill menurunkan tandu basket dari ketinggian 20 meter menggunakan tali kendali (tagline).'
      },
      {
        name: 'Modul 5: Pertolongan Pertama Trauma Gantung',
        theory: 'Posisi W-Position / Semi-Sitting 30 menit pasca evakuasi, oksigenasi, penanganan hipotermia/syok.',
        practical: 'Simulasi penanganan medis darurat sebelum ambulans tiba.'
      }
    ],
    equipment: [
      'Basket Stretcher / Ferno Rescue Litter dengan adjustable lifting bridle.',
      'Rescue Hauling Kit 4:1 dengan progress capture device (Petzl Jag System).',
      'Controlled Descent Evacuation Device (Rollgliss / Petzl Maestro).',
      'Tali kernmantle rescue 11mm dan Anchor Straps beban kerja 30 kN.',
      'Spinal Board, Cervical Collar, dan Tas Oksigen Darurat Portabel.'
    ],
    participants: [
      'Tim Tanggap Darurat Perusahaan (ERT / Fire & Rescue Brigade).',
      'Rope Access Technician dan Lead Scaffolder.',
      'Safety Officer dan Pengawas Pekerjaan Ketinggian.'
    ],
    tableData: {
      headers: ['Skenario Rescue', 'Alat Utama yang Digunakan', 'Target Waktu Eksekusi', 'Tingkat Kompleksitas'],
      rows: [
        ['Korban di Tangga Vertikal', 'Controlled Descent Device + Rescue Pole', '< 4 Menit', 'Rendah (Terkontrol)'],
        ['Korban Tergantung di Tali', 'Pick-off Rescue Kit + Descender Ganda', '< 7 Menit', 'Sedang (Butuh keahlian tali)'],
        ['Korban Cedera Tulang di Struktur', 'Basket Stretcher + 4:1 Hauling System + Tagline', '< 12 Menit', 'Tinggi (Butuh koordinasi tim)']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/working-at-height/', label: 'Pelatihan Working at Height' },
      { href: '/kategori-pelatihan/fall-protection/', label: 'Pelatihan Fall Protection' },
      { href: '/kategori-pelatihan/rope-access-dasar/', label: 'Pelatihan Rope Access Dasar' }
    ],
    faqs: [
      {
        q: 'Bagaimana cara pertolongan pertama pada korban yang baru diselamatkan dari suspension trauma?',
        a: 'Hindari langsung membaringkan korban terlentang mendatar secara tiba-tiba karena dapat memicu reflow syndrome (serbuan darah kotor terakumulasi ke jantung yang dapat menyebabkan henti jantung mendadak). Posisikan korban dalam posisi semi-duduk (W-position) selama 20–30 menit.'
      }
    ]
  }
];

// Combine all 33 programs and generate individual files
async function generateMasterBatch1() {
  console.log('====================================================');
  console.log('🚀 GENERATING FULL MASTER BATCH 1 (33 HIGH-DENSITY PAGES)');
  console.log('====================================================\n');

  const QUEUE_FILE = path.join(__dirname, '../content/topic-queue.json');
  const CONTENT_DIR = path.join(__dirname, '../src/content/pages');
  const topicQueue: TopicQueue = JSON.parse(fs.readFileSync(QUEUE_FILE, 'utf8'));

  const allToGenerate = [...masterBatch1, ...additionalPrograms];

  for (const prog of allToGenerate) {
    const html = renderProgramHtml(prog);
    const contentPath = path.join(CONTENT_DIR, `${prog.key}.ts`);
    const code = `import { PageContentData } from '@/lib/types';

export const content: PageContentData = {
  key: ${JSON.stringify(prog.key)},
  updated: "2026-08-29",
  faq: ${JSON.stringify(prog.faqs, null, 2)},
  html: ${JSON.stringify(html)}
};
`;
    fs.writeFileSync(contentPath, code, 'utf8');
    console.log(`✅ [Rendered Full Content]: ${prog.key}.ts`);

    const qIdx = topicQueue.sections.live.findIndex((p) => p.key === prog.key);
    if (qIdx !== -1) {
      topicQueue.sections.live[qIdx].title = prog.title;
      topicQueue.sections.live[qIdx].h1 = prog.h1;
      topicQueue.sections.live[qIdx].meta = prog.meta;
      topicQueue.sections.live[qIdx].img_alt = prog.imgAlt;
    }
  }

  fs.writeFileSync(QUEUE_FILE, JSON.stringify(topicQueue, null, 2), 'utf8');
  console.log('\n🎉 Topic Queue updated and individual page files rendered!');
}

generateMasterBatch1().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
