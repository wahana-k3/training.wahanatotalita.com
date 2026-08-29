import { ProgramDetail } from './master-batch1-data';

export const batch3ConstructionAndMining: ProgramDetail[] = [
  // 76. Ahli K3 Konstruksi
  {
    key: 'ahli-k3-konstruksi',
    title: 'Pelatihan Ahli K3 Konstruksi: Sertifikasi Kemnaker & BNSP',
    h1: 'Pelatihan Ahli K3 Konstruksi (Muda, Madya, Utama): Rencana Keselamatan Konstruksi (RKK) dan SMKK Permen PUPR No. 10/2021',
    meta: 'Pelatihan Ahli K3 Konstruksi resmi Kemnaker RI & BNSP: penyusunan Rencana Keselamatan Konstruksi (RKK), audit SMKK Permen PUPR 10/2021, manajemen risiko proyek EPC/infrastruktur.',
    imgAlt: 'Ahli K3 konstruksi mengenakan helm putih rompi safety meninjau gambar kerja engineering di lokasi proyek gedung bertingkat',
    related: ['petugas-k3-konstruksi', 'k3-pekerjaan-galian-excavation', 'k3-konstruksi-jembatan-dan-elevated', 'scaffolding-inspector'],
    intro: 'Proyek konstruksi sipil dan infrastruktur memiliki tingkat turnover tenaga kerja harian yang sangat tinggi, perubahan geometri lapangan dinamis setiap jam, dan interaksi alat berat dengan ketinggian. <strong>Ahli K3 Konstruksi</strong> memegang otoritas legal dalam merancang dan mengawal implementasi <strong>Sistem Manajemen Keselamatan Konstruksi (SMKK)</strong> sesuai regulasi <strong>Permen PUPR No. 10 Tahun 2021 &amp; Permenaker No. 01/MEN/1980</strong>.',
    hazards: [
      '<strong>Kegagalan Struktur Penyangga (Shoring Collapse):</strong> Bekisting dan perancah cor runtuh saat pengecoran beton pelat lantai.',
      '<strong>Jatuh dari Ketinggian Tepi Terbuka:</strong> Ketiadaan jaring pengaman (safety net) dan pagar pembatas tepi (edge protection) pada lantai atas.',
      '<strong>Tertimpa Material Angkat Crane:</strong> Kegagalan sistem lifting di atas area sibuk pekerja struktur bawah.'
    ],
    regulations: [
      '<strong>Permen PUPR No. 10 Tahun 2021</strong> tentang Pedoman Sistem Manajemen Keselamatan Konstruksi (SMKK).',
      '<strong>Permenaker No. Per.01/MEN/1980</strong> tentang K3 pada Konstruksi Bangunan.',
      '<strong>UU No. 2 Tahun 2017</strong> tentang Jasa Konstruksi.'
    ],
    modules: [
      {
        name: 'Modul 1: Regulasi SMKK & Penyusunan Dokumen RKK',
        theory: 'Elemen SMKK Permen PUPR 10/2021, Rencana Keselamatan Konstruksi (RKK), Rencana Mutu Pekerjaan Konstruksi (RMPK), Biaya Penerapan SMKK.',
        practical: 'Penyusunan dokumen RKK lengkap untuk tender proyek infrastruktur jembatan bentang panjang.'
      },
      {
        name: 'Modul 2: Manajemen Risiko Pekerjaan Kritis Proyek',
        theory: 'Risk Assessment IBPRP (Identifikasi Bahaya, Penilaian Risiko, dan Pengendalian), Job Safety Analysis (JSA), Izin Kerja Khusus Konstruksi.',
        practical: 'Audit lapangan inspeksi keselamatan bekisting cor beton dan temporary works.'
      },
      {
        name: 'Modul 3: Riksa Uji Peralatan Berat & Fasilitas Sementara',
        theory: 'Sertifikasi SILO mobile crane/tower crane, perancah scaffolding, instalasi listrik sementara (temporary power panel).',
        practical: 'Pelaksanaan audit kesiapan prakonstruksi (Pre-Construction Safety Meeting).'
      }
    ],
    equipment: ['Format Master Dokumen RKK & IBPRP SMKK PUPR.', 'Inclinometer Digital, Total Station Safety Boundary Kit, dan Drone Survey Proyek.'],
    participants: ['Site Manager, Project Engineer, HSE Manager Konstruksi, HSE Inspector Proyek, dan Konsultan Supervisi.'],
    tableData: {
      headers: ['Kategori Risiko Konstruksi (PUPR)', 'Kriteria Nilai Proyek / Tenaga Kerja', 'Kualifikasi Ahli K3 Minimal', 'Kewajiban Pengawasan'],
      rows: [
        ['Risiko Keselamatan Besar', 'Nilai Pagu > Rp 100 Miliar / TK > 100 Orang', 'Ahli Utama K3 Konstruksi (Min 1 Org) + Ahli Madya', 'Pengawasan penuh waktu berkesinambungan'],
        ['Risiko Keselamatan Sedang', 'Nilai Pagu Rp 20 M s.d Rp 100 M / TK 25-100 Org', 'Ahli Madya K3 Konstruksi (Min 1 Org)', 'Pengawasan harian penuh'],
        ['Risiko Keselamatan Kecil', 'Nilai Pagu < Rp 20 Miliar / TK < 25 Orang', 'Ahli Muda K3 Konstruksi / Petugas Keselamatan', 'Pengawasan berkala']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/petugas-k3-konstruksi/', label: 'Pelatihan Petugas K3 Konstruksi' },
      { href: '/kategori-pelatihan/k3-konstruksi-jembatan-dan-elevated/', label: 'Pelatihan K3 Konstruksi Jembatan' },
      { href: '/kategori-pelatihan/k3-pekerjaan-galian-excavation/', label: 'Pelatihan K3 Pekerjaan Galian' }
    ],
    faqs: [
      {
        q: 'Berapa persentase alokasi anggaran Biaya Penerapan SMKK yang wajib dimasukkan dalam dokumen penawaran tender konstruksi?',
        a: 'Berdasarkan Permen PUPR No. 10 Tahun 2021, biaya penerapan SMKK wajib dimasukkan secara terpisah dalam Daftar Kuantitas dan Harga (BOQ) dengan rincian 9 komponen pembiayaan (termasuk APD, asuransi, pelatihan, rambu, dan fasilitas kesehatan) dan tidak boleh di-nol-kan.'
      }
    ]
  },

  // 77. Petugas K3 Konstruksi
  {
    key: 'petugas-k3-konstruksi',
    title: 'Pelatihan Petugas K3 Konstruksi: Pengawasan Lapangan Proyek',
    h1: 'Pelatihan Petugas K3 Konstruksi: Safety Induction Pekerja, Tool Box Meeting (TBM), dan Inspeksi Harian Proyek',
    meta: 'Pelatihan Petugas K3 Konstruksi lapangan: pelaksanaan Tool Box Talk/Meeting, inspeksi scaffolding harian, verifikasi APD proyek, housekeeping 5R, dan pelaporan insiden.',
    imgAlt: 'Petugas K3 konstruksi memimpin safety briefing Tool Box Meeting di depan puluhan pekerja proyek sebelum shift pagi dimulai',
    related: ['ahli-k3-konstruksi', 'scaffolding-inspector', 'operator-scaffolding'],
    intro: 'Petugas Keselamatan Konstruksi (<em>Safety Officer / Petugas K3 Konstruksi</em>) adalah garda terdepan penegakan disiplin keselamatan harian di lokasi proyek. Petugas ini memastikan seluruh pekerja subkontraktor mematuhi SOP sebelum diizinkan menyentuh peralatan kerja.',
    hazards: [
      '<strong>Pekerja Masuk Tanpa Induksi K3:</strong> Tenaga kerja harian lepas bekerja tanpa memahami bahaya zona kerja.',
      '<strong>Pengabaian APD Dasar (Helm, Sepatu, Rompi):</strong> Pekerja melepas helm proyek di area rawan jatuhan material.',
      '<strong>Housekeeping Proyek Buruk:</strong> Paku menonjol dan potongan besi berserakan melukai kaki pekerja.'
    ],
    regulations: ['<strong>Permenaker No. Per.01/MEN/1980</strong>.', '<strong>Permen PUPR No. 10/2021</strong>.'],
    modules: [
      {
        name: 'Modul 1: Teknik Pelaksanaan Safety Induction & Tool Box Meeting (TBM)',
        theory: 'Materi induksi harian, komunikasi persuasif pekerja lapangan, pencatatan absensi safety briefing.',
        practical: 'Praktik memimpin sesi Tool Box Talk pagi 10 menit dengan skenario pekerjaan pengecoran.'
      },
      {
        name: 'Modul 2: Inspeksi Harian Barikade, APD & Housekeeping',
        theory: 'Daftar periksa harian (daily checklist), pemasangan safety sign, audit 5R area proyek.',
        practical: 'Audit walkthrough lokasi proyek dan pengisian form temuan bahaya (Unsafe Action & Condition).'
      }
    ],
    equipment: ['Megaphone Lapangan Proyek, Checklist Riksa Harian K3, Barricade Tape & Safety Signage Kit.'],
    participants: ['Safety Officer Proyek, Supervisor Sipil/MEP, Mandor Konstruksi, dan Field Engineer.'],
    tableData: {
      headers: ['Aktivitas Harian Petugas K3', 'Waktu Pelaksanaan', 'Dokumen Bukti Rekaman'],
      rows: [
        ['Pemeriksaan Kesiapan APD & Izin Kerja', 'Pukul 07.30 – 08.00 WIB', 'Log Verifikasi Permit to Work'],
        ['Pemimpin Tool Box Meeting (TBM)', 'Pukul 08.00 – 08.15 WIB', 'Daftar Hadir TBM & Notulen Bahaya'],
        ['Inspeksi Lapangan Berkelanjutan', 'Pukul 08.30 – 16.30 WIB', 'Daily Safety Observation Report (SOR)']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/ahli-k3-konstruksi/', label: 'Pelatihan Ahli K3 Konstruksi' },
      { href: '/kategori-pelatihan/scaffolding-inspector/', label: 'Pelatihan Scaffolding Inspector' }
    ],
    faqs: [
      {
        q: 'Apa perbedaan mendasar antara Petugas K3 Konstruksi dan Ahli K3 Konstruksi?',
        a: 'Petugas K3 Konstruksi fokus pada eksekusi pengawasan operasional harian di lapangan (TBM, patroli APD, inspeksi langsung). Sedangkan Ahli K3 Konstruksi bertanggung jawab pada perancangan dokumen sistematis, analisis risiko teknis, approval dokumen RKK, dan koordinasi dengan instansi pemerintah/PUPR.'
      }
    ]
  },

  // 78. K3 Pekerjaan Galian (Excavation)
  {
    key: 'k3-pekerjaan-galian-excavation',
    title: 'Pelatihan K3 Pekerjaan Galian & Trenching Safety',
    h1: 'Pelatihan K3 Pekerjaan Galian (Excavation & Trenching): Sistem Proteksi Longsor (Shoring/Shielding), Deteksi Utilitas Bawah Tanah, dan Standar OSHA 1926.650',
    meta: 'Pelatihan keselamatan pekerjaan galian tanah: sistem penopang shoring, terasering benching, trench box shielding, deteksi utilitas kabel/pipa bawah tanah (CAT & Genny), dan atmosfer berbahaya lubang galian.',
    imgAlt: 'Pekerja konstruksi memasang sistem penopang hidrolik shoring dan trench box pada galian tanah saluran pipa sedalam 3 meter',
    related: ['operator-excavator', 'ahli-k3-konstruksi', 'confined-space-entry', 'gas-tester'],
    intro: 'Tanah memiliki bobot sekitar 1.5 hingga 2 ton per meter kubik. Satu meter kubik tanah yang longsor menimbun pekerja di dalam parit memiliki efek hantaman setara tertimpa mobil penumpang, membunuh korban seketika akibat asfiksia tekanan dada (<em>compressive asphyxiation</em>). Pelatihan ini membedah metode stabilisasi lereng dan penopangan tanah sesuai standar <strong>OSHA 29 CFR 1926 Subpart P &amp; Permenaker No. 01/1980</strong>.',
    hazards: [
      '<strong>Longsoran Dinding Parit Galian (Trench Cave-In):</strong> Galian tanah tegak sedalam >1.2 meter tanpa sistem proteksi shoring ambruk menimbun pekerja.',
      '<strong>Menghantam Kabel Listrik Tegangan Menengah Bawah Tanah:</strong> Cangkul atau bucket excavator memotong kabel 20 kV bawah tanah yang belum diputus.',
      '<strong>Akumulasi Gas Beracun di Dasar Galian:</strong> Gas CO, H2S, atau kekurangan oksigen di dasar parit galian dalam (>1.5 meter).'
    ],
    regulations: ['<strong>Permenaker No. Per.01/MEN/1980</strong> (Bab IV Penggalian).', '<strong>Standar OSHA 29 CFR 1926 Subpart P</strong> (Excavations).'],
    modules: [
      {
        name: 'Modul 1: Mekanika Tanah & Klasifikasi Tanah OSHA (Tipe A, B, C)',
        theory: 'Uji manual tanah (Plasticity, Thumb penetration), sudut lereng alami (Angle of Repose), pengaruh getaran jalan raya & air tanah.',
        practical: 'Uji penetrasi tanah lapangan menggunakan Pocket Penetrometer.'
      },
      {
        name: 'Modul 2: 4 Sistem Proteksi Galian (Sloping, Benching, Shoring, Shielding)',
        theory: 'Kemiringan lereng aman (1:1.5 untuk tanah Tipe C), Hydraulic Shoring aluminium, Box Pelindung (Trench Shield Box).',
        practical: 'Praktik perakitan dan pemasangan sistem Hydraulic Trench Shoring di galian sedalam 2.5 meter.'
      },
      {
        name: 'Modul 3: Deteksi Utilitas Bawah Tanah & Akses Tangga Aman',
        theory: 'Penggunaan Cable Avoidance Tool (CAT & Genny), jarak penempatan tangga keluar galian (maksimal 7.5 meter jarak tempuh horizontal).',
        practical: 'Scanning jalur pipa logam dan kabel bawah tanah sebelum izin penggalian diterbitkan.'
      }
    ],
    equipment: ['Cable Avoidance Tool (CAT & Signal Generator Genny).', 'Hydraulic Aluminum Shoring Kit & Trench Box.', 'Pocket Penetrometer & Multi-Gas Detector.'],
    participants: ['Supervisor Pekerjaan Sipil/Pipa, Operator Excavator, Safety Officer Proyek, dan Mandor Galian.'],
    tableData: {
      headers: ['Klasifikasi Tanah OSHA', 'Karakteristik Kekuatan Tekan (tsf)', 'Sudut Kemiringan Maksimum (Sloping H:V)', 'Kebutuhan Proteksi'],
      rows: [
        ['Tanah Tipe A', 'Kuat Tekan >= 1.5 tsf (Liat keras, lempung)', 'Sudut 53° (3/4 : 1)', 'Wajib shoring jika kedalaman > 1.5 meter'],
        ['Tanah Tipe B', 'Kuat Tekan 0.5 s.d 1.5 tsf (Lanau, pasir liat)', 'Sudut 45° (1 : 1)', 'Wajib shoring/shielding jika > 1.2 meter'],
        ['Tanah Tipe C', 'Kuat Tekan < 0.5 tsf (Pasir lepas, tanah jenuh air)', 'Sudut 34° (1.5 : 1)', 'Wajib Full Shoring / Trench Shield Box']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/operator-excavator/', label: 'Pelatihan Operator Excavator' },
      { href: '/kategori-pelatihan/ahli-k3-konstruksi/', label: 'Pelatihan Ahli K3 Konstruksi' }
    ],
    faqs: [
      {
        q: 'Berapa kedalaman minimal galian tanah yang wajib dipasangi sistem proteksi penahan tanah (shoring)?',
        a: 'Berdasarkan standar OSHA 1926.650 dan Permenaker No. 01/1980, setiap galian tanah dengan kedalaman 1.2 meter (atau 1.5 meter pada tanah sangat stabil) atau lebih wajib dipasangi sistem penahan dinding tanah (shoring/shielding) atau dibuat kemiringan bertingkat (sloping/benching).'
      }
    ]
  },

  // 79. K3 Pembongkaran (Demolition)
  {
    key: 'k3-pembongkaran-demolition',
    title: 'Pelatihan K3 Pekerjaan Pembongkaran (Demolition Safety)',
    h1: 'Pelatihan K3 Pekerjaan Pembongkaran Bangunan: Engineering Survey, Mitigasi Runtuh Progresif, dan Penanganan Material Berbahaya',
    meta: 'Pelatihan demolition safety: survei struktur pra-pembongkaran, pembongkaran mekanikal wrecking ball / excavator breaker, identifikasi material asbes, dan zona perimeter bahaya.',
    imgAlt: 'Excavator dilengkapi attachment hydraulic breaker membongkar struktur dinding beton bertulang di area proyek pembongkaran gedung',
    related: ['ahli-k3-konstruksi', 'operator-excavator', 'k3-pekerjaan-galian-excavation'],
    intro: 'Pekerjaan pembongkaran bangunan (<em>demolition</em>) memiliki risiko tinggi kegagalan struktur yang tidak terduga di mana modifikasi atau pembongkaran satu elemen balok dapat memicu keruntuhan berantai seluruh gedung (<em>progressive collapse</em>).',
    hazards: [
      '<strong>Keruntuhan Struktur Prematur (Premature Collapse):</strong> Pembongkaran kolom utama sebelum beban lantai atas ditiadakan.',
      '<strong>Pelepasan Serat Asbes Mematikan (Asbestos Release):</strong> Membongkar atap/partisi asbes tanpa prosedur pembasahan dan penahanan serat (containment).',
      '<strong>Serpihan Beton Melayang (Flying Debris):</strong> Pukulan breaker hidrolik melempar bongkahan beton ke luar batas zona aman jalan raya.'
    ],
    regulations: ['<strong>Permenaker No. Per.01/MEN/1980</strong> (Bab VIII Pembongkaran).', '<strong>Standar OSHA 29 CFR 1926 Subpart T</strong> (Demolition).'],
    modules: [
      {
        name: 'Modul 1: Survei Rekayasa Pra-Pembongkaran (Engineering Survey)',
        theory: 'Kondisi kerangka struktur bangunan, potensi bahaya bahan kimia tersimpan (asbes, timbal), status pemutusan utilitas listrik/gas.',
        practical: 'Audit dokumen Engineering Demolition Plan dan urutan pembongkaran dari lantai atas ke bawah (Top-Down Sequence).'
      },
      {
        name: 'Modul 2: Pengendalian Debu, Serpihan & Drop Zone Barricade',
        theory: 'Sistem tirai debu air (Water Mist Dust Suppression), jaring pengaman serpihan, penetapan radius drop zone 1.5x tinggi struktur.',
        practical: 'Pemasangan barikade fisik radius bahaya dan koordinasi lalu lintas luar proyek.'
      }
    ],
    equipment: ['Water Mist Dust Cannon.', 'Asbestos Sampling Kit & P3 High-Efficiency Particulate Respirator.'],
    participants: ['Demolition Contractor, Structural Engineer, Safety Officer Proyek, dan Operator Heavy Breaker.'],
    tableData: {
      headers: ['Metode Pembongkaran', 'Peralatan yang Digunakan', 'Keunggulan Operasional', 'Tingkat Bahaya'],
      rows: [
        ['Top-Down Manual / Mini Excavator', 'Jackhammer, Mini Digger di atas plat', 'Sangat terkendali di area padat penduduk', 'Bahaya over-weight plat lantai'],
        ['High-Reach Excavator Breaker', 'Excavator boom jangkauan 20-30 meter', 'Operator berada di luar zona jatuh gedung', 'Sangat aman & produktif'],
        ['Implosion (Peledakan Terarah)', 'Dinamit / Bahan Peledak Komersial', 'Runtuh dalam beberapa detik', 'Kritis mutlak, butuh perizinan Mabes POLRI']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/ahli-k3-konstruksi/', label: 'Pelatihan Ahli K3 Konstruksi' },
      { href: '/kategori-pelatihan/operator-excavator/', label: 'Pelatihan Operator Excavator' }
    ],
    faqs: [
      {
        q: 'Bagaimana urutan standar pembongkaran gedung bertingkat secara mekanis?',
        a: 'Urutan baku pembongkaran wajib dilakukan dari atas ke bawah (top-down), lantai demi lantai. Pembongkaran harus dimulai dari plat lantai non-struktural, dilanjutkan balok sekunder, balok utama, dan terakhir kolom penyangga struktural.'
      }
    ]
  },

  // 80. Pengawas Operasional Pertama (POP Tambang)
  {
    key: 'pengawas-operasional-pertama-pop',
    title: 'Pelatihan Pengawas Operasional Pertama (POP Tambang): Sertifikasi BNSP',
    h1: 'Pelatihan Pengawas Operasional Pertama (POP) Pertambangan: Sertifikasi Kompetensi BNSP & Kaidah Teknik Pertambangan yang Baik',
    meta: 'Pelatihan POP Tambang bersertifikasi BNSP: Kepmen ESDM No. 1827/2018, pelaksanaan inspeksi K3 tambang, investigasi kecelakaan, Job Safety Analysis (JSA), dan safety accountability pengawas lini depan.',
    imgAlt: 'Pengawas operasional pertama tambang berhelm safety memegang clipboard memimpin inspeksi di area pit tambang batubara',
    related: ['pengawas-operasional-madya-pom', 'keselamatan-alat-berat', 'operator-dump-truck'],
    intro: 'Berdasarkan <strong>Kepmen ESDM No. 1827 K/30/MEM/2018</strong>, seluruh pengawas operasional lini depan (Frontline Supervisor, Foreman, Group Leader) di industri pertambangan mineral dan batubara wajib memiliki <strong>Sertifikat Kompetensi Pengawas Operasional Pertama (POP)</strong> yang diterbitkan oleh Badan Nasional Sertifikasi Profesi (BNSP).',
    hazards: [
      '<strong>Kegagalan Lereng Tambang (Pit Wall Failure):</strong> Retakan lereng tebing tambang tidak terpantau oleh pengawas shift.',
      '<strong>Tabrakan Alat Berat di Jalur Hauling:</strong> Pengabaian aturan jarak iring dan blind spot dump truck raksasa.',
      '<strong>Kecelakaan Tambang Berulang:</strong> Investigasi kecelakaan dangkal yang hanya menyalahkan faktor kelalaian pekerja tanpa membenahi sistem.'
    ],
    regulations: [
      '<strong>Permen ESDM No. 26 Tahun 2018</strong> tentang Pelaksanaan Kaidah Pertambangan yang Baik dan Pengawasan Pertambangan Mineral dan Batubara.',
      '<strong>Kepmen ESDM No. 1827 K/30/MEM/2018</strong> (Lampiran III Pedoman Pengawasan K3 Pertambangan).',
      '<strong>Standar Kompetensi Kerja Nasional Indonesia (SKKNI) Bidang Pengawas Operasional Pertambangan</strong>.'
    ],
    modules: [
      {
        name: 'Modul 1: Landasan Hukum Kaidah Pertambangan & Tanggung Jawab Pengawas',
        theory: 'Peran KTT (Kepala Teknik Tambang), hak dan kewajiban pengawas operasional, akuntabilitas keselamatan kerja tambang.',
        practical: 'Audit tugas dan fungsi pengawasan shift harian tambang mineral/batubara.'
      },
      {
        name: 'Modul 2: Pelaksanaan Inspeksi K3 & Pertemuan Keselamatan (P5M)',
        theory: 'Teknik inspeksi terencana vs tidak terencana, siklus pengamatan perilaku kerja, pelaksanaan Safety Talk P5M.',
        practical: 'Simulasi memimpin Pembicaraan Pagi 5 Menit (P5M) di depan regu operator alat berat.'
      },
      {
        name: 'Modul 3: Analisis Keselamatan Pekerjaan (JSA) & Investigasi Kecelakaan Tambang',
        theory: 'Penyusunan JSA pekerjaan berisiko tinggi tambang, metodologi investigasi kecelakaan 6 tahapan ESDM, pelaporan Form KTT.',
        practical: 'Praktik wawancara saksi dan rekonstruksi kecelakaan truk hauler terguling di disposal.'
      }
    ],
    equipment: ['Modul SKKNI POP BNSP Lengkap.', 'Formulir Inspeksi Tambang, Format Baku JSA & Laporan Investigasi ESDM.'],
    participants: ['Foreman, Supervisor, Group Leader, Junior Engineer Tambang Batubara, Nikel, Emas, dan Mineral Logam.'],
    tableData: {
      headers: ['Unit Kompetensi SKKNI POP', 'Kode Unit Kompetensi', 'Bentuk Uji Kompetensi BNSP'],
      rows: [
        ['Melaksanakan Peraturan K3 Pertambangan', 'PMB.PO02.001.01', 'Uji Tulis & Wawancara Asesor'],
        ['Melaksanakan Inspeksi K3 Tambang', 'PMB.PO02.002.01', 'Portofolio Bukti Laporan Inspeksi Lapangan'],
        ['Melaksanakan Investigasi Kecelakaan Tambang', 'PMB.PO02.003.01', 'Studi Kasus Laporan Investigasi KTT'],
        ['Melaksanakan Pertemuan K3 Terencana (P5M)', 'PMB.PO02.004.01', 'Simulasi Roleplay P5M di Hadapan Asesor'],
        ['Melaksanakan Analisis Keselamatan Kerja (JSA)', 'PMB.PO02.005.01', 'Penyusunan Dokumen JSA Pekerjaan Kritis']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/pengawas-operasional-madya-pom/', label: 'Pelatihan POP Tambang' },
      { href: '/kategori-pelatihan/keselamatan-alat-berat/', label: 'Pelatihan Keselamatan Alat Berat' }
    ],
    faqs: [
      {
        q: 'Siapa saja yang wajib memiliki sertifikat kompetensi POP Tambang?',
        a: 'Setiap pekerja tambang yang membawahi langsung tenaga kerja operasional (seperti Foreman, Pengawas Lapangan, Group Leader, Supervisor, dan Section Head) di perusahaan pemegang IUP, IUPK, IPR, atau IUJP wajib memiliki sertifikat kompetensi POP Tambang.'
      }
    ]
  },

  // 81. Pengawas Operasional Madya (POM Tambang)
  {
    key: 'pengawas-operasional-madya-pom',
    title: 'Pelatihan Pengawas Operasional Madya (POM Tambang): Sertifikasi BNSP',
    h1: 'Pelatihan Pengawas Operasional Madya (POM) Pertambangan: Sertifikasi Kompetensi BNSP, Audit SMKP Minerba, dan Manajemen Lingkungan Tambang',
    meta: 'Pelatihan POM Tambang BNSP: implementasi SMKP Minerba (Kepmen ESDM 1827/2018), manajemen risiko operasional tingkat madya, audit lingkungan tambang, dan sertifikasi BNSP.',
    imgAlt: 'Superintendent tambang memimpin rapat tinjauan audit Sistem Manajemen Keselamatan Pertambangan (SMKP) di ruang rapat site',
    related: ['pengawas-operasional-pertama-pop', 'keselamatan-alat-berat', 'audit-smk3-pp-50-2012'],
    intro: '<strong>Pengawas Operasional Madya (POM)</strong> bertanggung jawab mengoordinasikan para pengawas operasional pertama (POP), mengelola program K3 pertambangan tingkat divisi/departemen, dan mengevaluasi penerapan <strong>Sistem Manajemen Keselamatan Pertambangan (SMKP Minerba)</strong>.',
    hazards: [
      '<strong>Kegagalan Pengelolaan Fasilitas Penampung Tailing (Tailing Dam Failure):</strong> Rembesan atau jebolnya bendungan tailing yang mencemari daerah aliran sungai.',
      '<strong>Ketidakpatuhan Kontraktor Tambang:</strong> Subkontraktor beroperasi tanpa mematuhi standar keselamatan pemegang IUP.',
      '<strong>Defisiensi Sistem Manajemen Keselamatan:</strong> Kegagalan audit internal SMKP yang memicu penghentian sementara izin tambang oleh KaIT.'
    ],
    regulations: ['<strong>Permen ESDM No. 26 Tahun 2018</strong>.', '<strong>Kepmen ESDM No. 1827 K/30/MEM/2018</strong> (Lampiran IV & VIII).', '<strong>SKKNI Pengawas Operasional Madya Pertambangan</strong>.'],
    modules: [
      {
        name: 'Modul 1: Manajemen K3 & Lingkungan Pertambangan Lanjut',
        theory: 'Penyusunan Rencana Kerja Anggaran Biaya (RKAB) bidang K3, pengelolaan reklamasi dan pascatambang, baku mutu lingkungan.',
        practical: 'Penyusunan program tahunan K3 dan Lingkungan Hidup Pertambangan.'
      },
      {
        name: 'Modul 2: Implementasi & Audit SMKP Minerba',
        theory: '7 Elemen SMKP: Kebijakan, Perencanaan, Organisasi/Personil, Implementasi, Pemantauan, Dokumentasi, Tinjauan Manajemen.',
        practical: 'Simulasi audit internal SMKP Minerba dan penyusunan Corrective Action Plan (CAP).'
      }
    ],
    equipment: ['Master Dokumen Audit SMKP Minerba 7 Elemen.', 'Format Laporan Triwulanan K3 KTT ke Ditjen Minerba.'],
    participants: ['Superintendent, Division Head, Safety Manager Tambang, dan Mining Operation Coordinator.'],
    tableData: {
      headers: ['Jenjang Pengawas Tambang', 'Tingkat Manajemen', 'Fokus Utama Tanggung Jawab', 'Persyaratan Pra-Uji'],
      rows: [
        ['POP (Pertama)', 'Supervisor / Foreman', 'Pengawasan operasional langsung di lapangan (TBM, JSA, Inspeksi)', 'Pengalaman min. 1-2 tahun di tambang'],
        ['POM (Madya)', 'Superintendent / Manager', 'Pengelolaan sistem, koordinasi POP, audit SMKP Minerba', 'Wajib memegang sertifikat POP min. 1 tahun'],
        ['POU (Utama)', 'KTT / Direktur Operasional', 'Kebijakan korporat strategis, legal compliance menyeluruh', 'Wajib memegang sertifikat POM min. 1 tahun']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/pengawas-operasional-pertama-pop/', label: 'Pelatihan POP Tambang' },
      { href: '/kategori-pelatihan/audit-smk3-pp-50-2012/', label: 'Pelatihan Audit SMK3' }
    ],
    faqs: [
      {
        q: 'Apakah pemegang sertifikat POP bisa langsung mengikuti uji kompetensi POM Tambang?',
        a: 'Sesuai ketentuan BNSP dan Ditjen Minerba, peserta wajib memiliki sertifikat kompetensi POP terlebih dahulu dan telah memiliki masa kerja aktif sebagai pengawas operasional minimal selama 1 (satu) tahun sebelum berhak mendaftar uji kompetensi POM.'
      }
    ]
  },

  // 82. K3 Terowongan & Tambang Bawah Tanah
  {
    key: 'k3-terowongan-dan-underground-mining',
    title: 'Pelatihan K3 Terowongan & Tambang Bawah Tanah (Underground Safety)',
    h1: 'Pelatihan K3 Terowongan & Tambang Bawah Tanah: Sistem Ventilasi Udara, Ground Support Rock Bolting, dan Refuge Chamber',
    meta: 'Pelatihan keselamatan tambang bawah tanah & tunnelling: pemantauan gas tambang (metana, CO), sistem penyangga batuan (rock bolting & shotcrete), emergency refuge chamber, dan escape breathing apparatus.',
    imgAlt: 'Pekerja tambang bawah tanah mengenakan helm lampu tambang cap lamp dan membawa self-rescuer berjalan di terowongan tambang',
    related: ['gas-tester', 'confined-space-entry', 'rescue-ruang-terbatas'],
    intro: 'Bekerja di dalam terowongan infrastruktur (Tunneling MRT/PLTA) dan tambang bawah tanah (<em>Underground Mining</em>) menempatkan pekerja di bawah ancaman runtuhan batuan jutaan ton (<em>rockburst</em>), ledakan gas metana tambang, serta paparan gas beracun tanpa akses cahaya alami.',
    hazards: [
      '<strong>Runtuhan Batuan Atap (Rockburst / Roof Fall):</strong> Kegagalan sistem baut batuan (rock bolt) saat penggalian terowongan.',
      '<strong>Ledakan Gas Metana & Debu Batubara:</strong> Gas metana (CH4) tersulut percikan listrik peralatan non-intrinsically safe.',
      '<strong>Kebakaran di Dalam Terowongan:</strong> Asap pekat dan gas CO menjebak pekerja berjarak kilometer dari portal keluar.'
    ],
    regulations: ['<strong>Kepmen ESDM No. 1827 K/30/MEM/2018</strong> (Lampiran III Bagian Tambang Bawah Tanah).', '<strong>Standar MSHA (Mine Safety and Health Administration) Title 30 CFR</strong>.'],
    modules: [
      {
        name: 'Modul 1: Sistem Ventilasi Tambang Bawah Tanah & Monitoring Gas',
        theory: 'Ventilasi utama (Main Fan) vs ventilasi bantu (Auxiliary Ducting), kuantitas udara minimal (2 m³/menit/orang), batas CH4 < 1%.',
        practical: 'Pengukuran debit aliran udara tambang (anemometer) dan continuous gas monitoring.'
      },
      {
        name: 'Modul 2: Sistem Penyangga Batuan (Ground Support Systems)',
        theory: 'Rock Mass Rating (RMR), Rock Bolting, Cable Bolt, Wire Mesh, Shotcrete semprot beton tahan retak.',
        practical: 'Uji tarik baut batuan (Pull-Out Test Rock Bolt) untuk memverifikasi kapasitas cengkeraman anchorage.'
      },
      {
        name: 'Modul 3: Ruang Perlindungan Darurat (Refuge Chamber) & Self-Rescuer',
        theory: 'Fasilitas Refuge Chamber bertekanan positif dengan pasokan O2 mandiri 48-96 jam, penggunaan Self-Contained Self-Rescuer (SCSR).',
        practical: 'Drill donning SCSR kimiawi dalam waktu <30 detik dalam kondisi ruangan gelap total ber-asap buatan.'
      }
    ],
    equipment: ['Self-Contained Self-Rescuer (SCSR Chemical O2 60 Min).', 'Rock Bolt Pull Tester Kit.', 'Mine Intrinsically Safe Multi-Gas Detector (CH4, CO, O2, NO2).'],
    participants: ['Mine Engineer, Tunneling Supervisor, Underground Geologist, Safety Officer Tambang Bawah Tanah.'],
    tableData: {
      headers: ['Parameter Udara Tambang Bawah Tanah', 'Standar Batas Regulasi ESDM', 'Tindakan Jika Tidak Sesuai'],
      rows: [
        ['Kandungan Oksigen (O2)', 'Minimal 19.5% Volume', 'Tingkatkan pasokan fan ventilasi segera'],
        ['Gas Metana (CH4) di Udara Umum', 'Maksimal 1.0% Volume', 'Hentikan alat berat dan putus daya listrik'],
        ['Gas Karbon Monoksida (CO)', 'Maksimal 25 ppm (NAB)', 'Evakuasi pekerja menggunakan SCSR'],
        ['Kecepatan Udara Ventilasi di Jalan Kerja', '0.15 m/s s.d 7.0 m/s', 'Atur pintu ventilasi (air door / regulator)']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/gas-tester/', label: 'Pelatihan Gas Tester' },
      { href: '/kategori-pelatihan/rescue-ruang-terbatas/', label: 'Pelatihan Rescue Ruang Terbatas' }
    ],
    faqs: [
      {
        q: 'Apa fungsi utama Refuge Chamber di tambang bawah tanah?',
        a: 'Refuge Chamber adalah ruangan perlindungan baja kedap udara bertekanan positif yang dilengkapi dengan sistem suplai oksigen medis mandiri, pendingin udara, air minum, dan komunikasi darurat selama 48 hingga 96 jam untuk menyelamatkan pekerja saat jalur portal terowongan terputus akibat kebakaran atau runtuhan.'
      }
    ]
  },

  // 83. K3 Penyelaman Komersial (Commercial Diving)
  {
    key: 'k3-pekerjaan-bawah-air-commercial-diving',
    title: 'Pelatihan K3 Penyelaman Komersial Bawah Air (Commercial Diving Safety)',
    h1: 'Pelatihan Keselamatan Penyelaman Komersial: Surface-Supplied Diving, Dekompresi, dan Standar IMCA/Kepmenaker',
    meta: 'Pelatihan K3 penyelaman komersial (underwater diving): Surface-Supplied Air Diving, tabel dekompresi US Navy, pengoperasian Recompression Chamber, inspeksi bawah air NDT, dan keselamatan salvase/offshore.',
    imgAlt: 'Penyelam komersial mengenakan helm diving Surface-Supplied bersiap turun ke air dari deck kapal offshore support vessel',
    related: ['confined-space-entry', 'gas-tester', 'k3-maritim-dan-kepelabuhanan'],
    intro: 'Penyelaman komersial (<em>Commercial Diving</em>) untuk inspeksi pondasi jembatan, perbaikan pipa bawah laut (subsea pipeline), konstruksi dermaga, dan pemotongan kapal karam adalah pekerjaan berisiko fatalitas ekstrem di bawah tekanan hidrostatis tinggi.',
    hazards: [
      '<strong>Penyakit Dekompresi (Decompression Sickness / The Bends):</strong> Pembentukan gelembung gas nitrogen di dalam darah akibat naik ke permukaan terlalu cepat.',
      '<strong>Emboli Gas Arteri (Arterial Gas Embolism / AGE):</strong> Paru-paru pecah akibat menahan napas saat naik dari kedalaman air.',
      '<strong>Terjepit Perbedaan Tekanan Air (Differential Pressure / Delta-P Hazard):</strong> Penyelam tersedot ke dalam lubang katup intake bawah air yang mematikan seketika.'
    ],
    regulations: ['<strong>UU No. 1 Tahun 1970</strong>.', '<strong>Standar Internasional IMCA D 014</strong> (International Code of Practice for Offshore Diving).', '<strong>US Navy Diving Manual Revision 7</strong>.'],
    modules: [
      {
        name: 'Modul 1: Fisika & Fisiologi Penyelaman Dalam',
        theory: 'Hukum Boyle, Henry, Dalton; batas kedalaman udara (Maks 50 meter), tabel dekompresi US Navy Diving Table.',
        practical: 'Perhitungan profil penyelamatan dekompresi bertingkat pada kedalaman 30 meter.'
      },
      {
        name: 'Modul 2: Sistem Selang Suplai Permukaan (Surface-Supplied Air Diving)',
        theory: 'Kompresor udara selam medis bersertifikat, umbilical hose assembly (udara, komunikasi kabel, pneumofathometer).',
        practical: 'Audit kelayakan diving panel control dan pengujian kemurnian udara pernapasan per standar CGA Grade D.'
      },
      {
        name: 'Modul 3: Pengoperasian Ruang Dekompresi Ulang (Hyperbaric Chamber)',
        theory: 'Protokol terapi oksigen hiperbarik (Table 6 Treatment), manajemen darurat gas embolism.',
        practical: 'Simulasi manuver penanganan korban bends di dalam Twin-Lock Recompression Chamber.'
      }
    ],
    equipment: ['Surface-Supplied Diving Helmet (Kirby Morgan KMDSI).', 'Twin-Lock Hyperbaric Decompression Chamber Unit.', 'Umbilical Cable & Diver Communication Box.'],
    participants: ['Commercial Diver, Diving Supervisor, Life Support Technician, dan Marine Project Engineer.'],
    tableData: {
      headers: ['Fenomena Penyelaman', 'Penyebab Fisika', 'Gejala Klinis', 'Tindakan Terapi Mutlak'],
      rows: [
        ['The Bends (Dekompresi Tipe 1)', 'Gelembung nitrogen di persendian', 'Nyeri sendi hebat, bercak merah di kulit', 'Rekompression Chamber Hyperbaric O2'],
        ['Arterial Gas Embolism (AGE)', 'Ruptur alveoli paru akibat ekspansi udara', 'Hilang kesadaran seketika, batuk darah', 'Terapi Hiperbarik Tabel 6 Mendesak'],
        ['Nitrogen Narcosis', 'Efek anestesi nitrogen pada kedalaman >30m', 'Mabuk kedalaman, disorientasi mental', 'Segera naik ke kedalaman lebih dangkal']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/confined-space-entry/', label: 'Pelatihan Confined Space' },
      { href: '/kategori-pelatihan/k3-maritim-dan-kepelabuhanan/', label: 'Pelatihan K3 Maritim' }
    ],
    faqs: [
      {
        q: 'Mengapa penyelaman komersial industri dilarang menggunakan tabung scuba biasa untuk pekerjaan berat?',
        a: 'Penyelaman komersial industri mewajibkan sistem Surface-Supplied Diving (udara disuplai tanpa batas dari permukaan melalui selang umbilical dengan cadangan bail-out tank) karena dilengkapi komunikasi suara langsung dua arah dengan supervisor di kapal dan pantauan kedalaman real-time (pneumofathometer), yang tidak dimiliki tabung scuba konvensional.'
      }
    ]
  },

  // 84. K3 Konstruksi Jembatan & Elevated
  {
    key: 'k3-konstruksi-jembatan-dan-elevated',
    title: 'Pelatihan K3 Konstruksi Jembatan & Struktur Melayang (Elevated Bridge Safety)',
    h1: 'Pelatihan K3 Konstruksi Jembatan & Elevated: Pemasangan Girder Launcher, Balanced Cantilever, dan Keselamatan Pier Head',
    meta: 'Pelatihan K3 jembatan & jalan layang: pengoperasian launching gantry girder, erection segmental box girder, stabilitas form traveler balanced cantilever, dan proteksi bahaya jatuh di atas sungai/jalan tol.',
    imgAlt: 'Struktur launching gantry girder raksasa memindahkan balok segmental box girder di atas pier head proyek jalan tol layang',
    related: ['ahli-k3-konstruksi', 'operator-gantry-crane', 'rigger', 'lifting-supervisor'],
    intro: 'Konstruksi jembatan bentang panjang dan jalan tol melayang (<em>elevated highway</em>) melibatkan operasi peluncuran balok girder (<em>launching gantry</em>) berbobot ratusan ton di atas jalan raya aktif atau sungai berarus deras.',
    hazards: [
      '<strong>Gantry Girder Tergelincir / Runtuh:</strong> Kesalahan sistem hidrolik peluncur saat memindahkan balok segmental.',
      '<strong>Pekerja Jatuh ke Sungai / Jalan Raya:</strong> Bekerja di atas pier head sempit setinggi 30 meter tanpa lifelines perimeter.',
      '<strong>Tumpahan Material Menghantam Kendaraan Bawah:</strong> Ketiadaan jaring penahan puing (debris net) di atas jalur lalu lintas padat.'
    ],
    regulations: ['<strong>Permen PUPR No. 10 Tahun 2021</strong> (SMKK).', '<strong>Permenaker No. 01/1980</strong>.', '<strong>Standar AASHTO Guide Specifications for Bridges</strong>.'],
    modules: [
      {
        name: 'Modul 1: Analisis Bahaya Erection Girder & Launching Gantry',
        theory: 'Metode Precast Beam Erection, Balanced Cantilever Form Traveler, Cable-Stayed safety, kalkulasi lendutan gantry launcher.',
        practical: 'Audit dokumen Lifting Plan & Stability Calculation peluncuran girder jembatan.'
      },
      {
        name: 'Modul 2: Proteksi Bahaya Jatuh Pier Head & Jaring Pengaman Melayang',
        theory: 'Pemasangan Catch Platform, Debris Catch Netting, Horizontal Lifeline kawat baja 8 mm pada girder span.',
        practical: 'Simulasi pemasangan temporary working platform dan jaring pengaman di atas sungai.'
      }
    ],
    equipment: ['Heavy Duty Safety Debris Netting Class A1.', 'Horizontal Lifeline Cable System.', 'Laser Inclinometer & Load Cell Launcher Sensor.'],
    participants: ['Bridge Engineer, Launching Gantry Specialist, HSE Inspector Proyek Elevated, Rigging Supervisor.'],
    tableData: {
      headers: ['Metode Konstruksi Jembatan', 'Peralatan Utama', 'Potensi Bahaya Fatal', 'Proteksi Kunci'],
      rows: [
        ['Precast I-Girder Erection', 'Tandem Mobile Crane / Launcher Gantry', 'Girder terguling saat stressing', 'Bracing lateral kaku antar-girder'],
        ['Balanced Cantilever Box Girder', 'Form Traveler Unit', 'Ketidakseimbangan beban cor corong', 'Uji hidrostatis form traveler & load balancing'],
        ['Cable-Stayed Bridge', 'Tower Crane & Winch Stranding', 'Tegangan tinggi kabel stay putus', 'Proteksi getaran aerodinamis & damping system']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/ahli-k3-konstruksi/', label: 'Pelatihan Ahli K3 Konstruksi' },
      { href: '/kategori-pelatihan/operator-gantry-crane/', label: 'Pelatihan Operator Gantry Crane' }
    ],
    faqs: [
      {
        q: 'Apa langkah pengamanan wajib saat melakukan pengangkatan girder jembatan di atas jalan raya umum yang aktif?',
        a: 'Wajib diberlakukan penutupan jalan total sementara (traffic closure / rolling roadblock) dengan koordinasi Satlantas Kepolisian dan Dinas Perhubungan selama proses pengangkatan dan penempatan balok girder hingga terpasang bracing pengaku sementara.'
      }
    ]
  }
];

console.log(`Loaded ${batch3ConstructionAndMining.length} Construction & Mining programs.`);
