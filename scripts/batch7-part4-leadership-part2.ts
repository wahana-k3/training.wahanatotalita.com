import { MultiArchetypeProgramDetail } from './multi-archetype-renderer';

export const batch7LeadershipPagesPart2: MultiArchetypeProgramDetail[] = [
  // 9. Manajemen Waktu dan Prioritas Kerja
  {
    key: 'manajemen-waktu-dan-prioritas-kerja',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/manajemen-waktu-dan-prioritas-kerja/',
    archetype: 'role',
    title: 'Pelatihan Manajemen Waktu & Prioritas Kerja: Matriks Eisenhower & Delegasi',
    h1: 'Pelatihan Manajemen Waktu (Time Management), Penentuan Prioritas Kerja, & Delegasi Efektif: Menguasai Produktivitas di Tengah Beban Kerja Tinggi',
    meta: 'Pelatihan manajemen waktu kerja: Matriks Eisenhower penting vs mendesak, teknik Pomodoro, eliminasi distraksi, delegasi tugas & produktivitas profesional.',
    imgAlt: 'Profesional bisnis merencanakan jadwal kerja harian dan memetakan prioritas menggunakan Matriks Eisenhower pada papan kerja',
    related: ['pelatihan-supervisory-skills-pabrik', 'coaching-dan-mentoring-grow-model', 'manajemen-stres-dan-kecerdasan-emosional', 'k3-keselamatan-kerja'],
    intro: 'Banyak profesional dan manajer merasa kehabisan waktu setiap hari karena terjebak dalam "Sindrom Pemadam Kebakaran" (Firefighting Mentality)—sibuk merespons hal-hal darurat yang mendesak namun tidak berdampak strategis. Pelatihan <strong>Manajemen Waktu & Prioritas Kerja</strong> membekali peserta dengan metodologi teruji seperti Matriks Eisenhower, Teknik Time Blocking, dan Seni Delegasi untuk mengendalikan waktu, mengurangi stres, dan meningkatkan output bernilai tinggi.',
    hazards: [
      '<strong>Terjebak dalam Krisis Rutin Harian (Perpetual Firefighting):</strong> Seluruh waktu habis menyelesaikan masalah mendadak tanpa sempat merencanakan pencegahan.',
      '<strong>Kegagalan Memenuhi Tenggat Waktu Proyek (Missed Deadlines):</strong> Prokrastinasi dan manajemen estimasi waktu yang buruk berakibat denda keterlambatan proyek.',
      '<strong>Kelelahan Fisik & Mental Kronis (Burnout):</strong> Bekerja lembur berlebihan setiap hari tanpa diimbangi peningkatan hasil kerja riil.',
      '<strong>Kehilangan Peluang Strategis Bisnis:</strong> Urusan administratif sepele menyita waktu eksekutif dari memikirkan inovasi dan pertumbuhan.'
    ],
    regulations: [
      '<strong>Kerangka Kerja 7 Habits of Highly Effective People (Stephen Covey)</strong>.',
      '<strong>Metodologi Getting Things Done (GTD) David Allen</strong>.',
      '<strong>Standar Produktivitas Kerja Kemenaker RI</strong>.'
    ],
    modules: [
      {
        name: 'Modul 1: Audit Waktu Pribadi & Matriks Prioritas Eisenhower (Urgent vs Important)',
        theory: 'Prinsip 4 Kuadran Waktu: Kuadran I (Mendesak & Penting - Krisis), Kuadran II (Tidak Mendesak tapi Penting - Kualitas & Pertumbuhan), Kuadran III (Mendesak tapi Tidak Penting - Interupsi), Kuadran IV (Tidak Mendesak & Tidak Penting - Pemborosan).',
        practical: 'Audit pemakaian waktu kerja 1 minggu terakhir dan memetakan 20 tugas harian ke dalam 4 Kuadran Eisenhower.'
      },
      {
        name: 'Modul 2: Teknik Time Blocking, Pomodoro Focus, & Manajemen Distraksi Digital',
        theory: 'Metode alokasi blok waktu fokus (Deep Work Time Blocking), teknik Pomodoro (25 menit fokus penuh + 5 menit istirahat), strategi menyaring email dan notifikasi pesan.',
        practical: 'Penyusunan jadwal kalender mingguan terstruktur dengan alokasi khusus Kuadran II (Perencanaan & Perbaikan).'
      },
      {
        name: 'Modul 3: Seni Delegasi Efektif & Keberanian Berkata "Tidak" secara Asertif',
        theory: 'Enam tingkatan delegasi wewenang, memilih tugas yang boleh vs tidak boleh didelegasikan, teknik menolak permintaan non-prioritas tanpa merusak hubungan kerja.',
        practical: 'Simulasi percakapan pendelegasian proyek kepada staf dan latihan menolak interupsi secara profesional.'
      }
    ],
    equipment: [
      'Template Lembar Kerja Matriks Prioritas Eisenhower (Eisenhower Matrix Planner).',
      'Aplikasi / Lembar Time-Tracking Activity Log Harian.',
      'Format Lembar Penugasan & Kontrak Delegasi Kerja (Delegation Briefing Form).',
      'Panduan Saku Time Management & Productivity Hacks.'
    ],
    participants: [
      'Manajer Departemen, Supervisor, Tim Proyek, Staf Profesional / Eksekutif, Sekretaris / Asisten Pribadi, Siapa pun yang Mengalami Beban Kerja Tinggi.'
    ],
    tableData: {
      headers: ['Kuadran Eisenhower', 'Karakteristik Aktivitas', 'Tindakan yang Wajib Diambil', 'Target Alokasi Waktu Ideal'],
      rows: [
        ['Kuadran I: The Quadrant of Crisis', 'Mendesak & Sangat Penting (Masalah darurat, deadline hari ini)', 'KERJAKAN SEGERA (Do It Now)', '20% - 25% Waktu Kerja'],
        ['Kuadran II: The Quadrant of Quality', 'TIDAK Mendesak tetapi SANGAT Penting (Perencanaan, inovasi, relasi)', 'JADWALKAN FOKUS (Schedule It)', '60% - 70% Waktu Kerja (Area Sukses)'],
        ['Kuadran III: The Quadrant of Deception', 'Mendesak tetapi TIDAK Penting (Interupsi telepon, meeting tak jelas)', 'DELEGASIKAN (Delegate It)', '< 10% Waktu Kerja'],
        ['Kuadran IV: The Quadrant of Waste', 'Tidak Mendesak & Tidak Penting (Scroll media sosial, gosip kantor)', 'ELIMINASI TOTAL (Eliminate It)', '0% - 5% Waktu Kerja']
      ]
    },
    caseStudy: 'Sebuah tim manajer proyek rekayasa di Cilegon berhasil memangkas jam lembur hingga 45% dan meningkatkan angka penyelesaian milestone tepat waktu dari 65% menjadi 92% setelah mengimplementasikan sistem Time Blocking Kuadran II.',
    stepByStepGuide: [
      { step: '1. Pelaksanaan Audit Waktu 3 Hari', desc: 'Mencatat seluruh aktivitas kerja per 30 menit untuk menemukan celah pemborosan waktu.' },
      { step: '2. Pemilahan Tugas ke 4 Kuadran', desc: 'Mengelompokkan seluruh tanggung jawab ke dalam matriks Eisenhower dan menentukan prioritas.' },
      { step: '3. Pemasangan Jadwal Time Blocking', desc: 'Mengunci waktu 2 jam setiap pagi di kalender untuk pekerjaan strategis tanpa interupsi.' },
      { step: '4. Delegasi Tugas Operasional ke Tim', desc: 'Menyerahkan tugas administratif berulang kepada subordinat disertai panduan SOP yang jelas.' }
    ],
    links: [
      { href: '/kategori-pelatihan/pelatihan-supervisory-skills-pabrik/', anchor: 'Pelatihan Supervisory Skills' },
      { href: '/kategori-pelatihan/manajemen-stres-dan-kecerdasan-emosional/', anchor: 'Manajemen Stres & Kecerdasan Emosional' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 10. Leadership for Safety Excellence
  {
    key: 'leadership-for-safety-excellence',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/leadership-for-safety-excellence/',
    archetype: 'role',
    title: 'Leadership for Safety Excellence: Kepemimpinan K3 Eksekutif & Manajemen',
    h1: 'Pelatihan Leadership for Safety Excellence: Membangun Kepemimpinan Keselamatan Eksekutif (Executive Safety Leadership) untuk Mencapai Zero Accident Kelas Dunia',
    meta: 'Pelatihan safety leadership eksekutif: kepemimpinan K3 direksi & manajer, visible felt leadership, safety culture transformation & integrasi bisnis.',
    imgAlt: 'Direktur operasional dan jajaran manajer pabrik mengenakan helm keselamatan melakukan safety walkthrough di area instalasi kilang',
    related: ['pengukuran-safety-culture-maturity', 'behavior-based-safety-bbs-stop-card', 'panduan-audit-smk3-pp-50-2012', 'k3-keselamatan-kerja'],
    intro: 'Keselamatan kerja kelas dunia tidak pernah lahir dari departemen K3 semata, melainkan digerakkan langsung oleh komitmen nyata jajaran pimpinan puncak (Top Management). <strong>Leadership for Safety Excellence</strong> adalah program kepemimpinan transformasional tingkat eksekutif yang dirancang untuk membekali Direksi, General Manager, dan Plant Manager dengan prinsip <em>Visible Felt Leadership</em>—memimpin keselamatan melalui keteladanan tindakan, bukan sekadar tanda tangan kebijakan.',
    hazards: [
      '<strong>Safety Dianggap Beban Biaya (Safety as a Cost Center):</strong> Manajemen memangkas anggaran pemeliharaan dan APD demi mengejar laba jangka pendek.',
      '<strong>Pesan Ganda dari Pimpinan (Mixed Signals):</strong> Manajemen berbicara keselamatan namun menekan target produksi yang memaksa pekerja melanggar SOP.',
      '<strong>Krisis Reputasi Korporat Pasca Fatal Incident:</strong> Insiden maut di tempat kerja yang menyeret direksi ke meja hijau dan menghancurkan harga saham.',
      '<strong>Kehilangan Kepercayaan Karyawan Lapangan:</strong> Pimpinan tidak pernah turun ke lantai pabrik untuk mendengarkan masukan keselamatan pekerja.'
    ],
    regulations: [
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja (Pasal 12 & 14 Tanggung Jawab Pengurus).',
      '<strong>PP No. 50 Tahun 2012</strong> tentang Penerapan SMK3 (Prinsip Komitmen Manajemen Puncak).',
      '<strong>Standar ISO 45001:2018</strong> Klausul 5 (Leadership and Worker Participation).'
    ],
    modules: [
      {
        name: 'Modul 1: Peran Strategis Kepemimpinan Eksekutif dalam Keselamatan Kerja',
        theory: 'Hubungan langsung antara Safety Excellence dengan Profitabilitas & Keberlanjutan Bisnis, konsep Just Culture (membedakan human error, at-risk behavior, dan reckless violation), hukum tanggung jawab pidana direksi.',
        practical: 'Audit komitmen kepemimpinan keselamatan pribadi menggunakan Executive Safety Leadership Self-Assessment.'
      },
      {
        name: 'Modul 2: Praktik Visible Felt Leadership: Management Safety Walkthrough (MSW)',
        theory: 'Metodologi turun ke lapangan (Gemba Safety Walk) yang efektif, teknik membuka dialog keselamatan yang menginspirasi dengan operator garis depan, seni memberikan apresiasi perilaku selamat.',
        practical: 'Simulasi pelaksanaan Management Safety Walkthrough di area workshop dan penyusunan Action Log tindak lanjut.'
      },
      {
        name: 'Modul 3: Integrasi K3 ke dalam Pengambilan Keputusan Bisnis & Transformasi Budaya',
        theory: 'Menjadikan keselamatan sebagai Agenda Nomor 1 di setiap rapat direksi, alokasi anggaran investasi K3 berbasis risiko, pengukuran Indikator Kinerja Utama Proaktif (Leading Indicators vs Lagging Indicators).',
        practical: 'Penyusunan Rencana Aksi Kepemimpinan Keselamatan Pribadi (Personal Safety Leadership Action Plan / PSL-AP).'
      }
    ],
    equipment: [
      'Executive Safety Leadership Diagnostic Toolkit.',
      'Panduan Saku Management Safety Walkthrough (MSW Pocket Guide).',
      'Format Personal Safety Leadership Action Plan (PSL-AP).',
      'Dashboard Leading Safety Indicators Eksekutif (Excel/PowerBI Template).'
    ],
    participants: [
      'Board of Directors (BOD), General Manager, Plant Manager, Head of Operations, HSE Director, Mining Project Manager.'
    ],
    tableData: {
      headers: ['Pilar Safety Leadership', 'Perilaku Pemimpin Tradisional (Pasif)', 'Perilaku Pemimpin Safety Excellence (Proaktif)', 'Dampak Organisasi'],
      rows: [
        ['Agenda Rapat Bisnis', 'Membahas K3 di akhir rapat jika ada sisa waktu', 'K3 SELALU menjadi agenda nomor 1 pembuka rapat', 'K3 Menjadi Nilai Inti Perusahaan'],
        ['Kunjungan Lapangan (Walkthrough)', 'Turun ke lapangan hanya untuk menginspeksi target output', 'Rutin berdialog dengan pekerja tentang keselamatan kerja', 'Pekerja Merasa Dihargai & Dilindungi'],
        ['Respons Terhadap Insiden', 'Mencari siapa operator yang bersalah untuk dihukum', 'Membedah kelemahan sistem manajemen & memperbaikinya', 'Terbangun Budaya Terbuka (Just Culture)'],
        ['Pengukuran Kinerja', 'Hanya melihat angka kecelakaan masa lalu (Lagging)', 'Memantau leading indicator: audit, hazard report, training', 'Kecelakaan Dapat Dicegah Sejak Dini']
      ]
    },
    caseStudy: 'Sebuah korporasi pertambangan nikel di Maluku Utara berhasil mencapai rekor 20 Juta Jam Kerja Selamat (Zero LTI) setelah CEO dan seluruh jajaran General Manager-nya menerapkan program rutin 2 jam Management Safety Walkthrough setiap minggu.',
    stepByStepGuide: [
      { step: '1. Executive Safety Alignment Workshop', desc: 'Menyelaraskan visi keselamatan seluruh dewan direksi dan menetapkan Piagam Komitmen K3 Eksekutif.' },
      { step: '2. Penerapan Jadwal Rutin Gemba Walk MSW', desc: 'Setiap manajer senior dijadwalkan turun ke lantai kerja minimal 1 kali per minggu untuk berdialog dengan pekerja.' },
      { step: '3. Penyelarasan Leading Indicators K3', desc: 'Memasukkan metrik keselamatan proaktif ke dalam evaluasi bonus dan KPI jajaran direksi/manajemen.' },
      { step: '4. Tinjauan Manajemen & Peningkatan Berkelanjutan', desc: 'Mengevaluasi hasil temuan keselamatan lapangan dalam rapat bulanan Direksi secara konsisten.' }
    ],
    links: [
      { href: '/kategori-pelatihan/pengukuran-safety-culture-maturity/', anchor: 'Pengukuran Safety Culture Maturity' },
      { href: '/kategori-pelatihan/behavior-based-safety-bbs-stop-card/', anchor: 'Behavior-Based Safety & STOP Card' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 11. Teknik Negosiasi dan Vendor Management
  {
    key: 'teknik-negosiasi-dan-vendor-management',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/teknik-negosiasi-dan-vendor-management/',
    archetype: 'role',
    title: 'Pelatihan Teknik Negosiasi Pengadaan & Vendor Management B2B',
    h1: 'Pelatihan Teknik Negosiasi Pengadaan (Procurement Negotiation), Manajemen Kontrak B2B, & Vendor Performance Management Standar Korporat',
    meta: 'Pelatihan negosiasi pengadaan B2B: strategi tawar-menawar harga pembelian, total cost of ownership TCO, SLA kontrak vendor & KPI supplier.',
    imgAlt: 'Manajer procurement memimpin sesi negosiasi kontrak pengadaan material strategis bersama perwakilan vendor supplier di ruang rapat',
    related: ['komunikasi-asertif-dan-serikat-pekerja', 'penyusunan-dokumen-csms-tender', 'manajemen-gudang-wms-dan-inventory', 'k3-keselamatan-kerja'],
    intro: 'Efisiensi pengadaan material dan jasa bukan hanya tentang menekan harga vendor serendah mungkin, melainkan mendapatkan nilai total terbaik (Total Cost of Ownership / TCO) dengan kualitas terjamin, pengiriman tepat waktu, dan mitigasi risiko pasokan. Pelatihan <strong>Teknik Negosiasi & Vendor Management</strong> membekali tim Procurement, Supply Chain, dan Operasional dengan taktik negosiasi profesional, perancangan Service Level Agreement (SLA), dan audit kinerja vendor.',
    hazards: [
      '<strong>Vendor Wanprestasi & Pengiriman Terlambat:</strong> Proyek konstruksi/pabrik terhenti karena vendor material gagal mengirim barang sesuai jadwal.',
      '<strong>Terjebak Vendor Monopoli (Single Source Lock-In):</strong> Ketergantungan pada satu pemasok yang menaikkan harga sepihak secara berkala.',
      '<strong>Kualitas Material di Bawah Spesifikasi Standar:</strong> Tergiur harga murah namun material mengalami cacat saat masuk ke lini produksi.',
      '<strong>Sengketa Klausul Kontrak Pengadaan Hukum:</strong> Ketiadaan klausul denda penalti (Liquidated Damages) saat vendor melakukan wanprestasi.'
    ],
    regulations: [
      '<strong>Standar Chartered Institute of Procurement & Supply (CIPS)</strong>.',
      '<strong>Hukum Kontrak Perdata Indonesia (KUHPerdata Buku III)</strong>.',
      '<strong>Standar ISO 9001:2015</strong> Klausul 8.4 (Pengendalian Proses, Produk, dan Jasa yang Disediakan Eksternal).'
    ],
    modules: [
      {
        name: 'Modul 1: Analisis Pembelian Strategis & Total Cost of Ownership (TCO)',
        theory: 'Kraljic Portfolio Matrix (Material Rutin, Leverage, Bottleneck, Strategic), konsep Total Cost of Ownership (Biaya Pembelian, Pengiriman, Penyimpanan, Pemeliharaan, hingga Pembuangan).',
        practical: 'Pemetaan 50 kategori belanja perusahaan ke dalam Matriks Kraljic untuk menentukan strategi negosiasi.'
      },
      {
        name: 'Modul 2: Taktik & Strategi Negosiasi B2B Berbasis Nilai (Value-Based Negotiation)',
        theory: 'Fase persiapan negosiasi (Penetapan Batas Target, Walk-Away Price, BATNA), taktik tawar-menawar konsesi dagang, menghadapi taktik intimidasi vendor.',
        practical: 'Simulasi negosiasi kontrak tahunan pengadaan bahan baku kritis senilai Rp 5 Miliar.'
      },
      {
        name: 'Modul 3: Manajemen Kontrak, Service Level Agreement (SLA), & Evaluasi Kinerja Vendor (Vendor Rating)',
        theory: 'Penyusunan indikator SLA terukur, klausul penalti & insentif, sistem penilaian Vendor Scorecard (Kualitas, Waktu, Pelayanan, Keselamatan K3), program pembinaan vendor.',
        practical: 'Pembuatan dokumen Vendor Performance Scorecard bulanan dan penanganan vendor berkinerja buruk.'
      }
    ],
    equipment: [
      'Template Spreadsheet Matriks Kraljic & Kalkulator TCO (Total Cost of Ownership).',
      'Lembar Perencanaan Strategi Negosiasi (Negotiation Planning Sheet).',
      'Format Standar Service Level Agreement (SLA) & Template Kontrak Pengadaan B2B.',
      'Dashboard Evaluasi Kinerja Vendor (Vendor Scorecard Template).'
    ],
    participants: [
      'Procurement / Purchasing Manager & Staff, Supply Chain Manager, Sourcing Specialist, Project Buyer, User Departemen Peminta Barang (Maintenance/IT).'
    ],
    tableData: {
      headers: ['Kategori Matriks Kraljic', 'Karakteristik Material / Jasa', 'Strategi Pembelian Terbaik', 'Fokus Utama Negosiasi'],
      rows: [
        ['1. Strategic Items (Strategis)', 'Nilai belanja tinggi, risiko pasokan tinggi (Monopoli)', 'Kemitraan Jangka Panjang (Strategic Alliance)', 'Jaminan ketersediaan pasokan & integrasi sistem'],
        ['2. Leverage Items (Pengungkit)', 'Nilai belanja tinggi, banyak alternatif pemasok', 'Tender Kompetitif & Tawar-Menawar Agresif', 'Mengejar diskon harga volume & termin pembayaran'],
        ['3. Bottleneck Items (Penyumbat)', 'Nilai belanja rendah, risiko pasokan tinggi (Spesifik)', 'Kontrak Pasokan Terjamin & Cari Substitusi', 'Keamanan stok penyangga (Buffer Stock) & SLA ketat'],
        ['4. Non-Critical Items (Rutin)', 'Nilai belanja rendah, banyak pemasok (Alat Tulis/MRO)', 'Standardisasi & E-Procurement Otomatis', 'Efisiensi proses administrasi & katalog harga tahunan']
      ]
    },
    caseStudy: 'Sebuah perusahaan manufaktur makanan di Jawa Barat menghemat biaya pengadaan tahunan sebesar Rp 3.4 Miliar (efisiensi 8.2%) setelah melatih tim procurement-nya dalam analisis TCO dan strategi negosiasi berbasis Matriks Kraljic.',
    stepByStepGuide: [
      { step: '1. Pemetaan Kategori Belanja (Spend Analysis)', desc: 'Menganalisis data pengeluaran pembelian tahun lalu untuk mengidentifikasi pos pengeluaran terbesar.' },
      { step: '2. Penyusunan Lembar Perencanaan Negosiasi', desc: 'Menetapkan target harga terbaik, batas walk-away, dan opsi konsesi non-harga sebelum bertemu vendor.' },
      { step: '3. Eksekusi Negosiasi & Finalisasi Kontrak', desc: 'Melakukan perundingan berbasis data pasar dan menuangkan kesepakatan ke dalam SLA kontrak tertulis.' },
      { step: '4. Evaluasi Kinerja Vendor Triwulanan', desc: 'Menilai performa vendor secara berkala menggunakan Vendor Scorecard untuk menentukan perpanjangan kontrak.' }
    ],
    links: [
      { href: '/kategori-pelatihan/komunikasi-asertif-dan-serikat-pekerja/', anchor: 'Komunikasi Asertif & Negosiasi' },
      { href: '/kategori-pelatihan/manajemen-gudang-wms-dan-inventory/', anchor: 'Manajemen Gudang & WMS' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 12. Manajemen Gudang WMS dan Inventory
  {
    key: 'manajemen-gudang-wms-dan-inventory',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/manajemen-gudang-wms-dan-inventory/',
    archetype: 'role',
    title: 'Pelatihan Manajemen Gudang Modern, WMS, & Pengendalian Inventory',
    h1: 'Pelatihan Manajemen Gudang Modern (Modern Warehouse Management), Implementasi WMS, Akurasi Stok (Stock Opname), & Pengendalian Inventory Level',
    meta: 'Pelatihan manajemen gudang & inventory: sistem WMS barcode/RFID, analisis ABC inventory, safety stock, layout gudang, cycle counting & akurasi stok 99%.',
    imgAlt: 'Supervisor gudang melakukan pemindaian barcode palet barang menggunakan mobile handheld terminal scanner WMS di area rak racking',
    related: ['operator-reach-truck-warehouse', 'teknik-negosiasi-dan-vendor-management', 'supply-chain-operations-reference-scor', 'k3-keselamatan-kerja'],
    intro: 'Gudang bukan sekadar tempat menimbun barang, melainkan pusat syaraf aliran rantai pasok (Supply Chain Hub) yang menentukan kecepatan pemenuhan pesanan pelanggan dan efisiensi modal kerja perusahaan. Pelatihan <strong>Manajemen Gudang Modern & Pengendalian Inventory</strong> membekali praktisi logistik dengan teknik optimalisasi tata letak (Layout Optimization), integrasi Warehouse Management System (WMS), klasifikasi stok ABC-FSN, serta metode Stock Opname presisi tinggi.',
    hazards: [
      '<strong>Ketidakcocokan Stok Fisik vs Sistem (Stock Discrepancy):</strong> Laporan sistem menunjukkan stok ada tetapi barang fisik tidak ditemukan di rak.',
      '<strong>Kerusakan & Kedaluwarsa Barang di Gudang (Dead Stock / Expiry):</strong> Barang lama tertimbun di belakang rak karena tidak menerapkan FIFO/FEFO.',
      '<strong>Modal Kerja Tertahan pada Stok Berlebih (Overstocking):</strong> Gudang penuh sesak oleh material yang lambat berputar (Slow-Moving Items).',
      '<strong>Keterlambatan Proses Picking & Pengiriman:</strong> Rute pemungutan barang di gudang berbelit-belit yang memperlambat lead time pengiriman.'
    ],
    regulations: [
      '<strong>Standar APICS / ASCM (Association for Supply Chain Management)</strong>.',
      '<strong>Standar ISO 9001:2015</strong> Klausul 8.5.4 (Preservasi Produk dan Penyimpanan).',
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang Keselamatan Pesawat Angkat dan Angkut (Pergudangan).'
    ],
    modules: [
      {
        name: 'Modul 1: Desain Tata Letak Gudang (Warehouse Layout) & Aliran Material',
        theory: 'Prinsip desain gudang (U-Flow, I-Flow, L-Flow), optimasi utilisasi ruang vertikal racking, penetapan zona Receiving, Staging, Storage, Picking, dan Shipping.',
        practical: 'Audit efisiensi tata letak gudang dan perancangan denah zonasi slotting rak berbasis kecepatan perputaran barang.'
      },
      {
        name: 'Modul 2: Klasifikasi Persediaan: Analisis ABC, FSN, & Pengendalian Safety Stock',
        theory: 'Prinsip Pareto Analisis ABC (Nilai Investasi Stok), Analisis FSN (Fast, Slow, Non-Moving), perhitungan Economic Order Quantity (EOQ), Reorder Point (ROP), dan Safety Stock.',
        practical: 'Latihan menghitung titik pemesanan kembali (Reorder Point) dari data historis fluktuasi permintaan barang.'
      },
      {
        name: 'Modul 3: Digitalisasi WMS, Barcode / RFID Scanning, & Metode Cycle Counting',
        theory: 'Fungsi Warehouse Management System (Putaway Rules, Wave Picking, Batch Picking), teknologi Barcode 1D/2D dan RFID, metodologi penghitungan stok berkala (Cycle Counting) pengganti Stock Opname tahunan.',
        practical: 'Simulasi proses penerimaan barang, putaway otomatis sistem, dan rekonsiliasi selisih stok menggunakan metode Cycle Count.'
      }
    ],
    equipment: [
      'Handheld Mobile Computer Barcode / RFID Scanner Terminal Simulator.',
      'Template Spreadsheet Klasifikasi Analisis ABC & FSN Inventory Otomatis.',
      'Kalkulator Spreadsheet Reorder Point (ROP), EOQ, & Safety Stock.',
      'Formulir Master Cycle Counting & Berita Acara Rekonsiliasi Stok.'
    ],
    participants: [
      'Warehouse Manager / Supervisor, Inventory Controller, Logistik & Distribusi Leader, Storekeeper / Kepala Gudang, PPIC Officer, Material Handler.'
    ],
    tableData: {
      headers: ['Klasifikasi Analisis ABC', 'Persentase Jumlah Item Barang', 'Persentase Nilai Investasi Modal', 'Kebijakan Pengendalian Gudang'],
      rows: [
        ['Kategori A (High Value)', '± 10% - 20% dari total item', '± 70% - 80% dari total nilai uang', 'Pengendalian sangat ketat, Cycle Count mingguan, Safety Stock minimal'],
        ['Kategori B (Moderate Value)', '± 30% dari total item', '± 15% - 20% dari total nilai uang', 'Pengendalian moderat, pemesanan teratur, Cycle Count bulanan'],
        ['Kategori C (Low Value)', '± 50% dari total item', '± 5% dari total nilai uang', 'Pengendalian sederhana, stok banyak (bulk order), Cycle Count per semester'],
        ['Akurasi Stok Target', 'World-Class Inventory Record Accuracy (IRA)', 'Target Akurasi ≥ 99.0%', 'Menghilangkan kebutuhan tutup pabrik saat Stock Opname']
      ]
    },
    caseStudy: 'Sebuah distributor suku cadang alat berat di Balikpapan menaikkan Inventory Record Accuracy (IRA) dari 84% menjadi 99.4% dan memangkas waktu picking pesanan hingga 50% setelah beralih ke metode Cycle Counting dan sistem WMS slotting.',
    stepByStepGuide: [
      { step: '1. Pemetaan Klasifikasi ABC-FSN', desc: 'Mengelompokkan seluruh SKU barang berdasarkan nilai rupiah perputaran dan kecepatan pergerakan stok.' },
      { step: '2. Relokasi Slotting Barang Fast-Moving', desc: 'Menempatkan barang kategori Fast-Moving di rak yang paling dekat dengan pintu pengeluaran barang.' },
      { step: '3. Penerapan Barcode Scanning & FIFO', desc: 'Mewajibkan pemindaian barcode pada setiap pergerakan barang untuk menjamin kepatuhan sistem FIFO/FEFO.' },
      { step: '4. Eksekusi Rutin Cycle Counting Harian', desc: 'Menghitung fisik 10-20 item barang setiap hari sebelum shift dimulai untuk mengunci akurasi stok.' }
    ],
    links: [
      { href: '/kategori-pelatihan/operator-reach-truck-warehouse/', anchor: 'Sertifikasi Operator Reach Truck' },
      { href: '/kategori-pelatihan/supply-chain-operations-reference-scor/', anchor: 'Optimasi Rantai Pasok SCOR' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 13. HR Management for Non-HR Managers
  {
    key: 'hr-management-for-non-hr-managers',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/hr-management-for-non-hr-managers/',
    archetype: 'role',
    title: 'Pelatihan HR Management for Non-HR Managers: People Management Operasional',
    h1: 'Pelatihan Manajemen Sumber Daya Manusia bagi Manajer & Supervisor Non-HR (HR for Non-HR): Mengelola Rekrutmen, Penilaian Kinerja, Disiplin, & Hukum Ketenagakerjaan',
    meta: 'Pelatihan HR for non-HR: manajemen SDM untuk manajer operasional, teknik wawancara STAR, penilaian kinerja KPI, konseling teguran SP & UU Cipta Kerja.',
    imgAlt: 'Manajer produksi melakukan sesi evaluasi penilaian kinerja tahunan dan career coaching bersama staf teknis di ruang kerja',
    related: ['pelatihan-supervisory-skills-pabrik', 'komunikasi-asertif-dan-serikat-pekerja', 'coaching-dan-mentoring-grow-model', 'k3-keselamatan-kerja'],
    intro: 'Setiap Manajer dan Supervisor pada dasarnya adalah "Manajer HR" bagi timnya masing-masing. Keberhasilan seorang pemimpin divisi teknik, produksi, pemasaran, atau keuangan sangat ditentukan oleh kemampuannya memilih orang yang tepat (Recruitment), mengembangkan kompetensi (Coaching), menilai kinerja secara objektif (Appraisal), dan menegakkan disiplin sesuai hukum ketenagakerjaan. Pelatihan <strong>HR for Non-HR Managers</strong> membekali para pimpinan lini dengan keahlian people management yang kokoh.',
    hazards: [
      '<strong>Salah Memilih Karyawan Baru (Wrong Hire):</strong> Wawancara rekrutmen yang tidak terstruktur menghasilkan karyawan yang tidak kompeten.',
      '<strong>Sengketa Hukum Akibat Surat Peringatan (SP) Cacat Hukum:</strong> Manajer menerbitkan SP atau memecat staf tanpa prosedur pembinaan formil.',
      '<strong>Penilaian Kinerja yang Bias & Subjektif (Halo/Horns Effect):</strong> Penilaian hanya berdasarkan suka/tidak suka (like and dislike) yang merusak moral tim.',
      '<strong>Tingginya Angka Turnover Talenta Terbaik (High Performer Resignation):</strong> Karyawan berprestasi mengundurkan diri karena ketiadaan jenjang karir.'
    ],
    regulations: [
      '<strong>UU No. 13 Tahun 2003</strong> tentang Ketenagakerjaan.',
      '<strong>PP No. 35 Tahun 2021</strong> tentang PKWT, Alih Daya, Waktu Kerja, dan Pemutusan Hubungan Kerja.',
      '<strong>Standar Manajemen Kinerja SDM Korporat</strong>.'
    ],
    modules: [
      {
        name: 'Modul 1: Teknik Wawancara Berbasis Perilaku (Behavioral Event Interview / STAR Method)',
        theory: 'Kelemahan wawancara tradisional, prinsip metode STAR (Situation, Task, Action, Result), menyusun pertanyaan perilaku untuk menguji kompetensi teknis dan karakter kerja.',
        practical: 'Praktik wawancara bermain peran (role-play interview) kandidat teknisi menggunakan lembar panduan STAR.'
      },
      {
        name: 'Modul 2: Manajemen Kinerja Objektif & Sesi Diskusi Kinerja (Performance Appraisal)',
        theory: 'Menghindari bias penilaian kinerja (Recency Effect, Central Tendency, Halo Effect), teknik memberikan feedback konstruktif (SBI: Situation-Behavior-Impact), penyusunan Individual Development Plan (IDP).',
        practical: 'Simulasi memimpin sesi evaluasi kinerja tahunan bersama karyawan dengan kinerja di bawah target (Underperformer).'
      },
      {
        name: 'Modul 3: Hukum Ketenagakerjaan Praktis: Jam Kerja, Lembur, Surat Peringatan (SP), & Konseling Disiplin',
        theory: 'Aturan jam kerja & perhitungan upah lembur resmi, tata cara penerbitan SP1, SP2, SP3 yang sah secara hukum, teknik konseling kedisiplinan dan pencegahan perselisihan PHI.',
        practical: 'Penyusunan draf Surat Peringatan (SP) resmi yang memenuhi syarat legalitas pembinaan ketenagakerjaan.'
      }
    ],
    modulesDescription: 'Pembekalan menyeluruh mengenai siklus manajemen SDM mulai dari rekrutmen hingga penegakan disiplin.',
    equipment: [
      'Panduan Pertanyaan Wawancara STAR Method Per Bidang Kerja.',
      'Formulir Evaluasi Penilaian Kinerja Karyawan (Performance Appraisal Form).',
      'Format Berita Acara Konseling Kedisiplinan & Draf Surat Peringatan (SP).',
      'Kalkulator Spreadsheet Simulasi Perhitungan Upah Lembur PP 35/2021.'
    ],
    participants: [
      'Manajer / Supervisor Divisi Produksi, Maintenance, IT, Finance, Marketing, R&D, Logistics, dan Semua Pimpinan yang Memiliki Bawahan Langsung.'
    ],
    tableData: {
      headers: ['Siklus Manajemen SDM', 'Tugas Manajer Lini Operasional', 'Peran Departemen HR Korporat', 'Dampak Keberhasilan'],
      rows: [
        ['1. Rekrutmen & Seleksi', 'Wawancara kompetensi teknis via metode STAR', 'Sourcing kandidat, tes psikologi, kontrak kerja', 'Karyawan baru tepat kompetensi (Right Fit)'],
        ['2. Manajemen Kinerja', 'Menetapkan KPI bawahan & review berkala', 'Menyediakan sistem software HRIS & kalibrasi', 'Target produktivitas divisi tercapai 100%'],
        ['3. Pembinaan & Coaching', 'Memberikan feedback harian & bimbingan skill', 'Menyelenggarakan program pelatihan terstruktur', 'Kenaikan kompetensi & retensi karyawan'],
        ['4. Penegakan Disiplin', 'Melakukan konseling & rekomendasi penerbitan SP', 'Memvalidasi dasar hukum & menerbitkan surat resmi', 'Tempat kerja tertib bebas tuntutan hukum']
      ]
    },
    caseStudy: 'Sebuah perusahaan logistik di Jakarta berhasil menurunkan tingkat turnover karyawan baru di masa percobaan (probation) dari 30% menjadi hanya 6% setelah seluruh manajer operasionalnya dilatih teknik wawancara perilaku STAR.',
    stepByStepGuide: [
      { step: '1. Penyusunan Kriteria Kompetensi Jabatan', desc: 'Menentukan kompetensi teknis dan sikap kerja mutlak yang dibutuhkan tim sebelum membuka lowongan.' },
      { step: '2. Wawancara Terstruktur Metode STAR', desc: 'Menggali bukti tindakan nyata masa lalu kandidat saat menghadapi masalah pekerjaan serupa.' },
      { step: '3. Evaluasi Kinerja & Feedback Berkala', desc: 'Melakukan sesi 1-on-1 minimal 1 bulan sekali untuk membahas progres pencapaian target KPI.' },
      { step: '4. Prosedur Konseling Sebelum Sanksi SP', desc: 'Mengadakan sesi konseling terdokumentasi sebelum menerbitkan surat peringatan resmi.' }
    ],
    links: [
      { href: '/kategori-pelatihan/pelatihan-supervisory-skills-pabrik/', anchor: 'Pelatihan Supervisory Skills' },
      { href: '/kategori-pelatihan/penyusunan-kpi-dan-okr-manufaktur/', anchor: 'Penyusunan KPI & OKR' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 14. Service Excellence B2B Manufaktur
  {
    key: 'service-excellence-b2b-manufaktur',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/service-excellence-b2b-manufaktur/',
    archetype: 'role',
    title: 'Pelatihan Service Excellence B2B: Pelayanan Prima Industri & Pelanggan Korporat',
    h1: 'Pelatihan Service Excellence B2B & Manajemen Kepuasan Pelanggan Industri: Membangun Keunggulan Layanan Purna Jual, Komunikasi Klien, & Loyalitas Bisnis Korporasi',
    meta: 'Pelatihan service excellence B2B: standar pelayanan prima industri manufaktur, penanganan komplain klien korporat, SLA purna jual & loyalitas pelanggan B2B.',
    imgAlt: 'Tim customer service industri dan technical support B2B memberikan penjelasan teknis purna jual kepada klien korporat',
    related: ['penanganan-komplain-pelanggan-b2b', 'komunikasi-asertif-dan-serikat-pekerja', 'teknik-negosiasi-dan-vendor-management', 'k3-keselamatan-kerja'],
    intro: 'Dalam lanskap persaingan bisnis B2B (Business-to-Business) modern, produk berkualitas dengan harga kompetitif saja tidak lagi cukup untuk memenangkan pasar. Pelanggan korporat menuntut <strong>Service Excellence (Pelayanan Prima B2B)</strong> yang mencakup respon teknis yang cepat, keandalan pengiriman, kejelasan komunikasi saat terjadi kendala, serta dukungan purna jual yang proaktif untuk membangun kemitraan strategis jangka panjang.',
    hazards: [
      '<strong>Kehilangan Klien Kunci Korporat (Key Account Churn):</strong> Pelanggan beralih ke kompetitor akibat komunikasi lambat dan sikap tidak responsif.',
      '<strong>Eskalasi Keluhan ke Level Direksi Pelanggan:</strong> Masalah teknis kecil meledak menjadi krisis kepercayaan karena penanganan yang lamban.',
      '<strong>Kerusakan Reputasi Brand Perusahaan di Industri:</strong> Berita buruk mengenai buruknya layanan purna jual menyebar di asosiasi industri.',
      '<strong>Klaim Ganti Rugi Finansial Akibat Keterlambatan Layanan:</strong> Pelanggaran batas waktu respon teknis Service Level Agreement (SLA).'
    ],
    regulations: [
      '<strong>Standar ISO 9001:2015</strong> Klausul 8.2 (Persyaratan untuk Produk dan Jasa & Kepuasan Pelanggan).',
      '<strong>Standar ISO 10002:2018</strong> (Quality Management - Customer Satisfaction - Guidelines for Complaints Handling).',
      '<strong>Etika Bisnis & Tata Kelola Korporat (Good Corporate Governance)</strong>.'
    ],
    modules: [
      {
        name: 'Modul 1: Perbedaan Pola Pikir Service Excellence B2B vs B2C',
        theory: 'Karakteristik pembeli korporat (Multiple Decision Makers, Nilai Transaksi Besar, Dampak Bisnis Kritis), konsep Customer Lifetime Value (CLV), 4 pilar kepuasan B2B (Kecepatan, Akurasi Teknis, Transparansi, Solutif).',
        practical: 'Pemetaan titik sentuh pelanggan (Customer Journey Mapping B2B) dari pemesanan hingga layanan purna jual.'
      },
      {
        name: 'Modul 2: Standar Komunikasi Profesional & Etika Berinteraksi dengan Klien Korporat',
        theory: 'Etika email bisnis resmi, teknik komunikasi telepon & pesan singkat profesional, seni menyampaikan kabar buruk (bad news) terkait keterlambatan pengiriman tanpa merusak relasi.',
        practical: 'Praktik menyusun draf email klarifikasi teknis dan permohonan maaf resmi (Official Letter of Apology).'
      },
      {
        name: 'Modul 3: Manajemen Hubungan Klien (Key Account Management) & Service Level Agreement (SLA)',
        theory: 'Penetapan matriks respon eskalasi masalah teknis (Severity Level 1, 2, 3), pengukuran Net Promoter Score (NPS) dan Customer Satisfaction Index (CSI) B2B, program retensi klien.',
        practical: 'Simulasi menangani komplain keras dari General Manager klien korporat dan penyusunan laporan investigasi CAPA purna jual.'
      }
    ],
    equipment: [
      'Template Customer Journey Mapping & Touchpoint Assessment B2B.',
      'Panduan Standar Komunikasi Email & Telepon Bisnis Profesional (B2B Scripting).',
      'Formulir Matriks Eskalasi Masalah & Service Level Agreement (SLA).',
      'Kuesioner Survei Kepuasan Pelanggan B2B (Net Promoter Score / CSI Template).'
    ],
    participants: [
      'Key Account Manager, Technical Sales Engineer, Customer Service B2B, Field Service Engineer / Teknisi Purna Jual, Logistic Coordinator, Finance Billing.'
    ],
    tableData: {
      headers: ['Tingkat Keparahan Masalah (Severity)', 'Definisi Gangguan Operasional Klien', 'Target Waktu Respon Awal', 'Target Penyelesaian Solusi'],
      rows: [
        ['Severity 1 (Kritis / Pabrik Klien Mati)', 'Mesin utama mati total, lini produksi klien terhenti', 'Maksimal < 15 Menit Respon', 'Teknisi tiba di lokasi < 2 Jam / Solusi < 4 Jam'],
        ['Severity 2 (Mayor / Operasi Terganggu)', 'Produksi berjalan lambat, sebagian fungsi alat bermasalah', 'Maksimal < 1 Jam Respon', 'Solusi teknis tuntas dalam 1x24 Jam'],
        ['Severity 3 (Minor / Masalah Administratif)', 'Pertanyaan invoice, dokumen sertifikat uji belum terkirim', 'Maksimal < 4 Jam Respon', 'Dokumen terkirim tuntas dalam 2 Hari Kerja'],
        ['Net Promoter Score Target', 'Tingkat loyalitas & rekomendasi klien korporat', 'Target Skor NPS ≥ +60', 'Kategori World-Class B2B Service']
      ]
    },
    caseStudy: 'Sebuah perusahaan manufaktur penyedia mesin industri di Surabaya berhasil meningkatkan retensi klien korporat dari 82% menjadi 97% dan meraih kenaikan repeat order 35% setelah menerapkan standar respon SLA B2B di seluruh tim teknis lapangannya.',
    stepByStepGuide: [
      { step: '1. Pemetaan Customer Journey & Titik Kritis', desc: 'Mengidentifikasi seluruh titik interaksi pelanggan mulai dari penawaran harga, instalasi, hingga komplain.' },
      { step: '2. Penetapan Standar SLA Respon Pelayanan', desc: 'Menetapkan standar waktu respon tertulis untuk setiap divisi yang berhubungan langsung dengan klien.' },
      { step: '3. Pelatihan Komunikasi & Resolusi Konflik', desc: 'Melatih seluruh staf teknik lapangan dan customer service tentang etika komunikasi asertif profesional.' },
      { step: '4. Pengukuran Net Promoter Score (NPS) Tahunan', desc: 'Menyebarkan survei kepuasan pelanggan berkala dan menindaklanjuti setiap masukan kritis klien.' }
    ],
    links: [
      { href: '/kategori-pelatihan/penanganan-komplain-pelanggan-b2b/', anchor: 'Penanganan Komplain Pelanggan B2B' },
      { href: '/kategori-pelatihan/komunikasi-asertif-dan-serikat-pekerja/', anchor: 'Komunikasi Asertif Profesional' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 15. Public Speaking dan Executive Pitching
  {
    key: 'public-speaking-dan-executive-pitching',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/public-speaking-dan-executive-pitching/',
    archetype: 'role',
    title: 'Pelatihan Public Speaking & Executive Pitching: Presentasi ke Direksi',
    h1: 'Pelatihan Public Speaking, Presentasi Laporan Eksekutif, & Teknik Pitching Direksi: Menyampaikan Ide Kompleks dengan Singkat, Percaya Diri, & Memikat',
    meta: 'Pelatihan public speaking & executive pitching: presentasi bisnis ke direksi, struktur pyramid principle Minto, visualisasi data, penguasaan panggung & Q&A.',
    imgAlt: 'Seorang manajer mempresentasikan usulan proyek strategis di hadapan dewan direksi menggunakan slide presentasi data eksekutif yang elegan',
    related: ['pelatihan-train-the-trainer-bnsp', 'pelatihan-supervisory-skills-pabrik', 'coaching-dan-mentoring-grow-model', 'k3-keselamatan-kerja'],
    intro: 'Banyak ide cemerlang, usulan anggaran investasi proyek, dan laporan kinerja gagal disetujui jajaran Direksi (C-Level Executives) bukan karena idenya buruk, melainkan karena cara penyampaian presentasi yang bertele-tele, dipenuhi detail teknis yang membosankan, dan tidak berorientasi pada nilai bisnis. Pelatihan <strong>Public Speaking & Executive Pitching</strong> melatih para profesional berbicara dengan percaya diri, menggunakan struktur berpikir <em>Minto Pyramid Principle</em>, dan menguasai teknik pitching berdaya pengaruh tinggi.',
    hazards: [
      '<strong>Usulan Proyek & Anggaran Ditolak Direksi:</strong> Presentasi terlalu panjang dan gagal menjelaskan Return on Investment (ROI) bisnis.',
      '<strong>Gugup Ekstrem & Blank Saat Berbicara di Depan Umum (Stage Fright):</strong> Keringat dingin, suara bergetar, dan hilangnya alur berpikir.',
      '<strong>Slide Presentasi Dipenuhi Teks Membosankan (Death by PowerPoint):</strong> Direksi kehilangan fokus dalam 2 menit pertama presentasi.',
      '<strong>Kekacauan Saat Menjawab Pertanyaan Kritis Direksi (Hostile Q&A):</strong> Bersikap defensif atau berdebat saat dewan direksi melontarkan pertanyaan tajam.'
    ],
    regulations: [
      '<strong>Prinsip Struktur Berpikir Minto Pyramid Principle (Barbara Minto / McKinsey)</strong>.',
      '<strong>Standar Komunikasi Eksekutif Korporat</strong>.',
      '<strong>Etika Presentasi Bisnis Internasional</strong>.'
    ],
    modules: [
      {
        name: 'Modul 1: Struktur Presentasi Eksekutif: The Minto Pyramid Principle & SCR Framework',
        theory: 'Pola pikir eksekutif (fokus pada kesimpulan utama terlebih dahulu / BLUF: Bottom Line Up Front), struktur SCR (Situation, Complication, Resolution), merangkum proposal 50 halaman menjadi 5 menit pitching.',
        practical: 'Restrukturisasi draf presentasi usulan investasi pabrik menggunakan kerangka kerja Pyramid Principle.'
      },
      {
        name: 'Modul 2: Desain Visual Slide Eksekutif & Teknik Storytelling Berbasis Data',
        theory: 'Prinsip 1 Slide 1 Pesan Kunci, visualisasi grafik data yang berbicara (Data-Driven Storytelling), eliminasi teks paragraf padat, pembuatan Executive Summary 1 halaman.',
        practical: 'Redesain 5 slide presentasi teknis yang membosankan menjadi slide presentasi eksekutif berdampak visual tinggi.'
      },
      {
        name: 'Modul 3: Bahasa Tubuh, Modulasi Suara Berwibawa, & Menghadapi Sesi Tanya Jawab Kritis (Executive Q&A)',
        theory: 'Mengatasi demam panggung dengan teknik olah nafas diafragma, kontak mata, intonasi suara tegas berwibawa, teknik menjawab pertanyaan jebakan (Bridge & Pivot Method).',
        practical: 'Simulasi Pitching 7 Menit di hadapan panel penilai simulasi Direksi dan sesi tanya jawab tajam langsung.'
      }
    ],
    equipment: [
      'Template Slide Presentasi Eksekutif Standar Konsultan Manajemen Global (16:9 Format).',
      'Wireless Presenter Clicker dengan Laser Pointer Hijau.',
      'Kamera Video Recording & Tripod untuk Evaluasi Analisis Rekaman Presentasi.',
      'Formulir Lembar Penilaian Presentasi Eksekutif (Executive Pitch Evaluation Scorecard).'
    ],
    participants: [
      'Department Head / Senior Manager, Project Manager, Financial Analyst, Technical Specialist, Business Development, Siapa pun yang Rutin Presentasi ke Direksi.'
    ],
    tableData: {
      headers: ['Elemen Presentasi', 'Gaya Presentasi Tradisional (Membosankan)', 'Gaya Presentasi Eksekutif (Pyramid Principle)', 'Respon Dewan Direksi'],
      rows: [
        ['Alur Pembukaan', 'Menjelaskan latar belakang panjang & sejarah teknis', 'Langsung sampaikan Rekomendasi & Solusi di awal (BLUF)', 'Direksi Langsung Memahami Inti'],
        ['Desain Slide', 'Penuh teks kecil-kecil, tabel angka rumit tak terbaca', 'Grafik visual bersih, fokus pada pesan utama & ROI', 'Pesan Tertangkap dalam 3 Detik'],
        ['Penyampaian Data', 'Membacakan angka-angka data teknis secara datar', 'Bercerita makna di balik data (Storytelling Data)', 'Menumbuhkan Keyakinan Bisnis'],
        ['Sesi Tanya Jawab', 'Menjawab berputar-putar atau bersikap defensif', 'Menjawab to-the-point: "Ya/Tidak", lalu beri argumen 3 poin', 'Keputusan Investasi Cepat Disetujui']
      ]
    },
    caseStudy: 'Seorang Engineering Manager di Karawang berhasil meloloskan persetujuan anggaran otomasi mesin senilai Rp 8 Miliar dari Dewan Direksi hanya dalam sesi pitching 10 menit setelah menyusun presentasi berbasis Pyramid Principle dan ROI data storytelling.',
    stepByStepGuide: [
      { step: '1. Rumuskan Pesan Utama (One Key Message)', desc: 'Menentukan 1 kesimpulan mutlak yang ingin diingat oleh Direksi setelah presentasi selesai.' },
      { step: '2. Susun Alur Pyramid Principle (SCR)', desc: 'Membuat alur Situation (Kondisi saat ini), Complication (Tantangan kritis), dan Resolution (Solusi usulan).' },
      { step: '3. Buat Slide Visual & Executive Summary', desc: 'Mendesain slide bersih dengan grafik yang menonjolkan angka efisiensi biaya dan keuntungan bisnis.' },
      { step: '4. Latihan Simulasi Pitching & Q&A', desc: 'Melakukan latihan vokal, penguasaan panggung, dan antisipasi pertanyaan tersulit dari jajaran C-Level.' }
    ],
    links: [
      { href: '/kategori-pelatihan/pelatihan-train-the-trainer-bnsp/', anchor: 'Pelatihan Train the Trainer BNSP' },
      { href: '/kategori-pelatihan/pelatihan-supervisory-skills-pabrik/', anchor: 'Pelatihan Supervisory Skills' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 16. Manajemen Stres dan Kecerdasan Emosional
  {
    key: 'manajemen-stres-dan-kecerdasan-emosional',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/manajemen-stres-dan-kecerdasan-emosional/',
    archetype: 'role',
    title: 'Pelatihan Kecerdasan Emosional (EQ) & Manajemen Stres di Tempat Kerja',
    h1: 'Pelatihan Kecerdasan Emosional (Emotional Intelligence / EQ) & Manajemen Stres Kerja: Membangun Resiliensi Mental, Hubungan Kerja Positif, & Produktivitas di Bawah Tekanan',
    meta: 'Pelatihan kecerdasan emosional EQ & manajemen stres kerja: 4 pilar Goleman, resiliensi burnout, regulasi emosi, mindfulness & komunikasi empatik.',
    imgAlt: 'Karyawan mempraktikkan teknik pernapasan relaksasi mindfulness dan manajemen emosi dalam sesi workshop kesehatan mental kerja',
    related: ['manajemen-waktu-dan-prioritas-kerja', 'coaching-dan-mentoring-grow-model', 'pelatihan-supervisory-skills-pabrik', 'k3-keselamatan-kerja'],
    intro: 'Kecerdasan Intelektual (IQ) mungkin membuat seseorang diterima bekerja, tetapi Kecerdasan Emosional (Emotional Intelligence / EQ) adalah faktor penentu utama keberhasilan karir, kepemimpinan, dan kesehatan mental jangka panjang. Tekanan target bisnis yang ketat, beban kerja tinggi, dan dinamika hubungan antarpribadi yang toksik dapat memicu stres kronis dan <em>burnout</em>. Pelatihan <strong>EQ & Manajemen Stres</strong> membekali peserta dengan keterampilan regulasi emosi, empati, dan resiliensi psikologis.',
    hazards: [
      '<strong>Ledakan Kemarahan di Tempat Kerja (Emotional Hijacking):</strong> Kehilangan kendali emosi saat rapat yang merusak reputasi profesional dan hubungan tim.',
      '<strong>Kejenuhan Mental & Kelelahan Kronis (Burnout Syndrome):</strong> Kehilangan motivasi kerja, sinisme terhadap perusahaan, dan penurunan drastis performa.',
      '<strong>Penyakit Fisik Psikosomatis Akibat Stres (Hypertension/GERD):</strong> Stres kerja berkepanjangan yang memicu penyakit asam lambung, migrain, dan gangguan tidur.',
      '<strong>Keputusan Bisnis yang Buruk Akibat Panik:</strong> Mengambil langkah gegabah di tengah tekanan krisis tanpa kejernihan berpikir logis.'
    ],
    regulations: [
      '<strong>Model Kecerdasan Emosional Daniel Goleman</strong>.',
      '<strong>Permenaker No. 5 Tahun 2018</strong> tentang K3 Lingkungan Kerja (Faktor Psikologi Kerja).',
      '<strong>Standar Manajemen Kesehatan Jiwa di Tempat Kerja Kemenkes RI</strong>.'
    ],
    modules: [
      {
        name: 'Modul 1: Empat Pilar Kecerdasan Emosional (Daniel Goleman Model)',
        theory: 'Self-Awareness (Kesadaran Diri & Mengenali Emosi Pemicu), Self-Management (Pengendalian Diri & Adaptabilitas), Social Awareness (Empati & Membaca Dinamika Sosial), Relationship Management (Membangun Relasi & Mempengaruhi Orang Lain).',
        practical: 'Pengisian kuesioner Emotional Intelligence Quotient (EQ) Profiler untuk memetakan kekuatan dan area pengembangan pribadi.'
      },
      {
        name: 'Modul 2: Fisiologi Stres, Deteksi Burnout, & Teknik Regulasi Emosi Cepat',
        theory: 'Mekanisme respon Fight-or-Flight, hormon kortisol dan adrenalin, mengenali 12 tahapan menuju burnout, teknik pemutus pembajakan emosi amigdala (Amydala Hijack Break: Aturan 6 Detik & Box Breathing).',
        practical: 'Praktik latihan pernapasan Box Breathing 4-4-4-4 dan teknik grounding relaksasi otot progresif.'
      },
      {
        name: 'Modul 3: Membangun Resiliensi Mental, Pola Pikir Positif (Growth Mindset), & Komunikasi Empatik',
        theory: 'Mengubah pembicaraan diri negatif (Negative Self-Talk Reframing), teknik mendengarkan empatik aktif tanpa menghakimi, merancang rutinitas perawatan diri (Self-Care Plan) penyeimbang kehidupan kerja (Work-Life Harmony).',
        practical: 'Simulasi dialog penyelesaian konflik antarpribadi menggunakan pendekatan empati dan perumusan Action Plan Kesehatan Mental Pribadi.'
      }
    ],
    equipment: [
      'Kuesioner Diagnostik Emotional Intelligence (EQ) Test Terstandarisasi.',
      'Formulir Skrining Tingkat Stres Kerja (Perceived Stress Scale / PSS).',
      'Panduan Saku Latihan Mindfulness & Box Breathing di Meja Kerja.',
      'Template Personal Resilience & Work-Life Harmony Action Plan.'
    ],
    participants: [
      'Seluruh Karyawan, Supervisor, Manajer, Staf Pelayanan Publik, Tim Sales & Layanan Pelanggan, Profesional dengan Tingkat Tekanan Kerja Tinggi.'
    ],
    tableData: {
      headers: ['Pilar EQ Daniel Goleman', 'Tanda-Tanda EQ Rendah', 'Karakteristik EQ Tinggi', 'Dampak di Tempat Kerja'],
      rows: [
        ['1. Self-Awareness', 'Tidak sadar saat emosi memuncak, mudah tersinggung', 'Mengenali pemicu emosi & memahami dampaknya ke orang lain', 'Pengambilan keputusan lebih jernih'],
        ['2. Self-Management', 'Meledak-ledak marah, impulsif, panik saat krisis', 'Tetap tenang di bawah tekanan, mampu menahan diri', 'Dipercaya memimpin saat situasi darurat'],
        ['3. Social Awareness (Empati)', 'Apatis, tidak peduli beban rekan kerja, egosentris', 'Mampu merasakan perspektif & perasaan orang lain', 'Tercipta iklim kerja yang suportif & aman'],
        ['4. Relationship Management', 'Sering memicu konflik, manipulatif, sulit bekerja tim', 'Menginspirasi, menyelesaikan perselisihan dengan damai', 'Kolaborasi tim solid & produktivitas tinggi']
      ]
    },
    caseStudy: 'Sebuah perusahaan teknologi finansial di Jakarta berhasil menurunkan tingkat absensi karyawan akibat stres hingga 40% dan menaikkan skor kepuasan kerja tim sebesar 30% setelah mengadakan program bulanan Pelatihan EQ dan Mindfulness di tempat kerja.',
    stepByStepGuide: [
      { step: '1. Pemetaan Skor EQ & Stres Pribadi', desc: 'Mengisi kuesioner asesmen mandiri untuk mengetahui pemicu stres utama dan tingkat kematangan emosi.' },
      { step: '2. Latihan Teknik Regulasi Emosi 6 Detik', desc: 'Mempraktikkan jeda 6 detik dan pernapasan dalam saat merasakan tanda-tanda kemarahan atau panik.' },
      { step: '3. Penerapan Komunikasi Empatik di Tim', desc: 'Mendengarkan keluhan rekan kerja secara aktif tanpa langsung memotong atau menghakimi.' },
      { step: '4. Perancangan Rutinitas Self-Care Harian', desc: 'Menetapkan batas waktu kerja yang sehat, olahraga teratur, dan waktu istirahat berkualitas.' }
    ],
    links: [
      { href: '/kategori-pelatihan/manajemen-waktu-dan-prioritas-kerja/', anchor: 'Manajemen Waktu & Prioritas Kerja' },
      { href: '/kategori-pelatihan/coaching-dan-mentoring-grow-model/', anchor: 'Coaching & Mentoring GROW Model' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  }
];
