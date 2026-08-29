import { MultiArchetypeProgramDetail } from './multi-archetype-renderer';

export const batch7HeavyEquipmentPages: MultiArchetypeProgramDetail[] = [
  // 1. Lisensi Operator Forklift Kemnaker
  {
    key: 'lisensi-operator-forklift-kemnaker',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/lisensi-operator-forklift-kemnaker/',
    archetype: 'technical_cert',
    title: 'Lisensi Operator Forklift Kemnaker: Sertifikasi SIO Kelas I & Kelas II Resmi',
    h1: 'Pelatihan & Sertifikasi Lisensi K3 Operator Forklift Kemnaker RI: Kelas I (Kapasitas > 15 Ton) & Kelas II (Kapasitas ≤ 15 Ton)',
    meta: 'Sertifikasi lisensi operator forklift Kemnaker: SIO Kelas 1 & 2 Permenaker No. 8/2020, segitiga stabilitas beban, inspeksi P2H & uji manuver.',
    imgAlt: 'Operator forklift melakukan inspeksi pra-operasional P2H pada forklift diesel di area pergudangan pabrik',
    related: ['operator-forklift', 'operator-reach-truck', 'lisensi-operator-overhead-crane', 'k3-keselamatan-kerja'],
    intro: 'Berdasarkan <strong>Permenaker No. 8 Tahun 2020 tentang K3 Pesawat Angkat dan Pesawat Angkut</strong>, setiap operator forklift di tempat kerja wajib memiliki Surat Izin Operator (SIO) resmi dari Kementerian Ketenagakerjaan RI. Forklift adalah salah satu alat angkut material dengan tingkat kecelakaan tertinggi di industri manufaktur dan logistik, terutama terkait risiko terguling (tip-over), menabrak pejalan kaki, dan kejatuhan beban saat penataan palet di ketinggian.',
    hazards: [
      '<strong>Forklift Terguling ke Samping (Lateral Tip-Over):</strong> Manuver belok tajam dengan kecepatan tinggi saat garpu terangkat membawa beban.',
      '<strong>Tabrakan dengan Pejalan Kaki (Pedestrian Impact):</strong> Visibilitas terhalang oleh muatan tinggi saat melaju maju di lorong gudang.',
      '<strong>Tertimpa Beban Jatuh (Falling Object):</strong> Palet rusak atau penyusunan kardus tidak terikat yang meluncur dari atas mast tiang forklift.',
      '<strong>Forklift Terperosok dari Loading Dock:</strong> Truk trailer bergerak maju saat proses transfer barang dari dermaga ke kontainer.'
    ],
    regulations: [
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang Keselamatan dan Kesehatan Kerja Pesawat Angkat dan Pesawat Angkut.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Permenaker No. 5 Tahun 2018</strong> tentang K3 Lingkungan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Kebijakan K3 & Regulasi Pesawat Angkat Angkut Kemnaker',
        theory: 'Dasar hukum Permenaker 8/2020, tanggung jawab dan wewenang operator Kelas I vs Kelas II, syarat masa berlaku SIO dan buku kerja.',
        practical: 'Audit kelengkapan dokumen riksa uji (SIA) forklift dan buku lisensi operator.'
      },
      {
        name: 'Modul 2: Prinsip Dasar Stabilitas Beban & Load Center Forklift',
        theory: 'Konsep piramida segitiga stabilitas (Stability Triangle), titik pusat gravitasi (Center of Gravity), kapasitas angkat vs load center 500 mm/600 mm.',
        practical: 'Kalkulasi pengurangan kapasitas angkat (derated capacity) saat menggunakan attachment clamp atau panjang garpu tambahan.'
      },
      {
        name: 'Modul 3: Prosedur Pemeriksaan Harian (P2H) & Uji Manuver Praktik',
        theory: 'Pemeriksaan sistem hidrolik, rantai mast, tekanan ban, sistem pengereman, sabuk keselamatan (seatbelt), dan klakson/lampu mundur.',
        practical: 'Praktik inspeksi P2H 15 titik, uji manuver zig-zag maju/mundur, dan penataan palet beban 3 tingkat.'
      }
    ],
    equipment: [
      'Unit Forklift Counterbalance Diesel & Elektrik (Kapasitas 3 - 7 Ton).',
      'Set Palet Beban Terkalibrasi & Racking Simulasi Gudang 3 Tingkat.',
      'Checklist Form Pemeriksaan Harian (P2H) Standar Kemnaker.',
      'Traffic Cone & Garis Pembatas Sirkuit Uji Manuver Mengemudi.'
    ],
    participants: [
      'Operator Forklift Pergudangan, Driver Alat Angkut Manufaktur, Supervisor Logistik, Maintenance Forklift, dan Safety Officer Pabrik.'
    ],
    tableData: {
      headers: ['Kategori Lisensi SIO', 'Kapasitas Angkat Maksimal', 'Persyaratan Pendidikan', 'Masa Berlaku Lisensi'],
      rows: [
        ['Operator Forklift Kelas II', 'Hingga 15 Ton (Kapasitas ≤ 15.000 kg)', 'Minimal SLTP / Sederajat + Pengalaman', '5 Tahun (Dapat Diperpanjang ke Kemnaker)'],
        ['Operator Forklift Kelas I', 'Di atas 15 Ton (Kapasitas > 15.000 kg)', 'Minimal SLTA / Sederajat + Pengalaman', '5 Tahun (Dapat Diperpanjang ke Kemnaker)'],
        ['Teknisi Pesawat Angkut', 'Perbaikan & Servis Mesin Forklift', 'Minimal D3 Teknik Mesin / Elektro', '5 Tahun (Sertifikasi Teknisi Kemnaker)'],
        ['Juru Ikat (Rigger Forklift Crane)', 'Pengikatan Beban Bersama Forklift Crane Jib', 'Minimal SLTP / Sederajat', '5 Tahun (Lisensi Rigger Kemnaker)']
      ]
    },
    caseStudy: 'Sebuah pusat logistik di Cikarang mengeliminasi 100% insiden forklift tip-over selama 3 tahun berturut-turut setelah mewajibkan seluruh pengemudi menyelesaikan sertifikasi SIO Kemnaker dan audit kepatuhan P2H harian sebelum shift dimulai.',
    stepByStepGuide: [
      { step: '1. Verifikasi Kelayakan Fisik & Berkas', desc: 'Pemeriksaan surat sehat dokter, bebas buta warna, dan ijazah calon operator.' },
      { step: '2. Pembekalan Teori Regulasi & Stabilitas', desc: 'Pendalaman materi Permenaker 8/2020, load chart, dan kalkulasi segitiga stabilitas.' },
      { step: '3. Workshop Praktik P2H & Sirkuit Manuver', desc: 'Ujian praktik mengemudi, penataan palet beban, dan pengereman darurat di lapangan.' },
      { step: '4. Evaluasi Pengawas Kemnaker & SIO', desc: 'Ujian komprehensif tertulis dan verifikasi kecakapan oleh Pengawas K3 Kemnaker.' }
    ],
    links: [
      { href: '/kategori-pelatihan/operator-forklift/', anchor: 'Materi Lengkap Operator Forklift' },
      { href: '/kategori-pelatihan/operator-reach-truck/', anchor: 'Pelatihan Operator Reach Truck' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 2. Lisensi Operator Overhead Crane
  {
    key: 'lisensi-operator-overhead-crane',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/lisensi-operator-overhead-crane/',
    archetype: 'technical_cert',
    title: 'Lisensi Operator Overhead Crane Kemnaker: SIO Kelas I, II, & III Resmi',
    h1: 'Pelatihan & Sertifikasi Lisensi K3 Operator Keran Angkat / Overhead Crane Kemnaker RI: Kelas I, Kelas II, & Kelas III',
    meta: 'Sertifikasi operator overhead crane Kemnaker: SIO Kelas 1, 2, 3 Permenaker No. 8/2020, hoist traveling, sling wire rope, lifting plan & anti-sway.',
    imgAlt: 'Operator mengendalikan overhead crane menggunakan pendant remote controller di dalam bengkel fabrikasi baja',
    related: ['lisensi-operator-forklift-kemnaker', 'lisensi-operator-mobile-crane', 'lisensi-rigger-juru-ikat-beban', 'k3-keselamatan-kerja'],
    intro: 'Keran Angkat Ruang (Overhead Crane / Bridge Crane / Gantry Crane) merupakan tulang punggung pemindahan material berat di pabrik manufaktur, bengkel fabrikasi, bengkel bubut, dan workshop peleburan baja. Sesuai <strong>Permenaker No. 8 Tahun 2020</strong>, pengoperasian keran angkat wajib dikendalikan oleh operator yang memiliki Lisensi K3 (SIO) resmi yang diterbitkan oleh Kementerian Ketenagakerjaan RI.',
    hazards: [
      '<strong>Beban Terlepas & Meluncur Bebas:</strong> Putusnya wire rope hoist akibat keausan kawat atau kegagalan mekanisme rem penahan beban.',
      '<strong>Ayunan Beban Liar (Load Swaying):</strong> Penghentian traveling crane secara mendadak yang memicu tabrakan beban dengan pekerja di lantai kerja.',
      '<strong>Overloading Melebihi Batas SWL:</strong> Pengangkatan benda kerja tanpa mengetahui berat sebenarnya yang merusak struktur girder crane.',
      '<strong>Benturan End-Stop Girder Crane:</strong> Kegagalan limit switch pembatas lintasan girder yang mengakibatkan crane menabrak dinding pabrik.'
    ],
    regulations: [
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang Keselamatan dan Kesehatan Kerja Pesawat Angkat dan Pesawat Angkut.',
      '<strong>Permenaker No. 38 Tahun 2016</strong> tentang K3 Pesawat Tenaga dan Produksi.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Regulasi K3 Keran Angkat & Kualifikasi Operator Kemnaker',
        theory: 'Hierarki regulasi Permenaker 8/2020, pembagian kelas operator (Kelas I, II, III), kewajiban uji berkala SIA (Surat Izin Alat).',
        practical: 'Audit kelengkapan pelat data beban kerja aman (Safe Working Load / SWL) pada badan crane girder.'
      },
      {
        name: 'Modul 2: Komponen Mekanikal, Elektrikal, & Sistem Proteksi Crane',
        theory: 'Pemeriksaan tali kawat baja (wire rope), drum gulung, kait (hook with safety latch), rem elektromekanik, dan limit switch.',
        practical: 'Uji fungsi emergency stop button pada remote pendant/radio control dan uji traveling limit switch.'
      },
      {
        name: 'Modul 3: Teknik Pengangkatan Aman (Anti-Sway Technique) & Komunikasi Rigger',
        theory: 'Prinsip inching & jogging, teknik meredam ayunan beban (catch the load), komunikasi kode tangan rigger standar internasional.',
        practical: 'Praktik pemindahan beban asimetris melewati rintangan tanpa menyentuh tiang pembatas di lantai workshop.'
      }
    ],
    equipment: [
      'Unit Overhead Traveling Crane Pabrik (Kapasitas 5 - 25 Ton).',
      'Pendant Remote Controller & Wireless Radio Frequency Controller.',
      'Wire Rope Caliper & Hook Throat Opening Gauge untuk Inspeksi Aus.',
      'Beban Uji Terstandarisasi dengan Webbing Sling & Shackle Bersertifikat.'
    ],
    participants: [
      'Operator Overhead Crane Bengkel, Teknisi Maintenance Crane, Supervisor Fabrikasi Baja, Rigger, dan Safety Inspector Manufaktur.'
    ],
    tableData: {
      headers: ['Klasifikasi SIO Crane', 'Batas Kapasitas Beban (Ton)', 'Persyaratan Minimal Pendidikan', 'Masa Berlaku Lisensi'],
      rows: [
        ['Operator Crane Kelas III', 'Beban s.d. 25 Ton (Kapasitas ≤ 25 Ton)', 'Minimal SLTP / Sederajat', '5 Tahun (Perpanjangan Resmi Kemnaker)'],
        ['Operator Crane Kelas II', 'Beban > 25 Ton s.d. 100 Ton', 'Minimal SLTA / Sederajat', '5 Tahun (Perpanjangan Resmi Kemnaker)'],
        ['Operator Crane Kelas I', 'Beban di atas 100 Ton (Kapasitas > 100 Ton)', 'Minimal SLTA / D3 Teknik', '5 Tahun (Perpanjangan Resmi Kemnaker)'],
        ['Juru Ikat (Rigger Crane)', 'Pemasangan & Pengikatan Sling Beban', 'Minimal SLTP / Sederajat', '5 Tahun (Lisensi Rigger Kemnaker)']
      ]
    },
    caseStudy: 'Sebuah pabrik perakitan mesin berat di Cilegon menekan tingkat kerusakan barang akibat ayunan benturan crane hingga 0% setelah seluruh operatornya dilatih teknik catch-the-load dan memperoleh SIO resmi Kemnaker.',
    stepByStepGuide: [
      { step: '1. Pendaftaran & Verifikasi Legalitas', desc: 'Pengumpulan berkas KTP, ijazah, surat kesehatan, dan surat penugasan perusahaan.' },
      { step: '2. Pembekalan Teori Komprehensif', desc: 'Pemahaman Permenaker 8/2020, load calculation, dan sistem proteksi batas beban.' },
      { step: '3. Praktik Uji Coba Pengoperasian', desc: 'Inspeksi tali kawat baja, uji limit switch, dan simulasi penanganan ayunan beban.' },
      { step: '4. Uji Sertifikasi Pengawas Kemnaker', desc: 'Evaluasi teori dan praktik langsung di hadapan Pengawas Ketenagakerjaan resmi.' }
    ],
    links: [
      { href: '/kategori-pelatihan/lifting-operation-safety/', anchor: 'Keselamatan Operasi Lifting Crane' },
      { href: '/kategori-pelatihan/lisensi-rigger-juru-ikat-beban/', anchor: 'Sertifikasi Rigger Juru Ikat Beban' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 3. Lisensi Operator Mobile Crane
  {
    key: 'lisensi-operator-mobile-crane',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/lisensi-operator-mobile-crane/',
    archetype: 'technical_cert',
    title: 'Lisensi Operator Mobile Crane Kemnaker: SIO Rough Terrain, All Terrain, & Crawler Crane',
    h1: 'Pelatihan & Sertifikasi Lisensi K3 Operator Mobile Crane Kemnaker RI: Kelas I, Kelas II, & Kelas III (Truck Crane, All-Terrain, & Crawler)',
    meta: 'Sertifikasi lisensi mobile crane Kemnaker: SIO Kelas 1, 2, 3 Permenaker 8/2020, load chart calculation, outrigger ground bearing & boom inspection.',
    imgAlt: 'Mobile crane melakukan lifting operasi dengan outrigger terpasang penuh pada bantalan tanah di proyek konstruksi',
    related: ['lisensi-operator-overhead-crane', 'lisensi-rigger-juru-ikat-beban', 'lifting-supervisor', 'k3-keselamatan-kerja'],
    intro: 'Mobile Crane (Truck Mounted Crane, Rough Terrain Crane, All Terrain Crane, Crawler Crane) adalah alat angkat hidrolik bergerak yang memegang peranan krusial dalam proyek konstruksi, industri migas, dan pembangunan infrastruktur. Risiko fatal seperti crane terbalik akibat amblesnya outrigger, boom patah karena overloading, atau sengatan kabel listrik udara menuntut operator memiliki Lisensi K3 (SIO) Kemnaker RI dan kompetensi pembacaan Load Chart yang presisi.',
    hazards: [
      '<strong>Crane Terguling Akibat Amblesnya Tanah (Ground Failure):</strong> Kegagalan daya dukung tanah menahan tekanan outrigger crane saat membawa beban.',
      '<strong>Boom Patah Akibat Kelebihan Radius Angkat:</strong> Pengangkatan beban di luar kurva aman load chart yang memicu keruntuhan struktural boom.',
      '<strong>Kontak Listrik Tegangan Tinggi Udara (Powerline Electrocution):</strong> Ujung boom atau sling menyentuh kabel transmisi listrik PLN tanpa jarak aman.',
      '<strong>Kait Crane Menghantam Kabin (Two-Blocking):</strong> Blok kait tertarik hingga mentok ke ujung katrol boom (boom point sheave) hingga putus.'
    ],
    regulations: [
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang Keselamatan dan Kesehatan Kerja Pesawat Angkat dan Pesawat Angkut.',
      '<strong>Permenaker No. 1 Tahun 1980</strong> tentang K3 Konstruksi Bangunan.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Perhitungan Beban & Pembacaan Load Chart Mobile Crane',
        theory: 'Definisi radius kerja (operating radius), sudut boom (boom angle), panjang boom (boom length), gross capacity vs net capacity.',
        practical: 'Latihan menghitung potongan berat (deduction) untuk hook block, jibs, dan rigging gear dari kapasitas tabel crane.'
      },
      {
        name: 'Modul 2: Penyiapan Tapak Crane (Set-up), Outrigger Pad, & Daya Dukung Tanah',
        theory: 'Perhitungan tekanan tapak outrigger (Ground Bearing Pressure / GBP), penggunaan bantalan kayu/pelat baja (outrigger pads).',
        practical: 'Praktik perataan level crane menggunakan waterpass gelembung dan penempatan bantalan outrigger 100% extended.'
      },
      {
        name: 'Modul 3: Sistem Keselamatan LMI (Load Moment Indicator) & Uji Manuver',
        theory: 'Fungsi Anti-Two-Block (A2B) switch, kalibrasi sensor sudut dan sensor panjang boom, prosedur tandem lifting 2 crane.',
        practical: 'Simulasi pengangkatan beban kritis 80% kapasitas crane dan uji respons rem ayunan (swing brake).'
      }
    ],
    equipment: [
      'Unit Mobile Crane / Truck Mounted Crane (Kapasitas 25 - 80 Ton).',
      'Outrigger Wooden / Steel Matting Pads Standar Engineering.',
      'Anemometer Pengukur Kecepatan Angin Digital Terpasang di Ujung Boom.',
      'Beban Uji Terkalibrasi dan Set Rigging Gear (Shackle, Webbing Sling, Wire Sling).'
    ],
    participants: [
      'Operator Mobile Crane Proyek, Driver Crane Truk, Lifting Engineer, Site Supervisor Konstruksi, Safety Inspector Migas.'
    ],
    tableData: {
      headers: ['Kelas Lisensi SIO Mobile Crane', 'Rentang Kapasitas Angkat', 'Persyaratan Pendidikan & Usia', 'Masa Berlaku Lisensi'],
      rows: [
        ['Operator Mobile Crane Kelas III', 'Kapasitas s.d. 25 Ton', 'Minimal SLTP / Usia Min. 19 Tahun', '5 Tahun (Dapat Diperpanjang ke Kemnaker)'],
        ['Operator Mobile Crane Kelas II', 'Kapasitas > 25 Ton s.d. 100 Ton', 'Minimal SLTA / Usia Min. 20 Tahun', '5 Tahun (Dapat Diperpanjang ke Kemnaker)'],
        ['Operator Mobile Crane Kelas I', 'Kapasitas di atas 100 Ton', 'Minimal SLTA/D3 / Usia Min. 21 Tahun', '5 Tahun (Dapat Diperpanjang ke Kemnaker)'],
        ['Lifting Supervisor', 'Penyusun Rencana Pengangkatan (Lifting Plan)', 'Minimal D3 Teknik / Pengalaman Lifting', '5 Tahun (Sertifikasi BNSP / Kemnaker)']
      ]
    },
    caseStudy: 'Sebuah proyek konstruksi jembatan di Jawa Barat menyelesaikan 120 operasi pengangkatan balok girder beton berat tanpa satu pun insiden berkat verifikasi lifting plan dan pengoperasian crane oleh operator bersertifikasi SIO Kelas I Kemnaker.',
    stepByStepGuide: [
      { step: '1. Pendaftaran & Asesmen Medis', desc: 'Verifikasi berkas legal, tes fisik ketajaman penglihatan, dan kesehatan operator.' },
      { step: '2. Pembekalan Teori Matematika Lifting', desc: 'Pendalaman pembacaan load chart, kalkulasi deduksi berat, dan mitigasi angin kencang.' },
      { step: '3. Simulasi Praktik Set-up & Manuver', desc: 'Latihan penataan outrigger, uji sensor A2B, dan pengangkatan beban di lapangan.' },
      { step: '4. Uji Lisensi Pengawas Kemnaker', desc: 'Ujian teori regulasi dan uji keterampilan operasional langsung untuk penerbitan SIO.' }
    ],
    links: [
      { href: '/kategori-pelatihan/lifting-supervisor/', anchor: 'Pelatihan Lifting Supervisor' },
      { href: '/kategori-pelatihan/lisensi-rigger-juru-ikat-beban/', anchor: 'Sertifikasi Lisensi Rigger' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 4. Lisensi Operator Excavator
  {
    key: 'lisensi-operator-excavator',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/lisensi-operator-excavator/',
    archetype: 'technical_cert',
    title: 'Lisensi Operator Excavator Kemnaker & BNSP: Alat Berat Galian & Tambang',
    h1: 'Pelatihan & Sertifikasi Lisensi K3 Operator Excavator / Backhoe Kemnaker RI & BNSP: Kelas Tambang, Konstruksi, & Infrastruktur',
    meta: 'Sertifikasi lisensi operator excavator Kemnaker: SIO alat berat Permenaker 8/2020, kestabilan lereng galian, inspeksi P2H hidrolik & blind spot.',
    imgAlt: 'Operator mengoperasikan excavator hidrolik pengerukan tanah pada lereng galian proyek infrastruktur',
    related: ['alat-berat-excavator-dump-truck', 'lisensi-operator-wheel-loader', 'operator-dump-truck-hauler-tambang', 'k3-keselamatan-kerja'],
    intro: 'Excavator (Hydraulic Backhoe) merupakan alat berat paling serbaguna di sektor konstruksi, pertambangan, kehutanan, dan perkebunan. Namun, tingginya potensi kecelakaan fatal seperti excavator terbalik di tepi tebing galian, mengenai utilitas pipa gas bawah tanah, tersambar kabel listrik, atau menabrak pekerja di area putaran swing radius menuntut operator memiliki Lisensi K3 (SIO) resmi dari Kementerian Ketenagakerjaan RI atau Sertifikat Kompetensi BNSP.',
    hazards: [
      '<strong>Excavator Terguling dari Tebing Galian (Rollover):</strong> Menggali di tepi lereng labil tanpa memperhitungkan sudut geser alami tanah.',
      '<strong>Pekerja Tertabrak Radius Putar (Swing Radius Hit):</strong> Ketiadaan barikade pemisah di zona putaran 360 derajat counterweight excavator.',
      '<strong>Kerusakan Pipa Gas / Kabel Tertanam (Utility Strike):</strong> Menggali tanpa verifikasi peta utilitas bawah tanah (underground scanning).',
      '<strong>Pecahnya Selang Hidrolik Tekanan Tinggi:</strong> Semburan fluida hidrolik panas 200 bar yang melukai mata atau menyulut kebakaran mesin.'
    ],
    regulations: [
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang Keselamatan dan Kesehatan Kerja Pesawat Angkat dan Pesawat Angkut.',
      '<strong>Permenaker No. 1 Tahun 1980</strong> tentang K3 Konstruksi Bangunan.',
      '<strong>Kepmen ESDM No. 1827 K/30/MEM/2018</strong> tentang Keselamatan Pertambangan (SMKP).'
    ],
    modules: [
      {
        name: 'Modul 1: Regulasi K3 Alat Berat & Tanggung Jawab Operator Excavator',
        theory: 'Dasar hukum Permenaker 8/2020, kewajiban memiliki SIO dan buku kerja operator, rambu keselamatan area galian.',
        practical: 'Audit kelengkapan dokumen Surat Izin Alat (SIA) dan pelat kapasitas bucket excavator.'
      },
      {
        name: 'Modul 2: Kestabilan Lereng, Zona Buta (Blind Spot), & Manajemen Galian',
        theory: 'Geometri lereng aman (benching & sloping), pencegahan longsoran galian (trench collapse), jarak aman tiang listrik.',
        practical: 'Penataan barikade zona swing 360 derajat dan penempatan dump truck di sudut pemuatan aman 45-90 derajat.'
      },
      {
        name: 'Modul 3: Pemeriksaan Harian (P2H) Hidrolik & Uji Manuver Praktik',
        theory: 'Pemeriksaan track tension rantai baja, kebocoran silinder boom/arm/bucket, level oli hidrolik, fungsi Roll-Over Protective Structure (ROPS).',
        practical: 'Praktik inspeksi P2H 20 titik, penggalian parit presisi, perataan tanah (grading), dan manuver naik ke lowbed trailer.'
      }
    ],
    equipment: [
      'Unit Hydraulic Excavator 20 Ton (Komatsu PC200 / CAT 320 / Kobelco SK200).',
      'Area Sirkuit Praktik Penggalian, Pemuatan Truk, dan Perataan Tanah.',
      'Checklist P2H Harian Alat Berat Standar Kemnaker/ESDM.',
      'Underground Cable Detector / Pipe Locator Simulator.'
    ],
    participants: [
      'Operator Excavator Tambang/Konstruksi, Mekanik Alat Berat, Mandor Galian Tanah, Supervisor Earthmoving, Safety Officer Proyek.'
    ],
    tableData: {
      headers: ['Kategori Sertifikasi', 'Sektor Penggunaan', 'Standar Penerbit', 'Masa Berlaku'],
      rows: [
        ['SIO Operator Excavator Kemnaker', 'Konstruksi, Industri Manufaktur, Pelabuhan', 'Kementerian Ketenagakerjaan RI', '5 Tahun (Perpanjangan Resmi)'],
        ['Sertifikasi Operator Excavator BNSP', 'Pertambangan Minerba, Kehutanan, Sawit', 'Badan Nasional Sertifikasi Profesi', '3 Tahun (Sesuai Skema LSP)'],
        ['SIM BII Umum / Kimper Tambang', 'Jalan Raya & Area Konsesi Tambang Khusus', 'Kepolisian RI / KTT Perusahaan Tambang', '5 Tahun / Sesuai Kebijakan Site'],
        ['Mekanik Alat Berat Hidrolik', 'Pemeliharaan & Servis Sistem Hidrolik Excavator', 'Kemnaker / BNSP LSP Terakreditasi', '3 - 5 Tahun']
      ]
    },
    caseStudy: 'Sebuah kontraktor tambang nikel di Sulawesi Tenggara menurunkan tingkat insiden kerusakan selang hidrolik dan tabrakan swing hingga 90% setelah seluruh operator backhoe-nya mengikuti pelatihan sertifikasi in-house terpadu.',
    stepByStepGuide: [
      { step: '1. Pendaftaran & Verifikasi Kesehatan', desc: 'Pengecekan surat sehat bebas buta warna dan sertifikat pengalaman kerja operator.' },
      { step: '2. Pembekalan Teori K3 Galian & Hidrolik', desc: 'Materi stabilitas lereng, identifikasi blind spot, dan prosedur darurat mesin panas.' },
      { step: '3. Workshop Praktik P2H & Penggalian', desc: 'Ujian manuver penggalian, loading ke dump truck, dan parkir aman di lereng.' },
      { step: '4. Evaluasi Pengawas & Sertifikasi', desc: 'Ujian resmi teori dan praktik untuk penerbitan SIO Kemnaker RI / BNSP.' }
    ],
    links: [
      { href: '/kategori-pelatihan/alat-berat-excavator-dump-truck/', anchor: 'K3 Alat Berat Tambang' },
      { href: '/kategori-pelatihan/lisensi-operator-wheel-loader/', anchor: 'Sertifikasi Operator Wheel Loader' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 5. Lisensi Operator Wheel Loader
  {
    key: 'lisensi-operator-wheel-loader',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/lisensi-operator-wheel-loader/',
    archetype: 'technical_cert',
    title: 'Lisensi Operator Wheel Loader Kemnaker: Batching Plant, Tambang, & Quarry',
    h1: 'Pelatihan & Sertifikasi Lisensi K3 Operator Wheel Loader Kemnaker RI: Industri Precast, Quarry Batu Kapur, & Stockpile Pelabuhan',
    meta: 'Sertifikasi lisensi wheel loader Kemnaker: SIO alat berat Permenaker 8/2020, stabilitas articulated steering, loading hopper & inspeksi P2H.',
    imgAlt: 'Operator wheel loader memasukkan material agregat pasir ke dalam hopper batching plant beton',
    related: ['lisensi-operator-excavator', 'operator-dump-truck-hauler-tambang', 'operator-batching-plant-dan-mixer', 'k3-keselamatan-kerja'],
    intro: 'Wheel Loader dengan sistem kemudi artikulasi (articulated steering) dan bucket kapasitas besar merupakan alat berat utama dalam pemindahan agregat di batching plant beton precast, quarry penambangan batu pecah, pabrik semen, dan stockpile batubara. Manuver kecepatan tinggi di area kerja sempit dengan visibilitas terbatas menuntut operator memiliki Lisensi K3 (SIO) Kemnaker RI untuk mencegah kecelakaan fatal terguling atau menabrak pekerja di lantai pabrik.',
    hazards: [
      '<strong>Wheel Loader Terguling saat Belok (Articulated Tip-Over):</strong> Manuver belok patah dengan bucket terangkat penuh di medan miring.',
      '<strong>Tabrakan Mundur di Area Hopper (Backing Collision):</strong> Manuver mundur cepat dari hopper batching plant tanpa melihat pejalan kaki.',
      '<strong>Rem Blong di Jalan Turunan Quarry (Brake Fade):</strong> Penggunaan rem berlebih yang memanaskan sistem tromol/cakram hingga hilang daya cengkeram.',
      '<strong>Tertimpa Material Longsoran Stockpile:</strong> Mengambil material dari dinding timbunan pasir/batu yang menggantung (undercutting).'
    ],
    regulations: [
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang Keselamatan dan Kesehatan Kerja Pesawat Angkat dan Pesawat Angkut.',
      '<strong>Permenaker No. 38 Tahun 2016</strong> tentang K3 Pesawat Tenaga dan Produksi.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Regulasi K3 Alat Angkut & Prinsip Fisika Kemudi Artikulasi',
        theory: 'Dasar hukum Permenaker 8/2020, pergeseran titik berat pada sistem articulated frame steering, batas kapasitas angkat bucket.',
        practical: 'Audit pelat beban kerja aman (Safe Working Load / Tipping Load) pada kabin loader.'
      },
      {
        name: 'Modul 2: Teknik Pemuatan Aman (Loading Technique) di Hopper & Dump Truck',
        theory: 'Metode V-shape loading dan L-shape loading, pencegahan undercutting tebing material, pembagian zona lalu lintas pejalan kaki.',
        practical: 'Praktik pemuatan material agregat ke hopper mixing plant beton dengan ketinggian bucket aman.'
      },
      {
        name: 'Modul 3: Pemeriksaan Pra-Operasional (P2H) & Uji Pengereman Darurat',
        theory: 'Pemeriksaan tekanan ban raksasa (tire safety), kebocoran silinder hidrolik steering/tilt/lift, fungsi alarm mundur dan lampu sorot.',
        practical: 'Inspeksi harian 18 titik komponen loader dan simulasi pengereman darurat di tanjakan.'
      }
    ],
    equipment: [
      'Unit Wheel Loader 3 - 5 m³ (Komatsu WA380 / CAT 950 / Liugong CLG856).',
      'Hopper Simulasi Batching Plant & Stockpile Material Pasir/Batu.',
      'Checklist P2H Harian Wheel Loader Standar Kemnaker.',
      'Speed Radar Gun & Rambu Pembatas Kecepatan Area Kerja.'
    ],
    participants: [
      'Operator Wheel Loader Batching Plant, Driver Loader Tambang/Quarry, Supervisor Precast Beton, Mekanik Alat Berat, Safety Officer.'
    ],
    tableData: {
      headers: ['Parameter Operasional', 'Standar Aman Wheel Loader', 'Risiko Bahaya Jika Melanggar', 'Regulasi Terkait'],
      rows: [
        ['Posisi Bucket Saat Berjalan', 'Maksimal 30 - 40 cm di atas tanah', 'Pusat Gravitasi Naik, Loader Mudah Terguling', 'Permenaker 8/2020 Pasal 45'],
        ['Pengambilan Material Stockpile', 'Mulai dari bawah bertahap, dilarang undercut', 'Timbunan Batu Runtuh Menimpa Kabin', 'Kepmen ESDM 1827/2018'],
        ['Alarm Mundur & Kamera Belakang', 'Wajib Berfungsi Bunyi > 90 dB', 'Menabrak Pekerja di Blind Spot Belakang', 'Permenaker 8/2020 Lampiran II'],
        ['Masa Berlaku SIO Kemnaker', '5 Tahun Sejak Tanggal Penerbitan', 'Pelanggaran Legalitas & Sanksi Denda Disnaker', 'UU No. 1 Tahun 1970']
      ]
    },
    caseStudy: 'Sebuah pabrik beton precast di Karawang berhasil menekan insiden tabrakan mundur loader hingga 0 kasus setelah memasang radar sensor belakang dan mengikutsertakan seluruh operatornya dalam sertifikasi SIO Kemnaker.',
    stepByStepGuide: [
      { step: '1. Pendaftaran & Cek Kesehatan', desc: 'Verifikasi berkas KTP, surat kesehatan dokter, dan surat tugas perusahaan.' },
      { step: '2. Pembekalan Teori Artikulasi & Stabilitas', desc: 'Pendalaman materi kemudi artikulasi, tipping load, dan manajemen blind spot.' },
      { step: '3. Simulasi Pemuatan di Lapangan', desc: 'Ujian praktik pemuatan material ke truk dan manuver di area sempit.' },
      { step: '4. Evaluasi & Penerbitan SIO Kemnaker', desc: 'Ujian teori dan verifikasi kompetensi oleh Pengawas K3 Kemnaker RI.' }
    ],
    links: [
      { href: '/kategori-pelatihan/lisensi-operator-excavator/', anchor: 'Sertifikasi Operator Excavator' },
      { href: '/kategori-pelatihan/operator-batching-plant-dan-mixer/', anchor: 'K3 Batching Plant & Mixer Beton' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 6. Lisensi Operator Boiler Uap
  {
    key: 'lisensi-operator-boiler-uap',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/lisensi-operator-boiler-uap/',
    archetype: 'technical_cert',
    title: 'Lisensi Operator Boiler Uap Kemnaker: SIO Kelas I & II Pesawat Uap',
    h1: 'Pelatihan & Sertifikasi Lisensi K3 Operator Pesawat Uap / Boiler Kemnaker RI: Kelas I (Kapasitas > 10 Ton/Jam) & Kelas II (Kapasitas ≤ 10 Ton/Jam)',
    meta: 'Sertifikasi operator boiler Kemnaker: SIO boiler Kelas 1 & 2 Permenaker No. 1/1988, water level gauge, safety valve, blowdown & pencegahan ledakan.',
    imgAlt: 'Operator boiler memeriksa gelas penduga level air dan pressure gauge pada ruang boiler uap pabrik',
    related: ['operator-boiler', 'lisensi-operator-bejana-tekan', 'k3-keselamatan-kerja', 'ahli-k3-umum-kemnaker'],
    intro: 'Pesawat Uap (Boiler) adalah bejana tertutup berisi air yang dipanaskan untuk menghasilkan uap air bertekanan tinggi bagi keperluan proses industri dan pembangkit listrik. Mengingat potensi energinya yang sangat dahsyat, kegagalan operasional boiler dapat memicu ledakan katastropik yang meratakan gedung pabrik. Sesuai <strong>Permenaker No. 1 Tahun 1988</strong> dan <strong>Undang-Undang Uap Tahun 1930</strong>, setiap boiler wajib dioperasikan oleh Operator Boiler berlisensi resmi Kemnaker RI.',
    hazards: [
      '<strong>Ledakan Dahsyat Boiler (Boiler Explosion):</strong> Pipa boiler pecah akibat kekurangan air (low water condition) atau tekanan uap melampaui batas desain.',
      '<strong>Pecahnya Gelas Penduga Air (Sight Glass Failure):</strong> Semburan air mendidih dan uap panas suhu 200°C mengenai wajah operator.',
      '<strong>Pukulan Air dalam Pipa (Water Hammer):</strong> Kondensasi uap yang memicu gelombang kejut hidrolik dan merusak sambungan flange pipa steam.',
      '<strong>Keracunan Gas Buang & Kebakaran Ruang Bakar (Furnace Explosion):</strong> Penumpukan bahan bakar gas/minyak yang menyala tiba-tiba saat pemantik aktif.'
    ],
    regulations: [
      '<strong>Permenaker No. 1 Tahun 1988</strong> tentang Kualifikasi dan Syarat-Syarat Operator Pesawat Uap.',
      '<strong>Undang-Undang Uap Tahun 1930 (Stoomordonnantie 1930)</strong> dan Peraturan Uap 1930.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Undang-Undang Uap & Regulasi K3 Pesawat Uap Kemnaker',
        theory: 'Peraturan Uap 1930, Permenaker 1/1988, pembagian kelas operator (Kelas I vs Kelas II), kewajiban Buku Izin Pemakaian Pesawat Uap.',
        practical: 'Audit kesesuaian pelat izin pemakaian (Stoomwezen) dan dokumen riksa uji berkala boiler.'
      },
      {
        name: 'Modul 2: Instrumentasi Pengaman Boiler (Appurtenances) & Mutu Air Umpan',
        theory: 'Fungsi dua unit safety valve, gelas penduga ganda, pressure gauge kalibrasi, pengolahan air boiler (water treatment & scaling).',
        practical: 'Uji fungsi blowing gelas penduga air dan pengujian kimiawi kesadahan (hardness) air umpan boiler.'
      },
      {
        name: 'Modul 3: Prosedur Operasi Aman, Blowdown, & Tanggap Darurat Low-Water',
        theory: 'Langkah start-up bertahap, prosedur blowdown berkala untuk membuang lumpur kerak, penanganan darurat saat alarm low-water berbunyi.',
        practical: 'Simulasi pemadaman darurat burner (emergency trip) saat indikator air hilang dari gelas penduga.'
      }
    ],
    equipment: [
      'Unit Fire Tube / Water Tube Boiler Industri (Kapasitas 3 - 20 Ton/Jam).',
      'Gelas Penduga (Water Level Sight Glass) dengan Lampu Penerangan Khusus.',
      'Pressure Gauge Kalibrasi & Safety Relief Valve Uji Angkat.',
      'Chemical Water Hardness & pH Test Kit untuk Air Boiler.'
    ],
    participants: [
      'Operator Boiler Pabrik, Teknisi Utility Pabrik, Maintenance Boiler, Supervisor Energi, Safety Officer Manufaktur/Sawit/Tekstil.'
    ],
    tableData: {
      headers: ['Kategori Lisensi Boiler', 'Kapasitas Uap Pabrik', 'Pendidikan Minimal', 'Masa Berlaku Lisensi'],
      rows: [
        ['Operator Boiler Kelas II', 'Kapasitas s.d. 10 Ton/Jam (≤ 10 Ton/Jam)', 'Minimal SLTP / Sederajat + Pengalaman', '5 Tahun (Diterbitkan Resmi Kemnaker)'],
        ['Operator Boiler Kelas I', 'Kapasitas > 10 Ton/Jam atau Boiler Superheater', 'Minimal SLTA / D3 Teknik + Pengalaman', '5 Tahun (Diterbitkan Resmi Kemnaker)'],
        ['Ahli K3 Pesawat Uap & Bejana Tekan', 'Spesialis Pengawas Teknis & Desain Boiler', 'Minimal D3/S1 Teknik Mesin', '3 Tahun (SKP Resmi Kemnaker)'],
        ['Juru Las Pesawat Uap (Welder Boiler)', 'Pengelasan Dinding Pipa Bertekanan Boiler', 'Sertifikasi Juru Las Kelas I Kemnaker', '3 Tahun (Kemnaker RI)']
      ]
    },
    caseStudy: 'Sebuah pabrik tekstil di Solo berhasil mencegah ledakan fatal setelah operator boiler Kelas I yang baru lulus sertifikasi mendeteksi kegagalan sensor air dan segera melakukan prosedur emergency shutdown sesuai SOP.',
    stepByStepGuide: [
      { step: '1. Pendaftaran & Verifikasi Dokumen', desc: 'Pengumpulan berkas ijazah, surat kesehatan bebas buta warna, dan surat penugasan.' },
      { step: '2. Pembekalan Teori Termodinamika & Regulasi', desc: 'Pemahaman UU Uap 1930, Permenaker 1/1988, dan instrumen pengaman bejana uap.' },
      { step: '3. Praktik Uji Blowing & Blowdown di Ruang Boiler', desc: 'Ujian pembersihan gelas penduga, uji safety valve, dan penanganan air umpan.' },
      { step: '4. Uji Lisensi Pengawas Kemnaker', desc: 'Evaluasi tertulis dan verifikasi kecakapan operasional untuk penerbitan SIO resmi.' }
    ],
    links: [
      { href: '/kategori-pelatihan/operator-boiler/', anchor: 'Panduan Operator Boiler Uap' },
      { href: '/kategori-pelatihan/lisensi-operator-bejana-tekan/', anchor: 'Sertifikasi Operator Bejana Tekan' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 7. Lisensi Operator Bejana Tekan
  {
    key: 'lisensi-operator-bejana-tekan',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/lisensi-operator-bejana-tekan/',
    archetype: 'technical_cert',
    title: 'Lisensi Operator Bejana Tekan & Tangki Timbun Kemnaker RI',
    h1: 'Pelatihan & Sertifikasi Lisensi K3 Operator Bejana Tekanan & Tangki Timbun Kemnaker RI: Sesuai Permenaker No. 37 Tahun 2016',
    meta: 'Sertifikasi operator bejana tekan Kemnaker: SIO Permenaker 37/2016, kompresor udara, air receiver tank, tangki timbun BBM/LPG & safety valve.',
    imgAlt: 'Operator memeriksa bejana tekanan air receiver tank kompresor dan tangki timbun di area utilitas pabrik',
    related: ['lisensi-operator-boiler-uap', 'ahli-k3-kimia', 'k3-keselamatan-kerja', 'ahli-k3-umum-kemnaker'],
    intro: 'Bejana Tekanan (Pressure Vessel seperti Air Receiver Tank, Reaktor Kimia, Autoclave) dan Tangki Timbun (Storage Tank BBM, LPG, Kimia B3) menyimpan fluida berenergi tinggi yang berisiko meledak, terbakar, atau bocor menyebarkan gas beracun. Sesuai <strong>Permenaker No. 37 Tahun 2016 tentang K3 Bejana Tekanan dan Tangki Timbun</strong>, pengoperasian dan pemeliharaan instalasi ini wajib dilakukan oleh operator yang memiliki Lisensi K3 (SIO) resmi dari Kementerian Ketenagakerjaan RI.',
    hazards: [
      '<strong>Ledakan Bejana Tekan (Pneumatic Explosion):</strong> Pecahnya dinding bejana kompresor akibat korosi penipisan pelat atau kegagalan safety valve.',
      '<strong>Kebocoran Gas Beracun & Flammable Tangki Timbun:</strong> Kegagalan seal valve tangki timbun amonia, klorin, atau LPG yang memicu ledakan awan gas.',
      '<strong>Kerapuhan Logam Akibat Tekanan & Suhu (Fatigue Rupture):</strong> Fluktuasi siklus tekanan harian yang memicu retakan mikro pada lasan bejana.',
      '<strong>Kecelakaan Masuk Ruang Tertutup Tangki Timbun:</strong> Asfiksia akibat uap hidrokarbon pekat saat inspeksi internal tangki penyimpanan.'
    ],
    regulations: [
      '<strong>Permenaker No. 37 Tahun 2016</strong> tentang Keselamatan dan Kesehatan Kerja Bejana Tekanan dan Tangki Timbun.',
      '<strong>Kepmenaker No. 187/MEN/1999</strong> tentang Pengendalian Bahan Kimia Berbahaya.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Kerangka Regulasi Permenaker 37/2016 & Standar Desain ASME',
        theory: 'Definisi bejana tekan tekanan > 1 kg/cm² dan volume > 2.25 liter, klasifikasi tangki timbun, kewajiban riksa uji berkala.',
        practical: 'Audit dokumen pelat nama (nameplate) bejana tekan dan verifikasi masa berlaku surat izin pemakaian.'
      },
      {
        name: 'Modul 2: Alat Perlengkapan Pengaman (Safety Relief Device) & Uji Ketebalan',
        theory: 'Prinsip kerja Pressure Safety Valve (PSV), rupture disc, pressure gauge, non-destructive testing pengukur ketebalan ultrasonik (UT).',
        practical: 'Pemeriksaan visual dinding bejana tekan dan pengukuran sisa ketebalan dinding pipa menggunakan Ultrasonic Thickness Gauge.'
      },
      {
        name: 'Modul 3: SOP Pengoperasian, Pengisian (Filling), & Pembuangan Kondensat',
        theory: 'Prosedur pembuangan air kondensat harian tangki kompresor, batas aman pengisian tangki timbun cairan (maksimal 80-85%), pembumian statis.',
        practical: 'Praktik draining air kompresor aman dan simulasi penutupan darurat emergency shut-off valve tangki timbun.'
      }
    ],
    equipment: [
      'Unit Air Receiver Tank Kompresor Udara Pabrik Terkalibrasi.',
      'Ultrasonic Thickness Gauge Digital untuk Pengujian Ketebalan Pelat.',
      'Pressure Safety Valve (PSV) Bench Test Simulator.',
      'Grounding Static Discharge Clamp & Multi-Gas Detector Portabel.'
    ],
    participants: [
      'Operator Kompresor Pabrik, Teknisi Tangki Timbun BBM/Kimia, Maintenance Utility, Safety Officer Kimia/Manufaktur, dan Pengawas P2K3.'
    ],
    tableData: {
      headers: ['Jenis Peralatan Bertekanan', 'Batas Tekanan / Kapasitas', 'Perangkat Pengaman Wajib', 'Regulasi Acuan'],
      rows: [
        ['Bejana Udara (Air Receiver Tank)', 'Tekanan > 1 Bar / kg/cm²', 'Pressure Gauge, Safety Valve, Drain Valve Otomatis', 'Permenaker 37/2016 Pasal 12'],
        ['Tangki Timbun Bahan Kimia B3', 'Kapasitas > 100 Meter Kubik', 'Level Indicator, Breather Valve, Tanggul Sekunder', 'Permenaker 37/2016 Pasal 25'],
        ['Tangki Timbun Gas Cair LPG / LNG', 'Tekanan Desain > 1.5 Bar', 'Dual Safety Valve, Emergency Shut-off Valve, Sprinkler', 'Permenaker 37/2016 Pasal 30'],
        ['Autoclave / Bejana Reaksi Kimia', 'Suhu Tinggi & Tekanan Uap', 'Interlock Door Sensor, Temperature Gauge, Rupture Disc', 'Permenaker 37/2016 Pasal 18']
      ]
    },
    caseStudy: 'Sebuah pabrik makanan di Pasuruan berhasil mendeteksi penipisan kritis pada dinding tangki uap bejana sebelum terjadi keretakan fatal berkat pelatihan in-house pengukuran ultrasonik dan inspeksi berkala.',
    stepByStepGuide: [
      { step: '1. Pendaftaran & Verifikasi Berkas', desc: 'Pengecekan ijazah, surat kesehatan, dan surat penunjukan operator dari perusahaan.' },
      { step: '2. Pembekalan Teori Permenaker 37/2016', desc: 'Pendalaman materi batas tekanan, kalkulasi tegangan pelat, dan sistem perpipaan.' },
      { step: '3. Praktik Uji Ketebalan & Draining Bejana', desc: 'Pengukuran ketebalan pelat menggunakan UT gauge dan pengujian safety valve.' },
      { step: '4. Evaluasi & Penerbitan SIO Kemnaker', desc: 'Ujian teori komprehensif dan uji kecakapan praktis oleh Pengawas K3 Kemnaker.' }
    ],
    links: [
      { href: '/kategori-pelatihan/lisensi-operator-boiler-uap/', anchor: 'Sertifikasi Operator Boiler Uap' },
      { href: '/kategori-pelatihan/ahli-k3-kimia/', anchor: 'Pelatihan Ahli K3 Kimia' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  }
];
