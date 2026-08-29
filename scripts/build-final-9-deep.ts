import fs from 'fs';
import path from 'path';
import { renderProgramHtml, ProgramDetail } from './master-batch1-data';

const finalPrograms: ProgramDetail[] = [
  // 19. Operator Reach Truck
  {
    key: 'operator-reach-truck',
    title: 'Pelatihan Operator Reach Truck: Material Handling Racking Tinggi',
    h1: 'Pelatihan Operator Reach Truck: Manuver di Lorong Sempit (Narrow Aisle) dan Racking Tingkat Tinggi',
    meta: 'Pelatihan reach truck gudang logistik: teknik stowing & picking pada ketinggian 8-12 meter, manajemen kapasitas beban vertikal, dan manuver lorong sempit.',
    imgAlt: 'Operator mengemudikan reach truck elektrik mengambil palet barang pada sistem racking bertingkat tinggi',
    related: ['operator-forklift', 'operator-pallet-stacker', 'kategori-pelatihan/logistik-pergudangan'],
    intro: 'Gudang modern berkonsep High Density Storage mengandalkan <strong>Reach Truck</strong> untuk memaksimalkan efisiensi ruang penyimpanan vertikal. Pelatihan ini melatih presisi dan kestabilan operator dalam bermanuver di lorong sempit (<em>Very Narrow Aisle / VNA</em>) serta melakukan stowing dan picking pada ketinggian 8 hingga 12 meter tanpa merusak struktur racking.',
    hazards: [
      '<strong>De-Rating Kapasitas Beban di Ketinggian:</strong> Mengangkat beban penuh pada ketinggian tiang maksimum melebihi kurva Residual Capacity.',
      '<strong>Tabrakan dengan Tiang Racking (Upright Column Strike):</strong> Menabrak tiang rak saat berbelok di lorong sempit yang memicu keruntuhan rak bertingkat.',
      '<strong>Visibilitas Terbatas ke Atas:</strong> Kesalahan memperkirakan posisi garpu saat memasukkan palet ke beam level atas.'
    ],
    regulations: [
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang K3 Pesawat Angkat dan Angkut.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Standar ASME B56.1</strong> (Safety Standard for High Lift Industrial Trucks).'
    ],
    modules: [
      {
        name: 'Modul 1: Kurva Kapasitas Beban Residual (Residual Capacity Chart)',
        theory: 'Prinsip pengurangan kapasitas beban seiring pertambahan tinggi tiang mast, kalkulasi batas beban pada level 1 s.d level 6.',
        practical: 'Audit tabel kapasitas beban unit reach truck dan perhitungan berat palet barang.'
      },
      {
        name: 'Modul 2: Teknik Manuver Lorong Sempit (Narrow Aisle Navigation)',
        theory: 'Radius putar kemudi elektrik 360°/180°, sistem pengereman regeneratif, penggunaan kamera mast.',
        practical: 'Praktik manuver maju mundur dan docking di lorong selebar 2.8 meter.'
      },
      {
        name: 'Modul 3: Presisi Stowing & Picking Ketinggian 10 Meter',
        theory: 'Fungsi reach out/in, side shifter, tilt mast, ketinggian clearance garpu 5 cm di atas beam rak.',
        practical: 'Simulasi pengambilan dan penempatan palet di rak level 5 seberat 1.0 ton.'
      },
      {
        name: 'Modul 4: Manajemen Perawatan Baterai Elektrik & Charging',
        theory: 'Karakteristik baterai Lithium-Ion vs Lead Acid, ventilasi ruang charging (mencegah gas H2), APD asam baterai.',
        practical: 'SOP penyambungan kabel charger, pengecekan level air aki, dan daily battery check.'
      }
    ],
    equipment: [
      'Unit Reach Truck Elektrik kapasitas 2 Ton dengan mast jangkauan 9-11 meter.',
      'Sistem Racking Gudang Selektif Bertingkat Tinggi.',
      'Camera Monitor Display Mast dan Wear Gauge Garpu.'
    ],
    participants: [
      'Operator Reach Truck Gudang E-Commerce, 3PL, FMCG, dan Cold Storage.',
      'Warehouse Supervisor, Inventory Lead, dan Safety Officer Logistik.'
    ],
    tableData: {
      headers: ['Ketinggian Angkat Mast', 'Kapasitas Angkat Maksimum', 'Batas Kecepatan Manuver', 'Tindakan Keamanan'],
      rows: [
        ['0 – 3 Meter (Level 1-2)', '2.000 kg (100% Kapasitas)', 'Maks. 8 km/jam', 'Manuver standar dengan tilt back'],
        ['3 – 7 Meter (Level 3-4)', '1.500 kg (75% Kapasitas)', 'Maks. 3 km/jam (Creep Mode)', 'Wajib periksa kestabilan palet'],
        ['7 – 11 Meter (Level 5-6)', '1.000 kg (50% Kapasitas)', 'Hanya manuver mikro di tempat', 'Wajib menggunakan bantuan monitor kamera']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/operator-forklift/', label: 'Pelatihan Operator Forklift' },
      { href: '/kategori-pelatihan/operator-pallet-stacker/', label: 'Pelatihan Operator Pallet Stacker' },
      { href: '/kategori-pelatihan/keselamatan-alat-berat/', label: 'Pelatihan Keselamatan Alat Berat' }
    ],
    faqs: [
      {
        q: 'Apa tantangan terbesar mengoperasikan Reach Truck dibanding Forklift biasa?',
        a: 'Tantangan terbesar adalah de-rating kapasitas beban di ketinggian puncak (semakin tinggi mast memanjang, kapasitas angkat turun signifikan), visibilitas terbatas ke atas, dan pergerakan kemudi yang sangat responsif di lorong sempit (narrow aisle).'
      }
    ]
  },

  // 20. Operator Pallet Stacker
  {
    key: 'operator-pallet-stacker',
    title: 'Pelatihan Operator Pallet Stacker: Keselamatan Material Handling Elektrik',
    h1: 'Pelatihan Operator Pallet Stacker: Operasi Walkie & Ride-On Stacker, Ergonomi, dan Anti-Crush Safety',
    meta: 'Pelatihan pallet stacker elektrik: proteksi bahaya terjepit kaki (foot protection), manuver di area terbatas, tombol anti-crush belly switch, dan SOP charging.',
    imgAlt: 'Pekerja mengoperasikan walkie pallet stacker elektrik memindahkan boks logistik di lorong gudang',
    related: ['operator-reach-truck', 'operator-forklift', 'kategori-pelatihan/logistik-pergudangan'],
    intro: 'Pallet stacker elektrik (tipe walkie maupun ride-on) sering dianggap remeh oleh pekerja gudang karena ukurannya yang kompak, padahal bobot unit bersama muatan dapat mencapai 2–3 ton dan berpotensi menghancurkan kaki pejalan kaki seketika jika terjadi kehilangan kendali.',
    hazards: [
      '<strong>Terjepit di Dinding / Rak (Crush Hazard):</strong> Operator terjepit di antara tuas kendali dan struktur bangunan saat memundurkan unit di area buntu.',
      '<strong>Terlindas Roda (Foot Clearance Strike):</strong> Kaki operator atau rekan kerja terlindas roda beban di bawah chasis.',
      '<strong>Terguling di Rampa Miring:</strong> Bermanuver belok di atas rampa pemuatan kontainer.'
    ],
    regulations: [
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang K3 Pesawat Angkat dan Angkut.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Standar EN ISO 3691-1</strong> (Industrial Trucks - Safety Requirements).'
    ],
    modules: [
      {
        name: 'Modul 1: Anatomi Tiller Head & Fitur Keselamatan Darurat',
        theory: 'Fungsi Belly Switch (Emergency Reverse Button), Emergency Disconnect Button, horn, throttle butterfly.',
        practical: 'Uji respons tombol belly switch saat mengenai tubuh operator.'
      },
      {
        name: 'Modul 2: Ergonomi Gerak & Posisi Berdiri/Berjalan Aman',
        theory: 'Sudut memegang tuas kemudi, posisi berjalan di samping unit saat mundur (bukan di depan unit), proteksi sepatu safety steel-toe.',
        practical: 'Drill berjalan membawa muatan 1.5 ton di lorong mezzanine.'
      },
      {
        name: 'Modul 3: Penataan Beban Palet & Batas Kemiringan Rampa',
        theory: 'Pusat gravitasi palet, beban simetris, larangan melintas menyilang di lereng rampa.',
        practical: 'Simulasi menaiki rampa loading dock kontainer dengan beban di depan.'
      }
    ],
    equipment: [
      'Unit Walkie & Ride-On Electric Pallet Stacker kapasitas 1.5 Ton.',
      'Palet Beban Uji dan Traffic Cones.',
      'Formulir Checklist Pra-Operasi Harian Stacker.'
    ],
    participants: [
      'Operator Pergudangan, Petugas Loading Dock, dan Staff Logistik Retail.',
      'Supervisor Gudang dan Petugas Keselamatan Kerja.'
    ],
    tableData: {
      headers: ['Fitur Keselamatan', 'Lokasi pada Stacker', 'Fungsi Perlindungan', 'Uji Pre-Shift'],
      rows: [
        ['Belly Reversal Button', 'Ujung tuas Tiller Head', 'Membalikkan arah laju otomatis saat tertekan badan', 'Wajib diuji tekan sebelum digunakan'],
        ['Emergency Disconnect', 'Bagian atas bodi baterai', 'Memutus seluruh daya listrik seketika', 'Uji coba putus daya saat diam'],
        ['Foot Protector Flange', 'Bagian bawah chasis roda', 'Mencegah kaki masuk ke bawah roda unit', 'Periksa ketiadaan celah deformasi']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/operator-forklift/', label: 'Pelatihan Operator Forklift' },
      { href: '/kategori-pelatihan/operator-reach-truck/', label: 'Pelatihan Operator Reach Truck' }
    ],
    faqs: [
      {
        q: 'Apa fungsi tombol Belly Switch (Emergency Reverse) pada handle stacker?',
        a: 'Belly switch adalah tombol pengaman darurat di ujung tuas kemudi yang secara otomatis membalikkan arah laju stacker menjauh dari tubuh operator jika tuas tertekan ke badan operator, guna mencegah bahaya terjepit di dinding atau rak.'
      }
    ]
  },

  // 22. Operator Mobile Crane
  {
    key: 'operator-mobile-crane',
    title: 'Pelatihan Operator Mobile Crane: Pengoperasian All Terrain & Rough Terrain',
    h1: 'Pelatihan Operator Mobile Crane: Setup Outrigger, Perhitungan Jangkauan Boom, dan Operasi Lapangan',
    meta: 'Pelatihan mobile crane: perhitungan ground stability matting, defleksi boom hidrolik, manuver travel dengan beban (pick & carry), dan mitigasi kabel listrik udara.',
    imgAlt: 'Mobile crane hidrolik memanjangkan boom teleskopik di area proyek konstruksi industri',
    related: ['operator-crane', 'rigger', 'lifting-operation-safety', 'signalman'],
    intro: 'Mobile Crane (Truk Crane, Rough Terrain, All Terrain, Crawler Crane) adalah tulang punggung proyek konstruksi dan industri migas. Mobilitas unit ini menjadikannya sangat rentan terhadap kegagalan pondasi tanah dan sengatan kabel listrik jika persiapan outrigger diabaikan.',
    hazards: [
      '<strong>Amblesnya Outrigger di Tanah Lunak:</strong> Outrigger amblas saat boom mengangkat beban penuh memicu crane terguling.',
      '<strong>Sengatan Kabel Listrik Tegangan Tinggi:</strong> Ujung boom atau wire rope menyentuh kabel transmisi PLN di area proyek.',
      '<strong>Defleksi Boom Menambah Radius Beban:</strong> Boom melengkung saat beban terangkat sehingga radius bertambah dan melewati batas tabel beban.'
    ],
    regulations: [
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang K3 Pesawat Angkat dan Angkut.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Standar ASME B30.5</strong> (Mobile and Locomotive Cranes).'
    ],
    modules: [
      {
        name: 'Modul 1: Setup Outrigger & Stabilisasi Landasan Tanah',
        theory: 'Prinsip 100% outrigger extension, penggunaan pelat landasan (timber/steel mats), perhitungan daya dukung tanah.',
        practical: 'Praktik penataan outrigger matting dan leveling bubble crane di tanah berkontur.'
      },
      {
        name: 'Modul 2: Pengoperasian Boom Teleskopik & Pembacaan LMI',
        theory: 'Urutan pemanjangan section boom, defleksi boom hidrolik, konfigurasi sudut boom vs kapasitas.',
        practical: 'Simulasi manuver teleskopik dan pemantauan display LMI saat beban terangkat.'
      },
      {
        name: 'Modul 3: Mitigasi Bahaya Jaringan Listrik Udara (Power Lines)',
        theory: 'Jarak bebas aman minimal (OSHA 10-ft / 20-ft rule), penggunaan dedicated spotter, prosedur darurat jika tersengat.',
        practical: 'Drill simulasi manuver aman di dekat jaringan simulasi kabel listrik.'
      }
    ],
    equipment: [
      'Unit Mobile Crane Hidrolik 25-50 Ton dengan sistem LMI dan outrigger sensor.',
      'Bantalan Kayu Keras (Timber Outrigger Pads) dan Steel Spreader Plates.',
      'Laser Distance Meter, Anemometer, dan Inclinometer digital.'
    ],
    participants: [
      'Operator Mobile Crane, Truk Crane, dan Rough Terrain Crane.',
      'Mekanik Alat Berat, Rigging Supervisor, dan Safety Officer.'
    ],
    tableData: {
      headers: ['Tegangan Kabel Listrik Udara', 'Jarak Bebas Aman Minimal (Clearance)', 'Kebutuhan Pengawasan Khusus'],
      rows: [
        ['Hingga 50 kV', 'Minimal 3.05 Meter (10 Kaki)', 'Wajib ditandai rambu batas elevasi'],
        ['50 kV – 200 kV', 'Minimal 4.60 Meter (15 Kaki)', 'Wajib dedicated spotter dengan radio khusus'],
        ['200 kV – 350 kV (SUTET)', 'Minimal 6.10 Meter (20 Kaki)', 'Wajib koordinasi resmi izin padam PLN']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/operator-crane/', label: 'Pelatihan Operator Crane' },
      { href: '/kategori-pelatihan/rigger/', label: 'Pelatihan Rigger' },
      { href: '/kategori-pelatihan/lifting-supervisor/', label: 'Pelatihan Lifting Supervisor' }
    ],
    faqs: [
      {
        q: 'Berapa jarak aman minimal mobile crane dari jaringan kabel listrik tegangan tinggi?',
        a: 'Standar OSHA dan K3 menetapkan jarak bebas minimal 3 meter (10 kaki) untuk kabel tegangan hingga 50 kV, dan bertambah 10 cm untuk setiap kenaikan 10 kV di atasnya.'
      }
    ]
  },

  // 23. Operator Overhead Crane
  {
    key: 'operator-overhead-crane',
    title: 'Pelatihan Operator Overhead Crane: Hoisting Pabrik Manufaktur',
    h1: 'Pelatihan Operator Overhead Crane: Kontrol Pendant & Remote Wireless, Anti-Sway, dan Inspeksi Harian',
    meta: 'Pelatihan overhead traveling crane (EOT): teknik meredam ayunan beban (anti-sway), inspeksi limit switch atas/bawah, wire rope drum, brake testing, dan safety pendant control.',
    imgAlt: 'Pekerja di pabrik manufaktur menggunakan remote control wireless mengoperasikan overhead traveling crane',
    related: ['operator-gantry-crane', 'operator-hoist', 'rigger'],
    intro: 'Overhead Crane (Electric Overhead Traveling - EOT) beroperasi tepat di atas kepala pekerja di lantai pabrik manufaktur, peleburan baja, dan pembangkit listrik. Pelatihan ini melatih operator lantai menggunakan kontrol gantung (pendant) maupun remote wireless dengan kepatuhan keselamatan tinggi.',
    hazards: [
      '<strong>Ayunan Beban Liar (Load Sway):</strong> Muatan berayun menghantam mesin produksi atau pekerja di lantai kerja.',
      '<strong>Kegagalan Limit Switch Atas (Two-Blocking):</strong> Hook block menabrak drum gulung hingga tali kawat baja putus seketika.',
      '<strong>Melintasi di Atas Kepala Pekerja:</strong> Membawa muatan melintasi jalur pejalan kaki tanpa membunyikan sirine peringatan.'
    ],
    regulations: [
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang K3 Pesawat Angkat dan Angkut.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Standar ASME B30.2</strong> (Overhead and Gantry Cranes).'
    ],
    modules: [
      {
        name: 'Modul 1: Anatomi EOT Crane & Uji Sistem Keselamatan',
        theory: 'Bridge girder, end carriage, hoist trolley, brake shoe/disc, upper/lower limit switches, emergency stop.',
        practical: 'Pemeriksaan harian limit switch atas dan pengujian rem hoisting saat menahan beban uji.'
      },
      {
        name: 'Modul 2: Teknik Meredam Ayunan Beban (Anti-Sway Technique)',
        theory: 'Fisika pendulum muatan, teknik akselerasi bertahap, counter-steering saat muatan mencapai puncak ayunan.',
        practical: 'Manuver menggerakkan beban 5 ton melewati jalur sempit tanpa ada ayunan muatan.'
      },
      {
        name: 'Modul 3: Standar Operasional Remote Wireless & Jalur Aman Lantai',
        theory: 'Posisi berdiri operator (selalu berada di luar lintasan gerak beban), mitigasi sinyal radio macet, docking remote.',
        practical: 'Simulasi pemindahan cetakan mesin (moulding die) seberat 8 ton dengan remote control.'
      }
    ],
    equipment: [
      'Unit Overhead Crane Double Girder 10 Ton dengan Remote Wireless & Pendant Control.',
      'Beban Uji Terkalibrasi dan Vernier Caliper Pengukur Alur Drum Tali Baja.',
      'Checklist Formulir Inspeksi Harian EOT Crane.'
    ],
    participants: [
      'Operator Overhead Crane Pabrik Fabrikasi, Otomotif, dan Pengecoran Logam.',
      'Teknisi Maintenance Mekanik/Elektrik Pabrik.',
      'Safety Officer dan Pengawas Lini Produksi.'
    ],
    tableData: {
      headers: ['Item Pemeriksaan Harian', 'Kondisi Standar Layak', 'Tindakan Jika Gagal'],
      rows: [
        ['Upper Limit Switch', 'Memutus gerakan hoist sebelum hook block menyentuh drum', 'Hentikan operasi segera, perbaiki limit switch'],
        ['Rem Hoisting (Brake)', 'Beban tidak meluncur turun saat tuas kendali dilepas', 'Setel ulang brake shoe atau ganti disc rem'],
        ['Wire Rope Drum', 'Tali baja tersusun rapi di alur tanpa tumpang tindih (cross-winding)', 'Lakukan spooling ulang tali kawat baja']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/operator-gantry-crane/', label: 'Pelatihan Operator Gantry Crane' },
      { href: '/kategori-pelatihan/operator-hoist/', label: 'Pelatihan Operator Hoist' },
      { href: '/kategori-pelatihan/rigger/', label: 'Pelatihan Rigger' }
    ],
    faqs: [
      {
        q: 'Bagaimana teknik meredam ayunan (sway) beban pada overhead crane?',
        a: 'Teknik anti-sway dilakukan dengan melakukan akselerasi dan deselerasi bridge atau troli secara bertahap, serta melakukan counter-steering (menggerakkan crane mengikuti arah ayunan muatan saat mencapai puncak ayunan) agar tali kembali tegak lurus.'
      }
    ]
  },

  // 24. Operator Gantry Crane
  {
    key: 'operator-gantry-crane',
    title: 'Pelatihan Operator Gantry Crane: Pelabuhan & Fabrikasi Balok Baja',
    h1: 'Pelatihan Operator Gantry Crane: Pengoperasian Rel & Ban Karet (RTG), Wind Alarm Safety, dan Spreader Control',
    meta: 'Pelatihan gantry crane pelabuhan & fabrikasi: sistem penguncian badai (storm clamp), penanganan kontainer/balok girder berat, dan safety travel interlock.',
    imgAlt: 'Gantry crane raksasa beroperasi di atas rel memindahkan struktur balok baja besar di area fabrikasi',
    related: ['operator-overhead-crane', 'operator-hoist', 'rigger'],
    intro: 'Gantry Crane (Portal Crane) bekerja di area terbuka pelabuhan peti kemas (RTG/RMG), galangan kapal, dan yard fabrikasi balok beton/baja pracetak. Pelatihan ini melatih operator mengendalikan unit berkapasitas puluhan hingga ratusan ton di bawah paparan cuaca dinamis.',
    hazards: [
      '<strong>Crane Terdorong Badai Angin (Runaway Crane):</strong> Ketiadaan penguncian klem rel (rail storm clamp) saat badai angin kencang.',
      '<strong>Tabrakan Travel Rel (Gantry Collision):</strong> Menabrak material atau kendaraan yang menghalangi jalur rel gantry.',
      '<strong>Kait Spreader Terlepas (Twistlock Failure):</strong> Mengangkat kontainer saat pin pengunci twistlock belum mengunci sempurna.'
    ],
    regulations: [
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang K3 Pesawat Angkat dan Angkut.',
      '<strong>Standar ASME B30.2</strong> dan <strong>BS 7121 Part 2</strong>.'
    ],
    modules: [
      {
        name: 'Modul 1: Anatomi Gantry Portal & Sistem Pengunci Badai',
        theory: 'Struktur portal leg, rail clamp hidrolik, anemometer interlock, anti-collision ultrasonic sensor.',
        practical: 'Uji fungsi penguncian storm brake dan simulasi respon alarm angin kencang.'
      },
      {
        name: 'Modul 2: Penanganan Muatan Berat & Balok Girder',
        theory: 'Kalkulasi lendutan balok girder, koordinasi dual trolley hoist, penataan stockpile yard.',
        practical: 'Praktik pengangkatan dan penempatan balok beton girder seberat 30 ton.'
      }
    ],
    equipment: [
      'Unit Rail-Mounted Gantry Crane / Rubber Tired Gantry (RTG) dengan Automatic Spreader.',
      'Anemometer Terintegrasi dan Ultrasonic Anti-Collision Sensor.'
    ],
    participants: ['Operator Gantry Crane Pelabuhan, Galangan Kapal, dan Pabrik Pracetak Beton.'],
    tableData: {
      headers: ['Parameter Operasi', 'Batas Normal', 'Batas Peringatan', 'Batas Darurat (Stop Total)'],
      rows: [
        ['Kecepatan Angin', '< 12 m/s', '12 – 16 m/s (Hentikan beban luas)', '> 16 m/s (Kunci Storm Clamp seketika)'],
        ['Jarak Sensor Rel', '> 10 Meter', '5 – 10 Meter (Alarm deselerasi)', '< 3 Meter (Rem otomatis aktif)']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/operator-overhead-crane/', label: 'Pelatihan Overhead Crane' },
      { href: '/kategori-pelatihan/rigger/', label: 'Pelatihan Rigger' }
    ],
    faqs: [
      {
        q: 'Apa fungsi Rail Clamp / Storm Lock pada Gantry Crane?',
        a: 'Rail clamp adalah sistem pengunci mekanik/hidrolik otomatis yang mencengkeram rel ketika angin kencang melebihi batas operasional, guna mencegah crane terdorong badai (runaway crane).'
      }
    ]
  },

  // 25. Operator Hoist
  {
    key: 'operator-hoist',
    title: 'Pelatihan Operator Electric Hoist & Monorail: Angkat Ringan Bengkel',
    h1: 'Pelatihan Operator Electric Hoist: Standar Pemasangan Beban, Chain/Rope Inspection, dan Pencegahan Overload',
    meta: 'Pelatihan operator hoist gantung: kapasitas SWL monorail, inspeksi rantai aus & hook latch safety, SOP pengangkatan material bengkel, dan isolasi daya emergency.',
    imgAlt: 'Teknisi bengkel mengaitkan rantai electric hoist pada blok mesin sebelum mengangkatnya ke meja kerja',
    related: ['operator-overhead-crane', 'rigger'],
    intro: 'Electric Chain Hoist dan Wire Rope Hoist pada rel monorail adalah alat bantu harian di ribuan bengkel perbaikan, lini perakitan, dan gudang material. Penggunaan yang salah sering menyebabkan rantai putus atau rel monorail melengkung akibat tarikan miring (<em>side-pulling</em>).',
    hazards: [
      '<strong>Menarik Beban Miring (Side-Pulling):</strong> Menarik beban dari samping yang memicu rantai melompat dari sprocket atau monorail terpuntir.',
      '<strong>Rantai Beban Aus / Retak:</strong> Mengabaikan pengukuran peregangan rantai (chain stretch) akibat pembebanan berlebih.',
      '<strong>Safety Latch Hook Rusak:</strong> Menggunakan hook tanpa lidah pengaman sehingga tali sling terlepas saat beban diangkat.'
    ],
    regulations: [
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang K3 Pesawat Angkat dan Angkut.',
      '<strong>Standar ASME B30.16</strong> (Overhead Underhung and Stationary Hoists).'
    ],
    modules: [
      {
        name: 'Modul 1: Anatomi Electric Hoist & Inspeksi Rantai/Kabel',
        theory: 'Chain guide, load sprocket, hook throat opening, limit switch, pengukur keausan mata rantai.',
        practical: 'Pengukuran keausan diameter rantai beban menggunakan caliper khusus.'
      },
      {
        name: 'Modul 2: Prosedur Pengangkatan Tegak Lurus & Rigging Ringan',
        theory: 'Prinsip angkat tegak lurus (vertical lift only), larangan melilit rantai ke beban, pemilihan shackle.',
        practical: 'Praktik pengangkatan komponen motor listrik seberat 2 ton dengan pendant control.'
      }
    ],
    equipment: ['Electric Chain Hoist 2-5 Ton dengan Monorail Trolley.', 'Caliper Chain Wear Gauge dan Test Weight.'],
    participants: ['Mekanik Bengkel, Operator Pabrik Perakitan, dan Teknisi Maintenance.'],
    tableData: {
      headers: ['Kriteria Kerusakan Rantai Hoist', 'Batas Toleransi Maksimum', 'Tindakan'],
      rows: [
        ['Peregangan Panjang Rantai (Pitch Stretch)', 'Maks. 2% pertambahan panjang', 'Ganti seluruh rantai beban baru'],
        ['Pengurangan Diameter Mata Rantai', 'Maks. 10% keausan diameter', 'Afkir rantai seketika'],
        ['Pelebaran Bukaan Kait Hook (Throat Opening)', 'Maks. 5% dari dimensi awal', 'Ganti hook unit lengkap dengan safety latch']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/operator-overhead-crane/', label: 'Pelatihan Overhead Crane' },
      { href: '/kategori-pelatihan/rigger/', label: 'Pelatihan Rigger' }
    ],
    faqs: [
      {
        q: 'Bolehkah rantai electric hoist dililitkan langsung ke sekeliling muatan?',
        a: 'Dilarang keras. Rantai beban hoist tidak boleh dililitkan langsung ke sekeliling muatan sebagai tali ikat (choker). Pengikatan muatan wajib selalu menggunakan webbing sling atau shackle terpisah.'
      }
    ]
  },

  // 27. Operator Wheel Loader
  {
    key: 'operator-wheel-loader',
    title: 'Pelatihan Operator Wheel Loader: Material Curah & Agregat',
    h1: 'Pelatihan Operator Wheel Loader: Teknik Loading Bucket, Articulated Steering Safety, dan Manuver Truk',
    meta: 'Pelatihan wheel loader: stabilitas manuver articulated steering saat bucket penuh, penataan stockpile agregat, SOP loading ke dump truck, dan perawatan transmisi powershift.',
    imgAlt: 'Wheel loader bermuatan material batu pecah melakukan manuver loading ke bak dump truck',
    related: ['operator-excavator', 'operator-dump-truck', 'keselamatan-alat-berat'],
    intro: 'Wheel Loader beroperasi dengan sistem kemudi artikulasi (<em>articulated steering</em>) yang membagi chasis menjadi dua bagian. Pelatihan ini memantapkan teknik loading material curah secara cepat tanpa membahayakan dump truck atau pejalan kaki.',
    hazards: [
      '<strong>Terguling Saat Berbelok dengan Bucket Terangkat:</strong> Sendi artikulasi berbelok tajam saat muatan penuh diangkat tinggi.',
      '<strong>Tabrakan dengan Bak Dump Truck:</strong> Menabrak dinding samping dump truck akibat jarak pandang terhalang bucket besar.',
      '<strong>Keausan Ban Ekstrem (Wheel Spin):</strong> Mendorong stockpile dengan putaran roda selip berlebihan.'
    ],
    regulations: [
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang K3 Pesawat Angkat dan Angkut.',
      '<strong>Permen ESDM No. 26 Tahun 2018</strong> (Kaidah Pertambangan).'
    ],
    modules: [
      {
        name: 'Modul 1: Dinamika Artikulasi & Stabilitas Muatan',
        theory: 'Perubahan titik berat saat bodi berartikulasi, posisi membawa muatan (carry position 30-40 cm).',
        practical: 'Praktik manuver loading V-Shape ke dump truck dalam tempo cepat dan stabil.'
      },
      {
        name: 'Modul 2: Teknik Penetrasi Stockpile & Perawatan Ban',
        theory: 'Penggunaan differential lock, teknik pengisian bucket tanpa slip roda, manajemen tekanan angin ban raksasa.',
        practical: 'Simulasi pemuatan material batu split dan penataan stockpile bertingkat.'
      }
    ],
    equipment: ['Unit Wheel Loader Kelas 3-5 m³ Bucket.', 'Formulir P2H dan Area Stockpile Agregat.'],
    participants: ['Operator Loader Tambang, Batching Plant Beton, Pabrik Semen, dan Pelabuhan Curah.'],
    tableData: {
      headers: ['Metode Loading', 'Sudut Pergerakan Loader', 'Waktu Siklus (Cycle Time)', 'Kelebihan Keselamatan'],
      rows: [
        ['V-Shape Loading', '45° – 60° terhadap truk', '30 – 40 Detik', 'Jarak tempuh minimal, visibilitas operator optimal'],
        ['Cross Loading', '90° tegak lurus', '45 – 55 Detik', 'Hanya digunakan jika area sempit membatasi manuver V']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/operator-dump-truck/', label: 'Pelatihan Operator Dump Truck' },
      { href: '/kategori-pelatihan/operator-excavator/', label: 'Pelatihan Operator Excavator' }
    ],
    faqs: [
      {
        q: 'Kapan wheel loader rentan mengalami kehilangan stabilitas guling samping?',
        a: 'Wheel loader sangat rentan terguling jika berbelok tajam pada saat bucket muatan terangkat tinggi di atas permukaan tanah, terutama di permukaan tanah yang tidak rata.'
      }
    ]
  },

  // 28. Operator Bulldozer
  {
    key: 'operator-bulldozer',
    title: 'Pelatihan Operator Bulldozer: Land Clearing & Dozing Aman',
    h1: 'Pelatihan Operator Bulldozer: Teknik Dozing Lereng, Stabilitas Track Under-Carriage, dan Ripper Safety',
    meta: 'Pelatihan operator bulldozer: penentuan sudut blade, teknik pendorongan tanah di jurang tebing, inspeksi track shoe, dan emergency rollover protection system (ROPS).',
    imgAlt: 'Bulldozer melakukan pendorongan tanah dan perataan lahan di area pembukaan proyek konstruksi',
    related: ['operator-excavator', 'operator-dump-truck', 'keselamatan-alat-berat'],
    intro: 'Bulldozer adalah mesin perintis dalam pembukaan lahan (<em>land clearing</em>), perataan (grading), dan ripping batuan keras. Pelatihan ini melatih operator mengendalikan tenaga raksasa mesin pada lereng-lereng curam dengan proteksi keselamatan tinggi.',
    hazards: [
      '<strong>Terguling di Tepi Tebing (Disposal Drop):</strong> Mendorong material melewati bibir jurang tanpa menyisakan tanggul pengaman (safety berm).',
      '<strong>Rollover di Kemiringan Lereng:</strong> Memotong lereng secara menyamping (side-hill dozing) pada kemiringan ekstrem.',
      '<strong>Tertimpa Pohon Tumbang:</strong> Menumbangkan pohon besar tanpa struktur pelindung kabin FOPS/ROPS yang kokoh.'
    ],
    regulations: [
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang K3 Pesawat Angkat dan Angkut.',
      '<strong>Kepmen ESDM 1827 K/30/MEM/2018</strong> (Pedoman K3 Pertambangan).'
    ],
    modules: [
      {
        name: 'Modul 1: Teknik Dozing Lereng & Pembentukan Safety Berm',
        theory: 'Sudut kemiringan maksimal, teknik slot dozing untuk efisiensi volume, pembuatan tanggul pembatas setinggi setengah roda.',
        practical: 'Praktik pendorongan material di tepi lereng disposal dengan safety berm.'
      },
      {
        name: 'Modul 2: Pengoperasian Ripper & Perawatan Track Undercarriage',
        theory: 'Sudut penetrasi shank ripper, pencegahan track slippage, penyetelan tegangan rantai track (track tension).',
        practical: 'Simulasi pembongkaran batuan keras menggunakan single shank ripper.'
      }
    ],
    equipment: ['Unit Bulldozer Kelas D85 / D8R dengan Semi-U Blade dan Ripper.', 'Formulir P2H Heavy Dozer.'],
    participants: ['Operator Bulldozer Tambang Batubara/Nikel, Proyek Bendungan, dan Perkebunan.'],
    tableData: {
      headers: ['Aplikasi Dozing', 'Teknik Blade yang Tepat', 'Kemiringan Maksimum Aman', 'Proteksi Operator'],
      rows: [
        ['Downhill Dozing (Menurun)', 'Gunakan gravitasi untuk mendorong beban besar', 'Maksimal 30° – 35° (Lurus searah lereng)', 'Sabuk pengaman 4 titik & kabin ROPS'],
        ['Side-Hill Cutting', 'Buka jalan berundak lapis demi lapis', 'Maksimal 15° kemiringan miring', 'Dilarang berbelok tajam di kemiringan']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/operator-excavator/', label: 'Pelatihan Operator Excavator' },
      { href: '/kategori-pelatihan/keselamatan-alat-berat/', label: 'Pelatihan Keselamatan Alat Berat' }
    ],
    faqs: [
      {
        q: 'Bagaimana prosedur aman melakukan dozing di tepi tebing atau jurang?',
        a: 'Dilarang mendorong material melewati bibir tebing secara langsung dengan pisau blade melewati batas tepi. Sisakan gundukan pengaman (safety berm/bund wall) setinggi setengah roda/track sebagai pembatas guling.'
      }
    ]
  },

  // 29. Operator Dump Truck
  {
    key: 'operator-dump-truck',
    title: 'Pelatihan Operator Dump Truck / Hauler: Hauling Tambang & Proyek',
    h1: 'Pelatihan Operator Dump Truck: Teknik Dumping di Tepi Disposal, Jarak Iring Aman, dan Retarder Braking',
    meta: 'Pelatihan dump truck tambang/konstruksi: pengendalian turunan dengan engine retarder brake, manuver mundur di disposal bertebing, blind spot spion, dan tyre safety.',
    imgAlt: 'Dump truck tambang berukuran besar menumpahkan muatan tanah di area disposal yang aman',
    related: ['operator-wheel-loader', 'operator-excavator', 'keselamatan-alat-berat'],
    intro: 'Dump Truck dan Articulated Hauler mengangkut ribuan ton material setiap shift. Pelatihan ini membekali pengemudi dengan teknik defensive driving alat berat, pencegahan terguling saat proses dumping di tanah lembek, dan kepatuhan traffic management.',
    hazards: [
      '<strong>Rem Blong di Turunan Panjang (Brake Fade):</strong> Mengandalkan rem kaki terus menerus hingga kanvas rem terbakar dan hidrolik mendidih.',
      '<strong>Terguling Saat Proses Dumping (Dumping Rollover):</strong> Menaikkan bak dump hidrolik di tanah yang miring atau ban amblas sebelah.',
      '<strong>Tabrakan Blind Spot dengan Unit Ringan (LV):</strong> Melindas kendaraan kecil yang berada di titik buta spion depan kiri.'
    ],
    regulations: [
      '<strong>Permenaker No. 8 Tahun 2020</strong> dan <strong>Kepmen ESDM No. 1827/2018</strong>.',
      '<strong>UU No. 22 Tahun 2009</strong> tentang Lalu Lintas dan Angkutan Jalan.'
    ],
    modules: [
      {
        name: 'Modul 1: Teknik Retarder Braking di Turunan Curam',
        theory: 'Prinsip Hydraulic Retarder / Exhaust Brake, pemilihan gigi transmisi rendah sebelum turunan (gear matching).',
        practical: 'Praktik menuruni turunan curam bermuatan 30 ton tanpa menginjak pedal rem kaki.'
      },
      {
        name: 'Modul 2: Prosedur Dumping Aman di Disposal Bertebing',
        theory: 'Verifikasi kerataan tanah, kontak pandang dengan juru parkir (spotter), jarak ban ke bund wall 1 meter.',
        practical: 'Simulasi manuver mundur 90° dan penumpahan muatan tanah di area disposal.'
      }
    ],
    equipment: ['Unit Dump Truck Rigid / Articulated 30-40 Ton.', 'Radio Komunikasi Tambang dan Safety Flag Pole.'],
    participants: ['Driver Hauler Tambang, Dump Truck Proyek Infrastruktur, dan Quarry.'],
    tableData: {
      headers: ['Kondisi Jalur Hauling', 'Jarak Iring Aman Minimal', 'Kecepatan Maksimum', 'Penggunaan Rem'],
      rows: [
        ['Jalan Kering Normal', 'Minimal 3x panjang unit (30-40 meter)', 'Maks. 40 km/jam', 'Service Brake + Retarder'],
        ['Jalan Basah / Licin (Hujan)', 'Minimal 5x panjang unit (60-80 meter)', 'Maks. 25 km/jam', 'Retarder halus, hindari rem mendadak'],
        ['Turunan Curam (>8%)', 'Minimal 4x panjang unit', 'Maks. 15 km/jam (Gigi 1 / 2)', 'Full Retarder Brake Control']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/keselamatan-alat-berat/', label: 'Pelatihan Keselamatan Alat Berat' },
      { href: '/kategori-pelatihan/operator-excavator/', label: 'Pelatihan Operator Excavator' }
    ],
    faqs: [
      {
        q: 'Mengapa dilarang hanya mengandalkan rem kaki saat turunan panjang bermuatan?',
        a: 'Menginjak rem kaki terus menerus di turunan panjang akan menyebabkan brake fade (kanvas rem terbakar dan minyak rem mendidih akibat panas ekstrem), sehingga rem blong total. Operator wajib menggunakan Retarder Brake / Engine Brake.'
      }
    ]
  },

  // 30. Keselamatan Alat Berat
  {
    key: 'keselamatan-alat-berat',
    title: 'Pelatihan Keselamatan Alat Berat: Heavy Equipment Safety Management',
    h1: 'Pelatihan Keselamatan Alat Berat: Manajemen Risiko Operasional Tambang, Konstruksi, dan Pabrik',
    meta: 'Pelatihan komprehensif heavy equipment safety: penetapan zona demarkasi, traffic management plan, inspeksi P2H (Pemeriksaan Harian), dan mitigasi tabrakan alat berat.',
    imgAlt: 'Peta rambu lalu lintas tambang dan pemisahan jalur pejalan kaki dengan zona alat berat di area proyek',
    related: ['operator-excavator', 'operator-forklift', 'operator-dump-truck', 'kategori-pelatihan/job-safety-analysis-jsa'],
    intro: 'Manajemen Keselamatan Alat Berat (<em>Heavy Equipment Safety Management</em>) adalah program strategis bagi manajer proyek, safety officer, dan supervisor tambang/konstruksi untuk mendesain sistem kerja terpadu yang meniadakan risiko tabrakan fatal antara alat berat dan pekerja.',
    hazards: [
      '<strong>Ketiadaan Segregasi Pejalan Kaki:</strong> Pekerja darat berjalan di jalur operasional alat berat tanpa pembatas fisik.',
      '<strong>Pengabaian Pemeriksaan Harian (P2H Fiktif):</strong> Menandatangani checklist P2H tanpa memeriksa kondisi fisik rem dan kemudi.',
      '<strong>Kelelahan Operator (Fatigue Failure):</strong> Operator tertidur (micro-sleep) saat mengemudikan alat berat di shift malam.'
    ],
    regulations: [
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang K3 Pesawat Angkat dan Angkut.',
      '<strong>Kepmen ESDM No. 1827 K/30/MEM/2018</strong>.',
      '<strong>Standar ISO 3450</strong> (Earth-moving machinery - Braking systems).'
    ],
    modules: [
      {
        name: 'Modul 1: Perancangan Rencana Lalu Lintas (Traffic Management Plan)',
        theory: 'Prinsip segregasi fisik mutlak, rambu prioritas jalan, bund wall pembatas tebing, penerangan malam.',
        practical: 'Pembuatan peta alur lalu lintas proyek tambang/konstruksi skala 1:1000.'
      },
      {
        name: 'Modul 2: Standardisasi Sistem Pemeriksaan Harian (P2H Digital)',
        theory: 'Kriteria critical failure (unit langsung tagging stop), audit trail checklist harian.',
        practical: 'Audit kelayakan berkas P2H pada 10 armada alat berat.'
      },
      {
        name: 'Modul 3: Manajemen Kelelahan Kerja & Fit-to-Work',
        theory: 'Siklus sirkadian tubuh, jam tidur minimal 6 jam, tes reaksi fatigue sebelum shift kerja.',
        practical: 'Simulasi pemeriksaan fit-to-work dan prosedur penanganan operator lelah.'
      }
    ],
    equipment: ['Traffic Management Simulation Map Kit.', 'Fatigue Testing Device dan Digital P2H Scanner.'],
    participants: ['Project Manager, Site Superintendent, dan Safety Manager.', 'HSE Officer Tambang/Konstruksi dan Fleet Dispatcher.'],
    tableData: {
      headers: ['Hierarki Pengendalian', 'Langkah Implementasi Alat Berat', 'Tingkat Efektivitas'],
      rows: [
        ['Eliminasi / Substitusi', 'Penggunaan sistem kontrol jarak jauh (Autonomous Hauler / Remote Dozer)', '100% Bebas Risiko Manusia'],
        ['Rekayasa Teknik', 'Pemasangan Proximity Sensor, Anti-Collision Radar, dan Guardrail Beton', 'Sangat Tinggi (90%)'],
        ['Administrasi', 'Penetapan Traffic Management Plan, SIO Operator, dan SOP Jarak Iring', 'Sedang (70%)'],
        ['APD', 'Rompi Reflektif Hi-Vis Class 3, Safety Boots, dan Helm Proyek', 'Terendah (Benteng Terakhir)']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/operator-excavator/', label: 'Pelatihan Operator Excavator' },
      { href: '/kategori-pelatihan/operator-forklift/', label: 'Pelatihan Operator Forklift' },
      { href: '/kategori-pelatihan/operator-dump-truck/', label: 'Pelatihan Operator Dump Truck' }
    ],
    faqs: [
      {
        q: 'Apa yang dimaksud dengan prinsip Segregasi Manusia dan Alat Berat?',
        a: 'Segregasi adalah pemisahan fisik mutlak antara jalur pejalan kaki dan jalur operasional alat berat menggunakan pembatas beton/guardrail, rambu peringatan, dan jembatan penyeberangan untuk meniadakan titik temu tabrakan.'
      }
    ]
  }
];

async function run() {
  console.log('Rendering final 10 heavy and specialized programs...');
  const CONTENT_DIR = path.join(__dirname, '../src/content/pages');
  for (const prog of finalPrograms) {
    const html = renderProgramHtml(prog);
    const code = `import { PageContentData } from '@/lib/types';

export const content: PageContentData = {
  key: ${JSON.stringify(prog.key)},
  updated: "2026-08-29",
  faq: ${JSON.stringify(prog.faqs, null, 2)},
  html: ${JSON.stringify(html)}
};
`;
    fs.writeFileSync(path.join(CONTENT_DIR, `${prog.key}.ts`), code, 'utf8');
    console.log(`Rendered: ${prog.key}.ts`);
  }
}

run();
