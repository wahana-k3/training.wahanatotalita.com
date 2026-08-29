import fs from 'fs';
import path from 'path';
import { TopicQueue } from '../src/lib/types';

export interface FullProgramSpec {
  key: string;
  title: string;
  h1: string;
  meta: string;
  imgAlt: string;
  related: string[];
  intro: string;
  hazards: string[];
  regulations: string[];
  modules: { name: string; theory: string; practical: string }[];
  equipment: string[];
  participants: string[];
  tableData: { headers: string[]; rows: string[][] };
  links: { href: string; label: string }[];
  faqs: { q: string; a: string }[];
}

export const masterList: FullProgramSpec[] = [
  // 1. Confined Space Entry
  {
    key: 'confined-space-entry',
    title: 'Pelatihan Confined Space Entry: Standar Prosedur Masuk & Bekerja Aman',
    h1: 'Pelatihan Confined Space Entry: Standar Prosedur Masuk dan Bekerja Aman di Ruang Terbatas',
    meta: 'Pelatihan confined space entry: identifikasi bahaya atmosfer, sistem izin kerja masuk (PTW), ventilasi mekanik, pengujian gas beracun, dan sertifikasi K3 Kemnaker.',
    imgAlt: 'Pekerja industri mengenakan APD lengkap dan harness bersiap memasuki ruang terbatas dengan pengawasan safety attendant',
    related: ['gas-tester', 'rescue-ruang-terbatas', 'permit-to-work', 'teknisi-k3-ruang-terbatas'],
    intro: 'Bekerja di dalam ruang terbatas (<em>confined space</em>)—seperti tangki penyimpanan minyak, bejana tekan (pressure vessel), silo semen/biji-bijian, gorong-gorong drainase, manhole utilitas kabel, dan terowongan pipa—merupakan salah satu aktivitas operasional dengan tingkat risiko fatalitas tertinggi di industri manufaktur, migas, petrokimia, dan konstruksi di Indonesia. Data investigasi kecelakaan kerja nasional mengungkapkan fakta tragis: <strong>lebih dari 60% korban meninggal dunia di ruang terbatas adalah rekan kerja yang berniat menolong (would-be rescuers)</strong> tanpa menyadari bahwa atmosfer di dalam ruangan telah kehilangan oksigen atau dipenuhi gas beracun mematikan dalam konsentrasi fatal.',
    hazards: [
      '<strong>Defisiensi Oksigen (&lt;19.5%):</strong> Menyebabkan hipoksia, disorientasi mental, hilangnya kemampuan koordinasi gerak dalam 10 detik, dan henti jantung dalam 2–4 menit.',
      '<strong>Kelebihan Oksigen (&gt;23.5%):</strong> Meningkatkan reaktivitas bahan mudah terbakar secara drastis, di mana percikan kecil dapat memicu bola api (flash fire) dahsyat.',
      '<strong>Gas Toksik Akut (H2S, CO, SO2, NH3):</strong> Gas Hidrogen Sulfida (H2S) melumpuhkan indra penciuman pada konsentrasi di atas 100 ppm, membuat korban merasa gas telah hilang padahal konsentrasinya sudah mematikan.',
      '<strong>Bahaya Terperangkap (Engulfment):</strong> Butiran serbuk gandum, semen curah, atau lumpur yang dapat menimbun dan menenggelamkan tubuh pekerja hingga mengalami mati lemas (asfiksia mekanik).',
      '<strong>Bahaya Energi Tersisa:</strong> Putaran impeler agitator, semburan uap steam panas, atau sengatan arus listrik akibat ketiadaan isolasi energi LOTO.'
    ],
    regulations: [
      '<strong>Undang-Undang No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Keputusan Direktur Jenderal Pembinaan Pengawasan Ketenagakerjaan No. Kep. 113/DJPPK/IX/2006</strong> tentang Pedoman Teknis K3 Bekerja di Ruang Terbatas.',
      '<strong>Peraturan Menteri Ketenagakerjaan No. 5 Tahun 2018</strong> tentang Keselamatan dan Kesehatan Kerja Lingkungan Kerja.',
      '<strong>Standar Internasional OSHA 29 CFR 1910.146</strong> (Permit-Required Confined Spaces).'
    ],
    modules: [
      {
        name: 'Modul 1: Kerangka Hukum & Identifikasi Ruang Terbatas',
        theory: 'Regulasi Kemnaker, klasifikasi Non-Permit vs Permit-Required Confined Space (PRCS), anatomi kecelakaan nyata di Indonesia.',
        practical: 'Audit visual identifikasi potensi ruang terbatas di fasilitas pabrik/plant.'
      },
      {
        name: 'Modul 2: Toksikologi & Teknik Pengujian Atmosfer Gas',
        theory: 'Prinsip gas testing, stratifikasi berat jenis gas, batas NAB/TLV-TWA, LEL vs UEL, racun sensor detektor.',
        practical: 'Simulasi continuous gas testing 4-gas detector, bump test, dan pencatatan log atmosfer.'
      },
      {
        name: 'Modul 3: Isolasi Energi Berbahaya (LOTO) & Ventilasi',
        theory: 'Metode isolasi mekanis (blinding/spading), isolasi valve, debit ventilasi (Air Changes per Hour), penataan blower.',
        practical: 'Pemasangan Lockout Tagout pada valve/pipa inlet dan perakitan ducting ventilasi anti-turbulensi.'
      },
      {
        name: 'Modul 4: Sistem Izin Masuk (Confined Space Entry Permit)',
        theory: 'Hierarki wewenang (Entry Supervisor, Entrant, Attendant), verifikasi checklist keselamatan pra-masuk.',
        practical: 'Simulasi penyusunan dan pengesahan dokumen Surat Izin Masuk (PTW).'
      },
      {
        name: 'Modul 5: APD Khusus & Prosedur Tanggap Darurat Non-Entry',
        theory: 'Pemilihan full body harness khusus retrieval, SCBA/Airline Respirator, sistem tripod, winch mechanical.',
        practical: 'Drill simulasi evakuasi korban pingsan dari manhole vertikal menggunakan tripod & winch dalam <3 menit.'
      }
    ],
    equipment: [
      'Multi-Gas Detector 4-in-1 (O2, LEL, CO, H2S) portabel dengan pompa hisap dan probe panjang.',
      'Aluminium Rescue Tripod bersertifikasi EN 795 / ANSI Z359 dengan Fall Arrest Recovery Winch.',
      'Self-Contained Breathing Apparatus (SCBA) tekanan positif 300 bar dan Airline Breathing Apparatus.',
      'Exhaust/Blower Fan Explosion-Proof (ATEX Zone 1/2) dengan flexible ducting anti-statis.',
      'Full Body Harness dengan attachment D-Ring dorsal dan shoulder rescue loops.',
      'Lampu penerangan keselamatan ekstra rendah tegangan (Extra Low Voltage / Intrinsically Safe Torch).'
    ],
    participants: [
      'Operator pembersihan dan inspeksi tangki timbun, reaktor, boiler, dan sewage treatment plant (STP).',
      'Teknisi mekanik, instrumen, dan elektrikal yang bertugas melakukan perbaikan di dalam manhole atau saluran kabel.',
      'Safety Officer, Safety Inspector, dan Pengawas Lapangan (Supervisor K3).',
      'Anggota Tim Tanggap Darurat Internal (Emergency Response Team - ERT).'
    ],
    tableData: {
      headers: ['Parameter Gas', 'Batas Aman Masuk', 'Batas Evakuasi Seketika (Abort)', 'Efek Fisiologis / Dampak'],
      rows: [
        ['Oksigen (O2)', '19.5% – 23.5%', '<19.5% atau >23.5%', 'Di bawah 16% memicu hipoksia, hilang kesadaran mendadak'],
        ['Flammable Gas (LEL)', '<5% (Hot Work) / <10% (Cold Work)', '>=10% LEL', 'Risiko ledakan dan kebakaran seketika jika ada sumber panas'],
        ['Hidrogen Sulfida (H2S)', '<1 ppm (NAB Kemnaker)', '>=5 ppm (Ceiling Limit)', 'Melumpuhkan saraf penciuman pada 100 ppm, fatal dalam hitungan menit'],
        ['Karbon Monoksida (CO)', '<25 ppm (NAB Kemnaker)', '>=50 ppm', 'Mengikat hemoglobin darah 200x lebih kuat dari O2, asfiksia internal']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/gas-tester/', label: 'Pelatihan Gas Tester Tersertifikasi' },
      { href: '/kategori-pelatihan/teknisi-k3-ruang-terbatas/', label: 'Pelatihan Teknisi K3 Ruang Terbatas' },
      { href: '/kategori-pelatihan/rescue-ruang-terbatas/', label: 'Pelatihan Penyelamatan di Ruang Terbatas' },
      { href: '/kategori-pelatihan/permit-to-work/', label: 'Pelatihan Sistem Izin Kerja (PTW)' }
    ],
    faqs: [
      {
        q: 'Apa saja kriteria legal sebuah area dikategorikan sebagai Confined Space?',
        a: 'Berdasarkan Kepdirjen Binwasnaker No. Kep. 113/DJPPK/IX/2006, ruang terbatas didefinisikan sebagai ruangan yang: (1) Cukup luas untuk dimasuki tubuh pekerja, (2) Memiliki akses masuk dan keluar terbatas, (3) Tidak dirancang untuk tempat kerja berkelanjutan, dan (4) Memiliki potensi bahaya atmosfer atau bahaya fisik mekanikal yang mengancam nyawa.'
      },
      {
        q: 'Berapa batas aman parameter atmosfer sebelum diizinkan masuk ke ruang terbatas?',
        a: 'Parameter wajib lolos uji gas: (1) Oksigen (O2) berada di rentang 19.5% hingga 23.5%, (2) Gas mudah terbakar/meledak (LEL) berada di bawah 5% untuk pekerjaan panas atau <10% untuk pekerjaan dingin, (3) Gas Hidrogen Sulfida (H2S) di bawah 1 ppm / 5 ppm, dan (4) Karbon Monoksida (CO) di bawah 25 ppm.'
      },
      {
        q: 'Apa tugas mutlak seorang Standby Person (Attendant) di luar manhole?',
        a: 'Petugas jaga (attendant) wajib: (1) Mencatat log nama dan waktu masuk/keluar setiap pekerja, (2) Mempertahankan kontak komunikasi visual/suara tanpa henti, (3) Mengawasi pembacaan gas detector portabel secara terus-menerus, dan (4) Dilarang keras meninggalkan pos jaga atau masuk ke dalam ruangan untuk mencoba menyelamatkan korban sendirian.'
      },
      {
        q: 'Bolehkah tabung gas pengelasan atau genset diletakkan di dalam ruang terbatas?',
        a: 'Dilarang keras. Seluruh mesin pembakaran dalam (genset/kompresor), tabung gas bertekanan (LPG, Asetilen, Oksigen) wajib ditempatkan di luar ruangan pada jarak aman untuk mencegah akumulasi gas bocor atau gas buang beracun di dalam ruang kerja.'
      },
      {
        q: 'Bagaimana cara menentukan kapasitas blower ventilasi mekanis yang cukup?',
        a: 'Ventilasi mekanis wajib mampu melakukan pergantian udara minimal 20 kali pergantian volume ruangan per jam (20 Air Changes per Hour - ACH) sebelum dan selama pekerjaan berlangsung, dengan posisi selang inlet meniupkan udara segar tepat ke zona pernapasan pekerja di dasar ruangan.'
      }
    ]
  },

  // 2. Scaffolding Inspector
  {
    key: 'scaffolding-inspector',
    title: 'Pelatihan Scaffolding Inspector: Sertifikasi & Audit Kelayakan Perancah',
    h1: 'Pelatihan Scaffolding Inspector: Prosedur Audit Struktur, Tagging System, dan Sertifikasi Kelayakan',
    meta: 'Pelatihan scaffolding inspector profesional: formulir checklist audit struktur, pengujian kelurusan plumbness, verifikasi tie-in, dan otorisasi Scaff-Tag (Green Tag / Red Tag).',
    imgAlt: 'Inspector scaffolding menempelkan green tag penanda perancah aman dan menandatangani kartu inspeksi harian',
    related: ['pengawas-scaffolding', 'operator-scaffolding', 'peran-jabatan/safety-officer-k3', 'working-at-height'],
    intro: 'Perancah (<em>scaffolding</em>) yang dibangun setinggi belasan hingga puluhan meter di proyek konstruksi, galangan kapal, dan kilang minyak memikul beban puluhan ton material dan ratusan pekerja setiap harinya. Keruntuhan struktur perancah selalu berujung pada bencana fatalitas massal (<em>catastrophic failure</em>), kerugian material raksasa, dan penghentian proyek oleh otoritas ketenagakerjaan. Seorang <strong>Scaffolding Inspector</strong> memegang wewenang hukum tertinggi dalam menentukan apakah sebuah struktur perancah layak digunakan (<em>Green Tag</em>), memerlukan batasan kerja khusus (<em>Yellow Tag</em>), atau wajib disegel dan dilarang dinaiki (<em>Red Tag</em>).',
    hazards: [
      '<strong>Kegagalan Landasan (Differential Settlement):</strong> Amblesnya satu titik tiang perancah akibat tanah lembek memicu keruntuhan beruntun (progressive collapse).',
      '<strong>Beban Berlebih (Platform Overloading):</strong> Menumpuk batu bata, semen, atau pipa baja di atas dek melebihi Kapasitas Beban Kerja Aman (Safe Working Load).',
      '<strong>Ketiadaan Pengikat Dinding (Tie-In Deficiencies):</strong> Mengabaikan ikatan ke struktur gedung sehingga perancah roboh diterpa hembusan angin kencang.',
      '<strong>Modifikasi Ilegal oleh Pekerja:</strong> Pekerja melepas klem diagonal bracing atau toeboard untuk memudahkan akses material tanpa izin inspector.'
    ],
    regulations: [
      '<strong>Permenaker No. Per.01/MEN/1980</strong> tentang Keselamatan dan Kesehatan Kerja pada Konstruksi Bangunan.',
      '<strong>Keputusan Bersama Menaker & MenPU No. 174/1986 & 104/KPTS/1986</strong> tentang Pedoman K3 Konstruksi Bangunan.',
      '<strong>Standar Internasional BS EN 12811-1</strong> (Temporary Works Equipment - Scaffolds).',
      '<strong>Standar OSHA 29 CFR 1926 Subpart L</strong> (Scaffolds).'
    ],
    modules: [
      {
        name: 'Modul 1: Klasifikasi Tipe Perancah & Desain Beban',
        theory: 'Perancah Tabung & Klem (Tube & Coupler), Frame Scaffolding, Modular/Ringlock, Cantilever, Suspended Scaffold, dan Mobile Tower.',
        practical: 'Kalkulasi klasifikasi beban kerja: Ringan (1.5 kN/m²), Sedang (2.0 kN/m²), Berat (3.0 kN/m²).'
      },
      {
        name: 'Modul 2: Audit Integritas Komponen & Fondasi',
        theory: 'Kriteria cacat pipa (korosi, bengkok, retak las), keausan drat klem, deformasi base plate, penurunan tanah (differential settlement).',
        practical: 'Uji pengukuran ketebalan pipa (ultrasonic thickness), inspeksi klem dengan torque wrench.'
      },
      {
        name: 'Modul 3: Geometri Struktur & Sistem Pengaku (Bracing)',
        theory: 'Fungsi Façade Bracing, Ledger Bracing, Plan Bracing, toleransi kemiringan tiang (plumbness), sambungan joint pin vs sleeve.',
        practical: 'Pengukuran kelurusan struktur menggunakan unting-unting (plumb bob), waterpass, dan laser measure.'
      },
      {
        name: 'Modul 4: Platform Kerja, Akses Tangga & Guardrail',
        theory: 'Kelayakan papan kayu/metal plank (defleksi maksimal L/100), celah antar papan (<25 mm), toprail (100–115 cm), midrail, toeboard (15 cm).',
        practical: 'Checklist audit trap tangga internal, handrail, dan jaring pengaman serpihan (debris netting).'
      },
      {
        name: 'Modul 5: Tagging System, Scaffolding Register & Legal Audit',
        theory: 'Prosedur pemasangan Scaff-Tag, masa berlaku inspeksi 7 harian, dokumentasi laporan audit resmi perancah.',
        practical: 'Simulasi audit lapangan nyata pada perancah aktif dan pengisian berkas audit sertifikasi.'
      }
    ],
    equipment: [
      'Digital Torque Wrench terkalibrasi untuk uji kekencangan klem 40-50 Nm.',
      'Laser Distance Meter & Precision Spirit Level (Waterpass magnetik 60 cm).',
      'Unting-unting baja (Plumb Bob 500g) dengan tali ukur non-stretch.',
      'Ultrasonic Thickness Gauge untuk mengukur ketebalan dinding pipa perancah.',
      'Scaff-Tag Kit resmi lengkap dengan holder, Green Tag, Yellow Tag, dan Red Tag.',
      'Kamera dokumentasi inspeksi dan formulir Scaffolding Inspection Register.'
    ],
    participants: [
      'Scaffolding Supervisor dan Lead Scaffolder berpengalaman.',
      'Safety Officer, Safety Inspector, dan QA/QC Engineer Proyek Konstruksi.',
      'Site Manager, Pengawas Sipil/Mekanik, dan Konsultan Pengawas Lapangan.'
    ],
    tableData: {
      headers: ['Komponen yang Diinspeksi', 'Kondisi Wajib Lolos Audit', 'Tindakan Korektif Jika Gagal'],
      rows: [
        ['Fondasi & Sole Plate', 'Bertumpu merata di sole plate kayu keras, tanpa rongga, bebas genangan air', 'Pasang perkuatan kayu ganda, ratakan tanah dengan stamper'],
        ['Klem & Sambungan', 'Fixed 90° & Swivel clamp kencang (40-50 Nm), drat bersih dari semen', 'Ganti klem retak/slek seketika, lumasi drat berkarat'],
        ['Pengikat Dinding (Ties)', 'Terpasang setiap 4 meter vertikal dan 6 meter horizontal ke struktur beton/baja', 'Pasang tie tambahan dengan anchor bolt atau box tie'],
        ['Lantai Kerja (Decking)', 'Terisi penuh tanpa celah (<25 mm), papan diikat kuat (cleated), tanpa retak', 'Ganti papan lapuk seketika, pasang toeboard 15 cm di perimeter']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/pengawas-scaffolding/', label: 'Pelatihan Pengawas Scaffolding' },
      { href: '/kategori-pelatihan/operator-scaffolding/', label: 'Pelatihan Operator Scaffolding' },
      { href: '/peran-jabatan/safety-officer-k3/', label: 'Pelatihan Safety Officer K3' },
      { href: '/kategori-pelatihan/working-at-height/', label: 'Pelatihan Working at Height' }
    ],
    faqs: [
      {
        q: 'Kapan saja Scaffolding Inspector wajib melakukan inspeksi perancah?',
        a: 'Inspeksi wajib dilakukan: (1) Selesai ereksi awal sebelum digunakan pertama kali, (2) Secara berkala tiap 7 hari sekali (weekly inspection), (3) Setelah terjadi cuaca ekstrem (hujan lebat, angin kencang) atau gempa, dan (4) Setelah adanya modifikasi atau pembongkaran sebagian struktur perancah.'
      },
      {
        q: 'Apa arti status warna pada sistem Scaff-Tag (Green, Yellow, Red)?',
        a: 'GREEN TAG: Perancah telah diinspeksi lengkap dan 100% aman digunakan. YELLOW TAG: Perancah memiliki batasan khusus (misal wajib 100% tie-off harness karena guardrail dilepas sementara) atau dalam tahap perbaikan. RED TAG: Perancah dilarang keras dinaiki oleh siapa pun karena tidak aman atau sedang proses ereksi/pembongkaran.'
      },
      {
        q: 'Berapa toleransi kelurusan tiang perancah (plumbness) yang diizinkan standar teknis?',
        a: 'Berdasarkan standar BS EN 12811 dan OSHA 1926.451, deviasi ketegakan tiang vertikal (standard) perancah tidak boleh melebihi rasio 1:300 atau pergeseran horizontal maksimal 25 mm di sepanjang tinggi struktur.'
      },
      {
        q: 'Bagaimana cara memverifikasi daya dukung landasan perancah di atas tanah lunak?',
        a: 'Inspector wajib menghitung beban total per tiang (leg load) dan membandingkannya dengan daya dukung tanah (soil bearing capacity). Tanah lunak wajib dipadatkan, dipasangi sole plate kayu keras (lebar minimal 225 mm, tebal 38–50 mm), dan pelat dasar baja (base plate 150x150 mm).'
      }
    ]
  }
];

function buildHtml(p: FullProgramSpec): string {
  const table = p.tableData
    ? `
<h2 id="matriks-teknis">Matriks Spesifikasi Teknis &amp; Standar Verifikasi Lapangan</h2>
<div class="table-scroll"><table>
  <tr>${p.tableData.headers.map((h) => `<th>${h}</th>`).join('')}</tr>
  ${p.tableData.rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('\n  ')}
</table></div>`
    : '';

  return `<p>${p.intro}</p>

<h2 id="identifikasi-bahaya">Identifikasi Bahaya Kritis &amp; Manajemen Risiko Operasional</h2>
<p>Kegagalan dalam mematuhi prosedur operasi standar pada bidang ini memicu dampak fatalitas tinggi, kerusakan aset mekanikal masif, serta tuntutan hukum atas kelalaian keselamatan kerja. Beberapa potensi bahaya kritis meliputi:</p>
<ul class="check-list">
  ${p.hazards.map((h) => `<li>${h}</li>`).join('\n  ')}
</ul>

<h2 id="landasan-hukum">Kerangka Hukum &amp; Standar Regulasi Ketenagakerjaan</h2>
<p>Pelatihan ini disusun mengacu pada hierarki regulasi nasional dan standar industri internasional yang berlaku di Indonesia:</p>
<ul>
  ${p.regulations.map((r) => `<li>${r}</li>`).join('\n  ')}
</ul>

<h2 id="silabus-komprehensif">Struktur Kurikulum &amp; Silabus Teknis Lengkap</h2>
<div class="table-scroll"><table>
  <tr><th>Modul Pelatihan</th><th>Cakupan Materi Teori &amp; Analisis</th><th>Simulasi Praktik &amp; Workshop</th></tr>
  ${p.modules
    .map(
      (m) =>
        `<tr><td><strong>${m.name}</strong></td><td>${m.theory}</td><td>${m.practical}</td></tr>`
    )
    .join('\n  ')}
</table></div>
${table}
<h2 id="fasilitas-praktik">Peralatan, Tooling &amp; Sarana Uji Praktik Lapangan</h2>
<p>Peserta pelatihan dibekali pengalaman langsung mengoperasikan instrumen dan alat keselamatan berstandar industri bersertifikasi:</p>
<ul class="check-list">
  ${p.equipment.map((e) => `<li>${e}</li>`).join('\n  ')}
</ul>

<h2 id="sasaran-peserta">Profil Sasaran Peserta Pelatihan</h2>
<p>Program in-house dan sertifikasi ini dirancang bagi tenaga profesional perusahaan:</p>
<ul>
  ${p.participants.map((pt) => `<li>${pt}</li>`).join('\n  ')}
</ul>

<h2 id="metodologi-evaluasi">Metodologi Evaluasi &amp; Uji Kompetensi Kelulusan</h2>
<p>Penilaian kelulusan peserta dilakukan secara objektif melalui ujian teori tertulis (Pre-Test &amp; Post-Test) dengan batas kelulusan minimal, observasi langsung pada uji praktik lapangan, serta verifikasi portofolio kerja. Peserta yang dinyatakan kompeten akan memperoleh Sertifikat Resmi Kualifikasi K3.</p>

<h2 id="program-terkait">Navigasi Program Terkait &amp; Lanjutan</h2>
<p>Perkuat integrasi sistem keselamatan dan produktivitas tim operasional fasilitas Anda melalui program pilihan:</p>
<p>
  ${p.links.map((l) => `<a href="${l.href}">${l.label}</a>`).join('\n  ')}
</p>`;
}

async function run() {
  console.log('Rendering master files...');
  const CONTENT_DIR = path.join(__dirname, '../src/content/pages');
  for (const prog of masterList) {
    const html = buildHtml(prog);
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
    console.log(`Rendered: ${prog.key}.ts`);
  }
}

run();
