import { ExtendedProgramDetail } from './batch4-master-data';

export const batch5RegionalAndStandards: ExtendedProgramDetail[] = [
  // 41. In-House Training K3 Cikarang Bekasi
  {
    key: 'in-house-training-k3-cikarang',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-cikarang/',
    title: 'In-House Training K3 Cikarang & Bekasi: Kawasan Industri MM2100, GIIC, EJIP, Jababeka',
    h1: 'In-House Training K3 Kawasan Industri Cikarang: Solusi Sertifikasi Kemnaker & BNSP di Lokasi Pabrik Anda',
    meta: 'Layanan in-house training K3 resmi di Cikarang & Bekasi: kawasan industri Jababeka, MM2100, EJIP, GIIC, Hyundai, dan Lippo Cikarang. Sertifikasi Kemnaker RI dan kurikulum customized pabrik otomotif/elektronik.',
    imgAlt: 'Sesi in-house training K3 di ruang pelatihan pabrik kawasan industri Jababeka Cikarang',
    related: ['in-house-training-k3-karawang', 'in-house-training-k3-tangerang', 'ahli-k3-umum'],
    intro: 'Layanan <strong>In-House Training K3 di Kawasan Industri Cikarang dan Bekasi</strong> dirancang khusus untuk memfasilitasi kebutuhan pelatihan keselamatan kerja bagi ratusan tenant industri otomotif, elektronik, manufaktur presisi, dan logistik di kawasan MM2100, GIIC Deltamas, EJIP, Hyundai, dan Jababeka langsung di lokasi pabrik (On-Site).',
    hazards: [
      '<strong>Biaya Operasional Membengkak Akibat Mengirim Peserta ke Luar:</strong> Biaya akomodasi dan hilangnya jam kerja puluhan karyawan.',
      '<strong>Materi Training yang Terlalu Teoretis:</strong> Pelatihan publik umum yang tidak menyentuh bahaya spesifik mesin dan layout pabrik Cikarang.',
      '<strong>Kesulitan Mengatur Jadwal Shift Produksi:</strong> Jadwal training publik yang berbenturan dengan siklus kerja shift pabrik.'
    ],
    regulations: ['<strong>UU No. 1 Tahun 1970</strong>.', '<strong>Permenaker No. 02/1992</strong>.', '<strong>PP No. 50 Tahun 2012</strong>.'],
    modules: [
      {
        name: 'Modul 1: Customized Plant Hazard Assessment & Kurikulum Spesifik Pabrik',
        theory: 'Penyesuaian materi dengan matriks HIRADC dan SOP internal pabrik manufaktur Cikarang.',
        practical: 'Audit langsung pada lini perakitan atau workshop maintenance pabrik klien.'
      },
      {
        name: 'Modul 2: Uji Kompetensi & Praktik Lapangan Terakreditasi',
        theory: 'Regulasi Kemnaker RI, persiapan ujian teori terstandar, verifikasi portofolio.',
        practical: 'Praktik alat keselamatan nyata menggunakan sarana dan mesin di pabrik klien.'
      }
    ],
    equipment: ['Mobile Training Kit & Simulator Portabel.', 'Alat Peraga Lengkap Sertifikasi Kemnaker.'],
    participants: ['Manajemen Pabrik Cikarang, HSE Coordinator Manufaktur, HRD & Training Lead, dan Tim Produksi.'],
    tableData: {
      headers: ['Kawasan Industri Sasaran di Cikarang', 'Sektor Industri Utama', 'Paket In-House Terpopuler'],
      rows: [
        ['MM2100 & EJIP Industrial Park', 'Otomotif & Presisi Jepang', 'Ahli K3 Umum, LOTO, Machine Guarding, Ergonomi'],
        ['GIIC Greenland Deltamas & Hyundai', 'Perakitan Kendaraan & Baterai EV', 'K3 Listrik, Forklift SIO Kemnaker, CSMS Vendor'],
        ['Kawasan Industri Jababeka 1-8', 'FMCG, Kimia, Logistik & Farmasi', 'Ahli K3 Kimia, Damkar Kelas D/C, First Aid P3K']
      ]
    },
    links: [
      { href: '/jenis-pelatihan/in-house-training-k3-karawang/', label: 'In-House Training Karawang' },
      { href: '/kategori-pelatihan/ahli-k3-umum/', label: 'Pelatihan Ahli K3 Umum' }
    ],
    faqs: [
      {
        q: 'Berapa jumlah minimum peserta untuk menyelenggarakan In-House Training K3 di Cikarang?',
        a: 'Kami melayani in-house training dengan jumlah peserta fleksibel, mulai dari kelas eksklusif 5-10 orang hingga kelas massal ratusan karyawan dengan jadwal shift yang disesuaikan penuh dengan operasional pabrik Anda.'
      }
    ]
  },

  // 42. In-House Training K3 Karawang
  {
    key: 'in-house-training-k3-karawang',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-karawang/',
    title: 'In-House Training K3 Karawang: Kawasan Industri KIIC, Surya Cipta, KIM',
    h1: 'In-House Training K3 Kawasan Industri Karawang: Pelatihan K3 Manufaktur Bersertifikat Resmi Kemnaker & BNSP',
    meta: 'In-house training K3 resmi di Karawang: KIIC, Surya Cipta, Karawang International Industrial City, KIM, dan GT Tech Park. Sertifikasi Kemnaker RI, Ahli K3 Umum, Forklift, LOTO, dan Damkar di pabrik Anda.',
    imgAlt: 'Instruktur K3 memandu workshop praktis pengoperasian alat pemadam api ringan APAR di halaman pabrik KIIC Karawang',
    related: ['in-house-training-k3-cikarang', 'in-house-training-k3-cilegon', 'ahli-k3-umum'],
    intro: 'Layanan <strong>In-House Training K3 Karawang</strong> melayani ribuan perusahaan manufaktur global di kawasan industri KIIC, Suryacipta City of Industry, dan Kawasan Industri Kujang Cikampek (KIC) dengan instruktur berpengalaman.',
    hazards: [
      '<strong>Ketidakpatuhan Lisensi Alat & Operator:</strong> Operator pabrik mengoperasikan overhead crane tanpa SIO Kemnaker yang sah.',
      '<strong>Kurangnya Koordinasi P2K3 Pabrik Karawang:</strong> Panitia K3 belum terdaftar secara legal di Disnaker Provinsi Jawa Barat.'
    ],
    regulations: ['<strong>UU No. 1 Tahun 1970</strong>.', '<strong>Permenaker No. 8 Tahun 2020</strong>.'],
    modules: [
      {
        name: 'Modul 1: Kurikulum K3 Manufaktur Otomotif & Heavy Industry Karawang',
        theory: 'Kepatuhan regulasi ketenagakerjaan, standar keselamatan pabrik multinasional.',
        practical: 'Audit kelayakan pengaman mesin dan jalur evakuasi pabrik.'
      }
    ],
    equipment: ['Perangkat Peraga Uji Beban & LOTO Kit.'],
    participants: ['HR Manager Karawang, EHS Specialist, Maintenance Engineer, dan Operator Pabrik.'],
    tableData: {
      headers: ['Kawasan Industri Karawang', 'Program Prioritas Utama', 'Sertifikasi'],
      rows: [
        ['KIIC Karawang Barat', 'Operator Forklift, Overhead Crane, AK3U', 'Kemnaker RI'],
        ['Surya Cipta Karawang Timur', 'Petugas P3K, Regu Damkar, Bejana Tekan', 'Kemnaker RI / BNSP']
      ]
    },
    links: [
      { href: '/jenis-pelatihan/in-house-training-k3-cikarang/', label: 'In-House Training Cikarang' },
      { href: '/kategori-pelatihan/ahli-k3-umum/', label: 'Pelatihan Ahli K3 Umum' }
    ],
    faqs: [
      {
        q: 'Apakah sertifikat yang diterbitkan untuk in-house training di Karawang sama resminya dengan public training?',
        a: 'Ya, seluruh sertifikat dan lisensi (SIO/SKP) yang diterbitkan melalui program in-house training kami adalah sertifikat resmi yang teregistrasi di Kementerian Ketenagakerjaan RI atau BNSP.'
      }
    ]
  },

  // 43. In-House Training K3 Cilegon Banten
  {
    key: 'in-house-training-k3-cilegon',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-cilegon/',
    title: 'In-House Training K3 Cilegon: Industri Baja, Kimia, Petrokimia & PLTU',
    h1: 'In-House Training K3 Kota Cilegon: Spesialis Pelatihan K3 Industri Kimia Berat, Pabrik Baja, dan Pembangkit Listrik',
    meta: 'In-house training K3 Cilegon & Banten: kawasan industri Krakatau Steel, Anyer, Ciwandan, Bojonegara, dan Merak. Sertifikasi Ahli K3 Kimia, Ruang Terbatas, B3, dan Damkar Industri.',
    imgAlt: 'Pelatihan in-house K3 penanganan tumpahan kimia dan pemakaian respirator di area pabrik kimia Cilegon Banten',
    related: ['in-house-training-k3-cikarang', 'ahli-k3-kimia', 'confined-space-entry'],
    intro: 'Cilegon adalah episentrum industri berat, petrokimia, peleburan baja, dan pembangkit listrik terbesar di Banten. Layanan <strong>In-House Training K3 Cilegon</strong> memberikan pelatihan keselamatan berisiko tinggi.',
    hazards: [
      '<strong>Potensi Bahaya Besar Ledakan Kimia Kilang:</strong> Penyimpanan ribuan ton zat kimia reaktif di area pesisir Selat Sunda.'
    ],
    regulations: ['<strong>Kepmenaker No. 187/1999</strong>.', '<strong>Permenaker No. 12/2015</strong>.'],
    modules: [
      {
        name: 'Modul 1: K3 Industri Kimia & Gas Berbahaya Cilegon',
        theory: 'Process Safety, Penanganan B3, Tanggap Darurat Gas Beracun.',
        practical: 'Drill tanggap darurat amonia/klorin dan pemakaian SCBA.'
      }
    ],
    equipment: ['Chemical Protective Suit Level A & Gas Detector Multi-Sensor.'],
    participants: ['HSE Kilang Kimia Cilegon, Teknisi Pabrik Baja, Operator PLTU, dan Tim Emergency Response.'],
    tableData: {
      headers: ['Kawasan Industri Cilegon', 'Fokus Pelatihan Unggulan'],
      rows: [
        ['Krakatau Industrial Estate Cilegon (KIEC)', 'Ahli K3 Kimia, Molten Metal Safety, Overhead Crane'],
        ['Kawasan Industri Merak & Anyer', 'Confined Space Rescue, Hazmat First Responder, PSM']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/ahli-k3-kimia/', label: 'Pelatihan Ahli K3 Kimia' },
      { href: '/kategori-pelatihan/confined-space-entry/', label: 'Pelatihan Confined Space' }
    ],
    faqs: [
      {
        q: 'Apakah materi in-house training di Cilegon dapat disesuaikan dengan jenis bahan kimia spesifik di pabrik kami?',
        a: 'Ya, tim instruktur spesialis kimia kami akan membedah SDS/MSDS spesifik zat kimia yang digunakan di fasilitas Anda untuk menyusun simulasi tanggap darurat yang 100% relevan.'
      }
    ]
  },

  // 44. In-House Training K3 Balikpapan
  {
    key: 'in-house-training-k3-balikpapan',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-balikpapan/',
    title: 'In-House Training K3 Balikpapan: Hub Migas, Tambang & Konstruksi IKN',
    h1: 'In-House Training K3 Balikpapan: Sertifikasi K3 Migas, Tambang Batubara Kaltim, dan Proyek Ibu Kota Nusantara (IKN)',
    meta: 'In-house training K3 resmi di Balikpapan & Kalimantan Timur: sertifikasi POP/POM Tambang, Rigger, Scaffolding, K3 Migas, dan K3 Konstruksi IKN. Pelatihan langsung di site atau basecamp perusahaan.',
    imgAlt: 'Pelatihan in-house lifting & rigging diadakan di workshop basecamp alat berat Balikpapan Kalimantan Timur',
    related: ['in-house-training-k3-samarinda', 'pengawas-operasional-pertama-pop', 'rigger'],
    intro: 'Balikpapan adalah gerbang logistik dan pusat jasa pertambangan batubara, kilang migas Pertamina RU V, serta proyek strategis nasional <strong>Ibu Kota Nusantara (IKN)</strong>. Layanan in-house training kami siap hadir di seluruh site Kaltim.',
    hazards: [
      '<strong>Sertifikasi Tenaga Kerja Tidak Sesuai Standar Migas & Minerba:</strong> Vendor ditolak masuk area konsesi akibat ketiadaan sertifikat BNSP/Kemnaker yang sah.'
    ],
    regulations: ['<strong>Kepmen ESDM No. 1827/2018</strong>.', '<strong>Permenaker No. 8/2020</strong>.'],
    modules: [
      {
        name: 'Modul 1: Sertifikasi Operasional Tambang & Rigging Kaltim',
        theory: 'Regulasi KaIT ESDM, teknik lifting keselamatan migas, pengawasan POP.',
        practical: 'Praktik rigging load test dan inspeksi tali kawat baja di workshop.'
      }
    ],
    equipment: ['Rigging Gear Inspection Kit & Inclinometer Tambang.'],
    participants: ['Kontraktor Tambang Kaltim, Subkontraktor IKN, Workshop Fabrikasi Balikpapan, dan HSE Lead.'],
    tableData: {
      headers: ['Sektor Klien Balikpapan', 'Program In-House Terpopuler', 'Akreditasi'],
      rows: [
        ['Jasa Penunjang Tambang & Migas', 'Rigger, Lifting Supervisor, POP Tambang', 'BNSP / Kemnaker RI'],
        ['Proyek Konstruksi IKN', 'Ahli K3 Konstruksi, Scaffolding Inspector, Bekerja di Ketinggian', 'Kemnaker RI / LPJK']
      ]
    },
    links: [
      { href: '/jenis-pelatihan/in-house-training-k3-samarinda/', label: 'In-House Training Samarinda' },
      { href: '/kategori-pelatihan/pengawas-operasional-pertama-pop/', label: 'Pelatihan POP Tambang' }
    ],
    faqs: [
      {
        q: 'Apakah instruktur dapat diterbangkan langsung ke site tambang pedalaman Kalimantan Timur?',
        a: 'Ya, instruktur dan tim penguji resmi kami siap dimobilisasi ke remote site tambang atau camp proyek di seluruh wilayah Kalimantan Timur dan Kalimantan Utara.'
      }
    ]
  },

  // 45. In-House Training K3 Batam
  {
    key: 'in-house-training-k3-batam',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-batam/',
    title: 'In-House Training K3 Batam: Shipyard, Galangan Kapal & Elektronik',
    h1: 'In-House Training K3 Kota Batam: Pelatihan K3 Galangan Kapal, Marine Offshore, dan Manufaktur Elektronik Kawasan FTZ',
    meta: 'In-house training K3 resmi di Batam & Kepulauan Riau: kawasan industri Batamindo Mukakuning, Tanjung Uncang Shipyard, Batu Ampar, dan Kabil. Sertifikasi Juru Las, Rigger, Scaffolding, dan AK3U.',
    imgAlt: 'Instruktur memandu pelatihan keselamatan kerja di ruang palka galangan kapal Tanjung Uncang Batam',
    related: ['galangan-kapal-dan-dok', 'in-house-training-k3-cikarang', 'juru-las-welder-certified'],
    intro: 'Batam sebagai Kawasan Perdagangan Bebas (FTZ) memiliki konsentrasi galangan kapal (shipyard) terbesar di Indonesia serta pusat manufaktur semikonduktor kelas dunia di Mukakuning.',
    hazards: [
      '<strong>Kecelakaan Kerja Panas di Galangan Kapal:</strong> Bahaya ledakan tangki kapal dan pekerjaan las di ruang palka tertutup.'
    ],
    regulations: ['<strong>UU No. 1 Tahun 1970</strong>.', '<strong>Permenaker No. 02/1982</strong>.'],
    modules: [
      {
        name: 'Modul 1: Marine & Shipyard Safety Batam',
        theory: 'Gas Freeing, Sandblasting Safety, Pengelasan Bejana Tekan, Bekerja di Ketinggian Dok.',
        practical: 'Praktik di galangan kapal klien Batam.'
      }
    ],
    equipment: ['Marine Gas Tester & Welding Inspection Kit.'],
    participants: ['Shipyard Safety Officer, Welder Batam, QC Marine Inspector, dan HRD Manufaktur Mukakuning.'],
    tableData: {
      headers: ['Kawasan Industri Batam', 'Spesialisasi In-House Training'],
      rows: [
        ['Tanjung Uncang & Sekupang', 'Shipyard Safety, Juru Las Kelas I/II, Scaffolding Dok Kapal'],
        ['Batamindo Mukakuning', 'Ergonomi Elektronik, Cleanroom Safety, Ahli K3 Umum']
      ]
    },
    links: [
      { href: '/industri/galangan-kapal-dan-dok/', label: 'K3 Galangan Kapal' },
      { href: '/peran-jabatan/juru-las-welder-certified/', label: 'Peran Juru Las Welder' }
    ],
    faqs: [
      {
        q: 'Apakah program pelatihan di Batam dapat diselenggarakan dalam format bilingual (Indonesia - Inggris)?',
        a: 'Ya, instruktur kami berpengalaman menyajikan materi pelatihan dalam Bahasa Inggris penuh atau bilingual untuk perusahaan multinasional dan ekspatriat di Batam.'
      }
    ]
  },

  // 46. In-House Training K3 Surabaya
  {
    key: 'in-house-training-k3-surabaya',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-surabaya/',
    title: 'In-House Training K3 Surabaya & Sidoarjo: Kawasan Industri SIER & Berbek',
    h1: 'In-House Training K3 Surabaya & Sidoarjo: Pelatihan K3 Terintegrasi untuk Kawasan Industri Jawa Timur',
    meta: 'In-house training K3 resmi di Surabaya & Sidoarjo: Rungkut SIER, Margomulyo, Berbek, Waru, dan Jabon. Sertifikasi Ahli K3 Umum, Forklift, Boiler, K3 Listrik, dan Damkar resmi Kemnaker RI.',
    imgAlt: 'Pelatihan in-house K3 pemeliharaan boiler dan bejana tekan di kawasan industri SIER Rungkut Surabaya',
    related: ['in-house-training-k3-gresik', 'in-house-training-k3-pasuruan', 'ahli-k3-umum'],
    intro: 'Surabaya dan Sidoarjo merupakan gerbang ekonomi Indonesia Timur dengan ribuan pabrik makanan-minuman, baja, plastik, dan pergudangan logistik di kawasan SIER dan Margomulyo.',
    hazards: [
      '<strong>Kepatuhan Audit Ketenagakerjaan Disnaker Jawa Timur:</strong> Kewajiban sertifikasi personil K3 untuk sertifikasi SMK3 Jawa Timur.'
    ],
    regulations: ['<strong>PP No. 50 Tahun 2012</strong>.', '<strong>Permenaker No. 02/1992</strong>.'],
    modules: [
      {
        name: 'Modul 1: Program K3 Komprehensif Manufaktur Jawa Timur',
        theory: 'SMK3 PP 50/2012, K3 Listrik, Keselamatan Pesawat Tenaga & Produksi.',
        practical: 'Simulasi audit internal dan uji riksa alat di pabrik.'
      }
    ],
    equipment: ['Electrical Tester & Acoustic Sound Meter.'],
    participants: ['HSE Manager Jatim, HR Director Surabaya, Plant Maintenance, dan Tim P2K3.'],
    tableData: {
      headers: ['Wilayah Industri', 'Program In-House Terfavorit'],
      rows: [
        ['Surabaya Rungkut (SIER) & Margomulyo', 'Ahli K3 Umum, Petugas P3K, Operator Forklift'],
        ['Sidoarjo & Waru', 'Operator Boiler, Teknisi Listrik, Damkar Kelas D/C']
      ]
    },
    links: [
      { href: '/jenis-pelatihan/in-house-training-k3-gresik/', label: 'In-House Training Gresik' },
      { href: '/kategori-pelatihan/ahli-k3-umum/', label: 'Pelatihan Ahli K3 Umum' }
    ],
    faqs: [
      {
        q: 'Bagaimana prosedur administrasi pengurusan SKP Ahli K3 Umum di Disnaker Jawa Timur?',
        a: 'Tim kami mendampingi seluruh proses administrasi mulai dari pendaftaran peserta di TemanK3 Kemnaker RI hingga penerbitan SKP dan lisensi resmi dari dinas terkait.'
      }
    ]
  },

  // 61. Perbedaan Sertifikasi Kemnaker dan BNSP
  {
    key: 'perbedaan-sertifikasi-kemnaker-dan-bnsp',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/perbedaan-sertifikasi-kemnaker-dan-bnsp/',
    title: 'Perbedaan Sertifikasi K3 Kemnaker dan BNSP: Panduan Legalitas & Karir',
    h1: 'Perbedaan Sertifikasi K3 Kemnaker RI vs BNSP: Legalitas Hukum, Kewenangan Lisensi SIO/SKP, dan Kebutuhan Industri',
    meta: 'Panduan lengkap perbandingan sertifikasi K3 Kemnaker RI dan BNSP: perbedaan dasar hukum, masa berlaku lisensi SIO, kewenangan penunjukan P2K3, dan mana yang wajib untuk perusahaan Anda.',
    imgAlt: 'Perbandingan sertifikat kompetensi BNSP berlogo Garuda emas dengan sertifikat penunjukan Ahli K3 Kemnaker RI',
    related: ['ahli-k3-umum', 'audit-smk3-pp-50-2012', 'lead-auditor-iso-45001'],
    intro: 'Banyak praktisi K3 dan bagian HRD perusahaan di Indonesia bingung memilih antara <strong>Sertifikasi K3 Kemnaker RI</strong> atau <strong>Sertifikasi K3 BNSP (Badan Nasional Sertifikasi Profesi)</strong>. Keduanya memiliki fungsi, dasar hukum, dan pengakuan wewenang yang berbeda secara fundamental.',
    hazards: [
      '<strong>Salah Memilih Sertifikasi untuk Syarat Legal Perusahaan:</strong> Mengikuti sertifikasi BNSP saat Disnaker mewajibkan Lisensi Penunjukan SKP Kemnaker untuk pembentukan P2K3.',
      '<strong>Gagal Lolos Tender Proyek Migas/Tambang:</strong> Kontraktor tidak memenuhi syarat sertifikasi kompetensi SKKNI yang disyaratkan Owner dalam dokumen tender.'
    ],
    regulations: ['<strong>UU No. 1 Tahun 1970</strong>.', '<strong>UU No. 13 Tahun 2003</strong> tentang Ketenagakerjaan.', '<strong>Permenaker No. 02/1992</strong>.'],
    modules: [
      {
        name: 'Modul 1: Landasan Hukum & Kewenangan Legalitas (Regulator vs Standar Profesi)',
        theory: 'Kemnaker sebagai Regulator Hukum (Menerbitkan SKP & Lisensi Kewenangan), BNSP sebagai Penjamin Kompetensi Profesi (Menerbitkan Sertifikat Kompetensi SKKNI).',
        practical: 'Audit kecocokan kebutuhan sertifikasi perusahaan dengan matriks regulasi.'
      },
      {
        name: 'Modul 2: Strategi Pemenuhan Kualifikasi Tender & Kepatuhan Perusahaan',
        theory: 'Kapan perusahaan WAJIB Kemnaker (P2K3, SIO Operator alat) dan kapan perusahaan WAJIB BNSP (Tender EPC, SKK Migas, Rekrutmen BUMN).',
        practical: 'Penyusunan Training Needs Analysis (TNA) kepatuhan sertifikasi korporat.'
      }
    ],
    equipment: ['Matriks Komparasi Legalitas Sertifikasi K3 Indonesia.', 'Buku Pedoman SKKNI K3.'],
    participants: ['HR Manager, HSE Lead, Recruitment Officer, dan Praktisi K3.'],
    tableData: {
      headers: ['Parameter Perbandingan', 'Sertifikasi K3 Kemnaker RI', 'Sertifikasi K3 BNSP (LSP)'],
      rows: [
        ['Lembaga Penerbit', 'Kementerian Ketenagakerjaan RI (Direktorat Bina K3)', 'Badan Nasional Sertifikasi Profesi (Melalui LSP Terlisensi)'],
        ['Dasar Hukum Acuan', 'UU No. 1/1970 & Peraturan Menteri Ketenagakerjaan', 'UU No. 13/2003 & Standar Kompetensi Kerja Nasional (SKKNI)'],
        ['Output Dokumen', 'Sertifikat Pembinaan + SKP Ahli K3 + Lisensi Kewenangan', 'Sertifikat Kompetensi Profesi Logo Garuda Emas'],
        ['Fungsi Utama', 'KEPATUHAN REGULASI HUKUM (Wajib untuk P2K3 & Izin Operasi)', 'PENGAKUAN KOMPETENSI INDIVIDUAL & KEBUTUHAN TENDER'],
        ['Masa Berlaku Lisensi', '3 Tahun (Wajib perpanjangan berkala)', '3 Tahun (Uji sertifikasi ulang / RCC)']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/ahli-k3-umum/', label: 'Pelatihan Ahli K3 Umum' },
      { href: '/kategori-pelatihan/audit-smk3-pp-50-2012/', label: 'Pelatihan Audit SMK3' }
    ],
    faqs: [
      {
        q: 'Jika perusahaan saya ingin membentuk Panitia Pembina K3 (P2K3) resmi, sertifikasi mana yang wajib dimiliki sekretaris P2K3?',
        a: 'Wajib memiliki Sertifikasi dan SKP Ahli K3 Umum resmi dari Kemnaker RI berdasarkan Permenaker No. 02/1992, karena hanya SKP Kemnaker yang diakui secara hukum untuk pengesahan struktur P2K3 di Disnaker.'
      }
    ]
  },

  // 62. Perpanjangan Lisensi SIO K3
  {
    key: 'perpanjangan-lisensi-sio-k3',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/perpanjangan-lisensi-sio-k3/',
    title: 'Layanan & Panduan Perpanjangan Lisensi SIO K3 Kemnaker RI',
    h1: 'Prosedur & Layanan Perpanjangan Lisensi K3 (SIO / SKP): Syarat Berkas, Verifikasi TemanK3, dan Waktu Proses Resmi',
    meta: 'Panduan dan layanan resmi perpanjangan lisensi K3 Kemnaker RI (SIO Operator & SKP Ahli K3): syarat dokumen perpanjangan, masa berlaku 3 tahun, proses via portal TemanK3, dan biaya kepatuhan.',
    imgAlt: 'Kartu Lisensi K3 SIO Kemnaker RI yang telah diperpanjang dengan kode QR verifikasi online resmi',
    related: ['ahli-k3-umum', 'operator-forklift', 'operator-crane'],
    intro: 'Seluruh Lisensi Kewenangan K3 dan Surat Izin Operator (SIO) yang diterbitkan oleh Kementerian Ketenagakerjaan RI memiliki masa berlaku resmi selama <strong>3 (tiga) tahun</strong>. Pengoperasian alat berat atau penandatanganan dokumen K3 dengan lisensi kedaluwarsa adalah pelanggaran hukum.',
    hazards: [
      '<strong>Penghentian Operasional Alat oleh Pengawas Ketenagakerjaan:</strong> Forklift atau crane disegel Disnaker karena SIO operator habis masa berlaku.',
      '<strong>Gugurnya Klaim Asuransi saat Terjadi Kecelakaan:</strong> Asuransi menolak klaim biaya kerusakan alat jika operator terbukti memegang SIO mati.',
      '<strong>Pinalti Audit CSMS Klien:</strong> Kontraktor dikenakan pengurangan nilai audit vendor akibat kelalaian perpanjangan lisensi.'
    ],
    regulations: ['<strong>Permenaker No. 8 Tahun 2020</strong>.', '<strong>Permenaker No. 02/1992</strong>.'],
    modules: [
      {
        name: 'Modul 1: Syarat & Alur Administrasi Perpanjangan Lisensi TemanK3',
        theory: 'Pemeriksaan keaslian sertifikat awal, surat keterangan sehat dokter, surat rekomendasi perusahaan, alur upload TemanK3.',
        practical: 'Verifikasi kelengkapan berkas perpanjangan SIO dan SKP.'
      }
    ],
    equipment: ['Sistem Verifikasi QR Code TemanK3 Kemnaker RI.'],
    participants: ['HR Officer, HSE Administrator, Operator Alat Berat, dan Pemegang SKP Ahli K3.'],
    tableData: {
      headers: ['Jenis Lisensi K3 Kemnaker', 'Masa Berlaku Resmi', 'Dokumen Wajib Perpanjangan'],
      rows: [
        ['SIO Operator (Forklift, Crane, Boiler, Welder)', '3 (Tiga) Tahun', 'KTP, SIO Asli lama, Sertifikat Pembinaan, Surat Sehat Dokter, Surat Tugas'],
        ['SKP & Lisensi Ahli K3 (Umum, Listrik, Kimia)', '3 (Tiga) Tahun', 'SKP Asli lama, Laporan kegiatan P2K3 semesteran, Surat Penunjukan Perusahaan'],
        ['Lisensi Petugas P3K & Damkar', '3 (Tiga) Tahun', 'Lisensi Asli lama, Sertifikat P3K/Damkar, Pasfoto background merah']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/ahli-k3-umum/', label: 'Pelatihan Ahli K3 Umum' },
      { href: '/kategori-pelatihan/operator-forklift/', label: 'Pelatihan Operator Forklift' }
    ],
    faqs: [
      {
        q: 'Berapa lama sebelum tanggal kedaluwarsa sebaiknya pengajuan perpanjangan SIO dilakukan?',
        a: 'Disarankan mengajukan perpanjangan sekurang-kurangnya 30 s.d 45 hari kerja sebelum tanggal masa berlaku lisensi habis untuk menghindari masa jeda (gap) di mana operator dilarang bekerja.'
      }
    ]
  },

  // 63. Pembentukan P2K3 di Perusahaan
  {
    key: 'pembentukan-panitia-pembina-k3-p2k3',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/pembentukan-panitia-pembina-k3-p2k3/',
    title: 'Panduan Pembentukan P2K3: Struktur, Legalitas & Pengesahan Disnaker',
    h1: 'Panduan Lengkap Pembentukan P2K3 di Perusahaan: Struktur Organisasi, Kewajiban Sekretaris Ahli K3, dan Pengesahan Disnaker',
    meta: 'Panduan resmi pembentukan Panitia Pembina Keselamatan dan Kesehatan Kerja (P2K3): Permenaker No. 04/1987, syarat wajib 100 karyawan/bahaya tinggi, format laporan triwulan P2K3, dan pengesahan Disnaker.',
    imgAlt: 'Bagan struktur organisasi P2K3 perusahaan yang ditandatangani oleh Direktur Utama dan disahkan oleh Kepala Dinas Ketenagakerjaan',
    related: ['ahli-k3-umum', 'audit-smk3-pp-50-2012', 'safety-leadership-dan-culture'],
    intro: '<strong>Panitia Pembina Keselamatan dan Kesehatan Kerja (P2K3)</strong> adalah badan pembina K3 wajib di tempat kerja berdasarkan <strong>Permenaker No. Per.04/MEN/1987</strong> bagi setiap perusahaan yang mempekerjakan 100 orang atau lebih, atau kurang dari 100 orang dengan tingkat bahaya tinggi.',
    hazards: [
      '<strong>Sanksi Pelanggaran Ketenagakerjaan:</strong> Perusahaan tidak memiliki struktur P2K3 yang disahkan Disnaker saat inspeksi resmi.',
      '<strong>Laporan Triwulan P2K3 yang Tidak Pernah Dikirim:</strong> Kegagalan pelaporan berkala yang menggagalkan audit SMK3.'
    ],
    regulations: ['<strong>UU No. 1 Tahun 1970 (Pasal 10)</strong>.', '<strong>Permenaker No. Per.04/MEN/1987</strong>.'],
    modules: [
      {
        name: 'Modul 1: Struktur & Tata Cara Pengesahan P2K3 ke Disnaker',
        theory: 'Ketua P2K3 (Pimpinan Puncak / Direktur), Sekretaris P2K3 (Wajib Ahli K3 Umum bersertifikat), Anggota (Perwakilan Pekerja & Manajemen).',
        practical: 'Penyusunan berkas permohonan pengesahan SK P2K3 ke Kantor Dinas Ketenagakerjaan.'
      },
      {
        name: 'Modul 2: Eksekusi Program P2K3 & Pelaporan Triwulanan',
        theory: 'Rapat pleno bulanan P2K3, inspeksi bahaya bersama, penyusunan Formulir Laporan Triwulan P2K3.',
        practical: 'Pembuatan draf Laporan Kegiatan P2K3 Triwulan I lengkap dengan data kecelakaan & statistik jam kerja.'
      }
    ],
    equipment: ['Template Master Dokumen P2K3 & Buku Register Laporan Disnaker.'],
    participants: ['Direktur Perusahaan, HR Manager, Sekretaris P2K3, dan Perwakilan Serikat Pekerja.'],
    tableData: {
      headers: ['Posisi dalam Struktur P2K3', 'Kualifikasi Personil Wajib', 'Peran & Wewenang Utama'],
      rows: [
        ['Ketua P2K3', 'Pimpinan Tertinggi Tempat Kerja (Direktur / GM)', 'Mengambil keputusan strategis & menyetujui anggaran K3'],
        ['Sekretaris P2K3', 'Ahli K3 Umum Kemnaker RI yang ditunjuk', 'Mengelola administrasi K3 harian & laporan ke Disnaker'],
        ['Anggota P2K3', 'Perwakilan Manajemen & Pekerja Lintas Divisi', 'Menyampaikan aspirasi keselamatan & audit lapangan']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/ahli-k3-umum/', label: 'Pelatihan Ahli K3 Umum' },
      { href: '/kategori-pelatihan/audit-smk3-pp-50-2012/', label: 'Pelatihan Audit SMK3' }
    ],
    faqs: [
      {
        q: 'Berapa kali perusahaan wajib menyampaikan Laporan Kegiatan P2K3 ke Kantor Disnaker setempat?',
        a: 'Berdasarkan Permenaker No. 04/1987 Pasal 12, P2K3 wajib menyampaikan laporan mengenai hasil kegiatan keselamatan kerja kepada Menteri Ketenagakerjaan melalui Kepala Kantor Wilayah / Disnaker setempat sekurang-kurangnya 1 (satu) kali setiap 3 (tiga) bulan (Triwulan).'
      }
    ]
  },

  // 64. Kebutuhan APAR dan Hydrant Gedung
  {
    key: 'kebutuhan-apar-dan-hydrant-gedung',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/kebutuhan-apar-dan-hydrant-gedung/',
    title: 'Panduan Teknis Perhitungan Kebutuhan APAR & Hydrant Gedung',
    h1: 'Panduan Perhitungan APAR & Hydrant: Rumus Cakupan Permenaker No. 04/1980, Penempatan Titik, dan Tekanan Nozel',
    meta: 'Panduan teknis menghitung kebutuhan APAR dan sistem Hydrant gedung industri: jarak jangkau 15 meter, klasifikasi hunian bahaya kebakaran, debit pompa hydrant, dan standar NFPA 10/14.',
    imgAlt: 'Teknisi K3 melakukan pengetesan tekanan pancaran air nozel pilar hydrant halaman pabrik dengan pressure gauge',
    related: ['penggunaan-apar', 'hydrant-dan-sprinkler', 'fire-fighting-dasar'],
    intro: 'Penentuan jumlah, jenis media, dan titik lokasi Alat Pemadam Api Ringan (APAR) serta instalasi pipa Hydrant gedung wajib mengikuti perhitungan matematis sesuai <strong>Permenaker No. 04/1980 &amp; SNI 03-1745-2000</strong>.',
    hazards: [
      '<strong>APAR Tidak Mampu Menjangkau Titik Api Awal:</strong> Jarak antar APAR melebihi 15 meter sehingga api membesar sebelum APAR diambil.',
      '<strong>Tekanan Nozel Hydrant Drop:</strong> Pipa tersumbat atau kapasitas pompa kebakaran tidak mampu menyuplai tekanan 4.5 bar pada nozel tertinggi.'
    ],
    regulations: ['<strong>Permenaker No. Per.04/MEN/1980</strong>.', '<strong>SNI 03-1745-2000</strong>.', '<strong>Standar NFPA 10 & NFPA 14</strong>.'],
    modules: [
      {
        name: 'Modul 1: Kalkulasi Penempatan APAR Berdasarkan Luas Lantai',
        theory: 'Jarak maksimum 15 meter, tinggi pemasangan 1.2 meter dari lantai, pemilihan media (Dry Powder, CO2, Foam, Clean Agent).',
        practical: 'Perhitungan titik plot APAR pada denah lantai pabrik luas 5.000 m².'
      },
      {
        name: 'Modul 2: Hidrolika Pipa Hydrant & Uji Tekanan Aliran (Flow Test)',
        theory: 'Debit 500 GPM pipa tegak, cadangan air minimal 45 menit, tekanan nozel 4.5 – 7.0 bar, inspeksi Siamese Connection.',
        practical: 'Praktik pengukuran tekanan statis dan dinamis pada pillar hydrant terjauh.'
      }
    ],
    equipment: ['Hydrant Pitot Tube Flow Gauge Kit.', 'Master Tabel Standar NFPA 10 & 14.'],
    participants: ['Fire Safety Engineer, Facility Manager, HSE Inspector, dan Teknisi MEP Gedung.'],
    tableData: {
      headers: ['Parameter Proteksi Kebakaran', 'Standar Ketentuan Permenaker 04/1980 & SNI', 'Catatan Teknis Lapangan'],
      rows: [
        ['Jarak Jangkau Maksimum APAR', 'Maksimal 15 Meter dari setiap titik ruangan', 'Dilarang terhalang tumpukan barang / lemari'],
        ['Tinggi Pemasangan Tabung APAR', '120 cm (1.2 meter) dari permukaan lantai', 'Wajib disertai tanda segitiga merah APAR di dinding'],
        ['Tekanan Minimum Nozel Hydrant', 'Minimal 4.5 Bar (65 psi) pada titik terjauh', 'Dihitung saat 2 nozel hydrant dibuka serentak'],
        ['Cadangan Air Tangki Pemadam', 'Minimal mampu menyuplai air 45 – 90 menit operasi', 'Tangki terpisah khusus kebakaran (Dedicated Tank)']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/penggunaan-apar/', label: 'Pelatihan Penggunaan APAR' },
      { href: '/kategori-pelatihan/hydrant-dan-sprinkler/', label: 'Pelatihan Hydrant & Sprinkler' }
    ],
    faqs: [
      {
        q: 'Berapa tinggi standar penempatan tabung APAR di dinding menurut regulasi Indonesia?',
        a: 'Berdasarkan Permenaker No. 04 Tahun 1980 Pasal 8, tabung APAR harus dipasang menggantung pada dinding dengan penguat atau ditempatkan dalam lemari kaca dengan tinggi puncak tabung 1.2 meter dari permukaan lantai.'
      }
    ]
  }
];

console.log(`Loaded ${batch5RegionalAndStandards.length} Regionals & Standards for Batch 5.`);
