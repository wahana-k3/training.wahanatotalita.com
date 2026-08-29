import { ExtendedProgramDetail } from './batch4-master-data';

export const batch6Part3: ExtendedProgramDetail[] = [
  // 86. Crane Offshore Pedestal
  {
    key: 'k3-alat-angkat-crane-offshore-pedestal',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/k3-alat-angkat-crane-offshore-pedestal/',
    title: 'Pelatihan Operator & K3 Offshore Pedestal Crane Standar API Spec 2C',
    h1: 'Pelatihan Keselamatan Offshore Pedestal Crane: Operasi Supply Vessel Lifting, Dynamic Loading Ombak Laut, dan Sertifikasi Migas',
    meta: 'Pelatihan operator pedestal crane anjungan lepas pantai (offshore): standar API Spec 2C / API RP 2D, transfer muatan kapal supply (Supply Boat Offloading), faktor dinamika ombak (Significant Wave Height), dan blind lift.',
    imgAlt: 'Offshore pedestal crane mengangkat kontainer logistik dari dek kapal supply boat di tengah ombak laut lepas',
    related: ['operator-crane', 'minyak-dan-gas-bumi-offshore', 'rigger'],
    intro: 'Pengoperasian <strong>Offshore Pedestal Crane</strong> di atas anjungan minyak lepas pantai menghadapi gaya dinamis guncangan ombak laut (<em>Dynamic Amplification Factor</em>) yang melipatgandakan tegangan pada tali kawat baja saat mengangkat beban dari dek kapal yang bergoyang.',
    hazards: ['Beban tersangkut di dek supply boat saat kapal terombang-ambing ombak sehingga crane tertarik dan tumbang ke laut.'],
    regulations: ['Standar API Spec 2C & API RP 2D.', 'Permenaker No. 8 Tahun 2020.'],
    modules: [{ name: 'Modul 1: Dynamic Load Chart & Supply Boat Offloading', theory: 'Signifikan tinggi gelombang (Hs), penyesuaian tabel beban dinamis, manuver hook tracking.', practical: 'Simulasi pengangkatan muatan dari perahu yang bergoyang.' }],
    equipment: ['Offshore Crane Simulator & Wave Motion Tracker.'],
    participants: ['Offshore Crane Operator, Deck Foreman, Rigger Migas, dan Safety Lead Anjungan.'],
    tableData: { headers: ['Kondisi Gelombang Laut (Hs)', 'Faktor Pengurangan Beban Crane', 'Status Izin Operasi'], rows: [['Tinggi Gelombang < 1.0 Meter', 'Beban Normal Sesuai Tabel Darat', 'OPERASI NORMAL DIIZINKAN'], ['Tinggi Gelombang 1.0 – 2.5 Meter', 'Kapasitas Diturunkan 30% – 50%', 'OPERASI DENGAN IZIN KHUSUS'], ['Tinggi Gelombang > 2.5 Meter', 'Kapasitas Diturunkan > 70%', 'STOP OPERASI PENGANGKATAN']] },
    links: [{ href: '/kategori-pelatihan/operator-crane/', label: 'Pelatihan Operator Crane' }],
    faqs: [{ q: 'Apa itu Fast Line Hoist pada offshore crane?', a: 'Fitur kecepatan tinggi penggulung kawat baja untuk mengangkat beban menjauhi dek kapal supply dalam hitungan detik sebelum kapal terangkat kembali oleh gelombang ombak berikutnya.' }]
  },

  // 87. Flange Management & Bolting Safety
  {
    key: 'flange-management-dan-bolting-safety',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/flange-management-dan-bolting-safety/',
    title: 'Pelatihan Flange Management & Controlled Bolting Safety Standar ASME PCC-1',
    h1: 'Pelatihan Flange Management & Bolting: Prosedur Pengencangan Baut Terkendali (Torque & Tensioning), Gasket Seating, dan Pencegahan Kebocoran Flange',
    meta: 'Pelatihan teknis Flange Management industri migas & petrokimia: standar ASME PCC-1, metode pengencangan silang (Star Pattern), Hydraulic Bolt Tensioner, kalibrasi Torque Wrench, dan flange tag register.',
    imgAlt: 'Teknisi mekanik menggunakan hydraulic torque wrench mengencangkan sambungan flange pipa bertekanan tinggi dengan pola menyilang',
    related: ['inspeksi-perpipaan-migas-api-570', 'inspeksi-bejana-tekan'],
    intro: 'Kebocoran sambungan pipa bertekanan (<em>Flange Leakage</em>) adalah pemicu utama kebakaran kilang. Program <strong>Flange Management &amp; Controlled Bolting (ASME PCC-1)</strong> melatih teknik pengencangan baut presisi.',
    hazards: ['Kebocoran gas hidrokarbon bertekanan 100 bar akibat torsi baut flange yang tidak merata.'],
    regulations: ['Standar ASME PCC-1 (Guidelines for Pressure Boundary Bolted Flange Joint Assembly).'],
    modules: [{ name: 'Modul 1: Controlled Tightening & Gasket Mechanics', theory: 'Pemilihan gasket spiral wound, koefisien gesek pelumas baut, urutan pengencangan Star Pattern, Hydraulic Bolt Tensioning.', practical: 'Praktek pengencangan flange pipa 12 inch menggunakan Hydraulic Torque Wrench.' }],
    equipment: ['Hydraulic Torque Wrench Kit & Manual Dial Torque Wrench Terkalibrasi.'],
    participants: ['Mechanical Fitter, Piping Engineer, Maintenance Supervisor, dan QA/QC Inspector.'],
    tableData: { headers: ['Tahap Torsi Pengencangan Baut', 'Persentase Target Torsi Akhir', 'Pola Urutan Kunci'], rows: [['Tahap 1 (Hand Tight)', '20% – 30% dari Target Torsi', 'Pola Menyilang Bintang (Star Pattern)'], ['Tahap 2 (Intermediate)', '50% – 70% dari Target Torsi', 'Pola Menyilang Bintang (Star Pattern)'], ['Tahap 3 (Final Target)', '100% dari Target Torsi', 'Pola Menyilang Bintang (Star Pattern)'], ['Tahap 4 (Pass Akhir)', '100% dari Target Torsi (Pemeriksaan)', 'Pola Melingkar Searah Jarum Jam (Circular)']] },
    links: [{ href: '/kategori-pelatihan/inspeksi-bejana-tekan/', label: 'Pelatihan Inspeksi Bejana Tekan' }],
    faqs: [{ q: 'Mengapa urutan pengencangan baut flange wajib menggunakan pola menyilang (Star Pattern)?', a: 'Pola menyilang menjamin penekanan permukaan gasket terjadi secara rata dan simetris di seluruh lingkaran flange, mencegah gasket terjepit miring yang memicu celah kebocoran mikro.' }]
  },

  // 88. K3 Pemasangan Pipa Gas Alam
  {
    key: 'k3-pemasangan-pipa-gas-alam',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/k3-pemasangan-pipa-gas-alam/',
    title: 'Pelatihan K3 Pemasangan & Pengelasan Pipa Gas Alam Transmisi PGN',
    h1: 'Pelatihan Keselamatan Pipa Gas Bumi: Pemasangan Pipa Bawah Tanah (HDD), Hot Tapping Gas Aktif, dan Uji Tekan Gas Bertekanan',
    meta: 'In-house training K3 konstruksi jaringan pipa gas bumi: horizontal directional drilling (HDD), tie-in pengelasan hot tapping pipa gas aktif, pemantauan cathodic protection, dan regulasi Ditjen Migas.',
    imgAlt: 'Pekerja memasang segmen pipa gas baja berbalut coating kuning di dalam parit galian pipa transmisi',
    related: ['k3-pekerjaan-galian-excavation', 'minyak-dan-gas-bumi-offshore', 'welding-safety'],
    intro: 'Konstruksi dan penyambungan pipa transmisi gas alam bertekanan tinggi melintasi area padat penduduk menuntut isolasi bahaya kebocoran metana dan integritas pengelasan 100% lolos radiografi.',
    hazards: ['Pengeboran mengenai pipa gas aktif yang memicu semburan api ledakan raksasa.'],
    regulations: ['Permen ESDM No. 32 Tahun 2021.', 'Standar ASME B31.8 (Gas Transmission and Distribution Piping Systems).'],
    modules: [{ name: 'Modul 1: Konstruksi Parit & Horizontal Directional Drilling (HDD)', theory: 'Deteksi utilitas bawah tanah (Cable & Pipe Locator), pelindung galian shoring, uji holiday test coating pipa.', practical: 'Praktek deteksi pipa gas bawah tanah.' }],
    equipment: ['Electromagnetic Pipe Locator & Holiday Detector Tegangan Tinggi.'],
    participants: ['Pipeline Engineer, Welding Inspector Pipa Gas, dan Site Supervisor Proyek PGN.'],
    tableData: { headers: ['Metode Konstruksi Pipa Gas', 'Potensi Bahaya Kritis', 'Pengendalian Wajib'], rows: [['Galian Terbuka (Open Trench)', 'Tanah galian longsor menimbun pipa', 'Pasang trench box pelindung tebing'], ['Pengeboran Bawah Tanah HDD', 'Membentur utilitas listrik/air tanah', 'Pindai georadar 3D pra-pengeboran'], ['Hot Tapping (Sambungan Pipa Aktif)', 'Gas bocor terbakar saat pemotongan pipa', 'Prosedur Hot Tapping disetujui Migas + Fire Watcher']] },
    links: [{ href: '/kategori-pelatihan/k3-pekerjaan-galian-excavation/', label: 'Pelatihan Pekerjaan Galian' }],
    faqs: [{ q: 'Apa fungsi pengujian Holiday Test pada lapisan pelindung pipa gas bumi?', a: 'Holiday test mengalirkan tegangan tinggi untuk mendeteksi lubang jarum mikroskopis (pinhole) pada lapisan isolasi coating anti-korosi pipa sebelum pipa ditimbun di bawah tanah.' }]
  },

  // 89. Petugas K3 Elevator dan Eskalator
  {
    key: 'petugas-k3-elevator-dan-eskalator',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/petugas-k3-elevator-dan-eskalator/',
    title: 'Pelatihan & Sertifikasi Petugas K3 Elevator & Eskalator Kemnaker RI',
    h1: 'Pelatihan Petugas K3 Elevator & Eskalator: Riksa Uji Safety Gear, Uji Rem Darurat Lift, dan Lisensi Resmi Kemnaker RI',
    meta: 'Pelatihan dan sertifikasi Petugas K3 Lift & Eskalator Permenaker No. 6/2017: uji traksi kawat baja lift, sistem overspeed governor, buffer hidrolik pit lift, dan evakuasi penumpang terjebak.',
    imgAlt: 'Teknisi lift memeriksa penguncian governor overspeed dan rem darurat di atas ruang mesin lift penthouse',
    related: ['facility-manager', 'k3-perkantoran-dan-gedung-pemerintah', 'safety-inspector'],
    intro: 'Berdasarkan <strong>Permenaker No. 6 Tahun 2017</strong>, setiap gedung yang mengoperasikan lift penumpang dan eskalator wajib memiliki <strong>Teknisi / Petugas K3 Elevator &amp; Eskalator</strong> tersertifikasi resmi Kemnaker RI.',
    hazards: ['Sangkar lift meluncur jatuh bebas atau teknisi terjepit di ruang sempit puncak sangkar (Car Top).'],
    regulations: ['Permenaker No. 6 Tahun 2017 tentang K3 Elevator dan Eskalator.'],
    modules: [{ name: 'Modul 1: Sistem Pengaman Mekanik & Elektrik Lift Modern', theory: 'Governor overspeed, safety gear wedge, final limit switch, door interlock switch, buffer redaman dasar pit.', practical: 'Uji fungsi penguncian Governor saat lift meluncur overspeed.' }],
    equipment: ['Lift Tachometer Digital & Door Pressure Gauge.'],
    participants: ['Teknisi Maintenance Lift, Facility Engineer Gedung, dan Inspector Elevator.'],
    tableData: { headers: ['Perangkat Keselamatan Lift', 'Fungsi Proteksi Nyawa', 'Uji Kelaikan Wajib'], rows: [['Overspeed Governor', 'Mendeteksi kecepatan sangkar melebihi 115%', 'Uji Tripping Kecepatan Governor'], ['Safety Gear (Rem Baji Rel)', 'Menjepit rel pemandu menghentikan lift seketika', 'Uji Drop Test Beban Penuh'], ['Door Interlock Switch', 'Menjamin lift tidak bergerak saat pintu terbuka', 'Pemeriksaan kontak listrik pintu lift']] },
    links: [{ href: '/peran-jabatan/facility-manager/', label: 'Peran Facility Manager' }],
    faqs: [{ q: 'Berapa kecepatan batas pemicu rem darurat (Safety Gear) lift oleh Governor?', a: 'Governor dirancang untuk memicu rem baji safety gear ketika kecepatan sangkar lift mencapai 115% s.d 125% dari kecepatan nominal desain lift.' }]
  },

  // 90. K3 Pembersihan Tangki Tank Cleaning
  {
    key: 'k3-pembersihan-tangki-tank-cleaning',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/k3-pembersihan-tangki-tank-cleaning/',
    title: 'Pelatihan K3 Pembersihan Tangki Minyak & Kimia (Tank Cleaning Safety)',
    h1: 'Pelatihan Keselamatan Tank Cleaning: Sludge Removal, Gas Freeing, Water Jetting Tekanan 1000 Bar, dan Confined Space',
    meta: 'In-house training K3 tank cleaning tangki timbun minyak & kapal tanker: pengerukan lumpur minyak (sludge), semprotan air tekanan ultra-tinggi (High Pressure Water Jetting 1000 Bar), ventilasi paksa, dan rescue tangki.',
    imgAlt: 'Pekerja tank cleaning mengenakan pakaian pelindung kimia dan SCBA menyemprotkan air tekanan tinggi membersihkan dinding tangki minyak',
    related: ['confined-space-entry', 'gas-tester', 'h2s-safety'],
    intro: 'Pembersihan endapan lumpur minyak (<em>Tank Sludge Cleaning</em>) di dalam tangki timbun berdiameter 60 meter menggabungkan bahaya ruang terbatas, uap hidrokarbon mudah meledak, dan semburan air pemotong water jet 1.000 bar.',
    hazards: ['Semburan nozel water jet mengenai tubuh yang dapat memotong daging dan tulang manusia seketika.'],
    regulations: ['Permenaker No. 11 Tahun 2023.', 'Standar API 2015 (Requirements for Safe Entry and Cleaning of Petroleum Storage Tanks).'],
    modules: [{ name: 'Modul 1: Prosedur Pengosongan, Gas Freeing & Water Jetting', theory: 'Penyedotan vakum lumpur minyak, ventilasi blower eductor udara, APD pelindung water jetting Dyna-Armor.', practical: 'Praktek penggunaan nozel water jetting dengan saklar Deadman Handle.' }],
    equipment: ['High Pressure Water Jetting Protection Suit (1000 Bar Rated).', 'Air-Driven Exhaust Eductor Fan & Gas Detector.'],
    participants: ['Tank Cleaning Supervisor, Operator Hydrojetting, dan Rescue Lead.'],
    tableData: { headers: ['Tahapan Tank Cleaning', 'Bahaya Kritis Utama', 'SOP Pengendalian Mutlak'], rows: [['Penyedotan Lumpur (Sludge)', 'Uap mudah meledak & Gas H2S', 'Gunakan pompa diafragma anti-spark explosion-proof'], ['Penyemprotan Water Jetting', 'Luka potong semburan air 1000 bar', 'Wajib APD Kevlar/Dyneema Armor + Deadman Switch'], ['Inspeksi Akhir Tangki', 'Kekurangan oksigen', 'Continuous gas monitoring & Entry Attendant di luar']] },
    links: [{ href: '/kategori-pelatihan/confined-space-entry/', label: 'Pelatihan Confined Space' }],
    faqs: [{ q: 'Apa bahaya mekanis terbesar pada alat High Pressure Water Jetting?', a: 'Tekanan air di atas 500 bar mampu menembus sepatu boot kulit biasa dan menginjeksi air kotor bercampur bakteri jauh ke dalam jaringan tubuh manusia yang memerlukan tindakan amputasi darurat.' }]
  },

  // 91. K3 Penggalian & Peledakan Blasting Tambang
  {
    key: 'k3-penggalian-peledakan-blasting-tambang',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/k3-penggalian-peledakan-blasting-tambang/',
    title: 'Pelatihan K3 Peledakan Tambang & Gudang Handak (Blasting Safety)',
    h1: 'Pelatihan Keselamatan Peledakan Tambang (Blasting Safety): Pengelolaan Bahan Peledak ANFO, Penanganan Misfire, dan Jarak Aman Radius',
    meta: 'In-house training K3 peledakan tambang minerba: sertifikasi Juru Ledak Kelas II/I, izin gudang bahan peledak (Handak), detektor petir pra-blasting, penanganan lubang gagal ledak (Misfire), dan flyrock control.',
    imgAlt: 'Juru Ledak tambang memegang blasting machine memeriksa kabel detonator non-elektrik di area pola peledakan batubara',
    related: ['pertambangan-batubara-dan-nikel', 'pengawas-operasional-pertama-pop'],
    intro: 'Pekerjaan peledakan batuan penutup (<em>Overburden Blasting</em>) di pertambangan menggunakan ribuan kilogram bahan peledak ANFO dan emulsi di bawah regulasi ketat <strong>Kementerian ESDM &amp; Kepolisian RI</strong>.',
    hazards: ['Batu terbang liar (Flyrock) mengenai alat berat di luar batas radius aman atau lubang ledak gagal meledak (Misfire).'],
    regulations: ['Kepmen ESDM No. 1827 K/30/MEM/2018 Lampiran II.', 'Perpol No. 1 Tahun 2023 tentang Perizinan Handak.'],
    modules: [{ name: 'Modul 1: Manajemen Gudang Handak & Prosedur Peledakan Aman', theory: 'Persyaratan bunker handak, sirine peringatan 3 kali, radius evakuasi alat 500m dan manusia 1.000m, penanganan misfire.', practical: 'Simulasi pembersihan area peledakan dan pengecekan lubang pasca-ledak.' }],
    equipment: ['Blasting Machine Ohmmeter Terkalibrasi & Early Warning Lightning Detector.'],
    participants: ['Juru Ledak Tambang, Blasting Supervisor, KTT, dan Petugas Gudang Handak.'],
    tableData: { headers: ['Sinyal Sirine Peledakan', 'Arti Peringatan Lapangan', 'Tindakan Wajib Seluruh Personil'], rows: [['Sirine 1 (Panjang 1 Menit)', 'Pembersihan Area / Clearing', 'Seluruh armada mundur ke batas aman >500 meter'], ['Sirine 2 (Pendek Putus-putus)', 'Pengisian Muatan & Hitung Mundur', 'Area steril 100%, Juru Ledak siap menekan tombol'], ['Sirine 3 (Panjang Tunggal)', 'Area Dinyatakan AMAN (All Clear)', 'Juru Ledak selesai memeriksa nihil misfire']] },
    links: [{ href: '/industri/pertambangan-batubara-dan-nikel/', label: 'K3 Pertambangan' }],
    faqs: [{ q: 'Apa yang wajib dilakukan jika terjadi lubang gagal ledak (Misfire)?', a: 'Area dilarang didekati minimal selama 30 menit. Juru Ledak wajib memimpin penanganan khusus (misalnya penyemprotan air untuk melarutkan ANFO atau memasang primer pemicu baru) tanpa mengebor ulang di lubang yang sama.' }]
  },

  // 92. K3 Drone Inspeksi Industri
  {
    key: 'k3-drone-inspeksi-industri',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/k3-drone-inspeksi-industri/',
    title: 'Pelatihan K3 Pengoperasian Drone Inspeksi Industri (Industrial UAV)',
    h1: 'Pelatihan Keselamatan Drone Inspeksi: Pengoperasian UAV di Area Kilang Migas, Flare Stack, Tangki, dan Lisensi Pilot SIDOPI',
    meta: 'Pelatihan K3 pengoperasian drone inspeksi industri: regulasi ruang udara Kemenhub SIDOPI, inspeksi termal flare stack aktif, mitigasi interferensi magnetik pabrik, dan emergency return to home (RTH).',
    imgAlt: 'Pilot drone bersertifikasi mengenakan rompi keselamatan mengendalikan drone inspeksi industri berkamera termal di dekat menara flare stack',
    related: ['safety-inspector', 'minyak-dan-gas-bumi-offshore'],
    intro: 'Penggunaan Unmanned Aerial Vehicle (Drone) untuk inspeksi cerobong flare stack panas, menara transmisi, dan tangki mengeliminasi risiko manusia bekerja di ketinggian ekstrem, namun memerlukan pengendalian keselamatan ruang udara industri.',
    hazards: ['Drone jatuh menabrak pipa gas aktif akibat interferensi gelombang elektromagnetik pabrik.'],
    regulations: ['Permenhub No. PM 63 Tahun 2021.', 'Standar SIDOPI DKPPU Kemenhub.'],
    modules: [{ name: 'Modul 1: Regulasi Ruang Udara & Prosedur Penerbangan Pabrik', theory: 'Izin terbang NOTAM, zona geofencing fasilitas vital, kalibrasi kompas anti-interferensi, failsafe RTH.', practical: 'Praktek inspeksi termal dinding tangki menggunakan drone.' }],
    equipment: ['Industrial Thermal Inspection Drone & Airspace Anemometer.'],
    participants: ['Pilot Drone Industri, NDT Inspector, dan HSE Asset Monitoring Lead.'],
    tableData: { headers: ['Objek Inspeksi Drone', 'Keuntungan K3 Nyata', 'Bahaya yang Wajib Dikendalikan'], rows: [['Flare Stack Kilang Aktif', 'Nihil risiko panas/jatuh bagi manusia', 'Turbulensi udara panas gas buang flare'], ['Dinding Tangki Timbun', 'Menggantikan perancah setinggi 30 meter', 'Interferensi magnetik pelat baja tangki']] },
    links: [{ href: '/peran-jabatan/safety-inspector/', label: 'Peran Safety Inspector' }],
    faqs: [{ q: 'Apakah pilot drone industri wajib memiliki sertifikat resmi?', a: 'Ya, pilot drone wajib memiliki sertifikat remote pilot resmi dari Kementerian Perhubungan (DKPPU) melalui portal SIDOPI dan izin terbang dari pemilik fasilitas.' }]
  },

  // 93. K3 Pekerjaan Aspal & Paving Jalan
  {
    key: 'k3-pekerjaan-aspal-dan-paving-jalan',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/k3-pekerjaan-aspal-dan-paving-jalan/',
    title: 'Pelatihan K3 Pekerjaan Pengaspalan & Konstruksi Jalan Raya',
    h1: 'Pelatihan Keselamatan Pengaspalan Jalan: Uap Panas Aspal Hotmix 160°C, Tandem Roller, Asphalt Finisher, dan Traffic Management Jalan Raya',
    meta: 'In-house training K3 pekerjaan jalan & pengaspalan: manajemen lalu lintas jalan aktif (Traffic Management Plan), bahaya luka bakar aspal cair 160°C, keselamatan tandem roller & pneumatic tire roller, dan APD tahan panas.',
    imgAlt: 'Pekerja pengaspalan jalan mengenakan sepatu boot sol tebal dan rompi keselamatan mengawasi pergerakan mesin asphalt finisher menggelar hotmix',
    related: ['konstruksi-gedung-dan-infrastruktur', 'petugas-k3-konstruksi'],
    intro: 'Pekerjaan pengaspalan jalan raya (Hotmix Paving) berlangsung di tengah arus lalu lintas kendaraan umum yang padat dengan material aspal cair mendidih bersuhu 160°C dan alat pemadat berat.',
    hazards: ['Pekerja tertabrak kendaraan umum yang menerobos zona proyek jalan atau tergilas roda tandem roller saat mundur.'],
    regulations: ['Permen PUPR No. 10 Tahun 2021.', 'Permen Perhubungan No. PM 13 Tahun 2014.'],
    modules: [{ name: 'Modul 1: Traffic Management Plan (TMP) & Zonasi Rambu Jalan', theory: 'Pemasangan Cone reflektif, papan peringatan 500m sebelum proyek, Flagman bersertifikat, APD sol tahan panas.', practical: 'Praktek penataan zona pengalihan lalu lintas jalan raya.' }],
    equipment: ['Traffic Cone Heavy Duty, LED Batton Light, dan Rompi Fluorescent Class 3.'],
    participants: ['Pelaksana Jalan Kontraktor, Flagman, Operator Tandem Roller, dan Safety Officer Proyek Jalan.'],
    tableData: { headers: ['Zona Keselamatan Proyek Jalan', 'Panjang Zona Standar', 'Peralatan Rambu Wajib'], rows: [['Zona Peringatan Dini (Advance Warning)', '500 – 1.000 Meter Sebelum Proyek', 'Rambu Peringatan "Hati-Hati Ada Pekerjaan Jalan"'], ['Zona Transisi & Tapering', '50 – 100 Meter Pembelokan Arus', 'Jajaran Traffic Cone rapat + Lampu Rotary LED'], ['Zona Kerja Aktif (Work Area)', 'Sepanjang Area Gelar Aspal', 'Pagar pembatas movable barrier beton/plastik']] },
    links: [{ href: '/kategori-pelatihan/petugas-k3-konstruksi/', label: 'Pelatihan Petugas K3 Konstruksi' }],
    faqs: [{ q: 'Apa tugas utama Flagman dalam proyek pengaspalan jalan raya?', a: 'Flagman bertugas mengendalikan laju kecepatan kendaraan umum menggunakan bendera merah dan tongkat lampu LED di titik awal proyek untuk melindungi para pekerja aspal di zona depan.' }]
  },

  // 94. K3 Pemasangan Tiang Pancang Piling Rig
  {
    key: 'k3-pemasangan-tiang-pancang-piling-rig',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/k3-pemasangan-tiang-pancang-piling-rig/',
    title: 'Pelatihan K3 Pemancangan Pondasi & Piling Rig (Pondasi Dalam)',
    h1: 'Pelatihan Keselamatan Tiang Pancang (Piling Safety): Stabilitas Mesin Hydraulic Static Pile Driver, Bored Pile, dan Drop Hammer',
    meta: 'In-house training K3 pekerjaan pondasi dalam: stabilitas alat pancang tiang beton (Piling Rig Tipping), bahaya sling putus saat pitching tiang, kebisingan diesel hammer, dan evaluasi daya dukung tanah.',
    imgAlt: 'Mesin Hydraulic Static Pile Driver menekan tiang pancang spun pile beton masuk ke dalam tanah pondasi proyek',
    related: ['konstruksi-gedung-dan-infrastruktur', 'keselamatan-alat-berat'],
    intro: 'Pekerjaan pondasi tiang pancang menggunakan mesin pemancang berbobot ratusan ton (<em>Piling Rig, HSPD, Diesel Hammer</em>) yang sangat rentan terguling jika tanah proyek lembek dan tidak stabil.',
    hazards: ['Alat pemancang tiang pancang roboh (Rig Overturning) menimpa jalan raya atau bangunan sekitar.'],
    regulations: ['Permenaker No. 01/1980.', 'Permenaker No. 8/2020.'],
    modules: [{ name: 'Modul 1: Ground Bearing Capacity & Rig Stability', theory: 'Pemasangan plat baja landasan (Steel Mats), sudut kemiringan rig maksimum, pengikatan tali sling angkat tiang beton (Pitching Wire Rope).', practical: 'Audit daya dukung tanah pondasi alat pancang.' }],
    equipment: ['Steel Ground Mat Plates & Inclinometer Rig Digital.'],
    participants: ['Operator Piling Rig, Pelaksana Sipil Pondasi, dan HSE Proyek Gedung.'],
    tableData: { headers: ['Metode Pemancangan', 'Potensi Bahaya Kritis', 'Solusi Pengendalian Wajib'], rows: [['Hydraulic Static Pile Driver (HSPD)', 'Mesin amblas terguling karena beban 300 Ton', 'Wajib landasan pelat baja tebal 20 mm'], ['Diesel Hammer Drop', 'Kebisingan >110 dB & getaran merusak bangunan', 'Earmuff proteksi + Pemantauan seismograf'], ['Bored Pile Mesin Putar', 'Pekerja jatuh ke lubang bor sedalam 30m', 'Tutup casing baja + Barikade kokoh sekeliling lubang']] },
    links: [{ href: '/kategori-pelatihan/keselamatan-alat-berat/', label: 'Pelatihan Keselamatan Alat Berat' }],
    faqs: [{ q: 'Mengapa steel matting wajib dipasang di bawah mesin pemancang tiang pancang?', a: 'Untuk menyebarkan beban titik raksasa mesin pancang ke area tanah yang lebih luas sehingga mencegah tanah lunak amblas yang menyebabkan mesin pancang setinggi 25 meter tumbang.' }]
  },

  // 95. K3 Pemotongan Plasma & Laser Cutting
  {
    key: 'k3-pemotongan-plasma-dan-laser-cutting',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/k3-pemotongan-plasma-dan-laser-cutting/',
    title: 'Pelatihan K3 Pemotongan Logam Plasma & Fiber Laser Cutting',
    h1: 'Pelatihan Keselamatan Mesin Plasma & Laser Cutting: Radiasi Optik Laser Class 4, Gas Asist Oksigen/Nitrogen, dan Fume Extraction',
    meta: 'In-house training K3 mesin pemotong laser CNC & plasma cutting industri: proteksi radiasi laser Class 4 (Kacamata OD 6+), bahaya gas bertekanan tinggi assist gas, pembuangan asap logam berat, dan interlock enclosure.',
    imgAlt: 'Kepala nozel mesin fiber laser cutting CNC memancarkan berkas sinar laser memotong pelat baja dengan percikan api tertahan di dalam ruang kaca pelindung',
    related: ['machine-guarding', 'welding-safety'],
    intro: 'Mesin pemotong pelat logam presisi tinggi (<em>CNC Fiber Laser &amp; Plasma Arc Cutting</em>) menggunakan radiasi sinar laser terfokus berkekuatan ribuan Watt (Laser Class 4) yang dapat membutakan mata seketika bahkan dari pantulan berkas sinar.',
    hazards: ['Kebutaan permanen retina mata akibat radiasi sinar laser tak tampak atau kebakaran akibat gas oksigen assist bertekanan 20 bar.'],
    regulations: ['Standar ANSI Z136.1 (Safe Use of Lasers).', 'Permenaker No. 38/2016.'],
    modules: [{ name: 'Modul 1: Laser Physics & Protective Enclosure Standards', theory: 'Panjang gelombang fiber laser 1064 nm, Optical Density (OD) kacamata pelindung, interlock pintu mesin enclosure, sistem filter debu asap fume extractor.', practical: 'Pemeriksaan fungsi sensor interlock kaca pelindung laser CNC.' }],
    equipment: ['Laser Safety Goggles OD 7+ @ 1064nm & Fume Extraction Filter Tester.'],
    participants: ['Operator CNC Laser/Plasma, Maintenance Workshop, dan Safety Officer Pabrikasi.'],
    tableData: { headers: ['Teknologi Pemotongan', 'Bahaya Fisik Utama', 'Proteksi Mutlak Wajib'], rows: [['Fiber Laser Cutting (Class 4)', 'Radiasi berkas sinar laser tak tampak 1064 nm', 'Enclosure tertutup penuh + Kacamata Laser OD 6+'], ['CNC Plasma Cutting', 'Radiasi cahaya UV ekstrem & Suhu 20.000°C', 'Kacamata Las Shade 10-12 + Meja Air Water Table'], ['Gas Asist Oksigen Tekanan Tinggi', 'Ledakan kontak minyak / oksigen murni', 'Pipa stainless steel bebas gemuk (Degreased)']] },
    links: [{ href: '/kategori-pelatihan/machine-guarding/', label: 'Pelatihan Machine Guarding' }],
    faqs: [{ q: 'Mengapa kacamata hitam biasa tidak boleh dipakai untuk melihat proses laser cutting?', a: 'Karena kacamata hitam biasa tidak memiliki Optical Density (OD) tersertifikasi untuk memblokir panjang gelombang sinar laser spesifik, sehingga radiasi laser tetap menembus dan merusak retina mata.' }]
  },

  // 96. K3 Inspeksi Penyalur Petir
  {
    key: 'k3-inspeksi-instalasi-penyalur-petir',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/k3-inspeksi-instalasi-penyalur-petir/',
    title: 'Pelatihan Riksa Uji & K3 Instalasi Penyalur Petir Permenaker No. 02/1989',
    h1: 'Pelatihan Inspeksi Penyalur Petir: Pengukuran Tahanan Pembumian Earth Tester (<5 Ohm), Radius Proteksi ESE, dan Sertifikasi Disnaker',
    meta: 'Pelatihan teknis riksa uji penyalur petir gedung industri: Permenaker No. 02/1989 & Permenaker No. 31/2015, uji resistansi tanah Earth Ground Tester, jenis konvensional vs elektrostatis, dan penerbitan izin pemakaian.',
    imgAlt: 'Inspector K3 menancapkan pasak elektroda uji tanah dan mengukur nilai resistansi grounding penyalur petir dengan Earth Tester Digital',
    related: ['grounding-dan-lightning-protection', 'k3-listrik', 'safety-inspector'],
    intro: 'Instalasi penyalur petir gedung bertingkat dan tangki minyak wajib diperiksa dan diuji tahanan pembumiannya (grounding resistance) <strong>sekurang-kurangnya 1 kali setiap 2 tahun</strong> sesuai <strong>Permenaker No. 02/1989</strong>.',
    hazards: ['Sambaran petir menghancurkan peralatan elektronik pabrik atau membakar tangki minyak karena nilai tahanan tanah >5 Ohm.'],
    regulations: ['Permenaker No. Per.02/MEN/1989.', 'Permenaker No. 31 Tahun 2015.'],
    modules: [{ name: 'Modul 1: Metodologi Uji Tahanan Pembumian 3 Titik (Fall-of-Potential)', theory: 'Metode 3 kutub pasak uji (E, P, C), syarat tahanan tanah < 5 Ohm (< 1 Ohm untuk migas), inspeksi fisik klem kabel down conductor.', practical: 'Pengukuran grounding tanah instalasi petir gedung.' }],
    equipment: ['Digital Earth Ground Tester 3-Pole & Clamp-On Ground Tester.'],
    participants: ['Electrical Inspector, Facility Maintenance, dan Konsultan Riksa Uji PJK3.'],
    tableData: { headers: ['Jenis Bangunan', 'Standar Nilai Tahanan Tanah Maksimal', 'Periode Riksa Uji Legal'], rows: [['Gedung Perkantoran / Pabrik Umum', 'Maksimal 5.0 Ohm (Permenaker 02/1989)', 'Wajib Uji 1 Kali Setiap 2 Tahun'], ['Tangki Minyak / Gas / Bahan Peledak', 'Maksimal 1.0 s.d 2.0 Ohm (Standar Migas)', 'Wajib Uji 1 Kali Setiap 1 Tahun'], ['Pusat Server / Data Center', 'Maksimal 1.0 Ohm (Sensitif IT Equipment)', 'Wajib Uji Berkala Setiap 1 Tahun']] },
    links: [{ href: '/kategori-pelatihan/grounding-dan-lightning-protection/', label: 'Pelatihan Grounding & Petir' }],
    faqs: [{ q: 'Berapa nilai tahanan tanah (grounding resistance) maksimal yang diizinkan untuk penyalur petir di Indonesia?', a: 'Berdasarkan Permenaker No. 02 Tahun 1989, nilai tahanan pembumian seluruh instalasi penyalur petir tidak boleh melebihi 5 (lima) Ohm.' }]
  },

  // 97. K3 Pekerjaan Semen Cor Ready Mix
  {
    key: 'k3-pekerjaan-semen-cor-ready-mix',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/k3-pekerjaan-semen-cor-ready-mix/',
    title: 'Pelatihan K3 Pekerjaan Pengecoran Semen Ready Mix & Concrete Pump',
    h1: 'Pelatihan Keselamatan Pengecoran Beton: Pengoperasian Concrete Pump Truck, Pipa Boom Bertekanan, dan Luka Bakar Kimia Semen Basah',
    meta: 'In-house training K3 pengecoran beton ready mix: kestabilan outrigger concrete pump truck, bahaya pipa boom meledak tersumbat, kacamata anti percikan cairan semen pH 13, dan keselamatan bekisting.',
    imgAlt: 'Truk concrete pump membentangkan belalai boom pipa cor beton di atas pelat lantai proyek dengan outrigger terpasang kokoh',
    related: ['konstruksi-gedung-dan-infrastruktur', 'petugas-k3-konstruksi'],
    intro: 'Pengecoran beton ready-mix skala besar melibatkan pompa beton bertekanan hidrolik tinggi (<em>Concrete Pump Boom Truck</em>), truk mixer molen 30 ton, dan cairan semen basah yang sangat kaustik/basa (pH 12-13).',
    hazards: ['Pipa concrete pump tersumbat meledak dan menyemburkan batu split beton atau cairan semen mengenai mata hingga buta.'],
    regulations: ['Permen PUPR No. 10 Tahun 2021.', 'Permenaker No. 01/1980.'],
    modules: [{ name: 'Modul 1: Concrete Pump Stability & Line Clearing Safety', theory: 'Bentangan outrigger 100%, prosedur aman pembersihan pipa (Sponge Ball Catching), APD tahan semen (Boots PVC, Goggles).', practical: 'Audit kesiapan outrigger dan jalur pipa cor beton.' }],
    equipment: ['Concrete Washout Catch System & pH Meter Cairan Semen.'],
    participants: ['Operator Concrete Pump, Pelaksana Cor Beton, dan Safety Officer Proyek.'],
    tableData: { headers: ['Peralatan Pengecoran', 'Potensi Bahaya Kritis', 'Pengendalian Keselamatan Wajib'], rows: [['Concrete Pump Boom Truck', 'Truk terjungkal akibat tanah outrigger amblas', 'Pasang bantalan kayu outrigger pad tebal'], ['Ujung Selang Cor (Rubber Hose)', 'Mencambuk liar saat udara terjebak dalam pipa', 'Pegang selang dengan 2 orang, dilarang menekuk'], ['Cairan Semen Basah', 'Luka bakar kimia alkali (pH 13) pada kulit', 'Gunakan sarung tangan karet panjang + Kacamata Google tertutup']] },
    links: [{ href: '/kategori-pelatihan/petugas-k3-konstruksi/', label: 'Pelatihan Petugas K3 Konstruksi' }],
    faqs: [{ q: 'Mengapa cairan semen basah dapat membakar kulit pekerja?', a: 'Karena reaksi hidrasi semen menghasilkan Kalsium Hidroksida yang bersifat sangat basa (alkali kuat pH 12-13) yang dapat mengikis lapisan kulit dan menimbulkan luka bakar kimia parah jika tidak segera dibilas air bersih.' }]
  },

  // 98. K3 Ruang Server & Data Center
  {
    key: 'k3-ruang-server-dan-data-center',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/k3-ruang-server-dan-data-center/',
    title: 'Pelatihan K3 Ruang Server & Data Center (Clean Agent Fire Suppression)',
    h1: 'Pelatihan Keselamatan Data Center: Sistem Pemadam Gas Total Flooding (FM-200/Novec 1230), Baterai UPS, dan Evakuasi Ruang Tertutup',
    meta: 'In-house training K3 ruang server & data center: keselamatan sistem pemadam gas bersih (FM-200 / Novec 1230), penundaan discharge hold time, bahaya gas beracun baterai UPS, dan LOTO ruang kelistrikan server.',
    imgAlt: 'Teknisi data center memeriksa silinder tabung gas pemadam FM-200 dan panel kontrol pelepas gas otomatis',
    related: ['k3-listrik', 'fire-fighting-dasar', 'simulasi-evakuasi-gedung'],
    intro: 'Fasilitas <strong>Data Center</strong> dan Ruang Server IT menyimpan ribuan server aktif dengan proteksi pemadam gas bersih total flooding (FM-200, Novec 1230, Inergen) yang memerlukan protokol evakuasi ketat sebelum gas disemprotkan.',
    hazards: ['Pekerja terjebak di ruang server saat gas pemadam disemprotkan atau kebocoran gas asam dari bank baterai UPS.'],
    regulations: ['Standar NFPA 2001 (Clean Agent Fire Extinguishing Systems).', 'Standar NFPA 75 & 76.'],
    modules: [{ name: 'Modul 1: Total Flooding Clean Agent Suppression System', theory: 'Waktu pra-pelepasan gas (Pre-discharge alarm 30 detik), tombol Abort Switch manual, pintu kedap udara (Room Integrity Door Fan Test).', practical: 'Simulasi penggunaan tombol Abort Switch penunda gas dan evakuasi ruang server.' }],
    equipment: ['Clean Agent Release Abort Switch & Hydrogen Gas Detector UPS.'],
    participants: ['Data Center Facility Engineer, IT Infrastructure Lead, dan Building Safety Officer.'],
    tableData: { headers: ['Sistem Proteksi Data Center', 'Mekanisme Pemadaman', 'Waktu Evakuasi Maksimum'], rows: [['Sistem Gas FM-200 / Novec 1230', 'Menyerap panas api tanpa merusak server elektronik', 'Wajib Keluar Ruangan Dalam Waktu 30 Detik'], ['Bank Baterai UPS Ruangan', 'Sensor Gas Hidrogen (H2) pelepasan charging', 'Ventilasi otomatis menyala jika H2 > 1%'], ['Tombol Darurat Abort Switch', 'Menunda pelepasan gas selama tombol ditekan', 'Digunakan jika ada personil masih terjebak di dalam']] },
    links: [{ href: '/kategori-pelatihan/k3-listrik/', label: 'Pelatihan K3 Listrik' }],
    faqs: [{ q: 'Apa fungsi tombol Abort Switch di dalam ruang server data center?', a: 'Abort switch adalah tombol tekan darurat manual yang dapat ditekan dan ditahan oleh personil yang masih berada di dalam ruangan untuk menunda semburan gas pemadam otomatis agar mereka memiliki waktu melarikan diri keluar pintu.' }]
  },

  // 99. K3 Water Rescue
  {
    key: 'k3-penanganan-korban-tenggelam-water-rescue',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/k3-penanganan-korban-tenggelam-water-rescue/',
    title: 'Pelatihan Water Rescue: Penyelamatan Korban Tenggelam di Kolam & Dermaga',
    h1: 'Pelatihan Water Rescue Industri: Teknik Pertolongan Korban Tenggelam, Resusitasi Korban Air (Drowning CPR), dan Perlengkapan Pelampung',
    meta: 'In-house training K3 penyelamatan air (Water Rescue): teknik Reach-Throw-Row-Go, lempar tali penyelamat (Throw Bag), evakuasi korban kolam IPAL/dermaga, dan resusitasi henti napas korban tenggelam.',
    imgAlt: 'Tim rescue keselamatan air melemparkan throw bag tali penyelamat kepada korban di perairan kolam dermaga',
    related: ['petugas-p3k-di-tempat-kerja', 'emergency-response-team'],
    intro: 'Fasilitas pabrik dengan kolam pengolahan limbah dalam, dermaga jetty, dan bendungan PLTA memerlukan personil tanggap darurat yang terlatih melakukan penyelamatan korban jatuh ke air tanpa membahayakan penolong.',
    hazards: ['Penolong ikut tenggelam karena ditarik oleh korban yang panik di dalam air.'],
    regulations: ['UU No. 1 Tahun 1970.', 'Standar ILS (International Life Saving Federation).'],
    modules: [{ name: 'Modul 1: Hierarki Penyelamatan Air (Reach, Throw, Row, Go)', theory: 'Penggunaan galah (Reach), lemparan tali berbeban (Throw Bag), perahu karet (Row), berenang menolong (Go with Tow Aid), Drowning CPR.', practical: 'Praktek melempar tali penyelamat Throw Bag target akurat jarak 15 meter.' }],
    equipment: ['Water Rescue Throw Bag 20 Meter, Ring Buoy SOLAS, dan Spinal Board Terapung.'],
    participants: ['Tim Tanggap Darurat (ERT), Operator Jetty, Petugas Kolam IPAL, dan Lifeguard Perusahaan.'],
    tableData: { headers: ['Hierarki Tindakan Water Rescue', 'Metode Pelaksanaan', 'Tingkat Risiko Bagi Penolong'], rows: [['1. REACH (Menjangkau)', 'Ulurkan galah, pipa, atau tangga dari tepi kolam', 'RISIKO PALING RENDAH (Penolong tetap di darat)'], ['2. THROW (Melempar)', 'Lemparkan Throw Bag tali atau pelampung ban ke korban', 'RISIKO RENDAH (Penolong tetap di darat)'], ['3. ROW (Mendayung)', 'Gunakan perahu karet mendekati posisi korban', 'RISIKO SEDANG'], ['4. GO (Berenang Masuk Air)', 'Langkah terakhir masuk air dengan alat apung penolong', 'RISIKO TINGGI (Hanya dilakukan rescue bersertifikat)']] },
    links: [{ href: '/kategori-pelatihan/petugas-p3k-di-tempat-kerja/', label: 'Pelatihan Petugas P3K' }],
    faqs: [{ q: 'Mengapa resusitasi (CPR) pada korban tenggelam dimulai dengan 5 kali bantuan napas buatan terlebih dahulu?', a: 'Karena henti jantung pada korban tenggelam disebabkan oleh hipoksia akut (kekurangan oksigen di paru-paru), sehingga pemberian ventilasi napas buatan awal sangat krusial untuk mengembalikan saturasi oksigen darah.' }]
  },

  // 100. Investigasi Kebakaran Fire Investigation
  {
    key: 'investigasi-kebakaran-fire-investigation',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/investigasi-kebakaran-fire-investigation/',
    title: 'Pelatihan Investigasi Kebakaran Industri Berdasarkan Standar NFPA 921',
    h1: 'Pelatihan Investigasi Kebakaran Pabrik (Fire Investigation): Penentuan Titik Awal Api (Origin & Cause), Pola Bakar V-Pattern, dan Bukti Forensik',
    meta: 'Pelatihan teknis investigasi penyebab kebakaran industri standar NFPA 921 / NFPA 1033: rekonstruksi pola bakar (burn patterns), analisis busur listrik korsleting (arcing beads), penulisan laporan forensik kebakaran, dan klaim asuransi.',
    imgAlt: 'Investigator kebakaran mengenakan APD forensik memeriksa pola jelaga dan lelehan kabel listrik di titik awal terjadinya api',
    related: ['investigasi-kecelakaan-kerja', 'ahli-k3-kebakaran', 'fire-risk-assessment'],
    intro: 'Investigasi kebakaran industri modern menggunakan metodologi ilmiah berbasis <strong>Standar NFPA 921 (Guide for Fire and Explosion Investigations)</strong> guna mengungkap secara akurat titik mula api (Point of Origin) dan penyebab pasti kebakaran.',
    hazards: ['Kerusakan bukti fisik di TKP kebakaran sebelum tim investigator forensik selesai mendokumentasikan pola bakar.'],
    regulations: ['Standar NFPA 921 & NFPA 1033.', 'UU No. 1 Tahun 1970.'],
    modules: [{ name: 'Modul 1: Metodologi Ilmiah Rekonstruksi Kebakaran NFPA 921', theory: 'Pola bakar V-Pattern, kedalaman hangus kayu (Char Depth), analisis sirkuit listrik (Cause vs Victim Arcing), pengumpulan bukti residu cairan pemicu.', practical: 'Praktek analisis foto pola bakar dan penentuan titik awal mula api.' }],
    equipment: ['Fire Investigation Evidence Collection Kit & UV Forensic Light.'],
    participants: ['Fire Safety Manager, Investigator K3 Korporat, Asuransi Loss Adjuster, dan Security Lead.'],
    tableData: { headers: ['Tanda Forensik Kebakaran (NFPA 921)', 'Arti Fisik Bukti Lapangan', 'Interpretasi Penyebab'], rows: [['Pola V Terbalik di Dinding (V-Pattern)', 'Api merambat naik dan menyebar ke samping', 'Dasar titik kerucut V adalah Titik Awal Api (Point of Origin)'], ['Arc Bead Bulat pada Kawat Tembaga', 'Hubungan pendek listrik saat isolasi terbakar', 'Membedakan korsleting penyebab vs korsleting akibat kebakaran'], ['Garis Batas Hangus Tajam di Lantai', 'Cairan mudah terbakar tumpah di lantai', 'Indikasi penggunaan akseleran / bahan bakar cair']] },
    links: [{ href: '/kategori-pelatihan/investigasi-kecelakaan-kerja/', label: 'Pelatihan Investigasi Kecelakaan' }],
    faqs: [{ q: 'Bagaimana cara menentukan apakah korsleting listrik adalah PENYEBAB kebakaran atau AKIBAT dari kebakaran?', a: 'Melalui analisis metalurgi mikroskopis pada ujung lelehan tembaga (Arc Bead). Lelehan tembaga tajam berkristal menunjukkan korsleting primer penyebab awal, sedangkan lelehan bulat halus menunjukkan korsleting sekunder akibat kabel terbakar api luar.' }]
  }
];

console.log(`Loaded ${batch6Part3.length} records for Batch 6 Part 3.`);
