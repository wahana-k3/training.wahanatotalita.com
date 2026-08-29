import { MultiArchetypeProgramDetail } from './multi-archetype-renderer';

export const batch7RegionalPages: MultiArchetypeProgramDetail[] = [
  // 1. Batam
  {
    key: 'in-house-training-k3-batam',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-batam/',
    archetype: 'regional',
    title: 'In-House Training K3 Batam: Sertifikasi Industri Galangan & Manufaktur Elektronik',
    h1: 'In-House Training K3 Batam: Pelatihan Keselamatan Kerja On-Site Galangan Kapal, Elektronik, & Offshore Fabrikasi',
    meta: 'In-house training K3 Batam: sertifikasi K3 galangan kapal shipyard, manufaktur presisi Batamindo, offshore fabrication Kabil, & regulasi Kemnaker.',
    imgAlt: 'Pelaksanaan in-house training K3 industri galangan kapal dan fabrikasi offshore di kawasan industri Kabil Batam',
    related: ['in-house-training', 'galangan-kapal-shipyard', 'manufaktur-elektronik', 'k3-keselamatan-kerja'],
    intro: 'Kawasan Perdagangan Bebas dan Pelabuhan Bebas (FTZ) Batam merupakan episentrum industri galangan kapal (shipyard), fabrikasi struktur migas offshore di Kabil, serta manufaktur perakitan elektronik kelas dunia di Kawasan Industri Batamindo (Muka Kuning). Mengingat tingginya intensitas operasional hot work pada lambung kapal, paparan bahan kimia solvent elektronik, dan pergerakan alat angkat berat, pemenuhan standar K3 wajib disesuaikan dengan profil risiko terpadu zona FTZ Batam.',
    hazards: [
      '<strong>Bahaya Ledakan Ruang Tertutup Shipyard:</strong> Akumulasi gas hidrokarbon dan uap cat pada tangki bahan bakar kapal saat proses pengelasan.',
      '<strong>Paparan Kimia Berbahaya Perakitan PCB:</strong> Inhalasi uap fluks solder timbal, pembersih isopropil alkohol, dan asam etsa pada lini SMT elektronik.',
      '<strong>Risiko Jatuh dari Ketinggian Konstruksi Kapal:</strong> Pekerjaan pada scaffolding gantung di dry dock tanpa sistem fall arrest 100% tie-off.',
      '<strong>Kegagalan Pengangkatan Struktur Rig Berat:</strong> Beban kritis melampaui Safe Working Load (SWL) crane gantry pelabuhan saat fabrikasi modul jacket offshore.'
    ],
    regulations: [
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja di seluruh tempat kerja darat dan maritim.',
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang Keselamatan dan Kesehatan Kerja Pesawat Angkat dan Pesawat Angkut.',
      '<strong>Permenaker No. 5 Tahun 2018</strong> tentang K3 Lingkungan Kerja (Pengendalian Kimia dan Fisika).',
      '<strong>Kepdirjen Binwasnaker No. 113/2006</strong> tentang Pedoman K3 di Ruang Terbatas (Confined Space).'
    ],
    modules: [
      {
        name: 'Modul 1: Manajemen Bahaya Galangan Kapal & Fabrikasi Heavy Offshore',
        theory: 'Regulasi maritim, prosedur Safe Hot Work Permit, gas freeing certification, isolasi energi LOTO perpipaan shipyard.',
        practical: 'Inspeksi clearance tangki ballast kapal menggunakan 4-gas detector terkalibrasi sebelum izin kerja terbit.'
      },
      {
        name: 'Modul 2: K3 Industri Elektronik & Higiene Lingkungan Kerja SMT',
        theory: 'Pengendalian electrostatic discharge (ESD), tata kelola B3 pelarut industri, ventilasi pembuangan lokal (LEV).',
        practical: 'Audit ergonomi stasiun kerja mikroskop dan penanganan ceceran zat kimia asam dengan spill kit.'
      },
      {
        name: 'Modul 3: Rigging, Lifting Plan, & Sertifikasi Alat Angkat Maritim',
        theory: 'Analisis load chart portal crane, inspeksi webbing sling dan shackle maritim, komunikasi sinyal rigger.',
        practical: 'Simulasi tandem lifting pemindahan blok lambung kapal 25 ton di area workshop fabrikasi.'
      }
    ],
    equipment: [
      'Multi-Gas Detector Terkalibrasi (LEL, O2, H2S, CO) dengan sampling pump probe 15 meter.',
      'Full Body Harness Double Lanyard dengan Scaffold Hook & Fall Arrester.',
      'Spill Kit Kimia Khusus Solvent Cair & Lembar Data Keselamatan (SDS).',
      'Mobile Sound Level Meter & Lux Meter Digital untuk Pengukuran Area Produksi.'
    ],
    participants: [
      'HSE Coordinator Shipyard, Production Supervisor Batamindo, Rigging Foreman Kabil, Maintenance Engineer, dan Anggota P2K3 Perusahaan.'
    ],
    tableData: {
      headers: ['Klaster Industri Batam', 'Zona Utama', 'Prioritas Kurikulum K3', 'Standar Lisensi / Sertifikasi'],
      rows: [
        ['Shipyard & Marine Repair', 'Batu Ampar & Tanjung Uncang', 'Hot Work, Confined Space Tank Entry, Blasting & Painting', 'Lisensi Ruang Terbatas Kemnaker & BNSP'],
        ['Offshore & Heavy Fabrikasi', 'Kawasan Industri Terpadu Kabil', 'Rigging Master, Heavy Lifting, Radiography Safety', 'SIO Rigger Kemnaker & CSMS Contractor'],
        ['Elektronik & Semikonduktor', 'Batamindo Industrial Park', 'Chemical Safety B3, Ergonomi RULA, Fire Safety Kelas D', 'Sertifikasi Ahli K3 Kimia & P2K3'],
        ['Logistik Maritim & Depo', 'Batu Ampar Port Logistics', 'Forklift Counterbalance, Reach Stacker, SOP Bongkar Muat', 'SIO Operator Forklift & Overhead Crane']
      ]
    },
    caseStudy: 'Sebuah galangan kapal di Tanjung Uncang Batam mengeliminasi 100% insiden near-miss pada pekerjaan tangki kapal setelah menyelenggarakan program in-house training K3 terpadu yang memadukan prosedur uji gas atmosferis dan pengawasan fire watch aktif.',
    zoneHighlights: [
      { zone: 'Batamindo Industrial Park', hazard: 'Paparan uap kimia pembersih PCB & beban repetitif manual assembling', control: 'Instalasi LEV otomatis & rotasi kerja berbasis asesmen REBA' },
      { zone: 'Kabil Integrated Industrial Estate', hazard: 'Lifting overload saat fabrikasi pipa baja & modul separator migas', control: 'Mandatory lifting plan verification & SIO Rigger Kemnaker' },
      { zone: 'Tanjung Uncang Shipyard Hub', hazard: 'Gas terperangkap di kompartemen ganda kapal saat pengelasan', control: 'Continuous mechanical ventilation & gas testing berkala per 2 jam' }
    ],
    stepByStepGuide: [
      { step: '1. Asesmen Bahaya Fasilitas', desc: 'Konsultan kami meninjau layout dock kapal, gudang kimia, atau lini SMT klien di Batam.' },
      { step: '2. Kustomisasi Modul Lokal', desc: 'Kurikulum disesuaikan dengan SOP internal dan bahasa teknis operasional tim lapangan.' },
      { step: '3. Eksekusi Teori & Praktik', desc: 'Pelatihan 2-3 hari di ruang meeting dan simulasi langsung di stasiun kerja klien.' },
      { step: '4. Evaluasi & Sertifikasi', desc: 'Post-test, evaluasi perilaku Level 3, serta penerbitan sertifikat kompetensi resmi.' }
    ],
    links: [
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' },
      { href: '/kategori-pelatihan/confined-space-entry/', anchor: 'Pelatihan K3 Ruang Terbatas (Confined Space)' },
      { href: '/industri/manufaktur/', anchor: 'Panduan K3 Industri Manufaktur' }
    ]
  },

  // 2. Cilegon
  {
    key: 'in-house-training-k3-cilegon',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-cilegon/',
    archetype: 'regional',
    title: 'In-House Training K3 Cilegon: Petrokimia, Baja Berat, & Industri Kimia Khusus',
    h1: 'In-House Training K3 Cilegon: Pelatihan Keselamatan Kerja Petrokimia, Peleburan Baja, & Kawasan Industri KIEC',
    meta: 'In-house training K3 Cilegon: keselamatan industri petrokimia, peleburan baja Krakatau, penanganan B3 reaktif, LOTO & sistem proteksi kebakaran.',
    imgAlt: 'Simulasi penanganan kebocoran gas kimia berbahaya pada in-house training industri petrokimia di Cilegon Banten',
    related: ['in-house-training', 'petrokimia-dan-gas', 'peleburan-baja-smelter', 'pengendalian-bahaya-kimia-b3'],
    intro: 'Kota Cilegon adalah pusat industri petrokimia berat, peleburan baja, dan pembangkit listrik terintegrasi di ujung barat Pulau Jawa. Fasilitas di Kawasan Industri KIEC, Ciwandan, dan Anyer mengelola fluida kimia berbahaya (toxic, flammable, reactive) dalam volume raksasa dan temperatur tinggi. Pelatihan in-house K3 di Cilegon didesain untuk mencegah bencana besar (Major Accident Hazard) sesuai regulasi Process Safety Management (PSM).',
    hazards: [
      '<strong>Ledakan Uap dan Reaksi Termal Petrokimia:</strong> Kebocoran hidrokarbon volatil seperti ethylene dan propylene yang kontak dengan sumber api.',
      '<strong>Radiasi Panas Logam Cair Furnace Baja:</strong> Percikan terak baja cair suhu 1.600°C yang memicu luka bakar tingkat 3 dan kebakaran infrastruktur.',
      '<strong>Pelepasan Gas Beracun (Cl2, NH3, SO2):</strong> Kegagalan seal valve pipa proses yang mengancam keselamatan pekerja dan komunitas sekitar.',
      '<strong>Bahaya Pelepasan Energi Tersimpan Mesin Rolling:</strong> Aktivasi tidak sengaja pada rolling mill saat aktivitas maintenance berkala.'
    ],
    regulations: [
      '<strong>Kepmenaker No. 187/MEN/1999</strong> tentang Pengendalian Bahan Kimia Berbahaya di Tempat Kerja.',
      '<strong>Permenaker No. 37 Tahun 2016</strong> tentang K3 Bejana Tekan dan Tangki Timbun.',
      '<strong>Instruksi Menaker No. 11/1997</strong> tentang Pengawasan Khusus K3 Penanggulangan Kebakaran.',
      '<strong>PP No. 50 Tahun 2012</strong> tentang Penerapan Sistem Manajemen K3 (SMK3).'
    ],
    modules: [
      {
        name: 'Modul 1: Process Safety Management (PSM) & Pengendalian B3',
        theory: 'Prinsip PSM, identifikasi bahaya HAZOP, zonasi area berbahaya (Hazardous Area Classification), penanganan amonia dan klorin.',
        practical: 'Simulasi respon tanggap darurat tumpahan B3 reaktif tingkat mayor dan evakuasi zona angin.'
      },
      {
        name: 'Modul 2: Isolasi Energi Berbahaya (LOTO) pada Fasilitas Pipa & Kelistrikan',
        theory: 'Delapan langkah baku LOTO, verifikasi zero energy state, penanganan group lockout pada shutdown pabrik.',
        practical: 'Pemasangan lockout hasp, circuit breaker lockout, dan flange blind lock pada unit boiler kimia.'
      },
      {
        name: 'Modul 3: Tanggap Darurat Kebakaran Kimia & Gas Industri',
        theory: 'Karakteristik api kimia, penggunaan media busa (foam system), water curtain untuk absorbsi gas beracun.',
        practical: 'Gelar simulasi pemadaman api flare pipa gas menggunakan dry chemical powder dan fixed foam proportioner.'
      }
    ],
    equipment: [
      'SCBA (Self-Contained Breathing Apparatus) Positive Pressure 300 Bar.',
      'Set Lockout/Tagout (LOTO) Komprehensif (Valve Lockout, Circuit Breaker Lock, Padlock Master).',
      'Gas Detector Multi-Sensors Khusus Gas Toksik Kimia (Cl2, NH3, VOC, LEL).',
      'Pakaian Pelindung Kimia Level B (Chemical Splash Suit) & Safety Boot Nitrile Heavy-Duty.'
    ],
    participants: [
      'Plant Manager, Process Engineer Petrokimia, Safety Officer K3 Kimia, Maintenance Supervisor Baja, dan Regu Tanggap Darurat (ERT).'
    ],
    tableData: {
      headers: ['Zona Industri Cilegon', 'Fokus Sektor', 'Matriks Risiko Kritis', 'Program In-House Prioritas'],
      rows: [
        ['Krakatau Industrial Estate (KIEC)', 'Peleburan Baja & Manufaktur', 'Molten Metal Splash, Crane Hoist Overload', 'K3 Peleburan Logam & SIO Overhead Crane'],
        ['Koridor Industri Anyer - Ciwandan', 'Petrokimia & Polimer Dasar', 'Toxic Gas Dispersion, Runaway Chemical Reaction', 'Process Safety Management (PSM) & HAZOP'],
        ['Kawasan Pelabuhan Cigading', 'Logistik Curah Kering (Batu Bara/Biji Besi)', 'Debu Partikulat Batubara, Conveyor Entanglement', 'K3 Confined Space Silo & Fire Protection'],
        ['Kawasan Pembangkit Suralaya', 'Pembangkit Listrik Tenaga Uap', 'High Pressure Steam Boiler, Arc Flash Kelistrikan', 'K3 Bejana Tekanan & Ahli K3 Listrik']
      ]
    },
    caseStudy: 'Sebuah pabrik bahan baku kimia polimer di Ciwandan Cilegon berhasil mempertahankan rekor 12 juta jam kerja tanpa kecelakaan (Zero Lost Time Injury) pasca standardisasi sistem LOTO dan simulasi tanggap darurat kebocoran gas in-house bersama tim instruktur kami.',
    zoneHighlights: [
      { zone: 'KIEC Industrial Park', hazard: 'Paparan debu silika dan percikan terak baja di area furnace', control: 'Penyediaan APD aluminized suit & exhaust dust collector terpadu' },
      { zone: 'Anyer Chemical Corridor', hazard: 'Kebocoran jalur pipa transfer monomer hidrokarbon cair', control: 'SOP Pressure Relief Valve testing & continuous flame detector' },
      { zone: 'Ciwandan Port Terminal', hazard: 'Tersangkut putaran drum conveyor batubara belt', control: 'Pemasangan emergency pull-cord switch & training operator conveyor' }
    ],
    stepByStepGuide: [
      { step: '1. Audit Kebutuhan PSM', desc: 'Pemetaan titik rawan proses kimia dan review dokumen P&ID pabrik klien.' },
      { step: '2. Simulasi Tabel HAZOP', desc: 'Workshop studi kasus parameter deviasi suhu, tekanan, dan laju alir sistem.' },
      { step: '3. Latihan Basah di Area Pabrik', desc: 'Simulasi pemakaian SCBA dan penanganan kebocoran flange pipa bertekanan.' },
      { step: '4. Pelaporan Audit Kepatuhan', desc: 'Pemberian rekomendasi teknis mitigasi dan sertifikat kelulusan peserta.' }
    ],
    links: [
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' },
      { href: '/kategori-pelatihan/lockout-tagout-loto/', anchor: 'Pelatihan Prosedur LOTO Kemnaker' },
      { href: '/industri/pertambangan-migas/', anchor: 'K3 Sektor Energi dan Petrokimia' }
    ]
  },

  // 3. Morowali
  {
    key: 'in-house-training-k3-morowali',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-morowali/',
    archetype: 'regional',
    title: 'In-House Training K3 Morowali: Smelter Nikel, Rotary Kiln, & Heavy Mining Operations',
    h1: 'In-House Training K3 Morowali: Keselamatan Operasional Smelter Nikel IMIP, Rotary Kiln Electric Furnace (RKEF), & Heavy Haulage',
    meta: 'In-house training K3 Morowali: keselamatan smelter nikel IMIP, operasional tungku RKEF, bahaya gas CO, heavy equipment hauling & regulasi SMKP.',
    imgAlt: 'Suasana in-house training K3 smelter nikel di kawasan industri IMIP Morowali dengan APD peleburan logam lengkap',
    related: ['in-house-training', 'smelter-dan-pengolahan-mineral', 'alat-berat-excavator-dump-truck', 'k3-keselamatan-kerja'],
    intro: 'Kawasan Industri Morowali (IMIP) di Sulawesi Tengah merupakan episentrum hilirisasi nikel terbesar di Asia Tenggara. Beroperasinya puluhan lini pabrik pemurnian berbasis teknologi Rotary Kiln Electric Furnace (RKEF) dan High Pressure Acid Leach (HPAL) menuntut standar keselamatan level tertinggi untuk memitigasi bahaya suhu ekstrem, gas karbon monoksida (CO), bahan kimia asam sulfat bertekanan, dan lalu lintas alat berat tambang non-stop.',
    hazards: [
      '<strong>Ledakan Tungku Smelter (Furnace Explosion):</strong> Kontak antara terak feronikel cair suhu 1.500°C dengan air pada sistem pendingin dinding tungku.',
      '<strong>Keracunan Akut Gas Karbon Monoksida (CO):</strong> Pelepasan gas buang hasil reduksi batubara pada rotary kiln tanpa deteksi dini.',
      '<strong>Paparan Asam Sulfat Konsentrasi Tinggi (HPAL):</strong> Kebocoran pipa transfer autoclave asam sulfat suhu 250°C dan tekanan 45 bar.',
      '<strong>Tabrakan Dump Truck Tambang 100 Ton:</strong> Titik buta (blind spot) manuver heavy hauler di area loading jetty dan stockpile bijih nikel.'
    ],
    regulations: [
      '<strong>Kepmen ESDM No. 1827 K/30/MEM/2018</strong> tentang Pedoman Pelaksanaan Kaidah Teknik Pertambangan yang Baik.',
      '<strong>Permenaker No. 38 Tahun 2016</strong> tentang K3 Pesawat Tenaga dan Produksi (Penggerak Mula, Tungku).',
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang Keselamatan dan Kesehatan Kerja Pesawat Angkat dan Angkut.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Manajemen Keselamatan Operasional Tungku Listrik (RKEF & SAF)',
        theory: 'Prinsip termodinamika terak nikel cair, pencegahan ledakan uap (steam explosion), pemantauan thermocouple tungku.',
        practical: 'Inspeksi sistem emergency tapping dan simulasi isolasi air pendingin saat dinding furnace kritis.'
      },
      {
        name: 'Modul 2: Pengendalian Bahaya Gas Beracun & Asfiksia di Area Kiln',
        theory: 'Fisiologi keracunan gas CO dan SO2, sistem ventilasi ruang kontrol, kalibrasi multi-gas detector.',
        practical: 'Praktik evakuasi darurat regu kerja menggunakan escape hood dan SCBA dari menara preheater.'
      },
      {
        name: 'Modul 3: Manajemen Lalu Lintas & K3 Alat Berat Tambang (Traffic Management Plan)',
        theory: 'Zonasi blind spot dump truck, aturan hak jalan (right of way) hauling road, inspeksi P2H alat berat.',
        practical: 'Audit kelayakan pengereman dump truck dan simulasi manuver aman di area stockpile nikel.'
      }
    ],
    equipment: [
      'Baju Tahan Panas Logam Cair (Aluminized Furnace Suit) & Face Shield Emas UV/IR.',
      'Single Gas CO Detector Personal dengan Alarm Getar dan Bunyi 95 dB.',
      'Emergency Escape Breathing Apparatus (EEBA) 15 Menit.',
      'Traffic Laser Distance Sensor & Kit Pemeriksaan Harian Alat Berat (P2H).'
    ],
    participants: [
      'Supervisor Smelter, Operator Furnace RKEF, Safety Officer Tambang & Pabrik, Driver Heavy Hauler, Tim Fire & Rescue IMIP.'
    ],
    tableData: {
      headers: ['Area Operasi Smelter Morowali', 'Potensi Bencana Kritis', 'Metode Mitigasi Wajib', 'Regulasi Acuan'],
      rows: [
        ['Tungku Peleburan RKEF', 'Molten Slag Explosion, Breakout Furnace', 'SOP Tapping Kering, Interlock Emergency Water Cooling', 'Permenaker 38/2016 & SOP Pabrik'],
        ['Rotary Kiln & Coal Gasifier', 'CO Poisoning, Flash Fire Gas Batubara', 'Continuous Fixed Gas Alarm, Personal CO Monitor Wajib', 'Permenaker 5/2018 Lingkungan Kerja'],
        ['Fasilitas HPAL Autoclave', 'High Pressure Acid Leak, Scalding', 'Pressure Safety Valve (PSV) Recertification, Acid Suit', 'Permenaker 37/2016 Bejana Tekan'],
        ['Hauling Road & Stockpile Port', 'Heavy Hauler Collision, Runaway Truck', 'Mandatory Radio VHF, Fatigue Alert System, Tanggul Pengaman', 'Kepmen ESDM 1827/2018 (SMKP)']
      ]
    },
    caseStudy: 'Sebuah konsorsium smelter di Morowali menekan angka kasus keracunan gas hingga 0% dalam setahun operasional setelah menyelenggarakan pelatihan in-house wajib terkait bahaya gas CO dan prosedur audit P2H harian bagi seluruh supervisor shift.',
    zoneHighlights: [
      { zone: 'Kawasan IMIP Morowali', hazard: 'Paparan gas CO hasil pembakaran kiln batubara & suhu terak 1.500°C', control: 'Penggunaan fixed gas monitoring 24 jam & APD aluminized grade A' },
      { zone: 'Pelabuhan Khusus Jetty Ore', hazard: 'Lifting barge loader rubuh & tabrakan dump truck di dermaga', control: 'SOP batas beban jetty & sistem izin kerja bongkar muat maritim' },
      { zone: 'Autoclave HPAL Processing', hazard: 'Semburan uap asam sulfat pekat 45 bar saat sampling proses', control: 'Double block and bleed isolation & automated sampling port' }
    ],
    stepByStepGuide: [
      { step: '1. Pemetaan Risiko RKEF/HPAL', desc: 'Analisis spesifik lini tungku, bejana tekanan, dan jalan tambang klien.' },
      { step: '2. Penyesuaian Silabus Bilingual', desc: 'Materi disajikan dalam Bahasa Indonesia dan pengantar istilah teknis operasional.' },
      { step: '3. Simulasi Praktik Lapangan On-Site', desc: 'Uji gas darurat, pemakaian APD khusus smelter, dan inspeksi alat berat.' },
      { step: '4. Uji Kompetensi & Lisensi', desc: 'Evaluasi tertulis dan verifikasi kecakapan operator untuk sertifikasi resmi.' }
    ],
    links: [
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' },
      { href: '/industri/pertambangan-migas/', anchor: 'K3 Industri Pertambangan dan Mineral' },
      { href: '/kategori-pelatihan/operator-excavator/', anchor: 'Sertifikasi Operator Alat Berat Tambang' }
    ]
  },

  // 4. Weda Bay
  {
    key: 'in-house-training-k3-weda-bay',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-weda-bay/',
    archetype: 'regional',
    title: 'In-House Training K3 Weda Bay: Smelter Nikel Halmahera & Infrastruktur Tambang',
    h1: 'In-House Training K3 Weda Bay: Pelatihan Keselamatan Smelter Nikel IWIP, Operasional Pelabuhan Ore, & Pembangkit Listrik Captive',
    meta: 'In-house training K3 Weda Bay IWIP: keselamatan industri smelter Halmahera Tengah, tanggap darurat maritim ore, PLTU captive & standar SMKP.',
    imgAlt: 'Pelatihan keselamatan kerja in-house di kawasan industri Weda Bay IWIP Halmahera Tengah',
    related: ['in-house-training', 'in-house-training-k3-morowali', 'smelter-dan-pengolahan-mineral', 'k3-keselamatan-kerja'],
    intro: 'Kawasan Industri Weda Bay (IWIP) di Halmahera Tengah merupakan salah satu proyek strategis nasional terpadu untuk pengolahan mineral nikel baterai dan feronikel. Operasional masif yang mencakup tambang terbuka bijih nikel laterit, pembangkit listrik tenaga uap (PLTU) captive puluhan megawatt, dan pelabuhan bongkar muat laut dalam menghadapi tantangan geografis kepulauan terpencil. Program in-house training K3 di Weda Bay memastikan kepatuhan regulasi dan kesiapan tanggap darurat mandiri di lokasi terisolir.',
    hazards: [
      '<strong>Tanah Longsor Front Tambang & Jalan Tambang:</strong> Curah hujan ekstrem Maluku Utara yang memicu ketidakstabilan lereng pit tambang nikel.',
      '<strong>Bahaya Tegangan Tinggi PLTU Captive:</strong> Paparan arc flash dan sengatan listrik tegangan menengah/tinggi pada gardu induk distribusi smelter.',
      '<strong>Insiden Alat Berat di Jetty Pelabuhan:</strong> Excavator atau dump truck terperosok ke laut saat proses pemuatan tongkang bijih nikel.',
      '<strong>Paparan Gas Beracun & Debu Batubara:</strong> Ledakan debu batubara di silo penampungan bahan bakar PLTU captive.'
    ],
    regulations: [
      '<strong>Kepmen ESDM No. 1827 K/30/MEM/2018</strong> tentang Keselamatan Pertambangan Mineral dan Batubara.',
      '<strong>Permenaker No. 12 Tahun 2015</strong> tentang K3 Listrik di Tempat Kerja.',
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang Pesawat Angkat dan Pesawat Angkut.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Manajemen K3 Tambang Nikel Terbuka & Geoteknik Lereng',
        theory: 'Kaidah kestabilan lereng tambang laterit, pembuatan tanggul pengaman (bund wall), drainase jalan tambang.',
        practical: 'Audit harian inspeksi lereng tambang pasca-hujan lebat dan verifikasi lebar jalan hauling.'
      },
      {
        name: 'Modul 2: Keselamatan Ketenagalistrikan Tegangan Tinggi di Fasilitas PLTU',
        theory: 'Prinsip isolasi listrik bertegangan, perhitungan energi arc flash, penggunaan APD Arc Flash Kit 40 cal/cm².',
        practical: 'Simulasi switching prosedur pada kubikel tegangan menengah 20 kV dengan permit to work listrik.'
      },
      {
        name: 'Modul 3: Tanggap Darurat Medis & Evakuasi di Lokasi Remote',
        theory: 'Manajemen trauma gawat darurat, stabilisasi korban fraktur, koordinasi evakuasi medis udara/laut (medevac).',
        practical: 'Simulasi pemindahan korban kritis dari ketinggian boiler PLTU menggunakan basket stretcher dan crane.'
      }
    ],
    equipment: [
      'Arc Flash Suit 40 cal/cm² dengan Hood Pelindung Kepala & Sarung Tangan Dielektrik 20 kV.',
      'Inclinometer Digital & Laser Distance Meter untuk Pengukuran Kemiringan Lereng.',
      'Basket Stretcher Maritim dengan Spinal Board & Neck Collar Stabilizer.',
      'Multi-Gas Detector Portabel Kalibrasi Pabrik untuk Tambang dan Smelter.'
    ],
    participants: [
      'Kepala Teknik Tambang (KTT), Pengawas Operasional Pertama (POP), Teknisi Listrik PLTU, Safety Inspector IWIP, Paramedis Site.'
    ],
    tableData: {
      headers: ['Sektor IWIP Weda Bay', 'Tantangan Lapangan', 'Fokus Kurikulum Pelatihan', 'Target Standar'],
      rows: [
        ['Tambang Terbuka Laterit', 'Lereng Longsor, Jalan Berlumpur Licin', 'Geoteknik Tambang, Defensive Driving LV & Hauler', 'Sertifikasi POP BNSP / ESDM'],
        ['Smelter & Kiln Reduksi', 'Terak Panas, Gas Karbon Monoksida', 'Prosedur Tapping Aman, Penanganan Gas Buang Kiln', 'K3 Pesawat Tenaga & Produksi'],
        ['PLTU Captive Power', 'High Voltage Switchyard, Coal Dust Fire', 'LOTO Listrik, Proteksi Kebakaran Silo Batubara', 'Ahli K3 Listrik Kemnaker'],
        ['Terminal Khusus Jetty Ore', 'Bongkar Muat Tongkang, Pasang Surut Laut', 'Lifting Gear Inspection, Marine Safety & Life Jacket SOP', 'SIO Rigger & Crane Operator']
      ]
    },
    caseStudy: 'Sebuah kontraktor pertambangan di Weda Bay berhasil menurunkan tingkat kecelakaan kendaraan operasional hingga 85% setelah seluruh driver tambang mengikuti pelatihan defensive driving dan manajemen fatigue terstruktur on-site.',
    zoneHighlights: [
      { zone: 'IWIP Mining Pit Area', hazard: 'Kemiringan lereng labil akibat saturasi air hujan tropis', control: 'Monitoring geoteknik real-time & pembuatan berm pengaman standar' },
      { zone: 'Captive Power Plant Switchyard', hazard: 'Arc flash pada ruang panel saat pemeliharaan trafo step-up', control: 'Pemberlakuan permit kerja listrik bertegangan & APD isolasi penuh' },
      { zone: 'Barge Loading Port', hazard: 'Excavator tergelincir dari ramp tongkang saat air pasang', control: 'Pemasangan stop block permanen & pengawasan signalman tersertifikasi' }
    ],
    stepByStepGuide: [
      { step: '1. TNA Kebutuhan Site Remote', desc: 'Pemetaan kompetensi personel lokal dan ekspatriat di site Halmahera.' },
      { step: '2. Mobilisasi Instruktur Senior', desc: 'Instruktur bersertifikasi Kemnaker/BNSP diterbangkan langsung ke lokasi site.' },
      { step: '3. Simulasi Bencana Nyata', desc: 'Latihan tanggap darurat evakuasi korban di area pit tambang dan dermaga.' },
      { step: '4. Pelaporan ke Disnaker & Minerba', desc: 'Dokumentasi kepatuhan untuk pelaporan berkala keselamatan kerja resmi.' }
    ],
    links: [
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' },
      { href: '/industri/pertambangan-migas/', anchor: 'Panduan K3 Sektor Pertambangan' },
      { href: '/kategori-pelatihan/ahli-k3-listrik/', anchor: 'Sertifikasi Ahli K3 Listrik Kemnaker' }
    ]
  },

  // 5. Balikpapan
  {
    key: 'in-house-training-k3-balikpapan',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-balikpapan/',
    archetype: 'regional',
    title: 'In-House Training K3 Balikpapan: Migas, Kilang RDMP, & Logistik Penyangga IKN',
    h1: 'In-House Training K3 Balikpapan: Pelatihan Keselamatan Kerja Kilang Minyak, Fabrikasi Heavy Engineering Kariangau, & Suplai IKN',
    meta: 'In-house training K3 Balikpapan: keselamatan kilang minyak RDMP, kawasan industri Kariangau KIK, rig offshore, sertifikasi CSMS & Kemnaker.',
    imgAlt: 'Pelatihan keselamatan in-house untuk industri migas dan kilang minyak di Balikpapan Kalimantan Timur',
    related: ['in-house-training', 'petrokimia-dan-gas', 'ahli-k3-umum-kemnaker', 'k3-keselamatan-kerja'],
    intro: 'Balikpapan adalah gerbang energi utama Kalimantan dan kota penyangga inti proyek Ibu Kota Nusantara (IKN). Dengan proyek perluasan kilang minyak raksasa (RDMP Kilang Pertamina) dan pusat industri berat Kawasan Industri Kariangau (KIK), kebutuhan akan tenaga kerja yang memiliki kualifikasi keselamatan migas ketat (Oil & Gas Standard), sertifikasi scaffolding, lifting inspection, dan CSMS kontraktor menjadi prioritas mutlak.',
    hazards: [
      '<strong>Ledakan Gas Hidrokarbon Kilang Minyak:</strong> Pekerjaan panas (welding/cutting) di dekat tangki penyimpanan crude oil dan pipa bertekanan.',
      '<strong>Bahaya Pekerjaan Ruang Terbatas (Vessel Tank):</strong> Pembersihan endapan lumpur minyak (tank cleaning) dengan bahaya gas H2S mematikan.',
      '<strong>Kegagalan Pengangkatan Berat di Area Dermaga:</strong> Heavy lift modul kilang minyak ratusan ton menggunakan crawler crane di zona padat pipa.',
      '<strong>Tenggelam & Kecelakaan Transportasi Air:</strong> Pergerakan personel transfer kapal supply boat ke rig lepas pantai di Teluk Balikpapan.'
    ],
    regulations: [
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>PP No. 11 Tahun 1979</strong> tentang Keselamatan Kerja pada Pemurnian dan Pengolahan Minyak dan Gas Bumi.',
      '<strong>Permenaker No. 9 Tahun 2016</strong> tentang K3 Pekerjaan pada Ketinggian.',
      '<strong>Pedoman PTK 007 SKK Migas</strong> tentang Kualifikasi CSMS Penyedia Jasa Migas.'
    ],
    modules: [
      {
        name: 'Modul 1: Sistem Izin Kerja Aman (PTW) & Keselamatan Kilang Migas',
        theory: 'Konsep Cold/Hot Work Permit, Confined Space Entry Permit, Hazard Identification Plan, Isolasi Proses LOTO.',
        practical: 'Audit dokumen JSA dan simulasi verifikasi izin kerja panas di area plant mock-up.'
      },
      {
        name: 'Modul 2: Mitigasi Gas Berbahaya & Pemantauan Atmosfer (Authorized Gas Tester)',
        theory: 'Sifat racun H2S, ambang batas LEL/UEL hidrokarbon, defisiensi oksigen, prinsip kerja sensor catalytic & IR.',
        practical: 'Uji atmosferis multi-level pada tangki tiruan menggunakan pump-assisted gas detector.'
      },
      {
        name: 'Modul 3: Rigging, Lifting Plan, & Scaffolding Inspeksi Standar Migas',
        theory: 'Kalkulasi safety factor sling rantai/webbing, penentuan titik berat beban asimetris, standar perancah pipa BS 1139.',
        practical: 'Pemasangan scaffolding tubular gantung dan uji beban visual pada shackle lifting beam.'
      }
    ],
    equipment: [
      'Wireless Gas Detection Area Monitor dengan Sensor LEL, H2S, O2, CO.',
      'Peralatan Scaffolding Modular BS 1139 & Kunci Pas Scaffolder Khusus.',
      'Tripod Rescue Winch Ruang Terbatas dengan Self-Retracting Lifeline (SRL).',
      'Man-Overboard Lifejacket Otomatis & Throwing Rescue Buoy Standar SOLAS.'
    ],
    participants: [
      'Safety Officer Kilang Migas, Scaffolding Inspector, Rigger Specialist, Permit Coordinator, Site Manager Proyek IKN.'
    ],
    tableData: {
      headers: ['Klaster Industri Balikpapan', 'Lokasi Strategis', 'Kompetensi K3 Kunci', 'Kualifikasi Wajib'],
      rows: [
        ['Kilang Minyak & RDMP', 'Kilang Pertamina Balikpapan', 'Hot Work Safety, Confined Space Entry, LOTO Migas', 'Sertifikasi Gas Tester & Ahli K3 Kimia'],
        ['Heavy Engineering & Fabrikasi', 'Kawasan Industri Kariangau (KIK)', 'Rigging Lifting Plan, Ultrasonic NDT, Welder Safety', 'SIO Rigger Kemnaker & Crane Inspector'],
        ['Logistik Maritim Teluk Balikpapan', 'Pelabuhan Semayang & Kariangau Port', 'Bongkar Muat Dermaga, CSMS Kontraktor Maritim', 'CSMS High Risk & K3 Kepelabuhanan'],
        ['Infrastruktur Penyangga IKN', 'Koridor Tol Balikpapan - Sepaku', 'K3 Konstruksi Gedung & Jembatan, Defensive Driving', 'Ahli Muda/Madya K3 Konstruksi BNSP']
      ]
    },
    caseStudy: 'Sebuah kontraktor fabrikasi di Kawasan Industri Kariangau Balikpapan meraih predikat Kontraktor Terbaik Kategori CSMS High-Risk dari operator migas multinasional setelah seluruh mandor dan riggernya lulus program in-house training intensif.',
    zoneHighlights: [
      { zone: 'Kariangau Industrial Estate (KIK)', hazard: 'Operasi heavy lifting modul baja di bantaran dermaga berlumpur', control: 'Penggunaan outrigger pad tebal & verifikasi daya dukung tanah crane' },
      { zone: 'Kompleks Kilang RDMP', hazard: 'Akumulasi uap hidrokarbon di parit pipa (pipe trench)', control: 'Continuous LEL monitoring & penempatan blower sirkulasi non-sparking' },
      { zone: 'Dermaga Penyeberangan Semayang', hazard: 'Karyawan terpeleset jatuh ke laut saat transfer kapal logistik', control: 'Wajib auto-inflatable life vest & tangga gangway bersafety net' }
    ],
    stepByStepGuide: [
      { step: '1. Verifikasi Persyaratan Migas', desc: 'Penyelarasan kurikulum dengan standar PTK 007 dan Golden Rules klien.' },
      { step: '2. Pelaksanaan Kelas Interaktif', desc: 'Penyampaian teori berbasis studi kasus riil insiden kilang internasional.' },
      { step: '3. Uji Praktik di Workshop Klien', desc: 'Simulasi rigging, perakitan scaffolding, dan penyelamatan ruang terbatas.' },
      { step: '4. Penerbitan Sertifikat Berlisensi', desc: 'Sertifikat resmi Kemnaker/BNSP untuk pemenuhan tender dan audit CSMS.' }
    ],
    links: [
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' },
      { href: '/kategori-pelatihan/ahli-k3-umum-kemnaker/', anchor: 'Pelatihan Ahli K3 Umum Kemnaker' },
      { href: '/kategori-pelatihan/rigger/', anchor: 'Sertifikasi Rigger & Lifting Operations' }
    ]
  },

  // 6. Samarinda
  {
    key: 'in-house-training-k3-samarinda',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-samarinda/',
    archetype: 'regional',
    title: 'In-House Training K3 Samarinda: Tambang Batubara, Galangan Tugboat, & Pelabuhan Mahakam',
    h1: 'In-House Training K3 Samarinda: Pelatihan Keselamatan Kerja Tambang Batubara, Galangan Kapal Tongkang, & Logistik Sungai Mahakam',
    meta: 'In-house training K3 Samarinda: keselamatan tambang batubara, operasional galangan kapal tongkang Mahakam, lifting conveyor & sertifikasi POP.',
    imgAlt: 'Pelaksanaan training keselamatan kerja in-house di area tambang batubara dan jetty Sungai Mahakam Samarinda',
    related: ['in-house-training', 'pertambangan-batubara', 'galangan-kapal-shipyard', 'k3-keselamatan-kerja'],
    intro: 'Samarinda sebagai ibu kota Kalimantan Timur adalah pusat urat nadi logistik batubara Sungai Mahakam dan industri galangan kapal tongkang (tug & barge). Operasional continuous conveyor transfer batubara, perbaikan lambung tongkang di slipway galangan, serta operasional alat berat tambang di koridor Kutai Kartanegara menuntut integrasi keselamatan maritim dan pertambangan yang solid.',
    hazards: [
      '<strong>Kebakaran Spontan Timbunan Batubara (Self-Combustion):</strong> Oksidasi alami pada stockpile pelabuhan yang menghasilkan gas beracun CO.',
      '<strong>Kecelakaan Masuk Ruang Tertutup Lambung Tongkang:</strong> Bekerja di ruang kedap air tanpa ventilasi dengan kadar oksigen di bawah 19.5%.',
      '<strong>Terseret Mesin Crusher & Conveyor Belt:</strong> Ketiadaan interlock guard saat pembersihan tumpahan batubara pada putaran roller.',
      '<strong>Tabrakan Armada Tongkang di Jembatan Mahakam:</strong> Kehilangan daya mesin tugboat saat arus deras sungai berisiko fatal.'
    ],
    regulations: [
      '<strong>Kepmen ESDM No. 1827 K/30/MEM/2018</strong> tentang Keselamatan Operasi Pertambangan.',
      '<strong>Permenaker No. 38 Tahun 2016</strong> tentang K3 Pesawat Tenaga dan Produksi.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Kepdirjen Binwasnaker No. 113/2006</strong> tentang K3 Ruang Terbatas.'
    ],
    modules: [
      {
        name: 'Modul 1: K3 Operasional Stockpile, Crusher, & Conveyor Batubara',
        theory: 'Pengendalian debu batubara, mitigasi self-combustion, sistem proteksi emergency pull-wire switch.',
        practical: 'Inspeksi guarding conveyor dan simulasi isolasi LOTO pada motor crusher 500 kW.'
      },
      {
        name: 'Modul 2: Keselamatan Galangan Kapal Tongkang & Pekerjaan Panas',
        theory: 'Prosedur gas clearing tangki tongkang, pencegahan ledakan cat semprot, inspeksi kabel las dan ground clamp.',
        practical: 'Pengukuran gas LEL pada ponton tongkang dan penempatan ventilasi blower anti-ledak.'
      },
      {
        name: 'Modul 3: Manajemen Bahaya Maritim Sungai & P3K Gawat Darurat Air',
        theory: 'Aturan navigasi alur Mahakam, penggunaan pelampung kerja, protokol evakuasi korban tenggelam.',
        practical: 'Simulasi CPR dan penanganan hipotermia pada kru kapal di dermaga loading batubara.'
      }
    ],
    equipment: [
      'Explosion-Proof Ventilation Blower dengan Ducting Flexible 20 Meter.',
      'Optical Thermal Camera Fluke untuk Deteksi Titik Panas (Hotspot) Batubara.',
      'Man-Overboard Ring Buoy dengan Tali Lempar Terapung 30 Meter.',
      'Personal 4-Gas Detector (O2, LEL, CO, H2S) Terkalibrasi Aktif.'
    ],
    participants: [
      'Kepala Jetty Batam / Mahakam, Safety Officer Galangan Kapal, Operator Conveyor, Pengawas Tambang (POP), Kapten Tugboat.'
    ],
    tableData: {
      headers: ['Fasilitas Industri Samarinda', 'Titik Bahaya Kritis', 'Program Pelatihan In-House', 'Sertifikasi Relevan'],
      rows: [
        ['Jetty Loading Batubara', 'Conveyor Pinch Point, Coal Dust Explosion', 'K3 Conveyor & Fire Protection Stockpile', 'Ahli K3 Kebakaran & POP'],
        ['Galangan Tongkang Palaran', 'Confined Space Void Space, Falling from Slipway', 'K3 Ruang Terbatas & Safe Hot Work', 'Lisensi Ruang Terbatas Kemnaker'],
        ['Pit Tambang Batubara', 'Longsor Highwall, Fatigue Supir Dump Truck', 'K3 Tambang Terbuka & Fatigue Management', 'POP Pertambangan BNSP/ESDM'],
        ['Workshop Alat Berat', 'Hydraulic High Pressure Injection, Crushing', 'LOTO Hidrolik & Rigging Komponen Berat', 'SIO Mekanik & Rigger Kemnaker']
      ]
    },
    caseStudy: 'Sebuah pelabuhan muat batubara di Palaran Samarinda mencatatkan rekor 3 tahun tanpa kecelakaan kerja berat (Zero Lost Workdays) pasca penerapan SOP LOTO conveyor dan sertifikasi in-house berkala untuk seluruh operator crushing plant.',
    zoneHighlights: [
      { zone: 'Palaran Port Corridor', hazard: 'Pekerja terperangkap putaran conveyor saat perbaikan darurat', control: 'Instalasi lockable lockout box & tali emergency stop sepanjang line' },
      { zone: 'Sungai Mahakam Slipway', hazard: 'Asfiksia saat pengelasan pelat dasar ganda tongkang batubara', control: 'Pengujian gas berkelanjutan & penugasan standby person terlatih' },
      { zone: 'Stockpile Batubara Samarinda Seberang', hazard: 'Kebakaran spontan batu bara kalori rendah di area terbuka', control: 'Penyiraman water mist teratur & pemadatan timbunan berkala' }
    ],
    stepByStepGuide: [
      { step: '1. Site Walkthrough Lapangan', desc: 'Instruktur menginspeksi langsung kondisi conveyor, workshop, dan slipway kapal.' },
      { step: '2. Penyusunan JSA Spesifik', desc: 'Pembuatan Job Safety Analysis untuk tugas-tugas berisiko tinggi klien.' },
      { step: '3. Simulasi Penyelamatan Nyata', desc: 'Latihan skenario evakuasi korban dari dalam lambung tongkang di sungai.' },
      { step: '4. Evaluasi Mandor & Supervisor', desc: 'Uji kompetensi kepengawasan keselamatan untuk memastikan kepatuhan tim.' }
    ],
    links: [
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' },
      { href: '/industri/pertambangan-migas/', anchor: 'Keselamatan Pertambangan Batubara' },
      { href: '/kategori-pelatihan/petugas-ruang-terbatas-confined-space/', anchor: 'Pelatihan Petugas Ruang Terbatas' }
    ]
  },

  // 7. Medan
  {
    key: 'in-house-training-k3-medan',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-medan/',
    archetype: 'regional',
    title: 'In-House Training K3 Medan: Kawasan Industri KIM, Pabrik Sawit PKS, & Oleokimia',
    h1: 'In-House Training K3 Medan: Pelatihan Keselamatan Kerja Kawasan Industri KIM I-IV, Pabrik Sawit, & Industri Mamin',
    meta: 'In-house training K3 Medan: keselamatan pabrik kelapa sawit PKS, kawasan industri KIM Mabar, boiler uap, kimia oleokimia & audit Disnaker Sumut.',
    imgAlt: 'Pelatihan in-house training K3 pabrik kelapa sawit dan kawasan industri KIM Medan Sumatera Utara',
    related: ['in-house-training', 'perkebunan-kelapa-sawit', 'pabrik-gula-dan-agroindustri', 'k3-keselamatan-kerja'],
    intro: 'Kawasan Industri Medan (KIM I, II, III, IV) di Mabar dan Belawan merupakan pusat manufaktur terbesar di Pulau Sumatera yang menampung pabrik pengolahan kelapa sawit (PKS), oleokimia, consumer goods, dan pengolahan baja. Risiko keselamatan bertekanan tinggi pada boiler uap PKS, bahaya pelarut kimia hexane pada ekstraksi minyak, serta pergerakan armada truk tangki CPO memerlukan pembinaan K3 on-site yang komprehensif.',
    hazards: [
      '<strong>Ledakan Sterilizer & Boiler Uap PKS:</strong> Kegagalan katup pengaman (safety valve) dan pintu bejana uap perebusan tandan buah sawit.',
      '<strong>Kebakaran Pelarut Hexane Pabrik Ekstraksi:</strong> Uap heksana volatil yang kontak dengan peralatan listrik non-intrinsically safe.',
      '<strong>Tenggelam & Asfiksia Tangki CPO:</strong> Karyawan pingsan akibat uap asam lemak bebas dan kekurangan oksigen saat tank cleaning CPO.',
      '<strong>Terjepit Screw Press & Thresher Pabrik:</strong> Kontak fisik dengan komponen mesin penggilingan sawit berputar saat perbaikan.'
    ],
    regulations: [
      '<strong>Permenaker No. 1 Tahun 1988</strong> tentang Kualifikasi dan Syarat-Syarat Operator Pesawat Uap.',
      '<strong>Permenaker No. 37 Tahun 2016</strong> tentang K3 Bejana Tekan dan Tangki Timbun.',
      '<strong>Kepmenaker No. 187/MEN/1999</strong> tentang Pengendalian Bahan Kimia Berbahaya.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Keselamatan Operasional Boiler Uap & Bejana Tekan PKS',
        theory: 'Prinsip kerja boiler pipa air/api, pengujian mutu air umpan boiler, kalibrasi pressure gauge dan safety valve.',
        practical: 'Uji blowdown boiler aman dan inspeksi interlock pintu sterilizer perebusan sawit.'
      },
      {
        name: 'Modul 2: K3 Penanganan Bahan Kimia Oleokimia & Pelarut Volatil',
        theory: 'Karakteristik bahaya pelarut heksana, asam lemak, metanol, zonasi ATEX peralatan listrik anti-percik.',
        practical: 'Penyusunan peta zonasi bahaya ledakan gas dan audit APD kimia di pabrik fraksinasi.'
      },
      {
        name: 'Modul 3: Prosedur Pembersihan Tangki Timbun CPO (Tank Cleaning)',
        theory: 'Prosedur izin kerja ruang terbatas, pengukuran konsentrasi uap organik VOC, rescue plan vertikal.',
        practical: 'Simulasi evakuasi korban dari manhole atas tangki CPO 5.000 ton menggunakan tripod winch.'
      }
    ],
    equipment: [
      'Tripod Confined Space System dengan Winch Penyelamat 25 Meter.',
      'Infrared Thermometer & Thermal Imaging Camera untuk Cek Pipa Steam Panas.',
      'Multi-Gas Detector Portabel Sensor VOC (Photoionization Detector PID).',
      'Set Lockout/Tagout Mesin Pabrik Sawit (Valve Lockout & Cable Lockout).'
    ],
    participants: [
      'Mill Manager PKS, Operator Boiler Kelas 1, Safety Officer KIM, Maintenance Foreman, dan Paramedis Pabrik.'
    ],
    tableData: {
      headers: ['Sektor Industri Medan', 'Area Rawan Bahaya', 'Program In-House Prioritas', 'Target Sertifikasi'],
      rows: [
        ['Pabrik Kelapa Sawit (PKS)', 'Stasiun Boiler & Sterilizer', 'K3 Pesawat Uap & Bejana Tekanan', 'SIO Operator Boiler Kemnaker'],
        ['Pabrik Oleokimia & Refinery', 'Unit Fraksinasi & Ekstraksi Hexane', 'Process Safety B3 & Zonasi Anti-Ledak', 'Ahli K3 Kimia Kemnaker'],
        ['Kawasan Industri KIM Mabar', 'Gudang Logistik & Lini Assembling', 'K3 Ergonomi, Forklift, & Proteksi Api', 'SIO Forklift & Damkar Kelas D'],
        ['Depo Logistik Pelabuhan Belawan', 'Bongkar Muat Tangki Isotank', 'CSMS Transportasi & Safe Lifting', 'CSMS Vendor & Rigger Kemnaker']
      ]
    },
    caseStudy: 'Sebuah pabrik refinery minyak sawit di Kawasan Industri KIM II Medan berhasil menaikkan skor audit SMK3 menjadi 92% (Bendera Emas) setelah melaksanakan in-house training K3 terpadu bagi seluruh supervisor lini produksi.',
    zoneHighlights: [
      { zone: 'Kawasan Industri KIM Mabar', hazard: 'Lalu lintas padat forklift dan truk trailer di area pergudangan sempit', control: 'Pemisahan jalur pejalan kaki & pemasangan cermin cembung 360 derajat' },
      { zone: 'Pabrik Oleokimia Belawan', hazard: 'Kebocoran uap asam lemak panas dan pelarut metanol', control: 'Pemasangan emergency shower eyewash & training penanganan tumpahan' },
      { zone: 'Stasiun Rebusan PKS', hazard: 'Pintu sterilizer terbuka mendadak saat tekanan uap masih tinggi', control: 'Pemberlakuan mechanical interlock & checklist verifikasi 0 bar' }
    ],
    stepByStepGuide: [
      { step: '1. Diagnosa Mesin & Boiler Klien', desc: 'Pengecekan riksa uji berkala bejana tekan dan sertifikat operator yang ada.' },
      { step: '2. Modul Berbasis Studi Lapangan', desc: 'Penyampaian materi menggunakan foto dan kondisi nyata pabrik klien di Medan.' },
      { step: '3. Simulasi di Lini Produksi', desc: 'Praktik LOTO pada mesin press dan simulasi tanggap darurat ruang terbatas.' },
      { step: '4. Pendampingan Audit Disnaker', desc: 'Penyusunan berkas P2K3 untuk pelaporan rutin ke Pengawas Ketenagakerjaan.' }
    ],
    links: [
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' },
      { href: '/industri/manufaktur/', anchor: 'K3 Industri Manufaktur dan Agro' },
      { href: '/kategori-pelatihan/operator-boiler/', anchor: 'Pelatihan Operator Boiler Kelas I & II' }
    ]
  },

  // 8. Makassar
  {
    key: 'in-house-training-k3-makassar',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-makassar/',
    archetype: 'regional',
    title: 'In-House Training K3 Makassar: Kawasan Industri KIMA, Mamin, & Hub Logistik KTI',
    h1: 'In-House Training K3 Makassar: Pelatihan Keselamatan Kerja Kawasan Industri KIMA, Makanan Minuman, & Pelabuhan Makassar New Port',
    meta: 'In-house training K3 Makassar: keselamatan industri KIMA, pergudangan modern, pabrik semen, cold storage amonia & sertifikasi Kemnaker Sulsel.',
    imgAlt: 'Pelaksanaan in-house training K3 industri manufaktur dan pergudangan logistik di kawasan industri KIMA Makassar',
    related: ['in-house-training', 'makanan-dan-minuman-fnb', 'logistik-dan-supply-chain', 'k3-keselamatan-kerja'],
    intro: 'Makassar merupakan gerbang ekonomi dan hub logistik utama Kawasan Timur Indonesia (KTI). Fasilitas di Kawasan Industri Makassar (KIMA), Pelabuhan Makassar New Port, serta pabrik semen dan consumer goods di koridor Maros-Pangkep memiliki intensitas pergudangan logistik tinggi, instalasi pendingin amonia cold storage, dan sistem kelistrikan industri besar yang memerlukan pengawalan K3 ketat.',
    hazards: [
      '<strong>Kebocoran Amonia Sistem Cold Storage:</strong> Bahaya toksik dan ledakan gas refrigeran amonia (NH3) pada fasilitas pembekuan ikan/daging.',
      '<strong>Kecelakaan Tabrakan Forklift di Gudang Logistik:</strong> Visibilitas terbatas pada lorong rak bertingkat tinggi (high-bay racking).',
      '<strong>Debu Silika & Ledakan Kiln Pabrik Semen:</strong> Paparan debu klinker dan gas buang panas saat proses kalsinasi semen.',
      '<strong>Bahaya Arc Flash Distribusi Listrik Pelabuhan:</strong> Pemeliharaan gardu trafo daya tinggi pada fasilitas container crane pelabuhan.'
    ],
    regulations: [
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang Keselamatan Pesawat Angkat dan Pesawat Angkut.',
      '<strong>Kepmenaker No. 187/MEN/1999</strong> tentang Pengendalian Bahan Kimia Berbahaya.',
      '<strong>Permenaker No. 12 Tahun 2015</strong> tentang K3 Listrik di Tempat Kerja.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Manajemen Keselamatan Sistem Pendingin Amonia (Cold Storage K3)',
        theory: 'Fisiologi paparan gas NH3, deteksi kebocoran amonia, sistem ventilasi darurat, permit perbaikan pipa amonia.',
        practical: 'Simulasi evakuasi kebocoran amonia menggunakan SCBA dan penutupan darurat katup kompresor.'
      },
      {
        name: 'Modul 2: K3 Pergudangan Modern & Lisensi Operator Forklift / Reach Truck',
        theory: 'Kalkulasi stabilitas beban segitiga forklift, tata ruang lorong gudang, SOP stacking & destacking palet.',
        practical: 'Uji manuver zig-zag forklift di lorong sempit dan inspeksi harian pra-operasi (P2H).'
      },
      {
        name: 'Modul 3: Higiene Industri & Pengendalian Debu Partikulat Mamin/Semen',
        theory: 'Standar NAB Permenaker 5/2018 untuk debu tepung dan semen, sistem pembuangan bag filter, pencegahan ledakan debu.',
        practical: 'Pengukuran konsentrasi debu ruangan menggunakan particulate dust monitor digital.'
      }
    ],
    equipment: [
      'SCBA Positive Pressure dengan Full Face Mask Panorama untuk Gas Amonia.',
      'Single Gas Ammonia (NH3) Detector Portabel (Range 0 - 100 ppm).',
      'Forklift Safety Laser Light & Blue Spot Warning Projector.',
      'Digital Particulate Dust Monitor PM2.5 / PM10 Terkalibrasi.'
    ],
    participants: [
      'Warehouse Manager, Safety Officer KIMA, Operator Cold Storage, Teknisi Maintenance Listrik, dan Supervisor Logistik.'
    ],
    tableData: {
      headers: ['Zona Industri Makassar', 'Sektor Unggulan', 'Potensi Bahaya Utama', 'Program Pelatihan Rekomendasi'],
      rows: [
        ['Kawasan Industri KIMA', 'Makanan Minuman & Cold Storage', 'Amonia Gas Leak, Forklift Collision', 'K3 Kimia Amonia & SIO Forklift Kemnaker'],
        ['Makassar New Port (MNP)', 'Terminal Peti Kemas Maritim', 'Container Stacking Overload, Crane Rigging', 'SIO Reach Stacker & K3 Kepelabuhanan'],
        ['Koridor Maros - Pangkep', 'Pabrik Semen & Bahan Bangunan', 'High Temperature Kiln, Raw Mill Noise', 'K3 Pesawat Tenaga & Higiene Industri'],
        ['Kawasan Pergudangan Daya', 'Distribusi Logistik FMCG', 'Manual Handling Injury, Racking Collapse', 'K3 Ergonomi & Inspeksi Racking Gudang']
      ]
    },
    caseStudy: 'Sebuah perusahaan pengolahan hasil laut terkemuka di KIMA Makassar berhasil mencegah potensi insiden pelepasan amonia fatal melalui pelatihan tanggap darurat in-house dan pembentukan tim emergency response internal yang terlatih SCBA.',
    zoneHighlights: [
      { zone: 'Kawasan KIMA Daya', hazard: 'Kebocoran kompresor amonia di ruang mesin cold storage', control: 'Pemasangan sensor NH3 otomatis terhubung ke exhaust fan anti-ledak' },
      { zone: 'Makassar New Port Logistics', hazard: 'Pekerja tertabrak reach stacker saat proses relokasi kontainer', control: 'Wajib rompi hi-vis reflektif & pemberlakuan sistem radio komunikasi' },
      { zone: 'Pabrik Semen Pangkep', hazard: 'Paparan debu klinker panas di area precalciner menara', control: 'Penggunaan respirator N95/FFP3 khusus & sistem enclosure conveyor' }
    ],
    stepByStepGuide: [
      { step: '1. Survey Fasilitas On-Site', desc: 'Peninjauan cold storage, layout racking gudang, atau area packing semen klien.' },
      { step: '2. Penyesuaian Skenario Darurat', desc: 'Penyusunan modul simulasi kebocoran kimia atau kebakaran pergudangan.' },
      { step: '3. Workshop Praktik Lapangan', desc: 'Pelaksanaan drill evakuasi dan pengujian kecakapan operator alat angkut.' },
      { step: '4. Laporan Kepatuhan Regulasi', desc: 'Penyusunan berkas sertifikasi dan pemenuhan audit Disnaker Provinsi Sulsel.' }
    ],
    links: [
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' },
      { href: '/industri/logistik-pergudangan/', anchor: 'K3 Sektor Logistik dan Distribusi' },
      { href: '/kategori-pelatihan/operator-reach-truck/', anchor: 'Pelatihan Operator Reach Truck Gudang' }
    ]
  },

  // 9. Kendal - Semarang
  {
    key: 'in-house-training-k3-kendal-semarang',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-kendal-semarang/',
    archetype: 'regional',
    title: 'In-House Training K3 Kendal & Semarang: KIK, Wijayakusuma, Garment, & Manufaktur Ekspor',
    h1: 'In-House Training K3 Kendal & Semarang: Pelatihan Keselamatan Kerja Kawasan Industri Kendal (KIK), KIW Semarang, & Industri Padat Karya',
    meta: 'In-house training K3 Kendal Semarang: keselamatan pabrik garment tekstil, KIK Kendal, KIW Wijayakusuma, proteksi kebakaran pabrik & ergonomi.',
    imgAlt: 'Pelatihan keselamatan kerja in-house di Kawasan Industri Kendal KIK dan Semarang Jawa Tengah',
    related: ['in-house-training', 'tekstil-dan-garmen', 'manufaktur-otomotif', 'k3-keselamatan-kerja'],
    intro: 'Kawasan Industri Kendal (KIK - Park by the Bay) dan Kawasan Industri Wijayakusuma (KIW) Semarang merupakan magnet investasi manufaktur terbesar di Jawa Tengah. Dominasi industri garmen, tekstil, perakitan elektronik, alas kaki, dan otomotif melibatkan ribuan tenaga kerja perempuan dan shift kerja padat, sehingga fokus utama K3 adalah pencegahan kebakaran massal, keselamatan instalasi boiler uap tekstil, dan ergonomi gerakan repetitif.',
    hazards: [
      '<strong>Kebakaran Cepat Pabrik Tekstil & Garmen:</strong> Penumpukan serat kain kapas yang mudah menyala saat terkena percikan listrik.',
      '<strong>Gangguan Otot Rangka (CTD/MSDs) Jahit Repetitif:</strong> Posisi duduk membungkuk berjam-jam pada ribuan stasiun mesin jahit.',
      '<strong>Ledakan Boiler Uap Dyeing & Finishing:</strong> Operasional boiler uap batubara/gas tanpa pemeliharaan berkala water level indicator.',
      '<strong>Paparan Uap Kimia Pewarnaan Tekstil:</strong> Inhalasi zat warna azo dan pelarut kimia tanpa sistem ventilasi exhaust memadai.'
    ],
    regulations: [
      '<strong>Kepmenaker No. 186/MEN/1999</strong> tentang Unit Penanggulangan Kebakaran di Tempat Kerja.',
      '<strong>Permenaker No. 5 Tahun 2018</strong> tentang K3 Lingkungan Kerja (Ergonomi dan Kimia).',
      '<strong>Permenaker No. 1 Tahun 1988</strong> tentang Operator Pesawat Uap.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Pencegahan & Penanggulangan Kebakaran Industri Padat Karya',
        theory: 'Manajemen rute evakuasi darurat massal, sistem fire sprinkler, tata kelola bahan mudah terbakar (fabric storage).',
        practical: 'Simulasi drill evakuasi kebakaran 1.000 karyawan dan pemadaman api awal dengan APAR & hydrant.'
      },
      {
        name: 'Modul 2: Ergonomi Industri Tekstil & Penilaian Postur Kerja (RULA/REBA)',
        theory: 'Prinsip biomekanika kerja, desain kursi ergonomis operator jahit, program peregangan otot berkala (ergonomic break).',
        practical: 'Audit postur kerja stasiun cutting, sewing, dan packing menggunakan lembar kerja REBA/RULA.'
      },
      {
        name: 'Modul 3: K3 Pengolahan Limbah Cair (IPAL) & Ruang Tertutup Tekstil',
        theory: 'Bahaya gas H2S pada bak aerasi IPAL, prosedur masuk sumur sedimentasi limbah pewarnaan, APD kimia.',
        practical: 'Simulasi izin kerja masuk bak IPAL dengan blower ventilasi dan tripod rescue kit.'
      }
    ],
    equipment: [
      'Tripod Confined Space System Khusus Bak IPAL Kimia Limbah.',
      'APAR Dry Chemical Powder 6 kg & CO2 5 kg untuk Simulasi Fire Drill.',
      'Ergonomic Posture Assessment Grid Board & Goniometer Digital.',
      'Sound Level Meter & Lux Meter Terkalibrasi Standar SNI.'
    ],
    participants: [
      'HR & HSE Manager KIK/KIW, Dokter Perusahaan, Koordinator Regu Pemadam Pabrik, Supervisor Sewing, dan Anggota P2K3.'
    ],
    tableData: {
      headers: ['Kawasan Industri', 'Sektor Dominan', 'Fokus Utama Pelatihan K3', 'Sertifikasi Target'],
      rows: [
        ['Kawasan Industri Kendal (KIK)', 'Elektronik, Fashion, & Otomotif', 'Chemical Safety, Ergonomi, & Fire Safety', 'Ahli K3 Umum & Petugas P3K'],
        ['Kawasan Wijayakusuma (KIW)', 'Garmen, Tekstil, & Ekstraksi Mamin', 'Evakuasi Kebakaran Massal, K3 Boiler Uap', 'Damkar Kelas C/D & Operator Boiler'],
        ['Kawasan Industri Candi Semarang', 'Pabrik Plastik, Kimia, & Percetakan', 'LOTO Mesin Injection, K3 Bahan Kimia B3', 'Ahli K3 Kimia & Teknisi Listrik'],
        ['Pelabuhan Tanjung Emas', 'Logistik Ekspor Impor Kontainer', 'K3 Pergudangan, SIO Forklift Counterbalance', 'SIO Operator Forklift Kemnaker']
      ]
    },
    caseStudy: 'Sebuah pabrik garmen ekspor di KIK Kendal berhasil menurunkan angka keluhan sakit pinggang dan leher karyawan hingga 60% pasca implementasi program in-house ergonomi dan pelatihan peregangan kerja terpadu.',
    zoneHighlights: [
      { zone: 'KIK Kendal Main Corridor', hazard: 'Panik evakuasi saat alarm kebakaran berbunyi di pabrik berlantai 2', control: 'Penyediaan emergency exit lebar & training warden evakuasi per shift' },
      { zone: 'KIW Semarang Textile Wet Processing', hazard: 'Gas H2S beracun di bak lumpur aktif IPAL pengolahan kain', control: 'Pemasangan rambu bahaya confined space & SOP permit wajib' },
      { zone: 'Kawasan Industri Candi Mesin Plastik', hazard: 'Tangan operator terjepit mould mesin injection molding otomatis', control: 'Pemasangan safety light curtain sensor & audit interlock door' }
    ],
    stepByStepGuide: [
      { step: '1. Walkthrough Lini Jahit & Gudang', desc: 'Pemetaan jalur evakuasi, penempatan APAR, dan stasiun kerja operator.' },
      { step: '2. Pelatihan Berbahasa Praktis', desc: 'Penyampaian materi mudah dicerna oleh mandor dan operator produksi.' },
      { step: '3. Simulasi Fire Drill Skala Besar', desc: 'Latihan pengosongan gedung bertingkat pabrik secara aman dan terukur.' },
      { step: '4. Laporan Kepatuhan Audit Buyer', desc: 'Dokumentasi training untuk memenuhi syarat audit buyer internasional (SMETA/WRAP).' }
    ],
    links: [
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' },
      { href: '/kategori-pelatihan/petugas-pemadam-kebakaran-kelas-d/', anchor: 'Pelatihan Regu Pemadam Kebakaran' },
      { href: '/industri/manufaktur/', anchor: 'Panduan K3 Industri Manufaktur' }
    ]
  },

  // 10. Solo - Surakarta
  {
    key: 'in-house-training-k3-solo-surakarta',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-solo-surakarta/',
    archetype: 'regional',
    title: 'In-House Training K3 Solo Raya: Sukoharjo, Karanganyar, Tekstil, & Manufaktur',
    h1: 'In-House Training K3 Solo Raya: Pelatihan Keselamatan Kerja Industri Tekstil Sukoharjo, Manufaktur Karanganyar, & Percetakan',
    meta: 'In-house training K3 Solo Surakarta: keselamatan pabrik tekstil Sukoharjo, manufaktur Karanganyar, boiler uap, bahan kimia pewarna & audit P2K3.',
    imgAlt: 'Pelatihan in-house training K3 industri tekstil dan manufaktur di Solo Raya Sukoharjo dan Karanganyar',
    related: ['in-house-training', 'tekstil-dan-garmen', 'pabrik-gula-dan-agroindustri', 'k3-keselamatan-kerja'],
    intro: 'Wilayah Solo Raya (Surakarta, Sukoharjo, Karanganyar, Boyolali, Klaten) adalah salah satu konsentrasi industri tekstil terintegrasi terbesar di Indonesia, mencakup pemintalan benang (spinning), penenunan (weaving), pencelupan (dyeing), hingga garmen siap pakai. Tingginya risiko kebakaran akibat debu kapas, penggunaan bahan kimia zat warna, serta operasional mesin berputar berkecepatan tinggi menuntut pengawasan K3 on-site yang terstruktur.',
    hazards: [
      '<strong>Kebakaran Debu Kapas Spinning & Weaving:</strong> Partikel debu serat kapas melayang yang mudah meledak atau terbakar hebat (flash fire).',
      '<strong>Terjepit Mesin Spinning & Carding Berputar:</strong> Anggota tubuh tersangkut roller mesin pemintal saat pembersihan serabut kain.',
      '<strong>Bahaya Uap Kimia Asam/Basa Kuat Dyeing:</strong> Percikan soda api (NaOH) dan asam asetat pada mata saat pencampuran larutan celup.',
      '<strong>Penyakit Saluran Pernapasan (Bisinosis):</strong> Paparan jangka panjang debu kapas mentah pada paru-paru operator spinning.'
    ],
    regulations: [
      '<strong>Permenaker No. 5 Tahun 2018</strong> tentang K3 Lingkungan Kerja (Pengendalian Debu & Kimia).',
      '<strong>Permenaker No. 38 Tahun 2016</strong> tentang K3 Pesawat Tenaga dan Produksi.',
      '<strong>Permenaker No. 1 Tahun 1988</strong> tentang Kualifikasi Operator Pesawat Uap.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Proteksi Kebakaran & Ledakan Debu Tekstil (Dust Explosion)',
        theory: 'Segitiga ledakan debu, pembersihan debu kapas metode vacuum (bukan tiup kompresor), sistem sprinkler otomatis.',
        practical: 'Audit housekeeping area spinning dan praktik pemadaman titik api kain menggunakan selang hydrant.'
      },
      {
        name: 'Modul 2: Keselamatan Mesin Tekstil & Prosedur Machine Guarding / LOTO',
        theory: 'Prinsip interlock guard mesin weaving, pencegahan nip point terjepit, prosedur isolasi kelistrikan mesin.',
        practical: 'Simulasi LOTO pada panel distribusi mesin carding sebelum aktivitas pergantian suku cadang.'
      },
      {
        name: 'Modul 3: Higiene Industri & Kesehatan Kerja Paru (Pencegahan Bisinosis)',
        theory: 'Fisiologi bisinosis, pengukuran debu respirabel, tata kelola penggunaan masker respirator FFP2, rotasi kerja.',
        practical: 'Fit test respirator debu dan simulasi pertolongan pertama (P3K) pada kasus paparan zat kimia di mata.'
      }
    ],
    equipment: [
      'Personal Dust Sampler Terkalibrasi untuk Pengukuran Debu Kapas.',
      'Emergency Eyewash Portable & Shower Station untuk Bahan Kimia Tekstil.',
      'Kit Lockout/Tagout Industri Tekstil (Breaker Lock & Lockout Hasps).',
      'Hydrant Nozzle Spray & Hose Reel 1.5 Inch untuk Latihan Basah Hydrant.'
    ],
    participants: [
      'Kepala Bagian Spinning/Weaving, Safety Officer Solo Raya, Dokter Hiperkes Pabrik, Maintenance Head, dan Teknisi IPAL.'
    ],
    tableData: {
      headers: ['Klaster Industri Solo Raya', 'Fokus Operasional', 'Bahaya Utama', 'Program Pelatihan Unggulan'],
      rows: [
        ['Sukoharjo Tekstil Terpadu', 'Spinning, Weaving, & Rayon', 'Kebakaran Debu Kapas, Gas CS2/H2S', 'K3 Debu & Kimia, Damkar Kelas D'],
        ['Karanganyar Koridor Palur-Jaten', 'Pewarnaan Tekstil, Kimia, & Mamin', 'Boiler Uap Meledak, Terjepit Roller', 'K3 Pesawat Uap & Machine Guarding'],
        ['Boyolali Garment & Peternakan', 'Garmen Ekspor & Industri Susu', 'Ergonomi Jahit, Kebocoran Amonia', 'Ergonomi REBA & P3K Tempat Kerja'],
        ['Klaten Manufaktur & Pengecoran', 'Pengecoran Logam Batur & Pipa', 'Percikan Logam Panas, Debu Silika', 'K3 Peleburan Logam & Ahli K3 Umum']
      ]
    },
    caseStudy: 'Sebuah pabrik pemintalan benang di Sukoharjo meniadakan insiden kebakaran kecil di ruang carding hingga 100% setelah mengganti metode pembersihan bertekanan dengan sistem vacuum tersertifikasi dan melatih regu tanggap darurat internal.',
    zoneHighlights: [
      { zone: 'Sukoharjo Rayon & Textile Area', hazard: 'Gas beracun pada proses pembentukan serat sintetis rayon', control: 'Pemasangan gas detector CS2/H2S & penyediaan respirator kimia' },
      { zone: 'Karanganyar Dyeing Plant', hazard: 'Tumpahan asam klorida pekat saat pembuatan larutan warna', control: 'Penyediaan tanggul sekunder (bund wall) & APD apron karet kimia' },
      { zone: 'Boyolali Sewing Assembly', hazard: 'Jari operator tertusuk jarum mesin jahit kecepatan tinggi', control: 'Pemasangan needle guard transparan pada setiap mesin jahit' }
    ],
    stepByStepGuide: [
      { step: '1. Asesmen Bahaya Pabrik Klien', desc: 'Pengecekan debu ruangan, instalasi boiler uap, dan kesiapan hydrant.' },
      { step: '2. Kelas Teori Interaktif On-Site', desc: 'Pemberian materi regulasi Kemnaker dan standar internasional tekstil.' },
      { step: '3. Simulasi Basah di Lapangan', desc: 'Latihan penggelaran selang hydrant dan simulasi pertolongan pertama kimia.' },
      { step: '4. Uji Pemahaman & Sertifikat', desc: 'Evaluasi kelulusan peserta dan penyerahan berkas sertifikasi resmi.' }
    ],
    links: [
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' },
      { href: '/industri/manufaktur/', anchor: 'Keselamatan Kerja Industri Manufaktur' },
      { href: '/kategori-pelatihan/p3k-pertolongan-pertama/', anchor: 'Pelatihan Petugas P3K Tempat Kerja' }
    ]
  },

  // 11. Pasuruan
  {
    key: 'in-house-training-k3-pasuruan',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-pasuruan/',
    archetype: 'regional',
    title: 'In-House Training K3 Pasuruan: Kawasan Industri PIER, Food & Beverage, & Kimia',
    h1: 'In-House Training K3 Pasuruan: Pelatihan Keselamatan Kerja Pasuruan Industrial Estate Rembang (PIER), Mamin Multinasional, & Farmasi',
    meta: 'In-house training K3 Pasuruan PIER: keselamatan pabrik makanan minuman F&B, boiler uap, amonia pendingin, chemical hazard & sertifikasi Kemnaker.',
    imgAlt: 'Pelatihan keselamatan kerja in-house di Kawasan Industri PIER Pasuruan Jawa Timur',
    related: ['in-house-training', 'makanan-dan-minuman-fnb', 'farmasi-dan-kosmetik', 'k3-keselamatan-kerja'],
    intro: 'Pasuruan Industrial Estate Rembang (PIER) dan koridor Beji-Pandaan-Purwosari di Jawa Timur merupakan pusat investasi raksasa untuk industri Makanan dan Minuman (Food & Beverage), farmasi, kemasan plastik, dan kimia khusus. Beroperasinya pabrik-pabrik bertaraf internasional menuntut penerapan standar K3 yang terintegrasi dengan standar higienitas pangan (HACCP/FSSC 22000), pengendalian kebocoran amonia sistem refrigerasi pendingin, serta operasional boiler uap kapasitas besar.',
    hazards: [
      '<strong>Kebocoran Gas Amonia (NH3) di Ruang Kompresor Pendingin:</strong> Bahaya toksik dan kebakaran pada instalasi chiller minuman berskala besar.',
      '<strong>Ledakan Bejana Tekanan & Jalur Uap Panas (Steam Pipe):</strong> Kegagalan sambungan pipa uap suhu 180°C pada proses sterilisasi makanan.',
      '<strong>Bahaya Masuk Ruang Tertutup Tangki Fermentasi / Silo:</strong> Ruang minim oksigen dan gas CO2 hasil fermentasi yang memicu kehilangan kesadaran seketika.',
      '<strong>Kecelakaan Penanganan Otomasi & Robot Packaging:</strong> Tersangkut mesin palletizer dan conveyor botol berkecepatan tinggi.'
    ],
    regulations: [
      '<strong>Permenaker No. 37 Tahun 2016</strong> tentang K3 Bejana Tekan dan Tangki Timbun.',
      '<strong>Kepmenaker No. 187/MEN/1999</strong> tentang Pengendalian Bahan Kimia Berbahaya.',
      '<strong>Permenaker No. 38 Tahun 2016</strong> tentang K3 Pesawat Tenaga dan Produksi.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Manajemen Bahaya Gas Amonia & Tanggap Darurat Refrigerasi',
        theory: 'Karakteristik fisik amonia, ambang batas paparan Permenaker 5/2018, sistem sprinkler tirai air (water curtain amonia).',
        practical: 'Simulasi pemakaian SCBA dan penutupan darurat isolasi valve kompresor pendingin makanan.'
      },
      {
        name: 'Modul 2: Izin Kerja Ruang Terbatas (Confined Space) Tangki Silo & Fermentasi',
        theory: 'Bahaya gas CO2 dan sisa uap CIP (Clean-in-Place), pengujian gas atmosferis, prosedur lock-out sistem pengaduk (agitator).',
        practical: 'Praktik masuk tangki simulasi menggunakan harness, tripod rescue, dan gas tester multi-gas.'
      },
      {
        name: 'Modul 3: Keselamatan Mesin Kemasan Otomatis (Packaging Line Safety & LOTO)',
        theory: 'Prinsip interlocking guard, sensor optik safety curtain mesin karton/palletizer, isolasi pneumatik & listrik LOTO.',
        practical: 'Audit keselamatan mesin labeling/palletizer dan praktik pemasangan gembok LOTO.'
      }
    ],
    equipment: [
      'SCBA Positive Pressure 300 Bar Khusus Tanggap Darurat Amonia.',
      'Multi-Gas Detector (O2, CO2, LEL, NH3) dengan Selang Pengambil Sampel.',
      'Set Lockout/Tagout Pneumatik dan Kelistrikan Panel Mesin.',
      'Manhole Guard Rail & Tripod Penyelamat Ruang Terbatas.'
    ],
    participants: [
      'EHS Manager PIER, Utility Supervisor Boiler/Chiller, QA/QC Food Safety, Maintenance Packaging, dan Anggota ERT Pabrik.'
    ],
    tableData: {
      headers: ['Zona Industri Pasuruan', 'Klaster Industri', 'Risiko Keselamatan Kritis', 'Program In-House Wajib'],
      rows: [
        ['Kawasan PIER Rembang', 'Food & Beverage, Farmasi, Packaging', 'Kebocoran Gas Amonia, LOTO Mesin Otomatis', 'K3 Kimia Amonia & LOTO System'],
        ['Koridor Beji - Kraton', 'Pabrik Kertas & Kimia Dasar', 'Boiler Uap Hitam, Ruang Tertutup Pulper', 'K3 Pesawat Uap & Confined Space'],
        ['Koridor Pandaan - Sukorejo', 'Minuman Ringan, Susu, & Makanan Ringan', 'Steam Pipe Rupture, Ergonomi Repetitif', 'K3 Bejana Tekanan & Ergonomi Mamin'],
        ['Purwosari - Gempol', 'Pengecoran Logam & Plastik Injeksi', 'Luka Bakar Logam Cair, Kebisingan Mesin Press', 'K3 Peleburan Logam & Higiene Industri']
      ]
    },
    caseStudy: 'Sebuah produsen minuman multinasional di Kawasan PIER Pasuruan meraih Zero LTI selama 5 tahun berturut-turut setelah mengintegrasikan program in-house training LOTO mesin packaging dan simulasi tanggap darurat amonia tahunan.',
    zoneHighlights: [
      { zone: 'PIER Industrial Park Utility Zone', hazard: 'Pipa amonia bertekanan tinggi bocor di area kompresor chiller', control: 'Pemasangan sensor gas NH3 terhubung ke sirine & water spray system' },
      { zone: 'Pabrik Minuman Pandaan Fermentasi', hazard: 'Gas karbon dioksida pekat mengendap di dasar tangki fermentasi', control: 'Peniupan udara paksa (forced ventilation) minimal 30 menit sebelum entry' },
      { zone: 'Lini Packaging Beji', hazard: 'Tangan teknisi terjepit lengan robot palletizer saat bypass sensor', control: 'SOP ketat no-bypass interlock & kunci master LOTO terpadu' }
    ],
    stepByStepGuide: [
      { step: '1. Review P&ID Sistem Pendingin & Uap', desc: 'Pengecekan titik rawan jalur pipa amonia dan boiler pabrik klien di Pasuruan.' },
      { step: '2. Penyelenggaraan Modul Khusus F&B', desc: 'Materi K3 yang selaras dengan standar sanitasi dan GMP industri pangan.' },
      { step: '3. Simulasi Kebocoran Nyata Lapangan', desc: 'Latihan tanggap darurat amonia dengan pemakaian SCBA di area outdoor.' },
      { step: '4. Verifikasi Tindakan Korektif (CAPA)', desc: 'Pemberian rekomendasi teknis perbaikan sistem pengaman mesin pabrik.' }
    ],
    links: [
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' },
      { href: '/industri/makanan-dan-minuman-fnb/', anchor: 'K3 Industri Makanan dan Minuman' },
      { href: '/kategori-pelatihan/petugas-ruang-terbatas-confined-space/', anchor: 'Pelatihan Petugas Ruang Terbatas' }
    ]
  },

  // 12. Sidoarjo
  {
    key: 'in-house-training-k3-sidoarjo',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-sidoarjo/',
    archetype: 'regional',
    title: 'In-House Training K3 Sidoarjo: Kawasan Safe n Lock, Waru, & Industri Manufaktur',
    h1: 'In-House Training K3 Sidoarjo: Pelatihan Keselamatan Kerja Kawasan Industri Safe n Lock, Berbek, Pergudangan, & Logistik Jawa Timur',
    meta: 'In-house training K3 Sidoarjo: keselamatan industri manufaktur Safe n Lock, Berbek, operator forklift, penanganan B3 kimia & standar Disnaker Jatim.',
    imgAlt: 'Pelaksanaan in-house training K3 pergudangan logistik dan manufaktur di Sidoarjo Jawa Timur',
    related: ['in-house-training', 'logistik-dan-supply-chain', 'manufaktur-elektronik', 'k3-keselamatan-kerja'],
    intro: 'Kabupaten Sidoarjo merupakan sabuk industri manufaktur dan pusat logistik utama penyangga Surabaya. Dengan kawasan industri modern seperti Safe n Lock Eco Industrial Park, Kawasan Berbek Industri, dan Sentra Pergudangan Tambakaksa, ribuan perusahaan bergerak di bidang manufaktur ringan, percetakan, pengolahan bahan kimia, serta pusat distribusi logistik ritel yang membutuhkan pengawalan K3 operasional yang disiplin.',
    hazards: [
      '<strong>Tabrakan Forklift & Pejalan Kaki di Gudang:</strong> Kepadatan lalu lintas bongkar muat barang di area loading dock yang sempit.',
      '<strong>Kebakaran Bahan Kimia Pelarut & Cat:</strong> Penyimpanan solvent thinner dan resin tanpa ventilasi pembuangan di industri cat/tinta.',
      '<strong>Terjepit Mesin Press Stamping & Punching:</strong> Ketiadaan sensor safety guard saat operator memasukkan pelat logam manual.',
      '<strong>Keruntuhan Rak Penyimpanan Palet (Racking Collapse):</strong> Kelebihan beban simpan (overloading) dan benturan garpu forklift pada tiang rak.'
    ],
    regulations: [
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang Keselamatan Pesawat Angkat dan Angkut.',
      '<strong>Permenaker No. 38 Tahun 2016</strong> tentang Keselamatan Pesawat Tenaga dan Produksi.',
      '<strong>Kepmenaker No. 187/MEN/1999</strong> tentang Pengendalian Bahan Kimia Berbahaya.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Keselamatan Operasional Forklift & Pengelolaan Loading Dock',
        theory: 'Kapasitas beban forklift, blind spot pedestrian, SOP bongkar muat kontainer, penggunaan dock leveler.',
        practical: 'Uji keterampilan manuver dan simulasi penataan palet barang di rak susun 4 tingkat.'
      },
      {
        name: 'Modul 2: K3 Penanganan Bahan Berbahaya & Beracun (B3) Pergudangan',
        theory: 'Sistem klasifikasi GHS, interpretasi Safety Data Sheet (SDS), penataan kompatibilitas kimia gudang.',
        practical: 'Praktik penanganan tumpahan bahan kimia pelarut cair menggunakan spill kit drum khusus.'
      },
      {
        name: 'Modul 3: Machine Guarding & Pencegahan Kecelakaan Mesin Press Logam',
        theory: 'Prinsip proteksi mesin dua tangan (two-hand control), interlock gate, prosedur LOTO penggantian dies.',
        practical: 'Audit kesesuaian sensor optik keselamatan pada mesin stamping press logam di workshop.'
      }
    ],
    equipment: [
      'Set Safety Lockout/Tagout Industri Manufaktur (Plug Lock, Circuit Breaker Lock).',
      'Chemical Spill Response Kit 50 Liter dengan Absorbent Pad & Sock.',
      'Forklift Pre-Operation Check Tool & Laser Height Sensor.',
      'Digital Lux Meter & Sound Level Meter Terkalibrasi.'
    ],
    participants: [
      'Warehouse Supervisor Sidoarjo, Safety Officer Perusahaan, Operator Forklift Berlisensi, Maintenance Workshop, dan Tim Logistik.'
    ],
    tableData: {
      headers: ['Zona Industri Sidoarjo', 'Sektor Usaha', 'Potensi Kecelakaan Kerja', 'Pelatihan In-House Prioritas'],
      rows: [
        ['Safe n Lock Industrial Park', 'Manufaktur Ringan, Kimia, & Logistik', 'Tumpahan B3 Kimia, Tabrakan Forklift', 'K3 Bahan Kimia B3 & SIO Forklift'],
        ['Kawasan Industri Berbek', 'Tekstil, Plastik Injeksi, & Percetakan', 'Kebakaran Pabrik, Terjepit Mesin Rol', 'Penanggulangan Kebakaran & Machine Safety'],
        ['Sentra Pergudangan Gedangan', 'Distribusi Logistik E-Commerce & Retail', 'Racking Collapse, Cedera Tulang Belakang (LBP)', 'K3 Pergudangan & Ergonomi Manual Handling'],
        ['Koridor Krian - Tarik', 'Pabrik Kertas, Baja Ringan, & Pakan Ternak', 'Boiler Uap Meledak, Debu Silo Pakan', 'K3 Pesawat Uap & Ruang Terbatas Silo']
      ]
    },
    caseStudy: 'Sebuah pusat distribusi e-commerce besar di Sidoarjo berhasil mengeliminasi insiden tabrakan forklift dengan pejalan kaki hingga 100% pasca implementasi zonasi visual K3 dan pelatihan sertifikasi in-house untuk seluruh armada operator alat angkut.',
    zoneHighlights: [
      { zone: 'Safe n Lock Raci Area', hazard: 'Penyimpanan drum tiner kimia tanpa secondary containment tray', control: 'Pemasangan spill pallet berkapasitas 110% & grounding anti-statis' },
      { zone: 'Loading Dock Berbek', hazard: 'Truk trailer bergerak maju mendadak saat forklift masih di dalam kontainer', control: 'Pemasangan wheel chock ganjal ban & sistem lampu interlock dock' },
      { zone: 'Pabrik Logam Krian', hazard: 'Jari operator terpotong mata pisau mesin shearing pelat besi', control: 'Pemberlakuan two-hand control switch yang mewajibkan kedua tangan di tombol' }
    ],
    stepByStepGuide: [
      { step: '1. Pemetaan Alur Logistik & Mesin', desc: 'Konsultan meninjau layout lalu lintas forklift dan titik rawan mesin klien di Sidoarjo.' },
      { step: '2. Kustomisasi Modul Sesuai Regulasi', desc: 'Silabus diselaraskan dengan Permenaker 8/2020 dan standar audit Disnaker Jatim.' },
      { step: '3. Simulasi Praktik & Drill di Site', desc: 'Latihan pengoperasian forklift aman dan penanganan tumpahan B3.' },
      { step: '4. Evaluasi & Sertifikat Resmi', desc: 'Uji kompetensi teori-praktik dan penerbitan lisensi SIO Kemnaker.' }
    ],
    links: [
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' },
      { href: '/kategori-pelatihan/operator-forklift/', anchor: 'Pelatihan Lisensi Operator Forklift' },
      { href: '/industri/logistik-pergudangan/', anchor: 'Panduan Keselamatan Logistik & Pergudangan' }
    ]
  },

  // 13. Tuban - Bojonegoro
  {
    key: 'in-house-training-k3-tuban-bojonegoro',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-tuban-bojonegoro/',
    archetype: 'regional',
    title: 'In-House Training K3 Tuban & Bojonegoro: Migas Blok Cepu, Kilang GRR, & Semen',
    h1: 'In-House Training K3 Tuban & Bojonegoro: Pelatihan Keselamatan Hulu Migas Blok Cepu, Kilang Minyak Grass Root Refinery (GRR), & Pabrik Semen',
    meta: 'In-house training K3 Tuban Bojonegoro: keselamatan hulu migas Banyu Urip, kilang minyak Tuban, pabrik semen, gas H2S, CSMS & sertifikasi SKK Migas.',
    imgAlt: 'Pelatihan keselamatan kerja migas dan industri semen di Tuban dan Bojonegoro Jawa Timur',
    related: ['in-house-training', 'petrokimia-dan-gas', 'smelter-dan-pengolahan-mineral', 'k3-keselamatan-kerja'],
    intro: 'Wilayah koridor Tuban dan Bojonegoro di pesisir utara Jawa Timur merupakan poros strategis ketahanan energi dan material nasional. Mengoperasikan ladang minyak raksasa Lapangan Banyu Urip Blok Cepu, proyek mega-kilang Grass Root Refinery (GRR) Tuban, dan pabrik semen berkapasitas jutaan ton menuntut penerapan standar keselamatan industri migas kelas dunia, pengawasan gas beracun H2S yang mematikan, dan pemenuhan CSMS kontraktor level tertinggi.',
    hazards: [
      '<strong>Pelepasan Gas Hidrogen Sulfida (H2S) Hulu Migas:</strong> Gas asam beracun mematikan pada sumur pemboran dan fasilitas pemisahan minyak mentah.',
      '<strong>Semburan Liar Minyak & Gas (Blowout):</strong> Kehilangan kendali tekanan formasi sumur migas yang memicu kebakaran katastropik.',
      '<strong>Bahaya Pekerjaan Panas di Fasilitas Kilang:</strong> Pengelasan pada jalur pipa aktif hidrokarbon bertekanan tinggi.',
      '<strong>Ledakan Debu Batubara & Suhu Tinggi Kiln Semen:</strong> Radiasi panas 1.400°C pada rotary kiln dan debu batubara di coal mill.'
    ],
    regulations: [
      '<strong>PP No. 11 Tahun 1979</strong> tentang Keselamatan Kerja pada Pemurnian dan Pengolahan Minyak dan Gas Bumi.',
      '<strong>Pedoman Tata Kerja PTK 007 SKK Migas</strong> tentang Standar CSMS Hulu Migas.',
      '<strong>Permenaker No. 5 Tahun 2018</strong> tentang K3 Lingkungan Kerja (Gas H2S).',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Keselamatan Bahaya Gas H2S & Emergency Breathing Apparatus',
        theory: 'Karakteristik racun gas H2S, batas paparan 10 ppm & IDLH 100 ppm, zonasi bahaya red/yellow/green zone.',
        practical: 'Simulasi pemakaian cascade breathing system dan evakuasi korban terpapar gas H2S dari area wellpad.'
      },
      {
        name: 'Modul 2: Sistem Izin Kerja Aman (PTW) & Hot Work Kilang GRR',
        theory: 'Prosedur cold work, hot work, isolasi LOTO mekanik/listrik, pengujian gas hidrokarbon (LEL clearance).',
        practical: 'Audit dokumen permit to work dan simulasi pengecekan flare stack mock-up.'
      },
      {
        name: 'Modul 3: K3 Operasional Tambang Batu Kapur & Pabrik Semen Tuban',
        theory: 'Geoteknik tambang quarry kapur, keselamatan blasting bahan peledak, penanganan debu coal mill.',
        practical: 'Inspeksi sistem proteksi kebakaran coal mill dan prosedur penguncian LOTO mesin crusher semen.'
      }
    ],
    equipment: [
      'Cascade Breathing Air System dengan Manifold 4-Person Air Line.',
      'Personal H2S Gas Monitor Single Sensor (Alarm 10 ppm & 15 ppm).',
      'Positive Pressure SCBA Carbon Composite 300 Bar.',
      'Thermal Imaging Camera untuk Deteksi Dini Kebocoran Gas Panas.'
    ],
    participants: [
      'Field Safety Engineer Blok Cepu, Drilling Supervisor, EHS Officer Kilang GRR Tuban, Operator Kiln Semen, dan Kontraktor Migas.'
    ],
    tableData: {
      headers: ['Fasilitas Industri Tuban-Bojonegoro', 'Sektor Utama', 'Potensi Bahaya Katastropik', 'Program Pelatihan Unggulan'],
      rows: [
        ['Lapangan Banyu Urip Blok Cepu', 'Hulu Minyak dan Gas Bumi', 'H2S Gas Release, High Pressure Well Blowout', 'H2S Safety, Cascade System, & CSMS SKK Migas'],
        ['Proyek Kilang GRR Tuban', 'Pengolahan Minyak & Petrokimia', 'Hydrocarbon Explosion, Confined Space Vessel', 'Process Safety Management (PSM) & Gas Tester'],
        ['Pabrik Semen Tuban', 'Industri Semen & Tambang Quarry', 'Coal Dust Explosion, Quarry Highwall Slide', 'K3 Tambang Non-Logam & K3 Coal Mill'],
        ['Terminal Khusus Jetty Minyak Tuban', 'Bongkar Muat Crude Oil Single Point Mooring', 'Oil Spill Maritim, Tanker Fire', 'Marine Oil Spill Response & CSMS Maritim']
      ]
    },
    caseStudy: 'Sebuah konsorsium kontraktor EPC di Tuban menyelesaikan 15 juta jam kerja tanpa fatality selama proyek pembangunan infrastruktur migas setelah mewajibkan seluruh pengawas dan pekerjanya lulus pelatihan in-house H2S dan Permit System.',
    zoneHighlights: [
      { zone: 'Bojonegoro Central Processing Facility (CPF)', hazard: 'Kebocoran gas H2S pada unit pengolahan asam sulfur', control: 'Pemasangan windsock penunjuk arah angin & fixed H2S detector laser' },
      { zone: 'Tuban GRR Refinery Tank Farm', hazard: 'Kebakaran tangki penyimpanan minyak mentah akibat sambaran petir', control: 'Penyediaan sistem rim-seal foam otomatis & proteksi penyalur petir' },
      { zone: 'Pabrik Semen Tuban Preheater Tower', hazard: 'Sumbatan siklon klinker panas bertekanan yang menyembur saat dibuka', control: 'SOP poking klinker dengan APD pendingin & permit kerja panas khusus' }
    ],
    stepByStepGuide: [
      { step: '1. Asesmen Bahaya Standar Migas', desc: 'Pengecekan fasilitas klien diselaraskan dengan aturan SKK Migas dan Ditjen Migas.' },
      { step: '2. Simulasi H2S & Evakuasi Berkelompok', desc: 'Praktik penggunaan masker udara terhubung pipa kompresor cascade di lapangan.' },
      { step: '3. Uji Pengetahuan Izin Kerja PTW', desc: 'Studi kasus nyata penolakan permit kerja yang tidak memenuhi syarat keselamatan.' },
      { step: '4. Sertifikasi Resmi Berlisensi', desc: 'Penerbitan sertifikat kualifikasi keselamatan migas resmi untuk pemenuhan tender.' }
    ],
    links: [
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' },
      { href: '/industri/pertambangan-migas/', anchor: 'Keselamatan Kerja Sektor Migas' },
      { href: '/kategori-pelatihan/gas-tester/', anchor: 'Pelatihan Authorized Gas Tester (AGT)' }
    ]
  },

  // 14. Palembang
  {
    key: 'in-house-training-k3-palembang',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-palembang/',
    archetype: 'regional',
    title: 'In-House Training K3 Palembang: Pupuk Pusri, Kilang Plaju, & Tambang Batubara Sumsel',
    h1: 'In-House Training K3 Palembang: Pelatihan Keselamatan Pabrik Pupuk Pusri, Kilang Minyak Plaju, & Koridor Batubara Tanjung Enim',
    meta: 'In-house training K3 Palembang: keselamatan pabrik pupuk amonia Pusri, kilang Plaju, pengangkutan batubara Sungai Musi & sertifikasi Kemnaker.',
    imgAlt: 'Pelaksanaan in-house training K3 industri pupuk kimia dan kilang minyak di Palembang Sumatera Selatan',
    related: ['in-house-training', 'petrokimia-dan-gas', 'pertambangan-batubara', 'k3-keselamatan-kerja'],
    intro: 'Palembang merupakan pusat industri petrokimia pupuk, kilang minyak tertua di Indonesia (Kilang Plaju-Sungai Gerong), dan simpul logistik batubara Sumatera Selatan. Pengolahan gas alam menjadi amonia dan urea di PT Pupuk Sriwidjaja (Pusri), distilasi fraksi minyak bumi, serta lalu lintas tongkang batubara di Sungai Musi menuntut mitigasi bahaya kimia gas reaktif bertekanan tinggi dan keselamatan perairan yang kokoh.',
    hazards: [
      '<strong>Kebocoran Gas Amonia & Gas Sintesis Bertekanan:</strong> Pelepasan gas amonia pekat dari unit sintesis urea pabrik pupuk.',
      '<strong>Kebakaran Fasilitas Pengolahan Kilang Minyak:</strong> Sambaran api pada unit catalytic cracking dan tangki bensin kilang Plaju.',
      '<strong>Kecelakaan Masuk Ruang Terbatas Reaktor Pupuk:</strong> Masuk ke bejana sintesis urea dengan risiko kekurangan oksigen dan residu gas amonia.',
      '<strong>Tabrakan Tongkang Batubara di Jembatan Ampera:</strong> Kehilangan daya dorong tugboat saat membawa 5.000 ton batubara di arus deras Musi.'
    ],
    regulations: [
      '<strong>Kepmenaker No. 187/MEN/1999</strong> tentang Pengendalian Bahan Kimia Berbahaya di Tempat Kerja.',
      '<strong>PP No. 11 Tahun 1979</strong> tentang Keselamatan Pemurnian dan Pengolahan Migas.',
      '<strong>Permenaker No. 37 Tahun 2016</strong> tentang K3 Bejana Tekan dan Tangki Timbun.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Manajemen Bahaya Kimia Amonia & Urea Pabrik Pupuk',
        theory: 'Fisiologi toksisitas amonia, ambang batas NAB Permenaker 5/2018, pengoperasian water deluge system.',
        practical: 'Simulasi penyemprotan tirai air pembendung gas amonia dan evakuasi zona crosswind.'
      },
      {
        name: 'Modul 2: Process Safety Management (PSM) & Hot Work Kilang Minyak',
        theory: 'Analisis bahaya proses (PHA), verifikasi LOTO pipa hidrokarbon, izin kerja pengelasan di zona berbahaya.',
        practical: 'Audit kesesuaian dokumen isolasi mekanis pipa dan pengujian gas LEL pada area tangki kilang.'
      },
      {
        name: 'Modul 3: Keselamatan Operasional Jetty & Dermaga Batubara Sungai Musi',
        theory: 'SOP mooring kapal tongkang, inspeksi conveyor batubara, prosedur penanggulangan orang jatuh ke sungai.',
        practical: 'Simulasi penyelamatan korban tenggelam di dermaga Musi menggunakan throwing rescue line.'
      }
    ],
    equipment: [
      'Positive Pressure SCBA dengan Alarm Bunyi Tekanan Rendah.',
      'Single Gas Ammonia (NH3) & LEL Combustible Gas Detector.',
      'Set Lockout/Tagout Kimia (Flange Blind Lockout & Ball Valve Lockout).',
      'Life Ring Buoy Standar Maritim dengan Tali Terapung 30 Meter.'
    ],
    participants: [
      'Process Engineer Pabrik Pupuk, Safety Officer Kilang Plaju, Supervisor Dermaga Batubara Musi, Teknisi Boiler, dan Paramedis Perusahaan.'
    ],
    tableData: {
      headers: ['Zona Industri Palembang', 'Sektor Unggulan', 'Potensi Bahaya Terbesar', 'Program In-House Unggulan'],
      rows: [
        ['Kompleks Pupuk Pusri Palembang', 'Industri Pupuk & Kimia Dasar', 'Amonia Gas Dispersion, Reaktor Bertekanan', 'K3 Kimia Amonia & Bejana Tekanan'],
        ['Kompleks Kilang Plaju - Sungai Gerong', 'Pengolahan Minyak Bumi & Polimer', 'Flash Fire Hidrokarbon, Vessel Entry', 'Process Safety Management & Gas Tester'],
        ['Kertapati & Gandus Batubara Hub', 'Stockpile & Dermaga Muat Tongkang', 'Conveyor Pinch Point, Coal Self-Heating', 'K3 Conveyor & Pencegahan Kebakaran Batubara'],
        ['Kawasan Industri Tanjung Api-Api', 'Logistik Pelabuhan Laut & Pabrik Plywood', 'Lifting Gear Defect, Debu Kayu Meledak', 'SIO Rigger, Crane & Fire Safety Kelas D']
      ]
    },
    caseStudy: 'Sebuah pabrik kimia hilir di Palembang berhasil melewati audit SMK3 Kategori Lanjutan dengan skor 94% setelah mengikutsertakan seluruh teknisi dan tim tanggap daruratnya dalam program in-house training K3 Kimia dan Ruang Terbatas.',
    zoneHighlights: [
      { zone: 'Pusri Ammonia Plant Zone', hazard: 'Flange pipa amonia cair retak akibat vibrasi kompresor', control: 'Pemasangan pelindung flange (flange guard) & inspeksi NDT berkala' },
      { zone: 'Kilang Plaju Crude Distillation Unit', hazard: 'Kebocoran uap naphta panas saat operasi normal', control: 'Continuous infrared gas detector & SOP patroli operator shift berkala' },
      { zone: 'Dermaga Kertapati Sungai Musi', hazard: 'Pekerja jatuh ke sungai terseret arus saat mengikat tali tongkang', control: 'Wajib mengenakan life jacket otomatis & sepatu sol anti-slip' }
    ],
    stepByStepGuide: [
      { step: '1. Analisis Fasilitas Kimia & Migas', desc: 'Konsultan meninjau layout pabrik pupuk atau fasilitas dermaga klien di Palembang.' },
      { step: '2. Simulasi Tabel HAZOP & ERP', desc: 'Latihan pengambil keputusan darurat saat skenario pelepasan gas beracun terjadi.' },
      { step: '3. Drill Lapangan Pemakaian SCBA', desc: 'Praktik penggunaan peralatan pernapasan mandiri dan evakuasi rekan kerja.' },
      { step: '4. Pelaporan ke Disnaker Sumsel', desc: 'Penyusunan laporan pembinaan K3 resmi untuk pelaporan rutin P2K3 perusahaan.' }
    ],
    links: [
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' },
      { href: '/industri/pertambangan-migas/', anchor: 'Keselamatan Industri Petrokimia' },
      { href: '/kategori-pelatihan/lockout-tagout-loto/', anchor: 'Pelatihan Prosedur LOTO Kemnaker' }
    ]
  },

  // 15. Pekanbaru
  {
    key: 'in-house-training-k3-pekanbaru',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-pekanbaru/',
    archetype: 'regional',
    title: 'In-House Training K3 Pekanbaru: Pulp & Paper Raksasa, PKS Sawit, & Koridor Migas',
    h1: 'In-House Training K3 Pekanbaru: Pelatihan Keselamatan Kerja Industri Pulp & Paper Perawang, Pabrik Kelapa Sawit, & Fasilitas Migas Riau',
    meta: 'In-house training K3 Pekanbaru Riau: keselamatan industri pulp & paper Perawang, boiler black liquor, pabrik sawit PKS & sertifikasi Kemnaker.',
    imgAlt: 'Pelatihan in-house training K3 industri pulp and paper serta perkebunan sawit di Pekanbaru Riau',
    related: ['in-house-training', 'perkebunan-kelapa-sawit', 'pabrik-kertas-pulp-paper', 'k3-keselamatan-kerja'],
    intro: 'Provinsi Riau dengan pusat di Pekanbaru merupakan raksasa perkebunan kelapa sawit dan industri bubur kertas (Pulp & Paper) terbesar di Asia Tenggara. Beroperasinya pabrik pulp & paper raksasa di Perawang dan Pangkalan Kerinci mengoperasikan Recovery Boiler uap terbesar di Indonesia, bahan kimia pemutih klorin dioksida (ClO2), serta ratusan pabrik kelapa sawit (PKS) yang membutuhkan standar keselamatan kerja prima.',
    hazards: [
      '<strong>Ledakan Recovery Boiler Pabrik Kertas:</strong> Kontak lelehan smelt anorganik panas 850°C dengan air pada dasar recovery boiler.',
      '<strong>Pelepasan Gas Klorin Dioksida (ClO2) Pemutih Pulp:</strong> Gas oksidator kuat beracun yang merusak saluran pernapasan secara permanen.',
      '<strong>Kecelakaan Mesin Pemotong Kayu (Wood Chipper):</strong> Bahaya serpihan kayu dan anggota tubuh tertarik conveyor drum chipper.',
      '<strong>Kebakaran Hutan & Lahan Gambut (Karhutla):</strong> Kebakaran area konsesi perkebunan yang menghasilkan asap pekat beracun.'
    ],
    regulations: [
      '<strong>Permenaker No. 1 Tahun 1988</strong> tentang Kualifikasi Operator Pesawat Uap (Recovery Boiler).',
      '<strong>Kepmenaker No. 187/MEN/1999</strong> tentang Pengendalian Bahan Kimia Berbahaya.',
      '<strong>Permenaker No. 38 Tahun 2016</strong> tentang K3 Pesawat Tenaga dan Produksi.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Keselamatan Operasional Recovery Boiler & Power Boiler Pulp',
        theory: 'Prinsip kerja recovery boiler, pencegahan reaksi smelt-water explosion, prosedur Emergency Shutdown Procedure (ESP).',
        practical: 'Audit sistem interlock ESP boiler dan inspeksi ketebalan dinding pipa evaporator boiler.'
      },
      {
        name: 'Modul 2: K3 Penanganan Bahan Kimia Pemutih Klorin Dioksida (ClO2)',
        theory: 'Karakteristik ClO2, sistem deteksi kebocoran gas otomatis, penggunaan respirator gas asam dan chemical suit.',
        practical: 'Simulasi evakuasi darurat kebocoran ClO2 menara pemutih dan pemakaian escape hood.'
      },
      {
        name: 'Modul 3: K3 Pabrik Sawit PKS & Tanggap Darurat Kebakaran Lahan (Karhutla)',
        theory: 'Keselamatan stasiun rebusan sawit (sterilizer), pembentukan regu pemadam karhutla kebun, penggunaan pompa jinjing.',
        practical: 'Gelar simulasi pemadaman kebakaran lahan gambut menggunakan pompa punggung dan nozzle spray.'
      }
    ],
    equipment: [
      'Single Gas Chlorine Dioxide (ClO2) Detector Personal.',
      'Emergency Escape Mask Hood 15 Menit dengan Filter Gas Asam Toksik.',
      'Pompa Pemadam Kebakaran Jinjing Hutan/Gambut & Selang Kanvas 1.5 Inch.',
      'Full Body Harness & LOTO Kit untuk Perbaikan Mesin Wood Yard.'
    ],
    participants: [
      'Recovery Boiler Engineer, EHS Officer Pulp & Paper, Mill Manager PKS Riau, Koordinator Pemadam Karhutla Kebun, Paramedis Site.'
    ],
    tableData: {
      headers: ['Klaster Industri Riau', 'Lokasi Pabrik', 'Bahaya Katastropik', 'Program Pelatihan In-House Rekomendasi'],
      rows: [
        ['Pulp & Paper Perawang & Pelalawan', 'Perawang & Pangkalan Kerinci', 'Smelt-Water Boiler Explosion, ClO2 Gas Leak', 'K3 Recovery Boiler & K3 Kimia Toksik ClO2'],
        ['Pabrik Kelapa Sawit (PKS) Kampar-Siak', 'Koridor Kebun Sawit Riau', 'Sterilizer Explosion, Press Cage Jamming', 'K3 Bejana Uap PKS & Machine Guarding'],
        ['Fasilitas Woodyard & Logistik Kayu', 'Dermaga Kayu Sungai Siak', 'Log Loader Rollover, Wood Chipper Ingestion', 'SIO Alat Berat Excavator & Safe Feeding Chipper'],
        ['Konsesi Hutan Tanaman Industri (HTI)', 'Lahan Gambut Riau', 'Kebakaran Lahan Gambut (Karhutla)', 'Pelatihan Regu Pemadam Kebakaran Hutan & Lahan']
      ]
    },
    caseStudy: 'Sebuah pabrik pulp & paper raksasa di Riau berhasil mempertahankan Zero Smelt Explosion selama 10 tahun operasional pasca implementasi pelatihan in-house sertifikasi operator boiler dan simulasi audit ESP berkala.',
    zoneHighlights: [
      { zone: 'Perawang Pulp Bleaching Plant', hazard: 'Kebocoran gas ClO2 pada menara reaksi pemutihan bubur kertas', control: 'Pemasangan sensor ClO2 multi-point terhubung ke scrubber kimia' },
      { zone: 'Woodyard Chipper Facility', hazard: 'Operator terpental kayu gelondongan saat feeding ke mesin chipper', control: 'Pemasangan barikade pelindung balistik & SOP jarak aman operator' },
      { zone: 'Boiler House PKS Siak', hazard: 'Karyawan terkena semburan air panas saat menguras pipa boiler', control: 'SOP blowdown bertahap & APD tahan panas aluminized lengkap' }
    ],
    stepByStepGuide: [
      { step: '1. TNA Kebutuhan Industri Pulp/Sawit', desc: 'Pemetaan titik bahaya recovery boiler, unit kimia, dan pabrik kelapa sawit klien.' },
      { step: '2. Kustomisasi Prosedur Darurat ESP', desc: 'Penyelarasan modul dengan SOP kedaruratan boiler uap kapasitas raksasa.' },
      { step: '3. Simulasi Basah Lapangan', desc: 'Latihan evakuasi gas kimia pemutih dan pemadaman kebakaran kebun sawit.' },
      { step: '4. Uji Kompetensi & Sertifikasi', desc: 'Ujian tertulis dan evaluasi praktik untuk penerbitan sertifikat resmi Kemnaker.' }
    ],
    links: [
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' },
      { href: '/industri/manufaktur/', anchor: 'K3 Industri Pulp, Paper & Manufaktur' },
      { href: '/kategori-pelatihan/operator-boiler/', anchor: 'Pelatihan Operator Boiler Kelas I & II' }
    ]
  }
];
