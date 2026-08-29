export interface DeepProgramData {
  key: string;
  title: string;
  h1: string;
  meta: string;
  imgAlt: string;
  related: string[];
  intro: string;
  hazards: string[];
  regulations: string[];
  modules: { name: string; theory: string; practical: string }[];
  equipment: string[];
  participants: string[];
  tableData?: { headers: string[]; rows: string[][] };
  links: { href: string; label: string }[];
  faqs: { q: string; a: string }[];
}

export const batch1DeepData: DeepProgramData[] = [
  // 1. Confined Space Entry
  {
    key: 'confined-space-entry',
    title: 'Pelatihan Confined Space Entry: Standar Prosedur Masuk & Bekerja Aman',
    h1: 'Pelatihan Confined Space Entry: Standar Prosedur Masuk dan Bekerja Aman di Ruang Terbatas',
    meta: 'Pelatihan confined space entry: identifikasi bahaya atmosfer, sistem izin kerja masuk (PTW), ventilasi mekanik, pengujian gas beracun, dan sertifikasi K3 Kemnaker.',
    imgAlt: 'Pekerja industri mengenakan APD lengkap dan harness bersiap memasuki ruang terbatas dengan pengawasan safety attendant',
    related: ['gas-tester', 'rescue-ruang-terbatas', 'permit-to-work', 'teknisi-k3-ruang-terbatas'],
    intro: 'Bekerja di dalam ruang terbatas (<em>confined space</em>)—seperti tangki penyimpanan minyak, bejana tekan (pressure vessel), silo semen/biji-bijian, gorong-gorong drainase, manhole utilitas kabel, dan terowongan pipa—merupakan salah satu aktivitas operasional dengan tingkat risiko fatalitas tertinggi di industri manufaktur, migas, petrokimia, dan konstruksi di Indonesia. Data investigasi kecelakaan kerja nasional mengungkapkan fakta tragis: <strong>lebih dari 60% korban meninggal dunia di ruang terbatas adalah rekan kerja yang berniat menolong (would-be rescuers)</strong> tanpa menyadari bahwa atmosfer di dalam ruangan telah kehilangan oksigen atau dipenuhi gas beracun mematikan dalam konsentrasi fatal.',
    hazards: [
      '<strong>Defisiensi Oksigen (&lt;19.5%):</strong> Menyebabkan hipoksia, disorientasi mental, hilangnya kemampuan koordinasi gerak dalam 10 detik, dan henti jantung dalam 2–4 menit.',
      '<strong>Kelebihan Oksigen (&gt;23.5%):</strong> Meningkatkan reaktivitas bahan mudah terbakar secara drastis, di mana percikan kecil dapat memicu bola api (flash fire) dahsyat.',
      '<strong>Gas Toksik Akut (H2S, CO, SO2, NH3):</strong> Gas Hidrogen Sulfida (H2S) melumpuhkan indra penciuman pada konsentrasi di atas 100 ppm, membuat korban merasa gas telah hilang padahal konsentrasinya sudah mematikan.',
      '<strong>Bahaya Terperangkap (Engulfment):</strong> Butiran serbuk gandum, semen curah, atau lumpur yang dapat menimbun dan menenggelamkan tubuh pekerja hingga mengalami mati lemas (asfiksia mekanik).',
      '<strong>Bahaya Energi Tersisa:</strong> Putaran impeler agitator, semburan uap steam panas, atau sengatan arus listrik akibat ketiadaan isolasi energi LOTO.'
    ],
    regulations: [
      '<strong>Undang-Undang No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Keputusan Direktur Jenderal Pembinaan Pengawasan Ketenagakerjaan No. Kep. 113/DJPPK/IX/2006</strong> tentang Pedoman Teknis K3 Bekerja di Ruang Terbatas.',
      '<strong>Peraturan Menteri Ketenagakerjaan No. 5 Tahun 2018</strong> tentang Keselamatan dan Kesehatan Kerja Lingkungan Kerja (Nilai Ambang Batas Faktor Kimia dan Fisika).',
      '<strong>Standar Internasional OSHA 29 CFR 1910.146</strong> (Permit-Required Confined Spaces).'
    ],
    modules: [
      {
        name: 'Modul 1: Kerangka Hukum & Identifikasi Ruang Terbatas',
        theory: 'Regulasi Kemnaker, klasifikasi Non-Permit vs Permit-Required Confined Space (PRCS), anatomi kecelakaan nyata di Indonesia.',
        practical: 'Audit visual identifikasi potensi ruang terbatas di fasilitas pabrik/plant.'
      },
      {
        name: 'Modul 2: Toksikologi & Teknik Pengujian Atmosfer Gas',
        theory: 'Prinsip gas testing, stratifikasi berat jenis gas, batas NAB/TLV-TWA, LEL vs UEL, racun sensor detektor.',
        practical: 'Simulasi continuous gas testing 4-gas detector, bump test, dan pencatatan log atmosfer.'
      },
      {
        name: 'Modul 3: Isolasi Energi Berbahaya (LOTO) & Ventilasi',
        theory: 'Metode isolasi mekanis (blinding/spading), isolasi valve, debit ventilasi (Air Changes per Hour), penataan blower.',
        practical: 'Pemasangan Lockout Tagout pada valve/pipa inlet dan perakitan ducting ventilasi anti-turbulensi.'
      },
      {
        name: 'Modul 4: Sistem Izin Masuk (Confined Space Entry Permit)',
        theory: 'Hierarki wewenang (Entry Supervisor, Entrant, Attendant), verifikasi checklist keselamatan pra-masuk.',
        practical: 'Simulasi penyusunan dan pengesahan dokumen Surat Izin Masuk (PTW).'
      },
      {
        name: 'Modul 5: APD Khusus & Prosedur Tanggap Darurat Non-Entry',
        theory: 'Pemilihan full body harness khusus retrieval, SCBA/Airline Respirator, sistem tripod, winch mechanical.',
        practical: 'Drill simulasi evakuasi korban pingsan dari manhole vertikal menggunakan tripod & winch dalam <3 menit.'
      }
    ],
    equipment: [
      'Multi-Gas Detector 4-in-1 (O2, LEL, CO, H2S) portabel dengan pompa hisap dan probe panjang.',
      'Aluminium Rescue Tripod bersertifikasi EN 795 / ANSI Z359 dengan Fall Arrest Recovery Winch.',
      'Self-Contained Breathing Apparatus (SCBA) tekanan positif 300 bar dan Airline Breathing Apparatus.',
      'Exhaust/Blower Fan Explosion-Proof (ATEX Zone 1/2) dengan flexible ducting anti-statis.',
      'Full Body Harness dengan attachment D-Ring dorsal dan shoulder rescue loops.',
      'Lampu penerangan keselamatan ekstra rendah tegangan (Extra Low Voltage / Intrinsically Safe Torch).'
    ],
    participants: [
      'Operator pembersihan dan inspeksi tangki timbun, reaktor, boiler, dan sewage treatment plant (STP).',
      'Teknisi mekanik, instrumen, dan elektrikal yang bertugas melakukan perbaikan di dalam manhole atau saluran kabel.',
      'Safety Officer, Safety Inspector, dan Pengawas Lapangan (Supervisor K3).',
      'Anggota Tim Tanggap Darurat Internal (Emergency Response Team - ERT).'
    ],
    tableData: {
      headers: ['Parameter Gas', 'Batas Aman Masuk', 'Batas Evakuasi Seketika (Abort)', 'Efek Fisiologis / Dampak'],
      rows: [
        ['Oksigen (O2)', '19.5% – 23.5%', '<19.5% atau >23.5%', 'Di bawah 16% memicu hipoksia, hilang kesadaran mendadak'],
        ['Flammable Gas (LEL)', '<5% (Hot Work) / <10% (Cold Work)', '>=10% LEL', 'Risiko ledakan dan kebakaran seketika jika ada sumber panas'],
        ['Hidrogen Sulfida (H2S)', '<1 ppm (NAB Kemnaker)', '>=5 ppm (Ceiling Limit)', 'Melumpuhkan saraf penciuman pada 100 ppm, fatal dalam hitungan menit'],
        ['Karbon Monoksida (CO)', '<25 ppm (NAB Kemnaker)', '>=50 ppm', 'Mengikat hemoglobin darah 200x lebih kuat dari O2, asfiksia internal']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/gas-tester/', label: 'Pelatihan Gas Tester Tersertifikasi' },
      { href: '/kategori-pelatihan/teknisi-k3-ruang-terbatas/', label: 'Pelatihan Teknisi K3 Ruang Terbatas' },
      { href: '/kategori-pelatihan/rescue-ruang-terbatas/', label: 'Pelatihan Penyelamatan di Ruang Terbatas' },
      { href: '/kategori-pelatihan/permit-to-work/', label: 'Pelatihan Sistem Izin Kerja (PTW)' }
    ],
    faqs: [
      {
        q: 'Apa saja kriteria legal sebuah area dikategorikan sebagai Confined Space?',
        a: 'Berdasarkan Kepdirjen Binwasnaker No. Kep. 113/DJPPK/IX/2006, ruang terbatas didefinisikan sebagai ruangan yang: (1) Cukup luas untuk dimasuki tubuh pekerja, (2) Memiliki akses masuk dan keluar terbatas, (3) Tidak dirancang untuk tempat kerja berkelanjutan, dan (4) Memiliki potensi bahaya atmosfer atau bahaya fisik mekanikal yang mengancam nyawa.'
      },
      {
        q: 'Berapa batas aman parameter atmosfer sebelum diizinkan masuk ke ruang terbatas?',
        a: 'Parameter wajib lolos uji gas: (1) Oksigen (O2) berada di rentang 19.5% hingga 23.5%, (2) Gas mudah terbakar/meledak (LEL) berada di bawah 5% untuk pekerjaan panas atau <10% untuk pekerjaan dingin, (3) Gas Hidrogen Sulfida (H2S) di bawah 1 ppm / 5 ppm, dan (4) Karbon Monoksida (CO) di bawah 25 ppm.'
      },
      {
        q: 'Apa tugas mutlak seorang Standby Person (Attendant) di luar manhole?',
        a: 'Petugas jaga (attendant) wajib: (1) Mencatat log nama dan waktu masuk/keluar setiap pekerja, (2) Mempertahankan kontak komunikasi visual/suara tanpa henti, (3) Mengawasi pembacaan gas detector portabel secara terus-menerus, dan (4) Dilarang keras meninggalkan pos jaga atau masuk ke dalam ruangan untuk mencoba menyelamatkan korban sendirian.'
      },
      {
        q: 'Bolehkah tabung gas pengelasan atau genset diletakkan di dalam ruang terbatas?',
        a: 'Dilarang keras. Seluruh mesin pembakaran dalam (genset/kompresor), tabung gas bertekanan (LPG, Asetilen, Oksigen) wajib ditempatkan di luar ruangan pada jarak aman untuk mencegah akumulasi gas bocor atau gas buang beracun di dalam ruang kerja.'
      },
      {
        q: 'Bagaimana cara menentukan kapasitas blower ventilasi mekanis yang cukup?',
        a: 'Ventilasi mekanis wajib mampu melakukan pergantian udara minimal 20 kali pergantian volume ruangan per jam (20 Air Changes per Hour - ACH) sebelum dan selama pekerjaan berlangsung, dengan posisi selang inlet meniupkan udara segar tepat ke zona pernapasan pekerja di dasar ruangan.'
      }
    ]
  },

  // 2. Teknisi K3 Ruang Terbatas
  {
    key: 'teknisi-k3-ruang-terbatas',
    title: 'Pelatihan Teknisi K3 Ruang Terbatas: Sertifikasi & Standar Kompetensi',
    h1: 'Pelatihan Teknisi K3 Ruang Terbatas: Kompetensi Pengawasan & Operasional Bekerja di Ruang Terbatas',
    meta: 'Pelatihan teknisi K3 ruang terbatas: isolasi energi, pengujian atmosfer gas, pengawasan masuk (attendant), dan sertifikasi resmi Kemnaker RI.',
    imgAlt: 'Instruktur K3 menguji kadar atmosfer gas menggunakan multi-gas detector portabel di depan manhole tangki industri',
    related: ['confined-space-entry', 'gas-detector', 'rescue-ruang-terbatas', 'permit-to-work'],
    intro: 'Penetapan personel yang berkualifikasi sebagai <strong>Teknisi K3 Ruang Terbatas (Madya &amp; Utama)</strong> adalah kewajiban hukum mutlak bagi setiap pengelola fasilitas industri yang mengoperasikan bejana bertekanan, tangki penyimpanan kimia, saluran utilitas bawah tanah, dan instalasi proses tertutup sesuai Kepdirjen Binwasnaker No. 113/DJPPK/IX/2006. Pelatihan ini melatih penguasaan teknis isolasi energi, perhitungan ventilasi mekanis, teknik pengujian gas multi-sensor, dan kepemimpinan pengawasan masuk.',
    hazards: [
      '<strong>Kegagalan Pengawasan Attendant:</strong> Petugas jaga meninggalkan pos manhole atau tertidur saat pekerja entrant berada di dalam.',
      '<strong>Racun Sensor Gas:</strong> Mengabaikan bump test sehingga detector gagal mendeteksi gas H2S atau Carbon Monoxide.',
      '<strong>Isolasi Energi Tidak Lengkap:</strong> Tidak memasang blind flange pada pipa fluida bertekanan yang terhubung ke tangki kerja.',
      '<strong>Turbulensi Aliran Udara:</strong> Salah menempatkan posisi saluran ducting blower ventilasi sehingga menciptakan zona mati (dead zone) gas beracun.'
    ],
    regulations: [
      '<strong>Undang-Undang No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Kepdirjen Binwasnaker No. Kep. 113/DJPPK/IX/2006</strong> tentang Pedoman Teknis K3 Bekerja di Ruang Terbatas.',
      '<strong>Permenaker No. 5 Tahun 2018</strong> tentang K3 Lingkungan Kerja.',
      '<strong>SKKNI K3 Ruang Terbatas</strong> Kategori Jasa Profesional, Ilmiah dan Teknis.'
    ],
    modules: [
      {
        name: 'Modul 1: Regulasi & Peran Teknisi Madya/Utama',
        theory: 'Perbedaan wewenang teknisi madya vs utama, liabilitas hukum kecelakaan, audit dokumen izin masuk.',
        practical: 'Studi kasus evaluasi kegagalan pengawasan di industri petrokimia.'
      },
      {
        name: 'Modul 2: Instrumentasi Gas & Pengukuran Berlapis',
        theory: 'Prinsip kerja sensor LEL, O2, elektrokimia, Photoionization Detector (PID), dan batas paparan NAB.',
        practical: 'Kalibrasi lapangan (fresh air & span gas calibration) serta stratified gas testing.'
      },
      {
        name: 'Modul 3: Rekayasa Ventilasi & Isolasi Mekanikal',
        theory: 'Kalkulasi volume debit udara (CFM), positive pressure vs negative pressure ventilation, sistem blind flange.',
        practical: 'Perakitan blower fan explosion-proof dan uji aliran asap udara (smoke tube test).'
      },
      {
        name: 'Modul 4: Manajemen Log Attendant & Komunikasi',
        theory: 'Pencatatan logsheet entrant, kode sinyal darurat tali, komunikasi radio frekuensi intrinsik.',
        practical: 'Simulasi pengawasan jaga 2 jam penuh dengan skenario penurunan kadar O2 bertahap.'
      },
      {
        name: 'Modul 5: Prosedur Darurat & Non-Entry Rescue',
        theory: 'Penggunaan tripod, mechanical winch, breathing apparatus, dan aktivasi tim ERT.',
        practical: 'Praktik penarikan korban manikin tanpa masuk ke dalam ruangan dalam waktu <2 menit.'
      }
    ],
    equipment: [
      'Multi-Gas Detector 4-gas & Photoionization Detector (PID) VOC.',
      'Tabung Span Gas Kalibrasi dengan regulator fixed-flow.',
      'Blower Fan ATEX Zone 1 dengan flexible antistatic ducting 10 meter.',
      'Tripod rescue aluminium kapasitas 500 kg dengan auto-locking recovery winch.',
      'Lockout Tagout kit lengkap untuk valve gate, ball valve, dan circuit breaker.',
      'Peralatan SCBA 300 Bar dan Airline System dengan escape cylinder.'
    ],
    participants: [
      'Teknisi mekanik, maintenance, dan electrical pabrik manufaktur/pembangkit listrik.',
      'Operator pengawas fasilitas tangki timbun (tank farm) dan instalasi pipa migas.',
      'Safety Attendant, Safety Officer, dan Inspector K3.',
      'Petugas K3 kontraktor EPC yang menangani turnaround & shutdown plant.'
    ],
    tableData: {
      headers: ['Kategori Kualifikasi', 'Tanggung Jawab Utama', 'Wewenang Otorisasi', 'Persyaratan Minimum'],
      rows: [
        ['Teknisi K3 Madya', 'Pengujian gas harian, pengawasan attendant di pintu manhole, perakitan ventilasi', 'Mengisi logbook attendant, membunyikan alarm evakuasi', 'Pendidikan min. SLTA / SMK Teknik + Pelatihan K3'],
        ['Teknisi K3 Utama', 'Evaluasi JSA, verifikasi isolasi energi LOTO, supervisi teknisi madya', 'Menandatangani izin masuk (Entry Supervisor Permit)', 'Pendidikan min. D3 / S1 + Pengalaman Lapangan 2 Tahun']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/confined-space-entry/', label: 'Pelatihan Confined Space Entry' },
      { href: '/kategori-pelatihan/gas-detector/', label: 'Pelatihan Kalibrasi Gas Detector' },
      { href: '/kategori-pelatihan/permit-to-work/', label: 'Pelatihan Izin Kerja Aman (PTW)' },
      { href: '/kategori-pelatihan/gas-tester/', label: 'Pelatihan Authorized Gas Tester' }
    ],
    faqs: [
      {
        q: 'Apa perbedaan tugas Teknisi K3 Ruang Terbatas Madya dan Utama?',
        a: 'Teknisi Madya bertugas sebagai pelaksana teknis pengujian gas, persiapan ventilasi, dan petugas jaga (attendant) di luar pintu masuk. Sedangkan Teknisi Utama bertugas sebagai Entry Supervisor yang berwenang mengevaluasi dokumen JSA, mengotorisasi izin masuk, dan memimpin rencana tanggap darurat.'
      },
      {
        q: 'Berapa lama masa berlaku sertifikat Teknisi K3 Ruang Terbatas Kemnaker?',
        a: 'Sertifikat dan Surat Izin Kerja (SIK) resmi dari Kemnaker RI berlaku selama 3 tahun dan dapat diperpanjang melalui evaluasi portofolio kerja K3 dan pemeriksaan kesehatan kerja.'
      },
      {
        q: 'Apakah seorang Attendant boleh merangkap sebagai Entrant yang masuk ke dalam tangki?',
        a: 'Dilarang keras. Attendant dilarang meninggalkan pos atau masuk ke dalam ruangan dengan alasan apa pun saat ada pekerja di dalam tangki.'
      }
    ]
  },

  // 3. Rescue Ruang Terbatas
  {
    key: 'rescue-ruang-terbatas',
    title: 'Pelatihan Rescue Ruang Terbatas: Protokol Evakuasi Korban Cepat',
    h1: 'Pelatihan Rescue Ruang Terbatas: Protokol Evakuasi Korban dan Tanggap Darurat di Ruang Sempit',
    meta: 'Pelatihan penyelamatan ruang terbatas: penggunaan tripod rescue, mechanical winch, SCBA darurat, evakuasi vertical/horizontal, dan pertolongan pertama henti napas.',
    imgAlt: 'Tim rescue K3 melakukan simulasi pengangkatan korban dari lubang manhole menggunakan sistem tripod dan pulley haulage',
    related: ['confined-space-entry', 'gas-tester', 'teknisi-k3-ruang-terbatas', 'permit-to-work'],
    intro: 'Ketika seorang pekerja kehilangan kesadaran di dalam ruang terbatas akibat paparan gas H2S, uap pelarut, atau defisiensi oksigen murni, tim penolong hanya memiliki waktu emas <strong>kurang dari 4 menit</strong> sebelum korban mengalami kematian otak permanen. Pelatihan ini melatih kecepatan reaksi, koordinasi tim tanggap darurat, dan eksekusi penyelamatan tanpa korban tambahan.',
    hazards: [
      '<strong>Panic Rescue / Rescuer Fatality:</strong> Lebih dari separuh kematian penyelamat terjadi karena melompat masuk tanpa alat bantu pernapasan.',
      '<strong>Trauma Leher & Tulang Belakang:</strong> Cedera sekunder akibat menarik korban secara kasar melalui lubang manhole yang sempit.',
      '<strong>Tali Pengangkat Putus / Tersangkut:</strong> Pemilihan rigging hardware yang tidak memenuhi standar rating penahan beban dinamis.',
      '<strong>Kekurangan Suplai Oksigen Tim Rescue:</strong> Menghabiskan udara tabung SCBA di dalam ruangan tanpa menghitung waktu kembali (point of no return).'
    ],
    regulations: [
      '<strong>Undang-Undang No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Kepdirjen Binwasnaker No. 113/DJPPK/IX/2006</strong> (Bagian Rencana Tanggap Darurat Ruang Terbatas).',
      '<strong>Standar NFPA 1670</strong> (Standard on Operations and Training for Technical Search and Rescue Incidents).',
      '<strong>Standar OSHA 1910.146(k)</strong> (Rescue and Emergency Services).'
    ],
    modules: [
      {
        name: 'Modul 1: Anatomi Krisis & Manajemen Waktu Evakuasi',
        theory: 'Fisiologi asfiksia, batas waktu 4 menit hipoksia otak, prinsip "No Rescue without Self-Protection".',
        practical: 'Analisis insiden fatalitas ruang terbatas dan pemetaan zona bahaya.'
      },
      {
        name: 'Modul 2: Peralatan Penyelamatan & Proteksi Pernapasan',
        theory: 'Prinsip kerja SCBA 300 Bar, Emergency Escape Breathing Apparatus (EEBA), tripod davit arm.',
        practical: 'Donning SCBA cepat (<45 detik) dan uji tekanan masker kedap udara.'
      },
      {
        name: 'Modul 3: Non-Entry Retrieval System & Mechanical Advantage',
        theory: 'Sistem katrol pengurang beban 3:1 dan 4:1, fall arrest recovery block, penjangkaran tripod.',
        practical: 'Perakitan sistem penarik cepat di atas manhole vertikal dan tangki horizontal.'
      },
      {
        name: 'Modul 4: Teknik Entry Rescue & Manuver Korban di Area Sempit',
        theory: 'Penggunaan Sked Stretcher, Half-Back Extrication Device, teknik lifting manik-manik tali.',
        practical: 'Simulasi evakuasi korban melewati lubang manhole diameter 50 cm dengan tandu Sked.'
      },
      {
        name: 'Modul 5: Stabilisasi Medis & Resusitasi Jantung Paru (CPR)',
        theory: 'Pertolongan pertama keracunan gas H2S/CO, oksigenoterapi darurat, teknik CPR.',
        practical: 'Simulasi CPR dan penggunaan Bag-Valve-Mask (BVM) pada manikin di pos luar.'
      }
    ],
    equipment: [
      'Aluminium Rescue Tripod bersertifikat EN 795 Class B dengan Rescue Winch 25 meter.',
      'Sked Basic Rescue System (Tandu Sked fleksibel khusus manhole sempit).',
      'SCBA Tekanan Positif 6.8 Liter 300 Bar (Composite Cylinder) lengkap dengan buddy breather.',
      'Emergency Escape Breathing Apparatus (EEBA) 15 menit suplai konstan.',
      'Full Body Rescue Harness dengan D-Ring sternal, dorsal, dan rescue shoulder loops.',
      'Gas detector multi-gas dengan sampling pump continuous monitor.'
    ],
    participants: [
      'Anggota Tim Tanggap Darurat Perusahaan (Emergency Response Team / Fire Brigade).',
      'Petugas K3 dan Safety Attendant Ruang Terbatas.',
      'Teknisi Maintenance Kilang, Petrokimia, dan Manufaktur Berat.'
    ],
    tableData: {
      headers: ['Metode Penyelamatan', 'Risiko Personel Penolong', 'Waktu Eksekusi Rata-rata', 'Kondisi Prasyarat'],
      rows: [
        ['Non-Entry Retrieval', 'Sangat Rendah (0% paparan gas)', '< 90 detik', 'Korban terhubung lifeline & tripod sebelum masuk'],
        ['Entry Rescue - Vertical', 'Sedang - Tinggi (Wajib SCBA)', '3 – 6 menit', 'Lubang masuk bebas rintangan, tim rescue 2 personel'],
        ['Entry Rescue - Confined Maze', 'Tinggi (Navigasi rumit)', '8 – 15 menit', 'Wajib backup breathing line & komunikasi radio']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/confined-space-entry/', label: 'Pelatihan Confined Space Entry' },
      { href: '/kategori-pelatihan/gas-tester/', label: 'Pelatihan Gas Tester' },
      { href: '/kategori-pelatihan/teknisi-k3-ruang-terbatas/', label: 'Pelatihan Teknisi K3 Ruang Terbatas' }
    ],
    faqs: [
      {
        q: 'Kapan teknik Non-Entry Rescue harus diprioritaskan?',
        a: 'Non-entry rescue wajib selalu menjadi pilihan pertama jika korban mengenakan full body harness yang terhubung ke tali penyelamat (retrieval line) dan jalur keluar tidak terhalang rintangan struktural.'
      },
      {
        q: 'Berapa banyak cadangan udara SCBA yang harus disisakan saat melakukan entry rescue?',
        a: 'Tim rescue wajib mematuhi aturan Rule of Thirds: 1/3 udara untuk masuk dan menjangkau korban, 1/3 udara untuk mengevakuasi korban keluar, dan 1/3 udara sebagai cadangan darurat mutlak.'
      }
    ]
  },

  // 4. Gas Tester
  {
    key: 'gas-tester',
    title: 'Pelatihan Gas Tester: Pengujian Atmosfer Berbahaya Tempat Kerja',
    h1: 'Pelatihan Gas Tester: Prosedur Pengujian dan Pengukuran Gas Berbahaya di Ruang Terbatas',
    meta: 'Pelatihan authorized gas tester: teknik pengujian gas beracun, mudah terbakar (LEL), kadar O2, stratifikasi gas, dan validasi izin kerja panas/ruang terbatas.',
    imgAlt: 'Teknisi gas tester melakukan penarikan sampel udara menggunakan selang probe dan gas detector portabel',
    related: ['gas-detector', 'confined-space-entry', 'permit-to-work', 'hot-work-safety'],
    intro: 'Peran <strong>Authorized Gas Tester (AGT)</strong> adalah garda terdepan dalam mencegah bencana ledakan pabrik, kebakaran kilang, dan keracunan massal pekerja di ruang terbatas dan area pekerjaan panas. Sertifikasi ini memastikan setiap pengukuran atmosfer didasarkan pada metodologi ilmiah yang akurat.',
    hazards: [
      '<strong>Stratifikasi Gas Terabaikan:</strong> Gas berat seperti H2S mengendap di dasar tangki, sementara pengujian hanya dilakukan di dekat pintu manhole atas.',
      '<strong>Kekurangan Oksigen Mengacaukan Sensor LEL:</strong> Sensor catalytic bead membutuhkan minimal 10-15% O2 untuk dapat membakar gas sampel secara akurat.',
      '<strong>Respon Lambat Selang Sampling:</strong> Mengambil pembacaan terlalu cepat tanpa menghitung waktu tempuh gas di sepanjang selang probe (wajib 2-3 detik per meter selang).'
    ],
    regulations: [
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Permenaker No. 5 Tahun 2018</strong> tentang K3 Lingkungan Kerja (Tabel NAB Kimia).',
      '<strong>Kepdirjen 113/2006</strong> tentang Pedoman K3 Ruang Terbatas.',
      '<strong>Standar Industri Migas & Petrokimia</strong> untuk Authorized Gas Tester.'
    ],
    modules: [
      {
        name: 'Modul 1: Sifat Fisika & Toksikologi Gas Industri',
        theory: 'Densitas uap (vapor density), LEL vs UEL, titik nyala (flash point), efek akut & kronis gas toksik.',
        practical: 'Perhitungan berat jenis gas relatif terhadap udara (densitas udara = 1.0).'
      },
      {
        name: 'Modul 2: Teknologi Sensor Deteksi Gas',
        theory: 'Prinsip sensor elektrokimia, catalytic pellistor, infrared, dan Photoionization Detector (PID).',
        practical: 'Identifikasi racun sensor (silikon, timbal, asam) dan prosedur pembersihan filter probe.'
      },
      {
        name: 'Modul 3: Metodologi Pengambilan Sampel Berlapis',
        theory: 'Hierarki uji: Oksigen -> Gas Mudah Terbakar -> Gas Beracun. Waktu jeda sampling probe.',
        practical: 'Praktik sampling atmosfer di 3 level kedalaman tangki (atas, tengah, bawah).'
      },
      {
        name: 'Modul 4: Bump Testing & Kalibrasi Lapangan',
        theory: 'Perbedaan bump test harian vs full calibration, sertifikat gas standar, audit trail.',
        practical: 'Pelaksanaan bump test dengan tabung quad-gas dan verifikasi alarm audio-visual.'
      },
      {
        name: 'Modul 5: Otorisasi Sertifikat Uji Gas & Integrasi PTW',
        theory: 'Penerbitan Gas Testing Certificate, batas waktu validitas izin (maks 30 menit sebelum kerja).',
        practical: 'Simulasi pengisian lembar kerja AGT dan persetujuan Surat Izin Kerja Panas/Masuk.'
      }
    ],
    equipment: [
      'Multi-Gas Detector 4-in-1 & 5-in-1 dengan internal suction pump.',
      'Telescopic Sampling Probe 3 meter dengan water/dust trap filter.',
      'Tabung Kalibrasi Campuran Gas Standar (CH4/Pentane, CO, H2S, O2 in N2 balance).',
      'Photoionization Detector (PID) untuk deteksi Benzene dan senyawa VOC.'
    ],
    participants: [
      'Personel K3, Safety Inspector, dan Environmental Officer.',
      'Teknisi Operasi Pabrik Kimia, Kilang Minyak, Pembangkit Listrik, dan Manufaktur.',
      'Petugas Izin Kerja (Permit Authority) dan Pengawas Ruang Terbatas.'
    ],
    tableData: {
      headers: ['Senyawa Gas', 'Densitas Uap (Udara = 1.0)', 'Posisi Akumulasi', 'Nilai Ambang Batas (NAB)'],
      rows: [
        ['Methane (CH4)', '0.55 (Lebih ringan)', 'Langit-langit / Atap ruangan', 'LEL 5.0% Vol'],
        ['Carbon Monoxide (CO)', '0.97 (Hampir setara)', 'Zona tengah pernapasan pekerja', '25 ppm (TWA 8 Jam)'],
        ['Hydrogen Sulfide (H2S)', '1.19 (Lebih berat)', 'Dasar lantai / Saluran lumpur', '1.0 ppm (TWA) / 5 ppm (STEL)'],
        ['Gasoline / Pelarut VOC', '3.00 – 4.00 (Sangat berat)', 'Mengendap di lekukan lantai dasar', '20 – 50 ppm']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/gas-detector/', label: 'Pelatihan Kalibrasi Gas Detector' },
      { href: '/kategori-pelatihan/confined-space-entry/', label: 'Pelatihan Confined Space Entry' },
      { href: '/kategori-pelatihan/permit-to-work/', label: 'Pelatihan Permit to Work' },
      { href: '/kategori-pelatihan/hot-work-safety/', label: 'Pelatihan Hot Work Safety' }
    ],
    faqs: [
      {
        q: 'Mengapa pengujian gas oksigen harus selalu dilakukan pertama kali?',
        a: 'Karena sensor gas mudah terbakar (tipe catalytic bead) memerlukan keberadaan molekul oksigen untuk mendeteksi potensi ledakan. Jika kadar oksigen di bawah 10%, pembacaan sensor LEL akan menunjukkan angka 0% palsu padahal ruangan dipenuhi gas hidrokarbon pekat.'
      },
      {
        q: 'Berapa lama interval waktu pengujian gas yang valid sebelum pekerjaan dimulai?',
        a: 'Hasil pengujian gas hanya berlaku maksimal 30 menit sebelum pekerjaan dimulai. Jika terdapat jeda lebih dari 30 menit atau pergantian shift, pengujian gas wajib diulang dari awal.'
      }
    ]
  },

  // 5. Gas Detector
  {
    key: 'gas-detector',
    title: 'Pelatihan Pengoperasian & Kalibrasi Gas Detector Multi-Gas',
    h1: 'Pelatihan Pengoperasian, Perawatan, dan Kalibrasi Gas Detector Multi-Gas',
    meta: 'Pelatihan teknis gas detector portabel: prosedur bump test harian, span calibration, penggantian sensor elektrokimia, dan penanganan alarm darurat di lapangan.',
    imgAlt: 'Instruktur menunjukkan tabung gas kalibrasi dan regulator saat menguji fungsi sensor gas detector',
    related: ['gas-tester', 'confined-space-entry', 'permit-to-work', 'hot-work-safety'],
    intro: 'Gas detector portabel adalah instrumen keselamatan penyelamat nyawa, namun instrumen ini menjadi bumerang berbahaya jika sensornya mengalami racun sensor (sensor poisoning), penurunan sensitivitas, atau penyimpangan nol (zero drift) yang tidak terdeteksi. Pelatihan ini melatih teknisi dan pengawas K3 dalam merawat dan mengkalibrasi instrumen deteksi gas sesuai standar pabrikan global.',
    hazards: [
      '<strong>Sensor Poisoning:</strong> Paparan uap silikon, timbal, atau belerang menonaktifkan elemen katalitik sensor LEL.',
      '<strong>Baterai Drop di Tengah Operasi:</strong> Kegagalan menguji daya tahan baterai litium sebelum memasuki ruangan berbahaya.',
      '<strong>Penyumbatan Filter Probe:</strong> Debu atau kelembaban menyumbat membran hydrophobic filter sehingga gas sampel tidak mencapai sensor.'
    ],
    regulations: [
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Permenaker No. 5 Tahun 2018</strong> tentang K3 Lingkungan Kerja.',
      '<strong>Standar ISA-60079-29-2</strong> (Gas Detectors - Selection, Installation, Use and Maintenance).'
    ],
    modules: [
      {
        name: 'Modul 1: Anatomi & Prinsip Fisika Sensor',
        theory: 'Struktur sensor Catalytic Pellistor, Electrochemical Cell, NDIR (Infrared), dan PID.',
        practical: 'Bongkar pasang modul sensor dan penggantian filter hydrophobic.'
      },
      {
        name: 'Modul 2: Prosedur Fresh Air Zero & Bump Test Harian',
        theory: 'Perbedaan zeroing di udara bersih vs udara terkontaminasi, kriteria toleransi respon alarm (+/- 10%).',
        practical: 'Praktik bump test harian menggunakan docking station dan regulator manual.'
      },
      {
        name: 'Modul 3: Kalibrasi Penuh (Span Calibration)',
        theory: 'Kalkulasi konsentrasi span gas, laju alir regulator (0.5 L/min), pencatatan audit log.',
        practical: 'Prosedur span calibration 4-gas campuran standar dan penerbitan label kalibrasi internal.'
      },
      {
        name: 'Modul 4: Interpretasi Alarm & Penanganan Error Alat',
        theory: 'Arti alarm TWA, STEL, Low Alarm, High Alarm, sensor error, dan over-range protection.',
        practical: 'Simulasi tanggap darurat saat detector membunyikan alarm high di lapangan.'
      }
    ],
    equipment: [
      'Multi-Gas Detector berbagai merk terkemuka industri (Honeywell, MSA, Industrial Scientific, Dräger).',
      'Tabung Gas Kalibrasi Bersertifikat NIST Traceable dengan Demand Flow Regulator.',
      'Automated Docking / Test Station.',
      'Sampling kit probe fleksibel dan float probe untuk cairan.'
    ],
    participants: [
      'Teknisi Instrumen & Elektrikal Pabrik.',
      'Safety Officer, Inspector K3, dan Authorized Gas Tester.',
      'Petugas Gudang & Maintenance Alat Keselamatan Kerja.'
    ],
    tableData: {
      headers: ['Jenis Pengujian', 'Frekuensi Pelaksanaan', 'Tujuan Pengujian', 'Kriteria Kelulusan'],
      rows: [
        ['Fresh Air Zero', 'Setiap kali alat dinyalakan di udara bersih', 'Menyetel titik 0 ppm gas toksik & 20.9% O2', 'O2 = 20.9%, LEL/CO/H2S = 0'],
        ['Bump Test (Uji Respon)', 'Setiap hari sebelum alat digunakan ke lapangan', 'Memastikan sensor merespons dan alarm berbunyi', 'Sensor membaca dalam toleransi ±10-20% target gas'],
        ['Span Calibration', 'Setiap 1 – 6 bulan atau jika gagal bump test', 'Menyesuaikan akurasi pengukuran elektronik alat', 'Penyimpangan nol dan lolos kalibrasi span']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/gas-tester/', label: 'Pelatihan Gas Tester' },
      { href: '/kategori-pelatihan/confined-space-entry/', label: 'Pelatihan Ruang Terbatas' },
      { href: '/kategori-pelatihan/permit-to-work/', label: 'Pelatihan Permit to Work' }
    ],
    faqs: [
      {
        q: 'Apa perbedaan mendasar antara Bump Test dan Full Calibration?',
        a: 'Bump test (uji respon) adalah paparan singkat gas target konsentrasi tertentu untuk memverifikasi bahwa sensor merespons dan alarm berbunyi normal sebelum alat digunakan setiap hari. Sedangkan Full Calibration adalah penyesuaian parameter elektronik alat menggunakan gas standar bersertifikat secara berkala.'
      },
      {
        q: 'Mengapa dilarang melakukan Fresh Air Zeroing di dalam area kerja atau dekat kendaraan bermotor?',
        a: 'Karena jika udara sekitar mengandung gas buang (misal CO dari knalpot) atau uap hidrokarbon saat dilakukan zeroing, detector akan menganggap konsentrasi tersebut sebagai titik nol, sehingga saat masuk ke area kerja alat tidak akan membunyikan alarm bahaya.'
      }
    ]
  },

  // 6. Working at Height
  {
    key: 'working-at-height',
    title: 'Pelatihan Working at Height: Standar Keselamatan Bekerja di Ketinggian',
    h1: 'Pelatihan Working at Height: Pencegahan Jatuh dan Prosedur Bekerja Aman di Ketinggian',
    meta: 'Pelatihan working at height (TKPK/TKBT): sistem pencegah jatuh, inspeksi full body harness, shock absorber, anchor point 5000 lbs, dan regulasi Permenaker No. 9/2016.',
    imgAlt: 'Pekerja konstruksi memakai full body harness ganda dan lanyard terpasang aman pada lifeline horizontal',
    related: ['bekerja-di-ketinggian', 'fall-protection', 'rope-access-dasar', 'operator-scaffolding'],
    intro: 'Jatuh dari ketinggian (<em>fall from height</em>) secara konsisten menempati peringkat pertama penyebab kematian fatalitas tertinggi di industri konstruksi, pemeliharaan fasilitas, dan pabrik manufaktur di Indonesia. Hampir seluruh kecelakaan fatal terjadi bukan karena ketiadaan APD, melainkan karena ketidakpahaman pekerja dalam memilih titik jangkar (anchor point), salah menghitung jarak jatuh aman (clearance distance), atau menggunakan harness yang tidak layak pakai.',
    hazards: [
      '<strong>Pemilihan Anchor Point Tidak Layak:</strong> Mengaitkan hook lanyard pada pipa conduit listrik, pipa PVC, atau kabel tray yang tidak kuat menahan gaya jatuh.',
      '<strong>Kekeliruan Perhitungan Clearance Distance:</strong> Tubuh pekerja membentur lantai atau struktur di bawahnya sebelum shock absorber mengembang sempurna.',
      '<strong>Benda Jatuh Menimpa Orang Lain (Dropped Objects):</strong> Peralatan tangan atau material jatuh dari ketinggian akibat ketiadaan lanyard perkakas (tool tethering).',
      '<strong>Trauma Gantung (Suspension Trauma):</strong> Pekerja tergantung diam di harness lebih dari 10 menit setelah jatuh, memicu henti jantung mendadak.'
    ],
    regulations: [
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Permenaker No. 9 Tahun 2016</strong> tentang Keselamatan dan Kesehatan Kerja dalam Bekerja pada Ketinggian.',
      '<strong>Standar ANSI/ASSP Z359</strong> (Fall Protection Code).',
      '<strong>Standar EN 361, EN 355, EN 362</strong> (European Personal Protective Equipment against Falls).'
    ],
    modules: [
      {
        name: 'Modul 1: Kerangka Hukum & Hierarki Pengendalian Bahaya Ketinggian',
        theory: 'Permenaker 9/2016, hierarki pencegahan jatuh: Eliminasi -> Pasif -> Work Restraint -> Fall Arrest.',
        practical: 'Penyusunan Job Safety Analysis (JSA) dan izin kerja ketinggian.'
      },
      {
        name: 'Modul 2: Inspeksi & Pemasangan Full Body Harness',
        theory: 'Anatomi harness, posisi D-ring dorsal, kriteria penolakan (webbing putus/terbakar, D-ring retak).',
        practical: 'Praktik pemakaian harness mandiri (fit test 2 jari) dan pemeriksaan silang (buddy check).'
      },
      {
        name: 'Modul 3: Perhitungan Total Fall Clearance Distance (TFCD)',
        theory: 'Rumus TFCD: Panjang Lanyard (1.8m) + Deceleration (1.2m) + Tinggi Badan (1.8m) + Safety Margin (1.0m).',
        practical: 'Kalkulasi jarak aman jatuh pada berbagai ketinggian balok kerja.'
      },
      {
        name: 'Modul 4: Pemasangan Temporary Lifeline & Anchor Device',
        theory: 'Kekuatan anchor point 5.000 lbs (22.2 kN), beam clamp, anchor strap, horizontal lifeline webbing.',
        practical: 'Pemasangan lifeline horizontal dan vertical rope grab pada tangga monyet.'
      },
      {
        name: 'Modul 5: Protokol Tanggap Darurat & Pencegahan Suspension Trauma',
        theory: 'Patofisiologi trauma gantung, penggunaan suspension relief strap, teknik pick-off rescue dasar.',
        practical: 'Drill simulasi pengerahan trauma strap saat menggantung dan evakuasi korban ke lantai kerja.'
      }
    ],
    equipment: [
      'Full Body Harness ANSI Z359 / EN 361 dengan dorsal D-Ring dan integrated trauma straps.',
      'Double Lanyard with Energy Absorber dan Scaffold Hook baja bukaan 60 mm.',
      'Self-Retracting Lifeline (SRL) 10 meter kabel baja.',
      'Beam Clamp Anchor 5.000 lbs dan Webbing Anchor Sling 2 ton.',
      'Horizontal Lifeline Kit sementara dengan tensioner manual.'
    ],
    participants: [
      'Pekerja konstruksi baja, atap bangunan, cladding, dan instalasi tower BTS.',
      'Teknisi pemeliharaan gedung, pembersih kaca bertingkat, dan maintenance pabrik.',
      'Safety Officer, Supervisor Lapangan, dan Pengawas Ketinggian.'
    ],
    tableData: {
      headers: ['Sistem Proteksi', 'Tujuan Sistem', 'Beban Maksimum pada Tubuh', 'Contoh Peralatan'],
      rows: [
        ['Work Restraint', 'Mencegah pekerja secara fisik mencapai tepi bahaya jatuh', '0 kN (Tidak ada kejadian jatuh)', 'Lanyard pendek tetap (1.0m) terhubung anchor'],
        ['Work Positioning', 'Menopang pekerja di posisi kerja dengan kedua tangan bebas', '< 2 kN (Hanya beban berat tubuh)', 'Work positioning belt dengan side D-rings & pole strap'],
        ['Fall Arrest', 'Menangkap dan menahan tubuh pekerja saat jatuh bebas terjadi', '< 6 kN (Diredam shock absorber)', 'Full body harness + Energy absorbing double lanyard / SRL']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/fall-protection/', label: 'Pelatihan Fall Protection' },
      { href: '/kategori-pelatihan/bekerja-di-ketinggian/', label: 'Pelatihan Bekerja di Ketinggian (TKBT)' },
      { href: '/kategori-pelatihan/rescue-di-ketinggian/', label: 'Pelatihan Rescue Ketinggian' },
      { href: '/kategori-pelatihan/operator-scaffolding/', label: 'Pelatihan Operator Scaffolding' }
    ],
    faqs: [
      {
        q: 'Berapa batas ketinggian yang wajib menerapkan prosedur Working at Height di Indonesia?',
        a: 'Berdasarkan Permenaker No. 9 Tahun 2016, bekerja pada ketinggian adalah seluruh aktivitas kerja yang memiliki potensi jatuh dari perbedaan ketinggian yang dapat menyebabkan cedera atau kematian (secara praktis diterapkan sejak ketinggian 1.8 meter ke atas).'
      },
      {
        q: 'Kapan lanyard dengan shock absorber (energy absorber) wajib digunakan?',
        a: 'Shock absorber wajib digunakan pada seluruh sistem penahan jatuh (fall arrest system) di mana ada kemungkinan terjadi jatuh bebas, guna meredam gaya kejut pada tubuh pekerja hingga di bawah batas aman 6 kN (standar ANSI/EN).'
      },
      {
        q: 'Mengapa sabuk pengaman pinggang (body belt) dilarang keras untuk penahan jatuh?',
        a: 'Sabuk pinggang tunggal dilarang keras untuk fall arrest karena saat jatuh bebas, seluruh gaya kejut terkonsentrasi di perut dan tulang belakang, yang dapat mematahkan tulang punggung atau menyebabkan korban tergelincir jatuh terbalik.'
      }
    ]
  },

  // 7. Bekerja di Ketinggian (TKBT & TKPK)
  {
    key: 'bekerja-di-ketinggian',
    title: 'Pelatihan Bekerja di Ketinggian: Sertifikasi TKBT & TKPK Kemnaker',
    h1: 'Pelatihan Bekerja di Ketinggian (TKBT & TKPK): Kepatuhan Regulasi Permenaker No. 9/2016',
    meta: 'Pelatihan sertifikasi K3 bekerja di ketinggian: Tenaga Kerja Bangunan Tinggi (TKBT) tingkat 1 & 2, Tenaga Kerja Pada Ketinggian (TKPK), sistem perancah, dan izin kerja.',
    imgAlt: 'Teknisi bangunan tinggi melakukan pekerjaan inspeksi struktur rangka baja dengan tali pengaman ganda',
    related: ['working-at-height', 'rescue-di-ketinggian', 'fall-protection', 'operator-scaffolding'],
    intro: 'Kepatuhan terhadap <strong>Permenaker No. 9 Tahun 2016 tentang K3 Bekerja pada Ketinggian</strong> kini menjadi syarat mutlak dalam tender proyek EPC, konstruksi gedung bertingkat, pembangkit listrik, dan industri manufaktur di seluruh Indonesia. Pelatihan ini melatih kompetensi tenaga kerja bangunan tinggi dalam menerapkan sistem proteksi jatuh komprehensif.',
    hazards: [
      '<strong>Bekerja Tanpa 100% Tie-Off:</strong> Melepas kedua hook lanyard secara bersamaan saat berpindah rintangan struktur.',
      '<strong>Platform Kerja Tanpa Guardrail:</strong> Berdiri di atas balok baja sempit tanpa pembatas fisik atau jaring pengaman.',
      '<strong>Bahaya Drop Objects:</strong> Baut, palu, atau gerinda tangan terjatuh dan mengenai pekerja di lantai bawah.',
      '<strong>Struktur Jangkar Keropos:</strong> Menambatkan angkur pada profil baja yang berkarat atau beton yang belum mencapai kekuatan matang.'
    ],
    regulations: [
      '<strong>Permenaker No. 9 Tahun 2016</strong> tentang K3 dalam Bekerja pada Ketinggian.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>SKKNI Sektor Ketenagakerjaan</strong> Bidang Bekerja pada Ketinggian.'
    ],
    modules: [
      {
        name: 'Modul 1: Peraturan Perundangan K3 Ketinggian',
        theory: 'Kewajiban pengusaha, klasifikasi TKBT Tingkat 1 & 2 vs TKPK Tingkat 1, 2, 3, wewenang pengawas.',
        practical: 'Audit dokumen Rencana Kerja Ketinggian (Working at Height Plan).'
      },
      {
        name: 'Modul 2: Karakteristik Angkur & Jalur Keselamatan (Lifeline)',
        theory: 'Kekuatan statis angkur 22 kN, single anchor vs multi anchor, tali kernmantle statis vs dinamis.',
        practical: 'Pemasangan webbing sling anchor dan horizontal lifeline baja.'
      },
      {
        name: 'Modul 3: Teknik Manuver 100% Tie-Off & Tangga Kerja',
        theory: 'Prinsip 3 titik tumpu pada tangga monyet, vertical rope grab arrester, manuver lanyard Y-twin.',
        practical: 'Simulasi memanjat struktur tower kisi-kisi setinggi 10 meter dengan disiplin 100% tie-off.'
      },
      {
        name: 'Modul 4: Drop Object Prevention System (DROPS)',
        theory: 'Piramida bahaya benda jatuh, kalkulasi energi benturan baut M16 jatuh dari 20 meter, tool pouch.',
        practical: 'Pemasangan tool tether lanyard pada perkakas kunci pas, tang, dan power tools.'
      },
      {
        name: 'Modul 5: Rencana Tanggap Darurat Ketinggian Mandiri',
        theory: 'Alur komunikasi darurat, peralatan controlled descent device, stabilisasi korban gantung.',
        practical: 'Drill penyelamatan mandiri (self-evacuation) menggunakan perangkat penurun otomatis.'
      }
    ],
    equipment: [
      'Full Body Harness dengan 5 titik attachment (Dorsal, Sternal, Ventral, Lateral).',
      'Double Webbing Lanyard dengan Large Scaffold Hook & Shock Absorber.',
      'Vertical Fall Arrester (Rope Grab) untuk tali kernmantle 11-12 mm.',
      'Tool Tethering Kit (Lanyard elastis perkakas dengan karabiner mini screw-lock).',
      'Automatic Controlled Descent Device dengan tali kawat baja anti-api.'
    ],
    participants: [
      'Pekerja struktur bangunan tinggi, ereksi baja, dan maintenance atap pabrik.',
      'Teknisi instalasi mekanikal/elektrikal penerangan lampu jalan dan gedung.',
      'Safety Officer dan Pengawas Pekerjaan Bangunan Tinggi.'
    ],
    tableData: {
      headers: ['Tingkat Sertifikasi', 'Metode Kerja Utama', 'Area Operasional', 'Masa Berlaku Lisensi'],
      rows: [
        ['TKBT Tingkat 1', 'Bekerja pada platform tetap, perancah, dan tangga vertikal', 'Ketinggian >1.8 meter dengan pijakan kokoh', '3 Tahun (Kemnaker RI)'],
        ['TKBT Tingkat 2', 'Bekerja pada struktur bergerak, gondola, dan perancah gantung', 'Ketinggian bangunan bertingkat kompleks', '3 Tahun (Kemnaker RI)'],
        ['TKPK Tingkat 1', 'Akses tali industri (Rope Access) bermanuver di udara bebas', 'Dinding vertikal, menara flare, dan cerobong boiler', '3 Tahun (Kemnaker RI)']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/working-at-height/', label: 'Pelatihan Working at Height' },
      { href: '/kategori-pelatihan/rope-access-dasar/', label: 'Pelatihan Rope Access Dasar' },
      { href: '/kategori-pelatihan/operator-scaffolding/', label: 'Pelatihan Operator Scaffolding' },
      { href: '/kategori-pelatihan/rescue-di-ketinggian/', label: 'Pelatihan Rescue di Ketinggian' }
    ],
    faqs: [
      {
        q: 'Apa perbedaan mendasar antara kualifikasi TKBT dan TKPK?',
        a: 'TKBT (Tenaga Kerja Bangunan Tinggi) diperuntukkan bagi pekerja yang beroperasi di platform lantai kerja tetap, struktur tangga, gondola, atau perancah. Sedangkan TKPK (Tenaga Kerja Pada Ketinggian) menggunakan metode akses tali (rope access) untuk bermanuver di ruang udara vertikal tanpa lantai kerja.'
      },
      {
        q: 'Apakah sertifikasi TKBT Kemnaker RI wajib bagi seluruh pekerja konstruksi tinggi?',
        a: 'Ya, berdasarkan Permenaker No. 9/2016, seluruh pengusaha dan pengurus tempat kerja wajib mempekerjakan tenaga kerja yang telah memiliki sertifikat kompetensi dan lisensi K3 bekerja pada ketinggian resmi dari Kementerian Ketenagakerjaan RI.'
      }
    ]
  }
];

console.log(`Loaded ${batch1DeepData.length} core deep programs.`);
