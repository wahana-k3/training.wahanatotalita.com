import fs from 'fs';
import path from 'path';
import { TopicQueue } from '../src/lib/types';
import { renderProgramHtml, ProgramDetail } from './master-batch1-data';

const remainingBatch1List: ProgramDetail[] = [
  // 11. Operator Scaffolding
  {
    key: 'operator-scaffolding',
    title: 'Pelatihan Operator Scaffolding: Pemasangan Perancah Aman',
    h1: 'Pelatihan Operator Scaffolding: Teknik Ereksi, Pembongkaran, dan Pemasangan Perancah Tabung/Frame',
    meta: 'Pelatihan teknisi/operator scaffolding (perancah): standar Permenaker No. 1/1980, beban kerja aman (SWL), ikatan perancah (tie-in), pemasangan platform plank & toeboard.',
    imgAlt: 'Operator scaffolder mengenakan helm dan harness sedang memasang pipa ledger dan clamp pada struktur perancah modular',
    related: ['pengawas-scaffolding', 'scaffolding-inspector', 'working-at-height', 'fall-protection'],
    intro: 'Perancah (<em>scaffolding</em>) adalah sarana kerja sementara yang menopang ribuan jam kerja di proyek konstruksi, galangan kapal, dan turnaround pabrik. Kesalahan kecil pada pemasangan klem (clamp), ketiadaan diagonal bracing, atau pengabaian sole plate dapat memicu keruntuhan progresif beruntun (progressive collapse) yang merobohkan seluruh struktur.',
    hazards: [
      '<strong>Pemasangan Klem Longgar:</strong> Mur klem tidak dikencangkan pada torsi standar (40-50 Nm) sehingga pipa ledger merosot saat dibebani.',
      '<strong>Melempar Pipa Saat Pembongkaran:</strong> Melempar material pipa baja dari ketinggian yang berisiko menimpa pekerja di bawah.',
      '<strong>Lantai Kerja Papan Renggang:</strong> Celah papan lantai melebihi 25 mm yang menyebabkan kaki pekerja terperosok atau alat jatuh.',
      '<strong>Mengabaikan Guardrail & Toeboard:</strong> Bekerja di ketinggian tanpa memasang pagar pengaman tepi dan papan penahan kaki.'
    ],
    regulations: [
      '<strong>Permenaker No. Per.01/MEN/1980</strong> tentang K3 pada Konstruksi Bangunan.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Standar Internasional BS EN 12810 / 12811</strong> (Façade Scaffolds).',
      '<strong>Standar OSHA 29 CFR 1926.451</strong> (General Requirements for Scaffolds).'
    ],
    modules: [
      {
        name: 'Modul 1: Pengenalan Komponen & Beban Kerja Aman (SWL)',
        theory: 'Fungsi standar, ledger, transom, diagonal bracing, base plate, jack base, swivel clamp, fixed 90° clamp, putlog clamp.',
        practical: 'Audit kelayakan fisik material pipa perancah sebelum didirikan.'
      },
      {
        name: 'Modul 2: Penyiapan Landasan & Leveling Struktur',
        theory: 'Daya dukung tanah, pemasangan sole plate kayu keras, pengaturan ketinggian jack base dengan waterpass.',
        practical: 'Perakitan base frame dan leveling dasar lantai pertama.'
      },
      {
        name: 'Modul 3: Teknik Ereksi Perancah Tabung & Modular Berjenjang',
        theory: 'Urutan pemasangan ledger, transom, façade bracing, ledger bracing, dan penguncian joint pin.',
        practical: 'Ereksi struktur perancah 3 tingkat (tinggi 6 meter) dengan disiplin 100% tie-off.'
      },
      {
        name: 'Modul 4: Pemasangan Platform Kerja, Tangga & Toeboard',
        theory: 'Penataan metal plank, pengikatan papan kayu, pemasangan toprail (100-115 cm), midrail, dan toeboard 15 cm.',
        practical: 'Pemasangan tangga akses internal (ladder trap) dan pengaman perimeter.'
      },
      {
        name: 'Modul 5: Prosedur Pembongkaran Aman (Dismantling Procedure)',
        theory: 'Urutan pembongkaran terbalik (top-down), zonasi barikade steril lantai dasar, penataan material pipa.',
        practical: 'Drill pembongkaran perancah bertingkat menggunakan tali tambang pemindah material (gin wheel).'
      }
    ],
    equipment: [
      'Pipa baja galvanis schedule 40 (diameter 48.3 mm) dan klem drop-forged bersertifikat BS 1139.',
      'Scaffolder Ratchet Spanner 19/21 mm dengan lanyard peredam jatuh.',
      'Precision Spirit Level (Waterpass magnetik) dan Meteran baja 5 meter.',
      'Full Body Harness double lanyard with scaffold hook 60mm.',
      'Gin Wheel (Katrol tali angkut perancah) dengan tambang manila 16mm.'
    ],
    participants: [
      'Teknisi scaffolder, rigger, dan tenaga kerja sipil/mekanik proyek.',
      'Teknisi maintenance pabrik kimia, semen, manufaktur, dan PLTU.',
      'Mandor dan pelaksana lapangan konstruksi.'
    ],
    tableData: {
      headers: ['Klasifikasi Perancah', 'Kapasitas Beban Aman', 'Ukuran Maksimal Bay', 'Aplikasi Umum'],
      rows: [
        ['Light Duty (Beban Ringan)', '1.5 kN/m² (150 kg/m²)', '2.4 m x 1.2 m', 'Pengecatan, plesteran, inspeksi visual'],
        ['Medium Duty (Beban Sedang)', '2.0 kN/m² (200 kg/m²)', '2.0 m x 1.2 m', 'Pekerjaan mekanik, instalasi pipa, pembesian'],
        ['Heavy Duty (Beban Berat)', '3.0 kN/m² (300 kg/m²)', '1.5 m x 1.2 m', 'Pemasangan batu bata, pengecoran beton, tumpukan material']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/pengawas-scaffolding/', label: 'Pelatihan Pengawas Scaffolding' },
      { href: '/kategori-pelatihan/scaffolding-inspector/', label: 'Pelatihan Scaffolding Inspector' },
      { href: '/kategori-pelatihan/working-at-height/', label: 'Pelatihan Working at Height' }
    ],
    faqs: [
      {
        q: 'Berapa kekuatan torsi standar pengencangan mur klem scaffolding?',
        a: 'Standar internasional BS 1139 dan EN 74 mewajibkan torsi pengencangan baut klem berada pada rentang 40 hingga 50 Nm (Newton-meter). Pengencangan berlebihan (>60 Nm) dapat merusak ulir drat, sedangkan pengencangan kurang (<35 Nm) berisiko membuat pipa merosot.'
      },
      {
        q: 'Bolehkah scaffolder melempar pipa dari atas perancah saat proses pembongkaran?',
        a: 'Dilarang keras. Melempar material dari ketinggian adalah pelanggaran berat K3. Penurunan material pipa wajib menggunakan sistem katrol manual (gin wheel), crane, atau diturunkan estafet tangan ke tangan.'
      }
    ]
  },

  // 12. Pengawas Scaffolding
  {
    key: 'pengawas-scaffolding',
    title: 'Pelatihan Pengawas Scaffolding: Supervisi Struktur Perancah',
    h1: 'Pelatihan Pengawas Scaffolding: Manajemen Desain Beban, Pengawasan Ereksi, dan K3 Perancah',
    meta: 'Pelatihan pengawas scaffolding: perhitungan rasio stabilitas 4:1, inspeksi pengikatan struktur (tie-in), supervisi tim scaffolder, dan analisis beban hidup/mati perancah.',
    imgAlt: 'Pengawas scaffolding memeriksa penguncian klem dan meninjau gambar desain perancah di lokasi kerja',
    related: ['operator-scaffolding', 'scaffolding-inspector', 'permit-to-work', 'peran-jabatan/safety-officer-k3'],
    intro: 'Pengawas Scaffolding memegang tanggung jawab supervisi teknis dan keselamatan atas seluruh tim scaffolder di lapangan. Pelatihan ini melatih kepemimpinan supervisi, pembacaan gambar kerja teknik perancah, kalkulasi beban maksimum platform (Light/Medium/Heavy Duty), dan penegakan izin kerja.',
    hazards: [
      '<strong>Rasio Ketinggian Runtuh (4:1 Rule Overlooked):</strong> Membangun perancah melebihi rasio 4 kali lebar dasar tanpa memasang outrigger atau tie-in.',
      '<strong>Pengaruh Beban Dinamis Angin Badai:</strong> Tidak menghitung gaya seret angin saat memasang kain penutup terpal (containment sheeting).',
      '<strong>Penumpukan Beban Terpusat:</strong> Membiarkan pekerja menimbun palet material di satu bentang ledger hingga melampaui yield strength pipa.'
    ],
    regulations: [
      '<strong>Permenaker No. Per.01/MEN/1980</strong> tentang K3 Konstruksi Bangunan.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Standar Internasional BS EN 12811</strong> dan <strong>OSHA 1926 Subpart L</strong>.'
    ],
    modules: [
      {
        name: 'Modul 1: Manajemen Perancanaan & Analisis Struktur',
        theory: 'Kalkulasi beban mati (self-weight), beban hidup (pekerja & alat), beban angin, rasio stabilitas 4:1.',
        practical: 'Penyusunan Scaffolding Plan dan kalkulasi daya dukung titik tumpu fondasi.'
      },
      {
        name: 'Modul 2: Rekayasa Ikatan Dinding (Tie-In Systems)',
        theory: 'Melalui ikatan Through Tie, Box Tie, Cast-in Anchor Tie, Lip Tie, dan pola sebaran penahan angin.',
        practical: 'Desain dan verifikasi pola tie-in perancah setinggi 20 meter.'
      },
      {
        name: 'Modul 3: Pengawasan Ereksi Perancah Khusus',
        theory: 'Perancah Gantung (Cantilever/Suspended), Perancah Bergerak (Mobile Tower), Birdcage Scaffold.',
        practical: 'Audit kestabilan kastor roda mobile tower dan diagonal plan bracing.'
      },
      {
        name: 'Modul 4: Kepemimpinan Supervisi & Manajemen Izin Kerja',
        theory: 'Integrasi SIKA Ketinggian, toolbox meeting harian scaffolder, penghentian kerja bahaya (Stop Work).',
        practical: 'Simulasi briefing pra-kerja dan audit checklist kesiapan tim scaffolder.'
      }
    ],
    equipment: [
      'Torque Wrench terkalibrasi dan Anemometer digital (alat ukur kecepatan angin).',
      'Laser Distance Meter dan Inclinometer digital.',
      'Dokumen Scaffolding Calculation Sheet dan Permit to Work kit.'
    ],
    participants: [
      'Supervisor Sipil, Supervisor Mekanik, dan Mandor Utama Perancah.',
      'Safety Supervisor, Safety Officer, dan Inspector K3 Konstruksi.',
      'Site Coordinator Kontraktor Fabrikasi dan Turnaround.'
    ],
    tableData: {
      headers: ['Tinggi Perancah', 'Persyaratan Rasio 4:1', 'Kebutuhan Ikatan (Tie-In)', 'Inspeksi Cuaca'],
      rows: [
        ['< 4 Meter', 'Mandiri (Free standing)', 'Tidak wajib jika lebar dasar >1.0m', 'Inspeksi berkala mingguan'],
        ['4 – 12 Meter', 'Wajib outrigger buttress jika tanpa tie', 'Wajib tie-in setiap 4 meter vertikal', 'Stop kerja jika angin >38 km/jam'],
        ['> 12 Meter', 'Wajib desain engineered drawing', 'Wajib tie-in pola grid rapat ke kolom struktur', 'Stop kerja jika angin >32 km/jam']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/operator-scaffolding/', label: 'Pelatihan Operator Scaffolding' },
      { href: '/kategori-pelatihan/scaffolding-inspector/', label: 'Pelatihan Scaffolding Inspector' },
      { href: '/peran-jabatan/safety-officer-k3/', label: 'Pelatihan Safety Officer K3' }
    ],
    faqs: [
      {
        q: 'Kapan struktur perancah wajib diikatkan (tie-in) ke gedung?',
        a: 'Ketika tinggi perancah melebihi 4 kali dimensi lebar dasar terkecilnya (rasio 4:1 untuk perancah statis), struktur wajib dipasangi pengikat (ties) vertikal dan horizontal secara teratur untuk mencegah guling akibat beban angin atau beban dinamis.'
      }
    ]
  },

  // 14. Rigger
  {
    key: 'rigger',
    title: 'Pelatihan Rigger (Juru Ikat Beban): Sertifikasi K3 Angkat Angkut',
    h1: 'Pelatihan Rigger: Teknik Pengikatan Beban, Inspeksi Sling, dan Keselamatan Lifting Operation',
    meta: 'Pelatihan juru ikat beban (rigger): kalkulasi kapasitas WLL/SWL, sudut sling, inspeksi wire rope & webbing sling, rigging hardware (shackle, eyebolt), dan mitigasi pinch point.',
    imgAlt: 'Rigger profesional mengenakan sarung tangan kulit sedang memasang shackle dan webbing sling pada beban industri',
    related: ['signalman', 'lifting-supervisor', 'operator-crane', 'lifting-operation-safety'],
    intro: 'Dalam operasi pengangkatan crane, rigger (juru ikat) adalah personel penentu stabilitas muatan. Kesalahan dalam memilih titik angkat (Center of Gravity), sling terpelintir, atau menggunakan shackle tanpa safety pin adalah pemicu utama insiden muatan terlepas (<em>dropped object</em>) yang menelan korban jiwa.',
    hazards: [
      '<strong>Sudut Sling Terlalu Landai (<30°):</strong> Beban tegangan pada sling melonjak berlipat ganda hingga menyebabkan sling putus seketika.',
      '<strong>Salah Menentukan Titik Berat (Center of Gravity):</strong> Muatan miring tidak terkendali saat terangkat dari lantai kerja.',
      '<strong>Pinch Point & Titik Terjepit:</strong> Jari tangan rigger terjepit di antara tali sling dan muatan baja saat ditarik kencang.',
      '<strong>Penggunaan Rigging Hardware Cacat:</strong> Menggunakan shackle baut buatan sendiri tanpa cap sertifikasi WLL resmi.'
    ],
    regulations: [
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang Keselamatan dan Kesehatan Kerja Pesawat Angkat dan Pesawat Angkut.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Standar ASME B30.9</strong> (Slings) dan <strong>ASME B30.26</strong> (Rigging Hardware).'
    ],
    modules: [
      {
        name: 'Modul 1: Sifat Fisika Beban & Center of Gravity (CoG)',
        theory: 'Kalkulasi volume & berat material (baja, beton, air), penentuan titik berat muatan asimetris.',
        practical: 'Pengukuran dan penandaan CoG pada struktur rangka baja dan bejana tangki.'
      },
      {
        name: 'Modul 2: Inspeksi & Kriteria Afkir Alat Angkat (Rigging Gear)',
        theory: 'Kriteria penolakan Wire Rope (kawat putus, kinking, birdcage), Webbing Sling (sayatan, terbakar kimia), Chain Sling, Shackle.',
        practical: 'Audit visual dan pengukuran keausan diameter shackle dan hook menggunakan vernier caliper.'
      },
      {
        name: 'Modul 3: Metode Pengikatan (Hitch Configurations) & Sudut Sling',
        theory: 'Perbandingan kapasitas Vertical Hitch (1.0), Choker Hitch (0.75-0.8), Basket Hitch (2.0), dan faktor sudut (Choke Angle Factor).',
        practical: 'Pemasangan ikatan Choker, Double Wrap Basket, dan Bridle Hitch 4 Kaki.'
      },
      {
        name: 'Modul 4: Penggunaan Tag Line & Komunikasi dengan Operator',
        theory: 'Panjang tagline standar non-konduktif, mitigasi muatan berputar liar, sinyal koordinasi juru sinyal.',
        practical: 'Manuver memandu beban balok panjang seberat 5 ton melewati rintangan pipa menggunakan tagline.'
      }
    ],
    equipment: [
      'Wire Rope Sling single & multi-leg dengan thimble eyes bersertifikat EN 12385.',
      'Synthetic Webbing Sling 2 ton – 10 ton dan Round Sling endless.',
      'Bow Shackle & Dee Shackle grade 80 dengan safety pin bolt-nut-cotter pin.',
      'Eye Bolt, Swivel Hoist Ring, Turnbuckle, dan Beam Clamp Rigging.',
      'Tag Line non-conductive polypropylene 16mm dengan ujung pengaman.'
    ],
    participants: [
      'Rigger, Juru Ikat, dan Tim Helper Crane Proyek.',
      'Teknisi Maintenance Mekanik Pabrik, Yard Fabrikasi, dan Galangan Kapal.',
      'Safety Officer dan Pengawas Operasi Pengangkatan.'
    ],
    tableData: {
      headers: ['Sudut Sling Horizontal', 'Faktor Pengali Tegangan (Load Factor)', 'Tegangan per Kaki (Beban 10 Ton 2 Sling)', 'Status Kelayakan'],
      rows: [
        ['90° (Tegak lurus)', '1.00', '5.0 Ton', 'Sangat Aman'],
        ['60°', '1.155', '5.77 Ton', 'Standar Ideal'],
        ['45°', '1.414', '7.07 Ton', 'Batas Waspada'],
        ['30°', '2.000', '10.0 Ton (2x lipat beban)', 'Kritis (Tegangan ekstrem)'],
        ['< 30°', '> 2.000', 'Sling Putus Seketika', 'DILARANG KERAS (Illegal)']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/signalman/', label: 'Pelatihan Signalman Crane' },
      { href: '/kategori-pelatihan/operator-crane/', label: 'Pelatihan Operator Crane' },
      { href: '/kategori-pelatihan/lifting-supervisor/', label: 'Pelatihan Lifting Supervisor' },
      { href: '/kategori-pelatihan/lifting-operation-safety/', label: 'Pelatihan Lifting Operation Safety' }
    ],
    faqs: [
      {
        q: 'Bagaimana pengaruh sudut sling terhadap kapasitas beban angkat (WLL)?',
        a: 'Semakin kecil sudut sling terhadap bidang horizontal, tegangan pada tiap kaki sling melonjak drastis. Pada sudut 60° tegangan naik 1.15x, pada 45° naik 1.41x, dan pada 30° tegangan melonjak menjadi 2x lipat berat muatan. Sudut di bawah 30° dilarang keras dalam standar rigging.'
      }
    ]
  },

  // 15. Signalman
  {
    key: 'signalman',
    title: 'Pelatihan Signalman (Juru Sinyal Crane): Standar Isyarat Tangan & Radio',
    h1: 'Pelatihan Signalman Crane: Standar Isyarat Tangan Internasional, Komunikasi Radio, dan Panduan Blind Lift',
    meta: 'Pelatihan signalman crane: standar sinyal tangan ASME/Kemnaker, protokol komunikasi radio dua arah, koordinasi blind lift, dan peran jalur komando tunggal juru sinyal.',
    imgAlt: 'Signalman memberikan isyarat tangan aba-aba pengangkatan beban kepada operator mobile crane',
    related: ['rigger', 'operator-mobile-crane', 'lifting-supervisor', 'lifting-operation-safety'],
    intro: 'Kecelakaan crane sering terjadi karena miskomunikasi antara juru ikat di darat dan operator di dalam kabin. Signalman bertindak sebagai perpanjangan mata dan telinga operator, terutama pada operasi pengangkatan tanpa pandangan langsung (<em>blind lift</em>).',
    hazards: [
      '<strong>Sinyal Ganda dari Banyak Orang:</strong> Banyak pekerja di darat memberikan aba-aba berbeda secara bersamaan membingungkan operator.',
      '<strong>Posisi Blind Spot Signalman:</strong> Berdiri di area radius putar counterweight crane sehingga tertabrak saat crane swing.',
      '<strong>Interferensi Radio Komunikasi:</strong> Menggunakan saluran radio umum yang terpotong oleh percakapan lain saat lifting kritis.'
    ],
    regulations: [
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang K3 Pesawat Angkat dan Angkut.',
      '<strong>Standar ASME B30.5</strong> (Mobile and Locomotive Cranes - Signals).',
      '<strong>Standar OSHA 29 CFR 1926.1428</strong> (Signal Person Qualifications).'
    ],
    modules: [
      {
        name: 'Modul 1: Standar Isyarat Tangan Internasional',
        theory: 'Isyarat baku Hoist, Lower, Boom Up/Down, Swing, Telescope Extend/Retract, Emergency Stop.',
        practical: 'Drill peragaan 15 isyarat tangan standar dengan gerakan tegas dan jelas.'
      },
      {
        name: 'Modul 2: Protokol Komunikasi Radio Dua Arah (3-Way Communication)',
        theory: 'Struktur instruksi: Siapa memanggil siapa -> Tindakan yang diminta -> Konfirmasi balik operator.',
        practical: 'Simulasi komunikasi radio saat blind lift di balik dinding penghalang.'
      },
      {
        name: 'Modul 3: Penentuan Posisi Aman & Jalur Penglihatan',
        theory: 'Garis pandang mata (line of sight), zona ayunan muatan, zona bahaya kabel udara (power line clearance).',
        practical: 'Pemetaan posisi berdiri juru sinyal pada skenario pengangkatan mobile crane.'
      }
    ],
    equipment: [
      'Rompi Reflektif Signalman warna kontras (Fluorescent Orange/Lime) dengan sarung tangan reflektif.',
      'Radio Komunikasi Dua Arah (Walkie Talkie UHF/VHF) dengan noise-cancelling earpiece.',
      'Baton Light (Lampu Tongkat Sinyal Malam Hari) dan Peluit Komando.'
    ],
    participants: [
      'Juru Sinyal Crane, Rigger, dan Safety Flagman.',
      'Operator Crane dan Pengawas Angkat Angkut.',
      'Petugas K3 Lapangan Proyek Konstruksi & Fabrikasi.'
    ],
    tableData: {
      headers: ['Aba-Aba Isyarat', 'Gerakan Tangan Standar', 'Instruksi Suara Radio', 'Prioritas Tindakan'],
      rows: [
        ['Emergency Stop', 'Kedua lengan direntangkan horizontal, telapak tangan ke bawah, diayunkan cepat', '"STOP STOP STOP - SEMUA GERAKAN STOP"', 'Wajib dipatuhi seketika oleh operator dari siapa pun'],
        ['Hoist Main (Angkat)', 'Lengan kanan tegak lurus ke atas, jari telunjuk membuat lingkaran kecil searah jarum jam', '"ANGKAT BEBAN PERLAHAN"', 'Hanya dari designated signalman'],
        ['Lower Boom (Turunkan Boom)', 'Lengan kanan horizontal, ibu jari mengarah ke bawah, jari-jari lain mengepal', '"TURUNKAN BOOM DUA PULUH DERAJAT"', 'Hanya dari designated signalman']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/rigger/', label: 'Pelatihan Rigger' },
      { href: '/kategori-pelatihan/operator-crane/', label: 'Pelatihan Operator Crane' },
      { href: '/kategori-pelatihan/lifting-supervisor/', label: 'Pelatihan Lifting Supervisor' }
    ],
    faqs: [
      {
        q: 'Siapa saja yang berhak memberikan sinyal darurat (Emergency Stop) kepada operator crane?',
        a: 'Meskipun seluruh aba-aba operasional hanya boleh diberikan oleh SATU juru sinyal yang ditunjuk (designated signalman), aba-aba STOP DARURAT (Emergency Stop) berhak diberikan oleh SIAPA SAJA yang melihat adanya bahaya mendadak, dan operator wajib langsung mematuhinya.'
      }
    ]
  },

  // 16. Lifting Supervisor
  {
    key: 'lifting-supervisor',
    title: 'Pelatihan Lifting Supervisor: Perencanaan & Pengawasan Critical Lift',
    h1: 'Pelatihan Lifting Supervisor: Pembuatan Lifting Plan, Analisis Beban Kritis, dan Supervisi Angkat Angkut',
    meta: 'Pelatihan lifting supervisor: kalkulasi daya dukung tanah (ground bearing pressure), tandem lifting dua crane, crane outrigger loading, dan approval lifting plan.',
    imgAlt: 'Lifting supervisor meninjau dokumen lifting plan dan menghitung radius beban sebelum operasi pengangkatan berat dimulai',
    related: ['lifting-operation-safety', 'operator-mobile-crane', 'rigger', 'operator-crane'],
    intro: 'Kegagalan dalam operasi pengangkatan alat berat bukan hanya menghancurkan aset bernilai miliaran rupiah, tetapi juga dapat melumpuhkan operasional pabrik. <strong>Lifting Supervisor</strong> adalah figur sentral yang merancang, memverifikasi, dan memimpin eksekusi setiap lembar <em>Lifting Plan</em>.',
    hazards: [
      '<strong>Crane Tipping / Terguling:</strong> Muatan melebihi batas kapasitas tabel beban (load chart) pada radius kerja maksimum.',
      '<strong>Amblesnya Outrigger Tanah:</strong> Daya dukung tanah (soil bearing capacity) tidak mampu menahan beban titik tumpu outrigger.',
      '<strong>Tandem Lift Asinkron:</strong> Salah satu crane menanggung beban berlebih saat dua crane mengangkat satu benda bersamaan.'
    ],
    regulations: [
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang K3 Pesawat Angkat dan Angkut.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Standar ASME B30.5</strong> dan <strong>BS 7121</strong> (Code of Practice for Safe Use of Cranes).'
    ],
    modules: [
      {
        name: 'Modul 1: Pembacaan & Analisis Mendalam Load Chart Crane',
        theory: 'Panjang boom, radius kerja, sudut boom, konfigurasi counterweight, kapasitas tabel vs net capacity.',
        practical: 'Kalkulasi batas aman beban bersih (net load) memperhitungkan berat hook block dan rigging gear.'
      },
      {
        name: 'Modul 2: Perhitungan Ground Bearing Pressure (GBP)',
        theory: 'Kalkulasi beban outrigger terberat (worst-case loading), penentuan ukuran pelat landasan (matting size).',
        practical: 'Perhitungan dimensi bantalan kayu/baja untuk tanah berdaya dukung rendah (100 kPa).'
      },
      {
        name: 'Modul 3: Perancangan Critical Lifting Plan',
        theory: 'Kriteria Critical Lift (>75% kapasitas, tandem lift, mengangkat di atas instalasi aktif, mengangkat personel).',
        practical: 'Pembuatan dokumen Lifting Plan lengkap dengan gambar rigging dan simulasi radius 3D.'
      },
      {
        name: 'Modul 4: Supervisi Lapangan & Pre-Lift Briefing',
        theory: 'Pemeriksaan izin kerja, barikade zona steril, uji coba angkat muatan 10 cm (trial lift test).',
        practical: 'Simulasi memimpin briefing tim lifting dan eksekusi pengangkatan muatan 20 ton.'
      }
    ],
    equipment: [
      'Kompilasi Load Chart berbagai merk crane (Liebherr, Tadano, Kato, Kobelco).',
      'Ground Pressure Calculation Software & Rigging Plan Template.',
      'Laser Distance Meter, Anemometer, dan Inclinometer.',
      'Checklist Verifikasi Critical Lifting Permit.'
    ],
    participants: [
      'Lifting Supervisor, Rigging Superintendent, dan Lifting Engineer.',
      'Safety Manager, HSE Supervisor, dan Project Manager EPC.',
      'Senior Crane Operator dan Lead Rigger.'
    ],
    tableData: {
      headers: ['Kategori Lifting', 'Persentase Kapasitas Crane', 'Dokumen Wajib', 'Tingkat Wewenang Approval'],
      rows: [
        ['Standard Lift', '< 70% Kapasitas Load Chart', 'Standard JSA & Basic Rigging Plan', 'Disetujui oleh Lifting Supervisor Lapangan'],
        ['Critical Lift', '70% – 85% Kapasitas Load Chart', 'Engineered Lifting Plan + GBP Calculation', 'Disetujui oleh HSE Manager & Site Manager'],
        ['Heavy / Complex Lift', '> 85% Kapasitas / Tandem Lift', 'Rigging Engineering Study + 3D Simulation', 'Disetujui oleh Project Director & Third Party Expert']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/lifting-operation-safety/', label: 'Pelatihan Lifting Operation Safety' },
      { href: '/kategori-pelatihan/operator-crane/', label: 'Pelatihan Operator Crane' },
      { href: '/kategori-pelatihan/rigger/', label: 'Pelatihan Rigger' }
    ],
    faqs: [
      {
        q: 'Kapan sebuah operasi pengangkatan dikategorikan sebagai Critical Lift?',
        a: 'Pengangkatan masuk kategori Critical Lift jika: (1) Beban mencapai >70%–80% kapasitas tabel beban crane, (2) Menggunakan 2 crane atau lebih (tandem lift), (3) Mengangkat muatan di atas instalasi pipa bertekanan aktif, (4) Mengangkat personel dengan man basket, atau (5) Muatan berharga sangat mahal.'
      }
    ]
  }
];

// Helper to write file
function renderAndSave(p: ProgramDetail) {
  const CONTENT_DIR = path.join(__dirname, '../src/content/pages');
  const html = renderProgramHtml(p);
  const code = `import { PageContentData } from '@/lib/types';

export const content: PageContentData = {
  key: ${JSON.stringify(p.key)},
  updated: "2026-08-29",
  faq: ${JSON.stringify(p.faqs, null, 2)},
  html: ${JSON.stringify(html)}
};
`;
  fs.writeFileSync(path.join(CONTENT_DIR, `${p.key}.ts`), code, 'utf8');
  console.log(`Rendered: ${p.key}.ts`);
}

async function run() {
  console.log('Writing remaining Batch 1 deep programs...');
  for (const prog of remainingBatch1List) {
    renderAndSave(prog);
  }
}

run();
