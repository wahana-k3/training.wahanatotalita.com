import { MultiArchetypeProgramDetail } from './multi-archetype-renderer';

export const batch7RegionalPagesPart2: MultiArchetypeProgramDetail[] = [
  // 16. Duri - Dumai
  {
    key: 'in-house-training-k3-duri-dumai',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-duri-dumai/',
    archetype: 'regional',
    title: 'In-House Training K3 Duri & Dumai: Hulu Migas Blok Rokan, Kilang Dumai, & Pelabuhan CPO',
    h1: 'In-House Training K3 Duri & Dumai: Pelatihan Keselamatan Steam Flood Blok Rokan, Kilang Minyak Putri Tujuh Dumai, & Ekspor CPO',
    meta: 'In-house training K3 Duri Dumai: keselamatan steam flood migas Rokan, kilang Dumai, dermaga ekspor CPO, H2S, CSMS & sertifikasi Kemnaker.',
    imgAlt: 'Pelatihan keselamatan kerja migas steam flood dan kilang minyak di Duri dan Dumai Riau',
    related: ['in-house-training', 'petrokimia-dan-gas', 'perkebunan-kelapa-sawit', 'k3-keselamatan-kerja'],
    intro: 'Poros Duri-Dumai di Riau merupakan pusat produksi minyak bumi terbesar di Indonesia (Blok Rokan) dengan teknologi injeksi uap raksasa (Steam Flood Duri) dan pelabuhan ekspor CPO terbesar di dunia di Pelabuhan Dumai. Mengoperasikan ribuan sumur minyak, jalur pipa panas bumi uap 300°C, tangki timbun CPO raksasa, dan kilang pengolahan minyak (Kilang Putri Tujuh Dumai) memerlukan standar keselamatan kerja tingkat tinggi.',
    hazards: [
      '<strong>Pelepasan Uap Bertekanan Ekstrem Steam Flood Duri:</strong> Pecahnya pipa saluran steam panas 300°C tekanan 100 bar di area wellpad.',
      '<strong>Kebocoran Gas Hidrokarbon Kilang Dumai:</strong> Api kilang (flash fire) pada unit hydrocracker distilasi minyak bumi.',
      '<strong>Asfiksia & Gas Beracun Tangki CPO Dumai Port:</strong> Uap organik dan minim oksigen saat tank cleaning dermaga ekspor CPO.',
      '<strong>Semburan Liar (Well Blowout) Pemboran Minyak:</strong> Tekanan bawah tanah yang tidak terkendali saat aktivitas workover rig.'
    ],
    regulations: [
      '<strong>PP No. 11 Tahun 1979</strong> tentang Keselamatan Kerja Pemurnian dan Pengolahan Migas.',
      '<strong>Permenaker No. 37 Tahun 2016</strong> tentang K3 Bejana Tekan dan Tangki Timbun.',
      '<strong>Pedoman PTK 007 SKK Migas</strong> tentang Standardisasi CSMS Kontraktor Migas.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Keselamatan Sistem Pipa Uap Panas Steam Flood & Bejana Tekan',
        theory: 'Prinsip perpindahan panas pipa steam bertekanan, ekspansi termal, inspeksi non-destructive testing (NDT), prosedur isolasi LOTO pipa uap.',
        practical: 'Audit kelayakan isolasi termal pipa steam dan verifikasi penguncian katup uap utama (main steam valve).'
      },
      {
        name: 'Modul 2: Izin Kerja Ruang Terbatas Tangki CPO & Kilang Minyak',
        theory: 'Bahaya residu lemak sawit membusuk (gas metana dan CO2), continuous gas monitoring, penyelamatan vertikal.',
        practical: 'Simulasi evakuasi korban dari dalam dasar tangki timbun CPO menggunakan tripod rescue kit.'
      },
      {
        name: 'Modul 3: CSMS Kontraktor Hulu Migas & Prosedur Workover Rig',
        theory: 'Kualifikasi CSMS High Risk, Job Safety Environmental Analysis (JSEA), inspeksi harian rig pemboran/workover.',
        practical: 'Penyusunan dokumen JSEA pekerjaan berisiko tinggi dan audit APD khusus area rig migas.'
      }
    ],
    equipment: [
      'Tripod Confined Space System dengan Winch Penyelamat 30 Meter.',
      'Multi-Gas Detector Sensor Khusus Uap Hidrokarbon (LEL, O2, H2S, CO).',
      'Infrared Thermal Camera Fluke untuk Pengecekan Kebocoran Pipa Steam.',
      'Pakaian Pelindung Tahan Panas Uap (Steam Protective Suit) & Safety Goggles.'
    ],
    participants: [
      'Field Superintendent Blok Rokan, Safety Officer Kilang Dumai, Supervisor Dermaga Ekspor CPO, Rig Foreman, dan Kontraktor Migas.'
    ],
    tableData: {
      headers: ['Fasilitas Duri - Dumai', 'Sektor Operasional', 'Bahaya Katastropik', 'Program In-House Prioritas'],
      rows: [
        ['Duri Steam Flood Field', 'Hulu Minyak Bumi EOR', 'Steam Pipe Rupture, Wellhead Blowout', 'K3 Pipa Bertekanan Uap & CSMS SKK Migas'],
        ['Kilang Minyak Dumai (RU II)', 'Pengolahan Minyak & Petrokimia', 'Flash Fire Hidrokarbon, Vessel Entry', 'Process Safety Management (PSM) & Gas Tester'],
        ['Terminal Ekspor CPO Pelintung', 'Penyimpanan & Pengapalan Sawit', 'Asfiksia Tangki CPO, Dermaga Fall to Sea', 'K3 Ruang Terbatas Tangki & Marine Safety'],
        ['Kawasan Industri Dumai (KID)', 'Oleokimia & Biofuel Biodiesel', 'Chemical Reaction Runway, Methanol Fire', 'K3 Bahan Kimia B3 & Fire Protection Busa']
      ]
    },
    caseStudy: 'Sebuah kontraktor penyedia jasa injeksi uap di Duri berhasil meraih penghargaan Zero Accident dari Ditjen Migas setelah seluruh tim lapangannya menyelesaikan program in-house training K3 Pipa Bertekanan dan LOTO.',
    zoneHighlights: [
      { zone: 'Duri Oil Field Steam Line', hazard: 'Pipa steam meledak akibat water hammer saat start-up boiler', control: 'SOP pembukaan valve uap bertahap & sistem steam trap otomatis' },
      { zone: 'Kilang Dumai Hydrocracker', hazard: 'Kebocoran gas hidrogen bertekanan tinggi 150 bar yang tidak berbau', control: 'Pemasangan sensor flame ultraviolet/infrared & gas leak detector' },
      { zone: 'Pelintung CPO Tank Terminal', hazard: 'Karyawan tergelincir masuk ke dalam kubah tangki CPO saat sampling', control: 'Pemasangan lifeline horizontal ganda & safety harness wajib' }
    ],
    stepByStepGuide: [
      { step: '1. Asesmen Bahaya Fasilitas Steam & Kilang', desc: 'Peninjauan jalur pipa uap panas, wellpad, atau dermaga CPO klien di Duri/Dumai.' },
      { step: '2. Kustomisasi Modul Standar SKK Migas', desc: 'Silabus diselaraskan dengan aturan PTK 007 dan Golden Safety Rules industri migas.' },
      { step: '3. Simulasi Tanggap Darurat Nyata', desc: 'Latihan penyelamatan korban ruang terbatas dan penanganan kebocoran uap.' },
      { step: '4. Evaluasi & Sertifikat Resmi', desc: 'Uji kompetensi peserta dan penerbitan sertifikat berlisensi Kemnaker/BNSP.' }
    ],
    links: [
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' },
      { href: '/industri/pertambangan-migas/', anchor: 'Panduan Keselamatan Industri Migas' },
      { href: '/kategori-pelatihan/petugas-ruang-terbatas-confined-space/', anchor: 'Pelatihan Petugas Ruang Terbatas' }
    ]
  },

  // 17. Bontang
  {
    key: 'in-house-training-k3-bontang',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-bontang/',
    archetype: 'regional',
    title: 'In-House Training K3 Bontang: Pupuk Kaltim, Badak LNG, & Petrokimia Berbahaya Tinggi',
    h1: 'In-House Training K3 Bontang: Pelatihan Keselamatan Kilang Badak LNG, Pabrik Pupuk Kaltim, & Terminal Petrokimia Gas Alam',
    meta: 'In-house training K3 Bontang: keselamatan industri LNG kriogenik, pabrik pupuk amonia, process safety management PSM & standar Kemenaker.',
    imgAlt: 'Pelatihan keselamatan kerja industri LNG dan pupuk petrokimia di Kota Bontang Kalimantan Timur',
    related: ['in-house-training', 'petrokimia-dan-gas', 'ahli-k3-umum-kemnaker', 'k3-keselamatan-kerja'],
    intro: 'Kota Bontang di Kalimantan Timur adalah salah satu pusat industri gas alam cair (LNG) dan petrokimia pupuk terbesar di dunia. Fasilitas PT Badak NGL dan PT Pupuk Kalimantan Timur (PKT) mengelola gas alam kriogenik suhu minus 160°C, tangki amonia cair ribuan ton, dan boiler uap tekanan tinggi. Mengingat sifat bahan kimia berenergi raksasa, keselamatan kerja di Bontang menuntut kepatuhan mutlak pada Process Safety Management (PSM) dan tanggap darurat tingkat lanjut.',
    hazards: [
      '<strong>Ledakan Gas Alam Cair & BLEVE LNG:</strong> Bahaya Boiling Liquid Expanding Vapor Explosion (BLEVE) dan uap gas metana di terminal LNG.',
      '<strong>Bahaya Kontak Fluida Kriogenik Minus 160°C:</strong> Radang dingin ekstrem (frostbite) seketika dan kerapuhan logam baja akibat suhu super dingin.',
      '<strong>Pelepasan Massal Gas Amonia Beracun:</strong> Kebocoran tangki simpan amonia cair atmosferik yang memicu pembentukan awan gas beracun mematikan.',
      '<strong>Bahaya Arc Flash Pembangkit Listrik Captive:</strong> Sambaran busur api listrik pada sistem switchgear distribusi tenaga pabrik kimia.'
    ],
    regulations: [
      '<strong>Kepmenaker No. 187/MEN/1999</strong> tentang Pengendalian Bahan Kimia Berbahaya di Tempat Kerja.',
      '<strong>PP No. 11 Tahun 1979</strong> tentang Keselamatan Kerja Pemurnian dan Pengolahan Migas.',
      '<strong>Permenaker No. 37 Tahun 2016</strong> tentang K3 Bejana Tekan dan Tangki Timbun.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Process Safety Management (PSM) & Mitigasi Kriogenik LNG',
        theory: 'Prinsip termodinamika LNG, fenomena rollover tangki LNG, pemeliharaan insulation cold box, zonasi bahaya gas metana.',
        practical: 'Audit kepatuhan SOP penanganan kebocoran kriogenik dan simulasi penggunaan APD tahan dingin ekstrem.'
      },
      {
        name: 'Modul 2: K3 Penanganan Toksisitas Gas Amonia Pabrik Pupuk',
        theory: 'Fisiologi paparan gas NH3, sistem tirai air (water curtain), aktivasi sistem evakuasi darurat pabrik amonia.',
        practical: 'Simulasi penyemprotan nozzle tirai air amonia dan pemakaian SCBA di area tangki penyimpanan.'
      },
      {
        name: 'Modul 3: Tanggap Darurat Kebakaran Gas Bertekanan & Flare System',
        theory: 'Karakteristik api jet gas bertekanan, penggunaan monitor gun foam dan dry chemical, prosedur shutdown flare.',
        practical: 'Praktik pengendalian kebakaran jet fire tiruan menggunakan high-capacity fire monitor.'
      }
    ],
    equipment: [
      'Cryogenic Handling Gloves & Face Shield Khusus Suhu Minus 160°C.',
      'SCBA Positive Pressure 300 Bar Khusus Tanggap Darurat Gas Beracun.',
      'Multi-Gas Detector Fixed & Portable Sensor Gas Metana (CH4) dan Amonia (NH3).',
      'High-Expansion Foam Generator & Selang Pemadam Hydrant 2.5 Inch.'
    ],
    participants: [
      'Plant General Manager, Process Safety Engineer, HSE Superintendent Badak LNG / Pupuk Kaltim, Shift Leader Produksi, Tim Fire Brigade.'
    ],
    tableData: {
      headers: ['Fasilitas Industri Bontang', 'Sektor Unggulan', 'Risiko Mayor Katastropik', 'Program Pelatihan In-House'],
      rows: [
        ['Kilang Badak LNG', 'Pencairan Gas Alam Kriogenik', 'BLEVE, Cryogenic Freeze, Flash Gas Cloud', 'Process Safety Management (PSM) & K3 Kriogenik'],
        ['Pabrik Pupuk Kaltim (PKT)', 'Pupuk Amonia & Urea', 'Amonia Toxic Release, Reaktor Tekanan Tinggi', 'K3 Bahan Kimia Toksik & Bejana Tekan'],
        ['Kawasan Industri Kaltim Industrial Estate (KIE)', 'Petrokimia Hilir & Logistik Pelabuhan', 'Chemical Spill, Jetty Loading Incident', 'CSMS Kontraktor & SIO Crane/Rigger'],
        ['Fasilitas Captive Power Plant', 'Pembangkit Listrik Turbin Gas/Uap', 'Turbine Tripping, Arc Flash Panel Listrik', 'Ahli K3 Listrik & K3 Pesawat Tenaga']
      ]
    },
    caseStudy: 'Sebuah unit pabrik amonia di Bontang berhasil mempertahankan predikat World Class Safety Performance selama 15 tahun tanpa Major Incident berkat program in-house PSM berkelanjutan dan pelatihan audit keselamatan shift harian.',
    zoneHighlights: [
      { zone: 'Badak LNG Refrigeration Train', hazard: 'Kebocoran uap refrigeran propana/metana pada kompresor gas', control: 'Pemasangan sensor gas optik laser & water deluge otomatis' },
      { zone: 'Pupuk Kaltim Urea Prilling Tower', hazard: 'Jatuh dari ketinggian menara prilling 90 meter saat perawatan', control: 'Pemasangan tangga vertikal bersafety lock & rope access certified' },
      { zone: 'Dermaga Khusus Ekspor LNG', hazard: 'Lepasnya loading arm kriogenik saat pengisian kapal tanker', control: 'Emergency Release Coupling (ERC) otomatis & fire monitor kapal' }
    ],
    stepByStepGuide: [
      { step: '1. Review Dokumen PSM & HAZOP', desc: 'Evaluasi dokumen keselamatan proses dan titik bahaya fasilitas LNG/Pupuk klien.' },
      { step: '2. Simulasi Tabletop Tanggap Darurat', desc: 'Latihan pengambilan keputusan level manajemen saat skenario Major Gas Leak.' },
      { step: '3. Drill Basah di Lapangan', desc: 'Simulasi penggunaan fire monitor dan pemakaian peralatan tanggap darurat amonia.' },
      { step: '4. Pelaporan Kepatuhan & Sertifikasi', desc: 'Penyusunan berkas sertifikasi resmi untuk memenuhi standar Kemnaker & Ditjen Migas.' }
    ],
    links: [
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' },
      { href: '/industri/pertambangan-migas/', anchor: 'Keselamatan Industri Petrokimia' },
      { href: '/kategori-pelatihan/ahli-k3-kimia/', anchor: 'Pelatihan Sertifikasi Ahli K3 Kimia' }
    ]
  },

  // 18. Banjarmasin
  {
    key: 'in-house-training-k3-banjarmasin',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-banjarmasin/',
    archetype: 'regional',
    title: 'In-House Training K3 Banjarmasin: Pelabuhan Trisakti, Tongkang Sungai Barito, & Logistik Tambang',
    h1: 'In-House Training K3 Banjarmasin: Pelatihan Keselamatan Logistik Batubara Sungai Barito, Pelabuhan Trisakti, & Industri Plywood Kalsel',
    meta: 'In-house training K3 Banjarmasin: keselamatan alur Sungai Barito, terminal batubara Trisakti, galangan kapal tongkang & sertifikasi Kemnaker.',
    imgAlt: 'Pelatihan keselamatan kerja logistik maritim batubara di Sungai Barito dan Pelabuhan Trisakti Banjarmasin',
    related: ['in-house-training', 'pertambangan-batubara', 'galangan-kapal-shipyard', 'k3-keselamatan-kerja'],
    intro: 'Banjarmasin merupakan ibu kota perdagangan dan pintu gerbang logistik pertambangan batubara Kalimantan Selatan. Alur Sungai Barito adalah jalur pengapalan batubara terpadat di Indonesia dengan ribuan armada tongkang dan tugboat yang melintas setiap bulan. Integrasi operasional pelabuhan muat batubara (Terminal Trisakti), galangan perbaikan tongkang di bantaran sungai, dan industri kayu lapis (plywood) menuntut penguasaan standar K3 maritim dan kepelabuhanan yang disiplin.',
    hazards: [
      '<strong>Kecelakaan Masuk Ruang Tertutup (Void Tank) Tongkang:</strong> Masuk kompartemen tongkang kosong tanpa pengujian gas yang memicu kematian mendadak.',
      '<strong>Kebakaran Debu Kayu & Serbuk Gergaji Plywood:</strong> Penumpukan serbuk kayu halus yang terpercik api mesin sanding pabrik triplek.',
      '<strong>Karyawan Jatuh ke Sungai Barito Arus Deras:</strong> Kehilangan keseimbangan saat melompat antarkapal atau menyandarkan tongkang.',
      '<strong>Tersangkut Tali Mooring Kapal (Snap-Back Zone):</strong> Putusnya tali tambat sintetis bertekanan tinggi yang menyabet kru dermaga.'
    ],
    regulations: [
      '<strong>Kepdirjen Binwasnaker No. 113/2006</strong> tentang Pedoman K3 Ruang Terbatas (Confined Space).',
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang Pesawat Angkat dan Pesawat Angkut.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Kepmenaker No. 186/MEN/1999</strong> tentang Penanggulangan Kebakaran di Tempat Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Izin Kerja Ruang Terbatas & Gas Testing Galangan Tongkang Barito',
        theory: 'Atmosfer berbahaya di dalam lambung kapal, pengukuran kadar O2, LEL, dan gas beracun, ventilasi mekanik.',
        practical: 'Uji gas atmosfer lambung kapal simulasi dan praktik penyelamatan vertikal dari manhole tongkang.'
      },
      {
        name: 'Modul 2: Keselamatan Mooring, Rigging, & Operasional Jetty Batubara',
        theory: 'Bahaya snap-back zone tali tambat, inspeksi sling rantai crane dermaga, SOP bongkar muat alat berat ke ponton.',
        practical: 'Pemetaan safe standing zone pada dermaga tambat dan inspeksi shackle pengangkat.'
      },
      {
        name: 'Modul 3: Proteksi Kebakaran Industri Pengolahan Kayu / Plywood',
        theory: 'Sistem pengisap debu siklon (cyclone dust collector), pencegahan spark api di mesin sander, pemeliharaan hydrant pabrik.',
        practical: 'Audit housekeeping serbuk kayu dan simulasi pemadaman kebakaran debu kayu dengan APAR & hydrant.'
      }
    ],
    equipment: [
      'Multi-Gas Detector Portabel 4-Gas (O2, LEL, CO, H2S) Terkalibrasi.',
      'Tripod Confined Space Rescue Winch 20 Meter dengan Body Harness.',
      'Auto-Inflatable Work Lifejacket Standar Kemnaker / Maritim.',
      'Thermal Camera Portabel untuk Deteksi Gesekan Panas Roller Conveyor.'
    ],
    participants: [
      'Kepala Dermaga Batubara Trisakti, Safety Officer Galangan Kapal Barito, Supervisor Pabrik Plywood, Kapten Tugboat, dan Mandor Rigging.'
    ],
    tableData: {
      headers: ['Fasilitas Industri Banjarmasin', 'Sektor Usaha', 'Potensi Bahaya Kritis', 'Program In-House Unggulan'],
      rows: [
        ['Dermaga Logistik Sungai Barito', 'Pengapalan Batubara & CPO', 'Snap-Back Tali Tambat, Orang Jatuh ke Sungai', 'Marine Safety & Safe Mooring Operations'],
        ['Galangan Tongkang Mantuil - Alalak', 'Perbaikan Lambung Kapal & Slipway', 'Asfiksia Ruang Tertutup, Ledakan Gas Cat', 'K3 Ruang Terbatas & Hot Work Permit'],
        ['Pabrik Plywood & Woodworking', 'Industri Kayu Lapis Ekspor', 'Ledakan Debu Serbuk Kayu, Terjepit Mesin Press', 'Proteksi Kebakaran Debu & Machine Guarding'],
        ['Pelabuhan Trisakti Banjarmasin', 'Terminal Peti Kemas & Curah', 'Crane Overload, Tertabrak Truk Kontainer', 'SIO Operator Forklift & Reach Stacker']
      ]
    },
    caseStudy: 'Sebuah perusahaan galangan kapal di Mantuil Banjarmasin mencatatkan 100% Zero Fatality pada pekerjaan perbaikan ruang tertutup tongkang selama 4 tahun berturut-turut setelah menerapkan sertifikasi in-house Gas Tester dan SOP Entry Permit ketat.',
    zoneHighlights: [
      { zone: 'Alur Sungai Barito Muara Tamban', hazard: 'Kru kapal terlempar ke air saat tali penarik tongkang putus mendadak', control: 'Pemberlakuan zonasi larangan berdiri di garis snap-back zone' },
      { zone: 'Galangan Kapal Slipway Alalak', hazard: 'Pekerja pingsan di dalam tangki ponton kapal akibat kekurangan oksigen', control: 'Peniupan udara blower continuous & pengukuran gas wajib sebelum entry' },
      { zone: 'Pabrik Triplek Handil Bakti', hazard: 'Percikan api pada pipa blower pembuangan serbuk kayu memicu kebakaran', control: 'Pemasangan sensor percikan api (spark detector) & sistem pemadam otomatis' }
    ],
    stepByStepGuide: [
      { step: '1. Walkthrough Fasilitas Dermaga/Pabrik', desc: 'Pengecekan alur tambat kapal, slipway perbaikan, atau instalasi cyclone pabrik klien.' },
      { step: '2. Simulasi Lapangan Ruang Terbatas', desc: 'Praktik penggunaan gas detector dan evakuasi manhole lambung kapal tongkang.' },
      { step: '3. Latihan Kedaruratan Maritim', desc: 'Simulasi pertolongan korban jatuh ke sungai dan pemakaian lifejacket otomatis.' },
      { step: '4. Pelaporan ke Disnaker Kalsel', desc: 'Penyusunan berkas pembinaan K3 resmi untuk pelaporan rutin P2K3 perusahaan.' }
    ],
    links: [
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' },
      { href: '/kategori-pelatihan/petugas-ruang-terbatas-confined-space/', anchor: 'Pelatihan Petugas Ruang Terbatas' },
      { href: '/industri/logistik-pergudangan/', anchor: 'K3 Logistik dan Kepelabuhanan' }
    ]
  },

  // 19. Lampung
  {
    key: 'in-house-training-k3-lampung',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-lampung/',
    archetype: 'regional',
    title: 'In-House Training K3 Lampung: Agroindustri Gula, Sawit, & Pelabuhan Panjang',
    h1: 'In-House Training K3 Lampung: Pelatihan Keselamatan Pabrik Gula Tebu, Agroindustri Singkong/Sawit, & Kawasan Industri Way Lunik',
    meta: 'In-house training K3 Lampung: keselamatan pabrik gula tebu, boiler biomassa bagasse, industri tapioka, pelabuhan Panjang & sertifikasi Kemnaker.',
    imgAlt: 'Pelaksanaan in-house training K3 industri gula dan agroindustri di Provinsi Lampung',
    related: ['in-house-training', 'pabrik-gula-dan-agroindustri', 'perkebunan-kelapa-sawit', 'k3-keselamatan-kerja'],
    intro: 'Provinsi Lampung merupakan lumbung agroindustri terbesar di selatan Pulau Sumatera, memimpin dalam produksi gula tebu terpadu, tepung tapioka singkong, kopi, dan minyak kelapa sawit. Fasilitas pabrik gula raksasa dengan boiler biomassa ampas tebu (bagasse), pabrik etanol, serta aktivitas ekspor di Pelabuhan Panjang dan Kawasan Industri Way Lunik menghadapi bahaya kebakaran debu organik, uap bertekanan tinggi, dan penanganan mesin giling raksasa.',
    hazards: [
      '<strong>Kebakaran & Ledakan Debu Bagasse Pabrik Gula:</strong> Penumpukan ampas tebu kering yang mudah terbakar di konveyor boiler.',
      '<strong>Ledakan Boiler Biomassa & Bejana Penguapan:</strong> Tekanan uap berlebih pada boiler pembangkit listrik dan evaporator nira gula.',
      '<strong>Terjepit Mesin Giling Tebu (Sugar Cane Mill):</strong> Anggota tubuh tergilas roll gilingan tebu bertekanan hidrolik saat pembersihan jam.',
      '<strong>Paparan Gas Asam Sianida (HCN) Pabrik Tapioka:</strong> Gas beracun alami dari pengolahan singkong konsentrasi tinggi di kolam fermentasi.'
    ],
    regulations: [
      '<strong>Permenaker No. 1 Tahun 1988</strong> tentang Operator Pesawat Uap (Boiler Biomassa).',
      '<strong>Permenaker No. 38 Tahun 2016</strong> tentang K3 Pesawat Tenaga dan Produksi.',
      '<strong>Permenaker No. 37 Tahun 2016</strong> tentang K3 Bejana Tekan dan Tangki Timbun.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Keselamatan Operasional Boiler Biomassa & Turbin Pembangkit Gula',
        theory: 'Prinsip pembakaran bagasse/ampas tebu, sistem kontrol air otomatis, pencegahan overheating pipa boiler.',
        practical: 'Inspeksi sistem pengaman katup pelepas uap (safety valve) dan uji blowdown boiler.'
      },
      {
        name: 'Modul 2: Machine Guarding & Prosedur LOTO Stasiun Gilingan & Ekstraksi',
        theory: 'Prinsip pengamanan roll gilingan, interlock guard conveyor tebu, prosedur isolasi kelistrikan & hidrolik mesin.',
        practical: 'Simulasi pemasangan gembok LOTO pada motor penggerak gilingan tebu 1.000 HP.'
      },
      {
        name: 'Modul 3: K3 Agrokimia, Gas Fermentasi, & Tanggap Darurat Kebakaran',
        theory: 'Bahaya gas HCN tapioka, pencegahan kebakaran gudang gula dan tetes tebu (molasses), penataan APAR.',
        practical: 'Praktik pengukuran gas beracun di bak fermentasi dan gelar simulasi pemadaman api bagasse.'
      }
    ],
    equipment: [
      'Single Gas Hydrogen Cyanide (HCN) & Carbon Monoxide (CO) Detector.',
      'Set Lockout/Tagout Heavy Duty untuk Mesin Gilingan & Turbin.',
      'Infrared Thermometer Gun untuk Pengecekan Suhu Bearing Mesin.',
      'Hydrant Nozzle Spray & Baju Pemadam Api Tahan Panas.'
    ],
    participants: [
      'Factory Manager Pabrik Gula, Operator Boiler Biomassa Kelas 1, Safety Officer Way Lunik, Maintenance Engineer, dan Anggota P2K3.'
    ],
    tableData: {
      headers: ['Klaster Agroindustri Lampung', 'Lokasi Pabrik', 'Bahaya Utama', 'Program Pelatihan In-House Rekomendasi'],
      rows: [
        ['Pabrik Gula Tebu Terpadu', 'Tulang Bawang & Lampung Tengah', 'Boiler Bagasse Explosion, Cane Mill Entanglement', 'K3 Pesawat Uap Biomassa & Machine Guarding'],
        ['Pabrik Tepung Tapioka & Asam Sitrat', 'Lampung Timur & Lampung Utara', 'Gas HCN Beracun, Ledakan Debu Tepung Silo', 'K3 Ruang Terbatas & Proteksi Ledakan Debu'],
        ['Kawasan Industri Way Lunik', 'Bandar Lampung', 'Chemical Spill, Forklift Accident Pergudangan', 'K3 Bahan Kimia B3 & SIO Forklift Kemnaker'],
        ['Pelabuhan Panjang Bandar Lampung', 'Terminal Curah Kering & Peti Kemas', 'Lifting Gear Defect, Conveyor Pinch Point', 'SIO Rigger & Operator Crane Pelabuhan']
      ]
    },
    caseStudy: 'Sebuah pabrik gula terkemuka di Lampung Tengah mencatatkan Zero Loss Time Injury sepanjang musim giling setelah seluruh operator boiler dan tim maintenance mengikuti program in-house training K3 Pesawat Uap dan LOTO.',
    zoneHighlights: [
      { zone: 'Pabrik Gula Cane Yard', hazard: 'Truk tebu terguling saat proses unloading menggunakan overhead hoist', control: 'Pemeriksaan sling berkala & penetapan zona larangan melintas saat tipping' },
      { zone: 'Boiler House Biomassa', hazard: 'Kebakaran tumpukan ampas tebu kering di conveyor feeding', control: 'Penyiraman misting otomatis & pembersihan debu berkala per shift' },
      { zone: 'Way Lunik Chemical Warehouse', hazard: 'Kebocoran drum asam sulfat bahan baku pengolahan industri', control: 'Penyediaan tanggul sekunder & spill kit absorbent kimia lengkap' }
    ],
    stepByStepGuide: [
      { step: '1. Asesmen Bahaya Musim Giling', desc: 'Peninjauan kesiapan boiler, turbin, dan mesin giling pabrik klien sebelum operasi.' },
      { step: '2. Kustomisasi Modul Agroindustri', desc: 'Silabus disesuaikan dengan karakteristik bahan baku organik dan kimia pengolahan.' },
      { step: '3. Simulasi Praktik di Lokasi Pabrik', desc: 'Latihan LOTO pada mesin gilingan dan penanganan kedaruratan boiler.' },
      { step: '4. Evaluasi & Sertifikat Resmi', desc: 'Uji kompetensi operator untuk penerbitan sertifikat lisensi resmi Kemnaker.' }
    ],
    links: [
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' },
      { href: '/industri/pabrik-gula-dan-agroindustri/', anchor: 'K3 Industri Gula dan Agroindustri' },
      { href: '/kategori-pelatihan/operator-boiler/', anchor: 'Pelatihan Operator Boiler Kelas I & II' }
    ]
  },

  // 20. Timika
  {
    key: 'in-house-training-k3-timika',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-timika/',
    archetype: 'regional',
    title: 'In-House Training K3 Timika: Tambang Bawah Tanah Grasberg & Logistik Pelabuhan Amamapare',
    h1: 'In-House Training K3 Timika: Pelatihan Keselamatan Tambang Bawah Tanah (Underground Mining), Logistik Amamapare, & Operasional Dataran Tinggi Papua',
    meta: 'In-house training K3 Timika: keselamatan tambang underground Grasberg, ventilasi tambang bawah tanah, rock burst, wet muck & sertifikasi SMKP.',
    imgAlt: 'Pelatihan keselamatan kerja tambang bawah tanah underground di Timika Papua Tengah',
    related: ['in-house-training', 'pertambangan-batubara', 'alat-berat-excavator-dump-truck', 'k3-keselamatan-kerja'],
    intro: 'Kabupaten Mimika (Timika) di Papua Tengah merupakan rumah bagi operasi tambang bawah tanah (underground block caving) terbesar dan paling kompleks di dunia di area Grasberg, serta fasilitas konsentrator dan pelabuhan muat di Portsite Amamapare. Beroperasi di ketinggian ribuan meter di atas permukaan laut hingga terowongan bawah tanah sepanjang ratusan kilometer menuntut standar keselamatan pertambangan (SMKP) level tertinggi untuk memitigasi bahaya runtuhan batuan (rock burst), semburan lumpur basah (wet muck spill), dan pengelolaan atmosfer tambang bawah tanah.',
    hazards: [
      '<strong>Semburan Lumpur Basah Bawah Tanah (Wet Muck Inrush):</strong> Aliran lumpur bijih basah bertekanan tinggi yang menyembur tiba-tiba dari drawpoint.',
      '<strong>Runtuhan Batuan & Gempa Tambang (Rock Burst):</strong> Pelepasan energi tegangan batuan seismik yang memicu keruntuhan atap terowongan.',
      '<strong>Defisiensi Oksigen & Gas Beracun Tambang (CO, NOx, SO2):</strong> Akumulasi gas buang armada diesel bawah tanah dan gas hasil peledakan.',
      '<strong>Kecelakaan Alat Berat Otomatis (Autonomous Loader LHD):</strong> Tabrakan loader bawah tanah tanpa awak dengan pejalan kaki di drift terowongan.'
    ],
    regulations: [
      '<strong>Kepmen ESDM No. 1827 K/30/MEM/2018</strong> tentang Kaidah Teknik Pertambangan yang Baik (Bagian Tambang Bawah Tanah).',
      '<strong>Permenaker No. 5 Tahun 2018</strong> tentang K3 Lingkungan Kerja.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Kepdirjen Binwasnaker No. 113/2006</strong> tentang K3 Ruang Terbatas.'
    ],
    modules: [
      {
        name: 'Modul 1: Manajemen Bahaya Geoteknik Tambang Bawah Tanah & Rock Burst',
        theory: 'Mekanika batuan tambang bawah tanah, sistem penyanggaan ground support (rock bolt, shotcrete, wire mesh), pemantauan seismik mikro.',
        practical: 'Inspeksi integritas ground support terowongan dan audit drawpoint berisiko wet muck.'
      },
      {
        name: 'Modul 2: Ventilasi Tambang Bawah Tanah & Pengendalian Gas Beracun',
        theory: 'Perhitungan kebutuhan udara segar armada diesel bawah tanah, pengoperasian main fan dan auxiliary fan, gas clearing blasting.',
        practical: 'Pengukuran kecepatan aliran udara menggunakan anemometer digital dan uji gas multi-point.'
      },
      {
        name: 'Modul 3: Prosedur Darurat Bawah Tanah & Self-Contained Self-Rescuer (SCSR)',
        theory: 'Pengenalan gas beracun CO saat kebakaran tambang bawah tanah, prosedur aktivasi Refuge Chamber, navigasi jalur escapeway.',
        practical: 'Praktik pemakaian alat bantu napas SCSR 60 menit dan simulasi isolasi diri di dalam Refuge Chamber.'
      }
    ],
    equipment: [
      'Self-Contained Self-Rescuer (SCSR) Kimiawi Oksigen 60 Menit.',
      'Multi-Gas Detector Portabel Khusus Tambang Dalam (O2, CO, NO, NO2, CH4).',
      'Vane Anemometer Digital untuk Pengukuran Kecepatan Ventilasi Udara Tambang.',
      'Laser Distance Meter & Alat Uji Tarik Baut Batuan (Rock Bolt Pull Tester).'
    ],
    participants: [
      'Underground Mine Superintendent, Safety Inspector Timika, Pengawas Operasional Tambang (POP/POM), Operator LHD, Tim Underground Rescue.'
    ],
    tableData: {
      headers: ['Zona Operasi Timika', 'Area Fasilitas', 'Bahaya Katastropik', 'Program In-House Unggulan'],
      rows: [
        ['Tambang Bawah Tanah Grasberg', 'Block Cave Extraction Drift', 'Rock Burst, Wet Muck Spill, Gas Peledakan', 'K3 Tambang Bawah Tanah, SCSR, & Ground Support'],
        ['Fasilitas Konsentrator Mile 74', 'Crushing & Flotation Mill', 'High Voltage Arc Flash, Reagen Kimia Sianida', 'Process Safety Flotasi & K3 Listrik Industri'],
        ['Portsite Amamapare', 'Dermaga Pengeringan & Muat Konsentrat', 'Conveyor Pinch Point, Dermaga Deep Sea Fall', 'SIO Rigger Crane & K3 Kepelabuhanan'],
        ['Koridor Transportasi Timika - Tembagapura', 'Jalan Tambang Ekstrem & Tramway Kereta Gantung', 'Longsor Lereng Tebing, Rem Blong Truk', 'Defensive Driving 4WD Tambang & K3 Tramway']
      ]
    },
    caseStudy: 'Sebuah divisi operasi tambang bawah tanah di Mimika mencatatkan rekor 100% evakuasi selamat pada simulasi blind drill kedaruratan asap tambang berkat pelatihan in-house rutin penggunaan SCSR dan pemanfaatan Refuge Chamber.',
    zoneHighlights: [
      { zone: 'Underground Extraction Level', hazard: 'Aliran lumpur bijih basah menyembur cepat menimbun loader', control: 'Pemberlakuan remote control loader tanpa awak di area drawpoint basah' },
      { zone: 'Main Underground Haulage Drift', hazard: 'Akumulasi gas nitrogen dioksida (NO2) dari truk diesel berat', control: 'Ventilasi mekanik continuous & uji emisi gas buang mesin per minggu' },
      { zone: 'Pelabuhan Amamapare Dewatering', hazard: 'Paparan debu konsentrat tembaga/emas saat transfer conveyor', control: 'Enclosure conveyor tertutup rapat & sistem penyiraman misting' }
    ],
    stepByStepGuide: [
      { step: '1. Asesmen Bahaya Tambang Bawah Tanah', desc: 'Peninjauan ground support, ventilasi, dan titik rawan terowongan klien di Timika.' },
      { step: '2. Pelatihan SCSR & Refuge Chamber', desc: 'Praktik membuka dan bernapas menggunakan SCSR dalam kondisi gelap total.' },
      { step: '3. Simulasi Penyelamatan Tambang Dalam', desc: 'Latihan skenario evakuasi korban dari area terowongan sempit oleh tim rescue.' },
      { step: '4. Pelaporan Audit SMKP Minerba', desc: 'Dokumentasi pelatihan untuk pemenuhan kaidah teknik pertambangan Kementerian ESDM.' }
    ],
    links: [
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' },
      { href: '/industri/pertambangan-migas/', anchor: 'Keselamatan Pertambangan Mineral' },
      { href: '/kategori-pelatihan/petugas-ruang-terbatas-confined-space/', anchor: 'Pelatihan Petugas Ruang Terbatas' }
    ]
  },

  // 21. Sorong
  {
    key: 'in-house-training-k3-sorong',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-sorong/',
    archetype: 'regional',
    title: 'In-House Training K3 Sorong: KEK Sorong, Galangan Kapal, & Hulu Migas Papua Barat Daya',
    h1: 'In-House Training K3 Sorong: Pelatihan Keselamatan Kawasan Ekonomi Khusus (KEK) Sorong, Galangan Kapal Maritim, & Logistik Migas Papua',
    meta: 'In-house training K3 Sorong Papua Barat Daya: keselamatan KEK Sorong, galangan kapal slipway, pangkalan logistik migas & sertifikasi Kemnaker.',
    imgAlt: 'Pelatihan keselamatan kerja in-house di Kawasan Ekonomi Khusus KEK Sorong Papua Barat Daya',
    related: ['in-house-training', 'galangan-kapal-shipyard', 'petrokimia-dan-gas', 'k3-keselamatan-kerja'],
    intro: 'Kota dan Kabupaten Sorong di Papua Barat Daya merupakan pusat Kawasan Ekonomi Khusus (KEK) Sorong, industri galangan kapal perikanan dan maritim, serta basis pangkalan logistik hulu migas di wilayah timur Indonesia. Pembangunan infrastruktur terpadu, pemeliharaan kapal penangkap ikan modern di slipway, dan penanganan kargo pelabuhan membutuhkan pembinaan K3 yang adaptif terhadap karakteristik operasional setempat.',
    hazards: [
      '<strong>Kecelakaan Hot Work Pengelasan Kapal Kayu & Baja:</strong> Bahaya kebakaran lambung kapal saat renovasi di dock slipway.',
      '<strong>Kecelakaan Masuk Ruang Tertutup Tangki Palka Ikan:</strong> Gas beracun amonia dan H2S dari pembusukan sisa ikan di ruang palka kapal.',
      '<strong>Kegagalan Pengangkatan Crane Pelabuhan Sorong:</strong> Sling putus saat transfer kontainer dari kapal kargo ke dermaga.',
      '<strong>Sengatan Listrik di Lingkungan Maritim Lembab:</strong> Kebocoran arus pada kabel daya instalasi workshop tepi laut.'
    ],
    regulations: [
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang Pesawat Angkat dan Pesawat Angkut.',
      '<strong>Permenaker No. 12 Tahun 2015</strong> tentang K3 Listrik di Tempat Kerja.',
      '<strong>Kepdirjen Binwasnaker No. 113/2006</strong> tentang K3 Ruang Terbatas.'
    ],
    modules: [
      {
        name: 'Modul 1: Keselamatan Galangan Kapal Maritim & Safe Hot Work Permit',
        theory: 'Prosedur izin kerja panas, pembersihan bahan mudah terbakar dari lambung kapal, inspeksi kabel las anti-bocor.',
        practical: 'Audit kelayakan area pengelasan di slipway galangan kapal dan simulasi penggunaan fire blanket.'
      },
      {
        name: 'Modul 2: Izin Kerja Ruang Terbatas Tangki Palka & Ballast Kapal',
        theory: 'Bahaya gas hasil dekomposisi organik (H2S, CH4), ventilasi udara palka, prosedur masuk ruang sempit bertingkat.',
        practical: 'Pengujian gas palka kapal menggunakan multi-gas tester dan simulasi penyelamatan tripod winch.'
      },
      {
        name: 'Modul 3: Rigging, Lifting Operation, & Keselamatan Pelabuhan KEK Sorong',
        theory: 'Kalkulasi batas beban aman (SWL) sling rantai/webbing, komunikasi sinyal rigger, inspeksi shackle pelabuhan.',
        practical: 'Uji visual sling angkat dan simulasi pengangkatan mesin genset kapal 10 ton di workshop.'
      }
    ],
    equipment: [
      'Multi-Gas Detector Portabel (O2, LEL, H2S, CO) Terkalibrasi Aktif.',
      'Tripod Confined Space System dengan Winch Penyelamat 20 Meter.',
      'Fire Blanket Tahan Panas 1.000°C untuk Proteksi Pengelasan Kapal.',
      'Earth Grounding & Insulation Resistance Tester untuk Kelistrikan Maritim.'
    ],
    participants: [
      'Manager Operasional KEK Sorong, Safety Officer Galangan Kapal, Mandor Rigging Pelabuhan, Teknisi Listrik, dan Tim Rescue Perusahaan.'
    ],
    tableData: {
      headers: ['Fasilitas Industri Sorong', 'Sektor Usaha', 'Potensi Bahaya Kritis', 'Program In-House Unggulan'],
      rows: [
        ['Kawasan Ekonomi Khusus (KEK) Sorong', 'Manufaktur, Logistik, & Pengolahan', 'Kecelakaan Konstruksi Pabrik, Kebakaran Gudang', 'Ahli K3 Konstruksi & Fire Safety Kelas D'],
        ['Galangan Kapal Pelabuhan Sorong', 'Perbaikan Kapal Ikan & Tongkang', 'Asfiksia Tangki Palka, Kebakaran Pengelasan', 'K3 Ruang Terbatas & Safe Hot Work'],
        ['Pangkalan Logistik Hulu Migas', 'Dukungan Logistik Lepas Pantai', 'Heavy Lifting Failure, Chemical Spill', 'SIO Rigger Kemnaker & CSMS Contractor'],
        ['Industri Pengolahan Kayu & Hasil Hutan', 'Sawmill & Kayu Olahan', 'Terpotong Mata Gergaji Bandsaw, Debu Kayu', 'Machine Safety & K3 Lingkungan Kerja']
      ]
    },
    caseStudy: 'Sebuah fasilitas galangan kapal di Kota Sorong berhasil meraih sertifikasi SMK3 PP 50/2012 setelah melaksanakan in-house training K3 terpadu bagi seluruh staf teknis dan mandor lapangannya.',
    zoneHighlights: [
      { zone: 'Slipway Galangan Kapal Sorong', hazard: 'Pekerja terpeleset dari tangga perancah bambu darurat di lambung kapal', control: 'Penggantian dengan scaffolding modular baja berlisensi & full harness' },
      { zone: 'Pelabuhan Kontainer KEK', hazard: 'Truk kontainer terbalik saat manuver di dermaga akibat tanah lunak', control: 'Pengecekan daya dukung dermaga & pembatasan kecepatan 15 km/jam' },
      { zone: 'Workshop Sawmill Kayu', hazard: 'Tangan operator tersambar mata gergaji pita mesin bandsaw kayu', control: 'Pemasangan pelindung pisau otomatis (blade guard) & emergency stop' }
    ],
    stepByStepGuide: [
      { step: '1. Identifikasi Kebutuhan Lokal Papua', desc: 'Pemetaan fasilitas galangan, pabrik, atau logistik klien di wilayah Sorong.' },
      { step: '2. Penyampaian Materi Praktis Lapangan', desc: 'Silabus difokuskan pada praktik langsung di area dock kapal dan workshop.' },
      { step: '3. Simulasi Evakuasi Tangki Palka', desc: 'Latihan penggunaan gas tester dan evakuasi korban dari kompartemen palka.' },
      { step: '4. Penerbitan Sertifikat Resmi', desc: 'Uji kompetensi peserta untuk penerbitan sertifikat kualifikasi resmi Kemnaker.' }
    ],
    links: [
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' },
      { href: '/industri/manufaktur/', anchor: 'Panduan K3 Industri Galangan & Manufaktur' },
      { href: '/kategori-pelatihan/rigger/', anchor: 'Sertifikasi Rigger & Juru Ikat Beban' }
    ]
  },

  // 22. Bali - Denpasar
  {
    key: 'in-house-training-k3-bali-denpasar',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-bali-denpasar/',
    archetype: 'regional',
    title: 'In-House Training K3 Bali: Hospitality Bintang 5, Gedung Bertingkat, & ME Resort',
    h1: 'In-House Training K3 Bali & Denpasar: Pelatihan Keselamatan Hotel Bintang 5, Resort ME Maintenance, Kitchen Safety, & Evakuasi Gempa/Tsunami',
    meta: 'In-house training K3 Bali Denpasar: keselamatan hotel resort bintang 5, kitchen LPG safety, lift eskalator, evakuasi tsunami & sertifikasi Kemnaker.',
    imgAlt: 'Pelatihan keselamatan kerja in-house sektor perhotelan dan resort di Nusa Dua Bali',
    related: ['in-house-training', 'kesehatan-rumah-sakit', 'ahli-k3-umum-kemnaker', 'k3-keselamatan-kerja'],
    intro: 'Provinsi Bali dengan pusat di Denpasar, Badung (Nusa Dua, Kuta, Jimbaran), dan Gianyar adalah pusat pariwisata internasional dengan ratusan hotel bintang lima, resort mewah, dan gedung konvensi dunia. Kebutuhan K3 di sektor hospitality mencakup pencegahan ledakan instalasi gas LPG sentral di kitchen komersial, keselamatan operasional lift/eskalator tamu, instalasi kelistrikan kolam renang/spa, serta kesiapsiagaan evakuasi bencana alam (gempa bumi dan tsunami) bagi ribuan wisatawan mancanegara.',
    hazards: [
      '<strong>Kebakaran & Ledakan Instalasi Gas LPG Sentral Kitchen:</strong> Kebocoran gas elpiji dari manifold tabung 50 kg di area dapur utama hotel.',
      '<strong>Sengatan Listrik Instalasi Kolam Renang & Spa:</strong> Kebocoran arus pompa sirkulasi air kolam renang tanpa grounding proteksi GFCI/ELCB.',
      '<strong>Kecelakaan Masuk Ruang Tertutup Sewage Treatment Plant (STP):</strong> Gas beracun H2S dan metana di bak pengolahan limbah hotel bawah tanah.',
      '<strong>Panik Massal Evakuasi Gempa & Tsunami:</strong> Ketiadaan sistem peringatan dini dan jalur evakuasi vertikal di resort tepi pantai.'
    ],
    regulations: [
      '<strong>Kepmenaker No. 186/MEN/1999</strong> tentang Unit Penanggulangan Kebakaran di Tempat Kerja.',
      '<strong>Permenaker No. 6 Tahun 2017</strong> tentang K3 Elevator dan Eskalator.',
      '<strong>Permenaker No. 12 Tahun 2015</strong> tentang K3 Listrik di Tempat Kerja.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Kitchen Fire Safety, LPG Manifold System, & Kitchen Hood Suppressant',
        theory: 'Karakteristik kebakaran minyak goreng (Kelas K/F), sistem pemadam otomatis wet chemical kitchen hood, deteksi kebocoran LPG.',
        practical: 'Simulasi pemadaman api wajan minyak menggunakan wet chemical extinguisher dan fire blanket.'
      },
      {
        name: 'Modul 2: Izin Kerja Ruang Terbatas (Confined Space) STP & Tangki Air Resort',
        theory: 'Bahaya gas H2S di bak STP bawah tanah, pengujian gas, prosedur lockout pompa air dan blower.',
        practical: 'Praktik masuk bak STP menggunakan tripod rescue system, blower ventilasi, dan 4-gas detector.'
      },
      {
        name: 'Modul 3: Manajemen Evakuasi Darurat Bencana (Gempa, Tsunami, & Terorisme)',
        theory: 'Standar tsunami ready resort, penetapan zona evakuasi vertikal gedung, prosedur komunikasi darurat tamu hotel.',
        practical: 'Gelar simulasi drill evakuasi tamu hotel menuju assembly point dan vertikal rooftop shelter.'
      }
    ],
    equipment: [
      'Wet Chemical Fire Extinguisher (Kelas K) untuk Dapur Komersial.',
      'Multi-Gas Detector Sensor H2S, O2, LEL, CO Terkalibrasi.',
      'Tripod Confined Space System Khusus Pemeliharaan Bak STP Bawah Tanah.',
      'Megaphone Sirene Portabel & Lampu Senter Darurat untuk Regu Warden Evakuasi.'
    ],
    participants: [
      'Director of Engineering Hotel, Chief Security, EHS Coordinator Resort, Executive Chef, Chief Steward, dan Anggota Emergency Response Team (ERT).'
    ],
    tableData: {
      headers: ['Sektor Hospitality Bali', 'Zona Kritis', 'Potensi Bahaya Mayor', 'Program In-House Unggulan'],
      rows: [
        ['Resort Tepi Pantai Nusa Dua & Kuta', 'Gedung Tamu & Area Pantai', 'Tsunami, Gempa Bumi, Tenggelam di Kolam/Laut', 'Evakuasi Bencana Tsunami & P3K CPR'],
        ['Dapur Utama Komersial (Main Kitchen)', 'Kompor Wok & Manifold Gas LPG', 'Kitchen Fire Kelas K, Ledakan Pipa Gas', 'Kitchen Fire Safety & Damkar Kelas D'],
        ['Ruang Mesin ME & Plant Bawah Tanah', 'Sewage Treatment Plant (STP) & Genset', 'Gas H2S Beracun, Sengatan Listrik Panel 380V', 'K3 Ruang Terbatas STP & Ahli K3 Listrik'],
        ['Fasilitas Gedung Bertingkat & Konvensi', 'Elevator Tamu & Eskalator', 'Lift Macet Terjebak, Terjepit Eskalator', 'Teknisi K3 Elevator & Prosedur Rescue Lift']
      ]
    },
    caseStudy: 'Sebuah resort bintang lima di Nusa Dua Bali berhasil meraih sertifikasi Tsunami Ready dari UNESCO dan predikat Gold Safety Hotel setelah mengintegrasikan program in-house training K3 dan drill evakuasi berkala bersama tim konsultan kami.',
    zoneHighlights: [
      { zone: 'Main Kitchen Banquet Area', hazard: 'Kebakaran minyak wajan panas tersambar api kompor gas bertekanan', control: 'Pemasangan sistem otomatis Ansul wet chemical & fire blanket' },
      { zone: 'Underground STP Room', hazard: 'Teknisi pingsan di dalam bak lumpur aktif STP akibat gas H2S', control: 'Pemasangan exhaust blower continuous & sensor gas H2S fixed' },
      { zone: 'Poolside & Jacuzzi Pump Room', hazard: 'Kebocoran klorin gas/cair untuk sanitasi air kolam renang', control: 'Penyediaan chemical spill kit & masker respirator uap klorin' }
    ],
    stepByStepGuide: [
      { step: '1. Hospitality Safety Audit', desc: 'Peninjauan kitchen manifold LPG, ruang mesin STP, dan rute evakuasi resort klien.' },
      { step: '2. Modul Berstandar Internasional', desc: 'Materi disajikan bilingual (Indonesia-Inggris) untuk staf lokal dan ekspatriat.' },
      { step: '3. Simulasi Evakuasi & Kitchen Fire Drill', desc: 'Latihan pemadaman api dapur dan drill evakuasi tamu secara ramah & teratur.' },
      { step: '4. Sertifikasi Resmi & Pelaporan', desc: 'Penerbitan sertifikat pemadam kebakaran dan P3K resmi Kemnaker.' }
    ],
    links: [
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' },
      { href: '/kategori-pelatihan/petugas-pemadam-kebakaran-kelas-d/', anchor: 'Pelatihan Damkar Kelas D' },
      { href: '/kategori-pelatihan/p3k-pertolongan-pertama/', anchor: 'Pelatihan Petugas P3K Tempat Kerja' }
    ]
  },

  // 23. Manado - Bitung
  {
    key: 'in-house-training-k3-manado-bitung',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-manado-bitung/',
    archetype: 'regional',
    title: 'In-House Training K3 Manado & Bitung: KEK Bitung, Cold Storage Amonia, & Pengalengan Ikan',
    h1: 'In-House Training K3 Manado & Bitung: Pelatihan Keselamatan Industri Pengalengan Ikan, Cold Storage Amonia KEK Bitung, & Pelabuhan Samudera',
    meta: 'In-house training K3 Manado Bitung: keselamatan cold storage amonia, pabrik pengalengan ikan tuna, pelabuhan Bitung & sertifikasi Kemnaker Sulut.',
    imgAlt: 'Pelatihan keselamatan kerja in-house industri perikanan dan cold storage di Bitung Sulawesi Utara',
    related: ['in-house-training', 'makanan-dan-minuman-fnb', 'logistik-dan-supply-chain', 'k3-keselamatan-kerja'],
    intro: 'Kota Pelabuhan Bitung dan Manado di Sulawesi Utara merupakan pusat industri perikanan tangkap, pengalengan ikan tuna, dan Kawasan Ekonomi Khusus (KEK) Bitung yang strategis menghadap Samudera Pasifik. Beroperasinya puluhan pabrik cold storage dengan instalasi amonia kapasitas raksasa, mesin pengalengan bertekanan retort, serta aktivitas bongkar muat kapal ikan di Pelabuhan Samudera Bitung menuntut pengawasan keselamatan yang terstandarisasi.',
    hazards: [
      '<strong>Kebocoran Gas Amonia (NH3) Cold Storage Ikan:</strong> Pelepasan gas refrigeran beracun pada kompresor pembekuan ikan.',
      '<strong>Ledakan Bejana Retort Pengalengan Ikan:</strong> Kegagalan katup pengaman uap bejana sterilisasi kaleng ikan suhu tinggi.',
      '<strong>Kecelakaan Masuk Ruang Tertutup Palka Kapal Ikan:</strong> Akumulasi gas H2S beracun dari pembusukan sisa air es ikan.',
      '<strong>Terjepit Mesin Pemotong & Seamer Kaleng Otomatis:</strong> Kontak jari operator dengan mata pisau seaming mesin pengalengan.'
    ],
    regulations: [
      '<strong>Kepmenaker No. 187/MEN/1999</strong> tentang Pengendalian Bahan Kimia Berbahaya.',
      '<strong>Permenaker No. 37 Tahun 2016</strong> tentang K3 Bejana Tekan dan Tangki Timbun.',
      '<strong>Kepdirjen Binwasnaker No. 113/2006</strong> tentang K3 Ruang Terbatas.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Manajemen Keselamatan Sistem Refrigerasi Amonia Cold Storage',
        theory: 'Fisiologi racun gas amonia, prosedur pemeliharaan kompresor amonia, sistem ventilasi darurat, permit perbaikan pipa.',
        practical: 'Simulasi pemakaian SCBA dan penutupan darurat katup isolasi amonia saat kebocoran tiruan.'
      },
      {
        name: 'Modul 2: Keselamatan Operasional Bejana Retort & Boiler Uap Pengalengan',
        theory: 'Prinsip kerja bejana masak bertekanan (retort), kalibrasi pressure gauge, prosedur penguncian pintu bejana.',
        practical: 'Audit interlock pengaman pintu retort dan simulasi pengoperasian blowdown boiler.'
      },
      {
        name: 'Modul 3: Izin Kerja Ruang Terbatas Palka Kapal Ikan & Tanggap Darurat Air',
        theory: 'Karakteristik gas H2S palka, ventilasi mekanik blower, pertolongan pertama korban tenggelam/keracunan gas.',
        practical: 'Praktik evakuasi korban dari manhole palka kapal ikan menggunakan tripod rescue kit.'
      }
    ],
    equipment: [
      'SCBA Positive Pressure 300 Bar Khusus Tanggap Darurat Amonia.',
      'Single Gas Ammonia (NH3) & H2S Detector Portabel Terkalibrasi.',
      'Tripod Confined Space System dengan Body Harness & Winch 20 Meter.',
      'Set Lockout/Tagout untuk Panel Mesin Seamer & Valve Retort.'
    ],
    participants: [
      'Plant Manager Pabrik Pengalengan Ikan, Operator Cold Storage Bitung, Safety Officer KEK Bitung, Teknisi Boiler, dan Tim ERT Pabrik.'
    ],
    tableData: {
      headers: ['Fasilitas Industri Bitung', 'Sektor Usaha', 'Potensi Bahaya Kritis', 'Program In-House Unggulan'],
      rows: [
        ['Pabrik Cold Storage Pembekuan Ikan', 'Industri Pembekuan Perikanan', 'Kebocoran Gas Amonia Toksik, Frostbite', 'K3 Kimia Amonia & Tanggap Darurat SCBA'],
        ['Pabrik Pengalengan Tuna & Cakalang', 'Pengolahan Makanan Kaleng', 'Ledakan Bejana Retort, Jari Terjepit Mesin Seamer', 'K3 Bejana Tekan & Machine Guarding'],
        ['Pelabuhan Perikanan Samudera Bitung', 'Bongkar Muat Kapal Ikan', 'Asfiksia Palka Ikan, Orang Jatuh ke Laut', 'K3 Ruang Terbatas & Marine Safety'],
        ['Kawasan Ekonomi Khusus (KEK) Bitung', 'Manufaktur & Logistik Ekspor', 'Forklift Collision, Kebakaran Gudang', 'SIO Operator Forklift & Damkar Kelas D']
      ]
    },
    caseStudy: 'Sebuah pabrik pengalengan ikan tuna ekspor di Bitung berhasil meraih sertifikasi SMK3 Bendera Emas setelah seluruh operator cold storage dan teknisi retortnya lulus pelatihan in-house keselamatan amonia dan bejana tekanan.',
    zoneHighlights: [
      { zone: 'Bitung Cold Storage Compressor Room', hazard: 'Flange pipa amonia cair retak akibat getaran kompresor pendingin', control: 'Pemasangan sensor amonia otomatis terhubung exhaust fan & water spray' },
      { zone: 'Stasiun Retort Pengalengan', hazard: 'Pintu bejana retort terbuka saat masih ada tekanan uap sisa 1 bar', control: 'Pemberlakuan safety interlock valve yang mengunci tuas pembuka pintu' },
      { zone: 'Dermaga Kapal Ikan Aertembaga', hazard: 'Anak buah kapal pingsan di palka ikan saat proses bongkar muat es', control: 'Wajib blower sirkulasi udara minimal 20 menit sebelum ABK turun' }
    ],
    stepByStepGuide: [
      { step: '1. Survey Fasilitas Amonia & Retort', desc: 'Pengecekan jalur pipa refrigerasi dan bejana tekan pabrik klien di Bitung.' },
      { step: '2. Simulasi Tanggap Darurat Kebocoran Amonia', desc: 'Latihan pemakaian SCBA dan evakuasi zona angin di area outdoor pabrik.' },
      { step: '3. Pelatihan Machine Safety Lini Packing', desc: 'Pemasangan LOTO dan pencegahan kecelakaan pada mesin seamer kaleng.' },
      { step: '4. Pelaporan Audit ke Disnaker Sulut', desc: 'Penyusunan berkas sertifikasi resmi untuk pemenuhan regulasi ketenagakerjaan.' }
    ],
    links: [
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' },
      { href: '/industri/makanan-dan-minuman-fnb/', anchor: 'K3 Industri Makanan & Pengalengan' },
      { href: '/kategori-pelatihan/petugas-ruang-terbatas-confined-space/', anchor: 'Pelatihan Petugas Ruang Terbatas' }
    ]
  },

  // 24. Sumbawa
  {
    key: 'in-house-training-k3-sumbawa',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-sumbawa/',
    archetype: 'regional',
    title: 'In-House Training K3 Sumbawa: Tambang Batu Hijau, Smelter Benete, & Proyek Elang',
    h1: 'In-House Training K3 Sumbawa: Pelatihan Keselamatan Tambang Tembaga Batu Hijau, Smelter Benete, & Operasional Hauling Tambang NTB',
    meta: 'In-house training K3 Sumbawa: keselamatan tambang tembaga emas Batu Hijau, smelter Benete, heavy haulage truck, SMKP & sertifikasi ESDM.',
    imgAlt: 'Pelatihan keselamatan kerja pertambangan tembaga dan smelter di Sumbawa Barat Nusa Tenggara Barat',
    related: ['in-house-training', 'smelter-dan-pengolahan-mineral', 'alat-berat-excavator-dump-truck', 'k3-keselamatan-kerja'],
    intro: 'Kabupaten Sumbawa Barat di Nusa Tenggara Barat (NTB) merupakan salah satu pusat pertambangan tembaga dan emas terbesar di Indonesia (Tambang Batu Hijau dan Proyek Elang Dodo Rinti), serta proyek pembangunan smelter tembaga di Benete. Operasional pit tambang terbuka raksasa dengan armada haul truck 240 ton, fasilitas konsentrator, dan proyek konstruksi smelter menuntut kepatuhan penuh pada Sistem Manajemen Keselamatan Pertambangan (SMKP Minerba) dan pengendalian risiko kritikal.',
    hazards: [
      '<strong>Tabrakan Dump Truck Tambang Raksasa (CAT 793):</strong> Titik buta (blind spot) manuver heavy hauler di tikungan sempit jalan tambang.',
      '<strong>Longsor Lereng Pit Tambang Batu Hijau:</strong> Ketidakstabilan dinding batuan open pit yang dipicu tekanan air tanah dan gempa bumi.',
      '<strong>Bahaya Paparan Logam Panas Smelter Tembaga:</strong> Percikan tembaga cair suhu 1.200°C pada proses converting dan casting.',
      '<strong>Kegagalan Pengangkatan Berat di Dermaga Benete:</strong> Heavy lift modul konsentrator dan material smelter ratusan ton di pelabuhan.'
    ],
    regulations: [
      '<strong>Kepmen ESDM No. 1827 K/30/MEM/2018</strong> tentang Pedoman Pelaksanaan Kaidah Teknik Pertambangan yang Baik.',
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang K3 Pesawat Angkat dan Pesawat Angkut.',
      '<strong>Permenaker No. 38 Tahun 2016</strong> tentang K3 Pesawat Tenaga dan Produksi.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Manajemen Lalu Lintas & K3 Alat Berat Tambang Terbuka',
        theory: 'Zonasi blind spot haul truck 240 ton, aturan hak jalan tambang, penataan tanggul pengaman (safety berm) setinggi ban.',
        practical: 'Audit kelayakan pengereman dump truck dan simulasi manuver aman di area loading shovel.'
      },
      {
        name: 'Modul 2: Keselamatan Operasional Smelter Tembaga & Peleburan Logam',
        theory: 'Prinsip kerja flash furnace tembaga, pencegahan ledakan lelehan tembaga-air, penggunaan APD aluminized smelter.',
        practical: 'Inspeksi sistem emergency tapping dan simulasi isolasi LOTO pada konverter tembaga.'
      },
      {
        name: 'Modul 3: Geoteknik Tambang, Kestabilan Lereng, & Blasting Safety',
        theory: 'Pemantauan radar lereng pit, radius aman evakuasi peledakan bahan peledak (blasting clearance), drainase lereng.',
        practical: 'Simulasi drill evakuasi darurat highwall pit tambang menuju safe muster point.'
      }
    ],
    equipment: [
      'Baju Pelindung Tembaga Cair (Aluminized Copper Smelter Suit) & Helm Smelter.',
      'Radar Geoteknik Slope Stability Simulator & Laser Distance Meter.',
      'Kit Pemeriksaan Harian Alat Berat (P2H) & Radio Komunikasi VHF Tambang.',
      'Positive Pressure SCBA & EEBA Escape Hood untuk Area Smelter.'
    ],
    participants: [
      'Kepala Teknik Tambang (KTT), Pengawas Operasional Tambang (POP/POM), Operator Haul Truck, EHS Engineer Smelter Benete, Tim Rescue Tambang.'
    ],
    tableData: {
      headers: ['Area Operasi Sumbawa Barat', 'Fasilitas Kerja', 'Bahaya Katastropik', 'Program In-House Unggulan'],
      rows: [
        ['Pit Tambang Terbuka Batu Hijau', 'Open Pit Mine & Hauling Road', 'Haul Truck Collision, Highwall Pit Slide', 'K3 Tambang Terbuka, SMKP, & Fatigue Management'],
        ['Proyek Smelter Tembaga Benete', 'Flash Smelting & Acid Plant', 'Molten Copper Splash, SO2 Gas Leak', 'K3 Peleburan Tembaga & Chemical Safety'],
        ['Fasilitas Konsentrator Maluk', 'Sirkuit SAG Mill & Ball Mill', 'Mill Liner Replacement Crushing, High Voltage', 'LOTO Heavy Machinery & Confined Space Mill'],
        ['Pelabuhan Khusus Benete Port', 'Jetty Bongkar Muat Konsentrat', 'Heavy Lifting Rigging, Fall to Sea', 'SIO Rigger Kemnaker & Marine Safety']
      ]
    },
    caseStudy: 'Sebuah kontraktor pertambangan di Sumbawa Barat berhasil mencapai 10 juta jam kerja tanpa Loss Time Injury berkat implementasi sistem manajemen fatigue driver tambang dan pelatihan in-house terstruktur untuk seluruh pengawas lapangan.',
    zoneHighlights: [
      { zone: 'Batu Hijau Main Haul Road', hazard: 'Light vehicle (LV) terlindas dump truck 240 ton di persimpangan jalan', control: 'Wajib pemasangan tiang buggy whip berbendera lampu tinggi 4 meter pada LV' },
      { zone: 'Benete Smelter Flash Furnace', hazard: 'Semburan gas SO2 bertekanan saat proses konversi tembaga', control: 'Pemasangan continuous gas analyzer & masker respirator gas asam wajib' },
      { zone: 'Primary Crusher Maluk', hazard: 'Batu besar tersangkut di crusher menyembur saat dihancurkan rock breaker', control: 'Pemasangan kabin operator anti-peluru balistik & SOP jarak aman' }
    ],
    stepByStepGuide: [
      { step: '1. Peninjauan Risiko Tambang & Smelter', desc: 'Pemetaan titik kritis jalur hauling, area furnace, dan pabrik konsentrator klien.' },
      { step: '2. Kustomisasi Standar SMKP Minerba', desc: 'Silabus diselaraskan dengan Kepmen ESDM 1827/2018 dan Golden Rules perusahaan.' },
      { step: '3. Simulasi Praktik Lapangan On-Site', desc: 'Latihan pengoperasian alat berat aman dan prosedur evakuasi darurat lereng.' },
      { step: '4. Evaluasi Pengawas & Sertifikasi', desc: 'Uji kompetensi POP/POM dan penerbitan sertifikat kualifikasi resmi.' }
    ],
    links: [
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' },
      { href: '/industri/pertambangan-migas/', anchor: 'Keselamatan Pertambangan Mineral' },
      { href: '/kategori-pelatihan/operator-excavator/', anchor: 'Pelatihan Operator Alat Berat Tambang' }
    ]
  },

  // 25. Serang - Banten
  {
    key: 'in-house-training-k3-serang-banten',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-serang-banten/',
    archetype: 'regional',
    title: 'In-House Training K3 Serang Banten: Kawasan Modern Cikande, Baja, Kimia, & Consumer Goods',
    h1: 'In-House Training K3 Serang Banten: Pelatihan Keselamatan Kawasan Industri Modern Cikande, Pabrik Kimia, Baja, & Alas Kaki Serang',
    meta: 'In-house training K3 Serang Banten: keselamatan Kawasan Industri Modern Cikande, pabrik baja, kimia, alas kaki, LOTO & sertifikasi Kemnaker.',
    imgAlt: 'Pelatihan in-house training K3 manufaktur dan industri kimia di Kawasan Industri Modern Cikande Serang Banten',
    related: ['in-house-training', 'peleburan-baja-smelter', 'manufaktur-otomotif', 'k3-keselamatan-kerja'],
    intro: 'Kabupaten dan Kota Serang di Banten merupakan salah satu kawasan industri terluas di barat Jakarta, dengan sentra utama di Kawasan Industri Modern Cikande, Kibin, dan Kragilan. Menampung ratusan pabrik peleburan baja batangan, industri kimia polimer, manufaktur alas kaki ekspor berpekerja puluhan ribu orang, serta pabrik pakan ternak, kebutuhan keselamatan kerja di Serang memerlukan pendekatan komprehensif mulai dari proteksi peleburan logam cair, keselamatan mesin pres, hingga evakuasi kebakaran massal.',
    hazards: [
      '<strong>Luka Bakar Radiasi & Percikan Logam Cair Pabrik Baja:</strong> Lelehan besi baja suhu 1.500°C di induction furnace yang memercik ke operator.',
      '<strong>Kebakaran Massal Pabrik Alas Kaki & Garmen:</strong> Penggunaan lem pelarut kimia berbasis toluena/tiner yang mudah tersulut listrik statis.',
      '<strong>Terjepit Mesin Pemotong & Roll Kalender Karet:</strong> Anggota tubuh terseret putaran roll mesin pembuat sol sepatu tanpa emergency stop.',
      '<strong>Debu Silo Pakan Ternak Meledak (Combustible Dust):</strong> Konsentrasi debu jagung/kedelai di dalam ruang tertutup silo penyimpanan.'
    ],
    regulations: [
      '<strong>Permenaker No. 38 Tahun 2016</strong> tentang K3 Pesawat Tenaga dan Produksi.',
      '<strong>Kepmenaker No. 187/MEN/1999</strong> tentang Pengendalian Bahan Kimia Berbahaya.',
      '<strong>Kepmenaker No. 186/MEN/1999</strong> tentang Unit Penanggulangan Kebakaran di Tempat Kerja.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Keselamatan Peleburan Logam Baja & Induction Furnace',
        theory: 'Prinsip kerja tungku induksi listrik, pencegahan ledakan scrap basah (wet scrap explosion), APD aluminized tahan panas.',
        practical: 'Inspeksi kelembapan scrap logam sebelum charging dan simulasi penanganan ceceran terak baja cair.'
      },
      {
        name: 'Modul 2: K3 Penanganan Bahan Kimia Lem Pelarut & Evakuasi Pabrik Sepatu',
        theory: 'Karakteristik uap pelarut organik, ventilasi pembuangan lokal (LEV) meja lem, manajemen evakuasi 5.000 karyawan.',
        practical: 'Audit grounding anti-statis drum lem dan simulasi drill evakuasi kebakaran cepat pabrik alas kaki.'
      },
      {
        name: 'Modul 3: Machine Guarding & LOTO Mesin Roll Kalender & Stamping',
        theory: 'Prinsip safety trip wire switch pada mesin rol, interlock gate mesin pres hidrolik, prosedur penguncian energi LOTO.',
        practical: 'Simulasi pemasangan gembok LOTO pada panel mesin roll kalender dan uji fungsi emergency bar.'
      }
    ],
    equipment: [
      'Aluminized Furnace Suit & Face Shield Emas Tahan Panas 1.500°C.',
      'Set Lockout/Tagout Mesin Industri Manufaktur (Breaker Lock, Valve Lock).',
      'Digital VOC Chemical Gas Detector & Sound Level Meter Terkalibrasi.',
      'APAR Dry Chemical Powder 9 kg & Hydrant Hose Reel 2.5 Inch.'
    ],
    participants: [
      'Plant Head Modern Cikande, Safety Officer Pabrik Baja, Supervisor Produksi Alas Kaki, Teknisi Pemeliharaan Listrik, dan Anggota P2K3.'
    ],
    tableData: {
      headers: ['Zona Industri Serang Banten', 'Sektor Usaha', 'Potensi Bahaya Kritis', 'Program In-House Unggulan'],
      rows: [
        ['Modern Cikande Industrial Estate', 'Peleburan Baja, Kimia, & Mamin', 'Logam Cair Meledak, Tumpahan B3 Kimia', 'K3 Peleburan Logam, K3 Kimia, & SIO Crane'],
        ['Koridor Industri Kibin - Kragilan', 'Pabrik Sepatu Alas Kaki Ekspor', 'Uap Lem Organik, Kebakaran Pabrik Massal', 'Evakuasi Kebakaran & Ergonomi Industri'],
        ['Kawasan Industri Cikande Udik', 'Pabrik Pakan Ternak & Silo Gandum', 'Combustible Dust Explosion, Ruang Tertutup', 'K3 Ruang Terbatas Silo & Proteksi Debu'],
        ['Kawasan Industri Bojonegara', 'Fabrikasi Struktur Baja & Pelabuhan', 'Heavy Lifting Overload, Radiasi Pengelasan', 'SIO Rigger Kemnaker & Safe Welding']
      ]
    },
    caseStudy: 'Sebuah pabrik peleburan baja terkemuka di Kawasan Industri Modern Cikande Serang berhasil menurunkan angka insiden luka bakar terak logam hingga 0 kasus dalam 3 tahun berkat program in-house training K3 Peleburan Logam dan standardisasi APD.',
    zoneHighlights: [
      { zone: 'Modern Cikande Steel Smelting Shop', hazard: 'Ledakan dahsyat di tungku induksi akibat memasukkan scrap besi basah berair', control: 'Pemberlakuan SOP pre-heating pengeringan scrap & barikade pelindung' },
      { zone: 'Kibin Footwear Assembly Line', hazard: 'Inhalasi uap pelarut toluena pada stasiun pengeleman sol sepatu', control: 'Instalasi exhaust hood continuous & pemakaian respirator karbon aktif' },
      { zone: 'Bojonegara Heavy Fabrication Dock', hazard: 'Sling rantai putus saat mengangkat balok girder jembatan 30 ton', control: 'Pemeriksaan NDT berkala sling & verifikasi lifting plan oleh Ahli K3' }
    ],
    stepByStepGuide: [
      { step: '1. Walkthrough Fasilitas Pabrik Serang', desc: 'Peninjauan area tungku peleburan baja, lini perakitan, atau gudang kimia klien.' },
      { step: '2. Kustomisasi Modul Sesuai Profil Risiko', desc: 'Silabus disesuaikan dengan regulasi Kemnaker dan standar operasional pabrik.' },
      { step: '3. Simulasi Praktik Lapangan', desc: 'Latihan pemasangan LOTO, pemadaman api awal, dan penanganan scrap logam.' },
      { step: '4. Evaluasi & Sertifikat Resmi', desc: 'Uji kompetensi peserta dan penerbitan sertifikat kualifikasi resmi Kemnaker.' }
    ],
    links: [
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' },
      { href: '/industri/manufaktur/', anchor: 'Keselamatan Kerja Industri Manufaktur' },
      { href: '/kategori-pelatihan/lockout-tagout-loto/', anchor: 'Pelatihan Prosedur LOTO Kemnaker' }
    ]
  }
];
