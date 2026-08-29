import { ExtendedProgramDetail } from './batch4-master-data';

export const batch4JobRolesPart2: ExtendedProgramDetail[] = [
  // 5. Foreman Produksi Tambang
  {
    key: 'foreman-produksi-tambang',
    hub: 'peran-jabatan',
    path: 'peran-jabatan/foreman-produksi-tambang/',
    title: 'Pelatihan Foreman & Group Leader Tambang: POP Sertifikasi BNSP',
    h1: 'Pelatihan Foreman Produksi Tambang: Kepemimpinan Operasional Lapangan, P5M, dan Kepatuhan K3 Tambang',
    meta: 'Pelatihan kepemimpinan pengawas lini depan tambang (Foreman/Group Leader): sertifikasi POP BNSP, pelaksanaan P5M, mitigasi bahaya loading & hauling, dan JSA tambang.',
    imgAlt: 'Foreman tambang berhelm safety memegang radio komunikasi memberikan instruksi kerja aman kepada operator excavator di front penambangan',
    related: ['pengawas-operasional-pertama-pop', 'keselamatan-alat-berat', 'operator-excavator'],
    intro: '<strong>Foreman Produksi / Group Leader Tambang</strong> adalah ujung tombak eksekusi target produksi dan keselamatan kerja di front penambangan. Foreman memegang wewenang langsung menghentikan unit alat berat yang beroperasi dalam kondisi tidak aman.',
    hazards: [
      '<strong>Mengorbankan Keselamatan Demi Target Ritase:</strong> Memaksa operator bekerja di lereng labil demi mengejar target tonase harian.',
      '<strong>Briefing P5M Formalitas:</strong> Tidak menyampaikan potensi bahaya spesifik shift kepada operator.',
      '<strong>Gagal Mengawasi Titik Buta (Blind Spot):</strong> Membiarkan pekerja berada di dekat radius putar excavator.'
    ],
    regulations: ['<strong>Kepmen ESDM No. 1827 K/30/MEM/2018</strong>.', '<strong>Permen ESDM No. 26/2018</strong>.'],
    modules: [
      {
        name: 'Modul 1: Tugas & Tanggung Jawab Pengawas Operasional Tambang',
        theory: 'Akuntabilitas K3 pengawas lini depan, hak SWA, komunikasi radio tambang terstandar.',
        practical: 'Praktik audit P2H armada dan pelaksanaan P5M di front tambang.'
      },
      {
        name: 'Modul 2: Manajemen Bahaya Front Penambangan & Disposal',
        theory: 'Kestabilan dinding front tambang, drainase sump air, penataan bund wall disposal.',
        practical: 'Simulasi penanganan tanah amblas di area loading point dump truck.'
      }
    ],
    equipment: ['Radio Komunikasi VHF Tambang.', 'Checklist P5M & Form JSA Tambang.'],
    participants: ['Foreman Tambang, Group Leader, Pengawas Pit/Disposal, dan Junior Supervisor Tambang.'],
    tableData: {
      headers: ['Aktivitas Shift Foreman', 'Fokus Pengawasan Utama', 'Output Kinerja K3'],
      rows: [
        ['Awal Shift (06.00 / 18.00)', 'Pemeriksaan Fit-to-Work & P5M', '100% operator siap kerja bebas fatigue'],
        ['Pertengahan Shift', 'Inspeksi front tambang & jalan hauling', 'Nihil pelanggaran jarak iring & over-speed'],
        ['Akhir Shift', 'Handover catatan kondisi bahaya ke shift berikutnya', 'Logbook serah terima shift lengkap']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/pengawas-operasional-pertama-pop/', label: 'Pelatihan POP Tambang' },
      { href: '/kategori-pelatihan/keselamatan-alat-berat/', label: 'Pelatihan Keselamatan Alat Berat' }
    ],
    faqs: [
      {
        q: 'Apa peran terpenting Foreman Tambang dalam sistem SMKP?',
        a: 'Peran terpenting Foreman adalah sebagai pengawas operasional pertama yang memastikan seluruh SOP keselamatan dijalankan secara disiplin oleh operator di lapangan setiap menit selama jam kerja berlangsung.'
      }
    ]
  },

  // 6. Facility Manager
  {
    key: 'facility-manager',
    hub: 'peran-jabatan',
    path: 'peran-jabatan/facility-manager/',
    title: 'Pelatihan Facility Manager: Tata Kelola K3 Gedung Komersial & Industri',
    h1: 'Pelatihan Facility Manager: Manajemen K3 Gedung Bertingkat, Proteksi Kebakaran, Tata Udara HVAC, dan Audit Kepatuhan Gedung',
    meta: 'Pelatihan K3 Facility Manager: pemeliharaan utilitas gedung, sistem fire hydrant/sprinkler, kelaikan lift penumpang, indoor air quality, dan sertifikasi SLF gedung.',
    imgAlt: 'Facility manager meninjau panel Building Automation System (BAS) dan sistem pompa pendingin HVAC gedung perkantoran',
    related: ['k3-perkantoran-dan-gedung-pemerintah', 'hydrant-dan-sprinkler', 'simulasi-evakuasi-gedung'],
    intro: '<strong>Facility Manager</strong> bertanggung jawab atas keandalan, keselamatan, dan keberlanjutan seluruh infrastruktur fisik gedung bertingkat, mall komersial, rumah sakit, dan kampus industri, termasuk perizinan Sertifikat Laik Fungsi (SLF) dan proteksi kebakaran.',
    hazards: [
      '<strong>Kegagalan Sistem Proteksi Kebakaran Gedung:</strong> Pompa pemadam macet saat terjadi korsleting listrik lantai atas.',
      '<strong>Kegagalan Lift & Eskalator Penumpang:</strong> Putusnya kabel sling atau macetnya safety gear lift penumpang.',
      '<strong>Kualitas Udara Ruangan Buruk (Sick Building Syndrome):</strong> Saluran HVAC kotor menyebarkan bakteri dan jamur.'
    ],
    regulations: ['<strong>Permen PU No. 26/PRT/M/2008</strong>.', '<strong>Permenkes No. 48/2016</strong>.', '<strong>UU No. 28 Tahun 2002</strong> tentang Bangunan Gedung.'],
    modules: [
      {
        name: 'Modul 1: Manajemen Proteksi Kebakaran & Utilitas Kritis Gedung',
        theory: 'Fire Alarm System, Diesel Pump, Genset Emergency, Smoke Management, Riksa Uji Lift & Penyalur Petir.',
        practical: 'Audit kelengkapan dokumen riksa uji tahunan fasilitas gedung bertingkat.'
      },
      {
        name: 'Modul 2: Kesiapsiagaan Bencana & Tata Kelola Tenant',
        theory: 'Tenant Safety Fit-Out Guidelines, Fire Drill tahunan, manajemen limbah domestik & B3 gedung.',
        practical: 'Penyusunan Rencana Kesiapsiagaan Darurat Gedung Bertingkat.'
      }
    ],
    equipment: ['Building Automation System Monitor.', 'Master Checklist Audit SLF Gedung.'],
    participants: ['Facility Manager, Building Operation Manager, Chief Engineer Gedung, dan Property Manager.'],
    tableData: {
      headers: ['Utilitas Fasilitas Gedung', 'Periode Uji Berkala Legal', 'Instansi Pembina Terkait'],
      rows: [
        ['Instalasi Penyalur Petir', '1 Kali setiap 2 Tahun', 'Dinas Tenaga Kerja (Disnaker)'],
        ['Lift & Eskalator Penumpang', '1 Kali setiap 1 Tahun', 'Disnaker / Balai K3'],
        ['Sistem Proteksi Kebakaran', '1 Kali setiap 1 Tahun', 'Dinas Pemadam Kebakaran & Penyelamatan'],
        ['Sertifikat Laik Fungsi (SLF)', 'Setiap 5 Tahun Sekali', 'Dinas PUPR / PTSP Daerah']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/hydrant-dan-sprinkler/', label: 'Pelatihan Hydrant & Sprinkler' },
      { href: '/kategori-pelatihan/k3-perkantoran-dan-gedung-pemerintah/', label: 'Pelatihan K3 Perkantoran' }
    ],
    faqs: [
      {
        q: 'Apa tanggung jawab hukum Facility Manager dalam pemeliharaan gedung bertingkat?',
        a: 'Facility Manager bertanggung jawab menjamin seluruh utilitas keselamatan (lift, pompa pemadam, penangkal petir, instalasi listrik) memiliki izin pemakaian/sertifikat riksa uji yang sah dan masih berlaku dari instansi berwenang.'
      }
    ]
  },

  // 7. Environmental Officer
  {
    key: 'environmental-officer',
    hub: 'peran-jabatan',
    path: 'peran-jabatan/environmental-officer/',
    title: 'Pelatihan Environmental Officer: Kepatuhan Lingkungan & PROPER KLHK',
    h1: 'Pelatihan Environmental Officer: Pengelolaan Limbah B3, Baku Mutu Emisi & Air Limbah, serta Manajemen PROPER',
    meta: 'Pelatihan Environmental Officer industri: regulasi PP No. 22/2021, pengelolaan TPS Limbah B3, pelaporan SIMPEL & Festronik KLHK, monitoring IPAL/CEMS, dan audit PROPER.',
    imgAlt: 'Environmental officer mengambil sampel air limbah olahan pada titik penaatan outlet Instalasi Pengolahan Air Limbah (IPAL)',
    related: ['pengelolaan-limbah-b3', 'spill-response-kit', 'chemical-handling'],
    intro: '<strong>Environmental Officer (Petugas Lingkungan Hidup)</strong> mengawal kepatuhan izin lingkungan perusahaan, mengawasi operasional IPAL dan emisi cerobong, mengelola neraca limbah B3, serta memimpin program peningkatan peringkat <strong>PROPER KLHK</strong>.',
    hazards: [
      '<strong>Pencemaran Limbah Cair Melebihi Baku Mutu:</strong> Air limbah IPAL yang belum netral dibuang ke sungai umum memicu sanksi pidana KLHK.',
      '<strong>Penyimpanan Limbah B3 Ilegal:</strong> Menyimpan limbah B3 di luar TPS berizin atau melewati masa kedaluwarsa izin simpan.',
      '<strong>Kegagalan Pelaporan SIMPEL KLHK:</strong> Pelaporan online berkala terlambat yang menurunkan peringkat PROPER menjadi Merah/Hitam.'
    ],
    regulations: ['<strong>UU No. 32 Tahun 2009</strong> tentang Perlindungan dan Pengelolaan Lingkungan Hidup.', '<strong>PP No. 22 Tahun 2021</strong>.', '<strong>Permen LHK No. 1 Tahun 2021</strong> (PROPER).'],
    modules: [
      {
        name: 'Modul 1: Tata Kelola Limbah B3 & Sistem Festronik',
        theory: 'Identifikasi limbah B3, standar TPS berizin, neraca limbah triwulanan, alur manifest Festronik.',
        practical: 'Audit kesesuaian fasilitas TPS Limbah B3 dan input data neraca limbah.'
      },
      {
        name: 'Modul 2: Pemantauan Emisi Udara & Baku Mutu Air Limbah',
        theory: 'Sampling cerobong isokinetik, CEMS online, parameter BOD/COD/TSS/Logam Berat IPAL, pelaporan SIMPEL.',
        practical: 'Penyusunan Laporan Pelaksanaan Izin Lingkungan Semesteran (RKL-RPL).'
      }
    ],
    equipment: ['pH Meter & DO Meter Air Limbah.', 'Katalog Baku Mutu Emisi & Air Limbah PP 22/2021.'],
    participants: ['Environmental Officer, HSE Officer, Operator IPAL/WTP, dan Sustainability Coordinator.'],
    tableData: {
      headers: ['Peringkat PROPER KLHK', 'Kriteria Kepatuhan Lingkungan', 'Dampak Reputasi & Bisnis'],
      rows: [
        ['EMAS (Gold)', 'Beyond Compliance (Inovasi lingkungan & community development)', 'Reputasi korporat unggulan internasional'],
        ['HIJAU (Green)', 'Beyond Compliance (Efisiensi energi, 3R limbah, keanekaragaman)', 'Sangat diapresiasi investor & publik'],
        ['BIRU (Blue)', '100% Taat Regulasi Lingkungan Wajib', 'Batas standar minimal kepatuhan legal'],
        ['MERAH (Red)', 'Tidak Taat Regulasi (Melanggar baku mutu / izin)', 'Peringatan keras & ancaman sanksi hukum'],
        ['HITAM (Black)', 'Sengaja mencemari lingkungan / tidak berizin', 'Sanksi pidana penjara & penutupan pabrik']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/pengelolaan-limbah-b3/', label: 'Pelatihan Limbah B3' },
      { href: '/kategori-pelatihan/spill-response-kit/', label: 'Pelatihan Spill Response' }
    ],
    faqs: [
      {
        q: 'Apa kewajiban pelaporan berkala seorang Environmental Officer ke instansi lingkungan?',
        a: 'Kewajiban pelaporan mencakup: Laporan pelaksanaan RKL-RPL (AMDAL/UKL-UPL) per semester, Laporan Neraca Limbah B3 per triwulan melalui SIMPEL/Festronik, dan Uji Emisi Cerobong/Air Limbah berkala.'
      }
    ]
  },

  // 8. Dokter Perusahaan
  {
    key: 'dokter-perusahaan',
    hub: 'peran-jabatan',
    path: 'peran-jabatan/dokter-perusahaan/',
    title: 'Pelatihan Dokter Perusahaan: Manajemen Hiperkes & Penyakit Akibat Kerja',
    h1: 'Pengembangan Profesional Dokter Perusahaan: Penegakan Diagnosis PAK, Evaluasi Fit-to-Work, dan Manajemen Klinik Industri',
    meta: 'Program kompetensi dokter perusahaan: sertifikasi Hiperkes Permenaker No. 1/1976, penegakan 7 langkah PAK, interpretasi audiometri/spirometri, dan program wellness kesehatan kerja.',
    imgAlt: 'Dokter perusahaan memeriksa tekanan darah dan kondisi fisik pekerja dalam sesi evaluasi Fit to Work',
    related: ['dokter-perusahaan-hiperkes', 'petugas-p3k-di-tempat-kerja', 'pemeriksaan-kesehatan-kerja-mcu'],
    intro: '<strong>Dokter Perusahaan (Occupational Health Doctor)</strong> adalah tenaga medis tersertifikasi Hiperkes yang bertugas menjaga kesehatan preventif, mengelola klinik kerja, mendiagnosis Penyakit Akibat Kerja (PAK), dan menentukan status kelaikan kerja pekerja di area berisiko.',
    hazards: [
      '<strong>Keterlambatan Diagnosis Penyakit Akibat Kerja:</strong> Paparan racun industri berlanjut hingga menimbulkan kerusakan organ permanen.',
      '<strong>Rekomendasi Kelaikan Medis yang Tidak Tepat:</strong> Meloloskan pekerja sakit jantung bekerja di ruang terbatas.',
      '<strong>Kegagalan Pengendalian Wabah Penyakit Menular di Camp Kerja:</strong> Penyebaran infeksi massal di lingkungan mess pekerja.'
    ],
    regulations: ['<strong>Permenaker No. Per.01/MEN/1976</strong>.', '<strong>Perpres No. 7 Tahun 2019</strong>.', '<strong>Permenaker No. Per.03/MEN/1982</strong>.'],
    modules: [
      {
        name: 'Modul 1: Manajemen Pelayanan Kesehatan Kerja & Regulasi Hiperkes',
        theory: 'Struktur Klinik Perusahaan, rekam medis okupasi, program Return to Work pasca kecelakaan.',
        practical: 'Audit fasilitas klinik perusahaan dan sistem rujukan medis gawat darurat.'
      },
      {
        name: 'Modul 2: Penegakan 7 Langkah Diagnosis PAK & Penilaian Disabilitas',
        theory: 'Kausalitas pajanan kerja, kalkulasi persentase disabilitas anatomis & fungsional BPJS Ketenagakerjaan.',
        practical: 'Studi kasus penetapan diagnosis PAK dermatitis okupasi dan tuli nada murni.'
      }
    ],
    equipment: ['Vision Screener, Audiometer Skrining, Spirometer Digital, dan Buku Pedoman ICD-10 PAK.'],
    participants: ['Dokter Umum Klinik Perusahaan, Dokter Spesialis Okupasi (Sp.Ok), dan Medical Lead Korporat.'],
    tableData: {
      headers: ['Program Kesehatan Kerja', 'Peran Utama Dokter Perusahaan', 'Target Sasaran Medis'],
      rows: [
        ['Pemeriksaan Pra-Kerja', 'Menilai baseline kesehatan & kelaikan penempatan jabatan', 'Mencegah penempatan kerja berisiko'],
        ['Pemeriksaan Berkala', 'Mendeteksi dini perburukan organ akibat pajanan kerja', 'Intervensi medis sebelum menjadi PAK permanen'],
        ['Surveilans Ergonomi & Gizi', 'Merancang program penurunan obesitas & pencegahan MSDs', 'Meningkatkan produktivitas & stamina kerja']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/dokter-perusahaan-hiperkes/', label: 'Pelatihan Hiperkes Dokter' },
      { href: '/kategori-pelatihan/pemeriksaan-kesehatan-kerja-mcu/', label: 'Pelatihan MCU Tenaga Kerja' }
    ],
    faqs: [
      {
        q: 'Kapan dokter perusahaan wajib menerbitkan laporan Penyakit Akibat Kerja (PAK) ke instansi pemerintah?',
        a: 'Setelah diagnosis PAK ditegakkan melalui 7 langkah pembuktian medis, dokter pemeriksa wajib melaporkannya secara tertulis dalam waktu tidak lebih dari 2x24 jam kepada Disnaker setempat dan BPJS Ketenagakerjaan.'
      }
    ]
  },

  // 9. Paramedis Klinik Pabrik
  {
    key: 'paramedis-klinik-pabrik',
    hub: 'peran-jabatan',
    path: 'peran-jabatan/paramedis-klinik-pabrik/',
    title: 'Pelatihan Paramedis Klinik Pabrik: Hiperkes & Keperawatan Okupasi',
    h1: 'Pelatihan Paramedis Klinik Perusahaan: Sertifikasi Hiperkes Permenaker No. 1/1979, Penanganan Trauma Kerja, dan Rekam Medis Karyawan',
    meta: 'Pelatihan perawat/paramedis perusahaan: sertifikasi Hiperkes Permenaker No. 1/1979, triase darurat trauma kerja, pengelolaan obat klinik pabrik, audiometri/spirometri dasar, dan rekam medis.',
    imgAlt: 'Paramedis pabrik mengenakan seragam medis memeriksa luka kerja dan melakukan balut bidai pada lengan pekerja di ruang klinik pabrik',
    related: ['dokter-perusahaan-hiperkes', 'petugas-p3k-di-tempat-kerja', 'spirometri-dan-kesehatan-paru-kerja'],
    intro: '<strong>Paramedis / Perawat Perusahaan (Occupational Health Nurse)</strong> adalah garda pertama penanganan kesehatan harian pekerja di klinik pabrik, mengawal pertolongan pertama trauma kecelakaan, pencatatan rekam medis, dan pemeriksaan skrining kesehatan berkala.',
    hazards: [
      '<strong>Kesalahan Triase Gawat Darurat:</strong> Menilai korban pendarahan dalam sebagai luka ringan sehingga terlambat dirujuk.',
      '<strong>Penyimpanan Obat Kadaluarsa:</strong> Tata kelola farmasi klinik pabrik yang tidak teratur.',
      '<strong>Pencemaran Limbah Medis Jarum Suntik:</strong> Pembuangan jarum sembarangan yang memicu needle stick injury.'
    ],
    regulations: ['<strong>Permenaker No. Per.01/MEN/1979</strong> tentang Kewajiban Latihan Hiperkes Bagi Paramedis Perusahaan.', '<strong>UU No. 1 Tahun 1970</strong>.'],
    modules: [
      {
        name: 'Modul 1: Manajemen Klinik Perusahaan & Asuhan Keperawatan Okupasi',
        theory: 'Peran paramedis Hiperkes, tata kelola limbah medis B3, pencatatan kunjungan sakit harian (Daily Sickness Log).',
        practical: 'Audit kebersihan klinik dan pengelolaan Safety Box limbah jarum suntik.'
      },
      {
        name: 'Modul 2: Penanganan Trauma Darurat & Bantuan Hidup Dasar',
        theory: 'Teknik balut bidai cepat, hemostasis pendarahan, resusitasi jantung paru (CPR) + AED, stabilisasi cedera tulang belakang.',
        practical: 'Praktik simulasi evakuasi korban luka bakar kimia dan fraktur tungkai terbuka.'
      }
    ],
    equipment: ['Manekin CPR & AED Trainer.', 'Spineboard, Cervical Collar, Splinting Kit, dan Emergency Medicine Box.'],
    participants: ['Perawat / Bidan Klinik Perusahaan, Paramedis Lapangan Proyek, dan Tim Medis ERT.'],
    tableData: {
      headers: ['Tugas Utama Paramedis Pabrik', 'Frekuensi Pelaksanaan', 'Standar Acuan Medis'],
      rows: [
        ['Pelayanan Pengobatan Dasar & P3K', 'Setiap shift kerja', 'Standar Asuhan Keperawatan Indonesia'],
        ['Pemeriksaan Skrining Fit-to-Work', 'Harian sebelum pekerjaan khusus', 'Protokol Medis Dokter Perusahaan'],
        ['Pengelolaan Limbah Medis B3 Jarum', 'Harian / saat box terisi 3/4', 'Permen LHK No. 6/2021 & Safety Box']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/dokter-perusahaan-hiperkes/', label: 'Pelatihan Hiperkes Paramedis' },
      { href: '/kategori-pelatihan/petugas-p3k-di-tempat-kerja/', label: 'Pelatihan Petugas P3K' }
    ],
    faqs: [
      {
        q: 'Apakah seluruh perawat yang bekerja di klinik perusahaan wajib memiliki sertifikat Hiperkes?',
        a: 'Ya. Berdasarkan Permenaker No. 01 Tahun 1979, setiap tenaga paramedis (perawat/bidan) yang ditugaskan melayani kesehatan tenaga kerja di perusahaan wajib memiliki sertifikat pelatihan Hiperkes resmi dari Kemnaker RI.'
      }
    ]
  },

  // 10. Juru Las Welder Certified
  {
    key: 'juru-las-welder-certified',
    hub: 'peran-jabatan',
    path: 'peran-jabatan/juru-las-welder-certified/',
    title: 'Pelatihan & Sertifikasi Juru Las (Welder): Kelas I, II, III Kemnaker RI',
    h1: 'Sertifikasi Juru Las (Welder Certified): Kualifikasi Pengelasan SMAW, GTAW, GMAW, dan Lisensi Resmi Kemnaker RI',
    meta: 'Pelatihan dan sertifikasi juru las resmi Kemnaker RI: klasifikasi Kelas 1 (bejana tekan), Kelas 2 (struktur pipa), Kelas 3 (pelat), uji NDT las (radiografi/bending), dan keselamatan pengelasan.',
    imgAlt: 'Juru las bersertifikasi mengenakan topeng las dan apron kulit tebal melakukan pengelasan posisi 6G pada pipa bejana tekan',
    related: ['welding-safety', 'hot-work-safety', 'inspeksi-bejana-tekan'],
    intro: '<strong>Juru Las Bersertifikat (Certified Welder)</strong> memegang lisensi hukum resmi dari Kementerian Ketenagakerjaan RI berdasarkan <strong>Permenaker No. Per.02/MEN/1982</strong> untuk melaksanakan pekerjaan pengelasan pada bejana tekan, pipa bertekanan tinggi, dan struktur konstruksi baja.',
    hazards: [
      '<strong>Cacat Las Fusi Internal (Slag Inclusion / Porosity):</strong> Kegagalan sambungan las yang memicu ledakan bejana tekan saat hydrotest.',
      '<strong>Sengatan Listrik Sirkuit Pengelasan:</strong> Mengganti elektroda dengan tangan basah pada tegangan open circuit.',
      '<strong>Radiasi UV & Inhalasi Asap Beracun:</strong> Bekerja di ruang sempit tanpa local exhaust ventilation.'
    ],
    regulations: ['<strong>Permenaker No. Per.02/MEN/1982</strong> tentang Kualifikasi Juru Las di Tempat Kerja.', '<strong>Standar ASME Section IX</strong> (Welding Qualifications).'],
    modules: [
      {
        name: 'Modul 1: Metalurgi Pengelasan & Welding Procedure Specification (WPS)',
        theory: 'Pemilihan kawat las (AWS Classification), pre-heating & post-weld heat treatment, interpretasi WPS & PQR.',
        practical: 'Praktik persiapan bevel dan fit-up sambungan pipa baja sesuai WPS.'
      },
      {
        name: 'Modul 2: Praktik Pengelasan Posisi Kritis (1G, 2G, 3G, 4G, 5G, 6G)',
        theory: 'Teknik pengelasan SMAW / GTAW / GMAW, pengendalian root pass, hot pass, filling, dan capping.',
        practical: 'Praktik pengelasan pipa posisi 6G dan uji tak merusak (Visual Inspection & Radiography Test).'
      }
    ],
    equipment: ['Mesin Las Inverter AC/DC Multi-Process.', 'Welding Positioner Rig & Welding Gauge Kit.'],
    participants: ['Juru Las Pabrikasi, Fitter Pipa, Teknisi Fabrikasi Logam, dan Calon Welder Kemnaker.'],
    tableData: {
      headers: ['Klasifikasi Kelas Juru Las Kemnaker', 'Ruang Lingkup Pekerjaan yang Berhak Dikerjakan', 'Posisi Pengujian Standar'],
      rows: [
        ['Juru Las Kelas I', 'Bejana Uap, Bejana Tekan, Pipa Tekanan Tinggi, Seluruh Struktur', 'Posisi 6G (Pipa Miring 45° Fixed)'],
        ['Juru Las Kelas II', 'Pipa Tekanan Sedang, Tangki Timbun, Struktur Rangka Baja Berat', 'Posisi 5G (Pipa Horizontal) / 3G & 4G'],
        ['Juru Las Kelas III', 'Struktur Pelat Baja Biasa, Pagar, Pekerjaan Las Ringan', 'Posisi 1G & 2G (Pelat Datar & Horizontal)']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/welding-safety/', label: 'Pelatihan Welding Safety' },
      { href: '/kategori-pelatihan/hot-work-safety/', label: 'Pelatihan Hot Work Safety' }
    ],
    faqs: [
      {
        q: 'Berapa lama masa berlaku sertifikat dan lisensi Juru Las (Welder) Kemnaker RI?',
        a: 'Sertifikat dan Lisensi Juru Las resmi Kemnaker RI memiliki masa berlaku selama 3 (tiga) tahun dan wajib diperpanjang melalui uji verifikasi kualifikasi berkala.'
      }
    ]
  }
];

console.log(`Loaded ${batch4JobRolesPart2.length} Job Roles for Batch 4.`);
