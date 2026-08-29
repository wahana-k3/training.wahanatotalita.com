import { ExtendedProgramDetail } from './batch4-master-data';
import { batch6Part2 } from './batch6-part2-data';
import { batch6Part3 } from './batch6-part3-data';

export const batch6List: ExtendedProgramDetail[] = [
  // 71. Matrix HIRADC dan IBPRP
  {
    key: 'matrix-hiradc-dan-ibprp',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/matrix-hiradc-dan-ibprp/',
    title: 'Panduan Praktis Penyusunan Matriks HIRADC & IBPRP 5x5 ISO 45001',
    h1: 'Panduan Penyusunan Matriks HIRADC / IBPRP: Metodologi Kuantitatif 5x5, Penilaian ALARP, dan 5 Hierarki Pengendalian Risiko',
    meta: 'Panduan praktis penyusunan form HIRADC / IBPRP standar ISO 45001 & PP 50/2012: rumus Severity x Likelihood matriks 5x5, kriteria risiko Extreme/High/Medium/Low, dan hierarki kontrol eliminasi-APD.',
    imgAlt: 'Tabel matriks penilaian risiko HIRADC 5x5 dengan kode warna merah, kuning, dan hijau diisi oleh tim risk assessment',
    related: ['hiradc-manajemen-risiko', 'job-safety-analysis-jsa-authoring', 'audit-smk3-pp-50-2012'],
    intro: '<strong>HIRADC (Hazard Identification, Risk Assessment, and Determining Control)</strong> atau <strong>IBPRP</strong> adalah fondasi utama sistem manajemen K3 modern untuk memetakan seluruh potensi bahaya kerja dan menentukan tindakan pengendalian yang terukur.',
    hazards: ['Salah menentukan skor keparahan sehingga bahaya fatal tidak mendapatkan kontrol rekayasa teknik.'],
    regulations: ['Standar ISO 45001:2018 Klausul 6.1.2.', 'PP No. 50 Tahun 2012.'],
    modules: [{ name: 'Modul 1: Metodologi Matriks Risiko 5x5 & Kriteria Kualitatif', theory: 'Severity 1-5, Likelihood 1-5, Level Risiko Ekstrem (15-25), Tinggi (8-12), Sedang (4-6), Rendah (1-3).', practical: 'Penyusunan tabel HIRADC bengkel workshop bubut dan las.' }],
    equipment: ['Template Excel HIRADC Master 5x5 ISO 45001.'],
    participants: ['HSE Officer, Risk Lead, Supervisor Lapangan, dan Auditor SMK3.'],
    tableData: { headers: ['Skor Risiko (S x L)', 'Kategori Tingkat Risiko', 'Tindakan Pengendalian Wajib'], rows: [['Skor 15 – 25 (MERAH)', 'Risiko Ekstrem (Extreme Risk)', 'HENTIKAN PEKERJAAN SEKETIKA & Wajib Approval Direksi'], ['Skor 8 – 12 (ORANYE)', 'Risiko Tinggi (High Risk)', 'Wajib Pengendalian Rekayasa Teknik & JSA Harian'], ['Skor 4 – 6 (KUNING)', 'Risiko Sedang (Medium Risk)', 'Wajib SOP Tertulis & Briefing TBM Pagi'], ['Skor 1 – 3 (HIJAU)', 'Risiko Rendah (Low Risk)', 'Cukup Prosedur Kerja Rutin & APD Standar']] },
    links: [{ href: '/kategori-pelatihan/hiradc-manajemen-risiko/', label: 'Pelatihan HIRADC' }],
    faqs: [{ q: 'Kapan dokumen HIRADC wajib ditinjau ulang oleh tim K3?', a: 'HIRADC wajib ditinjau ulang: (1) Minimal 1 tahun sekali, (2) Setelah terjadi kecelakaan kerja atau nearmiss, dan (3) Ketika terjadi perubahan proses, mesin, atau material baru.' }]
  },

  // 72. Syarat Operator Forklift Kelas 1 dan 2
  {
    key: 'syarat-operator-forklift-kelas-1-dan-2',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/syarat-operator-forklift-kelas-1-dan-2/',
    title: 'Perbedaan & Syarat Operator Forklift Kelas I vs Kelas II Kemnaker RI',
    h1: 'Kualifikasi Operator Forklift Kelas 1 & 2: Batas Kapasitas Tonase, Wewenang Lisensi SIO, dan Syarat Sertifikasi Kemnaker',
    meta: 'Panduan lengkap klasifikasi Operator Forklift Permenaker No. 8/2020: perbedaan Kelas I (>15 Ton) dan Kelas II (<=15 Ton), syarat dokumen SIO, materi uji praktik, dan buku kerja operator.',
    imgAlt: 'Operator forklift memegang lisensi SIO Kemnaker RI berdiri di samping unit forklift diesel kapasitas 7 ton',
    related: ['operator-forklift', 'operator-reach-truck', 'riksa-uji-dan-silo-alat-berat'],
    intro: 'Berdasarkan <strong>Permenaker No. 8 Tahun 2020</strong>, kualifikasi operator forklift dibagi menjadi dua kelas berdasarkan batas kapasitas angkat nominal unit yang dioperasikan.',
    hazards: ['Operator SIO Kelas II mengoperasikan forklift kapasitas >15 Ton yang melanggar batas wewenang hukum.'],
    regulations: ['Permenaker No. 8 Tahun 2020 Pasal 164-167.'],
    modules: [{ name: 'Modul 1: Wewenang Hukum & Batasan Tonase Operator Forklift', theory: 'Regulasi Kelas I vs Kelas II, segitiga stabilitas beban, daily P2H checklist.', practical: 'Manuver zig-zag slalom membawa palet beban.' }],
    equipment: ['Forklift Diesel 3 Ton & Forklift Heavy Duty 16 Ton.'],
    participants: ['Operator Forklift Pabrik, Warehouse Leader, dan HR Recruitment.'],
    tableData: { headers: ['Klasifikasi Operator Forklift', 'Batas Kapasitas Angkat', 'Persyaratan Pendidikan & Pengalaman Minimal'], rows: [['Operator Forklift Kelas II', 'Kapasitas s.d 15 Ton (<= 15.000 kg)', 'Pendidikan Minimal SMP / Sederajat + Sertifikat Pembinaan'], ['Operator Forklift Kelas I', 'Kapasitas > 15 Ton (> 15.000 kg)', 'Pendidikan Minimal SMA / Sederajat + Pengalaman Min 2 Tahun Kelas II']] },
    links: [{ href: '/kategori-pelatihan/operator-forklift/', label: 'Pelatihan Operator Forklift' }],
    faqs: [{ q: 'Apakah pemegang SIO Forklift Kelas I boleh mengoperasikan forklift Kelas II?', a: 'Ya, pemegang lisensi SIO Forklift Kelas I berwenang mengoperasikan seluruh kelas forklift (baik di bawah 15 Ton maupun di atas 15 Ton).' }]
  },

  // 73. Panduan Safety Induction Pekerja Baru
  {
    key: 'panduan-safety-induction-pekerja-baru',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/panduan-safety-induction-pekerja-baru/',
    title: 'Panduan Safety Induction Pekerja Baru & Tamu Perusahaan',
    h1: 'Panduan Pelaksanaan Safety Induction: Materi Wajib Orientasi K3 Karyawan Baru, Tamu, dan Kontraktor Lapangan',
    meta: 'Panduan menyusun materi Safety Induction K3 resmi: 10 topik wajib orientasi K3 karyawan baru, video induksi tamu, kartu izin masuk site (Safety Passport), dan evaluasi pemahaman.',
    imgAlt: 'Safety Officer memberikan materi safety induction di ruang audiovisual kepada 20 karyawan baru yang mengenakan helm putih',
    related: ['safety-officer', 'safety-leadership-dan-culture'],
    intro: '<strong>Safety Induction (Induksi Keselamatan)</strong> adalah briefing wajib pertama yang harus diterima setiap individu sebelum diizinkan melangkah masuk ke area kerja aktif fasilitas industri sesuai <strong>UU No. 1 Tahun 1970 Pasal 9</strong>.',
    hazards: ['Pekerja baru mengalami kecelakaan di hari pertama kerja akibat tidak mengetahui jalur evakuasi atau bahaya area.'],
    regulations: ['UU No. 1 Tahun 1970 Pasal 9.'],
    modules: [{ name: 'Modul 1: Kurikulum Pokok Safety Induction Korporat', theory: 'Kebijakan K3, Rambu bahaya, APD wajib, Tanggap darurat, Jalur evakuasi, Larangan merokok.', practical: 'Penyusunan video presentasi induksi interaktif.' }],
    equipment: ['Slide Master Induksi & Lembar Tes Kuesioner Pemahaman K3.'],
    participants: ['HSE Trainer, HR Recruitment, dan Security Lead.'],
    tableData: { headers: ['Kategori Penerima Induksi', 'Durasi Materi Standar', 'Masa Berlaku Induksi'], rows: [['Tamu / Visitor Singkat', '5 – 10 Menit (Video Ringkas)', 'Hanya Berlaku pada Hari Kunjungan'], ['Karyawan Baru Perusahaan', '2 – 4 Jam (Teori + Site Tour)', '1 Tahun (Wajib Refresher Tahunan)'], ['Pekerja Kontraktor / Vendor', '1 – 2 Hari (Modul CSMS & Tes)', 'Sesuai Masa Kontrak Proyek (Maks 1 Tahun)']] },
    links: [{ href: '/peran-jabatan/safety-officer/', label: 'Peran Safety Officer' }],
    faqs: [{ q: 'Apakah tamu VIP direksi tetap wajib mengikuti safety induction saat berkunjung ke pabrik?', a: 'Ya, seluruh tamu tanpa terkecuali wajib menerima safety induction ringkas dan didampingi pemandu resmi ber-APD selama berada di area pabrik.' }]
  },

  // 74. Standar Inspeksi Scafftag Hijau Merah
  {
    key: 'standar-inspeksi-scafftag-hijau-merah',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/standar-inspeksi-scafftag-hijau-merah/',
    title: 'Standar Inspeksi & Pemasangan Scafftag (Hijau, Kuning, Merah) Perancah',
    h1: 'Sistem Penandaan Scafftag Perancah: Arti Warna Hijau, Kuning, Merah, Tanggung Jawab Inspector, dan Logbook Mingguan',
    meta: 'Panduan teknis sistem Scafftag keselamatan perancah: arti kartu Hijau (Aman Digunakan), Kuning (Penggunaan Terbatas), Merah (DILARANG NAIK), dan checklist inspeksi 7 harian.',
    imgAlt: 'Kartu Scafftag Hijau terpasang di tiang utama perancah setinggi mata dengan tanda tangan Scaffolding Inspector',
    related: ['scaffolding-inspector', 'pengawas-scaffolding', 'operator-scaffolding'],
    intro: 'Sistem kartu <strong>Scafftag</strong> adalah indikator visual legalitas kelaikan perancah yang memberi informasi kepada seluruh pekerja apakah perancah aman dinaiki, sedang dalam perbaikan, atau dilarang keras digunakan.',
    hazards: ['Pekerja menaiki perancah yang belum lengkap bracing-nya karena tidak terpasang Scafftag merah.'],
    regulations: ['Permenaker No. 01/1980.', 'Standar OSHA 1926.451.'],
    modules: [{ name: 'Modul 1: Kriteria Tagging Status & Checklist Inspeksi 7 Hari', theory: 'Pemeriksaan tiang, ledger, transom, klem, papan lantai, toe board, pengesahan kartu hijau.', practical: 'Praktik inspeksi fisik perancah dan pengisian kartu Scafftag.' }],
    equipment: ['Set Holder Scafftag & Insert Cards Hijau/Kuning/Merah.'],
    participants: ['Scaffolding Inspector, Supervisor Konstruksi, dan Safety Officer.'],
    tableData: { headers: ['Warna Kartu Scafftag', 'Status Kelaikan Perancah', 'Tindakan yang Berhak Dilakukan'], rows: [['SCAFFTAG HIJAU (Green)', 'LAIK PAKAI (Safe to Use)', 'Seluruh pekerja boleh naik sesuai batas kapasitas SWL'], ['SCAFFTAG KUNING (Yellow)', 'PERHATIAN KHUSUS (Caution)', 'Hanya boleh digunakan dengan APD khusus Full Body Harness'], ['SCAFFTAG MERAH / KOSONG', 'DILARANG DIGUNAKAN (Danger)', 'DILARANG KERAS MENAIKI PERANCAH (Sedang dibongkar/rusak)']] },
    links: [{ href: '/kategori-pelatihan/scaffolding-inspector/', label: 'Pelatihan Scaffolding Inspector' }],
    faqs: [{ q: 'Berapa lama masa berlaku satu pengesahan kartu Scafftag Hijau?', a: 'Masa berlaku kartu Scafftag hijau maksimal 7 (tujuh) hari kalender, setelah itu perancah wajib diinspeksi ulang untuk mendapatkan tanda tangan tanggal baru.' }]
  },

  // 75. Prosedur Uji Gas Ruang Terbatas
  {
    key: 'prosedur-uji-gas-ruang-terbatas',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/prosedur-uji-gas-ruang-terbatas/',
    title: 'Prosedur Uji Gas Atmosfer Ruang Terbatas (Confined Space Gas Testing)',
    h1: 'Prosedur Uji Gas Ruang Terbatas: Urutan Baku Pengujian O2, LEL, CO, H2S, Stratifikasi Ketinggian, dan Kalibrasi Bump Test',
    meta: 'Panduan teknis pengujian gas atmosfer ruang terbatas (Confined Space): urutan baku pengujian 4 gas, batas aman Oksigen 19.5-23.5%, LEL <5%, H2S <1 ppm, CO <25 ppm, dan teknik sampling stratifikasi tabung.',
    imgAlt: 'Petugas Gas Tester memasukkan selang probe multi-gas detector ke dalam lubang manhole tangki bawah tanah',
    related: ['gas-tester', 'gas-detector', 'confined-space-entry'],
    intro: 'Pengujian gas ruang terbatas wajib dilakukan dengan urutan baku mutlak (Oksigen terlebih dahulu, lalu Gas Mudah Terbakar/LEL, kemudian Gas Beracun CO & H2S) untuk memastikan instrumen bekerja akurat.',
    hazards: ['Mengukur gas LEL saat oksigen defisit (<10%) menghasilkan pembacaan LEL palsu yang rendah padahal gas sangat mudah meledak.'],
    regulations: ['Permenaker No. 11 Tahun 2023 Pasal 18.', 'Standar OSHA 1910.146.'],
    modules: [{ name: 'Modul 1: Urutan Pengujian & Stratifikasi Lapisan Gas', theory: 'Gas ringan (Metana di atas), Gas sedang (CO di tengah), Gas berat (H2S di dasar tangki).', practical: 'Pengujian bertingkat pada model bejana vertikal 4 meter.' }],
    equipment: ['Multi-Gas Detector 4-in-1 dengan Internal Suction Pump & Calibration Gas Bottle.'],
    participants: ['Authorized Gas Tester (AGT), Teknisi Confined Space, dan Safety Officer.'],
    tableData: { headers: ['Urutan Baku Uji Gas', 'Parameter Gas', 'Batas Ambang Aman Diizinkan Masuk'], rows: [['Urutan 1 (MUTLAK)', 'Kadar Oksigen (O2)', 'Rentang 19.5% – 23.5% Vol'], ['Urutan 2', 'Gas Mudah Terbakar (Flammable / LEL)', '< 5% LEL (< 10% LEL dengan izin khusus)'], ['Urutan 3', 'Karbon Monoksida (CO)', '< 25 ppm (Permenaker No. 5/2018)'], ['Urutan 4', 'Hidrogen Sulfida (H2S)', '< 1.0 ppm (Nilai Ambang Batas)'] ] },
    links: [{ href: '/kategori-pelatihan/gas-tester/', label: 'Pelatihan Gas Tester' }],
    faqs: [{ q: 'Mengapa uji gas oksigen (O2) wajib dilakukan pertama kali sebelum mengukur gas LEL?', a: 'Karena sensor gas LEL tipe catalytic bead membutuhkan kadar oksigen minimal 10-15% agar dapat membakar sampel gas secara mikroskopis. Jika oksigen kurang, sensor LEL tidak akan merespons dan memberikan nilai nol palsu.' }]
  },
  ...batch6Part2,
  ...batch6Part3
];

console.log(`Loaded TOTAL ${batch6List.length} programs for Batch 6.`);
