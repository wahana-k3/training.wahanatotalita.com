import { ExtendedProgramDetail } from './batch4-master-data';

export const batch5Part3Data: ExtendedProgramDetail[] = [
  // 47. In-House Training K3 Samarinda
  {
    key: 'in-house-training-k3-samarinda',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-samarinda/',
    title: 'In-House Training K3 Samarinda & Kutai: Tambang Batubara & Hauling Kaltim',
    h1: 'In-House Training K3 Samarinda & Kutai Kartanegara: Pelatihan POP Tambang, Rigger, dan Safety Hauling Batubara',
    meta: 'In-house training K3 resmi di Samarinda, Kutai Kartanegara, dan Sangatta: sertifikasi POP/POM Minerba, Operator Alat Berat, Rigger, dan K3 Tambang Batubara.',
    imgAlt: 'Pelatihan keselamatan operasional tambang batubara diselenggarakan di aula site tambang Samarinda Kaltim',
    related: ['in-house-training-k3-balikpapan', 'pengawas-operasional-pertama-pop', 'keselamatan-alat-berat'],
    intro: 'Layanan in-house training K3 di Samarinda dan koridor Sungai Mahakam menjangkau ratusan perusahaan pemegang IUP pertambangan batubara, kontraktor hauling, dan pelabuhan muat tongkang (jetty batubara).',
    hazards: ['Kecelakaan jalan hauling dan kestabilan lereng disposal batubara.'],
    regulations: ['Kepmen ESDM No. 1827/2018.'],
    modules: [{ name: 'Modul 1: Kaidah K3 Tambang Minerba', theory: 'SMKP, Inspeksi, P5M.', practical: 'Audit pit tambang.' }],
    equipment: ['Inclinometer & Radio Tambang.'],
    participants: ['Foreman Tambang, Pengawas Hauling, dan KTT.'],
    tableData: { headers: ['Area Kaltim', 'Program Prioritas'], rows: [['Samarinda & Kukar', 'POP Tambang, Rigger, Operator Excavator']] },
    links: [{ href: '/jenis-pelatihan/in-house-training-k3-balikpapan/', label: 'In-House Training Balikpapan' }],
    faqs: [{ q: 'Apakah sertifikat POP diterbitkan BNSP?', a: 'Ya, sertifikat kompetensi POP diterbitkan resmi oleh BNSP melalui LSP Terlisensi.' }]
  },

  // 48. In-House Training K3 Morowali
  {
    key: 'in-house-training-k3-morowali',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-morowali/',
    title: 'In-House Training K3 Morowali (IMIP) & Weda Bay: Smelter Nikel Terpadu',
    h1: 'In-House Training K3 Kawasan Industri Morowali & Halmahera: Keselamatan Smelter Nikel, RKT, dan Sertifikasi K3 Berat',
    meta: 'In-house training K3 resmi di Morowali (Kawasan IMIP) dan Weda Bay (IWIP): pelatihan molten metal safety, gas CO, overhead crane smelter, dan sertifikasi Kemnaker/BNSP.',
    imgAlt: 'Pelatihan in-house K3 smelter diadakan di fasilitas training center kawasan industri Morowali',
    related: ['smelter-dan-pengolahan-logam', 'hot-work-safety', 'gas-tester'],
    intro: 'Kawasan Industri Morowali (IMIP) dan Weda Bay (IWIP) merupakan pusat hilirisasi nikel terbesar di Asia Tenggara dengan puluhan lini rotary kiln electric furnace (RKEF).',
    hazards: ['Bahaya ledakan cairan logam panas dan keracunan gas CO di area furnace.'],
    regulations: ['UU No. 1 Tahun 1970.', 'Permenaker No. 5/2018.'],
    modules: [{ name: 'Modul 1: Smelter Safety Management', theory: 'Molten metal explosion, CO safety.', practical: 'Drill tanggap darurat smelter.' }],
    equipment: ['Aluminized Heat Suit & CO Detector.'],
    participants: ['Operator Smelter Morowali, Tapping Lead, dan HSE Specialist.'],
    tableData: { headers: ['Kawasan Industri', 'Fokus Pelatihan'], rows: [['IMIP Morowali & IWIP Weda Bay', 'Molten Metal Safety, Ahli K3 Umum, Heavy Crane']] },
    links: [{ href: '/industri/smelter-dan-pengolahan-logam/', label: 'K3 Industri Smelter' }],
    faqs: [{ q: 'Apakah materi tersedia dalam Bahasa Mandarin untuk tim manajemen asing?', a: 'Ya, kami menyediakan modul dan penerjemah teknis keselamatan dalam Bahasa Mandarin.' }]
  },

  // 49. In-House Training K3 Gresik
  {
    key: 'in-house-training-k3-gresik',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-gresik/',
    title: 'In-House Training K3 Gresik (JIIPE): Petrokimia, Smelter & Semen',
    h1: 'In-House Training K3 Kawasan Industri Gresik & JIIPE: Pelatihan K3 Kimia, Pelabuhan, dan Manufaktur Terpadu',
    meta: 'In-house training K3 resmi di Gresik & Kawasan JIIPE Manyar: Petrokimia Gresik, Semen Gresik, Smelter Manyar, dan Kawasan Industri Gresik (KIG). Sertifikasi Kemnaker RI.',
    imgAlt: 'Pelatihan in-house K3 kimia dan penggunaan APD hazmat di kawasan industri terpadu JIIPE Manyar Gresik',
    related: ['in-house-training-k3-surabaya', 'petrokimia-dan-pupuk', 'ahli-k3-kimia'],
    intro: 'Kawasan Industri Gresik dan Java Integrated Industrial and Port Estate (JIIPE) menjadi pusat investasi kimia, pupuk, dan smelter tembaga skala dunia di Jawa Timur.',
    hazards: ['Pelepasan gas kimia amonia, asam fosfat, dan keselamatan dermaga curah cair.'],
    regulations: ['Kepmenaker No. 187/1999.'],
    modules: [{ name: 'Modul 1: K3 Petrokimia & JIIPE Port Safety', theory: 'Chemical handling, PSM, Stevedoring.', practical: 'Simulasi tanggap darurat amonia.' }],
    equipment: ['Hazmat Chemical Suit & Ammonia Detector.'],
    participants: ['HSE Petrokimia, Teknisi Pabrik Semen/Pupuk, dan Port Lead JIIPE.'],
    tableData: { headers: ['Zona Industri Gresik', 'Program Terpopuler'], rows: [['JIIPE Manyar & KIG', 'Ahli K3 Kimia, SIO Forklift/Crane, Confined Space']] },
    links: [{ href: '/jenis-pelatihan/in-house-training-k3-surabaya/', label: 'In-House Training Surabaya' }],
    faqs: [{ q: 'Apakah program in-house mencakup sertifikasi SIO Kemnaker resmi?', a: 'Ya, seluruh peserta yang lulus ujian teori dan praktik akan menerima sertifikat dan SIO resmi Kemnaker RI.' }]
  },

  // 50. In-House Training K3 Pasuruan (PIER)
  {
    key: 'in-house-training-k3-pasuruan',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-pasuruan/',
    title: 'In-House Training K3 Pasuruan (PIER): F&B, Kimia & Manufaktur Jatim',
    h1: 'In-House Training K3 Kawasan Industri Pasuruan PIER: Solusi K3 Pabrik Makanan, Minuman, dan Manufaktur Ekspor',
    meta: 'In-house training K3 resmi di Pasuruan & Kawasan Industri PIER (Pasuruan Industrial Estate Rembang): pelatihan K3 F&B, Boiler, LOTO, P3K, dan Ahli K3 Umum.',
    imgAlt: 'Pelatihan in-house K3 first aid P3K diselenggarakan di ruang serbaguna pabrik kawasan industri PIER Pasuruan',
    related: ['in-house-training-k3-surabaya', 'makanan-minuman-dan-fmcg'],
    intro: 'Kawasan Industri PIER Pasuruan menampung puluhan pabrik makanan-minuman multinasional, industri kemasan gelas, dan kimia hilir yang membutuhkan kepatuhan K3 prima.',
    hazards: ['Bahaya uap boiler, refrigerasi amonia pabrik F&B, dan mesin pengemas.'],
    regulations: ['Permenaker No. 05/2018.'],
    modules: [{ name: 'Modul 1: Keselamatan Manufaktur F&B PIER', theory: 'Ergonomi, APAR, P3K, Boiler.', practical: 'Praktik P3K dan pemadaman api.' }],
    equipment: ['CPR Mannequin & LOTO Kit.'],
    participants: ['Factory Manager Pasuruan, HRD PIER, dan Tim K3.'],
    tableData: { headers: ['Kawasan Pasuruan', 'Spesialisasi'], rows: [['PIER Rembang & Beji', 'Petugas P3K, Operator Boiler, Ergonomi']] },
    links: [{ href: '/jenis-pelatihan/in-house-training-k3-surabaya/', label: 'In-House Training Surabaya' }],
    faqs: [{ q: 'Apakah pelatihan P3K di Pasuruan menyertakan lisensi resmi Kemnaker?', a: 'Ya, lisensi Petugas P3K Kemnaker RI diterbitkan lengkap dengan buku panduan P3K resmi.' }]
  },

  // 51. In-House Training K3 Medan
  {
    key: 'in-house-training-k3-medan',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-medan/',
    title: 'In-House Training K3 Medan & KIM: Sawit, Karet & Manufaktur Sumut',
    h1: 'In-House Training K3 Kota Medan & Kawasan Industri Medan (KIM): Pelatihan K3 PKS, Oleokimia, dan Pergudangan Belawan',
    meta: 'In-house training K3 resmi di Medan & Kawasan Industri Medan (KIM 1-5): sertifikasi K3 Pabrik Kelapa Sawit (PKS), Boiler, Rigger, dan AK3U Sumatera Utara.',
    imgAlt: 'Sesi in-house training K3 operator boiler di pabrik pengolahan kelapa sawit KIM Medan',
    related: ['perkebunan-dan-pabrik-kelapa-sawit', 'operator-boiler'],
    intro: 'Medan dan Kawasan Industri Medan (KIM) merupakan pusat pengolahan minyak kelapa sawit (CPO), industri karet, dan logistik ekspor pelabuhan Belawan Sumatera Utara.',
    hazards: ['Risiko uap boiler PKS, ledakan debu cangkang sawit, dan lalu lintas forklift depo.'],
    regulations: ['UU Uap 1930.', 'Permenaker No. 8/2020.'],
    modules: [{ name: 'Modul 1: K3 Industri Pengolahan Sawit & Oleokimia Sumut', theory: 'Boiler, Sterilizer, Bejana Tekan.', practical: 'Audit bejana uap di pabrik.' }],
    equipment: ['Boiler Safety Valve Tester & Sound Meter.'],
    participants: ['Mill Manager PKS Sumut, HSE Officer KIM, dan Maintenance Lead.'],
    tableData: { headers: ['Kawasan Medan', 'Program Unggulan'], rows: [['KIM 1-5 Mabar & Belawan', 'Operator Boiler, Ahli K3 Umum, SIO Forklift']] },
    links: [{ href: '/industri/perkebunan-dan-pabrik-kelapa-sawit/', label: 'K3 Pabrik Sawit' }],
    faqs: [{ q: 'Apakah kami bisa meminta jadwal pelatihan di hari Sabtu/Minggu?', a: 'Ya, jadwal in-house training dapat diatur pada akhir pekan tanpa mengganggu hari kerja produksi.' }]
  },

  // 52. In-House Training K3 Pekanbaru
  {
    key: 'in-house-training-k3-pekanbaru',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-pekanbaru/',
    title: 'In-House Training K3 Pekanbaru & Duri: Blok Rokan Migas & Pulp Paper',
    h1: 'In-House Training K3 Pekanbaru & Duri: Sertifikasi K3 Migas Blok Rokan, Pabrik Kertas Riau, dan Perkebunan Sawit',
    meta: 'In-house training K3 resmi di Pekanbaru, Duri, Dumai, dan Pangkalan Kerinci: sertifikasi K3 Migas, H2S, CSMS Kontraktor PHR, dan Pulp & Paper Safety.',
    imgAlt: 'Pelatihan keselamatan H2S dan pemakaian breathing apparatus untuk pekerja migas di Duri Riau',
    related: ['minyak-dan-gas-bumi-offshore', 'pulp-and-paper-mill', 'h2s-safety'],
    intro: 'Provinsi Riau adalah lumbung minyak bumi Blok Rokan, produsen bubur kertas (Pulp & Paper) terbesar di dunia, serta perkebunan kelapa sawit terluas di Indonesia.',
    hazards: ['Bahaya gas beracun H2S migas, bejana kimia digester pabrik kertas, dan tangki timbun CPO Dumai.'],
    regulations: ['UU No. 22/2001.', 'Permenaker No. 5/2018.'],
    modules: [{ name: 'Modul 1: K3 Hulu Migas & Pabrik Kertas Riau', theory: 'H2S Alive, CSMS Vendor, Digester Safety.', practical: 'Drill H2S escape dan donning EEBA.' }],
    equipment: ['EEBA 15 Menit & Multi-Gas Detector.'],
    participants: ['Vendor PHR Rokan, Teknisi Pabrik Kertas, dan HSE Coordinator Riau.'],
    tableData: { headers: ['Wilayah Riau', 'Fokus Training'], rows: [['Duri & Dumai (Migas)', 'H2S Safety, CSMS, Rigger Migas'], ['Kerinci & Perawang (Paper)', 'Digester Safety, Chemical Handling, Boiler']] },
    links: [{ href: '/kategori-pelatihan/h2s-safety/', label: 'Pelatihan H2S Safety' }],
    faqs: [{ q: 'Apakah pelatihan CSMS di Riau disesuaikan dengan standar Pertamina Hulu Rokan (PHR)?', a: 'Ya, modul CSMS kami diselaraskan 100% dengan persyaratan pra-kualifikasi tender PHR dan SKK Migas.' }]
  },

  // 53. In-House Training K3 Palembang
  {
    key: 'in-house-training-k3-palembang',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-palembang/',
    title: 'In-House Training K3 Palembang & Lahat: Tambang Batubara & Pupuk',
    h1: 'In-House Training K3 Palembang & Muara Enim: Sertifikasi K3 Tambang Batubara Sumsel, Pabrik Pupuk, dan PLTU Mulut Tambang',
    meta: 'In-house training K3 resmi di Palembang, Muara Enim, Lahat, dan Tanjung Enim: sertifikasi POP Tambang, Ahli K3 Kimia Pupuk, Boiler PLTU, dan K3 Listrik Sumsel.',
    imgAlt: 'Pelatihan in-house K3 pengawas operasional tambang batubara di Tanjung Enim Sumatera Selatan',
    related: ['pertambangan-batubara-dan-nikel', 'petrokimia-dan-pupuk'],
    intro: 'Sumatera Selatan merupakan lumbung batubara terbesar di Sumatera dengan kompleks tambang Bukit Asam, pabrik pupuk urea raksasa, dan proyek PLTU Mulut Tambang.',
    hazards: ['Kecelakaan armada hauling batubara, kebocoran gas amonia pabrik pupuk, dan uap boiler PLTU.'],
    regulations: ['Kepmen ESDM No. 1827/2018.'],
    modules: [{ name: 'Modul 1: K3 Tambang & Industri Energi Sumsel', theory: 'Kaidah Teknik Tambang, Ammonia Safety, High Voltage.', practical: 'Audit kestabilan jalan tambang.' }],
    equipment: ['Laser Inclinometer & High Voltage Detector.'],
    participants: ['Pengawas Tambang Tanjung Enim, Operator Pabrik Pupuk, dan HSE PLTU Sumsel.'],
    tableData: { headers: ['Wilayah Sumsel', 'Program Prioritas'], rows: [['Tanjung Enim & Lahat', 'POP/POM Tambang, Rigger, Alat Berat'], ['Palembang Kota', 'Ahli K3 Kimia, Boiler Kelas I, AK3U']] },
    links: [{ href: '/kategori-pelatihan/pengawas-operasional-pertama-pop/', label: 'Pelatihan POP Tambang' }],
    faqs: [{ q: 'Apakah instruktur kami bisa melakukan sertifikasi POP di Tanjung Enim?', a: 'Ya, tim asesor kami siap hadir langsung ke site Tanjung Enim dan Lahat.' }]
  },

  // 54. In-House Training K3 Makassar
  {
    key: 'in-house-training-k3-makassar',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-makassar/',
    title: 'In-House Training K3 Makassar: Hub Industri & Pelabuhan Kawasan Timur',
    h1: 'In-House Training K3 Kota Makassar & KIMA: Pelatihan K3 Pelabuhan, Pabrik Semen, dan Manufaktur Indonesia Timur',
    meta: 'In-house training K3 resmi di Makassar & Kawasan Industri Makassar (KIMA): sertifikasi Ahli K3 Umum, Stevedoring Pelabuhan New Port, K3 Semen Tonasa/Bosowa, dan K3 Listrik.',
    imgAlt: 'Sesi in-house training K3 keselamatan kelistrikan di ruang pertemuan pabrik kawasan industri KIMA Makassar',
    related: ['pelabuhan-dan-maritim', 'semen-dan-bahan-bangunan', 'ahli-k3-umum'],
    intro: 'Makassar adalah pintu gerbang logistik dan industri utama di Indonesia Timur dengan pelabuhan Makassar New Port dan kawasan industri KIMA.',
    hazards: ['Operasi crane peti kemas pelabuhan, kelaikan listrik industri, dan mesin pabrik semen.'],
    regulations: ['UU No. 1 Tahun 1970.'],
    modules: [{ name: 'Modul 1: K3 Kepelabuhanan & Manufaktur Indonesia Timur', theory: 'Port Safety, SMK3, K3 Listrik.', practical: 'Inspeksi fisik alat keselamatan.' }],
    equipment: ['Insulation Tester & Port Safety Harness.'],
    participants: ['HSE Coordinator KIMA, Terminal Port Lead, dan Praktisi K3 Sulawesi.'],
    tableData: { headers: ['Kawasan Makassar', 'Program Unggulan'], rows: [['KIMA Daya & New Port', 'Ahli K3 Umum, K3 Maritim, Forklift SIO']] },
    links: [{ href: '/kategori-pelatihan/ahli-k3-umum/', label: 'Pelatihan Ahli K3 Umum' }],
    faqs: [{ q: 'Berapa hari durasi pelaksanaan in-house Ahli K3 Umum di Makassar?', a: 'Pelatihan Ahli K3 Umum Kemnaker RI berdurasi 12 hari kerja intensif termasuk ujian komprehensif.' }]
  },

  // 55. In-House Training K3 Semarang
  {
    key: 'in-house-training-k3-semarang',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-semarang/',
    title: 'In-House Training K3 Semarang: Kawasan Candi, Wijayakusuma & Terboyo',
    h1: 'In-House Training K3 Kota Semarang: Solusi Sertifikasi K3 Garmen, Makanan, Pelabuhan Tanjung Emas & Manufaktur',
    meta: 'In-house training K3 resmi di Semarang: Kawasan Industri Candi (KIC), Wijayakusuma (KIW), Terboyo, dan BSB City. Sertifikasi AK3U, P3K, Damkar, dan Ergonomi.',
    imgAlt: 'Pelatihan in-house K3 kebakaran dan simulasi hydrant di halaman pabrik Kawasan Industri Wijayakusuma Semarang',
    related: ['tekstil-garmen-dan-sepatu', 'in-house-training-k3-kendal'],
    intro: 'Semarang memiliki kawasan industri padat karya manufaktur garmen ekspor, farmasi, dan logistik maritim di Tanjung Emas Jawa Tengah.',
    hazards: ['Bahaya kebakaran pabrik padat karya garmen dan ergonomi lini jahit.'],
    regulations: ['Kepmenaker No. 186/1999.'],
    modules: [{ name: 'Modul 1: Proteksi Kebakaran & Ergonomi Garmen Semarang', theory: 'Fire safety, Evakuasi massal, RULA/REBA.', practical: 'Drill pemadaman api dan evakuasi.' }],
    equipment: ['APAR Foam/Powder & Lux Meter.'],
    participants: ['Compliance Manager Garmen, HRD Semarang, dan Anggota P2K3.'],
    tableData: { headers: ['Kawasan Semarang', 'Program Favorit'], rows: [['KIW & KIC Gatot Subroto', 'Damkar Kelas D, Petugas P3K, Ahli K3 Umum']] },
    links: [{ href: '/jenis-pelatihan/in-house-training-k3-kendal/', label: 'In-House Training Kendal' }],
    faqs: [{ q: 'Apakah simulasi fire drill melibatkan mobil pemadam kebakaran lokal?', a: 'Dapat dikoordinasikan bersama Dinas Pemadam Kebakaran Kota Semarang untuk drill gabungan skala besar.' }]
  },

  // 56. In-House Training K3 Kendal (KIK)
  {
    key: 'in-house-training-k3-kendal',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-kendal/',
    title: 'In-House Training K3 Kawasan Industri Kendal (KIK - KEK Kendal)',
    h1: 'In-House Training K3 KEK Kendal: Pelatihan K3 Standar Internasional untuk Tenant Multinasional Jawa Tengah',
    meta: 'In-house training K3 resmi di Kawasan Ekonomi Khusus (KEK) Kendal: tekstil modern, baterai EV, manufaktur presisi, dan logistik. Sertifikasi Kemnaker RI dan kurikulum bilingual.',
    imgAlt: 'Pelatihan keselamatan kerja operator mesin modern diselenggarakan di pabrik KEK Kendal',
    related: ['in-house-training-k3-semarang', 'manufaktur-otomotif-dan-elektronik'],
    intro: 'Kawasan Ekonomi Khusus Kendal (KIK Park by the Bay) berkembang pesat dengan puluhan tenant PMA dari Singapura, Jepang, Tiongkok, dan Eropa.',
    hazards: ['Interaksi mesin otomatis presisi, sistem kelistrikan tegangan tinggi, dan material handling.'],
    regulations: ['PP No. 50 Tahun 2012.'],
    modules: [{ name: 'Modul 1: Global Safety Compliance KEK Kendal', theory: 'SMK3, ISO 45001, Machine Guarding.', practical: 'Audit kelaikan mesin pabrik.' }],
    equipment: ['Digital Safety Sensor Tester.'],
    participants: ['Expat Plant Lead, Indonesian Safety Officer, dan HR Kendal.'],
    tableData: { headers: ['Zona KEK Kendal', 'Program Pilihan'], rows: [['Kendal Industrial Park', 'Ahli K3 Umum, LOTO, SIO Forklift, ISO 45001']] },
    links: [{ href: '/jenis-pelatihan/in-house-training-k3-semarang/', label: 'In-House Training Semarang' }],
    faqs: [{ q: 'Apakah laporan pasca pelatihan dapat diterbitkan dalam Bahasa Inggris?', a: 'Ya, kami menyediakan Executive Summary Report dan transkrip evaluasi peserta dalam Bahasa Inggris.' }]
  },

  // 57. In-House Training K3 Timika Papua
  {
    key: 'in-house-training-k3-timika',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-timika/',
    title: 'In-House Training K3 Timika & Tembagapura: Underground Mining Safety',
    h1: 'In-House Training K3 Timika & Tambang Bawah Tanah Papua: Keselamatan Block Caving, Rigger, dan POP Tambang Papua',
    meta: 'In-house training K3 resmi di Timika, Tembagapura, dan area penunjang tambang Papua: sertifikasi K3 Tambang Bawah Tanah, POP/POM Minerba, Rigging, dan Bekerja di Ketinggian.',
    imgAlt: 'Pelatihan penyelamatan darurat tambang bawah tanah (Mine Rescue) di Timika Papua',
    related: ['k3-terowongan-dan-underground-mining', 'pengawas-operasional-pertama-pop'],
    intro: 'Area pertambangan Timika dan Tembagapura mengoperasikan tambang bawah tanah metode Block Caving terbesar di dunia dengan tantangan ventilasi, runtuhan batuan, dan cuaca ekstrem pegunungan.',
    hazards: ['Bahaya runtuhan batuan (Rockfall), genangan air lumpur basah (Wet Muck), dan gas beracun bawah tanah.'],
    regulations: ['Kepmen ESDM No. 1827/2018.'],
    modules: [{ name: 'Modul 1: Advanced Underground Mining Safety', theory: 'Rock bolting, Refuge Chamber, Mine Rescue.', practical: 'Simulasi evakuasi ruang perlindungan darurat.' }],
    equipment: ['Self-Contained Self-Rescuer (SCSR) & Gas Tester.'],
    participants: ['Mine Underground Supervisor, Rigger Timika, dan Kontraktor Penunjang Tambang.'],
    tableData: { headers: ['Wilayah Papua', 'Program Spesialis'], rows: [['Timika & Tembagapura', 'Underground Safety, POP Tambang, Confined Space']] },
    links: [{ href: '/kategori-pelatihan/k3-terowongan-dan-underground-mining/', label: 'K3 Tambang Bawah Tanah' }],
    faqs: [{ q: 'Apakah instruktur telah divaksinasi dan memiliki izin kerja site Timika?', a: 'Ya, seluruh instruktur yang ditugaskan memenuhi seluruh protokol kesehatan dan induksi keselamatan site Timika.' }]
  },

  // 58. In-House Training K3 Sorowako
  {
    key: 'in-house-training-k3-sorowako',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-sorowako/',
    title: 'In-House Training K3 Sorowako & Luwu Timur: Nikel & Hidrometalurgi',
    h1: 'In-House Training K3 Sorowako: Pelatihan K3 Tambang Nikel Terbuka, Smelter, dan Pembangkit Listrik Tenaga Air (PLTA)',
    meta: 'In-house training K3 resmi di Sorowako, Malili, dan Luwu Timur: sertifikasi POP Tambang, K3 Hydro Power PLTA, Keselamatan Truk Tambang Raksasa, dan AK3U.',
    imgAlt: 'Pelatihan in-house K3 alat berat tambang nikel di Sorowako Luwu Timur',
    related: ['pertambangan-batubara-dan-nikel', 'smelter-dan-pengolahan-logam'],
    intro: 'Sorowako di Luwu Timur Sulawesi Selatan merupakan kawasan operasi penambangan nikel terintegrasi dengan teknologi pyrometallurgy dan tiga unit bendungan PLTA swasta.',
    hazards: ['Lereng galian nikel laterit basah yang licin, pengoperasian hauler raksasa, dan turbin PLTA.'],
    regulations: ['Kepmen ESDM No. 1827/2018.'],
    modules: [{ name: 'Modul 1: K3 Tambang Nikel Laterit & Hydropower Sorowako', theory: 'Fatigue, Tanggul pengaman, Hydro turbine LOTO.', practical: 'Audit jalan hauling licin saat hujan.' }],
    equipment: ['Fatigue Scanner & Slope Stability Radar Guide.'],
    participants: ['Pengawas Tambang Nikel, Operator Alat Berat, dan Teknisi PLTA.'],
    tableData: { headers: ['Area Sorowako', 'Program Utama'], rows: [['Site Tambang & Smelter', 'POP Minerba, Rigger Heavy Duty, K3 Kelistrikan PLTA']] },
    links: [{ href: '/kategori-pelatihan/pengawas-operasional-pertama-pop/', label: 'Pelatihan POP Tambang' }],
    faqs: [{ q: 'Berapa hari durasi sertifikasi POP di Sorowako?', a: 'Pelatihan dan uji kompetensi POP BNSP berdurasi 6 hari kerja intensif.' }]
  },

  // 59. In-House Training K3 Bontang
  {
    key: 'in-house-training-k3-bontang',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-bontang/',
    title: 'In-House Training K3 Bontang: Kilang LNG, Pupuk Kaltim & Energi',
    h1: 'In-House Training K3 Kota Bontang: Pelatihan K3 Kilang Gas Alam Cair (LNG), Pabrik Pupuk Urea, dan Terminal Amonia',
    meta: 'In-house training K3 resmi di Bontang: Kawasan Industri Pupuk Kaltim (KIE), Kilang LNG Badak, dan PLTU. Sertifikasi Ahli K3 Kimia, Bejana Tekan, PSM, dan CSMS.',
    imgAlt: 'Pelatihan keselamatan gas kriogenik LNG dan penanganan tangki amonia di Bontang Kalimantan Timur',
    related: ['petrokimia-dan-pupuk', 'ahli-k3-kimia', 'chemical-handling'],
    intro: 'Bontang adalah kota industri energi dan kimia kelas dunia di pesisir Kaltim dengan kilang pencairan gas alam (Badak LNG) dan produsen pupuk urea terbesar (Pupuk Kaltim).',
    hazards: ['Gas kriogenik LNG bersuhu -162°C dan tangki penyimpanan gas amonia berkapasitas puluhan ribu ton.'],
    regulations: ['PP No. 11/1979.', 'Kepmenaker No. 187/1999.'],
    modules: [{ name: 'Modul 1: Cryogenic & Petrochemical Safety Bontang', theory: 'Cryogenic burns, Boiling Liquid Expanding Vapor Explosion (BLEVE), PSM.', practical: 'Drill tanggap darurat amonia.' }],
    equipment: ['Cryogenic Safety Gloves & Ammonia Hazmat Suit.'],
    participants: ['Process Engineer LNG, Operator Pabrik Pupuk, dan Vendor Rekanan Bontang.'],
    tableData: { headers: ['Kawasan Bontang', 'Fokus Pelatihan'], rows: [['Pupuk Kaltim & Badak LNG', 'Ahli K3 Kimia, CSMS, Bejana Tekan, LOTO']] },
    links: [{ href: '/industri/petrokimia-dan-pupuk/', label: 'K3 Petrokimia' }],
    faqs: [{ q: 'Apakah materi mencakup bahaya suhu sangat rendah (Kriogenik)?', a: 'Ya, modul mencakup keselamatan fluida kriogenik LNG, pemuaian gas mendadak, dan APD khusus anti-frostbite.' }]
  },

  // 60. In-House Training K3 Tangerang
  {
    key: 'in-house-training-k3-tangerang',
    hub: 'jenis-pelatihan',
    path: 'jenis-pelatihan/in-house-training-k3-tangerang/',
    title: 'In-House Training K3 Tangerang & Serang: Manufaktur, Logistik & Banten',
    h1: 'In-House Training K3 Tangerang & Serang: Pelatihan K3 Pabrik Sepatu, Pergudangan Modern, dan Kawasan Industri Modern Cikande',
    meta: 'In-house training K3 resmi di Tangerang (Batuceper, Jatake, Pasar Kemis, Balaraja) dan Kawasan Industri Modern Cikande Serang. Sertifikasi AK3U, Forklift, P3K, dan Damkar.',
    imgAlt: 'Pelatihan in-house K3 operator forklift dan penataan logistik aman di kawasan industri Jatake Tangerang',
    related: ['tekstil-garmen-dan-sepatu', 'logistik-pergudangan-dan-depo', 'in-house-training-k3-cikarang'],
    intro: 'Tangerang dan koridor Serang Timur (Modern Cikande) menampung ribuan industri alas kaki ekspor, kimia, makanan, peleburan baja, dan depo logistik bandara Soekarno-Hatta.',
    hazards: ['Kebakaran pabrik padat karya, bahaya pergerakan forklift di gudang sempit, dan pengoperasian mesin press.'],
    regulations: ['UU No. 1 Tahun 1970.', 'Permenaker No. 8/2020.'],
    modules: [{ name: 'Modul 1: Keselamatan Manufaktur Terpadu Tangerang', theory: 'SMK3, Forklift Safety, P3K, Damkar.', practical: 'Praktik manuver forklift dan P3K.' }],
    equipment: ['Forklift SIO Training Kit & First Aid Kit.'],
    participants: ['Factory Manager Tangerang, HSE Lead Banten, dan Operator Pabrik.'],
    tableData: { headers: ['Kawasan Tangerang & Serang', 'Program Populer'], rows: [['Jatake, Pasar Kemis & Cikande', 'Operator Forklift, Petugas P3K, Ahli K3 Umum, Damkar']] },
    links: [{ href: '/jenis-pelatihan/in-house-training-k3-cikarang/', label: 'In-House Training Cikarang' }],
    faqs: [{ q: 'Apakah sertifikat operator forklift langsung diterbitkan dengan lisensi SIO?', a: 'Ya, seluruh peserta yang lulus akan memperoleh Sertifikat Pembinaan, Lisensi SIO Kemnaker, dan Buku Kerja Operator.' }]
  },

  // 65. Penanganan Klaim Kecelakaan Kerja BPJS
  {
    key: 'penanganan-klaim-kecelakaan-kerja-bpjs',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/penanganan-klaim-kecelakaan-kerja-bpjs/',
    title: 'Panduan Penanganan & Klaim Jaminan Kecelakaan Kerja BPJS Ketenagakerjaan',
    h1: 'Panduan Prosedur Klaim JKK BPJS Ketenagakerjaan: Alur Pelaporan 2x24 Jam, Formulir Tahap I-II, dan Program Return to Work',
    meta: 'Panduan praktis HR dan HSE mengurus klaim JKK BPJS Ketenagakerjaan: batas waktu lapor 2x24 jam Form 3 KK01, dokumen medis, santunan cacat, dan program Return to Work (RTW).',
    imgAlt: 'Petugas HR dan dokter perusahaan memverifikasi dokumen klaim formulir JKK BPJS Ketenagakerjaan',
    related: ['dokter-perusahaan-hiperkes', 'investigasi-kecelakaan-kerja', 'ahli-k3-umum'],
    intro: 'Setiap kecelakaan kerja yang menimpa karyawan wajib dilaporkan secara resmi ke BPJS Ketenagakerjaan dan Disnaker dalam batas waktu ketat <strong>2x24 jam</strong> agar hak pengobatan tanpa batas biaya (Unlimited Coverage) dapat dicairkan.',
    hazards: ['Keterlambatan pelaporan >2x24 jam yang menyebabkan klaim biaya rumah sakit ditolak BPJS.'],
    regulations: ['PP No. 44 Tahun 2015.', 'Permenaker No. 26 Tahun 2015.'],
    modules: [{ name: 'Modul 1: Prosedur Administrasi Klaim JKK', theory: 'Formulir Tahap I (Form 3 KK01), Formulir Tahap II (Surat Dokter Form 3b KK03), Trauma Center BPJS.', practical: 'Pengisian simulasi formulir klaim JKK online & offline.' }],
    equipment: ['Master Form JKK BPJS Ketenagakerjaan Lengkap.'],
    participants: ['HR Officer, HSE Administrator, dan Dokter/Paramedis Perusahaan.'],
    tableData: { headers: ['Tahapan Klaim JKK', 'Batas Waktu Legal', 'Dokumen Wajib'], rows: [['Laporan Tahap I (Awal)', 'Maksimal 2x24 Jam Pasca Kejadian', 'Formulir 3 KK01 + Kronologis + Absensi'], ['Laporan Tahap II (Selesai)', 'Pasca Pasien Dinyatakan Sembuh/Cacat', 'Formulir 3b KK03 (Keterangan Dokter Pemeriksa)']] },
    links: [{ href: '/kategori-pelatihan/investigasi-kecelakaan-kerja/', label: 'Pelatihan Investigasi Kecelakaan' }],
    faqs: [{ q: 'Apakah kecelakaan lalu lintas saat berangkat/pulang kerja dijamin oleh BPJS Ketenagakerjaan?', a: 'Ya, dijamin penuh sebagai kecelakaan kerja sepanjang rute perjalanan yang dilalui adalah rute wajar dan biasa ditempuh dari/menuju rumah ke tempat kerja.' }]
  },

  // 66. Penyusunan RKK dan SMKK PUPR
  {
    key: 'penyusunan-rkk-dan-smkk-pupr',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/penyusunan-rkk-dan-smkk-pupr/',
    title: 'Panduan Penyusunan Dokumen RKK & SMKK Permen PUPR No. 10/2021',
    h1: 'Panduan Penyusunan Rencana Keselamatan Konstruksi (RKK): Format Standar Tender & Pelaksanaan Permen PUPR No. 10/2021',
    meta: 'Panduan lengkap authoring dokumen RKK konstruksi: penyusunan Elemen SMKK PUPR, matriks IBPRP, perhitungan biaya SMKK, format RKK tender vs pelaksanaan, dan persetujuan Pengguna Jasa.',
    imgAlt: 'Dokumen Rencana Keselamatan Konstruksi (RKK) tebal bersampul resmi dengan tanda tangan Ahli K3 Konstruksi dan Project Director',
    related: ['ahli-k3-konstruksi', 'petugas-k3-konstruksi', 'konstruksi-gedung-dan-infrastruktur'],
    intro: 'Dokumen <strong>Rencana Keselamatan Konstruksi (RKK)</strong> adalah syarat mutlak kelulusan tender pengadaan jasa konstruksi pemerintah dan panduan eksekusi keselamatan lapangan sesuai <strong>Permen PUPR No. 10 Tahun 2021</strong>.',
    hazards: ['Gugur dalam evaluasi teknis tender akibat format RKK tidak sesuai Permen PUPR terbaru.'],
    regulations: ['Permen PUPR No. 10 Tahun 2021.'],
    modules: [{ name: 'Modul 1: Sistematika 5 Elemen Dokumen RKK', theory: 'Kepemimpinan K3, Perencanaan K3 (IBPRP), Dukungan K3, Operasi K3, Evaluasi Kinerja K3.', practical: 'Penyusunan dokumen RKK lengkap proyek jembatan/gedung.' }],
    equipment: ['Template Master RKK Format Permen PUPR 10/2021.'],
    participants: ['Tender Estimator, Ahli K3 Konstruksi, Project Manager Kontraktor, dan Konsultan MK.'],
    tableData: { headers: ['5 Elemen Pokok RKK', 'Sub-Bab Dokumen Wajib'], rows: [['Elemen 1: Kepemimpinan', 'Komitmen K3 Direksi & Pakta Integritas'], ['Elemen 2: Perencanaan', 'Identifikasi Bahaya (IBPRP) & Sasaran Program'], ['Elemen 3: Dukungan', 'Kompetensi Tenaga Kerja & Anggaran Biaya SMKK']] },
    links: [{ href: '/kategori-pelatihan/ahli-k3-konstruksi/', label: 'Pelatihan Ahli K3 Konstruksi' }],
    faqs: [{ q: 'Apa perbedaan mendasar antara RKK Penawaran (Tender) dan RKK Pelaksanaan?', a: 'RKK Penawaran hanya memuat gambaran umum risiko proyek untuk evaluasi tender, sedangkan RKK Pelaksanaan memuat detail JSA harian, prosedur kerja spesifik seluruh subkontraktor, dan disahkan oleh Pengguna Jasa sebelum konstruksi dimulai.' }]
  },

  // 67. Tata Kelola TPS Limbah B3
  {
    key: 'tata-kelola-tps-limbah-b3',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/tata-kelola-tps-limbah-b3/',
    title: 'Panduan Tata Kelola & Standar Bangunan TPS Limbah B3 PP No. 22/2021',
    h1: 'Standar Teknis Bangunan & Tata Kelola TPS Limbah B3: Spesifikasi Bangunan Berizin, Masa Simpan, dan Pelaporan Festronik KLHK',
    meta: 'Panduan teknis mendirikan dan mengelola Tempat Penyimpanan Sementara (TPS) Limbah B3 pabrik: syarat lantai kedap, bak penampung tumpahan 110%, simbol label GHS, masa simpan 90/180/365 hari, dan persetujuan teknis (Pertek) KLHK.',
    imgAlt: 'Bangunan TPS Limbah B3 industri berizin dengan drum oli bekas tersusun rapi di atas palet dan terpasang simbol limbah B3',
    related: ['pengelolaan-limbah-b3', 'spill-response-kit', 'chemical-handling'],
    intro: 'Penyimpanan limbah bahan berbahaya dan beracun wajib dilakukan di fasilitas Tempat Penyimpanan Sementara (TPS) Limbah B3 yang memenuhi spesifikasi teknis ketat sesuai <strong>PP No. 22 Tahun 2021 &amp; Permen LHK No. 6 Tahun 2021</strong>.',
    hazards: ['Pencemaran air tanah akibat lantai TPS retak dan sanksi pidana lingkungan KLHK.'],
    regulations: ['PP No. 22 Tahun 2021.', 'Permen LHK No. 6 Tahun 2021.'],
    modules: [{ name: 'Modul 1: Syarat Fisik Bangunan TPS & Spill Containment', theory: 'Lantai semen kedap air kemiringan 1%, bak penampung tumpahan (Secondary Containment 110%), ventilasi atap.', practical: 'Audit kesesuaian fisik bangunan TPS limbah B3 pabrik.' }],
    equipment: ['Checklist Standar Bangunan TPS Limbah B3 KLHK.'],
    participants: ['Environmental Officer, HSE Specialist, dan Maintenance Lead.'],
    tableData: { headers: ['Kategori Limbah B3', 'Jumlah Dihasilkan / Hari', 'Batas Maksimum Masa Simpan'], rows: [['Kategori 1 (Sangat Berbahaya)', '>= 50 kg / hari', 'Maksimal 90 Hari'], ['Kategori 1 (Sangat Berbahaya)', '< 50 kg / hari', 'Maksimal 180 Hari'], ['Kategori 2 Sumber Tidak Spesifik', '< 50 kg / hari', 'Maksimal 365 Hari (1 Tahun)']] },
    links: [{ href: '/kategori-pelatihan/pengelolaan-limbah-b3/', label: 'Pelatihan Limbah B3' }],
    faqs: [{ q: 'Berapa kapasitas minimum bak penampung tumpahan (Secondary Containment) di TPS Limbah B3?', a: 'Secondary containment wajib mampu menampung sekurang-kurangnya 110% dari volume wadah terbesar yang disimpan di dalamnya.' }]
  },

  // 68. Daftar Wajib Kotak P3K Perusahaan
  {
    key: 'daftar-wajib-kotak-p3k-perusahaan',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/daftar-wajib-kotak-p3k-perusahaan/',
    title: 'Daftar Isi Wajib & Standar Kotak P3K Tipe A, B, C Permenaker No. 15/2008',
    h1: 'Standar Kotak P3K di Tempat Kerja: Checklist 21 Item Wajib Kotak Tipe A, B, C, dan Rasio Petugas P3K Berdasarkan Jumlah Tenaga Kerja',
    meta: 'Checklist resmi isi kotak P3K Permenaker No. 15 Tahun 2008: rincian 21 item wajib kotak Tipe A (25 pekerja), Tipe B (50 pekerja), Tipe C (100 pekerja), larangan obat minum, dan form inspeksi bulanan P3K.',
    imgAlt: 'Kotak P3K Tipe C dinding berwarna putih dengan lambang palang hijau terbuka memperlihatkan 21 item medis tersusun rapi',
    related: ['petugas-p3k-di-tempat-kerja', 'dokter-perusahaan-hiperkes'],
    intro: 'Penyediaan sarana Pertolongan Pertama Pada Kecelakaan (P3K) diatur secara terperinci dalam <strong>Permenaker No. Per.15/MEN/VIII/2008</strong> yang menetapkan standar isi 21 item wajib dan larangan menyimpan obat minum berbutir di dalam kotak P3K.',
    hazards: ['Pemberian obat minum yang salah oleh petugas P3K yang memicu syok anafilaksis korban.'],
    regulations: ['Permenaker No. Per.15/MEN/VIII/2008.'],
    modules: [{ name: 'Modul 1: Standar Isi 21 Item & Rasio Penempatan Kotak P3K', theory: 'Perhitungan Kotak A, B, C, penempatan dekat area kerja mudah dijangkau, pemantauan tanggal kadaluwarsa kasa dan antiseptik.', practical: 'Audit kelengkapan fisik 21 item isi kotak P3K.' }],
    equipment: ['Set Lengkap Kotak P3K Tipe C Dinding 21 Item.'],
    participants: ['Petugas P3K Bersertifikat, HR Officer, dan Safety Officer.'],
    tableData: { headers: ['Tipe Kotak P3K', 'Kapasitas Jumlah Tenaga Kerja', 'Contoh Item Kunci Wajib'], rows: [['Kotak P3K Bentuk A', 'Untuk unit kerja <= 25 Orang Pekerja', 'Kasa steril 20 pcs, Perban 5 cm (2 roll), Mitela 2 pcs'], ['Kotak P3K Bentuk B', 'Untuk unit kerja <= 50 Orang Pekerja', 'Kasa steril 40 pcs, Perban 5 cm (4 roll), Mitela 4 pcs'], ['Kotak P3K Bentuk C', 'Untuk unit kerja <= 100 Orang Pekerja', 'Kasa steril 40 pcs, Perban 5 cm (6 roll), Mitela 6 pcs, Buku Catatan']] },
    links: [{ href: '/kategori-pelatihan/petugas-p3k-di-tempat-kerja/', label: 'Pelatihan Petugas P3K' }],
    faqs: [{ q: 'Mengapa obat-obatan minum (tablet/sirup) dilarang dimasukkan ke dalam Kotak P3K standar Permenaker?', a: 'Karena obat minum memerlukan diagnosis dan resep resmi dari Dokter. Petugas P3K di tempat kerja hanya berwenang memberikan pertolongan pertama pada luka fisik luar dan stabilisasi kondisi darurat.' }]
  },

  // 69. Nilai Ambang Batas Kebisingan Permenaker
  {
    key: 'nilai-ambang-batas-kebisingan-permenaker',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/nilai-ambang-batas-kebisingan-permenaker/',
    title: 'Tabel Standar Nilai Ambang Batas (NAB) Kebisingan Permenaker No. 5/2018',
    h1: 'Nilai Ambang Batas (NAB) Kebisingan di Tempat Kerja: Tabel Waktu Paparan Jam Kerja, Sound Level Meter, dan Program Konservasi Pendengaran (HCP)',
    meta: 'Tabel lengkap Nilai Ambang Batas (NAB) kebisingan Permenaker No. 5 Tahun 2018: batas 85 dBA untuk 8 jam kerja, aturan Exchange Rate 3 dB, pengukuran bising personal noise dosimeter, dan proteksi earplug/earmuff.',
    imgAlt: 'Tabel grafik Nilai Ambang Batas kebisingan dan teknisi K3 mengukur desibel suara mesin kompresor dengan Sound Level Meter',
    related: ['pengukuran-kebisingan-dan-getaran', 'audiometri-dan-hearing-conservation', 'higiene-industri'],
    intro: 'Paparan bising mesin industri diatur dalam <strong>Permenaker No. 5 Tahun 2018</strong> dengan batas standar <strong>85 dBA untuk 8 jam kerja per hari</strong>. Setiap kenaikan bising 3 dBA, waktu pajanan yang diizinkan terpangkas separuhnya.',
    hazards: ['Ketulian permanen saraf telinga akibat terpapar bising >88 dBA tanpa sumbat telinga.'],
    regulations: ['Permenaker No. 5 Tahun 2018.'],
    modules: [{ name: 'Modul 1: Perhitungan Dosis Kebisingan & Aturan Halving Rate 3 dB', theory: 'Kalkulasi Noise Dose %, ekuivalen Leq, batas maksimum bising impulsif 140 dBC.', practical: 'Pengukuran kebisingan area kerja dengan Sound Level Meter Class 1.' }],
    equipment: ['Sound Level Meter Class 1 & Personal Noise Dosimeter.'],
    participants: ['Industrial Hygienist, Safety Officer, dan Dokter Hiperkes.'],
    tableData: { headers: ['Intensitas Kebisingan (dBA)', 'Waktu Pemajanan Maksimum per Hari'], rows: [['85 dBA', '8 Jam per hari'], ['88 dBA', '4 Jam per hari'], ['91 dBA', '2 Jam per hari'], ['94 dBA', '1 Jam per hari'], ['97 dBA', '30 Menit per hari'], ['100 dBA', '15 Menit per hari'], ['> 140 dBC', 'DILARANG TERPAPAR SAMA SEKALI (Bising Impulsif)'] ] },
    links: [{ href: '/kategori-pelatihan/pengukuran-kebisingan-dan-getaran/', label: 'Pelatihan Pengukuran Kebisingan' }],
    faqs: [{ q: 'Berapa desibel batas kebisingan maksimum di mana pekerja boleh bekerja selama 8 jam sehari tanpa pelindung telinga?', a: 'Batas maksimumnya adalah tepat 85 dBA (Desibel skala A) berdasarkan Permenaker No. 5 Tahun 2018.' }]
  },

  // 70. Riksa Uji dan SILO Alat Berat
  {
    key: 'riksa-uji-dan-silo-alat-berat',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/riksa-uji-dan-silo-alat-berat/',
    title: 'Prosedur Riksa Uji & Penerbitan Surat Izin Laik Operasi (SILO) Kemnaker',
    h1: 'Prosedur Riksa Uji Teknis K3 & Penerbitan SILO: Uji Statis/Dinamis Forklift, Crane, Boiler, dan Legalitas PJK3',
    meta: 'Panduan lengkap riksa uji K3 dan penerbitan Surat Izin Laik Operasi (SILO / Izin Pemakaian) Kemnaker RI: prosedur uji berkala 1 tahunan, uji beban 110-125%, dan peran PJK3 Riksa Uji resmi.',
    imgAlt: 'Pengawas ketenagakerjaan spesialis K3 memeriksa kelaikan fisik crane dan membubuhkan stiker pengesahan izin pemakaian SILO Kemnaker',
    related: ['safety-inspector', 'operator-forklift', 'operator-crane', 'inspeksi-bejana-tekan'],
    intro: 'Setiap pesawat angkat angkut, bejana tekan, pesawat tenaga produksi, dan instalasi listrik wajib menjalani pemeriksaan dan pengujian (Riksa Uji) berkala oleh <strong>PJK3 Riksa Uji resmi</strong> untuk memperoleh <strong>Surat Keterangan / Izin Pemakaian (SILO)</strong> dari Dinas Tenaga Kerja.',
    hazards: ['Alat berat dihentikan dan disegel pengawas Disnaker karena beroperasi tanpa stiker SILO aktif.'],
    regulations: ['Permenaker No. 8 Tahun 2020.', 'Permenaker No. 38 Tahun 2016.'],
    modules: [{ name: 'Modul 1: Metodologi Uji Beban & Uji Fungsi Kelaikan Alat', theory: 'Pemeriksaan visual NDT, Uji fungsi tanpa beban, Uji beban statis (Static Load Test 125%), Uji beban dinamis (Dynamic Test 110%).', practical: 'Verifikasi formulir Laporan Hasil Pemeriksaan (LHP) Riksa Uji.' }],
    equipment: ['Load Cell Digital & Solid Test Weights.'],
    participants: ['Maintenance Manager, Equipment Specialist, dan HSE Asset Coordinator.'],
    tableData: { headers: ['Jenis Peralatan Pabrik', 'Periode Uji Berkala Wajib', 'Dasar Regulasi Kemnaker'], rows: [['Forklift & Reach Truck', '1 Kali Setiap 1 Tahun', 'Permenaker No. 8/2020'], ['Mobile Crane & Overhead Crane', '1 Kali Setiap 1 Tahun (Uji Beban tiap 2 Tahun)', 'Permenaker No. 8/2020'], ['Boiler / Ketel Uap', 'Pemeriksaan Dalam Tiap 1 Tahun / Luar 2 Tahun', 'UU Uap 1930 & Permenaker 01/1988'], ['Instalasi Penyalur Petir', '1 Kali Setiap 2 Tahun', 'Permenaker No. 02/1989 / Permenaker 31/2015']] },
    links: [{ href: '/kategori-pelatihan/operator-crane/', label: 'Pelatihan Operator Crane' }],
    faqs: [{ q: 'Berapa persen beban pengujian saat dilakukan Riksa Uji Statis pada unit Crane baru?', a: 'Pengujian beban statis crane dilakukan dengan beban uji sebesar 125% dari kapasitas beban kerja aman (Safe Working Load / SWL) yang tertera pada tabel beban crane.' }]
  }
];

console.log(`Loaded ${batch5Part3Data.length} records for Batch 5 Part 3.`);
