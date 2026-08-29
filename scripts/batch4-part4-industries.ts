import { ExtendedProgramDetail } from './batch4-master-data';

export const batch4IndustriesPart4: ExtendedProgramDetail[] = [
  // 24. Pembangkit Listrik & Energi
  {
    key: 'pembangkit-listrik-dan-energi',
    hub: 'industri',
    path: 'industri/pembangkit-listrik-dan-energi/',
    title: 'Pelatihan K3 Sektor Pembangkit Listrik & Energi (Power Plant Safety)',
    h1: 'Pelatihan Keselamatan Pembangkit Tenaga Listrik: PLTU, PLTGU, PLTA, dan Gardu Induk Tegangan Ekstra Tinggi',
    meta: 'In-house training K3 pembangkit listrik: keselamatan uap boiler superkritis, turbin gas, switchyard 500 kV, LOTO kelistrikan, dan sertifikasi K3 ketenagalistrikan.',
    imgAlt: 'Pekerja pembangkit listrik memeriksa katup turbin uap dan instalasi panel listrik distribusi',
    related: ['k3-pembangkit-listrik-pltu-pltgu', 'operator-boiler', 'k3-listrik', 'keselamatan-tegangan-tinggi'],
    intro: 'Sektor pembangkitan energi listrik (PLTU, PLTGU, PLTP Geothermal, PLTA, PLTS) beroperasi di bawah kombinasi bahaya uap superkritis bertekanan ratusan bar, gas alam mudah meledak, serta jaringan transmisi tegangan tinggi hingga 500 kV.',
    hazards: [
      '<strong>Kebocoran Pipa Uap Bertekanan Superheated:</strong> Semburan uap transparan bersuhu >500°C yang memotong fatal.',
      '<strong>Ledakan Busur Api Arc Flash Kubikel Switchyard:</strong> Pelepasan energi termal raksasa saat switching 150kV/500kV.',
      '<strong>Kebakaran Spontan Batubara di Silo PLTU:</strong> Oksidasi mandiri batubara yang memicu kebakaran bunker.'
    ],
    regulations: ['<strong>UU No. 30 Tahun 2009</strong> tentang Ketenagalistrikan.', '<strong>Permenaker No. 12/2015</strong>.', '<strong>Permenaker No. 01/1988</strong>.'],
    modules: [
      {
        name: 'Modul 1: Manajemen Bahaya Termal & Uap Superkritis',
        theory: 'Prinsip bejana uap boiler, uji deteksi kebocoran uap (Broom Test), inspeksi turbin uap.',
        practical: 'Audit kelayakan insulasi pipa uap dan katup pengaman safety valve.'
      },
      {
        name: 'Modul 2: Keselamatan Ketenagalistrikan Tegangan Tinggi',
        theory: 'SOP gardu induk switchyard, prosedur LOTO kubikel 20kV-500kV, APD Arc Flash Suit Category 4.',
        practical: 'Simulasi manuver isolasi breaker PMT dan pembumian grounding switchyard.'
      }
    ],
    equipment: ['Arc Flash Suit Kit 40 cal/cm².', 'High Voltage Hot Stick 150 kV.', 'Thermal Imaging Camera.'],
    participants: ['Operator Pembangkit Listrik, Maintenance Electrical/Mechanical Engineer, dan HSE Power Plant.'],
    tableData: {
      headers: ['Jenis Pembangkit Listrik', 'Potensi Bahaya Kritis Utama', 'Standar Sertifikasi Wajib Personel'],
      rows: [
        ['PLTU Batubara', 'Spontaneous combustion silo, uap superkritis', 'Operator Boiler Kelas I & Teknisi K3 Listrik'],
        ['PLTGU Gas', 'Kebocoran gas alam, ledakan ruang bakar turbin', 'Ahli K3 Kimia & SIO Bejana Tekan'],
        ['PLTP Geothermal', 'Gas beracun H2S, semburan air panas geotermal', 'Sertifikasi H2S Safety & SCBA Operator']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/k3-pembangkit-listrik-pltu-pltgu/', label: 'Pelatihan Pembangkit Listrik' },
      { href: '/kategori-pelatihan/operator-boiler/', label: 'Pelatihan Operator Boiler' }
    ],
    faqs: [
      {
        q: 'Apa sertifikasi K3 yang wajib dimiliki teknisi pemeliharaan pembangkit listrik?',
        a: 'Teknisi pemeliharaan wajib memiliki sertifikasi Teknisi K3 Listrik Kemnaker, sertifikasi Operator Boiler (untuk PLTU), lisensi LOTO, dan kualifikasi Bekerja di Ruang Terbatas (Confined Space Entry).'
      }
    ]
  },

  // 25. Petrokimia & Pupuk
  {
    key: 'petrokimia-dan-pupuk',
    hub: 'industri',
    path: 'industri/petrokimia-dan-pupuk/',
    title: 'Pelatihan K3 Industri Petrokimia & Pupuk: Process Safety Management',
    h1: 'Pelatihan Keselamatan Industri Petrokimia & Pupuk: Pengendalian Gas Amonia, Process Safety Management (PSM), dan Kepatuhan Potensi Bahaya Besar',
    meta: 'In-house training K3 industri petrokimia & pupuk: mitigasi gas amonia (NH3) & asam sulfat, implementasi 14 elemen OSHA PSM, izin kerja kilang kimia, dan sertifikasi Ahli K3 Kimia Kemnaker.',
    imgAlt: 'Pekerja pabrik petrokimia mengenakan chemical suit dan respirator khusus melintasi jaringan pipa reaktor kimia',
    related: ['ahli-k3-kimia', 'petugas-k3-kimia', 'chemical-handling', 'spill-response-kit'],
    intro: 'Pabrik petrokimia, pupuk urea, dan amonia mengolah bahan kimia hidrokarbon dan zat korosif dalam volume raksasa pada tekanan dan suhu reaksi tinggi. Kepatuhan terhadap <strong>Process Safety Management (PSM)</strong> dan <strong>Kepmenaker No. 187/1999</strong> adalah harga mutlak.',
    hazards: [
      '<strong>Kebocoran Gas Amonia (NH3 Toxic Dispersion):</strong> Awan uap gas amonia beracun menyebar ke pemukiman sekitar pabrik.',
      '<strong>Reaksi Polimerisasi Tak Terkendali (Runaway Reaction):</strong> Reaktor kimia meledak akibat kegagalan sistem pendingin.',
      '<strong>Luka Bakar Asam Sulfat / Asam Nitrat Pekat:</strong> Sambungan flange pipa kimia pecah saat proses transfer.'
    ],
    regulations: ['<strong>Kepmenaker No. Kep.187/MEN/1999</strong>.', '<strong>Standar OSHA 29 CFR 1910.119</strong> (PSM).', '<strong>PP No. 50 Tahun 2012</strong>.'],
    modules: [
      {
        name: 'Modul 1: Process Safety Management (PSM) & HAZOP Analysis',
        theory: '14 Elemen PSM, analisis bahaya proses (HAZOP), Mechanical Integrity, Management of Change (MOC).',
        practical: 'Audit lembar P&ID dan simulasi skenario penyimpangan suhu reaktor.'
      },
      {
        name: 'Modul 2: Tanggap Darurat Kebocoran Kimia Mayor & Tirai Air',
        theory: 'Penyemprotan Water Curtain Shield untuk netralisasi gas amonia, prosedur pemakaian Heavy Duty Hazmat Suit Level A.',
        practical: 'Drill tanggap darurat kebocoran pipa amonia pabrik pupuk dalam tempo <5 menit.'
      }
    ],
    equipment: ['Level A Fully Encapsulated Gas-Tight Hazmat Suit.', 'Ammonia & Toxic Gas Detector.', 'Positive Pressure SCBA 300 Bar.'],
    participants: ['Process Engineer, Operator Pabrik Pupuk/Petrokimia, Safety Officer Kimia, dan Tim ERT Pabrik.'],
    tableData: {
      headers: ['Zat Kimia Mayor Pabrik Pupuk', 'Karakteristik Bahaya', 'Tindakan Pengendalian Teknis Wajib'],
      rows: [
        ['Gas Amonia Anhidrat (NH3)', 'Gas sangat beracun & korosif paru-paru', 'Water curtain deluge, sensor deteksi otomatis, scrubber'],
        ['Gas Alam / Metana (CH4)', 'Gas sangat mudah meledak', 'Sistem instrumented shutdown, explosion-proof motor'],
        ['Asam Sulfat Pekat (H2SO4)', 'Cairan asam korosif ekstrem', 'Pipa double containment, emergency safety shower']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/ahli-k3-kimia/', label: 'Pelatihan Ahli K3 Kimia' },
      { href: '/kategori-pelatihan/chemical-handling/', label: 'Pelatihan Chemical Handling' }
    ],
    faqs: [
      {
        q: 'Mengapa pabrik pupuk dan petrokimia wajib memiliki dokumen Pengendalian Potensi Bahaya Besar?',
        a: 'Berdasarkan Kepmenaker No. 187/1999, perusahaan yang menyimpan bahan beracun/mudah terbakar (seperti gas amonia atau klorin) melebihi Nilai Ambang Kuantitas (NAK) wajib menyusun Dokumen Pengendalian Potensi Bahaya Besar dan diaudit langsung oleh Kemnaker RI.'
      }
    ]
  },

  // 26. Perkebunan & Pabrik Kelapa Sawit (PKS)
  {
    key: 'perkebunan-dan-pabrik-kelapa-sawit',
    hub: 'industri',
    path: 'industri/perkebunan-dan-pabrik-kelapa-sawit/',
    title: 'Pelatihan K3 Perkebunan & Pabrik Kelapa Sawit (PKS Safety)',
    h1: 'Pelatihan Keselamatan Pabrik Kelapa Sawit (PKS): K3 Boiler Limbah Cangkang, Sterilizer Rebusan, dan Loading Ramp Sawit',
    meta: 'In-house training K3 pabrik kelapa sawit: keselamatan boiler biomassa, bejana tekan sterilizer, gas metana kolam limbah (biogas), alat panen egrek dodos di perkebunan, dan sertifikasi SIO.',
    imgAlt: 'Operator pabrik kelapa sawit memantau pengoperasian bejana tekan sterilizer rebusan kelapa sawit',
    related: ['operator-boiler', 'inspeksi-bejana-tekan', 'k3-pesawat-tenaga-dan-produksi'],
    intro: 'Pabrik Kelapa Sawit (PKS) dan perkebunan sawit memadukan operasi mekanikal alat berat panen di kebun dengan risiko uap bertekanan tinggi pada bejana sterilizer rebusan buah sawit dan boiler biomassa berbahan bakar cangkang.',
    hazards: [
      '<strong>Pintu Sterilizer Rebusan Sawit Terbuka Saat Bertekanan:</strong> Semburan uap mendidih dan buah sawit panas menimpa operator.',
      '<strong>Ledakan Boiler Biomassa Cangkang:</strong> Kekurangan air atau kegagalan safety valve pada ketel uap PKS.',
      '<strong>Kematian Akibat Tersengat Listrik Egrek Panen:</strong> Tiang egrek aluminium menyentuh kabel listrik PLN di perkebunan.'
    ],
    regulations: ['<strong>UU Uap Tahun 1930</strong>.', '<strong>Permenaker No. 01/1988</strong>.', '<strong>Permenaker No. 38/2016</strong>.'],
    modules: [
      {
        name: 'Modul 1: Keselamatan Bejana Tekan Sterilizer & Boiler PKS',
        theory: 'Interlock pintu mekanik sterilizer, pembersihan kerak boiler cangkang, blowdown harian, uji safety valve.',
        practical: 'Audit prosedur pembukaan pintu sterilizer bebas tekanan nol (Zero Steam Pressure).'
      },
      {
        name: 'Modul 2: K3 Stasiun Thresher, Press, Clarifier & Kolam Biogas',
        theory: 'Machine guarding drum thresher, bahaya gas H2S/CH4 kolam limbah anaerobik, keselamatan panen kebun.',
        practical: 'Simulasi tanggap darurat gas beracun di area stasiun klarifikasi dan kolam limbah.'
      }
    ],
    equipment: ['Pressure Gauge Tester.', 'Multi-Gas Detector untuk Kolam Biogas (CH4, H2S).'],
    participants: ['Mill Manager PKS, Asisten Maintenance PKS, Operator Boiler/Sterilizer Sawit, dan HSE Perkebunan.'],
    tableData: {
      headers: ['Stasiun Pabrik Kelapa Sawit', 'Peralatan Berbahaya', 'Potensi Bahaya Fatal', 'SOP Kunci'],
      rows: [
        ['Stasiun Sterilizer (Rebusan)', 'Bejana Tekan Uap Sterilizer', 'Semburan uap panas saat pintu dibuka', 'Wajib uji keran uji (exhaust bleed) sebelum buka pintu'],
        ['Stasiun Boiler (Ketel Uap)', 'Boiler Pipa Air Biomassa Cangkang', 'Ledakan ketel uap akibat low water', 'Operator wajib bersertifikat SIO Boiler Kelas I/II'],
        ['Stasiun Press & Thresher', 'Drum Pemipil & Screw Press', 'Tangan hancur tergilas roda putar', 'Wajib Full Enclosed Fixed Machine Guarding']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/operator-boiler/', label: 'Pelatihan Operator Boiler' },
      { href: '/kategori-pelatihan/inspeksi-bejana-tekan/', label: 'Pelatihan Inspeksi Bejana Tekan' }
    ],
    faqs: [
      {
        q: 'Apa fitur pengaman wajib pada pintu bejana sterilizer di Pabrik Kelapa Sawit?',
        a: 'Pintu sterilizer wajib dilengkapi dengan Safety Interlock System mekanik yang mencegah pintu dibuka secara fisik selama masih terdapat sisa tekanan uap di dalam bejana, serta katup pembuang uap manual (exhaust check).'
      }
    ]
  },

  // 27. Konstruksi Gedung & Infrastruktur
  {
    key: 'konstruksi-gedung-dan-infrastruktur',
    hub: 'industri',
    path: 'industri/konstruksi-gedung-dan-infrastruktur/',
    title: 'Pelatihan K3 Konstruksi Gedung & Infrastruktur (SMKK PUPR)',
    h1: 'Pelatihan Keselamatan Jasa Konstruksi: SMKK Permen PUPR No. 10/2021, Tower Crane, Scaffolding, dan Keselamatan Elevated',
    meta: 'Pelatihan K3 konstruksi gedung & infrastruktur: kepatuhan SMKK Permen PUPR No. 10/2021, keselamatan Tower Crane & Passenger Hoist, jaring pengaman (safety net), dan sertifikasi Ahli K3 Konstruksi.',
    imgAlt: 'Tower crane beroperasi di puncak gedung pencakar langit dengan jaring pengaman perimeter terpasang di setiap lantai',
    related: ['ahli-k3-konstruksi', 'petugas-k3-konstruksi', 'scaffolding-inspector', 'working-at-height'],
    intro: 'Proyek pembangunan gedung bertingkat tinggi, jalan tol elevated, bendungan, dan terowongan melibatkan interaksi ribuan pekerja subkontraktor di ketinggian. Program ini mendoktrinkan kepatuhan <strong>SMKK Permen PUPR No. 10 Tahun 2021</strong>.',
    hazards: [
      '<strong>Jatuh dari Tepi Lantai Terbuka (Fall from Height):</strong> Ketiadaan guardrail dan safety net pada lantai struktur atas.',
      '<strong>Kegagalan Pengoperasian Tower Crane:</strong> Tabrakan boom crane atau putusnya sling saat mengangkat bekisting baja.',
      '<strong>Runtuhnya Bekisting Pengecoran Pelat Lantai:</strong> Shoring perancah tidak mampu menahan beban beton basah.'
    ],
    regulations: ['<strong>Permen PUPR No. 10 Tahun 2021</strong>.', '<strong>Permenaker No. 01/1980</strong>.', '<strong>UU No. 2 Tahun 2017</strong> tentang Jasa Konstruksi.'],
    modules: [
      {
        name: 'Modul 1: Implementasi SMKK & Rencana Keselamatan Konstruksi (RKK)',
        theory: 'Struktur RKK tender vs RKK pelaksanaan, Biaya Penerapan SMKK, manajemen risiko IBPRP, audit berkala proyek.',
        practical: 'Penyusunan RKK pelaksanaan proyek gedung 20 lantai.'
      },
      {
        name: 'Modul 2: Keselamatan Ketinggian & Pesawat Angkat Konstruksi',
        theory: 'Riksa uji Tower Crane, Passenger Hoist, pemasangan Perimeter Edge Protection, Scaffolding gantung.',
        practical: 'Audit lapangan kesiapan sistem proteksi jatuh dan barikade radius tower crane.'
      }
    ],
    equipment: ['Fall Arrest System & Retractable Lifeline Kit.', 'Safety Net Mesh Class A1.', 'Digital Anemometer Crane.'],
    participants: ['Project Manager Kontraktor, Site Engineer, Ahli K3 Konstruksi, dan Konsultan Manajemen Konstruksi (MK).'],
    tableData: {
      headers: ['Peralatan Kritis Konstruksi', 'Potensi Bahaya Fatal', 'Pengendalian Wajib Permen PUPR'],
      rows: [
        ['Tower Crane', 'Tipping guling, benturan boom, drop load', 'Zonasi anti-collision system, SIO Operator Kelas I'],
        ['Passenger Hoist (Alimak)', 'Sangkar meluncur jatuh, pintu terbuka', 'Uji Drop Test berkala, interlock switch pintu'],
        ['Tepi Plat Lantai Ketinggian', 'Pekerja jatuh ke lantai dasar', 'Guardrail tinggi 1.1 meter + Safety Net gantung']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/ahli-k3-konstruksi/', label: 'Pelatihan Ahli K3 Konstruksi' },
      { href: '/kategori-pelatihan/working-at-height/', label: 'Pelatihan Bekerja di Ketinggian' }
    ],
    faqs: [
      {
        q: 'Apa yang dimaksud dengan Biaya Penerapan SMKK dalam kontrak proyek konstruksi?',
        a: 'Biaya SMKK adalah alokasi dana khusus yang wajib dimasukkan secara terpisah dalam dokumen anggaran proyek konstruksi (tidak boleh digabung dengan biaya umum) untuk membiayai pengadaan APD, asuransi, pelatihan K3, rambu keselamatan, dan fasilitas kesehatan pekerja.'
      }
    ]
  },

  // 28. Manufaktur Otomotif & Elektronik
  {
    key: 'manufaktur-otomotif-dan-elektronik',
    hub: 'industri',
    path: 'industri/manufaktur-otomotif-dan-elektronik/',
    title: 'Pelatihan K3 Manufaktur Otomotif & Elektronik (Industrial Safety)',
    h1: 'Pelatihan Keselamatan Manufaktur Otomotif & Elektronik: Machine Guarding, Robotika Industri, Ergonomi Lini Perakitan, dan 5R K3',
    meta: 'In-house training K3 pabrik manufaktur otomotif & elektronik: keselamatan mesin stamping press, sel robotik otomatis, pencegahan MSDs di lini assembly, LOTO pabrik, dan budaya 5R.',
    imgAlt: 'Operator perakitan otomotif bekerja di lini produksi dengan pelindung mesin otomatis dan safety mat terpasang',
    related: ['machine-guarding', 'lockout-tagout-loto', 'ergonomi-industri'],
    intro: 'Pabrik perakitan otomotif dan manufaktur elektronik beroperasi dengan presisi dan kecepatan siklus tinggi. Bahaya amputasi mesin stamping press hidrolik, interaksi dengan lengan robot otomatis, dan cedera muskuloskeletal (MSDs) berulang adalah fokus pengendalian utama.',
    hazards: [
      '<strong>Amputasi Mesin Stamping Press:</strong> Tangan operator masuk ke cetakan die saat mesin bergerak turun.',
      '<strong>Tertabrak Lengan Robotik Otomatis (Robotic Cell Strike):</strong> Teknisi masuk ke kandang robot tanpa mematikan sistem interlock safety.',
      '<strong>Penyakit Carpal Tunnel Syndrome & Nyeri Punggung:</strong> Gerakan perakitan repetitif ratusan kali per shift.'
    ],
    regulations: ['<strong>Permenaker No. 38 Tahun 2016</strong>.', '<strong>Standar ISO 10218</strong> (Robots and Robotic Devices - Safety Requirements).', '<strong>Permenaker No. 5/2018</strong>.'],
    modules: [
      {
        name: 'Modul 1: Machine Guarding & Keselamatan Sel Robotik',
        theory: 'Two-hand control press, safety light curtains optik, perimeter fencing robot dengan interlock gate, LOTO stamping.',
        practical: 'Audit fungsi safety light curtain dan respons pemutusan darurat mesin press.'
      },
      {
        name: 'Modul 2: Ergonomi Lini Perakitan & Evaluasi REBA/RULA',
        theory: 'Penyetelan ketinggian conveyor, balance arm alat kerja, rotasi kerja berkala, peregangan aktif 5 menit.',
        practical: 'Penilaian postur kerja operator lini perakitan menggunakan software analisis REBA.'
      }
    ],
    equipment: ['Safety Light Curtain Demonstrator.', 'Goniometer Digital & Sound Level Meter.'],
    participants: ['Production Manager, Industrial Engineer, Safety Officer Manufaktur, dan Maintenance Leader.'],
    tableData: {
      headers: ['Area Manufaktur Otomotif', 'Peralatan Utama', 'Pengaman Keselamatan Wajib'],
      rows: [
        ['Stamping Shop (Pengepresan)', 'Tandem Stamping Hydraulic Press', 'Safety Light Curtain + Dua Tombol Tekan (Two-Hand Control)'],
        ['Welding & Body Assembly', 'Robot Spot Welding Otomatis', 'Kandang Pagar Perimeter + Safety Interlock Door Switch'],
        ['Final Assembly Line', 'Conveyor Bergerak & Power Tools', 'Emergency Pull Cord Switch di sepanjang conveyor + Balance Arm']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/machine-guarding/', label: 'Pelatihan Machine Guarding' },
      { href: '/kategori-pelatihan/ergonomi-industri/', label: 'Pelatihan Ergonomi Industri' }
    ],
    faqs: [
      {
        q: 'Apa fungsi Emergency Pull Cord Switch di sepanjang conveyor perakitan pabrik?',
        a: 'Emergency pull cord adalah tali saklar darurat yang terpasang di sepanjang lini conveyor pabrik, memungkinkan pekerja mana pun untuk menghentikan seluruh pergerakan conveyor seketika hanya dengan menarik tali saat melihat ada orang terjepit atau bahaya darurat.'
      }
    ]
  },

  // 29. Makanan, Minuman & FMCG
  {
    key: 'makanan-minuman-dan-fmcg',
    hub: 'industri',
    path: 'industri/makanan-minuman-dan-fmcg/',
    title: 'Pelatihan K3 Industri Makanan, Minuman & FMCG',
    h1: 'Pelatihan Keselamatan Industri Pangan & FMCG: Sistem Pendingin Amonia, Higiene Sanitasi HACCP, dan Lantai Basah Anti-Slip',
    meta: 'In-house training K3 industri makanan & minuman (F&B / FMCG): mitigasi kebocoran refrigeran amonia, keselamatan mesin packaging, pencegahan slip and trip, dan integrasi ISO 22000 dengan SMK3.',
    imgAlt: 'Pekerja industri makanan mengenakan perlengkapan higienis dan safety boots anti-slip di area proses pengolahan susu',
    related: ['k3-industri-makanan-dan-minuman', 'chemical-handling', 'pengendalian-vektor-dan-sanitasi-industri'],
    intro: 'Pabrik FMCG dan makanan-minuman mengintegrasikan kepatuhan K3 keselamatan pekerja dengan standar keamanan pangan <strong>HACCP &amp; ISO 22000</strong>, mengendalikan risiko uap amonia ruang pendingin, dan bahaya terpeleset di lantai proses basah.',
    hazards: [
      '<strong>Kebocoran Gas Amonia Pendingin (Ammonia Leak):</strong> Saluran pipa cold storage bocor menyemburkan gas beracun korosif.',
      '<strong>Terpeleset di Lantai Berminyak / Basah:</strong> Cedera patah tulang akibat lantai licin cairan pembersih.',
      '<strong>Tangan Terjepit Mesin Pengemas Otomatis:</strong> Operator membersihkan sisa plastik sealer saat mesin masih aktif.'
    ],
    regulations: ['<strong>UU No. 1 Tahun 1970</strong>.', '<strong>Permenaker No. 5 Tahun 2018</strong>.', '<strong>Standar ISO 22000</strong>.'],
    modules: [
      {
        name: 'Modul 1: Ammonia Refrigeration Safety & Tanggap Darurat',
        theory: 'Karakteristik gas NH3, sistem tirai air water curtain, evakuasi ruang cold storage terkunci.',
        practical: 'Drill tanggap darurat amonia dan pemakaian full respirator kimia.'
      },
      {
        name: 'Modul 2: Keselamatan Mesin Pengemas & Housekeeping 5R',
        theory: 'Interlock guarding mesin sealer/labelling, penerapan sol sepatu safety anti-slip (SRC Rated), penataan drainase lantai.',
        practical: 'Audit kelaikan mesin pengemas dan koefisien gesek lantai kerja.'
      }
    ],
    equipment: ['Ammonia Gas Detector Kit.', 'Floor Slip Friction Tester & Chemical Suit.'],
    participants: ['Plant Manager F&B, QA Food Safety, Maintenance Cold Storage, dan Safety Officer FMCG.'],
    tableData: {
      headers: ['Area Pabrik Pangan', 'Potensi Bahaya Spesifik', 'Solusi Pengendalian Terpadu'],
      rows: [
        ['Ruang Cold Storage Pendingin', 'Kebocoran gas Amonia, Terjebak di suhu -20°C', 'Tombol Panic Button Pembuka Pintu dari Dalam + Sensor NH3'],
        ['Lantai Pengolahan Basah', 'Terpeleset lemak & air cuci', 'Lantai Epoxy Corundum Anti-Slip + Sepatu Boots SRC'],
        ['Lini Packaging & Palletizing', 'Tangan terjepit robot packer / mesin sealer', 'Light Curtain Interlock + LOTO Pemeliharaan']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/k3-industri-makanan-dan-minuman/', label: 'Pelatihan K3 Industri Makanan' },
      { href: '/kategori-pelatihan/chemical-handling/', label: 'Pelatihan Chemical Handling' }
    ],
    faqs: [
      {
        q: 'Mengapa pintu ruang pendingin beku (Cold Storage) wajib memiliki mekanisme pembuka darurat dari dalam?',
        a: 'Untuk mencegah pekerja tewas akibat hipotermia jika pintu tidak sengaja tertutup atau terkunci dari luar saat mereka berada di dalam ruangan bersuhu minus 20°C.'
      }
    ]
  },

  // 30. Farmasi & Laboratorium Medis
  {
    key: 'farmasi-dan-laboratorium-medis',
    hub: 'industri',
    path: 'industri/farmasi-dan-laboratorium-medis/',
    title: 'Pelatihan K3 Industri Farmasi & Laboratorium Medis (Biosafety)',
    h1: 'Pelatihan Keselamatan Industri Farmasi & Lab Medis: Biosafety Level (BSL 1-3), Cleanroom ISO 14644, dan Bahan Kimia Aktif (API)',
    meta: 'In-house training K3 industri farmasi & lab: penanganan zat aktif obat beracun (Active Pharmaceutical Ingredients / API), Biosafety Cabinet, sistem cleanroom ISO 14644, dan kepatuhan CPOB/GLP.',
    imgAlt: 'Analis farmasi mengenakan pakaian cleanroom jumpsuit lengkap dengan kacamata goggle bekerja di dalam cleanroom class A',
    related: ['k3-laboratorium', 'chemical-handling', 'msds-dan-gds-labelling'],
    intro: 'Industri farmasi dan laboratorium riset obat mengolah zat aktif berkekuatan tinggi (<em>High Potency Active Pharmaceutical Ingredients / HPAPI</em>) serta agen biologi patogen di bawah standar <strong>Cara Pembuatan Obat yang Baik (CPOB) &amp; ISO 14644 Cleanroom</strong>.',
    hazards: [
      '<strong>Paparan Debu Zat Aktif Obat (HPAPI Toxicity):</strong> Inhalasi partikel hormon/sitotoksik mikro yang merusak kesehatan analis.',
      '<strong>Kontaminasi Silang Agen Biologi Patogen:</strong> Kegagalan filter HEPA pada Biosafety Cabinet.',
      '<strong>Bahaya Ledakan Pelarut Pelapis Obat (Solvent Flammability):</strong> Uap etanol/aseton pada proses coating tablet.'
    ],
    regulations: ['<strong>Standar BPOM CPOB 2024</strong>.', '<strong>Standar ISO 14644-1</strong> (Cleanrooms).', '<strong>Permenaker No. 5/2018</strong>.'],
    modules: [
      {
        name: 'Modul 1: Manajemen Bahan Kimia Zat Aktif (HPAPI) & OEL Banding',
        theory: 'Occupational Exposure Banding (OEB 1-5), sistem isolator glovebox, Local Exhaust Fume Hood.',
        practical: 'Audit containment level pada ruang formulasi dan penimbangan bahan obat.'
      },
      {
        name: 'Modul 2: Biosafety Cabinet & Protokol Cleanroom ISO 14644',
        theory: 'Pengoperasian BSC Class II Type A2/B2, tata udara tekanan positif/negatif, dekontaminasi gas VHP (Vaporized Hydrogen Peroxide).',
        practical: 'Uji visual smoke pattern airflow pada bukaan sash lemari asam lab.'
      }
    ],
    equipment: ['Biosafety Cabinet Class II.', 'Particulate Counter Laser ISO 14644 & Fume Hood Airflow Meter.'],
    participants: ['Analis Laboratorium Farmasi, QA/QC Pharma, Apoteker Produksi, dan HSE Officer Farmasi.'],
    tableData: {
      headers: ['Occupational Exposure Band (OEB)', 'Nilai Batas Paparan Udara (OEL)', 'Tingkat Isolasi Containment Wajib'],
      rows: [
        ['OEB 1 & 2 (Rendah)', '> 100 µg/m³', 'Ventilasi umum dan Fume Hood standar'],
        ['OEB 3 (Sedang)', '10 µg/m³ s.d 100 µg/m³', 'Laminar Airflow Booth + PAPR Respirator'],
        ['OEB 4 & 5 (SANGAT TINGGI / HPAPI)', '< 1 µg/m³ (Sangat Toksik)', 'Closed Isolator Glovebox System Tekanan Negatif']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/k3-laboratorium/', label: 'Pelatihan K3 Laboratorium' },
      { href: '/kategori-pelatihan/chemical-handling/', label: 'Pelatihan Chemical Handling' }
    ],
    faqs: [
      {
        q: 'Apa perbedaan antara Fume Hood kimia biasa dan Biosafety Cabinet (BSC) di industri farmasi?',
        a: 'Fume Hood hanya membuang uap kimia beracun ke luar ruangan untuk melindungi analis (tanpa menyaring produk). Sedangkan Biosafety Cabinet (BSC) dilengkapi filter HEPA 99.97% yang melindungi ANALIS, PRODUK dari kontaminasi, dan LINGKUNGAN sekitar secara simultan.'
      }
    ]
  },

  // 31. Logistik, Pergudangan & Depo
  {
    key: 'logistik-pergudangan-dan-depo',
    hub: 'industri',
    path: 'industri/logistik-pergudangan-dan-depo/',
    title: 'Pelatihan K3 Logistik, Pergudangan & Depo Distribusi Modern',
    h1: 'Pelatihan Keselamatan Pergudangan & Logistik: Operasional Forklift/Reach Truck, Stabilitas Racking, dan Loading Dock Safety',
    meta: 'In-house training K3 sektor logistik & pergudangan: traffic management depo, segregasi forklift-pedestrian, inspeksi berkala racking bertingkat, dan keselamatan loading dock kontainer.',
    imgAlt: 'Forklift elektrik memindahkan palet barang di pusat distribusi logistik modern dengan marka jalur keselamatan lantai yang rapi',
    related: ['operator-forklift', 'operator-reach-truck', 'warehouse-supervisor'],
    intro: 'Pusat distribusi logistik modern (3PL, E-Commerce Fulfillment, Depo Kontainer) beroperasi dengan ritme pergerakan armada material handling yang sangat padat. Program pelatihan ini melatih manajemen keselamatan pergudangan terpadu.',
    hazards: [
      '<strong>Tabrakan Forklift dengan Pekerja Berjalan Kaki:</strong> Tidak adanya pemisahan fisik jalur pedestrian dan forklift.',
      '<strong>Keruntuhan Rak Penyimpanan Bertingkat:</strong> Tiang rak tertabrak unit atau penempatan palet melebihi batas beban balok.',
      '<strong>Kecelakaan Rampa Loading Dock:</strong> Forklift terjatuh dari dock leveller ke tanah akibat truk maju mendadak.'
    ],
    regulations: ['<strong>Permenaker No. 8 Tahun 2020</strong>.', '<strong>Standar OSHA 29 CFR 1910.178</strong> (Powered Industrial Trucks).'],
    modules: [
      {
        name: 'Modul 1: Manajemen Keselamatan Armada Forklift & Material Handling',
        theory: 'Standar lisensi SIO, daily P2H, kecepatan maksimum depo (10 km/jam), pemasangan Blue Spot Light keselamatan.',
        practical: 'Audit kelayakan armada forklift dan simulasi penataan jalur aman.'
      },
      {
        name: 'Modul 2: Racking Safety & Prosedur Loading Dock Aman',
        theory: 'Inspeksi deformasi tiang rak, batas beban rak per level, sistem penguncian ban truk (Truck Wheel Chocks).',
        practical: 'Praktik inspeksi kondisi beam rak dan verifikasi dock leveler.'
      }
    ],
    equipment: ['Forklift Blue Spot Safety Light.', 'Heavy Duty Rubber Wheel Chocks & Racking Measurement Gauge.'],
    participants: ['Logistics Manager, Warehouse Supervisor, Safety Officer Logistik, dan Driver Armada Depo.'],
    tableData: {
      headers: ['Peralatan Keselamatan Gudang', 'Fungsi Utama Proteksi', 'Lokasi Pemasangan Wajib'],
      rows: [
        ['Blue Spotlight / Red Zone Light', 'Memproyeksikan sinar peringatan 5m di lantai depan/belakang forklift', 'Unit Forklift & Reach Truck'],
        ['Guardrail Pembatas Baja', 'Pemisah fisik mutlak antara jalur manusia dan forklift', 'Sepanjang koridor pejalan kaki gudang'],
        ['Dock Leveller Safety Lip', 'Jembatan fleksibel anti-slip masuk ke bak truk kontainer', 'Setiap pintu dermaga loading dock']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/operator-forklift/', label: 'Pelatihan Operator Forklift' },
      { href: '/peran-jabatan/warehouse-supervisor/', label: 'Peran Warehouse Supervisor' }
    ],
    faqs: [
      {
        q: 'Apa fungsi lampu Blue Spot Light pada forklift pergudangan?',
        a: 'Blue Spot Light adalah lampu sorot LED biru terang yang dipasang di bagian belakang/depan forklift untuk memproyeksikan titik cahaya biru di lantai 5 meter sebelum forklift melintas, memberi peringatan dini kepada pejalan kaki di lorong persimpangan blind spot.'
      }
    ]
  },

  // 32. Pelabuhan & Maritim
  {
    key: 'pelabuhan-dan-maritim',
    hub: 'industri',
    path: 'industri/pelabuhan-dan-maritim/',
    title: 'Pelatihan K3 Pelabuhan & Industri Maritim (Port Safety)',
    h1: 'Pelatihan Keselamatan Kepelabuhanan & Maritim: Operasi Stevedoring Peti Kemas, Quay Crane, dan Kepatuhan ISPS Code',
    meta: 'In-house training K3 pelabuhan & maritim: keselamatan bongkar muat kapal (stevedoring), mitigasi bahaya lashing peti kemas, penanganan muatan berbahaya IMDG Code, dan keselamatan dermaga.',
    imgAlt: 'Kapal kontainer bersandar di dermaga pelabuhan dengan aktivitas bongkar muat peti kemas oleh quay gantry crane raksasa',
    related: ['k3-maritim-dan-kepelabuhanan', 'operator-gantry-crane', 'rigger'],
    intro: 'Terminal pelabuhan peti kemas dan curah beroperasi di bawah interaksi crane raksasa, kapal niaga samudera, perairan dalam, dan lalu lintas head truck kontainer.',
    hazards: [
      '<strong>Pekerja Tertimpa Spreader Crane Peti Kemas:</strong> Berada di bawah jalur swing radius container crane.',
      '<strong>Tenggelam di Tepi Dermaga (Man Overboard):</strong> Terpeleset ke laut tanpa mengenakan life jacket otomatis.',
      '<strong>Putusnya Tali Tambat Kapal (Mooring Line Snap-Back):</strong> Hentakan tali putus berkecepatan ratusan km/jam.'
    ],
    regulations: ['<strong>UU No. 17 Tahun 2008</strong> tentang Pelayaran.', '<strong>ILO Code of Practice on Safety and Health in Ports</strong>.', '<strong>Standar ISPS Code</strong>.'],
    modules: [
      {
        name: 'Modul 1: Stevedoring Safety & Penanganan Muatan IMDG Code',
        theory: 'SOP bongkar muat palka, lashing & unlashing kontainer, segregasi bahan kimia berbahaya di terminal.',
        practical: 'Audit penataan kontainer muatan B3 pada lapangan penumpukan.'
      },
      {
        name: 'Modul 2: Keselamatan Dermaga & Tanggap Darurat Laut',
        theory: 'Bahaya Snap-back zone tali kapal, SOP pemakaian lifejacket SOLAS, drill penyelamatan orang jatuh ke laut (Man Overboard).',
        practical: 'Simulasi pelemparan lifebuoy ring dan evakuasi korban dari perairan dermaga.'
      }
    ],
    equipment: ['SOLAS Lifebuoy Ring dengan Tali 30 Meter.', 'Inflatable Life Jacket & IMDG Code Chart.'],
    participants: ['Port Operations Manager, Stevedoring Supervisor, Marine Safety Officer, dan Petugas Terminal Peti Kemas.'],
    tableData: {
      headers: ['Aktivitas Kepelabuhanan', 'Potensi Bahaya Fatal', 'Pengendalian Wajib'],
      rows: [
        ['Bongkar Muat Palka Kapal', 'Tertimpa kontainer, jatuh ke palka kapal', 'Dilarang berdiri di bawah muatan, pasang safety net palka'],
        ['Penambatan Kapal (Mooring)', 'Hentakan tali tambat putus (Snap-Back)', 'Tandai zona cat kuning Snap-Back Zone di lantai dermaga'],
        ['Pemeriksaan Dermaga Tepi Air', 'Jatuh tenggelam ke laut dalam', 'Wajib mengenakan Lifejacket otomatis bersertifikat SOLAS']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/k3-maritim-dan-kepelabuhanan/', label: 'Pelatihan K3 Maritim' },
      { href: '/kategori-pelatihan/operator-gantry-crane/', label: 'Pelatihan Operator Gantry Crane' }
    ],
    faqs: [
      {
        q: 'Apa itu Snap-Back Zone pada dermaga pelabuhan?',
        a: 'Snap-Back Zone adalah area berbahaya di sekeliling garis tegangan tali tambat kapal di mana jika tali putus, ujung tali akan mencambuk balik dengan kekuatan mematikan. Area ini wajib dicat tanda garis batas bahaya di lantai dermaga.'
      }
    ]
  },

  // 33. Rumah Sakit & Layanan Kesehatan
  {
    key: 'rumah-sakit-dan-layanan-kesehatan',
    hub: 'industri',
    path: 'industri/rumah-sakit-dan-layanan-kesehatan/',
    title: 'Pelatihan K3 Rumah Sakit & Layanan Kesehatan (K3RS / MFK)',
    h1: 'Pelatihan Keselamatan Rumah Sakit (K3RS): Standar Akreditasi Kemenkes (STARKES), Pengelolaan B3 Medis, dan Evakuasi Pasien',
    meta: 'In-house training K3 rumah sakit (K3RS): implementasi standar MFK STARKES Kemenkes, pencegahan Needle Stick Injury, proteksi radiasi X-Ray, keselamatan gas medis oksigen, dan fire drill evakuasi pasien.',
    imgAlt: 'Tim K3RS memeriksa panel alarm kebakaran sentral dan meninjau kesiapan jalur evakuasi pasien di koridor rumah sakit',
    related: ['k3-rumah-sakit-k3rs', 'dokter-perusahaan-hiperkes', 'pengelolaan-limbah-b3'],
    intro: 'Rumah sakit dan fasilitas kesehatan mengelola risiko infeksi patogen menular, radiasi mesin pencitraan medis, zat kimia obat sitotoksik, serta evakuasi darurat pasien yang tidak berdaya mandiri.',
    hazards: [
      '<strong>Tertusuk Jarum Bekas Infeksius (Needle Stick Injury):</strong> Tertular virus HIV, Hepatitis B, atau Hepatitis C saat bertugas.',
      '<strong>Kebakaran di Ruang Rawat Intensif (ICU/OK):</strong> Saluran gas oksigen murni terbakar akibat percikan listrik.',
      '<strong>Kekacauan Evakuasi Pasien Ranjang:</strong> Ketidakmampuan memindahkan pasien ICU saat terjadi kebakaran gedung.'
    ],
    regulations: ['<strong>Permenkes No. 66 Tahun 2016</strong> tentang K3RS.', '<strong>Standar Akreditasi Kemenkes (STARKES) Bab MFK</strong>.'],
    modules: [
      {
        name: 'Modul 1: Manajemen Fasilitas dan Keselamatan (MFK STARKES)',
        theory: '8 Standar MFK, penanganan B3 medis, inspeksi sarana proteksi kebakaran rumah sakit, keselamatan sistem utilitas air & gas medis.',
        practical: 'Audit checklist kepatuhan MFK di ruang rawat inap dan laboratorium RS.'
      },
      {
        name: 'Modul 2: Pencegahan NSI & Evakuasi Pasien Ranjang (Code Red)',
        theory: 'SOP pembuangan jarum tanpa recapping, penggunaan Cytotoxic Spill Kit, teknik evakuasi matras luncur darurat.',
        practical: 'Simulasi evakuasi pasien ranjang dan penerapan sistem Code Red Helm Kebakaran.'
      }
    ],
    equipment: ['Evacuation Sledge / Evac-Mat Pasien.', 'Safety Box Limbah Jarum Kuning & Cytotoxic Spill Kit.'],
    participants: ['Komite K3RS, Direksi RS, Kepala Ruangan Perawat, Sanitasi RS, dan Teknisi Elektromedis.'],
    tableData: {
      headers: ['Sistem Helm Evakuasi RS (Code Red)', 'Warna Helm Penanggung Jawab', 'Tugas & Tanggung Jawab Utama'],
      rows: [
        ['Komandan Pemadaman Api', 'Helm MERAH', 'Mengambil APAR dan memadamkan sumber api awal'],
        ['Komandan Evakuasi Pasien', 'Helm KUNING', 'Memimpin evakuasi pasien keluar ruangan secara aman'],
        ['Komandan Penyelamatan Dokumen', 'Helm PUTIH', 'Menyelamatkan berkas rekam medis dan aset vital'],
        ['Komandan Penyelamatan Alat Medis', 'Helm BIRU', 'Menyelamatkan peralatan medis penting & memutus gas']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/k3-rumah-sakit-k3rs/', label: 'Pelatihan K3 Rumah Sakit' },
      { href: '/kategori-pelatihan/dokter-perusahaan-hiperkes/', label: 'Pelatihan Hiperkes Dokter' }
    ],
    faqs: [
      {
        q: 'Apa sistem 4 Helm Kebakaran (Code Red) yang diterapkan di rumah sakit Indonesia?',
        a: 'Sistem 4 Helm adalah pembagian tugas taktis darurat: Helm Merah (pemadam api), Helm Kuning (evakuasi pasien), Helm Putih (penyelamat rekam medis/dokumen), dan Helm Biru (penyelamat peralatan medis dan pemutus katup gas oksigen).'
      }
    ]
  },

  // 34. Pulp and Paper Mill
  {
    key: 'pulp-and-paper-mill',
    hub: 'industri',
    path: 'industri/pulp-and-paper-mill/',
    title: 'Pelatihan K3 Industri Pulp and Paper (Pabrik Kertas)',
    h1: 'Pelatihan Keselamatan Pabrik Kertas (Pulp & Paper): Keselamatan Bejana Digester, Bahan Kimia Pemutih Klorin Dioksida, dan Roll Mesin Kertas',
    meta: 'In-house training K3 industri pulp & paper: keselamatan bejana tekan digester, mitigasi gas beracun klorin dioksida (ClO2) pemutih, machine guarding kalender roll mesin kertas, dan boiler recovery.',
    imgAlt: 'Pekerja pabrik kertas memantau perputaran rol silinder mesin kertas berkecepatan tinggi',
    related: ['operator-boiler', 'chemical-handling', 'machine-guarding'],
    intro: 'Pabrik bubur kertas dan kertas (<em>Pulp &amp; Paper Mill</em>) mengoperasikan bejana pencerna kayu (digester) bertekanan tinggi, zat kimia pemutih sangat beracun (Klorin Dioksida / ClO2), boiler recovery cairan hitam (Black Liquor Boiler), dan silinder rol berputar berkecepatan tinggi.',
    hazards: [
      '<strong>Kebocoran Gas Klorin Dioksida (ClO2 Toxic Release):</strong> Gas pemutih beracun melumpuhkan sistem pernapasan seketika.',
      '<strong>Ledakan Bejana Pencerna Kayu (Digester Rupture):</strong> Korosi dinding bejana digester memicu pelepasan uap kimia bersuhu 170°C.',
      '<strong>Tangan Tergilas Rol Mesin Kertas (Nip Point Entanglement):</strong> Operator membersihkan lembaran kertas kusut saat rol berputar.'
    ],
    regulations: ['<strong>UU No. 1 Tahun 1970</strong>.', '<strong>Permenaker No. 38 Tahun 2016</strong>.', '<strong>Permenaker No. 01/1988</strong>.'],
    modules: [
      {
        name: 'Modul 1: Keselamatan Proses Kimia Digester & Bleaching Plant',
        theory: 'Bahan kimia pemasak pulp (White Liquor), gas ClO2/SO2 pemutih, sistem deteksi kebocoran dan scrubber netralisasi.',
        practical: 'Audit kelaikan bejana digester dan jalur pipa uap pulp bertekanan.'
      },
      {
        name: 'Modul 2: Machine Guarding Rol Kalender & LOTO Mesin Kertas',
        theory: 'Titik jepit rol berputar (Nip points), tombol darurat trip wire, isolasi LOTO saat pergantian felts & wire.',
        practical: 'Uji fungsi emergency stop kabel tarik di sepanjang mesin kertas.'
      }
    ],
    equipment: ['Chlorine Dioxide (ClO2) Gas Detector.', 'Full Face Respirator dengan Filter Gas Asam.'],
    participants: ['Mill Manager Pulp & Paper, Operator Digester, Maintenance Engineer, dan HSE Officer Pabrik Kertas.'],
    tableData: {
      headers: ['Area Pabrik Pulp & Paper', 'Bahan Kimia / Mesin Berbahaya', 'Pengendalian Keselamatan Mutlak'],
      rows: [
        ['Stasiun Digester (Pemasak)', 'Uap 170°C, Tekanan 10 Bar, White Liquor', 'Riksa uji NDT ketebalan bejana + Relief Valve'],
        ['Bleaching Plant (Pemutih)', 'Gas Klorin Dioksida (ClO2), Ozon', 'Sensor ClO2 otomatis + Scrubber Caustic + SCBA'],
        ['Paper Machine (Mesin Kertas)', 'Rol Silinder Kalender Pengering Panas', 'Trip Wire Stop Switch + Batang Anti-Jepit (Nip Guard)']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/operator-boiler/', label: 'Pelatihan Operator Boiler' },
      { href: '/kategori-pelatihan/chemical-handling/', label: 'Pelatihan Chemical Handling' }
    ],
    faqs: [
      {
        q: 'Apa bahaya utama gas Klorin Dioksida (ClO2) di pabrik pulp & paper?',
        a: 'Klorin Dioksida adalah gas pengoksidasi kuat dan sangat beracun bagi paru-paru manusia bahkan pada konsentrasi sekecil 0.1 ppm, serta berpotensi meledak secara spontan jika terpapar panas atau sinar matahari langsung.'
      }
    ]
  },

  // 35. Tekstil, Garmen & Sepatu
  {
    key: 'tekstil-garmen-dan-sepatu',
    hub: 'industri',
    path: 'industri/tekstil-garmen-dan-sepatu/',
    title: 'Pelatihan K3 Industri Tekstil, Garmen & Sepatu (Apparel Safety)',
    h1: 'Pelatihan Keselamatan Industri Tekstil & Garmen: Pencegahan Kebakaran Pabrik Padat Karya, Ergonomi Jahit, dan Pengendalian Debu Kapas',
    meta: 'In-house training K3 industri tekstil, garmen & sepatu: mitigasi kebakaran pabrik padat karya ribuan pekerja, pencegahan tertusuk jarum mesin jahit, ergonomi jahit, dan pembuangan limbah pewarna tekstil.',
    imgAlt: 'Ribuan pekerja garmen bekerja di meja mesin jahit yang dilengkapi pelindung jarum safety needle guard dan pencahayaan memadai',
    related: ['ergonomi-industri', 'fire-fighting-dasar', 'simulasi-evakuasi-gedung'],
    intro: 'Industri padat karya garmen, tekstil, dan alas kaki mempekerjakan ribuan operator di satu gedung besar. Fokus utama K3 mencakup pencegahan kebakaran masif bahan kain mudah terbakar, jalur evakuasi bebas hambatan, serta ergonomi stasiun jahit.',
    hazards: [
      '<strong>Kebakaran Cepat Pabrik Tekstil (Flash Fire):</strong> Serat debu kapas melayang tersulut percikan dinamo mesin jahit.',
      '<strong>Pintu Darurat Terkunci saat Jam Kerja:</strong> Karyawan terjebak saat kebakaran akibat pintu darurat digembok untuk mencegah pencurian.',
      '<strong>Jari Tertusuk Jarum Mesin Jahit (Needle Puncture):</strong> Ketiadaan pelindung jarum (needle guard) pada mesin jahit berkecepatan tinggi.'
    ],
    regulations: ['<strong>UU No. 1 Tahun 1970</strong>.', '<strong>Kepmenaker No. 186/1999</strong>.', '<strong>Permenaker No. 5/2018</strong>.'],
    modules: [
      {
        name: 'Modul 1: Proteksi Kebakaran Pabrik Padat Karya & Jalur Evakuasi',
        theory: 'Standar lebar lorong evakuasi bebas halangan (min 1.5 meter), pintu darurat swing outward tanpa gembok, sistem sprinkler otomatis.',
        practical: 'Audit denah jalur evakuasi dan simulasi pengosongan gedung 1.000 pekerja dalam <3 menit.'
      },
      {
        name: 'Modul 2: Ergonomi Stasiun Kerja Jahit & Proteksi Mesin',
        theory: 'Pemasangan Needle Guard, pelindung puli sabuk, kursi jahit dengan penopang pinggang (lumbar), pencahayaan meja 500 Lux.',
        practical: 'Penyetelan stasiun kerja jahit ergonomis dan gerakan peregangan sela kerja.'
      }
    ],
    equipment: ['Needle Safety Guard Demonstrator.', 'Lux Meter Digital & Smoke Detector Tester.'],
    participants: ['Factory Manager Garmen, Supervisor Produksi Jahit, HR Compliance, dan Safety Officer Tekstil.'],
    tableData: {
      headers: ['Elemen Keselamatan Pabrik Garmen', 'Ketentuan Standar Wajib', 'Tolak Ukur Kepatuhan'],
      rows: [
        ['Pintu Keluar Darurat (Emergency Exit)', 'Membuka ke arah luar, DILARANG DIGEMBOK saat jam kerja', '100% pintu bebas hambatan & bertanda EXIT menyala'],
        ['Mesin Jahit Industri', 'Wajib dipasangi Needle Guard & Pulley Belt Guard', 'Nihil insiden jari tertusuk jarum jahit'],
        ['Penerangan Meja Jahit', 'Minimal 500 Lux terfokus pada titik jarum', 'Mencegah kelelahan mata dan salah jahit']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/ergonomi-industri/', label: 'Pelatihan Ergonomi Industri' },
      { href: '/kategori-pelatihan/fire-fighting-dasar/', label: 'Pelatihan Fire Fighting Dasar' }
    ],
    faqs: [
      {
        q: 'Mengapa pintu darurat di pabrik garmen dilarang keras digembok saat jam kerja aktif?',
        a: 'Menggembok pintu darurat adalah pelanggaran hukum berat yang telah menyebabkan tragedi kebakaran mematikan di industri garmen dunia di mana ribuan pekerja tewas terbakar karena tidak bisa membuka pintu keluar yang terkunci.'
      }
    ]
  }
];

console.log(`Loaded ${batch4IndustriesPart4.length} industries for Batch 4 Part 4.`);
