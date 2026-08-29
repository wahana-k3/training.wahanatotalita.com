import { ProgramDetail } from './master-batch1-data';

export const batch2List: ProgramDetail[] = [
  // 34. K3 Listrik
  {
    key: 'k3-listrik',
    title: 'Pelatihan K3 Listrik: Standar Keselamatan Instalasi & Pekerjaan Listrik',
    h1: 'Pelatihan K3 Listrik: Pencegahan Sengatan Arus, Hubung Singkat, dan Kepatuhan PUIL 2020',
    meta: 'Pelatihan K3 listrik industri: regulasi Permenaker No. 12/2015, standar PUIL 2020, bahaya sengatan listrik (electrocution), isolasi LOTO, dan inspeksi grounding.',
    imgAlt: 'Teknisi listrik mengenakan sarung tangan isolasi 1000V dan helm pelindung sedang menguji tegangan pada panel distribusi',
    related: ['teknisi-k3-listrik', 'ahli-k3-listrik', 'lockout-tagout-loto', 'arc-flash-safety'],
    intro: 'Energi listrik adalah penggerak utama seluruh fasilitas industri, namun juga merupakan salah satu sumber bahaya paling mematikan yang tidak berbau dan tidak terlihat. Kebakaran akibat korsleting listrik menyumbang lebih dari 65% kasus kebakaran pabrik di Indonesia, sementara sengatan listrik tegangan rendah maupun menengah terus menelan korban jiwa di kalangan teknisi pemeliharaan yang bekerja tanpa prosedur keselamatan terstandar.',
    hazards: [
      '<strong>Sengatan Listrik Fatal (Electrocution):</strong> Arus listrik sekecil 50–100 mA yang melintasi dada manusia dapat memicu fibrilasi ventrikel jantung dalam hitungan detik.',
      '<strong>Busur Api & Ledakan Listrik (Arc Flash / Blast):</strong> Pelepasan energi termal hingga suhu 20.000°C yang melelehkan logam panel dan membakar pakaian kerja biasa.',
      '<strong>Hubung Singkat Pemicu Kebakaran:</strong> Beban lebih (overload) atau isolasi kabel terkelupas yang memercikkan api ke tumpukan bahan mudah terbakar.',
      '<strong>Tegangan Induksi & Sentuh Tak Langsung:</strong> Bodi mesin bertegangan akibat kegagalan pentanahan (grounding fault).'
    ],
    regulations: [
      '<strong>Permenaker No. 12 Tahun 2015</strong> tentang Keselamatan dan Kesehatan Kerja Listrik di Tempat Kerja.',
      '<strong>Kepdirjen Binwasnaker No. Kep. 47/PPK&K3/VIII/2015</strong> tentang Pembinaan Teknisi K3 Listrik.',
      '<strong>Standar PUIL 2020 (SNI 0225:2020)</strong> tentang Persyaratan Umum Instalasi Listrik.',
      '<strong>Standar NFPA 70E</strong> (Standard for Electrical Safety in the Workplace).'
    ],
    modules: [
      {
        name: 'Modul 1: Kerangka Hukum K3 Listrik & Standar PUIL 2020',
        theory: 'Kewajiban pengusaha, standar perancangan instalasi, sertifikasi teknisi/ahli, audit kelayakan izin instalasi Disnaker.',
        practical: 'Audit dokumen diagram satu garis (Single Line Diagram / SLD) dan izin riksa uji kelistrikan.'
      },
      {
        name: 'Modul 2: Bahaya Fisiologis Arus Listrik & Efek Termal',
        theory: 'Pengaruh kuat arus (mA), lintasan arus pada tubuh, tegangan sentuh (touch voltage), tegangan langkah (step voltage).',
        practical: 'Kalkulasi batas aman waktu pemutusan pengaman ELCB/RCD (30 mA dalam waktu <30 milidetik).'
      },
      {
        name: 'Modul 3: Sistem Proteksi Instalasi & Pengukuran Grounding',
        theory: 'Prinsip kerja MCB, MCCB, ACB, proteksi arus lebih, sistem pentanahan TN-S, TN-C, TT, IT.',
        practical: 'Pengukuran tahanan pembumian menggunakan Earth Resistance Tester (nilai wajib <5 Ohm).'
      },
      {
        name: 'Modul 4: Prosedur Bekerja Aman Bebas Tegangan (Dead Working)',
        theory: '5 Golden Rules Kelistrikan: Putuskan arus -> Kunci LOTO -> Uji bebas tegangan -> Pasang pentanahan lokal -> Pasang barikade.',
        practical: 'Simulasi isolasi panel cubicle 20 kV dan pengujian voltmeter tegangan nol.'
      },
      {
        name: 'Modul 5: APD Khusus Kelistrikan & Penyelamatan Korban Sengatan',
        theory: 'Standar sarung tangan dielektrik Class 00 s.d 4, face shield arc rated, tongkat penarik korban (insulated rescue hook).',
        practical: 'Drill penyelamatan korban tersengat listrik dan resusitasi jantung paru (CPR) darurat.'
      }
    ],
    equipment: [
      'Digital Earth Resistance Tester (Earth Ground Clamp & 3-Pole Tester).',
      'Insulation Resistance Tester (Megger 1000V / 5000V).',
      'True-RMS Digital Multimeter & Clamp Meter Cat IV 600V / Cat III 1000V.',
      'Sarung Tangan Dielektrik Karet Isolasi Class 0 (1000V) & Class 2 (17.000V) dengan pelindung kulit luar.',
      'Insulated Rescue Hook (Tongkat Penyelamat Sengatan Listrik Fiber 2.5 Meter).'
    ],
    participants: [
      'Teknisi Listrik, Teknisi Maintenance, dan Electrical Engineer Pabrik.',
      'Supervisor Mekanikal & Elektrikal, Facility Manager, dan K3 Officer.',
      'Kontraktor Instalatur Listrik Industri dan Gedung Bertingkat.'
    ],
    tableData: {
      headers: ['Besar Kuat Arus (mA)', 'Dampak Fisiologis pada Tubuh Manusia', 'Tingkat Bahaya'],
      rows: [
        ['< 1 mA', 'Belum terasa sensasi sengatan', 'Aman / Ambang rasa'],
        ['1 – 5 mA', 'Terasa getaran ringan, otot belum kejang', 'Waspada'],
        ['10 – 20 mA', 'Otot mencengkeram kuat, sulit melepaskan diri (Let-go threshold)', 'Berbahaya'],
        ['50 – 100 mA', 'Fibrilasi ventrikel jantung, henti napas dalam hitungan detik', 'FATAL / Mematikan'],
        ['> 1.000 mA (1 A)', 'Luka bakar jaringan parah, henti jantung seketika', 'FATAL / Kerusakan organ masif']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/teknisi-k3-listrik/', label: 'Pelatihan Teknisi K3 Listrik' },
      { href: '/kategori-pelatihan/ahli-k3-listrik/', label: 'Pelatihan Ahli K3 Listrik' },
      { href: '/kategori-pelatihan/lockout-tagout-loto/', label: 'Pelatihan Lockout Tagout' },
      { href: '/kategori-pelatihan/arc-flash-safety/', label: 'Pelatihan Arc Flash Safety' }
    ],
    faqs: [
      {
        q: 'Berapa batas tahanan grounding yang diwajibkan oleh regulasi K3 di Indonesia?',
        a: 'Berdasarkan Permenaker No. 12 Tahun 2015 dan standar PUIL 2020, nilai resistansi pentanahan (grounding resistance) untuk instalasi listrik umum dan sistem proteksi petir wajib berada di bawah 5 Ohm, sedangkan untuk peralatan elektronik sensitif/server disarankan di bawah 1 Ohm.'
      },
      {
        q: 'Apa yang dimaksud dengan 5 Prinsip Keselamatan Kerja Listrik (5 Golden Rules)?',
        a: '5 Golden Rules kelistrikan meliputi: (1) Putuskan sumber daya total, (2) Kunci saklar dan pasang LOTO, (3) Uji ketiadaan tegangan dengan alat ukur terverifikasi, (4) Hubungkan ke tanah dan pasang short-circuit grounding lokal, dan (5) Pasang barikade serta tanda peringatan bahaya di sekeliling area kerja.'
      }
    ]
  },

  // 35. Teknisi K3 Listrik
  {
    key: 'teknisi-k3-listrik',
    title: 'Pelatihan Teknisi K3 Listrik: Sertifikasi Kompetensi Kemnaker RI',
    h1: 'Pelatihan Teknisi K3 Listrik: Standar Sertifikasi Kompetensi, Pemeliharaan, dan Riksa Uji K3 Kelistrikan',
    meta: 'Pelatihan teknisi K3 listrik resmi Kemnaker RI: sertifikasi kompetensi, pengukuran isolasi Megger, audit panel distribusi, pemeliharaan transformator, dan SIK teknisi listrik.',
    imgAlt: 'Teknisi K3 listrik bersertifikasi memegang alat ukur insulasi Megger memeriksa tahanan kabel feeder trafo',
    related: ['k3-listrik', 'ahli-k3-listrik', 'inspeksi-panel-listrik', 'lockout-tagout-loto'],
    intro: 'Berdasarkan <strong>Permenaker No. 12 Tahun 2015</strong>, setiap perusahaan yang memiliki instalasi listrik dengan kapasitas pembangkitan, transmisi, distribusi, atau pemanfaatan daya di atas 200 kVA wajib memiliki <strong>Teknisi K3 Listrik</strong> yang memiliki lisensi resmi dari Kementerian Ketenagakerjaan RI.',
    hazards: [
      '<strong>Kegagalan Isolasi Transformator:</strong> Penurunan tahanan dielektrik minyak trafo memicu hubung singkat internal dan ledakan.',
      '<strong>Arus Bocor pada Rangkaian Kontrol:</strong> Tidak adanya sistem proteksi Residual Current Device (RCD) pada mesin-mesin basah.',
      '<strong>Kesalahan Pengukuran Alat Ukur:</strong> Menggunakan multimeter dengan kategori proteksi rendah (Cat I/II) pada panel distribusi utama.'
    ],
    regulations: [
      '<strong>Permenaker No. 12 Tahun 2015</strong> tentang K3 Listrik di Tempat Kerja.',
      '<strong>Kepdirjen Binwasnaker No. 47/PPK&K3/VIII/2015</strong> tentang Sertifikasi Teknisi K3 Listrik.',
      '<strong>Standar PUIL 2020 (SNI 0225:2020)</strong>.'
    ],
    modules: [
      {
        name: 'Modul 1: Kebijakan & Landasan Hukum Pembinaan Teknisi Listrik',
        theory: 'Hak dan wewenang teknisi K3 listrik, pemeriksaan berkala instalasi, pelaporan kecelakaan listrik ke Disnaker.',
        practical: 'Penyusunan rencana pemeliharaan preventif K3 kelistrikan tahunan.'
      },
      {
        name: 'Modul 2: Teknik Pengujian Tahanan Isolasi (Megger Test)',
        theory: 'Prinsip pengujian isolasi fasa-fasa dan fasa-ground, nilai batas minimal isolasi (1000 Ohm per Volt tegangan kerja).',
        practical: 'Praktik Megger test pada motor listrik 3-fasa 380V dan kabel feeder NYY.'
      },
      {
        name: 'Modul 3: Pemeliharaan Switchgear, Breaker & Transformator',
        theory: 'Inspeksi Air Circuit Breaker (ACB), Vacuum Circuit Breaker (VCB), uji dielektrik oli trafo (breakdown voltage test).',
        practical: 'Audit kebersihan busbar panel dan pengujian trip interlock relay proteksi.'
      }
    ],
    equipment: [
      'Insulation Tester (Megger) 1000V/2500V/5000V.',
      'Clamp-on Earth Ground Tester.',
      'Digital Phase Rotation Meter (Pengukur Urutan Fasa R-S-T).'
    ],
    participants: ['Teknisi Listrik Pabrik, Maintenance Leader, dan Engineering Supervisor.'],
    tableData: {
      headers: ['Tegangan Kerja Sistem', 'Tegangan Uji Megger', 'Tahanan Isolasi Minimal'],
      rows: [
        ['Tegangan Ekstra Rendah (<50V)', '250 V DC', '>= 0.5 MegaOhm (MΩ)'],
        ['Tegangan Rendah (50V – 500V)', '500 V DC', '>= 1.0 MegaOhm (MΩ)'],
        ['Tegangan Menengah (>500V s.d 1000V)', '1000 V DC', '>= 1.0 MegaOhm (MΩ)'],
        ['Tegangan Tinggi TM (20 kV)', '2500V – 5000V DC', '>= 20 MegaOhm (MΩ)']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/k3-listrik/', label: 'Pelatihan K3 Listrik' },
      { href: '/kategori-pelatihan/ahli-k3-listrik/', label: 'Pelatihan Ahli K3 Listrik' },
      { href: '/kategori-pelatihan/inspeksi-panel-listrik/', label: 'Pelatihan Inspeksi Panel Listrik' }
    ],
    faqs: [
      {
        q: 'Berapa masa berlaku lisensi Surat Izin Kerja (SIK) Teknisi K3 Listrik Kemnaker?',
        a: 'Lisensi Teknisi K3 Listrik resmi dari Kemnaker RI memiliki masa berlaku 3 tahun dan dapat diperpanjang melalui evaluasi kinerja K3 di perusahaan.'
      }
    ]
  },

  // 36. Ahli K3 Listrik
  {
    key: 'ahli-k3-listrik',
    title: 'Pelatihan Ahli K3 Listrik: Audit & Pengawasan Sistem Ketenagalistrikan',
    h1: 'Pelatihan Ahli K3 Listrik: Sertifikasi Pengawasan, Audit Desain Instalasi, dan Riksa Uji K3 Kelistrikan',
    meta: 'Pelatihan Ahli K3 Listrik Kemnaker RI: evaluasi gambar desain kelistrikan, audit keselamatan instalasi, riksa uji berkala, dan manajemen risiko bahaya listrik industri.',
    imgAlt: 'Ahli K3 listrik memegang dokumen audit kelistrikan meninjau instalasi gardu distribusi listrik tegangan menengah',
    related: ['k3-listrik', 'teknisi-k3-listrik', 'arc-flash-safety', 'grounding-dan-lightning-protection'],
    intro: '<strong>Ahli K3 Listrik</strong> adalah figur penanggung jawab teknis keselamatan tertinggi dalam perencanaan, pemasangan, pemeliharaan, dan audit sistem kelistrikan di perusahaan. Ahli K3 Listrik berwenang mengevaluasi kesesuaian gambar rencana instalasi listrik, memimpin audit berkala, dan mengawasi implementasi standar PUIL 2020.',
    hazards: [
      '<strong>Kegagalan Perencanaan Desain:</strong> Salah menentukan kapasitas arus hubung singkat (Short Circuit Breaking Capacity) pada panel utama.',
      '<strong>Ketidakpatuhan Sertifikat Laik Operasi (SLO):</strong> Mengoperasikan instalasi baru tanpa uji komisioning dan izin resmi Disnaker.',
      '<strong>Bahaya Harmonisa Listrik (Harmonics Distortion):</strong> Beban non-linear komputer/inverter memanaskan kabel netral hingga terbakar.'
    ],
    regulations: [
      '<strong>Permenaker No. 12 Tahun 2015</strong> tentang K3 Listrik di Tempat Kerja.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Permenaker No. 33 Tahun 2015</strong> tentang Pengawasan Ketenagakerjaan Bidang K3 Listrik.'
    ],
    modules: [
      {
        name: 'Modul 1: Evaluasi Dokumen Desain & Rencana Instalasi',
        theory: 'Perhitungan kapasitas trafo, jatuh tegangan (voltage drop), koordinasi selektivitas breaker, analisis bahaya flash.',
        practical: 'Audit verifikasi dokumen Single Line Diagram dan sertifikat komponen instalasi.'
      },
      {
        name: 'Modul 2: Metodologi Audit & Riksa Uji Berkala Instalasi Listrik',
        theory: 'Prosedur audit visual, audit pengukuran, pengujian mekanikal, uji proteksi petir dan genset cadangan.',
        practical: 'Penyusunan laporan teknis hasil audit riksa uji kelistrikan perusahaan.'
      }
    ],
    equipment: ['Power Quality Analyzer 3-Phase, Thermal Imager, dan Multi-function Installation Tester.'],
    participants: ['Electrical Engineer, Plant Manager, HSE Manager, dan Konsultan Riksa Uji K3.'],
    tableData: {
      headers: ['Kualifikasi Personel', 'Batas Wewenang Legal', 'Kewajiban Perusahaan'],
      rows: [
        ['Teknisi K3 Listrik', 'Pemeriksaan operasional, pemeliharaan rutin, perbaikan teknis', 'Wajib pada daya >200 kVA'],
        ['Ahli K3 Listrik', 'Perencanaan desain, pengawasan pemasangan, audit riksa uji', 'Wajib pada daya pembangkitan/pemanfaatan >200 kVA']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/k3-listrik/', label: 'Pelatihan K3 Listrik' },
      { href: '/kategori-pelatihan/teknisi-k3-listrik/', label: 'Pelatihan Teknisi K3 Listrik' }
    ],
    faqs: [
      {
        q: 'Kapan perusahaan wajib menunjuk Ahli K3 Listrik?',
        a: 'Perusahaan wajib memiliki Ahli K3 Listrik apabila membangkitkan, mentransmisikan, mendistribusikan, atau memanfaatkan energi listrik dengan kapasitas daya lebih dari 200 kVA.'
      }
    ]
  },

  // 37. Lockout Tagout (LOTO)
  {
    key: 'lockout-tagout-loto',
    title: 'Pelatihan Lockout Tagout (LOTO): Isolasi Energi Berbahaya',
    h1: 'Pelatihan Lockout Tagout (LOTO): Prosedur Penguncian, Pelabelan, dan Verifikasi Zero Energy State',
    meta: 'Pelatihan Lockout Tagout (LOTO) bersertifikasi: isolasi energi elektrik, mekanik, pneumatik, hidrolik, thermal, standar OSHA 1910.147, dan sistem group lockout.',
    imgAlt: 'Pekerja memasang gembok keselamatan pad-lock merah dan safety tag pada pemutus sirkuit listrik panel industri',
    related: ['k3-listrik', 'permit-to-work', 'machine-guarding', 'keselamatan-rotating-equipment'],
    intro: 'Pelepasan energi berbahaya yang tidak terduga—baik berupa arus listrik, tekanan hidrolik, uap panas bertekanan, atau pelepasan pegas mekanikal—merupakan penyebab ribuan kasus pekerja terpotong anggota tubuh, hancur, atau tewas seketika saat melakukan pemeliharaan mesin. Program <strong>Lockout Tagout (LOTO)</strong> adalah protokol isolasi energi tanpa kompromi untuk mencapai kondisi <em>Zero Energy State</em>.',
    hazards: [
      '<strong>Mesin Dinyalakan Orang Lain Saat Diperbaiki:</strong> Rekan kerja menekan tombol start tanpa mengetahui ada teknisi di dalam mesin.',
      '<strong>Sisa Energi Tekanan Tersimpan (Residual Energy):</strong> Fluida bertekanan menyembur saat baut flange dibuka akibat tidak dibuang (depressurized).',
      '<strong>Penggunaan Tag Tanpa Gembok (Tag-Only):</strong> Mengabaikan gembok fisik sehingga label peringatan terlepas atau diabaikan.'
    ],
    regulations: [
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Permenaker No. 38 Tahun 2016</strong> tentang K3 Pesawat Tenaga dan Produksi.',
      '<strong>Standar OSHA 29 CFR 1910.147</strong> (The Control of Hazardous Energy - Lockout/Tagout).'
    ],
    modules: [
      {
        name: 'Modul 1: Identifikasi 6 Bentuk Energi Berbahaya',
        theory: 'Energi Listrik, Mekanik/Kinetik, Hidrolik, Pneumatik, Kimiawi, dan Thermal/Gravitasi.',
        practical: 'Audit pemetaan Energy Control Procedure (ECP) pada mesin kompresor dan konveyor pabrik.'
      },
      {
        name: 'Modul 2: 8 Langkah Baku Prosedur LOTO',
        theory: 'Persiapan -> Pemberitahuan -> Shutdown -> Isolasi -> Pemasangan Lock & Tag -> Buang Residual -> Verifikasi Zero Energy -> Kerja.',
        practical: 'Drill isolasi katup pipa gas, saklar MCB, dan silinder hidrolik presisi.'
      },
      {
        name: 'Modul 3: Sistem Group Lockout & Lockbox Proyek Turnaround',
        theory: 'Manajemen kunci kelompok, penggunaan hasp multi-gembok, lockbox station, protokol pergantian shift.',
        practical: 'Simulasi penguncian 10 titik isolasi oleh tim gabungan mekanik dan elektrikal.'
      }
    ],
    equipment: [
      'Safety Padlock Non-Conductive (Merah untuk Operator, Biru untuk Lead, Kuning untuk Khusus).',
      'Lockout Hasp Baja 6 Lubang, Circuit Breaker Lockout, Ball Valve & Gate Valve Lockout.',
      'Heavy Duty Reusable Danger Tagout Labels & Group Lockbox Station.'
    ],
    participants: ['Authorized Employees (Teknisi Maintenance/Mekanik/Listrik), Affected Employees, dan Supervisor.'],
    tableData: {
      headers: ['Jenis Energi', 'Alat Isolasi Utama', 'Metode Pembuangan Energi Tersisa (Residual)', 'Metode Uji Verifikasi (Zero Energy)'],
      rows: [
        ['Listrik', 'Circuit Breaker Lockout / Disconnect Switch', 'Discharge kapasitor bank dengan resistor', 'Uji voltmeter tegangan fasa-ground = 0V'],
        ['Pneumatik / Udara', 'Pneumatic Quick-Disconnect Lockout', 'Buka drain valve / bleed off tangki receiver', 'Periksa pressure gauge = 0 bar'],
        ['Hidrolik / Cairan', 'Ball Valve Lockout / Blind Flange', 'Buka release valve, pasang ganjal mekanis silinder', 'Gerakkan tuas kontrol hidrolik bebas beban'],
        ['Gravitasi / Mekanik', 'Safety Pin Lockout / Mechanical Prop Block', 'Turunkan beban ke lantai dasar atau ganjal pin', 'Verifikasi tidak ada potensi gerak meluncur']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/k3-listrik/', label: 'Pelatihan K3 Listrik' },
      { href: '/kategori-pelatihan/permit-to-work/', label: 'Pelatihan Permit to Work' },
      { href: '/kategori-pelatihan/machine-guarding/', label: 'Pelatihan Machine Guarding' }
    ],
    faqs: [
      {
        q: 'Kapan prosedur LOTO wajib diterapkan?',
        a: 'Prosedur LOTO wajib diterapkan setiap kali pekerja melakukan pemeliharaan, pembersihan, perbaikan, atau modifikasi mesin di mana pelepasan energi berbahaya atau start-up mesin yang tidak terduga dapat mencederai pekerja.'
      }
    ]
  },

  // 38. Arc Flash Safety
  {
    key: 'arc-flash-safety',
    title: 'Pelatihan Arc Flash Safety: Pencegahan Bahaya Ledakan Busur Listrik',
    h1: 'Pelatihan Arc Flash Safety: Analisis Energi Insiden, Penentuan Arc Flash Boundary, dan Standar APD NFPA 70E',
    meta: 'Pelatihan Arc Flash Safety: perhitungan Incident Energy (cal/cm²), penetapan Arc Flash Boundary, kategori APD Category 1-4 (40 cal/cm²), dan keselamatan kubikel tegangan menengah.',
    imgAlt: 'Teknisi mengenakan pakaian pelindung Arc Flash Suit lengkap dengan hood 40 cal/cm² bersiap membuka panel listrik',
    related: ['k3-listrik', 'teknisi-k3-listrik', 'keselamatan-tegangan-tinggi', 'inspeksi-panel-listrik'],
    intro: 'Ledakan busur listrik (<em>Arc Flash</em>) adalah salah satu fenomena paling dahsyat di dunia kelistrikan industri. Saat terjadi hubungan singkat di udara terbuka pada panel switchboard atau transformator, suhu udara melonjak hingga 20.000°C (empat kali lebih panas dari permukaan matahari) dalam hitungan milidetik, menghasilkan gelombang kejut ledakan (<em>Arc Blast</em>) yang menghancurkan struktur logam dan membakar fatal pekerja di sekitarnya.',
    hazards: [
      '<strong>Luka Bakar Termal Ekstrem:</strong> Radiasi panas membakar kulit dan melelehkan pakaian sintetik yang menempel ke tubuh.',
      '<strong>Gelombang Kejut Arc Blast:</strong> Tekanan ledakan melempar tubuh pekerja dan serpihan tembaga cair berkecepatan tinggi.',
      '<strong>Kebutaan & Kerusakan Pendengaran:</strong> Kilatan cahaya ultraviolet intensif dan suara ledakan melebihi 140 dB.'
    ],
    regulations: [
      '<strong>Permenaker No. 12 Tahun 2015</strong> tentang K3 Listrik.',
      '<strong>Standar NFPA 70E</strong> (Standard for Electrical Safety in the Workplace).',
      '<strong>Standar IEEE 1584</strong> (Guide for Performing Arc-Flash Hazard Calculations).'
    ],
    modules: [
      {
        name: 'Modul 1: Fisika & Karakteristik Busur Api Listrik',
        theory: 'Faktor pemicu arc flash (debu, serangga, salah ukur, isolasi aus), kalkulasi Incident Energy (cal/cm²).',
        practical: 'Audit label peringatan Arc Flash Hazard pada panel switchboard utama.'
      },
      {
        name: 'Modul 2: Penentuan Zonasi Batas Bahaya (Arc Flash Boundary)',
        theory: 'Prohibited Boundary, Restricted Boundary, Limited Boundary, dan Arc Flash Protection Boundary.',
        practical: 'Penetapan batas perimeter barikade sebelum panel tegangan menengah dibuka.'
      },
      {
        name: 'Modul 3: Pemilihan & Standar APD Arc Flash (PPE Categories)',
        theory: 'Kategori APD Cat 1 (4 cal), Cat 2 (8 cal), Cat 3 (25 cal), Cat 4 (40 cal/cm²), pemeliharaan face shield.',
        practical: 'Praktik penggunaan Arc Flash Suit 40 cal/cm² lengkap dengan balaclava dan sarung tangan isolasi.'
      }
    ],
    equipment: ['Arc Flash Suit Kit 40 cal/cm² (Coat, Bib Overall, Hood with Face Shield).', 'Sarung Tangan Karet Dielektrik Class 2 & 4 dengan Leather Protectors.'],
    participants: ['Teknisi Listrik Gardu Induk, Panel Builder, dan Electrical Safety Engineer.'],
    tableData: {
      headers: ['Kategori APD (PPE Category)', 'Tingkat Energi Insiden (cal/cm²)', 'Kelengkapan Pakaian Wajib', 'Aplikasi Pekerjaan'],
      rows: [
        ['Category 1', '>= 4.0 cal/cm²', 'Kemeja & Celana FR (Flame Resistant), Safety Glasses', 'Panel kontrol tegangan rendah, switching kecil'],
        ['Category 2', '>= 8.0 cal/cm²', 'Kemeja & Celana FR, Face Shield Arc Rated + Balaclava', 'Pemeriksaan panel distribusi 380V/400V terbuka'],
        ['Category 3', '>= 25.0 cal/cm²', 'Arc Flash Suit 25 cal, Hood terintegrasi, sarung tangan isolasi', 'Pengujian breaker cubicle 3.3 kV – 6.6 kV'],
        ['Category 4', '>= 40.0 cal/cm²', 'Heavy Arc Flash Suit 40 cal/cm², Full Hood, ear protection', 'Racking in/out switchgear tegangan menengah 20 kV']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/k3-listrik/', label: 'Pelatihan K3 Listrik' },
      { href: '/kategori-pelatihan/keselamatan-tegangan-tinggi/', label: 'Pelatihan Keselamatan Tegangan Tinggi' }
    ],
    faqs: [
      {
        q: 'Apa perbedaan antara sengatan listrik (Electric Shock) dan Arc Flash?',
        a: 'Electric shock terjadi saat tubuh manusia menjadi bagian dari jalur arus listrik yang mengalir. Sedangkan Arc Flash adalah ledakan energi radiasi panas dan cahaya yang merambat melalui udara di sekitar hubungan singkat listrik tanpa harus menyentuh konduktor secara fisik.'
      }
    ]
  },

  // 39. Keselamatan Tegangan Tinggi
  {
    key: 'keselamatan-tegangan-tinggi',
    title: 'Pelatihan Keselamatan Listrik Tegangan Tinggi: SUTT & SUTET',
    h1: 'Pelatihan Keselamatan Listrik Tegangan Tinggi: Prosedur Kerja Aman Gardu Induk, SUTT 150kV, dan SUTET 500kV',
    meta: 'Pelatihan K3 listrik tegangan tinggi & ekstra tinggi: prosedur switching gardu induk, manuver grounding portable, jarak aman tegangan induksi, dan APD konduktif Faraday suit.',
    imgAlt: 'Teknisi gardu induk menggunakan hot stick isolasi melakukan manuver pemisah grounding pada instalasi 150kV',
    related: ['k3-listrik', 'ahli-k3-listrik', 'arc-flash-safety', 'grounding-dan-lightning-protection'],
    intro: 'Pekerjaan pemeliharaan pada instalasi transmisi dan distribusi listrik Tegangan Menengah (TM 20 kV), Tegangan Tinggi (TT 150 kV), dan Tegangan Ekstra Tinggi (TET 500 kV) memiliki tingkat bahaya mutlak di mana kontak tidak langsung (loncatan bunga api listrik) dapat menyambar tubuh manusia pada jarak beberapa meter.',
    hazards: [
      '<strong>Loncatan Tegangan Flashover (Sparkover):</strong> Arus menyambar melewati celah udara saat mendekati konduktor aktif melewati jarak bebas aman.',
      '<strong>Tegangan Induksi Elektromagnetik:</strong> Saluran transmisi yang sudah dimatikan tetap memiliki tegangan induksi mematikan dari jalur paralel di sebelahnya.',
      '<strong>Kesalahan Urutan Manuver Switching:</strong> Membuka Saklar Pemisah (PMS/Disconnector) saat masih menanggung beban arus aktif.'
    ],
    regulations: [
      '<strong>Permenaker No. 12 Tahun 2015</strong> tentang K3 Listrik.',
      '<strong>Peraturan Direksi PT PLN (Persero)</strong> tentang Standar Operasi Keselamatan Gardu Induk.',
      '<strong>Standar IEEE 516</strong> (Guide for Maintenance Methods on Energized Power Lines).'
    ],
    modules: [
      {
        name: 'Modul 1: Teori Medan Listrik & Jarak Beban Aman (MAD)',
        theory: 'Minimum Approach Distance (MAD), pengaruh kelembaban udara, tegangan flashover pada 20kV, 150kV, 500kV.',
        practical: 'Perhitungan jarak batas aman kerja di sekitar switchyard Gardu Induk.'
      },
      {
        name: 'Modul 2: Pemasangan Portable Grounding Kit Tegangan Tinggi',
        theory: 'Urutan pemasangan: Jepit tanah terlebih dahulu -> Pasang ke fasa dengan Telescopic Hot Stick.',
        practical: 'Praktik pemasangan short-circuit portable grounding pada busbar 20 kV.'
      },
      {
        name: 'Modul 3: Prosedur Standing Order & Manuver Switching',
        theory: 'Urutan baku: Buka PMT (Breaker) -> Buka PMS Busbar -> Buka PMS Line -> Masukkan PMS Tanah.',
        practical: 'Simulasi pembuatan Standing Operation Order (SOO) dan komunikasi radio dispacther.'
      }
    ],
    equipment: ['Telescopic Insulated Hot Stick 33 kV – 150 kV.', 'Portable High Voltage Earth Grounding Set.', 'High Voltage Proximity Detector (Alat Deteksi Tegangan Tinggi Non-Kontak).'],
    participants: ['Teknisi Gardu Induk, Operator Pembangkit Listrik, dan SUTT/SUTET Lineman.'],
    tableData: {
      headers: ['Tegangan Sistem (Fasa-Fasa)', 'Jarak Bebas Minimum Aman (MAD)', 'Peralatan Isolasi Wajib'],
      rows: [
        ['20 kV (Tegangan Menengah)', 'Minimal 1.00 Meter', 'Hot Stick 20 kV + Sarung Tangan Class 2'],
        ['150 kV (Tegangan Tinggi)', 'Minimal 2.00 Meter', 'Hot Stick 150 kV + Grounding Set Terpasang'],
        ['500 kV (Tegangan Ekstra Tinggi)', 'Minimal 4.50 Meter', 'Faraday Suit Konduktif / Bare-Hand Technique']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/k3-listrik/', label: 'Pelatihan K3 Listrik' },
      { href: '/kategori-pelatihan/arc-flash-safety/', label: 'Pelatihan Arc Flash Safety' }
    ],
    faqs: [
      {
        q: 'Mengapa kabel tanah (grounding) harus dipasang ke bumi terlebih dahulu sebelum dikaitkan ke konduktor listrik?',
        a: 'Karena jika kabel dikaitkan ke konduktor terlebih dahulu sementara fasa masih memiliki tegangan sisa/induksi, ujung kabel yang menjuntai akan menjadi konduktor bertegangan aktif yang dapat menyengat teknisi saat hendak menancapkannya ke bumi.'
      }
    ]
  },

  // 40. Inspeksi Panel Listrik
  {
    key: 'inspeksi-panel-listrik',
    title: 'Pelatihan Inspeksi & Thermografi Panel Listrik Industri',
    h1: 'Pelatihan Inspeksi & Thermografi Panel Listrik: Deteksi Dini Hotspot, Pemeliharaan Busbar, dan Audit K3 Panel',
    meta: 'Pelatihan inspeksi panel listrik industri: thermografi infrared, deteksi hotspot sambungan longgar, uji ketahanan isolasi, audit kelayakan IP rating, dan pemeliharaan LVMDP/MCC.',
    imgAlt: 'Inspektur listrik menggunakan kamera thermal imaging inframerah mendeteksi hotspot pada sambungan kabel panel breaker',
    related: ['k3-listrik', 'teknisi-k3-listrik', 'arc-flash-safety', 'lockout-tagout-loto'],
    intro: 'Sambungan kabel yang longgar (<em>loose connection</em>), ketidakseimbangan beban fasa, dan keausan kontak kontaktor menghasilkan panas berlebih (<em>hotspot</em>) di dalam panel distribusi utama (LVMDP) yang tidak terlihat oleh mata telanjang hingga akhirnya membakar panel. Pelatihan Inspeksi &amp; Thermografi Panel Listrik melatih teknisi dalam mendeteksi dan mencegah kegagalan fatal panel sebelum terjadi kebakaran pabrik.',
    hazards: [
      '<strong>Hotspot Sambungan Busbar:</strong> Tahanan kontak tinggi memicu panas di atas 100°C yang melelehkan isolator busbar.',
      '<strong>Ketidakseimbangan Beban Antar Fasa:</strong> Arus netral melonjak tinggi dan memicu panas ekstrem pada kabel netral bersama.',
      '<strong>Akumulasi Debu Konduktif & Kelembaban:</strong> Debu karbon atau uap air di dalam panel memicu flashover dan korsleting antarfasa.'
    ],
    regulations: ['<strong>Permenaker No. 12 Tahun 2015</strong> tentang K3 Listrik.', '<strong>Standar PUIL 2020</strong> dan <strong>NFPA 70B</strong> (Recommended Practice for Electrical Equipment Maintenance).'],
    modules: [
      {
        name: 'Modul 1: Prinsip Radiasi Termal & Kalibrasi Kamera Infrared',
        theory: 'Emisivitas material logam vs plastik, reflected temperature compensation, penafsiran warna palet termal.',
        practical: 'Penyetelan parameter emisivitas pada kamera thermal imaging Fluke / FLIR.'
      },
      {
        name: 'Modul 2: Metodologi Scanning & Kriteria Evaluasi Delta-T (ΔT)',
        theory: 'Standar evaluasi NETA / NFPA 70B: Kenaikan suhu di atas komponen serupa (Delta-T 1-3°C s.d >15°C critical).',
        practical: 'Praktik inspeksi thermal pada panel LVMDP aktif saat beban puncak (peak load).'
      }
    ],
    equipment: ['Thermal Imaging Camera Resolusi Tinggi.', 'Digital Clamp Multimeter True-RMS.', 'Digital Torque Wrench Terisolasi 1000V.'],
    participants: ['Teknisi Listrik, Predictive Maintenance Engineer, dan Supervisor Fasilitas.'],
    tableData: {
      headers: ['Perbedaan Suhu Delta-T (ΔT)', 'Tingkat Keparahan Hotspot', 'Rekomendasi Tindakan'],
      rows: [
        ['1°C – 3°C', 'Kemungkinan Masalah Awal', 'Catat dalam log pemantauan rutin'],
        ['4°C – 15°C', 'Defisiensi Sedang', 'Jadwalkan pengencangan baut pada maintenance shift berikutnya'],
        ['> 15°C', 'KRITIS / BAHAYA EKSTREM', 'Lakukan perbaikan seketika (Immediate Shutdown Repair)']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/k3-listrik/', label: 'Pelatihan K3 Listrik' },
      { href: '/kategori-pelatihan/teknisi-k3-listrik/', label: 'Pelatihan Teknisi K3 Listrik' }
    ],
    faqs: [
      {
        q: 'Kapan waktu terbaik melakukan inspeksi thermografi pada panel listrik?',
        a: 'Inspeksi thermografi wajib dilakukan saat panel listrik sedang beroperasi aktif di bawah beban minimal 40% hingga beban puncak (peak load), karena hotspot akibat resistansi sambungan longgar hanya akan menghasilkan panas saat arus listrik mengalir.'
      }
    ]
  },

  // 41. Grounding & Lightning Protection
  {
    key: 'grounding-dan-lightning-protection',
    title: 'Pelatihan Sistem Grounding & Proteksi Petir Industri',
    h1: 'Pelatihan Sistem Grounding & Proteksi Petir: Perancangan, Pengukuran Tahanan Pembumian, dan Kepatuhan Permenaker No. 2/1989',
    meta: 'Pelatihan grounding & penangkal petir: pengukuran tahanan pembumian <5 Ohm, penangkal petir elektrostatis vs Franklin konvensional, proteksi Surge Arrester, dan audit Permenaker No. 2/1989.',
    imgAlt: 'Teknisi menggunakan earth resistance clamp meter mengukur nilai resistansi batang pembumian grounding rod di luar gedung',
    related: ['k3-listrik', 'ahli-k3-listrik', 'inspeksi-panel-listrik'],
    intro: 'Indonesia berada di wilayah khatulistiwa dengan hari guruh (<em>Isokeraunic Level / IKL</em>) tertinggi di dunia, mencapai lebih dari 200 hari petir per tahun. Sambaran petir langsung maupun induksi gelombang surja (surge) dapat melumpuhkan instalasi instrumentasi elektronik, meledakkan tangki timbun minyak, dan membakar gedung jika sistem terminasi grounding dan penangkal petir tidak terpasang sesuai standar.',
    hazards: [
      '<strong>Sambaran Langsung Menembus Struktur:</strong> Ketiadaan ujung penerima (air terminal) yang memicu kebakaran atap dan dinding beton pecah.',
      '<strong>Lonjakan Arus Surja (Transient Surge Spike):</strong> Sambaran petir merambat melalui kabel power membakar PLC dan server kontrol pabrik.',
      '<strong>Tahanan Pembumian Tinggi (>5 Ohm):</strong> Arus petir gagal diserap tanah dan membalik (side flash) ke instalasi kelistrikan dalam gedung.'
    ],
    regulations: [
      '<strong>Permenaker No. Per.02/MEN/1989</strong> tentang Pengawasan Instalasi Penyalur Petir.',
      '<strong>Standar SNI 03-7015-2004</strong> tentang Sistem Proteksi Petir pada Bangunan.',
      '<strong>Standar IEC 62305</strong> (Protection Against Lightning).'
    ],
    modules: [
      {
        name: 'Modul 1: Karakteristik Sambaran Petir & Metode Proteksi',
        theory: 'Arus puncak petir (hingga 200 kA), metode Sudut Proteksi, Jaring Mesh Faraday, dan Bola Bergulir (Rolling Sphere).',
        practical: 'Perhitungan radius proteksi air terminal pada gedung pabrik bertingkat.'
      },
      {
        name: 'Modul 2: Perancangan & Pengukuran Sistem Grounding',
        theory: 'Elektroda batang (ground rod), pita (grid), pelat, resistivitas tanah, pengaruh zat aditif bentonit.',
        practical: 'Praktik pengukuran tahanan pembumian dengan metode Fall-of-Potential 3 titik dan Clamp-On.'
      }
    ],
    equipment: ['Earth Ground Resistance Tester 3-Pole & Clamp-On.', 'Soil Resistivity Meter (Metode Wenner 4 Titik).'],
    participants: ['Teknisi Grounding, Electrical Engineer, dan Safety Inspector Fasilitas.'],
    tableData: {
      headers: ['Aplikasi Grounding', 'Standar Nilai Tahanan Maksimum', 'Metode Pengukuran Wajib'],
      rows: [
        ['Instalasi Penyalur Petir Gedung', '< 5.0 Ohm (Permenaker 02/1989)', 'Metode 3 Titik (Pasak Bantu 5m & 10m)'],
        ['Panel Distribusi Listrik Industri', '< 5.0 Ohm (PUIL 2020)', 'Earth Resistance Tester berkala tahunan'],
        ['Instrumentasi DCS / Server Sensitif', '< 1.0 Ohm (Standar Vendor)', 'Dedicated Isolated Grounding Rod']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/k3-listrik/', label: 'Pelatihan K3 Listrik' },
      { href: '/kategori-pelatihan/ahli-k3-listrik/', label: 'Pelatihan Ahli K3 Listrik' }
    ],
    faqs: [
      {
        q: 'Berapa frekuensi wajib pemeriksaan instalasi penyalur petir di Indonesia?',
        a: 'Berdasarkan Permenaker No. 2 Tahun 1989, seluruh instalasi penyalur petir wajib diperiksa dan diuji tahanan pembumiannya minimal 1 kali setiap 2 tahun sekali atau setelah terjadi sambaran petir besar oleh Pengawas Ketenagakerjaan / Ahli K3 yang ditunjuk.'
      }
    ]
  },

  // 42. Machine Guarding
  {
    key: 'machine-guarding',
    title: 'Pelatihan Machine Guarding: Pengamanan Mesin & Titik Bahaya Bergerak',
    h1: 'Pelatihan Machine Guarding: Desain Pengaman Mesin, Titik Jepit (Nip Points), dan Interlock Safety',
    meta: 'Pelatihan machine guarding industri: identifikasi titik jepit mekanis (pinch points), perancangan pelindung tetap/interlock, tirai pengaman safety light curtain, dan regulasi Permenaker No. 38/2016.',
    imgAlt: 'Operator pabrik bekerja di depan mesin pres hidrolik yang dilengkapi sensor safety light curtain dan pelindung mekanis transparan',
    related: ['lockout-tagout-loto', 'keselamatan-rotating-equipment', 'k3-pesawat-tenaga-dan-produksi'],
    intro: 'Mesin produksi dengan komponen berputar, pisau pemotong, roda gigi terbuka, dan press hidrolik adalah penyebab utama kecelakaan amputasi tangan dan jari pekerja di industri manufaktur. <strong>Machine Guarding (Pengamanan Mesin)</strong> memastikan titik bahaya mekanikal tertutup secara fisik tanpa menghambat produktivitas kerja.',
    hazards: [
      '<strong>Titik Jepit Roda Berputar (In-Running Nip Points):</strong> Tangan atau pakaian pekerja tergulung masuk ke dalam pertemuan roda gigi atau belt-pulley.',
      '<strong>Amputasi Mesin Stamping / Press:</strong> Tangan operator berada di zona mati saat pisau cetakan mesin press turun.',
      '<strong>Serpihan Material Terlempar (Flywheel Ejection):</strong> Serpihan gram logam atau pecahan mata gerinda terpental mengenai wajah pekerja.'
    ],
    regulations: [
      '<strong>Permenaker No. 38 Tahun 2016</strong> tentang K3 Pesawat Tenaga dan Produksi.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Standar OSHA 29 CFR 1910.212</strong> (General Requirements for All Machines).'
    ],
    modules: [
      {
        name: 'Modul 1: Anatomi Bahaya Mekanikal Mesin Produksi',
        theory: 'Gerakan berputar (rotating), bolak-balik (reciprocating), melintang (transverse), aksi pemotongan, penekanan, penekukan.',
        practical: 'Audit identifikasi titik jepit pada mesin bubut, milling, konveyor, dan mesin stamping press.'
      },
      {
        name: 'Modul 2: Tipe & Perancangan Pelindung Mesin (Guard Types)',
        theory: 'Fixed Guard (Pelindung Tetap), Interlocked Guard, Adjustable Guard, Self-Adjusting Guard.',
        practical: 'Pengukuran jarak aman bukaan jaring pelindung sesuai standar jangkauan jari (OSHA Machine Guarding Table).'
      },
      {
        name: 'Modul 3: Perangkat Keselamatan Elektronik (Safety Devices)',
        theory: 'Safety Light Curtains (Tirai Optik), Dua Tombol Tekan Bersamaan (Two-Hand Control), Safety Mat, Pullback Devices.',
        practical: 'Uji fungsi interlock switch dan respon pemutusan darurat tirai optik saat terhalang tangan.'
      }
    ],
    equipment: ['Safety Light Curtain Optoelectronic System.', 'Machine Guarding Scale Measurement Gauge.', 'Interlock Limit Switch Kit.'],
    participants: ['Mechanical Maintenance Engineer, Safety Officer Manufaktur, dan Operator Mesin Produksi.'],
    tableData: {
      headers: ['Tipe Pengaman Mesin', 'Mekanisme Perlindungan', 'Kelebihan Utama', 'Aplikasi Terbaik'],
      rows: [
        ['Fixed Guard (Tetap)', 'Penghalang fisik permanen dengan baut pengunci', 'Sangat andal, tidak ada suku cadang bergerak', 'Pulley belt, roda gigi, kopling poros'],
        ['Interlocked Guard', 'Membuka pelindung otomatis mematikan daya mesin', 'Akses mudah untuk inspeksi dan penggantian pisau', 'Pintu kabin mesin CNC, mixer bejana'],
        ['Safety Light Curtain', 'Sensor inframerah mematikan mesin saat jalur terpotong', 'Produktivitas tinggi tanpa membuka tutup pintu fisik', 'Mesin Stamping Press, Guillotine Shear']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/lockout-tagout-loto/', label: 'Pelatihan Lockout Tagout' },
      { href: '/kategori-pelatihan/keselamatan-rotating-equipment/', label: 'Pelatihan Rotating Equipment' },
      { href: '/kategori-pelatihan/k3-pesawat-tenaga-dan-produksi/', label: 'Pelatihan Pesawat Tenaga & Produksi' }
    ],
    faqs: [
      {
        q: 'Apa syarat utama sebuah pengaman mesin (machine guard) dinyatakan layak?',
        a: 'Pengaman mesin wajib: (1) Mencegah kontak fisik tubuh pekerja dengan titik bahaya, (2) Terpasang kokoh dan tidak mudah dilepas tanpa alat khusus, (3) Melindungi dari benda jatuh/terlempar, (4) Tidak menciptakan bahaya baru (misal ujung tajam), dan (5) Tidak mengganggu kenyamanan dan laju produktivitas operator.'
      }
    ]
  },

  // 43. Operator Boiler
  {
    key: 'operator-boiler',
    title: 'Pelatihan Operator Boiler: Sertifikasi K3 Bejana Uap Kelas I & II',
    h1: 'Pelatihan Operator Boiler: Standar Operasional Bejana Uap, Uji Safety Valve, dan Sertifikasi K3 Kemnaker',
    meta: 'Pelatihan operator boiler (bejana uap kelas 1 & 2): pemahaman burner combustion, blowdown berkala, uji safety valve, pencegahan ledakan boiler, dan sertifikasi resmi Kemnaker RI.',
    imgAlt: 'Operator boiler memantau pressure gauge dan level gelas penduga air pada bejana uap pipa air industri',
    related: ['inspeksi-bejana-tekan', 'k3-pesawat-tenaga-dan-produksi', 'operator-boiler'],
    intro: 'Ketel uap (<em>boiler</em>) menyimpan energi termal dan tekanan uap raksasa yang jika mengalami kegagalan struktural dapat meledak seperti bom dahsyat yang meratakan bangunan pabrik. Berdasarkan <strong>Permenaker No. 01/MEN/1988</strong>, seluruh operator yang mengendalikan bejana uap wajib memiliki sertifikat kompetensi dan lisensi K3 resmi dari Kementerian Ketenagakerjaan RI.',
    hazards: [
      '<strong>Kekurangan Air Memicu Ledakan (Low Water Explosion):</strong> Air boiler surut di bawah batas aman sehingga pipa terbakar dan meledak saat diisi air dingin mendadak.',
      '<strong>Kegagalan Katup Pengaman (Safety Valve Sticking):</strong> Katup pengaman macet akibat kerak karat saat tekanan uap melampaui batas desain.',
      '<strong>Ledakan Ruang Bakar (Furnace Explosion):</strong> Akumulasi bahan bakar minyak/gas yang tidak terbakar meledak saat pemantik dinyalakan.'
    ],
    regulations: [
      '<strong>Undang-Undang Uap Tahun 1930</strong> (Stoom Ordonnantie).',
      '<strong>Peraturan Uap Tahun 1930</strong> (Stoom Verordening).',
      '<strong>Permenaker No. Per.01/MEN/1988</strong> tentang Kualifikasi dan Syarat-syarat Operator Pesawat Uap.',
      '<strong>Standar ASME Boiler and Pressure Vessel Code (BPVC) Section I</strong>.'
    ],
    modules: [
      {
        name: 'Modul 1: Termodinamika & Karakteristik Bejana Uap',
        theory: 'Boiler pipa api (fire tube) vs pipa air (water tube), siklus pembentukan uap, tekanan kerja vs tekanan desain.',
        practical: 'Audit visual konstruksi boiler, header drum, dan sistem pemipaan uap.'
      },
      {
        name: 'Modul 2: Instrumentasi Pengaman Wajib & Gelas Penduga',
        theory: 'Safety Valve, Pressure Gauge dengan tanda merah, Gelas Penduga Air (Water Level Gauge), Keran Uji Coba.',
        practical: 'Praktik pembersihan (blowing) gelas penduga air dan verifikasi level air aktual.'
      },
      {
        name: 'Modul 3: Pengolahan Air Umpan (Water Treatment) & Blowdown',
        theory: 'Pencegahan kerak silika dan korosi dissolved oxygen, deaerator, dosing kimia antikerak, SOP continuous & bottom blowdown.',
        practical: 'Uji kualitas air boiler (pH, TDS, hardness) dan pelaksanaan blowdown harian.'
      },
      {
        name: 'Modul 4: Prosedur Start-Up, Firing & Emergency Shutdown',
        theory: 'Purging ruang bakar, pemanasan bertahap (warm-up rate), penanganan low water alarm, tindakan saat blackout.',
        practical: 'Drill tanggap darurat saat alarm level air rendah berbunyi nyaring.'
      }
    ],
    equipment: ['Unit Boiler Industri Fire Tube / Water Tube.', 'Pressure Gauge Tester Terkalibrasi.', 'Water Quality Test Kit (pH, TDS, Hardness).'],
    participants: ['Operator Boiler Pabrik Sawit, Makanan, Tekstil, Pembangkit Listrik, dan Rumah Sakit.'],
    tableData: {
      headers: ['Kelas Operator Boiler', 'Kapasitas Uap yang Berhak Dioperasikan', 'Persyaratan Pendidikan Minimal', 'Masa Berlaku Lisensi SIO'],
      rows: [
        ['Operator Boiler Kelas II', 'Kapasitas Uap <= 10 Ton/Jam', 'Min. SLTA / SMK Sederajat', '5 Tahun (Kemnaker RI)'],
        ['Operator Boiler Kelas I', 'Kapasitas Uap > 10 Ton/Jam (Tanpa Batas)', 'Min. D3 / S1 Teknik atau Kelas II Pengalaman 2 Th', '5 Tahun (Kemnaker RI)']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/inspeksi-bejana-tekan/', label: 'Pelatihan Inspeksi Bejana Tekan' },
      { href: '/kategori-pelatihan/k3-pesawat-tenaga-dan-produksi/', label: 'Pelatihan Pesawat Tenaga & Produksi' }
    ],
    faqs: [
      {
        q: 'Apa tindakan pertama operator boiler jika level air hilang dari gelas penduga (Low Water Condition)?',
        a: 'Dilarang keras langsung memompakan air dingin ke dalam boiler panas! Operator wajib segera mematikan api burner (fuel cutoff), menutup keran uap utama, dan membiarkan boiler dingin secara bertahap untuk mencegah thermal shock explosion.'
      }
    ]
  },

  // 44. Inspeksi Bejana Tekan
  {
    key: 'inspeksi-bejana-tekan',
    title: 'Pelatihan Inspeksi Bejana Tekan & Tangki Timbun: Standar ASME & API',
    h1: 'Pelatihan Inspeksi Bejana Tekan: Uji Hidrostatis, Uji NDT Thickness, dan Kepatuhan Standar ASME Section VIII',
    meta: 'Pelatihan inspeksi bejana tekan & tangki timbun: uji ketebalan ultrasonik (UT), uji hidrostatis (hydrotest), inspeksi safety relief valve, dan standar Permenaker No. 37/2016.',
    imgAlt: 'Inspector bejana tekan melakukan pengujian ketebalan dinding pelat tangki bejana tekan menggunakan ultrasonic thickness meter',
    related: ['operator-boiler', 'k3-pesawat-tenaga-dan-produksi', 'welding-safety'],
    intro: 'Bejana tekan (<em>pressure vessel</em>), tangki penampung udara bertekanan (air receiver tank), reaktor kimia, dan tangki timbun bahan bakar menyimpan potensi bahaya letupan energi pneumatik yang masif. Pelatihan ini membekali teknisi dan inspector dengan metodologi audit kelayakan struktural mengacu pada standar <strong>ASME Section VIII Div 1 &amp; Permenaker No. 37 Tahun 2016</strong>.',
    hazards: [
      '<strong>Pelemahan Dinding Akibat Korosi (Corrosion Thinning):</strong> Ketebalan pelat menipis di bawah Maximum Allowable Working Pressure (MAWP).',
      '<strong>Retak Sambungan Las (Weld Seam Cracking):</strong> Cacat las fusi yang memicu perambatan retak lelah (fatigue failure).',
      '<strong>Overpressure Explosion:</strong> Kegagalan Pressure Safety Valve (PSV) saat tekanan proses melonjak drastis.'
    ],
    regulations: [
      '<strong>Permenaker No. 37 Tahun 2016</strong> tentang K3 Bejana Tekanan dan Tangki Timbun.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Standar ASME Section VIII Div 1</strong> dan <strong>API 510</strong> (Pressure Vessel Inspection Code).'
    ],
    modules: [
      {
        name: 'Modul 1: Anatomi Konstruksi & Perhitungan MAWP',
        theory: 'Desain shell silindris, torispherical/ellipsoidal head, faktor efisiensi sambungan las (E), laju korosi tahunan.',
        practical: 'Kalkulasi sisa masa pakai (Remaining Life Assessment) bejana tekan.'
      },
      {
        name: 'Modul 2: Uji Tak Merusak (Non-Destructive Testing / NDT)',
        theory: 'Prinsip Ultrasonic Thickness Gauge, Magnetic Particle Inspection (MPI), Dye Penetrant Testing (PT).',
        practical: 'Praktik pengukuran ketebalan dinding pelat bejana tekan pada 8 titik grid kritis.'
      },
      {
        name: 'Modul 3: Prosedur Uji Tekan Hidrostatis (Hydrostatic Test)',
        theory: 'Tekanan uji 1.3x s.d 1.5x MAWP, pengisian air bebas udara (venting), waktu penahanan (holding time 30 menit).',
        practical: 'Simulasi hydrotest tangki kompresor udara dan pemantauan pressure drop.'
      }
    ],
    equipment: ['Ultrasonic Thickness Gauge Digital Terkalibrasi.', 'Dye Penetrant Spray Kit dan Hydrostatic Test Pump Unit.'],
    participants: ['Inspector Bejana Tekan, QA/QC Engineer, dan Maintenance Superintendent.'],
    tableData: {
      headers: ['Jenis Bejana Tekan', 'Tekanan Uji Hydrotest Standar', 'Holding Time', 'Kriteria Kelulusan'],
      rows: [
        ['Air Receiver Tank Kompresor', '1.3x s.d 1.5x MAWP', 'Minimal 30 Menit', 'Tidak ada kebocoran, rembesan, atau deformasi permanen'],
        ['Tangki Timbun Tekanan Rendah', '1.25x Tekanan Desain', 'Minimal 60 Menit', 'Pressure gauge stabil tanpa penurunan tekanan'],
        ['Bejana Reaktor Kimia', 'Sesuai ASME Sec VIII Div 1', 'Minimal 45 Menit', 'Lolos verifikasi NDT pasca hydrotest']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/operator-boiler/', label: 'Pelatihan Operator Boiler' },
      { href: '/kategori-pelatihan/k3-pesawat-tenaga-dan-produksi/', label: 'Pelatihan Pesawat Tenaga & Produksi' }
    ],
    faqs: [
      {
        q: 'Mengapa uji tekan bejana tekan wajib menggunakan media air (hidrostatis) dan bukan udara (pneumatik)?',
        a: 'Air adalah cairan yang tidak dapat dimampatkan (incompressible), sehingga jika terjadi kebocoran atau retakan saat pengujian, energi tekanan akan turun seketika tanpa menimbulkan ledakan. Sebaliknya, udara bertekanan menyimpan energi kompresi raksasa yang dapat meledak dahsyat (shrapnel explosion) jika dinding bejana pecah.'
      }
    ]
  },

  // 45. Keselamatan Rotating Equipment
  {
    key: 'keselamatan-rotating-equipment',
    title: 'Pelatihan Keselamatan Rotating Equipment: Pompa, Kompresor & Turbin',
    h1: 'Pelatihan Keselamatan Rotating Equipment: Analisis Getaran, Alignment Poros, dan Mitigasi Bahaya Mesin Berputar',
    meta: 'Pelatihan keselamatan rotating equipment: inspeksi getaran (vibration analysis), alignment poros laser, sistem pelumasan bearing, dan pencegahan kegagalan mekanikal.',
    imgAlt: 'Teknisi mekanik menggunakan alat laser shaft alignment mengatur kelurusan poros motor dan pompa industri',
    related: ['machine-guarding', 'lockout-tagout-loto', 'k3-pesawat-tenaga-dan-produksi'],
    intro: 'Mesin-mesin berputar (<em>rotating equipment</em>) berkecepatan tinggi seperti turbin uap, kompresor sentrifugal, pompa multitahap, dan blower industri memutar massa puluhan ton pada ribuan putaran per menit (RPM). Kegagalan mekanikal seketika akibat getaran tinggi atau misalignment dapat menghancurkan bearing dan melempar bilah sudu yang membahayakan nyawa teknisi di sekitarnya.',
    hazards: [
      '<strong>Ketidaklurusan Poros (Shaft Misalignment):</strong> Menghasilkan gaya radial berlebih yang menghancurkan bantalan bearing dan kopling.',
      '<strong>Kegagalan Sudu Turbin (Blade Failure):</strong> Bilah turbin terlepas akibat erosi atau getaran resonansi memicu disintegrasi casing.',
      '<strong>Kebocoran Seal Fluida Beracun/Mudah Terbakar:</strong> Mechanical seal aus menyemburkan uap hidrokarbon panas.'
    ],
    regulations: ['<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.', '<strong>Standar ISO 10816</strong> (Mechanical Vibration - Evaluation of Machine Vibration).'],
    modules: [
      {
        name: 'Modul 1: Dinamika Mesin Berputar & Analisis Getaran (Vibration Analysis)',
        theory: 'Parameter getaran (Velocity, Acceleration, Displacement), spektrum FFT, identifikasi unbalance vs misalignment.',
        practical: 'Pengukuran getaran menyeluruh pada motor-pompa 30 kW menggunakan vibration pen tester.'
      },
      {
        name: 'Modul 2: Presisi Penyelarasan Poros (Laser Shaft Alignment)',
        theory: 'Offset misalignment, angular misalignment, thermal growth compensation, toleransi alignment standar rim & face.',
        practical: 'Praktik alignment motor-pompa menggunakan sistem laser alignment presisi 0.01 mm.'
      }
    ],
    equipment: ['Digital Vibration Analyzer & Tester.', 'Laser Shaft Alignment Kit.', 'Stroboscope Tachometer.'],
    participants: ['Rotating Equipment Engineer, Millwright Mechanic, dan Reliability Engineer.'],
    tableData: {
      headers: ['Zona Getaran ISO 10816', 'Kecepatan Getaran (mm/s RMS)', 'Status Kondisi Mesin', 'Tindakan'],
      rows: [
        ['Zone A', '< 1.8 mm/s', 'Mesin Baru / Sangat Prima', 'Operasi normal berkelanjutan'],
        ['Zone B', '1.8 – 4.5 mm/s', 'Kondisi Baik / Dapat Diterima', 'Lanjutkan operasi dengan pemantauan rutin'],
        ['Zone C', '4.5 – 11.2 mm/s', 'Kondisi Waspada / Tidak Memuaskan', 'Jadwalkan perbaikan pada kesempatan pertama'],
        ['Zone D', '> 11.2 mm/s', 'KRITIS / KERUSAKAN MASIF', 'Hentikan mesin segera untuk investigasi']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/machine-guarding/', label: 'Pelatihan Machine Guarding' },
      { href: '/kategori-pelatihan/lockout-tagout-loto/', label: 'Pelatihan Lockout Tagout' }
    ],
    faqs: [
      {
        q: 'Apa penyebab paling umum getaran abnormal tinggi pada pompa sentrifugal?',
        a: 'Penyebab paling umum adalah ketidaklurusan poros (shaft misalignment), kavitasi fluida di dalam impeller, ketidakseimbangan rotor (unbalance), dan keausan elemen bantalan bola (bearing wear).'
      }
    ]
  },

  // 46. Welding Safety
  {
    key: 'welding-safety',
    title: 'Pelatihan Welding Safety: Keselamatan Pengelasan & Fabrikasi',
    h1: 'Pelatihan Welding Safety: Proteksi Radiasi Busur Las, Pengendalian Asap Logam (Welding Fumes), dan K3 Pengelasan',
    meta: 'Pelatihan keselamatan pengelasan (SMAW, GTAW, GMAW): proteksi radiasi sinar UV/IR, ventilasi asap las beracun (hexavalent chromium), APD welder, dan regulasi Permenaker No. 02/1982.',
    imgAlt: 'Welder profesional mengenakan auto-darkening welding helmet dan apron kulit tebal sedang melakukan pengelasan pipa baja',
    related: ['hot-work-safety', 'fire-watch', 'permit-to-work'],
    intro: 'Pekerjaan pengelasan dan fabrikasi logam memaparkan welder pada kombinasi bahaya ekstrem: radiasi sinar ultraviolet (UV) intensitas tinggi, paparan asap logam beracun (<em>welding fumes</em>) yang bersifat karsinogenik, sengatan arus listrik busur las, serta risiko kebakaran dan ledakan tabung gas bertekanan.',
    hazards: [
      '<strong>Kerusakan Kornea Mata (Arc Eye / Welder\'s Flash):</strong> Radiasi sinar UV intens membakar sel epitel kornea mata dalam hitungan detik.',
      '<strong>Penyakit Paru Kerja (Metal Fume Fever):</strong> Menghirup asap seng (zinc), tembaga, atau kromium heksavalen (Cr-VI) dari pengelasan stainless steel.',
      '<strong>Sengatan Arus Pengelasan:</strong> Mengganti kawat elektroda dalam kondisi sarung tangan basah kuyup oleh keringat.'
    ],
    regulations: [
      '<strong>Permenaker No. Per.02/MEN/1982</strong> tentang Kualifikasi Juru Las di Tempat Kerja.',
      '<strong>Permenaker No. 5 Tahun 2018</strong> tentang K3 Lingkungan Kerja (NAB Asap Pengelasan).',
      '<strong>Standar ANSI Z49.1</strong> (Safety in Welding, Cutting, and Allied Processes).'
    ],
    modules: [
      {
        name: 'Modul 1: Toksikologi Asap Pengelasan & Ventilasi Khusus',
        theory: 'Bahaya partikel logam berat (Cr-VI, Manganese, Nickel, Asbes), sistem ventilasi buang lokal (Local Exhaust Ventilation / LEV).',
        practical: 'Pengaturan posisi suction hood LEV tepat pada jarak 15-20 cm di atas titik pengelasan.'
      },
      {
        name: 'Modul 2: Proteksi Radiasi Optik & Pemilihan Shading Kaca Las',
        theory: 'Spektrum UV-A, UV-B, UV-C, inframerah, tabel tingkat kegelapan kaca filter (Shade Number 9-13).',
        practical: 'Uji respons sensor Auto-Darkening Filter (ADF) helmet pada berbagai intensitas ampere.'
      }
    ],
    equipment: ['Auto-Darkening Welding Helmet DIN 9-13.', 'PAPR (Powered Air-Purifying Respirator) Khusus Pengelasan.', 'Welding Fume Extractor Portabel.'],
    participants: ['Juru Las (Welder), Fitter Struktur, Fabrikator, dan Safety Inspector Pengelasan.'],
    tableData: {
      headers: ['Proses Pengelasan', 'Arus Kerja Las (Ampere)', 'Tingkat Shading Lensa Helm Las (Shade No.)'],
      rows: [
        ['SMAW (Las Listrik Elektroda)', '< 60 Ampere', 'Shade 7 – 8'],
        ['SMAW (Las Listrik Elektroda)', '60 – 160 Ampere', 'Shade 10'],
        ['SMAW / GMAW (MIG)', '160 – 250 Ampere', 'Shade 11 – 12'],
        ['GTAW (TIG) / Busur Karbon', '> 250 Ampere', 'Shade 12 – 14 (Paling Gelap)']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/hot-work-safety/', label: 'Pelatihan Hot Work Safety' },
      { href: '/kategori-pelatihan/fire-watch/', label: 'Pelatihan Petugas Fire Watch' }
    ],
    faqs: [
      {
        q: 'Apa gejala dari paparan Arc Eye (Welder\'s Flash) dan kapan gejala tersebut muncul?',
        a: 'Arc eye adalah luka bakar kornea akibat sinar UV las. Gejalanya meliputi mata sangat perih seperti kemasukan pasir tajam, mata merah berair pekat, dan sangat sensitif terhadap cahaya. Gejala biasanya baru terasa 6 hingga 12 jam setelah terpapar.'
      }
    ]
  },

  // 47. K3 Pesawat Tenaga dan Produksi
  {
    key: 'k3-pesawat-tenaga-dan-produksi',
    title: 'Pelatihan K3 Pesawat Tenaga dan Produksi: Permenaker No. 38/2016',
    h1: 'Pelatihan K3 Pesawat Tenaga dan Produksi: Standar Pengawasan Mesin Penggerak, Transmisi, dan Mesin Perkakas Produksi',
    meta: 'Pelatihan K3 pesawat tenaga & produksi resmi Kemnaker: pemahaman regulasi Permenaker No. 38/2016, riksa uji mesin pembangkit, mesin perkakas, dan perlindungan operator.',
    imgAlt: 'Inspector K3 memeriksa kelengkapan pelindung transmisi sabuk dan tombol emergency stop pada mesin bubut industri',
    related: ['machine-guarding', 'lockout-tagout-loto', 'operator-boiler'],
    intro: '<strong>Pesawat Tenaga dan Produksi (PTP)</strong> mencakup mesin penggerak mula (genset, motor diesel), mesin transmisi tenaga mekanik (gearbox, kopling), mesin perkakas (bubut, frais, grinding), serta mesin produksi (press, roll, mixer). Pelatihan ini membedah regulasi <strong>Permenaker No. 38 Tahun 2016</strong> guna memastikan seluruh peralatan memiliki Surat Izin Kelayakan Operasi (SILO) resmi.',
    hazards: [
      '<strong>Pecahnya Batu Gerinda (Wheel Shattering):</strong> Mengoperasikan mata gerinda melebihi batas Maximum Operating Speed (RPM).',
      '<strong>Gaya Sentrifugal Mesin Press:</strong> Bagian penekan mesin stamping menghancurkan tangan pekerja akibat ketiadaan dual-control interlock.',
      '<strong>Kebisingan & Getaran Berlebih:</strong> Paparan bising mesin genset/turbin di atas 85 dB tanpa peredaman akustik.'
    ],
    regulations: ['<strong>Permenaker No. 38 Tahun 2016</strong> tentang K3 Pesawat Tenaga dan Produksi.', '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'],
    modules: [
      {
        name: 'Modul 1: Klasifikasi & Standar Legal Pesawat Tenaga Produksi',
        theory: 'Penggerak mula, mesin transmisi mekanik, mesin perkakas, mesin produksi, perizinan pengesahan pemakaian Disnaker.',
        practical: 'Audit kelengkapan pelat nama spesifikasi teknis dan izin operasional mesin pabrik.'
      },
      {
        name: 'Modul 2: Riksa Uji Teknis & Verifikasi Safety Devices',
        theory: 'Uji fungsi emergency stop button, safety brake motor, governor kecepatan, pengaman overload mekanik.',
        practical: 'Pengujian waktu henti putaran spindel mesin bubut saat tombol darurat ditekan.'
      }
    ],
    equipment: ['Digital Tachometer Non-Kontak.', 'Sound Level Meter Kelas 1.', 'Formulir Checklist Riksa Uji PTP Permenaker 38/2016.'],
    participants: ['Supervisor Produksi, Maintenance Engineer, Safety Officer Manufaktur, dan Teknisi Fabrikasi.'],
    tableData: {
      headers: ['Klasifikasi Pesawat PTP', 'Contoh Peralatan Pabrik', 'Syarat Pengaman Wajib', 'Periode Uji Berkala'],
      rows: [
        ['Penggerak Mula', 'Genset Diesel, Turbin Gas/Air', 'Governor kecepatan, pelindung flywheel, exhaust silencer', '1 Kali setiap 1 Tahun'],
        ['Transmisi Tenaga Mekanik', 'Belt-Pulley, Rantai Sprocket, Gearbox', 'Full Enclosed Guarding dari kawat/pelat baja', '1 Kali setiap 1 Tahun'],
        ['Mesin Perkakas & Produksi', 'Mesin Press, Bubut, CNC, Mesin Roll', 'Two-Hand Control, Emergency Stop, Safety Light Curtain', '1 Kali setiap 1 Tahun']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/machine-guarding/', label: 'Pelatihan Machine Guarding' },
      { href: '/kategori-pelatihan/lockout-tagout-loto/', label: 'Pelatihan Lockout Tagout' }
    ],
    faqs: [
      {
        q: 'Kapan pengesahan pemakaian (Surat Izin Laik Operasi - SILO) Pesawat Tenaga dan Produksi wajib diperiksa ulang?',
        a: 'Berdasarkan Permenaker No. 38 Tahun 2016, pemeriksaan dan pengujian berkala terhadap Pesawat Tenaga dan Produksi wajib dilakukan minimal 1 (satu) tahun sekali oleh Pengawas Ketenagakerjaan / Ahli K3 Spesialis PTP.'
      }
    ]
  },

  // 48. Ergonomi Industri
  {
    key: 'ergonomi-industri',
    title: 'Pelatihan Ergonomi Industri: Pencegahan Gangguan Otot Tulang Rangka (MSDs)',
    h1: 'Pelatihan Ergonomi Industri: Penilaian Postur Kerja (REBA/RULA), Manual Material Handling, dan Pencegahan Cedera Tulang Belakang',
    meta: 'Pelatihan ergonomi industri: penilaian postur kerja metode REBA/RULA, standar pengangkatan manual NIOSH Lifting Equation, desain stasiun kerja ergonomis, dan Permenaker No. 5/2018.',
    imgAlt: 'Pekerja pabrik perakitan mempraktikkan teknik pengangkatan boks beban secara ergonomis dengan menekuk lutut dan menjaga punggung lurus',
    related: ['keselamatan-alat-berat', 'operator-forklift'],
    intro: 'Gangguan Otot Tulang Rangka Akibat Kerja (<em>Musculoskeletal Disorders / MSDs</em>)—seperti nyeri pinggang bawah (Low Back Pain), Carpal Tunnel Syndrome, dan cedera saraf leher—merupakan penyumbang angka absensi sakit (<em>sick leave</em>) dan penurunan produktivitas tertinggi di lini produksi, pergudangan, dan perkantoran.',
    hazards: [
      '<strong>Teknik Pengangkatan Membungkuk (Spine Shear Strain):</strong> Mengangkat beban berat dengan posisi punggung melengkung memicu herniasi diskus tulang belakang (syaraf kejepit).',
      '<strong>Gerakan Berulang Frekuensi Tinggi (Repetitive Strain Injury):</strong> Gerakan memutar pergelangan tangan ratusan kali per jam di lini perakitan.',
      '<strong>Postur Statis Berkepanjangan:</strong> Berdiri atau duduk statis lebih dari 4 jam tanpa penopang ergonomis.'
    ],
    regulations: [
      '<strong>Permenaker No. 5 Tahun 2018</strong> tentang K3 Lingkungan Kerja (Standar Faktor Ergonomi).',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Standar NIOSH Manual Material Handling Lifting Equation</strong>.'
    ],
    modules: [
      {
        name: 'Modul 1: Fisiologi Tulang Belakang & Biomekanika Kerja',
        theory: 'Struktur diskus intervertebralis, kalkulasi momen gaya angkat pada vertebra L5/S1, batas beban angkat aman (maks 15-25 kg).',
        practical: 'Praktik teknik pengangkatan manual 4 langkah (Kaki terbuka -> Tekuk lutut -> Dekatkan beban -> Angkat dengan otot paha).'
      },
      {
        name: 'Modul 2: Metode Penilaian Postur Kerja (RULA & REBA Assessment)',
        theory: 'Rapid Upper Limb Assessment (RULA) untuk pekerjaan duduk/tangan dan Rapid Entire Body Assessment (REBA) untuk postur seluruh tubuh.',
        practical: 'Analisis skor video gerakan operator lini perakitan menggunakan lembar kerja REBA/RULA.'
      }
    ],
    equipment: ['Goniometer Digital (Pengukur Sudut Sendi).', 'Push-Pull Force Dynamometer.', 'Software Analisis Ergonomi REBA/RULA/NIOSH.'],
    participants: ['Industrial Engineer, Safety Officer, Dokter Perusahaan / Paramedis Pabrik, dan HR Manager.'],
    tableData: {
      headers: ['Skor Akhir REBA', 'Tingkat Risiko Ergonomi', 'Tindakan yang Diperlukan'],
      rows: [
        ['Skor 1', 'Dapat Diabaikan (Negligible)', 'Tidak diperlukan tindakan perubahan'],
        ['Skor 2 – 3', 'Risiko Rendah (Low Risk)', 'Mungkin diperlukan perbaikan kecil pada stasiun kerja'],
        ['Skor 4 – 7', 'Risiko Sedang (Medium Risk)', 'Wajib dilakukan investigasi dan rekayasa ulang ergonomi'],
        ['Skor 8 – 10', 'Risiko Tinggi (High Risk)', 'Lakukan rekayasa perubahan stasiun kerja secepatnya'],
        ['Skor 11 – 15', 'SANGAT TINGGI (Very High Risk)', 'HENTIKAN atau ubah metode kerja sekarang juga']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/keselamatan-alat-berat/', label: 'Pelatihan Keselamatan Alat Berat' }
    ],
    faqs: [
      {
        q: 'Berapa batas berat maksimum beban yang boleh diangkat manual oleh satu orang pria dewasa di tempat kerja?',
        a: 'Berdasarkan standar Permenaker No. 5 Tahun 2018 dan rekomendasi NIOSH, batas beban angkat manual maksimum yang ideal untuk pria dewasa di kondisi prima adalah 25 kg, sedangkan untuk wanita adalah 15 kg dalam posisi dekat tubuh tanpa putaran pinggang.'
      }
    ]
  },

  // 49. Fire Fighting Dasar
  {
    key: 'fire-fighting-dasar',
    title: 'Pelatihan Fire Fighting Dasar: Penanggulangan Kebakaran Tingkat D',
    h1: 'Pelatihan Fire Fighting Dasar: Teori Segitiga Api, Penggunaan APAR, Karung Basah, dan Pemadaman Api Awal',
    meta: 'Pelatihan fire fighting dasar (K3 Kebakaran Kelas D): teori bidang empat api, teknik PASS APAR, pemadaman api gas LPG, dan simulasi penanggulangan kebakaran pabrik.',
    imgAlt: 'Peserta pelatihan memadamkan kobaran api drum menggunakan APAR dry chemical powder dengan teknik menyapu searah angin',
    related: ['petugas-peran-kebakaran', 'penggunaan-apar', 'hydrant-dan-sprinkler', 'emergency-response-team'],
    intro: 'Kebakaran industri bermula dari api kecil yang tidak tertangani dalam kurun waktu 3 hingga 5 menit awal sebelum mencapai fase <em>flashover</em>. Pelatihan <strong>Fire Fighting Dasar (K3 Kebakaran Kelas D Kemnaker)</strong> membekali setiap karyawan lini depan dengan naluri cepat dan keberanian taktis dalam memadamkan kobaran api awal menggunakan sarana APAR dan metode tradisional tanpa panik.',
    hazards: [
      '<strong>Memadamkan Api Melawan Arah Angin:</strong> Asap pekat dan jilatan lidah api menyembur balik ke wajah personel pemadam.',
      '<strong>Salah Memilih Media Pemadam Api:</strong> Menyiramkan air ke tumpukan minyak mendidih (Class B) yang memicu ledakan bola api (boilover).',
      '<strong>Panik dan Melarikan Diri Tanpa Membunyikan Alarm:</strong> Membiarkan api kecil membesar membakar seluruh area pabrik.'
    ],
    regulations: [
      '<strong>Kepmenaker No. Kep.186/MEN/1999</strong> tentang Unit Penanggulangan Kebakaran di Tempat Kerja.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Standar NFPA 10</strong> (Standard for Portable Fire Extinguishers).'
    ],
    modules: [
      {
        name: 'Modul 1: Fenomena Api & Klasifikasi Kebakaran',
        theory: 'Prinsip Tetrahedron of Fire (Bahan Bakar, Panas, Oksigen, Rantai Reaksi Kimia), Klasifikasi Kelas A, B, C, D, K.',
        practical: 'Audit visual kesiapan sarana pemadam api di lingkungan fasilitas kerja.'
      },
      {
        name: 'Modul 2: Teknik Pemadaman Tradisional (Smothering Method)',
        theory: 'Prinsip eliminasi oksigen menggunakan selimut tahan api dan karung goni basah pada kebakaran wajan dapur/LPG.',
        practical: 'Praktik langsung menutup kobaran api drum menggunakan karung basah tanpa ragu.'
      },
      {
        name: 'Modul 3: Pengoperasian APAR Modern (PASS Technique)',
        theory: 'Pull pin -> Aim nozzle -> Squeeze lever -> Sweep side to side. Jarak aman 2–3 meter di atas angin (windward).',
        practical: 'Live fire drill pemadaman kobaran api solar dan bensin menggunakan APAR Powder & CO2.'
      }
    ],
    equipment: ['APAR Dry Chemical Powder 6 kg dan APAR CO2 5 kg.', 'Karung Goni Basah dan Fire Blanket.', 'Drum Simulasi Kebakaran Bahan Bakar Cair & Gas LPG.'],
    participants: ['Seluruh Karyawan, Operator Pabrik, Security, dan Petugas Fire Warden.'],
    tableData: {
      headers: ['Metode Pemadaman', 'Prinsip Dasar Aksi', 'Contoh Sarana yang Digunakan'],
      rows: [
        ['Smothering (Isolasi Oksigen)', 'Menutup kontak udara bebas sehingga kadar O2 turun di bawah 15%', 'Karung basah, Fire Blanket, Gas CO2'],
        ['Cooling (Pendinginan)', 'Menurunkan suhu bahan bakar di bawah titik nyala (flash point)', 'Semprotan air (water spray / fog)'],
        ['Starvation (Pemisahan Bahan)', 'Memutuskan suplai bahan bakar yang dapat terbakar', 'Menutup katup gas LPG, membuat sekat bakar'],
        ['Inhibition (Pemutusan Rantai)', 'Mematikan radikal bebas kimiawi pembakaran', 'Media Dry Chemical Powder & Clean Agent']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/petugas-peran-kebakaran/', label: 'Pelatihan Petugas Peran Kebakaran' },
      { href: '/kategori-pelatihan/penggunaan-apar/', label: 'Pelatihan Penggunaan APAR' },
      { href: '/kategori-pelatihan/hydrant-dan-sprinkler/', label: 'Pelatihan Hydrant & Sprinkler' }
    ],
    faqs: [
      {
        q: 'Apa yang dimaksud dengan arah berdiri di atas angin (Windward) saat memadamkan api?',
        a: 'Berdiri di atas angin berarti posisi badan pemadam berada di belakang asal tiupan angin yang mengarah ke kobaran api, sehingga asap dan hawa panas tertiup menjauh dari tubuh pemadam.'
      }
    ]
  },

  // 50. Petugas Peran Kebakaran
  {
    key: 'petugas-peran-kebakaran',
    title: 'Pelatihan Petugas Peran Kebakaran: Sertifikasi K3 Kebakaran Kelas D',
    h1: 'Pelatihan Petugas Peran Kebakaran: Manajemen Pencegahan, Patroli Bahaya Api, dan Sertifikasi Kelas D Kemnaker',
    meta: 'Pelatihan Petugas Peran Kebakaran resmi Kemnaker RI (Kelas D): tugas fire warden gedung, patroli jalur evakuasi, inspeksi rutin APAR, dan koordinasi pemadaman awal.',
    imgAlt: 'Petugas peran kebakaran memeriksa jarum manometer tekanan APAR dan mencatat kartu inspeksi bulanan di lorong pabrik',
    related: ['fire-fighting-dasar', 'regu-pemadam-kebakaran', 'penggunaan-apar', 'simulasi-evakuasi-gedung'],
    intro: 'Berdasarkan <strong>Kepmenaker No. 186/MEN/1999</strong>, setiap tempat kerja dengan jumlah tenaga kerja 25 orang atau lebih wajib menunjuk <strong>Petugas Peran Kebakaran (K3 Kebakaran Tingkat D)</strong> dengan rasio minimal 2 orang untuk setiap 25 orang pekerja. Petugas ini bertindak sebagai garda terdepan pencegahan kebakaran dan pemandu evakuasi darurat di unit kerjanya.',
    hazards: [
      '<strong>Jalur Evakuasi Darurat Terkunci/Terhalang:</strong> Pintu darurat ditumpuk kardus barang atau digembok saat jam kerja.',
      '<strong>APAR Rusak Tidak Terpantau:</strong> APAR macet atau menggumpal karena tidak pernah diinspeksi bulanan.',
      '<strong>Pekerja Menggunakan Lift Saat Kebakaran:</strong> Pekerja panik masuk ke lift yang dapat mati macet akibat pemadaman listrik darurat.'
    ],
    regulations: ['<strong>Kepmenaker No. 186/MEN/1999</strong> tentang Unit Penanggulangan Kebakaran di Tempat Kerja.', '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'],
    modules: [
      {
        name: 'Modul 1: Regulasi & Peran Strategis Petugas Kebakaran Kelas D',
        theory: 'Struktur organisasi tanggap darurat, rasio jumlah petugas, wewenang pemadaman awal dan panduan evakuasi.',
        practical: 'Audit kelayakan sarana jalur evakuasi dan rambu EXIT di area kerja.'
      },
      {
        name: 'Modul 2: Prosedur Inspeksi & Checklist Sarana Proteksi Kebakaran',
        theory: 'Checklist bulanan APAR, break glass alarm, lampu emergency, pintu darurat tahan api (fire door).',
        practical: 'Simulasi audit fisik 10 titik APAR dan pengisian kartu kendali riksa.'
      }
    ],
    equipment: ['Master Checklist Riksa APAR & Jalur Evakuasi.', 'Megaphone Evakuasi dan Rompi Khusus Floor Warden.'],
    participants: ['Petugas Floor Warden Gedung, Security, Supervisor Area, dan Anggota K3.'],
    tableData: {
      headers: ['Tingkat Sertifikasi Kebakaran', 'Tanggung Jawab Utama', 'Rasio Kebutuhan Personel'],
      rows: [
        ['Kelas D (Petugas Peran)', 'Patroli pencegahan, inspeksi APAR, pemadaman awal, pemandu evakuasi', 'Minimal 2 orang per 25 orang pekerja'],
        ['Kelas C (Regu Pemadam)', 'Pemadaman lanjutan dengan Hydrant dan formasi regu pemadam', 'Minimal 2 orang per kelompok 20-50 pekerja'],
        ['Kelas B (Koordinator)', 'Memimpin regu pemadam kebakaran, perancangan fire plan', 'Minimal 1 orang per unit kerja'],
        ['Kelas A (Ahli K3 Kebakaran)', 'Audit sistem proteksi kebakaran total gedung dan manajemen risiko', 'Minimal 1 orang untuk perusahaan berisiko tinggi']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/fire-fighting-dasar/', label: 'Pelatihan Fire Fighting Dasar' },
      { href: '/kategori-pelatihan/regu-pemadam-kebakaran/', label: 'Pelatihan Regu Pemadam Kebakaran' },
      { href: '/kategori-pelatihan/simulasi-evakuasi-gedung/', label: 'Pelatihan Simulasi Evakuasi Gedung' }
    ],
    faqs: [
      {
        q: 'Berapa jumlah minimal Petugas Peran Kebakaran yang wajib dimiliki perusahaan?',
        a: 'Sesuai Kepmenaker 186/1999, jumlah petugas peran kebakaran sekurang-kurangnya 2 (dua) orang untuk setiap jumlah tenaga kerja 25 (dua puluh lima) orang.'
      }
    ]
  },

  // 51. Regu Pemadam Kebakaran
  {
    key: 'regu-pemadam-kebakaran',
    title: 'Pelatihan Regu Penanggulangan Kebakaran: Sertifikasi K3 Kebakaran Kelas C & B',
    h1: 'Pelatihan Regu Penanggulangan Kebakaran: Operasional Hydrant, Formasi Pemadaman Tim, dan Manajemen Hose',
    meta: 'Pelatihan Regu Pemadam Kebakaran industri (Kelas C & B): manajemen selang hydrant (hose handling), teknik semprotan jet/fog, formasi regu serang, dan APD bunker gear.',
    imgAlt: 'Regu pemadam kebakaran pabrik mengenakan pakaian bunker suit memegang nozzle selang hydrant menyemprotkan air formasi serang',
    related: ['petugas-peran-kebakaran', 'hydrant-dan-sprinkler', 'ahli-k3-kebakaran', 'emergency-response-team'],
    intro: 'Ketika kobaran api melampaui kapasitas APAR, <strong>Regu Penanggulangan Kebakaran (K3 Kebakaran Kelas C &amp; B)</strong> dikerahkan untuk menggelar selang pemadam (<em>fire hose</em>), menyambungkan ke pilar hydrant bertekanan tinggi 7–10 bar, dan melakukan penetrasi pemadaman terkoordinasi.',
    hazards: [
      '<strong>Hentakan Reaksi Nozzle (Nozzle Reaction Kickback):</strong> Nozzle bertekanan tinggi terlepas dari genggaman dan mencambuk liar mematahkan tulang personel.',
      '<strong>Water Hammer Effect:</strong> Menutup katup nozzle atau pilar hydrant terlalu cepat yang memecahkan pipa bawah tanah.',
      '<strong>Terjebak di Ruang Berasap Tebal:</strong> Memasuki ruangan tanpa mengenakan SCBA dan tali pemandu (search line).'
    ],
    regulations: ['<strong>Kepmenaker No. 186/MEN/1999</strong>.', '<strong>Standar NFPA 14</strong> (Installation of Standpipe and Hose Systems) dan <strong>NFPA 1081</strong>.'],
    modules: [
      {
        name: 'Modul 1: Formasi Regu Pemadam & Komando Taktis',
        theory: 'Peran Nozzleman 1 (Pemegang utama), Nozzleman 2 (Penahan hentakan), Valveman (Pengendali pilar), Hoseman (Pengurai selang).',
        practical: 'Drill formasi gelar dan gulung selang hydrant (metode single roll, double roll, dan flaking).'
      },
      {
        name: 'Modul 2: Teknik Semprotan Nozzle & Pola Perlindungan Diri',
        theory: 'Pola Jet (Padat lurus jangkauan 25 meter) vs Pola Fog / Tirai Kabut (Peredam radiasi panas dan perlindungan diri).',
        practical: 'Praktik maju serang mendekati kobaran api gas di balik tirai kabut air (water curtain shield).'
      }
    ],
    equipment: ['Fire Hose Kanvas/Rubber 1.5 inch & 2.5 inch dengan Coupling Machino/Storz.', 'Variable Spray Nozzle.', 'Bunker Gear Fire Suit & Helm Damkar.'],
    participants: ['Anggota Regu Fire Brigade Pabrik, Tim Tanggap Darurat, dan Security Industri.'],
    tableData: {
      headers: ['Pola Semprotan Nozzle', 'Karakteristik Aliran Air', 'Fungsi Taktis Pemadaman', 'Jarak Jangkauan Efektif'],
      rows: [
        ['Solid Jet Stream', 'Pancaran air padat lurus terfokus', 'Penetrasi ke inti api dalam tumpukan padat', '20 – 30 Meter'],
        ['Narrow Fog (Kabut Sempit)', 'Pancaran kerucut 30° butiran halus', 'Pendinginan cepat dan pemadaman permukaan', '10 – 15 Meter'],
        ['Wide Fog (Kabut Lebar)', 'Tirai kabut melebar 60° – 90°', 'Perisai pelindung regu pemadam dari radiasi panas', '3 – 6 Meter']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/hydrant-dan-sprinkler/', label: 'Pelatihan Hydrant & Sprinkler' },
      { href: '/kategori-pelatihan/ahli-k3-kebakaran/', label: 'Pelatihan Ahli K3 Kebakaran' }
    ],
    faqs: [
      {
        q: 'Berapa tekanan operasional ideal pada ujung nozzle selang hydrant saat pemadaman?',
        a: 'Tekanan ideal pada ujung nozzle hydrant adalah antara 4.5 hingga 7 bar (65–100 psi). Tekanan di bawah 3.5 bar menghasilkan jangkauan pancaran yang lemah, sedangkan di atas 7 bar sangat berbahaya dan membutuhkan penahan 2-3 orang nozzleman.'
      }
    ]
  },

  // 52. Ahli K3 Kebakaran
  {
    key: 'ahli-k3-kebakaran',
    title: 'Pelatihan Ahli K3 Penanggulangan Kebakaran: Sertifikasi Kelas A',
    h1: 'Pelatihan Ahli K3 Kebakaran: Audit Proteksi Kebakaran Gedung, Perhitungan Fire Load, dan Sertifikasi Kelas A Kemnaker',
    meta: 'Pelatihan Ahli K3 Kebakaran (Kelas A) Kemnaker RI: audit sistem fire fighting aktif/pasif, kalkulasi beban api (fire load), perancangan sistem sprinkler, dan manajemen risiko kebakaran.',
    imgAlt: 'Ahli K3 kebakaran memeriksa panel kontrol utama Fire Alarm Control Panel (FACP) dan flow meter pompa pemadam di ruang pompa',
    related: ['regu-pemadam-kebakaran', 'hydrant-dan-sprinkler', 'fire-risk-assessment', 'emergency-response-team'],
    intro: '<strong>Ahli K3 Penanggulangan Kebakaran (Tingkat A)</strong> adalah tenaga ahli tersertifikasi tertinggi yang berwenang merancang, mengaudit, mengevaluasi sistem proteksi kebakaran pasif dan aktif gedung, serta memimpin strategi proteksi bahaya kebakaran tingkat korporat.',
    hazards: [
      '<strong>Kegagalan Sistem Fire Pump Saat Listrik Padam:</strong> Diesel Fire Pump gagal auto-start akibat aki starter drop.',
      '<strong>Kekurangan Kapasitas Reservoir Air Pemadam:</strong> Pasokan air tangki gravitasi habis sebelum pemadam kebakaran kota tiba.',
      '<strong>Kompartemenisasi Bangunan Bocor:</strong> Asap beracun merambat melewati celah kabel tray antar-lantai (ketiadaan fire-stop sealant).'
    ],
    regulations: ['<strong>Kepmenaker No. Kep.186/MEN/1999</strong>.', '<strong>Permen PU No. 26/PRT/M/2008</strong> tentang Persyaratan Teknis Sistem Proteksi Kebakaran Gedung.', '<strong>Standar NFPA 101</strong> (Life Safety Code).'],
    modules: [
      {
        name: 'Modul 1: Manajemen Proteksi Pasif & Kompartemenisasi Gedung',
        theory: 'Ketahanan api struktur (Fire Resistance Rating 1-3 jam), Fire Damper, Fire Door, sarana jalan ke luar (Means of Egress).',
        practical: 'Audit denah kompartemenisasi dan waktu tempuh evakuasi gedung.'
      },
      {
        name: 'Modul 2: Desain & Audit Sistem Proteksi Aktif',
        theory: 'Kalkulasi hidrolik pipa sprinkler (NFPA 13), head loss pipa, kurva performa pompa pemadam NFPA 20.',
        practical: 'Pengujian kurva aliran air (Flow Test) di ruang pompa pemadam pabrik.'
      }
    ],
    equipment: ['Pitot Tube Gauge (Pengukur Tekanan Aliran Air Hydrant).', 'Sound Level Meter dan Smoke Detector Tester Aerosol.'],
    participants: ['Facility Manager, Fire Safety Engineer, HSE Manager, dan Building Management Superintendent.'],
    tableData: {
      headers: ['Tingkat Bahaya Kebakaran Gedung', 'Kepadatan Penghuni / Beban Api', 'Kebutuhan Pasokan Air Minimal (NFPA)', 'Waktu Suplai Pompa'],
      rows: [
        ['Bahaya Kebakaran Ringan', 'Perkantoran, Sekolah, Rumah Sakit', 'Minimal 1.000 – 1.500 Liter/Menit', 'Minimal 30 – 60 Menit'],
        ['Bahaya Kebakaran Sedang', 'Pabrik Manufaktur, Mall, Gudang Biasa', 'Minimal 2.000 – 3.000 Liter/Menit', 'Minimal 60 – 90 Menit'],
        ['Bahaya Kebakaran Berat', 'Kilang Minyak, Pabrik Kimia, Depo BBM', 'Minimal > 4.000 Liter/Menit + Foam', 'Minimal 120 – 240 Menit']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/hydrant-dan-sprinkler/', label: 'Pelatihan Hydrant & Sprinkler' },
      { href: '/kategori-pelatihan/fire-risk-assessment/', label: 'Pelatihan Fire Risk Assessment' }
    ],
    faqs: [
      {
        q: 'Kapan perusahaan wajib menunjuk Ahli K3 Kebakaran (Kelas A)?',
        a: 'Perusahaan wajib memiliki Ahli K3 Kebakaran Kelas A apabila memiliki tempat kerja dengan tingkat potensi bahaya kebakaran sedang III atau berat, atau memiliki lebih dari 300 orang tenaga kerja.'
      }
    ]
  },

  // 53. Penggunaan APAR
  {
    key: 'penggunaan-apar',
    title: 'Pelatihan Penggunaan & Pemeliharaan APAR Sesuai Standar',
    h1: 'Pelatihan Penggunaan, Pemeriksaan, dan Pemeliharaan APAR Sesuai Permenaker No. 4/1980',
    meta: 'Pelatihan APAR industri: standar penempatan tinggi 120 cm, pemeriksaan tekanan pressure gauge harian/bulanan, uji hidrostatis tabung 5 tahunan, dan teknik pemadaman PASS.',
    imgAlt: 'Instruktur K3 memperagakan pemeriksaan segel pin pengaman dan kartu kendali pemeliharaan APAR tabung merah',
    related: ['fire-fighting-dasar', 'petugas-peran-kebakaran', 'hot-work-safety'],
    intro: 'Alat Pemadam Api Ringan (APAR) adalah sarana pertahanan pertama dalam menghadapi kebakaran. Namun, dalam banyak audit fasilitas industri ditemukan fakta bahwa lebih dari 30% APAR tidak berfungsi saat dibutuhkan karena serbuk kimia menggumpal, jarum tekanan bocor, atau penempatan terhalang tumpukan barang.',
    hazards: [
      '<strong>Serbuk APAR Menggumpal (Powder Caking):</strong> Serbuk kimia kering memadat akibat kelembaban dan ketiadaan prosedur pembalikan tabung berkala.',
      '<strong>Penempatan Terhalang Barang:</strong> APAR tersembunyi di balik lemari atau tertutup palet barang gudang.',
      '<strong>Tabung Berkarat Meledak Saat Digunakan:</strong> Korosi pada dasar tabung memicu pelepasan tekanan tabung yang melukai operator.'
    ],
    regulations: ['<strong>Permenaker No. Per.04/MEN/1980</strong> tentang Pemasangan dan Pemeliharaan APAR.', '<strong>Standar NFPA 10</strong>.'],
    modules: [
      {
        name: 'Modul 1: Standar Pemasangan & Penempatan APAR',
        theory: 'Tinggi penempatan maksimal 1.2 meter dari lantai, jarak antar APAR maksimal 15 meter, tanda segitiga APAR warna merah.',
        practical: 'Audit geometris penempatan 15 unit APAR di area gedung.'
      },
      {
        name: 'Modul 2: Prosedur Pemeliharaan & Uji Hidrostatis Tabung',
        theory: 'Pemeriksaan visual bulanan, pembalikan tabung powder tiap 6 bulan, uji tekan hidrostatis tabung setiap 5 tahun sekali.',
        practical: 'Simulasi pembongkaran head cap, penimbangan berat gas CO2 cartridge, dan pengisian ulang (refilling).'
      }
    ],
    equipment: ['APAR Powder 6kg, CO2 5kg, Foam AFFF 9L, Clean Agent HFC-227.', 'Hydrostatic Test Rig Tabung APAR.'],
    participants: ['Petugas K3, Security, Teknisi Building Maintenance, dan Tim GA.'],
    tableData: {
      headers: ['Jenis Media APAR', 'Masa Kadaluarsa Media', 'Uji Hidrostatis Tabung', 'Peruntukan Utama'],
      rows: [
        ['Dry Chemical Powder', '2 – 3 Tahun', 'Setiap 5 Tahun Sekali', 'Serbaguna: Kelas A (Kayu), B (Minyak), C (Listrik)'],
        ['Carbon Dioxide (CO2)', '5 Tahun (Cek Berat Gas)', 'Setiap 5 Tahun (Uji 200 bar)', 'Panel Listrik, Ruang Server, Mesin Presisi'],
        ['Foam AFFF', '2 Tahun', 'Setiap 5 Tahun Sekali', 'Gudang Bahan Bakar Cair & Pelarut (Kelas B)']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/fire-fighting-dasar/', label: 'Pelatihan Fire Fighting Dasar' },
      { href: '/kategori-pelatihan/petugas-peran-kebakaran/', label: 'Pelatihan Petugas Peran Kebakaran' }
    ],
    faqs: [
      {
        q: 'Berapa tinggi standar pemasangan APAR di dinding menurut Permenaker No. 4/1980?',
        a: 'Tinggi penempatan APAR pada dinding wajib dipasang dengan posisi bagian paling atas berada pada ketinggian 1.2 meter dari permukaan lantai, kecuali untuk jenis CO2 dan serbuk kering berat dapat ditempatkan lebih rendah minimal 15 cm dari lantai.'
      }
    ]
  },

  // 54. Hydrant & Sprinkler
  {
    key: 'hydrant-dan-sprinkler',
    title: 'Pelatihan Pengoperasian & Uji Fungsi Sistem Fire Hydrant & Sprinkler',
    h1: 'Pelatihan Sistem Fire Hydrant & Sprinkler: Operasional Ruang Pompa, Flushing Jaringan, dan Uji Aliran Air NFPA',
    meta: 'Pelatihan sistem hydrant & sprinkler: pengoperasian Jockey Pump, Main Electric Pump, Diesel Fire Pump, sistem alarm valve, dan flushing jaringan pipa hydrant.',
    imgAlt: 'Teknisi ruang pompa pemadam memeriksa katup hisap dan indikator tekanan pada pompa diesel pemadam kebakaran utama',
    related: ['regu-pemadam-kebakaran', 'ahli-k3-kebakaran', 'fire-risk-assessment'],
    intro: 'Sistem Fire Hydrant dan Automatic Sprinkler adalah tulang punggung pertahanan kebakaran gedung dan pabrik. Namun, tanpa pemeliharaan berkala, pompa pemadam sering kali macet, tekanan pipa anjlok, atau nozzle sprinkler tersumbat kerak karat.',
    hazards: [
      '<strong>Diesel Pump Gagal Start Otomatis:</strong> Baterai starter aki soak atau pasokan solar tersumbat.',
      '<strong>Pipa Hydrant Bocor Tersembunyi:</strong> Jockey pump terus menerus menyala hidup-mati menandakan kebocoran pipa bawah tanah.',
      '<strong>Head Sprinkler Tertutup Cat / Terhalang Barang:</strong> Pengecatan plafon menutupi glass bulb penusuk air sprinkler.'
    ],
    regulations: ['<strong>Standar NFPA 13</strong> (Sprinkler Systems), <strong>NFPA 20</strong> (Stationary Pumps for Fire Protection), <strong>NFPA 25</strong>.'],
    modules: [
      {
        name: 'Modul 1: Anatomi Ruang Pompa Pemadam (Fire Pump Room)',
        theory: 'Fungsi Jockey Pump (pemelihara tekanan), Main Electric Pump, Diesel Standby Pump, pressure switch setting.',
        practical: 'Uji simulasi penurunan tekanan pipa dan verifikasi auto-start berurutan ketiga pompa.'
      },
      {
        name: 'Modul 2: Inspeksi Sistem Alarm Valve & Sprinkler',
        theory: 'Alarm Check Valve, Water Motor Gong, Flow Switch, suhu pecah bulb sprinkler (Merah 68°C, Kuning 79°C, Hijau 93°C).',
        practical: 'Pengujian katup uji inspektur (Inspector Test Connection) dan verifikasi aktivasi alarm FACP.'
      }
    ],
    equipment: ['Fire Pump Room Komplit (Jockey, Electric, Diesel Pump).', 'Pitot Gauge dan Sprinkler Head Tester.'],
    participants: ['Teknisi Mekanikal Plumbing Pabrik, Building Engineer, dan Safety Inspector.'],
    tableData: {
      headers: ['Warna Cairan Glass Bulb', 'Suhu Aktivasi Pecah (°C)', 'Klasifikasi Suhu', 'Lokasi Pemasangan Tipikal'],
      rows: [
        ['Oranye', '57°C', 'Biasa (Ordinary)', 'Ruangan ber-AC, Kantor Biasa'],
        ['Merah', '68°C', 'Standar Paling Umum', 'Area Pabrik, Koridor Gedung, Kamar Hotel'],
        ['Kuning', '79°C', 'Sedang (Intermediate)', 'Dekat atap seng, ruang genset'],
        ['Hijau', '93°C', 'Menengah Tinggi', 'Dapur komersial, ruang boiler']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/regu-pemadam-kebakaran/', label: 'Pelatihan Regu Pemadam Kebakaran' },
      { href: '/kategori-pelatihan/ahli-k3-kebakaran/', label: 'Pelatihan Ahli K3 Kebakaran' }
    ],
    faqs: [
      {
        q: 'Apa fungsi Jockey Pump di dalam sistem fire hydrant?',
        a: 'Jockey Pump adalah pompa berkapasitas kecil yang berfungsi mempertahankan tekanan air statis tinggi di dalam jaringan pipa hydrant/sprinkler agar tetap konstan, serta mengompensasi kebocoran minor tanpa harus menyalakan pompa utama.'
      }
    ]
  },

  // 55. Fire Risk Assessment
  {
    key: 'fire-risk-assessment',
    title: 'Pelatihan Fire Risk Assessment: Audit & Penilaian Risiko Kebakaran',
    h1: 'Pelatihan Fire Risk Assessment: Metodologi Audit Bahaya Kebakaran, Matriks Risiko, dan Perancangan Fire Safety Plan',
    meta: 'Pelatihan fire risk assessment: audit potensi bahaya kebakaran gedung, kalkulasi beban api (fire load), penilaian sarana penyelamatan jiwa (life safety), dan penyusunan fire plan.',
    imgAlt: 'Auditor K3 kebakaran meninjau denah layout pabrik dan mengevaluasi kompartemenisasi bahan mudah terbakar',
    related: ['ahli-k3-kebakaran', 'simulasi-evakuasi-gedung', 'emergency-response-team'],
    intro: 'Audit dan Penilaian Risiko Kebakaran (<em>Fire Risk Assessment / FRA</em>) adalah langkah proaktif sistematis untuk mengidentifikasi seluruh potensi penyulut api, mengevaluasi kecukupan sarana pemadaman, dan memastikan seluruh penghuni gedung dapat menyelamatkan diri secara aman sebelum kebakaran terjadi.',
    hazards: [
      '<strong>Beban Api (Fire Load) Melebihi Kapasitas Struktur:</strong> Penumpukan bahan kimia/plastik di area tanpa dinding kompartemen tahan api.',
      '<strong>Jarak Tempuh Evakuasi Melebihi Standar (Travel Distance Excess):</strong> Jarak menuju pintu keluar darurat melebihi 30–45 meter.',
      '<strong>Ketiadaan Sistem Emergency Voice Evacuation:</strong> Suara sirine alarm tidak terdengar di area bising pabrik.'
    ],
    regulations: ['<strong>Kepmenaker No. 186/MEN/1999</strong>.', '<strong>Permen PU No. 26/PRT/M/2008</strong>.', '<strong>Standar NFPA 551</strong> (Guide for the Evaluation of Fire Risk Assessments).'],
    modules: [
      {
        name: 'Modul 1: Metodologi 5 Langkah Fire Risk Assessment',
        theory: '1. Identifikasi bahaya api -> 2. Identifikasi orang berisiko -> 3. Evaluasi & Pengendalian -> 4. Catat & Rencanakan -> 5. Review berkala.',
        practical: 'Praktik audit walkthrough fasilitas pabrik dan pengisian matriks FRA.'
      },
      {
        name: 'Modul 2: Kalkulasi Beban Api (Fire Load Calculation)',
        theory: 'Kandungan panas bahan bakar (MJ/kg), perhitungan kepadatan beban api per meter persegi luas lantai.',
        practical: 'Kalkulasi beban api gudang penyimpanan kemasan karton dan plastik.'
      }
    ],
    equipment: ['Checklist Master Fire Risk Assessment NFPA.', 'Denah Arsitektur & Jalur Evakuasi Gedung.'],
    participants: ['HSE Specialist, Risk Manager, Building Auditor, dan Safety Officer.'],
    tableData: {
      headers: ['Tingkat Risiko FRA', 'Kondisi Karakteristik', 'Tindakan Pengendalian Wajib'],
      rows: [
        ['Low Fire Risk', 'Bahan tidak mudah terbakar, jalur evakuasi pendek', 'Pertahankan inspeksi APAR rutin bulanan'],
        ['Medium Fire Risk', 'Terdapat bahan mudah terbakar dengan kontrol standar', 'Lengkapi detektor asap otomatis & pemisahan kompartemen'],
        ['High Fire Risk', 'Bahan kimia pelarut masif, jalur keluar sempit', 'Wajib otomatisasi sprinkler penuh & audit bulanan']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/ahli-k3-kebakaran/', label: 'Pelatihan Ahli K3 Kebakaran' },
      { href: '/kategori-pelatihan/simulasi-evakuasi-gedung/', label: 'Pelatihan Simulasi Evakuasi Gedung' }
    ],
    faqs: [
      {
        q: 'Berapa jarak tempuh maksimal (travel distance) menuju pintu darurat menurut standar keselamatan gedung?',
        a: 'Berdasarkan Permen PU No. 26/2008 dan NFPA 101, jarak tempuh maksimum dari sembarang titik di dalam ruangan menuju pintu darurat terdekat adalah 30 meter untuk gedung tanpa sprinkler otomatis, atau hingga 45–60 meter untuk gedung yang diproteksi sprinkler otomatis penuh.'
      }
    ]
  },

  // 56. Emergency Response Team (ERT)
  {
    key: 'emergency-response-team',
    title: 'Pelatihan Emergency Response Team (ERT): Manajemen Tanggap Darurat',
    h1: 'Pelatihan Emergency Response Team (ERT): Struktur Komando Insiden (ICS), Taktik Tanggap Darurat, dan Crisis Management',
    meta: 'Pelatihan Emergency Response Team (ERT) industri: struktur Incident Command System (ICS), prosedur triase medis darurat, komunikasi krisis, dan drill tanggap darurat pabrik.',
    imgAlt: 'Tim Emergency Response Team (ERT) mengenakan rompi komando memimpin briefing di posko darurat saat simulasi krisis',
    related: ['simulasi-evakuasi-gedung', 'fire-risk-assessment', 'spill-response-kit'],
    intro: 'Dalam situasi krisis industri—seperti kebakaran kilang, kebocoran gas beracun massal, atau gempa bumi—keberhasilan penanganan darurat ditentukan oleh ketangguhan <strong>Emergency Response Team (ERT)</strong> di bawah kepemimpinan <em>Incident Commander</em> yang terlatih.',
    hazards: [
      '<strong>Keruntuhan Rantai Komando (Command Collapse):</strong> Banyak pihak memberi instruksi berbeda yang menimbulkan kebingungan massa.',
      '<strong>Kekacauan Komunikasi Krisis:</strong> Informasi simpang siur memicu kepanikan massal pekerja dan masyarakat sekitar.',
      '<strong>Keterlambatan Mobilisasi Tim Medis:</strong> Korban kritis tidak tertangani akibat ketiadaan pos triase darurat.'
    ],
    regulations: ['<strong>UU No. 1 Tahun 1970</strong>.', '<strong>PP No. 50 Tahun 2012</strong> (Elemen Tanggap Darurat SMK3).', '<strong>Standar NFPA 1600</strong>.'],
    modules: [
      {
        name: 'Modul 1: Struktur Incident Command System (ICS)',
        theory: 'Peran Incident Commander, Safety Officer, Operations Section, Planning Section, Logistics Section, Liaison Officer.',
        practical: 'Simulasi pembentukan Posko Tanggap Darurat (Emergency Operations Center).'
      },
      {
        name: 'Modul 2: Skenario Tabletop Exercise & Full-Scale Crisis Drill',
        theory: 'Manajemen skenario eskalasi darurat Tingkat 1 (Lokal), Tingkat 2 (Fasilitas), Tingkat 3 (Bencana Eksternal).',
        practical: 'Tabletop exercise simulasi ledakan tangki bahan bakar dan kebocoran gas beracun serentak.'
      }
    ],
    equipment: ['ICS Command Vest Kit.', 'Radio Komunikasi Krisis Multi-Channel.', 'Emergency Incident Status Board.'],
    participants: ['Manajemen Krisis Perusahaan, Incident Commander, ERT Leader, dan HSE Specialist.'],
    tableData: {
      headers: ['Tingkat Darurat (Emergency Tier)', 'Cakupan Insiden', 'Penanggung Jawab Komando', 'Mobilisasi Pihak Luar'],
      rows: [
        ['Tier 1 (Lokal Unit)', 'Dapat dikendalikan oleh tim operator setempat', 'On-Scene Commander (Supervisor)', 'Hanya sumber daya internal shift'],
        ['Tier 2 (Area Fasilitas)', 'Memerlukan seluruh tim ERT pabrik & evakuasi sebagian', 'Incident Commander (Plant Manager)', 'Damkar / RS rujukan disiagakan'],
        ['Tier 3 (Krisis Mayor)', 'Berpotensi meluas ke masyarakat & ancaman fatal', 'Crisis Management Team (Direksi)', 'Koordinasi penuh BPBD, Kepolisian, Basarnas']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/simulasi-evakuasi-gedung/', label: 'Pelatihan Simulasi Evakuasi Gedung' },
      { href: '/kategori-pelatihan/fire-risk-assessment/', label: 'Pelatihan Fire Risk Assessment' }
    ],
    faqs: [
      {
        q: 'Apa peran utama Incident Commander dalam struktur tanggap darurat?',
        a: 'Incident Commander adalah pemegang wewenang komando tunggal tertinggi di lokasi kejadian yang bertanggung jawab penuh menetapkan strategi penanganan darurat, memobilisasi sumber daya, mengotorisasi evakuasi, dan memastikan keselamatan seluruh personel penolong.'
      }
    ]
  },

  // 57. Simulasi Evakuasi Gedung
  {
    key: 'simulasi-evakuasi-gedung',
    title: 'Pelatihan Simulasi Evakuasi Darurat & Fire Drill Gedung',
    h1: 'Pelatihan Simulasi Evakuasi Darurat Gedung: Prosedur Fire Drill, Manajemen Titik Kumpul (Assembly Point), dan Headcount',
    meta: 'Pelatihan simulasi evakuasi darurat: SOP fire drill gedung bertingkat, penataan Muster Point / Assembly Point, prosedur penghitungan korban (headcount), dan penanganan difabel.',
    imgAlt: 'Ratusan karyawan gedung bertingkat berbaris tertib berkumpul di assembly point saat simulasi fire drill darurat',
    related: ['emergency-response-team', 'petugas-peran-kebakaran', 'fire-risk-assessment'],
    intro: 'Ketika sirine alarm darurat gedung berbunyi, kepanikan massal di tangga darurat adalah ancaman paling berbahaya yang memicu desak-desakan dan korban terinjak-injak. Pelatihan Simulasi Evakuasi Darurat melatih seluruh penghuni gedung bergerak cepat, tertib, dan selamat menuju <em>Assembly Point</em>.',
    hazards: [
      '<strong>Pintu Darurat Macet / Terkunci:</strong> Pekerja menumpuk di bordes tangga darurat tanpa jalan keluar.',
      '<strong>Kekeliruan Prosedur Headcount di Titik Kumpul:</strong> Tidak mengetahui ada pekerja yang tertinggal di dalam toilet atau ruang arsip.',
      '<strong>Kembali ke Dalam Gedung (Re-Entry Fatal):</strong> Pekerja kembali masuk untuk mengambil dompet/laptop saat asap pekat mulai memenuhi lantai.'
    ],
    regulations: ['<strong>UU No. 1 Tahun 1970</strong>.', '<strong>Permenaker No. 186/1999</strong>.', '<strong>Permen PU No. 26/2008</strong>.'],
    modules: [
      {
        name: 'Modul 1: Prosedur Evakuasi Standar Gedung Bertingkat',
        theory: 'Aturan Jangan Panik, Jangan Menggunakan Lift, Lepas Sepatu Hak Tinggi, Berjalan Cepat Tanpa Mendorong, Merunduk di Bawah Asap.',
        practical: 'Drill evakuasi berurutan per lantai (phased evacuation) melewati tangga darurat tertutup.'
      },
      {
        name: 'Modul 2: Manajemen Titik Kumpul (Assembly Point) & Headcount',
        theory: 'Zonasi per departemen, verifikasi log kehadiran harian, pelaporan status nihil/korban ke Incident Commander.',
        practical: 'Simulasi penghitungan cepat 500 karyawan di assembly point dalam waktu < 5 menit.'
      }
    ],
    equipment: ['Megaphone Pengarah Massa.', 'Papan Nama Departemen Assembly Point.', 'Rompi Floor Warden & Senter Darurat.'],
    participants: ['Seluruh Penghuni Gedung, Tenant, Tim K3, dan Building Management.'],
    tableData: {
      headers: ['Tahapan Evakuasi', 'Target Waktu Standar', 'Pelaksana Utama', 'Tolak Ukur Keberhasilan'],
      rows: [
        ['Pemberitahuan Alarm & Verifikasi', '< 60 Detik', 'Petugas Ruang Kontrol / FACP', 'Konfirmasi alarm valid & pengumuman evakuasi'],
        ['Pengosongan Seluruh Lantai Gedung', '< 3 – 5 Menit', 'Floor Warden & Penghuni', 'Lantai bersih, lampu dimatikan, pintu darurat tertutup'],
        ['Penghitungan Lengkap di Assembly Point', '< 5 – 7 Menit', 'Muster Captain / HR Team', '100% headcount terverifikasi tanpa korban tertinggal']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/emergency-response-team/', label: 'Pelatihan Emergency Response Team' },
      { href: '/kategori-pelatihan/petugas-peran-kebakaran/', label: 'Pelatihan Petugas Peran Kebakaran' }
    ],
    faqs: [
      {
        q: 'Berapa kali simulasi evakuasi darurat (Fire Drill) wajib dilaksanakan oleh pengelola gedung?',
        a: 'Berdasarkan Kepmenaker 186/1999 dan standar K3 gedung bertingkat, latihan penanggulangan kebakaran dan simulasi evakuasi darurat (fire drill) wajib dilaksanakan sekurang-kurangnya 1 (satu) kali dalam setahun untuk seluruh penghuni gedung.'
      }
    ]
  },

  // 58. H2S Safety
  {
    key: 'h2s-safety',
    title: 'Pelatihan H2S Safety: Penanganan Bahaya Gas Beracun Hidrogen Sulfida',
    h1: 'Pelatihan H2S Safety: Karakteristik Gas Asam, Batas Paparan Toksik, Proteksi SCBA, dan Penyelamatan Darurat',
    meta: 'Pelatihan H2S Safety migas & geothermal: batas paparan NAB/Ceiling H2S, lumpuhnya indra penciuman pada 100 ppm, donning SCBA cepat <45 detik, dan sertifikasi K3 H2S.',
    imgAlt: 'Pekerja migas mengenakan personal H2S monitor di kerah baju dan membawa Escape Breathing Apparatus saat berada di area wellhead',
    related: ['gas-tester', 'confined-space-entry', 'rescue-ruang-terbatas'],
    intro: 'Gas Hidrogen Sulfida (<em>H2S / Sour Gas</em>) adalah salah satu gas beracun paling mematikan di industri minyak, gas bumi, pembangkit panas bumi (geothermal), pabrik kertas, dan fasilitas pengolahan limbah. Pada konsentrasi rendah gas ini berbau telur busuk, namun pada konsentrasi di atas 100 ppm gas ini <strong>melumpuhkan saraf penciuman manusia secara instan</strong>, membuat korban merasa aman padahal satu tarikan napas berikutnya berakibat fatal.',
    hazards: [
      '<strong>Olfactory Fatigue (Kelumpuhan Saraf Hidung):</strong> Korban mengira gas telah hilang padahal konsentrasi melonjak ke tingkat mematikan.',
      '<strong>Knockdown Effect Instan (>500 ppm):</strong> Korban pingsan seketika dalam satu kali tarikan napas dan meninggal dalam beberapa menit.',
      '<strong>Korosi & Kerapuhan Logam (Sulfide Stress Cracking):</strong> Gas H2S merusak struktur pipa logam bertekanan memicu kebocoran masif.'
    ],
    regulations: ['<strong>Permenaker No. 5 Tahun 2018</strong> (Nilai Ambang Batas H2S).', '<strong>Permen ESDM No. 26 Tahun 2018</strong>.', '<strong>Standar ANSI/ASSE Z390.1</strong> (Accepted Practices for Hydrogen Sulfide Training).'],
    modules: [
      {
        name: 'Modul 1: Sifat Fisika, Kimia & Toksikologi Gas H2S',
        theory: 'Densitas uap 1.19 (mengendap di dasar tanah), titik nyala, batas NAB (1 ppm), Ceiling limit (5 ppm), efek fatalitas konsentrasi 100 – 1000 ppm.',
        practical: 'Audit arah angin menggunakan windsocks dan pemetaan jalur penyelamatan diri (escape routes).'
      },
      {
        name: 'Modul 2: Pengoperasian Detektor H2S & Alat Bantu Pernapasan',
        theory: 'Single-gas H2S personal monitor, Emergency Escape Breathing Apparatus (EEBA 10-15 menit), SCBA 300 Bar.',
        practical: 'Drill pemasangan cepat EEBA / SCBA (Donning Test) dalam waktu kurang dari 45 detik.'
      }
    ],
    equipment: ['Personal H2S Gas Monitor Clip.', 'EEBA 15 Menit Constant Flow.', 'SCBA Tekanan Positif 300 Bar dan Windsock Penunjuk Arah Angin.'],
    participants: ['Pekerja Pengeboran Migas (Drilling), Geothermal Plant, Teknisi Kilang, dan Pengolahan Limbah.'],
    tableData: {
      headers: ['Konsentrasi H2S (ppm)', 'Efek Fisiologis pada Manusia', 'Tingkat Bahaya'],
      rows: [
        ['0.01 – 0.1 ppm', 'Ambang batas bau telur busuk mulai terdeteksi hidung', 'Aman / Batas rasa'],
        ['1.0 – 5.0 ppm', 'Nilai Ambang Batas (NAB Kemnaker) paparan 8 jam kerja', 'Batas Maksimum Kerja'],
        ['10 – 50 ppm', 'Iritasi mata parah, batuk berdahak, pusing, kehilangan penciuman bertahap', 'Berbahaya (Wajib APD)'],
        ['100 – 150 ppm', 'Indra penciuman LUMPUH TOTAL dalam 2 menit, batuk parah', 'IDLH (Immediate Danger to Life)'],
        ['500 – 700 ppm', 'Hilang kesadaran seketika dalam 1 napas, henti jantung dalam 5 menit', 'FATAL / MEMATIKAN'],
        ['> 1.000 ppm', 'Kematian instan dalam satu tarikan napas (Instant Death)', 'FATAL MUTLAK']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/gas-tester/', label: 'Pelatihan Gas Tester' },
      { href: '/kategori-pelatihan/confined-space-entry/', label: 'Pelatihan Confined Space Entry' }
    ],
    faqs: [
      {
        q: 'Bagaimana prosedur evakuasi darurat yang benar saat alarm detektor H2S berbunyi di lapangan?',
        a: 'Segera tahan napas dan kenakan alat bantu pernapasan darurat (EEBA/SCBA), lihat arah angin pada windsock, dan segera bergerak evakuasi ke arah MENYILANG ARAH ANGIN (crosswind) lalu menuju ke tempat yang LEBIH TINGGI (upwind & uphill).'
      }
    ]
  },

  // 59. Chemical Handling
  {
    key: 'chemical-handling',
    title: 'Pelatihan Chemical Handling: Penanganan Bahan Kimia Berbahaya',
    h1: 'Pelatihan Chemical Handling: Prosedur Aman Penyimpanan, Pemindahan, dan Penanganan Bahan Kimia Industri',
    meta: 'Pelatihan penanganan bahan kimia berbahaya (B3): pemahaman piktogram bahaya GHS, kompatibilitas penyimpanan kimia, APD kimia (chem-suit & respirator), dan Permenaker No. 187/1999.',
    imgAlt: 'Petugas kimia mengenakan sarung tangan nitrile tebal, kacamata chemical goggles, dan apron khusus memindahkan cairan asam',
    related: ['pengelolaan-limbah-b3', 'spill-response-kit', 'msds-dan-gds-labelling', 'petugas-k3-kimia'],
    intro: 'Ribuan bahan kimia berbahaya digunakan setiap hari di pabrik tekstil, farmasi, cat, pertambangan, dan pengolahan logam. Penanganan tanpa pemahaman reaktivitas kimia dapat memicu reaksi eksotermik dahsyat, ledakan gas beracun, atau luka bakar kimia permanen pada kulit dan mata pekerja.',
    hazards: [
      '<strong>Penyimpanan Kimia Inkompatibel:</strong> Menyimpan bahan asam kuat berdampingan dengan bahan basa kuat atau senyawa sianida.',
      '<strong>Percikan Asam/Basa ke Mata (Chemical Splash):</strong> Terkena percikan bahan kimia korosif akibat tidak menggunakan chemical splash goggles tertutup.',
      '<strong>Inhalasi Uap Kimia Beracun:</strong> Menghirup uap pelarut organik (VOC) di ruang tanpa ventilasi memicu kerusakan hati dan ginjal.'
    ],
    regulations: ['<strong>Kepmenaker No. Kep.187/MEN/1999</strong> tentang Pengendalian Bahan Kimia Berbahaya di Tempat Kerja.', '<strong>Permenaker No. 5 Tahun 2018</strong>.'],
    modules: [
      {
        name: 'Modul 1: Klasifikasi Bahaya Kimia & Piktogram GHS',
        theory: 'Bahan mudah menyala (flammable), korosif, oksidator, toksik akut, karsinogenik, bahaya lingkungan.',
        practical: 'Audit pelabelan wadah sekunder (secondary containers) bahan kimia di gudang.'
      },
      {
        name: 'Modul 2: Matriks Kompatibilitas Penyimpanan Bahan Kimia',
        theory: 'Prinsip pemisahan jarak fisik (segregation matrix), secondary containment pallet, ventilasi gudang B3.',
        practical: 'Penyusunan tata letak penyimpanan 10 jenis bahan kimia inkompatibel di rak gudang.'
      },
      {
        name: 'Modul 3: Pemilihan APD Kimia & Operasional Eye Wash Station',
        theory: 'Bahan sarung tangan Nitrile vs Neoprene vs Butyl, respirator cartridge uap organik/asam, standar ANSI Z358.1 Eye Wash.',
        practical: 'Praktik penggunaan Emergency Eye Wash & Safety Shower dalam waktu <10 detik.'
      }
    ],
    equipment: ['Chemical Spill Containment Pallet.', 'Emergency Eye Wash & Safety Shower Station.', 'Chemical Respirator dengan Multi-Gas/Vapor Cartridge.'],
    participants: ['Operator Gudang Kimia, Petugas Mixing/Blending Pabrik, dan Analis Laboratorium.'],
    tableData: {
      headers: ['Jenis Bahan Kimia', 'Bahan Inkompatibel (Dilarang Dicampur)', 'Potensi Bahaya Fatal Jika Bercampur'],
      rows: [
        ['Asam Kuat (HCl, H2SO4)', 'Basa Kuat (NaOH, KOH)', 'Reaksi netralisasi eksotermik ekstrem, cairan mendidih memercik'],
        ['Asam Kuat', 'Sianida / Sulfida', 'Melepaskan gas mematikan Asam Sianida (HCN) / Gas H2S'],
        ['Bahan Oksidator (H2O2, Klorat)', 'Bahan Organik / Pelarut Minyak', 'Memicu kebakaran spontan dan ledakan dahsyat'],
        ['Kalsium Hipoklorit (Kaporit)', 'Amonia / Pembersih Asam', 'Melepaskan gas Klorin beracun melumpuhkan paru-paru']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/msds-dan-gds-labelling/', label: 'Pelatihan MSDS & Label GHS' },
      { href: '/kategori-pelatihan/spill-response-kit/', label: 'Pelatihan Spill Response Kit' },
      { href: '/kategori-pelatihan/pengelolaan-limbah-b3/', label: 'Pelatihan Pengelolaan Limbah B3' }
    ],
    faqs: [
      {
        q: 'Berapa lama waktu pembilasan mata yang diwajibkan saat mata terkena percikan bahan kimia korosif?',
        a: 'Berdasarkan standar ANSI Z358.1, pembilasan mata pada Emergency Eye Wash Station wajib dilakukan seketika dengan air mengalir bersih minimal selama 15 menit penuh tanpa henti sambil membuka kelopak mata, sebelum korban dibawa ke fasilitas medis.'
      }
    ]
  },

  // 60. Pengelolaan Limbah B3
  {
    key: 'pengelolaan-limbah-b3',
    title: 'Pelatihan Pengelolaan Limbah B3: Regulasi PP No. 22/2021',
    h1: 'Pelatihan Pengelolaan Limbah B3: Prosedur Penyimpanan TPS, Pengemasan, Manifest Festronik, dan Kepatuhan Lingkungan',
    meta: 'Pelatihan pengelolaan limbah B3 industri: regulasi PP No. 22/2021 & Permen LHK No. 6/2021, standar TPS Limbah B3, simbol & label limbah, neraca limbah, dan manifest Festronik.',
    imgAlt: 'Petugas lingkungan menginspeksi drum limbah B3 berlabel simbol korosif dan mudah menyala di Tempat Penyimpanan Sementara (TPS)',
    related: ['chemical-handling', 'spill-response-kit', 'petugas-k3-kimia'],
    intro: 'Pelanggaran dalam pengelolaan Limbah Bahan Berbahaya dan Beracun (<em>Limbah B3</em>) dapat berakibat pada sanksi pembekuan izin lingkungan, denda miliaran rupiah, hingga pidana penjara bagi penanggung jawab usaha sesuai <strong>UU No. 32 Tahun 2009 &amp; PP No. 22 Tahun 2021</strong>. Pelatihan ini melatih tata kelola penyimpanan limbah B3 yang patuh hukum dari hulu ke hilir.',
    hazards: [
      '<strong>Pencemaran Air Tanah & Lingkungan:</strong> Kebocoran drum limbah oli/asam mencemari air sumur warga sekitar pabrik.',
      '<strong>Penyimpanan Melebihi Batas Waktu Legal:</strong> Menyimpan limbah B3 di TPS melebihi batas waktu 90/180/365 hari tanpa izin.',
      '<strong>Pengangkutan Ilegal Tanpa Manifest:</strong> Menyerahkan limbah B3 ke pihak ketiga yang tidak memiliki izin resmi KLHK.'
    ],
    regulations: ['<strong>PP No. 22 Tahun 2021</strong> tentang Penyelenggaraan Perlindungan dan Pengelolaan Lingkungan Hidup.', '<strong>Permen LHK No. 6 Tahun 2021</strong> tentang Tata Cara dan Persyaratan Pengelolaan Limbah B3.'],
    modules: [
      {
        name: 'Modul 1: Identifikasi & Karakteristik Limbah B3',
        theory: 'Limbah dari sumber spesifik vs non-spesifik, karakteristik mudah meledak, mudah menyala, reaktif, infeksius, korosif, beracun (TCLP test).',
        practical: 'Audit klasifikasi jenis limbah B3 yang dihasilkan dari lini produksi pabrik.'
      },
      {
        name: 'Modul 2: Standar Fasilitas TPS & Pengemasan Limbah B3',
        theory: 'Persyaratan lantai kedap air, kemiringan 1%, bak penampung ceceran (spill containment 110%), simbol & label limbah B3.',
        practical: 'Pemasangan simbol limbah B3 ukuran 25x25 cm dan label identitas drum limbah.'
      },
      {
        name: 'Modul 3: Neraca Limbah B3 & Sistem Manifest Elektronik (Festronik)',
        theory: 'Penyusunan neraca limbah triwulanan, alur pengangkutan transponder GPS berizin, pengisian manifest Festronik KLHK.',
        practical: 'Simulasi pelaporan neraca limbah dan input manifest elektronik Festronik.'
      }
    ],
    equipment: ['Simbol & Label Limbah B3 Resmi KLHK.', 'Spill Containment Pallet Drum B3.', 'Software Format Neraca Limbah B3 KLHK.'],
    participants: ['Environmental Officer, HSE Specialist, Supervisor Pengolahan Limbah (WTP), dan Manager Operasional.'],
    tableData: {
      headers: ['Kategori Limbah B3', 'Jumlah Dihasilkan per Hari', 'Batas Waktu Maksimal Penyimpanan di TPS'],
      rows: [
        ['Limbah B3 Kategori 1', '>= 50 kg / Hari', 'Maksimal 90 Hari'],
        ['Limbah B3 Kategori 1', '< 50 kg / Hari', 'Maksimal 180 Hari'],
        ['Limbah B3 Kategori 2 (Sumber Tidak Spesifik)', '< 50 kg / Hari', 'Maksimal 365 Hari (1 Tahun)'],
        ['Limbah B3 Kategori 2 (Spesifik Khusus)', 'Tidak dibatasi jumlahnya', 'Maksimal 365 Hari (1 Tahun)']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/chemical-handling/', label: 'Pelatihan Chemical Handling' },
      { href: '/kategori-pelatihan/spill-response-kit/', label: 'Pelatihan Spill Response Kit' }
    ],
    faqs: [
      {
        q: 'Apa saja syarat wajib Tempat Penyimpanan Sementara (TPS) Limbah B3?',
        a: 'TPS Limbah B3 wajib: (1) Memiliki atap pelindung hujan dan sinar matahari, (2) Lantai beton kedap air dengan parit kemiringan 1% menuju bak penampung ceceran berkapasitas 110% volume drum terbesar, (3) Dilengkapi ventilasi udara, (4) Dilengkapi simbol B3 dan APAR, dan (5) Memiliki pintu terkunci dengan akses terbatas.'
      }
    ]
  },

  // 61. Spill Response Kit
  {
    key: 'spill-response-kit',
    title: 'Pelatihan Chemical Spill Response: Penanganan Tumpahan Bahan Kimia',
    h1: 'Pelatihan Chemical Spill Response: Prosedur Pengendalian Ceceran B3, Penggunaan Spill Kit, dan Dekontaminasi',
    meta: 'Pelatihan chemical spill response: penggunaan absorbent pad, boom, sock, neutralizer agent, prosedur dekontaminasi tumpahan asam/minyak, dan penanganan limbah terkontaminasi.',
    imgAlt: 'Tim penanganan tumpahan kimia membentangkan absorbent boom mengisolasi cairan bahan kimia yang tumpah di lantai pabrik',
    related: ['chemical-handling', 'pengelolaan-limbah-b3', 'petugas-k3-kimia'],
    intro: 'Tumpahan bahan kimia (<em>chemical spill</em>) dalam volume sekecil jerigen hingga kebocoran tangki IBC 1.000 liter dapat melumpuhkan seluruh operasional pabrik jika tidak diisolasi dalam hitungan menit. Pelatihan ini melatih kesiapan tim dalam membendung, menyerap, menetralkan, dan mendekontaminasi tumpahan secara taktis.',
    hazards: [
      '<strong>Tumpahan Mengalir ke Saluran Drainase Umum:</strong> Bahan kimia beracun masuk ke sungai warga dan memicu tuntutan hukum pencemaran.',
      '<strong>Reaksi Uap Beracun & Kebakaran:</strong> Tumpahan pelarut organik menguap dan menyambar sumber percikan terdekat.',
      '<strong>Terpeleset dan Luka Bakar Kimia:</strong> Personel mendekati tumpahan tanpa menggunakan sepatu boots anti-kimia.'
    ],
    regulations: ['<strong>UU No. 32 Tahun 2009</strong> tentang PPLH.', '<strong>PP No. 22 Tahun 2021</strong>.', '<strong>Permenaker No. 187/1999</strong>.'],
    modules: [
      {
        name: 'Modul 1: Prosedur 6 Langkah Penanganan Tumpahan Kimia',
        theory: '1. Evakuasi & Amankan -> 2. Identifikasi Bahan (MSDS) -> 3. Kenakan APD -> 4. Bendung (Confine) -> 5. Serap (Absorb) -> 6. Dekontaminasi.',
        practical: 'Audit lokasi penempatan Chemical Spill Kit di area transfer bahan kimia.'
      },
      {
        name: 'Modul 2: Praktik Penggunaan Peralatan Spill Kit',
        theory: 'Fungsi Absorbent Boom/Sock (pembendung perimeter), Absorbent Pads (penyerap permukaan), Absorbent Pillow, Granular Powder.',
        practical: 'Simulasi pembendungan tumpahan 100 Liter oli dan asam menggunakan absorbent boom dalam waktu <3 menit.'
      }
    ],
    equipment: ['Chemical Spill Kit Drum 240L (Universal / Oil Only / Chemical Hazmat).', 'Heavy Duty Nitrile Boots, Chem-Suit Coverall, dan Plastik Limbah Kuning B3.'],
    participants: ['Tim Spill Response, Operator Gudang Kimia, Petugas Laboratorium, dan Anggota ERT.'],
    tableData: {
      headers: ['Tipe Spill Kit', 'Warna Identitas Standar', 'Bahan yang Mampu Diserap', 'Aplikasi Khusus'],
      rows: [
        ['Oil-Only Spill Kit', 'Putih', 'Hanya menyerap minyak, solar, hidrokarbon (Menolak air)', 'Tumpahan minyak di atas genangan air / laut'],
        ['Universal Spill Kit', 'Abu-Abu', 'Menyerap air, oli, cairan pendingin, pelarut non-korosif', 'Bengkel maintenance dan lini produksi perakitan'],
        ['Hazmat Chemical Kit', 'Kuning Cerah', 'Menyerap asam pekat, basa kuat, cairan kimia agresif', 'Gudang B3, Laboratorium kimia, area loading tank']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/chemical-handling/', label: 'Pelatihan Chemical Handling' },
      { href: '/kategori-pelatihan/pengelolaan-limbah-b3/', label: 'Pelatihan Pengelolaan Limbah B3' }
    ],
    faqs: [
      {
        q: 'Apa yang harus dilakukan terhadap material absorbent yang telah menyerap bahan kimia berbahaya?',
        a: 'Seluruh pad, boom, dan serbuk absorbent yang telah terpakai menyerap bahan kimia berbahaya otomatis terkategori sebagai Limbah B3 (Kategori 1). Material tersebut wajib dimasukkan ke dalam kantong plastik limbah B3 khusus, diikat rapat, diberi label, dan disimpan di TPS Limbah B3.'
      }
    ]
  },

  // 62. MSDS & Label GHS
  {
    key: 'msds-dan-gds-labelling',
    title: 'Pelatihan Pemahaman MSDS / SDS & Label GHS Bahan Berbahaya',
    h1: 'Pelatihan Pemahaman Lembar Data Keselamatan (SDS 16 Poin) dan Sistem Harmonisasi Global (GHS Labelling)',
    meta: 'Pelatihan MSDS / SDS & label GHS: pemahaman 16 bagian Safety Data Sheet, piktogram bahaya GHS, Signal Word (Danger/Warning), Hazard & Precautionary Statements.',
    imgAlt: 'Staff K3 meninjau dokumen SDS 16 bagian dan memeriksa kesesuaian label piktogram GHS pada botol reagen kimia',
    related: ['chemical-handling', 'spill-response-kit', 'k3-laboratorium'],
    intro: 'Lembar Data Keselamatan Bahan (<em>Safety Data Sheet / SDS</em>) adalah dokumen paspor keselamatan terpenting untuk setiap zat kimia di industri. Ketidakmampuan pekerja dalam membaca informasi pertolongan pertama pada SDS atau ketiadaan label piktogram GHS pada wadah sekunder adalah penyebab utama kesalahan fatal saat terjadi paparan darurat.',
    hazards: [
      '<strong>Wadah Kimia Tanpa Label (Mystery Container):</strong> Pekerja meminum atau mencampurkan bahan kimia dari botol air mineral tanpa label.',
      '<strong>Salah Tindakan Pertolongan Pertama:</strong> Memaksa korban muntah saat menelan zat korosif yang merusak kerongkongan dua kali.',
      '<strong>Penyimpanan Berdekatan Tanpa Mengetahui Titik Nyala:</strong> Menyimpan cairan bertitik nyala rendah dekat panel listrik.'
    ],
    regulations: ['<strong>Permenaker No. 5 Tahun 2018</strong>.', '<strong>Permen Perindustrian No. 23/M-IND/PER/4/2013</strong> tentang Sistem Harmonisasi Global (GHS).', '<strong>Standar UN GHS Purple Book</strong>.'],
    modules: [
      {
        name: 'Modul 1: Anatomi 16 Bagian Standard SDS (Globally Harmonized System)',
        theory: 'Rincian Bagian 1 (Identitas) s.d Bagian 16 (Informasi Lain). Bagian kritis: Bagian 2 (Bahaya), 4 (P3K), 7 (Penyimpanan), 8 (APD).',
        practical: 'Bedah dokumen SDS bahan kimia reaktif dan ekstraksi informasi tindakan darurat dalam <2 menit.'
      },
      {
        name: 'Modul 2: Desain & Penerapan Label GHS Wadah Sekunder',
        theory: 'Komponen wajib label GHS: Product Identifier, Signal Word (Danger vs Warning), Hazard Statements (H-Codes), Precautionary Statements (P-Codes), Piktogram.',
        practical: 'Praktik perancangan dan pencetakan label sekunder untuk botol transfer pelarut.'
      }
    ],
    equipment: ['Master Dokumen SDS 16 Poin Berbagai Bahan Kimia.', 'Stiker Label Piktogram GHS Terstandar.'],
    participants: ['Purchasing, Gudang, Operator Produksi, Analis Lab, dan Safety Officer.'],
    tableData: {
      headers: ['Bagian SDS', 'Judul Informasi Wajib', 'Kegunaan Utama di Lapangan'],
      rows: [
        ['Bagian 2', 'Identifikasi Bahaya (Hazard Identification)', 'Mengetahui piktogram bahaya dan kata sinyal bahaya'],
        ['Bagian 4', 'Tindakan P3K (First-Aid Measures)', 'Panduan pertolongan pertama saat tertelan, terkena mata/kulit'],
        ['Bagian 8', 'Kontrol Paparan / APD (PPE Requirements)', 'Menentukan jenis sarung tangan dan respirator yang tepat'],
        ['Bagian 10', 'Stabilitas & Reaktivitas (Reactivity)', 'Mengetahui bahan kimia apa saja yang inkompatibel']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/chemical-handling/', label: 'Pelatihan Chemical Handling' },
      { href: '/kategori-pelatihan/k3-laboratorium/', label: 'Pelatihan K3 Laboratorium' }
    ],
    faqs: [
      {
        q: 'Apa perbedaan antara Signal Word "DANGER" dan "WARNING" pada label GHS?',
        a: 'Kata sinyal "DANGER" (BAHAYA) digunakan untuk bahan kimia dengan tingkat keparahan bahaya yang lebih tinggi dan berpotensi fatal, sedangkan "WARNING" (PERINGATAN) digunakan untuk tingkat bahaya yang lebih ringan.'
      }
    ]
  },

  // 63. Petugas K3 Kimia
  {
    key: 'petugas-k3-kimia',
    title: 'Pelatihan Petugas K3 Kimia: Sertifikasi Resmi Kemnaker RI',
    h1: 'Pelatihan Petugas K3 Kimia: Standar Kompetensi Pengawasan, Identifikasi Bahaya Kimia, dan Sertifikasi Kemnaker',
    meta: 'Pelatihan Petugas K3 Kimia Kemnaker RI: kepatuhan Kepmenaker No. 187/1999, audit potensi bahaya besar/menengah bahan kimia, penyusunan lembar SDS, dan penanganan darurat kimia.',
    imgAlt: 'Petugas K3 kimia bersertifikat memeriksa inventaris gudang penyimpanan bahan kimia reaktif',
    related: ['ahli-k3-kimia', 'chemical-handling', 'pengelolaan-limbah-b3', 'msds-dan-gds-labelling'],
    intro: 'Berdasarkan <strong>Kepmenaker No. Kep.187/MEN/1999 tentang Pengendalian Bahan Kimia Berbahaya di Tempat Kerja</strong>, perusahaan yang menggunakan, menyimpan, memproses, atau menghasilkan bahan kimia berbahaya wajib mempekerjakan <strong>Petugas K3 Kimia</strong> yang memiliki sertifikat kompetensi resmi.',
    hazards: [
      '<strong>Pelampauan Nilai Ambang Kuantitas (NAK):</strong> Menyimpan bahan kimia berbahaya melebihi kuantitas batas tanpa dokumen pengendalian instalasi.',
      '<strong>Paparan Kronis Pekerja:</strong> Terjadinya penyakit akibat kerja akibat paparan uap kimia yang melebihi NAB harian.',
      '<strong>Kegagalan Respon Tumpahan Massal:</strong> Ketiadaan personil kompeten saat terjadi kebocoran gas beracun.'
    ],
    regulations: ['<strong>Kepmenaker No. Kep.187/MEN/1999</strong>.', '<strong>Permenaker No. 5 Tahun 2018</strong>.', '<strong>UU No. 1 Tahun 1970</strong>.'],
    modules: [
      {
        name: 'Modul 1: Peraturan Perundangan K3 Kimia & Penentuan Kategori Potensi Bahaya',
        theory: 'Kriteria Potensi Bahaya Besar vs Menengah, perhitungan Nilai Ambang Kuantitas (NAK) bahan beracun, mudah terbakar, reaktif.',
        practical: 'Kalkulasi penentuan kategori potensi bahaya instalasi kimia pabrik.'
      },
      {
        name: 'Modul 2: Manajemen Pengendalian Teknis & Administratif',
        theory: 'Ventilasi LEV, monitoring higiene industri, rotasi kerja, penyusunan prosedur kerja aman (SOP Kimia).',
        practical: 'Penyusunan dokumen pengendalian teknis bahan kimia berbahaya.'
      }
    ],
    equipment: ['Multi-Gas Detector & Photoionization Detector.', 'Personal Air Sampling Pump & Sorbent Tubes.'],
    participants: ['Petugas K3 Kimia, Safety Officer Pabrik Kimia/Farmasi/Tekstil, dan Supervisor Produksi.'],
    tableData: {
      headers: ['Kriteria Potensi Bahaya', 'Kuantitas Bahan Kimia (NAK)', 'Kewajiban Legal Perusahaan'],
      rows: [
        ['Potensi Bahaya Besar', 'Melebihi Nilai Ambang Kuantitas (NAK)', 'Wajib memiliki Ahli K3 Kimia (min 1 org) & Petugas K3 Kimia (min 2 org)'],
        ['Potensi Bahaya Menengah', 'Sama atau di bawah NAK', 'Wajib memiliki Petugas K3 Kimia (min 1 org per shift)']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/ahli-k3-kimia/', label: 'Pelatihan Ahli K3 Kimia' },
      { href: '/kategori-pelatihan/chemical-handling/', label: 'Pelatihan Chemical Handling' }
    ],
    faqs: [
      {
        q: 'Berapa masa berlaku sertifikat dan lisensi Petugas K3 Kimia Kemnaker RI?',
        a: 'Sertifikat dan Lisensi Petugas K3 Kimia resmi dari Kementerian Ketenagakerjaan RI memiliki masa berlaku 3 tahun dan dapat diperpanjang melalui evaluasi kinerja K3 kimia perusahaan.'
      }
    ]
  },

  // 64. Ahli K3 Kimia
  {
    key: 'ahli-k3-kimia',
    title: 'Pelatihan Ahli K3 Kimia: Manajemen Pengendalian Bahan Kimia Berbahaya',
    h1: 'Pelatihan Ahli K3 Kimia: Manajemen Risiko Kimia Mayor, Dokumen Analisis Bahaya (PHA), dan Sertifikasi Kemnaker RI',
    meta: 'Pelatihan Ahli K3 Kimia Kemnaker RI: penyusunan Dokumen Pengendalian Instalasi Potensi Bahaya Besar, Process Safety Management (PSM), HAZOP study kimia, dan sertifikasi ahli.',
    imgAlt: 'Ahli K3 kimia memimpin audit Process Safety Management di ruang kontrol kilang petrokimia',
    related: ['petugas-k3-kimia', 'chemical-handling', 'pengelolaan-limbah-b3'],
    intro: '<strong>Ahli K3 Kimia</strong> memegang wewenang tertinggi dalam merancang sistem manajemen keselamatan proses (<em>Process Safety Management / PSM</em>), menyusun Dokumen Pengendalian Instalasi Potensi Bahaya Besar/Menengah, serta memimpin analisis bahaya proses (HAZOP/PHA) pada industri perminyakan, petrokimia, dan agrokimia.',
    hazards: [
      '<strong>Bencana Kimia Skala Besar (Major Accident Hazard):</strong> Pelepasan awan uap gas beracun (Toxic Gas Cloud Dispersion) yang menyelimuti area pemukiman.',
      '<strong>Runaway Reaction:</strong> Reaksi kimia polimerisasi tak terkendali yang meledakkan reaktor kimia pabrik.',
      '<strong>Kegagalan Layer of Protection (LOPA):</strong> Kegagalan sistem instrumented shutdown saat tekanan reaktor overlimit.'
    ],
    regulations: ['<strong>Kepmenaker No. Kep.187/MEN/1999</strong>.', '<strong>Permenaker No. 5 Tahun 2018</strong>.', '<strong>Standar OSHA 29 CFR 1910.119</strong> (Process Safety Management of Highly Hazardous Chemicals).'],
    modules: [
      {
        name: 'Modul 1: Penyusunan Dokumen Pengendalian Potensi Bahaya Besar',
        theory: 'Struktur dokumen resmi Kemnaker: Identifikasi bahaya, analisis konsekuensi ledakan (ALOHA/PHAST software), rencana tanggap darurat kimia eksternal.',
        practical: 'Penyusunan draf Dokumen Pengendalian Instalasi Potensi Bahaya Besar.'
      },
      {
        name: 'Modul 2: Process Hazard Analysis (PHA) & HAZOP Study',
        theory: 'Guide words HAZOP (More, Less, None, Reverse), identifikasi penyimpangan parameter suhu/tekanan proses.',
        practical: 'Simulasi pelaksanaan sidang HAZOP pada sistem perpipaan reaktor kimia.'
      }
    ],
    equipment: ['Software Pemodelan Dispersi Gas Beracun (ALOHA / Marplot).', 'DCS Simulation & Process Flow Diagram (PFD).'],
    participants: ['Process Engineer, HSE Manager Pabrik Kimia/Migas, dan Konsultan Analisis Risiko Kimia.'],
    tableData: {
      headers: ['Kualifikasi Personel', 'Tugas & Tanggung Jawab Utama', 'Persyaratan Minimum'],
      rows: [
        ['Petugas K3 Kimia', 'Pengawasan operasional harian, inspeksi APD, pengawasan penanganan B3', 'Pendidikan min. SMK Kimia / D3'],
        ['Ahli K3 Kimia', 'Perancangan PSM, evaluasi dokumen potensi bahaya besar, memimpin HAZOP study', 'Pendidikan min. Sarjana (S1) Kimia/Teknik Kimia + Pengalaman']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/petugas-k3-kimia/', label: 'Pelatihan Petugas K3 Kimia' },
      { href: '/kategori-pelatihan/chemical-handling/', label: 'Pelatihan Chemical Handling' }
    ],
    faqs: [
      {
        q: 'Kapan perusahaan wajib menunjuk Ahli K3 Kimia?',
        a: 'Perusahaan wajib memiliki sekurang-kurangnya 1 (satu) orang Ahli K3 Kimia apabila tempat kerja dikategorikan memiliki Potensi Bahaya Besar (melebihi Nilai Ambang Kuantitas bahan kimia yang ditetapkan Kepmenaker 187/1999).'
      }
    ]
  },

  // 65. K3 Laboratorium
  {
    key: 'k3-laboratorium',
    title: 'Pelatihan K3 Laboratorium: Keselamatan Kerja Lab Kimia & Mikrobiologi',
    h1: 'Pelatihan K3 Laboratorium: Pengendalian Fume Hood, Biosafety Level (BSL), Pengelolaan Limbah Lab, dan Good Laboratory Practice',
    meta: 'Pelatihan K3 laboratorium: operasional lemari asam (fume hood), standar Biosafety Cabinet (BSC), dekontaminasi autoclave, manajemen reagen kimia, dan standar ISO/IEC 17025.',
    imgAlt: 'Analis laboratorium mengenakan jas lab kacamata dan masker bekerja di dalam lemari asam fume hood melakukan titrasi kimia',
    related: ['chemical-handling', 'msds-dan-gds-labelling', 'pengelolaan-limbah-b3'],
    intro: 'Laboratorium pengujian kimia, mikrobiologi, farmasi, dan R&amp;D menyimpan ribuan jenis bahan kimia murni, pelarut mudah meledak, serta agen biologi patogen. Pelatihan K3 Laboratorium melatih analis dan kepala lab dalam menegakkan standar keselamatan kerja tanpa mengorbankan akurasi hasil analisis (<em>Good Laboratory Practice / GLP</em>).',
    hazards: [
      '<strong>Ledakan di Lemari Asam (Fume Hood Explosion):</strong> Menguapkan pelarut eter tanpa sistem ekstraksi tahan ledakan.',
      '<strong>Paparan Patogen Biologi (Biohazard Exposure):</strong> Tertusuk jarum suntik atau terpapar aerosol bakteri berbahaya akibat kegagalan Biosafety Cabinet.',
      '<strong>Luka Bakar Reagen Asam Pekat:</strong> Mencampur air ke dalam asam sulfat pekat (memicu percikan mendidih seketika).'
    ],
    regulations: ['<strong>Permenaker No. 5 Tahun 2018</strong>.', '<strong>Standar ISO 15189 / ISO 17025</strong>.', '<strong>Standar CDC/NIH Biosafety in Microbiological and Biomedical Laboratories (BMBL)</strong>.'],
    modules: [
      {
        name: 'Modul 1: Operasional & Uji Kelayakan Lemari Asam (Fume Hood)',
        theory: 'Kecepatan aliran hisap muka (Face Velocity 0.4 – 0.6 m/s), posisi bukaan sash window, larangan menimbun botol reagen.',
        practical: 'Pengukuran face velocity fume hood menggunakan anemometer baling-baling digital.'
      },
      {
        name: 'Modul 2: Biosafety & Biosecurity Tingkat 1, 2, 3 (BSL)',
        theory: 'Perbedaan Biosafety Cabinet Class I, II, III, filter HEPA, sterilisasi autoclave limbah medis padat.',
        practical: 'Drill dekontaminasi tumpahan kultur mikroorganisme menggunakan disinfektan klorin aktif.'
      }
    ],
    equipment: ['Fume Hood Face Velocity Anemometer.', 'Biosafety Cabinet Class II Type A2.', 'Lab Spill Kit & Biohazard Waste Autoclave Bags.'],
    participants: ['Analis Laboratorium Kimia/Biologi, Kepala Lab, QA/QC Inspector, dan Dosen/Teknisi Lab.'],
    tableData: {
      headers: ['Peralatan Keselamatan Lab', 'Fungsi Utama Proteksi', 'Parameter Operasional Standar', 'Uji Rutin'],
      rows: [
        ['Lemari Asam (Fume Hood)', 'Menghisap uap gas kimia beracun menjauh dari analis', 'Face Velocity = 0.5 m/s pada bukaan sash 30 cm', 'Uji kecepatan hisap tiap 6 bulan'],
        ['Biosafety Cabinet (BSC Class II)', 'Melindungi produk, analis, dan lingkungan dari biohazard', 'HEPA Filter efisiensi 99.97% partikel 0.3 mikron', 'Sertifikasi aliran udara tahunan'],
        ['Emergency Eye Wash Lab', 'Pembilasan darurat mata terkena reagen', 'Debit air minimal 1.5 L/menit suhu suam-suam kuku', 'Uji flushing harian']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/chemical-handling/', label: 'Pelatihan Chemical Handling' },
      { href: '/kategori-pelatihan/msds-dan-gds-labelling/', label: 'Pelatihan MSDS & Label GHS' }
    ],
    faqs: [
      {
        q: 'Bagaimana aturan baku pengenceran asam pekat dengan air di laboratorium?',
        a: 'Aturan emas kimia: SELALU TUANGKAN ASAM KE DALAM AIR (Always Add Acid to Water - AAA) secara perlahan melalui dinding gelas kimia sambil diaduk. DILARANG menuangkan air ke dalam asam pekat karena air akan mendidih seketika dan memercikkan asam ke wajah analis!'
      }
    ]
  },

  // 66. Pengendalian Debu & Fumigasi
  {
    key: 'pengendalian-debu-dan-fumigasi',
    title: 'Pelatihan Pengendalian Debu Mudah Meledak & Fumigasi Industri',
    h1: 'Pelatihan Pengendalian Combustible Dust & Fumigasi: Pencegahan Ledakan Debu Silo dan Keselamatan Gas Fosfin',
    meta: 'Pelatihan combustible dust & fumigasi: mekanisme ledakan debu pentagon, sistem venting ledakan (explosion venting), keselamatan fumigasi gas Phostoxin (Aluminium Fosfida), dan standar NFPA 652.',
    imgAlt: 'Petugas fumigasi mengenakan full face respirator dengan filter gas fosfin memeriksa segel terpal kedap gas di gudang biji-bijian',
    related: ['confined-space-entry', 'chemical-handling', 'petugas-k3-kimia'],
    intro: 'Debu organik seperti tepung terigu, serbuk kayu, gula halus, serbuk batu bara, dan serbuk aluminium dalam kondisi melayang (<em>airborne suspension</em>) di dalam ruangan tertutup dapat meledak dahsyat jika terpicu percikan listrik statis. Pelatihan ini melatih manajemen <strong>Combustible Dust (Ledakan Debu)</strong> dan prosedur keselamatan <strong>Fumigasi Gas Fosfin</strong> pada silo pangan dan pergudangan komoditas.',
    hazards: [
      '<strong>Ledakan Sekunder Debu (Secondary Dust Explosion):</strong> Ledakan kecil primer menggetarkan debu di langit-langit memicu ledakan bola api raksasa kedua.',
      '<strong>Keracunan Gas Fosfin (PH3 Poisoning):</strong> Kebocoran gas fumigan sangat beracun saat pembukaan terpal fumigasi komoditas pangan.',
      '<strong>Listrik Statis Konveyor:</strong> Gesekan partikel serbuk pada pipa pneumatik menghasilkan loncatan api statis.'
    ],
    regulations: ['<strong>Permenaker No. 5 Tahun 2018</strong> tentang K3 Lingkungan Kerja.', '<strong>Standar NFPA 652 / NFPA 654</strong> (Standard on the Fundamentals of Combustible Dust).', '<strong>Permentan No. 12 Tahun 2009</strong> tentang Fumigasi Badan Karantina.'],
    modules: [
      {
        name: 'Modul 1: Segilima Ledakan Debu (Dust Explosion Pentagon)',
        theory: 'Bahan Bakar Debu + Oksigen + Panas + Suspensi/Penyebaran + Pengurungan (Confinement). Batas konsentrasi MEC (Minimum Explosible Concentration).',
        practical: 'Audit housekeeping tumpukan debu di atas balok atap pabrik pakan ternak.'
      },
      {
        name: 'Modul 2: Proteksi Rekayasa Teknik Ledakan Debu',
        theory: 'Explosion Venting Panel, Flameless Venting, Sistem Isolasi Ledakan Cepat (Chemical Suppression Barrels).',
        practical: 'Inspeksi grounding kabel anti-statis pada sistem dust collector (baghouse).'
      },
      {
        name: 'Modul 3: Prosedur Keselamatan Kerja Fumigasi Gas Fosfin (PH3)',
        theory: 'Karakteristik tablet Aluminium Fosfida, waktu pemaparan gas, ambang batas aman masuk (maks 0.3 ppm), uji kebocoran.',
        practical: 'Drill aerasi pasca-fumigasi dan pengukuran kadar gas PH3 menggunakan tabung detektor kolorimetrik.'
      }
    ],
    equipment: ['Colorimetric Gas Detector Tube Kit (Gas Fosfin PH3 0.1 - 10 ppm).', 'Static Grounding Clamp with LED Indicator.', 'Full Face Gas Mask dengan Filter B2 (Inorganic Gases).'],
    participants: ['Supervisor Silo Pangan/Pakan Ternak, Teknisi Dust Collector, Fumigator Berlisensi, dan Safety Officer.'],
    tableData: {
      headers: ['Parameter Keselamatan', 'Standar Combustible Dust (NFPA 654)', 'Standar Fumigasi Gas PH3'],
      rows: [
        ['Batas Ketebalan Debu Lantai/Atap', 'Maks. 0.8 mm (Setebal klip kertas)', 'N/A (Fokus pada kerapatan gas)'],
        ['Batas Paparan Gas Aman Masuk', 'N/A', 'Wajib < 0.3 ppm PH3 di udara bebas'],
        ['Alat Deteksi Wajib', 'Dust Concentration Monitor / Spark Detector', 'Phosphine Gas Detector Portabel terkalibrasi']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/confined-space-entry/', label: 'Pelatihan Confined Space Entry' },
      { href: '/kategori-pelatihan/chemical-handling/', label: 'Pelatihan Chemical Handling' }
    ],
    faqs: [
      {
        q: 'Apa perbedaan mendasar antara Segitiga Api (Fire Triangle) dan Segilima Ledakan Debu (Dust Explosion Pentagon)?',
        a: 'Segitiga api hanya membutuhkan 3 elemen: Bahan bakar, Oksigen, dan Panas. Sedangkan ledakan debu memerlukan 2 elemen tambahan (sehingga menjadi segilima): (4) Dispersi / Suspensi partikel debu di udara, dan (5) Pengurungan (Confinement) dalam ruangan tertutup seperti silo atau pipa ducting.'
      }
    ]
  }
];

console.log(`Loaded ${batch2List.length} master programs for Batch 2.`);
