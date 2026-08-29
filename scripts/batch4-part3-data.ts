import { ExtendedProgramDetail } from './batch4-master-data';

export const batch4Part3: ExtendedProgramDetail[] = [
  // 11. Lifting Engineer
  {
    key: 'lifting-engineer',
    hub: 'peran-jabatan',
    path: 'peran-jabatan/lifting-engineer/',
    title: 'Pelatihan Lifting Engineer: Perancangan Critical Lift Plan & Rigging Study',
    h1: 'Pelatihan Lifting Engineer: Rekayasa Pengangkatan Berat (Heavy Lift), Rigging Calculation, dan Ground Bearing Capacity',
    meta: 'Pelatihan Lifting Engineer: kalkulasi rigging study, desain lifting beam/spreader bar, tandem lift calculation, evaluasi stabilitas outrigger matting, dan standar ASME B30.',
    imgAlt: 'Lifting engineer meninjau simulasi gambar 3D CAD engineered lift plan pengangkatan kolom reaktor berat menggunakan dua unit crawler crane',
    related: ['lifting-supervisor', 'operator-crane', 'rigger', 'lifting-operation-safety'],
    intro: '<strong>Lifting Engineer</strong> adalah insinyur spesialis rekayasa mekanika pengangkatan yang bertanggung jawab menghitung, merancang, memodelkan, dan mengesahkan dokumen <em>Critical Lifting Plan</em> pada pengangkatan struktur berat bernilai miliaran rupiah.',
    hazards: [
      '<strong>Kegagalan Desain Spreader Bar:</strong> Balok perentang mengalami tekuk (buckling) saat menahan beban kompresi aksial.',
      '<strong>Over-Capacity Crane Akibat Dinamika Angin:</strong> Permukaan beban luas tertiup angin menambah momen guling melampaui batas aman LMI.',
      '<strong>Amblasnya Pondasi Tanah di Bawah Track Crane:</strong> Salah menghitung Ground Bearing Pressure (GBP) pada tanah lunak.'
    ],
    regulations: ['<strong>Permenaker No. 8 Tahun 2020</strong>.', '<strong>Standar ASME B30.5</strong> & <strong>ASME BTH-1</strong> (Design of Below-the-Hook Lifting Devices).'],
    modules: [
      {
        name: 'Modul 1: Rigging Mechanics & Below-the-Hook Design',
        theory: 'Perhitungan tegangan tali sling bersudut, Centre of Gravity 3D, kalkulasi kekuatan shackle, pad eye design, spreader bar buckling.',
        practical: 'Perhitungan dimensi pad eye dan pemilihan sling baja untuk modul vessel 80 ton.'
      },
      {
        name: 'Modul 2: Engineered Tandem Lift & Ground Engineering',
        theory: 'Pembagian beban pada 2 crane, sinkronisasi laju hoisting, perhitungan Ground Bearing Pressure (GBP) dan desain steel mats.',
        practical: 'Penyusunan dokumen Engineered Lifting Plan lengkap untuk tandem lift kolom distilasi.'
      }
    ],
    equipment: ['Software Simulasi 3D Crane & Rigging CAD.', 'Ground Bearing Pressure Calculation Spreadsheets.'],
    participants: ['Lifting Engineer, Rigging Superintendent, Heavy Lift Specialist, dan Project Structural Engineer.'],
    tableData: {
      headers: ['Parameter Critical Lift', 'Batas Ambang Kritis', 'Kewajiban Pengesahan Legal'],
      rows: [
        ['Beban Angkat Relatif (% Kapasitas Crane)', '>= 75% dari batas tabel beban (Load Chart)', 'Wajib Engineered Lift Plan ditandatangani Lifting Engineer'],
        ['Pengangkatan Menggunakan 2 Crane (Tandem)', 'Setiap pengangkatan multi-crane', 'Wajib simulasi 3D & pembagian beban detail'],
        ['Pengangkatan di Atas Fasilitas Aktif / Pipa Bertekanan', 'Risiko tinggi pelepasan gas/minyak', 'Wajib Risk Assessment menyeluruh & persetujuan Plant Manager']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/lifting-supervisor/', label: 'Pelatihan Lifting Supervisor' },
      { href: '/kategori-pelatihan/operator-crane/', label: 'Pelatihan Operator Crane' }
    ],
    faqs: [
      {
        q: 'Kapan suatu operasi pengangkatan diklasifikasikan sebagai Critical Lifting?',
        a: 'Operasi lifting dikategorikan kritis apabila: beban melebihi 75% kapasitas tabel crane, mengangkat muatan bernilai sangat mahal/berbahaya, operasi tandem (2 crane atau lebih), atau pengangkatan dilakukan melintasi instalasi pipa bertekanan/proses aktif.'
      }
    ]
  },

  // 12. Scaffolding Supervisor
  {
    key: 'scaffolding-supervisor',
    hub: 'peran-jabatan',
    path: 'peran-jabatan/scaffolding-supervisor/',
    title: 'Pelatihan Scaffolding Supervisor: Sertifikasi Kemnaker & Pengawasan Perancah',
    h1: 'Pelatihan Pengawas Perancah (Scaffolding Supervisor): Manajemen Tim Scaffolder, Inspeksi Struktur, dan Sertifikasi Kemnaker RI',
    meta: 'Pelatihan Scaffolding Supervisor bersertifikat Kemnaker RI: manajemen perakitan scaffolding, stabilitas rasio 4:1, perhitungan beban kerja aman SWL, dan otorisasi Scafftag.',
    imgAlt: 'Scaffolding supervisor memegang dokumen gambar teknis perancah memeriksa kekencangan klem swivel dan mengesahkan Scafftag Hijau',
    related: ['pengawas-scaffolding', 'scaffolding-inspector', 'operator-scaffolding'],
    intro: '<strong>Scaffolding Supervisor (Pengawas Perancah)</strong> mengoordinasikan tim scaffolder, memastikan kepatuhan desain gambar teknis perancah, menghitung batas beban aman (SWL), serta memegang wewenang pemasangan Scafftag hijau sebelum perancah boleh dinaiki pekerja.',
    hazards: [
      '<strong>Kelebihan Beban Kerja Platform (Overloading):</strong> Menumpuk material batu bata melebihi kapasitas beban desain lantai kerja.',
      '<strong>Modifikasi Ilegal oleh Pekerja Lain:</strong> Pekerja pipa melepas pipa pengikat (tie-in) atau pagar pengaman tanpa izin supervisor.',
      '<strong>Perancah Miring Akibat Pondasi Amblas:</strong> Ketiadaan sole board kayu di atas tanah becek.'
    ],
    regulations: ['<strong>Permenaker No. Per.01/MEN/1980</strong>.', '<strong>Standar BS EN 12811</strong>.'],
    modules: [
      {
        name: 'Modul 1: Desain Rekayasa & Stabilitas Struktur Perancah',
        theory: 'Perhitungan beban mati & hidup, rasio stabilitas 4:1 tanpa tie-in, jenis pengikatan kaku (Box Tie, Through Tie), penyaluran beban baseplate.',
        practical: 'Audit stabilitas perancah modular setinggi 12 meter pada denah proyek.'
      },
      {
        name: 'Modul 2: Manajemen Tim & Prosedur Tagging Status (Scafftag)',
        theory: 'Pembagian tugas scaffolder, SOP bongkar-pasang perancah bertingkat, verifikasi harian Scafftag.',
        practical: 'Praktik inspeksi akhir dan penandatanganan Scafftag status Laik Pakai.'
      }
    ],
    equipment: ['Scafftag Holder & Insert Cards Kit.', 'Magnetic Torpedo Level & Torque Wrench Terkalibrasi.'],
    participants: ['Scaffolding Supervisor, Pengawas Sipil/Struktur, Safety Inspector Proyek, dan Mandor Perancah.'],
    tableData: {
      headers: ['Klasifikasi Beban Perancah', 'Kapasitas Beban Maksimum (SWL)', 'Aplikasi Pekerjaan di Lapangan'],
      rows: [
        ['Light Duty Scaffolding', 'Maksimal 225 kg / bay (0.75 kN/m²)', 'Pekerjaan pengecatan, inspeksi visual, pembersihan kaca'],
        ['Medium Duty Scaffolding', 'Maksimal 450 kg / bay (1.50 kN/m²)', 'Pekerjaan plesteran dinding, pemasangan pipa baja ringan'],
        ['Heavy Duty Scaffolding', 'Maksimal 675 kg / bay (3.00 kN/m²)', 'Pekerjaan pasangan bata berat, bekisting cor beton']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/scaffolding-inspector/', label: 'Pelatihan Scaffolding Inspector' },
      { href: '/kategori-pelatihan/pengawas-scaffolding/', label: 'Pelatihan Pengawas Scaffolding' }
    ],
    faqs: [
      {
        q: 'Kapan scaffolding wajib diinspeksi ulang oleh Scaffolding Supervisor?',
        a: 'Perancah wajib diinspeksi ulang: (1) Minimal 1 kali setiap 7 hari sekali, (2) Setelah terjadi cuaca ekstrem/badai angin kencang/gempa, dan (3) Setelah terjadi modifikasi atau perubahan struktur.'
      }
    ]
  },

  // 13. Warehouse Supervisor
  {
    key: 'warehouse-supervisor',
    hub: 'peran-jabatan',
    path: 'peran-jabatan/warehouse-supervisor/',
    title: 'Pelatihan Warehouse Supervisor: Keselamatan Pergudangan & Logistik Modern',
    h1: 'Pelatihan Warehouse Safety Supervisor: Manajemen Keselamatan Pergudangan, Stabilitas Racking, dan Forklift Safety Management',
    meta: 'Pelatihan keselamatan Warehouse Supervisor: audit integritas rak bertingkat (racking safety), zonasi pedestrian vs forklift, docking kontainer, dan penataan material handling B3.',
    imgAlt: 'Warehouse supervisor mengawasi pergerakan forklift dan memeriksa pelindung tiang rak upright protector di lorong gudang',
    related: ['operator-forklift', 'operator-reach-truck', 'ergonomi-industri'],
    intro: '<strong>Warehouse Supervisor</strong> mengendalikan arus material ribuan ton per hari, menjaga keselamatan operator forklift dan pejalan kaki di lorong sempit, serta mencegah kegagalan struktural rak penyimpanan vertikal bertingkat.',
    hazards: [
      '<strong>Keruntuhan Berantai Rak Gudang (Racking Collapse):</strong> Tiang rak tertabrak forklift memicu ambruknya seluruh lorong rak.',
      '<strong>Tabrakan Pejalan Kaki di Persimpangan Blind Spot:</strong> Ketiadaan cermin cembung dan jalur pejalan kaki terpisah.',
      '<strong>Truk Maju Prematur di Loading Dock (Trailer Creep):</strong> Truk kontainer bergerak saat forklift masih berada di dalam bak truk.'
    ],
    regulations: ['<strong>Permenaker No. 8 Tahun 2020</strong>.', '<strong>Standar EN 15635</strong> (Steel Static Storage Systems - Application and Maintenance of Storage Equipment).'],
    modules: [
      {
        name: 'Modul 1: Manajemen Racking Integrity & Standar Inspeksi EN 15635',
        theory: 'Toleransi lendutan balok (deflection L/200), kerusakan kolom tiang (Green, Amber, Red Risk), pemasangan column protector.',
        practical: 'Audit visual kerusakan tiang dan beam rak selektif gudang.'
      },
      {
        name: 'Modul 2: Traffic Management Gudang & Loading Dock Safety',
        theory: 'Sistem segregasi fisik pejalan kaki, penggunaan wheel chock pengganjal ban truk, dock leveler interlock.',
        practical: 'Penyusunan layout alur lalu lintas satu arah (One-Way Traffic Flow Plan).'
      }
    ],
    equipment: ['Racking Inspection Gauge.', 'Wheel Chock Heavy Duty & Convex Safety Mirror.'],
    participants: ['Warehouse Supervisor, Inventory Lead, Logistics Officer, dan Safety Officer Pergudangan.'],
    tableData: {
      headers: ['Tingkat Kerusakan Rak (EN 15635)', 'Kondisi Deformasi Tiang', 'Tindakan Pengendalian Wajib'],
      rows: [
        ['Green Level (Aman Terpantau)', 'Deformasi tiang < 3 mm', 'Catat dalam log pemantauan bulanan'],
        ['Amber Level (Waspada)', 'Deformasi tiang 3 – 5 mm', 'Kosongkan beban rak dalam waktu 4 minggu'],
        ['Red Level (BAHAYA KRITIS)', 'Deformasi tiang > 5 mm / retak', 'KOSONGKAN BEBAN SEKETIKA & Pasang barikade dilarang pakai']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/operator-forklift/', label: 'Pelatihan Operator Forklift' },
      { href: '/kategori-pelatihan/operator-reach-truck/', label: 'Pelatihan Operator Reach Truck' }
    ],
    faqs: [
      {
        q: 'Apa fungsi utama Column Protector pada sistem racking gudang?',
        a: 'Column protector adalah pelindung baja tebal yang dipasang melingkari dasar tiang rak untuk menyerap energi benturan garpu forklift agar tidak merusak struktur utama tiang rak penahan beban vertikal.'
      }
    ]
  },

  // 14. Fire Warden / Floor Captain
  {
    key: 'fire-warden-floor-captain',
    hub: 'peran-jabatan',
    path: 'peran-jabatan/fire-warden-floor-captain/',
    title: 'Pelatihan Fire Warden & Floor Captain: Komando Evakuasi Darurat Gedung',
    h1: 'Pelatihan Fire Warden & Floor Captain: Taktik Penyisiran Ruangan, Manajemen Tangga Darurat, dan Headcount Assembly Point',
    meta: 'Pelatihan Fire Warden & Floor Captain gedung bertingkat: peran pemandu evakuasi, penyisiran toilet/ruang tertutup, penanganan korban histeris/difabel, dan koordinasi dengan FACP.',
    imgAlt: 'Floor captain mengenakan topi dan rompi keselamatan oranye memegang megaphone mengarahkan karyawan menuruni tangga darurat gedung',
    related: ['petugas-peran-kebakaran', 'simulasi-evakuasi-gedung', 'emergency-response-team'],
    intro: '<strong>Fire Warden / Floor Captain</strong> adalah pimpinan evakuasi darurat per lantai gedung yang bertugas menyisir seluruh ruangan, memastikan tidak ada orang tertinggal, mengarahkan massa menuruni tangga darurat dengan tertib, dan melaporkan status headcount di titik kumpul.',
    hazards: [
      '<strong>Penghuni Tertinggal di Ruang Tersembunyi:</strong> Karyawan tertidur di ruang istirahat atau toilet saat evakuasi berlangsung.',
      '<strong>Kepanikan di Tangga Darurat (Stairwell Bottleneck):</strong> Desak-desakan yang memicu korban terinjak-injak.',
      '<strong>Penghuni Menggunakan Lift:</strong> Terjebak di dalam sangkar lift saat listrik padam total.'
    ],
    regulations: ['<strong>Kepmenaker No. 186/MEN/1999</strong>.', '<strong>Permen PU No. 26/2008</strong>.'],
    modules: [
      {
        name: 'Modul 1: Tugas & Protokol Penyisiran Lantai (Floor Sweeping)',
        theory: 'Teknik penyisiran sistematis (Sweep Search), penandaan pintu ruangan yang telah bersih (Door Tagging/Ribbon), penanganan difabel.',
        practical: 'Simulasi penyisiran 15 ruangan kantor dalam waktu < 2 menit.'
      },
      {
        name: 'Modul 2: Komando Tangga Darurat & Verifikasi Titik Kumpul',
        theory: 'Pengaturan laju aliran di tangga darurat, penutupan pintu fire door tahan api, teknik headcount cepat di Assembly Point.',
        practical: 'Drill pelaporan status lantai via radio ke Incident Commander di posko utama.'
      }
    ],
    equipment: ['Megaphone Evakuasi, Rompi Reflektif Floor Captain, Senter Darurat LED, dan Papan Status Lantai.'],
    participants: ['Fire Warden Gedung, Floor Captain, Tenant Representative, dan Security Perkantoran.'],
    tableData: {
      headers: ['Tahapan Aksi Fire Warden', 'Waktu Respons Standar', 'Instruksi Kunci'],
      rows: [
        ['Saat Alarm Kebakaran Berbunyi', '< 30 Detik', 'Kenakan rompi, ambil senter/megaphone, instruksikan evakuasi'],
        ['Penyisiran Ruangan & Toilet', '< 90 Detik', 'Periksa toilet, ruang rapat, tutup pintu tanpa mengunci'],
        ['Pengawalan di Tangga Darurat', '2 – 3 Menit', 'Pastikan berjalan di sisi kanan, dilarang membuka HP'],
        ['Pelaporan di Assembly Point', '< 5 Menit', 'Laporkan: "Lantai X bersih, jumlah headcount Y orang lengkap"']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/simulasi-evakuasi-gedung/', label: 'Pelatihan Simulasi Evakuasi' },
      { href: '/kategori-pelatihan/petugas-peran-kebakaran/', label: 'Pelatihan Petugas Peran Kebakaran' }
    ],
    faqs: [
      {
        q: 'Mengapa pintu darurat harus selalu ditutup kembali setelah dilewati saat evakuasi kebakaran?',
        a: 'Pintu darurat dirancang tahan api dan asap (Fire Door). Menutup kembali pintu darurat akan mencegah asap beracun dan lidah api masuk ke dalam lorong tangga darurat yang sedang digunakan oleh ribuan orang untuk melarikan diri.'
      }
    ]
  },

  // 15. Process Safety Engineer
  {
    key: 'process-safety-engineer',
    hub: 'peran-jabatan',
    path: 'peran-jabatan/process-safety-engineer/',
    title: 'Pelatihan Process Safety Engineer: PSM & Analisis Bahaya Proses (HAZOP)',
    h1: 'Pelatihan Process Safety Engineer: 14 Elemen OSHA PSM, Layer of Protection Analysis (LOPA), dan Studi HAZOP Pabrik Kimia',
    meta: 'Pelatihan Process Safety Engineer: Process Safety Management (PSM), HAZOP Study, SIL & LOPA calculation, Process Safety Information (PSI), dan Management of Change (MOC).',
    imgAlt: 'Process safety engineer memimpin sidang HAZOP meninjau diagram perpipaan dan instrumentasi (P&ID) pabrik petrokimia',
    related: ['ahli-k3-kimia', 'petugas-k3-kimia', 'chemical-handling'],
    intro: '<strong>Process Safety Engineer</strong> berfokus pada pencegahan pelepasan bahan kimia beracun, ledakan gas bertekanan, dan reaksi runaway reaktor skala besar melalui penerapan <strong>14 Elemen Process Safety Management (PSM)</strong>.',
    hazards: [
      '<strong>Pelepasan Bahan Kimia Bencana Mayor (Major Toxic Release):</strong> Kegagalan katup pelepas tekanan reaktor yang menyemburkan gas klorin.',
      '<strong>Modifikasi Peralatan Tanpa Kajian (MOC Failure):</strong> Mengubah diameter pipa atau jenis gasket tanpa review teknis keselamatan.',
      '<strong>Alarm Fatigue di Ruang Kontrol DCS:</strong> Operator mengabaikan alarm kritis akibat terlalu banyak alarm palsu.'
    ],
    regulations: ['<strong>Standar OSHA 29 CFR 1910.119</strong> (Process Safety Management).', '<strong>Standar IEC 61511</strong> (Functional Safety - Safety Instrumented Systems).'],
    modules: [
      {
        name: 'Modul 1: 14 Elemen Process Safety Management (OSHA PSM)',
        theory: 'Process Safety Information (PSI), Process Hazard Analysis (PHA), Management of Change (MOC), Pre-Startup Safety Review (PSSR), Mechanical Integrity.',
        practical: 'Audit alur persetujuan Management of Change (MOC) pada modifikasi pompa bahan bakar.'
      },
      {
        name: 'Modul 2: Fasilitasi Sidang HAZOP & Kalkulasi SIL/LOPA',
        theory: 'Metodologi Node, Parameter, Guide Words (Flow More/Less/Reverse), Layer of Protection Analysis (LOPA), Safety Integrity Level (SIL 1-4).',
        practical: 'Simulasi pelaksanaan sidang HAZOP pada lembar P&ID kolom distilasi minyak.'
      }
    ],
    equipment: ['Software Pemodelan HAZOP & LOPA.', 'Set P&ID (Piping & Instrumentation Diagram) Kompleks Kilang.'],
    participants: ['Process Engineer, Chemical Engineer, Instrument & Control Engineer, dan HSE Process Lead.'],
    tableData: {
      headers: ['Safety Integrity Level (SIL)', 'Probabilitas Kegagalan Permintaan (PFDavg)', 'Faktor Pengurangan Risiko (RRF)'],
      rows: [
        ['SIL 1', '0.1 s.d 0.01 (10⁻¹ s.d 10⁻²)', 'Pengurangan Risiko 10x s.d 100x'],
        ['SIL 2', '0.01 s.d 0.001 (10⁻² s.d 10⁻³)', 'Pengurangan Risiko 100x s.d 1.000x'],
        ['SIL 3', '0.001 s.d 0.0001 (10⁻³ s.d 10⁻⁴)', 'Pengurangan Risiko 1.000x s.d 10.000x'],
        ['SIL 4 (Tertinggi)', '< 0.0001 (10⁻⁴ s.d 10⁻⁵)', 'Pengurangan Risiko > 10.000x (Reaktor Nuklir/Kritis)']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/ahli-k3-kimia/', label: 'Pelatihan Ahli K3 Kimia' },
      { href: '/kategori-pelatihan/chemical-handling/', label: 'Pelatihan Chemical Handling' }
    ],
    faqs: [
      {
        q: 'Apa yang dimaksud dengan Pre-Startup Safety Review (PSSR) dalam Process Safety Management?',
        a: 'PSSR adalah verifikasi keselamatan fisik dan administrasi mutlak yang wajib dilaksanakan sebelum fasilitas baru atau fasilitas yang baru selesai dimodifikasi diizinkan untuk dimasuki bahan kimia aktif (start-up), guna memastikan seluruh konstruksi sesuai desain dan SOP telah disahkan.'
      }
    ]
  },

  // 16. Auditor SMK3 Internal
  {
    key: 'auditor-smk3-internal',
    hub: 'peran-jabatan',
    path: 'peran-jabatan/auditor-smk3-internal/',
    title: 'Pelatihan Auditor SMK3 Internal: Kualifikasi Audit PP No. 50/2012',
    h1: 'Pelatihan Auditor SMK3 Internal: Teknik Sampling Dokumen, Wawancara Audit Triangulasi, dan Pelaporan 166 Kriteria',
    meta: 'Pelatihan Auditor Internal SMK3: penguasaan 166 kriteria audit PP No. 50/2012, teknik pembuktian bukti objektif, penyusunan audit plan & report, dan persiapan sertifikasi Bendera Emas.',
    imgAlt: 'Auditor SMK3 internal melakukan wawancara verifikasi bukti rekaman pelatihan K3 kepada supervisor di area kantor operasional',
    related: ['audit-smk3-pp-50-2012', 'ahli-k3-umum', 'lead-auditor-iso-45001'],
    intro: '<strong>Auditor SMK3 Internal</strong> adalah personil terlatih yang ditugaskan manajemen puncak untuk mengevaluasi efektivitas penerapan SMK3 secara objektif dan berkala di seluruh unit kerja perusahaan sesuai kriteria <strong>PP No. 50 Tahun 2012</strong>.',
    hazards: [
      '<strong>Audit yang Bersifat Subjektif / Formalitas:</strong> Menilai kriteria lulus tanpa memeriksa bukti rekaman implementasi riil.',
      '<strong>Gagal Menemukan Ketidaksesuaian Kritis:</strong> Mengabaikan tidak adanya pengesahan P2K3 yang dapat menggagalkan audit eksternal.',
      '<strong>Ketiadaan Tindak Lanjut Temuan (No Follow-Up):</strong> Laporan audit internal diarsipkan tanpa ada Corrective Action Plan (CAPA).'
    ],
    regulations: ['<strong>PP No. 50 Tahun 2012</strong>.', '<strong>Permenaker No. 26 Tahun 2014</strong>.'],
    modules: [
      {
        name: 'Modul 1: Pemahaman Mendalam 166 Kriteria Audit SMK3',
        theory: 'Pembagian 12 elemen kriteria, bukti pemenuhan kriteria mayor vs minor vs kritis.',
        practical: 'Audit sampling berkas pengadaan APD, sertifikasi alat, dan laporan P2K3.'
      },
      {
        name: 'Modul 2: Teknik Wawancara & Perumusan Laporan Audit',
        theory: 'Prinsip verifikasi 3 pihak (Manajemen, Pengawas, Pekerja), format penulisan Laporan Audit Internal SMK3.',
        practical: 'Simulasi Closing Meeting audit internal dan penetapan batas waktu CAPA.'
      }
    ],
    equipment: ['Checklist Master 166 Kriteria PP 50/2012.', 'Format Laporan Ketidaksesuaian Audit Internal.'],
    participants: ['Auditor Internal SMK3, QHSE Officer, Management Representative, dan Internal Control Staff.'],
    tableData: {
      headers: ['Prinsip Audit SMK3', 'Metode Pembuktian Auditor Internal', 'Tolak Ukur Kelulusan'],
      rows: [
        ['Wawancara Personil', 'Wawancara acak pekerja tanpa didampingi atasan', 'Pekerja memahami kebijakan K3 & prosedur darurat'],
        ['Verifikasi Dokumen', 'Pemeriksaan izin pemakaian SILO, SIO, sertifikat', 'Dokumen masih aktif & disahkan Disnaker'],
        ['Observasi Lapangan', 'Pemeriksaan fisik rambu, barikade, APAR, P3K', 'Kondisi fisik sesuai dengan prosedur tertulis']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/audit-smk3-pp-50-2012/', label: 'Pelatihan Audit SMK3' },
      { href: '/kategori-pelatihan/ahli-k3-umum/', label: 'Pelatihan Ahli K3 Umum' }
    ],
    faqs: [
      {
        q: 'Berapa kali audit internal SMK3 wajib dilaksanakan dalam setahun?',
        a: 'Berdasarkan PP No. 50 Tahun 2012, audit internal SMK3 wajib dilaksanakan sekurang-kurangnya 1 (satu) kali dalam setahun untuk memastikan seluruh sistem berjalan efektif sebelum diajukan ke audit sertifikasi eksternal.'
      }
    ]
  },

  // 17. Quality Assurance (QA/QC) Safety Integration
  {
    key: 'quality-assurance-qa-qc',
    hub: 'peran-jabatan',
    path: 'peran-jabatan/quality-assurance-qa-qc/',
    title: 'Pelatihan Integrasi QA/QC & K3: Pengawasan Mutu & Keselamatan',
    h1: 'Pelatihan QA/QC Safety Integration: Penjaminan Mutu Konstruksi, Uji NDT Las, dan Keselamatan Inspeksi Lapangan',
    meta: 'Pelatihan integrasi QA/QC dan K3: inspeksi mutu material, uji NDT radiography/ultrasonic, kalibrasi alat ukur, dan mitigasi bahaya inspeksi QC di area berisiko tinggi.',
    imgAlt: 'QA/QC inspector memeriksa hasil uji penetrant testing pada sambungan flange pipa pabrik kimia',
    related: ['safety-inspector', 'inspeksi-bejana-tekan', 'welding-safety'],
    intro: '<strong>Quality Assurance / Quality Control (QA/QC) Engineer</strong> menjamin kualitas material dan integritas konstruksi sesuai standar spesifikasi teknik, di mana kegagalan mutu struktur atau sambungan las berbanding lurus dengan timbulnya bahaya kecelakaan kerja fatal.',
    hazards: [
      '<strong>Menerima Material Sub-Standar (Defective Parts):</strong> Mengizinkan penggunaan baut baja mutu rendah yang dapat patah saat menahan beban kritis.',
      '<strong>Inspeksi di Area Bahaya Tanpa APD Khusus:</strong> Melakukan pemeriksaan dimensi di dekat radiasi sinar-X NDT atau bejana bertekanan aktif.',
      '<strong>Cacat Las yang Lolos Uji:</strong> Kesalahan interpretasi film radiografi yang memicu keretakan pipa gas.'
    ],
    regulations: ['<strong>Standar ISO 9001:2015</strong> & <strong>ISO 45001:2018</strong>.', '<strong>Standar ASME Section V</strong> (Nondestructive Examination).'],
    modules: [
      {
        name: 'Modul 1: Sinergi Sistem Manajemen Mutu (QA/QC) & K3',
        theory: 'Integrasi Quality Plan dan Safety Plan, pengendalian material non-conforming, audit kelaikan vendor supplier.',
        practical: 'Audit verifikasi Mill Certificate baja konstruksi dan uji tarik tarik baut.'
      },
      {
        name: 'Modul 2: Keselamatan Pelaksanaan Uji Tak Merusak (NDT)',
        theory: 'Proteksi radiasi saat Gamma Radiography NDT, keselamatan cairan kimia Dye Penetrant & Magnetic Particle.',
        practical: 'Praktik inspeksi visual sambungan las (Visual Welding Inspection) menggunakan Cambridge Gauge.'
      }
    ],
    equipment: ['Welding Fillet Gauge & Cambridge Gauge.', 'Digital Coating Thickness Gauge & UV NDT Lamp.'],
    participants: ['QA/QC Engineer, QC Inspector Sipil/Mekanikal/Elektrikal, Welding Inspector, dan Quality Coordinator.'],
    tableData: {
      headers: ['Metode Uji QC', 'Fungsi Penjaminan Mutu', 'Bahaya K3 yang Wajib Dikendalikan'],
      rows: [
        ['Radiographic Testing (RT)', 'Mendeteksi cacat internal sambungan las', 'Bahaya radiasi pengion (Wajib barikade 2.5 µSv/jam)'],
        ['Hydrostatic Pressure Test', 'Menguji kekuatan dinding bejana/pipa', 'Bahaya semburan tekanan tinggi (Wajib blast shield)'],
        ['Ultrasonic Testing (UT)', 'Mengukur ketebalan pelat & cacat fusi', 'Bahaya bekerja di ketinggian scaffolding / pipa']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/inspeksi-bejana-tekan/', label: 'Pelatihan Inspeksi Bejana Tekan' },
      { href: '/peran-jabatan/safety-inspector/', label: 'Peran Safety Inspector' }
    ],
    faqs: [
      {
        q: 'Mengapa bagian QA/QC wajib berkoordinasi ketat dengan tim K3 saat pelaksanaan Hydrotest pipa?',
        a: 'Karena pengujian hydrotest pipa melibatkan tekanan fluida ratusan bar. Tim K3 wajib memasang barikade radius bahaya eksklusi dan memastikan tidak ada personil mendekati sambungan baut saat tekanan sedang dinaikkan.'
      }
    ]
  },

  // 18. Maintenance Planner / Engineer
  {
    key: 'maintenance-planner-engineer',
    hub: 'peran-jabatan',
    path: 'peran-jabatan/maintenance-planner-engineer/',
    title: 'Pelatihan Maintenance Planner: Integrasi K3 dalam Pemeliharaan Mesin Pabrik',
    h1: 'Pelatihan Maintenance Planner: Perencanaan Pemeliharaan Preventif (PM), Manajemen LOTO, dan Keselamatan Turnaround (TAR)',
    meta: 'Pelatihan K3 Maintenance Planner: integrasi Job Safety Analysis dalam Work Order pemeliharaan, manajemen isolasi LOTO, perencanaan Turnaround / Shutdown pabrik, dan Reliability Safety.',
    imgAlt: 'Maintenance planner menyusun jadwal preventive maintenance mesin dan memverifikasi ketersediaan suku cadang LOTO pada software CMMS',
    related: ['lockout-tagout-loto', 'keselamatan-rotating-equipment', 'machine-guarding'],
    intro: '<strong>Maintenance Planner / Engineer</strong> merancang jadwal pemeliharaan preventif (PM) dan pemeliharaan besar (Shutdown/Turnaround). Perencanaan yang matang memastikan teknisi memiliki waktu kerja yang aman, isolasi energi LOTO terencana, dan suku cadang keselamatan tersedia.',
    hazards: [
      '<strong>Perencanaan Kerja Tanpa Prosedur LOTO:</strong> Work Order terbit tanpa mencantumkan Energy Control Procedure isolasi listrik/hidrolik.',
      '<strong>Jadwal Shutdown Terlalu Padat (Over-Compression):</strong> Memaksa teknisi lembur 16 jam sehari memicu kecelakaan fatal akibat kelelahan berat.',
      '<strong>Pengabaian Pengujian Safety Device Pasca Perbaikan:</strong> Mesin dihidupkan kembali tanpa memasang kembali tutup pengaman mesin (guarding).'
    ],
    regulations: ['<strong>Permenaker No. 38 Tahun 2016</strong>.', '<strong>Standar OSHA 1910.147</strong> (Lockout/Tagout).'],
    modules: [
      {
        name: 'Modul 1: Integrasi K3 dalam Computerized Maintenance Management System (CMMS)',
        theory: 'Penyusunan Standard Job Plan dengan lampiran JSA, verifikasi isolasi energi LOTO pada modul Work Order SAP/Maximo.',
        practical: 'Pembuatan Work Order pemeliharaan overhaul pompa kimia bertekanan lengkap dengan instruksi LOTO.'
      },
      {
        name: 'Modul 2: Perencanaan Keselamatan Turnaround (Plant Shutdown Safety)',
        theory: 'Manajemen ribuan izin kerja harian, zonasi penyimpanan material berat, bridging document kontraktor maintenance.',
        practical: 'Penyusunan Master Schedule Shutdown Pabrik 14 hari dengan integrasi safety milestone.'
      }
    ],
    equipment: ['Software CMMS (Computerized Maintenance Management System).', 'Master LOTO Station & Group Lockbox Kit.'],
    participants: ['Maintenance Planner, Reliability Engineer, Mechanical/Electrical Engineer, dan Shutdown Coordinator.'],
    tableData: {
      headers: ['Tahapan Pemeliharaan', 'Peran K3 Maintenance Planner', 'Output Keselamatan'],
      rows: [
        ['Pre-Planning (Sebelum Kerja)', 'Menyertakan JSA, daftar titik LOTO, dan APD khusus dalam Work Order', 'Teknisi memahami bahaya sebelum ke lapangan'],
        ['Eksekusi Lapangan', 'Memantau kecukupan jam istirahat teknisi (mencegah fatigue)', 'Nihil insiden akibat kelelahan lembur'],
        ['Post-Maintenance (Komisioning)', 'Mewajibkan checklist PSSR dan pemasangan kembali pelindung mesin', 'Mesin beroperasi kembali 100% aman']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/lockout-tagout-loto/', label: 'Pelatihan Lockout Tagout' },
      { href: '/kategori-pelatihan/machine-guarding/', label: 'Pelatihan Machine Guarding' }
    ],
    faqs: [
      {
        q: 'Apa peran terpenting Maintenance Planner dalam mencegah kecelakaan kerja pemeliharaan?',
        a: 'Peran terpentingnya adalah memastikan bahwa setiap instruksi kerja (Work Order) yang diterbitkan telah terintegrasi dengan prosedur isolasi energi LOTO spesifik mesin dan alokasi waktu kerja realistis tanpa memicu kelelahan ekstrem.'
      }
    ]
  },

  // 19. Contractor Supervisor (CSMS Field Lead)
  {
    key: 'contractor-supervisor',
    hub: 'peran-jabatan',
    path: 'peran-jabatan/contractor-supervisor/',
    title: 'Pelatihan Contractor Supervisor: Manajemen K3 Kontraktor & CSMS Lapangan',
    h1: 'Pelatihan Pengawas Kontraktor (Contractor Supervisor): Kepatuhan CSMS, Izin Kerja Pemilik Fasilitas, dan Manajemen Tenaga Kerja Vendor',
    meta: 'Pelatihan Contractor Supervisor: pemenuhan standar CSMS pemilik proyek, pengurusan Permit to Work, verifikasi sertifikat pekerja subkontraktor, dan Tool Box Talk.',
    imgAlt: 'Contractor supervisor menandatangani lembar izin kerja aman PTW bersama Safety Officer pemilik pabrik (Owner)',
    related: ['contractor-safety-management-system-csms', 'permit-to-work', 'safety-officer'],
    intro: '<strong>Contractor Supervisor (Pengawas Lapangan Kontraktor)</strong> adalah perwakilan manajemen vendor rekanan di lokasi proyek pemilik fasilitas (Owner) yang bertanggung jawab menjamin seluruh pekerja subkontraktor mematuhi standar <strong>CSMS</strong>.',
    hazards: [
      '<strong>Membawa Pekerja Tanpa Sertifikasi Resmi:</strong> Mempekerjakan rigger atau operator crane tanpa lisensi SIO Kemnaker yang sah.',
      '<strong>Menggunakan Peralatan Kerja Rusak:</strong> Membawa mesin las kabel terkelupas atau tali sling aus ke area kilang migas/pabrik.',
      '<strong>Bekerja Tanpa Izin Kerja Valid:</strong> Memulai pekerjaan berisiko sebelum izin kerja disahkan oleh Area Authority.'
    ],
    regulations: ['<strong>UU No. 1 Tahun 1970</strong>.', '<strong>PP No. 50 Tahun 2012</strong> (Kriteria 6.8).'],
    modules: [
      {
        name: 'Modul 1: Penyelarasan Sistem K3 Kontraktor & Pemilik Fasilitas (Bridging Protocol)',
        theory: 'Memahami CSMS Owner, aturan Site Specific Safety Plan (SSSP), verifikasi legalitas SILO alat dan SIO personil.',
        practical: 'Audit kelayakan berkas dokumen tender keselamatan kerja kontraktor.'
      },
      {
        name: 'Modul 2: Tata Kelola Izin Kerja & Pengawasan Disiplin Lapangan',
        theory: 'Prosedur pengajuan PTW, pengawasan subkontraktor tier-2, pelaksanaan TBM harian kontraktor.',
        practical: 'Simulasi pengurusan izin kerja panas (Hot Work Permit) di area kilang aktif.'
      }
    ],
    equipment: ['Contractor Safety Passport Kit.', 'Formulir JSA Kontraktor & Daily Inspection Checklist.'],
    participants: ['Project Manager Kontraktor, Site Supervisor Rekanan, Mandor Vendor, dan Subcontractor Coordinator.'],
    tableData: {
      headers: ['Tahapan Proyek Kontraktor', 'Kewajiban Legal Contractor Supervisor', 'Konsekuensi Jika Melanggar'],
      rows: [
        ['Mobilisasi Alat & Tenaga Kerja', 'Wajib melampirkan sertifikat SIO & SILO aktif', 'Pekerja / alat DITOLAK masuk gerbang pabrik'],
        ['Pelaksanaan Pekerjaan Harian', 'Wajib memimpin TBM pagi & memegang PTW aktif', 'Pekerjaan dihentikan seketika (Stop Work Order)'],
        ['Demobilisasi & Serah Terima', 'Pembersihan area (housekeeping 100%) bebas sampah', 'Pencairan pembayaran akhir DITAHAN (Hold Payment)']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/contractor-safety-management-system-csms/', label: 'Pelatihan CSMS' },
      { href: '/kategori-pelatihan/permit-to-work/', label: 'Pelatihan Permit to Work' }
    ],
    faqs: [
      {
        q: 'Apa sanksi bagi perusahaan kontraktor jika terbukti mempekerjakan operator tanpa SIO resmi di area kilang/pabrik?',
        a: 'Peralatan dan operator akan langsung dikeluarkan dari lokasi proyek, perusahaan kontraktor dikenakan surat peringatan keras (Deficiency Notice), dan nilai evaluasi CSMS akan anjlok yang berpotensi memicu sanksi blacklist dalam tender mendatang.'
      }
    ]
  },

  // 20. Site Safety Coordinator
  {
    key: 'site-safety-coordinator',
    hub: 'peran-jabatan',
    path: 'peran-jabatan/site-safety-coordinator/',
    title: 'Pelatihan Site Safety Coordinator: Koordinasi K3 Proyek EPC & Konstruksi',
    h1: 'Pelatihan Site Safety Coordinator: Koordinasi K3 Multi-Kontraktor, Simulasi Tanggap Darurat Proyek, dan Manajemen Risiko Terpadu',
    meta: 'Pelatihan Site Safety Coordinator: integrasi K3 multi-kontraktor proyek EPC, penyusunan Site Safety Plan, pelaporan statistik bulanan, dan koordinasi dengan Project Director.',
    imgAlt: 'Site safety coordinator memimpin rapat koordinasi mingguan K3 bersama seluruh perwakilan subkontraktor proyek',
    related: ['safety-officer', 'hse-manager', 'ahli-k3-konstruksi'],
    intro: '<strong>Site Safety Coordinator</strong> mengoordinasikan seluruh perwira keselamatan (Safety Officers) dari puluhan subkontraktor yang bekerja serentak di satu tapak proyek EPC atau kawasan industri terpadu.',
    hazards: [
      '<strong>Tabrakan Ruang Kerja Antar-Kontraktor (Simultaneous Operations / SIMOPS):</strong> Pekerjaan panas las berlangsung tepat di atas pekerjaan galian gas pipa.',
      '<strong>Kekacauan Komunikasi Tanggap Darurat:</strong> Masing-masing subkontraktor memiliki frekuensi radio dan nomor darurat berbeda.',
      '<strong>Pelaporan Statistik Keselamatan Tidak Terintegrasi:</strong> Jam kerja selamat tidak tercatat secara akurat.'
    ],
    regulations: ['<strong>Permen PUPR No. 10 Tahun 2021</strong>.', '<strong>UU No. 1 Tahun 1970</strong>.'],
    modules: [
      {
        name: 'Modul 1: Manajemen Operasi Simultan (SIMOPS Management)',
        theory: 'Matriks SIMOPS (Aktivitas yang dilarang bersamaan), zonasi ruang kerja terkoordinasi, sistem radio darurat terpusat.',
        practical: 'Penyusunan SIMOPS Risk Matrix untuk pekerjaan lifting modul berdampingan dengan pengelasan tangki.'
      },
      {
        name: 'Modul 2: Rapat Koordinasi Mingguan & Evaluasi Kinerja K3 (Weekly HSE Meeting)',
        theory: 'Teknik memimpin rapat koordinasi multi-kontraktor, evaluasi scoring pelanggaran K3 vendor, audit bersama mingguan.',
        practical: 'Simulasi pelaksanaan Joint Site Safety Inspection dan Weekly HSE Meeting.'
      }
    ],
    equipment: ['SIMOPS Matrix Planning Board.', 'Integrated Project HSE Dashboard Software.'],
    participants: ['Site Safety Coordinator, EPC HSE Lead, Construction Manager, dan Project Safety Superintendent.'],
    tableData: {
      headers: ['Aktivitas Koordinasi Proyek', 'Frekuensi Pelaksanaan', 'Pihak yang Wajib Hadir'],
      rows: [
        ['SIMOPS Coordination Meeting', 'Harian sebelum penerbitan PTW', 'Area Authority & Seluruh Lead Kontraktor'],
        ['Joint Site Safety Walkthrough', 'Mingguan (Setiap hari Rabu/Kamis)', 'Project Director, HSE Coordinator, Pimpinan Vendor'],
        ['Monthly HSE Performance Review', 'Bulanan', 'Seluruh Direktur Subkontraktor & Owner']
      ]
    },
    links: [
      { href: '/peran-jabatan/safety-officer/', label: 'Peran Safety Officer' },
      { href: '/peran-jabatan/hse-manager/', label: 'Peran HSE Manager' }
    ],
    faqs: [
      {
        q: 'Apa fungsi utama SIMOPS Matrix dalam proyek konstruksi besar?',
        a: 'SIMOPS Matrix adalah tabel matriks panduan yang mengatur aktivitas berisiko tinggi mana saja yang DILARANG KERAS dilaksanakan secara bersamaan di area yang sama atau berdekatan (misalnya pekerjaan pengujian radiografi tidak boleh dilakukan bersamaan dengan perakitan scaffolding).'
      }
    ]
  }
];

console.log(`Loaded ${batch4Part3.length} programs for Batch 4 Part 3.`);
