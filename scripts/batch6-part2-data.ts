import { ExtendedProgramDetail } from './batch4-master-data';

export const batch6Part2: ExtendedProgramDetail[] = [
  // 76. Panduan Dokumen CSMS Kontraktor
  {
    key: 'panduan-dokumen-csms-kontraktor',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/panduan-dokumen-csms-kontraktor/',
    title: 'Panduan Penyusunan Dokumen CSMS Kontraktor Tender Migas & BUMN',
    h1: 'Panduan Penyusunan Dokumen CSMS: Kuesioner Pra-Kualifikasi, HSE Plan, dan Strategi Lolos Kategori Risiko Tinggi',
    meta: 'Panduan authoring dokumen Contractor Safety Management System (CSMS) kontraktor: cara menjawab kuesioner pra-kualifikasi tender, bukti implementasi audit, dan meraih sertifikat CSMS High Risk.',
    imgAlt: 'Sertifikat kelulusan pra-kualifikasi CSMS Kategori High Risk berlogo resmi perusahaan migas dan BUMN',
    related: ['contractor-safety-management-system-csms', 'contractor-supervisor'],
    intro: '<strong>Contractor Safety Management System (CSMS)</strong> adalah sistem penilaian pra-kualifikasi K3 wajib bagi seluruh vendor/rekanan yang ingin mengikuti tender di industri Migas (Pertamina, SKK Migas), PLN, Pupuk Indonesia, dan BUMN infrastruktur.',
    hazards: ['Gugur pra-kualifikasi tender akibat nilai CSMS di bawah batas ambang kelulusan (>70 poin).'],
    regulations: ['Pedoman Tata Kerja SKK Migas No. PTK-005/SKKMA0000/2018/S0.'],
    modules: [{ name: 'Modul 1: Pemenuhan 6 Tahapan Kuesioner CSMS', theory: 'Leadership, Kebijakan, Organisasi, Risk Assessment, Prosedur Kerja, Emergency.', practical: 'Penyusunan berkas bukti objektif dokumen CSMS.' }],
    equipment: ['Template Master Dokumen CSMS Format SKK Migas.'],
    participants: ['Tender Manager, HSE Specialist Kontraktor, dan Project Lead.'],
    tableData: { headers: ['Kategori Risiko Pekerjaan CSMS', 'Nilai Skor Minimum Lolos', 'Jenis Pekerjaan Contoh'], rows: [['High Risk (Risiko Tinggi)', '>= 70 Poin', 'Pekerjaan Panas Kilang, Lifting Crane Berat, Drilling'], ['Medium Risk (Risiko Sedang)', '>= 55 – 69 Poin', 'Pekerjaan Sipil Biasa, Pemasangan Kabel, Pengecatan'], ['Low Risk (Risiko Rendah)', '>= 40 – 54 Poin', 'Jasa Konsultansi, Pengadaan ATK, Jasa Catering']] },
    links: [{ href: '/kategori-pelatihan/contractor-safety-management-system-csms/', label: 'Pelatihan CSMS' }],
    faqs: [{ q: 'Berapa lama masa berlaku sertifikat pra-kualifikasi CSMS?', a: 'Sertifikat CSMS umumnya berlaku selama 2 (dua) tahun dan wajib diaudit ulang saat masa berlakunya berakhir.' }]
  },

  // 77. Prosedur Izin Kerja PTW
  {
    key: 'prosedur-izin-kerja-ptw',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/prosedur-izin-kerja-ptw/',
    title: 'Prosedur & Alur Penerbitan Izin Kerja Aman (Permit to Work / PTW)',
    h1: 'Prosedur Penerbitan Permit to Work (PTW): Alur Otorisasi Performing Authority, Area Authority, dan Closing Permit',
    meta: 'Panduan lengkap sistem Izin Kerja Aman (Permit to Work): alur penerbitan Cold Work, Hot Work, Confined Space, Critical Lift, Electrical Isolation, dan serah terima penutupan izin kerja.',
    imgAlt: 'Lembar formulir Permit to Work (PTW) berwarna merah ditandatangani di lokasi kerja oleh Area Authority dan Performing Authority',
    related: ['permit-to-work', 'safety-officer', 'hot-work-safety'],
    intro: 'Sistem <strong>Permit to Work (PTW)</strong> adalah otorisasi formal tertulis yang mengendalikan pekerjaan berisiko non-rutin agar seluruh bahaya diisolasi dan diverifikasi sebelum pekerjaan dimulai.',
    hazards: ['Pekerjaan panas dimulai tanpa izin kerja valid memicu ledakan pipa gas aktif.'],
    regulations: ['PP No. 50 Tahun 2012 Kriteria 6.5.4.'],
    modules: [{ name: 'Modul 1: Alur Penerbitan & Validasi 4 Pihak PTW', theory: 'Pemohon Izin (Performing Authority), Penguasa Area (Area Authority), Penilai Bahaya (Safety Officer), Pengesah (Plant Manager).', practical: 'Simulasi alur approval izin kerja terpadu.' }],
    equipment: ['Set Formulir PTW Multi-Copy Warna.'],
    participants: ['Area Authority, Performing Authority, dan Safety Officer.'],
    tableData: { headers: ['Jenis Izin Kerja Khusus (PTW)', 'Warna Lembar Standar', 'Lampiran Dokumen Wajib'], rows: [['Hot Work Permit (Izin Kerja Panas)', 'MERAH', 'Sertifikat Uji Gas LEL + Fire Watcher Checklist'], ['Confined Space Entry Permit', 'KUNING', 'Gas Test Log + Entry Attendant Logsheet'], ['Electrical Work & LOTO Permit', 'BIRU', 'Electrical Isolation Certificate + LOTO Log'], ['Cold Work Permit (Kerja Dingin)', 'HIJAU', 'JSA & Tool Box Meeting Checklist']] },
    links: [{ href: '/kategori-pelatihan/permit-to-work/', label: 'Pelatihan Permit to Work' }],
    faqs: [{ q: 'Berapa lama masa berlaku maksimum satu lembar formulir PTW?', a: 'Masa berlaku normal PTW adalah 1 (satu) shift kerja (8-12 jam) dan dapat diperpanjang maksimal hingga 24 jam dengan re-validasi kondisi lingkungan kerja oleh Area Authority.' }]
  },

  // 78. Pengesahan Bejana Uap Boiler
  {
    key: 'pengesahan-bejana-uap-boiler',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/pengesahan-bejana-uap-boiler/',
    title: 'Syarat & Prosedur Pengesahan Pemakaian Bejana Uap (Boiler) Kemnaker',
    h1: 'Prosedur Pengesahan Pemakaian Bejana Uap (Boiler): Riksa Uji Hydrotest, Dokumen Perhitungan Kekuatan Konstruksi, dan Buku Akte Izin',
    meta: 'Panduan legalitas pengoperasian ketel uap pabrik: Undang-Undang Uap 1930, Peraturan Uap 1930, gambar konstruksi approved, uji padat air (hydrotest 1.5x tekanan kerja), dan Buku Akte Izin Uap Kemnaker RI.',
    imgAlt: 'Buku Akte Izin Bejana Uap resmi bertanda tangan Direktur Pengawasan Norma K3 Kemnaker RI',
    related: ['operator-boiler', 'inspeksi-bejana-tekan'],
    intro: 'Setiap ketel uap (boiler) dan bejana uap di wilayah Republik Indonesia wajib memiliki <strong>Buku Akte Izin Pemakaian</strong> resmi yang disahkan oleh Kementerian Ketenagakerjaan RI berdasarkan <strong>Undang-Undang Uap Tahun 1930</strong>.',
    hazards: ['Pengoperasian boiler tanpa Akte Izin Uap sah merupakan tindak pidana pelanggaran ketenagakerjaan.'],
    regulations: ['Undang-Undang Uap Tahun 1930 (Stbl. 1930 No. 225).', 'Peraturan Uap 1930.'],
    modules: [{ name: 'Modul 1: Dokumen Desain & Pengujian Hydrotest Bejana Uap', theory: 'Strength calculation, ASME Code stamp, uji padat air 1.5x WP, pemeriksaan fitting dan katup pengaman.', practical: 'Audit kelengkapan berkas permohonan Akte Izin Uap.' }],
    equipment: ['Hydrotest High Pressure Pump & Dual Pressure Gauge.'],
    participants: ['Boiler Maintenance Lead, Plant Engineer, dan HSE Legal Specialist.'],
    tableData: { headers: ['Dokumen Syarat Akte Izin Uap', 'Instansi Pemeriksa', 'Output Legal'], rows: [['Gambar Konstruksi Boiler Disetujui', 'Direktorat Bina K3 Kemnaker RI', 'Lembar Pengesahan Gambar'], ['LHP Riksa Uji Pertama (Hydrotest)', 'PJK3 Riksa Uji & Pengawas Spesialis K3 Uap', 'Berita Acara Pengujian'], ['Buku Akte Izin Pemakaian Boiler', 'Kementerian Ketenagakerjaan RI', 'Buku Akte Izin Asli (Wajib di Plant)']] },
    links: [{ href: '/kategori-pelatihan/operator-boiler/', label: 'Pelatihan Operator Boiler' }],
    faqs: [{ q: 'Berapa tekanan air pengujian saat pelaksanaan Hydrostatic Test boiler baru?', a: 'Berdasarkan Peraturan Uap 1930, tekanan hydrotest boiler baru adalah 1.5 (satu setengah) kali tekanan kerja maksimum yang diizinkan (Design Working Pressure).' }]
  },

  // 79. Penerapan LOTO 8 Langkah
  {
    key: 'penerapan-loto-8-langkah',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/penerapan-loto-8-langkah/',
    title: 'Panduan Prosedur Isolasi Energi LOTO 8 Langkah Terstandar OSHA',
    h1: 'Prosedur Lockout Tagout (LOTO) 8 Langkah: Isolasi Nol Energi (Zero Energy State), Uji Coba Verifikasi, dan Dekontaminasi',
    meta: 'Panduan teknis penerapan Lockout Tagout (LOTO) 8 tahapan OSHA 1910.147: pemberitahuan, pemadaman mesin, isolasi pemutus daya, pemasangan gembok/tag, pelepasan energi sisa, dan verifikasi zero energy.',
    imgAlt: 'Teknisi memasang padlock merah keselamatan dan tag DANGER JANGAN DIOPERASIKAN pada saklar pemutus daya listrik',
    related: ['lockout-tagout-loto', 'maintenance-planner-engineer'],
    intro: 'Penerapan <strong>Lockout / Tagout (LOTO) 8 Langkah</strong> menjamin mesin dalam kondisi <em>Zero Energy State</em> mutlak (tidak ada sisa tegangan listrik, tekanan hidrolik, atau pegas mekanik) sebelum teknisi memulai perbaikan.',
    hazards: ['Pelepasan energi sisa pneumatik yang menggerakkan silinder mesin dan menjepit tubuh teknisi.'],
    regulations: ['Standar OSHA 29 CFR 1910.147.', 'Permenaker No. 38 Tahun 2016.'],
    modules: [{ name: 'Modul 1: 8 Langkah Isolasi Energi Kritis', theory: '1. Notifikasi, 2. Shutdown, 3. Isolasi, 4. Pasang Gembok/Tag, 5. Buang Energi Sisa, 6. Verifikasi Nol Energi, 7. Eksekusi, 8. Restorasi.', practical: 'Simulasi isolasi energi multi-sumber (listrik + fluida hidrolik).' }],
    equipment: ['Master LOTO Kit (Hasps, Padlocks, Circuit Breaker Lockouts, Cable Lockouts).'],
    participants: ['Maintenance Technician, Electrical Engineer, dan Safety Inspector.'],
    tableData: { headers: ['Tahap LOTO', 'Aksi Teknis Kunci', 'Tolak Ukur Keselamatan'], rows: [['Langkah 4: Lockout & Tagout', 'Pasang gembok personal + Kartu Label Tag', 'Satu orang = Satu gembok = Satu kunci'], ['Langkah 5: Dissipation (Pelepasan Energi Sisa)', 'Bleed air tekanan pipa, buang muatan kapasitor, pasang balok penyangga mekanik', 'Tekanan fluida = 0 Bar, Tegangan = 0 Volt'], ['Langkah 6: Verification (Uji Verifikasi)', 'Tekan tombol START mesin untuk membuktikan mesin mati', 'Mesin 100% TIDAK BISA MENYALA']] },
    links: [{ href: '/kategori-pelatihan/lockout-tagout-loto/', label: 'Pelatihan Lockout Tagout' }],
    faqs: [{ q: 'Apa yang dimaksud dengan prinsip Satu Orang Satu Gembok (One Person One Lock) dalam LOTO?', a: 'Artinya setiap teknisi yang bekerja wajib memasang gembok pribadinya sendiri dan memegang anak kuncinya sendiri. Tidak ada orang lain yang boleh memegang kunci duplikat atau melepas gembok orang lain.' }]
  },

  // 80. Penghargaan Zero Accident Kemnaker
  {
    key: 'penghargaan-zero-accident-kemnaker',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/penghargaan-zero-accident-kemnaker/',
    title: 'Panduan Meraih Penghargaan Kecelakaan Nihil (Zero Accident Award) Kemnaker',
    h1: 'Panduan Meraih Penghargaan Zero Accident Award: Perhitungan Jam Kerja Selamat, Persyaratan Audit, dan Pengajuan ke Kemnaker RI',
    meta: 'Panduan lengkap meraih penghargaan Kecelakaan Nihil (Zero Accident Award) Kemnaker RI: rumus kalkulasi Safe Man-Hours, kriteria nihil Lost Time Injury (LTI), syarat administrasi P2K3, dan jadwal pengajuan Disnaker.',
    imgAlt: 'Plakat piagam penghargaan Kecelakaan Nihil (Zero Accident Award) Kemnaker RI ditandatangani Menteri Ketenagakerjaan RI',
    related: ['safety-leadership-dan-culture', 'ahli-k3-umum', 'audit-smk3-pp-50-2012'],
    intro: '<strong>Penghargaan Kecelakaan Nihil (Zero Accident Award)</strong> adalah apresiasi tertinggi dari Pemerintah Republik Indonesia kepada perusahaan yang berhasil mempertahankan jam kerja selamat tanpa ada kecelakaan kerja yang menghilangkan hari kerja (LTI) selama minimal 3 tahun berturut-turut.',
    hazards: ['Gagal meraih penghargaan akibat kesalahan pencatatan jam kerja lembur atau keterlambatan pengajuan berkas ke Disnaker.'],
    regulations: ['Permenaker No. Per.01/MEN/I/2007 tentang Pedoman Pemberian Penghargaan K3.'],
    modules: [{ name: 'Modul 1: Kalkulasi Safe Man-Hours & Kriteria Penilaian Kemnaker', theory: 'Rumus jam kerja orang (Man-Hours), kriteria nihil fatalitas & nihil hari hilang >2x24 jam, audit berkas P2K3.', practical: 'Kalkulasi simulasi jam kerja selamat perusahaan 500 karyawan selama 3 tahun.' }],
    equipment: ['Master Spreadsheet Safe Man-Hours Calculator Kemnaker.'],
    participants: ['HSE Director, P2K3 Secretary, HR Manager, dan General Manager.'],
    tableData: { headers: ['Skala Sektor Perusahaan', 'Batas Minimum Jam Kerja Selamat Bebas LTI (3 Tahun)'], rows: [['Sektor Industri Berat / Tambang / Konstruksi', 'Minimal 6.000.000 Jam Kerja Selamat'], ['Sektor Industri Sedang / Manufaktur', 'Minimal 3.000.000 Jam Kerja Selamat'], ['Sektor Industri Ringan / Jasa Perkantoran', 'Minimal 1.500.000 Jam Kerja Selamat']] },
    links: [{ href: '/kategori-pelatihan/safety-leadership-dan-culture/', label: 'Pelatihan Safety Leadership' }],
    faqs: [{ q: 'Kapan batas waktu pengajuan berkas Zero Accident Award ke Disnaker setiap tahunnya?', a: 'Pengajuan berkas biasanya dibuka pada bulan September hingga November di Disnaker Provinsi untuk penilaian tim penilai pusat Kemnaker menjelang penyerahan penghargaan pada Bulan K3 Nasional (Januari/Februari).' }]
  },

  // 81. K3 Panel Surya & Solar PV
  {
    key: 'k3-panel-surya-dan-solar-pv',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/k3-panel-surya-dan-solar-pv/',
    title: 'Pelatihan K3 Pemasangan & Pemeliharaan Panel Surya (Solar PV Safety)',
    h1: 'Pelatihan Keselamatan Pembangkit Listrik Tenaga Surya (PLTS): Bahaya Arus Searah (DC High Voltage), Bekerja di Atap, dan Inverter Fire Safety',
    meta: 'In-house training K3 Solar PV & PLTS Atap: mitigasi sengatan listrik DC string 1000V yang tidak bisa dimatikan, keselamatan instalasi atap (Rooftop Fall Protection), dan sertifikasi K3 PLTS.',
    imgAlt: 'Teknisi mengenakan full body harness dan sarung tangan isolasi listrik menguji tegangan rangkaian solar panel rooftop',
    related: ['k3-listrik', 'working-at-height', 'keselamatan-tegangan-tinggi'],
    intro: 'Pemasangan PLTS Rooftop dan Solar Farm skala utilitas menghadirkan bahaya unik: panel surya menghasilkan tegangan tinggi DC hingga 1.500V seketika saat terkena cahaya dan <em>tidak memiliki tombol off</em> sebelum string diputus.',
    hazards: ['Sengatan listrik DC busur api berkelanjutan (DC Arc Fault) yang memicu kebakaran atap pabrik.'],
    regulations: ['PUIL 2020 Bagian 712.', 'Permenaker No. 12/2015.'],
    modules: [{ name: 'Modul 1: DC Photovoltaic Hazard & Inverter Isolation', theory: 'Karakteristik string DC 1000V, isolator DC switch, DC arc fault circuit interrupter (AFCI), proteksi petir PLTS.', practical: 'Praktik pengukuran tegangan terbuka Voc dan arus hubung singkat Isc rangkaian surya.' }],
    equipment: ['Solar PV Multimeter 1500V DC & MC4 Crimping Tool.'],
    participants: ['Solar PV Installer, Electrical Project Lead, dan Roofing Technician.'],
    tableData: { headers: ['Komponen PLTS', 'Bahaya Listrik Kritis', 'Alat Proteksi Wajib'], rows: [['Rangkaian String Modul Surya', 'Tegangan DC terus aktif saat ada sinar', 'Sarung Tangan Isolasi 1000V Class 0 + Kain Penutup Modul'], ['Inverter Sentral / String', 'Panas konversi & bahaya busur api', 'DC Disconnect Switch + Rapid Shutdown System']] },
    links: [{ href: '/kategori-pelatihan/k3-listrik/', label: 'Pelatihan K3 Listrik' }],
    faqs: [{ q: 'Mengapa rangkaian panel surya berbahaya meskipun saklar inverter utama dalam posisi OFF?', a: 'Karena setiap modul panel surya terus menghasilkan arus listrik DC begitu sel fotovoltaik terpapar cahaya matahari, sehingga kabel string dari atap menuju inverter tetap bertegangan tinggi mematikan.' }]
  },

  // 82. K3 Baterai Lithium & EV Battery
  {
    key: 'k3-baterai-lithium-dan-ev-battery',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/k3-baterai-lithium-dan-ev-battery/',
    title: 'Pelatihan K3 Baterai Lithium & Kendaraan Listrik (EV Battery Safety)',
    h1: 'Pelatihan Keselamatan Baterai Lithium-Ion & EV: Penanganan Thermal Runaway, Pemadaman Kebakaran Baterai, dan Toxic Gas Release',
    meta: 'In-house training K3 baterai lithium & pabrik kendaraan listrik (EV): mitigasi reaksi thermal runaway berantai, pemadaman api baterai lithium (F-500 / Fire Blanket EV), dan gas beracun HF.',
    imgAlt: 'Petugas pemadam kebakaran menggelar selimut pemadam khusus EV Fire Blanket di atas mobil listrik yang mengalami thermal runaway',
    related: ['fire-fighting-dasar', 'chemical-handling', 'k3-listrik'],
    intro: 'Pabrik sel baterai lithium, gudang penyimpanan energi (BESS), dan fasilitas armada kendaraan listrik (EV) menghadapi risiko fenomena <strong>Thermal Runaway</strong> di mana sel baterai meledak dan memproduksi oksigen sendiri saat terbakar.',
    hazards: ['Kebakaran baterai lithium yang menyala kembali berulang kali (Re-ignition) dan menghasilkan gas asam fluorida (HF) sangat beracun.'],
    regulations: ['Standar NFPA 855 (Standard for the Installation of Stationary Energy Storage Systems).'],
    modules: [{ name: 'Modul 1: Kimia Baterai Lithium & Fenomena Thermal Runaway', theory: 'Dendrit lithium, overcharging, pendinginan masif air, pemakaian selimut api EV Fire Blanket (1000°C).', practical: 'Simulasi pemasangan EV Fire Blanket pada modul baterai terbakar.' }],
    equipment: ['High-Temp EV Car Fire Blanket 6x8 Meter.', 'Agen Pemadam Enkapsulator F-500 & Gas HF Detector.'],
    participants: ['EV Plant Safety Officer, BESS Maintenance Engineer, dan Tim Emergency Response.'],
    tableData: { headers: ['Status Bahaya Baterai EV', 'Indikator Fisik Lapangan', 'Tindakan Pemadaman Efektif'], rows: [['Early Warning (Peringatan Awal)', 'Desisan uap gas (Off-gassing) + Bau manis elektrolit', 'Evakuasi radius 100m + Matikan arus charging'], ['Thermal Runaway Aktif', 'Semburan api jet 1.200°C + Ledakan berantai', 'Tutup dengan EV Fire Blanket + Guyur air pendingin volume besar']] },
    links: [{ href: '/kategori-pelatihan/fire-fighting-dasar/', label: 'Pelatihan Fire Fighting Dasar' }],
    faqs: [{ q: 'Mengapa APAR Powder biasa tidak efektif memadamkan kebakaran baterai lithium?', a: 'Karena reaksi thermal runaway di dalam sel baterai melepaskan oksigen secara kimiawi dari material katoda, sehingga memotong kontak udara luar dengan powder tidak akan menghentikan kebakaran internal sel baterai.' }]
  },

  // 83. Inspeksi Tangki Timbun API 653
  {
    key: 'inspeksi-tangki-timbun-api-653',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/inspeksi-tangki-timbun-api-653/',
    title: 'Pelatihan Inspeksi Tangki Timbun Migas Berdasarkan Standar API 653',
    h1: 'Pelatihan Inspeksi Tangki Timbun (Tank Inspection): Standar API 653, Uji Magnetic Flux Leakage (MFL), dan Ketebalan Pelat Dasar',
    meta: 'Pelatihan teknis inspeksi tangki timbun minyak & kimia standar API 653: inspeksi dasar tangki (bottom plate), dinding tangki (shell settlement), atap apung (floating roof seal), dan kalkulasi laju korosi.',
    imgAlt: 'Inspector tangki mengoperasikan scanner MFL (Magnetic Flux Leakage) di atas pelat dasar tangki timbun minyak',
    related: ['inspeksi-perpipaan-migas-api-570', 'inspeksi-bejana-tekan', 'safety-inspector'],
    intro: 'Inspeksi tangki timbun silindris vertikal berukuran raksasa diatur secara global melalui <strong>Standar API 653 (Tank Inspection, Repair, Alteration, and Reconstruction)</strong> untuk mencegah keruntuhan dinding tangki dan pencemaran tanah.',
    hazards: ['Kebocoran pelat dasar tangki akibat korosi mikro bawah tanah yang mencemari akuifer air bersih.'],
    regulations: ['Standar API 653.', 'Permen ESDM No. 32 Tahun 2021.'],
    modules: [{ name: 'Modul 1: Metodologi Audit Integritas Tangki API 653', theory: 'Pengukuran sisa ketebalan MRT (Minimum Remaining Thickness), MFL scanning, uji vakum box sambungan las, evaluasi pondasi tank settlement.', practical: 'Praktek uji Vacuum Box Testing pada sambungan las pelat tangki.' }],
    equipment: ['Vacuum Box Testing Kit & Ultrasonic Thickness Gauge.'],
    participants: ['Tank Inspector, Mechanical Integrity Engineer, dan Storage Terminal Lead.'],
    tableData: { headers: ['Zona Kritis Tangki API 653', 'Metode NDT Pengujian', 'Kriteria Batas Minimum'], rows: [['Pelat Dasar (Bottom Plate)', 'Magnetic Flux Leakage (MFL) Scanner', 'MRT >= 2.5 mm pada interval inspeksi berikutnya'], ['Dinding Tangki (Shell Plate)', 'Ultrasonic Thickness Scanning', 'Ketebalan memenuhi rumus t-min API 653'], ['Pondasi Keliling (Concrete Ringwall)', 'Optical Level Survey (Tank Settlement)', 'Lendutan tidak melebihi kurva cosinus API 653']] },
    links: [{ href: '/kategori-pelatihan/inspeksi-bejana-tekan/', label: 'Pelatihan Inspeksi Bejana Tekan' }],
    faqs: [{ q: 'Apa itu pengujian Vacuum Box Test pada tangki timbun?', a: 'Vacuum box test adalah pengujian kebocoran sambungan las dasar tangki menggunakan kotak kaca kedap udara bertekanan vakum dengan larutan sabun untuk mendeteksi gelembung udara halus kebocoran.' }]
  },

  // 84. Inspeksi Perpipaan Migas API 570
  {
    key: 'inspeksi-perpipaan-migas-api-570',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/inspeksi-perpipaan-migas-api-570/',
    title: 'Pelatihan Inspeksi Sistem Perpipaan Industri Berdasarkan API 570',
    h1: 'Pelatihan Piping Inspection API 570: Pemetaan Titik CML, Kalkulasi Laju Korosi (Corrosion Rate), dan Sisa Umur Pipa (Remaining Life)',
    meta: 'Pelatihan sertifikasi inspeksi perpipaan industri proses standar API 570: Corrosion Under Insulation (CUI), injection points, kalkulasi t-min pipa, dan pengujian hydrotest/pneumatik.',
    imgAlt: 'Piping inspector melakukan pengukuran ketebalan dinding pipa menggunakan probe ultrasonic thickness gauge di kilang',
    related: ['inspeksi-tangki-timbun-api-653', 'inspeksi-bejana-tekan'],
    intro: 'Jaringan pipa proses bertekanan tinggi di kilang dan pabrik kimia diinspeksi berdasarkan <strong>Standar API 570 (Piping Inspection Code)</strong> guna memprediksi sisa umur pipa dan mencegah semburan hidrokarbon.',
    hazards: ['Pipa pecah mendadak akibat korosi tersembunyi di balik lapisan insulasi termal (Corrosion Under Insulation / CUI).'],
    regulations: ['Standar API 570.', 'Standar ASME B31.3 (Process Piping).'],
    modules: [{ name: 'Modul 1: Penentuan CML & Kalkulasi Remaining Life Pipa', theory: 'Condition Monitoring Locations (CML), Short/Long Term Corrosion Rate, batas Minimum Design Metal Temperature (MDMT).', practical: 'Kalkulasi sisa masa pakai pipa baja karbon kilang minyak.' }],
    equipment: ['Ultrasonic A-Scan Thickness Gauge & Pit Depth Gauge.'],
    participants: ['Piping Inspector, Plant Integrity Lead, dan QA/QC Mechanical.'],
    tableData: { headers: ['Mekanisme Kerusakan Pipa', 'Lokasi Paling Rentan', 'Metode Deteksi Wajib'], rows: [['Corrosion Under Insulation (CUI)', 'Pipa bersuhu -4°C s.d 120°C berinsulasi', 'Pulsed Eddy Current (PEC) & Buka Insulasi Visual'], ['Erosion-Corrosion (Kavitasi)', 'Belokan pipa (Elbow), Tee, dan Reducer', 'Ultrasonic Grid Thickness Mapping'], ['Deadlegs Corrosion', 'Ujung pipa buntu aliran mati', 'Radiographic Profile Testing']] },
    links: [{ href: '/kategori-pelatihan/inspeksi-bejana-tekan/', label: 'Pelatihan Inspeksi Bejana Tekan' }],
    faqs: [{ q: 'Apa yang dimaksud dengan CML (Condition Monitoring Location) dalam inspeksi API 570?', a: 'CML adalah titik-titik koordinat spesifik pada jalur pipa yang ditandai secara permanen untuk dilakukan pengukuran ketebalan dinding pipa secara berkala pada titik yang persis sama.' }]
  },

  // 85. K3 Ruang Bersih Cleanroom ISO 14644
  {
    key: 'k3-ruang-bersih-cleanroom-iso-14644',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/k3-ruang-bersih-cleanroom-iso-14644/',
    title: 'Pelatihan K3 & Protokol Ruang Bersih Cleanroom Standar ISO 14644',
    h1: 'Pelatihan Protokol Keselamatan Cleanroom: Standar ISO 14644-1 Klasifikasi 1-9, Manajemen Diferensial Tekanan, dan Gas Khusus Semikonduktor',
    meta: 'In-house training K3 cleanroom farmasi & semikonduktor: regulasi partikulat ISO 14644, prosedur gowning steril, keselamatan gas inert/pirofirik, dan tanggap darurat terkunci di cleanroom.',
    imgAlt: 'Pekerja dengan pakaian cleanroom bunny suit melintasi air shower chamber sebelum masuk ke cleanroom class 100',
    related: ['farmasi-dan-laboratorium-medis', 'k3-laboratorium'],
    intro: 'Fasilitas <strong>Cleanroom (Ruang Bersih)</strong> farmasi dan mikroelektronika mengendalikan jumlah partikel debu per meter kubik udara sesuai <strong>ISO 14644-1</strong> dengan protokol pakaian khusus (bunny suit) dan tekanan udara positif.',
    hazards: ['Asfiksia sesak napas akibat kebocoran gas nitrogen cair (N2) yang mengusir oksigen di dalam cleanroom tertutup.'],
    regulations: ['Standar ISO 14644-1:2015.', 'Standar CPOB BPOM 2024.'],
    modules: [{ name: 'Modul 1: Tata Kelola Partikel & Protokol Gowning ISO 14644', theory: 'Klasifikasi ISO Class 1-9, prosedur masuk Air Shower, pengendalian ESD (Electrostatic Discharge).', practical: 'Praktik pemakaian pakaian steril bunny suit tanpa menyentuh lantai.' }],
    equipment: ['Laser Airborne Particle Counter & Airflow Anemometer Hood.'],
    participants: ['Cleanroom Supervisor, QA Steril, Fab Engineer, dan EHS Officer.'],
    tableData: { headers: ['Klasifikasi ISO 14644', 'Batas Partikel >= 0.5 µm / m³', 'Aplikasi Industri'], rows: [['ISO Class 5 (Class 100)', 'Maksimal 3.520 Partikel', 'Area Aseptik Pengisian Vaksin & Semikonduktor'], ['ISO Class 7 (Class 10.000)', 'Maksimal 352.000 Partikel', 'Ruang Formulasi Obat Steril Farmasi'], ['ISO Class 8 (Class 100.000)', 'Maksimal 3.520.000 Partikel', 'Area Pengemasan Primer Medis']] },
    links: [{ href: '/industri/farmasi-dan-laboratorium-medis/', label: 'K3 Industri Farmasi' }],
    faqs: [{ q: 'Mengapa pintu darurat cleanroom harus tetap mudah dibuka meskipun tekanan udara ruangan berbeda?', a: 'Pintu cleanroom wajib dilengkapi mekanisme Panic Bar darurat mekanik yang bisa dibuka seketika saat evakuasi darurat tanpa terhalang sistem pengunci magnetik.' }]
  }
];

console.log(`Loaded ${batch6Part2.length} records for Batch 6 Part 2.`);
