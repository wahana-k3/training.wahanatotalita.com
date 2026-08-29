import { MultiArchetypeProgramDetail } from './multi-archetype-renderer';

export const batch7LeadershipPagesPart3: MultiArchetypeProgramDetail[] = [
  // 17. Coaching dan Mentoring GROW Model
  {
    key: 'coaching-dan-mentoring-grow-model',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/coaching-dan-mentoring-grow-model/',
    archetype: 'role',
    title: 'Pelatihan Coaching & Mentoring Karyawan: Metode GROW Model Praktis',
    h1: 'Pelatihan Coaching & Mentoring bagi Manajer & Supervisor: Mengembangkan Potensi Tim, Melejitkan Kinerja, & Menyelesaikan Masalah dengan Kerangka GROW Model',
    meta: 'Pelatihan coaching & mentoring karyawan: metode GROW model Sir John Whitmore, powerful questioning, active listening, feedback SBI & IDP development.',
    imgAlt: 'Manajer melakukan sesi percakapan coaching satu-satu bersama staf menggunakan lembar kerja GROW Model di ruang diskusi kantor',
    related: ['pelatihan-supervisory-skills-pabrik', 'hr-management-for-non-hr-managers', 'manajemen-stres-dan-kecerdasan-emosional', 'k3-keselamatan-kerja'],
    intro: 'Pemimpin modern tidak lagi sekadar memberi tahu apa yang harus dilakukan (telling / directing), melainkan memberdayakan timnya untuk berpikir mandiri dan menemukan solusi terbaik melalui seni <strong>Coaching & Mentoring</strong>. Menggunakan kerangka kerja <strong>GROW Model (Goal, Reality, Options, Will/Way Forward)</strong> yang dikembangkan oleh Sir John Whitmore, para manajer dapat mentransformasi percakapan satu-satu (1-on-1) menjadi katalisator lompatan kinerja karyawan.',
    hazards: [
      '<strong>Ketergantungan Tim yang Kronis pada Atasan (Micromanagement Trap):</strong> Staf tidak berani mengambil inisiatif dan selalu bertanya hal sepele kepada manajer.',
      '<strong>Sesi 1-on-1 Berubah Menjadi Ajang Penghakiman:</strong> Percakapan pembinaan berubah menjadi kritik satu arah yang membuat karyawan defensif.',
      '<strong>Karyawan Mengulang Kesalahan yang Sama Tanpa Komitmen:</strong> Atasan memberikan solusi langsung tanpa membangun rasa tanggung jawab internal (ownership) staf.',
      '<strong>Kehilangan Talenta Penerus Kepemimpinan (Succession Gap):</strong> Ketiadaan program mentoring terstruktur untuk mencetak kader manajer masa depan.'
    ],
    regulations: [
      '<strong>Kerangka Kerja GROW Model (Sir John Whitmore / ICF Guidelines)</strong>.',
      '<strong>Standar International Coaching Federation (ICF) Core Competencies</strong>.',
      '<strong>Manajemen Talenta & Suksesi Korporat</strong>.'
    ],
    modules: [
      {
        name: 'Modul 1: Fondasi Coaching: Perbedaan Telling, Mentoring, Counseling, & Coaching',
        theory: 'Definisi dan kapan menggunakan Coaching vs Mentoring vs Directing, pola pikir Coach (Percaya pada potensi individu), 3 kompetensi inti (Presence, Active Listening, Powerful Questioning).',
        practical: 'Latihan mendengarkan aktif tingkat 3 (Intuitive Listening) dan menghindari kebiasaan memberi nasihat terlalu cepat.'
      },
      {
        name: 'Modul 2: Struktur Percakapan 4 Langkah: Kerangka Kerja GROW Model',
        theory: 'Goal (Menetapkan tujuan spesifik sesi), Reality (Mengeksplorasi fakta objektif saat ini), Options (Membuka alternatif solusi kreatif), Will / Way Forward (Mengunci komitmen tindakan terukur).',
        practical: 'Praktik mengajukan 20 pertanyaan berdaya (Powerful Questions) pada setiap kuadran GROW Model.'
      },
      {
        name: 'Modul 3: Simulasi Praktik Coaching Berpasangan (Peer Coaching) & Umpan Balik SBI',
        theory: 'Teknik memberikan umpan balik konstruktif Situation-Behavior-Impact (SBI), menyusun rencana pengembangan individu (Individual Development Plan / IDP), dokumentasi sesi coaching.',
        practical: 'Gelar simulasi praktik coaching 1-on-1 berpasangan dengan observasi langsung dan evaluasi dari Master Coach.'
      }
    ],
    equipment: [
      'GROW Model Coaching Pocket Guide & Kumpulan Pertanyaan Powerful Questions.',
      'Formulir Lembar Catatan Sesi Coaching (Coaching Agreement & Log Form).',
      'Format Rencana Pengembangan Individu (Individual Development Plan / IDP).',
      'Rubrik Observasi Keterampilan Coaching (Coaching Competency Assessment).'
    ],
    participants: [
      'Senior Manager, Division Head, Supervisor Lini, HR Business Partner, Calon Mentor Perusahaan, Siapa pun yang Memimpin Tim Kerja.'
    ],
    tableData: {
      headers: ['Tahapan GROW Model', 'Fokus Pertanyaan Utama', 'Contoh Pertanyaan Berdaya (Powerful Question)', 'Hasil yang Diharapkan'],
      rows: [
        ['G: Goal (Tujuan)', 'Apa hasil spesifik yang ingin dicapai dari sesi ini?', '"Apa yang ingin Anda wujudkan secara konkret dalam 30 hari ke depan?"', 'Sasaran SMART disepakati coachee'],
        ['R: Reality (Kenyataan)', 'Bagaimana situasi faktual saat ini tanpa asumsi?', '"Langkah apa yang sudah Anda coba dan apa hasil riil yang didapat sejauh ini?"', 'Kesadaran objektif atas kondisi saat ini'],
        ['O: Options (Opsi Solusi)', 'Alternatif solusi apa saja yang mungkin dilakukan?', '"Jika tidak ada batasan anggaran, apa opsi paling kreatif yang bisa Anda ambil?"', 'Membuka minimal 3-5 opsi ide segar'],
        ['W: Will / Way Forward', 'Tindakan apa yang akan diambil & kapan memulainya?', '"Dari seluruh opsi, tindakan mana yang akan Anda eksekusi pertama kali besok?"', 'Komitmen jadwal aksi nyata bertarget']
      ]
    },
    caseStudy: 'Sebuah korporasi telekomunikasi di Jakarta menaikkan skor produktivitas tim IT-nya sebesar 34% dan meningkatkan retensi talenta kunci hingga 95% setelah mewajibkan seluruh manajernya melakukan sesi coaching GROW Model 30 menit per bulan.',
    stepByStepGuide: [
      { step: '1. Pembuatan Kesepakatan Coaching Awal', desc: 'Menjelaskan tujuan coaching sebagai ruang aman untuk bertumbuh dan menetapkan kerahasiaan sesi.' },
      { step: '2. Eksekusi Alur Percakapan GROW', desc: 'Memandu coachee menggali opsi solusinya sendiri menggunakan pertanyaan terbuka yang memicu pemikiran mendalam.' },
      { step: '3. Mengunci Komitmen Aksi (Will)', desc: 'Meminta coachee menyimpulkan sendiri rencana tindakan, tenggat waktu, dan indikator keberhasilannya.' },
      { step: '4. Sesi Review Tindak Lanjut Berkala', desc: 'Mengadakan sesi follow-up 2 minggu kemudian untuk mengevaluasi progres dan merayakan pencapaian.' }
    ],
    links: [
      { href: '/kategori-pelatihan/pelatihan-supervisory-skills-pabrik/', anchor: 'Pelatihan Supervisory Skills' },
      { href: '/kategori-pelatihan/hr-management-for-non-hr-managers/', anchor: 'HR Management for Non-HR' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 18. Cost Reduction Program Lean Waste
  {
    key: 'cost-reduction-program-lean-waste',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/cost-reduction-program-lean-waste/',
    archetype: 'role',
    title: 'Cost Reduction Program: Eliminasi 8 Pemborosan (Lean Waste DOWNTIME)',
    h1: 'Pelatihan Cost Reduction Program (CRP) Manufaktur & Eliminasi 8 Pemborosan Lean (The 8 Wastes of DOWNTIME): Menghasilkan Penghematan Biaya Operasional Riil',
    meta: 'Pelatihan cost reduction program manufaktur: eliminasi 8 pemborosan DOWNTIME, value stream mapping VSM, kanban, kalkulasi cost saving & laba pabrik.',
    imgAlt: 'Tim continuous improvement pabrik menempelkan peta Value Stream Mapping VSM di dinding untuk menganalisis pemborosan waktu proses produksi',
    related: ['penerapan-5s-5r-kaizen-manufaktur', 'total-productive-maintenance-tpm-oee', 'six-sigma-green-belt-dmaic', 'k3-keselamatan-kerja'],
    intro: 'Dalam iklim persaingan global yang sangat ketat di mana harga jual ditentukan oleh pasar, satu-satunya cara untuk meningkatkan profitabilitas perusahaan adalah dengan <strong>Menurunkan Biaya Operasional (Cost Reduction)</strong>. Mengadopsi prinsip <em>Lean Manufacturing</em>, pelatihan ini melatih tim lintas departemen untuk mengidentifikasi dan membasmi <strong>8 Pemborosan (The 8 Wastes of DOWNTIME)</strong> dan mentransformasikannya menjadi proyek penghematan biaya nyata (Cost Saving Projects).',
    hazards: [
      '<strong>Program Efisiensi Biaya Mengorbankan Keselamatan / Mutu:</strong> Memotong biaya dengan cara berbahaya yang berakibat kecelakaan kerja atau komplain cacat.',
      '<strong>Pemborosan Tersembunyi Tidak Teridentifikasi (Hidden Waste):</strong> Karyawan menganggap proses menunggu, pengerjaan ulang, dan stok menumpuk sebagai hal wajar.',
      '<strong>Proyek Cost Saving Gagal Berkelanjutan:</strong> Penghematan hanya bertahan sesaat dan biaya kembali membengkak setelah beberapa bulan.',
      '<strong>Target Efisiensi Hanya di Atas Kertas:</strong> Angka penghematan tidak berdampak pada laporan keuangan laba rugi perusahaan.'
    ],
    regulations: [
      '<strong>Prinsip Lean Enterprise Institute (LEI) & Toyota Production System</strong>.',
      '<strong>Standar ISO 9001:2015</strong> Klausul 7.1.3 (Infrastruktur dan Efisiensi Operasi).',
      '<strong>Akuntansi Manajemen Biaya (Cost Management Accounting)</strong>.'
    ],
    modules: [
      {
        name: 'Modul 1: Filosofi Lean Thinking & Membedah 8 Pemborosan (The 8 Wastes: DOWNTIME)',
        theory: 'Definisi Nilai Tambah (Value-Added) vs Bukan Nilai Tambah (Non-Value Added / Waste), membedah 8 Waste DOWNTIME (Defects, Overproduction, Waiting, Non-utilized Talent, Transportation, Inventory, Motion, Extra-Processing).',
        practical: 'Audit pemborosan di lantai kerja melalui simulasi video lini produksi dan pencatatan Waste Observation Sheet.'
      },
      {
        name: 'Modul 2: Pemetaan Aliran Nilai (Value Stream Mapping / VSM) & Analisis Lead Time',
        theory: 'Konstruksi Current State VSM, perhitungan Process Time vs Lead Time, identifikasi Process Cycle Efficiency (PCE), perancangan Future State VSM bebas bottleneck.',
        practical: 'Praktik menggambar peta Value Stream Mapping dari kedatangan bahan baku hingga pengiriman produk jadi.'
      },
      {
        name: 'Modul 3: Metodologi Proyek Cost Reduction, Perhitungan Finansial ROI, & Standardisasi',
        theory: 'Penyusunan Project Charter CRP, teknik perhitungan Hard Savings (penghematan uang langsung) vs Soft Savings (efisiensi waktu/ruang), standarisasi SOP perbaikan.',
        practical: 'Penyusunan proposal proyek Cost Reduction Program lengkap dengan kalkulasi target penghematan rupiah per tahun.'
      }
    ],
    equipment: [
      'Template Formulir Waste Observation Sheet (DOWNTIME Analysis).',
      'Set Simbol & Template Penggambaran Value Stream Mapping (VSM Kit).',
      'Kalkulator Spreadsheet Perhitungan Cost Saving (Hard vs Soft Savings Financial Model).',
      'Format Project Charter Cost Reduction Program Terstandarisasi.'
    ],
    participants: [
      'Plant Manager, Operation Director, Finance Manager, Industrial Engineer, Continuous Improvement / Kaizen Leader, Production & Maintenance Supervisor.'
    ],
    tableData: {
      headers: ['Jenis 8 Pemborosan (DOWNTIME)', 'Contoh Konkret di Lantai Pabrik', 'Penyebab Akar Masalah', 'Solusi Perbaikan Lean'],
      rows: [
        ['D: Defects (Cacat Produk)', 'Scrap material plastik, pengerjaan ulang (rework)', 'SOP tidak standar, mesin tidak terkalibrasi', 'Poka-Yoke, Autonomous Maintenance, QC Circle'],
        ['O: Overproduction (Kelebihan Produksi)', 'Membuat barang melebihi pesanan pelanggan', 'Jadwal PPIC tidak akurat, mengejar utilisasi mesin', 'Sistem Tarik Kanban (Pull System), Just-In-Time'],
        ['W: Waiting (Waktu Menunggu)', 'Operator diam menunggu bahan baku atau perbaikan mesin', 'Line balancing buruk, mesin sering breakdown', 'Line Balancing, Preventive Maintenance TPM'],
        ['N: Non-Utilized Talent (Potensi Mubazir)', 'Ide perbaikan operator tidak pernah didengarkan', 'Kultur manajemen otoriter tertutup', 'Program Usulan Saran Kaizen, Gugus Kendali Mutu'],
        ['T: Transportation (Transportasi Berlebih)', 'Memindahkan material bolak-balik antar gudang', 'Tata letak layout pabrik berjauhan', 'Relokasi Layout Gudang, U-Shape Assembly Line'],
        ['I: Inventory (Persediaan Berlebih)', 'Tumpukan bahan baku dan barang jadi di lorong', 'Ketakutan kehabisan stok, salah forecast', 'Pengendalian Safety Stock, Single Piece Flow'],
        ['M: Motion (Gerakan Tubuh Mubazir)', 'Membungkuk, berjalan jauh mencari perkakas', 'Penataan area kerja tidak ergonomis', '5S Seiton, Tool Shadow Board, Point of Use'],
        ['E: Extra-Processing (Proses Berlebih)', 'Pengecekan ganda, pembersihan yang tidak perlu', 'Spesifikasi produk tidak jelas, mesin kuno', 'Standarisasi Proses, Value Engineering']
      ]
    },
    caseStudy: 'Sebuah pabrik perakitan elektronik di Cikarang membukukan penghematan biaya operasional (Cost Saving) riil sebesar Rp 4.2 Miliar dalam 1 tahun setelah menjalankan 15 proyek Lean Waste Elimination di lini SMT dan perakitan manual.',
    stepByStepGuide: [
      { step: '1. Pelatihan & Pembentukan Tim Proyek CRP', desc: 'Membentuk gugus tugas penghematan biaya lintas divisi dan menetapkan target penghematan pabrik.' },
      { step: '2. Pemetaan VSM & Identifikasi 8 Waste', desc: 'Mengamati aliran proses di lapangan dan mencatat seluruh aktivitas yang tidak bernilai tambah.' },
      { step: '3. Eksekusi Proyek Perbaikan (Kaizen Blitz)', desc: 'Menjalankan perbaikan cepat (Quick Wins) untuk memangkas waktu tunggu dan stok berlebih.' },
      { step: '4. Validasi Keuangan & Standarisasi SOP', desc: 'Departemen Keuangan memvalidasi angka penghematan riil dan memperbarui instruksi kerja standar.' }
    ],
    links: [
      { href: '/kategori-pelatihan/penerapan-5s-5r-kaizen-manufaktur/', anchor: 'Penerapan 5S 5R Kaizen' },
      { href: '/kategori-pelatihan/total-productive-maintenance-tpm-oee/', anchor: 'Total Productive Maintenance' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 19. Six Sigma Green Belt DMAIC
  {
    key: 'six-sigma-green-belt-dmaic',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/six-sigma-green-belt-dmaic/',
    archetype: 'role',
    title: 'Pelatihan & Sertifikasi Six Sigma Green Belt (DMAIC) Manufaktur',
    h1: 'Pelatihan & Sertifikasi Six Sigma Green Belt: Metodologi DMAIC Berbasis Data Statistik untuk Reduksi Cacat Produk, Variasi Proses, & Peningkatan Kapabilitas (Cp/Cpk)',
    meta: 'Sertifikasi Six Sigma Green Belt: metodologi DMAIC statistik manufaktur, Minitab analysis, kapabilitas proses Cp Cpk, ANOVA, Gage R&R & sertifikat kompetensi.',
    imgAlt: 'Engineer Six Sigma Green Belt menganalisis grafik kurva kapabilitas proses normal distribution dan variasi data menggunakan software statistik',
    related: ['root-cause-analysis-rca-manufaktur', 'cost-reduction-program-lean-waste', 'internal-audit-iso-9001-2015', 'k3-keselamatan-kerja'],
    intro: 'Six Sigma adalah metodologi penyempurnaan proses berbasis data statistik tingkat tinggi yang berfokus pada <strong>Pengurangan Variasi Proses</strong> dan eliminasi cacat produk hingga mencapai tingkat kualitas 3.4 cacat per satu juta peluang (Defects Per Million Opportunities / DPMO). Sertifikasi <strong>Six Sigma Green Belt</strong> membekali para insinyur dan manajer dengan kepemimpinan proyek DMAIC terstruktur menggunakan analisis perangkat lunak statistik (Minitab).',
    hazards: [
      '<strong>Variasi Proses yang Tinggi Mengakibatkan Produk Cacat:</strong> Mesin beroperasi tidak stabil sehingga dimensi produk kerap meleset dari toleransi spesifikasi.',
      '<strong>Pengambilan Keputusan Berbasis Opini / Feeling:</strong> Manajemen melakukan perubahan setelan mesin tanpa validasi statistik data yang kuat.',
      '<strong>Sistem Pengukuran Alat Ukur Tidak Valid (Measurement Error):</strong> Alat ukur tidak akurat (Gage R&R buruk) yang meloloskan produk rusak ke pasar.',
      '<strong>Proyek Six Sigma Terhenti di Tengah Jalan:</strong> Kegagalan merumuskan Project Charter yang jelas dan ketiadaan dukungan sponsor manajemen.',
      '<strong>Pemborosan Biaya Garansi & Klaim Mutu Produk:</strong> Tingginya angka klaim garansi yang mengikis marjin laba bersih korporasi.'
    ],
    regulations: [
      '<strong>Standar ISO 13053-1 & 13053-2</strong> tentang Quantitative Methods in Process Improvement - Six Sigma (DMAIC).',
      '<strong>American Society for Quality (ASQ) Six Sigma Body of Knowledge</strong>.',
      '<strong>Standar IATF 16949 & ISO 9001:2015</strong>.'
    ],
    modules: [
      {
        name: 'Modul 1: Fase Define & Measure: Project Charter, VOC, & Gage R&R',
        theory: 'Penyusunan Project Charter (Business Case, Problem Statement, Goal), Voice of Customer (VOC) to Critical to Quality (CTQ), Process Mapping (SIPOC), Measurement System Analysis (Gage R&R < 10%), Baseline DPMO & Sigma Level.',
        practical: 'Praktik analisis Gage R&R pada jangka sorong digital dan penentuan target penurunan cacat proyek.'
      },
      {
        name: 'Modul 2: Fase Analyze: Uji Hipotesis Statistik, ANOVA, & Regresi Korelasi',
        theory: 'Eksplorasi data grafis (Histogram, Pareto, Boxplot), uji normalitas data, uji hipotesis (1-Sample t-test, 2-Sample t-test, Paired t-test), analisis varian (One-Way ANOVA), regresi linier sederhana, analisis kapabilitas proses (Cp, Cpk, Pp, Ppk).',
        practical: 'Pengolahan data variasi proses ketebalan produk menggunakan software Minitab untuk membuktikan faktor penyebab dominan.'
      },
      {
        name: 'Modul 3: Fase Improve & Control: Design of Experiments (DOE), Poka-Yoke, & Statistical Process Control (SPC)',
        theory: 'Optimasi proses dengan Design of Experiments (Faktorial 2k), pembuatan matriks solusi, penerapan Statistical Process Control (Control Charts: Xbar-R, I-MR, p-chart, c-chart), penyusunan Control Plan & penutupan proyek.',
        practical: 'Perancangan peta kendali SPC real-time dan penyusunan Laporan Akhir Proyek Six Sigma Green Belt.'
      }
    ],
    equipment: [
      'Software Analisis Statistik Minitab / JMP / Python Data Analytics.',
      'Master Template Project Charter & Tollgate Review DMAIC Checklist.',
      'Dataset Kasus Manufaktur Riil (Stamping, Otomotif, Mamin, Farmasi).',
      'Template Control Plan & Standar Statistical Process Control (SPC) Sheet.'
    ],
    participants: [
      'Quality Control (QC/QA) Manager & Engineer, Process Engineer, Continuous Improvement Specialist, Production Manager, Data Analyst Industri.'
    ],
    tableData: {
      headers: ['Tingkat Kualitas Sigma Level', 'Defects Per Million (DPMO)', 'Tingkat Kualitas Persentase Bebas Cacat', 'Kategori Kinerja Industri'],
      rows: [
        ['1 Sigma (Sangat Buruk)', '691.462 DPMO', '30.85%', 'Pabrik sangat tidak kompetitif, biaya scrap masif'],
        ['2 Sigma (Rata-Rata Bawah)', '308.538 DPMO', '69.15%', 'Tingkat cacat tinggi, butuh inspeksi 100%'],
        ['3 Sigma (Standar Industri Rata-Rata)', '66.807 DPMO', '93.32%', 'Kinerja pabrik rata-rata di Indonesia'],
        ['4 Sigma (Industri Kompetitif)', '6.210 DPMO', '99.38%', 'Pabrik modern dengan manajemen kualitas baik'],
        ['5 Sigma (World-Class)', '233 DPMO', '99.977%', 'Pabrik kelas dunia standar industri Jepang/Jerman'],
        ['6 Sigma (Near Perfection)', '3.4 DPMO', '99.99966%', 'Standar penerbangan & semikonduktor mikrochip']
      ]
    },
    caseStudy: 'Sebuah pabrik pengecoran logam di Karawang berhasil menaikkan kapabilitas proses (Cpk) dari 0.85 menjadi 1.55 dan menurunkan tingkat scrap reject dari 4.8% menjadi 0.4%, menghemat biaya mutu senilai Rp 2.6 Miliar per tahun setelah insinyurnya menyelesaikan proyek Six Sigma Green Belt.',
    stepByStepGuide: [
      { step: '1. Penyusunan & Persetujuan Project Charter', desc: 'Menetapkan metrik bisnis yang bermasalah, target penurunan cacat, dan mendapatkan tanda tangan Champion (Direktur).' },
      { step: '2. Validasi Sistem Ukur & Analisis Data (DMA)', desc: 'Melakukan uji Gage R&R untuk memastikan data valid, diikuti pengujian hipotesis statistik di Minitab.' },
      { step: '3. Optimasi Setelan Mesin (Improve)', desc: 'Menjalankan eksperimen DOE untuk menemukan kombinasi parameter suhu dan tekanan paling optimal.' },
      { step: '4. Pemasangan Peta Kendali SPC (Control)', desc: 'Memasang peta kendali Xbar-R di lini produksi dan membukukan penghematan finansial resmi.' }
    ],
    links: [
      { href: '/kategori-pelatihan/root-cause-analysis-rca-manufaktur/', anchor: 'Root Cause Analysis RCA' },
      { href: '/kategori-pelatihan/cost-reduction-program-lean-waste/', anchor: 'Cost Reduction Program Lean' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 20. Penanganan Komplain Pelanggan B2B
  {
    key: 'penanganan-komplain-pelanggan-b2b',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/penanganan-komplain-pelanggan-b2b/',
    archetype: 'role',
    title: 'SOP Penanganan Komplain Pelanggan B2B & Investigasi Retur Produk',
    h1: 'Pelatihan Standard Operating Procedure (SOP) Penanganan Komplain Pelanggan B2B, Manajemen Retur Barang (RMA), & Penerbitan Corrective Action Report Sesuai ISO 10002:2018',
    meta: 'Pelatihan penanganan komplain pelanggan B2B: SOP resolusi keluhan korporat, investigasi retur barang RMA, laporan CAPA 8D, de-eskalasi emosi & ISO 10002.',
    imgAlt: 'Tim QA dan Customer Service memeriksa sampel produk retur yang dikeluhkan pelanggan dan menyusun laporan investigasi tindakan korektif',
    related: ['service-excellence-b2b-manufaktur', 'root-cause-analysis-rca-manufaktur', 'internal-audit-iso-9001-2015', 'k3-keselamatan-kerja'],
    intro: 'Komplain dari pelanggan korporat (B2B Client) adalah sinyal darurat yang dapat menentukan kelangsungan kontrak bisnis bernilai miliaran rupiah. Penanganan komplain yang defensif, lamban, atau saling lempar tanggung jawab internal dapat berujung pada pemutusan kontrak sepihak dan gugatan ganti rugi. Pelatihan <strong>SOP Penanganan Komplain B2B & Investigasi Retur</strong> memandu organisasi membangun alur eskalasi terstandarisasi, investigasi akar masalah berbasis ISO 10002:2018, dan penerbitan laporan tindakan korektif yang memuaskan klien.',
    hazards: [
      '<strong>Pemutusan Kontrak Sepihak oleh Klien Besar:</strong> Respon yang lambat membuat manajemen puncak klien kehilangan kesabaran.',
      '<strong>Klaim Ganti Rugi Finansial & Penalti Keterlambatan:</strong> Klien menuntut ganti rugi atas terhentinya lini produksi akibat produk cacat yang terkirim.',
      '<strong>Retur Barang Menumpuk di Gudang (Unresolved RMA):</strong> Barang retur tidak diinvestigasi sehingga masalah kualitas berulang pada pengiriman berikutnya.',
      '<strong>Saling Menyalahkan Antar Departemen Internal:</strong> Divisi Sales menyalahkan Produksi, Produksi menyalahkan Quality, Quality menyalahkan Logistik.'
    ],
    regulations: [
      '<strong>Standar ISO 10002:2018</strong> (Customer Satisfaction - Guidelines for Complaints Handling in Organizations).',
      '<strong>Standar ISO 9001:2015</strong> Klausul 8.2.1 & 10.2 (Komunikasi Pelanggan & Tindakan Korektif).',
      '<strong>Etika Hubungan Bisnis & Perjanjian Jual Beli Korporat</strong>.'
    ],
    modules: [
      {
        name: 'Modul 1: Prinsip Standar Internasional ISO 10002:2018 & Alur Registrasi Komplain',
        theory: 'Prinsip penanganan keluhan: Aksesibilitas, Responsivitas, Objektivitas, Kerahasiaan, Akuntabilitas, alur penerbitan Return Merchandise Authorization (RMA) dan nomor registrasi komplain resmi.',
        practical: 'Simulasi penerimaan keluhan darurat dari klien korporat dan pengisian Formulir Keluhan Pelanggan (Customer Complaint Form).'
      },
      {
        name: 'Modul 2: Teknik De-Eskalasi Emosi Klien & Komunikasi Selama Masa Investigasi',
        theory: 'Metode penanganan klien marah (LAST Model: Listen, Apologize, Solve, Thank), teknik meredam ancaman pemutusan kontrak, penyampaian laporan sementara (Interim Containment Report dalam 1x24 jam).',
        practical: 'Role-play simulasi dialog mediasi via telepon bersama Procurement Director klien yang sedang marah besar.'
      },
      {
        name: 'Modul 3: Prosedur Investigasi Teknis Retur Barang & Penyusunan Laporan Resmi CAPA / 8D',
        theory: 'Pengambilan sampel uji laboratorium, analisis penelusuran lot produksi (Traceability), perumusan tindakan korektif pencegahan berulang, penutupan komplain resmi dan kompensasi (Credit Note / Penggantian Barang).',
        practical: 'Penyusunan dokumen Laporan Investigasi Komplain Resmi (Formal Corrective Action Report) siap presentasi ke klien.'
      }
    ],
    equipment: [
      'Template Formulir Return Merchandise Authorization (RMA) & Log Registrasi Komplain.',
      'Format Standar Customer Complaint Investigation & CAPA Report (Format ISO 10002).',
      'Panduan Skrip Komunikasi De-Eskalasi Emosi Pelanggan Korporat.',
      'Template Surat Permohonan Maaf & Penjelasan Teknis Resmi Korporasi.'
    ],
    participants: [
      'Customer Service / Customer Care B2B, Quality Assurance (QA/QC) Manager, Technical Sales Engineer, Product Specialist, Production Manager, Logistics Head.'
    ],
    tableData: {
      headers: ['Tahapan Penanganan Komplain', 'Target Waktu Standar SLA', 'Penanggung Jawab Kunci', 'Output Dokumen Wajib'],
      rows: [
        ['1. Respon Awal & Penerbitan Tiket', 'Maksimal < 2 Jam Kerja', 'Customer Care / Sales Person', 'Bukti Tanda Terima Komplain & No. Tiket RMA'],
        ['2. Tindakan Penahanan Darurat (ICA)', 'Maksimal 1x24 Jam', 'QA Manager & Gudang', 'Laporan Pembendungan Stok / Stop Pengiriman'],
        ['3. Investigasi Akar Masalah Teknis', 'Maksimal 3 Hari Kerja', 'Tim Teknis Lintas Fungsi (CFT)', 'Laporan Analisis Fishbone / 5-Why Lab'],
        ['4. Pengiriman Laporan CAPA Resmi', 'Maksimal 5 Hari Kerja', 'QA Director / General Manager', 'Official 8D / CAPA Report Bertandatangan'],
        ['5. Evaluasi Kepuasan Pasca Solusi', '14 Hari Pasca Pengiriman Ulang', 'Key Account Manager', 'Survei Kepuasan Resolusi Komplain (CSAT)']
      ]
    },
    caseStudy: 'Sebuah pabrik kemasan fleksibel di Tangerang berhasil menyelamatkan kontrak senilai Rp 12 Miliar per tahun dengan produsen makanan multinasional setelah menangani insiden delaminasi plastik secara profesional menggunakan laporan 8D transparan dan penggantian stok dalam tempo 48 jam.',
    stepByStepGuide: [
      { step: '1. Penerimaan & Konfirmasi Kilat (Tiket RMA)', desc: 'Merespon email/telepon klien dalam waktu < 2 jam dengan nada empati dan memberikan nomor registrasi keluhan.' },
      { step: '2. Pengiriman Stok Pengganti Darurat', desc: 'Mengirimkan stok pengganti bebas cacat segera agar lini produksi pabrik klien tidak terhenti.' },
      { step: '3. Investigasi Sampel Retur di Laboratorium', desc: 'Memeriksa batch retain sample untuk menemukan akar penyebab kegagalan proses di pabrik.' },
      { step: '4. Presentasi Laporan CAPA & Tindakan Pencegahan', desc: 'Mempresentasikan dokumen tindakan korektif kepada tim mutu klien untuk menutup tiket komplain.' }
    ],
    links: [
      { href: '/kategori-pelatihan/service-excellence-b2b-manufaktur/', anchor: 'Service Excellence B2B' },
      { href: '/kategori-pelatihan/root-cause-analysis-rca-manufaktur/', anchor: 'Root Cause Analysis RCA' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 21. Supply Chain Operations Reference SCOR
  {
    key: 'supply-chain-operations-reference-scor',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/supply-chain-operations-reference-scor/',
    archetype: 'role',
    title: 'Pelatihan Optimasi Rantai Pasok Model SCOR (Supply Chain Operations Reference)',
    h1: 'Pelatihan Optimasi & Transformasi Rantai Pasok Menggunakan Kerangka Kerja SCOR (Supply Chain Operations Reference): Mengintegrasikan Plan, Source, Make, Deliver, Return, & Enable',
    meta: 'Pelatihan model SCOR rantai pasok: 6 proses SCOR, metrik kinerja perfect order fulfillment, cash-to-cash cycle time, gap analysis & benchmarking supply chain.',
    imgAlt: 'Supply chain director mempresentasikan diagram alir proses SCOR Model yang menghubungkan pemasok, pabrik manufaktur, dan jaringan distribusi',
    related: ['manajemen-gudang-wms-dan-inventory', 'teknik-negosiasi-dan-vendor-management', 'cost-reduction-program-lean-waste', 'k3-keselamatan-kerja'],
    intro: 'Model <strong>Supply Chain Operations Reference (SCOR)</strong> yang dikembangkan oleh Association for Supply Chain Management (ASCM / APICS) adalah bahasa standar dan kerangka kerja diagnosis rantai pasok paling diakui di dunia. Melalui integrasi proses bisnis, metrik kinerja terstandarisasi, dan praktik terbaik (Best Practices), model SCOR membantu korporasi membedah kelemahan rantai pasok dari hulu ke hilir dan meningkatkan keunggulan bersaing.',
    hazards: [
      '<strong>Efek Cambuk Rantai Pasok (Bullwhip Effect):</strong> Fluktuasi pesanan kecil di hilir memicu distorsi peramalan masif di hulu pabrik bahan baku.',
      '<strong>Siklus Perputaran Kas Lambat (Long Cash-to-Cash Cycle):</strong> Modal kerja perusahaan terpendam terlalu lama dalam bentuk persediaan dan piutang.',
      '<strong>Kegagalan Sinkronisasi Antar Departemen Supply Chain:</strong> Penjualan, Produksi, dan Pengadaan bekerja dengan data ramalan yang saling berbeda.',
      '<strong>Rendahnya Rasio Pemenuhan Pesanan Sempurna (Low Perfect Order):</strong> Barang terkirim salah jumlah, terlambat, atau dokumen faktur bermasalah.'
    ],
    regulations: [
      '<strong>Kerangka Kerja SCOR Digital Standard (ASCM / APICS Body of Knowledge)</strong>.',
      '<strong>Standar ISO 28000:2022</strong> (Security and Resilience - Supply Chain Management Systems).',
      '<strong>Standar Manajemen Logistik Nasional</strong>.'
    ],
    modules: [
      {
        name: 'Modul 1: Enam Proses Inti Model SCOR (Plan, Source, Make, Deliver, Return, Enable)',
        theory: 'Struktur hierarki proses SCOR (Level 1: Jenis Proses, Level 2: Kategori Proses Make-to-Stock/Make-to-Order/Engineer-to-Order, Level 3: Elemen Aktivitas Detail), pemetaan alur rantai pasok end-to-end.',
        practical: 'Penggambaran peta alur SCOR (SCOR Thread Diagram) untuk jaringan manufaktur dan distribusi korporat.'
      },
      {
        name: 'Modul 2: Lima Atribut Kinerja SCOR & Metrik Level 1 (Level 1 Metrics)',
        theory: 'Atribut Berorientasi Pelanggan: Reliability (Perfect Order Fulfillment / POF), Responsiveness (Order Fulfillment Cycle Time), Agility (Upside Supply Chain Flexibility). Atribut Berorientasi Internal: Cost (Total Cost to Serve), Asset Management (Cash-to-Cash Cycle Time / C2C).',
        practical: 'Latihan menghitung skor Perfect Order Fulfillment (POF %) dan Cash-to-Cash Cycle Time dari laporan keuangan perusahaan.'
      },
      {
        name: 'Modul 3: Benchmarking Rantai Pasok, Gap Analysis, & Implementasi Best Practices',
        theory: 'Membandingkan kinerja metrik SCOR perusahaan terhadap data benchmark industri (Parity, Advantage, Superior), identifikasi gap operasional, pemilihan Best Practices ASCM, penyusunan roadmap transformasi rantai pasok.',
        practical: 'Penyusunan dokumen Project Charter Transformasi Supply Chain berbasis gap analysis SCOR.'
      }
    ],
    equipment: [
      'Toolkit Pemetaan SCOR Thread Diagram & Process Flowchart.',
      'Master Template Spreadsheet Kalkulator Metrik SCOR Level 1 & Level 2.',
      'Tabel Data Benchmarking Kinerja Rantai Pasok Lintas Industri Global.',
      'Format Lembar Evaluasi Supply Chain Best Practices ASCM.'
    ],
    participants: [
      'Supply Chain Director / Manager, PPIC Head, Procurement Manager, Logistics & Distribution Manager, Operations Director, Plant Planning Specialist.'
    ],
    tableData: {
      headers: ['Atribut Kinerja SCOR', 'Metrik Kunci Level 1', 'Formula Perhitungan Matematis', 'Target Standar Kinerja Superior'],
      rows: [
        ['1. Reliability (Keandalan)', 'Perfect Order Fulfillment (POF %)', '(Pesanan Lengkap x Tepat Waktu x Bebas Cacat x Dokumen Benar / Total Pesanan) x 100%', '≥ 95.0% (Superior)'],
        ['2. Responsiveness (Kecepatan)', 'Order Fulfillment Cycle Time (Hari)', 'Total Hari dari Penempatan Pesanan hingga Barang Diterima Pelanggan', 'Memangkas Lead Time s.d. 50%'],
        ['3. Agility (Kelincahan)', 'Upside Supply Chain Adaptability', 'Jumlah Hari yang Dibutuhkan untuk Menaikkan Kapasitas Produksi +20%', 'Maksimal < 30 Hari'],
        ['4. Cost (Efisiensi Biaya)', 'Total Supply Chain Management Cost', 'Biaya (Plan + Source + Make + Deliver + Return) / Total Pendapatan Penjualan', '< 5% - 8% dari Total Omzet'],
        ['5. Asset Management (Aset)', 'Cash-to-Cash Cycle Time (C2C Hari)', 'Hari Piutang (DSO) + Hari Persediaan (DIO) - Hari Utang Usaha (DPO)', 'C2C < 30 - 45 Hari']
      ]
    },
    caseStudy: 'Sebuah perusahaan manufaktur barang konsumen (FMCG) nasional berhasil memangkas Cash-to-Cash Cycle Time dari 78 hari menjadi 42 hari dan menaikkan Perfect Order Fulfillment dari 81% menjadi 96.2% dalam 14 bulan setelah mengadopsi kerangka kerja SCOR Model.',
    stepByStepGuide: [
      { step: '1. Pemetaan Batas Ruang Lingkup Rantai Pasok', desc: 'Menentukan kategori produk dan segmen pelanggan yang akan dianalisis menggunakan diagram benang SCOR.' },
      { step: '2. Pengukuran Metrik Kinerja Level 1', desc: 'Mengumpulkan data aktual untuk menghitung skor POF, cycle time pengiriman, dan biaya operasional rantai pasok.' },
      { step: '3. Benchmarking & Analisis Kesenjangan (Gap)', desc: 'Membandingkan angka perusahaan dengan data benchmark industri untuk menemukan titik kelemahan kritis.' },
      { step: '4. Eksekusi Roadmap Transformasi SCOR', desc: 'Mengimplementasikan proyek perbaikan terintegrasi antara divisi PPIC, pengadaan, produksi, dan logistik.' }
    ],
    links: [
      { href: '/kategori-pelatihan/manajemen-gudang-wms-dan-inventory/', anchor: 'Manajemen Gudang & WMS' },
      { href: '/kategori-pelatihan/teknik-negosiasi-dan-vendor-management/', anchor: 'Teknik Negosiasi & Vendor Management' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 22. Internal Audit ISO 9001 2015
  {
    key: 'internal-audit-iso-9001-2015',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/internal-audit-iso-9001-2015/',
    archetype: 'role',
    title: 'Pelatihan Internal Audit ISO 9001:2015: Sistem Manajemen Mutu',
    h1: 'Pelatihan & Sertifikasi Internal Auditor Sistem Manajemen Mutu ISO 9001:2015: Berdasarkan Panduan Audit ISO 19011:2018',
    meta: 'Pelatihan internal audit ISO 9001:2015: teknik audit sistem manajemen mutu, risk-based thinking klausul 4-10, temuan NCR, audit checklist & sertifikat auditor.',
    imgAlt: 'Auditor internal ISO 9001:2015 memeriksa dokumen prosedur mutu dan mewawancarai staf operasional di ruang kontrol pabrik',
    related: ['internal-audit-iso-14001-2015', 'integrasi-qhse-45001-9001-14001', 'root-cause-analysis-rca-manufaktur', 'k3-keselamatan-kerja'],
    intro: 'Audit Internal Sistem Manajemen Mutu ISO 9001:2015 merupakan instrumen wajib yang diatur dalam klausul 9.2 untuk memastikan seluruh proses bisnis berjalan konsisten, mematuhi persyaratan standar, dan mendorong peningkatan berkelanjutan. Pelatihan <strong>Internal Audit ISO 9001:2015 (Sesuai Panduan ISO 19011:2018)</strong> membekali calon auditor internal dengan kompetensi menyusun rencana audit, teknik wawancara berbasis bukti objektif, serta penulisan laporan temuan ketidaksesuaian (NCR).',
    hazards: [
      '<strong>Sertifikat ISO 9001 Dibekukan oleh Badan Sertifikasi:</strong> Temuan Mayor berulang saat audit eksternal akibat audit internal yang tidak efektif.',
      '<strong>Audit Internal Hanya Bersifat Formalitas Checklist:</strong> Auditor hanya mencentang kertas tanpa memverifikasi efektivitas proses di lapangan.',
      '<strong>Penulisan Temuan Audit yang Lemah & Tidak Jelas:</strong> Auditee tidak memahami letak ketidaksesuaian sehingga tindakan korektif meleset.',
      '<strong>Konflik Personal Saat Pelaksanaan Audit:</strong> Auditor bersikap seperti polisi pemeriksa yang menimbulkan ketegangan antardepartemen.'
    ],
    regulations: [
      '<strong>Standar ISO 9001:2015</strong> (Quality Management Systems - Requirements).',
      '<strong>Standar ISO 19011:2018</strong> (Guidelines for Auditing Management Systems).',
      '<strong>Standar Akreditasi KAN (Komite Akreditasi Nasional)</strong>.'
    ],
    modules: [
      {
        name: 'Modul 1: Pemahaman Klausul 4 s.d. 10 ISO 9001:2015 Berbasis Risk-Based Thinking',
        theory: 'Klausul 4 (Konteks Organisasi & Analisis SWOT), Klausul 5 (Kepemimpinan), Klausul 6 (Manajemen Risiko Mutu), Klausul 7 (Dukungan & Sumber Daya), Klausul 8 (Operasional & Desain), Klausul 9 (Evaluasi Kinerja & Audit), Klausul 10 (Peningkatan & CAPA).',
        practical: 'Audit interpretasi klausul pada studi kasus bukti dokumen operasional manufaktur.'
      },
      {
        name: 'Modul 2: Metodologi Audit Berdasarkan ISO 19011:2018 & Penyusunan Audit Plan',
        theory: 'Prinsip audit (Integritas, Penyajian yang Adil, Kerahasiaan, Independensi, Pendekatan Berbasis Bukti), penyusunan Jadwal & Ruang Lingkup Audit (Audit Plan), pembuatan Lembar Kerja Audit Checklist.',
        practical: 'Penyusunan dokumen Audit Plan dan daftar pertanyaan audit (Audit Checklist) untuk Departemen Pembelian dan Produksi.'
      },
      {
        name: 'Modul 3: Pelaksanaan Audit di Lapangan, Penulisan Temuan NCR (PLOR), & Closing Meeting',
        theory: 'Teknik wawancara, observasi lapangan, sampling bukti catatan, penulisan temuan ketidaksesuaian metode PLOR (Problem, Location, Objective Evidence, Reference), klasifikasi temuan (Mayor, Minor, Opportunity for Improvement / OFI).',
        practical: 'Simulasi audit tatap muka (Audit Role-Play), penyusunan Laporan Temuan NCR, dan simulasi Rapat Penutupan (Closing Meeting).'
      }
    ],
    equipment: [
      'Format Master Audit Plan & Audit Schedule ISO 9001:2015.',
      'Checklist Audit Klausul 4 s.d. 10 Terstruktur Lengkap.',
      'Formulir Lembar Temuan Ketidaksesuaian (Non-Conformance Report / NCR).',
      'Format Laporan Akhir Audit Internal & Berita Acara Closing Meeting.'
    ],
    participants: [
      'Calon Auditor Internal ISO 9001, Quality Management Representative (QMR), Tim QA/QC, Kepala Departemen Operasional, HRD, Safety Officer.'
    ],
    tableData: {
      headers: ['Kategori Temuan Audit', 'Definisi Ketidaksesuaian', 'Dampak pada Sertifikasi ISO', 'Batas Waktu Penyelesaian CAPA'],
      rows: [
        ['Temuan Mayor (Major Non-Conformance)', 'Ketiadaan total prosedur wajib atau kegagalan sistemik yang membahayakan mutu produk', 'Dapat menggagalkan/membekukan sertifikat ISO', 'Maksimal 30 Hari Kerja'],
        ['Temuan Minor (Minor Non-Conformance)', 'Inkonsistensi pelaksanaan prosedur pada satu rekaman atau kelalaian administratif kecil', 'Tidak menggagalkan sertifikat, wajib diperbaiki', 'Maksimal 60 Hari Kerja'],
        ['Peluang Peningkatan (OFI / Observation)', 'Sistem sudah memenuhi standar tetapi berpotensi ditingkatkan efisiensinya', 'Saran perbaikan, tidak wajib diterbitkan NCR', 'Bahas dalam Rapat Tinjauan Manajemen'],
        ['Kesesuaian (Conformity)', 'Proses berjalan konsisten sesuai prosedur dan standar ISO 9001:2015', 'Kinerja mutu berjalan sangat baik', 'Pertahankan & Tingkatkan']
      ]
    },
    caseStudy: 'Sebuah pabrik fabrikasi baja di Cilegon berhasil mempertahankan sertifikasi ISO 9001:2015 tanpa satu pun temuan Mayor dari auditor eksternal setelah tim auditor internalnya dilatih melakukan audit berbasis risiko dan penulisan NCR metode PLOR.',
    stepByStepGuide: [
      { step: '1. Penyusunan Audit Plan & Jadwal Resmi', desc: 'Menetapkan tim auditor independen (tidak mengaudit departemen sendiri) dan membagikan jadwal audit ke seluruh divisi.' },
      { step: '2. Pembuatan Daftar Pertanyaan (Audit Checklist)', desc: 'Menyusun checklist pertanyaan spesifik yang mengaitkan klausul ISO 9001 dengan SOP internal divisi.' },
      { step: '3. Pelaksanaan Audit Lapangan & Verifikasi Bukti', desc: 'Mewawancarai auditee, memeriksa sampel rekaman, dan mengamati proses kerja aktual di lantai pabrik.' },
      { step: '4. Closing Meeting & Pemantauan Tindakan Korektif', desc: 'Mempresentasikan temuan audit dalam rapat penutupan bersama manajemen dan memverifikasi efektivitas perbaikan CAPA.' }
    ],
    links: [
      { href: '/kategori-pelatihan/internal-audit-iso-14001-2015/', anchor: 'Internal Audit ISO 14001' },
      { href: '/kategori-pelatihan/integrasi-qhse-45001-9001-14001/', anchor: 'Integrasi QHSE ISO Terpadu' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 23. Internal Audit ISO 14001 2015
  {
    key: 'internal-audit-iso-14001-2015',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/internal-audit-iso-14001-2015/',
    archetype: 'role',
    title: 'Pelatihan Internal Audit ISO 14001:2015: Sistem Manajemen Lingkungan',
    h1: 'Pelatihan & Sertifikasi Internal Auditor Sistem Manajemen Lingkungan ISO 14001:2015: Identifikasi Aspek Dampak Lingkungan (IADL) & Kepatuhan Regulasi Lingkungan Hidup',
    meta: 'Pelatihan internal audit ISO 14001:2015: audit sistem manajemen lingkungan, identifikasi aspek dampak lingkungan IADL, kepatuhan PP 22/2021 & sertifikat auditor.',
    imgAlt: 'Auditor internal ISO 14001 memeriksa sistem pengolahan air limbah IPAL dan parameter baku mutu emisi cerobong di area utilitas pabrik',
    related: ['pengelolaan-limbah-b3-perusahaan', 'internal-audit-iso-9001-2015', 'integrasi-qhse-45001-9001-14001', 'k3-keselamatan-kerja'],
    intro: 'Kelestarian lingkungan hidup dan kepatuhan terhadap peraturan perundangan lingkungan (Environmental Compliance) merupakan pilar keberlanjutan bisnis korporasi modern. Standar <strong>ISO 14001:2015</strong> mewajibkan organisasi mengidentifikasi aspek lingkungan signifikan, mengendalikan dampak pencemaran, dan melaksanakan audit internal berkala sesuai panduan ISO 19011:2018 untuk mencegah sanksi hukum pencemaran lingkungan hidup.',
    hazards: [
      '<strong>Sanksi Pidana & Denda Pencemaran Lingkungan:</strong> Kebocoran limbah B3 atau buangan air limbah melebihi baku mutu lingkungan hidup.',
      '<strong>Penutupan Saluran Pembuangan oleh Pejabat KLHK:</strong> Tidak terpenuhinya persetujuan teknis baku mutu emisi dan air limbah.',
      '<strong>Gagal Lolos Audit Sertifikasi ISO 14001:</strong> Dokumen Identifikasi Aspek Dampak Lingkungan (IADL) tidak diperbarui saat ada proses baru.',
      '<strong>Penilaian PROPER Merah / Hitam dari Kementerian LHK:</strong> Reputasi korporasi hancur akibat pengelolaan limbah pabrik yang buruk.'
    ],
    regulations: [
      '<strong>Standar ISO 14001:2015</strong> (Environmental Management Systems - Requirements).',
      '<strong>PP No. 22 Tahun 2021</strong> tentang Penyelenggaraan Perlindungan dan Pengelolaan Lingkungan Hidup.',
      '<strong>UU No. 32 Tahun 2009</strong> tentang Perlindungan dan Pengelolaan Lingkungan Hidup.'
    ],
    modules: [
      {
        name: 'Modul 1: Pemahaman Klausul 4 s.d. 10 ISO 14001:2015 & Pendekatan Life Cycle Perspective',
        theory: 'Perspektif Siklus Hidup (Life Cycle Perspective: Pengadaan Bahan -> Proses -> Penggunaan -> Pembuangan Akhir), Klausul 6.1.2 (Aspek Lingkungan), Klausul 6.1.3 (Kewajiban Kepatuhan Hukum), Klausul 8.2 (Kesiapsiagaan Tanggap Darurat Lingkungan).',
        practical: 'Audit penyusunan Matriks Identifikasi Aspek dan Dampak Lingkungan (IADL) pada area proses produksi.'
      },
      {
        name: 'Modul 2: Evaluasi Kepatuhan Peraturan Lingkungan Hidup (Environmental Legal Register)',
        theory: 'Pemeriksaan kepatuhan perizinan lingkungan (AMDAL/UKL-UPL, Persetujuan Teknis Air Limbah, Emisi Udara, TPS Limbah B3), pelaporan SIMPEL & FESTA KLHK, baku mutu air limbah & cerobong.',
        practical: 'Penyusunan checklist evaluasi kepatuhan hukum lingkungan dan audit silang hasil uji laboratorium lingkungan.'
      },
      {
        name: 'Modul 3: Pelaksanaan Audit Lapangan ISO 14001, Penulisan NCR Lingkungan, & CAPA',
        theory: 'Teknik sampling audit di area IPAL, TPS Limbah B3, cerobong boiler, dan drainase air hujan, penulisan temuan ketidaksesuaian lingkungan, audit tindak lanjut CAPA pencegahan pencemaran.',
        practical: 'Simulasi audit lapangan di area TPS Limbah B3 dan penyusunan Lembar Laporan Temuan NCR Lingkungan.'
      }
    ],
    equipment: [
      'Format Master Matriks Identifikasi Aspek & Dampak Lingkungan (IADL Matrix).',
      'Checklist Audit Klausul ISO 14001:2015 & Daftar Peraturan Lingkungan Hidup.',
      'Formulir Temuan Ketidaksesuaian Lingkungan (Environmental NCR Form).',
      'Panduan Audit Kesiapsiagaan Tanggap Darurat Tumpahan Bahan Kimia B3.'
    ],
    participants: [
      'Auditor Internal Lingkungan, Environment Officer / HSE Officer, Penanggung Jawab Pengendalian Pencemaran Air/Udara (PPPA/POPU), Facility Manager.'
    ],
    tableData: {
      headers: ['Aspek Lingkungan (Penyebab)', 'Dampak Lingkungan (Akibat)', 'Kewajiban Pengendalian Standar', 'Regulasi Acuan'],
      rows: [
        ['Pembuangan Air Limbah Produksi', 'Pencemaran badan air sungai & kematian biota air', 'Pengolahan IPAL harian, uji lab berkala di bawah baku mutu', 'Permen LHK Baku Mutu Air'],
        ['Emisi Gas Buang Cerobong Boiler', 'Pencemaran udara ambien & hujan asam (SOx/NOx)', 'Pemasangan dust collector / scrubber, uji emisi semesteran', 'Permen LHK No. 11/2021'],
        ['Penyimpanan Oli Bekas & Majun', 'Kontaminasi tanah & potensi kebakaran TPS', 'Penyimpanan di TPS Limbah B3 berizin, manifest FESTA', 'PP No. 22 Tahun 2021'],
        ['Penggunaan Energi Listrik & Solar', 'Pengurasan sumber daya alam & emisi gas rumah kaca', 'Program konservasi energi, monitoring Specific Energy Ratio', 'ISO 50001 & Efisiensi Energi']
      ]
    },
    caseStudy: 'Sebuah pabrik tekstil di Solo berhasil lolos audit sertifikasi ISO 14001:2015 dan meraih peringkat PROPER Biru dari KLHK setelah auditor internalnya secara konsisten mengaudit operasional IPAL dan pemenuhan baku mutu air limbah.',
    stepByStepGuide: [
      { step: '1. Pemutakhiran Matriks Aspek Dampak (IADL)', desc: 'Menilai ulang seluruh aspek lingkungan signifikan di setiap departemen dan memperbarui daftar regulasi lingkungan.' },
      { step: '2. Penyusunan Jadwal & Tim Audit Lingkungan', desc: 'Menyusun rencana audit internal lingkungan yang mencakup area IPAL, TPS B3, cerobong, dan fasilitas umum.' },
      { step: '3. Pelaksanaan Audit Lapangan & Uji Lab', desc: 'Memeriksa bukti fisik perizinan, manifest limbah B3, logbook IPAL, dan hasil riksa uji lab lingkungan.' },
      { step: '4. Pelaporan Temuan & Rapat Tinjauan Manajemen', desc: 'Melaporkan temuan ketidaksesuaian lingkungan kepada Direksi dan memastikan penyelesaian tindakan korektif.' }
    ],
    links: [
      { href: '/kategori-pelatihan/pengelolaan-limbah-b3-perusahaan/', anchor: 'Pengelolaan Limbah B3 Perusahaan' },
      { href: '/kategori-pelatihan/integrasi-qhse-45001-9001-14001/', anchor: 'Integrasi QHSE ISO Terpadu' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 24. Integrasi QHSE 45001 9001 14001
  {
    key: 'integrasi-qhse-45001-9001-14001',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/integrasi-qhse-45001-9001-14001/',
    archetype: 'role',
    title: 'Pelatihan Integrasi Sistem Manajemen QHSE (ISO 9001, 14001, & 45001)',
    h1: 'Pelatihan Integrasi Sistem Manajemen Mutu, Lingkungan, & K3 (Integrated Management System QHSE / IMS): ISO 9001:2015, ISO 14001:2015, & ISO 45001:2018',
    meta: 'Pelatihan integrasi QHSE ISO 9001 14001 45001: struktur High Level Structure HLS, manual integrasi QHSE, audit gabungan terpadu & efisiensi dokumentasi.',
    imgAlt: 'Tim manajemen QHSE menyusun manual sistem manajemen integrasi terpadu Mutu, Lingkungan, dan Keselamatan Kerja pada ruang rapat korporat',
    related: ['internal-audit-iso-9001-2015', 'internal-audit-iso-14001-2015', 'panduan-audit-smk3-pp-50-2012', 'k3-keselamatan-kerja'],
    intro: 'Menjalankan tiga sistem manajemen terpisah (ISO 9001 untuk Mutu, ISO 14001 untuk Lingkungan, dan ISO 45001 untuk K3) seringkali memicu duplikasi dokumen yang membebani karyawan, audit berulang-ulang yang menyita waktu, serta pemborosan biaya sertifikasi. <strong>Sistem Manajemen Terpadu (Integrated Management System - QHSE)</strong> memanfaatkan kesamaan kerangka kerja <em>High Level Structure (Annex SL)</em> untuk menyatukan ketiga standar menjadi satu sistem manajemen tunggal yang ramping, efisien, dan bertenaga.',
    hazards: [
      '<strong>Duplikasi Dokumen & Birokrasi Melelahkan (Document Bloat):</strong> Karyawan harus mengisi 3 formulir berbeda untuk satu aktivitas operasional yang sama.',
      '<strong>Pemborosan Biaya Audit Sertifikasi Terpisah:</strong> Perusahaan membayar 3 kali biaya audit eksternal dari badan sertifikasi independen.',
      '<strong>Ketidaksinkronan Kebijakan Manajemen:</strong> Target mutu bertentangan dengan target keselamatan atau target perlindungan lingkungan.',
      '<strong>Kelelahan Audit bagi Tim Operasional (Audit Fatigue):</strong> Setiap bulan departemen operasional sibuk melayani tim audit yang berbeda-beda.'
    ],
    regulations: [
      '<strong>High Level Structure (Annex SL / ISO Harmonized Structure)</strong>.',
      '<strong>ISO 9001:2015 (Quality), ISO 14001:2015 (Environment), ISO 45001:2018 (OH&S)</strong>.',
      '<strong>PP No. 50 Tahun 2012</strong> tentang Penerapan SMK3.'
    ],
    modules: [
      {
        name: 'Modul 1: Harmonisasi High Level Structure (HLS) & Matriks Integrasi Klausul',
        theory: 'Membedah 10 klausul bersama Annex SL, mengintegrasikan Kebijakan QHSE Tunggal, manajemen risiko terpadu (Kualitas Mutu, Aspek Dampak Lingkungan, Bahaya HIRADC K3), penentuan konteks organisasi terpadu.',
        practical: 'Penyusunan Kebijakan Terpadu QHSE (Integrated QHSE Policy) bertandatangan Direktur Utama.'
      },
      {
        name: 'Modul 2: Perampingan Manual, Prosedur Terpadu, & Form Operasional Gabungan',
        theory: 'Strategi merger SOP: Pengendalian Dokumen Terpadu, Manajemen Perubahan (MOC), Tanggap Darurat Terpadu (ERP), Investigasi Insiden & Ketidaksesuaian Terpadu (CAPA), Tinjauan Manajemen Bersama.',
        practical: 'Praktik merampingkan 15 SOP terpisah menjadi 5 SOP terintegrasi QHSE yang siap diimplementasikan.'
      },
      {
        name: 'Modul 3: Pelaksanaan Audit Internal Terpadu (Integrated Internal Audit) Sesuai ISO 19011',
        theory: 'Penyusunan jadwal audit gabungan 3 standar sekaligus, teknik bertanya multi-klausul (Mutu, Lingkungan, K3 dalam 1 sesi wawancara), penulisan temuan audit terpadu.',
        practical: 'Simulasi audit internal terpadu di area gudang bahan baku dan penyusunan Laporan Audit Terintegrasi QHSE.'
      }
    ],
    equipment: [
      'Master Matriks Korelasi & Integrasi Klausul ISO 9001 - ISO 14001 - ISO 45001.',
      'Template Manual Sistem Manajemen Terpadu (Integrated QHSE Manual).',
      'Set Prosedur Operasional Terpadu (SOP Integrasi QHSE Siap Pakai).',
      'Checklist Audit Internal Terpadu (Integrated Audit Checklist).'
    ],
    participants: [
      'QHSE Director / Manager, Integrated Management Representative (IMR), Lead Auditor Internal, Safety Officer, Quality Manager, Environment Specialist.'
    ],
    tableData: {
      headers: ['Klausul Standar ISO (HLS)', 'Fokus ISO 9001 (Mutu)', 'Fokus ISO 14001 (Lingkungan)', 'Fokus ISO 45001 (K3)', 'Bentuk Integrasi Terpadu (IMS)'],
      rows: [
        ['Klausul 5: Kepemimpinan', 'Fokus pada kepuasan pelanggan', 'Fokus pencegahan pencemaran', 'Fokus partisipasi pekerja & K3', '1 Kebijakan QHSE & 1 Struktur Komite Terpadu'],
        ['Klausul 6: Manajemen Risiko', 'Risiko kegagalan mutu produk', 'Aspek dampak lingkungan (IADL)', 'Identifikasi bahaya risiko K3 (HIRADC)', '1 Matriks Penilaian Risiko Terpadu (QHSE Risk Matrix)'],
        ['Klausul 8: Pengendalian Operasi', 'Standar proses produksi bebas cacat', 'Baku mutu limbah & cerobong', 'Izin kerja aman (PTW) & LOTO', 'SOP Kerja Terpadu (Quality + Safety + Green SOP)'],
        ['Klausul 9: Audit Internal', 'Audit kepatuhan sistem mutu', 'Audit kepatuhan lingkungan', 'Audit kepatuhan keselamatan', '1 Kali Audit Gabungan Terpadu Tahunan']
      ]
    },
    caseStudy: 'Sebuah korporasi logistik dan galangan kapal di Batam berhasil memangkas jumlah dokumen SOP dari 120 menjadi hanya 45 SOP dan menghemat biaya audit sertifikasi tahunan sebesar Rp 350 Juta setelah mengintegrasikan ISO 9001, 14001, dan 45001 ke dalam satu sistem terpadu.',
    stepByStepGuide: [
      { step: '1. Pemetaan Gap Analysis Tiga Standar', desc: 'Membandingkan dokumen ISO yang sudah ada dan memetakan bagian-bagian yang tumpang tindih.' },
      { step: '2. Perumusan Kebijakan & Manual QHSE Tunggal', desc: 'Menyusun komitmen terintegrasi yang disahkan pimpinan puncak dan menggabungkan manual sistem.' },
      { step: '3. Perampingan SOP & Formulir Lapangan', desc: 'Menggabungkan prosedur tanggap darurat, audit, dan tindakan perbaikan menjadi formulir tunggal.' },
      { step: '4. Eksekusi Audit Terpadu & Tinjauan Manajemen', desc: 'Menyelenggarakan 1 kali audit internal gabungan dan rapat tinjauan manajemen bersama seluruh direksi.' }
    ],
    links: [
      { href: '/kategori-pelatihan/internal-audit-iso-9001-2015/', anchor: 'Internal Audit ISO 9001' },
      { href: '/kategori-pelatihan/internal-audit-iso-14001-2015/', anchor: 'Internal Audit ISO 14001' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 25. Sistem Keamanan Pangan HACCP ISO 22000
  {
    key: 'sistem-keamanan-pangan-haccp-iso-22000',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/sistem-keamanan-pangan-haccp-iso-22000/',
    archetype: 'role',
    title: 'Pelatihan Keamanan Pangan HACCP & ISO 22000:2018 Industri Makanan',
    h1: 'Pelatihan Sistem Manajemen Keamanan Pangan: Implementasi 7 Prinsip HACCP, Program Persyaratan Dasar (PRP), & Standar ISO 22000:2018 untuk Industri Makanan dan Minuman',
    meta: 'Pelatihan HACCP dan ISO 22000: 7 prinsip HACCP makanan, penentuan Titik Kendali Kritis CCP, Program Persyaratan Dasar PRP, audit keamanan pangan BPOM.',
    imgAlt: 'Tim Quality Assurance industri makanan dan minuman memeriksa suhu pasteurisasi dan mencatat parameter pada Titik Kendali Kritis CCP',
    related: ['internal-audit-iso-9001-2015', 'integrasi-qhse-45001-9001-14001', 'penerapan-5s-5r-kaizen-manufaktur', 'k3-keselamatan-kerja'],
    intro: 'Keamanan Pangan (Food Safety) adalah komitmen tanpa kompromi bagi setiap produsen makanan, minuman, katering, dan rantai pasok pangan. Kontaminasi bahaya biologi (bakteri Salmonella/E. Coli), kimia (residu pestisida/alergen), atau fisik (pecahan kaca/serpihan logam) dapat memicu keracunan massal, penarikan produk dari pasar (Product Recall), dan tuntutan pidana. Standar <strong>HACCP (Hazard Analysis and Critical Control Points) & ISO 22000:2018</strong> adalah sistem preventif global terdepan untuk menjamin keamanan pangan dari ladang hingga meja makan.',
    hazards: [
      '<strong>Wabah Keracunan Makanan Massal (Food Poisoning Outbreak):</strong> Kegagalan proses pasteurisasi/sterilisasi yang meloloskan bakteri patogen ke konsumen.',
      '<strong>Penarikan Produk Massal dari Pasar (Costly Product Recall):</strong> Ditemukan serpihan logam dalam produk jadi akibat kerusakan saringan mesin.',
      '<strong>Sanksi Pencabutan Izin Edar BPOM & Pidana UU Pangan:</strong> Produk beredar tidak memenuhi standar keamanan pangan yang membahayakan nyawa.',
      '<strong>Kontaminasi Silang Alergen (Cross-Contamination):</strong> Produk bebas gluten terkontaminasi tepung terigu karena ketiadaan sanitasi pembersih lini.'
    ],
    regulations: [
      '<strong>Standar ISO 22000:2018</strong> (Food Safety Management Systems - Requirements for any Organization in the Food Chain).',
      '<strong>Standar Codex Alimentarius Commission (CAC/RCP 1-1969 Rev 2020)</strong> tentang General Principles of Food Hygiene.',
      '<strong>UU No. 18 Tahun 2012</strong> tentang Pangan & Peraturan BPOM tentang Cara Produksi Pangan Olahan yang Baik (CPPOB/GMP).'
    ],
    modules: [
      {
        name: 'Modul 1: Program Persyaratan Dasar (Prerequisite Programmes / PRP / GMP)',
        theory: 'Standar Good Manufacturing Practices (GMP/CPPOB), sanitasi bangunan dan fasilitas (SSOP), pengendalian hama terpadu (Pest Control), kebersihan personal (Personal Hygiene karyawan), pencegahan kontaminasi silang alergen.',
        practical: 'Audit kelayakan fasilitas cuci tangan otomatis, footbath sanitasi, dan sistem zonasi ruang bersih (High Care / Low Care Area).'
      },
      {
        name: 'Modul 2: Dua Belas Tahapan HACCP & Tujuh Prinsip Keamanan Pangan (The 7 HACCP Principles)',
        theory: '12 langkah HACCP (5 langkah persiapan + 7 prinsip), analisis bahaya fisik/kimia/biologi, penetapan Titik Kendali Kritis (Critical Control Points / CCP) menggunakan Decision Tree, penetapan Batas Kritis (Critical Limits), sistem monitoring CCP.',
        practical: 'Praktik penggunaan Pohon Keputusan (CCP Decision Tree) untuk menentukan apakah proses pasteurisasi susu atau detektor logam merupakan CCP.'
      },
      {
        name: 'Modul 3: Tindakan Koreksi CCP, Verifikasi Sistem, & Audit Standar ISO 22000:2018',
        theory: 'Prosedur tindakan koreksi jika batas kritis terlampaui, prosedur pelepasan produk tahanan (Hold & Release), kalibrasi termometer & metal detector, simulasi penarikan produk (Mock Recall).',
        practical: 'Gelar simulasi uji coba penarikan produk (Mock Recall Test) dalam waktu 2 jam dan penyusunan HACCP Plan Master Document.'
      }
    ],
    equipment: [
      'Metal Detector Test Pieces Terstandarisasi (Ferrous, Non-Ferrous, Stainless Steel 316).',
      'Digital Core Thermometer & Data Logger Suhu Terkalibrasi.',
      'Formulir HACCP Plan Master Matrix & Decision Tree Worksheet.',
      'Template SOP Pemantauan Titik Kendali Kritis (CCP Monitoring Logs).'
    ],
    participants: [
      'Tim Keamanan Pangan (Food Safety Team Leader / Anggota HACCP), Quality Control (QC/QA) Industri Mamin, R&D Pangan, Chef / Manajer Katering, Hygiene Officer Hotel.'
    ],
    tableData: {
      headers: ['Tujuh Prinsip HACCP', 'Fokus Aktivitas Kunci', 'Contoh Kasus Pabrik Makanan', 'Dokumen Bukti Rekaman'],
      rows: [
        ['Prinsip 1: Analisis Bahaya', 'Identifikasi bahaya biologi, kimia, & fisik', 'Menganalisis bahaya spora Clostridium botulinum', 'Hazard Analysis Worksheet'],
        ['Prinsip 2: Penentuan CCP', 'Menentukan titik kendali kritis menggunakan Decision Tree', 'Proses Pemanasan Retort dinyatakan sebagai CCP 1', 'CCP Determination Table'],
        ['Prinsip 3: Batas Kritis (Critical Limit)', 'Menetapkan parameter batas aman mutlak (suhu/waktu)', 'Suhu pemanasan minimal 121.1°C selama 15 menit', 'Daftar Batas Kritis Resmi'],
        ['Prinsip 4: Monitoring CCP', 'Memantau parameter secara kontinu di setiap batch', 'Pencatatan suhu otomatis sensor chart recorder', 'Logbook Monitoring CCP Harian'],
        ['Prinsip 5: Tindakan Koreksi', 'Tindakan cepat jika batas kritis terlampaui', 'Tahan produk batch tersebut & panaskan ulang', 'Formulir Tindakan Koreksi CCP'],
        ['Prinsip 6: Verifikasi Sistem', 'Pengujian lab produk akhir & kalibrasi sensor', 'Uji mikrobiologi berkala & kalibrasi termometer', 'Laporan Hasil Uji Lab Terakreditasi'],
        ['Prinsip 7: Dokumentasi & Rekaman', 'Menyimpan seluruh catatan bukti kendali mutu', 'Penyimpanan rekaman CCP minimal 2 tahun', 'Buku Manual HACCP & Logbook']
      ]
    },
    caseStudy: 'Sebuah produsen minuman sari buah di Pasuruan berhasil meraih sertifikasi ISO 22000:2018 dan menembus pasar ekspor ke Australia setelah mengimplementasikan 7 prinsip HACCP dan sistem pemantauan otomatis CCP suhu pasteurisasi.',
    stepByStepGuide: [
      { step: '1. Pembentukan Tim HACCP & Deskripsi Produk', desc: 'Membentuk tim lintas disiplin dan menyusun spesifikasi bahan baku, proses, dan target konsumen.' },
      { step: '2. Penyusunan & Verifikasi Diagram Alir Proses', desc: 'Menggambar peta alur produksi dari penerimaan hingga pengemasan dan memverifikasinya di lantai pabrik.' },
      { step: '3. Analisis Bahaya & Penetapan CCP', desc: 'Mengidentifikasi potensi kontaminasi dan menetapkan titik kendali kritis serta batas toleransi aman.' },
      { step: '4. Pelaksanaan Monitoring & Uji Mock Recall', desc: 'Mencatat parameter CCP pada setiap batch dan menyelenggarakan latihan simulasi penarikan produk berkala.' }
    ],
    links: [
      { href: '/kategori-pelatihan/internal-audit-iso-9001-2015/', anchor: 'Internal Audit ISO 9001' },
      { href: '/kategori-pelatihan/integrasi-qhse-45001-9001-14001/', anchor: 'Integrasi QHSE Terpadu' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  }
];
