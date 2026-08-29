import { MultiArchetypeProgramDetail } from './multi-archetype-renderer';

export const batch7HeavyEquipmentPagesPart2: MultiArchetypeProgramDetail[] = [
  // 8. Lisensi Operator Genset dan Pembangkit
  {
    key: 'lisensi-operator-genset-dan-pembangkit',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/lisensi-operator-genset-dan-pembangkit/',
    archetype: 'technical_cert',
    title: 'Lisensi Operator Genset & Penggerak Mula Kemnaker RI: Permenaker No. 38/2016',
    h1: 'Pelatihan & Sertifikasi Lisensi K3 Operator Penggerak Mula / Genset Diesel & Turbin Gas Kemnaker RI (Kapasitas > 214.75 kVA)',
    meta: 'Sertifikasi operator genset Kemnaker: SIO penggerak mula Permenaker 38/2016, sinkronisasi daya listrik, tangki solar harian, LOTO & proteksi bising.',
    imgAlt: 'Teknisi melakukan pemeriksaan visual panel sinkronisasi dan sistem bahan bakar mesin genset diesel kapasitas 1.000 kVA',
    related: ['ahli-k3-listrik', 'lisensi-operator-bejana-tekan', 'k3-keselamatan-kerja', 'ahli-k3-umum-kemnaker'],
    intro: 'Pembangkit Listrik Mandiri / Generator Set (Genset Diesel, Turbin Gas, Turbin Uap) merupakan sumber daya darurat utama di fasilitas manufaktur, rumah sakit, tambang, dan gedung bertingkat. Berdasarkan <strong>Permenaker No. 38 Tahun 2016 tentang K3 Pesawat Tenaga dan Produksi</strong>, setiap mesin penggerak mula dengan daya di atas 214.75 kVA (atau 160 kW) wajib dioperasikan oleh Operator Penggerak Mula yang memiliki Lisensi K3 (SIO) resmi dari Kementerian Ketenagakerjaan RI.',
    hazards: [
      '<strong>Kebakaran Tangki Bahan Bakar Harian Solar:</strong> Percikan api listrik panel atau permukaan knalpot panas yang menyulut ceceran solar.',
      '<strong>Bahaya Arc Flash & Sengatan Listrik Tegangan Rendah/Menengah:</strong> Kesalahan saat proses sinkronisasi paralel daya genset ke gardu PLN.',
      '<strong>Keracunan Gas Buang Karbon Monoksida (CO):</strong> Sirkulasi udara ruang genset yang buruk hingga gas buang masuk ke area kerja.',
      '<strong>Ketulian Permanen Akibat Kebisingan Mesin:</strong> Paparan bising ruang mesin genset melampaui 105 dBA tanpa peredam suara dan APD earmuff.'
    ],
    regulations: [
      '<strong>Permenaker No. 38 Tahun 2016</strong> tentang Keselamatan dan Kesehatan Kerja Pesawat Tenaga dan Produksi.',
      '<strong>Permenaker No. 12 Tahun 2015</strong> tentang K3 Listrik di Tempat Kerja.',
      '<strong>Permenaker No. 5 Tahun 2018</strong> tentang K3 Lingkungan Kerja (Kebisingan).',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Kerangka Regulasi Permenaker 38/2016 & Penggerak Mula',
        theory: 'Definisi penggerak mula daya > 214.75 kVA, kewajiban memiliki SIO dan surat izin pemakaian mesin genset, buku kerja operator.',
        practical: 'Audit dokumen riksa uji berkala genset dan nameplate daya generator.'
      },
      {
        name: 'Modul 2: Komponen Mekanikal, Sistem Pelumasan, & Proteksi Kebakaran Ruang Mesin',
        theory: 'Pemeriksaan radiator pendingin, turbocharger, governor putaran mesin, sistem tangki solar harian, pemadam CO2 otomatis.',
        practical: 'Inspeksi sistem tanggul sekunder (bund wall) tangki solar dan pengujian sensor level solar otomatis.'
      },
      {
        name: 'Modul 3: Prosedur Start-Up Aman, Sinkronisasi Paralel, & LOTO Listrik',
        theory: 'Langkah pemanasan mesin (warming-up), pengecekan tegangan dan frekuensi 50 Hz, prosedur sinkronisasi genset ganda, LOTO breaker.',
        practical: 'Simulasi start genset manual/otomatis (AMF) dan pemasangan lockout hasp pada main distribution panel.'
      }
    ],
    equipment: [
      'Unit Genset Diesel Kapasitas 250 - 1.000 kVA dengan Panel AMF/ATS.',
      'Digital Sound Level Meter & Infrared Thermometer Gun untuk Knalpot Panas.',
      'Set Lockout/Tagout Breaker Listrik Tegangan Rendah.',
      'APAR Karbon Dioksida (CO2) 5 kg & Foam Fire Extinguisher Ruang Mesin.'
    ],
    participants: [
      'Operator Genset Gedung/Pabrik, Teknisi Listrik Pabrik, Maintenance Utility, Safety Officer Manufaktur, Supervisor Fasilitas.'
    ],
    tableData: {
      headers: ['Daya Penggerak Mula', 'Kualifikasi Operator Wajib', 'Persyaratan Pendidikan', 'Masa Berlaku SIO'],
      rows: [
        ['Daya > 214.75 kVA s.d. 1.000 kVA', 'Operator Penggerak Mula Kelas II', 'Minimal SLTP / Sederajat', '5 Tahun (Diterbitkan Resmi Kemnaker)'],
        ['Daya di atas 1.000 kVA', 'Operator Penggerak Mula Kelas I', 'Minimal SLTA / Sederajat', '5 Tahun (Diterbitkan Resmi Kemnaker)'],
        ['Instalasi Kelistrikan Genset', 'Ahli K3 Listrik / Teknisi Listrik', 'Minimal D3 Teknik Elektro', '3 - 5 Tahun (Kemnaker RI)'],
        ['Tangki Timbun Solar > 100 m³', 'Operator Tangki Timbun Kemnaker', 'Minimal SLTP / Sederajat', '5 Tahun (Permenaker 37/2016)']
      ]
    },
    caseStudy: 'Sebuah rumah sakit swasta di Jakarta berhasil mempertahankan pasokan listrik darurat 100% tanpa henti saat pemadaman jaringan PLN tanpa satu pun insiden berkat kesiapan operator genset berlisensi Kemnaker yang rutin melakukan perawatan preventif harian.',
    stepByStepGuide: [
      { step: '1. Pendaftaran & Verifikasi Berkas', desc: 'Pengecekan ijazah, KTP, surat kesehatan dokter, dan surat tugas operator.' },
      { step: '2. Pembekalan Teori Permenaker 38/2016', desc: 'Pendalaman regulasi pesawat tenaga, prinsip alternator, dan manajemen bising.' },
      { step: '3. Workshop Praktik Start-Up & LOTO', desc: 'Simulasi start manual genset, pemeriksaan level oli/air, dan pemasangan LOTO panel.' },
      { step: '4. Evaluasi & Penerbitan SIO Resmi', desc: 'Ujian teori komprehensif dan verifikasi kecakapan oleh Pengawas K3 Kemnaker.' }
    ],
    links: [
      { href: '/kategori-pelatihan/ahli-k3-listrik/', anchor: 'Pelatihan Ahli K3 Listrik' },
      { href: '/kategori-pelatihan/lisensi-operator-bejana-tekan/', anchor: 'Sertifikasi Tangki Timbun & Bejana Tekan' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 9. Lisensi Rigger Juru Ikat Beban
  {
    key: 'lisensi-rigger-juru-ikat-beban',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/lisensi-rigger-juru-ikat-beban/',
    archetype: 'technical_cert',
    title: 'Lisensi Rigger (Juru Ikat Beban) Kemnaker RI: Sertifikasi SIO Lifting Resmi',
    h1: 'Pelatihan & Sertifikasi Lisensi K3 Juru Ikat Beban (Rigger) Kemnaker RI: Sesuai Permenaker No. 8 Tahun 2020 untuk Operasi Crane & Lifting',
    meta: 'Sertifikasi lisensi rigger Kemnaker: SIO juru ikat beban Permenaker 8/2020, sling wire rope, webbing sling, shackle inspection, hitch & lifting plan.',
    imgAlt: 'Rigger bersertifikasi memasang webbing sling dan shackle pada beban struktur baja sebelum proses lifting crane dimulai',
    related: ['rigger', 'signalman', 'lifting-supervisor', 'lisensi-operator-mobile-crane'],
    intro: 'Juru Ikat Beban (Rigger) memegang tanggung jawab kritis dalam menentukan kelayakan tali pengangkat (sling), memilih teknik ikatan (choker, basket, vertical hitch), menentukan titik berat (Center of Gravity), dan memandu operator crane melalui sinyal standar. Sesuai <strong>Permenaker No. 8 Tahun 2020 tentang K3 Pesawat Angkat dan Pesawat Angkut</strong>, setiap personel yang melakukan pengikatan beban wajib memiliki Lisensi K3 Juru Ikat (SIO Rigger) resmi dari Kementerian Ketenagakerjaan RI.',
    hazards: [
      '<strong>Putusnya Sling Pengangkat (Sling Failure):</strong> Penggunaan sling yang aus, terpuntir (kinked), atau melebihi batas sudut pengangkatan 60 derajat.',
      '<strong>Beban Tergelincir & Terguling (Load Slippage):</strong> Penentuan titik berat beban asimetris yang salah sehingga beban meluncur saat terangkat.',
      '<strong>Kerusakan Shackle & Eyebolt Akibat Beban Samping (Side Loading):</strong> Pemasangan shackle miring yang merusak ulir pin pengunci beban.',
      '<strong>Rigger Tertimpa Beban di Bawah Lintasan (Suspended Load Hit):</strong> Berdiri di bawah beban gantung saat proses pemindahan material.'
    ],
    regulations: [
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang Keselamatan dan Kesehatan Kerja Pesawat Angkat dan Pesawat Angkut.',
      '<strong>Standar ASME B30.9 (Slings) & ASME B30.26 (Rigging Hardware)</strong>.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Regulasi K3 Pesawat Angkat & Standar Alat Bantu Angkat (ABA)',
        theory: 'Kewajiban regulasi Permenaker 8/2020, definisi Safe Working Load (SWL) dan Working Load Limit (WLL), faktor keselamatan sling (Safety Factor 5:1).',
        practical: 'Audit tag sertifikat pada webbing sling, wire rope sling, dan shackle sebelum penggunaan.'
      },
      {
        name: 'Modul 2: Kriteria Afkir Sling (Rejection Criteria) & Inspeksi Hardware',
        theory: 'Kriteria kawat putus pada wire rope sling, sobekan serat webbing sling, keausan pin shackle 10%, deformasi hook.',
        practical: 'Praktik inspeksi visual dan pengukuran keausan menggunakan jangka sorong pada set alat rigging.'
      },
      {
        name: 'Modul 3: Kalkulasi Sudut Sling, Hitch Configuration, & Kode Sinyal Tangan',
        theory: 'Efek reduksi sudut sling terhadap tegangan tali (Tension Calculation), konfigurasi Choker vs Basket Hitch, komunikasi kode tangan rigger standar.',
        practical: 'Simulasi pengikatan beban asimetris pipa 15 ton dan pemanduan pengangkatan mobile crane melewati rintangan.'
      }
    ],
    equipment: [
      'Set Webbing Sling Polyester Bersertifikat (Kapasitas 2 - 10 Ton).',
      'Set Wire Rope Sling Multi-Leg dengan Thimble & Master Link.',
      'Bow Shackle & D-Shackle Galvanized G-209 / G-2130 (WLL 3.25 - 12 Ton).',
      'Jangka Sorong (Vernier Caliper), Meteran Gulung, & Peluit Rigger.'
    ],
    participants: [
      'Rigger Lapangan, Signalman Crane, Mandor Lifting Konstruksi/Migas, Operator Overhead Crane, Safety Inspector Fabrikasi.'
    ],
    tableData: {
      headers: ['Sudut Sling terhadap Horizontal', 'Faktor Pengali Tegangan (Load Factor)', 'Beban Sebenarnya per Kaki Sling (Beban 10 Ton, 2 Kaki)', 'Status Keselamatan'],
      rows: [
        ['90 Derajat (Tegak Lurus)', '1.000', '5.00 Ton per Kaki', 'Sangat Aman (Rekomendasi Ideal)'],
        ['60 Derajat', '1.155', '5.78 Ton per Kaki', 'Aman (Standar Praktik Lapangan)'],
        ['45 Derajat', '1.414', '7.07 Ton per Kaki', 'Beban Meningkat Drastis (Waspada)'],
        ['30 Derajat', '2.000', '10.00 Ton per Kaki', 'DILARANG (Sling Menanggung 2x Lipat Beban)']
      ]
    },
    caseStudy: 'Sebuah kontraktor fabrikasi baja di Batam mencatatkan 100% Zero Dropped Objects dalam 2.000 operasi lifting modul berat setelah mewajibkan seluruh riggernya lulus sertifikasi Lisensi Juru Ikat Kemnaker.',
    stepByStepGuide: [
      { step: '1. Pendaftaran & Verifikasi Legalitas', desc: 'Pemeriksaan berkas ijazah, KTP, surat kesehatan bebas buta warna, dan surat tugas.' },
      { step: '2. Pembekalan Teori Matematika Rigging', desc: 'Kalkulasi sudut sling, center of gravity, tabel reduksi WLL, dan kode sinyal tangan.' },
      { step: '3. Praktik Inspeksi Alat & Pengikatan Beban', desc: 'Ujian inspeksi kriteria afkir sling dan simulasi pengikatan beban asimetris di lapangan.' },
      { step: '4. Evaluasi Pengawas & Penerbitan SIO', desc: 'Ujian teori komprehensif dan uji kecakapan praktis oleh Pengawas K3 Kemnaker RI.' }
    ],
    links: [
      { href: '/kategori-pelatihan/rigger/', anchor: 'Panduan Pelatihan Rigger' },
      { href: '/kategori-pelatihan/signalman/', anchor: 'Pelatihan Signalman & Komunikasi Lifting' },
      { href: '/kategori-pelatihan/lifting-supervisor/', anchor: 'Sertifikasi Lifting Supervisor' }
    ]
  },

  // 10. Lisensi Teknisi Perancah Scaffolding
  {
    key: 'lisensi-teknisi-perancah-scaffolding',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/lisensi-teknisi-perancah-scaffolding/',
    archetype: 'technical_cert',
    title: 'Lisensi Teknisi & Pengawas Perancah (Scaffolding) Kemnaker RI',
    h1: 'Pelatihan & Sertifikasi Lisensi K3 Teknisi Perancah (Scaffolder) & Pengawas Scaffolding Kemnaker RI: Sesuai Permenaker No. 1/1980 & Permenaker No. 9/2016',
    meta: 'Sertifikasi lisensi teknisi perancah Kemnaker: SIO scaffolder Permenaker 1/1980, perancah pipa tubular BS 1139, perancah frame, scaffolding tag & inspeksi.',
    imgAlt: 'Teknisi perancah bersertifikasi merakit scaffolding tubular pipa baja dengan safety harness terpasang penuh pada proyek bertingkat',
    related: ['operator-scaffolding', 'pengawas-scaffolding', 'scaffolding-inspector', 'tenaga-kerja-bangunan-tinggi-tkbt'],
    intro: 'Perancah (Scaffolding) adalah struktur sementara yang digunakan untuk menyangga tenaga kerja dan material saat pekerjaan konstruksi, pemeliharaan, dan fabrikasi di ketinggian. Runtuhnya perancah merupakan salah satu penyebab utama korban jiwa massal pada proyek konstruksi. Sesuai <strong>Permenaker No. 1 Tahun 1980</strong> dan <strong>Permenaker No. 9 Tahun 2016</strong>, perakitan, pengubahan, dan pembongkaran scaffolding wajib dilakukan oleh Teknisi Perancah berlisensi resmi Kemnaker RI.',
    hazards: [
      '<strong>Keruntuhan Struktur Perancah (Scaffold Collapse):</strong> Beban kerja berlebih (overloading) atau ketiadaan ikatan pengaku silang (cross bracing) dan pengikat dinding (wall tie).',
      '<strong>Jatuh dari Ketinggian Saat Merakit Scaffolding:</strong> Scaffolder tidak mengaitkan double lanyard safety harness saat memasang pipa ledger.',
      '<strong>Tertimpa Pipa & Clamp yang Jatuh (Dropped Objects):</strong> Ketiadaan jaring pengaman (safety netting), papan tepi (toe board), dan zona barikade bawah.',
      '<strong>Amblesnya Pondasi Pipa Perancah (Base Plate Failure):</strong> Pipa tiang standar berdiri di atas tanah lunak tanpa pelat dasar (base plate) dan balok kayu alas (sole board).'
    ],
    regulations: [
      '<strong>Permenaker No. 1 Tahun 1980</strong> tentang Keselamatan dan Kesehatan Kerja pada Konstruksi Bangunan.',
      '<strong>Permenaker No. 9 Tahun 2016</strong> tentang K3 dalam Pekerjaan pada Ketinggian.',
      '<strong>Standar British Standard BS 1139 / EN 74</strong> tentang Tabular Scaffolding Components.'
    ],
    modules: [
      {
        name: 'Modul 1: Kebijakan K3 Konstruksi & Standar Material Perancah BS 1139',
        theory: 'Regulasi Permenaker 1/1980 dan Permenaker 9/2016, spesifikasi pipa galvanis diameter 48.3 mm, klem mati (right angle coupler), klem putar (swivel coupler).',
        practical: 'Audit kelayakan material pipa dan pengujian klem perancah bebas retak/korosi.'
      },
      {
        name: 'Modul 2: Prinsip Desain Struktur, Beban Kerja Aman, & Sistem Ikatan (Tie)',
        theory: 'Beban ringan (225 kg/bay), beban sedang (450 kg/bay), beban berat (675 kg/bay), sistem pengaku diagonal (sway bracing), pengikat tie-back ke kolom gedung.',
        practical: 'Perhitungan kebutuhan balok alas (sole board) dan jarak tiang standar sesuai kapasitas beban rencana.'
      },
      {
        name: 'Modul 3: Perakitan, Pembongkaran, & Pemasangan Scafftag (Green / Red Tag)',
        theory: 'Urutan perakitan aman metode Advance Guardrail / 100% Tie-Off, prosedur pembongkaran bertahap dari atas ke bawah, sistem scaffolding inspection tag.',
        practical: 'Praktik mendirikan tower scaffolding tubular 3 tingkat lengkap dengan tangga (ladder access), papan kerja (platform full planking), dan handrail.'
      }
    ],
    equipment: [
      'Set Pipa Tubular Galvanis BS 1139 (Panjang 1m, 2m, 3m, 4m, 6m).',
      'Drop Forged Right Angle Coupler, Swivel Coupler, Sleeve Coupler, & Base Plate.',
      'Kunci Pas Scaffolder Ratchet Box Spanner 19/21 mm & Waterpass Magnetik.',
      'Full Body Harness Double Lanyard Big Hook dengan Shock Absorber.',
      'Set Scaffolding Inspection Tag Holder (Green Tag & Red Tag).'
    ],
    participants: [
      'Teknisi Perancah (Scaffolder), Pengawas Scaffolding, Mandor Konstruksi, Safety Inspector Proyek, Maintenance Shutdown Plant.'
    ],
    tableData: {
      headers: ['Tingkatan Kualifikasi', 'Tugas & Wewenang Utama', 'Syarat Pendidikan Minimal', 'Masa Berlaku Lisensi'],
      rows: [
        ['Teknisi Perancah (Scaffolder)', 'Merakit, Mengubah, & Membongkar Scaffolding', 'Minimal SLTP / Sederajat', '5 Tahun (SIO Resmi Kemnaker)'],
        ['Pengawas / Inspektur Scaffolding', 'Memeriksa Struktur & Menerbitkan Green Scafftag', 'Minimal SLTA / D3 Teknik', '5 Tahun (Lisensi Pengawas Kemnaker)'],
        ['Tenaga Kerja Bangunan Tinggi (TKBT 2)', 'Bekerja di Atas Lantai Kerja Perancah Tetap', 'Minimal SLTP / Sederajat', '5 Tahun (Sertifikasi Permenaker 9/2016)'],
        ['Tenaga Kerja Pada Ketinggian (TKPK 1)', 'Pekerjaan Akses Tali (Rope Access) Khusus', 'Minimal SLTA / Sederajat', '5 Tahun (Kemnaker RI)']
      ]
    },
    caseStudy: 'Sebuah proyek EPC Kilang Minyak di Balikpapan mendirikan 4.500 unit scaffolding modular tanpa ada satu pun kegagalan struktur setelah seluruh tim scaffolder dan inspektur scaffolding-nya tersertifikasi resmi Kemnaker RI.',
    stepByStepGuide: [
      { step: '1. Pendaftaran & Verifikasi Kesehatan', desc: 'Pengecekan surat sehat bebas takut ketinggian (akrofobia) dan dokumen legal.' },
      { step: '2. Pembekalan Teori Struktur & Beban', desc: 'Pemahaman Permenaker 1/1980, BS 1139, kalkulasi beban kerja aman, dan scaffolding tag.' },
      { step: '3. Praktik Dirikan & Bongkar Scaffolding', desc: 'Ujian perakitan tower scaffolding 3 tingkat dengan waterpass dan safety harness 100% tie-off.' },
      { step: '4. Evaluasi Pengawas & Penerbitan SIO', desc: 'Ujian tertulis regulasi dan verifikasi kecakapan teknis oleh Pengawas K3 Kemnaker.' }
    ],
    links: [
      { href: '/kategori-pelatihan/operator-scaffolding/', anchor: 'Pelatihan Operator Scaffolding' },
      { href: '/kategori-pelatihan/scaffolding-inspector/', anchor: 'Pelatihan Scaffolding Inspector' },
      { href: '/kategori-pelatihan/tenaga-kerja-bangunan-tinggi-tkbt/', anchor: 'Sertifikasi K3 Bangunan Tinggi TKBT' }
    ]
  },

  // 11. Lisensi Juru Las Welder K3
  {
    key: 'lisensi-juru-las-welder-k3',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/lisensi-juru-las-welder-k3/',
    archetype: 'technical_cert',
    title: 'Lisensi Juru Las (Welder) K3 Kemnaker RI: Kelas I, II, & III Pesawat Uap & Bejana Tekan',
    h1: 'Pelatihan & Sertifikasi Lisensi K3 Juru Las (Welder) Kemnaker RI: Kelas I (Pipa Bertekanan Tinggi), Kelas II (Pelat Bejana Tekan), & Kelas III (Struktur Konstruksi)',
    meta: 'Sertifikasi juru las welder Kemnaker: SIO welder Kelas 1, 2, 3 Permenaker No. 2/1982, SMAW/GTAW posisi 6G/3G/4G, uji bending, X-ray NDT & safe hot work.',
    imgAlt: 'Juru las bersertifikasi Kemnaker melakukan pengelasan pipa baja bertekanan posisi 6G menggunakan proses SMAW/GTAW',
    related: ['lisensi-operator-boiler-uap', 'lisensi-operator-bejana-tekan', 'k3-keselamatan-kerja', 'ahli-k3-umum-kemnaker'],
    intro: 'Pengelasan pada instalasi berisiko tinggi seperti pipa uap boiler, bejana tekanan, tangki timbun BBM, pipa penyalur migas, dan struktur baja jembatan menuntut mutu sambungan las tanpa cacat mikro. Berdasarkan <strong>Permenaker No. 2 Tahun 1982 tentang Kualifikasi Juru Las di Tempat Kerja</strong>, setiap juru las yang menangani pekerjaan pengelasan bertekanan wajib memiliki Sertifikat dan Lisensi K3 Juru Las (SIO Welder) resmi dari Kementerian Ketenagakerjaan RI.',
    hazards: [
      '<strong>Kegagalan Sambungan Las Bejana Tekan / Pipa:</strong> Retakan mikro (micro crack) atau kurangnya penetrasi las yang memicu ledakan pipa gas/uap.',
      '<strong>Bahaya Kejutan Listrik Mesin Las (Electric Shock):</strong> Kebocoran arus pada kabel las holder dan tegangan sirkuit terbuka (OCV) di lingkungan lembab.',
      '<strong>Radiasi Sinar Ultraviolet & Sinar Inframerah Las:</strong> Kerusakan kornea mata (arc eye / flash burn) dan luka bakar radiasi kulit operator.',
      '<strong>Inhalasi Asap Beracun Pengelasan (Welding Fumes):</strong> Paparan gas ozon, nitrogen oksida, uap seng, dan kromium heksavalen karsinogenik.'
    ],
    regulations: [
      '<strong>Permenaker No. 2 Tahun 1982</strong> tentang Kualifikasi Juru Las di Tempat Kerja.',
      '<strong>Undang-Undang Uap 1930</strong> dan Peraturan Uap 1930.',
      '<strong>Standar ASME Section IX (Welding and Brazing Qualifications) & AWS D1.1</strong>.'
    ],
    modules: [
      {
        name: 'Modul 1: Regulasi Permenaker 2/1982 & Metalurgi Pengelasan',
        theory: 'Pembagian kelas juru las (Kelas I, II, III), simbol pengelasan AWS/ISO, pengaruh panas pada struktur mikro logam (Heat Affected Zone / HAZ).',
        practical: 'Audit dokumen Welding Procedure Specification (WPS) dan Procedure Qualification Record (PQR).'
      },
      {
        name: 'Modul 2: Keselamatan Kerja Listrik Pengelasan, Ventilasi, & APD Las',
        theory: 'Proteksi Open Circuit Voltage (OCV) limiter, pemilihan tingkat kegelapan kaca filter helm las (Shade DIN 9 - 13), sistem exhaust ventilasi asap.',
        practical: 'Pemeriksaan kelayakan mesin las inverter, isolasi kabel stang las, dan penjepit massa (ground clamp).'
      },
      {
        name: 'Modul 3: Praktik Pengelasan Benda Uji (Test Coupon) & Uji Merusak/Tidak Merusak',
        theory: 'Teknik pengelasan SMAW / GTAW / GMAW, pencegahan cacat porosity, slag inclusion, undercut, dan incomplete fusion.',
        practical: 'Pengelasan pelat posisi 3G/4G atau pipa posisi 6G, disusul uji tekuk (Bending Test) dan uji radiografi (X-Ray NDT).'
      }
    ],
    equipment: [
      'Mesin Las SMAW Inverter 400A & Mesin Las GTAW Argon Terkalibrasi.',
      'Auto-Darkening Welding Helmet dengan Filter Shade DIN 9-13.',
      'Benda Uji (Test Coupon) Pelat Baja ASTM A36 / Pipa Baja Carbon Steel Sch 40/80.',
      'Mesin Uji Tekuk Hidrolik (Hydraulic Guided Bend Test Machine) & Dye Penetrant Test Kit.'
    ],
    participants: [
      'Juru Las (Welder) Pabrik/Proyek, Pipe Fitter, Maintenance Welder Boiler, Welding Inspector, Quality Control (QC) Pengelasan.'
    ],
    tableData: {
      headers: ['Kelas Juru Las Kemnaker', 'Ruang Lingkup Pengelasan', 'Posisi Benda Uji Praktik', 'Tingkat Kualifikasi Tertinggi'],
      rows: [
        ['Juru Las Kelas III', 'Pengelasan pelat dengan posisi tertentu (1G, 2G, 3G, 4G)', 'Uji Tekuk Pelat (Plate Bend Test)', 'Pekerjaan Struktur Konstruksi Baja Biasa'],
        ['Juru Las Kelas II', 'Pengelasan pipa bertekanan rendah & bejana tekanan sedang', 'Uji Pipa Posisi 1G, 2G, 5G & Pelat', 'Pipa Utilitas Pabrik & Tangki Timbun'],
        ['Juru Las Kelas I', 'Pengelasan pipa pesawat uap boiler tekanan tinggi & migas', 'Uji Pipa Posisi 6G (All Position Welding)', 'Kualifikasi Tertinggi (Semua Posisi & Bejana)']
      ]
    },
    caseStudy: 'Sebuah kontraktor instalasi pipa pembangkit listrik di Banten berhasil meloloskan 100% sambungan las pipa uap bertekanan tinggi pada uji radiografi X-Ray tanpa reject setelah seluruh weldernya tersertifikasi Juru Las Kelas I Kemnaker.',
    stepByStepGuide: [
      { step: '1. Pendaftaran & Verifikasi Keahlian', desc: 'Pengumpulan berkas KTP, surat kesehatan mata, dan bukti pengalaman mengelas.' },
      { step: '2. Pembekalan Teori Metalurgi & WPS', desc: 'Pendalaman regulasi Permenaker 2/1982, prosedur WPS, dan mitigasi bahaya asap las.' },
      { step: '3. Praktik Pengelasan Benda Uji (Coupon)', desc: 'Pengelasan pelat/pipa disaksikan langsung oleh Pengawas Penguji K3 Kemnaker.' },
      { step: '4. Uji Laboratorium Bending / NDT & SIO', desc: 'Pengujian mekanis benda uji di laboratorium dan penerbitan buku lisensi Juru Las resmi.' }
    ],
    links: [
      { href: '/kategori-pelatihan/lisensi-operator-boiler-uap/', anchor: 'Sertifikasi Operator Boiler Uap' },
      { href: '/kategori-pelatihan/lisensi-operator-bejana-tekan/', anchor: 'Sertifikasi Operator Bejana Tekan' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 12. Petugas Ruang Terbatas Confined Space
  {
    key: 'petugas-ruang-terbatas-confined-space',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/petugas-ruang-terbatas-confined-space/',
    archetype: 'technical_cert',
    title: 'Sertifikasi Petugas Madya Ruang Terbatas (Confined Space) Kemnaker RI',
    h1: 'Pelatihan & Sertifikasi Lisensi K3 Petugas Madya Ruang Terbatas (Confined Space Entry) Kemnaker RI: Sesuai Kepdirjen Binwasnaker No. 113/2006',
    meta: 'Sertifikasi petugas ruang terbatas Kemnaker: SIO confined space Kepdirjen 113/2006, entry permit, gas detector O2/LEL/H2S/CO, blower & tripod rescue.',
    imgAlt: 'Petugas ruang terbatas mengenakan full body harness dan SCBA bersiap masuk melalui manhole tangki bejana',
    related: ['confined-space-entry', 'teknisi-k3-ruang-terbatas', 'pengawas-ruang-terbatas-rescue', 'gas-tester'],
    intro: 'Bekerja di dalam ruang terbatas (Confined Space seperti tangki penyimpanan, bejana uap, silo, gorong-gorong drainase, kompartemen kapal) adalah pekerjaan dengan risiko kematian seketika yang sangat tinggi akibat atmosfer berbahaya dan akses keluar yang sempit. Sesuai <strong>Kepdirjen Binwasnaker No. 113 Tahun 2006 tentang Pedoman K3 di Ruang Terbatas</strong>, pekerja yang masuk (entrant) wajib memiliki Lisensi K3 Petugas Madya Ruang Terbatas dari Kementerian Ketenagakerjaan RI.',
    hazards: [
      '<strong>Asfiksia Akibat Kekurangan Oksigen (O2 < 19.5%):</strong> Kehilangan kesadaran mendadak dalam hitungan detik tanpa gejala peringatan.',
      '<strong>Keracunan Gas Beracun Mematikan (H2S & CO):</strong> Gas asam hidrogen sulfida di bak limbah atau karbon monoksida dari mesin pembakaran.',
      '<strong>Ledakan Gas / Uap Mudah Terbakar (LEL > 5%):</strong> Percikan perkakas listrik non-intrinsically safe yang memicu ledakan di dalam tangki.',
      '<strong>Terperangkap Material Curah Padat (Engulfment):</strong> Runtuhan butiran biji-bijian, semen, atau pasir di dalam silo yang menimbun pekerja.'
    ],
    regulations: [
      '<strong>Kepdirjen Binwasnaker No. 113/2006</strong> tentang Pedoman K3 di Ruang Terbatas (Confined Space).',
      '<strong>Permenaker No. 5 Tahun 2018</strong> tentang Keselamatan dan Kesehatan Kerja Lingkungan Kerja.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Karakteristik Ruang Terbatas & Regulasi Kepdirjen 113/2006',
        theory: 'Definisi ruang terbatas dengan izin masuk (Permit-Required Confined Space), tanggung jawab Entrant, Standby Person, dan Entry Supervisor.',
        practical: 'Audit kelengkapan dokumen formulir Izin Masuk Ruang Terbatas (Confined Space Entry Permit).'
      },
      {
        name: 'Modul 2: Pemantauan Gas Atmosferis & Ventilasi Mekanis Paksa (Purging & Ventilation)',
        theory: 'Urutan pengujian gas (Oksigen -> Gas Mudah Terbakar LEL -> Gas Beracun Toksik), perhitungan pergantian udara ventilasi blower (Air Changes per Hour / ACH).',
        practical: 'Pengujian gas bertingkat (atas, tengah, bawah) menggunakan multi-gas detector dengan selang sampling.'
      },
      {
        name: 'Modul 3: Peralatan Masuk, Isolasi LOTO, & Evakuasi Non-Entry Rescue',
        theory: 'Prosedur isolasi pipa double block & bleed, pemasangan LOTO agitator, penggunaan tripod winch dan Self-Retracting Lifeline (SRL).',
        practical: 'Simulasi masuk tangki tiruan, komunikasi tali isyarat dengan standby person, dan latihan evakuasi darurat non-entry winch.'
      }
    ],
    equipment: [
      'Multi-Gas Detector 4-Gas (O2, LEL, H2S, CO) Terkalibrasi Aktif dengan Sampling Pump.',
      'Explosion-Proof Ventilation Blower dengan Selang Ducting Flexible 10 Meter.',
      'Tripod Confined Space Rescue System dengan Retractable Lifeline Winch 20 Meter.',
      'Full Body Harness Khusus Ruang Terbatas dengan D-Ring Bahu (Rescue Loops).'
    ],
    participants: [
      'Petugas Masuk Ruang Terbatas (Entrant), Standby Person (Attendant), Teknisi Maintenance Tangki/Silo, Safety Inspector Pabrik/Migas.'
    ],
    tableData: {
      headers: ['Parameter Atmosfer Gas', 'Nilai Batas Aman Masuk (Izin Kerja)', 'Kondisi Berbahaya (Dilarang Masuk)', 'Alat Uji Wajib'],
      rows: [
        ['Kadar Oksigen (O2)', '19.5% s.d. 23.5%', '< 19.5% (Asfiksia) atau > 23.5% (Enriched)', 'Multi-Gas Detector Sensor O2'],
        ['Gas Mudah Terbakar (LEL)', '< 5% Lower Explosive Limit', '≥ 10% LEL (Risiko Ledakan Nyata)', 'Combustible Catalytic Sensor'],
        ['Gas Hidrogen Sulfida (H2S)', '< 1.0 ppm (Batas Aman Kerja)', '≥ 10 ppm (NAB Permenaker 5/2018)', 'Electrochemical Sensor H2S'],
        ['Gas Karbon Monoksida (CO)', '< 25 ppm (Batas Aman Kerja)', '≥ 25 ppm (NAB Permenaker 5/2018)', 'Electrochemical Sensor CO']
      ]
    },
    caseStudy: 'Sebuah pabrik pengolahan kelapa sawit di Riau mencegah insiden fatal di stasiun rebusan setelah Petugas Madya Ruang Terbatas mendeteksi kadar oksigen drop ke angka 14% dan menghentikan tim sebelum masuk ke dalam bejana.',
    stepByStepGuide: [
      { step: '1. Pendaftaran & Cek Kesehatan Paru', desc: 'Verifikasi surat sehat dokter, spirometri paru, dan bebas claustrophobia (takut ruang sempit).' },
      { step: '2. Pembekalan Teori Gas & Izin Masuk', desc: 'Pendalaman materi Kepdirjen 113/2006, pengenalan sifat gas beracun, dan prosedur LOTO.' },
      { step: '3. Simulasi Praktik Masuk Tangki & Rescue', desc: 'Latihan pengujian gas multi-level, peniupan blower, dan evakuasi menggunakan tripod winch.' },
      { step: '4. Evaluasi & Penerbitan Lisensi SIO', desc: 'Ujian komprehensif tertulis dan praktik langsung di hadapan Pengawas K3 Kemnaker.' }
    ],
    links: [
      { href: '/kategori-pelatihan/confined-space-entry/', anchor: 'Materi K3 Ruang Terbatas' },
      { href: '/kategori-pelatihan/pengawas-ruang-terbatas-rescue/', anchor: 'Sertifikasi Pengawas Ruang Terbatas' },
      { href: '/kategori-pelatihan/gas-tester/', anchor: 'Pelatihan Authorized Gas Tester' }
    ]
  },

  // 13. Pengawas Ruang Terbatas Rescue
  {
    key: 'pengawas-ruang-terbatas-rescue',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/pengawas-ruang-terbatas-rescue/',
    archetype: 'technical_cert',
    title: 'Sertifikasi Pengawas Utama & Rescue Ruang Terbatas Kemnaker RI',
    h1: 'Pelatihan & Sertifikasi Lisensi K3 Pengawas Utama Ruang Terbatas & Teknik Penyelamatan (Confined Space Rescue) Kemnaker RI: Sesuai Kepdirjen 113/2006',
    meta: 'Sertifikasi pengawas ruang terbatas Kemnaker: SIO pengawas utama Kepdirjen 113/2006, SCBA rescue entry, technical rope hauling & emergency response plan.',
    imgAlt: 'Regu penyelamat mengenakan SCBA dan peralatan vertical rescue bersiap mengevakuasi korban dari dalam manhole bejana reaktor',
    related: ['petugas-ruang-terbatas-confined-space', 'rescue-ruang-terbatas', 'gas-tester', 'confined-space-entry'],
    intro: 'Lebih dari 60% korban jiwa dalam insiden ruang terbatas adalah rekan kerja yang mencoba menolong korban tanpa peralatan perlindungan pernapasan yang memadai. <strong>Pengawas Utama Ruang Terbatas (Entry Supervisor) & Tim Rescue</strong> memegang otoritas penuh untuk menerbitkan atau membatalkan izin masuk, mengoordinasikan tim siaga darurat, dan memimpin operasi penyelamatan teknis (Rescue Entry) menggunakan SCBA dan mechanical hauling system.',
    hazards: [
      '<strong>Kematian Penolong Spontan (Would-Be Rescuer Fatality):</strong> Masuk tanpa SCBA untuk menolong rekan kerja yang pingsan di dalam tangki.',
      '<strong>Perubahan Atmosfer Mendadak (Sudden Gas Inrush):</strong> Kebocoran katup gas beracun saat pekerjaan sedang berlangsung di dalam vessel.',
      '<strong>Kegagalan Sistem Penarik Evakuasi (Hauling Jamming):</strong> Tali penyelamat tersangkut struktur pipa internal bejana saat proses penarikan korban.',
      '<strong>Trauma Fisik Korban Saat Ditarik Melalui Manhole Sempit:</strong> Cedera leher atau patah tulang belakang akibat penggunaan teknik pengangkatan yang salah.'
    ],
    regulations: [
      '<strong>Kepdirjen Binwasnaker No. 113/2006</strong> tentang Pedoman K3 di Ruang Terbatas (Pengawas Utama).',
      '<strong>Permenaker No. 9 Tahun 2016</strong> tentang K3 dalam Pekerjaan pada Ketinggian.',
      '<strong>Standar NFPA 1670 & NFPA 1006</strong> tentang Technical Rescuer - Confined Space.'
    ],
    modules: [
      {
        name: 'Modul 1: Otoritas Pengawas Utama, Manajemen Risiko, & Entry Permit',
        theory: 'Tanggung jawab hukum Entry Supervisor, verifikasi isolasi energi LOTO total, penandatanganan dan penutupan izin masuk.',
        practical: 'Audit simulasi kepatuhan permit dan skenario penghentian darurat pekerjaan (Immediate Permit Revocation).'
      },
      {
        name: 'Modul 2: Operasi Pernapasan Teknis SCBA / Airline Cascade System',
        theory: 'Fisiologi pernapasan mandiri, perhitungan konsumsi udara kerja vs cadangan darurat (Rule of Thirds), pemeliharaan SCBA.',
        practical: 'Praktik pemakaian SCBA di lorong sempit berliku dalam kondisi penglihatan terhalang asap tiruan.'
      },
      {
        name: 'Modul 3: Sistem Penyelamatan Vertikal & Horizontal (Technical Rope Rescue)',
        theory: 'Sistem mechanical advantage katrol 3:1 dan 4:1, penggunaan basket stretcher khusus manhole, stabilisasi korban trauma.',
        practical: 'Gelar simulasi penyelamatan korban tidak sadar dari tangki sedalam 15 meter menggunakan tripod winch dan spine board.'
      }
    ],
    equipment: [
      'SCBA Positive Pressure 300 Bar Carbon Composite dengan Telemetri Tekanan.',
      'Air Line Cascade Breathing System dengan Emergency Escape Cylinder 10 Menit.',
      'Tripod Rescue Heavy Duty dengan 4:1 Mechanical Advantage Pulley System.',
      'Confined Space Stretcher (SKED Stretcher / Ferno Ked Stretcher) untuk Manhole Sempit.'
    ],
    participants: [
      'Safety Supervisor / HSE Manager, Entry Supervisor Ruang Terbatas, Komandan Regu Emergency Response Team (ERT), Dokter/Paramedis Site.'
    ],
    tableData: {
      headers: ['Metode Penyelamatan', 'Deskripsi Operasi', 'Kebutuhan Personel & APD', 'Tingkat Risiko Penyelamat'],
      rows: [
        ['Non-Entry Rescue (Penyelamatan Luar)', 'Menarik korban dari luar tangki via tripod winch tanpa penolong masuk', '1 Standby Person + Tripod Harness Terpasang', 'Paling Aman (Sangat Direkomendasikan)'],
        ['Entry Rescue (Penyelamatan Masuk)', 'Regu rescue masuk ke dalam tangki untuk menstabilkan & mengangkat korban', 'Minimal 2 Rescuer dengan SCBA + 1 Standby', 'Risiko Tinggi (Wajib Petugas Tersertifikasi)'],
        ['Emergency Service Rescue (Instansi Luar)', 'Memanggil bantuan pemadam kebakaran / Basarnas eksternal', 'Koordinasi ERP Eksternal Pabrik', 'Membutuhkan Waktu Respon Lebih Lama']
      ]
    },
    caseStudy: 'Sebuah tim rescue pabrik petrokimia di Cilegon yang telah lulus sertifikasi Pengawas Utama berhasil mengevakuasi korban pingsan dari dalam reaktor polimer dalam waktu 4 menit tanpa ada penolong yang mengalami cedera.',
    stepByStepGuide: [
      { step: '1. Pendaftaran & Uji Fisik Ketahanan', desc: 'Pemeriksaan kesehatan lengkap, tes ketahanan fisik, dan sertifikat Petugas Madya.' },
      { step: '2. Pembekalan Teori Pengawasan & ERP', desc: 'Pendalaman otoritas permit, manajemen krisis, dan kalkulasi mechanical advantage katrol.' },
      { step: '3. Workshop Praktik SCBA & SKED Rescue', desc: 'Simulasi penyelamatan korban dari dalam manhole sempit menggunakan SKED stretcher.' },
      { step: '4. Evaluasi Pengawas & Penerbitan SIO', desc: 'Ujian komprehensif teori dan evaluasi drill penyelamatan oleh Pengawas K3 Kemnaker.' }
    ],
    links: [
      { href: '/kategori-pelatihan/rescue-ruang-terbatas/', anchor: 'Panduan Rescue Ruang Terbatas' },
      { href: '/kategori-pelatihan/petugas-ruang-terbatas-confined-space/', anchor: 'Sertifikasi Petugas Madya Ruang Terbatas' },
      { href: '/kategori-pelatihan/gas-tester/', anchor: 'Pelatihan Authorized Gas Tester' }
    ]
  }
];
