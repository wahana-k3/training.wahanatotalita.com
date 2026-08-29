import { ExtendedProgramDetail } from './batch4-master-data';
import { batch5RegionalAndStandards } from './batch5-part2-data';
import { batch5Part3Data } from './batch5-part3-data';

export const batch5List: ExtendedProgramDetail[] = [
  // 36. Penerbangan & Ground Handling
  {
    key: 'penerbangan-dan-ground-handling',
    hub: 'industri',
    path: 'industri/penerbangan-dan-ground-handling/',
    title: 'Pelatihan K3 Penerbangan & Ground Handling Bandara (Airside Safety)',
    h1: 'Pelatihan Keselamatan Bandara & Ground Handling: Airside Safety, Foreign Object Debris (FOD), dan Pengisian Avtur Pesawat',
    meta: 'In-house training K3 penerbangan & ground handling bandara: regulasi ICAO / IATA Ground Operations Safety, bahaya Jet Blast & Engine Ingestion, Foreign Object Debris (FOD), dan pengisian avtur.',
    imgAlt: 'Petugas ground handling mengenakan rompi reflektif dan earmuff pelindung bising mengarahkan pesawat parkir di apron bandara',
    related: ['defensive-driving-training', 'pengukuran-kebisingan-dan-getaran', 'chemical-handling'],
    intro: 'Operasi darat bandara udara (<em>Airside Ground Handling</em>) melibatkan pergerakan pesawat komersial berbobot ratusan ton, turbin jet bersuhu ribuan derajat, kendaraan GSE pemindah kargo berkecepatan tinggi, dan kebisingan ekstrem >110 dB.',
    hazards: [
      '<strong>Bahaya Tersedot Turbin Jet (Engine Ingestion):</strong> Personil melintas di depan mesin jet pesawat yang sedang menyala.',
      '<strong>Terhempas Angin Turbin (Jet Blast Hazard):</strong> Kendaraan atau pekerja terlempar akibat semburan jet di belakang pesawat.',
      '<strong>Kerusakan Turbin Akibat Sampah (Foreign Object Debris / FOD):</strong> Benda asing tersedot turbin memicu kebakaran pesawat saat lepas landas.'
    ],
    regulations: ['<strong>UU No. 1 Tahun 2009</strong> tentang Penerbangan.', '<strong>Standar IATA ISAGO</strong> (Safety Audit for Ground Operations).', '<strong>Permenaker No. 5/2018</strong>.'],
    modules: [
      {
        name: 'Modul 1: Airside Safety Rules & Ground Support Equipment (GSE)',
        theory: 'Batas kecepatan apron 20 km/jam, zonasi parkir pesawat (Aircraft Stand), manuver Pushback Tractor & Baggage Conveyor.',
        practical: 'Audit harian kepatuhan jalur pergerakan GSE dan sertifikasi driver ramp bandara.'
      },
      {
        name: 'Modul 2: Mitigasi FOD, Kebisingan & Pengisian Bahan Bakar Avtur',
        theory: 'Program FOD Walkdown harian, pemakaian Earmuff SNR 35 dB, keselamatan refuelling avtur (Anti-Static Bonding).',
        practical: 'Praktik simulasi penyisiran FOD dan verifikasi klem grounding truk avtur.'
      }
    ],
    equipment: ['Aviation Grade Earmuff SNR 35 dB.', 'Static Bonding Cable Tester & FOD Inspection Bag.'],
    participants: ['Ramp Safety Officer, GSE Operator, Baggage Handler Lead, dan Aviation HSE Officer.'],
    tableData: {
      headers: ['Zona Bahaya Mesin Jet', 'Jarak Aman Minimal', 'Konsekuensi Mematikan Jika Dilanggar'],
      rows: [
        ['Zona Hisap Depan (Intake Zone)', 'Minimal 5 – 7.5 Meter dari Intake', 'Tubuh manusia tersedot ke dalam bilah turbin jet'],
        ['Zona Semburan Belakang (Jet Blast)', 'Minimal 30 – 60 Meter ke Belakang', 'Mobil ground handling terbalik & terlempar'],
        ['Apron Traffic Lane', 'Kecepatan Maksimal 20 km/jam', 'Tabrakan kendaraan kargo dengan fuselage pesawat']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/defensive-driving-training/', label: 'Pelatihan Defensive Driving' },
      { href: '/kategori-pelatihan/pengukuran-kebisingan-dan-getaran/', label: 'Pelatihan Pengukuran Kebisingan' }
    ],
    faqs: [
      {
        q: 'Apa itu FOD (Foreign Object Debris) dan mengapa menjadi musuh nomor satu di bandara?',
        a: 'FOD adalah benda asing (seperti baut kecil, batu, kaleng, atau plastik) yang tertinggal di apron/runway bandara, yang jika tersedot oleh turbin pesawat dapat menghancurkan bilah mesin jet dan menyebabkan kecelakaan pesawat fatal.'
      }
    ]
  },

  // 37. Perhotelan, Mall & Gedung Komersial
  {
    key: 'perhotelan-mall-dan-gedung-komersial',
    hub: 'industri',
    path: 'industri/perhotelan-mall-dan-gedung-komersial/',
    title: 'Pelatihan K3 Perhotelan, Mall & Gedung Komersial (Public Safety)',
    h1: 'Pelatihan Keselamatan Hotel, Mall & Gedung Komersial: Proteksi Kebakaran Dapur Komersial, Keselamatan Pengunjung, dan SLF Gedung',
    meta: 'In-house training K3 hotel, mall & pusat perbelanjaan: proteksi kebakaran dapur hotel (Kitchen Hood Wet Chemical), kelaikan lift & eskalator pengunjung, kesiapsiagaan darurat gempa/teror, dan Sertifikat Laik Fungsi.',
    imgAlt: 'Tim K3 dan sekuriti mall melakukan simulasi evakuasi darurat di area atrium pusat perbelanjaan',
    related: ['simulasi-evakuasi-gedung', 'k3-perkantoran-dan-gedung-pemerintah', 'hydrant-dan-sprinkler'],
    intro: 'Hotel berbintang, pusat perbelanjaan (Mall), dan gedung komersial menampung ribuan tamu dan pengunjung umum setiap hari. Tanggung jawab hukum K3 mencakup keselamatan instalasi dapur komersial, kelaikan sarana rekreasi/lift, dan manajemen evakuasi darurat massal.',
    hazards: [
      '<strong>Kebakaran Minyak Dapur Komersial (Kitchen Grease Fire):</strong> Saluran cerobong hood berminyak terbakar menyebarkan api ke seluruh lantai gedung.',
      '<strong>Kaki Anak Terjepit Celah Eskalator Mall:</strong> Ketiadaan sikat pengaman (deflector brush) di tepi eskalator.',
      '<strong>Kepanikan Pengunjung Massal saat Gempa / Teror:</strong> Bottleneck di pintu keluar kaca mall yang terkunci.'
    ],
    regulations: ['<strong>UU No. 28 Tahun 2002</strong> tentang Bangunan Gedung.', '<strong>Standar NFPA 96</strong> (Ventilation Control and Fire Protection of Commercial Cooking Operations).', '<strong>Permen PU No. 26/2008</strong>.'],
    modules: [
      {
        name: 'Modul 1: Kitchen Fire Suppression System (NFPA 96)',
        theory: 'Prinsip kerja APAR Kelas K (Wet Chemical Potassium Acetate), pembersihan berkala lemak ducting hood, gas leak shut-off valve.',
        practical: 'Audit kelaikan sistem pemadam otomatis dapur komersial restoran mall.'
      },
      {
        name: 'Modul 2: Public Crowd Safety & Crowd Evacuation Management',
        theory: 'Manajemen arus massa, pengoperasian tombol Emergency Stop eskalator, penataan signage arah evakuasi fotoluminesen.',
        practical: 'Simulasi evakuasi 500 pengunjung mall menuju tempat berhimpun aman.'
      }
    ],
    equipment: ['Wet Chemical Class K Fire Extinguisher.', 'Megaphone Evakuasi & Escalator Safety Tester.'],
    participants: ['Chief Security Mall/Hotel, Facility Manager, Executive Chef, dan Safety Officer Properti.'],
    tableData: {
      headers: ['Fasilitas Publik Komersial', 'Potensi Bahaya Terhadap Pengunjung', 'Pengaman Standar Wajib'],
      rows: [
        ['Dapur Restoran / Hotel', 'Kebakaran minyak goreng suhu 360°C', 'Sistem Pemadam Wet Chemical Otomatis + Gas Detector'],
        ['Eskalator & Travelator Mall', 'Jari/kaki terjepit celah comb plate', 'Skirting Deflector Brush + Tombol Emergency Stop'],
        ['Kolam Renang Hotel', 'Tenggelam (Drowning) & Terpeleset', 'Lifeguard bersertifikat + Cincin Pelampung + Lantai Anti-Slip']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/simulasi-evakuasi-gedung/', label: 'Pelatihan Simulasi Evakuasi' },
      { href: '/kategori-pelatihan/k3-perkantoran-dan-gedung-pemerintah/', label: 'Pelatihan K3 Perkantoran' }
    ],
    faqs: [
      {
        q: 'Mengapa kebakaran minyak goreng di dapur hotel dilarang dipadamkan dengan air biasa?',
        a: 'Menyiram air pada minyak goreng mendidih akan memicu ledakan bola api raksasa (Oil Boilover Flash) yang menyemburkan minyak membara ke seluruh ruangan. Kebakaran minyak wajib dipadamkan dengan APAR Kimia Basah (Class K Wet Chemical).'
      }
    ]
  },

  // 38. Semen & Bahan Bangunan
  {
    key: 'semen-dan-bahan-bangunan',
    hub: 'industri',
    path: 'industri/semen-dan-bahan-bangunan/',
    title: 'Pelatihan K3 Industri Semen & Bahan Bangunan (Cement Plant Safety)',
    h1: 'Pelatihan Keselamatan Pabrik Semen: Kiln Panas Berputar, Pengendalian Debu Silika/Kapur, dan Keselamatan Silo Semen',
    meta: 'In-house training K3 pabrik semen & bahan bangunan: bahaya suhu tinggi Rotary Kiln, pembersihan kerak cyclone preheater, keselamatan silo semen ruang terbatas, dan mitigasi penyakit silikosis.',
    imgAlt: 'Pekerja pabrik semen mengenakan respirator debu particulate dan kacamata debu memantau putaran rotary kiln pembakaran klinker',
    related: ['confined-space-entry', 'higiene-industri', 'spirometri-dan-kesehatan-paru-kerja'],
    intro: 'Pabrik semen mengoperasikan tanur putar pembakaran klinker (<em>Rotary Kiln</em>) bersuhu 1.450°C, menara preheater setinggi 100 meter, jaringan belt conveyor puluhan kilometer, dan silo penyimpanan semen curah.',
    hazards: [
      '<strong>Longsoran Kerak Panas di Preheater (Hot Meal Coating Rush):</strong> Kerak klinker panas runtuh menimpa teknisi saat pembersihan manual.',
      '<strong>Terkubur Semen Curah di Dalam Silo (Silo Engulfment):</strong> Semen beku di dinding silo runtuh menimbun pekerja di dasar silo.',
      '<strong>Penyakit Paru Silikosis Kronis:</strong> Inhalasi debu silika bebas halus (Respirable Crystalline Silica) tanpa masker FFP3/N95.'
    ],
    regulations: ['<strong>UU No. 1 Tahun 1970</strong>.', '<strong>Permenaker No. 5 Tahun 2018</strong>.', '<strong>Permenaker No. 11/2023</strong> (Ruang Terbatas).'],
    modules: [
      {
        name: 'Modul 1: Keselamatan Pemeliharaan Kiln, Preheater & Cooler Semen',
        theory: 'Prosedur Cardox blasting pemecah kerak, APD pakaian tahan panas, isolasi LOTO tanur putar saat penggantian batu tahan api.',
        practical: 'Audit prosedur pembersihan siklon preheater semen bebas semburan abu panas.'
      },
      {
        name: 'Modul 2: Silo Entry Safety & Pengendalian Debu Silika',
        theory: 'Izin masuk silo semen, pemasangan tripod harness penyelamat, sistem dust collector bag filter, pemantauan spirometri tahunan.',
        practical: 'Simulasi penyelamatan darurat pekerja terjebak di dalam silo semen.'
      }
    ],
    equipment: ['High Heat Aluminized Apron & Gaiters.', 'Tripod Winch Penyelamat Silo.', 'Respirator Partikulat FFP3 / N100.'],
    participants: ['Production Manager Pabrik Semen, Operator Kiln, Maintenance Preheater, dan Industrial Hygienist.'],
    tableData: {
      headers: ['Stasiun Pabrik Semen', 'Suhu / Bahaya Utama', 'Peralatan Keselamatan Wajib'],
      rows: [
        ['Rotary Kiln (Tanur Putar)', '1.450°C Radiasi Panas Ekstrem', 'LOTO Motor Penggerak Kiln + Kacamata Shade IR/UV'],
        ['Menara Preheater Cyclone', 'Semburan abu panas tekanan positif', 'Pakaian Tahan Panas + Penutup Wajah Full Face Shield'],
        ['Silo Semen Curah', 'Bahaya tertimbun & sesak napas', 'Tripod Harness + Life-line + Monitor Oksigen']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/confined-space-entry/', label: 'Pelatihan Confined Space' },
      { href: '/kategori-pelatihan/higiene-industri/', label: 'Pelatihan Higiene Industri' }
    ],
    faqs: [
      {
        q: 'Apa bahaya terbesar saat teknisi masuk ke dalam Silo Semen untuk pembersihan?',
        a: 'Bahayanya adalah fenomena Bridging (semen menggantung di dinding atas). Saat dasar semen dikeruk, kubah semen di atas dapat runtuh tiba-tiba dan menimbun pekerja di dalamnya (engulfment) seketika.'
      }
    ]
  },

  // 39. Galangan Kapal & Dok
  {
    key: 'galangan-kapal-dan-dok',
    hub: 'industri',
    path: 'industri/galangan-kapal-dan-dok/',
    title: 'Pelatihan K3 Galangan Kapal & Dok (Shipyard Safety)',
    h1: 'Pelatihan Keselamatan Galangan Kapal (Shipyard): Hot Work di Ruang Palka Terbatas, Sandblasting, dan Keselamatan Graving Dock',
    meta: 'In-house training K3 galangan kapal (shipyard & dry dock): keselamatan kerja panas di tangki bahan bakar kapal (Gas Freeing), abrasive sandblasting, kelaikan perancah gantung dok, dan sertifikasi Shipyard Safety.',
    imgAlt: 'Pekerja galangan kapal melakukan pengelasan di lambung kapal raksasa di dalam graving dry dock',
    related: ['confined-space-entry', 'hot-work-safety', 'gas-tester', 'welding-safety'],
    intro: 'Galangan pembuatan dan perbaikan kapal (<em>Shipyard &amp; Ship Repair</em>) memadukan pekerjaan panas pengelasan ribuan titik di dalam ruang lambung ganda kapal yang sempit, pembersihan karat blasting tekanan 7 bar, dan operasi pengedokan di graving dock.',
    hazards: [
      '<strong>Ledakan Uap Minyak di Tangki Palka Kapal:</strong> Menyalakan api las di tangki ballast kapal yang belum dinyatakan Bebas Gas (Gas Free).',
      '<strong>Racun Timbal & Silika Blasting Tekanan Tinggi:</strong> Semburan pasir grit blasting mengenai tubuh atau terhirup paru-paru.',
      '<strong>Pintu Dok Kering Jebol (Dock Gate Breach):</strong> Air laut masuk menenggelamkan ribuan pekerja di dasar graving dock.'
    ],
    regulations: ['<strong>Standar OSHA 29 CFR 1915</strong> (Occupational Safety and Health Standards for Shipyard Employment).', '<strong>Permenaker No. 11/2023</strong>.'],
    modules: [
      {
        name: 'Modul 1: Prosedur Sertifikasi Bebas Gas (Gas Freeing Certificate)',
        theory: 'Uji LEL tangki bahan bakar kapal, sertifikat Marine Chemist, ventilasi paksa fan palka kapal sebelum hot work.',
        practical: 'Pengujian kadar gas LEL dan O2 pada model tangki double bottom kapal.'
      },
      {
        name: 'Modul 2: Keselamatan Sandblasting & Perancah Dok Kapal',
        theory: 'Penggunaan Air-Fed Blasting Helmet, Deadman Handle nozel sandblasting, perakitan perancah gantung lambung kapal.',
        practical: 'Uji fungsi saklar otomatis Deadman Switch pada nozel blasting.'
      }
    ],
    equipment: ['Marine Multi-Gas Explosimeter.', 'Air-Supplied Sandblasting Helmet & Blast Hose Deadman Switch.'],
    participants: ['Shipyard Safety Superintendent, Dock Master, Tukang Las Kapal, dan Blasting Supervisor.'],
    tableData: {
      headers: ['Aktivitas Galangan Kapal', 'Syarat Izin Kerja Mutlak', 'Bahaya Kritis Utama'],
      rows: [
        ['Pengelasan Tangki Palka Kapal', 'Sertifikat Gas-Free Aktif (LEL = 0%)', 'Ledakan uap solar/minyak sisa kargo'],
        ['Abrasive Sandblasting Lambung', 'Blasting Permit + APD Air-Fed Helmet', 'Luka robek semburan grit & Penyakit Silikosis'],
        ['Pengedokan Kapal di Dry Dock', 'Docking Safety Permit + Uji Pompa Dewatering', 'Struktur balok keel block runtuh menimpa pekerja']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/hot-work-safety/', label: 'Pelatihan Hot Work Safety' },
      { href: '/kategori-pelatihan/gas-tester/', label: 'Pelatihan Gas Tester' }
    ],
    faqs: [
      {
        q: 'Apa fungsi Gas-Free Certificate sebelum pekerjaan panas di galangan kapal?',
        a: 'Sertifikat Bebas Gas (Gas-Free Certificate) adalah dokumen legal resmi dari Marine Chemist / Gas Tester berwenang yang menyatakan bahwa seluruh ruang tangki kapal telah dibersihkan dan bebas dari uap hidrokarbon mudah meledak sehingga aman untuk dimasuki dan dilakukan pekerjaan pengelasan.'
      }
    ]
  },

  // 40. Pengolahan Air & Limbah (WTP / WWTP)
  {
    key: 'pengolahan-air-dan-limbah-wtp-wwtp',
    hub: 'industri',
    path: 'industri/pengolahan-air-dan-limbah-wtp-wwtp/',
    title: 'Pelatihan K3 Pengolahan Air Bersih & Air Limbah (WTP / WWTP)',
    h1: 'Pelatihan Keselamatan Instalasi Pengolahan Air & Limbah: Gas Beracun H2S/Metana di Bak Ekualisasi, Gas Klorin, dan Confined Space',
    meta: 'In-house training K3 IPAL / WWTP & WTP: mitigasi gas hidrogen sulfida (H2S) dan metana di bak sedimentasi, penanganan tabung gas klorin (Cl2) desinfeksi, dan keselamatan ruang terbatas bak pengolahan.',
    imgAlt: 'Operator IPAL mengenakan harness dan multi-gas detector melakukan pemantauan gas di atas bak aerasi instalasi pengolahan limbah',
    related: ['confined-space-entry', 'h2s-safety', 'chemical-handling'],
    intro: 'Instalasi Pengolahan Air Bersih (WTP) dan Pengolahan Air Limbah Industri (WWTP/IPAL) mengolah ribuan meter kubik air kotor dengan risiko akumulasi gas busuk mematikan H2S, metana, serta kebocoran tabung gas klorin.',
    hazards: [
      '<strong>Keracunan Gas H2S di Bak Ekualisasi / Manhole Limbah:</strong> Gas asam hidrogen sulfida melumpuhkan saraf penciuman seketika.',
      '<strong>Kebocoran Tabung Gas Klorin Ton Container (Cl2 Leak):</strong> Gas klorin padat bocor membentuk awan kuning kehijauan merusak paru-paru.',
      '<strong>Tenggelam di Kolam Aerasi Berbusa:</strong> Kerapatan air aerasi yang rendah membuat korban tenggelam meskipun bisa berenang.'
    ],
    regulations: ['<strong>UU No. 1 Tahun 1970</strong>.', '<strong>Permen LHK No. P.68/2016</strong>.', '<strong>Permenaker No. 11/2023</strong>.'],
    modules: [
      {
        name: 'Modul 1: Mitigasi Gas Beracun H2S & Keselamatan Bak Tertutup IPAL',
        theory: 'Dinamika fermentasi anaerobik limbah, pengukuran gas 4 parameter, tripod winch rescue, ventilasi blower udara segar.',
        practical: 'Praktik masuk bak pengolahan limbah dengan blower ventilasi dan SCBA darurat.'
      },
      {
        name: 'Modul 2: Penanganan Darurat Gas Klorin (Chlorine Emergency Kit B)',
        theory: 'Pemasangan Chlorine Emergency Capping Device pada tabung klorin 1 ton, scrubber netralisasi klorin, APD Level A.',
        practical: 'Drill pemasangan klem penutup kebocoran katup tabung klorin darurat.'
      }
    ],
    equipment: ['Chlorine Emergency Kit B (Ton Container).', 'Multi-Gas Detector H2S/CH4/O2/CO.', 'Tripod Winch & Man-Riding Harness.'],
    participants: ['Supervisor IPAL/WWTP, Operator WTP Air Bersih, Environmental Technician, dan Safety Officer Pengolahan Limbah.'],
    tableData: {
      headers: ['Unit Pengolahan IPAL / WTP', 'Gas Berbahaya Utama', 'SOP Keselamatan Mutlak'],
      rows: [
        ['Bak Ekualisasi & Sumur Pompa Limbah', 'Gas H2S (Hidrogen Sulfida) & CH4', 'Wajib tes gas + Blower udara + Tripod Harness'],
        ['Ruang Klorinasi Disinfeksi', 'Gas Klorin (Cl2) Sangat Korosif', 'Emergency Kit B standby + Sensor Klorin 0.5 ppm'],
        ['Bak Aerasi Air Berbuih', 'Bahaya tenggelam (Air aerasi tidak menopang berat)', 'Pelampung Lifebuoy + Guardrail keliling 1.1 meter']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/confined-space-entry/', label: 'Pelatihan Confined Space' },
      { href: '/kategori-pelatihan/h2s-safety/', label: 'Pelatihan H2S Safety' }
    ],
    faqs: [
      {
        q: 'Mengapa seseorang sangat mudah tenggelam jika jatuh ke dalam Bak Aerasi IPAL?',
        a: 'Karena bak aerasi dipenuhi jutaan gelembung udara aktif dari blower dasar kolam yang membuat densitas (kerapatan jenis) air turun drastis, sehingga daya apung tubuh manusia hilang total dan korban akan langsung tenggelam ke dasar bak meskipun mahir berenang.'
      }
    ]
  },
  ...batch5RegionalAndStandards,
  ...batch5Part3Data
];

console.log(`Loaded TOTAL ${batch5List.length} programs for Batch 5.`);
