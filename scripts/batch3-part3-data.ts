import { ProgramDetail } from './master-batch1-data';

export const batch3ManagementAndSpecialized: ProgramDetail[] = [
  // 85. Ahli K3 Umum
  {
    key: 'ahli-k3-umum',
    title: 'Pelatihan Ahli K3 Umum (AK3U): Sertifikasi Kemnaker RI',
    h1: 'Pelatihan Ahli K3 Umum: Sertifikasi Kompetensi, Pembinaan P2K3, dan Hak Pengawasan K3 Nasional Kemnaker RI',
    meta: 'Pelatihan Calon Ahli K3 Umum (AK3U) resmi Kemnaker RI: UU No. 1/1970, pembentukan P2K3, audit SMK3 PP 50/2012, pembuatan laporan K3 triwulanan, dan SKP Ahli K3.',
    imgAlt: 'Calon Ahli K3 Umum mengenakan jas almamater mempresentasikan laporan hasil Praktik Kerja Lapangan (PKL) audit K3 pabrik di depan dewan penguji',
    related: ['audit-smk3-pp-50-2012', 'lead-auditor-iso-45001', 'hiradc-manajemen-risiko', 'investigasi-kecelakaan-kerja'],
    intro: '<strong>Ahli K3 Umum (AK3U)</strong> adalah figur sentral yang bertindak sebagai kepanjangan tangan pengawas ketenagakerjaan pemerintah di dalam perusahaan. Berdasarkan <strong>UU No. 1 Tahun 1970 &amp; Permenaker No. 02/MEN/1992</strong>, setiap perusahaan yang mempekerjakan 100 orang atau memiliki potensi bahaya tinggi wajib membentuk <strong>Panitia Pembina Keselamatan dan Kesehatan Kerja (P2K3)</strong> dengan Sekretaris seorang Ahli K3 bersertifikat.',
    hazards: [
      '<strong>Sanksi Pidana & Penutupan Operasional:</strong> Beroperasi tanpa struktur P2K3 dan Ahli K3 tersertifikasi resmi saat inspeksi Disnaker.',
      '<strong>Kegagalan Pengendalian Bahaya Lintas Divisi:</strong> Ketiadaan integrasi keselamatan kerja antara departemen produksi, maintenance, dan logistik.',
      '<strong>Klaim Asuransi Ditolak:</strong> Kegagalan pelaporan kecelakaan kerja ke BPJS Ketenagakerjaan dan Disnaker dalam kurun waktu 2x24 jam.'
    ],
    regulations: [
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Permenaker No. Per.02/MEN/1992</strong> tentang Tata Cara Penunjukan, Kewajiban, dan Wewenang Ahli K3.',
      '<strong>Permenaker No. Per.04/MEN/1987</strong> tentang Panitia Pembina K3 (P2K3).',
      '<strong>PP No. 50 Tahun 2012</strong> tentang Penerapan SMK3.'
    ],
    modules: [
      {
        name: 'Modul 1: Kebijakan K3 Nasional & Kelembagaan P2K3',
        theory: 'Undang-Undang K3, pembentukan & pelaporan P2K3 triwulanan ke Disnaker, hak dan kewajiban Ahli K3 Umum.',
        practical: 'Penyusunan struktur organisasi P2K3 dan simulasi sidang pleno bulanan P2K3.'
      },
      {
        name: 'Modul 2: Pengawasan K3 Spesialisasi Lintas Sektoral',
        theory: 'K3 Mekanik & Pesawat Uap, K3 Listrik & Kebakaran, K3 Konstruksi & Bangunan, K3 Kimia & Kesehatan Kerja.',
        practical: 'Audit komprehensif checklist riksa uji peralatan mekanik, listrik, dan bejana tekan.'
      },
      {
        name: 'Modul 3: Praktik Kerja Lapangan (PKL) & Pembuatan Laporan Seminar',
        theory: 'Metodologi audit observasi lapangan, identifikasi temuan positif vs temuan negatif, penyusunan analisis dasar hukum.',
        practical: 'Observasi PKL virtual/lapangan di pabrik manufaktur dan penyusunan karya tulis ilmiah laporan PKL.'
      }
    ],
    equipment: ['Master Dokumen Modul Kemnaker RI Lengkap 2 Jilid.', 'Format Laporan P2K3 Triwulanan & Formulir Bentuk 3 KK01 Disnaker.'],
    participants: ['Calon Sekretaris P2K3, HSE Officer, HR Specialist, Engineering Lead, dan Lulusan D3/S1 Seluruh Jurusan.'],
    tableData: {
      headers: ['Parameter Lembaga P2K3', 'Ketentuan Legal Regulasi', 'Sanksi Pelanggaran'],
      rows: [
        ['Kewajiban Pembentukan', 'Perusahaan mempekerjakan >= 100 orang ATAU potensi bahaya tinggi', 'Pelanggaran Pasal 15 UU No. 1/1970'],
        ['Jabatan Sekretaris P2K3', 'Wajib dijabat oleh Ahli K3 Umum (AK3U) berlisensi SKP Kemnaker aktif', 'Struktur P2K3 tidak disahkan Disnaker'],
        ['Pelaporan Rutin P2K3', 'Wajib disampaikan ke Disnaker minimal 1 kali setiap 3 bulan (Triwulanan)', 'Audit kepatuhan dinilai Defisiensi Kritis']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/audit-smk3-pp-50-2012/', label: 'Pelatihan Audit SMK3' },
      { href: '/kategori-pelatihan/hiradc-manajemen-risiko/', label: 'Pelatihan HIRADC' },
      { href: '/kategori-pelatihan/lead-auditor-iso-45001/', label: 'Pelatihan Lead Auditor ISO 45001' }
    ],
    faqs: [
      {
        q: 'Berapa lama masa berlaku Surat Keputusan Penunjukan (SKP) dan Lisensi Ahli K3 Umum Kemnaker RI?',
        a: 'SKP dan Lisensi Ahli K3 Umum yang diterbitkan oleh Kementerian Ketenagakerjaan RI memiliki masa berlaku selama 3 (tiga) tahun dan dapat diperpanjang atas permohonan perusahaan tempat Ahli K3 yang bersangkutan bekerja.'
      }
    ]
  },

  // 86. Audit SMK3 PP 50/2012
  {
    key: 'audit-smk3-pp-50-2012',
    title: 'Pelatihan Audit Internal SMK3 PP No. 50 Tahun 2012: 166 Kriteria',
    h1: 'Pelatihan Audit Internal SMK3: Pemahaman 5 Prinsip, 12 Elemen, 166 Kriteria, dan Persiapan Sertifikasi Bendera Emas',
    meta: 'Pelatihan Auditor Internal SMK3 PP No. 50/2012: penguasaan 166 kriteria audit SMK3, metodologi wawancara & sampling dokumen, pembobotan skor kelulusan, dan persiapan audit eksternal Kemnaker.',
    imgAlt: 'Lead Auditor SMK3 memeriksa dokumen Standard Operating Procedure dan meninjau bukti rekaman inspeksi K3 di ruang arsip pabrik',
    related: ['ahli-k3-umum', 'lead-auditor-iso-45001', 'contractor-safety-management-system-csms'],
    intro: 'Penerapan <strong>Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3)</strong> bersifat wajib (<em>mandatory</em>) di Indonesia berdasarkan <strong>Peraturan Pemerintah No. 50 Tahun 2012</strong> bagi perusahaan yang mempekerjakan 100 orang atau lebih atau memiliki potensi bahaya tinggi. Pelatihan Audit Internal SMK3 melatih auditor internal dalam mengevaluasi kepatuhan 166 kriteria untuk meraih penghargaan <strong>Bendera Emas (Gold Flag) Kemnaker RI</strong>.',
    hazards: [
      '<strong>Kegagalan Audit Eksternal (Tingkat Kritis):</strong> Temuan kriteria kritis (misal tidak ada izin pemakaian mesin) yang membatalkan kelulusan sertifikasi.',
      '<strong>SMK3 Hanya di Atas Kertas (Paperwork Compliance):</strong> Dokumen kebijakan K3 rapi namun tidak diterapkan di lantai operasional kerja.',
      '<strong>Sanksi Administratif Kementerian Ketenagakerjaan:</strong> Teguran tertulis hingga penghentian izin usaha bagi perusahaan wajib SMK3 yang menolak sertifikasi.'
    ],
    regulations: [
      '<strong>PP No. 50 Tahun 2012</strong> tentang Penerapan Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3).',
      '<strong>Permenaker No. 26 Tahun 2014</strong> tentang Penyelenggaraan Penilaian Penerapan SMK3.'
    ],
    modules: [
      {
        name: 'Modul 1: 5 Prinsip Dasar & 12 Elemen SMK3 PP 50/2012',
        theory: '1. Kebijakan -> 2. Perencanaan -> 3. Pelaksanaan -> 4. Pemantauan & Evaluasi -> 5. Peninjauan & Peningkatan Kinerja.',
        practical: 'Audit kesesuaian dokumen Kebijakan K3 yang ditandatangani Direksi Perusahaan.'
      },
      {
        name: 'Modul 2: Bedah 166 Kriteria Audit Tingkat Lanjutan',
        theory: 'Klasifikasi kriteria audit: Tingkat Awal (64 kriteria), Tingkat Transisi (122 kriteria), Tingkat Lanjutan (166 kriteria).',
        practical: 'Simulasi audit dokumen pengendalian pembelian, pemeliharaan sarana, dan kesiapsiagaan tanggap darurat.'
      },
      {
        name: 'Modul 3: Metodologi Audit Lapangan & Penilaian Kategori Temuan',
        theory: 'Kategori Ketidaksesuaian Kritis (Major Failure), Mayor, Minor; teknik wawancara triangulasi.',
        practical: 'Penyusunan Laporan Audit Internal SMK3 dan rekomendasi perbaikan tindakan korektif (CAPA).'
      }
    ],
    equipment: ['Master Checklist Audit 166 Kriteria PP 50/2012.', 'Software Perhitungan Skor Persentase Kelulusan Audit SMK3.'],
    participants: ['Auditor Internal SMK3, Management Representative (MR), HSE Coordinator, dan Tim QSHE Perusahaan.'],
    tableData: {
      headers: ['Tingkat Penerapan SMK3', 'Jumlah Kriteria Audit', 'Batas Skor Kelulusan Baik (85-100%)', 'Bentuk Sertifikat Kemnaker'],
      rows: [
        ['Tingkat Awal', '64 Kriteria', 'Sertifikat & Bendera Perak', 'Usaha Kecil Berisiko Rendah'],
        ['Tingkat Transisi', '122 Kriteria', 'Sertifikat & Bendera Perak', 'Usaha Menengah Berisiko Sedang'],
        ['Tingkat Lanjutan', '166 Kriteria', 'Sertifikat & BENDERA EMAS (Gold Flag)', 'Standar Wajib Perusahaan Berisiko Tinggi']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/ahli-k3-umum/', label: 'Pelatihan Ahli K3 Umum' },
      { href: '/kategori-pelatihan/lead-auditor-iso-45001/', label: 'Pelatihan Lead Auditor ISO 45001' }
    ],
    faqs: [
      {
        q: 'Apa yang dimaksud dengan Temuan Kategori Kritis dalam Audit SMK3 PP 50/2012?',
        a: 'Temuan Kritis terjadi jika ditemukan kegagalan fatal pada salah satu kriteria audit yang berpotensi menimbulkan kecelakaan fatalitas seketika atau ketiadaan izin pengesahan pemakaian legal pesawat angkat/uap/listrik. Adanya 1 temuan kritis mengakibatkan perusahaan otomatis DINYATAKAN TIDAK LULUS audit SMK3.'
      }
    ]
  },

  // 87. Lead Auditor ISO 45001
  {
    key: 'lead-auditor-iso-45001',
    title: 'Pelatihan Lead Auditor ISO 45001:2018 OHSMS (CQI / IRCA)',
    h1: 'Pelatihan Lead Auditor ISO 45001:2018: Metodologi Audit Sistem Manajemen K3 Berstandar Internasional',
    meta: 'Pelatihan Lead Auditor ISO 45001:2018 bersertifikasi CQI-IRCA: struktur High Level Structure (HLS), audit Plan-Do-Check-Act (PDCA), klausul 4-10, dan teknik memimpin tim audit internasional.',
    imgAlt: 'Lead Auditor bersertifikat internasional memimpin Opening Meeting audit ISO 45001 bersama jajaran direksi korporat',
    related: ['audit-smk3-pp-50-2012', 'ahli-k3-umum', 'hiradc-manajemen-risiko'],
    intro: 'Standar <strong>ISO 45001:2018</strong> adalah standar internasional acuan tertinggi untuk Sistem Manajemen Keselamatan dan Kesehatan Kerja. Pelatihan Lead Auditor membekali profesional dengan kompetensi global dalam merencanakan, memimpin, mengeksekusi, dan melaporkan audit K3 independen pihak pertama, kedua, maupun ketiga.',
    hazards: [
      '<strong>Temuan Major Non-Conformity (MNC):</strong> Klausul kepemimpinan (Leadership) atau manajemen risiko tidak terbukti berjalan.',
      '<strong>Integrasi Sistem yang Gagal:</strong> Ketidakharmonisan antara ISO 45001, ISO 9001 (Mutu), dan ISO 14001 (Lingkungan).',
      '<strong>Audit Dangkal Berbasis Dokumen:</strong> Auditor gagal menemukan deviasi operasional kritis di lantai pabrik.'
    ],
    regulations: ['<strong>Standar Internasional ISO 45001:2018</strong>.', '<strong>Standar Panduan Audit ISO 19011:2018</strong> (Guidelines for Auditing Management Systems).'],
    modules: [
      {
        name: 'Modul 1: Struktur High Level Structure (HLS) Klausul 4 s.d 10',
        theory: 'Konteks Organisasi (Kl 4), Kepemimpinan & Partisipasi Pekerja (Kl 5), Perencanaan (Kl 6), Dukungan (Kl 7), Operasional (Kl 8), Evaluasi Kinerja (Kl 9), Peningkatan (Kl 10).',
        practical: 'Audit bukti partisipasi dan konsultasi pekerja non-manajerial (Klausul 5.4).'
      },
      {
        name: 'Modul 2: Perencanaan & Pelaksanaan Audit ISO 19011',
        theory: 'Penyusunan Rencana Audit (Audit Plan), Audit Checklist, Opening Meeting, Pengumpulan Bukti Objektif, Closing Meeting.',
        practical: 'Simulasi wawancara audit dengan Top Management dan perumusan lembar Non-Conformity Report (NCR).'
      }
    ],
    equipment: ['Standar Dokumen Resmi ISO 45001:2018 & ISO 19011:2018.', 'Master Audit Workbook & NCR Forms.'],
    participants: ['Lead Auditor, QA/HSE Manager Korporat, Konsultan Sistem Manajemen, dan Management Representative.'],
    tableData: {
      headers: ['Kategori Temuan Audit ISO 45001', 'Definisi Karakteristik', 'Dampak Terhadap Sertifikasi'],
      rows: [
        ['Major Non-Conformity (MNC)', 'Kegagalan total pemenuhan satu klausul utuh atau bahaya keselamatan langsung', 'Sertifikasi ISO DITAHAN hingga re-audit pembuktian'],
        ['Minor Non-Conformity', 'Pelanggaran parsial yang tidak meruntuhkan integritas sistem secara total', 'Sertifikasi terbit dengan komitmen CAPA 90 hari'],
        ['Opportunity for Improvement (OFI)', 'Saran peningkatan proses tanpa adanya pelanggaran klausul', 'Ditinjau pada audit surveillance tahun berikutnya']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/audit-smk3-pp-50-2012/', label: 'Pelatihan Audit SMK3' },
      { href: '/kategori-pelatihan/hiradc-manajemen-risiko/', label: 'Pelatihan HIRADC' }
    ],
    faqs: [
      {
        q: 'Apa perbedaan mendasar antara audit SMK3 PP 50/2012 dan audit ISO 45001:2018?',
        a: 'SMK3 PP 50/2012 adalah regulasi WAJIB nasional Indonesia dengan penilaian berbasis skor persentase kriteria (166 kriteria) dan bendera emas Kemnaker. Sedangkan ISO 45001:2018 adalah standar sukarela internasional berbasis klausul manajemen proses (High Level Structure) yang diakui di seluruh dunia.'
      }
    ]
  },

  // 88. HIRADC Manajemen Risiko
  {
    key: 'hiradc-manajemen-risiko',
    title: 'Pelatihan HIRADC: Hazard Identification & Risk Assessment',
    h1: 'Pelatihan HIRADC Komprehensif: Identifikasi Bahaya, Penilaian Matriks Risiko 5x5, dan Hierarki Pengendalian',
    meta: 'Pelatihan HIRADC / IBPRP: identifikasi bahaya tempat kerja, kalkulasi Risk Score (Likelihood x Severity), ALARP principle, dan penerapan 5 hierarki pengendalian risiko K3.',
    imgAlt: 'Tim manajemen risiko K3 menyusun tabel matriks HIRADC 5x5 dan menetapkan hierarki pengendalian rekayasa teknik',
    related: ['job-safety-analysis-jsa-authoring', 'investigasi-kecelakaan-kerja', 'ahli-k3-umum'],
    intro: '<strong>HIRADC (Hazard Identification, Risk Assessment, and Determining Control)</strong> atau <strong>IBPRP</strong> adalah fondasi dari seluruh arsitektur keselamatan kerja modern. Tanpa identifikasi bahaya yang akurat, seluruh prosedur K3 dan pengadaan APD akan menjadi sia-sia dan salah sasaran.',
    hazards: [
      '<strong>Underestimating Risiko Bahaya (Penilaian Bias):</strong> Menilai risiko tinggi sebagai risiko rendah akibat kebiasaan (normalisasi penyimpangan).',
      '<strong>Hanya Mengandalkan APD (Lowest Hierarchy Trap):</strong> Mengabaikan eliminasi dan rekayasa teknik, langsung memberikan masker/helm sebagai kontrol utama.',
      '<strong>HIRADC Statis yang Tidak Pernah Diperbarui:</strong> Tidak memperbarui dokumen risiko saat terjadi pergantian mesin atau modifikasi proses kerja.'
    ],
    regulations: ['<strong>PP No. 50 Tahun 2012</strong> (Elemen Perencanaan SMK3).', '<strong>Standar ISO 45001:2018 Klausul 6.1.2</strong> (Hazard Identification and Assessment).', '<strong>Standar AS/NZS ISO 31000</strong> (Risk Management).'],
    modules: [
      {
        name: 'Modul 1: Teknik Identifikasi Bahaya Komprehensif',
        theory: 'Bahaya Fisika, Kimia, Biologi, Ergonomi, Psikososial, Mekanikal, Elektrikal. Analisis aktivitas rutin vs non-rutin vs darurat.',
        practical: 'Walkthrough visual identifikasi 20 potensi bahaya tersembunyi di lini produksi.'
      },
      {
        name: 'Modul 2: Kuantifikasi Matriks Risiko & Penentuan Tingkat Keparahan',
        theory: 'Matriks Risiko 5x5: Nilai Kemungkinan (Likelihood 1-5) x Nilai Keparahan (Severity 1-5), As Low As Reasonably Practicable (ALARP).',
        practical: 'Perhitungan skor risiko awal (Initial Risk Score) dan risiko sisa (Residual Risk Score).'
      },
      {
        name: 'Modul 3: 5 Hierarki Pengendalian Risiko Mutlak',
        theory: '1. Eliminasi -> 2. Substitusi -> 3. Rekayasa Teknik (Engineering Control) -> 4. Administrasi -> 5. Alat Pelindung Diri (APD).',
        practical: 'Penyusunan Action Plan hierarki kontrol pada pekerjaan pembersihan tangki pelarut kimia.'
      }
    ],
    equipment: ['Master Spreadsheet Matriks HIRADC / IBPRP Terstandar.', 'Katalog Solusi Rekayasa Teknik & Panduan ALARP.'],
    participants: ['Risk Management Officer, Safety Officer, Section Head, Maintenance Supervisor, dan Plant Engineer.'],
    tableData: {
      headers: ['Hierarki Pengendalian', 'Tingkat Efektivitas Pengendalian', 'Contoh Implementasi Nyata di Lapangan'],
      rows: [
        ['1. Eliminasi', '100% (Paling Efektif)', 'Menghilangkan pekerjaan di ketinggian dengan memasang kamera CCTV otomatis'],
        ['2. Substitusi', '75% – 90%', 'Mengganti pelarut beracun Benzena dengan pelarut ramah lingkungan berbasis air'],
        ['3. Rekayasa Teknik', '60% – 75%', 'Memasang peredam suara enclosure pada kompresor & safety light curtain'],
        ['4. Administrasi', '30% – 50%', 'Pemberian SOP izin kerja (PTW), rotasi shift 2 jam kerja, pelatihan K3'],
        ['5. Alat Pelindung Diri', '< 20% (Paling Lemah)', 'Mewajibkan penggunaan earplug, respirator, dan safety harness']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/job-safety-analysis-jsa-authoring/', label: 'Pelatihan JSA' },
      { href: '/kategori-pelatihan/investigasi-kecelakaan-kerja/', label: 'Pelatihan Investigasi Kecelakaan' }
    ],
    faqs: [
      {
        q: 'Kapan dokumen HIRADC / IBPRP wajib ditinjau ulang (review)?',
        a: 'Dokumen HIRADC wajib ditinjau ulang sekurang-kurangnya 1 (satu) tahun sekali, ATAU segera ditinjau ulang apabila: (1) Terjadi kecelakaan kerja atau nearmiss, (2) Terjadi perubahan mesin, bahan baku, atau proses kerja, dan (3) Ditemukan regulasi perundangan baru yang relevan.'
      }
    ]
  },

  // 89. Job Safety Analysis (JSA)
  {
    key: 'job-safety-analysis-jsa-authoring',
    title: 'Pelatihan Penyusunan Job Safety Analysis (JSA) Komprehensif',
    h1: 'Pelatihan Job Safety Analysis (JSA): Metode 4 Langkah Pembuatan JSA, Integrasi Permit to Work, dan Safety Briefing Lapangan',
    meta: 'Pelatihan penyusunan JSA / JHA profesional: pemecahan langkah kerja (job steps), identifikasi bahaya per tahapan, perumusan aksi pencegahan spesifik, dan sosialisasi TBM.',
    imgAlt: 'Supervisor dan pekerja menandatangani lembar Job Safety Analysis (JSA) di samping area kerja sebelum memulai pekerjaan berisiko',
    related: ['hiradc-manajemen-risiko', 'permit-to-work', 'petugas-k3-konstruksi'],
    intro: '<strong>Job Safety Analysis (JSA / Job Hazard Analysis)</strong> adalah alat pengendalian risiko operasional harian yang membedah satu pekerjaan spesifik menjadi langkah-langkah terpisah untuk mengidentifikasi bahaya di setiap langkah dan menetapkan tindakan pencegahan konkret.',
    hazards: [
      '<strong>Langkah Kerja Terlalu Luas atau Terlalu Rinci:</strong> JSA membingungkan pekerja karena langkah kerja tidak logis.',
      '<strong>JSA Hanya Formalitas Tanda Tangan:</strong> Pekerja menandatangani JSA tanpa pernah membaca atau memahami instruksi keselamatan di dalamnya.',
      '<strong>Tindakan Pengendalian Menggunakan Kalimat Klise:</strong> Menulis instruksi abstrak seperti "Hati-hati" atau "Bekerja sesuai SOP" tanpa menyebut aksi fisik spesifik.'
    ],
    regulations: ['<strong>UU No. 1 Tahun 1970</strong>.', '<strong>Standar OSHA 3071</strong> (Job Hazard Analysis Guide).', '<strong>PP No. 50 Tahun 2012</strong>.'],
    modules: [
      {
        name: 'Modul 1: Pemilihan Pekerjaan & Pemecahan Langkah Kerja',
        theory: 'Kriteria pekerjaan wajib JSA (pekerjaan frekuensi kecelakaan tinggi, baru, berisiko kritis), pemecahan 4-10 langkah kerja berurutan.',
        practical: 'Praktik membedah pekerjaan penggantian bearing motor listrik menjadi 6 langkah kerja runut.'
      },
      {
        name: 'Modul 2: Identifikasi Bahaya Spesifik & Pengendalian Konkret',
        theory: 'Pertanyaan pemicu bahaya (Can a worker fall? Get caught? Inhale fumes?), perumusan instruksi pengendalian imperatif.',
        practical: 'Penyusunan JSA lengkap untuk pekerjaan pengelasan di ruang terbatas.'
      }
    ],
    equipment: ['Master Format Formulir JSA Industri Migas/Tambang/Konstruksi.'],
    participants: ['Supervisor, Foreman, Safety Officer, Teknisi Maintenance, dan Field Engineer.'],
    tableData: {
      headers: ['Langkah Kerja Baku', 'Potensi Bahaya Teridentifikasi', 'Tindakan Pengendalian Spesifik Wajib (Bukan Klise)'],
      rows: [
        ['1. Mengangkut tabung gas las ke lokasi', 'Tabung terguling, valve pengaman patah', 'Gunakan troli khusus tabung dan pasang tutup pelindung (cap)'],
        ['2. Menyambungkan selang regulator', 'Kebocoran gas asetilen pada fitting', 'Uji busa sabun pada sambungan, pasang flashback arrestor ganda'],
        ['3. Memulai pengelasan pada pipa', 'Percikan api mengenai kabel, sinar UV', 'Pasang fire blanket radius 11m, kenakan auto-darkening helmet shade 11']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/hiradc-manajemen-risiko/', label: 'Pelatihan HIRADC' },
      { href: '/kategori-pelatihan/permit-to-work/', label: 'Pelatihan Permit to Work' }
    ],
    faqs: [
      {
        q: 'Siapa yang paling tepat menyusun dokumen Job Safety Analysis (JSA)?',
        a: 'JSA wajib disusun bersama secara kolaboratif oleh Pengawas Lapangan (Supervisor/Foreman) yang memahami detail teknis pekerjaan bersama para Pekerja Pelaksana langsung, dan ditinjau (reviewed) oleh Safety Officer.'
      }
    ]
  },

  // 90. Investigasi Kecelakaan Kerja
  {
    key: 'investigasi-kecelakaan-kerja',
    title: 'Pelatihan Investigasi Kecelakaan Kerja & Analisis Akar Masalah (RCA)',
    h1: 'Pelatihan Investigasi Kecelakaan Kerja: Analisis Akar Masalah (RCA), Fishbone, 5-Whys, dan Pencegahan Insiden Berulang',
    meta: 'Pelatihan investigasi insiden kerja: metodologi pengumpulan bukti 4P (Position, People, Parts, Paperwork), teknik wawancara saksi, Root Cause Analysis (SCAT/Fishbone/5-Whys), dan pelaporan resmi Disnaker.',
    imgAlt: 'Tim investigasi kecelakaan kerja memasang pita barikade olah TKP dan mendokumentasikan serpihan bukti fisik mesin',
    related: ['hiradc-manajemen-risiko', 'ahli-k3-umum', 'behavior-based-safety-bbs'],
    intro: 'Tujuan utama investigasi kecelakaan kerja <strong>BUKAN UNTUK MENCARI KESALAHAN INDIVIDU (No-Blame Culture)</strong>, melainkan untuk membongkar kelemahan sistemik yang memungkinkan kecelakaan terjadi guna mencegah insiden serupa terulang di masa depan.',
    hazards: [
      '<strong>Menyalahkan Human Error Sebagai Penyebab Akhir:</strong> Berhenti pada kesimpulan "Pekerja ceroboh" tanpa menyelidiki mengapa prosedur gagal atau mengapa pelatihan tidak memadai.',
      '<strong>Kerusakan Bukti Fisik di TKP:</strong> Area kejadian kecelakaan dibersihkan sebelum tim investigasi selesai memetakan posisi bukti fisik.',
      '<strong>Saksi Takut Bersuara:</strong> Wawancara saksi dilakukan dengan gaya interogasi pidana yang memicu intimidasi.'
    ],
    regulations: ['<strong>Permenaker No. Per.03/MEN/1998</strong> tentang Tata Cara Pelaporan dan Pemeriksaan Kecelakaan.', '<strong>UU No. 1 Tahun 1970</strong>.'],
    modules: [
      {
        name: 'Modul 1: Pengamanan TKP & Pengumpulan Bukti 4P',
        theory: 'Protokol pengamanan lokasi (Barricade TKP), pengumpulan bukti: Position (Posisi), People (Manusia/Saksi), Parts (Suku cadang), Paperwork (Dokumen).',
        practical: 'Simulasi pemotretan forensik TKP dan pembuatan sketsa skala kecelakaan forklift menabrak pejalan kaki.'
      },
      {
        name: 'Modul 2: Teknik Wawancara Saksi (PEACE Model)',
        theory: 'Wawancara satu-per-satu di ruang privat, pertanyaan terbuka (open-ended), mendengarkan aktif tanpa menyalahkan.',
        practical: 'Roleplay wawancara saksi mata dan rekan kerja korban kecelakaan jatuh dari scaffolding.'
      },
      {
        name: 'Modul 3: Metodologi Root Cause Analysis (RCA)',
        theory: 'Teknik 5-Whys (5 Mengapa), Diagram Tulang Ikan (Ishikawa / Fishbone 6M), Systematic Cause Analysis Technique (SCAT).',
        practical: 'Analisis pohon penyebab kegagalan sistem pada insiden ledakan bejana tekan.'
      }
    ],
    equipment: ['Incident Investigation Evidence Kit (Pita Barikade, Kamera Forensik, Caliper, Sample Bags).', 'Software Root Cause Analysis & SCAT Matrix.'],
    participants: ['Safety Manager, Ahli K3 Umum, Supervisor Produksi, Manajer HRD, dan Anggota Tim Investigasi Insiden.'],
    tableData: {
      headers: ['Pilar Bukti 4P', 'Objek Bukti yang Wajib Diamankan', 'Tujuan Analisis Forensik'],
      rows: [
        ['Position (Posisi)', 'Posisi korban, serpihan mesin, tanda pengereman di lantai', 'Merekonstruksi lintasan dan dinamika kejadian'],
        ['People (Manusia)', 'Saksi mata langsung, rekan kerja, supervisor shift, korban', 'Menggali kronologi kejadian dan kondisi mental/kelelahan'],
        ['Parts (Suku Cadang)', 'Komponen baut patah, kawat seling putus, sensor rusak', 'Uji laboratorium kegagalan material mekanik'],
        ['Paperwork (Dokumen)', 'JSA, Permit to Work, riwayat training, logbook perawatan', 'Mendeteksi celah kelemahan administrasi dan manajemen']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/hiradc-manajemen-risiko/', label: 'Pelatihan HIRADC' },
      { href: '/kategori-pelatihan/ahli-k3-umum/', label: 'Pelatihan Ahli K3 Umum' }
    ],
    faqs: [
      {
        q: 'Berapa batas waktu pelaporan kecelakaan kerja resmi kepada Dinas Ketenagakerjaan?',
        a: 'Berdasarkan Permenaker No. 03 Tahun 1998, pengurus atau pengusaha wajib melaporkan secara tertulis setiap kecelakaan kerja yang terjadi di tempat kerja kepada Kepala Kantor Dinas Ketenagakerjaan setempat dalam waktu tidak lebih dari 2x24 jam terhitung sejak terjadinya kecelakaan.'
      }
    ]
  },

  // 91. Behavior-Based Safety (BBS)
  {
    key: 'behavior-based-safety-bbs',
    title: 'Pelatihan Behavior-Based Safety (BBS): Budaya Perilaku Aman',
    h1: 'Pelatihan Behavior-Based Safety (BBS): Model ABC (Activator-Behavior-Consequence), Observasi Perilaku, dan Feedback Positif',
    meta: 'Pelatihan Behavior-Based Safety (BBS): transformasi budaya keselamatan, observasi perilaku rekan kerja (Peer-to-Peer Observation), eliminasi Unsafe Acts, dan reward system K3.',
    imgAlt: 'Observer BBS memberikan safety coaching dan feedback positif kepada teknisi yang mempraktikkan prosedur kerja aman',
    related: ['safety-leadership-dan-culture', 'investigasi-kecelakaan-kerja', 'ahli-k3-umum'],
    intro: 'Data statistik keselamatan industri global membuktikan bahwa lebih dari 88% hingga 96% kecelakaan kerja berakar dari <strong>Tindakan Tidak Aman (Unsafe Actions / At-Risk Behaviors)</strong>. <strong>Behavior-Based Safety (BBS)</strong> adalah metodologi psikologi terapan yang berfokus pada pengamatan perilaku, pemberian umpan balik konstruktif tanpa hukuman (<em>no-punishment coaching</em>), dan penguatan kebiasaan aman.',
    hazards: [
      '<strong>Mengambil Jalan Pintas (Taking Shortcuts):</strong> Mengabaikan SOP demi mengejar target waktu produksi lebih cepat.',
      '<strong>Praktek Peer-Pressure Negatif:</strong> Pekerja senior mengejek pekerja baru yang disiplin menggunakan APD lengkap.',
      '<strong>Pemberian Hukuman yang Mematikan Pelaporan (Fear Culture):</strong> Menghukum pekerja yang nearmiss sehingga seluruh insiden disembunyikan.'
    ],
    regulations: ['<strong>UU No. 1 Tahun 1970</strong>.', '<strong>Standar ISO 45001:2018 Klausul 5.4</strong> (Consultation and Participation of Workers).'],
    modules: [
      {
        name: 'Modul 1: Psikologi Perilaku & Model ABC (Activator-Behavior-Consequence)',
        theory: 'Peran Activator (Pemicu/SOP), Behavior (Tindakan Riil), dan Consequence (Konsekuensi Langsung & Positif).',
        practical: 'Analisis faktor penguat perilaku berisiko menggunakan lembar kerja ABC Analysis.'
      },
      {
        name: 'Modul 2: Teknik Observasi & Coaching Keselamatan (Safety Coaching)',
        theory: 'Metode observasi tidak mencolok, teknik memulai percakapan feedback 5 menit (Puji tindakan aman -> Diskusikan bahaya tindakan berisiko -> Dapatkan komitmen aman).',
        practical: 'Simulasi roleplay observasi lapangan dan percakapan feedback konstruktif.'
      }
    ],
    equipment: ['BBS Observation Checklist Cards (Digital App & Paper-based).'],
    participants: ['BBS Champions, Supervisor, Foreman, Safety Committee, dan HR People Development.'],
    tableData: {
      headers: ['Elemen Model ABC', 'Peran dalam Perilaku Kerja', 'Tingkat Kekuatan Mempengaruhi Perilaku'],
      rows: [
        ['Activator (Pemicu)', 'Aturan tertulis, SOP, rambu safety sign, instruksi briefing pagi', 'Hanya 20% berpengaruh langsung pada perilaku'],
        ['Behavior (Tindakan)', 'Aksi fisik yang dilakukan pekerja saat bekerja', 'Objek yang diamati dalam program BBS'],
        ['Consequence (Konsekuensi)', 'Umpan balik langsung, apresiasi instan, rasa nyaman, target cepat tercapai', '80% MENENTUKAN apakah perilaku akan diulang']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/safety-leadership-dan-culture/', label: 'Pelatihan Safety Leadership' },
      { href: '/kategori-pelatihan/investigasi-kecelakaan-kerja/', label: 'Pelatihan Investigasi Kecelakaan' }
    ],
    faqs: [
      {
        q: 'Mengapa program BBS dilarang dihubungkan dengan sanksi hukuman atau pemotongan gaji pekerja?',
        a: 'Jika observasi BBS dikaitkan dengan hukuman, pekerja akan merasa dimata-matai, timbul rasa saling tidak percaya antar rekan kerja, dan mereka akan menyembunyikan perilaku berbahaya saat ada pengamat, sehingga program BBS gagal mengubah budaya mental dasar pekerja.'
      }
    ]
  },

  // 92. Safety Leadership & Culture
  {
    key: 'safety-leadership-dan-culture',
    title: 'Pelatihan Safety Leadership & Transformasi Budaya K3',
    h1: 'Pelatihan Safety Leadership Korporat: Kepemimpinan Berbasis Teladan (Felt Leadership), Safety Walk, dan Pendewasaan Kurva Bradley',
    meta: 'Pelatihan Safety Leadership eksekutif: transformasi budaya K3, pendewasaan Kurva Bradley (Reactive ke Interdependent), Management Safety Walkthrough, dan Just Culture.',
    imgAlt: 'Direktur Operasional dan Plant Manager mengenakan rompi keselamatan memimpin Management Safety Walk di area lantai pabrik',
    related: ['behavior-based-safety-bbs', 'ahli-k3-umum', 'contractor-safety-management-system-csms'],
    intro: 'Keselamatan kerja bukan sekadar urusan departemen HSE, melainkan cerminan langsung dari kepemimpinan para eksekutif dan manajer operasional. <strong>Safety Leadership</strong> melatih para pemimpin bisnis mendemonstrasikan <em>Felt Leadership</em>—di mana komitmen keselamatan terpancar nyata dalam alokasi anggaran, keputusan bisnis, dan teladan tindakan harian.',
    hazards: [
      '<strong>Double Standard Manajemen (Target vs Safety):</strong> Manajer menuntut "utamakan keselamatan" namun mengabaikan SOP saat target produksi terancam terlambat.',
      '<strong>Budaya Pasif Reaktif (Reactive Culture):</strong> Baru bertindak dan berinvestasi peralatan keselamatan setelah terjadi korban jiwa.',
      '<strong>Ketiadaan Felt Leadership:</strong> Pimpinan tidak pernah turun ke lapangan meninjau kondisi keselamatan kerja.'
    ],
    regulations: ['<strong>UU No. 1 Tahun 1970</strong>.', '<strong>Standar ISO 45001:2018 Klausul 5.1</strong> (Leadership and Worker Participation).'],
    modules: [
      {
        name: 'Modul 1: Evolusi Budaya Keselamatan & Kurva Bradley (DuPont)',
        theory: 'Fase Reaktif (Naluri alami) -> Fase Dependen (Kepatuhan aturan) -> Fase Independen (Tanggung jawab diri) -> Fase Interdependen (Saling menjaga).',
        practical: 'Audit posisi maturitas budaya K3 perusahaan pada skala Kurva Bradley.'
      },
      {
        name: 'Modul 2: Pelaksanaan Management Safety Walkthrough (MSW)',
        theory: 'Teknik dialog keselamatan eksekutif, open questions di lapangan, alokasi anggaran K3 strategis, Just Culture framework.',
        practical: 'Simulasi pelaksanaan Management Safety Walkthrough oleh Board of Directors.'
      }
    ],
    equipment: ['Safety Culture Maturity Assessment Tool.', 'Management Safety Walkthrough Protocol Guidelines.'],
    participants: ['Board of Directors, General Manager, Plant Manager, Head of Operations, dan Senior Executives.'],
    tableData: {
      headers: ['Tahapan Kurva Bradley', 'Pola Pikir Keselamatan Pekerja', 'Karakteristik Manajemen', 'Tingkat Incident Rate'],
      rows: [
        ['1. Reaktif (Reactive)', '"Kecelakaan adalah nasib sial, bagian dari kerja"', 'Manajemen hanya bertindak setelah ada insiden', 'Sangat Tinggi'],
        ['2. Dependen (Dependent)', '"Saya patuh K3 karena diawasi dan takut dihukum"', 'Keselamatan didorong oleh aturan ketat & supervisor', 'Sedang'],
        ['3. Independen (Independent)', '"Saya menjaga diri saya sendiri karena saya berharga"', 'Pekerja memiliki kesadaran dan disiplin diri tinggi', 'Rendah'],
        ['4. Interdependen (Interdependent)', '"Kami saling menjaga satu sama lain sebagai keluarga"', 'Budaya kolektif nol kecelakaan (Zero Harm Culture)', 'Mendekati NOL (Zero Incident)']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/behavior-based-safety-bbs/', label: 'Pelatihan Behavior-Based Safety' },
      { href: '/kategori-pelatihan/ahli-k3-umum/', label: 'Pelatihan Ahli K3 Umum' }
    ],
    faqs: [
      {
        q: 'Apa ciri utama organisasi yang telah mencapai fase budaya K3 Interdependen pada Kurva Bradley?',
        a: 'Pada fase Interdependen, setiap pekerja secara spontan merasa bertanggung jawab menjaga keselamatan rekan kerjanya tanpa rasa sungkan, pekerja berani menghentikan pekerjaan siapa pun (Stop Work Authority) yang berisiko bahaya, dan manajemen menganggap keselamatan sebagai nilai moral mutlak yang tidak dapat dikompromikan.'
      }
    ]
  },

  // 93. Defensive Driving Training
  {
    key: 'defensive-driving-training',
    title: 'Pelatihan Defensive Driving: Keselamatan Armada Operasional Perusahaan',
    h1: 'Pelatihan Defensive Driving: Teknik Mengemudi Defensif, Antisipasi Bahaya Jalan Raya, dan Manajemen Kelelahan Driver',
    meta: 'Pelatihan defensive driving korporat: teknik Smith System 5 pilar, perhitungan jarak berhenti (Stopping Distance), blind spot spion, pengendalian skid selip, dan pencegahan micro-sleep.',
    imgAlt: 'Instruktur defensive driving memperagakan teknik kemudi darurat slalom di sirkuit pelatihan simulasi jalan basah',
    related: ['operator-dump-truck', 'keselamatan-alat-berat', 'safety-leadership-dan-culture'],
    intro: 'Kecelakaan lalu lintas darat adalah penyebab kematian tertinggi nomor satu pada armada operasional logistik, sales, dan transportasi karyawan korporat. <strong>Defensive Driving Training (DDT)</strong> melatih pengemudi mengemudi untuk menyelamatkan nyawa, waktu, dan biaya dengan mengantisipasi kesalahan pengguna jalan lain.',
    hazards: [
      '<strong>Tertidur Sesaat (Micro-Sleep Fatigue):</strong> Pengemudi kehilangan kesadaran selama 3–5 detik di jalan tol berkecepatan tinggi.',
      '<strong>Tabrakan Beruntun dari Belakang:</strong> Mengabaikan aturan jarak aman 3 detik saat melaju di kecepatan 80 km/jam.',
      '<strong>Kehilangan Kendali di Jalan Basah (Aquaplaning / Hydroplaning):</strong> Ban mobil melayang di atas genangan air akibat kecepatan tinggi.'
    ],
    regulations: ['<strong>UU No. 22 Tahun 2009</strong> tentang Lalu Lintas dan Angkutan Jalan.', '<strong>Permenaker No. 5 Tahun 2018</strong>.'],
    modules: [
      {
        name: 'Modul 1: 5 Prinsip Sistem Kemudi Smith (Smith System)',
        theory: '1. Aim High in Steering -> 2. Get The Big Picture -> 3. Keep Your Eyes Moving -> 4. Leave Yourself An Out -> 5. Make Sure They See You.',
        practical: 'Audit kebiasaan pandangan mata pengemudi saat berkendara di lalu lintas perkotaan.'
      },
      {
        name: 'Modul 2: Fisika Pengereman & Jarak Berhenti Aman (Stopping Distance)',
        theory: 'Waktu Reaksi (3/4 detik) + Jarak Pengereman Mekanis. Aturan 3 Detik (3-Second Rule) pada kondisi kering dan 5 Detik saat hujan.',
        practical: 'Praktik pengereman darurat ABS (Threshold Braking) dan manuver menghindar rintangan cone.'
      }
    ],
    equipment: ['Armada Kendaraan Uji Uji Praktik (SUV/Truck/Van).', 'Traffic Cones & Skid Pan Training Kit.'],
    participants: ['Driver Operasional Perusahaan, Driver Eksekutif, Sales Fleet, dan Driver Logistik Tambang/Pabrik.'],
    tableData: {
      headers: ['Kecepatan Kendaraan', 'Jarak Reaksi Pengemudi (3/4 Detik)', 'Jarak Pengereman Mekanis (Kering)', 'Total Jarak Berhenti Minimum'],
      rows: [
        ['40 km/jam (Area Pabrik)', '8.3 Meter', '9.0 Meter', 'Minimal 17.3 Meter'],
        ['60 km/jam (Jalan Kota)', '12.5 Meter', '20.0 Meter', 'Minimal 32.5 Meter'],
        ['80 km/jam (Jalan Luar Kota)', '16.6 Meter', '36.0 Meter', 'Minimal 52.6 Meter'],
        ['100 km/jam (Jalan Tol Bebas Hambatan)', '20.8 Meter', '56.0 Meter', 'Minimal 76.8 Meter (Jarak 1 Lapangan Bola)']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/keselamatan-alat-berat/', label: 'Pelatihan Keselamatan Alat Berat' },
      { href: '/kategori-pelatihan/operator-dump-truck/', label: 'Pelatihan Operator Dump Truck' }
    ],
    faqs: [
      {
        q: 'Bagaimana cara menghitung aturan jarak aman 3 detik (3-Second Rule) saat mengemudi?',
        a: 'Pilihlah sebuah benda diam di tepi jalan (seperti tiang rambu atau pohon). Ketika kendaraan di depan Anda melintasi tiang tersebut, mulailah berhitung: "Satu-ribu-satu, satu-ribu-dua, satu-ribu-tiga". Jika kendaraan Anda melewati tiang tersebut sebelum hitungan selesai, berarti jarak iring Anda terlalu dekat dan berbahaya.'
      }
    ]
  },

  // 94. K3 Maritim & Kepelabuhanan
  {
    key: 'k3-maritim-dan-kepelabuhanan',
    title: 'Pelatihan K3 Maritim & Bongkar Muat Pelabuhan (ISPS Code & OSHA)',
    h1: 'Pelatihan K3 Maritim & Pelabuhan: Keselamatan Stevedoring Peti Kemas, Standar ISPS Code, dan K3 Galangan Kapal',
    meta: 'Pelatihan K3 maritim & pelabuhan: keselamatan bongkar muat kapal (stevedoring), penanganan kontainer IMDG Code, keselamatan galangan shipyard, dan standar ISPS Code pelabuhan.',
    imgAlt: 'Petugas K3 pelabuhan mengawasi operasi bongkar muat kontainer peti kemas oleh quay crane di dermaga pelabuhan',
    related: ['operator-gantry-crane', 'rigger', 'confined-space-entry'],
    intro: 'Dermaga pelabuhan dan galangan kapal (<em>shipyard</em>) merupakan area logistik dengan kombinasi risiko pengangkatan beban puluhan ton, bahaya tenggelam di perairan dalam, kebakaran ruang palka kapal, dan lalu lintas kendaraan alat berat quay gantry.',
    hazards: [
      '<strong>Pekerja Tertimpa Peti Kemas (Container Crush):</strong> Berdiri di bawah spreader crane kontainer atau di jalur blind spot reach stacker.',
      '<strong>Kebakaran di Ruang Mesin Kapal:</strong> Pekerjaan panas (welding) di dalam ruang palka tanpa gas-free certificate.',
      '<strong>Terjatuh ke Laut (Man Overboard):</strong> Terpeleset dari tangga pandu (pilot ladder) atau tepi dermaga tanpa mengenakan lifejacket otomatis.'
    ],
    regulations: ['<strong>UU No. 17 Tahun 2008</strong> tentang Pelayaran.', '<strong>Standar ISPS Code (International Ship and Port Facility Security)</strong>.', '<strong>Standar ILO Code of Practice on Safety and Health in Ports</strong>.'],
    modules: [
      {
        name: 'Modul 1: Regulasi K3 Pelabuhan & Penanganan Muatan Berbahaya (IMDG Code)',
        theory: 'Klasifikasi 9 kelas bahan berbahaya maritim (IMDG Code), segregasi kontainer B3 di lapangan penumpukan (container yard).',
        practical: 'Audit penataan kontainer bahan kimia reaktif di dermaga pelabuhan.'
      },
      {
        name: 'Modul 2: Operasi Stevedoring & Keselamatan Bongkar Muat',
        theory: 'Pemeriksaan alat ikat lashing kontainer, twistlock otomatis, SOP pekerja palka (hatchman & signalman).',
        practical: 'Inspeksi keselamatan area operasional Quay Crane dan Rubber Tired Gantry (RTG).'
      }
    ],
    equipment: ['Inflatable Auto-Inflating Life Jacket SOLAS.', 'IMDG Code Dangerous Goods Segregation Chart.'],
    participants: ['Port Safety Officer, Stevedoring Supervisor, Marine Superintendent, dan Petugas Terminal Peti Kemas.'],
    tableData: {
      headers: ['Zonasi Area Pelabuhan', 'Peralatan Utama', 'Potensi Bahaya Kritis', 'APD Tambahan Wajib'],
      rows: [
        ['Tepi Dermaga (Quay Wall)', 'Quay Crane (STS), Tali Mooring Kapal', 'Man Overboard (Jatuh ke laut), Hentakan tali putus', 'Life Jacket SOLAS bersertifikat'],
        ['Lapangan Peti Kemas (Yard)', 'RTG Crane, Reach Stacker, Head Truck', 'Tabrakan blind spot alat berat & tertimpa kontainer', 'Rompi Hi-Vis Class 3 & Sepatu Safety'],
        ['Ruang Palka Kapal (Cargo Hold)', 'Winch Palka, Bobcat Pembersih', 'Kekurangan Oksigen, Jatuh dari ketinggian palka', 'Multi-Gas Detector & Safety Harness']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/operator-gantry-crane/', label: 'Pelatihan Operator Gantry Crane' },
      { href: '/kategori-pelatihan/confined-space-entry/', label: 'Pelatihan Confined Space' }
    ],
    faqs: [
      {
        q: 'Apa yang dimaksud dengan bahaya Hentakan Tali Tambat (Snap-Back Zone) pada kapal di dermaga?',
        a: 'Snap-back zone adalah area bahaya di sekeliling tali tambat kapal di mana jika tali kawat baja atau sintetis putus akibat tegangan berlebih, ujung tali akan mencambuk balik dengan kecepatan ratusan km/jam yang dapat memotong tubuh pekerja seketika.'
      }
    ]
  },

  // 95. K3 Rumah Sakit (K3RS)
  {
    key: 'k3-rumah-sakit-k3rs',
    title: 'Pelatihan K3 Rumah Sakit (K3RS): Standar Akreditasi KARS & Kemenkes',
    h1: 'Pelatihan K3 Rumah Sakit (K3RS): Keselamatan Fasilitas & Manajemen Risiko Rumah Sakit (MFK), Pengelolaan Limbah Medis B3, dan Pencegahan Infeksi',
    meta: 'Pelatihan K3RS & Manajemen Fasilitas Keselamatan (MFK) akreditasi KARS/JCI: penanganan limbah medis jarum suntik (needle stick injury), radiasi medis, gas medis, dan sistem evakuasi pasien ranjang.',
    imgAlt: 'Tim K3RS memeriksa tabung manifold gas medis oksigen sentral dan kelengkapan spill kit sitotoksik di rumah sakit',
    related: ['dokter-perusahaan-hiperkes', 'pengelolaan-limbah-b3', 'simulasi-evakuasi-gedung'],
    intro: 'Rumah sakit memiliki profil bahaya yang sangat unik dan kompleks: pajanan patogen infeksius menular, radiasi mesin X-Ray/CT-Scan, jaringan gas medis bertekanan tinggi (Oksigen hiperbarik), serta tantangan evakuasi pasien kritis yang terbaring di tempat tidur rawat inap.',
    hazards: [
      '<strong>Tertusuk Jarum Suntik Bekas (Needle Stick Injury / NSI):</strong> Tertular virus mematikan HIV, Hepatitis B, atau Hepatitis C.',
      '<strong>Ledakan / Kebakaran Saluran Gas Medis:</strong> Kebocoran oksigen murni di ruang ICU tersulut peralatan defibrillator.',
      '<strong>Paparan Obat Kemoterapi Kanker (Sitotoksik):</strong> Tumpahan obat sitotoksik yang meracuni perawat farmasi.'
    ],
    regulations: ['<strong>Permenkes No. 66 Tahun 2016</strong> tentang Keselamatan dan Kesehatan Kerja Rumah Sakit.', '<strong>Standar Akreditasi Rumah Sakit Kemenkes (STARKES) Bab MFK</strong>.'],
    modules: [
      {
        name: 'Modul 1: 8 Program Manajemen Fasilitas dan Keselamatan (MFK)',
        theory: 'Kepemimpinan K3RS, Keselamatan & Keamanan, Bahan Berbahaya (B3 Medis), Kesiapsiagaan Bencana, Proteksi Kebakaran, Peralatan Medis, Sistem Utilitas, Diklat.',
        practical: 'Audit dokumen MFK dan telusur lapangan fasilitas rumah sakit.'
      },
      {
        name: 'Modul 2: Pencegahan Needle Stick Injury & Pengelolaan Limbah Medis',
        theory: 'Pembuangan jarum tanpa recapping ke Safety Box khusus, alur insinerator / autoklaf limbah medis padat, pengelolaan tumpahan darah.',
        practical: 'Drill penanganan tumpahan obat kemoterapi sitotoksik menggunakan Cytotoxic Spill Kit.'
      },
      {
        name: 'Modul 3: Simulasi Evakuasi Pasien & Kode Darurat Medis (Emergency Codes)',
        theory: 'Protokol Code Red (Api), Code Blue (Henti Jantung), Code Pink (Penculikan Bayi), teknik evakuasi blanket drag & stretcher.',
        practical: 'Simulasi evakuasi 10 pasien rawat inap dari lantai 3 menggunakan matras luncur evakuasi darurat.'
      }
    ],
    equipment: ['Sharp Waste Safety Box Kuning Biohazard.', 'Cytotoxic & Blood Spill Kit Lengkap.', 'Evacuation Sledge / Evac-Mat Pasien Ranjang.'],
    participants: ['Komite K3RS, Dokter, Perawat Kepala Ruangan, Sanitasi RS, Teknisi Elektromedis, dan Tim Manajemen RS.'],
    tableData: {
      headers: ['Emergency Code Rumah Sakit', 'Arti Situasi Darurat', 'Tindakan Tim K3RS / Perawat'],
      rows: [
        ['CODE RED (Merah)', 'Kebakaran / Asap terdeteksi', 'Helm Merah padamkan api dengan APAR, Helm Kuning evakuasi pasien'],
        ['CODE BLUE (Biru)', 'Pasien henti jantung / napas', 'Tim medis resusitasi darurat segera berlari ke lokasi'],
        ['CODE BLACK (Hitam)', 'Ancaman bom / Bersenjata', 'Isolasi area dan evakuasi senyap tanpa kepanikan'],
        ['CODE YELLOW (Kuning)', 'Bencana eksternal massal (Mass Casualty)', 'Buka pos triase darurat di IGD']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/dokter-perusahaan-hiperkes/', label: 'Pelatihan Hiperkes Dokter' },
      { href: '/kategori-pelatihan/pengelolaan-limbah-b3/', label: 'Pelatihan Limbah B3' }
    ],
    faqs: [
      {
        q: 'Apa prosedur wajib pasca terjadinya insiden tertusuk jarum suntik bekas pasien (Needle Stick Injury)?',
        a: 'Prosedur wajib: (1) Segera cuci luka di bawah air mengalir dengan sabun tanpa memencet luka secara paksa, (2) Lapor segera ke Komite K3RS/PPI dalam <2 jam, (3) Lakukan tes darah skrining baseline pada korban dan pasien sumber (HIV, HBsAg, Anti-HCV), dan (4) Berikan terapi Profilaksis Pasca Pajanan (PPP) ARV/Imunoglobulin jika diindikasikan dokter dalam kurun waktu emas <4 jam.'
      }
    ]
  },

  // 96. K3 Perkantoran
  {
    key: 'k3-perkantoran-dan-gedung-pemerintah',
    title: 'Pelatihan K3 Perkantoran & Gedung Pemerintah: Permenkes No. 48/2016',
    h1: 'Pelatihan K3 Perkantoran: Standar Keselamatan Gedung, Ergonomi Komputer VDT, Tata Udara, dan Kesiapsiagaan Bencana',
    meta: 'Pelatihan K3 perkantoran & instansi pemerintah: kepatuhan Permenkes No. 48/2016, ergonomi meja komputer, peregangan aktif (active stretching), penataan kabel lantai, dan tata kelola gedung aman.',
    imgAlt: 'Karyawan kantor mempraktikkan peregangan ergonomis di depan meja kerja komputer dengan pencahayaan alami',
    related: ['ergonomi-industri', 'pengukuran-kualitas-udara-ruangan', 'simulasi-evakuasi-gedung'],
    intro: 'Lingkungan perkantoran sering kali disalahartikan sebagai tempat kerja bebas bahaya. Faktanya, penyakit muskuloskeletal akibat duduk statis lebih dari 6 jam, kelelahan mata akibat paparan monitor (<em>Computer Vision Syndrome</em>), serta bahaya kebakaran korsleting panel server adalah ancaman nyata di gedung perkantoran.',
    hazards: [
      '<strong>Computer Vision Syndrome & Nyeri Leher:</strong> Monitor komputer tidak sejajar dengan garis mata memicu spasme otot trapezius leher.',
      '<strong>Bahaya Tersandung Kabel Lantai (Trip Hazard):</strong> Kabel ekstensi melintang di koridor jalan kaki tanpa kabel ducting.',
      '<strong>Kematian Akibat Korsleting Ruang Arsip:</strong> Tumpukan berkas kertas kontak langsung dengan stop kontak listrik overload.'
    ],
    regulations: ['<strong>Permenkes No. 48 Tahun 2016</strong> tentang Standar Keselamatan dan Kesehatan Kerja Perkantoran.', '<strong>UU No. 1 Tahun 1970</strong>.'],
    modules: [
      {
        name: 'Modul 1: Standar Ergonomi Stasiun Kerja Komputer (VDT)',
        theory: 'Aturan 20-20-20 (Setiap 20 menit, lihat objek sejauh 20 kaki selama 20 detik), sudut lutut 90°, penyetelan ketinggian kursi lumbar support.',
        practical: 'Penyetelan workstation meja komputer dan peragaan gerakan peregangan peregangan aktif 5 menit.'
      },
      {
        name: 'Modul 2: Keselamatan Fasilitas & Tata Graha Kantor (5R Perkantoran)',
        theory: 'Manajemen kabel listrik bawah meja, beban rak dokumen arsip, pencahayaan meja min. 300 Lux, tata kelola pantry.',
        practical: 'Audit checklist K3 perkantoran pada lantai kerja open-plan.'
      }
    ],
    equipment: ['Lux Meter Digital Perkantoran.', 'Ergonomic Workstation Assessment Software.'],
    participants: ['Building Manager, HR GA Manager, Pimpinan Unit Kerja Instansi Pemerintah, dan Anggota Tim K3 Kantor.'],
    tableData: {
      headers: ['Aspek Ergonomi Kantor', 'Standar Penyetelan Ideal', 'Manfaat Pencegahan Kesehatan'],
      rows: [
        ['Ketinggian Layar Monitor', 'Tepat sejajar atau sedikit di bawah garis mata horizontal', 'Mencegah nyeri leher dan ketegangan otot bahu'],
        ['Sudut Siku & Pergelangan Tangan', 'Sudut 90° mendatar dengan sandaran lengan', 'Mencegah Carpal Tunnel Syndrome (CTS)'],
        ['Sudut Lutut & Telapak Kaki', 'Lutut 90° dan telapak kaki menapak rata di lantai / footrest', 'Mencegah varises dan pembengkakan tungkai'],
        ['Pencahayaan Meja Kerja', 'Minimal 300 Lux merata bebas silau (glare)', 'Mencegah Computer Vision Syndrome & sakit kepala']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/ergonomi-industri/', label: 'Pelatihan Ergonomi Industri' },
      { href: '/kategori-pelatihan/pengukuran-kualitas-udara-ruangan/', label: 'Pelatihan Kualitas Udara IAQ' }
    ],
    faqs: [
      {
        q: 'Apa bunyi aturan 20-20-20 untuk mencegah kelelahan mata bagi pekerja kantor di depan komputer?',
        a: 'Aturan 20-20-20 merekomendasikan setiap kali Anda menatap layar komputer selama 20 menit, istirahatkan mata Anda dengan memandang objek yang berjarak minimal 20 kaki (sekitar 6 meter) jauhnya selama sekurang-kurangnya 20 detik penuh.'
      }
    ]
  },

  // 97. K3 Radiasi Industri
  {
    key: 'k3-radiasi-industri',
    title: 'Pelatihan Petugas Proteksi Radiasi (PPR) Industri & NDT',
    h1: 'Pelatihan K3 Radiasi Industri: Proteksi Radiografi Sinar X & Gamma, Standar BAPETEN, dan Keselamatan Uji NDT',
    meta: 'Pelatihan Petugas Proteksi Radiasi (PPR) industri bersertifikat BAPETEN: prinsip ALARA (Waktu, Jarak, Penahan), penggunaan dosimeter saku & TLD badge, surveymeter radiasi, dan penanganan darurat sumber macet.',
    imgAlt: 'Petugas proteksi radiasi memegang surveymeter mengukur laju dosis paparan radiasi di sekitar kamera radiografi gamma Ir-192',
    related: ['inspeksi-bejana-tekan', 'ahli-k3-umum', 'higiene-industri'],
    intro: 'Pemanfaatan sumber radiasi pengion pada pengujian tak merusak sambungan las (<em>Non-Destructive Testing / NDT Radiography</em>), gauging kepadatan pabrik semen, dan scanner kargo pelabuhan menggunakan zat radioaktif berbahaya (Iridium-192, Cobalt-60, Cesium-137) atau tabung generator Sinar-X.',
    hazards: [
      '<strong>Sindrom Radiasi Akut (Acute Radiation Syndrome):</strong> Terpapar sumber radioaktif terbuka memicu kerusakan sumsum tulang, luka bakar radiasi, dan kematian.',
      '<strong>Sumber Radioaktif Macet (Source Jamming):</strong> Sumber Iridium-192 gagal ditarik kembali ke dalam kamera proyektor baja.',
      '<strong>Pencurian / Hilangnya Sumber Radioaktif:</strong> Kamera radiografi dicuri dan dibongkar oleh pemulung logam.'
    ],
    regulations: ['<strong>UU No. 10 Tahun 1997</strong> tentang Ketenaganukliran.', '<strong>Perka BAPETEN No. 4 Tahun 2013</strong> tentang Proteksi dan Keselamatan Radiasi dalam Pemanfaatan Tenaga Nuklir.'],
    modules: [
      {
        name: 'Modul 1: Prinsip Dasar Proteksi Radiasi & Falsafah ALARA',
        theory: 'Prinsip As Low As Reasonably Achievable: 1. Waktu Paparan Minimal, 2. Jarak Maksimal (Hukum Kuadrat Terbalik 1/R²), 3. Penahan (Shielding Timbal/Beton).',
        practical: 'Perhitungan kalkulasi dosis radiasi dan tebal Half Value Layer (HVL) timbal.'
      },
      {
        name: 'Modul 2: Instrumentasi Radiasi & Dosimetri Personal',
        theory: 'Pengoperasian Surveymeter Geiger-Muller & Ion Chamber, TLD Badge (Thermoluminescent Dosimeter), Digital Pocket Dosimeter alarm.',
        practical: 'Penentuan radius perimeter batas radiasi (Isodose Line 2.5 µSv/jam) pada simulasi uji radiografi malam hari.'
      },
      {
        name: 'Modul 3: Penanganan Kedaruratan Sumber Radioaktif Macet',
        theory: 'Prosedur darurat penarikan manual (Crank-out emergency), penggunaan tongkat pencapit (handling tongs) panjang 1.5 meter, kontainer darurat (Lead Pot).',
        practical: 'Drill simulasi pengambilan sumber macet menggunakan handling tongs dan collimator timbal.'
      }
    ],
    equipment: ['Radiation Survey Meter Terkalibrasi BAPETEN.', 'Digital Pocket Alarm Dosimeter & Dummy Camera Radiografi.', 'Long Handling Tongs & Emergency Lead Shielding Pot.'],
    participants: ['Petugas Proteksi Radiasi (PPR), Operator Radiografi (OR), Inspector NDT, dan Safety Officer Migas/Konstruksi.'],
    tableData: {
      headers: ['Kategori Pekerja Radiasi', 'Batas Dosis Ekivalen Tahunan (BAPETEN)', 'Dosis Rata-Rata 5 Tahun'],
      rows: [
        ['Pekerja Radiasi Terlatih', 'Maksimal 50 mSv dalam satu tahun tunggal', 'Maksimal rata-rata 20 mSv per tahun (100 mSv / 5 Th)'],
        ['Masyarakat Umum / Publik', 'Maksimal 1 mSv per tahun', 'Wajib di bawah 1 mSv per tahun'],
        ['Lensa Mata Pekerja Radiasi', 'Maksimal 20 mSv per tahun', 'Pencegahan katarak radiasi'],
        ['Kulit, Tangan dan Kaki', 'Maksimal 500 mSv per tahun', 'Pencegahan dermatitis eritema radiasi']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/inspeksi-bejana-tekan/', label: 'Pelatihan Inspeksi Bejana Tekan' },
      { href: '/kategori-pelatihan/ahli-k3-umum/', label: 'Pelatihan Ahli K3 Umum' }
    ],
    faqs: [
      {
        q: 'Apa 3 pilar utama proteksi radiasi pengion untuk meminimalkan dosis paparan pekerja?',
        a: '3 pilar utama proteksi radiasi adalah: (1) Waktu (persingkat waktu berada di dekat sumber radiasi), (2) Jarak (lipatgandakan jarak dari sumber, karena dosis radiasi berkurang sebanding dengan kuadrat jarak), dan (3) Penahan / Shielding (gunakan material pelindung berdensitas tinggi seperti timbal atau beton tebal).'
      }
    ]
  },

  // 98. K3 Pembangkit Listrik (PLTU/PLTGU)
  {
    key: 'k3-pembangkit-listrik-pltu-pltgu',
    title: 'Pelatihan K3 Pembangkit Listrik (PLTU, PLTGU & PLTA)',
    h1: 'Pelatihan Keselamatan Pembangkit Tenaga Listrik: Manajemen Uap Bertekanan Superkritis, Turbin Gas, dan Penanganan Batubara Silo',
    meta: 'Pelatihan K3 pembangkit listrik: keselamatan batubara PLTU (spontaneous combustion), uap tekanan tinggi (superheated steam leak), keselamatan gas alam PLTGU, dan switchyard 500 kV.',
    imgAlt: 'Teknisi pembangkit listrik PLTU mengenakan APD lengkap memeriksa pipa uap superheated dan katup turbin',
    related: ['operator-boiler', 'k3-listrik', 'keselamatan-tegangan-tinggi', 'lockout-tagout-loto'],
    intro: 'Pembangkit listrik tenaga termal skala besar (PLTU Batubara, PLTGU Gas, Geothermal) memadukan bahaya uap air superkritis bersuhu 540°C pada tekanan ratusan bar, gas alam mudah meledak, putaran turbin ribuan RPM, serta switchyard tegangan ekstra tinggi 500 kV.',
    hazards: [
      '<strong>Kebocoran Uap Panas Tak Terlihat (Superheated Steam Leak):</strong> Uap superheated tidak memiliki warna dan suara desisnya memotong tubuh manusia seperti pisau laser.',
      '<strong>Kebakaran Spontan Batubara (Spontaneous Combustion):</strong> Tumpukan batubara di stockpile atau silo terbakar dari dalam akibat oksidasi mandiri.',
      '<strong>Ledakan Turbin Gas Saat Purging Gagal:</strong> Sisa gas alam di ruang bakar meledak saat igniter dinyalakan.'
    ],
    regulations: ['<strong>UU No. 30 Tahun 2009</strong> tentang Ketenagalistrikan.', '<strong>Permenaker No. 12/2015</strong>.', '<strong>Permenaker No. 01/1988</strong>.'],
    modules: [
      {
        name: 'Modul 1: Bahaya Uap Tekanan Tinggi & Teknik Sapu Deteksi (Broom Test)',
        theory: 'Sifat fisik uap superheated, metode deteksi kebocoran menggunakan sapu jerami panjang (Broom Test), bahaya ledakan pipa boiler.',
        practical: 'Audit visual integritas isolasi termal pipa uap dan katup bypass turbin.'
      },
      {
        name: 'Modul 2: Manajemen Stockpile Batubara & Sistem Pemadam Silo',
        theory: 'Pemantauan titik panas thermal kamera pada batubara, sistem injeksi gas inert CO2/Nitrogen pada silo batubara.',
        practical: 'Simulasi pemadaman kebakaran bunker batubara dan pengoperasian sistem deluge sprinkler.'
      }
    ],
    equipment: ['Thermal Imaging Camera Resolusi Tinggi.', 'Combustible Gas Detection System & High-Temperature Pressure Sensor.'],
    participants: ['Operator Pembangkit Listrik, Electrical Maintenance Engineer, Safety Officer Power Plant, dan Boiler Specialist.'],
    tableData: {
      headers: ['Area Kritis Pembangkit Listrik', 'Parameter Bahaya Utama', 'SOP Keselamatan Wajib'],
      rows: [
        ['Pipa Uap Utama (Main Steam)', 'Suhu 540°C, Tekanan 170 – 240 Bar', 'Uji Broom Test, dilarang meraba pipa secara langsung'],
        ['Bunker & Silo Batubara', 'Gas CO tinggi, Spontaneous Combustion', 'Injeksi Nitrogen inert gas & continuous methane monitoring'],
        ['Turbin Generator Hall', 'Getaran mekanis, Kebisingan >95 dBA, LOTO Daya', 'Wajib Double Hearing Protection & Full LOTO Interlock'],
        ['Switchyard 500 kV SUTET', 'Tegangan Ekstra Tinggi, Tegangan Induksi', 'Jarak aman minimal 4.5 meter & Hot Stick 500 kV']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/operator-boiler/', label: 'Pelatihan Operator Boiler' },
      { href: '/kategori-pelatihan/keselamatan-tegangan-tinggi/', label: 'Pelatihan Keselamatan Tegangan Tinggi' }
    ],
    faqs: [
      {
        q: 'Apa itu Broom Test dan mengapa digunakan pada pembangkit listrik uap tekanan tinggi?',
        a: 'Broom test adalah metode uji keselamatan tradisional yang wajib dilakukan saat mendeteksi kebocoran pipa uap superheated (uap sangat panas di atas 500°C yang transparan dan tidak terlihat). Teknisi berjalan memegang sapu ijuk panjang di depannya; jika mengenai semburan uap tak terlihat, ujung jerami sapu akan terbakar terpotong seketika sebelum melukai tubuh teknisi.'
      }
    ]
  },

  // 99. K3 Industri Makanan & Minuman
  {
    key: 'k3-industri-makanan-dan-minuman',
    title: 'Pelatihan K3 Industri Makanan & Minuman (Food & Beverage Safety)',
    h1: 'Pelatihan K3 Industri F&B: Integrasi K3 dengan HACCP Food Safety, Sistem Refrigerasi Amonia, dan Keselamatan Lantai Basah',
    meta: 'Pelatihan K3 industri makanan & minuman (F&B): integrasi HACCP ISO 22000 dengan SMK3, mitigasi kebocoran refrigeran amonia (NH3), slip and trip lantai basah berminyak, dan mesin packaging berkecepatan tinggi.',
    imgAlt: 'Pekerja pabrik pengolahan makanan mengenakan pakaian higienis dan safety boots anti-slip di area proses produksi',
    related: ['chemical-handling', 'higiene-industri', 'ergonomi-industri'],
    intro: 'Pabrik pengolahan makanan dan minuman (F&B) memiliki tantangan ganda: menjaga keselamatan dan kesehatan pekerja (K3) sekaligus menjamin kebersihan higienis produk pangan dari kontaminasi (Food Safety).',
    hazards: [
      '<strong>Kebocoran Gas Amonia Pendingin (Ammonia Refrigerant Leak):</strong> Sistem pendingin cold storage bocor menyemburkan gas NH3 yang sangat toksik dan korosif.',
      '<strong>Terpeleset di Lantai Basah Berminyak (Slip & Fall):</strong> Lantai basah oleh air pencucian dan lemak minyak nabati memicu cedera tulang ekor.',
      '<strong>Amputasi Mesin Pembungkus Berkecepatan Tinggi (Packaging Machine):</strong> Tangan terjepit pisau pemotong sealer otomatis saat membersihkan sisa plastik kemasan.'
    ],
    regulations: ['<strong>UU No. 1 Tahun 1970</strong>.', '<strong>Permenaker No. 5 Tahun 2018</strong>.', '<strong>Standar ISO 22000</strong> (Food Safety Management Systems).'],
    modules: [
      {
        name: 'Modul 1: Keselamatan Sistem Refrigerasi Amonia (NH3 Safety)',
        theory: 'Toksikologi amonia (NAB 25 ppm, IDLH 300 ppm), sistem sprinkler tirai air netralisasi uap amonia, evakuasi cold storage.',
        practical: 'Drill tanggap darurat kebocoran sistem pendingin kompresor amonia dan pemakaian full chemical suit.'
      },
      {
        name: 'Modul 2: Pencegahan Terpeleset & Ergonomi Manual Handling',
        theory: 'Koefisien gesek lantai (Coefficient of Friction / COF > 0.5), sol sepatu safety anti-slip khusus minyak, teknik pengangkatan karung gula/tepung 25 kg.',
        practical: 'Audit kelaikan drainase lantai kerja dan pengujian ketahanan selip sepatu safety.'
      }
    ],
    equipment: ['Ammonia Gas Detector (0 - 500 ppm).', 'Full Chemical Suit & Ammonia Air Purifying Respirator.', 'Floor Slip Resistance Friction Tester.'],
    participants: ['HSE Officer F&B, QA/QC Food Safety, Maintenance Engineer Cold Storage, dan Supervisor Produksi Makanan.'],
    tableData: {
      headers: ['Bahaya Spesifik Pabrik F&B', 'Dampak Potensial', 'Pengendalian Rekayasa Teknik & APD'],
      rows: [
        ['Kebocoran Refrigeran Amonia (NH3)', 'Edema paru mematikan, luka bakar korosif', 'Sistem Water Curtain Sprinkler & Respirator K-Filter'],
        ['Lantai Basah Lemak / Air Cuci', 'Terpeleset, fraktur tulang pinggul', 'Lantai Epoxy Anti-Slip Corundum & Sepatu SRC Rated'],
        ['Mesin Pengemas & Sealer Panas', 'Tangan terjepit dan luka bakar termal', 'Interlock Guarding & Sensor Safety Light Curtain']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/chemical-handling/', label: 'Pelatihan Chemical Handling' },
      { href: '/kategori-pelatihan/ergonomi-industri/', label: 'Pelatihan Ergonomi Industri' }
    ],
    faqs: [
      {
        q: 'Bagaimana cara menetralkan gas amonia yang bocor di ruang mesin pendingin pabrik makanan?',
        a: 'Amonia (NH3) memiliki kelarutan yang sangat tinggi dalam air. Prosedur standar pemadamannya adalah dengan menyemprotkan tirai kabut air (water fog curtain) untuk menyerap dan melarutkan gas amonia dari udara menjadi larutan amonium hidroksida cair yang aman dialirkan ke bak pengolahan limbah.'
      }
    ]
  },

  // 100. Contractor Safety Management System (CSMS)
  {
    key: 'contractor-safety-management-system-csms',
    title: 'Pelatihan Contractor Safety Management System (CSMS)',
    h1: 'Pelatihan Contractor Safety Management System (CSMS): Kualifikasi Pra-Tender, Evaluasi Lapangan, dan Audit Kinerja K3 Kontraktor',
    meta: 'Pelatihan CSMS migas, tambang, dan korporat: 6 tahapan proses CSMS, penilaian dokumen pra-kualifikasi (PQ CSMS), verifikasi audit lapangan (Work in Progress), dan evaluasi akhir kinerja K3 rekanan.',
    imgAlt: 'HSE Manager meninjau dokumen pra-kualifikasi CSMS dan sertifikasi personel kontraktor sebelum menandatangani persetujuan kerja',
    related: ['ahli-k3-umum', 'audit-smk3-pp-50-2012', 'safety-leadership-dan-culture'],
    intro: 'Lebih dari 70% kecelakaan fatalitas di sektor minyak, gas, pertambangan, dan industri manufaktur menimpa tenaga kerja pihak ketiga (kontraktor dan subkontraktor). Program <strong>Contractor Safety Management System (CSMS)</strong> adalah sistem terpadu untuk menyeleksi, membina, mengawasi, dan mengevaluasi kinerja keselamatan seluruh mitra kerja kontraktor dari fase pra-tender hingga pekerjaan selesai.',
    hazards: [
      '<strong>Mempekerjakan Kontraktor Substandar (Bidding Terendah Tanpa Kualifikasi K3):</strong> Memilih vendor termurah yang tidak menyediakan APD layak dan personil bersertifikat.',
      '<strong>Subkontrak Gelap (Unauthorized Subcontracting):</strong> Pemenang tender mengalihkan pekerjaan berisiko kepada pihak ketiga tanpa izin pemilik fasilitas.',
      '<strong>Ketiadaan Pengawasan K3 Bersama:</strong> Kontraktor bekerja dengan SOP sendiri yang bertentangan dengan standar keselamatan kilang/pabrik induk.'
    ],
    regulations: [
      '<strong>UU No. 1 Tahun 1970</strong> (Pasal 2 ayat 2).',
      '<strong>PP No. 50 Tahun 2012</strong> (Kriteria 6.8 Pembelian & Pengendalian Kontraktor).',
      '<strong>Pedoman Teknis Dirjen Migas / Ditjen Minerba tentang K3 Kontraktor</strong>.'
    ],
    modules: [
      {
        name: 'Modul 1: 6 Tahapan Baku Contractor Safety Management System',
        theory: '1. Penilaian Risiko Pekerjaan -> 2. Pra-Kualifikasi (PQ CSMS) -> 3. Seleksi & Penilaian Dokumen Tender -> 4. Pre-Job Activity -> 5. Work in Progress (WIP Inspection) -> 6. Evaluasi Akhir.',
        practical: 'Audit skoring dokumen kuesioner Pra-Kualifikasi CSMS pada 5 vendor kontraktor.'
      },
      {
        name: 'Modul 2: Pre-Job Activity & Kick-Off Safety Meeting',
        theory: 'Bridging Document K3 antara Owner dan Kontraktor, verifikasi sertifikat alat (SILO) dan personil (SIO), Site Specific Safety Plan (SSSP).',
        practical: 'Simulasi pelaksanaan Kick-Off Meeting dan inspeksi bersama kesiapan alat sebelum hari pertama kerja.'
      },
      {
        name: 'Modul 3: Pemantauan Lapangan (WIP) & Evaluasi Kinerja Akhir (Close-Out)',
        theory: 'Joint Safety Tour, audit kepatuhan harian, Key Performance Indicators (KPI) K3, penentuan status blacklist kontraktor berkinerja buruk.',
        practical: 'Penyusunan Formulir Evaluasi Akhir Kinerja K3 Kontraktor untuk pertimbangan tender masa depan.'
      }
    ],
    equipment: ['Master Dokumen Pedoman CSMS & Kuesioner Pra-Kualifikasi 8 Bagian.', 'Software Database Evaluasi Scoring Rekanan Kontraktor.'],
    participants: ['Procurement / Purchasing Manager, HSE Manager, Project Manager, Contract Engineer, dan Vendor Auditor.'],
    tableData: {
      headers: ['Kategori Risiko Proyek Kontraktor', 'Kriteria Skor Minimum PQ CSMS', 'Persyaratan Personel K3 Kontraktor', 'Frekuensi Audit Lapangan'],
      rows: [
        ['High Risk (Risiko Tinggi)', 'Skor PQ >= 75 (Lulus Kualifikasi Penuh)', 'Wajib menyertakan Ahli K3 / Safety Officer Penuh Waktu', 'Audit Inspeksi Bersama Setiap Minggu'],
        ['Medium Risk (Risiko Sedang)', 'Skor PQ >= 60 s.d 74', 'Wajib Petugas K3 Bersertifikat di Lapangan', 'Audit Inspeksi Bersama Setiap 2 Minggu'],
        ['Low Risk (Risiko Rendah)', 'Skor PQ >= 50 s.d 59', 'Supervisor Terlatih K3', 'Inspeksi Berkala Bulanan']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/ahli-k3-umum/', label: 'Pelatihan Ahli K3 Umum' },
      { href: '/kategori-pelatihan/audit-smk3-pp-50-2012/', label: 'Pelatihan Audit SMK3' },
      { href: '/kategori-pelatihan/safety-leadership-dan-culture/', label: 'Pelatihan Safety Leadership' }
    ],
    faqs: [
      {
        q: 'Apa itu Bridging Document dalam implementasi CSMS?',
        a: 'Bridging Document adalah dokumen kesepakatan formal yang menjembatani dan menyelaraskan perbedaan sistem manajemen K3 antara perusahaan pemilik pekerjaan (Owner) dan perusahaan kontraktor, yang secara tegas menetapkan prosedur keselamatan mana yang menjadi acuan utama di lapangan.'
      }
    ]
  }
];

console.log(`Loaded ${batch3ManagementAndSpecialized.length} Management & Specialized programs.`);
