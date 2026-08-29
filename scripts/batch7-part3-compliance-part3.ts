import { MultiArchetypeProgramDetail } from './multi-archetype-renderer';

export const batch7CompliancePagesPart3: MultiArchetypeProgramDetail[] = [
  // 17. Standar Riksa Uji Pesawat Angkat PAA
  {
    key: 'standar-riksa-uji-pesawat-angkat-paa',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/standar-riksa-uji-pesawat-angkat-paa/',
    archetype: 'compliance_guide',
    title: 'Standar Riksa Uji Pesawat Angkat & Angkut (PAA) Permenaker No. 8/2020',
    h1: 'Panduan Pemeriksaan, Pengujian Beban (Load Test), & Sertifikasi Kelayakan K3 Pesawat Angkat dan Pesawat Angkut (PAA) Sesuai Permenaker No. 8 Tahun 2020',
    meta: 'Panduan riksa uji PAA Kemnaker: uji beban statis 125% & dinamis 110% crane/forklift, NDT hook magnetik, sensor limit switch & penerbitan izin alat SIA.',
    imgAlt: 'Pengawas K3 dan inspektur PJK3 memantau pelaksanaan uji beban statis water bag load test pada keran angkat overhead crane di pabrik',
    related: ['lisensi-operator-overhead-crane', 'lisensi-operator-forklift-kemnaker', 'ahli-k3-umum-kemnaker', 'k3-keselamatan-kerja'],
    intro: 'Pesawat Angkat dan Pesawat Angkut (Overhead Crane, Mobile Crane, Forklift, Excavator, Passenger Hoist, Gondola) merupakan peralatan mekanis berisiko tinggi yang <strong>wajib menjalani pemeriksaan dan pengujian berkala (Riksa Uji K3) setiap 1 hingga 2 tahun sekali</strong> oleh Perusahaan Jasa K3 (PJK3) terakreditasi dan Pengawas K3 Spesialis Kemnaker RI untuk menerbitkan <strong>Surat Keterangan Kelaikan K3 / Surat Izin Alat (SIA)</strong>.',
    hazards: [
      '<strong>Keruntuhan Struktur Girder Crane Saat Diuji:</strong> Pengujian beban tanpa perhitungan tegangan lendutan (deflection calculation) sebelumnya.',
      '<strong>Kegagalan Rem Penahan Beban Mengakibatkan Beban Jatuh:</strong> Slip pada rem mekanis saat uji beban dinamis yang menjatuhkan beban uji puluhan ton.',
      '<strong>Pengoperasian Ilegal Alat Berat Tanpa SIA:</strong> Alat disita oleh Pengawas Disnaker dan dilarang beroperasi di proyek atau pabrik.',
      '<strong>Kait Crane Patah Mendadak (Hook Failure):</strong> Adanya retakan mikro internal pada leher hook yang tidak terdeteksi inspeksi Magnetic Particle NDT.'
    ],
    regulations: [
      '<strong>Permenaker No. 8 Tahun 2020</strong> tentang Keselamatan dan Kesehatan Kerja Pesawat Angkat dan Pesawat Angkut.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Standar ASME B30 Series & ISO 4309</strong> (Cranes - Wire Ropes - Care and Maintenance).'
    ],
    modules: [
      {
        name: 'Modul 1: Landasan Hukum Permenaker 8/2020 & Klasifikasi Riksa Uji PAA',
        theory: 'Definisi pesawat angkat & angkut, tahapan riksa uji (Pertama, Berkala 1-2 Tahun, Khusus Modifikasi/Insiden), alur penerbitan Surat Keterangan Kelaikan K3 Resmi.',
        practical: 'Audit dokumen riwayat perawatan (logbook), manual operasi pabrikan, dan sertifikat wire rope & hook.'
      },
      {
        name: 'Modul 2: Inspeksi Visual, Pengujian Non-Destruktif (NDT), & Uji Fungsi Safety Devices',
        theory: 'Metode Magnetic Particle Testing (MT) pada hook crane dan sambungan las kritis, uji fungsi Anti-Two-Block (A2B), limit switch travel, overload sensor, dan emergency stop.',
        practical: 'Praktik inspeksi keausan tali kawat baja (wire rope) menggunakan caliper dan uji fungsi limit switch overhead crane.'
      },
      {
        name: 'Modul 3: Metodologi Uji Beban Statis (125% SWL) & Uji Beban Dinamis (110% SWL)',
        theory: 'Perhitungan beban uji statis (125% dari Safe Working Load) untuk uji lendutan girder, uji beban dinamis (110% SWL) untuk menguji keandalan rem saat bergerak.',
        practical: 'Simulasi pelaksanaan Static Load Test menggunakan Water Bag / Solid Test Weight dan pengukuran lendutan (deflection) dengan alat ukur optik.'
      }
    ],
    equipment: [
      'Water Weight Load Test Bags (Kapasitas 5 - 50 Ton) dengan Load Cell Digital Terkalibrasi.',
      'Magnetic Particle Testing (MT) Yoke Kit untuk Inspeksi Cacat Retak Hook Crane.',
      'Wire Rope Caliper & Laser Deflection Level Meter untuk Pengukuran Balok Girder.',
      'Checklist Formulir Laporan Pemeriksaan Teknik PAA Standar Kemnaker.'
    ],
    participants: [
      'Inspektur Alat Angkat PJK3, Ahli K3 Spesialis PAA, Maintenance Crane & Forklift Engineer, Safety Officer Proyek/Pabrik, Plant Manager.'
    ],
    tableData: {
      headers: ['Tahapan Riksa Uji PAA', 'Persentase Beban Uji', 'Parameter Evaluasi Kritis', 'Regulasi Terkait'],
      rows: [
        ['Uji Tanpa Beban (Running Test)', '0% Beban (No Load)', 'Kelancaran motor, fungsi limit switch, tombol emergency stop', 'Permenaker 8/2020 Pasal 140'],
        ['Uji Beban Statis (Static Test)', '125% dari SWL (Beban Kerja Aman)', 'Lendutan balok girder (maksimal 1/800 s.d. 1/1000 bentang)', 'Permenaker 8/2020 Pasal 142'],
        ['Uji Beban Dinamis (Dynamic Test)', '110% dari SWL', 'Kemampuan rem menahan beban saat hoist naik/turun & traveling', 'Permenaker 8/2020 Pasal 143'],
        ['Inspeksi Cacat Retak Hook (NDT)', 'Pengujian Magnetik (MT/PT)', 'Bebas retakan pada leher hook, bukaan throat opening < 10%', 'Standar ASME B30.10']
      ]
    },
    legalPenalties: [
      'Pelanggaran Pasal 145 Permenaker 8/2020: Larangan pengoperasian alat angkat yang belum memiliki Surat Izin Alat (SIA).',
      'Pemberian Nota Penghentian Sementara Operasional Alat oleh Pengawas Disnaker Provinsi.',
      'Pembatalan pertanggungan klaim asuransi jika terjadi kecelakaan pada alat yang tidak memiliki riksa uji berlaku.'
    ],
    stepByStepGuide: [
      { step: '1. Pengajuan Jadwal Uji ke PJK3 & Disnaker', desc: 'Menyiapkan berkas manual pabrikan, spesifikasi alat, dan jadwal inspeksi lapangan.' },
      { step: '2. Pemeriksaan Visual & Uji NDT Hook', desc: 'Memeriksa tali seling, drum, struktur girder, dan uji partikel magnetik pada kait.' },
      { step: '3. Pelaksanaan Load Test 125% & 110%', desc: 'Mengangkat beban uji statis 125% dan dinamis 110% disaksikan langsung oleh Pengawas K3 Kemnaker.' },
      { step: '4. Penerbitan Laporan Teknik & Izin SIA', desc: 'Menerbitkan Buku Laporan Hasil Uji dan Surat Keterangan Kelaikan K3 (SIA) resmi.' }
    ],
    links: [
      { href: '/kategori-pelatihan/lisensi-operator-overhead-crane/', anchor: 'Sertifikasi Operator Overhead Crane' },
      { href: '/kategori-pelatihan/lisensi-operator-forklift-kemnaker/', anchor: 'Sertifikasi Operator Forklift' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 18. Standar Riksa Uji Penyalur Petir
  {
    key: 'standar-riksa-uji-penyalur-petir',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/standar-riksa-uji-penyalur-petir/',
    archetype: 'compliance_guide',
    title: 'Standar Riksa Uji Penyalur Petir & Grounding Permenaker No. 2/1989',
    h1: 'Panduan Pemeriksaan, Pengukuran Tahanan Pembumian (Grounding Test < 5 Ohm), & Sertifikasi Instalasi Penyalur Petir Gedung/Pabrik Sesuai Permenaker No. 02/1989',
    meta: 'Panduan riksa uji penyalur petir: pengukuran tahanan pembumian earth tester < 5 Ohm, radius proteksi elektroda, bak kontrol, sertifikasi izin Disnaker.',
    imgAlt: 'Teknisi listrik melakukan pengukuran nilai tahanan pembumian grounding rod penyalur petir menggunakan Digital Earth Resistance Tester',
    related: ['ahli-k3-listrik', 'standar-riksa-uji-bejana-tekan', 'ahli-k3-umum-kemnaker', 'k3-keselamatan-kerja'],
    intro: 'Indonesia terletak di daerah tropis dengan tingkat kerapatan petir (Isokeraunic Level) tertinggi di dunia, mencapai lebih dari 200 hari guruh per tahun. Sambaran petir langsung pada fasilitas pabrik, tangki BBM, atau gedung bertingkat dapat memicu ledakan, kebakaran hebat, dan kerusakan total peralatan elektronik kontrol. <strong>Permenaker No. PER.02/MEN/1989 tentang Instalasi Penyalur Petir</strong> mewajibkan seluruh instalasi proteksi petir diuji secara berkala <strong>minimal 1 tahun sekali</strong> dengan nilai tahanan pembumian <strong>wajib di bawah 5 Ohm</strong>.',
    hazards: [
      '<strong>Kebakaran Fasilitas Akibat Sambaran Petir:</strong> Arus petir puluhan ribu Ampere tidak tersalur sempurna ke tanah akibat grounding putus.',
      '<strong>Kerusakan Massal Server & Kontrol PLC (Surge Strike):</strong> Kegagalan sistem proteksi induksi sekunder (Surge Arrester) merusak sistem otomasi pabrik.',
      '<strong>Tahanan Pembumian Grounding Tinggi (> 5 Ohm):</strong> Tanah kering berbatu meningkatkan hambatan tanah yang memicu lompatan kilat (side flashing).',
      '<strong>Pencabutan Izin Bangunan & Sanksi Disnaker:</strong> Instalasi penyalur petir tidak memiliki sertifikat pengesahan resmi dari Disnaker.'
    ],
    regulations: [
      '<strong>Permenaker No. PER.02/MEN/1989</strong> tentang Pengawasan Instalasi Penyalur Petir.',
      '<strong>Permenaker No. 12 Tahun 2015</strong> tentang K3 Listrik di Tempat Kerja.',
      '<strong>Standar SNI 03-7015-2004 & IEC 62305</strong> tentang Protection Against Lightning.'
    ],
    modules: [
      {
        name: 'Modul 1: Landasan Regulasi Permenaker 02/1989 & Prinsip Proteksi Petir Eksternal',
        theory: 'Jenis sistem penyalur petir: Konvensional (Franklin Rod / Faraday Cage) vs Elektrostatis (Early Streamer Emission / ESE), penentuan sudut proteksi dan radius lindung.',
        practical: 'Audit dokumen gambar denah instalasi penyalur petir dan verifikasi ketinggian tiang terminal udara (Air Terminal).'
      },
      {
        name: 'Modul 2: Komponen Fisik Sistem Penyalur Petir & Inspeksi Visual Jalur Konduktor',
        theory: 'Spesifikasi kabel penghantar penyalur arus petir (Kabel Tembaga BC minimal 50 mm² atau Coaxial Shielded Cable), klem sambungan bebas korosi, bak kontrol (Test Box).',
        practical: 'Inspeksi fisik kontinuitas kabel down conductor dari atap gedung hingga bak kontrol di permukaan tanah.'
      },
      {
        name: 'Modul 3: Metodologi Pengukuran Tahanan Pembumian Menggunakan Digital Earth Tester',
        theory: 'Metode pengukuran 3-titik (Fall of Potential Method), penempatan elektroda bantu arus (C) dan potensial (P) dengan jarak 5-10 meter, batas nilai kelulusan < 5 Ohm.',
        practical: 'Praktik pengukuran grounding rod di bak kontrol menggunakan Digital Earth Resistance Tester dan teknik perbaikan grounding bertahanan tinggi.'
      }
    ],
    equipment: [
      'Digital Earth Resistance Tester 3-Pole / 4-Pole (Kyoritsu / Chauvin Arnoux) Terkalibrasi.',
      'Spike Elektroda Bantu Tembaga & Gulungan Kabel Uji (5m, 10m, 20m).',
      'Digital Clamp-On Ground Resistance Meter untuk Pengukuran Tanpa Melepas Sambungan.',
      'Kunci Pas Bak Kontrol & Sikat Kawat Pembersih Oksidasi Tembaga.'
    ],
    participants: [
      'Teknisi Listrik Gedung / Pabrik, Ahli K3 Listrik / PJK3, Safety Officer, Supervisor MEP Properti, Building Engineering Manager.'
    ],
    tableData: {
      headers: ['Parameter Instalasi Petir', 'Standar Wajib Permenaker 02/1989', 'Konsekuensi Jika Tidak Memenuhi', 'Metode Pengujian'],
      rows: [
        ['Nilai Tahanan Pembumian (Grounding)', 'Maksimal < 5.0 Ohm (Ideal < 2.0 Ohm)', 'Arus petir membalik menyambar struktur bangunan', 'Digital Earth Resistance Tester'],
        ['Penampang Kabel Konduktor (BC)', 'Minimal 50 mm² (Kabel Tembaga Murni)', 'Kabel meleleh atau putus saat disambar petir', 'Pengukuran Jangka Sorong'],
        ['Pemeriksaan Berkala Resmi', 'Wajib Minimal 1 Kali Setiap Tahun', 'Pemberian Nota Pemeriksaan / Denda Disnaker', 'Riksa Uji Bersama PJK3 & Disnaker'],
        ['Bak Kontrol Sambungan (Test Joint)', 'Wajib Ada di Ketinggian 1.5m s.d. Tanah', 'Pengujian nilai tahanan tidak dapat dilakukan', 'Inspeksi Visual']
      ]
    },
    legalPenalties: [
      'Pasal 56 Permenaker 02/1989: Sanksi pidana kurungan hingga 3 bulan bagi pengurus gedung yang tidak memelihara instalasi petir.',
      'Penolakan klaim asuransi kebakaran akibat sambaran petir jika instalasi tidak memiliki bukti pengesahan berkala.',
      'Pemberian teguran tertulis dan ancaman penutupan operasional gedung bertingkat oleh dinas terkait.'
    ],
    stepByStepGuide: [
      { step: '1. Pembersihan Bak Kontrol & Titik Uji', desc: 'Membuka penutup bak kontrol dan membersihkan karat oksidasi pada klem pemutus sambungan.' },
      { step: '2. Pemasangan Pasak Uji 3-Titik', desc: 'Menancapkan elektroda potensial (P) pada jarak 5m dan elektroda arus (C) pada jarak 10m dari grounding rod.' },
      { step: '3. Pengukuran Nilai Hambatan Tanah', desc: 'Menekan tombol test pada Earth Tester untuk membaca nilai Ohm digital (< 5 Ohm).' },
      { step: '4. Penerbitan Sertifikat Izin Disnaker', desc: 'PJK3 menyusun laporan resmi dan mengajukan pengesahan Surat Keterangan Kelaikan K3 Petir ke Disnaker.' }
    ],
    links: [
      { href: '/kategori-pelatihan/ahli-k3-listrik/', anchor: 'Pelatihan Sertifikasi Ahli K3 Listrik' },
      { href: '/kategori-pelatihan/standar-riksa-uji-bejana-tekan/', anchor: 'Riksa Uji Bejana Tekan' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 19. Standar K3 Rumah Sakit K3RS
  {
    key: 'standar-k3-rumah-sakit-k3rs',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/standar-k3-rumah-sakit-k3rs/',
    archetype: 'compliance_guide',
    title: 'Standar K3 Rumah Sakit (K3RS) Permenkes No. 66 Tahun 2016',
    h1: 'Panduan Implementasi Standar Keselamatan dan Kesehatan Kerja Rumah Sakit (K3RS): Sesuai Permenkes No. 66 Tahun 2016 & Standar Akreditasi KARS / STARKES',
    meta: 'Panduan K3 rumah sakit K3RS: keselamatan pasien & nakes, penanganan limbah medis B3, sistem evakuasi Code Red, dekontaminasi radiasi & akreditasi KARS.',
    imgAlt: 'Tim K3RS rumah sakit melakukan simulasi evakuasi darurat pasien ranjang dorong pada latihan tanggap darurat Code Red kebakaran',
    related: ['pengelolaan-limbah-b3-perusahaan', 'petugas-proteksi-radiasi-industri', 'p3k-pertolongan-pertama', 'k3-keselamatan-kerja'],
    intro: 'Rumah Sakit merupakan tempat kerja yang sangat kompleks dengan ribuan potensi bahaya fisik, kimiawi, biologis (patogen infeksius menular), radiasi pengion, ergonomi, dan psikososial. Sesuai <strong>Permenkes No. 66 Tahun 2016 tentang K3 Rumah Sakit</strong> dan standar akreditasi <strong>STARKES (Standar Akreditasi Kemenkes RI)</strong>, setiap fasilitas pelayanan kesehatan wajib membentuk Komite/Instalasi K3RS yang menjalankan program keselamatan lingkungan fasilitas secara menyeluruh.',
    hazards: [
      '<strong>Tertusuk Jarum Suntik Bekas Pasien (Needlestick Injury):</strong> Risiko penularan virus mematikan Hepatitis B, Hepatitis C, dan HIV bagi tenaga medis.',
      '<strong>Kebakaran di Ruang Rawat Inap & ICU (Code Red Failure):</strong> Evakuasi pasien kritis dengan ventilator terhambat saat lorong terhalang ranjang.',
      '<strong>Paparan Radiasi Ruang Radiologi & Kedokteran Nuklir:</strong> Dinding timbal ruang rontgen/CT-Scan bocor menembus ke ruang tunggu pasien.',
      '<strong>Infeksi Nosokomial Silang (Healthcare-Associated Infections / HAIs):</strong> Kegagalan sistem ventilasi ruang isolasi tekanan negatif airborne (TBC).'
    ],
    regulations: [
      '<strong>Permenkes No. 66 Tahun 2016</strong> tentang Keselamatan dan Kesehatan Kerja Rumah Sakit.',
      '<strong>Permenkes No. 7 Tahun 2019</strong> tentang Kesehatan Lingkungan Rumah Sakit.',
      '<strong>Standar Akreditasi Rumah Sakit Kemenkes RI (STARKES - Bab MFK)</strong>.'
    ],
    modules: [
      {
        name: 'Modul 1: Manajemen Fasilitas dan Keselamatan (MFK) Sesuai Standar Akreditasi',
        theory: 'Enam pilar MFK: Keselamatan & Keamanan, Bahan Berbahaya B3, Manajemen Bencana (Disaster Plan), Proteksi Kebakaran, Peralatan Medis, dan Sistem Utilitas.',
        practical: 'Penyusunan dokumen Program Kerja Tahunan K3RS dan Hospital Safety Index (HSI).'
      },
      {
        name: 'Modul 2: Penanganan Limbah Medis B3, Sitotoksik, & Prosedur Tertusuk Jarum (NSI)',
        theory: 'Pemisahan kantong sampah medis (Kuning: Medis Infeksius, Ungu: Sitotoksik, Coklat: Farmasi, Safety Box: Jarum), alur tatalaksana pasca pajanan (Profilaksis Pasca Pajanan / PPP).',
        practical: 'Simulasi alur penanganan darurat perawat tertusuk jarum suntik terkontaminasi dan pengisian form insiden klinis.'
      },
      {
        name: 'Modul 3: Sistem Panggilan Darurat Medis (Emergency Hospital Codes) & Evakuasi Pasien',
        theory: 'Standar kode darurat: Code Red (Kebakaran), Code Blue (Henti Jantung Dewasa), Code Black (Ancaman Bom), Code Pink (Penculikan Bayi), teknik evakuasi pasien tirah baring.',
        practical: 'Gelar simulasi drill Code Red di ruang rawat inap dengan evakuasi pasien menggunakan selimut tahan api (Evacuation Sheet).'
      }
    ],
    equipment: [
      'Safety Box Biohazard Khusus Jarum Suntik Medis & Kantong Plastik Kuning Infeksius.',
      'Evacuation Sheet / Evacuation Sledge Khusus Evakuasi Pasien Tangga Darurat.',
      'Spill Kit Medis Tumpahan Darah & Cairan Tubuh (Chlorine Granules, Goggles, Apron).',
      'Panel Kode Darurat Rumah Sakit (Code Blue System / Nurse Call Intercom).'
    ],
    participants: [
      'Ketua & Anggota Komite K3RS, Perawat / Kepala Ruangan Rawat Inap, Dokter PPI, Staf Sanitasi & Kesling, Kepala Satpam Rumah Sakit, Tim IPSRS.'
    ],
    tableData: {
      headers: ['Kode Darurat Rumah Sakit', 'Kondisi Bahaya / Kejadian', 'Responden Kritis Pertama', 'Protokol Tindakan Standar'],
      rows: [
        ['Code Red (Merah)', 'Kebakaran / Asap Tebal di Ruangan', 'Regu Pemadam Ruangan & Seluruh Staf', 'Pindahkan Pasien (R.A.C.E), Padamkan Api, Evakuasi'],
        ['Code Blue (Biru)', 'Pasien Mengalami Henti Jantung / Nafas', 'Dokter Jaga & Tim Resusitasi CPR ICU', 'Membawa Crash Cart, Defibrilator, Resusitasi Jantung'],
        ['Code Pink (Merah Muda)', 'Penculikan Bayi / Anak di Ruang Bersalin', 'Petugas Keamanan (Satpam Pintu Keluar)', 'Kunci Otomatis Seluruh Pintu Gerbang Keluar RS'],
        ['Code Yellow (Kuning)', 'Kesiapsiagaan Bencana Eksternal / Massal', 'Direksi RS, Tim IGD, & Tim Triase', 'Aktivasi Hospital Disaster Plan, Buka Tenda Triase']
      ]
    },
    legalPenalties: [
      'Penurunan predikat akreditasi rumah sakit (gagal Akreditasi Paripurna) jika elemen MFK K3RS tidak terpenuhi.',
      'Sanksi administratif dari Dinas Kesehatan berupa pembekuan izin operasional fasilitas pelayanan kesehatan.',
      'Tuntutan hukum malpraktik dan ganti rugi jika pasien mengalami cedera atau kematian akibat kegagalan fasilitas keselamatan RS.'
    ],
    stepByStepGuide: [
      { step: '1. Pembentukan Struktur Komite K3RS Resmi', desc: 'Menerbitkan Surat Keputusan Direktur Rumah Sakit tentang pembentukan Komite K3RS lintas profesi.' },
      { step: '2. Penyusunan Dokumen MFK & HSI', desc: 'Menyusun pedoman keselamatan fasilitas, inventarisasi B3 medis, dan peta jalur evakuasi bed pasien.' },
      { step: '3. Pelatihan Seluruh Staf Medis & Non-Medis', desc: 'Melatih 100% karyawan tentang penggunaan APAR, BHD/CPR Code Blue, dan tumpahan darah.' },
      { step: '4. Pelaksanaan Simulasi Drill Akreditasi', desc: 'Menyelenggarakan simulasi tanggap darurat bencana internal/eksternal minimal 1 tahun sekali.' }
    ],
    links: [
      { href: '/kategori-pelatihan/pengelolaan-limbah-b3-perusahaan/', anchor: 'Pengelolaan Limbah B3 Perusahaan' },
      { href: '/kategori-pelatihan/petugas-proteksi-radiasi-industri/', anchor: 'Sertifikasi Petugas Proteksi Radiasi' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 20. Sistem Manajemen SMKP Minerba
  {
    key: 'sistem-manajemen-smkp-minerba',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/sistem-manajemen-smkp-minerba/',
    archetype: 'compliance_guide',
    title: 'Sistem Manajemen Keselamatan Pertambangan (SMKP) Kepmen ESDM 1827/2018',
    h1: 'Panduan Penerapan & Audit Sistem Manajemen Keselamatan Pertambangan Minerba (SMKP) Sesuai Kepmen ESDM No. 1827 K/30/MEM/2018 & Kepdirjen Minerba No. 185.K/37.04/DJB/2019',
    meta: 'Panduan audit SMKP Minerba: 7 elemen keselamatan pertambangan, peran KTT & PJO, audit internal SMKP, keselamatan operasional KO & sanksi tambang.',
    imgAlt: 'Kepala Teknik Tambang KTT dan auditor internal SMKP memeriksa operasional alat berat di area tambang batubara terbuka',
    related: ['operator-dump-truck-hauler-tambang', 'alat-berat-excavator-dump-truck', 'fatigue-management-pekerja-shift', 'k3-keselamatan-kerja'],
    intro: 'Sistem Manajemen Keselamatan Pertambangan (SMKP Minerba) merupakan sistem manajemen keselamatan kerja mandiri yang diwajibkan secara mutlak bagi seluruh pemegang Izin Usaha Pertambangan (IUP), Izin Usaha Jasa Pertambangan (IUJP), dan Kontrak Karya melalui <strong>Kepmen ESDM No. 1827 K/30/MEM/2018</strong>. SMKP mencakup dua pilar pokok: Keselamatan dan Kesehatan Kerja Pertambangan (K3 Pertambangan) serta Keselamatan Operasional Pertambangan (KO Pertambangan).',
    hazards: [
      '<strong>Longsor Tebing Tambang Terbuka (Slope Failure):</strong> Runtuhnya lereng galian penambangan yang menimbun alat berat dan operator di pit dasar.',
      '<strong>Penghentian Sementara Izin Usaha Tambang oleh KaIT:</strong> Pemberian sanksi administratif penghentian operasional oleh Inspektur Tambang ESDM.',
      '<strong>Kecelakaan Tambang Berakibat Mati (Fatality LTI):</strong> Tabrakan antar haul truck atau pekerja terlindas alat berat di jalur hauling.',
      '<strong>Ledakan Gas Metana & Debu Batubara di Tambang Bawah Tanah:</strong> Konsentrasi gas metana > 1% yang terpicu percikan api peralatan tambang.'
    ],
    regulations: [
      '<strong>Kepmen ESDM No. 1827 K/30/MEM/2018</strong> tentang Pedoman Pelaksanaan Kaidah Teknik Pertambangan yang Baik (Lampiran IV & V).',
      '<strong>Kepdirjen Minerba No. 185.K/37.04/DJB/2019</strong> tentang Petunjuk Teknis Pelaksanaan Keselamatan Pertambangan dan Pelaksanaan, Penilaian, dan Pelaporan SMKP.',
      '<strong>UU No. 3 Tahun 2020</strong> tentang Perubahan atas UU No. 4/2009 tentang Pertambangan Mineral dan Batubara.'
    ],
    modules: [
      {
        name: 'Modul 1: Tujuh Elemen Pokok SMKP Minerba & Pembagian Peran KTT / PJO',
        theory: 'Elemen I (Kebijakan), Elemen II (Perencanaan), Elemen III (Organisasi & Personel), Elemen IV (Implementasi), Elemen V (Pemantauan, Evaluasi, & Tindak Lanjut), Elemen VI (Dokumentasi), Elemen VII (Tinjauan Manajemen), tanggung jawab Kepala Teknik Tambang (KTT) & Penanggung Jawab Operasional (PJO).',
        practical: 'Penyusunan matriks pemetaan dokumen 7 elemen SMKP untuk perusahaan kontraktor jasa pertambangan.'
      },
      {
        name: 'Modul 2: Pilar Keselamatan Operasional (KO) Pertambangan & Manajemen Perubahan (MOC)',
        theory: 'Kelayakan sarana prasarana tambang (SPI Alat), kompetensi tenaga teknik khusus tambang, evaluasi teknis kajian geoteknik lereng, SOP Management of Change (MOC).',
        practical: 'Audit kelengkapan dokumen Surat Izin Mengemudi Perusahaan (KIMPER) dan buku catatan riksa uji berkala armada haul truck.'
      },
      {
        name: 'Modul 3: Metodologi Audit Internal SMKP Minerba & Pelaporan ke Ditjen Minerba',
        theory: 'Pedoman pembobotan skor 7 elemen SMKP (total nilai 100%), kriteria temuan audit, penyusunan laporan audit berkala ke Kepala Pelaksana Inspeksi Tambang (KaIT).',
        practical: 'Simulasi pelaksanaan audit internal SMKP di area workshop tambang dan penyusunan Lembar Rekomendasi Audit (LRA).'
      }
    ],
    equipment: [
      'Checklist Matriks Audit Internal SMKP Minerba Resmi Kepdirjen 185/2019.',
      'Software / Spreadsheet Penilaian Skor Pembobotan 7 Elemen SMKP.',
      'Formulir Lembar Rekomendasi Audit (LRA) & Matriks CAPA Pertambangan.',
      'Buku Pedoman Kaidah Teknik Pertambangan yang Baik Kementerian ESDM.'
    ],
    participants: [
      'Kepala Teknik Tambang (KTT), Penanggung Jawab Operasional (PJO), Pengawas Operasional Pertama (POP), Pengawas Operasional Madya (POM), HSE Manager Tambang.'
    ],
    tableData: {
      headers: ['Tujuh Elemen SMKP Minerba', 'Bobot Penilaian Elemen', 'Fokus Dokumen Kritis', 'Status Kewajiban'],
      rows: [
        ['Elemen I: Kebijakan', '200 Poin (20%)', 'Komitmen Direksi, Tinjauan Kebijakan Berkala', 'Wajib Disahkan KTT'],
        ['Elemen II: Perencanaan', '200 Poin (20%)', 'IBPR (Identifikasi Bahaya & Penilaian Risiko), Rencana Kerja & Anggaran Biaya (RKAB)', 'Wajib Sesuai Budget'],
        ['Elemen III: Organisasi & Personel', '150 Poin (15%)', 'SK Pengangkatan KTT/PJO, Sertifikasi POP/POM/POU, Komite Keselamatan Pertambangan', 'Audit Legalitas'],
        ['Elemen IV: Implementasi', '200 Poin (20%)', 'Pelaksanaan SOP Kerja Aman, KO Tambang, SPI Alat, Manajemen Keadaan Darurat', 'Verifikasi Lapangan'],
        ['Elemen V: Pemantauan & Evaluasi', '150 Poin (15%)', 'Inspeksi K3, Audit Internal SMKP, Investigasi Kecelakaan Tambang', 'Wajib Minimal 1x/Tahun'],
        ['Elemen VI: Dokumentasi', '50 Poin (5%)', 'Manual SMKP, Pengendalian Dokumen & Rekaman', 'Standar ISO Terpadu'],
        ['Elemen VII: Tinjauan Manajemen', '50 Poin (5%)', 'Rapat Evaluasi Tahunan Bersama Manajemen Puncak', 'Peningkatan Berkelanjutan']
      ]
    },
    legalPenalties: [
      'Pemberian Surat Peringatan hingga Penghentian Kegiatan Operasional Penambangan oleh Inspektur Tambang ESDM.',
      'Pencabutan Izin Usaha Jasa Pertambangan (IUJP) bagi kontraktor yang gagal menerapkan SMKP.',
      'Tanggung jawab pidana dan pencopotan sertifikat KTT/PJO jika terjadi kecelakaan tambang fatal akibat kelalaian sistem.'
    ],
    stepByStepGuide: [
      { step: '1. Pengangkatan Tim Auditor SMKP Terdaftar', desc: 'Menunjuk personel yang telah lulus pelatihan Auditor SMKP bersertifikat resmi Kementerian ESDM.' },
      { step: '2. Penyusunan Manual & SOP 7 Elemen', desc: 'Melengkapi seluruh pedoman, IBPR risiko pertambangan, dan prosedur keselamatan operasional.' },
      { step: '3. Pelaksanaan Audit Internal Tahunan', desc: 'Menyelenggarakan audit internal komprehensif seluruh area penambangan, hauling, dan processing plant.' },
      { step: '4. Pelaporan Resmi ke KaIT Ditjen Minerba', desc: 'Mengirimkan buku laporan hasil audit SMKP bertandatangan KTT ke Kementerian ESDM setiap akhir tahun.' }
    ],
    links: [
      { href: '/kategori-pelatihan/operator-dump-truck-hauler-tambang/', anchor: 'Pelatihan Driver Dump Truck Tambang' },
      { href: '/kategori-pelatihan/alat-berat-excavator-dump-truck/', anchor: 'K3 Alat Berat Pertambangan' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 21. Fatigue Management Pekerja Shift
  {
    key: 'fatigue-management-pekerja-shift',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/fatigue-management-pekerja-shift/',
    archetype: 'compliance_guide',
    title: 'Fatigue Management System: Pengendalian Kelelahan Kerja Operator Shift',
    h1: 'Panduan Implementasi Fatigue Risk Management System (FRMS) untuk Pengendalian Kelelahan Kerja Operator Shift Malam & Pengemudi Alat Berat Tambang/Logistik',
    meta: 'Panduan fatigue management FRMS: ritme sirkadian tubuh, deteksi dini microsleep kamera DSS, pola shift kerja aman, tes reaksi fit to work & kepatuhan ESDM.',
    imgAlt: 'Pengemudi alat berat menjalani pemeriksaan waktu reaksi dan tes skrining kelelahan sebelum memulai shift malam di pos fatigue tambang',
    related: ['operator-dump-truck-hauler-tambang', 'sistem-manajemen-smkp-minerba', 'pemeriksaan-kesehatan-kerja-mcu', 'k3-keselamatan-kerja'],
    intro: 'Kelelahan Kerja (Fatigue) merupakan bahaya laten tak kasat mata yang bertanggung jawab atas lebih dari 65% insiden kecelakaan fatal alat berat di sektor pertambangan, logistik transportasi jarak jauh, kilang migas, dan manufaktur continuous process. <strong>Fatigue Risk Management System (FRMS)</strong> adalah pendekatan berbasis sains sirkadian untuk mengidentifikasi, memitigasi, dan mengendalikan risiko kantuk mendadak (microsleep) pada pekerja shift malam.',
    hazards: [
      '<strong>Microsleep Mengakibatkan Tabrakan Maut:</strong> Pengemudi kehilangan kesadaran selama 3-5 detik saat melaju di jalan hauling tambang.',
      '<strong>Penurunan Drastis Waktu Reaksi Motorik:</strong> Pekerja yang lelah mengambil keputusan lambat hingga tangan terjepit mesin berputar.',
      '<strong>Gangguan Kesehatan Kardiovaskular Kronis:</strong> Pola shift malam yang kacau memicu penyakit jantung koroner dan sleep apnea.',
      '<strong>Gagal Lolos Audit K3 Pertambangan SMKP:</strong> Ketiadaan SOP pengendalian fatigue pengemudi saat verifikasi Inspektur Tambang.'
    ],
    regulations: [
      '<strong>Kepmen ESDM No. 1827 K/30/MEM/2018</strong> (Kewajiban Pengelolaan Kelelahan Kerja / Fatigue Management).',
      '<strong>Permenaker No. 5 Tahun 2018</strong> tentang K3 Lingkungan Kerja (Faktor Ergonomi & Psikologi).',
      '<strong>UU No. 13 Tahun 2003</strong> tentang Ketenagakerjaan (Pasal Waktu Kerja dan Waktu Istirahat).'
    ],
    modules: [
      {
        name: 'Modul 1: Fisiologi Kelelahan, Ritme Sirkadian Tubuh, & Arsitektur Tidur',
        theory: 'Siklus sirkadian 24 jam, fase tidur Non-REM vs REM, dampak hutang tidur (Sleep Debt), titik rawan sirkadian (Circadian Low / Jam Kritis 02.00 - 05.00 pagi).',
        practical: 'Audit formulir logbook jam tidur harian pekerja (Sleep Diary) dan pemetaan hutang tidur mingguan.'
      },
      {
        name: 'Modul 2: Teknologi Pemantauan Kelelahan (Fatigue Detection Technology)',
        theory: 'Prinsip kerja kamera pendeteksi kedipan mata (Driver Safety System / DSS / SmartCap), tes waktu reaksi komputerisasi (Reaction Time Test / PVT), sensor gelang smartband.',
        practical: 'Simulasi penggunaan alat uji reaksi kecepatan tangan (Speed Anticipation Test) pada operator sebelum diizinkan mengemudi.'
      },
      {
        name: 'Modul 3: Desain Pola Shift Kerja Ergonomis & Penataan Fasilitas Rest Bay / Mess',
        theory: 'Prinsip rotasi maju (Forward Rotation: Pagi -> Siang -> Malam), batas maksimal shift malam berturut-turut (maksimal 2-3 malam), standar mess tidur kedap suara & gelap.',
        practical: 'Penyusunan jadwal roster kerja shift anti-fatigue dan audit kelayakan fasilitas ruang istirahat (Rest Bay / Power Nap Room).'
      }
    ],
    equipment: [
      'Driver Safety System (DSS) Camera Simulator dengan Facial Eye-Closure Tracking.',
      'Psychomotor Vigilance Task (PVT) / Reaction Time Test Unit Digital.',
      'Actigraphy Smartband Pengukur Durasi & Kualitas Tidur.',
      'Formulir Skrining Kualitas Tidur (Epworth Sleepiness Scale / ESS).'
    ],
    participants: [
      'Superintendent HSE Tambang/Logistik, Dokter Perusahaan / Paramedis, Dispatcher Pengatur Armada, Supervisor Shift Pabrik, HR Officer Roster Kerja.'
    ],
    tableData: {
      headers: ['Tingkat Risiko Kelelahan', 'Indikator / Skor Skrining', 'Status Kelaikan Kerja', 'Tindakan Intervensi Wajib'],
      rows: [
        ['Risiko Rendah (Fit to Work)', 'Tidur > 7 Jam, Skor ESS < 7, PVT Lulus', 'Bekerja Penuh Normal', 'Tetap Monitor Normal di Lapangan'],
        ['Risiko Sedang (Fatigue Awal)', 'Tidur 5 - 6 Jam, Mata Mengantuk Ringan', 'Bekerja dengan Pengawasan', 'Diberikan Suplemen Vitamin / Kopi, Peringatan Pengawas'],
        ['Risiko Tinggi (Unfit Fatigue)', 'Tidur < 5 Jam, Gagal Tes Reaksi PVT', 'DILARANG MENGEMUDI / STOP KERJA', 'Wajib Power Nap 30-45 Menit di Rest Bay'],
        ['Risiko Kritis (Microsleep Alert)', 'Kamera DSS Mendeteksi Mata Tertutup > 2 Detik', 'EVAKUASI SEGERA DARI KABIN ALAT', 'Ganti Driver Cadangan, Bawa ke Klinik Medis']
      ]
    },
    caseStudy: 'Sebuah kontraktor tambang nikel di Konawe menurunkan angka insiden alat berat hingga 80% dalam 12 bulan setelah mewajibkan tes skrining waktu reaksi pra-shift dan menyediakan fasilitas power nap 30 menit pada pukul 03.00 pagi.',
    stepByStepGuide: [
      { step: '1. Kebijakan & Roster Shift Kerja Ergonomis', desc: 'Menetapkan jam kerja maksimal 12 jam dan membatasi shift malam berturut-turut.' },
      { step: '2. Skrining Pra-Shift (Fit to Work Check)', desc: 'Memeriksa durasi tidur minimal 7 jam dan melakukan tes reaksi di pos keberangkatan.' },
      { step: '3. Pemantauan Real-Time Kamera DSS', desc: 'Memasang sensor pendeteksi kantuk di setiap kabin truk yang otomatis membunyikan alarm kabin.' },
      { step: '4. Fasilitas Istirahat & Edukasi Sleep Hygiene', desc: 'Menyediakan ruang tidur mess yang dingin, gelap, kedap suara, serta seminar higienitas tidur.' }
    ],
    links: [
      { href: '/kategori-pelatihan/operator-dump-truck-hauler-tambang/', anchor: 'Pelatihan Driver Dump Truck Tambang' },
      { href: '/kategori-pelatihan/sistem-manajemen-smkp-minerba/', anchor: 'Sistem Manajemen SMKP Minerba' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 22. Matriks Kompetensi K3 Per Divisi
  {
    key: 'matriks-kompetensi-k3-per-divisi',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/matriks-kompetensi-k3-per-divisi/',
    archetype: 'compliance_guide',
    title: 'Penyusunan Matriks Kompetensi & Kebutuhan Training K3 (TNA) Per Divisi',
    h1: 'Panduan Penyusunan Matriks Kompetensi K3 & Training Needs Analysis (TNA) Wajib Berbasis Jabatan untuk Divisi HR, Produksi, Maintenance, Warehouse, & HSE',
    meta: 'Panduan matriks kompetensi K3 per divisi: analisis TNA training K3 wajib regulasi Kemnaker, sertifikasi BNSP, tracker masa berlaku SIO & anggaran K3.',
    imgAlt: 'HR Manager dan HSE Manager menyusun tabel matriks kebutuhan pelatihan K3 tahunan dan jadwal sertifikasi operator pabrik',
    related: ['panduan-audit-smk3-pp-50-2012', 'ahli-k3-umum-kemnaker', 'tata-cara-pelaporan-p2k3-disnaker', 'k3-keselamatan-kerja'],
    intro: 'Kegagalan pemenuhan sertifikasi lisensi wajib K3 (SIO/SKP) bukan hanya melanggar hukum ketenagakerjaan, tetapi juga menjadi temuan mayor dalam audit SMK3, ISO 45001, dan sertifikasi ekspor internasional. <strong>Matriks Kompetensi K3 (Safety Training Matrix)</strong> adalah dokumen master yang memetakan seluruh kualifikasi wajib, lisensi regulasi, dan pelatihan penyegaran yang harus dimiliki setiap pemangku jabatan di seluruh departemen perusahaan.',
    hazards: [
      '<strong>Penyegelan Alat & Denda Operasional oleh Disnaker:</strong> Operator mengoperasikan forklift/boiler/crane tanpa SIO resmi Kemnaker.',
      '<strong>Temuan Ketidaksesuaian Mayor Audit SMK3 PP 50/2012:</strong> Ketiadaan analisis kebutuhan pelatihan (TNA) terstruktur di departemen HRD.',
      '<strong>Pemborosan Anggaran Pelatihan Tanpa Sasaran Jelas:</strong> Mengirim karyawan pelatihan K3 yang tidak sesuai dengan profil bahaya pekerjaannya.',
      '<strong>Sertifikat & Lisensi SIO Kedaluwarsa Tanpa Terpantau:</strong> Kegagalan memperpanjang lisensi 5 tahunan yang membatalkan keabsahan hukum operator.'
    ],
    regulations: [
      '<strong>PP No. 50 Tahun 2012</strong> tentang Penerapan SMK3 (Kriteria 12.1 Pengembangan Keterampilan & Kemampuan).',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja (Pasal 9 Pembinaan K3).',
      '<strong>Standar ISO 45001:2018</strong> Klausul 7.2 (Competence).'
    ],
    modules: [
      {
        name: 'Modul 1: Metodologi Training Needs Analysis (TNA) K3 Berbasis Profil Bahaya Jabatan',
        theory: 'Pemetaan matriks risiko HIRADC per posisi kerja, identifikasi peraturan perundangan wajib (Mandatory Legal Requirements vs Good Practice), penentuan gap kompetensi.',
        practical: 'Penyusunan tabel gap analysis kompetensi K3 untuk posisi Teknisi Listrik, Operator Gudang, dan Supervisor Pabrik.'
      },
      {
        name: 'Modul 2: Struktur Matriks Kompetensi K3 Lintas Departemen',
        theory: 'Pembagian sertifikasi wajib: Manajemen Puncak (Awareness SMK3), HR (Hiperkes/P2-HIV), Maintenance (LOTO, Listrik, Welder, Bejana), Logistik (Forklift, Rigging, Defensive Driving), Tim ERT (Damkar, P3K, Confined Space).',
        practical: 'Pembuatan spreadsheet master Safety Training Matrix dengan formula otomatis penanda masa kedaluwarsa lisensi.'
      },
      {
        name: 'Modul 3: Evaluasi Efektivitas Pelatihan (Model Kirkpatrick) & Perhitungan ROI K3',
        theory: 'Empat level evaluasi Kirkpatrick (Level 1: Reaksi Peserta, Level 2: Pembelajaran/Post-Test, Level 3: Perubahan Perilaku di Lantai Kerja, Level 4: Penurunan Angka Kecelakaan/ROI).',
        practical: 'Simulasi audit observasi perilaku kerja pasca pelatihan (3 bulan pasca training) dan penyusunan laporan evaluasi ke Direksi.'
      }
    ],
    equipment: [
      'Master Template Spreadsheet Matriks Kompetensi K3 (Excel dengan Formula Reminder Otomatis).',
      'Kamus Standar Kompetensi K3 Indonesia (SKKNI Bidang K3 Lengkap).',
      'Formulir Evaluasi Efektivitas Pelatihan Level 3 Kirkpatrick (Behavioral Audit Form).',
      'Daftar Direktori Lisensi Wajib Kemnaker, BNSP, dan ESDM Terkini.'
    ],
    participants: [
      'HR Director / Training & Development Manager, HSE Manager, Kepala Departemen Operasional, Sekretaris P2K3, Tim Pengembang SDM Korporat.'
    ],
    tableData: {
      headers: ['Departemen / Jabatan', 'Pelatihan & Lisensi K3 Wajib Regulasi', 'Pelatihan Penunjang Kompetensi', 'Frekuensi Pembaruan / Refreshment'],
      rows: [
        ['Divisi Logistik / Gudang', 'Lisensi Operator Forklift & Reach Truck (Permenaker 8/2020)', 'Defensive Driving Gudang, Ergonomi Manual Lifting', 'Perpanjangan SIO Tiap 5 Tahun'],
        ['Divisi Maintenance / Utilitas', 'Ahli K3 Listrik, Teknisi LOTO, Welder Kelas I/II, Operator Boiler', 'Higiene Industri, Riksa Uji Bejana Tekan', 'Perpanjangan SIO Tiap 3 - 5 Tahun'],
        ['Divisi Produksi / Lapangan', 'Petugas Ruang Terbatas (Confined Space), Tenaga Bangunan Tinggi', '5S Kaizen, Safety Hazard Identification, JSA', 'Penyegaran 1 - 2 Tahun Sekali'],
        ['Divisi HR & Umum (GA)', 'Dokter/Paramedis Hiperkes, Sertifikasi Petugas P3K & Damkar D', 'Investigasi SCAT, Program P2-HIV/AIDS', 'Perpanjangan Lisensi 3 Tahun'],
        ['Top Management / Supervisor', 'Supervisory Safety Leadership, Audit Internal SMK3 PP 50/2012', 'Root Cause Analysis, Legal Compliance K3', 'Penyegaran Kebijakan Tahunan']
      ]
    },
    legalPenalties: [
      'Pasal 86 UU No. 13/2003: Kewajiban pengusaha memfasilitasi pembinaan kompetensi keselamatan kerja pekerja.',
      'Sanksi diskualifikasi perusahaan dalam tender jasa migas/konstruksi jika matriks kompetensi personel tidak terpenuhi.',
      'Audit SMK3 menghasilkan temuan mayor pada kriteria pelatihan jika tidak memiliki dokumen TNA tertulis.'
    ],
    stepByStepGuide: [
      { step: '1. Inventarisasi Seluruh Jabatan Kerja', desc: 'Mencatat seluruh daftar posisi kerja di HRIS mulai dari operator lapangan hingga level manajerial.' },
      { step: '2. Pemetaan Regulasi & Lisensi Wajib', desc: 'Menghubungkan setiap posisi dengan regulasi Permenaker terkait (misal Teknisi Listrik -> Permenaker 12/2015).' },
      { step: '3. Input Data ke Master Matrix Spreadsheet', desc: 'Memasukkan nama karyawan, nomor sertifikat, tanggal terbit, dan tanggal kedaluwarsa lisensi.' },
      { step: '4. Penganggaran & Eksekusi Training Tahunan', desc: 'Menyusun Rencana Anggaran Biaya (RAB) pelatihan K3 tahunan dan memonitor jadwal refresher.' }
    ],
    links: [
      { href: '/kategori-pelatihan/panduan-audit-smk3-pp-50-2012/', anchor: 'Panduan Audit SMK3 PP 50/2012' },
      { href: '/kategori-pelatihan/ahli-k3-umum-kemnaker/', anchor: 'Pelatihan Ahli K3 Umum Kemnaker' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 23. Pengukuran Safety Culture Maturity
  {
    key: 'pengukuran-safety-culture-maturity',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/pengukuran-safety-culture-maturity/',
    archetype: 'compliance_guide',
    title: 'Pengukuran Safety Culture Maturity: Model Hearts and Minds Industri',
    h1: 'Panduan Evaluasi & Pengukuran Tingkat Kematangan Budaya Keselamatan Kerja (Safety Culture Maturity Level) Menggunakan Model Hearts and Minds',
    meta: 'Panduan pengukuran safety culture maturity: 5 tingkatan budaya K3 (Pathological hingga Generative), kuesioner survei iklim keselamatan & roadmap perbaikan.',
    imgAlt: 'Manajemen pabrik mempresentasikan grafik tangga kematangan budaya keselamatan kerja Hearts and Minds kepada seluruh kepala departemen',
    related: ['panduan-audit-smk3-pp-50-2012', 'matriks-kompetensi-k3-per-divisi', 'ahli-k3-umum-kemnaker', 'k3-keselamatan-kerja'],
    intro: 'Menerapkan prosedur keselamatan di atas kertas tidak menjamin nol kecelakaan jika pola pikir dan perilaku pekerja sehari-hari masih mengabaikan bahaya saat tidak diawasi. <strong>Safety Culture Maturity Model (Hearts and Minds Model yang dikembangkan oleh Shell dan Energy Institute)</strong> adalah kerangka kerja ilmiah terkemuka di dunia untuk mengukur sejauh mana keselamatan telah terinternalisasi menjadi nilai hidup (culture) di seluruh lapisan organisasi.',
    hazards: [
      '<strong>Budaya Menyembunyikan Kecelakaan (Underreporting Incident):</strong> Pekerja takut melaporkan near-miss karena takut disalahkan atau dihukum manajemen.',
      '<strong>Safety Hanya Formalitas Audit (Paper-Based Safety):</strong> Prosedur JSA dan permit lengkap di atas meja namun diabaikan total saat bekerja di lapangan.',
      '<strong>Sindrom Kepuasan Diri (Safety Complacency):</strong> Merasa fasilitas sudah aman bertahun-tahun sehingga mengabaikan tanda-tanda bahaya mikro.',
      '<strong>Jurang Komunikasi Manajemen vs Lapangan (Management-Worker Gap):</strong> Ketidakpercayaan buruh terhadap komitmen manajemen dalam menyelesaikan temuan bahaya.'
    ],
    regulations: [
      '<strong>PP No. 50 Tahun 2012</strong> tentang Penerapan SMK3 (Prinsip Kepemimpinan & Komitmen).',
      '<strong>Standar ISO 45001:2018</strong> Klausul 5.1 (Leadership and Worker Participation).',
      '<strong>Pedoman Energy Institute & DuPont Bradley Curve</strong> tentang Behavioral Safety Culture.'
    ],
    modules: [
      {
        name: 'Modul 1: Lima Tangga Kematangan Budaya Keselamatan (The 5 Levels of Safety Culture)',
        theory: 'Tangga Kematangan: Level 1 Pathological (Siapa peduli selama tidak tertangkap), Level 2 Reactive (Bertindak hanya setelah ada kecelakaan), Level 3 Calculative (Banyak sistem & angka aturan), Level 4 Proactive (Pemimpin & pekerja aktif mencegah bahaya), Level 5 Generative (Keselamatan adalah cara kita berbisnis).',
        practical: 'Pemetaan posisi budaya keselamatan perusahaan saat ini menggunakan kuesioner asesmen mandiri.'
      },
      {
        name: 'Modul 2: Metodologi Survei Iklim Keselamatan (Safety Climate Survey) & Focus Group Discussion (FGD)',
        theory: 'Penyusunan instrumen kuesioner persepsi keselamatan 24 dimensi, teknik wawancara mendalam FGD tanpa intimidasi (Just Culture), triangulasi data lapangan.',
        practical: 'Simulasi pelaksanaan survei digital anonim pada 50 sampel pekerja dan pengolahan skor rata-rata dimensi budaya.'
      },
      {
        name: 'Modul 3: Penyusunan Roadmap Transformasi Budaya Keselamatan (Safety Culture Roadmap 3-5 Tahun)',
        theory: 'Strategi migrasi dari Calculative menuju Proactive, program intervensi perilaku (Behavior-Based Safety / STOP Card), peran Management Walkthrough (MWT).',
        practical: 'Penyusunan dokumen Program Aksi Transformasi Budaya K3 yang disahkan oleh Board of Directors.'
      }
    ],
    equipment: [
      'Kuesioner Safety Culture Maturity Index (SCMI) 24 Dimensi Terstandarisasi.',
      'Software Analisis Statistik Persepsi Iklim Keselamatan Kerja.',
      'Panduan Fasilitator Focus Group Discussion (FGD Facilitator Guidebook).',
      'Template Roadmap Transformasi Budaya Keselamatan 3 Tahun Korporat.'
    ],
    participants: [
      'Board of Directors / Plant Manager, HSE Manager, HR Manager, Kepala Serikat Pekerja, Safety Committee P2K3, dan Change Management Agent.'
    ],
    tableData: {
      headers: ['Tingkatan Budaya K3', 'Pola Pikir Dominan Karyawan', 'Respons Terhadap Temuan Bahaya', 'Tingkat Kinerja Keselamatan'],
      rows: [
        ['Level 1: Pathological', '"Siapa peduli selama tidak tertangkap basah"', 'Menyembunyikan insiden, menyalahkan korban', 'Tingkat Kecelakaan Sangat Tinggi'],
        ['Level 2: Reactive', '"Keselamatan penting, tetapi bertindak setelah insiden"', 'Membuat aturan baru mendadak setelah ada korban', 'Kecelakaan Berfluktuasi Berulang'],
        ['Level 3: Calculative', '"Kita punya banyak SOP & sistem untuk atur semua"', 'Fokus pemenuhan checklist audit & data statistik', 'Tercapai Kepatuhan Minimum Hukum'],
        ['Level 4: Proactive', '"Pekerja ikut memikirkan bahaya sebelum terjadi"', 'Pekerja berani menegur rekan kerja & stop kerja', 'Angka Kecelakaan Menurun Signifikan'],
        ['Level 5: Generative', '"Keselamatan adalah jati diri & cara kami bekerja"', 'Keterbukaan total, inovasi perbaikan kontinu', 'Zero Accident Berkelanjutan (World-Class)']
      ]
    },
    legalPenalties: [
      'Kultur Pathological meningkatkan risiko tuntutan pidana berat bagi manajemen karena terbukti mengabaikan bahaya fatal secara sengaja.',
      'Kegagalan meraih sertifikasi SMK3 Bendera Emas atau sertifikasi ISO 45001 akibat rendahnya keterlibatan pekerja.',
      'Tingginya angka turnover karyawan dan rusaknya reputasi brand di mata investor publik (ESG Rating Buruk).'
    ],
    stepByStepGuide: [
      { step: '1. Survei Persepsi Anonim Seluruh Karyawan', desc: 'Menyebarkan kuesioner digital/kertas tertutup kepada minimal 80% populasi pekerja.' },
      { step: '2. Pelaksanaan Sesi FGD Lintas Level', desc: 'Menggelar diskusi kelompok terarah tanpa kehadiran atasan langsung untuk membedah akar masalah budaya.' },
      { step: '3. Pemetaan Skor Indeks Kematangan', desc: 'Menghitung skor numerik untuk mengetahui posisi perusahaan (apakah masih di level Reactive atau Calculative).' },
      { step: '4. Peluncuran Program Safety Transformation', desc: 'Mengimplementasikan program intervensi seperti Management Safety Walk dan Just Culture Policy.' }
    ],
    links: [
      { href: '/kategori-pelatihan/matriks-kompetensi-k3-per-divisi/', anchor: 'Matriks Kompetensi K3 Per Divisi' },
      { href: '/kategori-pelatihan/panduan-audit-smk3-pp-50-2012/', anchor: 'Panduan Audit SMK3 PP 50/2012' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 24. Pencegahan Tumpahan Minyak Spill Kit
  {
    key: 'pencegahan-tumpahan-minyak-spill-kit',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/pencegahan-tumpahan-minyak-spill-kit/',
    archetype: 'compliance_guide',
    title: 'SOP Penanganan Tumpahan Bahan Kimia B3 & Penggunaan Spill Kit',
    h1: 'Panduan Standar Operasional Prosedur (SOP) Penanggulangan Tumpahan Bahan Kimia B3 & Minyak (Spill Response) Menggunakan Chemical & Oil Spill Kit',
    meta: 'Panduan penanganan tumpahan kimia spill kit: teknik lokalisir absorbent sock, penyerapan pad, APD kimia, dekontaminasi & pelaporan limbah B3 KLHK.',
    imgAlt: 'Petugas tanggap darurat kimia mengenakan pakaian Hazmat Tyvek memasang absorbent boom sock melingkari tumpahan cairan kimia di lantai pabrik',
    related: ['pengelolaan-limbah-b3-perusahaan', 'pengendalian-bahaya-kimia-b3', 'ahli-k3-kimia', 'k3-keselamatan-kerja'],
    intro: 'Tumpahan bahan kimia berbahaya (asam pekat, pelarut organik, cairan mudah menyala) dan ceceran minyak di lantai pabrik atau saluran drainase dapat memicu kebakaran mendadak, uap beracun mematikan, serta pencemaran lingkungan hidup yang berujung sanksi pidana. <strong>Spill Kit (Perangkat Tanggap Tumpahan Darurat)</strong> dan SOP respons cepat 6 langkah adalah instrumen mutlak yang wajib dikuasai seluruh personel penanganan bahan kimia.',
    hazards: [
      '<strong>Kebakaran & Ledakan Akibat Uap Pelarut Tumpah:</strong> Cairan thinner atau bensin mengalir menuju sumber pemantik listrik/mesin panas.',
      '<strong>Luka Bakar Kimiawi Korosif Ekstrem:</strong> Asam sulfat tumpah mengenai kulit petugas yang tidak mengenakan chemical suit.',
      '<strong>Pencemaran Saluran Air Publik & Drainase Kota:</strong> Tumpahan oli mengalir masuk ke saluran air hujan (storm drain) menuju sungai warga.',
      '<strong>Inhalasi Uap Kimia Beracun di Ruang Tertutup:</strong> Menangani tumpahan amonia atau klorin tanpa masker respirator cartridge kimia.'
    ],
    regulations: [
      '<strong>Permen LHK No. 6 Tahun 2021</strong> tentang Pengelolaan Limbah B3 (Bab Tanggap Darurat Tumpahan).',
      '<strong>Kepmenaker No. 187/MEN/1999</strong> tentang Pengendalian Bahan Kimia Berbahaya di Tempat Kerja.',
      '<strong>PP No. 22 Tahun 2021</strong> tentang Perlindungan dan Pengelolaan Lingkungan Hidup.'
    ],
    modules: [
      {
        name: 'Modul 1: Klasifikasi Jenis Spill Kit & Karakteristik Material Penyerap (Absorbent)',
        theory: 'Tiga jenis spill kit: Oil Only Spill Kit (Putih: Khusus Minyak Hidrokarbon), Chemical Hazmat Spill Kit (Kuning: Asam/Basa Kuat), Universal Spill Kit (Abu-abu: Cairan Umum/Air/Oli).',
        practical: 'Audit kelengkapan isi drum spill kit 120/240 liter di area penyimpanan tangki kimia.'
      },
      {
        name: 'Modul 2: Prosedur 6 Langkah Tanggap Darurat Tumpahan (The 6-Step Spill Response)',
        theory: 'Langkah 1 (Evakuasi & Identifikasi MSDS) -> Langkah 2 (Pakai APD Kimia Sesuai) -> Langkah 3 (Hentikan Sumber Kebocoran) -> Langkah 4 (Lokalisir Tumpahan dengan Absorbent Sock/Boom) -> Langkah 5 (Serap dengan Absorbent Pad/Pillow) -> Langkah 6 (Pembersihan, Dekontaminasi, & Pengemasan Limbah B3).',
        practical: 'Simulasi gelar tanggap tumpahan 50 liter asam pekat tiruan di area gudang bahan baku kimia.'
      },
      {
        name: 'Modul 3: Manajemen Dekontaminasi, Pembuangan Limbah Bekas Tumpahan, & Pelaporan',
        theory: 'Penanganan serbuk penetralisir (Neutralizing Powder), pengemasan bekas pad penyerap ke kantong limbah B3 kuning berlabel, pelaporan investigasi tumpahan.',
        practical: 'Praktik pelepasan APD terkontaminasi (doffing hazmat) tanpa menyentuh bagian luar dan penimbangan limbah B3 tumpahan.'
      }
    ],
    equipment: [
      'Chemical Hazmat Spill Kit Drum 120 Liter (Kuning) Lengkap Absorbent Sock, Pillow, & Pad.',
      'Tyvek Chemical Protective Coverall Suit & Kacamata Goggles Anti-Percik.',
      'Nitrile Chemical Resistant Gloves (Tebal 15 mil) & Sepatu Boot Kimia PVC.',
      'Sekop Plastik Non-Sparking Anti-Percikan & Kantong Limbah B3 Kuning Tebal.'
    ],
    participants: [
      'Operator Gudang Kimia, Petugas TPS Limbah B3, Maintenance Mekanik, Safety Officer, Tim Tanggap Darurat ERT Kimia, Supervisor Produksi.'
    ],
    tableData: {
      headers: ['Jenis Spill Kit', 'Warna Standar Internasional', 'Peruntukan Jenis Cairan', 'Sifat Penyerapan Air'],
      rows: [
        ['Oil Only Spill Kit', 'Warna Putih (White)', 'Oli mesin, solar, minyak hidrolik, bensin', 'Hidrofobik (Hanya menyerap minyak, mengapung di air)'],
        ['Hazmat Chemical Spill Kit', 'Warna Kuning (Yellow)', 'Asam pekat (H2SO4, HCl), basa kuat (NaOH), cairan korosif', 'Menyerap seluruh bahan kimia berbahaya & agresif'],
        ['Universal Spill Kit', 'Warna Abu-Abu (Grey)', 'Cairan pendingin coolant, pelarut air, oli, cairan non-agresif', 'Menyerap cairan berbasis air maupun minyak'],
        ['Serbuk Granular / Sawdust', 'Karung Coklat / Kantong', 'Ceceran lumpur / minyak tipis di lantai kasar', 'Penyerap mekanis tradisional (Dilarang untuk asam kuat)']
      ]
    },
    legalPenalties: [
      'Pasal 104 UU 32/2009: Membiarkan limbah B3 mencemari lingkungan tanpa penanganan terancam pidana penjara 3 tahun & denda Rp 3 Miliar.',
      'Kewajiban menanggung seluruh biaya remediasi pembersihan tanah dan sungai yang terkontaminasi tumpahan.',
      'Pemberian rapor merah PROPER KLHK dan sanksi paksaan pemerintah penutupan saluran pembuangan pabrik.'
    ],
    stepByStepGuide: [
      { step: '1. Identifikasi Sifat Cairan via MSDS', desc: 'Melihat label drum untuk mengetahui apakah cairan mudah terbakar atau beracun sebelum mendekat.' },
      { step: '2. Pemakaian APD Kimia Lengkap', desc: 'Mengenakan respirator masker cartridge kimia, kacamata goggles, sarung tangan nitril, dan hazmat.' },
      { step: '3. Membendung Tumpahan dengan Sock Boom', desc: 'Menata sosis absorbent sock melingkari perimeter tumpahan agar cairan tidak menyebar ke saluran air.' },
      { step: '4. Penyerapan & Pengemasan Limbah B3', desc: 'Menaburkan absorbent pad, memasukkan pad bekas ke kantong kuning limbah B3, dan mengikat rapat.' }
    ],
    links: [
      { href: '/kategori-pelatihan/pengelolaan-limbah-b3-perusahaan/', anchor: 'Pengelolaan Limbah B3 Perusahaan' },
      { href: '/kategori-pelatihan/ahli-k3-kimia/', anchor: 'Pelatihan Ahli K3 Kimia' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 25. Penyusunan Danger Zone Safety Signage
  {
    key: 'penyusunan-danger-zone-safety-signage',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/penyusunan-danger-zone-safety-signage/',
    archetype: 'compliance_guide',
    title: 'Standar Rambu K3, Danger Signage, & Jalur Evakuasi: Standar ANSI Z535 & ISO 7010',
    h1: 'Panduan Standarisasi Pemasangan Rambu Keselamatan (Safety Signage), Zonasi Area Berbahaya (Danger Zone), & Penandaan Jalur Evakuasi Sesuai ANSI Z535, ISO 7010, & Kemnaker RI',
    meta: 'Panduan rambu K3 ANSI Z535 & ISO 7010: klasifikasi Danger Caution Warning Notice, marka garis lantai pabrik 5S, rambu jalur evakuasi glow in the dark & audit K3.',
    imgAlt: 'Pekerja pabrik berjalan di jalur pedestrian pejalan kaki hijau yang dipisahkan marka kuning dari jalur forklift dan rambu bahaya',
    related: ['penyusunan-emergency-response-plan', 'panduan-audit-smk3-pp-50-2012', 'ahli-k3-umum-kemnaker', 'k3-keselamatan-kerja'],
    intro: 'Rambu Keselamatan Kerja (Safety Signage), Simbol Bahaya Piktogram, dan Penandaan Garis Lantai (Floor Marking) adalah bahasa visual universal keselamatan di tempat kerja. Berdasarkan <strong>Undang-Undang No. 1 Tahun 1970 Pasal 14</strong>, setiap pengurus tempat kerja <strong>wajib memasang gambar-gambar keselamatan kerja dan rambu bahaya yang dapat dilihat dan dibaca dengan mudah</strong> sesuai standar internasional <strong>ANSI Z535 dan ISO 7010</strong>.',
    hazards: [
      '<strong>Pekerja Memasuki Zona Berbahaya Tanpa Kesadaran:</strong> Masuk ke area radiasi/tegangan tinggi karena ketiadaan rambu DANGER merah.',
      '<strong>Tabrakan Forklift dengan Pejalan Kaki (Pedestrian Hit):</strong> Ketiadaan garis marka pemisah jalur lalu lintas forklift dan pedestrian walk.',
      '<strong>Tersesat di Lorong Berasap Saat Kebakaran:</strong> Rambu petunjuk pintu darurat tidak menyala dalam gelap (Non-Photoluminescent / Glow in the Dark).',
      '<strong>Kebingungan Simbol Rambu (Ambiguous Signage):</strong> Penggunaan rambu buatan sendiri yang tidak sesuai standar piktogram ISO 7010.'
    ],
    regulations: [
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja (Pasal 14 Huruf b tentang Kewajiban Memasang Rambu K3).',
      '<strong>Standar ANSI Z535 Series</strong> (American National Standard for Safety Colors, Signs, and Symbols).',
      '<strong>Standar ISO 7010:2019</strong> (Graphical symbols - Safety colours and safety signs).'
    ],
    modules: [
      {
        name: 'Modul 1: Hierarki Kepala Rambu (Signal Words) Standar ANSI Z535',
        theory: 'Perbedaan tingkatan rambu: DANGER (Bahaya Kematian Segera / Merah-Putih), WARNING (Bahaya Cedera Berat / Oranye-Hitam), CAUTION (Bahaya Cedera Ringan / Kuning-Hitam), NOTICE (Instruksi Kebijakan / Biru-Putih), SAFETY INSTRUCTION (Petunjuk Keselamatan / Hijau-Putih).',
        practical: 'Audit kesesuaian penempatan rambu DANGER vs WARNING di ruang boiler, trafo listrik, dan gudang kimia.'
      },
      {
        name: 'Modul 2: Standar Piktogram ISO 7010 & Rambu Jalur Evakuasi Photoluminescent',
        theory: 'Lima kategori piktogram: Rambu Larangan (Bulat Merah Strip Silang), Rambu Kewajiban APD (Bulat Biru), Rambu Peringatan (Segitiga Kuning), Rambu Darurat & Evakuasi (Persegi Hijau), Rambu Pemadam Api (Persegi Merah).',
        practical: 'Pengujian intensitas pancaran cahaya rambu evakuasi Glow-in-the-Dark (Photoluminescent) saat kondisi lampu pabrik dipadamkan (Blackout Test).'
      },
      {
        name: 'Modul 3: Standar Marka Garis Lantai (Floor Marking) & Zonasi Pabrik 5S/5R',
        theory: 'Arti kode warna garis lantai: Kuning (Jalur Lalu Lintas Utama/Lorong), Putih (Penyimpanan Palet Barang), Merah (Area Bahaya/Akses APAR Tidak Boleh Terhalang), Hijau (Jalur Khusus Pejalan Kaki Walkway).',
        practical: 'Praktik pengecatan garis marka lantai pabrik menggunakan cat epoxy polyurethane anti-slip dan pemasangan rambu gantung.'
      }
    ],
    equipment: [
      'Set Safety Signage ANSI Z535 / ISO 7010 Berbahan Aluminium Composite & Akrilik.',
      'Photoluminescent Exit & Evacuation Direction Signs (Glow in the Dark).',
      'Floor Marking Tape Heavy Duty (Kuning, Putih, Merah, Kuning-Hitam Hazard Zebra).',
      'Digital Lux Meter & Optical Visibility Checker untuk Pengukuran Keterbacaan Rambu.'
    ],
    participants: [
      'Safety Officer, Supervisor Facility Management & 5S/5R, Kepala Gudang, Koordinator Tanggap Darurat, Mandor Konstruksi.'
    ],
    tableData: {
      headers: ['Kepala Rambu (Signal Word)', 'Kode Warna Standar', 'Tingkat Bahaya / Definisi', 'Contoh Penempatan di Pabrik'],
      rows: [
        ['DANGER (Bahaya Mutlak)', 'Latar Belakang Merah, Huruf Putih', 'Situasi bahaya ekstrem yang PASTI berakibat kematian/cedera fatal', 'Ruang Trafo 20 kV, Bejana Reaktor Beracun'],
        ['WARNING (Peringatan Bahaya)', 'Latar Belakang Oranye, Huruf Hitam', 'Situasi bahaya sedang yang DAPAT berakibat kematian/luka berat', 'Zona Lintasan Forklift, Titik Jepit Conveyor'],
        ['CAUTION (Perhatian Waspada)', 'Latar Belakang Kuning, Huruf Hitam', 'Situasi bahaya yang DAPAT berakibat cedera ringan/sedang', 'Lantai Licin, Tangga Curam, Suhu Permukaan Panas'],
        ['SAFETY INSTRUCTION', 'Latar Belakang Hijau, Huruf Putih', 'Petunjuk keselamatan umum & peralatan medis pertolongan', 'Kotak P3K, Emergency Eyewash Station'],
        ['NOTICE (Pemberitahuan)', 'Latar Belakang Biru, Huruf Putih', 'Informasi kebijakan properti atau aturan fasilitas (bukan bahaya fisik)', 'Wajib Kenakan ID Card, Area Bebas Merokok']
      ]
    },
    legalPenalties: [
      'Pasal 14 UU No. 1 Tahun 1970: Sanksi hukum bagi pengurus yang tidak memasang rambu keselamatan wajib di area kerja.',
      'Temuan Ketidaksesuaian Mayor pada audit sertifikasi SMK3 PP 50/2012 dan audit keselamatan K3 Disnaker.',
      'Klaim kelalaian fatal jika pekerja/pengunjung celaka di zona berbahaya yang tidak dipasangi rambu peringatan jelas.'
    ],
    stepByStepGuide: [
      { step: '1. Survei Pemetaan Bahaya & Titik Buta', desc: 'Mengidentifikasi lokasi mesin berputar, tegangan tinggi, jalur forklift, dan tangga gelap.' },
      { step: '2. Pemilihan Spesifikasi Rambu Standar', desc: 'Memastikan rambu menggunakan bahasa Indonesia & Inggris, piktogram ISO 7010, dan bahan tahan cuaca.' },
      { step: '3. Pengecatan Marka Lantai & Zonasi 5S', desc: 'Mengecat jalur pejalan kaki hijau dan memberikan garis batas kuning pada area kerja mesin.' },
      { step: '4. Pemasangan Rambu Evakuasi Glow in Dark', desc: 'Memasang penunjuk arah panah evakuasi di ketinggian 30 cm dari lantai agar terlihat saat asap tebal.' }
    ],
    links: [
      { href: '/kategori-pelatihan/penyusunan-emergency-response-plan/', anchor: 'Penyusunan Rencana Tanggap Darurat ERP' },
      { href: '/kategori-pelatihan/panduan-audit-smk3-pp-50-2012/', anchor: 'Panduan Audit SMK3 PP 50/2012' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  }
];
