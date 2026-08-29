import { MultiArchetypeProgramDetail } from './multi-archetype-renderer';

export const batch7ReplacementPages: MultiArchetypeProgramDetail[] = [
  // 1. Dumai Riau
  {
    key: 'in-house-training-k3-dumai-riau',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/in-house-training-k3-dumai-riau/',
    archetype: 'regional',
    title: 'In-House Training K3 Dumai: Sertifikasi Pabrik Sawit, Kilang Minyak, & Pelabuhan',
    h1: 'In-House Training K3 Kota Dumai: Sertifikasi Kemnaker & BNSP untuk Kilang Minyak, Industri Oleokimia, & Terminal Ekspor CPO Riau',
    meta: 'In-House Training K3 Dumai: sertifikasi ahli K3 umum, K3 kimia, operator boiler, teknisi confined space & damkar industri kilang minyak Riau.',
    imgAlt: 'Instruktur K3 memberikan pelatihan confined space rescue dan chemical handling pada fasilitas kilang minyak dan oleokimia di Dumai Riau',
    related: ['in-house-training-k3-duri-dumai', 'in-house-training-k3-pekanbaru', 'pengendalian-bahaya-kimia-b3', 'k3-keselamatan-kerja'],
    intro: 'Kota Dumai adalah kota pelabuhan ekspor CPO (Crude Palm Oil) terbesar di Indonesia sekaligus rumah bagi kilang minyak Pertamina RU II Dumai dan kawasan industri oleokimia terpadu Pelintung. Karakteristik operasi berisiko tinggi dengan keterlibatan tangki timbun hidrokarbon raksasa, instalasi perpipaan amonia, dan boiler uap biomassa menuntut program <strong>In-House Training K3 Dumai</strong> bersertifikasi resmi Kemnaker RI dan BNSP.',
    hazards: [
      '<strong>Bahaya Kebakaran & Ledakan Tangki CPO / BBM:</strong> Akumulasi uap gas mudah terbakar di ruang hampa tangki timbun (storage tank).',
      '<strong>Keracunan Gas Beracun Ruang Terbatas (H2S & CO):</strong> Pembersihan endapan lumpur (tank cleaning) bejana fraksinasi tanpa blower ventilasi.',
      '<strong>Ledakan Bejana Tekan & Pipa Steam Pabrik Oleokimia:</strong> Tekanan uap melampaui batas desain pipa penyalur akibat kegagalan safety valve.',
      '<strong>Kecelakaan Crane & Bongkar Muat di Dermaga Pelabuhan:</strong> Putusnya sling kawat saat pemindahan kargo pipa berat ke kapal tanker.'
    ],
    regulations: [
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Permenaker No. 37 Tahun 2016</strong> tentang K3 Bejana Tekanan dan Tangki Timbun.',
      '<strong>Kepmenaker No. 187/MEN/1999</strong> tentang Pengendalian Bahan Kimia Berbahaya di Tempat Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Manajemen K3 Kilang & Tangki Timbun BBM/CPO Standar Dumai',
        theory: 'Regulasi bejana tekan Permenaker 37/2016, sistem proteksi tanggul (bund wall), katup pelepas tekanan PSV, pembumian listrik statis.',
        practical: 'Inspeksi sistem proteksi kebakaran foam fixed system pada tangki timbun minyak.'
      },
      {
        name: 'Modul 2: Izin Kerja Ruang Terbatas & Pengujian Gas Atmosferis (Gas Testing)',
        theory: 'Prosedur pembersihan tangki bejana uap, pengujian 4 gas (O2, LEL, H2S, CO), isolasi energi total LOTO pipa produk.',
        practical: 'Simulasi masuk manhole tangki menggunakan SCBA dan tripod rescue winch.'
      },
      {
        name: 'Modul 3: Tanggap Darurat Tumpahan B3 & Proteksi Kebakaran Industri',
        theory: 'Penggunaan oil spill boom di dermaga pelabuhan, operasional pompa hydrant diesel, pemadaman api gas bertekanan.',
        practical: 'Drill simulasi pembendungan tumpahan minyak dan pemadaman kebakaran cairan flammable.'
      }
    ],
    equipment: [
      'Multi-Gas Detector 4-Gas (O2, LEL, H2S, CO) Terkalibrasi Aktif.',
      'SCBA Positive Pressure 300 Bar Carbon Composite.',
      'Oil Spill Boom 25 Meter & Chemical Absorbent Pad.',
      'Tripod Confined Space Rescue System Heavy Duty.'
    ],
    participants: [
      'Operator Kilang, Teknisi Tangki Timbun, Safety Officer Oleokimia, Maintenance Boiler, Pengawas Pelabuhan Dumai.'
    ],
    tableData: {
      headers: ['Program Pelatihan K3 Dumai', 'Sertifikasi Resmi', 'Durasi Training', 'Target Sektor Industri'],
      rows: [
        ['Ahli K3 Umum & Spesialis Kimia', 'Kemnaker RI / SKP Resmi', '12 Hari Intensif', 'Kilang Minyak & Pabrik Oleokimia Dumai'],
        ['Petugas Ruang Terbatas (Confined Space)', 'Kemnaker RI (Kepdirjen 113/2006)', '3 Hari Kerja', 'Pembersihan Tangki Timbun & Reaktor'],
        ['Operator Boiler Uap Kelas I & II', 'Kemnaker RI (Permenaker 01/1988)', '4 Hari Kerja', 'Pabrik Minyak Goreng & Biodiesel CPO'],
        ['Regu Pemadam Kebakaran Kelas D/C', 'Kemnaker RI (Kepmenaker 186/1999)', '3 Hari Kerja', 'Terminal Logistik & Depo Minyak Pelabuhan']
      ]
    },
    caseStudy: 'Sebuah pabrik fraksinasi CPO di Kawasan Industri Pelintung Dumai berhasil mencatatkan 5 Juta Jam Kerja Selamat (Zero LTI) setelah melatih seluruh tim maintenance-nya dalam prosedur LOTO pipa uap dan confined space rescue.',
    stepByStepGuide: [
      { step: '1. Asesmen Risiko Fasilitas Site Dumai', desc: 'Pemetaan potensi bahaya tangki timbun, jalur pipa amonia, dan boiler uap pabrik.' },
      { step: '2. Kustomisasi Silabus In-House', desc: 'Menyelaraskan materi pelatihan dengan SOP internal dan izin kerja PTW kilang.' },
      { step: '3. Pelaksanaan Teori & Praktik Lapangan', desc: 'Pelatihan teori interaktif dan simulasi drill evakuasi darurat langsung di area pabrik.' },
      { step: '4. Uji Sertifikasi Resmi Kemnaker', desc: 'Evaluasi ujian teori dan praktik oleh Pengawas K3 Kemnaker untuk penerbitan lisensi SIO/SKP.' }
    ],
    links: [
      { href: '/kategori-pelatihan/in-house-training-k3-duri-dumai/', anchor: 'In-House Training K3 Duri Dumai' },
      { href: '/kategori-pelatihan/in-house-training-k3-pekanbaru/', anchor: 'In-House Training K3 Pekanbaru' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 2. Cileungsi Bogor
  {
    key: 'in-house-training-k3-cileungsi-bogor',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/in-house-training-k3-cileungsi-bogor/',
    archetype: 'regional',
    title: 'In-House Training K3 Cileungsi & Klapanunggal: Pabrik Semen & Manufaktur',
    h1: 'In-House Training K3 Kawasan Industri Cileungsi, Klapanunggal, & Gunung Putri Bogor: Sertifikasi K3 Pabrik Semen, Industri Otomotif, & Logistik',
    meta: 'In-House Training K3 Cileungsi Bogor: sertifikasi ahli K3 umum, operator forklift, riksa uji bejana tekan, isolasi LOTO & K3 pabrik semen.',
    imgAlt: 'Pelaksanaan in-house training K3 dan praktik penggunaan APAR di area pabrik manufaktur semen dan logam di Cileungsi Bogor',
    related: ['in-house-training-k3-cikarang', 'in-house-training-k3-karawang', 'k3-keselamatan-kerja', 'ahli-k3-umum-kemnaker'],
    intro: 'Kawasan Industri Cileungsi, Klapanunggal, dan Gunung Putri di Kabupaten Bogor merupakan koridor manufaktur strategis yang menjadi pusat pabrik semen raksasa, industri logam berat, perakitan otomotif, dan pergudangan logistik. Program <strong>In-House Training K3 Cileungsi Bogor</strong> dirancang khusus untuk memenuhi standar keselamatan operasional mesin berat, rotary kiln, dan keselamatan armada logistik.',
    hazards: [
      '<strong>Paparan Debu Silika & Suhu Tinggi Rotary Kiln:</strong> Inhalasi debu klinker semen dan bahaya luka bakar termal ruang pembakaran.',
      '<strong>Kecelakaan Forklift & Truk Tronton di Gudang:</strong> Lalu lintas padat kendaraan angkut material di area loading semen.',
      '<strong>Terjepit Roller Belt Conveyor Panjang:</strong> Pekerja membersihkan tumpahan batu kapur tanpa prosedur LOTO sakelar pengaman.',
      '<strong>Bahaya Tegangan Tinggi Gardu Trafo Pabrik Semen:</strong> Pekerjaan perbaikan motor listrik 6.6 kV tanpa sarung tangan isolasi bertegangan.'
    ],
    regulations: [
      '<strong>Permenaker No. 5 Tahun 2018</strong> tentang K3 Lingkungan Kerja (Debu Silika).',
      '<strong>Permenaker No. 38 Tahun 2016</strong> tentang K3 Pesawat Tenaga dan Produksi.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Pengendalian Debu Industri & Higiene Lingkungan Kerja Pabrik Semen',
        theory: 'Standar Nilai Ambang Batas (NAB) debu silika 0.025 mg/m³, sistem ventilasi Baghouse Dust Collector, APD respirator N95/P100.',
        practical: 'Pengukuran konsentrasi debu udara menggunakan dust particulate meter di area packaging.'
      },
      {
        name: 'Modul 2: Keselamatan Sistem Conveyor & Prosedur LOTO 8 Langkah',
        theory: 'Titik jepit nip point idler roller, uji emergency pull-wire switch, protokol gembok LOTO pada circuit breaker motor 250 kW.',
        practical: 'Simulasi penguncian LOTO dan verifikasi zero energy sebelum masuk ke chute crusher.'
      },
      {
        name: 'Modul 3: Defensive Driving Forklift & Truk Berat Ekspedisi Semen',
        theory: 'Stabilitas forklift membawa palet semen 2 ton, blind spot truk tronton, manajemen jalur pejalan kaki pedestrian.',
        practical: 'Uji sirkuit manuver forklift sempit dan inspeksi harian pra-operasi (P2H).'
      }
    ],
    equipment: [
      'Unit Forklift Counterbalance Diesel 3.5 Ton & Set Palet Beban.',
      'Digital Dust Particle Counter PM2.5 / PM10 Terkalibrasi.',
      'Lockout/Tagout Heavy Duty Kit untuk Motor Listrik Industri.',
      'Full Body Harness Double Hook & Gas Detector Portabel.'
    ],
    participants: [
      'Supervisor Produksi Semen, Operator Forklift Gudang, Teknisi Maintenance Conveyor, Safety Officer Cileungsi, Dokter Hiperkes Pabrik.'
    ],
    tableData: {
      headers: ['Bidang Pelatihan K3 Cileungsi', 'Sertifikasi Acuan', 'Durasi Pelatihan', 'Target Peserta'],
      rows: [
        ['Ahli K3 Umum Kemnaker', 'Kemnaker RI (SKP & Lisensi)', '12 Hari Kerja', 'HSE Officer & Calon Sekretaris P2K3'],
        ['Lisensi Operator Forklift Kelas II', 'Permenaker No. 08/2020', '3 Hari Kerja', 'Driver Forklift Gudang & Distribusi'],
        ['Teknisi K3 Listrik & LOTO', 'Permenaker No. 12/2015', '4 Hari Kerja', 'Teknisi Listrik Pabrik & Mekanik'],
        ['Higiene Industri & Ergonomi', 'Permenaker No. 05/2018', '2 Hari Kerja', 'Tim Lingkungan Hidup & Paramedis']
      ]
    },
    caseStudy: 'Sebuah pabrik semen di Klapanunggal Bogor menekan angka kerusakan belt conveyor dan insiden tangan terjepit hingga 0 kasus dalam 3 tahun setelah menerapkan program sertifikasi LOTO terintegrasi bagi seluruh teknisinya.',
    stepByStepGuide: [
      { step: '1. Diagnosa Bahaya Lapangan Cileungsi', desc: 'Identifikasi risiko spesifik debu, conveyor, dan forklift di fasilitas pabrik.' },
      { step: '2. Penyelenggaraan Workshop On-Site', desc: 'Pelaksanaan materi teori di ruang training pabrik tanpa mengganggu jalannya shift produksi.' },
      { step: '3. Simulasi Praktik Mesin Riil', desc: 'Ujian praktik pemasangan LOTO dan manuver alat berat pada mesin pabrik sebenarnya.' },
      { step: '4. Evaluasi & Sertifikat Kemnaker', desc: 'Ujian resmi tertulis dan penerbitan lisensi SIO/SKP resmi Kemnaker RI.' }
    ],
    links: [
      { href: '/kategori-pelatihan/in-house-training-k3-cikarang/', anchor: 'In-House Training K3 Cikarang' },
      { href: '/kategori-pelatihan/in-house-training-k3-karawang/', anchor: 'In-House Training K3 Karawang' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 3. Subang Smartpolitan & Patimban
  {
    key: 'in-house-training-k3-subang-smartpolitan',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/in-house-training-k3-subang-smartpolitan/',
    archetype: 'regional',
    title: 'In-House Training K3 Subang Smartpolitan & Pelabuhan Patimban',
    h1: 'In-House Training K3 Kawasan Industri Subang Smartpolitan & Pelabuhan Internasional Patimban: Sertifikasi K3 Otomotif, Logistik, & Konstruksi Modern',
    meta: 'In-House Training K3 Subang: sertifikasi ahli K3 umum, operator crane pelabuhan Patimban, K3 konstruksi gedung & K3 manufaktur otomotif Subang.',
    imgAlt: 'Sesi in-house training keselamatan konstruksi dan rigging lifting di proyek pembangunan kawasan industri Subang Smartpolitan',
    related: ['in-house-training-k3-karawang', 'operator-stacker-crane-pelabuhan', 'k3-keselamatan-kerja', 'ahli-k3-umum-kemnaker'],
    intro: 'Kawasan Ekonomi Rebana dengan episentrum Kawasan Industri Subang Smartpolitan dan Pelabuhan Internasional Patimban berkembang pesat menjadi pusat manufaktur otomotif, elektronik, dan logistik ekspor baru di Jawa Barat. Program <strong>In-House Training K3 Subang</strong> membekali perusahaan industri pionir dan kontraktor EPC dengan kualifikasi keselamatan kerja berstandar internasional.',
    hazards: [
      '<strong>Kecelakaan Konstruksi Struktur Baja & Ketinggian:</strong> Pemasangan balok girder pabrik tanpa jaring pengaman dan safety line.',
      '<strong>Bahaya Operasi Crane Pelabuhan Patimban (QCC/RTG):</strong> Beban peti kemas terlepas saat bongkar muat kapal kargo internasional.',
      '<strong>Lalu Lintas Kendaraan Berat di Akses Tol & Pelabuhan:</strong> Tabrakan truk trailer kontainer dengan kendaraan konstruksi di jalan proyek.',
      '<strong>Instalasi Kelistrikan Otomasi Robotik Pabrik Otomotif:</strong> Sengatan listrik dan bahaya arc flash saat komisioning lini perakitan.'
    ],
    regulations: [
      '<strong>Permenaker No. 1 Tahun 1980</strong> tentang K3 Konstruksi Bangunan.',
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang K3 Pesawat Angkat dan Angkut (Pelabuhan).',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Manajemen K3 Konstruksi Mega Proyek & Dokumen SMKK PUPR',
        theory: 'Penyusunan Rencana Keselamatan Konstruksi (RKK), audit Scafftag, proteksi jatuh 100% tie-off, inspeksi alat berat galian.',
        practical: 'Penyusunan dokumen Job Safety Analysis (JSA) pekerjaan ereksi baja bentang 40 meter.'
      },
      {
        name: 'Modul 2: Keselamatan Operasi Bongkar Muat Peti Kemas Pelabuhan Patimban',
        theory: 'Standar operasi Container Crane, sensor twistlock spreader, mitigasi angin laut kencang > 30 knot, komunikasi rigger sinyal.',
        practical: 'Simulasi lifting kontainer 40 feet dan prosedur darurat penguncian rel badai (rail storm clamp).'
      },
      {
        name: 'Modul 3: K3 Otomasi Manufaktur & Prosedur LOTO Pabrik Pintar',
        theory: 'Machine guarding sensor laser (Light Curtain), isolasi energi robotik perakitan mobil, tanggap darurat baterai EV.',
        practical: 'Audit interlock pintu pelindung robotik dan pemasangan gembok keselamatan LOTO panel otomasi.'
      }
    ],
    equipment: [
      'Set Alat Rigging Pelabuhan: Spreader, Webbing Sling 10 Ton, Bow Shackle.',
      'Full Body Harness EN 361 dengan Integrated Shock Absorber & Double Hook.',
      'Laser Safety Light Curtain & Sensor Interlock Simulator.',
      'Anemometer Pengukur Kecepatan Angin Digital Pesisir Pantai.'
    ],
    participants: [
      'HSE Coordinator Kontraktor EPC, Operator Crane Pelabuhan Patimban, Supervisor Perakitan Otomotif Subang, Rigger, Safety Inspector.'
    ],
    tableData: {
      headers: ['Skema Pelatihan K3 Subang', 'Sertifikasi Resmi', 'Durasi Waktu', 'Target Industri'],
      rows: [
        ['Ahli K3 Konstruksi (Muda / Madya)', 'Kemnaker RI / BNSP', '5 - 6 Hari', 'Kontraktor Pembangunan Pabrik & Dermaga'],
        ['Operator Crane & Rigger Pelabuhan', 'Permenaker No. 08/2020', '3 - 4 Hari', 'Terminal Peti Kemas & Logistik Patimban'],
        ['Ahli K3 Umum Kemnaker RI', 'Kemnaker RI (SKP Resmi)', '12 Hari', 'Pabrik Otomotif & Elektronik Subang Smartpolitan'],
        ['Teknisi Bekerja di Ketinggian (TKBT 2)', 'Permenaker No. 09/2016', '3 Hari', 'Pekerja Struktur Atap Gudang & Scaffolding']
      ]
    },
    caseStudy: 'Sebuah konsorsium kontraktor pembangunan dermaga Pelabuhan Patimban berhasil menyelesaikan fase konstruksi 2 tahun dengan Zero Fatal Accident setelah menerapkan sertifikasi K3 Konstruksi dan safety induction ketat bagi 1.500 pekerjanya.',
    stepByStepGuide: [
      { step: '1. Pemetaan Karakteristik Proyek Subang', desc: 'Menelaah jadwal konstruksi, instalasi mesin pabrik, dan logistik dermaga.' },
      { step: '2. Pelaksanaan Modul K3 In-House', desc: 'Pelatihan langsung di lokasi proyek dengan studi kasus medan tanah Subang.' },
      { step: '3. Simulasi Rigging & Proteksi Ketinggian', desc: 'Ujian praktik pengikatan beban berat dan manuver harness di scaffolding.' },
      { step: '4. Penerbitan Lisensi Kompetensi Kemnaker', desc: 'Uji sertifikasi resmi oleh Pengawas Ketenagakerjaan Disnaker Provinsi Jawa Barat.' }
    ],
    links: [
      { href: '/kategori-pelatihan/in-house-training-k3-karawang/', anchor: 'In-House Training K3 Karawang' },
      { href: '/kategori-pelatihan/operator-stacker-crane-pelabuhan/', anchor: 'Sertifikasi Crane Pelabuhan' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 4. Batang KITB
  {
    key: 'in-house-training-k3-batang-kitb',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/in-house-training-k3-batang-kitb/',
    archetype: 'regional',
    title: 'In-House Training K3 Kawasan Industri Terpadu Batang (KITB)',
    h1: 'In-House Training K3 Kawasan Industri Terpadu Batang (KITB / Grand Batang City): Sertifikasi K3 Industri Kaca, Baterai EV, Tekstil, & Manufaktur Presisi',
    meta: 'In-House Training K3 Batang KITB: sertifikasi K3 umum, K3 kimia B3, operator boiler uap, keselamatan mesin kaca & instalasi listrik industri.',
    imgAlt: 'Pelatihan in-house K3 lingkungan kerja dan ergonomi industri bagi operator pabrik di Kawasan Industri Terpadu Batang KITB',
    related: ['in-house-training-k3-kendal-semarang', 'in-house-training-k3-solo-surakarta', 'k3-keselamatan-kerja', 'ahli-k3-umum-kemnaker'],
    intro: 'Kawasan Industri Terpadu Batang (KITB / Grand Batang City) di Jawa Tengah merupakan Kawasan Strategis Nasional yang menampung mega industri kaca terbesar di Asia Tenggara, pabrik katoda baterai kendaraan listrik (EV Battery), industri tekstil modern, dan manufaktur berteknologi tinggi. Program <strong>In-House Training K3 Batang KITB</strong> memberikan pendampingan kepatuhan K3 komprehensif bagi investor multinasional dan tenant industri baru.',
    hazards: [
      '<strong>Suhu Ekstrem Tungku Peleburan Kaca (Glass Melting Furnace):</strong> Bahaya radiasi panas 1.500°C dan bahaya kaca pecah tajam.',
      '<strong>Bahan Kimia Korosif & Reaktif Pembuatan Baterai EV:</strong> Paparan asam sulfat pekat, litium, nikel, dan kobalt toksik.',
      '<strong>Kebakaran Ruang Spinning & Debu Kapas Tekstil:</strong> Percikan listrik statis pada serat kapas kering yang memicu flash fire.',
      '<strong>Kecelakaan Boiler Uap Tekanan Tinggi:</strong> Kegagalan sistem air umpan boiler superheated steam pabrik proses.'
    ],
    regulations: [
      '<strong>Permenaker No. 5 Tahun 2018</strong> tentang K3 Lingkungan Kerja (Fisika & Kimia).',
      '<strong>Kepmenaker No. 187/MEN/1999</strong> tentang Pengendalian Bahan Kimia Berbahaya.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: K3 Industri Peleburan & Penanganan Material Kaca Panas',
        theory: 'Alat pelindung diri aluminized suit tahan panas, sistem pendingin darurat tungku, penanganan limbah beling kaca tajam.',
        practical: 'Inspeksi pakaian tahan panas dan simulasi penanganan pecahan kaca otomatis di lini konveyor.'
      },
      {
        name: 'Modul 2: Keselamatan Bahan Kimia B3 Pembuatan Baterai EV & Spill Response',
        theory: 'Sifat reaktif elektrolit litium baterai, APD masker respirator cartridge asam, ventilasi exhaust ruang bersih (Dry Room).',
        practical: 'Praktik penggunaan hazmat chemical spill kit untuk menangani tumpahan cairan asam baterai.'
      },
      {
        name: 'Modul 3: Manajemen Kebakaran Industri Tekstil & Proteksi Listrik Statis',
        theory: 'Bahaya ledakan debu serat (Combustible Dust), grounding bonding mesin carding, sistem sprinkler otomatis pre-action.',
        practical: 'Audit grounding listrik statis mesin tenun dan simulasi pemadaman api menggunakan APAR CO2.'
      }
    ],
    equipment: [
      'Aluminized Heat-Resistant Suit & Face Shield Pelindung Tungku 1.000°C.',
      'Chemical Hazmat Spill Kit Drum 120 Liter Lengkap Absorbent Pad & Sock.',
      'Static Grounding Clamp Meter untuk Pengukuran Listrik Statis Mesin.',
      'Digital Heat Stress Meter (ISBB) untuk Pengukuran Iklim Kerja Panas.'
    ],
    participants: [
      'Safety Officer Tenant KITB, Operator Tungku Kaca, Teknisi Kimia Baterai, Maintenance Mesin Tekstil, Supervisor HSE Batang.'
    ],
    tableData: {
      headers: ['Program K3 Unggulan KITB', 'Sertifikasi Resmi', 'Durasi Training', 'Target Tenant Industri'],
      rows: [
        ['Ahli K3 Spesialis Kimia', 'Kemnaker RI (Kepmenaker 187/1999)', '12 Hari Kerja', 'Pabrik Baterai EV & Pabrik Kimia Kaca'],
        ['Operator Boiler Uap Kelas I', 'Permenaker No. 01/1988', '4 Hari Kerja', 'Pabrik Tekstil & Manufaktur Pemrosesan'],
        ['Ahli K3 Umum Kemnaker', 'Kemnaker RI (SKP Resmi)', '12 Hari Kerja', 'Tenant Baru Kawasan Industri KITB Batang'],
        ['Regu Pemadam Kebakaran Kelas D/C', 'Kemnaker RI (Kepmenaker 186/1999)', '3 Hari Kerja', 'Fasilitas Gudang & Lini Produksi Tekstil']
      ]
    },
    caseStudy: 'Sebuah pabrik komponen kaca presisi di KITB Batang berhasil mencapai 100% kepatuhan audit SMK3 PP 50/2012 pada tahun pertama beroperasi setelah melatih seluruh jajaran supervisor dan safety officer-nya dalam program In-House Training K3 terpadu.',
    stepByStepGuide: [
      { step: '1. Gap Analysis Fasilitas Tenant Baru', desc: 'Menilai pemenuhan standar regulasi K3 sebelum pabrik baru memulai fase komisioning.' },
      { step: '2. Pelaksanaan Pelatihan K3 In-House', desc: 'Pelatihan komprehensif bagi staf lokal dan ekspatriat dengan modul dwibahasa.' },
      { step: '3. Simulasi Praktik di Area Produksi', desc: 'Ujian drill tumpahan kimia dan proteksi panas langsung di lantai pabrik KITB.' },
      { step: '4. Sertifikasi Resmi Pengawas Kemnaker', desc: 'Ujian resmi dan penerbitan SKP Ahli K3 & SIO operator dari Kemnaker RI.' }
    ],
    links: [
      { href: '/kategori-pelatihan/in-house-training-k3-kendal-semarang/', anchor: 'In-House Training K3 Kendal Semarang' },
      { href: '/kategori-pelatihan/in-house-training-k3-solo-surakarta/', anchor: 'In-House Training K3 Solo Surakarta' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 5. Ciwandan Merak
  {
    key: 'in-house-training-k3-ciwandan-merak',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/in-house-training-k3-ciwandan-merak/',
    archetype: 'regional',
    title: 'In-House Training K3 Ciwandan & Merak: Pelabuhan Kimia, Bulk Cargo, & PLTU',
    h1: 'In-House Training K3 Ciwandan, Merak, & Anyer Banten: Sertifikasi K3 Pelabuhan Curah, Industri Kimia Berat, & Pembangkit Listrik PLTU Suralaya',
    meta: 'In-House Training K3 Ciwandan Merak: sertifikasi ahli K3 kimia, operator conveyor batubara PLTU, rigger bulk cargo pelabuhan & tanggap darurat B3 Banten.',
    imgAlt: 'Pelatihan in-house keselamatan kerja K3 kimia dan pemadaman kebakaran gas di pelabuhan curah cair dan PLTU Merak Banten',
    related: ['in-house-training-k3-cilegon', 'in-house-training-k3-serang-banten', 'ahli-k3-kimia', 'k3-keselamatan-kerja'],
    intro: 'Kawasan Ciwandan, Merak, dan Anyer di pesisir Selat Sunda merupakan gerbang logistik curah cair dan curah padat terbesar di Banten, menghubungkan dermaga Pelabuhan Ciwandan, industri kimia klorin/amonia Merak, dan kompleks PLTU Suralaya. Karakteristik bahaya ekstrem seperti ledakan bahan kimia cair, debu batubara mudah terbakar, dan operasi ship unloader menuntut program <strong>In-House Training K3 Ciwandan Merak</strong> berstandar ketat.',
    hazards: [
      '<strong>Kebocoran Gas Klorin / Amonia Bertekanan:</strong> Awan gas beracun yang menyebar cepat ke pemukiman pesisir Merak.',
      '<strong>Kebakaran Spontan Timbunan Batubara PLTU (Coal Self-Combustion):</strong> Penumpukan batubara di stockpile yang membakar conveyor belt.',
      '<strong>Kecelakaan Crane Gantry Pelabuhan Curah (Ship Unloader):</strong> Grab crane menabrak palka kapal tongkang saat membongkar muatan klinker.',
      '<strong>Bahaya Bekerja di Ruang Terbatas Palka Kapal (Ship Hold Asphyxiation):</strong> Oksigen menipis drastis di dasar palka kapal akibat pembusukan material organik.'
    ],
    regulations: [
      '<strong>Kepmenaker No. 187/MEN/1999</strong> tentang Pengendalian Bahan Kimia Berbahaya.',
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang K3 Pesawat Angkat dan Angkut.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Manajemen K3 Bahan Kimia Berbahaya & Pipa Penyalur Dermaga Merak',
        theory: 'Klasifikasi bahan kimia B3 GHS, proteksi pipa loading arm cairan kimia, sistem emergency shutdown valve (ESDV), netralisasi uap beracun.',
        practical: 'Simulasi tanggap kebocoran flange pipa amonia menggunakan gas mask respirator dan air mancur water curtain.'
      },
      {
        name: 'Modul 2: Keselamatan Stockpile Batubara & Sistem Conveyor PLTU Suralaya',
        theory: 'Mekanisme self-heating batubara, monitoring suhu termal inframerah, operasional sprinkler debu, LOTO conveyor drive motor.',
        practical: 'Pengukuran titik panas batubara menggunakan Thermal Camera dan uji alarm sensor karbon monoksida (CO).'
      },
      {
        name: 'Modul 3: Keselamatan Operasi Bongkar Muat Curah Kering & Izin Palka Kapal',
        theory: 'Kualifikasi operator Grab Crane, pengujian gas palka kapal sebelum pekerja masuk, pencegahan tertimbun material curah (engulfment).',
        practical: 'Simulasi evakuasi korban lemas dari dasar palka kapal menggunakan tripod winch dan basket stretcher.'
      }
    ],
    equipment: [
      'Infrared Thermal Imaging Camera untuk Monitoring Suhu Batubara.',
      'Emergency Chemical Ammonia Gas Escape Hood & SCBA 300 Bar.',
      'Multi-Gas Detector dengan Extended Sampling Hose 15 Meter untuk Palka.',
      'Water Spray Curtain Nozzle & Blower Ventilasi Ruang Terbatas.'
    ],
    participants: [
      'Operator Ship Unloader, Teknisi Pipa Kimia, Supervisor PLTU Suralaya, HSE Officer Dermaga Ciwandan, Stevedoring Foreman.'
    ],
    tableData: {
      headers: ['Bidang Pelatihan K3 Ciwandan', 'Sertifikasi Resmi', 'Durasi Pelatihan', 'Target Industri'],
      rows: [
        ['Ahli K3 Kimia & Petugas K3 Kimia', 'Kemnaker RI (Kepmenaker 187/1999)', '6 - 12 Hari', 'Industri Kimia Merak & Dermaga Curah Cair'],
        ['Operator Crane Pelabuhan & Rigger', 'Permenaker No. 08/2020', '3 - 4 Hari', 'Pelabuhan Ciwandan & Terminal Batubara'],
        ['Petugas Ruang Terbatas Palka Kapal', 'Kepdirjen Binwasnaker 113/2006', '3 Hari Kerja', 'Pembersihan Palka Kapal Tongkang & Silo'],
        ['Regu Tanggap Darurat B3 (Hazmat ERT)', 'Standar NFPA & Kemnaker', '3 Hari Kerja', 'Kawasan Industri Kimia Anyer & Merak']
      ]
    },
    caseStudy: 'Sebuah terminal curah cair di Ciwandan Banten berhasil mengatasi insiden kebocoran minor pada loading arm cairan pelarut dalam waktu 3 menit tanpa ada korban terpapar berkat kecepatan tim ERT internal yang telah terlatih.',
    stepByStepGuide: [
      { step: '1. Asesmen Risiko Pesisir Ciwandan-Merak', desc: 'Pemetaan potensi bahaya pipa kimia, stockpile batubara, dan dermaga kapal tongkang.' },
      { step: '2. Kustomisasi Pelatihan In-House', desc: 'Menyusun materi yang memadukan regulasi Kemnaker dengan standar maritim pelabuhan.' },
      { step: '3. Simulasi Lapangan di Dermaga / Pabrik', desc: 'Ujian drill kebocoran kimia dan penyelamatan palka kapal langsung di fasilitas site.' },
      { step: '4. Uji Lisensi & Pengesahan Kemnaker', desc: 'Ujian teori komprehensif dan penerbitan lisensi resmi dari Pengawas K3 Kemnaker RI.' }
    ],
    links: [
      { href: '/kategori-pelatihan/in-house-training-k3-cilegon/', anchor: 'In-House Training K3 Cilegon' },
      { href: '/kategori-pelatihan/in-house-training-k3-serang-banten/', anchor: 'In-House Training K3 Serang Banten' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 6. Tanjung Pinang & Bintan
  {
    key: 'in-house-training-k3-tanjung-pinang',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/in-house-training-k3-tanjung-pinang/',
    archetype: 'regional',
    title: 'In-House Training K3 Tanjung Pinang & Kawasan FTZ Bintan',
    h1: 'In-House Training K3 Tanjung Pinang & Kawasan Perdagangan Bebas (FTZ) Bintan: Sertifikasi K3 Smelter Bauksit, Resort Pariwisata, & Manufaktur Ekspor',
    meta: 'In-House Training K3 Tanjung Pinang: sertifikasi ahli K3 umum, operator boiler, keselamatan smelter alumina bintan, K3 perhotelan resort & FTZ Kepri.',
    imgAlt: 'Sesi in-house training K3 dan simulasi evakuasi darurat bagi manajemen perhotelan resort dan industri smelter di Bintan Tanjung Pinang',
    related: ['in-house-training-k3-batam', 'smelter-dan-pengolahan-logam', 'k3-keselamatan-kerja', 'ahli-k3-umum-kemnaker'],
    intro: 'Pulau Bintan dan Kota Tanjung Pinang di Kepulauan Riau menggabungkan dua sektor ekonomi raksasa: Kawasan Ekonomi Khusus (KEK) Galang Batang dengan industri pengolahan smelter alumina bauksit dan manufaktur ekspor FTZ Lobam, serta kawasan pariwisata internasional Bintan Resorts. Program <strong>In-House Training K3 Tanjung Pinang & Bintan</strong> melayani kebutuhan keselamatan industri berat maupun hospitality premium.',
    hazards: [
      '<strong>Bahaya Suhu Tinggi & Gas Beracun Smelter Alumina:</strong> Percikan lelehan bauksit dan paparan gas kaustik pada proses Bayer.',
      '<strong>Keselamatan Fasilitas Rekreasi Air & Kolam Renang Resort:</strong> Risiko tenggelamnya wisatawan dan kebocoran gas klorin water treatment.',
      '<strong>Kebakaran Dapur Komersial & Ruang Genset Hotel:</strong> Ledakan tabung gas LPG curah dapur dan korsleting listrik beban puncak.',
      '<strong>Kecelakaan Alat Angkat Galangan Kapal & Workshop FTZ:</strong> Kegagalan sling crane saat perawatan kapal ferry penumpang.'
    ],
    regulations: [
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Permenkes No. 48 Tahun 2016</strong> tentang K3 Perkantoran dan Gedung.',
      '<strong>Permenaker No. 38 Tahun 2016</strong> tentang K3 Pesawat Tenaga dan Produksi.'
    ],
    modules: [
      {
        name: 'Modul 1: Manajemen K3 Smelter Bauksit & Bahan Kimia Kaustik Bintan',
        theory: 'Bahaya larutan kaustik soda panas, APD pelindung mata dan perisai muka, LOTO pompa transfer kimia, penanganan residu red mud.',
        practical: 'Simulasi bilas darurat emergency eyewash dan penanganan tumpahan bahan kimia basa kuat.'
      },
      {
        name: 'Modul 2: Keselamatan Kebakaran Gedung Hotel, Resort, & Dapur Komersial',
        theory: 'Sistem proteksi dapur Wet Chemical Kitchen Fire System, evakuasi tamu internasional multi-bahasa, pembentukan Fire Brigade Hotel.',
        practical: 'Praktik pemadaman api kompor gas menggunakan Fire Blanket dan APAR Clean Agent.'
      },
      {
        name: 'Modul 3: Keselamatan Pengoperasian Genset Pembangkit & Pengolahan Air (WTP/STP)',
        theory: 'Proteksi bising ruang genset, penanganan gas klorin desinfeksi air bersih, izin masuk ruang terbatas tangki air.',
        practical: 'Audit kelayakan tangki solar harian genset dan pengujian kebocoran tabung klorin klorinator.'
      }
    ],
    equipment: [
      'Emergency Eye Wash & Drench Shower Portable Unit.',
      'Fire Blanket Fiberglass 2x2 Meter untuk Dapur Komersial.',
      'Sound Level Meter Digital untuk Pengukuran Bising Ruang Genset.',
      'Multi-Gas Detector Klorin (Cl2) & Oksigen (O2).'
    ],
    participants: [
      'HSE Manager Smelter Alumina Bintan, Chief Engineer Hotel/Resort, Supervisor Pabrik FTZ Lobam, Security Head, Tim P2K3 Bintan.'
    ],
    tableData: {
      headers: ['Skema Pelatihan K3 Bintan', 'Sertifikasi Resmi', 'Durasi Training', 'Target Sektor'],
      rows: [
        ['Ahli K3 Umum Kemnaker RI', 'Kemnaker RI (SKP Resmi)', '12 Hari Kerja', 'Smelter Bauksit KEK Galang Batang & Manufaktur FTZ'],
        ['Petugas Penanggulangan Kebakaran (Kelas D/C)', 'Kepmenaker 186/1999', '3 Hari Kerja', 'Hotel, Resort Pariwisata Bintan, & Pelabuhan Ferry'],
        ['K3 Kimia & Bahan Berbahaya', 'Kepmenaker 187/1999', '3 - 6 Hari', 'Industri Pemrosesan Alumina & Pengolahan Limbah'],
        ['Petugas P3K di Tempat Kerja', 'Permenaker 15/2008', '3 Hari Kerja', 'Staf Resort, Hotel, & Pabrik Manufaktur']
      ]
    },
    caseStudy: 'Sebuah resort bintang lima di Lagoi Bintan meraih penghargaan Gold Safety Award setelah melatih 100% staf operasionalnya dalam tanggap darurat kebakaran dapur dan sertifikasi First Aid CPR internasional.',
    stepByStepGuide: [
      { step: '1. Analisis Kebutuhan Sektor Bintan', desc: 'Menyesuaikan modul untuk industri smelter Galang Batang atau perhotelan Lagoi.' },
      { step: '2. Pelatihan In-House Disesuaikan Shift', desc: 'Menyelenggarakan kelas teori dan praktik tanpa mengganggu pelayanan tamu atau operasi smelter.' },
      { step: '3. Simulasi Tanggap Darurat Kebakaran/B3', desc: 'Ujian praktik pemadaman api dapur dan penanganan bahan kimia langsung di site.' },
      { step: '4. Penerbitan Sertifikat Resmi Kemnaker', desc: 'Ujian tertulis dan penerbitan lisensi resmi yang diakui Dinas Tenaga Kerja Kepri.' }
    ],
    links: [
      { href: '/kategori-pelatihan/in-house-training-k3-batam/', anchor: 'In-House Training K3 Batam' },
      { href: '/industri/smelter-dan-pengolahan-logam/', anchor: 'K3 Smelter & Pengolahan Logam' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 7. Tarakan Kaltara
  {
    key: 'in-house-training-k3-tarakan-kaltara',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/in-house-training-k3-tarakan-kaltara/',
    archetype: 'regional',
    title: 'In-House Training K3 Tarakan & KIPI Tanah Kuning Kaltara',
    h1: 'In-House Training K3 Kota Tarakan & Kawasan Industri Hijau Indonesia (KIPI) Tanah Kuning Kalimantan Utara: Sertifikasi K3 Migas, Plywood, Smelter, & Petrokimia',
    meta: 'In-House Training K3 Tarakan Kaltara: sertifikasi ahli K3 umum, K3 migas offshore, operator boiler pabrik kayu, K3 smelter hijau KIPI & keselamatan maritim.',
    imgAlt: 'Pelatihan keselamatan kerja K3 migas dan industri perkayuan plywood di Tarakan Kalimantan Utara',
    related: ['in-house-training-k3-balikpapan', 'in-house-training-k3-samarinda', 'k3-keselamatan-kerja', 'ahli-k3-umum-kemnaker'],
    intro: 'Provinsi Kalimantan Utara (Kaltara) dengan pusat perdagangan Kota Tarakan dan mega proyek Kawasan Industri Pelabuhan Internasional (KIPI) Tanah Kuning-Mangkupadi bertransformasi menjadi pusat industri hijau global yang mengintegrasikan PLTA Kayan, smelter aluminium, pabrik petrokimia, serta industri migas dan perkayuan (plywood) eksisting. Program <strong>In-House Training K3 Tarakan Kaltara</strong> mendukung percepatan kualifikasi tenaga kerja profesional bersertifikasi Kemnaker RI dan BNSP.',
    hazards: [
      '<strong>Bahaya Kebakaran Debu Serbuk Kayu Pabrik Plywood:</strong> Ledakan debu kayu (wood dust explosion) di area penyerutan dan pengeleman.',
      '<strong>Bahaya Kebocoran Gas Beracun Sumur Migas Tarakan:</strong> Paparan gas H2S mematikan pada fasilitas pemboran dan produksi minyak tua.',
      '<strong>Kecelakaan Konstruksi Mega Struktur PLTA & Smelter KIPI:</strong> Pekerjaan penggalian terowongan (tunneling) dan bendungan air raksasa.',
      '<strong>Bahaya Transportasi Air Speedboat & Tongkang Kayu:</strong> Kecelakaan pelayaran sungai dan perairan pesisir Kaltara.'
    ],
    regulations: [
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Kepmenaker No. 187/MEN/1999</strong> tentang Pengendalian Bahan Kimia Berbahaya.',
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang Pesawat Angkat dan Angkut.'
    ],
    modules: [
      {
        name: 'Modul 1: Manajemen K3 Industri Pengolahan Kayu & Debu Mudah Terbakar',
        theory: 'Pengendalian debu kayu (Wood Dust Control), sistem hisap siklon cyclone exhaust, pencegahan kebakaran lem perekat formalin B3.',
        practical: 'Inspeksi sistem grounding anti-statis mesin amplas kayu dan simulasi pemadaman api serbuk gergaji.'
      },
      {
        name: 'Modul 2: Keselamatan Operasi Migas Pesisir & Fasilitas Produksi Tarakan',
        theory: 'Prosedur keselamatan H2S, izin kerja panas (Hot Work Permit) di dekat sumur minyak, isolasi LOTO pipa gas alam.',
        practical: 'Praktik pemakaian breathing apparatus H2S escape hood dan simulasi evakuasi arah mata angin (Wind Sock).'
      },
      {
        name: 'Modul 3: K3 Konstruksi Sipil & Alat Berat Mega Proyek KIPI Tanah Kuning',
        theory: 'Geoteknik lereng galian, keselamatan excavator tambang batu split, scaffolding heavy duty dermaga pelabuhan.',
        practical: 'Audit form checklist keselamatan alat berat P2H dan simulasi penyelamatan air (Water Rescue) perairan sungai.'
      }
    ],
    equipment: [
      'H2S Gas Detector & Emergency Escape Breathing Apparatus (EEBA).',
      'Life Jacket Solas Approved & Ring Buoy Penyelamat Air.',
      'Explosion-Proof Dust Vacuum Cleaner untuk Serbuk Kayu.',
      'Set Lockout/Tagout Breaker Listrik & Katup Pipa Migas.'
    ],
    participants: [
      'Safety Officer Pabrik Plywood, Supervisor Lapangan Migas, Engineer Konstruksi KIPI Kaltara, Rigger Pelabuhan, Tim ERT Tarakan.'
    ],
    tableData: {
      headers: ['Program Pelatihan K3 Tarakan', 'Sertifikasi Resmi', 'Durasi Training', 'Target Sektor'],
      rows: [
        ['Ahli K3 Umum Kemnaker RI', 'Kemnaker RI (SKP Resmi)', '12 Hari Kerja', 'Pabrik Kayu, Industri KIPI Tanah Kuning, & Migas'],
        ['H2S Safety & Breathing Apparatus', 'Sertifikasi K3 Migas BNSP', '2 Hari Kerja', 'Pekerja Lapangan Sumur Minyak Tarakan'],
        ['Operator Boiler Uap Biomassa/Gas', 'Permenaker No. 01/1988', '4 Hari Kerja', 'Pabrik Plywood & Pembangkit Listrik'],
        ['K3 Konstruksi & Alat Berat Excavator', 'Permenaker No. 08/2020', '3 - 4 Hari', 'Kontraktor Pembangunan Kawasan Industri KIPI']
      ]
    },
    caseStudy: 'Sebuah pabrik kayu olahan terpadu di Tarakan berhasil mengeliminasi insiden kebakaran debu serbuk kayu selama 4 tahun berturut-turut setelah menerapkan audit 5S dan melatih tim pemadam kebakaran internalnya.',
    stepByStepGuide: [
      { step: '1. Asesmen Bahaya Lapangan Tarakan/KIPI', desc: 'Mengidentifikasi potensi bahaya debu kayu, sumur gas, dan proyek konstruksi pesisir.' },
      { step: '2. Pelaksanaan Kelas In-House di Lokasi', desc: 'Instruktur senior hadir di fasilitas perusahaan di Tarakan atau camp KIPI Tanah Kuning.' },
      { step: '3. Workshop Praktik Lapangan Terpadu', desc: 'Ujian simulasi H2S, pemadaman api, dan inspeksi alat berat langsung di lapangan.' },
      { step: '4. Evaluasi & Penerbitan Lisensi Resmi', desc: 'Ujian komprehensif untuk penerbitan SKP Ahli K3 dan lisensi SIO Kemnaker RI.' }
    ],
    links: [
      { href: '/kategori-pelatihan/in-house-training-k3-balikpapan/', anchor: 'In-House Training K3 Balikpapan' },
      { href: '/kategori-pelatihan/in-house-training-k3-samarinda/', anchor: 'In-House Training K3 Samarinda' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 8. Banjarbaru Martapura
  {
    key: 'in-house-training-k3-banjarbaru-martapura',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/in-house-training-k3-banjarbaru-martapura/',
    archetype: 'regional',
    title: 'In-House Training K3 Banjarbaru & Martapura Kalsel',
    h1: 'In-House Training K3 Kota Banjarbaru, Martapura, & Kawasan Industri Liang Anggang Kalsel: Sertifikasi K3 Pertambangan Intan/Batu Bara, Manufaktur Mamin, & Perkantoran Pemerintah',
    meta: 'In-House Training K3 Banjarbaru: sertifikasi ahli K3 umum Kalsel, operator genset, K3 perkantoran instansi pemerintah, keselamatan galian & logistik.',
    imgAlt: 'Pelaksanaan in-house training K3 perkantoran dan pemadam kebakaran di gedung instansi dan kawasan industri Banjarbaru Kalsel',
    related: ['in-house-training-k3-banjarmasin', 'sistem-manajemen-smkp-minerba', 'k3-keselamatan-kerja', 'ahli-k3-umum-kemnaker'],
    intro: 'Kota Banjarbaru sebagai Ibukota Provinsi Kalimantan Selatan bersama Kota Martapura berkembang pesat menjadi pusat pemerintahan, jasa logistik, pergudangan Kawasan Industri Liang Anggang, serta industri manufaktur makanan/minuman dan pengolahan hasil tambang. Program <strong>In-House Training K3 Banjarbaru & Martapura</strong> memberikan pembinaan keselamatan kerja bagi instansi pemerintah, BUMN, dan sektor swasta.',
    hazards: [
      '<strong>Kebakaran Gedung Perkantoran & Rumah Sakit:</strong> Korsleting listrik panel AC sentral dan sistem proteksi kebakaran gedung bertingkat.',
      '<strong>Kecelakaan Alat Berat Galian di Tambang Tradisional:</strong> Dinding galian pasir/intan longsor menimbun pekerja manual.',
      '<strong>Bahaya Ergonomi & Kebisingan Pabrik Pengolahan Makanan:</strong> Pekerjaan manual handling berulang dan kebisingan mesin pembotolan.',
      '<strong>Kecelakaan Lalu Lintas Truk Logistik Jalan Poros Kalsel:</strong> Tabrakan armada angkutan barang di jalur lintas trans-Kalimantan.'
    ],
    regulations: [
      '<strong>Permenkes No. 48 Tahun 2016</strong> tentang Standar K3 Perkantoran.',
      '<strong>Permenaker No. 5 Tahun 2018</strong> tentang K3 Lingkungan Kerja.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Standar K3 Perkantoran, Evakuasi Gedung, & Ergonomi Komputer',
        theory: 'Audit jalur evakuasi kantor, penataan kursi ergonomis pencegah Low Back Pain, prosedur tanggap darurat gempa & kebakaran gedung pemerintah.',
        practical: 'Praktik penyesuaian workstation komputer dan simulasi drill evakuasi kantor 4 lantai.'
      },
      {
        name: 'Modul 2: Keselamatan Operasi Pergudangan Liang Anggang & Forklift',
        theory: 'Penataan rak racking palet, SOP pengoperasian forklift elektrik, batas kecepatan lorong gudang, pemisahan pejalan kaki.',
        practical: 'Inspeksi P2H forklift harian dan uji manuver zig-zag mengambil palet sembako.'
      },
      {
        name: 'Modul 3: Manajemen P3K di Tempat Kerja & Pengendalian Bising Pabrik',
        theory: 'Penanganan korban henti jantung (CPR/RJP), penanganan luka bakar dan patah tulang, pengukuran desibel bising mesin.',
        practical: 'Praktik resusitasi jantung paru menggunakan manekin CPR dan pemakaian earplug/earmuff tepat.'
      }
    ],
    equipment: [
      'Manekin Resusitasi Jantung Paru (CPR / RJP) Adult Training Manikin.',
      'Kotak P3K Perusahaan Standar Permenaker No. 15 Tahun 2008 Bentuk C.',
      'Digital Sound Level Meter & Lux Meter untuk Kantor.',
      'APAR Dry Chemical Powder 6 kg & CO2 5 kg untuk Simulasi Api.'
    ],
    participants: [
      'Staf Pengelola Gedung Instansi/BUMN, Supervisor Gudang Liang Anggang, Safety Officer Rumah Sakit, Petugas P3K, Anggota P2K3.'
    ],
    tableData: {
      headers: ['Program Pelatihan K3 Banjarbaru', 'Sertifikasi Resmi', 'Durasi Waktu', 'Target Peserta'],
      rows: [
        ['Ahli K3 Umum Kemnaker RI', 'Kemnaker RI (SKP Resmi)', '12 Hari Kerja', 'PNS Instansi, BUMN, & Perusahaan Swasta Kalsel'],
        ['Petugas P3K di Tempat Kerja', 'Permenaker No. 15/2008', '3 Hari Kerja', 'Staf Kantor, Guru, Paramedis Klinik, & Satpam'],
        ['Petugas Peran Kebakaran Gedung (Kelas D)', 'Kepmenaker 186/1999', '3 Hari Kerja', 'Pengelola Gedung Perkantoran & Rumah Sakit'],
        ['Operator Forklift Pergudangan', 'Permenaker No. 08/2020', '3 Hari Kerja', 'Driver Forklift Kawasan Industri Liang Anggang']
      ]
    },
    caseStudy: 'Sebuah kantor instansi BUMN di Banjarbaru berhasil meraih predikat Kantor Sehat dan Selamat setelah membentuk tim tanggap darurat terlatih dan melakukan sertifikasi P3K bagi 20 orang pegawainya.',
    stepByStepGuide: [
      { step: '1. Konsultasi Kebutuhan Instansi/Perusahaan', desc: 'Menentukan program yang tepat untuk gedung perkantoran, rumah sakit, atau gudang logistik.' },
      { step: '2. Pelaksanaan Sesi Training In-House', desc: 'Penyelenggaraan kelas di aula kantor atau fasilitas workshop yang nyaman di Banjarbaru.' },
      { step: '3. Praktik Simulasi CPR & APAR', desc: 'Ujian langsung keterampilan pertolongan pertama medis dan pemadaman api darurat.' },
      { step: '4. Penerbitan Sertifikat Resmi', desc: 'Penerbitan sertifikat dan lisensi resmi berstandar Kementerian Ketenagakerjaan RI.' }
    ],
    links: [
      { href: '/kategori-pelatihan/in-house-training-k3-banjarmasin/', anchor: 'In-House Training K3 Banjarmasin' },
      { href: '/kategori-pelatihan/p3k-pertolongan-pertama/', anchor: 'Pelatihan Petugas P3K' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 9. Padang Indarung
  {
    key: 'in-house-training-k3-padang-indalung',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/in-house-training-k3-padang-indalung/',
    archetype: 'regional',
    title: 'In-House Training K3 Padang & Indarung: Pabrik Semen & Pelabuhan Teluk Bayur',
    h1: 'In-House Training K3 Kota Padang & Kawasan Industri Indarung: Sertifikasi K3 Pabrik Semen Tertua, Pelabuhan Internasional Teluk Bayur, & Smelter Minang',
    meta: 'In-House Training K3 Padang Indarung: sertifikasi ahli K3 umum, K3 galian tambang batu kapur, operator conveyor semen & keselamatan Teluk Bayur Sumbar.',
    imgAlt: 'Instruktur memberikan materi keselamatan kerja pertambangan batu kapur dan pabrik semen pada in-house training K3 di Indarung Padang Sumatera Barat',
    related: ['in-house-training-k3-pekanbaru', 'in-house-training-k3-palembang', 'k3-keselamatan-kerja', 'ahli-k3-umum-kemnaker'],
    intro: 'Kota Padang dan Kawasan Indarung di Sumatera Barat memiliki sejarah industri panjang sebagai lokasi pabrik semen pertama di Asia Tenggara (Semen Padang), didukung oleh Pelabuhan Internasional Teluk Bayur dan kawasan industri pengolahan sawit/karet. Program <strong>In-House Training K3 Padang Indarung</strong> menyediakan modul keselamatan kerja terintegrasi untuk penambangan batu kapur, pemeliharaan rotary kiln semen, dan bongkar muat kargo pelabuhan.',
    hazards: [
      '<strong>Longsor Tebing Tambang Quarry Batu Kapur:</strong> Runtuhan batuan tebing saat proses peledakan (blasting) dan penggalian excavator.',
      '<strong>Suhu Ekstrem & Debu Silika Pabrik Semen Indarung:</strong> Paparan debu klinker panas dan kebisingan mesin penggiling (Ball Mill).',
      '<strong>Terjepit Roda Gigi Rotary Kiln & Conveyor Belt:</strong> Perawatan motor penggerak tanpa penerapan gembok isolasi energi LOTO.',
      '<strong>Kecelakaan Crane Bongkar Muat di Pelabuhan Teluk Bayur:</strong> Kejatuhan kantong semen atau pupuk saat pemindahan ke kapal kargo.'
    ],
    regulations: [
      '<strong>Permenaker No. 38 Tahun 2016</strong> tentang K3 Pesawat Tenaga dan Produksi.',
      '<strong>Kepmen ESDM No. 1827 K/30/MEM/2018</strong> tentang Keselamatan Pertambangan (SMKP).',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: K3 Pertambangan Quarry Batu Kapur & Kestabilan Lereng Indarung',
        theory: 'Geometri lereng jenjang (bench height & width), keselamatan operasional excavator dan dump truck quarry, prosedur peledakan aman.',
        practical: 'Inspeksi kestabilan dinding jenjang penambangan dan pemeriksaan kelayakan Roll-Over Protective Structure (ROPS).'
      },
      {
        name: 'Modul 2: Keselamatan Mesin Ball Mill, Rotary Kiln, & LOTO Pabrik Semen',
        theory: 'Protokol isolasi energi mekanik/listrik 8 langkah LOTO, proteksi ruang tertutup confined space di dalam rotary kiln, APD tahan panas.',
        practical: 'Simulasi pemasangan lockout hasp pada panel sakelar utama motor kiln dan uji coba zero state.'
      },
      {
        name: 'Modul 3: Keselamatan Stevedoring & Crane Pelabuhan Teluk Bayur',
        theory: 'Standar pengikatan sling kantong kargo semen, batas beban kerja aman (SWL) crane dermaga, SOP komunikasi sinyal rigger.',
        practical: 'Praktik inspeksi keausan sling webbing dan simulasi pengangkatan kargo palet ke sasis truk.'
      }
    ],
    equipment: [
      'Lockout/Tagout Kit Heavy Duty untuk Motor Ball Mill & Kiln Semen.',
      'Inclinometer Digital Pengukur Kemiringan Lereng Tebing Quarry.',
      'Webbing Sling Polyester Bersertifikat & Shackle Galvanized.',
      'Digital Dust Sampler & Sound Level Meter Pabrik.'
    ],
    participants: [
      'Pengawas Tambang Quarry (POP), Operator Kilang Semen, Supervisor Maintenance Indarung, HSE Pelabuhan Teluk Bayur, Safety Officer.'
    ],
    tableData: {
      headers: ['Skema Pelatihan K3 Padang', 'Sertifikasi Resmi', 'Durasi Pelatihan', 'Target Sektor Industri'],
      rows: [
        ['Pengawas Operasional Pertama (POP) Tambang', 'Sertifikasi BNSP / ESDM', '4 Hari Kerja', 'Quarry Tambang Batu Kapur & Silika'],
        ['Ahli K3 Umum Kemnaker RI', 'Kemnaker RI (SKP Resmi)', '12 Hari Kerja', 'Pabrik Semen, Industri Karet/Sawit, & BUMN'],
        ['Lisensi Rigger & Juru Ikat Pelabuhan', 'Permenaker No. 08/2020', '3 Hari Kerja', 'Dermaga Ekspor Pelabuhan Teluk Bayur'],
        ['Teknisi LOTO & Keselamatan Mesin', 'Permenaker No. 38/2016', '3 Hari Kerja', 'Maintenance Mekanik Pabrik Semen Indarung']
      ]
    },
    caseStudy: 'Sebuah kontraktor penambangan batu kapur di Indarung Padang berhasil mempertahankan rekor Zero Lost Time Injury (LTI) selama 5 tahun berturut-turut setelah mewajibkan seluruh pengawas lapangannya memiliki sertifikasi POP BNSP dan sertifikasi K3 Penggalian.',
    stepByStepGuide: [
      { step: '1. Pemetaan Hazard Tambang & Kiln', desc: 'Menganalisis profil bahaya spesifik tambang quarry Indarung dan operasi pelabuhan Teluk Bayur.' },
      { step: '2. Pelatihan On-Site Disesuaikan Operasional', desc: 'Pelaksanaan materi teori dan diskusi studi kasus langsung di ruang training perusahaan di Padang.' },
      { step: '3. Simulasi Praktik LOTO & Rigging', desc: 'Ujian praktik isolasi energi mesin kiln semen dan inspeksi sling alat angkat.' },
      { step: '4. Uji Sertifikasi Pengawas Kemnaker/ESDM', desc: 'Evaluasi tertulis dan verifikasi kompetensi untuk penerbitan sertifikat resmi.' }
    ],
    links: [
      { href: '/kategori-pelatihan/in-house-training-k3-pekanbaru/', anchor: 'In-House Training K3 Pekanbaru' },
      { href: '/kategori-pelatihan/in-house-training-k3-palembang/', anchor: 'In-House Training K3 Palembang' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 10. Kendari Konawe
  {
    key: 'in-house-training-k3-kendari-konawe',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/in-house-training-k3-kendari-konawe/',
    archetype: 'regional',
    title: 'In-House Training K3 Kendari & Kawasan Industri Smelter Konawe',
    h1: 'In-House Training K3 Kota Kendari, Morosi, & Kawasan Industri Konawe (VDNI / OSS) Sulawesi Tenggara: Sertifikasi K3 Smelter RKEF Nikel Pig Iron, PLTU Batubara, & Jetty Pelabuhan',
    meta: 'In-House Training K3 Kendari Konawe: sertifikasi ahli K3 umum, keselamatan tungku smelter nikel RKEF, operator boiler PLTU, LOTO & K3 tambang Sultra.',
    imgAlt: 'Pelatihan keselamatan kerja K3 tungku smelter nikel dan proteksi panas ekstrem di kawasan industri smelter Morosi Konawe Sulawesi Tenggara',
    related: ['in-house-training-k3-morowali', 'smelter-dan-pengolahan-logam', 'k3-keselamatan-kerja', 'ahli-k3-umum-kemnaker'],
    intro: 'Kabupaten Konawe (khususnya Kawasan Industri Morosi) dan Kota Kendari di Sulawesi Tenggara merupakan salah satu pusat hilirisasi nikel terbesar di Indonesia, menampung puluhan jalur tungku peleburan Rotary Kiln-Electric Furnace (RKEF), pabrik Nickel Pig Iron (NPI), Stainless Steel, PLTU captive batubara, dan terminal jetty bongkar muat. Program <strong>In-House Training K3 Kendari Konawe</strong> menghadirkan instruktur bersertifikasi nasional dengan kurikulum K3 metalurgi mutakhir.',
    hazards: [
      '<strong>Ledakan Tungku Listrik Smelter (Slag Water Explosion):</strong> Terjadinya kontak antara terak nikel cair 1.600°C dengan air pendingin yang bocor.',
      '<strong>Luka Bakar Radiasi Termal Ekstrem & Logam Cair:</strong> Semburan cairan logam nikel panas saat proses tapping pencetakan ingot.',
      '<strong>Keracunan Gas Karbon Monoksida (CO) Smelter:</strong> Kebocoran gas reduksi dari saluran gas buang tungku tertutup ke lantai kerja.',
      '<strong>Kecelakaan Alat Berat Wheel Loader & Excavator Slag:</strong> Alat berat tergelincir di area pembuangan terak panas (slag yard).'
    ],
    regulations: [
      '<strong>Permenaker No. 5 Tahun 2018</strong> tentang K3 Lingkungan Kerja (Iklim Kerja Panas & Gas Beracun).',
      '<strong>Kepmen ESDM No. 1827 K/30/MEM/2018</strong> tentang Keselamatan Pertambangan & Pengolahan Mineral.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Keselamatan Operasi Tungku Smelter RKEF & Pencegahan Slag Explosion',
        theory: 'Prinsip kerja tungku listrik busur (Electric Arc Furnace), bahaya intrusi air pendingin, prosedur tapping logam cair, APD aluminized suit lengkap.',
        practical: 'Pemeriksaan integritas jaket air pendingin (water cooling jacket) dan simulasi darurat pemadaman daya tungku (Emergency Power Trip).'
      },
      {
        name: 'Modul 2: Deteksi Gas Beracun Karbon Monoksida (CO) & Evakuasi Darurat Smelter',
        theory: 'Karakteristik gas CO tidak berwarna tidak berbau, Nilai Ambang Batas 25 ppm, sistem sensor gas detektor stasioner dan portabel.',
        practical: 'Praktik penggunaan SCBA darurat dan simulasi evakuasi regu kerja saat alarm kebocoran gas CO berbunyi di level 3 smelter.'
      },
      {
        name: 'Modul 3: Keselamatan Operasi PLTU Captive & Penanganan Slag Panas',
        theory: 'SOP pengangkutan slag nikel cair menggunakan slag pot carrier, keselamatan boiler superkritis, isolasi LOTO panel turbin.',
        practical: 'Audit kelayakan ban tahan panas alat berat loader dan simulasi pemasangan LOTO katup uap utama.'
      }
    ],
    equipment: [
      'Baju Tahan Panas Ekstrem Aluminized Molten Metal Splash Suit & Gold Visor.',
      'Multi-Gas Detector Sensor Khusus Karbon Monoksida (CO) & Oksigen (O2).',
      'SCBA Positive Pressure 300 Bar Composite Cylinder.',
      'Infrared Optical Pyrometer Pengukur Suhu Logam Cair s.d. 2.000°C.'
    ],
    participants: [
      'Tapping Operator Smelter Nikel, Supervisor RKEF Morosi Konawe, HSE Engineer Smelter, Teknisi PLTU Captive, Rigger Jetty Pelabuhan.'
    ],
    tableData: {
      headers: ['Program K3 Prioritas Konawe', 'Sertifikasi Resmi', 'Durasi Training', 'Target Sektor Industri'],
      rows: [
        ['Ahli K3 Umum & Spesialis Kimia/Listrik', 'Kemnaker RI (SKP Resmi)', '12 Hari Kerja', 'Smelter Nikel Morosi & PLTU Captive Konawe'],
        ['Keselamatan Tungku Peleburan & Logam Panas', 'Standar Metalurgi & Kemnaker', '3 Hari Kerja', 'Operator Tapping, Kiln, & Furnace RKEF'],
        ['Operator Boiler Uap PLTU Kelas I', 'Permenaker No. 01/1988', '4 Hari Kerja', 'Teknisi Pembangkit Listrik Tenaga Uap Konawe'],
        ['Regu Tanggap Darurat Bencana Smelter (ERT)', 'Kemnaker RI (Kelas D/C/B)', '4 Hari Kerja', 'Tim Emergency Response Team (ERT) Smelter Sultra']
      ]
    },
    caseStudy: 'Sebuah perusahaan smelter nikel terkemuka di Morosi Konawe berhasil melatih 300 orang operator lokal dalam program In-House Training K3 Logam Panas, menurunkan angka near-miss percikan slag hingga 85% dalam 1 tahun.',
    stepByStepGuide: [
      { step: '1. Asesmen Bahaya Logam Panas & Gas CO', desc: 'Pemetaan titik rawan kebocoran air pendingin dan konsentrasi gas CO di area tungku smelter.' },
      { step: '2. Pelatihan In-House On-Site di Konawe', desc: 'Penyelenggaraan kelas di training center kawasan industri dengan instruktur ahli metalurgi.' },
      { step: '3. Simulasi Tapping & Evakuasi Gas CO', desc: 'Ujian praktik pemakaian baju tahan api dan simulasi penyelamatan korban keracunan gas.' },
      { step: '4. Uji Lisensi & Pengesahan Disnaker Sultra', desc: 'Evaluasi ujian teori komprehensif dan penerbitan lisensi resmi Kemnaker RI.' }
    ],
    links: [
      { href: '/kategori-pelatihan/in-house-training-k3-morowali/', anchor: 'In-House Training K3 Morowali' },
      { href: '/industri/smelter-dan-pengolahan-logam/', anchor: 'K3 Smelter Nikel & Logam' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 11. Luwuk Banggai
  {
    key: 'in-house-training-k3-luwuk-banggai',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/in-house-training-k3-luwuk-banggai/',
    archetype: 'regional',
    title: 'In-House Training K3 Luwuk Banggai: Kilang LNG & Pabrik Amonia',
    h1: 'In-House Training K3 Kabupaten Banggai (Luwuk & Batui) Sulawesi Tengah: Sertifikasi K3 Kilang Donggi Senoro LNG (DSLNG), Pabrik Amonia PAU, & Terminal Gas Alam',
    meta: 'In-House Training K3 Luwuk Banggai: sertifikasi K3 migas offshore/onshore, K3 gas kriogenik LNG amonia, permit to work, isolasi LOTO & K3 Sulteng.',
    imgAlt: 'Pelatihan keselamatan kerja K3 proses dan penanganan gas kriogenik pada kilang Donggi Senoro LNG dan pabrik amonia di Banggai Luwuk',
    related: ['in-house-training-k3-morowali', 'minyak-dan-gas-bumi-offshore', 'k3-keselamatan-kerja', 'ahli-k3-umum-kemnaker'],
    intro: 'Kabupaten Banggai di Sulawesi Tengah (dengan ibukota Luwuk dan kawasan industri migas Uso-Batui) merupakan pusat industri energi gas alam cair terkemuka nasional yang menjadi rumah bagi Kilang Donggi Senoro LNG (DSLNG), Pabrik Amonia PT Panca Amara Utama (PAU), dan Lapangan Gas Senoro-Toili. Program <strong>In-House Training K3 Luwuk Banggai</strong> memberikan pelatihan keselamatan proses (Process Safety Management) dan kriogenik berstandar global.',
    hazards: [
      '<strong>Kebocoran Gas Kriogenik LNG Suhu Dingin Ekstrem (-160°C):</strong> Bahaya radang dingin instan (cryogenic freeze burn) dan ledakan ekspansi uap (BLEVE).',
      '<strong>Kebocoran Gas Amonia Beracun & Korosif (NH3 Leak):</strong> Awan gas amonia pekat yang memicu kerusakan paru fatal seketika.',
      '<strong>Kebakaran Tekanan Tinggi di Menara Fraksinasi:</strong> Kebocoran gas metana pada kompresor gas alam bertekanan 80 bar.',
      '<strong>Kecelakaan Bongkar Muat Kapal Tanker LNG di Jetty:</strong> Kegagalan sistem Marine Loading Arm saat transfer cairan LNG ke kapal tanker.'
    ],
    regulations: [
      '<strong>Permen ESDM tentang Keselamatan Migas</strong>.',
      '<strong>Kepmenaker No. 187/MEN/1999</strong> tentang Pengendalian Bahan Kimia Berbahaya (Amonia & Gas Alam).',
      '<strong>Standar OSHA 1910.119</strong> tentang Process Safety Management of Highly Hazardous Chemicals.'
    ],
    modules: [
      {
        name: 'Modul 1: Keselamatan Proses Kimia (Process Safety Management / PSM) & Gas Kriogenik',
        theory: 'Prinsip PSM 14 elemen OSHA, bahaya suhu kriogenik -160°C, fenomena Rapid Phase Transition (RPT), isolasi katup darurat ESDV.',
        practical: 'Audit kelayakan APD kriogenik (Cryogenic Gloves & Face Shield) dan inspeksi sistem deteksi kebocoran gas dingin.'
      },
      {
        name: 'Modul 2: Keselamatan Fasilitas Amonia & Sistem Tanggap Darurat Kebocoran Gas NH3',
        theory: 'Karakteristik racun gas amonia, ambang batas IDLH (300 ppm), sistem tirai air pemecah awan amonia (Water Spray Curtain), evakuasi lintas angin (Crosswind Evacuation).',
        practical: 'Simulasi drill penutupan katup manual kebocoran amonia menggunakan chemical suit kedap gas Level A dan SCBA.'
      },
      {
        name: 'Modul 3: Izin Kerja Khusus (PTW) Migas, Uji Gas (Gas Clearance), & LOTO Bertekanan',
        theory: 'Prosedur Hot Work di area berisiko ledakan (Zone 1 / Zone 2 ATEX), isolasi pipa Double Block and Bleed (DBB), sertifikasi Authorized Gas Tester (AGT).',
        practical: 'Praktik pengujian gas clearance menggunakan multi-gas detector explosion-proof dan penguncian gembok LOTO katup bola gas.'
      }
    ],
    equipment: [
      'Level A Fully Encapsulated Chemical Vapor Protective Hazmat Suit.',
      'SCBA Positive Pressure 300 Bar dengan Full Face Mask Komunikasi.',
      'Multi-Gas Detector Explosion-Proof dengan Sensor Infrared LEL & NH3.',
      'Cryogenic Handling Safety Gloves & Face Shield Anti-Percikan Dingin.'
    ],
    participants: [
      'Operator Kilang LNG, Teknisi Pabrik Amonia, Process Safety Engineer, HSE Officer Banggai, Loading Master Jetty Kapal Tanker.'
    ],
    tableData: {
      headers: ['Program K3 Khusus Banggai', 'Sertifikasi Resmi', 'Durasi Training', 'Target Fasilitas'],
      rows: [
        ['Process Safety Management (PSM) Migas', 'Sertifikasi BNSP / Kemnaker', '4 Hari Kerja', 'Kilang Donggi Senoro LNG & Pabrik Amonia PAU'],
        ['Authorized Gas Tester (AGT) & Permit PTW', 'Sertifikasi K3 Migas BNSP', '3 Hari Kerja', 'Operator Pemeliharaan Kilang & Pipa Gas'],
        ['Ahli K3 Kimia & Tanggap Darurat Amonia', 'Kemnaker RI (Kepmenaker 187/1999)', '12 Hari Kerja', 'Pabrik Amonia & Terminal Ekspor Gas Alam'],
        ['Teknisi Bekerja di Ketinggian Menara Flare', 'Permenaker No. 09/2016 (TKPK 1/2)', '5 Hari Kerja', 'Inspeksi Struktur Menara Flare & Kolom Distilasi']
      ]
    },
    caseStudy: 'Sebuah pabrik amonia terkemuka di Batui Banggai berhasil meraih penghargaan Zero Accident Award tingkat nasional setelah membukukan 15 Juta Jam Kerja Selamat berkat kedisiplinan penerapan 14 elemen Process Safety Management (PSM).',
    stepByStepGuide: [
      { step: '1. Penilaian Risiko Fasilitas Gas Banggai', desc: 'Pemetaan bahaya kriogenik LNG, amonia, dan pipa gas alam bertekanan tinggi.' },
      { step: '2. Kustomisasi Modul Standar Migas Global', desc: 'Menyelaraskan materi dengan sistem Permit to Work dan dokumen HAZOP kilang.' },
      { step: '3. Simulasi Praktik Tanggap Darurat Level A', desc: 'Ujian drill pemakaian baju hazmat kedap gas dan penutupan kebocoran amonia.' },
      { step: '4. Sertifikasi Resmi Pengawas Kemnaker/Migas', desc: 'Evaluasi ujian teori komprehensif dan penerbitan sertifikat kompetensi resmi.' }
    ],
    links: [
      { href: '/kategori-pelatihan/in-house-training-k3-morowali/', anchor: 'In-House Training K3 Morowali' },
      { href: '/industri/minyak-dan-gas-bumi-offshore/', anchor: 'K3 Minyak & Gas Bumi' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 12. Bitung Sulawesi Utara
  {
    key: 'in-house-training-k3-bitung-kemas',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/in-house-training-k3-bitung-kemas/',
    archetype: 'regional',
    title: 'In-House Training K3 Kota Bitung: KEK Bitung, Perikanan, & Pelabuhan Samudera',
    h1: 'In-House Training K3 Kota Bitung & Kawasan Ekonomi Khusus (KEK) Bitung: Sertifikasi K3 Industri Pengalengan Ikan Tuna, Cold Storage Amonia, & Terminal Peti Kemas Pelabuhan Samudera',
    meta: 'In-House Training K3 Bitung: sertifikasi ahli K3 umum Sulut, K3 amonia cold storage, operator forklift beku, keselamatan pelabuhan peti kemas & HACCP mamin.',
    imgAlt: 'Pelatihan in-house keselamatan kerja cold storage amonia dan penanganan kargo pelabuhan peti kemas di Bitung Sulawesi Utara',
    related: ['in-house-training-k3-manado-bitung', 'operator-stacker-crane-pelabuhan', 'k3-keselamatan-kerja', 'ahli-k3-umum-kemnaker'],
    intro: 'Kota Bitung di Sulawesi Utara merupakan Kota Pelabuhan Samudera Internasional sekaligus Kawasan Ekonomi Khusus (KEK Bitung) yang menjadi pusat industri pengolahan dan pengalengan ikan tuna terbesar di Indonesia Timur. Karakteristik operasi pabrik pengolahan ikan, gudang pendingin raksasa (Cold Storage) berpengawet amonia cair, dan terminal peti kemas pelabuhan samudera menuntut program <strong>In-House Training K3 Bitung</strong> bersertifikasi resmi.',
    hazards: [
      '<strong>Kebocoran Gas Amonia Pendingin Cold Storage (NH3):</strong> Semburan gas beracun amonia di ruang pendingin ikan bersuhu -25°C.',
      '<strong>Bahaya Suhu Dingin Ekstrem & Hipotermia (Cold Stress):</strong> Operator terpapar suhu sub-zero berjam-jam tanpa jaket termal isolasi.',
      '<strong>Kecelakaan Crane Bongkar Muat Kapal Ikan & Kontainer:</strong> Putusnya jaring pengangkat ikan atau benturan peti kemas di dermaga.',
      '<strong>Lantai Licin & Luka Potong Pisau Pengolahan Ikan:</strong> Terpeleset di area fillet ikan basah dan teriris pisau pemotong baja tajam.'
    ],
    regulations: [
      '<strong>Permenaker No. 5 Tahun 2018</strong> tentang K3 Lingkungan Kerja (Iklim Kerja Dingin & Kimia).',
      '<strong>Kepmenaker No. 187/MEN/1999</strong> tentang Pengendalian Bahan Kimia Berbahaya.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Keselamatan Sistem Pendingin Amonia (Refrigeration Safety) di Cold Storage',
        theory: 'Prinsip kerja kompresor amonia, inspeksi kebocoran pipa evaporator, katup pelepas darurat amonia, APD masker gas amonia.',
        practical: 'Praktik penggunaan sensor portabel amonia dan simulasi penanganan darurat pipa pendingin bocor di ruang beku.'
      },
      {
        name: 'Modul 2: Ergonomi Industri Pengolahan Ikan & Pencegahan Cold Stress',
        theory: 'Standar waktu kerja di suhu -20°C (rotasi penghangatan tubuh), APD sarung tangan rantai baja (mesh glove) anti-potong, sepatu bot anti-slip.',
        practical: 'Audit kelayakan pakaian termal beku (Freezer Suit) dan penataan meja pemotongan ikan ergonomis.'
      },
      {
        name: 'Modul 3: Keselamatan Operasi Bongkar Muat Pelabuhan Samudera Bitung',
        theory: 'Standar pengoperasian Reach Stacker & Crane Dermaga, stabilitas kontainer pendingin (Reefer Container), keselamatan rigger kapal.',
        practical: 'Uji inspeksi kabel listrik reefer plug dan simulasi pemindahan peti kemas 20 feet di lapangan penumpukan.'
      }
    ],
    equipment: [
      'Thermal Freezer Suit & Insulated Safety Boots untuk Suhu -30°C.',
      'Stainless Steel Mesh Cut-Resistant Gloves untuk Pemotongan Ikan.',
      'Multi-Gas Detector Sensor Gas Amonia (NH3) & Oksigen (O2).',
      'SCBA Positive Pressure 300 Bar untuk Tanggap Darurat Amonia.'
    ],
    participants: [
      'Teknisi Cold Storage Bitung, Operator Pengalengan Ikan, Supervisor KEK Bitung, Driver Forklift Ruang Beku, Safety Officer Pelabuhan.'
    ],
    tableData: {
      headers: ['Program Pelatihan K3 Bitung', 'Sertifikasi Resmi', 'Durasi Waktu', 'Target Sektor Industri'],
      rows: [
        ['Ahli K3 Umum Kemnaker RI', 'Kemnaker RI (SKP Resmi)', '12 Hari Kerja', 'Pabrik Pengalengan Ikan, KEK Bitung, & Pelabuhan'],
        ['K3 Sistem Pendingin & Gas Amonia', 'Kepmenaker 187/1999', '3 Hari Kerja', 'Teknisi Cold Storage & Kompresor Pendingin'],
        ['Operator Forklift Ruang Beku & Reach Stacker', 'Permenaker No. 08/2020', '3 - 4 Hari', 'Gudang Cold Chain & Terminal Peti Kemas Bitung'],
        ['HACCP & Keamanan Pangan Industri Ikan', 'Standar ISO 22000 / BNSP', '3 Hari Kerja', 'Tim QC/QA Pengolahan Hasil Laut Ekspor']
      ]
    },
    caseStudy: 'Sebuah pabrik pengalengan ikan tuna ekspor di KEK Bitung berhasil mempertahankan sertifikasi HACCP dan meraih penghargaan Zero Accident setelah melatih seluruh teknisi pendinginnya dalam penanganan darurat amonia.',
    stepByStepGuide: [
      { step: '1. Asesmen Bahaya Cold Storage & Dermaga', desc: 'Pemetaan risiko sistem amonia ruang beku, lantai basah, dan operasi peti kemas pelabuhan.' },
      { step: '2. Pelaksanaan Pelatihan In-House di Bitung', desc: 'Penyelenggaraan materi teori dan praktik langsung di fasilitas pabrik pengolahan ikan.' },
      { step: '3. Simulasi Evakuasi Kebocoran Amonia', desc: 'Ujian drill penyelamatan pekerja di dalam ruang beku menggunakan SCBA dan tandu.' },
      { step: '4. Penerbitan Sertifikat Resmi Kemnaker', desc: 'Evaluasi tertulis dan penerbitan lisensi resmi dari Disnaker Provinsi Sulawesi Utara.' }
    ],
    links: [
      { href: '/kategori-pelatihan/in-house-training-k3-manado-bitung/', anchor: 'In-House Training K3 Manado Bitung' },
      { href: '/kategori-pelatihan/operator-stacker-crane-pelabuhan/', anchor: 'Sertifikasi Crane Pelabuhan' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 13. Audit K3 Lingkungan Kerja Hiperkes
  {
    key: 'audit-k3-lingkungan-kerja-hiperkes',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/audit-k3-lingkungan-kerja-hiperkes/',
    archetype: 'compliance_guide',
    title: 'Panduan Audit K3 Lingkungan Kerja & Higiene Industri Permenaker 5/2018',
    h1: 'Panduan Audit & Inspeksi K3 Lingkungan Kerja (Higiene Industri & Ergonomi): Standar Pemenuhan Permenaker No. 5 Tahun 2018 & Pencegahan Penyakit Akibat Kerja (PAK)',
    meta: 'Panduan audit K3 lingkungan kerja: checklist audit 5 faktor bahaya kerja (fisika, kimia, biologi, ergonomi, psikologi), sampling lab & pelaporan Disnaker.',
    imgAlt: 'Auditor lingkungan kerja melakukan pengukuran parameter iklim kerja dan pengambilan sampel kimia di ruang produksi pabrik',
    related: ['pengukuran-nilai-ambang-batas-nab', 'pemeriksaan-kesehatan-kerja-mcu', 'penerapan-ergonomi-perkantoran', 'k3-keselamatan-kerja'],
    intro: 'Audit K3 Lingkungan Kerja merupakan instrumen terstruktur untuk mengevaluasi apakah tempat kerja telah memenuhi standar keselamatan lingkungan kerja sesuai <strong>Permenaker No. 5 Tahun 2018</strong>. Audit ini membedah 5 faktor bahaya lingkungan kerja (Faktor Fisika, Kimia, Biologi, Ergonomi, dan Psikologi Kerja) serta sarana sanitasi fasilitas (toilet, ruang makan, loker) guna menjamin lingkungan kerja yang sehat, produktif, dan bebas dari Penyakit Akibat Kerja (PAK).',
    hazards: [
      '<strong>Penyakit Akibat Kerja (PAK) Kronis Tak Terdeteksi:</strong> Penurunan daya dengar pekerja (NIHL) atau gangguan pernapasan menahun akibat ketiadaan audit lingkungan.',
      '<strong>Sanksi Teguran & Nota Pemeriksaan Pengawas Ketenagakerjaan:</strong> Perusahaan tidak memiliki dokumen pengukuran lingkungan kerja berkala tahunan.',
      '<strong>Tingginya Angka Absensi Sakit Karyawan:</strong> Kondisi iklim kerja panas berlebih, pencahayaan buruk, dan ergonomi yang salah memicu keluhan fisik massal.',
      '<strong>Temuan Ketidaksesuaian Mayor Audit SMK3 PP 50/2012:</strong> Ketiadaan program higiene industri dan evaluasi pemenuhan Nilai Ambang Batas (NAB).'
    ],
    regulations: [
      '<strong>Permenaker No. 5 Tahun 2018</strong> tentang Keselamatan dan Kesehatan Kerja Lingkungan Kerja.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Permenkes No. 70 Tahun 2016</strong> tentang Standar dan Persyaratan Kesehatan Lingkungan Kerja Industri.'
    ],
    modules: [
      {
        name: 'Modul 1: Kerangka Regulasi Permenaker 5/2018 & Struktur Checklist Audit 5 Faktor Bahaya',
        theory: 'Prinsip higiene industri (Antisipasi, Rekognisi, Evaluasi, Pengendalian), penyusunan checklist audit faktor fisika (kebisingan, iklim kerja, getaran, pencahayaan, radiasi), faktor kimia (debu, uap pelarut, gas toksik).',
        practical: 'Penyusunan instrumen checklist audit lingkungan kerja lengkap berbasis denah tata letak pabrik.'
      },
      {
        name: 'Modul 2: Metodologi Evaluasi Faktor Biologi, Ergonomi, Psikologi Kerja, & Sanitasi Pabrik',
        theory: 'Pemeriksaan potensi patogen biologi (vektor kuman, jamur AC), evaluasi postur kerja ergonomis (metode REBA/RULA), survei stres psikologi kerja, audit sanitasi toilet (rasio jumlah kloset) dan ruang makan.',
        practical: 'Audit fisik fasilitas sanitasi toilet pabrik dan kantin karyawan berdasarkan tabel lampiran Permenaker 5/2018.'
      },
      {
        name: 'Modul 3: Penulisan Laporan Hasil Audit Lingkungan Kerja & Rencana Pengendalian Teknis',
        theory: 'Hierarki pengendalian bahaya lingkungan (Eliminasi, Substitusi, Rekayasa Teknik LEV, Pengendalian Administratif, APD), penyusunan matriks rekomendasi perbaikan, format pelaporan resmi ke Disnaker.',
        practical: 'Penyusunan draf Laporan Akhir Audit K3 Lingkungan Kerja lengkap dengan rekomendasi rekayasa ventilasi industri.'
      }
    ],
    equipment: [
      'Master Checklist Audit K3 Lingkungan Kerja Permenaker No. 5 Tahun 2018.',
      'Digital Lux Meter, Sound Level Meter, & Heat Stress Monitor untuk Validasi Lapangan.',
      'Formulir Kuesioner Survei Faktor Psikologi Kerja (Metode DASS-21 / Copenhagen).',
      'Format Laporan Hasil Audit Lingkungan Kerja & Rencana Tindak Lanjut CAPA.'
    ],
    participants: [
      'Ahli K3 Lingkungan Kerja, Industrial Hygienist, Dokter / Paramedis Perusahaan, Safety Officer, HR General Affairs Manager, Anggota Tim P2K3.'
    ],
    tableData: {
      headers: ['Elemen Audit Lingkungan Kerja', 'Standar Batas Regulasi Wajib', 'Parameter Audit Kunci', 'Regulasi Terkait'],
      rows: [
        ['Faktor Fisika: Kebisingan', 'NAB 85 dBA (Pemaparan Maksimal 8 Jam/Hari)', 'Pengukuran dosimeter personal & area bising mesin', 'Permenaker 5/2018 Lampiran I'],
        ['Faktor Fisika: Pencahayaan', 'Minimal 300 Lux (Ruang Produksi & Kantor)', 'Pengukuran iluminasi meja kerja & bebas silau', 'Permenaker 5/2018 Lampiran I'],
        ['Faktor Kimia: Debu Partikulat', 'NAB 10 mg/m³ (Total) & 3 mg/m³ (Respirabel)', 'Pengambilan sampel filter cassette pompa personal', 'Permenaker 5/2018 Lampiran II'],
        ['Faktor Sanitasi: Rasio Toilet', 'Minimal 1 Kloset per 15 Karyawan (Pabrik)', 'Kebersihan, ketersediaan air bersih, pemisahan gender', 'Permenaker 5/2018 Bab IV'],
        ['Faktor Psikologi Kerja', 'Evaluasi potensi stres kerja & beban kerja mental', 'Survei iklim kerja & program konseling karyawan', 'Permenaker 5/2018 Pasal 23']
      ]
    },
    caseStudy: 'Sebuah pabrik perakitan elektronik di Bekasi menaikkan efisiensi lini sebesar 18% dan memangkas keluhan mata lelah staf setelah melakukan audit pencahayaan menyeluruh dan meningkatkan penerangan dari 120 Lux menjadi 350 Lux.',
    stepByStepGuide: [
      { step: '1. Pembentukan Tim & Walkthrough Audit', desc: 'Melakukan peninjauan awal ke seluruh area produksi, gudang, ruang genset, dan fasilitas toilet.' },
      { step: '2. Pengisian Checklist 5 Faktor Bahaya', desc: 'Memeriksa bukti pemantauan berkala kebisingan, iklim kerja, debu, dan postur kerja ergonomis.' },
      { step: '3. Analisis Hasil terhadap Standar NAB', desc: 'Memetakan titik-titik kerja yang melebihi ambang batas dan menyusun rekomendasi rekayasa ventilasi.' },
      { step: '4. Pelaporan Resmi & Rapat P2K3', desc: 'Menyerahkan buku laporan audit lingkungan kerja kepada manajemen dan melaporkannya ke Disnaker.' }
    ],
    links: [
      { href: '/kategori-pelatihan/pengukuran-nilai-ambang-batas-nab/', anchor: 'Pengukuran Nilai Ambang Batas NAB' },
      { href: '/kategori-pelatihan/pemeriksaan-kesehatan-kerja-mcu/', anchor: 'Pemeriksaan Kesehatan Kerja MCU' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  }
];
