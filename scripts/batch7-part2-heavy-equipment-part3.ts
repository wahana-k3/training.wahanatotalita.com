import { MultiArchetypeProgramDetail } from './multi-archetype-renderer';

export const batch7HeavyEquipmentPagesPart3: MultiArchetypeProgramDetail[] = [
  // 14. Tenaga Kerja Bangunan Tinggi TKBT
  {
    key: 'tenaga-kerja-bangunan-tinggi-tkbt',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/tenaga-kerja-bangunan-tinggi-tkbt/',
    archetype: 'technical_cert',
    title: 'Sertifikasi Tenaga Kerja Bangunan Tinggi (TKBT) Tingkat 1 & 2 Kemnaker RI',
    h1: 'Pelatihan & Sertifikasi Lisensi K3 Tenaga Kerja Bangunan Tinggi (TKBT Tingkat 1 & Tingkat 2) Kemnaker RI: Sesuai Permenaker No. 9 Tahun 2016',
    meta: 'Sertifikasi TKBT Kemnaker: SIO bangunan tinggi Tingkat 1 & 2 Permenaker 9/2016, full body harness, fall arrest system, anchor point & suspension trauma.',
    imgAlt: 'Pekerja bangunan tinggi mengenakan full body harness dan lanyard shock absorber mengaitkan ke lifeline horizontal di atap gedung',
    related: ['working-at-height', 'bekerja-di-ketinggian', 'fall-protection', 'tenaga-kerja-pada-ketinggian-tkpk'],
    intro: 'Jatuh dari ketinggian (fall from height) merupakan penyebab nomor satu kematian kerja pada proyek konstruksi, telekomunikasi (tower), pemeliharaan atap pabrik, dan struktur baja di Indonesia. Berdasarkan <strong>Permenaker No. 9 Tahun 2016 tentang K3 dalam Pekerjaan pada Ketinggian</strong>, setiap pekerja yang bekerja pada lantai kerja tetap/sementara dengan perbedaan ketinggian wajib memiliki Sertifikat dan Lisensi K3 Tenaga Kerja Bangunan Tinggi (TKBT).',
    hazards: [
      '<strong>Jatuh Bebas Tanpa Sistem Penahan (Free Fall):</strong> Bekerja di tepi plat lantai atau atap tanpa pengait fall arrestor atau guardrail.',
      '<strong>Patahnya Titik Angkur Penahan Beban (Anchor Failure):</strong> Mengaitkan hook lanyard ke pipa kabel tray atau struktur rapuh yang tidak mampu menahan beban kejut 15 kN.',
      '<strong>Bahaya Trauma Gantung (Suspension Trauma):</strong> Aliran darah terhambat di paha akibat tergantung di safety harness lebih dari 10-15 menit pasca jatuh.',
      '<strong>Ayunan Bandul Saat Jatuh (Swing Fall Injury):</strong> Terbentur dinding gedung saat jatuh karena angkur berada jauh di samping posisi pekerja.'
    ],
    regulations: [
      '<strong>Permenaker No. 9 Tahun 2016</strong> tentang Keselamatan dan Kesehatan Kerja dalam Pekerjaan pada Ketinggian.',
      '<strong>Permenaker No. 1 Tahun 1980</strong> tentang K3 Konstruksi Bangunan.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Kerangka Regulasi Permenaker 9/2016 & Hierarki Pencegahan Jatuh',
        theory: 'Hierarki pengendalian jatuh (Eliminasi -> Collective Fall Protection -> Work Restraint -> Fall Arrest), pembagian kelas TKBT 1 vs TKBT 2.',
        practical: 'Audit kelayakan APD ketinggian (Harness, Lanyard, Lifeline) dan pengecekan tanggal kedaluwarsa serat webbing.'
      },
      {
        name: 'Modul 2: Karakteristik Full Body Harness, Energy Absorber, & Perhitungan Jarak Jatuh Aman',
        theory: 'Kalkulasi Total Fall Clearance Distance (Panjang Lanyard + Bukaan Absorber + Tinggi Badan + Safety Margin 1 Meter), kekuatan angkur 15-22 kN.',
        practical: 'Praktik pemakaian full body harness pas badan (metode 4 jari di paha) dan kalkulasi jarak jatuh aman pada mock-up ketinggian.'
      },
      {
        name: 'Modul 3: Pemasangan Temporary Lifeline, Tangga Kerja, & Pertolongan Trauma Gantung',
        theory: 'Pemasangan tali keselamatan horizontal (temporary horizontal lifeline), aturan 3 titik kontak pada tangga, penggunaan suspension trauma strap.',
        practical: 'Simulasi manuver 100% tie-off menggunakan double lanyard big hook dan praktik penggunaan relief strap saat tergantung.'
      }
    ],
    equipment: [
      'Full Body Harness 4 Titik Penyesuaian Standar EN 361 / ANSI Z359.',
      'Double Lanyard dengan Integrated Energy Absorber (Shock Absorber) & Big Scaffold Hook.',
      'Temporary Horizontal Lifeline Webbing 20 Meter dengan Tensioner Ratchet.',
      'Suspension Trauma Safety Relief Strap & Mobile Ladder Safety Clamp.'
    ],
    participants: [
      'Pekerja Konstruksi Bangunan Tinggi, Teknisi Pemeliharaan Atap Pabrik, Teknisi Menara Telekomunikasi (Tower), Pemasang Rangka Baja, Safety Officer.'
    ],
    tableData: {
      headers: ['Tingkatan Sertifikasi', 'Ruang Lingkup Pekerjaan', 'Persyaratan Pendidikan', 'Masa Berlaku Lisensi'],
      rows: [
        ['TKBT Tingkat 2 (Dasar)', 'Bekerja pada lantai kerja tetap, scaffolding, & platform sementara', 'Minimal SLTP / Sederajat', '5 Tahun (Lisensi Resmi Kemnaker)'],
        ['TKBT Tingkat 1 (Lanjutan)', 'Bekerja pada struktur terbuka, memasang temporary anchor & lifeline', 'Minimal SLTA / Sederajat', '5 Tahun (Lisensi Resmi Kemnaker)'],
        ['Tenaga Kerja Pada Ketinggian (TKPK)', 'Pekerjaan Akses Tali (Rope Access) menggantung penuh', 'Minimal SLTA / Sederajat', '5 Tahun (Permenaker 9/2016)'],
        ['Pengawas K3 Ketinggian', 'Membuat Rencana Keselamatan Ketinggian (Fall Protection Plan)', 'Minimal D3 Teknik / Ahli K3', '5 Tahun (Kemnaker RI)']
      ]
    },
    caseStudy: 'Sebuah perusahaan kontraktor baja di Cikarang mencatatkan Zero Fatal Accident pada proyek pembangunan gudang logistik seluas 5 hektar setelah seluruh pekerja atapnya tersertifikasi TKBT Tingkat 2 dan mematuhi aturan 100% tie-off.',
    stepByStepGuide: [
      { step: '1. Pendaftaran & Cek Bebas Takut Ketinggian', desc: 'Verifikasi surat sehat dokter, tekanan darah, dan pemeriksaan akrofobia.' },
      { step: '2. Pembekalan Teori Permenaker 9/2016', desc: 'Pendalaman prinsip fall protection, perhitungan jarak jatuh, dan standar titik angkur.' },
      { step: '3. Workshop Praktik Manuver di Ketinggian', desc: 'Ujian pemakaian harness, manuver double hook pada scaffolding, dan trauma strap.' },
      { step: '4. Evaluasi Pengawas & Penerbitan SIO', desc: 'Ujian teori regulasi dan verifikasi kecakapan teknis oleh Pengawas K3 Kemnaker.' }
    ],
    links: [
      { href: '/kategori-pelatihan/working-at-height/', anchor: 'Panduan Bekerja di Ketinggian' },
      { href: '/kategori-pelatihan/fall-protection/', anchor: 'Pelatihan Sistem Proteksi Jatuh' },
      { href: '/kategori-pelatihan/tenaga-kerja-pada-ketinggian-tkpk/', anchor: 'Sertifikasi Rope Access TKPK' }
    ]
  },

  // 15. Tenaga Kerja Pada Ketinggian TKPK
  {
    key: 'tenaga-kerja-pada-ketinggian-tkpk',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/tenaga-kerja-pada-ketinggian-tkpk/',
    archetype: 'technical_cert',
    title: 'Sertifikasi Tenaga Kerja Pada Ketinggian (TKPK) Rope Access Kemnaker RI',
    h1: 'Pelatihan & Sertifikasi Lisensi K3 Tenaga Kerja Pada Ketinggian (TKPK Tingkat 1, 2, & 3) Kemnaker RI: Akses Tali Industri (Industrial Rope Access)',
    meta: 'Sertifikasi TKPK Kemnaker: SIO rope access Tingkat 1, 2, 3 Permenaker 9/2016, teknik ascending, descending, changeover, knot passing & companion rescue.',
    imgAlt: 'Teknisi akses tali TKPK bersertifikasi melakukan perawatan fasad kaca gedung bertingkat tinggi dengan sistem dua tali kerja dan back-up',
    related: ['tenaga-kerja-bangunan-tinggi-tkbt', 'rope-access-dasar', 'rescue-di-ketinggian', 'operator-gondola-gedung-bertingkat'],
    intro: 'Akses Tali Industri (Industrial Rope Access / TKPK) adalah metode bekerja di posisi menggantung penuh menggunakan dua tali terpisah (Working Line & Safety Back-up Line) untuk menjangkau lokasi ekstrem yang tidak dapat diakses perancah atau crane (misalnya fasad gedung pencakar langit, menara suar, flare stack migas, bilah turbin angin). Sesuai <strong>Permenaker No. 9 Tahun 2016</strong>, teknisi akses tali wajib memiliki Lisensi K3 TKPK Tingkat 1, 2, atau 3 resmi dari Kemnaker RI.',
    hazards: [
      '<strong>Putusnya Tali Kerja Akibat Gesekan Sudut Tajam:</strong> Tali kernmantle terpotong pinggiran beton tajam gedung tanpa pelindung tali (rope protector).',
      '<strong>Kegagalan Perangkat Pengunci Back-Up (Back-Up Device Failure):</strong> Kegagalan fungsi perangkat penahan jatuh saat descender dilepas.',
      '<strong>Kesalahan Pemasangan Simpul Angkur (Improper Knotting):</strong> Simpul terlepas saat menerima beban dinamis sentakan tubuh pekerja.',
      '<strong>Ketidakberdayaan Menggantung & Pingsan (Suspension Shock):</strong> Kegagalan tim rescue menjangkau rekan kerja yang cidera di tali dalam waktu di bawah 10 menit.'
    ],
    regulations: [
      '<strong>Permenaker No. 9 Tahun 2016</strong> tentang K3 dalam Pekerjaan pada Ketinggian (Bagian Akses Tali).',
      '<strong>Standar Internasional IRATA & SPRAT</strong> tentang Industrial Rope Access.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Prinsip Dasar Sistem Dua Tali (Two-Rope System) & Simpul Tali Industri',
        theory: 'Prinsip independensi tali kerja dan tali keselamatan, simpul Figure-8 on bight, Figure-9, Alpine Butterfly, Bunny Knot, dan Stopper Knot.',
        practical: 'Praktik membuat 6 simpul tali industri wajib dan audit instalasi pelindung sudut tali (rope edge protector).'
      },
      {
        name: 'Modul 2: Manuver Tali Dasar: Ascending, Descending, & Changeover',
        theory: 'Mekanisme kerja alat descender (Petzl I\'D / Rig), chest ascender (Croll), hand ascender dengan footloop, dan mobile fall arrester (Asap).',
        practical: 'Praktik naik tali (ascending), turun tali (descending), pergantian arah gerak (changeover), dan melewati sambungan tali (knot passing).'
      },
      {
        name: 'Modul 3: Penyelamatan Ketinggian di Tali (Companion Rescue)',
        theory: 'Prosedur evakuasi rekan kerja yang cidera di posisi menggantung, teknik transfer korban dari tali ke descender penolong, sistem hauling pulley.',
        practical: 'Simulasi penyelamatan rekan kerja tidak sadar di lintasan tali vertikal dan penurunan aman ke lantai dasar dalam waktu 5 menit.'
      }
    ],
    equipment: [
      'Tali Kernmantle Statis Semi-Statis EN 1891 Type A Diameter 10.5 - 11 mm.',
      'Full Body Harness Khusus Rope Access 5 Titik Penyesuaian (Sternal, Dorsal, Ventral, Lateral).',
      'Self-Braking Descender (Petzl I\'D / Rig) & Mobile Fall Arrester (Petzl Asap Lock).',
      'Hand Ascender, Chest Ascender, Footloop Webbing, & Carabiner Screw/Triact Lock 25 kN.'
    ],
    participants: [
      'Teknisi Fasad Gedung Bertingkat, Inspektur NDT Flare Stack Migas, Teknisi Turbin Angin, Pemasang Billboard Ketinggian, Safety Officer.'
    ],
    tableData: {
      headers: ['Jenjang Kualifikasi TKPK', 'Wewenang & Tingkat Keahlian', 'Syarat Pendidikan & Pengalaman', 'Masa Berlaku'],
      rows: [
        ['TKPK Tingkat 1 (Operasional Dasar)', 'Manuver tali dasar di bawah supervisi langsung TKPK 2/3', 'Minimal SLTA / Usia Min. 18 Tahun', '5 Tahun (Kemnaker RI)'],
        ['TKPK Tingkat 2 (Teknisi Lanjutan)', 'Memasang sistem angkur, rigging tali kompleks, & rescue tingkat lanjut', 'Minimal 500 Jam Logbook TKPK 1', '5 Tahun (Kemnaker RI)'],
        ['TKPK Tingkat 3 (Supervisor / Manajer)', 'Menyusun Fall Protection Plan, supervisi penuh, & rescue darurat kompleks', 'Minimal 1.000 Jam Logbook TKPK 2', '5 Tahun (Kemnaker RI)']
      ]
    },
    caseStudy: 'Sebuah tim pembersih fasad kaca gedung 60 lantai di Jakarta Selatan menuntaskan proyek pembersihan selama 6 bulan tanpa ada satu pun insiden jatuh atau near-miss berkat penerapan standar Two-Rope System dan sertifikasi TKPK Kemnaker.',
    stepByStepGuide: [
      { step: '1. Pendaftaran & Asesmen Fisik Ketat', desc: 'Pemeriksaan kesehatan, tes kebugaran otot, dan verifikasi bebas vertigo/akrofobia.' },
      { step: '2. Pembekalan Teori Simpul & Rigging', desc: 'Pendalaman regulasi Permenaker 9/2016, prinsip beban angkur Y-hang, dan perawatan tali.' },
      { step: '3. Ujian Praktik Manuver Tali & Rescue', desc: 'Uji ascending, descending, changeover, knot passing, dan companion rescue berbatas waktu.' },
      { step: '4. Evaluasi Pengawas & Penerbitan SIO', desc: 'Ujian teori komprehensif dan uji kecakapan praktis oleh Pengawas K3 Kemnaker RI.' }
    ],
    links: [
      { href: '/kategori-pelatihan/rope-access-dasar/', anchor: 'Materi Dasar Rope Access' },
      { href: '/kategori-pelatihan/rescue-di-ketinggian/', anchor: 'Pelatihan Penyelamatan di Ketinggian' },
      { href: '/kategori-pelatihan/operator-gondola-gedung-bertingkat/', anchor: 'Sertifikasi Operator Gondola Fasad' }
    ]
  },

  // 16. Operator Gondola Gedung Bertingkat
  {
    key: 'operator-gondola-gedung-bertingkat',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/operator-gondola-gedung-bertingkat/',
    archetype: 'technical_cert',
    title: 'Lisensi Operator Gondola Gedung Bertingkat Kemnaker RI',
    h1: 'Pelatihan & Sertifikasi Lisensi K3 Operator Gondola (Temporary & Permanent Suspended Platform) Kemnaker RI: Sesuai Permenaker No. 8/2020 & Permenaker No. 9/2016',
    meta: 'Sertifikasi operator gondola Kemnaker: SIO gondola Permenaker 8/2020, safety lock blockstop, wire rope inspection, roof car & evakuasi darurat gondola.',
    imgAlt: 'Operator gondola membersihkan kaca jendela gedung pencakar langit dengan tali keselamatan independen terpasang penuh',
    related: ['tenaga-kerja-bangunan-tinggi-tkbt', 'tenaga-kerja-pada-ketinggian-tkpk', 'lisensi-operator-overhead-crane', 'k3-keselamatan-kerja'],
    intro: 'Gondola Gedung (Suspended Working Platform / Building Maintenance Unit BMU) adalah platform gantung bermotor yang digunakan untuk pekerjaan pembersihan kaca, pengecatan, dan pemeliharaan fasad gedung pencakar langit. Kegagalan sling penahan gondola yang memicu gondola miring atau jatuh bebas merupakan bahaya katastropik. Sesuai <strong>Permenaker No. 8 Tahun 2020</strong>, pengoperasian gondola wajib dilakukan oleh Operator Gondola berlisensi resmi Kemnaker RI.',
    hazards: [
      '<strong>Gondola Miring & Jatuh Bebas (Platform Tilting / Drop):</strong> Putusnya salah satu wire rope hoist atau kegagalan mekanisme rem motor traksi.',
      '<strong>Kekuatan Angin Ekstrem Menghempas Gondola (Wind Sway):</strong> Gondola terhempas menghantam kaca gedung saat kecepatan angin di atas 20 knot.',
      '<strong>Pekerja Terlempar dari Platform Gondola:</strong> Operator tidak mengaitkan safety harness ke tali lifeline independen di atap gedung.',
      '<strong>Kegagalan Safety Lock (Blockstop Failure):</strong> Macetnya sensor otomatis pengunci kemiringan darurat saat tali hoist kendur.'
    ],
    regulations: [
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang Keselamatan Pesawat Angkat dan Pesawat Angkut (Gondola).',
      '<strong>Permenaker No. 9 Tahun 2016</strong> tentang K3 dalam Pekerjaan pada Ketinggian.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Regulasi K3 Gondola & Standar Pesawat Angkat Kemnaker',
        theory: 'Dasar hukum Permenaker 8/2020, klasifikasi gondola tetap (Roof Car BMU) vs gondola sementara (Temporary Platform), syarat legalitas SIA dan SIO.',
        practical: 'Audit dokumen riksa uji tahunan gondola dan pelat batas beban kapasitas maksimum orang & alat.'
      },
      {
        name: 'Modul 2: Komponen Mekanikal, Motor Hoist Tirak, & Safety Lock Blockstop',
        theory: 'Prinsip kerja hoist traksi drumless, tali kawat baja khusus gondola, safety lock otomatis (anti-tilting blockstop), emergency manual descent lever.',
        practical: 'Uji fungsi penahan jatuh otomatis blockstop saat tali simulasi dikendurkan dan uji pengereman manual darurat.'
      },
      {
        name: 'Modul 3: Prosedur Operasi Aman, Mitigasi Cuaca Buruk, & Evakuasi Darurat',
        theory: 'Penggunaan anemometer pengukur angin, SOP pembatasan beban, pemasangan lifeline vertikal independen dengan rope grab.',
        practical: 'Praktik pengoperasian naik/turun platform gondola, manuver perataan platform miring, dan drill evakuasi darurat gondola macet.'
      }
    ],
    equipment: [
      'Unit Gondola Temporary Suspended Platform dengan Motor Hoist Traksi.',
      'Safety Lock Blockstop Over-Speed & Anti-Tilt Device.',
      'Anemometer Pengukur Kecepatan Angin Digital Saku.',
      'Tali Lifeline Vertikal Polyamide 14 mm dengan Mobile Fall Arrester (Rope Grab) & Full Body Harness.'
    ],
    participants: [
      'Operator Gondola Fasad Gedung, Teknisi Building Maintenance Unit (BMU), Supervisor Kebersihan Gedung, Safety Inspector Properti.'
    ],
    tableData: {
      headers: ['Parameter Operasional Gondola', 'Batas Standar Keselamatan', 'Tindakan Wajib Operator', 'Regulasi Acuan'],
      rows: [
        ['Batas Kecepatan Angin Maksimum', 'Maksimal 20 Knot (± 37 km/jam)', 'Hentikan Operasi & Turunkan Gondola ke Dasar', 'Permenaker 8/2020 Lampiran III'],
        ['Tali Keselamatan Personel (Lifeline)', 'Wajib Terpisah 100% dari Tali Hoist Gondola', 'Kaitkan Full Harness ke Tali Lifeline Independen', 'Permenaker 9/2016'],
        ['Kapasitas Beban Kerja (SWL)', 'Maksimal 2 Orang + Peralatan (± 250 kg)', 'Dilarang Keras Membawa Material Berlebih', 'Pelat Beban Resmi Pabrikan'],
        ['Masa Berlaku SIO Kemnaker', '5 Tahun Sejak Tanggal Terbit', 'Wajib Diperpanjang Melalui PJK3 Resmi', 'UU No. 1 Tahun 1970']
      ]
    },
    caseStudy: 'Sebuah gedung perkantoran 45 lantai di Surabaya berhasil mengatasi insiden gondola macet di lantai 30 secara aman dalam waktu 15 menit menggunakan tuas manual descent tanpa perlu kepanikan evakuasi berkat operator berlisensi Kemnaker.',
    stepByStepGuide: [
      { step: '1. Pendaftaran & Tes Bebas Takut Ketinggian', desc: 'Verifikasi surat sehat dokter, tes tekanan darah, dan pemeriksaan akrofobia.' },
      { step: '2. Pembekalan Teori Gondola & Regulasi', desc: 'Pendalaman materi Permenaker 8/2020, sistem kelistrikan motor hoist, dan mitigasi angin.' },
      { step: '3. Praktik Uji Coba Pengoperasian & P2H', desc: 'Inspeksi tali kawat baja, uji safety lock blockstop, dan simulasi manual descent.' },
      { step: '4. Evaluasi Pengawas & Penerbitan SIO', desc: 'Ujian teori komprehensif dan uji kecakapan operasional oleh Pengawas K3 Kemnaker.' }
    ],
    links: [
      { href: '/kategori-pelatihan/tenaga-kerja-pada-ketinggian-tkpk/', anchor: 'Sertifikasi Rope Access TKPK' },
      { href: '/kategori-pelatihan/tenaga-kerja-bangunan-tinggi-tkbt/', anchor: 'Sertifikasi Bangunan Tinggi TKBT' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  }
];
