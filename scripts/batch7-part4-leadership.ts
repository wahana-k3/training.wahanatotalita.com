import { MultiArchetypeProgramDetail } from './multi-archetype-renderer';

export const batch7LeadershipPages: MultiArchetypeProgramDetail[] = [
  // 1. Pelatihan Supervisory Skills Pabrik
  {
    key: 'pelatihan-supervisory-skills-pabrik',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/pelatihan-supervisory-skills-pabrik/',
    archetype: 'role',
    title: 'Pelatihan Supervisory Skills Pabrik: Kepemimpinan Mandor & Supervisor Manufaktur',
    h1: 'Pelatihan Kepemimpinan Operasional & Supervisory Skills Mandor / Supervisor Pabrik: Dari Operator Menjadi Pemimpin Lini Produksi yang Tangguh',
    meta: 'Pelatihan supervisory skills pabrik: kepemimpinan supervisor manufaktur, manajemen shift, delegasi kerja, komunikasi subordinat, KPI & resolusi konflik lini.',
    imgAlt: 'Supervisor pabrik memimpin rapat briefing shift pagi di hadapan operator lini produksi manufaktur otomotif',
    related: ['penerapan-5s-5r-kaizen-manufaktur', 'coaching-dan-mentoring-grow-model', 'komunikasi-asertif-dan-serikat-pekerja', 'k3-keselamatan-kerja'],
    intro: 'Supervisor dan Mandor (Frontline Leaders) adalah jembatan paling krusial antara visi strategis manajemen puncak dengan realitas eksekusi di lantai pabrik (shopfloor). Banyak supervisor handal secara teknis namun kesulitan memimpin manusia, mendelegasikan tugas, mengelola konflik shift, dan menjaga disiplin target KPI. Pelatihan <strong>Supervisory Skills Manufaktur</strong> mentransformasi mindset operator teknis menjadi pemimpin lapangan yang disegani, solutif, dan berorientasi hasil.',
    hazards: [
      '<strong>Kegagalan Mencapai Target Output Shift (Production Bottleneck):</strong> Supervisor turun tangan bekerja sendiri karena tidak mampu mendelegasikan tugas.',
      '<strong>Tingginya Angka Turnover & Absensi Operator:</strong> Gaya kepemimpinan otoriter arogan yang memicu demotivasi dan konflik di lantai produksi.',
      '<strong>Miskomunikasi Instruksi Kerja Antar Shift (Shift Handover Miss):</strong> Catatan mesin rusak atau target reject tidak tersampaikan ke shift berikutnya.',
      '<strong>Toleransi Pelanggaran Keselamatan K3:</strong> Supervisor membiarkan operator membypass sensor pengaman demi mengejar target kecepatan produksi.'
    ],
    regulations: [
      '<strong>Standar Kompetensi Kerja Nasional Indonesia (SKKNI) Bidang Manajemen Sumber Daya Manusia</strong>.',
      '<strong>UU No. 13 Tahun 2003</strong> tentang Ketenagakerjaan (Hubungan Kerja & Pengawasan).',
      '<strong>PP No. 50 Tahun 2012</strong> tentang Penerapan SMK3 (Komitmen Kepemimpinan Pengawas).'
    ],
    modules: [
      {
        name: 'Modul 1: Pergeseran Mindset: Dari Doer (Pekerja Teknis) Menuju Leader (Pemimpin Tim)',
        theory: 'Peran dan fungsi 4M (Man, Machine, Material, Method), transisi psikologis dari rekan kerja menjadi atasan, 3 pilar wibawa supervisor (Kompetensi, Integritas, Empati).',
        practical: 'Asesmen gaya kepemimpinan pribadi (Situational Leadership) dan pemetaan dinamika tim shift.'
      },
      {
        name: 'Modul 2: Teknik Komunikasi Instruksi Kerja, Delegasi Efektif, & Manajemen Konflik Lini',
        theory: 'Prinsip SMART delegation, teknik 1-on-1 feedback tanpa menyerang personal, seni menangani operator senior yang membangkang, resolusi friksi antar departemen.',
        practical: 'Role-play simulasi penanganan operator bermasalah indisipliner dan teknik briefing pergantian shift (Daily Standup Meeting).'
      },
      {
        name: 'Modul 3: Manajemen Kinerja Shift (QCDSM), Problem Solving di Gemba, & Budaya K3',
        theory: 'Pengendalian pilar QCDSM (Quality, Cost, Delivery, Safety, Morale), teknik problem solving cepat di lantai kerja (5-Why di Gemba), penegakan Stop Work Authority.',
        practical: 'Penyusunan papan visual manajemen shift (Visual Management Board) dan simulasi pembuatan Daily Shift Report.'
      }
    ],
    equipment: [
      'Formulir Asesmen Gaya Kepemimpinan Situasional Hersey-Blanchard.',
      'Template Daily Shift Handover Log & Papan Visual KPI Produksi.',
      'Format Lembar Evaluasi Kinerja Operator (1-on-1 Feedback Form).',
      'Modul Studi Kasus Dinamika Konflik Lapangan Manufaktur Riil.'
    ],
    participants: [
      'Supervisor Produksi / Maintenance / Warehouse, Mandor Lapangan (Foreman), Team Leader Lini Perakitan, Calon Supervisor (Management Trainee), Section Head.'
    ],
    tableData: {
      headers: ['Pilar Kepemimpinan Supervisor', 'Kompetensi Kritis yang Dibangun', 'Dampak pada Produktivitas Shift', 'Metode Evaluasi'],
      rows: [
        ['Managing People (Manajemen Tim)', 'Komunikasi asertif, delegasi, resolusi konflik operator', 'Menurunkan angka absensi & turnover operator hingga 40%', 'Survei Morale Tim'],
        ['Managing Process (Manajemen Operasi)', 'Pengendalian OEE mesin, eliminasi bottleneck, 5S Gemba', 'Mencapai target output shift 98-100% on-time delivery', 'Daily Production Report'],
        ['Managing Quality (Kualitas Kerja)', 'Disiplin SOP standar kerja, deteksi cacat di awal proses', 'Menurunkan tingkat scrap reject produk hingga 50%', 'Quality Defect Matrix'],
        ['Managing Safety (Keselamatan K3)', 'Pelaksanaan toolbox talk harian, inspeksi unsafe act', 'Mencapai Zero Lost Time Injury (LTI) di area shift', 'LTI Safety Statistics']
      ]
    },
    caseStudy: 'Sebuah pabrik komponen otomotif di Karawang mencatatkan kenaikan efisiensi lini sebesar 22% dan penurunan scrap reject 35% setelah 45 orang supervisor dan foreman-nya mengikuti program pelatihan Supervisory Skills intensif.',
    stepByStepGuide: [
      { step: '1. Diagnosa Gap Kepemimpinan Lapangan', desc: 'Melakukan survei iklim kerja subordinat dan asesmen kompetensi manajerial supervisor.' },
      { step: '2. Workshop Interaktif & Role-Play Kasus', desc: 'Melatih teknik komunikasi instruksi kerja, coaching operator, dan simulasi penanganan konflik.' },
      { step: '3. Implementasi Proyek Perbaikan Shift (Gemba Project)', desc: 'Setiap supervisor menjalankan 1 proyek perbaikan bottleneck di lini kerjanya selama 1 bulan.' },
      { step: '4. Evaluasi Hasil KPI & Sertifikat Kelulusan', desc: 'Presentasi hasil pencapaian KPI proyek di hadapan Manajer Pabrik dan penyerahan sertifikat.' }
    ],
    links: [
      { href: '/kategori-pelatihan/penerapan-5s-5r-kaizen-manufaktur/', anchor: 'Penerapan 5S 5R & Kaizen' },
      { href: '/kategori-pelatihan/coaching-dan-mentoring-grow-model/', anchor: 'Pelatihan Coaching GROW Model' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 2. Penerapan 5S 5R Kaizen Manufaktur
  {
    key: 'penerapan-5s-5r-kaizen-manufaktur',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/penerapan-5s-5r-kaizen-manufaktur/',
    archetype: 'role',
    title: 'Pelatihan Penerapan 5S / 5R & Budaya Kaizen Manufaktur',
    h1: 'Pelatihan Implementasi 5S / 5R (Ringkas, Rapi, Resik, Rawat, Rajin) & Budaya Continuous Improvement (Kaizen) di Lantai Pabrik dan Perkantoran',
    meta: 'Pelatihan 5S 5R dan Kaizen: implementasi Seiri Seiton Seiso Seiketsu Shitsuke, red tag strategy, shadow board perkakas, audit 5S & efisiensi lean pabrik.',
    imgAlt: 'Tim continuous improvement pabrik menempelkan Red Tag pada barang tidak terpakai dan menata shadow board perkakas kerja di workshop',
    related: ['pelatihan-supervisory-skills-pabrik', 'total-productive-maintenance-tpm-oee', 'cost-reduction-program-lean-waste', 'k3-keselamatan-kerja'],
    intro: 'Metodologi 5S / 5R (Seiri-Ringkas, Seiton-Rapi, Seiso-Resik, Seiketsu-Rawat, Shitsuke-Rajin) yang dipadukan dengan filosofi perbaikan berkelanjutan (Kaizen) adalah pondasi mutlak dari sistem manufaktur kelas dunia (World-Class Manufacturing). Tempat kerja yang berantakan, perkakas berserakan, dan tumpukan material tak terpakai adalah sumber utama pemborosan waktu, cacat produk, dan kecelakaan kerja fatal.',
    hazards: [
      '<strong>Pemborosan Waktu Mencari Perkakas & Dokumen (Search Waste):</strong> Mekanik membuang 30 menit per shift hanya untuk mencari kunci pas yang hilang.',
      '<strong>Tersandung & Terpeleset di Lantai Kerja (Slips, Trips, Falls):</strong> Ceceran oli yang tidak dibersihkan dan kabel tergeletak di jalur lalu lintas pejalan kaki.',
      '<strong>Kerusakan Komponen Akibat Debu & Kotoran:</strong> Mesin presisi mengalami keausan dini karena ketiadaan jadwal pembersihan rutin (Seiso).',
      '<strong>Program 5S Hanya Hangat-Hangat Tahi Ayam (No Sustainability):</strong> Pabrik rapi hanya saat ada kunjungan tamu dan kembali berantakan seminggu kemudian.'
    ],
    regulations: [
      '<strong>Permenaker No. 5 Tahun 2018</strong> tentang K3 Lingkungan Kerja (Pasal Higiene & Sanitasi Industri).',
      '<strong>Standar ISO 9001:2015</strong> Klausul 7.1.4 (Lingkungan untuk Pengoperasian Proses).',
      '<strong>Filosofi Toyota Production System (TPS) & Lean Manufacturing</strong>.'
    ],
    modules: [
      {
        name: 'Modul 1: Filosofi 5S/5R & Strategi Ringkas (Seiri - Red Tag Campaign)',
        theory: 'Prinsip pemilahan barang diperlukan vs tidak diperlukan, kriteria penilaian frekuensi pemakaian barang, tata cara pelaksanaan Kampanye Label Merah (Red Tag Strategy) dan Tempat Penampungan Sementara (Red Tag Holding Area).',
        practical: 'Simulasi pelaksanaan Red Tag Campaign di area bengkel pemeliharaan mesin pabrik.'
      },
      {
        name: 'Modul 2: Standarisasi Rapi (Seiton) & Resik (Seiso): Visual Management & Shadow Board',
        theory: 'Aturan "Satu Tempat untuk Setiap Barang, Setiap Barang pada Tempatnya", penandaan garis lantai marka warna, pembuatan Shadow Board perkakas kerja, pembersihan sebagai sarana inspeksi dini cacat mesin.',
        practical: 'Praktik mendesain papan bayangan perkakas (Tool Shadow Board) dan penetapan zona batas minimum/maksimum stok material.'
      },
      {
        name: 'Modul 3: Rawat (Seiketsu), Rajin (Shitsuke), & Sistem Audit 5S Mandiri',
        theory: 'Standarisasi SOP pembersihan 5 menit harian, pembentukan Komite 5S Pabrik, penyusunan lembar checklist audit 5S berbasis skor bintang, sistem reward & recognition Kaizen.',
        practical: 'Pelaksanaan simulasi Gemba Walk Audit 5S dan pembuatan lembar usulan perbaikan Kaizen (Kaizen Suggestion Form).'
      }
    ],
    equipment: [
      'Set Label Merah (Red Tag Form) Berpenomoran Seri Khusus.',
      'Floor Marking Tape Heavy Duty 5 Warna Standar Industri.',
      'Contoh Material Pembuatan Tool Shadow Board & Foam Inlay Perkakas.',
      'Checklist Formulir Audit 5S/5R Terstandarisasi dengan Scoring Matrix.'
    ],
    participants: [
      'Komite 5S/5R Pabrik, Supervisor Produksi & Gudang, Maintenance Leader, Kaizen Specialist, Operator Lini, Manajemen Fasilitas Gedung.'
    ],
    tableData: {
      headers: ['Pilar 5S / 5R', 'Makna Filosofi Jepang & Indonesia', 'Aktivitas Kunci di Lantai Pabrik', 'Target Hasil Konkret'],
      rows: [
        ['1S: Seiri (Ringkas)', 'Memilah barang yang perlu & membuang yang tidak perlu', 'Red Tag Campaign, buang barang rusak/kadaluarsa', 'Menghemat luas area lantai pabrik 20-30%'],
        ['2S: Seiton (Rapi)', 'Menata barang agar mudah diambil & dikembalikan', 'Shadow board, label nama, floor marking, batas min/max', 'Waktu pencarian alat turun menjadi < 30 detik'],
        ['3S: Seiso (Resik)', 'Membersihkan area kerja sekaligus memeriksa cacat mesin', 'Jadwal 5 menit bersih harian, eliminasi sumber bocor oli', 'Deteksi dini retakan mesin sebelum rusak parah'],
        ['4S: Seiketsu (Rawat)', 'Membuat standarisasi visual dan SOP pemeliharaan', 'Papan visual management, SOP checklist pembersihan', 'Konsistensi standar kebersihan di seluruh shift'],
        ['5S: Shitsuke (Rajin)', 'Membangun kebiasaan disiplin diri tanpa perlu disuruh', 'Audit 5S mingguan, lomba 5S antar divisi, reward Kaizen', 'Terbentuk budaya kerja disiplin kelas dunia']
      ]
    },
    caseStudy: 'Sebuah pabrik perakitan elektronik di Batam berhasil menghemat ruang gudang seluas 400 m² dan meningkatkan efisiensi waktu setup pergantian model hingga 40% dalam 6 bulan setelah menerapkan sistem 5S dan Shadow Board secara terintegrasi.',
    stepByStepGuide: [
      { step: '1. Pembentukan Komite & Kebijakan 5S', desc: 'Manajemen puncak meresmikan Komite 5S dan menetapkan target area percontohan (Pilot Area).' },
      { step: '2. Big Cleaning Day & Red Tag Campaign', desc: 'Melakukan pembersihan massal dan membuang ratusan item barang mati tidak terpakai.' },
      { step: '3. Penataan Visual Management & Marka Lantai', desc: 'Mengecat marka jalur lorong dan membuat tempat penyimpanan perkakas berbasis warna.' },
      { step: '4. Pelaksanaan Audit 5S Berkala & Reward', desc: 'Menyelenggarakan audit rutin 2 minggu sekali dan memberikan piala bergilir divisi terbersih.' }
    ],
    links: [
      { href: '/kategori-pelatihan/total-productive-maintenance-tpm-oee/', anchor: 'Pelatihan TPM & Kalkulasi OEE' },
      { href: '/kategori-pelatihan/cost-reduction-program-lean-waste/', anchor: 'Program Reduksi Biaya Lean Waste' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 3. Total Productive Maintenance TPM OEE
  {
    key: 'total-productive-maintenance-tpm-oee',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/total-productive-maintenance-tpm-oee/',
    archetype: 'role',
    title: 'Pelatihan Total Productive Maintenance (TPM) & Pengukuran OEE Mesin',
    h1: 'Pelatihan Total Productive Maintenance (TPM), Autonomous Maintenance, & Kalkulasi Overall Equipment Effectiveness (OEE) Standar World-Class',
    meta: 'Pelatihan TPM dan kalkulasi OEE: 8 pilar TPM pabrik, Autonomous Maintenance Jishu Hozen, 6 Big Losses, Availability Performance Quality & MTBF MTTR.',
    imgAlt: 'Operator lini produksi dan teknisi maintenance melakukan pelumasan mandiri dan pengisian checklist Autonomous Maintenance di panel mesin',
    related: ['penerapan-5s-5r-kaizen-manufaktur', 'root-cause-analysis-rca-manufaktur', 'cost-reduction-program-lean-waste', 'k3-keselamatan-kerja'],
    intro: 'Mesin rusak mendadak (unplanned breakdown), kecepatan mesin menurun, dan produk cacat saat start-up adalah pembunuh utama profitabilitas industri manufaktur. <strong>Total Productive Maintenance (TPM)</strong> adalah sistem pemeliharaan mesin holistik yang melibatkan operator produksi dalam pemeliharaan mandiri (Autonomous Maintenance / Jishu Hozen) untuk mencapai target <strong>Zero Breakdown, Zero Defect, dan Zero Accident</strong> yang diukur secara presisi melalui indikator <strong>Overall Equipment Effectiveness (OEE)</strong>.',
    hazards: [
      '<strong>Mesin Utama Mati Total Mendadak (Catastrophic Breakdown):</strong> Ketiadaan pelumasan rutin yang membuat bearing poros mesin macet terbakar.',
      '<strong>Penurunan Kecepatan Mesin (Speed Losses):</strong> Mesin hanya dijalankan pada 60% kecepatan desain karena getaran berlebih yang diabaikan.',
      '<strong>Kerugian Waktu Setup & Ganti Cetakan (Setup/Adjustment Losses):</strong> Waktu pergantian mold cetakan memakan waktu berjam-jam tanpa standar SMED.',
      '<strong>Ketegangan Antara Departemen Produksi & Maintenance:</strong> Produksi menyalahkan mekanik saat mesin rusak, mekanik menyalahkan operator yang jorok.'
    ],
    regulations: [
      '<strong>Standar Japan Institute of Plant Maintenance (JIPM) TPM Excellence</strong>.',
      '<strong>Permenaker No. 38 Tahun 2016</strong> tentang K3 Pesawat Tenaga dan Produksi.',
      '<strong>Standar ISO 55001:2014</strong> tentang Asset Management System.'
    ],
    modules: [
      {
        name: 'Modul 1: Delapan Pilar Utama TPM & Konsep Autonomous Maintenance (Jishu Hozen)',
        theory: 'Delapan pilar TPM (Jishu Hozen, Kobetsu Kaizen, Planned Maintenance, Quality Maintenance, Training, Safety Health Environment, Early Equipment Management, TPM Office), 7 langkah implementasi Jishu Hozen oleh operator.',
        practical: 'Praktik pembuatan standar pembersihan, pelumasan, dan pengencangan baut (Cleaning, Lubrication, Tightening / CLT Standard).'
      },
      {
        name: 'Modul 2: Mengidentifikasi Enam Kerugian Besar Mesin (The 6 Big Losses)',
        theory: 'Breakdown Losses, Setup & Adjustment Losses, Minor Stoppage Losses, Reduced Speed Losses, Rework/Defect Losses, Startup Losses.',
        practical: 'Pemetaan 6 Big Losses pada mesin pembotolan / pengemasan otomatis berdasarkan data histori mesin 1 bulan.'
      },
      {
        name: 'Modul 3: Formula Matematis Kalkulasi OEE, MTBF, & MTTR',
        theory: 'Kalkulasi Availability Rate (Waktu Operasi / Waktu Loading), Performance Rate (Output Riil / Output Teoretis), Quality Rate (Produk Bagus / Total Output), rumus OEE = A x P x Q, indikator Mean Time Between Failures (MTBF) dan Mean Time to Repair (MTTR).',
        practical: 'Latihan menghitung OEE mesin dari lembar studi kasus riil dan menyusun rencana aksi penaikan OEE dari 65% menuju World-Class 85%.'
      }
    ],
    equipment: [
      'Template Spreadsheet Kalkulator OEE, Availability, Performance, & Quality Otomatis.',
      'Checklist 7 Langkah Autonomous Maintenance (Jishu Hozen Step Audit).',
      'Format Standar CLT (Cleaning, Lubrication, Inspection, Tightening) Bergambar.',
      'Tag Identifikasi Masalah Mesin (F-Tag / Abnormal Tagging Putih & Merah).'
    ],
    participants: [
      'Plant Manager, Maintenance Manager, Production Supervisor, Mekanik Pabrik, Operator Mesin Utama, Reliability Engineer, Continuous Improvement Leader.'
    ],
    tableData: {
      headers: ['Komponen OEE', 'Batas Minimum Tipikal Pabrik', 'Target Standar World-Class (JIPM)', 'Fokus Pengendalian Utama'],
      rows: [
        ['Availability Rate (Ketersediaan Mesin)', '70% - 80%', '≥ 90.0%', 'Mengurangi waktu kerusakan (downtime) & ganti cetakan (SMED)'],
        ['Performance Rate (Efisiensi Kecepatan)', '75% - 85%', '≥ 95.0%', 'Mengeliminasi macet singkat (minor stoppage) & mesin melambat'],
        ['Quality Rate (Tingkat Mutu Produk)', '90% - 95%', '≥ 99.0%', 'Menghilangkan produk cacat, scrap, dan rework saat start-up'],
        ['Overall Equipment Effectiveness (OEE)', '50% - 65%', '≥ 85.0% (World-Class)', 'Perkalian Komprehensif (A x P x Q) = 90% x 95% x 99% = 85%']
      ]
    },
    caseStudy: 'Sebuah pabrik makanan dan minuman di Pasuruan berhasil menaikkan angka OEE lini pengemasan dari 58% menjadi 82% dalam tempo 9 bulan, menghemat biaya downtime senilai Rp 1.8 Miliar per tahun setelah menerapkan Autonomous Maintenance TPM.',
    stepByStepGuide: [
      { step: '1. Pemilihan Mesin Percontohan (Pilot Machine)', desc: 'Memilih mesin paling kritis (bottleneck machine) untuk program percontohan awal TPM.' },
      { step: '2. Pembersihan Awal & F-Tagging Mesin', desc: 'Operator dan mekanik membersihkan mesin total dan menempelkan tag merah pada bagian yang bocor/kendor.' },
      { step: '3. Penyusunan Standar CLT Harian', desc: 'Membuat petunjuk visual pembersihan dan pelumasan 10 menit harian sebelum mesin dijalankan.' },
      { step: '4. Pelacakan & Peningkatan OEE Harian', desc: 'Menghitung OEE setiap akhir shift dan mengadakan rapat Kaizen mingguan untuk membedah akar masalah losses.' }
    ],
    links: [
      { href: '/kategori-pelatihan/penerapan-5s-5r-kaizen-manufaktur/', anchor: 'Penerapan 5S 5R & Kaizen' },
      { href: '/kategori-pelatihan/root-cause-analysis-rca-manufaktur/', anchor: 'Metode Problem Solving RCA' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 4. Root Cause Analysis RCA Manufaktur
  {
    key: 'root-cause-analysis-rca-manufaktur',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/root-cause-analysis-rca-manufaktur/',
    archetype: 'role',
    title: 'Pelatihan Root Cause Analysis (RCA) & Problem Solving 8D Manufaktur',
    h1: 'Pelatihan Analisis Akar Masalah (Root Cause Analysis / RCA), Fishbone Diagram, 5-Why, & Metodologi Problem Solving 8D Industri',
    meta: 'Pelatihan root cause analysis RCA: metode 8D problem solving manufaktur, diagram Ishikawa tulang ikan, 5-Why analysis, FMEA & tindakan korektif CAPA.',
    imgAlt: 'Tim engineer manufaktur menganalisis akar penyebab cacat produk menggunakan diagram Fishbone dan teknik 5-Why pada papan tulis',
    related: ['total-productive-maintenance-tpm-oee', 'pelatihan-supervisory-skills-pabrik', 'six-sigma-green-belt-dmaic', 'k3-keselamatan-kerja'],
    intro: 'Menyelesaikan masalah operasional hanya dengan menambal gejala di permukaan (symptom patching) membuat masalah cacat produk, mesin rusak, dan keluhan pelanggan terus berulang dari waktu ke waktu. Pelatihan <strong>Root Cause Analysis (RCA) & 8D Problem Solving</strong> membekali para insinyur, supervisor, dan manajer dengan metodologi analitis terstruktur untuk menggali akar masalah paling fundamental dan memasang tindakan pencegahan permanen (Foolproofing / Poka-Yoke).',
    hazards: [
      '<strong>Masalah Mutu Terus Berulang (Recurring Quality Defect):</strong> Menyalahkan kelalaian operator tanpa membedah variasi parameter mesin.',
      '<strong>Laporan Keluhan Pelanggan Ditolak Buyer Internasional:</strong> Laporan penanganan masalah (8D Report) tidak logis dan tidak berbasis data analitis.',
      '<strong>Pemborosan Biaya Trial-and-Error yang Tidak Terarah:</strong> Mengganti berbagai suku cadang mahal secara acak tanpa memahami akar penyebab.',
      '<strong>Investigasi Menghakimi Individu (Blame Culture):</strong> Karyawan takut berterus terang mengenai kejadian abnormal mesin.'
    ],
    regulations: [
      '<strong>Standar Industri Otomotif IATF 16949:2016</strong> (Problem Solving Methods).',
      '<strong>Standar ISO 9001:2015</strong> Klausul 10.2 (Ketidaksesuaian dan Tindakan Korektif).',
      '<strong>Standar AIAG & VDA FMEA Handbook</strong>.'
    ],
    modules: [
      {
        name: 'Modul 1: Metodologi 8 Disiplin (The 8D Problem Solving Methodology)',
        theory: 'Tahapan 8D: D1 (Bentuk Tim) -> D2 (Deskripsikan Masalah 5W+2H) -> D3 (Tindakan Pembendungan Darurat ICA) -> D4 (Analisis Akar Masalah) -> D5 (Pilih Tindakan Korektif PCA) -> D6 (Verifikasi Hasil) -> D7 (Cegah Berulang) -> D8 (Apresiasi Tim).',
        practical: 'Penyusunan pernyataan masalah spesifik menggunakan kerangka kerja Is / Is-Not Analysis.'
      },
      {
        name: 'Modul 2: Peralatan Analisis: Diagram Tulang Ikan (Ishikawa) & 5-Why Analysis',
        theory: 'Konstruksi Fishbone Diagram 6M (Man, Machine, Material, Method, Measurement, Milieu), aturan emas 5-Why (menghubungkan fakta kausalitas, bukan asumsi opini), uji verifikasi kebalikan (Therefore Test).',
        practical: 'Praktik membedah kasus kebocoran oli hidrolik menggunakan Fishbone 6M dan pendalaman 5-Why hingga menemukan kelemahan sistemik.'
      },
      {
        name: 'Modul 3: Poka-Yoke (Mistake Proofing) & Verifikasi Efektivitas Tindakan Korektif',
        theory: 'Konsep desain anti-salah Poka-Yoke mekanik/sensorik, penyusunan matriks Corrective and Preventive Action (CAPA), audit penutupan masalah (Closure Audit).',
        practical: 'Desain simulasi sensor Poka-Yoke pada alat kerja dan penyusunan dokumen Laporan Resmi 8D Report siap kirim ke pelanggan.'
      }
    ],
    equipment: [
      'Formulir Standar Global 8D Problem Solving Report (Format Otomotif IATF).',
      'Template Digital Fishbone Diagram & 5-Why Analysis Sheet.',
      'Formulir Is / Is-Not Problem Definition Matrix.',
      'Kit Studi Kasus Problem Solving Manufaktur Riil (Stamping, Injeksi, Perakitan).'
    ],
    participants: [
      'Quality Control (QC/QA) Engineer, Process Engineer, Maintenance Engineer, Production Supervisor, Plant Manager, Safety Officer.'
    ],
    tableData: {
      headers: ['Langkah Metodologi 8D', 'Tujuan Utama Tahapan', 'Alat / Teknik yang Digunakan', 'Output Dokumen Kunci'],
      rows: [
        ['D2: Problem Description', 'Mendefinisikan masalah secara terukur & presisi', 'Metode 5W + 2H & Is / Is-Not Matrix', 'Pernyataan Masalah Spesifik'],
        ['D3: Containment Action (ICA)', 'Mengisolasi produk cacat agar tidak lolos ke pasar', 'Sortir 100%, Karantina Gudang, Blokir Pengiriman', 'Laporan Pembendungan Darurat'],
        ['D4: Root Cause Analysis', 'Menemukan akar masalah teknis & sistemik', 'Fishbone Diagram 6M & 5-Why Verification', 'Akar Masalah Terbukti'],
        ['D5 & D6: Permanent Action (PCA)', 'Menerapkan solusi permanen & memvalidasi hasil', 'Poka-Yoke, Modifikasi Mesin, Uji Coba Produksi', 'Bukti Angka Cacat Turun 0%'],
        ['D7: Prevent Recurrence', 'Standarisasi SOP & FMEA agar tidak terulang di tempat lain', 'Update Control Plan, SOP, & FMEA Dokumen', 'Standarisasi Sistem Pabrik']
      ]
    },
    caseStudy: 'Sebuah pabrik cetak plastik di Bekasi mengeliminasi 100% masalah cacat penyusutan (sink mark) yang telah berlangsung selama 6 bulan hanya dalam waktu 5 hari setelah menerapkan metode 8D dan menemukan ketidakstabilan suhu pendingin chiller melalui analisis 5-Why.',
    stepByStepGuide: [
      { step: '1. Pembentukan Tim Lintas Fungsi (CFT)', desc: 'Menunjuk ketua tim bersama perwakilan produksi, maintenance, dan quality assurance.' },
      { step: '2. Tindakan Penahanan Darurat (D3)', desc: 'Menahan seluruh stok yang berpotensi cacat di area karantina untuk melindungi pelanggan.' },
      { step: '3. Bedah Kasus via Fishbone & 5-Why (D4)', desc: 'Mengumpulkan data fakta di lapangan dan menggali akar masalah hingga level terdalam.' },
      { step: '4. Pasang Solusi Poka-Yoke & Update SOP (D7)', desc: 'Memasang sensor pencegah kesalahan dan memperbarui dokumen instruksi kerja standar.' }
    ],
    links: [
      { href: '/kategori-pelatihan/six-sigma-green-belt-dmaic/', anchor: 'Pelatihan Six Sigma DMAIC' },
      { href: '/kategori-pelatihan/total-productive-maintenance-tpm-oee/', anchor: 'Total Productive Maintenance' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 5. Komunikasi Asertif dan Serikat Pekerja
  {
    key: 'komunikasi-asertif-dan-serikat-pekerja',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/komunikasi-asertif-dan-serikat-pekerja/',
    archetype: 'role',
    title: 'Pelatihan Hubungan Industrial & Negosiasi Serikat Pekerja (SP/SB)',
    h1: 'Pelatihan Komunikasi Asertif, Hubungan Industrial Harmonis, & Teknik Negosiasi Perjanjian Kerja Bersama (PKB) dengan Serikat Pekerja / Serikat Buruh',
    meta: 'Pelatihan hubungan industrial & negosiasi serikat pekerja: komunikasi asertif manajemen, bipartit LKS, negosiasi PKB, mediasi perselisihan PHI & UU Cipta Kerja.',
    imgAlt: 'Perwakilan manajemen perusahaan dan pengurus serikat pekerja berdiskusi hangat di meja perundingan Perjanjian Kerja Bersama PKB',
    related: ['pelatihan-supervisory-skills-pabrik', 'teknik-negosiasi-dan-vendor-management', 'hr-management-for-non-hr-managers', 'k3-keselamatan-kerja'],
    intro: 'Hubungan Industrial yang tidak harmonis dapat memicu aksi mogok kerja, penurunan produktivitas massal, unjuk rasa, hingga perselisihan berlarut-larut di Pengadilan Hubungan Industrial (PHI). <strong>Komunikasi Asertif & Manajemen Hubungan Industrial</strong> membekali tim manajemen, HR, dan operasional dengan strategi komunikasi empatik namun tegas, tata cara perundingan Bipartit yang efektif, dan teknik negosiasi win-win dalam penyusunan Perjanjian Kerja Bersama (PKB).',
    hazards: [
      '<strong>Aksi Mogok Kerja Tidak Sah (Illegal Strike):</strong> Konflik komunikasi yang memicu penghentian produksi total bernilai kerugian miliaran rupiah.',
      '<strong>Kebuntuan Perundingan PKB (Deadlock):</strong> Negosiasi kenaikan upah dan fasilitas buntu akibat pendekatan konfrontatif kedua belah pihak.',
      '<strong>Gugatan Hukum Perselisihan Hak & PHK di Disnaker/PHI:</strong> Prosedur administrasi surat teguran (SP) atau PHK yang cacat hukum formil.',
      '<strong>Keretakan Iklim Kerja Harian:</strong> Kecurigaan mendalam antara pengurus serikat buruh dengan pengawas lini di lantai pabrik.'
    ],
    regulations: [
      '<strong>UU No. 13 Tahun 2003</strong> tentang Ketenagakerjaan.',
      '<strong>UU No. 2 Tahun 2004</strong> tentang Penyelesaian Perselisihan Hubungan Industrial (PPHI).',
      '<strong>UU No. 21 Tahun 2000</strong> tentang Serikat Pekerja / Serikat Buruh.',
      '<strong>PP No. 35 Tahun 2021</strong> tentang PKWT, Alih Daya, Waktu Kerja, dan PHK.'
    ],
    modules: [
      {
        name: 'Modul 1: Kerangka Hukum Ketenagakerjaan Terkini & Empat Jenis Perselisihan Hubungan Industrial',
        theory: 'Perubahan regulasi pasca PP 35/2021, empat jenis perselisihan hubungan industrial (Perselisihan Hak, Perselisihan Kepentingan, Perselisihan PHK, Perselisihan Antar Serikat), alur resmi penyelesaian (Bipartit -> Mediasi Disnaker -> Konsiliasi/Arbitrase -> PHI).',
        practical: 'Audit kelayakan berkas Berita Acara Bipartit dan formulir risalah perundingan resmi.'
      },
      {
        name: 'Modul 2: Komunikasi Asertif & Seni Mendengarkan Empatis bagi Manajemen',
        theory: 'Perbedaan gaya komunikasi Pasif, Agresif, Pasif-Agresif, dan Asertif, teknik "I-Message", seni memisahkan emosi dari substansi masalah, optimalisasi Lembaga Kerja Sama (LKS) Bipartit.',
        practical: 'Role-play simulasi dialog asertif menghadapi tuntutan serikat pekerja yang berapi-api tanpa terpancing emosi.'
      },
      {
        name: 'Modul 3: Teknik Negosiasi Perjanjian Kerja Bersama (PKB) Berbasis Prinsip Win-Win (Harvard Method)',
        theory: 'Prinsip Negosiasi Harvard: Pisahkan orang dari masalah, fokus pada kepentingan (interests) bukan posisi (positions), ciptakan opsi keuntungan bersama, gunakan kriteria objektif, penentuan BATNA (Best Alternative to a Negotiated Agreement).',
        practical: 'Simulasi meja perundingan draf pasal PKB mengenai sistem shift dan insentif lembur.'
      }
    ],
    equipment: [
      'Format Standar Risalah Perundingan Bipartit Sesuai UU No. 2/2004.',
      'Template Lembar Matriks Komparasi Draf PKB (Manajemen vs Serikat).',
      'Lembar Kerja Penentuan Nilai Batas BATNA & ZOPA (Zone of Possible Agreement).',
      'Panduan Pedoman Operasional Lembaga Kerja Sama (LKS) Bipartit.'
    ],
    participants: [
      'HR Director / Industrial Relations (IR) Manager, Legal Corporate, Plant Manager, Supervisor Lini, Pengurus Lembaga Kerja Sama (LKS) Bipartit.'
    ],
    tableData: {
      headers: ['Tahapan Penyelesaian Konflik', 'Batas Waktu Regulasi', 'Pihak yang Terlibat', 'Dokumen Output Wajib'],
      rows: [
        ['1. Perundingan Bipartit', 'Maksimal 30 Hari Kerja', 'Manajemen Perusahaan & Serikat Pekerja Internal', 'Risalah Bipartit / Perjanjian Bersama (PB)'],
        ['2. Pendaftaran Perjanjian Bersama', 'Segera setelah PB ditandatangani', 'Pengadilan Hubungan Industrial (PHI) Setempat', 'Akta Bukti Pendaftaran PB (Berkekuatan Hukum Eksekusi)'],
        ['3. Mediasi Tripartit Disnaker', 'Maksimal 30 Hari Kerja', 'Mediator Hubungan Industrial Disnaker', 'Anjuran Tertulis Mediator Disnaker'],
        ['4. Gugatan Pengadilan PHI', 'Diajukan jika Anjuran Ditolak', 'Majelis Hakim PHI di Pengadilan Negeri', 'Putusan Pengadilan Hubungan Industrial']
      ]
    },
    caseStudy: 'Sebuah perusahaan manufaktur garmen di Jawa Tengah yang sempat mengalami kebuntuan perundingan upah berhasil menyepakati Perjanjian Kerja Bersama (PKB) 2 tahunan secara damai dalam 3 kali pertemuan setelah tim manajemen menerapkan teknik negosiasi berbasis kepentingan (Harvard Method).',
    stepByStepGuide: [
      { step: '1. Optimalisasi Forum LKS Bipartit Bulanan', desc: 'Menyelenggarakan pertemuan rutin non-formal setiap bulan untuk menyerap aspirasi buruh sebelum menjadi konflik.' },
      { step: '2. Pemetaan Kepentingan & Kriteria Objektif', desc: 'Menghitung kemampuan finansial riil perusahaan dan menyusun data pembanding pasar sebagai kriteria objektif.' },
      { step: '3. Simulasi Negosiasi Internal Tim Manajemen', desc: 'Menetapkan batas konsesi tawar-menawar (ZOPA) dan menentukan opsi alternatif cadangan (BATNA).' },
      { step: '4. Penandatanganan & Pendaftaran PB ke PHI', desc: 'Mendaftarkan Perjanjian Bersama ke panitera PHI untuk mengunci kepastian hukum yang mengikat kedua pihak.' }
    ],
    links: [
      { href: '/kategori-pelatihan/pelatihan-supervisory-skills-pabrik/', anchor: 'Pelatihan Supervisory Skills' },
      { href: '/kategori-pelatihan/teknik-negosiasi-dan-vendor-management/', anchor: 'Teknik Negosiasi & Vendor Management' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 6. Behavior Based Safety BBS STOP Card
  {
    key: 'behavior-based-safety-bbs-stop-card',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/behavior-based-safety-bbs-stop-card/',
    archetype: 'role',
    title: 'Pelatihan Behavior-Based Safety (BBS) & Program STOP Card Lapangan',
    h1: 'Pelatihan Behavior-Based Safety (BBS), Observasi Perilaku Selamat, & Implementasi Program Kartu Pengamatan Keselamatan (STOP Card / Hazard Observation)',
    meta: 'Pelatihan behavior-based safety BBS: modifikasi perilaku aman pekerja, teknik observasi no-blame, kartu pengamatan STOP card, safety coaching & budaya K3.',
    imgAlt: 'Safety observer melakukan dialog observasi keselamatan kerja BBS secara positif dengan teknisi yang mengenakan APD lengkap di workshop',
    related: ['pengukuran-safety-culture-maturity', 'pelatihan-supervisory-skills-pabrik', 'ahli-k3-umum-kemnaker', 'k3-keselamatan-kerja'],
    intro: 'Riset keselamatan global membuktikan bahwa lebih dari 88% hingga 96% kecelakaan kerja dipicu oleh <strong>Tindakan Tidak Aman (Unsafe Acts / Perilaku Tidak Selamat)</strong> dibandingkan kondisi fisik lingkungan. <strong>Behavior-Based Safety (BBS)</strong> adalah metodologi psikologi perilaku terbukti untuk mengidentifikasi pemicu perilaku berisiko, melakukan observasi lapangan tanpa menyalahkan (No-Blame Culture), dan memberikan penguatan positif (Positive Reinforcement) melalui program <strong>Safety Observation Card (STOP Card / PEKA / Hazob)</strong>.',
    hazards: [
      '<strong>Pekerja Mengambil Jalan Pintas (Taking Shortcuts):</strong> Melepas kacamata pelindung atau tidak mengaitkan lanyard karena ingin pekerjaan cepat selesai.',
      '<strong>Kultur Menghukum yang Mematikan Pelaporan (Fear of Reporting):</strong> Pekerja menyembunyikan bahaya near-miss karena takut dimarahi atau dipotong gaji.',
      '<strong>Observasi BBS Hanya Formalitas Mengisi Kertas (Card-Filling Quota):</strong> Petugas mengisi kartu STOP palsu di atas meja tanpa pernah turun observasi ke lapangan.',
      '<strong>Perilaku Tidak Aman Menjadi Kebiasaan Normal (Normalized Deviance):</strong> Mengoperasikan alat rusak dibiarkan bertahun-tahun hingga akhirnya memicu maut.'
    ],
    regulations: [
      '<strong>PP No. 50 Tahun 2012</strong> tentang Penerapan SMK3 (Elemen Pemantauan Kinerja K3).',
      '<strong>Prinsip Piramida Heinrich / Frank Bird</strong> tentang Rasio Perilaku Tidak Aman terhadap Fatality.',
      '<strong>Standar ISO 45001:2018</strong> Klausul 5.4 (Konsultasi dan Partisipasi Pekerja).'
    ],
    modules: [
      {
        name: 'Modul 1: Psikologi Perilaku Keselamatan & Model ABC (Activator - Behavior - Consequence)',
        theory: 'Membedah mengapa orang pintar melakukan hal berbahaya, peran pemicu (Activator), perilaku (Behavior), dan konsekuensi (Consequence), mengapa konsekuensi Soon-Certain-Positive lebih kuat daripada ancaman bahaya di masa depan.',
        practical: 'Analisis studi kasus perilaku tidak aman operator forklift menggunakan diagram model ABC.'
      },
      {
        name: 'Modul 2: Teknik Observasi Keselamatan 5 Tahap & Keterampilan Dialog Umpan Balik (Safety Coaching)',
        theory: 'Lima langkah observasi BBS (Amati, Dekati, Apresiasi Perilaku Aman, Diskusikan Perilaku Berisiko, Buat Komitmen Bersama), teknik bertanya "Bagaimana menurut Anda jika...", prinsip No-Name No-Blame.',
        practical: 'Simulasi role-play observasi lapangan: menegur teknisi las yang membuka kedok las tanpa memicu defensif atau kemarahan.'
      },
      {
        name: 'Modul 3: Desain Program STOP Card / Hazard Observation & Analisis Tren Data',
        theory: 'Penyusunan format kartu observasi (kategori posisi tubuh, APD, perkakas, prosedur), digitalisasi aplikasi mobile STOP card, analisis grafik Pareto perilaku berisiko bulanan.',
        practical: 'Pengolahan data 100 kartu observasi menggunakan dashboard Excel dan penentuan program intervensi spesifik.'
      }
    ],
    equipment: [
      'Kartu Pengamatan Keselamatan (STOP Card / Safety Observation Form) Fisik & Aplikasi Mobile QR.',
      'Formulir Checklist Observasi Perilaku Kritis (Critical Behavior Checklist).',
      'Dashboard Analisis Data Tren Perilaku Berisiko (Excel Template).',
      'Modul Panduan Saku Observer BBS (Observer Pocket Guide).'
    ],
    participants: [
      'Safety Officer, Supervisor Produksi / Maintenance, Mandor Lapangan, Safety Champion / Peer Observer, Komite P2K3, Plant Manager.'
    ],
    tableData: {
      headers: ['Tahapan Observasi BBS', 'Aktivitas Kunci Observer', 'Tindakan yang DILARANG KERAS', 'Tujuan Psikologis'],
      rows: [
        ['1. Amati (Observe)', 'Perhatikan cara kerja pekerja dari jarak aman selama 2-3 menit', 'Mengamati sambil memata-matai sembunyi-sembunyi', 'Melihat kebiasaan kerja riil alami'],
        ['2. Beri Pujian (Praise)', 'Sebutkan secara spesifik perilaku aman yang sudah dilakukan', 'Langsung mengkritik kesalahan di awal percakapan', 'Membangun kepercayaan & keterbukaan'],
        ['3. Diskusikan Bahaya (Discuss)', 'Tanyakan risiko apa yang bisa terjadi jika prosedur dilanggar', 'Menceramahi, menghakimi, atau membentak', 'Pekerja menyadari sendiri bahayanya'],
        ['4. Komitmen (Commit)', 'Minta pekerja menyepakati cara kerja aman untuk seterusnya', 'Memaksa menandatangani surat peringatan di tempat', 'Mengunci perubahan perilaku internal (Janji)'],
        ['5. Dokumentasi (Record)', 'Catat temuan di STOP card tanpa menuliskan nama pekerja', 'Mencatat nama pekerja untuk dilaporkan ke HR/Atasan', 'Menjaga integritas No-Blame Culture']
      ]
    },
    caseStudy: 'Sebuah pabrik peleburan aluminium di Kalimantan Timur berhasil menurunkan angka kecelakaan First Aid dan Near-Miss hingga 72% dalam 18 bulan setelah melatih 120 orang observer BBS yang mengumpulkan 4.000 dialog observasi keselamatan berkualitas per bulan.',
    stepByStepGuide: [
      { step: '1. Sosialisasi Kebijakan No-Blame Culture', desc: 'Manajemen mengumumkan secara resmi bahwa kartu observasi BBS tidak akan pernah digunakan untuk menghukum karyawan.' },
      { step: '2. Pelatihan Kader Safety Observer', desc: 'Melatih supervisor dan operator terpilih tentang teknik komunikasi dialog persuasif di lantai kerja.' },
      { step: '3. Pelaksanaan Observasi Lapangan Rutin', desc: 'Setiap observer melakukan minimal 2-4 kali observasi interaktif per minggu.' },
      { step: '4. Review & Tindak Lanjut Manajemen', desc: 'Membahas tren perilaku berisiko dalam rapat P2K3 dan memperbaiki fasilitas pendukung kerja aman.' }
    ],
    links: [
      { href: '/kategori-pelatihan/pengukuran-safety-culture-maturity/', anchor: 'Pengukuran Safety Culture Maturity' },
      { href: '/kategori-pelatihan/pelatihan-supervisory-skills-pabrik/', anchor: 'Pelatihan Supervisory Skills' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 7. Pelatihan Train the Trainer BNSP
  {
    key: 'pelatihan-train-the-trainer-bnsp',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/pelatihan-train-the-trainer-bnsp/',
    archetype: 'role',
    title: 'Sertifikasi Train the Trainer (Tot) BNSP: Instruktur Pelatihan Kerja',
    h1: 'Pelatihan & Sertifikasi Train the Trainer (ToT) Instruktur / Trainer Pelatihan Kerja BNSP (Level 3 & Level 4): Sesuai SKKNI Bidang Pelatihan Kerja',
    meta: 'Sertifikasi train the trainer BNSP: ToT metodologi pelatihan kerja SKKNI, penyusunan RPP lesson plan, microteaching, asesmen kompetensi LSP & sertifikat instruktur.',
    imgAlt: 'Instruktur pelatihan kerja internal mempresentasikan materi menggunakan flipchart interaktif saat ujian praktik microteaching sertifikasi BNSP',
    related: ['matriks-kompetensi-k3-per-divisi', 'public-speaking-dan-executive-pitching', 'pelatihan-supervisory-skills-pabrik', 'k3-keselamatan-kerja'],
    intro: 'Menjadi seorang Trainer Internal (In-House Trainer) atau Instruktur K3 bukan sekadar menguasai materi teknis, melainkan menguasai metodologi pengajaran orang dewasa (Andragogi), menyusun Rencana Pelaksanaan Pelatihan (RPP / Lesson Plan), mendesain media ajar yang menarik, serta mengelola dinamika kelas. Sertifikasi <strong>Train the Trainer (ToT) BNSP</strong> memberikan pengakuan kompetensi nasional resmi bagi para profesional pengajar di korporasi.',
    hazards: [
      '<strong>Sesi Pelatihan Membosankan & Peserta Mengantuk:</strong> Instruktur mengajar dengan metode ceramah satu arah (one-way lecturing) tanpa interaksi.',
      '<strong>Materi Pelatihan Tidak Sesuai Sasaran Kompetensi (Mismatch):</strong> Ketiadaan silabus terstruktur dan indikator penilaian hasil belajar.',
      '<strong>Gugur Saat Uji Asesmen Portofolio Asesor BNSP:</strong> Calon trainer tidak melengkapi dokumen RPP, matriks pelatihan, dan lembar soal tes.',
      '<strong>Sertifikat Pelatihan Internal Tidak Diakui Regulasi:</strong> Pengajar pelatihan internal tidak memiliki lisensi kompetensi resmi yang diakui pemerintah.'
    ],
    regulations: [
      '<strong>Kepmenaker No. 333 Tahun 2020</strong> tentang SKKNI Bidang Standardisasi, Pelatihan Kerja dan Sertifikasi.',
      '<strong>Peraturan BNSP No. 1/BNSP/III/2014</strong> tentang Pedoman Pelaksanaan Sertifikasi Kompetensi Profesi.',
      '<strong>UU No. 13 Tahun 2003</strong> tentang Ketenagakerjaan (Bab Pelatihan Kerja).'
    ],
    modules: [
      {
        name: 'Modul 1: Prinsip Belajar Orang Dewasa (Andragogi) & Analisis Kebutuhan Pelatihan',
        theory: 'Karakteristik pembelajar dewasa menurut Malcolm Knowles, gaya belajar VAK (Visual, Auditory, Kinesthetic), perumusan Sasaran Belajar (Learning Objectives) berbasis taksonomi Bloom.',
        practical: 'Penyusunan formulir Rencana Sesi Pembelajaran (Session Plan / RPP) untuk 1 unit modul 45 menit.'
      },
      {
        name: 'Modul 2: Desain Media Pembelajaran Interaktif, Gamifikasi, & Public Speaking Trainer',
        theory: 'Teknik desain slide presentasi berdampak visual tinggi, penggunaan ice-breaking & energizer yang relevan, modulasi vokal, bahasa tubuh (body language), teknik bertanya interaktif.',
        practical: 'Praktik pembukaan kelas berdampak kuat (Powerful Opening) dan demonstrasi alat peraga pelatihan.'
      },
      {
        name: 'Modul 3: Simulasi Microteaching & Persiapan Berkas Uji Kompetensi Asesmen LSP BNSP',
        theory: 'Metode evaluasi hasil belajar (Pre-Test, Post-Test, Lembar Observasi Praktik), simulasi mengajar 15-20 menit di hadapan panel instruktur master, pemberkasan portofolio APL-01 & APL-02.',
        practical: 'Uji simulasi Microteaching 15 menit dan verifikasi kelengkapan bukti portofolio pelatihan bersama Asesor Kompetensi resmi.'
      }
    ],
    equipment: [
      'Formulir Rencana Pelaksanaan Pelatihan (Lesson Plan / Session Plan) Standar BNSP.',
      'Set Media Ajar: Flipchart, Spidol Warna-Warni, Kartu Metaplan Interaktif.',
      'Formulir Asesmen Mandiri APL-01 & APL-02 Skema Instruktur BNSP.',
      'Kamera Video Recording untuk Evaluasi Rekaman Microteaching Peserta.'
    ],
    participants: [
      'Internal Trainer Korporat, HSE Trainer / Safety Officer, HR Training Specialist, Manajer Operasional, Dosen / Guru Kejuruan, Konsultan Independen.'
    ],
    tableData: {
      headers: ['Skema Sertifikasi BNSP', 'Kualifikasi Jenjang KKNI', 'Persyaratan Peserta', 'Unit Kompetensi Kunci SKKNI'],
      rows: [
        ['Instruktur Pelatihan Tatap Muka', 'Jenjang Kualifikasi Level 3', 'Minimal D3 atau SLTA + Pengalaman Mengajar', 'Menyusun RPP, Menyajikan Materi, Evaluasi Belajar'],
        ['Instruktur Pelatihan Lanjutan (Master Trainer)', 'Jenjang Kualifikasi Level 4', 'Minimal S1 atau Pengalaman Trainer > 3 Tahun', 'Mendesain Kurikulum, Membuat Modul, Mengelola Program'],
        ['Asesor Kompetensi BNSP', 'Kualifikasi Asesor Lisensi Nasional', 'Telah Memiliki Sertifikat ToT + Pengalaman Bidang', 'Merencanakan & Melaksanakan Asesmen Kompetensi Profesi'],
        ['Masa Berlaku Sertifikat', '3 Tahun Sejak Tanggal Terbit', 'Diterbitkan Resmi Badan Nasional Sertifikasi Profesi', 'Dapat Diperpanjang Melalui LSP Terakreditasi']
      ]
    },
    caseStudy: 'Sebuah korporasi multinasional logistik berhasil menghemat biaya pelatihan eksternal hingga Rp 850 Juta per tahun setelah menyertifikasi 25 orang supervisor internalnya menjadi Instruktur Resmi BNSP yang mampu membawakan modul in-house.',
    stepByStepGuide: [
      { step: '1. Penyusunan Berkas Portofolio (APL-01 & 02)', desc: 'Menyiapkan CV, contoh modul pelatihan yang pernah dibawakan, RPP, dan dokumen bukti mengajar.' },
      { step: '2. Pembekalan Teori Metodologi Pelatihan', desc: 'Mendalami prinsip andragogi, struktur unit kompetensi SKKNI, dan teknik fasilitasi kelas.' },
      { step: '3. Simulasi Microteaching di Kelas', desc: 'Menampilkan praktik mengajar di depan kelas dengan dinilai langsung oleh Master Trainer senior.' },
      { step: '4. Uji Asesmen Bersama Asesor Resmi LSP BNSP', desc: 'Wawancara bukti portofolio dan demonstrasi mengajar untuk penerbitan Sertifikat Garuda Emas BNSP.' }
    ],
    links: [
      { href: '/kategori-pelatihan/public-speaking-dan-executive-pitching/', anchor: 'Public Speaking & Executive Pitching' },
      { href: '/kategori-pelatihan/matriks-kompetensi-k3-per-divisi/', anchor: 'Matriks Kompetensi K3 Per Divisi' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 8. Penyusunan KPI dan OKR Manufaktur
  {
    key: 'penyusunan-kpi-dan-okr-manufaktur',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/penyusunan-kpi-dan-okr-manufaktur/',
    archetype: 'role',
    title: 'Penyusunan KPI & OKR Manufaktur: Penyelarasan Target Pabrik',
    h1: 'Pelatihan Penyusunan Key Performance Indicators (KPI) & Objectives and Key Results (OKR) Industri Manufaktur: Menyelaraskan Target Direksi hingga Lantai Produksi',
    meta: 'Pelatihan penyusunan KPI dan OKR manufaktur: balanced scorecard pabrik, cascading target QCDSM, KPI kamus kerja, tracking dashboard & evaluasi kinerja.',
    imgAlt: 'Manajer pabrik dan tim HRD menyusun bagan cascading KPI departemen manufaktur menggunakan kerangka Balanced Scorecard pada layar monitor',
    related: ['pelatihan-supervisory-skills-pabrik', 'hr-management-for-non-hr-managers', 'cost-reduction-program-lean-waste', 'k3-keselamatan-kerja'],
    intro: 'Banyak perusahaan manufaktur menetapkan target tahunan yang ambisius dari jajaran direksi, namun target tersebut hilang tanpa jejak saat diterjemahkan ke level mandor dan operator lantai produksi. Pelatihan <strong>Penyusunan KPI & OKR Manufaktur</strong> memandu organisasi menyusun indikator kinerja yang SMART, melakukan penyelarasan berjenjang (Cascading KPI) melalui 4 perspektif Balanced Scorecard dan pilar QCDSM, serta menerapkan sistem monitoring dinamis menggunakan kerangka kerja OKR.',
    hazards: [
      '<strong>KPI Terisolasi & Saling Bertentangan (Silo Mentality):</strong> Divisi Produksi mengejar target output tonase tanpa memedulikan tingkat cacat divisi Quality.',
      '<strong>Indikator Kinerja yang Tidak Terukur (Unmeasurable KPI):</strong> Menggunakan rumusan kualitatif yang menimbulkan debat subjektif saat penilaian akhir tahun.',
      '<strong>Target Tidak Selaras dari Atas ke Bawah (Misaligned Goals):</strong> Operator bekerja keras setiap hari namun tidak berkontribusi pada sasaran strategis perusahaan.',
      '<strong>Pencatatan Data KPI Manual yang Rawan Manipulasi:</strong> Ketiadaan sistem verifikasi data angka pencapaian harian/bulanan.'
    ],
    regulations: [
      '<strong>Metodologi Balanced Scorecard Kaplan & Norton</strong>.',
      '<strong>Kerangka Kerja OKR (Objectives and Key Results) John Doerr</strong>.',
      '<strong>Standar ISO 9001:2015</strong> Klausul 6.2 (Sasaran Mutu dan Perencanaan untuk Mencapainya).'
    ],
    modules: [
      {
        name: 'Modul 1: Kerangka Balanced Scorecard & Pilar QCDSM Manufaktur',
        theory: 'Empat perspektif Balanced Scorecard (Financial, Customer, Internal Business Process, Learning & Growth), pilar QCDSM (Quality, Cost, Delivery, Safety, Morale), perbedaan KPI (Operational Tracking) vs OKR (Ambitious Growth).',
        practical: 'Penyusunan Peta Strategi Perusahaan (Corporate Strategy Map) untuk target manufaktur tahun berjalan.'
      },
      {
        name: 'Modul 2: Teknik Penurunan Target Berjenjang (Cascading & Alignment)',
        theory: 'Metode Cascading KPI: Corporate KPI -> Plant / Division KPI -> Department KPI -> Section KPI -> Individual KPI, kriteria SMART (Specific, Measurable, Achievable, Relevant, Time-Bound).',
        practical: 'Praktik menurunkan target Corporate "Menurunkan Biaya Produksi 10%" menjadi KPI spesifik Divisi Maintenance, Warehouse, dan Produksi.'
      },
      {
        name: 'Modul 3: Pembuatan Kamus KPI (KPI Dictionary) & Dashboard Monitoring Visual',
        theory: 'Struktur Kamus KPI (Formula Matematis, Sumber Data Verifikasi, Periode Ukur, Bobot Nilai, Polaritas Max/Min), desain Dashboard Visual Manajemen harian/mingguan.',
        practical: 'Penyusunan buku Kamus KPI Departemen lengkap dan simulasi sesi evaluasi kinerja bulanan (Monthly Performance Review).'
      }
    ],
    equipment: [
      'Master Template Spreadsheet Kamus KPI (KPI Dictionary Template) Lengkap dengan Formula.',
      'Format Lembar Kerja Cascading Target Balanced Scorecard.',
      'Template OKR Tracking Sheet (Quarterly Objectives & Key Results).',
      'Contoh Dashboard Visual KPI Manufaktur Siap Pakai.'
    ],
    participants: [
      'Direktur Operasional, Plant Manager, HR Director / HR Performance Specialist, Kepala Departemen (HOD), Production / Maintenance / HSE Supervisor.'
    ],
    tableData: {
      headers: ['Pilar QCDSM Manufaktur', 'Contoh Key Performance Indicators (KPI)', 'Formula Perhitungan Matematis', 'Polaritas Target'],
      rows: [
        ['Q: Quality (Kualitas)', 'Scrap / Defect Rate (%)', '(Total Produk Cacat / Total Output) x 100%', 'Minimize (Semakin Rendah Semakin Baik)'],
        ['C: Cost (Biaya Operasi)', 'Cost per Unit (Rp/Pcs)', 'Total Biaya Konversi Pabrik / Total Output Jadi', 'Minimize (Mengejar Efisiensi Biaya)'],
        ['D: Delivery (Pengiriman)', 'On-Time In-Full Delivery (OTIF %)', '(Order Tepat Waktu & Jumlah / Total Order) x 100%', 'Maximize (Mengejar Target 100%)'],
        ['S: Safety (Keselamatan K3)', 'Lost Time Injury Frequency Rate (LTIFR)', '(Jumlah Kasus LTI x 1.000.000) / Total Jam Kerja', 'Minimize (Target Mutlak 0.00)'],
        ['M: Morale (Semangat Tim)', 'Tingkat Absensi Tanpa Keterangan (%)', '(Total Hari Absen / Total Hari Kerja Tersedia) x 100%', 'Minimize (Target < 1%)']
      ]
    },
    caseStudy: 'Sebuah pabrik kemasan karton di Cikarang menyelaraskan KPI 350 karyawannya menggunakan model Balanced Scorecard, berhasil meningkatkan pencapaian On-Time Delivery dari 78% menjadi 98.5% dalam 1 tahun buku.',
    stepByStepGuide: [
      { step: '1. Penetapan Sasaran Strategis Direksi', desc: 'Merumuskan 3-5 sasaran utama perusahaan pada Peta Strategi Balanced Scorecard.' },
      { step: '2. Proses Cascading ke Tiap Departemen', desc: 'Menurunkan target corporate ke manajer departemen dan supervisor lini secara terukur.' },
      { step: '3. Penyusunan Kamus KPI Resmi', desc: 'Menuliskan formula perhitungan, sumber data yang sah, dan batas bobot penilaian di HRIS.' },
      { step: '4. Pelaksanaan Review Kinerja Berkala', desc: 'Menyelenggarakan evaluasi capaian KPI bulanan dan coaching bagi tim yang belum mencapai target.' }
    ],
    links: [
      { href: '/kategori-pelatihan/pelatihan-supervisory-skills-pabrik/', anchor: 'Pelatihan Supervisory Skills' },
      { href: '/kategori-pelatihan/hr-management-for-non-hr-managers/', anchor: 'HR Management for Non-HR' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  }
];
