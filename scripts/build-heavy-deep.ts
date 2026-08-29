import fs from 'fs';
import path from 'path';
import { renderProgramHtml, ProgramDetail } from './master-batch1-data';

const heavyList: ProgramDetail[] = [
  // 17. Lifting Operation Safety
  {
    key: 'lifting-operation-safety',
    title: 'Pelatihan Lifting Operation Safety: Keselamatan Operasi Pengangkatan',
    h1: 'Pelatihan Lifting Operation Safety: Pencegahan Kegagalan Crane, Drop Object, dan Overturning',
    meta: 'Pelatihan keselamatan operasi pengangkatan: 10 golden rules of lifting, inspeksi rigging hardware, mitigasi bahaya angin kencang, dan zona aman lifting radius.',
    imgAlt: 'Barikade perimeter keselamatan terpasang rapi di sekitar area radius kerja mobile crane yang sedang beroperasi',
    related: ['lifting-supervisor', 'operator-crane', 'rigger', 'operator-mobile-crane'],
    intro: 'Keselamatan operasi pengangkatan (<em>Lifting Operation Safety</em>) mencakup kedisiplinan ekosistem kerja yang menghubungkan operator, juru ikat, pengawas, dan pekerja di sekitar radius angkat. Di sektor pertambangan, perminyakan, dan konstruksi, kegagalan operasi lifting merupakan penyumbang insiden fatalitas utama yang menghancurkan struktur dan menghentikan operasional fasilitas.',
    hazards: [
      '<strong>Melintas di Bawah Muatan Menggantung (Line of Fire):</strong> Pekerja berjalan atau berdiri di bawah muatan yang sedang terangkat.',
      '<strong>Kegagalan Integritas Tali Kawat Baja (Wire Rope Failure):</strong> Keausan tersembunyi pada kawat baja drum crane yang memicu putusnya sling saat menahan beban kejut.',
      '<strong>Pengaruh Kecepatan Angin (Wind Gust Hazard):</strong> Angin mendadak mengayunkan muatan berpermukaan lebar (seperti tangki/pelat) hingga crane kehilangan keseimbangan.',
      '<strong>Pelanggaran Radius Barikade:</strong> Orang yang tidak berkepentingan masuk ke area blind spot counterweight crane.'
    ],
    regulations: [
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang Keselamatan dan Kesehatan Kerja Pesawat Angkat dan Pesawat Angkut.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Standar Internasional ISO 12480-1</strong> (Cranes - Safe Use - General).',
      '<strong>Standar ASME B30 Series</strong> (Safety Standard for Cableways, Cranes, Derricks, Hoists, Hooks, Jacks, and Slings).'
    ],
    modules: [
      {
        name: 'Modul 1: 10 Golden Rules of Safe Lifting',
        theory: 'Prinsip nol toleransi: izin kerja lifting, inspeksi pra-pakai, single signal person, larangan berada di bawah muatan.',
        practical: 'Audit kepatuhan 10 Golden Rules pada rekaman video operasi lifting aktual.'
      },
      {
        name: 'Modul 2: Mitigasi Bahaya Lingkungan & Cuaca Ekstrem',
        theory: 'Batas kecepatan angin operasional (maks 9.8 m/s atau 35 km/jam), bahaya petir, visibility limit.',
        practical: 'Pengukuran kecepatan angin menggunakan digital anemometer dan kalkulasi luas permukaan angin (wind drag).'
      },
      {
        name: 'Modul 3: Zonasi Barikade & Manajemen Radius Bahaya',
        theory: 'Penetapan zona bahaya (Drop Zone & Swing Radius), pemasangan barikade fisik rigid vs pita pengaman.',
        practical: 'Simulasi pemasangan perimeter zona eksklusi pada mobile crane 50 ton.'
      },
      {
        name: 'Modul 4: Investigasi & Pelaporan Insiden Angkat Angkut',
        theory: 'Metodologi RCA (Root Cause Analysis), kegagalan mekanikal vs kelalaian operasional, tindakan korektif pencegahan.',
        practical: 'Studi kasus investigasi insiden crane rebah di proyek jembatan tol.'
      }
    ],
    equipment: [
      'Digital Anemometer & Sound Level Meter.',
      'Barrier Tape, Safety Cones, dan Magnetic Warning Signs.',
      'Rigging Rejection Gauge & Wire Rope Caliper.',
      'Formulir Pre-Lift Safety Checklist & Dynamic Risk Assessment.'
    ],
    participants: [
      'Safety Officer, Safety Inspector, dan HSE Coordinator.',
      'Lifting Engineer, Rigging Supervisor, dan Crane Inspector.',
      'Site Manager, Superintendent, dan Pelaksana Proyek.'
    ],
    tableData: {
      headers: ['Kecepatan Angin (m/s)', 'Kondisi Operasional', 'Tindakan yang Wajib Dilakukan'],
      rows: [
        ['< 7.0 m/s (25 km/jam)', 'Normal / Aman', 'Operasi pengangkatan berjalan sesuai Lifting Plan standar'],
        ['7.0 – 9.8 m/s (25-35 km/jam)', 'Waspada (Batas Beban Luas)', 'Hentikan pengangkatan beban berpermukaan besar (panel/tangki)'],
        ['> 9.8 m/s (35 km/jam)', 'KRITIS / BERBAHAYA', 'STOP KERJA MUTLAK - Turunkan boom dan posisikan crane aman']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/lifting-supervisor/', label: 'Pelatihan Lifting Supervisor' },
      { href: '/kategori-pelatihan/operator-crane/', label: 'Pelatihan Operator Crane' },
      { href: '/kategori-pelatihan/rigger/', label: 'Pelatihan Rigger' }
    ],
    faqs: [
      {
        q: 'Apa penyebab nomor satu crane mobile terguling (crane tipping)?',
        a: 'Penyebab nomor satu adalah perpanjangan radius kerja beban melebihi batas aman tabel beban (over-radius), amblesnya outrigger akibat tanah lunak tanpa matting yang memadai, atau kesalahan pembacaan sensor LMI.'
      }
    ]
  },

  // 18. Operator Forklift
  {
    key: 'operator-forklift',
    title: 'Pelatihan Operator Forklift: Sertifikasi SIO K3 Kemnaker',
    h1: 'Pelatihan Operator Forklift (Kelas I & II): Teknik Manuver Aman, Stabilitas Segitiga, dan Daily Inspection',
    meta: 'Pelatihan operator forklift bersertifikat SIO Kemnaker: prinsip stabilitas segitiga beban, load capacity chart, SOP manuver di rampa/tikungan, dan inspeksi harian P2H.',
    imgAlt: 'Operator forklift mengenakan rompi reflektif dan sabuk pengaman sedang memindahkan palet barang di gudang',
    related: ['operator-reach-truck', 'operator-pallet-stacker', 'keselamatan-alat-berat'],
    intro: 'Forklift adalah peralatan material handling paling vital di industri, namun juga mencatat angka kecelakaan kerja tabrakan pejalan kaki dan unit terguling tertinggi di area logistik dan pergudangan. Pelatihan ini melatih operator menguasai kendali unit secara profesional sesuai regulasi Permenaker No. 8 Tahun 2020.',
    hazards: [
      '<strong>Unit Terguling ke Samping (Tip-Over):</strong> Berbelok tajam dengan kecepatan tinggi saat tiang garpu (mast) terangkat ke atas.',
      '<strong>Tabrakan dengan Pejalan Kaki (Pedestrian Collision):</strong> Melaju maju saat pandangan tertutup muatan tinggi tanpa membunyikan klakson di persimpangan.',
      '<strong>Beban Runtuh (Load Drop):</strong> Membawa muatan melebihi kapasitas tanpa memiringkan tiang ke belakang (tilt back).',
      '<strong>Terperosok di Rampa Kontainer:</strong> Menginjak tepi dock leveller yang belum terkunci kokoh pada bak truk trailer.'
    ],
    regulations: [
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang K3 Pesawat Angkat dan Angkut (Ketentuan Operator Forklift Kelas I & II).',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Standar ASME B56.1</strong> (Safety Standard for Low Lift and High Lift Trucks).'
    ],
    modules: [
      {
        name: 'Modul 1: Prinsip Fisika Stabilitas Segitiga (Stability Triangle)',
        theory: 'Pusat gravitasi unit vs muatan, pengaruh tinggi angkat terhadap batas guling, load center distance 500/600 mm.',
        practical: 'Perhitungan kapasitas angkat riil berdasarkan tabel grafik beban unit (Load Capacity Plate).'
      },
      {
        name: 'Modul 2: Pemeriksaan Harian Pra-Operasi (P2H)',
        theory: 'Checklist sistem hidrolik, kebocoran oli, rantai mast, keausan garpu (<10%), rem tangan, seatbelt interlock.',
        practical: 'Praktik inspeksi mandiri P2H unit diesel / elektrik dalam waktu 10 menit.'
      },
      {
        name: 'Modul 3: Teknik Manuver & Pengendalian di Lorong Sempit',
        theory: 'Travelling height (15-20 cm), SOP tanjakan/turunan (beban selalu di posisi atas), navigasi blind spot.',
        practical: 'Uji keterampilan manuver angka delapan (figure-8) maju dan mundur di antara rintangan cone.'
      },
      {
        name: 'Modul 4: Teknik Stacking & De-stacking Racking Gudang',
        theory: 'Penyelarasan garpu horizontal, penataan palet ganda, manuver mast tilt, penempatan beban di rak level 3.',
        practical: 'Simulasi bongkar muat palet seberat 1.5 ton pada sistem racking gudang.'
      }
    ],
    equipment: [
      'Unit Forklift Diesel / Elektrik 3 Ton terawat dengan safety belt dan reverse buzzer.',
      'Safety Traffic Cones dan Palet Beban Standar Industri.',
      'Checklist Formulir P2H Operator dan Wear Gauge Ketebalan Garpu.'
    ],
    participants: [
      'Operator Forklift Gudang, Pabrik Manufaktur, dan Depo Logistik.',
      'Teknisi Maintenance Alat Angkut dan Warehouse Supervisor.',
      'Petugas K3 Logistik dan Material Handling.'
    ],
    tableData: {
      headers: ['Kelas Lisensi SIO', 'Kapasitas Angkat Maksimal', 'Persyaratan Pendidikan Minimal', 'Masa Berlaku SIO'],
      rows: [
        ['Operator Forklift Kelas II', 'Hingga 15 Ton', 'Min. SMP / Sederajat', '5 Tahun (Kemnaker RI)'],
        ['Operator Forklift Kelas I', 'Di atas 15 Ton', 'Min. SMA / SMK Sederajat', '5 Tahun (Kemnaker RI)']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/operator-reach-truck/', label: 'Pelatihan Operator Reach Truck' },
      { href: '/kategori-pelatihan/operator-pallet-stacker/', label: 'Pelatihan Operator Pallet Stacker' },
      { href: '/kategori-pelatihan/keselamatan-alat-berat/', label: 'Pelatihan Keselamatan Alat Berat' }
    ],
    faqs: [
      {
        q: 'Apa perbedaan lisensi Operator Forklift Kelas I dan Kelas II di Kemnaker?',
        a: 'Berdasarkan Permenaker No. 8 Tahun 2020: Operator Kelas II berwenang mengoperasikan forklift dengan kapasitas angkat sampai dengan 15 ton. Sedangkan Operator Kelas I berwenang mengoperasikan forklift dengan kapasitas di atas 15 ton.'
      },
      {
        q: 'Mengapa posisi garpu forklift harus selalu rendah saat berjalan?',
        a: 'Saat forklift bergerak tanpa atau dengan beban, garpu wajib diposisikan setinggi 15–20 cm dari lantai kerja (travelling height) dengan tiang mast dimiringkan ke belakang (tilt back) untuk menjaga titik pusat gravitasi tetap rendah di dalam segitiga stabilitas.'
      }
    ]
  },

  // 21. Operator Crane
  {
    key: 'operator-crane',
    title: 'Pelatihan Operator Crane: Sertifikasi SIO K3 Pesawat Angkat Angkut',
    h1: 'Pelatihan Operator Crane: Kompetensi Pengoperasian, Load Chart Reading, dan Keselamatan Lifting',
    meta: 'Pelatihan operator crane (SIO Kemnaker Kelas A/B/C): pemahaman Load Moment Indicator (LMI), anti-two-block system, uji fungsi rem hoisting, dan emergency stop.',
    imgAlt: 'Operator crane memegang kendali joystick di dalam kabin operator memantau layar display komputer LMI',
    related: ['operator-mobile-crane', 'operator-overhead-crane', 'rigger', 'lifting-supervisor'],
    intro: 'Pengoperasian crane memerlukan konsentrasi tinggi, pemahaman fisika mekanika beban, serta ketelitian membaca sistem komputer pendukung (Load Moment Indicator). Pelatihan ini memfasilitasi pembinaan operator crane tersertifikasi resmi sesuai standar K3 nasional.',
    hazards: [
      '<strong>Overloading Melewati Load Chart:</strong> Memaksa mengangkat beban melebihi batas radius aman yang memicu patah boom atau guling unit.',
      '<strong>Kegagalan Sistem Anti-Two Block (A2B):</strong> Hook block menabrak ujung kepala boom (boom tip) hingga kawat seling putus.',
      '<strong>Kontak Kabel Udara Bertegangan (Power Line Electrocution):</strong> Ujung boom mendekati jaringan kabel listrik SUTET tanpa isolasi.',
      '<strong>Kegagalan Rem Hoisting (Brake Failure):</strong> Beban meluncur jatuh bebas tak terkendali saat berada di ketinggian.'
    ],
    regulations: [
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang Keselamatan dan Kesehatan Kerja Pesawat Angkat dan Pesawat Angkut.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Standar ASME B30.5</strong> (Mobile Cranes) dan <strong>ASME B30.2</strong> (Overhead Cranes).'
    ],
    modules: [
      {
        name: 'Modul 1: Anatomi Mekanikal & Sistem Keselamatan Crane',
        theory: 'Mekanisme hoisting, luffing, slewing, telescoping, fungsi LMI, anemometer, level bubble, outrigger interlock.',
        practical: 'Audit fungsi sensor keselamatan komputer kabin (LMI Pre-operation test).'
      },
      {
        name: 'Modul 2: Pembacaan Tabel Beban (Load Chart Calculation)',
        theory: 'Panjang boom, radius kerja, sudut boom, counterweight configuration, on-outrigger vs on-rubber rating.',
        practical: 'Kalkulasi batas kapasitas angkat bersih pada skenario radius 12 meter dan 18 meter.'
      },
      {
        name: 'Modul 3: Teknik Manuver Pengangkatan Presisi (Smooth Operation)',
        theory: 'Meredam ayunan beban (anti-sway technique), akselerasi/deselerasi bertahap, koordinasi sinyal.',
        practical: 'Uji simulasi pengangkatan muatan melewati rintangan labirin tanpa menyentuh tiang pembatas.'
      },
      {
        name: 'Modul 4: Prosedur Darurat & Blackout Mesin',
        theory: 'Penanganan mesin mati mendadak saat muatan menggantung, prosedur emergency lowering manual hidrolik.',
        practical: 'Drill penurunan beban secara aman saat terjadi simulasi kegagalan sistem kelistrikan.'
      }
    ],
    equipment: [
      'Unit Crane Lapangan dengan sistem komputer Load Moment Indicator (LMI) aktif.',
      'Beban Uji Terkalibrasi (Test Weight) dan Rigging Shackle/Sling bersertifikat.',
      'Anemometer, Radio Komunikasi Sinyal, dan Safety Barricade Kit.'
    ],
    participants: [
      'Calon Operator Crane dan Operator Berpengalaman yang membutuhkan pembaruan SIO.',
      'Teknisi Mekanik & Listrik Pesawat Angkat.',
      'Pengawas Lapangan Lifting dan Safety Inspector.'
    ],
    tableData: {
      headers: ['Kelas SIO Crane', 'Kapasitas Beban Kerja', 'Kualifikasi Mesin', 'Masa Berlaku'],
      rows: [
        ['Kelas C / III', 'Hingga 25 Ton', 'Mobile / Overhead / Tower Crane', '5 Tahun (Kemnaker RI)'],
        ['Kelas B / II', '> 25 Ton s.d 100 Ton', 'Mobile / Crawler / Gantry Crane', '5 Tahun (Kemnaker RI)'],
        ['Kelas A / I', 'Di atas 100 Ton', 'Heavy Lift All Terrain / Super Crane', '5 Tahun (Kemnaker RI)']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/operator-mobile-crane/', label: 'Pelatihan Operator Mobile Crane' },
      { href: '/kategori-pelatihan/rigger/', label: 'Pelatihan Rigger' },
      { href: '/kategori-pelatihan/lifting-supervisor/', label: 'Pelatihan Lifting Supervisor' }
    ],
    faqs: [
      {
        q: 'Apa pembagian kelas lisensi Operator Crane menurut Permenaker No. 8/2020?',
        a: 'Operator Crane Kelas III untuk kapasitas s.d 25 ton; Operator Kelas II untuk kapasitas >25 ton s.d 100 ton; dan Operator Kelas I untuk kapasitas di atas 100 ton atau jenis crane berteknologi kompleks.'
      }
    ]
  },

  // 26. Operator Excavator
  {
    key: 'operator-excavator',
    title: 'Pelatihan Operator Excavator: Sertifikasi SIO K3 Alat Berat',
    h1: 'Pelatihan Operator Excavator: Teknik Penggalian Aman, Stabilitas Lereng, dan Inspeksi Hidrolik',
    meta: 'Pelatihan operator excavator (SIO Kemnaker): zona blind spot swing 360°, pencegahan rollover di kemiringan, identifikasi utilitas pipa/kabel bawah tanah, dan daily P2H.',
    imgAlt: 'Excavator hidrolik melakukan penggalian lereng tanah secara presisi di area proyek galian',
    related: ['operator-wheel-loader', 'operator-bulldozer', 'keselamatan-alat-berat'],
    intro: 'Excavator adalah alat berat paling serbaguna di pertambangan dan konstruksi, namun memiliki area titik buta (<em>blind spot</em>) putaran kabin 360° yang sangat berbahaya bagi pekerja di darat. Pelatihan ini melatih operator bekerja secara produktif, presisi, dan aman.',
    hazards: [
      '<strong>Tabrakan Putaran Kabin (Swing Radius Strike):</strong> Menghantam pekerja darat atau kendaraan lain saat bermanuver putar cepat.',
      '<strong>Longsoran Dinding Galian (Trench Cave-In):</strong> Memposisikan track terlalu dekat ke bibir galian tanah labil tanpa pengaman terasering.',
      '<strong>Mengenai Utilitas Bawah Tanah (Utility Strike):</strong> Menghantam pipa gas bertekanan tinggi atau kabel listrik bawah tanah saat menggali.',
      '<strong>Unit Terguling di Lereng (Rollover):</strong> Melakukan manuver swing beban penuh ke arah kemiringan lereng yang curam.'
    ],
    regulations: [
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang K3 Pesawat Angkat dan Angkut.',
      '<strong>Permen ESDM No. 26 Tahun 2018</strong> tentang Pelaksanaan Kaidah Pertambangan yang Baik.',
      '<strong>Standar ISO 7135</strong> (Earth-moving machinery - Hydraulic excavators).'
    ],
    modules: [
      {
        name: 'Modul 1: Anatomi Mekanikal & Sistem Hidrolik Ekskavator',
        theory: 'Prinsip pompa hidrolik variabel, silinder boom/arm/bucket, swing motor, track undercarriage tension.',
        practical: 'Pemeriksaan harian P2H level oli hidrolik, kebocoran seal cylinder, dan keausan tooth bucket.'
      },
      {
        name: 'Modul 2: Manajemen Blind Spot & Interaksi Manusia-Alat',
        theory: 'Pemetaan zona buta 360°, penggunaan cermin spion, kamera belakang, aturan kontak mata dan radio klakson.',
        practical: 'Drill komunikasi klakson standar tambang (1x hidupkan mesin, 2x maju, 3x mundur).'
      },
      {
        name: 'Modul 3: Teknik Penggalian Lereng & Trenching Aman',
        theory: 'Sudut lereng aman (angle of repose), teknik benching bertingkat, penempatan timbunan tanah (spoil pile).',
        practical: 'Praktik penggalian trench lurus dengan dinding berundak setinggi 3 meter.'
      },
      {
        name: 'Modul 4: Teknik Loading ke Bak Dump Truck',
        theory: 'Sudut ayunan optimal (45° – 90°), ketinggian bucket di atas dump body, penataan distribusi beban.',
        practical: 'Simulasi loading material tanah ke dump truck dalam 5 siklus bucket presisi.'
      }
    ],
    equipment: [
      'Unit Excavator Hidrolik Kelas 20 Ton (Komatsu PC200 / CAT 320 / Kobelco SK200).',
      'Checklist Formulir P2H Alat Berat Tambang/Konstruksi.',
      'Safety Barrier Cones dan Patok Pengukur Kedalaman Galian.'
    ],
    participants: [
      'Operator Excavator Tambang, Konstruksi, dan Perkebunan.',
      'Mekanik Alat Berat dan Pengawas Lapangan Earthmoving.',
      'Safety Officer Pertambangan dan Konstruksi Sipil.'
    ],
    tableData: {
      headers: ['Sinyal Klakson', 'Arti Instruksi Operasional', 'Tindakan Operator', 'Respon Pekerja Sekitar'],
      rows: [
        ['1x Bunyi Panjang', 'Menghidupkan Mesin Unit', 'Tunggu 5 detik sebelum start engine', 'Pekerja menjauh dari area mesin'],
        ['2x Bunyi Pendek', 'Unit Akan Bergerak Maju', 'Periksa spion & kamera sebelum maju', 'Pembersihan jalur jalan unit'],
        ['3x Bunyi Pendek', 'Unit Akan Bergerak Mundur', 'Aktifkan alarm mundur dan amati spion', 'Kosongkan area belakang unit']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/operator-wheel-loader/', label: 'Pelatihan Operator Wheel Loader' },
      { href: '/kategori-pelatihan/operator-bulldozer/', label: 'Pelatihan Operator Bulldozer' },
      { href: '/kategori-pelatihan/keselamatan-alat-berat/', label: 'Pelatihan Keselamatan Alat Berat' }
    ],
    faqs: [
      {
        q: 'Bagaimana posisi track excavator yang benar saat melakukan penggalian di tebing?',
        a: 'Track atau rantai excavator wajib berada dalam posisi tegak lurus terhadap garis tebing/galian dengan posisi idler di depan dan final drive di belakang, guna memberikan stabilitas maksimum dan memungkinkan manuver mundur cepat jika terjadi longsoran tebing.'
      }
    ]
  },

  // 31. Hot Work Safety
  {
    key: 'hot-work-safety',
    title: 'Pelatihan Hot Work Safety: Keselamatan Pekerjaan Panas & Pengelasan',
    h1: 'Pelatihan Hot Work Safety: Pencegahan Kebakaran, Pengendalian Percikan Api, dan Gas Monitoring',
    meta: 'Pelatihan pekerjaan panas (hot work): radius 11 meter (35 feet) clearance bahan mudah terbakar, penggunaan fire blanket, pemeriksaan flashback arrestor, dan fire watch.',
    imgAlt: 'Pekerja melakukan pengelasan dengan pelindung fire blanket terpasang di sekitarnya dan APAR siaga di dekatnya',
    related: ['fire-watch', 'permit-to-work', 'confined-space-entry', 'gas-tester'],
    intro: 'Percikan api pengelasan, gerinda tangan, dan pemotongan termal dapat terpental hingga jarak lebih dari 10 meter dan menyusup ke celah lantai atau saluran pipa yang mengandung gas/debu mudah meledak. Pelatihan Hot Work Safety mendoktrinkan protokol pencegahan kebakaran ketat di seluruh lingkungan industri.',
    hazards: [
      '<strong>Penyalaan Bahan Mudah Terbakar (Combustible Ignition):</strong> Percikan api las jatuh mengenai tumpukan majun berminyak atau kayu palet.',
      '<strong>Ledakan Uap Tangki Bahan Bakar (Explosion Hazard):</strong> Melakukan pengelasan pada tangki atau drum bekas bahan bakar tanpa pembersihan dan gas freeing.',
      '<strong>Flashback pada Tabung Oksi-Asetilen:</strong> Api merambat balik ke dalam selang gas dan meledakkan tabung asetilen.',
      '<strong>Bara Api Tersembunyi (Smoldering Fire):</strong> Api menyala secara perlahan di isolasi pipa berjam-jam setelah pekerjaan ditinggalkan.'
    ],
    regulations: [
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Permenaker No. Per.04/MEN/1980</strong> tentang Pemasangan dan Pemeliharaan APAR.',
      '<strong>Standar NFPA 51B</strong> (Standard for Fire Prevention During Welding, Cutting, and Other Hot Work).',
      '<strong>Standar OSHA 29 CFR 1910.252</strong> (General Requirements for Welding, Cutting, and Brazing).'
    ],
    modules: [
      {
        name: 'Modul 1: Prinsip Segitiga Api & Karakteristik Pekerjaan Panas',
        theory: 'Bahan bakar, oksigen, sumber panas. Bahaya konduksi, konveksi, radiasi panas pada struktur baja.',
        practical: 'Audit identifikasi potensi bahaya pekerjaan panas di area bengkel fabrikasi.'
      },
      {
        name: 'Modul 2: Standar Radius 11 Meter & Proteksi Area Kerja',
        theory: 'Aturan NFPA 51B 35-ft rule, penggunaan fire blanket tahan panas 1000°C, penutupan drainase dan celah lantai.',
        practical: 'Pemasangan kurung tirai fire blanket dan proteksi saluran gorong-gorong.'
      },
      {
        name: 'Modul 3: Pemeriksaan Alat Las & Tabung Gas Bertekanan',
        theory: 'Fungsi Flashback Arrestor ganda (di regulator dan torch), warna selang gas, uji kebocoran air sabun.',
        practical: 'Inspeksi tabung oksigen-asetilen dan uji coba pemasangan flashback arrestor.'
      },
      {
        name: 'Modul 4: Sistem Izin Kerja Panas & Penugasan Fire Watch',
        theory: 'Verifikasi lembar Hot Work Permit, gas testing atmosfer (<1% LEL), tugas petugas jaga api (fire watch).',
        practical: 'Simulasi approval izin kerja panas dan prosedur pemantauan post-hot work 60 menit.'
      }
    ],
    equipment: [
      'Fire Resistant Blanket (Kain Tahan Api Fiberglass/Silica 1000°C) bersertifikat EN 13501.',
      'Perlengkapan Las Oksi-Asetilen dengan Flashback Arrestor terpasang ganda.',
      'Alat Pemadam Api Ringan (APAR) Powder 6 kg dan CO2 5 kg.',
      'Multi-Gas Detector untuk uji gas mudah terbakar (% LEL).'
    ],
    participants: [
      'Welder, Fitter, Grinder, dan Teknisi Fabrikasi Logam.',
      'Petugas Fire Watch dan Safety Officer Pabrik/Konstruksi.',
      'Supervisor Pemeliharaan Pabrik dan Manajer Fasilitas.'
    ],
    tableData: {
      headers: ['Parameter Hot Work', 'Ketentuan Standar NFPA 51B', 'Tindakan Pengendalian'],
      rows: [
        ['Radius Pembersihan', 'Radius 11 Meter (35 Kaki)', 'Pindahkan semua bahan mudah terbakar atau tutup rapat dengan fire blanket'],
        ['Pengujian Gas Mudah Terbakar', 'Wajib < 1% LEL', 'Uji gas sebelum api dinyalakan dan lakukan continuous monitoring'],
        ['Kesiapan Alat Pemadam', 'Minimal 1 unit APAR Powder 6kg / Foam', 'Diletakkan dalam jangkauan < 3 meter dari titik pekerjaan'],
        ['Pemantauan Pasca Kerja', 'Minimal 30 – 60 Menit', 'Petugas Fire Watch dilarang meninggalkan lokasi pasca pengelasan']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/fire-watch/', label: 'Pelatihan Petugas Fire Watch' },
      { href: '/kategori-pelatihan/permit-to-work/', label: 'Pelatihan Permit to Work' },
      { href: '/kategori-pelatihan/gas-tester/', label: 'Pelatihan Gas Tester' }
    ],
    faqs: [
      {
        q: 'Berapa radius aman pembersihan bahan mudah terbakar dari titik pekerjaan panas?',
        a: 'Berdasarkan standar NFPA 51B dan K3 nasional, seluruh bahan yang mudah terbakar dalam radius minimal 11 meter (35 kaki) wajib disingkirkan, atau ditutup rapat menggunakan kain tahan api (fire blanket) jika tidak dapat dipindahkan.'
      }
    ]
  },

  // 32. Fire Watch
  {
    key: 'fire-watch',
    title: 'Pelatihan Petugas Fire Watch: Pengawasan Kebakaran Pekerjaan Panas',
    h1: 'Pelatihan Fire Watch: Tugas Petugas Jaga Api, Standar Siaga APAR, dan Prosedur Post-Hot Work Monitoring',
    meta: 'Pelatihan fire watch (petugas jaga api): pengawasan 30-60 menit setelah pekerjaan panas selesai, keterampilan pemadaman APAR seketika, dan wewenang stop work.',
    imgAlt: 'Petugas fire watch mengenakan rompi khusus berdiri siaga memegang APAR memantau percikan api las',
    related: ['hot-work-safety', 'permit-to-work', 'confined-space-entry'],
    intro: 'Seorang <strong>Fire Watch (Petugas Jaga Api)</strong> bukan sekadar penonton di lokasi kerja. Petugas ini memiliki tugas eksklusif memantau setiap percikan api yang jatuh, memegang APAR siap pakai, dan dilarang dialihkan untuk tugas lain selama pekerjaan panas berlangsung.',
    hazards: [
      '<strong>Petugas Meninggalkan Pos:</strong> Fire watch meninggalkan lokasi kerja saat welder masih mengelas.',
      '<strong>Penggunaan APAR Kadaluarsa:</strong> Menggunakan APAR dengan jarum pressure gauge di zona merah (tekanan kosong).',
      '<strong>Gagal Mendeteksi Titik Api Tersembunyi:</strong> Percikan api masuk ke celah dinding partisi sandwich panel tanpa disadari.'
    ],
    regulations: [
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Permenaker No. Per.04/MEN/1980</strong> tentang APAR.',
      '<strong>Standar NFPA 51B</strong> (Bagian Kualifikasi dan Tugas Fire Watch).'
    ],
    modules: [
      {
        name: 'Modul 1: Peran & Otoritas Mutlak Petugas Fire Watch',
        theory: 'Tugas khusus, wewenang Stop Work Authority jika timbul asap/percikan tak terkendali, larangan rangkap tugas.',
        practical: 'Audit kelayakan area pra-hot work dan pemasangan barikade jaga api.'
      },
      {
        name: 'Modul 2: Kesiapsiagaan & Pengoperasian APAR Cepat (PASS Method)',
        theory: 'Klasifikasi api A, B, C, D; Pull, Aim, Squeeze, Sweep; jarak aman pemadaman 2-3 meter.',
        practical: 'Praktik pemadaman api nyata (live fire drill) menggunakan APAR Dry Chemical Powder dan CO2.'
      },
      {
        name: 'Modul 3: Prosedur Pemantauan Pasca Kerja Panas (Post-Hot Work 60 Min)',
        theory: 'Karakteristik bara api tersembunyi (smoldering fire), penggunaan thermal imaging camera.',
        practical: 'Pemeriksaan suhu dinding dan pipa menggunakan infrared thermometer gun.'
      }
    ],
    equipment: [
      'APAR Dry Chemical Powder 6 kg dan APAR Carbon Dioxide (CO2) 5 kg.',
      'Infrared Thermometer Gun / Thermal Imaging Camera Portabel.',
      'Rompi Reflektif Khusus Petugas Fire Watch dan Peluit Darurat.'
    ],
    participants: [
      'Petugas Fire Watch Khusus Pekerjaan Panas dan Helper Pabrik.',
      'Safety Officer, Safety Inspector, dan Anggota Fire Brigade Perusahaan.'
    ],
    tableData: {
      headers: ['Tipe Kebakaran', 'Bahan yang Terbakar', 'Jenis Media APAR yang Tepat', 'Media yang Dilarang'],
      rows: [
        ['Kelas A', 'Kayu, Kertas, Plastik, Kain', 'Air / Dry Chemical Powder / Foam', 'Dilarang menggunakan CO2 di ruang terbuka'],
        ['Kelas B', 'Minyak, Solar, Bensin, Thinner', 'Foam AFFF / Dry Chemical Powder', 'DILARANG menggunakan Air (Memicu ledakan minyak)'],
        ['Kelas C', 'Panel Listrik, Kabel Bertegangan', 'Carbon Dioxide (CO2) / Clean Agent', 'DILARANG menggunakan Air / Foam (Konduktor listrik)']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/hot-work-safety/', label: 'Pelatihan Hot Work Safety' },
      { href: '/kategori-pelatihan/permit-to-work/', label: 'Pelatihan Permit to Work' }
    ],
    faqs: [
      {
        q: 'Berapa lama petugas Fire Watch wajib tetap berjaga setelah pekerjaan panas selesai?',
        a: 'Standar NFPA 51B mewajibkan petugas Fire Watch tetap berada di lokasi kerja minimal selama 30 hingga 60 menit setelah pekerjaan panas selesai untuk memastikan tidak ada bara api tersembunyi (smoldering fire) yang menyala kembali.'
      }
    ]
  },

  // 33. Permit to Work (PTW)
  {
    key: 'permit-to-work',
    title: 'Pelatihan Permit to Work (PTW): Sistem Izin Kerja Berisiko Tinggi',
    h1: 'Pelatihan Permit to Work (PTW): Prosedur Penerbitan, Otorisasi, Verifikasi Lapangan, dan Penutupan Izin',
    meta: 'Pelatihan sistem izin kerja aman (PTW): cold work, hot work, confined space, lifting, isolation certificate, peran permit applicant, reviewer, dan issuing authority.',
    imgAlt: 'Dokumen formulir Permit to Work (PTW) dengan checklist inspeksi lapangan dan tanda tangan otorisasi keselamatan',
    related: ['hot-work-safety', 'confined-space-entry', 'gas-tester', 'lifting-supervisor'],
    intro: 'Sistem <strong>Permit to Work (PTW / Izin Kerja Aman)</strong> adalah sistem administrasi keselamatan terpenting dalam industri minyak, gas, kimia, manufaktur, dan konstruksi. PTW memastikan bahwa seluruh risiko telah diidentifikasi, dimitigasi, dan diverifikasi bersama di lapangan sebelum pekerjaan berisiko tinggi diizinkan untuk dimulai.',
    hazards: [
      '<strong>Desk-Approval (Tanda Tangan di Meja):</strong> Menyetujui izin kerja tanpa melakukan verifikasi fisik langsung di lokasi pekerjaan.',
      '<strong>Pekerjaan Tanpa Izin Kerja Valid:</strong> Memulai pengelasan atau masuk tangki saat izin kerja telah kedaluwarsa (expired).',
      '<strong>Ketiadaan Isolasi Energi (Isolation Failure):</strong> Tidak melampirkan sertifikat isolasi elektrikal/mekanikal (LOTO) pada formulir izin kerja.'
    ],
    regulations: [
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>PP No. 50 Tahun 2012</strong> tentang Penerapan Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3).',
      '<strong>Standar ISO 45001:2018</strong> (Clause 8.1 Operational Planning and Control).'
    ],
    modules: [
      {
        name: 'Modul 1: Prinsip Dasar & Struktur Sistem Permit to Work',
        theory: 'Hierarki izin: General Work Permit vs Special Permits (Hot, Cold, Height, Confined, Excavation, Isolation).',
        practical: 'Audit alur birokrasi izin kerja perusahaan dan pemetaan bottleneck otorisasi.'
      },
      {
        name: 'Modul 2: Peran & Tanggung Jawab Pemangku Izin Kerja',
        theory: 'Permit Applicant (Pemohon), Permit Reviewer (Peninjau K3), Area Authority, dan Issuing Authority.',
        practical: 'Simulasi verifikasi silang dokumen JSA, sertifikat personel, dan daftar peralatan.'
      },
      {
        name: 'Modul 3: Inspeksi Bersama Lapangan (Joint Site Verification)',
        theory: 'Pemeriksaan checklist keselamatan di lokasi, uji gas atmosfer, verifikasi LOTO dan barikade.',
        practical: 'Praktik inspeksi lapangan langsung dan penandatanganan lembar izin di area operasional.'
      },
      {
        name: 'Modul 4: Manajemen Perubahan (MOC), Serah Terima Shift & Penutupan Izin',
        theory: 'Penanganan perubahan kondisi kerja tak terduga, transfer izin antar-shift, pembersihan area (housekeeping) pasca kerja.',
        practical: 'Simulasi prosedur hand-back dan penutupan resmi (closure) Permit to Work.'
      }
    ],
    equipment: [
      'Folder Master PTW lengkap dengan formulir Hot Work, Cold Work, Confined Space, Lifting, dan LOTO Certificate.',
      'Lockout Tagout Master Station Box dan Permit Display Board (Papan Display Izin Lapangan).',
      'Checklist Audit Kepatuhan Sistem Izin Kerja.'
    ],
    participants: [
      'Area Authority, Facility Manager, dan Site Manager.',
      'Safety Officer, HSE Inspector, dan Permit Coordinator.',
      'Supervisor Maintenance, Kontraktor EPC, dan Pelaksana Proyek.'
    ],
    tableData: {
      headers: ['Jenis Izin Kerja (PTW)', 'Aktivitas yang Memerlukan', 'Dokumen Lampiran Wajib', 'Wewenang Persetujuan'],
      rows: [
        ['Hot Work Permit', 'Pengelasan, pemotongan blender gas, gerinda', 'JSA, Gas Test Certificate, Fire Watch Plan', 'Area Manager & HSE Specialist'],
        ['Confined Space Permit', 'Masuk tangki timbun, vessel, silo, sewer', 'JSA, Multi-Gas Log, Rescue Plan, LOTO Cert', 'Plant Superintendent & K3 Utama'],
        ['Critical Lifting Permit', 'Lifting >75% kapasitas crane, tandem lift', 'Engineered Lifting Plan, Rigging Study', 'Lifting Supervisor & Site Director'],
        ['Excavation Permit', 'Penggalian tanah kedalaman >1.2 meter', 'Underground Utility Scan Map, Shoring Plan', 'Civil Engineer & Safety Manager']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/confined-space-entry/', label: 'Pelatihan Confined Space Entry' },
      { href: '/kategori-pelatihan/hot-work-safety/', label: 'Pelatihan Hot Work Safety' },
      { href: '/kategori-pelatihan/gas-tester/', label: 'Pelatihan Gas Tester' }
    ],
    faqs: [
      {
        q: 'Apa saja jenis izin kerja khusus (Special Permits) yang umum di industri?',
        a: 'Jenis izin kerja khusus meliputi: (1) Hot Work Permit, (2) Confined Space Entry Permit, (3) Working at Height Permit, (4) Excavation / Ground Disturbance Permit, (5) Critical Lifting Permit, dan (6) Electrical High Voltage Isolation Permit.'
      }
    ]
  }
];

async function run() {
  console.log('Writing heavy and specialized programs...');
  const CONTENT_DIR = path.join(__dirname, '../src/content/pages');
  for (const prog of heavyList) {
    const html = renderProgramHtml(prog);
    const code = `import { PageContentData } from '@/lib/types';

export const content: PageContentData = {
  key: ${JSON.stringify(prog.key)},
  updated: "2026-08-29",
  faq: ${JSON.stringify(prog.faqs, null, 2)},
  html: ${JSON.stringify(html)}
};
`;
    fs.writeFileSync(path.join(CONTENT_DIR, `${prog.key}.ts`), code, 'utf8');
    console.log(`Rendered: ${prog.key}.ts`);
  }
}

run();
