import { MultiArchetypeProgramDetail } from './multi-archetype-renderer';

export const batch7HeavyEquipmentPagesPart4: MultiArchetypeProgramDetail[] = [
  // 17. Operator Passenger Hoist Konstruksi
  {
    key: 'operator-passenger-hoist-konstruksi',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/operator-passenger-hoist-konstruksi/',
    archetype: 'technical_cert',
    title: 'Lisensi Operator Passenger Hoist (Alimak) Konstruksi Kemnaker RI',
    h1: 'Pelatihan & Sertifikasi Lisensi K3 Operator Passenger Hoist (Alimak / Construction Lift) Kemnaker RI: Sesuai Permenaker No. 8 Tahun 2020',
    meta: 'Sertifikasi operator passenger hoist Kemnaker: SIO construction lift Permenaker 8/2020, safety device centrifugal brake, mast section, interlock door & P2H.',
    imgAlt: 'Operator mengoperasikan passenger hoist alimak pengangkut pekerja dan material di proyek pembangunan gedung bertingkat',
    related: ['tenaga-kerja-bangunan-tinggi-tkbt', 'teknisi-k3-lift-dan-eskalator', 'lisensi-operator-overhead-crane', 'k3-keselamatan-kerja'],
    intro: 'Passenger Hoist (Alimak / Construction Hoist / Lift Proyek) adalah alat angkat angkut vertikal bertenaga motor pinion-rack yang digunakan untuk mengangkut ribuan pekerja dan material konstruksi ke lantai-lantai atas proyek gedung bertingkat. Kegagalan sistem rem pengaman atau pintu interlock dapat berakibat fatal jatuhnya sangkar hoist dari ketinggian puluhan meter. Sesuai <strong>Permenaker No. 8 Tahun 2020</strong>, pengoperasian passenger hoist wajib dipandu oleh operator bersertifikasi SIO resmi Kemnaker RI.',
    hazards: [
      '<strong>Sangkar Hoist Jatuh Bebas (Cage Free Fall):</strong> Patahnya gigi pinion penggerak atau ausnya rel rack mast tanpa rem sentrifugal pengaman.',
      '<strong>Pintu Sangkar Terbuka saat Berjalan (Interlock Bypass):</strong> Pekerja terjepit struktur tiang mast saat pintu sangkar tidak terkunci otomatis.',
      '<strong>Kelebihan Beban Kapasitas (Overloading):</strong> Mengangkut pekerja melebihi batas muatan yang memicu tergelincirnya rem motor traksi.',
      '<strong>Keruntuhan Tiang Mast (Mast Tie Collapse):</strong> Ketiadaan ikatan pengaku tie-in mast ke struktur gedung saat penambahan ketinggian.'
    ],
    regulations: [
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang Keselamatan dan Kesehatan Kerja Pesawat Angkat dan Pesawat Angkut.',
      '<strong>Permenaker No. 1 Tahun 1980</strong> tentang K3 Konstruksi Bangunan.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Regulasi K3 Pesawat Angkat & Standar Passenger Hoist Konstruksi',
        theory: 'Regulasi Permenaker 8/2020, kewajiban memiliki SIO dan Surat Izin Alat (SIA), batas kapasitas angkut orang vs material.',
        practical: 'Audit kelengkapan pelat batas beban (SWL) di dalam kabin sangkar dan verifikasi masa berlaku uji berkala.'
      },
      {
        name: 'Modul 2: Komponen Mekanikal, Sistem Rem Sentrifugal (Safety Device), & Interlock',
        theory: 'Prinsip kerja rem otomatis sentrifugal (Progressive Safety Device), switch pembatas batas atas/bawah (limit switches), sensor pintu interlock.',
        practical: 'Uji fungsi penahan jatuh otomatis (Drop Test) dan pemeriksaan keausan roda gigi pinion & rel rack tiang mast.'
      },
      {
        name: 'Modul 3: Pemeriksaan Harian (P2H), Operasional Aman, & Evakuasi Darurat',
        theory: 'Pemeriksaan kabel trailing cable, buffer pegas lantai dasar, penanganan hoist saat pemadaman listrik (manual release descent).',
        practical: 'Simulasi start harian P2H, pengoperasian naik/turun halus bertahap, dan drill evakuasi manual penumpang saat listrik padam.'
      }
    ],
    equipment: [
      'Unit Passenger Hoist Konstruksi Ganda / Tunggal (Kapasitas 1 - 2 Ton).',
      'Centrifugal Progressive Safety Device Drop Test Kit.',
      'Pinion Tooth Thickness Gauge & Micrometer Pengukur Aus Rel Rack.',
      'Checklist Form P2H Harian Passenger Hoist Standar Kemnaker.'
    ],
    participants: [
      'Operator Passenger Hoist Gedung, Teknisi Mekanik Alimak, Supervisor Logistik Proyek Gedung, Safety Inspector Konstruksi.'
    ],
    tableData: {
      headers: ['Komponen Keselamatan Hoist', 'Fungsi Perlindungan', 'Frekuensi Uji Wajib', 'Regulasi Terkait'],
      rows: [
        ['Safety Device (Rem Sentrifugal)', 'Mengunci sangkar otomatis saat kecepatan turun berlebih (+15%)', 'Uji Drop Test Tiap 3 Bulan', 'Permenaker 8/2020 Pasal 52'],
        ['Interlock Door Switch', 'Mencegah hoist bergerak jika salah satu pintu terbuka', 'Pemeriksaan Harian Pra-Operasi', 'Permenaker 8/2020 Lampiran II'],
        ['Limit Switch Batas Atas & Bawah', 'Menghentikan motor otomatis di lantai puncak & dasar', 'Pemeriksaan Harian Pra-Operasi', 'Permenaker 8/2020'],
        ['Masa Berlaku SIO Kemnaker', 'Lisensi Resmi Operator Passenger Hoist', '5 Tahun Sejak Tanggal Terbit', 'UU No. 1 Tahun 1970']
      ]
    },
    caseStudy: 'Sebuah proyek pembangunan menara apartemen 50 lantai di Jakarta Pusat berhasil mengangkut 800 pekerja setiap hari selama 2 tahun tanpa insiden hoist berkat kedisiplinan uji drop test berkala dan operator berlisensi resmi Kemnaker.',
    stepByStepGuide: [
      { step: '1. Pendaftaran & Verifikasi Kesehatan', desc: 'Pemeriksaan berkas ijazah, surat kesehatan dokter, dan surat penugasan perusahaan.' },
      { step: '2. Pembekalan Teori Sistem Pinion & Regulasi', desc: 'Pendalaman materi Permenaker 8/2020, mekanisme safety device, dan manajemen kapasitas.' },
      { step: '3. Workshop Praktik P2H & Drop Test', desc: 'Inspeksi gear pinion, pengujian pintu interlock, dan simulasi manual descent darurat.' },
      { step: '4. Evaluasi Pengawas & Penerbitan SIO', desc: 'Ujian teori komprehensif dan uji kecakapan praktis oleh Pengawas K3 Kemnaker RI.' }
    ],
    links: [
      { href: '/kategori-pelatihan/teknisi-k3-lift-dan-eskalator/', anchor: 'Pelatihan Teknisi K3 Lift' },
      { href: '/kategori-pelatihan/tenaga-kerja-bangunan-tinggi-tkbt/', anchor: 'Sertifikasi Bangunan Tinggi TKBT' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 18. Operator Batching Plant dan Mixer
  {
    key: 'operator-batching-plant-dan-mixer',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/operator-batching-plant-dan-mixer/',
    archetype: 'technical_cert',
    title: 'Pelatihan K3 Operator Batching Plant & Truk Mixer Beton Ready-Mix',
    h1: 'Pelatihan Keselamatan Kerja Operator Batching Plant Beton Precast & Pengemudi Truk Mixer: Standar K3 Silo Semen, Pan Mixer, & Lalu Lintas Site',
    meta: 'Pelatihan K3 batching plant & mixer: keselamatan pabrik beton ready-mix, pan mixer LOTO, debu silo semen, truck mixer rollover & K3 konstruksi.',
    imgAlt: 'Operator mengendalikan panel otomasi batching plant saat proses pengisian adukan beton ke dalam drum truk mixer',
    related: ['lisensi-operator-wheel-loader', 'operator-dump-truck-hauler-tambang', 'operator-crushing-plant-dan-conveyor', 'k3-keselamatan-kerja'],
    intro: 'Fasilitas Batching Plant (Pabrik Pencampur Beton Siap Pakai / Precast) dan armada Truk Mixer mengoperasikan mesin berdaya besar seperti pan mixer, silo penyimpanan semen curah pneumatik, agregat conveyor, dan drum putar truk mixer beton. Risiko fatal seperti pekerja terjepit pisau mixer saat pembersihan kerak beton, ledakan tekanan silo semen, dan truk mixer terbalik di jalan proyek menuntut penerapan SOP K3 yang ketat.',
    hazards: [
      '<strong>Terjepit Pisau Pan Mixer saat Pembersihan Kerak (Mixer Entanglement):</strong> Mesin mixer diaktifkan dari ruang kontrol saat pekerja masih di dalam drum.',
      '<strong>Ledakan Tekanan Udara Silo Semen (Silo Over-Pressurization):</strong> Penyumbatan filter baghouse saat transfer semen curah dari truk tangki semen.',
      '<strong>Truk Mixer Terguling di Akses Proyek Berlumpur (Mixer Rollover):</strong> Pergeseran titik berat cairan beton basah yang berputar di tikungan tajam.',
      '<strong>Paparan Bahan Kimia Admixture & Debu Semen Silika:</strong> Luka bakar kimiawi cairan aditif pengeras beton dan inhalasi debu semen pada mata/kulit.'
    ],
    regulations: [
      '<strong>Permenaker No. 38 Tahun 2016</strong> tentang Keselamatan dan Kesehatan Kerja Pesawat Tenaga dan Produksi.',
      '<strong>Permenaker No. 1 Tahun 1980</strong> tentang K3 Konstruksi Bangunan.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Manajemen Bahaya Batching Plant & Prosedur LOTO Ruang Mixer',
        theory: 'Prinsip kerja twin-shaft / planetary pan mixer, bahaya pelepasan energi tersimpan, protokol 8 langkah LOTO sebelum masuk drum pencampur.',
        practical: 'Praktik pemasangan kunci LOTO pada panel sakelar utama (main isolator switch) dan verifikasi zero energy.'
      },
      {
        name: 'Modul 2: Keselamatan Silo Semen Curah, Sistem Pneumatik, & Filter Baghouse',
        theory: 'Fungsi katup pelepas tekanan silo (Pressure Relief Valve / PRV), pemeliharaan filter debu getar, pencegahan debu semen meledak.',
        practical: 'Inspeksi operasional katup PRV silo dan simulasi penanganan darurat penyumbatan pipa pengisian semen curah.'
      },
      {
        name: 'Modul 3: Defensive Driving Truk Mixer & Keselamatan Chute Penuangan',
        theory: 'Dinamika pergerakan beton cair di dalam drum putar, manajemen kecepatan di tikungan proyek, bahaya terjepit tuas chute hidrolik.',
        practical: 'Audit kelayakan pengereman truk mixer dan simulasi penuangan beton aman di area bekisting galian.'
      }
    ],
    equipment: [
      'Unit Batching Plant Otomasi SCADA & Truk Mixer 7 m³ Ready-Mix.',
      'Set Lockout/Tagout Heavy Duty untuk Motor Pan Mixer 75 kW.',
      'Safety Harness & Tripod Confined Space untuk Pembersihan Silo.',
      'Dust Particulate Meter & APD Kacamata Goggles Anti-Percik Kimia.'
    ],
    participants: [
      'Operator Batching Plant, Driver Truk Mixer, Maintenance Mekanik Pabrik Beton, Supervisor Precast, Safety Officer Konstruksi.'
    ],
    tableData: {
      headers: ['Aktivitas Kritis', 'Potensi Bahaya Fatal', 'Standar Pengendalian Mutlak', 'Regulasi Acuan'],
      rows: [
        ['Pembersihan Kerak Drum Mixer', 'Mesin Menyala Terjepit Pisau', 'Wajib LOTO Sakelar Utama + Gembok Fisik', 'Permenaker 38/2016 Pasal 62'],
        ['Pengisian Semen Curah ke Silo', 'Silo Pecah Akibat Tekanan Berlebih', 'Wajib Cek Katup PRV & Filter Baghouse Aktif', 'Permenaker 37/2016'],
        ['Perjalanan Truk Mixer di Proyek', 'Truk Terguling di Tanah Lunak', 'Batas Kecepatan 15 km/jam & Pemeriksaan Akses', 'K3 Proyek Konstruksi'],
        ['Penanganan Cairan Admixture', 'Iritasi Mata & Kulit Terbakar', 'Penyediaan Emergency Eyewash & Safety Gloves', 'Kepmenaker 187/1999']
      ]
    },
    caseStudy: 'Sebuah perusahaan produsen beton siap pakai terbesar di Jawa Timur mengeliminasi 100% insiden near-miss pembersihan mixer setelah menerapkan sistem interlock gembok LOTO berkunci tunggal yang dibawa langsung oleh pekerja yang masuk ke dalam drum.',
    stepByStepGuide: [
      { step: '1. Asesmen Fasilitas Batching Plant', desc: 'Pengecekan ruang kontrol, pan mixer, silo semen, dan jalur keluar masuk truk mixer.' },
      { step: '2. Pembekalan Teori LOTO & Tekanan Pneumatik', desc: 'Pendalaman regulasi pesawat produksi, keselamatan silo, dan defensive driving truk.' },
      { step: '3. Simulasi Praktik Lapangan', desc: 'Ujian pemasangan LOTO mixer, inspeksi katup pelepas tekanan, dan manuver aman truk mixer.' },
      { step: '4. Evaluasi & Sertifikat Kompetensi', desc: 'Uji pemahaman komprehensif dan penerbitan sertifikat keselamatan kerja resmi.' }
    ],
    links: [
      { href: '/kategori-pelatihan/lisensi-operator-wheel-loader/', anchor: 'Sertifikasi Operator Wheel Loader' },
      { href: '/kategori-pelatihan/operator-dump-truck-hauler-tambang/', anchor: 'Pelatihan Driver Dump Truck Tambang' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 19. Operator Dump Truck Hauler Tambang
  {
    key: 'operator-dump-truck-hauler-tambang',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/operator-dump-truck-hauler-tambang/',
    archetype: 'technical_cert',
    title: 'Pelatihan K3 Operator Dump Truck Tambang & Heavy Hauler (Off-Highway Truck)',
    h1: 'Pelatihan Keselamatan Kerja Driver Dump Truck Tambang (Off-Highway Truck / OHT) & Rigid Dump Truck: Sesuai Kaidah SMKP Kepmen ESDM No. 1827/2018',
    meta: 'Pelatihan K3 dump truck tambang: keselamatan driver OHT 100 ton, blind spot, retarding brake system, hauling road safety & kepatuhan SMKP.',
    imgAlt: 'Driver mengoperasikan heavy haul dump truck tambang 100 ton melintasi jalan hauling tambang terbuka batubara',
    related: ['alat-berat-excavator-dump-truck', 'lisensi-operator-excavator', 'fatigue-management-pekerja-shift', 'k3-keselamatan-kerja'],
    intro: 'Off-Highway Dump Truck (OHT / Heavy Hauler kapasitas 40 hingga 240 Ton) adalah urat nadi pengangkutan batubara, bijih mineral, dan overburden di area pertambangan terbuka. Mengemudikan kendaraan raksasa dengan dimensi masif di jalan tambang berkabut, turunan curam licin, dan tikungan sempit dengan blind spot besar menuntut kompetensi keselamatan mengemudi defensif tingkat tinggi sesuai kaidah <strong>Kepmen ESDM No. 1827 K/30/MEM/2018 (SMKP Minerba)</strong>.',
    hazards: [
      '<strong>Tabrakan dengan Kendaraan Ringan (Light Vehicle Collision):</strong> Blind spot dump truck yang menutupi pandangan pengemudi terhadap mobil sarana di bawah kabin.',
      '<strong>Dump Truck Rebah saat Dumping (Tipping Rollover):</strong> Membuang muatan di bibir lereng disposal yang labil tanpa tanggul pengaman (bund wall).',
      '<strong>Rem Blong di Jalan Turunan Tambang (Runaway Truck):</strong> Kegagalan penggunaan retarder hidrolik/elektrik yang mengakibatkan rem utama panas terbakar.',
      '<strong>Microsleep & Kelelahan Driver (Driver Fatigue):</strong> Hilangnya kesadaran sepersekian detik pada shift malam jam-jam kritis (jam 02.00 - 05.00 pagi).'
    ],
    regulations: [
      '<strong>Kepmen ESDM No. 1827 K/30/MEM/2018</strong> tentang Pedoman Pelaksanaan Kaidah Teknik Pertambangan yang Baik.',
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang Keselamatan Pesawat Angkat dan Pesawat Angkut.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Kebijakan SMKP & Manajemen Lalu Lintas Tambang (Traffic Management)',
        theory: 'Aturan hak jalan (Right of Way), jarak aman beriringan minimal 50 meter, batas kecepatan rambu tambang, komunikasi radio dua arah VHF.',
        practical: 'Audit kepatuhan radio komunikasi dan verifikasi tiang bendera lampu (buggy whip) pada kendaraan sarana.'
      },
      {
        name: 'Modul 2: Dinamika Kendaraan Berat, Retarder Brake, & Manuver Disposal',
        theory: 'Prinsip kerja hydraulic / electric retarder, teknik engine braking di turunan 8-12%, SOP manuver mundur di area disposal dan loading shovel.',
        practical: 'Latihan pengereman menggunakan retarder tanpa menyentuh pedal rem utama dan simulasi dumping di tanggul pembuangan.'
      },
      {
        name: 'Modul 3: Manajemen Kelelahan Driver (Fatigue Management) & P2H Alat Berat',
        theory: 'Sirkadian ritme tubuh, deteksi dini microsleep, sistem sensor kamera fatigue (Driver Safety System / DSS), pemeriksaan 20 titik P2H.',
        practical: 'Pemeriksaan tekanan ban raksasa (tire temperature & pressure), kebocoran oli hoist cylinder, dan simulasi jalur penyelamat darurat (runaway ramp).'
      }
    ],
    equipment: [
      'Unit Heavy Dump Truck Tambang (CAT 777 / Komatsu HD785 / Scania P410 XT).',
      'Driver Fatigue Detection Camera System Simulator.',
      'Radio Komunikasi VHF Two-Way Channel Tambang.',
      'Checklist P2H Harian Dump Truck Tambang Standar ESDM.'
    ],
    participants: [
      'Driver Dump Truck Tambang, Operator Heavy Hauler, Pengawas Tambang (POP), Dispatcher Tambang, Safety Inspector Hauling Road.'
    ],
    tableData: {
      headers: ['Skenario Operasi Tambang', 'Potensi Bahaya Kritis', 'SOP Tindakan Wajib Driver', 'Standar SMKP Acuan'],
      rows: [
        ['Menuruni Jalan Curam Tambang', 'Rem Utama Blong & Overheat', 'Wajib Aktifkan Retarder Brake, Gigi Rendah (Low Gear)', 'Kepmen ESDM 1827/2018'],
        ['Maju di Persimpangan Jalan Hauling', 'Melindas Mobil Sarana (LV)', 'Lihat Kanan-Kiri, Klakson 2x Sebelum Bergerak', 'Traffic Management Plan'],
        ['Mundur di Area Dumping Lereng', 'Truk Terperosok ke Jurang', 'Tegak Lurus Tanggul, Berhenti Sebelum Ban Sentuh Berm', 'SOP Disposal Mine Site'],
        ['Mengantuk di Shift Malam (Fatigue)', 'Truk Keluar Jalur Menabrak Tebing', 'Lapor Radio ke Pengawas, Istirahat di Rest Bay', 'Fatigue Management SOP']
      ]
    },
    caseStudy: 'Sebuah konsesi tambang batubara di Kutai Timur berhasil mempertahankan rekor 8 juta jam kerja tanpa insiden tabrakan alat berat setelah mewajibkan seluruh pengemudi dump truck mengikuti pelatihan defensif dan penerapan sistem deteksi fatigue kamera aktif.',
    stepByStepGuide: [
      { step: '1. Asesmen Kebugaran & Medical Check Up', desc: 'Pemeriksaan visus mata, rekam jantung, dan tes skrining kualitas tidur (sleep apnea).' },
      { step: '2. Pembekalan Teori Retarder & Blind Spot', desc: 'Pendalaman materi dinamika kemudi, pembacaan zona buta cermin, dan kaidah SMKP.' },
      { step: '3. Simulasi Mengemudi di Hauling Road', desc: 'Ujian praktik mengemudi turunan curam, manuver mundur loading, dan simulasi blind spot.' },
      { step: '4. Uji Kelayakan Izin Mengemudi Perusahaan (KIMPER)', desc: 'Evaluasi berkendara oleh instruktur senior untuk penerbitan KIMPER Resmi Site.' }
    ],
    links: [
      { href: '/kategori-pelatihan/alat-berat-excavator-dump-truck/', anchor: 'K3 Alat Berat Pertambangan' },
      { href: '/kategori-pelatihan/fatigue-management-pekerja-shift/', anchor: 'Panduan Manajemen Fatigue Pekerja Shift' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 20. Operator Crushing Plant dan Conveyor
  {
    key: 'operator-crushing-plant-dan-conveyor',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/operator-crushing-plant-dan-conveyor/',
    archetype: 'technical_cert',
    title: 'Pelatihan K3 Operator Crushing Plant & Belt Conveyor Industri',
    h1: 'Pelatihan Keselamatan Kerja Operator Fasilitas Pemecah Batu (Crushing Plant), Jaw Crusher, & Sistem Belt Conveyor Industri / Tambang',
    meta: 'Pelatihan K3 crushing plant & conveyor: keselamatan jaw crusher, cone crusher, pull-wire emergency switch, LOTO conveyor & pencegahan debu silika.',
    imgAlt: 'Operator memeriksa instalasi sistem conveyor belt dan jaw crusher di fasilitas crushing plant tambang batu split',
    related: ['operator-dump-truck-hauler-tambang', 'lisensi-operator-wheel-loader', 'k3-keselamatan-kerja', 'pengukuran-nilai-ambang-batas-nab'],
    intro: 'Fasilitas Crushing Plant (Pemecah Batu Tambang / Pengolahan Mineral) dan Sistem Belt Conveyor beroperasi dengan mesin bertenaga kinetik sangat besar yang bergerak kontinu tanpa henti. Titik jepit (nip points) roller conveyor, bahaya batu terlontar dari ruang penghancur (rock fly), serta paparan debu silika respirabel menuntut operator memiliki kompetensi K3 yang kokoh untuk mencegah kecelakaan fatal tertarik putaran mesin.',
    hazards: [
      '<strong>Pekerja Tertarik Putaran Pulley Conveyor (Conveyor Ingestion):</strong> Membersihkan tumpahan material di dekat tail drum berputar tanpa mematikan mesin.',
      '<strong>Batu Terlontar dari Ruang Jaw Crusher (Rock Ejection):</strong> Lontaran pecahan batu keras berkecepatan tinggi yang menghantam operator di platform atas.',
      '<strong>Penyumbatan Chute Penghancur (Chute Jamming):</strong> Pekerja masuk ke dalam rongga crusher yang tersumbat batu besar tanpa prosedur LOTO.',
      '<strong>Kebakaran Gesekan Karet Sabuk Conveyor (Belt Friction Fire):</strong> Sabuk conveyor macet tersangkut namun motor penggerak terus berputar memicu panas api.'
    ],
    regulations: [
      '<strong>Permenaker No. 38 Tahun 2016</strong> tentang Keselamatan dan Kesehatan Kerja Pesawat Tenaga dan Produksi.',
      '<strong>Permenaker No. 5 Tahun 2018</strong> tentang K3 Lingkungan Kerja (Debu Silika).',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Regulasi K3 Pesawat Tenaga Produksi & Identifikasi Titik Jepit (Nip Points)',
        theory: 'Hierarki pengamanan mesin (Machine Guarding), anatomi sistem conveyor (Head Pulley, Snub Pulley, Idler Roller, Tail Pulley), standar pelindung wire mesh.',
        practical: 'Audit kelayakan pengaman titik jepit conveyor dan identifikasi celah bahaya yang tidak berpagar.'
      },
      {
        name: 'Modul 2: Perangkat Pengaman Darurat (Emergency Pull-Wire Switch & Belt Alignment Sensor)',
        theory: 'Prinsip kerja tali emergency pull-wire sepanjang lintasan conveyor, sensor sabuk miring (belt sway switch), zero speed switch.',
        practical: 'Uji fungsi emergency stop pull-wire dan simulasi trip otomatis conveyor saat mendeteksi gesekan macet.'
      },
      {
        name: 'Modul 3: Prosedur Buka Sumbatan (Un-Jamming) Aman & Sistem LOTO Terpadu',
        theory: 'Prosedur pemecahan batu gantung menggunakan hydraulic rock breaker (bukan linggis manual), 8 langkah LOTO motor crusher.',
        practical: 'Simulasi penguncian LOTO pada sakelar pemutus daya utama crusher sebelum petugas mendekati ruang hopper.'
      }
    ],
    equipment: [
      'Unit Jaw / Cone Crusher & Belt Conveyor Simulasi Panjang 20 Meter.',
      'Emergency Pull-Wire Cable Switch dengan Indikator Lampu Trip.',
      'Set Lockout/Tagout Heavy Duty untuk Panel Motor Listrik 150 kW.',
      'Digital Particulate Dust Monitor untuk Pengukuran Debu Silika Ruang Terbuka.'
    ],
    participants: [
      'Operator Crushing Plant, Teknisi Maintenance Conveyor, Supervisor Quarry/Semen/Tambang, Safety Officer Pabrik Bahan Bangunan.'
    ],
    tableData: {
      headers: ['Komponen Mesin', 'Perangkat Keselamatan Wajib', 'Tindakan Dilarang Keras', 'Regulasi Acuan'],
      rows: [
        ['Tail Pulley & Return Idler', 'Tutup Pengaman Wire Mesh Terkunci', 'Membersihkan Tumpahan Saat Mesin Menyala', 'Permenaker 38/2016'],
        ['Sepanjang Lintasan Conveyor', 'Tali Kawat Emergency Stop Pull-Wire', 'Menyeberangi Sabuk Conveyor Tanpa Jembatan', 'Permenaker 38/2016'],
        ['Mulut Masuk Hopper Crusher', 'Rantai Pengaman Lontaran (Chain Curtain)', 'Melihat Langsung ke Lubang Tanpa Kacamata Safety', 'Kepmen ESDM 1827/2018'],
        ['Ruang Pemecah Batu (Chamber)', 'Sistem LOTO & Hydraulic Rock Breaker', 'Memukul Batu Sumbat Menggunakan Palu Manual', 'SOP LOTO Pabrik']
      ]
    },
    caseStudy: 'Sebuah fasilitas pengolahan batu granit di Riau mencatatkan Zero Amputasi dan Zero Fatality selama 5 tahun operasional setelah memasang interlock safety guard pada seluruh roller conveyor dan melatih operator prosedur LOTO un-jamming aman.',
    stepByStepGuide: [
      { step: '1. Walkthrough Fasilitas Crusher & Conveyor', desc: 'Pemetaan seluruh titik jepit, sakelar emergency pull-wire, dan sistem penangkap debu.' },
      { step: '2. Pembekalan Teori Machine Safety & LOTO', desc: 'Pendalaman regulasi Permenaker 38/2016, hierarki guarding, dan mitigasi batu terlontar.' },
      { step: '3. Simulasi Praktik Uji Emergency Stop & LOTO', desc: 'Ujian penarikan tali darurat, simulasi un-jamming ruang crusher, dan pemasangan gembok.' },
      { step: '4. Evaluasi & Sertifikat Keselamatan', desc: 'Ujian teori komprehensif dan penerbitan sertifikat kompetensi keselamatan kerja resmi.' }
    ],
    links: [
      { href: '/kategori-pelatihan/operator-dump-truck-hauler-tambang/', anchor: 'Pelatihan Driver Haul Truck' },
      { href: '/kategori-pelatihan/lockout-tagout-loto/', anchor: 'Pelatihan Prosedur LOTO Kemnaker' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 21. Operator Reach Truck Warehouse
  {
    key: 'operator-reach-truck-warehouse',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/operator-reach-truck-warehouse/',
    archetype: 'technical_cert',
    title: 'Lisensi Operator Reach Truck & VNA Modern Warehouse Kemnaker RI',
    h1: 'Pelatihan & Sertifikasi Lisensi K3 Operator Reach Truck & Very Narrow Aisle (VNA) Kemnaker RI: Standar Pergudangan High-Bay Modern',
    meta: 'Sertifikasi operator reach truck Kemnaker: SIO reach truck Permenaker 8/2020, high-bay racking 12 meter, lorong sempit VNA, P2H & segitiga stabilitas.',
    imgAlt: 'Operator mengemudikan reach truck elektrik mengambil palet barang di rak penyimpanan gudang bertingkat tinggi 10 meter',
    related: ['operator-reach-truck', 'lisensi-operator-forklift-kemnaker', 'logistik-dan-supply-chain', 'k3-keselamatan-kerja'],
    intro: 'Reach Truck dan Truk Lorong Sangat Sempit (Very Narrow Aisle / VNA Truck) adalah alat angkut material bertenaga listrik yang dirancang khusus untuk bermanuver di lorong sempit gudang modern dengan kemampuan mengangkat palet hingga ketinggian lebih dari 10-12 meter. Mengingat tingginya tiang mast dan pergeseran pusat gravitasi beban di ketinggian, operator wajib memiliki Lisensi K3 (SIO) resmi dari Kementerian Ketenagakerjaan RI sesuai <strong>Permenaker No. 8 Tahun 2020</strong>.',
    hazards: [
      '<strong>Reach Truck Terguling Akibat Beban di Ketinggian (High Mast Tip-Over):</strong> Bermanuver jalan saat mast terulur penuh di ketinggian 10 meter.',
      '<strong>Benturan Garpu pada Tiang Racking (Racking Strike):</strong> Garpu atau bodi truk menabrak tiang rak gudang yang memicu keruntuhan beruntun (domino racking collapse).',
      '<strong>Kejatuhan Barang dari Palet Atas (Falling Pallet Cargo):</strong> Penyusunan barang tanpa wrapping plastik yang lepas saat digeser ke dalam rak.',
      '<strong>Bahaya Pelepasan Gas Hidrogen Pengisian Baterai:</strong> Akumulasi gas hidrogen mudah terbakar di ruang charging baterai reach truck.'
    ],
    regulations: [
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang Keselamatan dan Kesehatan Kerja Pesawat Angkat dan Pesawat Angkut.',
      '<strong>Permenaker No. 5 Tahun 2018</strong> tentang K3 Lingkungan Kerja.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Regulasi K3 Alat Angkut & Dinamika Stabilitas Reach Truck',
        theory: 'Regulasi Permenaker 8/2020, perbedaan forklift counterbalance vs reach truck (pantograph reach mechanism), kurva kapasitas angkat berdasarkan ketinggian (derating chart).',
        practical: 'Audit pelat kapasitas beban bertingkat (Capacity vs Lift Height Chart) di kabin operator.'
      },
      {
        name: 'Modul 2: Manuver Lorong Sempit (Narrow Aisle Maneuvering) & Stacking Ketinggian',
        theory: 'Teknik manuver putar 360 derajat di lorong 2.8 meter, penggunaan kamera mast dan laser pointer pemandu garpu, SOP stacking & destacking di level tertinggi.',
        practical: 'Praktik pengambilan palet di rak level 4 (ketinggian 8 meter) dan penempatan kembali tanpa menyentuh tiang racking.'
      },
      {
        name: 'Modul 3: Pemeliharaan Harian (P2H) Baterai Elektrik & Ruang Charging',
        theory: 'Pemeriksaan level air aki demineralisasi, ventilasi ruang charging pencegah ledakan hidrogen, pemeriksaan rantai mast ganda dan selang hidrolik.',
        practical: 'Inspeksi 15 titik pra-operasi (P2H) reach truck dan prosedur darurat penguncian mast hidrolik.'
      }
    ],
    equipment: [
      'Unit Electric Reach Truck (Kapasitas 1.5 - 2.5 Ton, Ketinggian Mast 8 - 12 Meter).',
      'High-Bay Racking System Simulasi Gudang 4 Tingkat dengan Palet Beban Terkalibrasi.',
      'Laser Height Guide System Terpasang di Carriage Garpu Reach Truck.',
      'Checklist P2H Harian Reach Truck Elektrik Standar Kemnaker.'
    ],
    participants: [
      'Operator Reach Truck Gudang, Operator VNA Truck, Warehouse Supervisor, Inventory Control Leader, Safety Officer Logistik.'
    ],
    tableData: {
      headers: ['Ketinggian Angkat (Mast Height)', 'Kapasitas Angkat Nominal', 'Kapasitas Terkoreksi (Derated Capacity)', 'Status Batas Aman'],
      rows: [
        ['0 s.d. 4.0 Meter', '2.000 kg', '2.000 kg (100% Kapasitas)', 'Beban Maksimum Pabrikan'],
        ['6.0 Meter', '2.000 kg', '1.750 kg (Pengurangan Kapasitas)', 'Wajib Cek Berat Aktual Palet'],
        ['8.5 Meter', '2.000 kg', '1.400 kg (Pengurangan Kapasitas)', 'Dilarang Manuver Saat Terangkat'],
        ['11.0 Meter', '2.000 kg', '1.000 kg (50% dari Kapasitas Awal)', 'Wajib Gunakan Kamera Mast & Laser']
      ]
    },
    caseStudy: 'Sebuah gudang pusat distribusi farmasi di Cikarang berhasil menekan tingkat kerusakan barang di rak tinggi hingga 0% setelah seluruh operator reach truck-nya lulus sertifikasi SIO Kemnaker dan menerapkan panduan derating load chart.',
    stepByStepGuide: [
      { step: '1. Pendaftaran & Tes Ketajaman Visual', desc: 'Pemeriksaan surat sehat bebas buta warna dan persepsi kedalaman visual (depth perception).' },
      { step: '2. Pembekalan Teori Derating & Stabilitas', desc: 'Pendalaman materi Permenaker 8/2020, kalkulasi beban ketinggian, dan manajemen lorong sempit.' },
      { step: '3. Workshop Praktik Stacking di Rak Tinggi', desc: 'Ujian penataan palet di ketinggian 8 meter, manuver lorong sempit, dan pengereman darurat.' },
      { step: '4. Evaluasi Pengawas & Penerbitan SIO', desc: 'Ujian teori komprehensif dan verifikasi kecakapan operasional oleh Pengawas K3 Kemnaker.' }
    ],
    links: [
      { href: '/kategori-pelatihan/operator-reach-truck/', anchor: 'Panduan Operator Reach Truck' },
      { href: '/kategori-pelatihan/lisensi-operator-forklift-kemnaker/', anchor: 'Sertifikasi Operator Forklift' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 22. Operator Traktor dan Alat Perkebunan
  {
    key: 'operator-traktor-dan-alat-perkebunan',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/operator-traktor-dan-alat-perkebunan/',
    archetype: 'technical_cert',
    title: 'Pelatihan K3 Operator Traktor Roda 4 & Alat Mekanisasi Perkebunan Sawit',
    h1: 'Pelatihan Keselamatan Kerja Operator Traktor Pertanian / Perkebunan (Agricultural 4WD Tractor) & Alat Mekanisasi Sawit / Tebu: Standar Kemnaker RI',
    meta: 'Pelatihan K3 operator traktor perkebunan: keselamatan traktor 4WD sawit, rollover protective structure ROPS, power take-off PTO & gandengan grabber.',
    imgAlt: 'Operator mengemudikan traktor roda 4 perkebunan kelapa sawit mengangkut gerobak tandan buah segar di medan perkebunan berbukit',
    related: ['perkebunan-kelapa-sawit', 'pabrik-gula-dan-agroindustri', 'lisensi-operator-excavator', 'k3-keselamatan-kerja'],
    intro: 'Traktor Roda 4 (Agricultural 4WD Tractor) dengan berbagai attachment seperti gerobak trailer gandeng, rotary slasher, dan mini backhoe grabber merupakan mesin mekanisasi utama dalam panen dan pemeliharaan perkebunan kelapa sawit dan tebu. Risiko fatal seperti traktor terbalik di lereng bukit (tractor rollover), anggota tubuh terlilit poros berputar (Power Take-Off / PTO shaft), dan tertabrak gandengan trailer menuntut penerapan standar keselamatan operasional yang ketat.',
    hazards: [
      '<strong>Traktor Terguling ke Belakang / Samping (Tractor Rollover):</strong> Menarik beban gandengan melebihi batas atau melintasi lereng curam tanpa ROPS.',
      '<strong>Terlilit Poros Berputar Power Take-Off (PTO Shaft Entanglement):</strong> Pakaian atau rambut operator tersangkut as kopel PTO yang tidak dipasang cover pelindung.',
      '<strong>Trailer Gandeng Meluncur Menabrak Traktor (Trailer Jackknife):</strong> Rem gandengan blong di jalan turunan tanah licin perkebunan.',
      '<strong>Tertimpa Tandan Buah Segar Sawit saat Loading:</strong> Keranjang grabber hidrolik lepas saat memuat buah sawit ke dalam bak truk.'
    ],
    regulations: [
      '<strong>Permenaker No. 38 Tahun 2016</strong> tentang Keselamatan dan Kesehatan Kerja Pesawat Tenaga dan Produksi (Traktor).',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Standar ISO 5700 / OECD Code</strong> tentang Roll-Over Protective Structures (ROPS) on Agricultural Tractors.'
    ],
    modules: [
      {
        name: 'Modul 1: Regulasi K3 Mekanisasi Perkebunan & Struktur Pelindung Terguling (ROPS)',
        theory: 'Prinsip kerja struktur pelindung kabin ROPS, fungsi sabuk keselamatan (seatbelt wajib saat ada ROPS), batas kemiringan lereng aman (maksimal 15-20 derajat).',
        practical: 'Inspeksi kondisi fisik rangka pipa ROPS dan verifikasi penguncian sabuk keselamatan kabin traktor.'
      },
      {
        name: 'Modul 2: Pengamanan Poros Daya Putar (PTO Shaft Guarding) & Attachment Hidrolik',
        theory: 'Pemasangan pelindung tabung master shield pada as PTO, pemasangan rantai anti-putar pelindung PTO, penyambungan selang hidrolik quick-coupler.',
        practical: 'Praktik inspeksi putaran pelindung PTO bebas gesekan dan pemasangan pin pengaman gandengan trailer.'
      },
      {
        name: 'Modul 3: Defensive Driving Traktor Medan Berbukit & Pemeriksaan Harian (P2H)',
        theory: 'Teknik pemilihan gigi rendah di turunan licin, penyeimbangan beban depan traktor (front ballast counterweight), pemeriksaan tekanan ban kembang tapak.',
        practical: 'Uji manuver traktor dengan trailer gandeng mundur dan simulasi pengereman darurat di jalan tanah basah.'
      }
    ],
    equipment: [
      'Unit Agricultural 4WD Tractor 75 - 110 HP (John Deere / Kubota / New Holland) dengan Gandengan Trailer.',
      'Rotary Slasher & Master Shield Pelindung As PTO Lengkap.',
      'Inclinometer Pengukur Kemiringan Lereng Terpasang di Dashboard Traktor.',
      'Checklist Form P2H Harian Traktor Perkebunan Standar Perusahaan.'
    ],
    participants: [
      'Operator Traktor Kebun Sawit/Tebu, Mandor Mekanisasi Perkebunan, Mekanik Workshop Kebun, Asisten Afdeling, Safety Officer Perkebunan.'
    ],
    tableData: {
      headers: ['Komponen Kritis Traktor', 'Bahaya Jika Tidak Diproteksi', 'Standar Keselamatan Wajib', 'Regulasi Acuan'],
      rows: [
        ['Rangka Kabin (ROPS)', 'Pengemudi Terjepit Saat Terguling', 'Wajib Sertifikasi ROPS + Pakai Seatbelt', 'Permenaker 38/2016'],
        ['Poros Putar Daya (PTO Shaft)', 'Kematian Terlilit Putaran 540 RPM', 'Wajib Selubung Pelindung Plastik Berputar Bebas', 'ISO 5673 Guarding'],
        ['Sambungan Gandengan Trailer', 'Trailer Lepas Meluncur di Turunan', 'Wajib Pin Pengunci Baja Berkancing (R-Clip)', 'SOP Mekanisasi Kebun'],
        ['Pemberat Roda Depan (Ballast)', 'Traktor Terangkat ke Belakang (Flip)', 'Wajib Pasang Counterweight Saat Gandeng Beban', 'Manual Traktor']
      ]
    },
    caseStudy: 'Sebuah perkebunan kelapa sawit di Riau mencatatkan 100% Zero Fatal Accident akibat traktor terguling selama 4 tahun berturut-turut setelah memasang rangka ROPS bersertifikat pada seluruh armada traktor dan melatih seluruh operatornya.',
    stepByStepGuide: [
      { step: '1. Asesmen Kelayakan Armada Traktor', desc: 'Pengecekan kondisi rangka ROPS, sabuk keselamatan, dan pelindung PTO di workshop kebun.' },
      { step: '2. Pembekalan Teori Kemudi Medan Ekstrem', desc: 'Pendalaman regulasi pesawat tenaga, kalkulasi pusat berat traktor, dan mitigasi jalan licin.' },
      { step: '3. Simulasi Praktik di Lahan Perkebunan', desc: 'Ujian manuver jalan berbukit, pemasangan attachment PTO, dan pemeriksaan harian P2H.' },
      { step: '4. Evaluasi & Penerbitan Sertifikat', desc: 'Uji pemahaman komprehensif dan penerbitan sertifikat kualifikasi operator traktor resmi.' }
    ],
    links: [
      { href: '/industri/perkebunan-kelapa-sawit/', anchor: 'Panduan K3 Perkebunan Kelapa Sawit' },
      { href: '/industri/pabrik-gula-dan-agroindustri/', anchor: 'K3 Industri Gula & Agroindustri' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 23. Operator Stacker Crane Pelabuhan
  {
    key: 'operator-stacker-crane-pelabuhan',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/operator-stacker-crane-pelabuhan/',
    archetype: 'technical_cert',
    title: 'Lisensi Operator Stacker Crane & Container Crane Pelabuhan Kemnaker RI',
    h1: 'Pelatihan & Sertifikasi Lisensi K3 Operator Container Crane (Quayside Gantry Crane, RTG, & Reach Stacker) Kemnaker RI: Sesuai Permenaker No. 8/2020',
    meta: 'Sertifikasi operator crane pelabuhan Kemnaker: SIO container crane Permenaker 8/2020, RTG, reach stacker, spreader twistlock, angin kencang & blind lift.',
    imgAlt: 'Operator container crane pelabuhan mengoperasikan spreader twistlock memindahkan kontainer 40 feet dari kapal kargo ke dermaga',
    related: ['lisensi-operator-overhead-crane', 'lisensi-operator-mobile-crane', 'logistik-dan-supply-chain', 'k3-keselamatan-kerja'],
    intro: 'Alat Angkat Bongkar Muat Peti Kemas Pelabuhan (Quayside Container Crane QCC, Rubber Tyred Gantry RTG, Rail Mounted Gantry RMG, dan Reach Stacker Kontainer) mengelola kontainer 20 hingga 40 feet dengan bobot hingga 40 ton di area dermaga pelabuhan samudra. Risiko katastropik seperti kontainer terlepas dari twistlock spreader, crane tumbang akibat hempasan angin badai laut, atau menabrak truk trailer menuntut operator memiliki Lisensi K3 (SIO) resmi dari Kementerian Ketenagakerjaan RI.',
    hazards: [
      '<strong>Kontainer Terlepas dari Ketinggian (Spreader Drop):</strong> Kegagalan mekanisme pengunci twistlock spreader saat mengangkat kontainer di atas kapal.',
      '<strong>Container Crane Tumbang Diterjang Badai Angin (Gantry Blowdown):</strong> Crane bergeser dan terguling di rel dermaga saat badai karena ketiadaan klem rel (rail storm clamp).',
      '<strong>Tabrakan dengan Truk Head Trailer Pelabuhan:</strong> Visibilitas terbatas operator kabin crane dari ketinggian 40 meter saat menurunkan kontainer ke sasis truk.',
      '<strong>Keruntuhan Susunan Kontainer di Lapangan Penumpukan (Stack Collapse):</strong> Penataan kontainer melebihi batas ketinggian aman (tier) di tengah terpaan angin pesisir.'
    ],
    regulations: [
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang Keselamatan dan Kesehatan Kerja Pesawat Angkat dan Pesawat Angkut.',
      '<strong>Peraturan Menteri Perhubungan tentang K3 Kepelabuhanan</strong>.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Regulasi K3 Alat Angkat Pelabuhan & Pembagian Kelas SIO Kemnaker',
        theory: 'Dasar hukum Permenaker 8/2020, wewenang operator crane pelabuhan Kelas I/II/III, syarat kelaikan alat (Surat Izin Alat / SIA), buku kerja operator.',
        practical: 'Audit dokumen sertifikasi twistlock spreader dan logbook pemeliharaan berkala crane pelabuhan.'
      },
      {
        name: 'Modul 2: Komponen Mekanikal, Sistem Twistlock Spreader, & Sensor Anti-Collision',
        theory: 'Prinsip kerja hidrolik twistlock, sensor indikator lampu pendaratan pin (landing pin switch), sistem kamera pendeteksi tabrakan (anti-collision laser).',
        practical: 'Uji fungsi lampu indikator hijau/merah twistlock spreader saat mengunci sudut kontainer 40 feet.'
      },
      {
        name: 'Modul 3: Teknik Pengoperasian Cepat Aman, Mitigasi Badai, & Prosedur Badai Angin',
        theory: 'Teknik anti-sway elektronik & manual, batas kecepatan angin operasional (maksimal 38 knot / 20 m/s), prosedur penguncian pasak badai (storm pin & rail clamp).',
        practical: 'Simulasi manuver penataan kontainer susun 4 di atas kapal dan latihan penguncian klem badai dermaga darurat.'
      }
    ],
    equipment: [
      'Unit Container Gantry Crane (QCC / RTG) atau Reach Stacker Kontainer 45 Ton.',
      'Spreader Teleskopik Otomatis 20/40 Feet dengan Twistlock Indicator Lights.',
      'Anemometer Pengukur Kecepatan Angin Pelabuhan Terintegrasi Alarm Otomatis.',
      'Set Radio Komunikasi Khusus Marine VTS & Port Dispatcher.'
    ],
    participants: [
      'Operator Container Crane (QCC/RTG), Operator Reach Stacker Pelabuhan, Stevedoring Supervisor, Safety Officer Terminal Peti Kemas.'
    ],
    tableData: {
      headers: ['Jenis Alat Angkat Pelabuhan', 'Kapasitas Beban Standar', 'Batas Kecepatan Angin Operasi', 'Kualifikasi SIO Wajib'],
      rows: [
        ['Quayside Container Crane (QCC)', '40 s.d. 65 Ton (Twin Lift)', 'Maksimal 38 Knot (± 70 km/jam)', 'SIO Operator Crane Kelas I Kemnaker'],
        ['Rubber Tyred Gantry (RTG)', '40 Ton (Susun 1 over 5 Tier)', 'Maksimal 38 Knot', 'SIO Operator Crane Kelas II Kemnaker'],
        ['Reach Stacker Kontainer', '45 Ton (Kapasitas Baris Pertama)', 'Maksimal 30 Knot', 'SIO Operator Pesawat Angkut Kemnaker'],
        ['Juru Ikat (Rigger Spreader)', 'Pengawasan Pemasangan Manual Hook', 'Standar Operasi Pelabuhan', 'SIO Rigger Kemnaker']
      ]
    },
    caseStudy: 'Sebuah terminal peti kemas internasional di Tanjung Priok Jakarta mencatatkan 100% Zero Dropped Container dalam 500.000 TEUs pergerakan kontainer tahunan berkat kedisiplinan audit sensor twistlock dan operator bersertifikasi SIO Kelas I Kemnaker.',
    stepByStepGuide: [
      { step: '1. Pendaftaran & Asesmen Medis Pelabuhan', desc: 'Pemeriksaan kesehatan, tes ketajaman mata, persepsi kedalaman, dan uji bebas fobia ketinggian.' },
      { step: '2. Pembekalan Teori Spreader & Regulasi', desc: 'Pendalaman materi Permenaker 8/2020, sistem sensor twistlock, dan SOP mitigasi badai laut.' },
      { step: '3. Simulasi Praktik Bongkar Muat Kontainer', desc: 'Ujian pemindahan kontainer dari palka kapal ke sasis trailer dan simulasi klem badai.' },
      { step: '4. Evaluasi Pengawas & Penerbitan SIO', desc: 'Ujian teori komprehensif dan uji kecakapan praktis oleh Pengawas K3 Kemnaker RI.' }
    ],
    links: [
      { href: '/kategori-pelatihan/lisensi-operator-overhead-crane/', anchor: 'Sertifikasi Operator Overhead Crane' },
      { href: '/industri/logistik-pergudangan/', anchor: 'K3 Logistik & Kepelabuhanan' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 24. Teknisi K3 Lift dan Eskalator
  {
    key: 'teknisi-k3-lift-dan-eskalator',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/teknisi-k3-lift-dan-eskalator/',
    archetype: 'technical_cert',
    title: 'Sertifikasi Teknisi & Operator K3 Lift dan Eskalator Kemnaker RI',
    h1: 'Pelatihan & Sertifikasi Lisensi K3 Teknisi Elevator (Lift Penumpang/Barang) & Eskalator Kemnaker RI: Sesuai Permenaker No. 6 Tahun 2017',
    meta: 'Sertifikasi teknisi lift eskalator Kemnaker: SIO elevator Permenaker 6/2017, governor overspeed, safety gear wedge, buffer pit & rescue trapped passenger.',
    imgAlt: 'Teknisi K3 elevator melakukan pemeriksaan governor overspeed dan rem pengaman di ruang mesin lift atas gedung',
    related: ['operator-passenger-hoist-konstruksi', 'ahli-k3-listrik', 'k3-keselamatan-kerja', 'ahli-k3-umum-kemnaker'],
    intro: 'Elevator (Lift Penumpang & Lift Barang) serta Eskalator / Travelator mengangkut jutaan orang setiap hari di gedung perkantoran, pusat perbelanjaan, rumah sakit, dan hotel. Kegagalan mekanis seperti lift anjlok (overspeed drop), terjepit pintu lift, atau eskalator amblas dapat berakibat fatal massal. Sesuai <strong>Permenaker No. 6 Tahun 2017 tentang K3 Elevator dan Eskalator</strong>, pemasangan, pemeliharaan, dan inspeksi wajib dilakukan oleh Teknisi K3 Elevator dan Eskalator berlisensi resmi Kemnaker RI.',
    hazards: [
      '<strong>Lift Meluncur Bebas / Overspeed Drop:</strong> Putusnya kawat seling traksi atau kegagalan rem motor penahan beban tanpa fungsi safety gear.',
      '<strong>Penumpang Terjebak & Asfiksia di Dalam Sangkar (Trapped Passengers):</strong> Pemadaman listrik mendadak atau macetnya sistem kontrol pintu car.',
      '<strong>Terjepit Celah Anak Tangga Eskalator (Step Entrapment):</strong> Ketiadaan skirt brush sensor saat alas kaki anak-anak masuk ke celah samping eskalator.',
      '<strong>Teknisi Jatuh ke Dasar Lubang Lift (Elevator Pit Fall):</strong> Masuk ke lorong hoistway tanpa memastikan sangkar lift telah dipasang kunci penyangga.'
    ],
    regulations: [
      '<strong>Permenaker No. 6 Tahun 2017</strong> tentang Keselamatan dan Kesehatan Kerja Elevator dan Eskalator.',
      '<strong>Permenaker No. 12 Tahun 2015</strong> tentang K3 Listrik di Tempat Kerja.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Kerangka Regulasi Permenaker 6/2017 & Standar Desain Elevator',
        theory: 'Definisi elevator traksi vs hidrolik, klasifikasi eskalator, kewajiban memiliki Surat Izin Alat (SIA), syarat kompetensi Teknisi vs Operator K3.',
        practical: 'Audit dokumen riksa uji tahunan elevator dan buku riwayat pemeliharaan berkala (Maintenance Logbook).'
      },
      {
        name: 'Modul 2: Komponen Pengaman (Safety Devices) Elevator & Eskalator',
        theory: 'Prinsip kerja Speed Governor mekanik, Safety Gear wedge penahan rel, penyangga hidrolik/pegas pit buffer, sakelar pintu interlock, tombol Emergency Stop eskalator.',
        practical: 'Uji fungsi mekanis penguncian governor saat kecepatan dinaikkan dan simulasi trip safety gear pada rel pemandu.'
      },
      {
        name: 'Modul 3: Prosedur Pemeliharaan Rutin & Penyelamatan Penumpang Terjebak (Rescue SOP)',
        theory: 'Prosedur pemeliharaan bulanan (PM), teknik manual rescue pemutaran flywheel motor lift, penggunaan kunci darurat pintu pendaratan (landing door key).',
        practical: 'Praktik evakuasi simulasi penumpang terjebak di antara dua lantai menggunakan prosedur manual brake release berpasangan.'
      }
    ],
    equipment: [
      'Mesin Traksi Elevator Gearless / Geared & Panel Kontrol Inverter VVVF.',
      'Speed Governor Terkalibrasi dengan Safety Gear Car Simulator.',
      'Kunci Darurat Segitiga Pintu Pendaratan (Emergency Landing Door Key).',
      'Digital Tachometer & Insulation Resistance Tester untuk Motor Listrik Lift.'
    ],
    participants: [
      'Teknisi Pemeliharaan Lift & Eskalator, Building Engineering Supervisor Gedung/Mall/Hotel, Safety Officer Properti, Teknisi OEM Lift.'
    ],
    tableData: {
      headers: ['Perangkat Pengaman Wajib', 'Fungsi Perlindungan', 'Standar Batas Aktivasi', 'Regulasi Terkait'],
      rows: [
        ['Speed Governor', 'Mendeteksi kecepatan turun berlebih sangkar lift', 'Aktif pada +15% s.d. +40% Kecepatan Nominal', 'Permenaker 6/2017 Pasal 15'],
        ['Safety Gear (Baji Pengaman)', 'Mencekeram rel baja menahan lift jatuh bebas', 'Diaktifkan Otomatis oleh Kawat Governor', 'Permenaker 6/2017 Pasal 16'],
        ['Interlock Sakelar Pintu', 'Mencegah lift bergerak jika pintu belum rapat 100%', 'Toleransi Maksimal Celah 5 mm', 'Permenaker 6/2017 Pasal 18'],
        ['Skirt Deflector Brush Eskalator', 'Mencegah alas kaki masuk ke celah samping step', 'Wajib Terpasang Sepanjang Lintasan Eskalator', 'Permenaker 6/2017 Pasal 28']
      ]
    },
    caseStudy: 'Sebuah pengelola gedung perkantoran 30 lantai di Jakarta Pusat berhasil menyelamatkan 8 penumpang yang terjebak di dalam lift saat gempa bumi dalam waktu 7 menit secara aman dan tenang berkat kesigapan teknisi internal bersertifikasi Kemnaker.',
    stepByStepGuide: [
      { step: '1. Pendaftaran & Verifikasi Legalitas', desc: 'Pengecekan ijazah teknik mesin/elektro, surat kesehatan dokter, dan pengalaman pemeliharaan lift.' },
      { step: '2. Pembekalan Teori Permenaker 6/2017', desc: 'Pendalaman materi mekanikal traksi, sistem governor overspeed, dan kalkulasi tali baja.' },
      { step: '3. Workshop Praktik Governor & Manual Rescue', desc: 'Ujian trip governor, pengujian pintu interlock, dan praktik evakuasi manual penumpang terjebak.' },
      { step: '4. Evaluasi Pengawas & Penerbitan Lisensi', desc: 'Ujian teori komprehensif dan verifikasi kecakapan teknis oleh Pengawas K3 Kemnaker RI.' }
    ],
    links: [
      { href: '/kategori-pelatihan/operator-passenger-hoist-konstruksi/', anchor: 'Pelatihan Passenger Hoist Konstruksi' },
      { href: '/kategori-pelatihan/ahli-k3-listrik/', anchor: 'Sertifikasi Ahli K3 Listrik' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 25. Petugas Proteksi Radiasi Industri
  {
    key: 'petugas-proteksi-radiasi-industri',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/petugas-proteksi-radiasi-industri/',
    archetype: 'technical_cert',
    title: 'Sertifikasi Petugas Proteksi Radiasi (PPR) Industri BAPETEN & Kemnaker RI',
    h1: 'Pelatihan & Sertifikasi Petugas Proteksi Radiasi (PPR) Industri Tingkat 1, 2, & 3 BAPETEN & Kemnaker RI: Radiografi NDT, Level Gauging, & Logging',
    meta: 'Sertifikasi PPR industri BAPETEN: SIB petugas proteksi radiasi, zat radioaktif Ir-192/Co-60/Cs-137, surveymeter, dosimeter TLD & safe storage bunker.',
    imgAlt: 'Petugas proteksi radiasi PPR memegang surveymeter digital mengukur laju dosis radiasi pada kamera radiografi gamma industri',
    related: ['pengukuran-nilai-ambang-batas-nab', 'ahli-k3-kimia', 'k3-keselamatan-kerja', 'ahli-k3-umum-kemnaker'],
    intro: 'Pemanfaatan Zat Radioaktif (seperti Iridium-192, Cobalt-60, Caesium-137) dan Pembangkit Radiasi Pengion (Sinar-X) digunakan secara luas dalam uji tak merusak lasan pipa (Non-Destructive Testing Radiography), pengukuran ketebalan/level material industri (Gauging), dan logging pemboran migas. Mengingat radiasi pengion tidak dapat dilihat atau diraba namun merusak DNA sel hidup, Badan Pengawas Tenaga Nuklir (BAPETEN) mewajibkan setiap pemegang izin memiliki <strong>Petugas Proteksi Radiasi (PPR)</strong> bersertifikat resmi Surat Izin Bekerja (SIB).',
    hazards: [
      '<strong>Penyinaran Radiasi Akut (Acute Radiation Syndrome):</strong> Terpapar langsung sumber radioaktif gamma Ir-192 yang tidak kembali ke kontainer kamera (pigtail macet).',
      '<strong>Luka Bakar Radiasi Ekstrem (Radiation Burn):</strong> Menyentuh kapsul radioaktif dengan tangan kosong yang memicu nekrosis jaringan dan amputasi.',
      '<strong>Hilang atau Tercurinya Sumber Radioaktif:</strong> Sumber gamma tertinggal di lokasi kerja atau dicuri pihak tidak berwenang yang mengancam masyarakat.',
      '<strong>Penyakit Kanker Jangka Panjang (Efek Stokastik):</strong> Akumulasi dosis radiasi melampaui Nilai Batas Dosis (NBD) tahunan 20 mSv/tahun.'
    ],
    regulations: [
      '<strong>PP No. 33 Tahun 2007</strong> tentang Keselamatan Radiasi Pengion dan Keamanan Sumber Radioaktif.',
      '<strong>Peraturan BAPETEN No. 4 Tahun 2013</strong> tentang Proteksi dan Keselamatan Radiasi dalam Pemanfaatan Tenaga Nuklir.',
      '<strong>UU No. 10 Tahun 1997</strong> tentang Ketenaganukliran.'
    ],
    modules: [
      {
        name: 'Modul 1: Fisika Radiasi, Efek Biologis, & Regulasi BAPETEN',
        theory: 'Karakteristik radiasi alfa, beta, gamma, sinar-X, peluruhan isotop dan waktu paruh (half-life), efek deterministik vs efek stokastik radiasi.',
        practical: 'Audit dokumen izin pemanfaatan BAPETEN dan verifikasi kalibrasi tahunan alat ukur radiasi.'
      },
      {
        name: 'Modul 2: Tiga Prinsip Proteksi Radiasi (Waktu, Jarak, & Perisai) & Penentuan Barikade',
        theory: 'Hukum kuadrat terbalik jarak (Inverse Square Law), perhitungan tebal perisai timbal/beton (Half Value Layer / HVL), penentuan batas daerah pengawasan (0.5 uSv/h).',
        practical: 'Kalkulasi jarak aman barikade radiografi malam hari dan pemasangan rambu radiasi aktif di sekeliling area kerja.'
      },
      {
        name: 'Modul 3: Instrumentasi Deteksi Radiasi, Pemantauan Dosis, & Tanggap Darurat Pigtail Macet',
        theory: 'Penggunaan surveymeter Geiger-Mueller, dosimeter saku digital (EPD), dosimeter termoluminesensi (TLD), prosedur darurat pemulihan sumber macet.',
        practical: 'Praktik pengukuran laju dosis kontak kamera gamma, penggunaan tongkat penjepit darurat (long handling tongs), dan evakuasi kontainer lead pot.'
      }
    ],
    equipment: [
      'Digital Radiation Survey Meter (Geiger-Mueller / Scintillator) Terkalibrasi BAPETEN.',
      'Electronic Personal Dosimeter (EPD) dengan Alarm Dosis Akumulatif & Laju Dosis.',
      'Kamera Radiografi Gamma Dummy & Pigtail Simulator.',
      'Emergency Source Handling Tongs Panjang 1.5 Meter & Lead Shielding Pot (Collimator).'
    ],
    participants: [
      'Petugas Proteksi Radiasi (PPR) Industri, Operator Radiografi NDT, Teknisi Nucleonic Gauging Pabrik Semen/Kertas, Safety Officer Migas.'
    ],
    tableData: {
      headers: ['Kelompok Pekerja / Publik', 'Nilai Batas Dosis (NBD Tahunan)', 'Nilai Rata-Rata 5 Tahun Berturut-turut', 'Standar BAPETEN Acuan'],
      rows: [
        ['Pekerja Radiasi Dewasa', '50 mSv dalam 1 Tahun Tunggal', '20 mSv per Tahun (100 mSv dalam 5 Tahun)', 'Peraturan BAPETEN 4/2013'],
        ['Anggota Masyarakat Umum', '1 mSv dalam 1 Tahun', '1 mSv per Tahun', 'Peraturan BAPETEN 4/2013'],
        ['Dosis Ekstremitas (Tangan & Kaki)', '500 mSv dalam 1 Tahun', '500 mSv per Tahun', 'Peraturan BAPETEN 4/2013'],
        ['Dosis Lensa Mata Pekerja', '20 mSv per Tahun', '20 mSv per Tahun', 'Peraturan BAPETEN 4/2013']
      ]
    },
    caseStudy: 'Sebuah perusahaan inspeksi NDT di Balikpapan berhasil melakukan 10.000 penembakan radiografi pipa gas tanpa pernah ada satu pun personel yang menerima dosis radiasi melampaui NBD berkat pengawasan ketat PPR bersertifikasi resmi.',
    stepByStepGuide: [
      { step: '1. Pendaftaran & Verifikasi Ijazah', desc: 'Pengecekan ijazah minimal D3/S1 eksakta atau SLTA IPA, surat kesehatan, dan bebas buta warna.' },
      { step: '2. Pembekalan Teori Proteksi Radiasi', desc: 'Pendalaman regulasi PP 33/2007, fisika radiasi, kalkulasi tebal timbal perisai, dan prosedur darurat.' },
      { step: '3. Workshop Praktik Surveymeter & Emergency Source', desc: 'Ujian pengukuran laju dosis, penentuan barikade radiasi, dan simulasi penarikan pigtail macet.' },
      { step: '4. Ujian Lisensi SIB Resmi BAPETEN', desc: 'Ujian lisensi nasional yang diselenggarakan resmi oleh BAPETEN untuk penerbitan SIB PPR Industri.' }
    ],
    links: [
      { href: '/kategori-pelatihan/pengukuran-nilai-ambang-batas-nab/', anchor: 'Panduan Riksa Uji Nilai Ambang Batas' },
      { href: '/kategori-pelatihan/ahli-k3-kimia/', anchor: 'Pelatihan Ahli K3 Kimia' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  }
];
