import { ProgramDetail } from './master-batch1-data';
import { batch4JobRolesPart2 } from './batch4-part2-data';
import { batch4Part3 } from './batch4-part3-data';
import { batch4IndustriesPart4 } from './batch4-part4-industries';

export interface ExtendedProgramDetail extends ProgramDetail {
  hub: string;
  path: string;
}

export const batch4List: ExtendedProgramDetail[] = [
  // 1. Safety Officer
  {
    key: 'safety-officer',
    hub: 'peran-jabatan',
    path: 'peran-jabatan/safety-officer/',
    title: 'Pelatihan & Sertifikasi Safety Officer: Panduan Karir dan Wewenang',
    h1: 'Pelatihan & Sertifikasi Safety Officer: Tugas Lapangan, Inspeksi Bahaya, dan Kepatuhan K3 Regulasi Kemnaker RI',
    meta: 'Panduan lengkap pelatihan dan sertifikasi Safety Officer: tugas harian di lapangan, izin kerja PTW, tool box talk, inspeksi bahaya, dan kualifikasi sertifikasi Kemnaker/BNSP.',
    imgAlt: 'Safety officer mengenakan helm putih dan rompi reflektif memegang checklist inspeksi di area proyek industri',
    related: ['hse-manager', 'safety-inspector', 'ahli-k3-umum', 'permit-to-work'],
    intro: '<strong>Safety Officer</strong> adalah motor penggerak disiplin K3 harian di lapangan yang bertugas mengidentifikasi potensi bahaya secara real-time, memastikan pekerja mematuhi SOP keselamatan, memverifikasi kelayakan izin kerja aman (Permit to Work), dan memimpin briefing keselamatan (Tool Box Talk) sebelum jam kerja dimulai.',
    hazards: [
      '<strong>Ketidakmampuan Menghentikan Pekerjaan Berbahaya:</strong> Ragu menggunakan Stop Work Authority saat menemukan situasi kritis.',
      '<strong>Inspeksi Harian yang Bersifat Formalitas:</strong> Menandatangani checklist inspeksi tanpa melakukan verifikasi fisik di lokasi.',
      '<strong>Komunikasi Persuasif yang Lemah:</strong> Menyampaikan teguran K3 dengan cara konfrontatif sehingga menimbulkan penolakan pekerja.'
    ],
    regulations: [
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Permenaker No. 02/MEN/1992</strong> tentang Penunjukan Ahli K3.',
      '<strong>PP No. 50 Tahun 2012</strong> tentang Penerapan SMK3.'
    ],
    modules: [
      {
        name: 'Modul 1: Peran, Wewenang & Tanggung Jawab Safety Officer',
        theory: 'Tugas harian, Stop Work Authority (SWA), pengawasan subkontraktor, koordinasi dengan P2K3 dan manajemen.',
        practical: 'Audit harian kepatuhan APD dan izin kerja pada skenario proyek migas & manufaktur.'
      },
      {
        name: 'Modul 2: Eksekusi Tool Box Meeting (TBM) & Safety Induction',
        theory: 'Struktur materi briefing 10 menit, komunikasi persuasif pekerja lapangan, dokumentasi absensi keselamatan.',
        practical: 'Praktik memimpin safety talk di hadapan regu pekerja mekanikal dan elektrikal.'
      },
      {
        name: 'Modul 3: Inspeksi Lapangan & Pelaporan Temuan Bahaya',
        theory: 'Checklist inspeksi harian, pemilahan Unsafe Action vs Unsafe Condition, penentuan tindakan perbaikan (CAPA).',
        practical: 'Simulasi walkthrough inspection dan pengisian formulir Safety Observation Report (SOR).'
      }
    ],
    equipment: ['Safety Officer Field Inspection Kit (Sound Level Meter, Anemometer, Vernier Caliper).', 'Formulir JSA, PTW, dan Safety Observation Card.'],
    participants: ['Calon Safety Officer, Junior HSE, Mandor Lapangan, dan Pengawas Proyek.'],
    tableData: {
      headers: ['Aktivitas Harian Safety Officer', 'Frekuensi Pelaksanaan', 'Dokumen Bukti Rekaman Wajib'],
      rows: [
        ['Pemeriksaan Kelayakan APD & Alat Kerja', 'Setiap pagi sebelum shift dimulai', 'Pre-Job Inspection Checklist'],
        ['Pemimpin Tool Box Talk / Briefing Pagi', 'Harian (Pukul 07.45 – 08.00 WIB)', 'Daftar Hadir TBM & Topik Bahaya'],
        ['Verifikasi & Pengesahan Izin Kerja (PTW)', 'Setiap pekerjaan berisiko tinggi', 'Lembar Permit to Work Terlampir JSA'],
        ['Pelaporan Insiden & Nearmiss', 'Segera dalam < 2 Jam pasca kejadian', 'Initial Incident Notification Report']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/ahli-k3-umum/', label: 'Pelatihan Ahli K3 Umum' },
      { href: '/kategori-pelatihan/permit-to-work/', label: 'Pelatihan Permit to Work' },
      { href: '/peran-jabatan/hse-manager/', label: 'Peran HSE Manager' }
    ],
    faqs: [
      {
        q: 'Apa perbedaan antara Safety Officer dan Ahli K3 Umum?',
        a: 'Safety Officer berfokus pada eksekusi pengawasan operasional teknis harian di lapangan (inspeksi fisik, verifikasi PTW, TBM). Sedangkan Ahli K3 Umum memiliki wewenang legal administratif resmi dari Kemnaker RI sebagai Sekretaris P2K3, memimpin audit sistem, dan berhubungan langsung dengan Disnaker.'
      }
    ]
  },

  // 2. HSE Manager
  {
    key: 'hse-manager',
    hub: 'peran-jabatan',
    path: 'peran-jabatan/hse-manager/',
    title: 'Pelatihan & Pengembangan Kompetensi HSE Manager Korporat',
    h1: 'Pengembangan Kompetensi HSE Manager: Kepemimpinan Strategis, Tata Kelola SMK3/ISO 45001, dan Budgeting K3 Korporat',
    meta: 'Program pengembangan kompetensi HSE Manager: perencanaan anggaran K3, audit SMK3/ISO 45001, negosiasi dengan direksi, manajemen krisis, dan strategi budaya keselamatan.',
    imgAlt: 'HSE Manager mempresentasikan laporan performa statistik keselamatan (Lagging & Leading Indicators) di ruang rapat direksi',
    related: ['safety-officer', 'safety-leadership-dan-culture', 'audit-smk3-pp-50-2012', 'contractor-safety-management-system-csms'],
    intro: '<strong>HSE Manager (Health, Safety, and Environment Manager)</strong> adalah pimpinan strategis yang menyelaraskan sasaran keselamatan kerja dengan produktivitas dan profitabilitas bisnis perusahaan. Posisi ini bertanggung jawab merancang kebijakan K3 korporat, mengelola anggaran keselamatan tahunan, memimpin kesiapsiagaan krisis, dan mewakili perusahaan di hadapan regulator.',
    hazards: [
      '<strong>Kegagalan Mempertahankan Anggaran K3 (Budget Cuts):</strong> Ketidakmampuan mendemonstrasikan Return on Prevention (ROP) di hadapan Direksi Keuangan.',
      '<strong>Krisis Fatalitas yang Merusak Reputasi Korporat:</strong> Manajemen krisis yang buruk saat terjadi kecelakaan fatal yang diliput media massa.',
      '<strong>Ketidakpatuhan Regulasi yang Menimbulkan Denda:</strong> Kegagalan memenuhi AMDAL, izin pembuangan limbah, atau audit wajib SMK3.'
    ],
    regulations: [
      '<strong>PP No. 50 Tahun 2012</strong> tentang SMK3.',
      '<strong>Standar ISO 45001:2018</strong> dan <strong>ISO 14001:2015</strong>.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Strategic HSE Leadership & Boardroom Communication',
        theory: 'Mengomunikasikan K3 dalam bahasa bisnis finansial (Cost of Poor Safety vs Return on Prevention), KPI Leading vs Lagging indicators.',
        practical: 'Penyusunan presentasi usulan investasi program K3 tahunan di hadapan Board of Directors.'
      },
      {
        name: 'Modul 2: Tata Kelola Sistem Manajemen Terintegrasi (QHSE)',
        theory: 'Integrasi ISO 45001 (K3), ISO 14001 (Lingkungan), ISO 9001 (Mutu), dan SMK3 PP 50/2012.',
        practical: 'Penyusunan Integrated Management System Manual dan Risk Register korporat.'
      },
      {
        name: 'Modul 3: Manajemen Krisis & Hubungan Pemangku Kepentingan',
        theory: 'Crisis Management Plan (CMP), Media Handling saat insiden mayor, koordinasi dengan Kepolisian, Disnaker, dan KLHK.',
        practical: 'Simulasi konferensi pers dan koordinasi krisis pasca insiden ledakan pabrik.'
      }
    ],
    equipment: ['Software HSE Analytics & Dashboard KPI Tracker.', 'Panduan Manajemen Krisis & Media Protocol Guide.'],
    participants: ['HSE Manager, HSE Superintendent, EHS Lead, Operations Director, dan Senior Corporate Officer.'],
    tableData: {
      headers: ['Matriks Kinerja HSE', 'Leading Indicators (Proaktif)', 'Lagging Indicators (Reaktif)'],
      rows: [
        ['Fokus Pengukuran', 'Aktivitas pencegahan sebelum insiden terjadi', 'Jumlah kerugian setelah insiden terjadi'],
        ['Contoh Parameter', 'Jumlah TBM, audit inspeksi, jam training K3, nearmiss reported', 'Lost Time Injury Frequency Rate (LTIFR), Fatalitas, Hari Kerja Hilang'],
        ['Nilai Strategis', 'Memprediksi & mencegah kecelakaan masa depan', 'Mengevaluasi kinerja masa lalu untuk laporan resmi']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/safety-leadership-dan-culture/', label: 'Pelatihan Safety Leadership' },
      { href: '/kategori-pelatihan/audit-smk3-pp-50-2012/', label: 'Pelatihan Audit SMK3' },
      { href: '/peran-jabatan/safety-officer/', label: 'Peran Safety Officer' }
    ],
    faqs: [
      {
        q: 'Apa kompetensi paling kritis yang membedakan HSE Manager dengan Safety Officer biasa?',
        a: 'Kompetensi paling kritis adalah Strategic Business Acumen, kemampuan menerjemahkan program keselamatan ke dalam efisiensi biaya operasional (ROI/ROP), kepemimpinan lintas divisi, serta penguasaan manajemen krisis dan hukum ketenagakerjaan tingkat korporat.'
      }
    ]
  },

  // 3. Safety Inspector
  {
    key: 'safety-inspector',
    hub: 'peran-jabatan',
    path: 'peran-jabatan/safety-inspector/',
    title: 'Pelatihan & Sertifikasi Safety Inspector: Riksa Uji Teknis Lapangan',
    h1: 'Pelatihan Safety Inspector: Metodologi Audit Lapangan, Riksa Uji Teknis Alat Berat, dan Pelaporan Non-Compliance',
    meta: 'Pelatihan kompetensi Safety Inspector: inspeksi scaffolding, uji fungsi mekanikal alat angkat angkut, audit bejana tekan, deteksi bahaya kelistrikan, dan format laporan riksa uji.',
    imgAlt: 'Safety inspector menggunakan alat ukur ketebalan pelat dan sound level meter melakukan riksa uji mesin industri',
    related: ['safety-officer', 'scaffolding-inspector', 'inspeksi-panel-listrik', 'inspeksi-bejana-tekan'],
    intro: '<strong>Safety Inspector</strong> adalah spesialis audit fisik independen yang bertugas melakukan verifikasi kelaikan teknis sarana prasarana, mesin produksi, pesawat angkat angkut, dan instalasi kelistrikan guna mendeteksi kecacatan mekanis sebelum peralatan tersebut diizinkan beroperasi.',
    hazards: [
      '<strong>Kegagalan Mendeteksi Keretakan Struktural:</strong> Mengabaikan inspeksi NDT pada sambungan las kritis tiang crane.',
      '<strong>Verifikasi Dokumen Tanpa Uji Fungsi:</strong> Menerbitkan stiker inspeksi hijau tanpa menguji fungsi rem dan emergency stop.',
      '<strong>Toleransi Terhadap Modifikasi Ilegal:</strong> Mengabaikan modifikasi pengaman mesin tanpa sertifikasi ulang.'
    ],
    regulations: [
      '<strong>Permenaker No. 8 Tahun 2020</strong> (Pesawat Angkat Angkut).',
      '<strong>Permenaker No. 38 Tahun 2016</strong> (Pesawat Tenaga dan Produksi).',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Metodologi Pemeriksaan Teknis Riksa Uji',
        theory: 'Pemeriksaan visual, uji tak merusak (NDT), uji fungsi operasional (Load Test & Brake Test), kriteria penolakan (rejection criteria).',
        practical: 'Praktik inspeksi mandiri pada unit Forklift 5 Ton dan Scaffolding Frame setinggi 6 meter.'
      },
      {
        name: 'Modul 2: Pembuatan Laporan Teknis & Tagging Status',
        theory: 'Format Laporan Hasil Pemeriksaan (LHP), sistem penandaan Scafftag / Equipment Tagging (Hijau, Kuning, Merah).',
        practical: 'Penyusunan dokumen Berita Acara Riksa Uji dan rekomendasi teknis perbaikan.'
      }
    ],
    equipment: ['Vernier Caliper, Wire Rope Gauge, Anemometer Digital, Ultrasonic Thickness Gauge, dan Insulation Tester.'],
    participants: ['Safety Inspector, Mechanical/Electrical QC Inspector, Maintenance Technician, dan Konsultan Riksa Uji PJK3.'],
    tableData: {
      headers: ['Peralatan yang Diinspeksi', 'Fokus Pengujian Kritis', 'Kriteria Rejection Mutlak (Tagging Merah)'],
      rows: [
        ['Perancah (Scaffolding)', 'Ketegakan tiang, penguncian klem, baseplate', 'Ketiadaan toe board, pipa bengkok, tidak ada diagonal bracing'],
        ['Mobile Crane', 'Kawat baja drum, sensor LMI, outrigger pad', 'Kawat kinking/putus > 6 wire, LMI mati, outrigger bocor hidrolik'],
        ['Panel Listrik LVMDP', 'Thermografi suhu busbar, grounding resistance', 'Tahanan pembumian > 5 Ohm, hotspot Delta-T > 15°C']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/scaffolding-inspector/', label: 'Pelatihan Scaffolding Inspector' },
      { href: '/kategori-pelatihan/inspeksi-bejana-tekan/', label: 'Pelatihan Inspeksi Bejana Tekan' }
    ],
    faqs: [
      {
        q: 'Apa perbedaan mendasar antara tugas Safety Officer dan Safety Inspector?',
        a: 'Safety Officer bertanggung jawab atas pengawasan perilaku kerja dan administrasi keselamatan kerja harian (safety talk, permit, induksi). Sedangkan Safety Inspector fokus pada kelaikan teknis fisik peralatan, mesin, struktur, dan pengujian riksa uji mekanikal/elektrikal.'
      }
    ]
  },

  // 4. KTT (Kepala Teknik Tambang)
  {
    key: 'ktt-kepala-teknik-tambang',
    hub: 'peran-jabatan',
    path: 'peran-jabatan/ktt-kepala-teknik-tambang/',
    title: 'Pelatihan Eksekutif KTT (Kepala Teknik Tambang): Regulasi & Kaidah Minerba',
    h1: 'Pelatihan Kepala Teknik Tambang (KTT): Kepemimpinan Teknis, Tanggung Jawab Hukum Legal, dan Implementasi SMKP Minerba',
    meta: 'Pelatihan eksekutif Kepala Teknik Tambang (KTT): Kepmen ESDM No. 1827/2018, wewenang pengesahan KaIT, manajemen kestabilan lereng, penanganan kecelakaan tambang, dan sertifikasi POU.',
    imgAlt: 'Kepala Teknik Tambang (KTT) memimpin peninjauan operasional penambangan terbuka di tepi tebing pit tambang batubara',
    related: ['pengawas-operasional-pertama-pop', 'pengawas-operasional-madya-pom', 'keselamatan-alat-berat'],
    intro: '<strong>Kepala Teknik Tambang (KTT)</strong> adalah pemegang posisi tertinggi yang bertanggung jawab secara teknis operasional dan hukum pidana atas penerapan kaidah teknik pertambangan yang baik di wilayah izin usaha pertambangan (IUP/IUPK) sesuai <strong>Permen ESDM No. 26 Tahun 2018 &amp; Kepmen ESDM No. 1827 K/30/MEM/2018</strong>.',
    hazards: [
      '<strong>Tanggung Jawab Pidana Kecelakaan Tambang Fatal:</strong> KTT dapat dikenakan sanksi pidana penjara jika terbukti lalai menegakkan kaidah keselamatan tambang.',
      '<strong>Longsoran Lereng Pit Tambang Skala Besar:</strong> Kegagalan pemantauan geoteknik radar kestabilan dinding tambang.',
      '<strong>Penghentian Sementara Operasional Tambang oleh Inspektur Tambang:</strong> Sanksi pembekuan izin operasi akibat defisiensi audit SMKP Minerba.'
    ],
    regulations: [
      '<strong>Permen ESDM No. 26 Tahun 2018</strong> tentang Kaidah Pertambangan yang Baik.',
      '<strong>Kepmen ESDM No. 1827 K/30/MEM/2018</strong> (Pedoman KTT & K3 Pertambangan).',
      '<strong>UU No. 3 Tahun 2020</strong> tentang Pertambangan Mineral dan Batubara.'
    ],
    modules: [
      {
        name: 'Modul 1: Kedudukan Hukum, Wewenang & Akuntabilitas Legal KTT',
        theory: 'Struktur pengesahan KTT oleh KaIT, tanggung jawab hukum perdata & pidana, hubungan dengan Inspektur Tambang.',
        practical: 'Audit kelengkapan dokumen pengesahan KTT dan penunjukan Wakil KTT / PTL.'
      },
      {
        name: 'Modul 2: Implementasi SMKP & Pengelolaan Keselamatan Operasi (KO)',
        theory: '7 Elemen SMKP, manajemen kelayakan sarana, prasarana, instalasi, dan peralatan pertambangan (SPIP).',
        practical: 'Penyusunan Dokumen RKAB K3 Pertambangan tahunan dan Laporan Kinerja Keselamatan.'
      }
    ],
    equipment: ['Master Regulasi Minerba ESDM Lengkap.', 'Format Pelaporan Kecelakaan Tambang Form KTT 1-8.'],
    participants: ['General Manager Tambang, Mine Operations Director, Senior Mine Engineer, dan Calon KTT/Wakil KTT.'],
    tableData: {
      headers: ['Klasifikasi KTT', 'Kriteria Skala Usaha Pertambangan', 'Persyaratan Sertifikat Minimal'],
      rows: [
        ['KTT Kelas I', 'Tahap Operasi Produksi Mineral/Batubara Kapasitas Besar', 'Sertifikat Kompetensi Pengawas Operasional Utama (POU)'],
        ['KTT Kelas II', 'Tahap Operasi Produksi Skala Menengah / Eksplorasi', 'Sertifikat Kompetensi Pengawas Operasional Madya (POM)'],
        ['KTT Kelas III', 'Tahap Eksplorasi Skala Kecil / Batuan', 'Sertifikat Kompetensi Pengawas Operasional Pertama (POP)']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/pengawas-operasional-madya-pom/', label: 'Pelatihan POM Tambang' },
      { href: '/kategori-pelatihan/pengawas-operasional-pertama-pop/', label: 'Pelatihan POP Tambang' }
    ],
    faqs: [
      {
        q: 'Siapa yang berwenang mengesahkan penunjukan seorang Kepala Teknik Tambang (KTT)?',
        a: 'Penunjukan KTT oleh pimpinan perusahaan pertambangan wajib mendapatkan pengesahan resmi dari Kepala Pelaksana Inspeksi Tambang (KaIT) / Direktur Jenderal Mineral dan Batubara Kementerian ESDM.'
      }
    ]
  },

  // 21. Industri Minyak & Gas Bumi (Migas Offshore)
  {
    key: 'minyak-dan-gas-bumi-offshore',
    hub: 'industri',
    path: 'industri/minyak-dan-gas-bumi-offshore/',
    title: 'Pelatihan K3 Industri Minyak & Gas Bumi (Migas Offshore & Onshore)',
    h1: 'Pelatihan Keselamatan Migas: Standar K3 Hulu/Hilir Migas, Keselamatan Offshore Platform, dan Kepatuhan Dirjen Migas',
    meta: 'Solusi pelatihan K3 komprehensif sektor minyak & gas bumi (migas): sertifikasi K3 Migas, keselamatan anjungan lepas pantai (offshore), mitigasi H2S, permit to work, dan sertifikasi BNSP/Kemnaker.',
    imgAlt: 'Pekerja anjungan minyak lepas pantai offshore rig mengenakan coverall oranye dan helm keselamatan berdiri di dekat helideck',
    related: ['h2s-safety', 'permit-to-work', 'confined-space-entry', 'gas-tester'],
    intro: 'Industri hulu dan hilir Minyak dan Gas Bumi (<em>Oil &amp; Gas</em>) beroperasi di bawah risiko hidrokarbon bertekanan tinggi, gas beracun H2S, operasi lepas pantai (offshore) terisolasi, serta regulasi kepatuhan ketat di bawah <strong>Kementerian ESDM Dirjen Migas &amp; SKK Migas</strong>.',
    hazards: [
      '<strong>Semburan Liar Sumur Minyak (Well Blowout):</strong> Kegagalan Blowout Preventer (BOP) saat operasi pengeboran memicu semburan api raksasa.',
      '<strong>Kebocoran Gas Beracun H2S di Area Wellhead:</strong> Paparan fatal gas asam hidrogen sulfida dalam hitungan detik.',
      '<strong>Evakuasi Darurat Helikopter / Kapal (Helicopter Ditching):</strong> Kecelakaan transportasi udara/laut menuju anjungan lepas pantai.'
    ],
    regulations: [
      '<strong>UU No. 22 Tahun 2001</strong> tentang Minyak dan Gas Bumi.',
      '<strong>Peraturan Pemerintah No. 11 Tahun 1979</strong> tentang Keselamatan Kerja pada Pemurnian dan Pengolahan Minyak dan Gas Bumi.',
      '<strong>Standar Pedoman Teknis K3LL SKK Migas</strong>.'
    ],
    modules: [
      {
        name: 'Modul 1: Regulasi & Sistem Manajemen Keselamatan Migas',
        theory: 'Pedoman K3LL SKK Migas, sistem Izin Kerja Terpadu (Integrated PTW), isolasi LOTO kilang, Process Safety Management.',
        practical: 'Audit kepatuhan CSMS kontraktor migas dan verifikasi permit kerja panas kilang.'
      },
      {
        name: 'Modul 2: Penanggulangan Bahaya Gas Asam & Darurat Offshore',
        theory: 'H2S Safety Protocols, Emergency Escape Breathing Apparatus (EEBA), Lifeboat Evacuation (TEMPSC), Helideck Safety.',
        practical: 'Simulasi donning EEBA <30 detik dan drill evakuasi anjungan lepas pantai.'
      }
    ],
    equipment: ['Personal H2S Multi-Gas Monitor.', 'Emergency Escape Breathing Apparatus (EEBA).', 'Lifejacket Offshore SOLAS & Immersion Suit.'],
    participants: ['Pekerja Offshore Rig, Teknisi Kilang Refinery, Drilling Engineer, dan HSE Coordinator Migas.'],
    tableData: {
      headers: ['Sektor Industri Migas', 'Area Operasional Utama', 'Sertifikasi Wajib Personel', 'Standar Acuan'],
      rows: [
        ['Hulu Migas (Upstream)', 'Rig Pengeboran, Wellhead, Offshore Platform', 'BOSIET, H2S Alive, POP/POM Migas', 'SKK Migas Guidelines'],
        ['Hilir Migas (Downstream)', 'Kilang Pengolahan Minyak (Refinery), LNG Plant', 'Ahli K3 Migas, SIO Boiler/Bejana Tekan', 'PP 11/1979 & Permenaker'],
        ['Distribusi & Niaga', 'Depo BBM, Pipa Transmisi Gas, Kapal Tanker', 'CSMS Coordinator, Fire Fighting Migas', 'NFPA 30 & API 570']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/h2s-safety/', label: 'Pelatihan H2S Safety' },
      { href: '/kategori-pelatihan/permit-to-work/', label: 'Pelatihan Permit to Work' },
      { href: '/kategori-pelatihan/confined-space-entry/', label: 'Pelatihan Confined Space' }
    ],
    faqs: [
      {
        q: 'Apa sertifikasi keselamatan wajib bagi setiap pekerja yang akan berangkat ke anjungan lepas pantai (Offshore)?',
        a: 'Pekerja offshore wajib memiliki sertifikat BOSIET (Basic Offshore Safety Induction and Emergency Training) termasuk latihan helikopter tenggelam (HUET), Sea Survival, First Aid, dan sertifikasi H2S Safety.'
      }
    ]
  },

  // 22. Industri Pertambangan Batubara & Nikel
  {
    key: 'pertambangan-batubara-dan-nikel',
    hub: 'industri',
    path: 'industri/pertambangan-batubara-dan-nikel/',
    title: 'Pelatihan K3 Industri Pertambangan Batubara & Nikel (SMKP Minerba)',
    h1: 'Pelatihan Keselamatan Pertambangan: Kaidah Teknik Tambang, Traffic Management Hauling, dan Sertifikasi Pengawas POP/POM',
    meta: 'Solusi in-house training K3 pertambangan mineral & batubara: implementasi SMKP Minerba, keselamatan jalan tambang (hauling safety), stabilitas lereng disposal, dan sertifikasi POP/POM BNSP.',
    imgAlt: 'Dump truck raksasa tambang batubara melintas di jalan hauling tambang dengan pengawasan rambu keselamatan jalan tambang',
    related: ['pengawas-operasional-pertama-pop', 'keselamatan-alat-berat', 'operator-dump-truck'],
    intro: 'Operasi penambangan terbuka batubara, nikel, dan emas melibatkan pergerakan alat-alat berat raksasa 24 jam sehari, lereng galian sedalam ratusan meter, serta paparan debu dan kebisingan ekstrem. Program pelatihan K3 Pertambangan mendoktrinkan kepatuhan penuh terhadap <strong>SMKP Minerba</strong>.',
    hazards: [
      '<strong>Tabrakan Dump Truck dengan Kendaraan Ringan (LV):</strong> Blind spot truk tambang melindas mobil operasional yang berada terlalu dekat.',
      '<strong>Longsor Lereng Penambangan / Disposal:</strong> Ketidakstabilan tanah akibat curah hujan tinggi yang menimbun alat berat.',
      '<strong>Kelelahan Operator Shift Malam (Fatigue Accident):</strong> Pengemudi hauler tertidur di jalan tambang curam.'
    ],
    regulations: [
      '<strong>Kepmen ESDM No. 1827 K/30/MEM/2018</strong> tentang Pedoman Pelaksanaan Kaidah Teknik Pertambangan yang Baik.',
      '<strong>Permen ESDM No. 26 Tahun 2018</strong>.',
      '<strong>UU No. 3 Tahun 2020</strong> tentang Minerba.'
    ],
    modules: [
      {
        name: 'Modul 1: Manajemen Keselamatan Jalan Tambang & Hauling',
        theory: 'Lebar jalan tambang (3.5x lebar unit terbesar), tinggi tanggul pengaman (safety berm min 3/4 diameter roda), jarak iring konvoi.',
        practical: 'Audit kelayakan rambu, tanggul pengaman, dan radio komunikasi tambang.'
      },
      {
        name: 'Modul 2: Kaidah Pengawasan K3 Lini Depan (POP SKKNI)',
        theory: 'Inspeksi harian, pelaksanaan P5M, analisis bahaya JSA tambang, investigasi kecelakaan Form KTT.',
        practical: 'Praktik audit P2H armada tambang dan simulasi inspeksi lereng tebing.'
      }
    ],
    equipment: ['Radio Tambang Multi-Channel VHF/UHF.', 'Fatigue Testing Device & Laser Slope Inclinometer.'],
    participants: ['Mine Manager, Supervisor Tambang, Operator Alat Berat, Safety Officer Tambang, dan Kontraktor Hauling.'],
    tableData: {
      headers: ['Elemen Jalan Tambang', 'Ketentuan Teknis Kepmen ESDM 1827/2018', 'Tujuan Perlindungan Keselamatan'],
      rows: [
        ['Lebar Jalan Lurus (2 Arah)', 'Minimal 3.5 kali lebar alat angkut terbesar', 'Mencegah tabrakan berpapasan saat kecepatan tinggi'],
        ['Lebar Jalan Tikungan', 'Minimal 4.0 kali lebar alat angkut terbesar', 'Mengakomodasi radius ayun bodi truk belakang'],
        ['Tinggi Tanggul Pengaman (Berm)', 'Minimal 3/4 (tiga perempat) tinggi roda terbesar', 'Mencegah truk meluncur ke jurang tebing'],
        ['Kemiringan Jalan (Grade)', 'Maksimal 12% (disarankan < 8%)', 'Mencegah rem blong pada turunan bermuatan penuh']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/pengawas-operasional-pertama-pop/', label: 'Pelatihan POP Tambang' },
      { href: '/kategori-pelatihan/keselamatan-alat-berat/', label: 'Pelatihan Keselamatan Alat Berat' }
    ],
    faqs: [
      {
        q: 'Berapa tinggi minimal tanggul pengaman (safety berm) di tepi jalan tambang menurut regulasi ESDM?',
        a: 'Berdasarkan Kepmen ESDM No. 1827/2018, tinggi tanggul pengaman jalan tambang sekurang-kurangnya 3/4 (tiga perempat) dari diameter roda kendaraan terbesar yang melintasi jalan tersebut.'
      }
    ]
  },

  // 23. Industri Smelter & Pengolahan Logam
  {
    key: 'smelter-dan-pengolahan-logam',
    hub: 'industri',
    path: 'industri/smelter-dan-pengolahan-logam/',
    title: 'Pelatihan K3 Industri Smelter & Pengolahan Logam (Molten Metal Safety)',
    h1: 'Pelatihan Keselamatan Smelter: Penanganan Cairan Logam Panas (Molten Metal), Keselamatan Furnace, dan Gas Beracun CO',
    meta: 'Pelatihan K3 industri smelter nikel/baja: ledakan uap cairan logam (steam explosion), keselamatan electric arc furnace, proteksi gas karbon monoksida (CO), dan APD aluminium aluminized.',
    imgAlt: 'Pekerja smelter mengenakan pakaian tahan panas aluminized suit memantau penuangan cairan logam panas membara dari tungku furnace',
    related: ['hot-work-safety', 'gas-tester', 'confined-space-entry'],
    intro: 'Pabrik pemurnian dan peleburan logam (<em>Smelter Nikel, Tembaga, Aluminium & Baja</em>) mengoperasikan tungku peleburan bersuhu di atas 1.500°C. Interaksi sedikit saja antara air dengan cairan logam membara dapat memicu ledakan uap dahsyat (<em>molten metal steam explosion</em>) yang menghancurkan fasilitas.',
    hazards: [
      '<strong>Ledakan Uap Logam Cair (Molten Metal Explosion):</strong> Air rembesan masuk ke dalam ladle cairan logam membara.',
      '<strong>Keracunan Massal Gas Karbon Monoksida (CO Poisoning):</strong> Kebocoran gas buang reduksi dari tungku tertutup (submerged arc furnace).',
      '<strong>Luka Bakar Radiasi Panas Ekstrem:</strong> Bekerja di dekat lelehan slag tanpa pakaian pelindung aluminized.'
    ],
    regulations: ['<strong>UU No. 1 Tahun 1970</strong>.', '<strong>Permenaker No. 5 Tahun 2018</strong>.', '<strong>Standar NFPA 86</strong> (Standard for Ovens and Furnaces).'],
    modules: [
      {
        name: 'Modul 1: Fisika Bahaya Peleburan & Pencegahan Ledakan Uap',
        theory: 'Termodinamika lelehan logam, larangan mutlak kelembaban pada scrap/ladle, inspeksi refraktori dinding furnace.',
        practical: 'Audit protokol pre-heating ladle sebelum pengisian cairan logam.'
      },
      {
        name: 'Modul 2: Deteksi Gas Beracun & Penggunaan APD Suhu Ekstrem',
        theory: 'Monitoring continuous CO & SO2, APD Aluminized Proximity Suit tahan 1000°C, tameng pelindung emas anti-radiasi.',
        practical: 'Drill tanggap darurat kebocoran gas CO pada area tapping floor smelter.'
      }
    ],
    equipment: ['Aluminized Heat-Reflective Suit Kit.', 'CO Multi-Gas Detector 0-1000 ppm.', 'Infrared Pyrometer Termometer Suhu Tinggi 2000°C.'],
    participants: ['Operator Furnace Smelter, Tapping Operator, Metallurgical Engineer, dan HSE Specialist Smelter.'],
    tableData: {
      headers: ['Zona Bahaya Smelter', 'Suhu Operasional (°C)', 'Potensi Bahaya Fatal', 'APD Khusus Wajib'],
      rows: [
        ['Tungku Peleburan (Furnace)', '1.400°C – 1.650°C', 'Ledakan uap logam cair, semburan api slag', 'Aluminized Suit, Gold-coated Face Shield'],
        ['Tapping & Casting Floor', '1.200°C – 1.400°C', 'Percikan logam cair membakar tubuh', 'Leather Apron Tahan Panas, Spats Kaki'],
        ['Saluran Gas Buang (Off-Gas)', '400°C – 800°C', 'Keracunan mematikan gas CO & SO2', 'Continuous Gas Detector & SCBA Darurat']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/hot-work-safety/', label: 'Pelatihan Hot Work Safety' },
      { href: '/kategori-pelatihan/gas-tester/', label: 'Pelatihan Gas Tester' }
    ],
    faqs: [
      {
        q: 'Mengapa air adalah musuh nomor satu di area peleburan logam cair (smelter)?',
        a: 'Karena ketika air bersentuhan dengan cairan logam bersuhu >1000°C, air akan memuai menjadi uap air seketika sebesar 1.600 kali lipat volumenya dalam hitungan milidetik, menghasilkan ledakan ekspansi uap (steam explosion) dahsyat yang menyemburkan logam cair membara ke segala arah.'
      }
    ]
  },
  ...batch4JobRolesPart2,
  ...batch4Part3,
  ...batch4IndustriesPart4
];

console.log(`Loaded TOTAL ${batch4List.length} programs for Batch 4.`);
