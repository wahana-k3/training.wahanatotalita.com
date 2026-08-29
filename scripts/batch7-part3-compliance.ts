import { MultiArchetypeProgramDetail } from './multi-archetype-renderer';

export const batch7CompliancePages: MultiArchetypeProgramDetail[] = [
  // 1. Panduan Audit SMK3 PP 50 2012
  {
    key: 'panduan-audit-smk3-pp-50-2012',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/panduan-audit-smk3-pp-50-2012/',
    archetype: 'compliance_guide',
    title: 'Panduan Audit SMK3 PP No. 50 Tahun 2012: 64, 122, & 166 Kriteria Resmi',
    h1: 'Panduan Implementasi & Audit Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3) Sesuai PP No. 50 Tahun 2012: Menuju Bendera Emas & Sertifikat Kemnaker',
    meta: 'Panduan audit SMK3 PP 50/2012: tahapan audit internal 166 kriteria, dokumen wajib, penilaian bendera emas, sertifikasi Kemnaker & sanksi hukum.',
    imgAlt: 'Auditor SMK3 memeriksa dokumen manual K3, prosedur SOP, dan bukti pelaksanaan inspeksi keselamatan di ruang rapat manajemen',
    related: ['tata-cara-pelaporan-p2k3-disnaker', 'penyusunan-dokumen-csms-tender', 'ahli-k3-umum-kemnaker', 'k3-keselamatan-kerja'],
    intro: 'Berdasarkan <strong>Peraturan Pemerintah (PP) No. 50 Tahun 2012</strong>, setiap perusahaan yang mempekerjakan minimal 100 orang tenaga kerja atau memiliki tingkat potensi bahaya tinggi (high-risk seperti manufaktur, konstruksi, migas, pertambangan, rumah sakit, dan kimia) <strong>wajib menerapkan Sistem Manajemen K3 (SMK3)</strong>. Audit SMK3 bukan sekadar formalitas kepatuhan, melainkan instrumen terstruktur untuk mengevaluasi efektivitas sistem manajemen keselamatan kerja organisasi secara independen.',
    hazards: [
      '<strong>Sanksi Administratif & Pencabutan Izin Operasional:</strong> Teguran tertulis hingga penghentian sementara kegiatan usaha oleh Pengawas Ketenagakerjaan.',
      '<strong>Kegagalan Memenuhi Syarat Tender B2B & Pemerintah:</strong> Sertifikat SMK3 Bendera Emas menjadi syarat mutlak keikutsertaan lelang konstruksi dan migas.',
      '<strong>Terjadinya Kecelakaan Kerja Berulang Tanpa Evaluasi (CAPA):</strong> Ketiadaan audit internal membuat gap bahaya di lantai kerja tidak pernah teridentifikasi.',
      '<strong>Gugatan Hukum & Tanggung Jawab Pidana Direksi:</strong> Pasal 86 UU No. 13/2003 mewajibkan pengurus menjamin perlindungan keselamatan buruh.'
    ],
    regulations: [
      '<strong>Peraturan Pemerintah No. 50 Tahun 2012</strong> tentang Penerapan Sistem Manajemen Keselamatan dan Kesehatan Kerja.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Permenaker No. 26 Tahun 2014</strong> tentang Penyelenggaraan Penilaian Penerapan SMK3.'
    ],
    modules: [
      {
        name: 'Modul 1: Prinsip Dasar 5 Elemen SMK3 & Struktur Kriteria Penilaian',
        theory: 'Lima prinsip dasar SMK3 (Kebijakan, Perencanaan, Pelaksanaan, Pemantauan & Evaluasi, Peninjauan & Peningkatan Berkelanjutan), tingkat pencapaian 64, 122, dan 166 kriteria.',
        practical: 'Pemetaan gap analysis antara SOP perusahaan saat ini dengan 166 kriteria lampiran II PP 50/2012.'
      },
      {
        name: 'Modul 2: Metodologi Audit Internal SMK3 & Teknik Wawancara Auditor',
        theory: 'Penyusunan Audit Plan, teknik sampling dokumen, metode verifikasi silang (Wawancara Pekerja, Observasi Lapangan, Pemeriksaan Bukti Rekaman).',
        practical: 'Simulasi pelaksanaan audit internal di area workshop/gudang dan penyusunan Lembar Temuan Ketidaksesuaian (NCR).'
      },
      {
        name: 'Modul 3: Klasifikasi Temuan (Kategori Kritis, Mayor, Minor) & Rencana Tindak Lanjut (CAPA)',
        theory: 'Kriteria temuan Kritis (ancaman kematian seketika), Mayor (tidak ada SOP pokok), Minor (inkonsistensi pelaksanaan rekaman), penyusunan Root Cause Analysis CAPA.',
        practical: 'Pembuatan Laporan Audit SMK3 Resmi dan simulasi Rapat Tinjauan Manajemen (Management Review).'
      }
    ],
    equipment: [
      'Checklist Matriks 166 Kriteria Audit SMK3 PP 50/2012 Lengkap.',
      'Formulir Lembar Temuan Ketidaksesuaian (Non-Conformance Report / NCR).',
      'Formulir Tindakan Korektif & Pencegahan (Corrective Action Preventive Action / CAPA).',
      'Template Laporan Akhir Audit Internal SMK3 Siap Pakai.'
    ],
    participants: [
      'Auditor Internal SMK3 Perusahaan, Management Representative (MR), Safety Officer, HR Manager, Kepala Divisi Operasional, dan Sekretaris P2K3.'
    ],
    tableData: {
      headers: ['Tingkat Penerapan SMK3', 'Jumlah Kriteria Penilaian', 'Target Persentase Kelulusan', 'Bentuk Penghargaan Resmi Kemnaker'],
      rows: [
        ['Tingkat Awal (Perusahaan Kecil/Sedang)', '64 Kriteria Penilaian', '85% s.d. 100% Pencapaian', 'Sertifikat Perak / Sertifikat Emas Kemnaker'],
        ['Tingkat Transisi (Perusahaan Menengah)', '122 Kriteria Penilaian', '85% s.d. 100% Pencapaian', 'Sertifikat Emas & Plakat Penghargaan'],
        ['Tingkat Lanjutan (Perusahaan Besar / High Risk)', '166 Kriteria Penilaian', '85% s.d. 100% (Tanpa Temuan Mayor)', 'Bendera Emas (Golden Flag) & Sertifikat Kemnaker'],
        ['Temuan Kategori Kritis', '1 Temuan Kritis (Potensi Kematian)', 'Otomatis Dinyatakan GAGAL AUDIT', 'Wajib Perbaikan Total dalam 1 Bulan']
      ]
    },
    legalPenalties: [
      'Pemberian Nota Pemeriksaan I & II oleh Pengawas Disnaker Provinsi.',
      'Denda sanksi administratif dan penghentian sebagian lini produksi yang tidak memiliki SOP K3.',
      'Diskualifikasi otomatis dalam tender BUMN, EPC migas, dan proyek infrastruktur pemerintah.'
    ],
    stepByStepGuide: [
      { step: '1. Pembentukan Tim & Gap Analysis', desc: 'Menunjuk Auditor Internal bersertifikat dan memetakan dokumen yang sudah ada.' },
      { step: '2. Pemenuhan SOP & Rekaman Bukti', desc: 'Melengkapi manual SMK3, HIRADC, SOP darurat, dan bukti notulen rapat P2K3 triwulan.' },
      { step: '3. Pelaksanaan Audit Internal & CAPA', desc: 'Menyelenggarakan audit internal seluruh departemen dan menindaklanjuti temuan minor/mayor.' },
      { step: '4. Pelaksanaan Audit Eksternal PJK3', desc: 'Mengajukan audit resmi ke Lembaga Audit SMK3 terakreditasi Kemnaker RI untuk meraih Bendera Emas.' }
    ],
    links: [
      { href: '/kategori-pelatihan/ahli-k3-umum-kemnaker/', anchor: 'Pelatihan Ahli K3 Umum Kemnaker' },
      { href: '/kategori-pelatihan/tata-cara-pelaporan-p2k3-disnaker/', anchor: 'Tata Cara Pelaporan P2K3 ke Disnaker' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 2. Tata Cara Pelaporan P2K3 Disnaker
  {
    key: 'tata-cara-pelaporan-p2k3-disnaker',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/tata-cara-pelaporan-p2k3-disnaker/',
    archetype: 'compliance_guide',
    title: 'Tata Cara Pelaporan Triwulan P2K3 ke Disnaker: Prosedur & Format Resmi',
    h1: 'Tata Cara & Prosedur Pelaporan Laporan Triwulan Panitia Pembina Keselamatan dan Kesehatan Kerja (P2K3) ke Dinas Tenaga Kerja (Disnaker)',
    meta: 'Panduan pelaporan triwulan P2K3 Disnaker: struktur laporan, perhitungan FR & SR kecelakaan kerja, pembentukan SK P2K3 & sanksi hukum UU 1/1970.',
    imgAlt: 'Sekretaris P2K3 menyusun laporan berkala triwulan keselamatan kerja lengkap dengan grafik frequency rate dan severity rate untuk Disnaker',
    related: ['panduan-audit-smk3-pp-50-2012', 'alur-klaim-kecelakaan-kerja-bpjs', 'ahli-k3-umum-kemnaker', 'k3-keselamatan-kerja'],
    intro: 'Berdasarkan <strong>Pasal 10 UU No. 1 Tahun 1970</strong> dan <strong>Permenaker No. PER.04/MEN/1987</strong>, setiap tempat kerja yang mempekerjakan 100 orang atau lebih, atau kurang dari 100 orang dengan potensi bahaya tinggi, <strong>wajib membentuk P2K3</strong> (Panitia Pembina Keselamatan dan Kesehatan Kerja). Sekretaris P2K3 (yang wajib dijabat oleh Ahli K3 Umum bersertifikat) diwajibkan oleh undang-undang untuk <strong>melaporkan kegiatan K3 setiap 3 bulan sekali (triwulan)</strong> kepada Dinas Tenaga Kerja setempat.',
    hazards: [
      '<strong>Sanksi Teguran Hukum Pengawas Ketenagakerjaan:</strong> Perusahaan yang tidak melaporkan triwulan P2K3 melanggar Pasal 14 Permenaker 04/1987.',
      '<strong>Ketiadaan SK Pengesahan P2K3 Resmi:</strong> Struktur K3 tidak diakui secara legal dalam proses tender atau persidangan klaim asuransi.',
      '<strong>Data Kecelakaan Kerja Tidak Tervalidasi (Unreported LTI):</strong> Mengakibatkan masalah legalitas saat pengajuan kompensasi BPJS Ketenagakerjaan.',
      '<strong>Gagal Audit SMK3 PP 50/2012:</strong> Bukti pelaporan triwulan P2K3 ke Disnaker merupakan kriteria wajib pemenuhan audit SMK3.'
    ],
    regulations: [
      '<strong>Permenaker No. PER.04/MEN/1987</strong> tentang Panitia Pembina Keselamatan dan Kesehatan Kerja serta Tata Cara Penunjukan Ahli Keselamatan Kerja.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja (Pasal 10).',
      '<strong>Permenaker No. 2 Tahun 1992</strong> tentang Tata Cara Penunjukan Kewajiban dan Wewenang Ahli K3.'
    ],
    modules: [
      {
        name: 'Modul 1: Syarat Legalitas Pembentukan & Perubahan SK P2K3 Disnaker',
        theory: 'Struktur organisasi P2K3 (Ketua dijabat Pimpinan Puncak/Top Management, Sekretaris dijabat Ahli K3 Umum), alur permohonan SK pengesahan ke Disnaker Provinsi.',
        practical: 'Penyusunan berkas permohonan pengesahan susunan pengurus P2K3 lengkap dengan lampiran SKP Ahli K3.'
      },
      {
        name: 'Modul 2: Struktur Standar Buku Laporan Triwulan P2K3',
        theory: 'Tujuh bab wajib laporan triwulan (Data Perusahaan, Susunan P2K3, Rekapitulasi Rapat Bulanan, Program Kerja & Realisasi, Data Statistik Kecelakaan Kerja, Hasil Riksa Uji Alat, Hambatan & Saran).',
        practical: 'Penyusunan draf laporan triwulan berbasis data riil operasional perusahaan.'
      },
      {
        name: 'Modul 3: Kalkulasi Statistik Kecelakaan Kerja: Frequency Rate (FR) & Severity Rate (SR)',
        theory: 'Formula perhitungan Jam Kerja Orang (Man-Hours), rumus matematis FR (Jumlah Kasus x 1.000.000 / Jam Kerja) dan SR (Jumlah Hari Hilang x 1.000.000 / Jam Kerja).',
        practical: 'Latihan menghitung FR dan SR dari skenario 3 kasus kecelakaan kerja dengan 45 hari kerja hilang.'
      }
    ],
    equipment: [
      'Template Formulir Laporan Triwulan P2K3 Standar Permenaker 04/1987.',
      'Kalkulator Spreadsheet Statistik FR & SR Otomatis.',
      'Format Berita Acara Rapat Bulanan P2K3 & Lembar Rekomendasi Manajemen.',
      'Format Buku Registrasi Kecelakaan Kerja Internal.'
    ],
    participants: [
      'Sekretaris P2K3 (Ahli K3 Umum), Ketua P2K3 (Plant Manager/Direktur Operasional), HR Manager, Safety Officer, dan Anggota Tim P2K3.'
    ],
    tableData: {
      headers: ['Periode Laporan Triwulan', 'Rentang Bulan Kegiatan', 'Batas Waktu Pengiriman ke Disnaker', 'Dokumen Wajib Terlampir'],
      rows: [
        ['Triwulan I (Q1)', 'Januari - Maret', 'Maksimal 15 April', 'Notulen Rapat Bulanan Jan/Feb/Mar + Data FR/SR'],
        ['Triwulan II (Q2)', 'April - Juni', 'Maksimal 15 Juli', 'Laporan Realisasi Pelatihan K3 + Rekap MCU'],
        ['Triwulan III (Q3)', 'Juli - September', 'Maksimal 15 Oktober', 'Hasil Riksa Uji Alat PAA/Boiler + Rekap Inspeksi'],
        ['Triwulan IV (Q4)', 'Oktober - Desember', 'Maksimal 15 Januari (Tahun Berikutnya)', 'Evaluasi Tahunan Program K3 + Rencana Kerja Tahun Depan']
      ]
    },
    legalPenalties: [
      'Pasal 14 Permenaker 04/1987: Sanksi kurungan hingga 3 bulan atau denda bagi pengurus yang tidak melapor.',
      'Pembekuan Surat Keterangan Penunjukan (SKP) Ahli K3 Umum jika lalai menjalankan tugas sekretaris P2K3.',
      'Pemberian rapor merah kepatuhan keselamatan pada pengawasan ketenagakerjaan daerah.'
    ],
    stepByStepGuide: [
      { step: '1. Pengesahan SK P2K3 Resmi', desc: 'Memastikan susunan pengurus P2K3 telah disahkan oleh Kepala Dinas Tenaga Kerja Provinsi.' },
      { step: '2. Rekapitulasi Rapat Bulanan K3', desc: 'Melaksanakan rapat rutin P2K3 minimal 1 kali sebulan dan mendokumentasikan notulennya.' },
      { step: '3. Perhitungan Statistik Jam Kerja', desc: 'Menghitung total jam kerja seluruh karyawan serta angka FR dan SR secara matematis.' },
      { step: '4. Penyerahan Berkas ke Pengawas Disnaker', desc: 'Mengirimkan laporan bertanda tangan Direktur & cap perusahaan, serta meminta bukti tanda terima surat resmi.' }
    ],
    links: [
      { href: '/kategori-pelatihan/ahli-k3-umum-kemnaker/', anchor: 'Pelatihan Ahli K3 Umum Kemnaker' },
      { href: '/kategori-pelatihan/panduan-audit-smk3-pp-50-2012/', anchor: 'Panduan Audit SMK3 PP 50/2012' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 3. Penyusunan Dokumen CSMS Tender
  {
    key: 'penyusunan-dokumen-csms-tender',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/penyusunan-dokumen-csms-tender/',
    archetype: 'compliance_guide',
    title: 'Penyusunan Dokumen CSMS (Contractor Safety Management System) Tender',
    h1: 'Panduan Penyusunan Dokumen Contractor Safety Management System (CSMS) Kategori Risiko Tinggi (High Risk) untuk Lolos Prakualifikasi Tender',
    meta: 'Panduan penyusunan CSMS tender: formulir prakualifikasi CSMS migas & tambang, HSE plan, audit lapangan kontraktor & kriteria penilaian kelulusan.',
    imgAlt: 'Konsultan HSE menyusun berkas dokumen prakualifikasi CSMS lengkap dengan bukti sertifikat K3 dan kebijakan keselamatan',
    related: ['panduan-audit-smk3-pp-50-2012', 'penyusunan-jsa-dan-permit-to-work', 'ahli-k3-umum-kemnaker', 'k3-keselamatan-kerja'],
    intro: 'Contractor Safety Management System (CSMS) adalah sistem manajemen komprehensif yang digunakan oleh perusahaan pemilik proyek (K3S Migas, BUMN Konstruksi, Perusahaan Tambang, dan Manufaktur Multinasional) untuk menyeleksi, mengevaluasi, dan mengawasi kinerja keselamatan kerja kontraktor dan vendor. Kontraktor yang tidak memiliki dokumen CSMS atau mendapatkan skor di bawah batas minimum (passing grade) <strong>otomatis gugur pada tahap prakualifikasi tender</strong>.',
    hazards: [
      '<strong>Gugur Otomatis di Tahap Administrasi Tender (Disqualified):</strong> Nilai prakualifikasi CSMS di bawah batas minimal (umumnya minimal skor 70-80%).',
      '<strong>Blacklist Kontraktor Akibat Kecelakaan Kerja Subkon:</strong> Pelanggaran fatal di lapangan memicu pemutusan kontrak sepihak dan denda penalti.',
      '<strong>Temuan Fatality pada Pekerjaan Risiko Tinggi (High Risk):</strong> Ketiadaan HSE Plan yang matang saat eksekusi proyek berisiko fatal.',
      '<strong>Audit Lapangan (Field Assessment) Gagal:</strong> Dokumen di atas kertas tidak sesuai dengan ketersediaan APD dan sertifikasi personel riil.'
    ],
    regulations: [
      '<strong>Pedoman Tata Kerja PTK 007 SKK Migas (Buku Kedua)</strong> tentang Pengelolaan Rantai Suplai KKKS.',
      '<strong>Kepmen ESDM No. 1827 K/30/MEM/2018</strong> tentang Pengelolaan Keselamatan Kontraktor Jasa Pertambangan.',
      '<strong>PP No. 50 Tahun 2012</strong> tentang Penerapan SMK3.'
    ],
    modules: [
      {
        name: 'Modul 1: Enam Tahapan Siklus CSMS & Struktur Formulir Prakualifikasi (PQ)',
        theory: 'Siklus CSMS (Prakualifikasi, Seleksi, Pre-Job Activity, Work in Progress, Final Evaluation), pembagian 8 elemen kuesioner CSMS.',
        practical: 'Audit kelengkapan dokumen pendukung (evidence checklist) untuk setiap butir pertanyaan CSMS.'
      },
      {
        name: 'Modul 2: Penyusunan Dokumen Wajib: Kebijakan HSE, HIRADC, & Emergency Plan Proyek',
        theory: 'Pembuatan Kebijakan K3 bertandatangan Direktur, Matriks Identifikasi Bahaya & Pengendalian Risiko (HIRADC) spesifik proyek, SOP tanggap darurat.',
        practical: 'Penyusunan dokumen HSE Plan khusus untuk paket tender konstruksi atau jasa pemeliharaan mekanikal.'
      },
      {
        name: 'Modul 3: Persiapan Audit Lapangan (Field Verification) & Pelaporan Kinerja K3',
        theory: 'Kriteria verifikasi fisik auditor (sertifikat SIO operator, riksa uji alat SIA, log MCU, rekam jejak jam kerja selamat), audit pre-job inspection.',
        practical: 'Simulasi interview audit CSMS oleh auditor KKKS/BUMN dan gelar verifikasi fisik APD.'
      }
    ],
    equipment: [
      'Template Formulir CSMS Standar SKK Migas / Pertamina / PLN (8 Elemen Lengkap).',
      'Template Dokumen HSE Plan Proyek Konstruksi & Fabrikasi.',
      'Set Matriks Matriks Kompetensi K3 & Tracker Masa Berlaku SIO Personel.',
      'Format Laporan Kinerja K3 Kontraktor (Monthly HSE Performance Report).'
    ],
    participants: [
      'Direktur Kontraktor/Vendor, Bid Manager / Tim Tender, Safety Officer Proyek, HR Manager, dan Engineer Operasional.'
    ],
    tableData: {
      headers: ['Elemen Utama Dokumen CSMS', 'Fokus Bukti yang Wajib Dilampirkan', 'Bobot Penilaian Tipikal', 'Status Kelulusan'],
      rows: [
        ['1. Kepemimpinan & Komitmen', 'Kebijakan K3 Direksi, Bukti Kunjungan Lapangan (Management Walkthrough)', '10%', 'Wajib Ada (Tanpa Kebijakan Gugur)'],
        ['2. Kebijakan & Sasaran K3', 'Target Zero LTI, Rencana Target Angka Jam Kerja Selamat', '10%', 'Wajib Selaras Scope Tender'],
        ['3. Organisasi, Personel, & SIO', 'Struktur Tim Tanggap Darurat, Sertifikat SKP Ahli K3 & SIO Operator', '20%', 'Bobot Tertinggi (Cek Legalitas)'],
        ['4. Manajemen Risiko (HIRADC)', 'Identifikasi Bahaya Khusus Pekerjaan Tender, JSA Prosedur', '20%', 'Bobot Tertinggi (Teknis Kritis)'],
        ['5. Perencanaan & Prosedur (SOP)', 'SOP Bekerja di Ketinggian, LOTO, Lifting, Ruang Terbatas', '15%', 'Wajib Lengkap Standar Migas'],
        ['6. Pemantauan & Audit K3', 'Bukti Laporan Triwulan P2K3, Rekam Jejak Statistik FR/SR 3 Tahun Terakhir', '15%', 'Verifikasi Validitas Angka LTI'],
        ['7. Tanggap Darurat (ERP)', 'Prosedur Medevac Darurat, Bukti Simulasi Fire Drill Tahunan', '10%', 'Wajib Ada Jalur Rumah Sakit Rujukan']
      ]
    },
    legalPenalties: [
      'Pemberian skor CSMS di bawah 70% yang mengakibatkan diskualifikasi tender permanen.',
      'Sanksi pemutusan kontrak kerja dan penyitaan jaminan pelaksanaan jika memalsukan sertifikat K3 personel.',
      'Pemberian sanksi Denda K3 dan pencantuman dalam daftar hitam (blacklist) penyedia jasa.'
    ],
    stepByStepGuide: [
      { step: '1. Pemetaan Persyaratan Tender', desc: 'Menelaah level risiko pekerjaan (Low, Medium, High Risk) dan passing grade CSMS pemilik proyek.' },
      { step: '2. Kompilasi & Pembuatan Dokumen', desc: 'Menyusun Kebijakan, HSE Plan, SOP teknis, dan mengumpulkan sertifikat kompetensi personel.' },
      { step: '3. Verifikasi Internal & Penilaian Mandiri', desc: 'Menghitung skor self-assessment CSMS untuk memastikan nilai di atas 85%.' },
      { step: '4. Pendampingan Audit Lapangan', desc: 'Mempersiapkan workshop, alat pelindung diri, dan bukti fisik saat verifikasi lapangan auditor.' }
    ],
    links: [
      { href: '/kategori-pelatihan/ahli-k3-umum-kemnaker/', anchor: 'Pelatihan Ahli K3 Umum Kemnaker' },
      { href: '/kategori-pelatihan/penyusunan-jsa-dan-permit-to-work/', anchor: 'Panduan JSA & Permit to Work' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 4. Standar Prosedur Lockout Tagout LOTO
  {
    key: 'standar-prosedur-lockout-tagout-loto',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/standar-prosedur-lockout-tagout-loto/',
    archetype: 'compliance_guide',
    title: 'Standar Prosedur Lockout Tagout (LOTO): Isolasi Energi Berbahaya Lapangan',
    h1: 'Panduan Implementasi Prosedur Lockout / Tagout (LOTO) & Isolasi Energi Berbahaya (Hazardous Energy Control) Sesuai Standar OSHA 1910.147 & Kemnaker RI',
    meta: 'Panduan prosedur LOTO industri: 8 langkah isolasi energi berbahaya listrik, mekanik, pneumatik & hidrolik, gembok LOTO, lockout hasp & permit.',
    imgAlt: 'Teknisi maintenance memasang gembok keselamatan padlock merah dan safety tag peringatan pada panel pemutus daya circuit breaker',
    related: ['lockout-tagout-loto', 'ahli-k3-listrik', 'ahli-k3-umum-kemnaker', 'k3-keselamatan-kerja'],
    intro: 'Pelepasan energi berbahaya yang tidak terduga (listrik bertegangan, fluida bertekanan, uap panas, hidrolik, pneumatik, atau gravitasi mekanik) saat pemeliharaan dan perbaikan mesin merupakan penyebab utama kematian tragis akibat pekerja tersengat, terjepit, terpotong, atau meledak. Standar <strong>OSHA 29 CFR 1910.147</strong> dan regulasi <strong>Permenaker No. 38 Tahun 2016</strong> mewajibkan penerapan sistem <strong>Lockout / Tagout (LOTO)</strong> yang ketat di seluruh fasilitas industri.',
    hazards: [
      '<strong>Mesin Menyala Tak Terduga (Unexpected Startup):</strong> Rekan kerja menekan tombol ON saat teknisi sedang berada di dalam rongga mesin.',
      '<strong>Pelepasan Energi Tersimpan (Residual Energy Release):</strong> Tekanan hidrolik atau pegas mekanik yang menyembur saat baut flange dibuka.',
      '<strong>Sengatan Listrik Tegangan Tinggi (Electrocution):</strong> Bekerja pada motor listrik yang belum diputus arus sumber utamanya (Main Breaker).',
      '<strong>Semburan Uap Panas / Bahan Kimia Beracun:</strong> Membuka jalur pipa proses tanpa isolasi blind flange dan penutupan gembok katup (valve lockout).'
    ],
    regulations: [
      '<strong>Permenaker No. 38 Tahun 2016</strong> tentang K3 Pesawat Tenaga dan Produksi (Pasal 62 tentang Penguncian Energi).',
      '<strong>Permenaker No. 12 Tahun 2015</strong> tentang K3 Listrik di Tempat Kerja.',
      '<strong>Standar OSHA 29 CFR 1910.147</strong> tentang The Control of Hazardous Energy (Lockout/Tagout).'
    ],
    modules: [
      {
        name: 'Modul 1: Identifikasi 7 Bentuk Energi Berbahaya & Prinsip Isolasi',
        theory: 'Energi listrik, kinetik mekanik, pneumatik udara, hidrolik cairan, termal uap/panas, kimiawi korosif, dan gravitasi potensial.',
        practical: 'Pemetaan titik isolasi energi (Energy Isolation Matrix) pada mesin produksi manufaktur.'
      },
      {
        name: 'Modul 2: Delapan Langkah Baku Prosedur LOTO (The 8-Step LOTO Procedure)',
        theory: 'Persiapan -> Pemberitahuan -> Shutdown Mesin -> Isolasi Sumber Energi -> Pemasangan Gembok & Tag -> Pelepasan Energi Tersimpan -> Verifikasi Zero Energy (Try-Out) -> Pelaksanaan Kerja.',
        practical: 'Simulasi 8 langkah LOTO pada panel breaker listrik dan katup pipa uap bertekanan.'
      },
      {
        name: 'Modul 3: Group Lockout, Prosedur Pelepasan Gembok Darurat, & Serah Terima Shift',
        theory: 'Penggunaan Lockout Box pada pekerjaan perbaikan kelompok besar, serah terima gembok antar-shift, prosedur resmi pemotongan gembok LOTO hilang.',
        practical: 'Simulasi serah terima gembok shift dan pengisian formulir pelepasan darurat (Emergency Lock Removal Form).'
      }
    ],
    equipment: [
      'Safety Padlock LOTO Khusus Non-Konduktif (Merah: Personal, Biru: Operator, Kuning: Listrik).',
      'Lockout Hasp Baja 6 Lubang & Cable Lockout Multi-Purpose.',
      'Universal Circuit Breaker Lockout & Molded Case Breaker Lock.',
      'Ball Valve Lockout, Gate Valve Lockout, & Pneumatic Quick-Disconnect Lockout.'
    ],
    participants: [
      'Teknisi Maintenance Mekanik & Listrik (Authorized Personnel), Operator Mesin (Affected Personnel), Supervisor Produksi, Safety Officer.'
    ],
    tableData: {
      headers: ['Langkah Baku LOTO', 'Aktivitas Teknis Wajib', 'Perangkat yang Digunakan', 'Kriteria Keberhasilan'],
      rows: [
        ['1. Persiapan & Notifikasi', 'Identifikasi jenis energi & beri tahu operator area', 'Dokumen SOP Mesin Spesifik', 'Operator Mengetahui Mesin Akan Dimatikan'],
        ['2. Isolasi Sumber Energi', 'Tarik tuas breaker / tutup katup suplai fluida', 'Sakelar Pemutus Daya Fisik', 'Sumber Pasokan Energi Terputus Total'],
        ['3. Pemasangan Gembok & Tag', 'Pasang Padlock pribadi + Danger Tag bersignatur', 'Safety Padlock & Lockout Hasp', 'Satu Orang = Satu Gembok = Satu Kunci'],
        ['4. Pelepasan Energi Tersimpan', 'Bleeding tekanan pipa, pasang pin ganjal gravitasi', 'Drain Valve, Grounding Stick', 'Sisa Energi 0 Bar, 0 Volt, 0 RPM'],
        ['5. Verifikasi Zero State (Try-Out)', 'Tekan tombol ON mesin untuk memastikan mesin MATI', 'Tombol Start/Stop Lokal', 'Mesin Sama Sekali Tidak Merespons (Zero State)']
      ]
    },
    legalPenalties: [
      'Pelanggaran Pasal 62 Permenaker 38/2016 dapat dikenakan sanksi penghentian izin operasional mesin.',
      'Tuntutan pidana kelalaian (Pasal 359 KUHP) terhadap pengawas jika terjadi kematian akibat mesin menyala mendadak.',
      'Temuan Mayor pada Audit SMK3 PP 50/2012 dan ISO 45001:2018.'
    ],
    stepByStepGuide: [
      { step: '1. Pembuatan SOP LOTO per Mesin', desc: 'Menyusun instruksi kerja bergambar penempatan gembok di setiap mesin kritis.' },
      { step: '2. Pengadaan Kit LOTO Standar', desc: 'Menyediakan gembok berukir nama, hasp pengunci, valve lockout, dan tag bahaya.' },
      { step: '3. Pelatihan Personel Berwenang', desc: 'Melatih seluruh teknisi pemeliharaan dan operator mesin terkait kewajiban LOTO.' },
      { step: '4. Audit Kepatuhan LOTO Harian', desc: 'Melakukan inspeksi berkala verifikasi ketiadaan bypass gembok di lantai pabrik.' }
    ],
    links: [
      { href: '/kategori-pelatihan/lockout-tagout-loto/', anchor: 'Pelatihan Sertifikasi LOTO' },
      { href: '/kategori-pelatihan/ahli-k3-listrik/', anchor: 'Pelatihan Ahli K3 Listrik' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 5. Penyusunan Emergency Response Plan
  {
    key: 'penyusunan-emergency-response-plan',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/penyusunan-emergency-response-plan/',
    archetype: 'compliance_guide',
    title: 'Penyusunan Emergency Response Plan (ERP) & Tanggap Darurat Pabrik',
    h1: 'Panduan Penyusunan Dokumen Rencana Tanggap Darurat (Emergency Response Plan / ERP) & Prosedur Evakuasi Bencana Industri Sesuai Standar Kemnaker RI',
    meta: 'Panduan penyusunan ERP pabrik: skenario darurat kebakaran, gempa bumi, tumpahan kimia B3, command post incident commander & drill evakuasi.',
    imgAlt: 'Tim Emergency Response Team (ERT) melakukan rapat komando darurat di command post saat simulasi latihan tanggap darurat industri',
    related: ['panduan-audit-smk3-pp-50-2012', 'petugas-pemadam-kebakaran-kelas-d', 'p3k-pertolongan-pertama', 'k3-keselamatan-kerja'],
    intro: 'Keadaan Darurat Industri (kebakaran besar, ledakan kimia, kebocoran gas beracun, gempa bumi, banjir, hingga ancaman sabotase) dapat melumpuhkan operasi bisnis dan menelan korban jiwa massal dalam hitungan menit jika tidak memiliki <strong>Emergency Response Plan (ERP)</strong> yang teruji. Dokumen ERP adalah panduan operasional komando tertinggi untuk merespons krisis secara cepat, terkoordinasi, dan meminimalkan kerugian aset serta reputasi perusahaan.',
    hazards: [
      '<strong>Kepanikan Massal & Terinjak-Injak saat Evakuasi (Stampede):</strong> Jalur evakuasi terkunci atau tidak adanya regu pemandu (evacuation warden).',
      '<strong>Kekacauan Komando Penanganan Krisis (Chain of Command Failure):</strong> Ketiadaan Incident Commander yang memimpin pengambilan keputusan darurat.',
      '<strong>Kegagalan Penyelamatan Korban Luka Kritis:</strong> Ketiadaan tim P3K terlatih dan koordinasi rumah sakit rujukan gawat darurat.',
      '<strong>Eskalasi Bencana ke Lingkungan Masyarakat:</strong> Kegagalan membendung tumpahan kimia beracun atau awan gas sebelum melintasi pagar pabrik.'
    ],
    regulations: [
      '<strong>Kepmenaker No. 186/MEN/1999</strong> tentang Unit Penanggulangan Kebakaran di Tempat Kerja.',
      '<strong>Permenaker No. 5 Tahun 2018</strong> tentang K3 Lingkungan Kerja.',
      '<strong>PP No. 50 Tahun 2012</strong> tentang Penerapan SMK3 (Elemen 6.7 Kesiapsiagaan Tanggap Darurat).'
    ],
    modules: [
      {
        name: 'Modul 1: Penilaian Kerentanan Bahaya (Hazard Vulnerability Assessment / HVA)',
        theory: 'Metodologi pemetaan skenario bencana probabilitas vs dampak, zonasi bahaya pabrik, penentuan Tingkat Keadaan Darurat (Tier 1, Tier 2, Tier 3).',
        practical: 'Penyusunan matriks HVA untuk skenario kebocoran gas beracun, kebakaran tangki, dan gempa bumi.'
      },
      {
        name: 'Modul 2: Struktur Komando Tanggap Darurat (Incident Command System / ICS)',
        theory: 'Peran Incident Commander, Safety Officer, Public Information Officer, Operation Section, Planning, Logistics, dan Liaison Officer.',
        practical: 'Simulasi pembagian peran komando darurat dan pengisian lembar kerja insiden ICS 201.'
      },
      {
        name: 'Modul 3: Perencanaan Evakuasi, Sistem Sirene, & Pelaksanaan Tabletop / Full Drill',
        theory: 'Penetapan Assembly Point aman, sistem sirene evakuasi vs sirene siaga, penghitungan jumlah orang (Headcount Protocol), komunikasi media.',
        practical: 'Gelar simulasi Tabletop Exercise (TTX) skenario krisis ledakan pabrik kimia dan drill evakuasi lapangan.'
      }
    ],
    equipment: [
      'Set Rompi Identifikasi Komando ICS (Incident Commander, ERT Leader, First Aid, Warden).',
      'Megaphone Sirene Portabel & Radio Komunikasi HT Frekuensi Khusus Darurat.',
      'Denah Jalur Evakuasi & Titik Kumpul (Emergency Assembly Point Signs).',
      'First Aid Trauma Bag Kit & Papan Tandu Spinal Board Lipat.'
    ],
    participants: [
      'Incident Commander, Safety Manager, Anggota Tim Tanggap Darurat (ERT), Fire Brigade Pabrik, Dokter/Paramedis Perusahaan, dan Chief Security.'
    ],
    tableData: {
      headers: ['Tingkatan Darurat (Tier)', 'Definisi Skala Insiden', 'Otoritas Komando Penanganan', 'Keterlibatan Pihak Luar'],
      rows: [
        ['Tier 1 (Insiden Lokal)', 'Dapat ditangani sepenuhnya oleh operator area setempat', 'Supervisor Shift / Regu Pemadam Area', 'Tidak Memerlukan Bantuan Luar'],
        ['Tier 2 (Insiden Pabrik)', 'Mempengaruhi seluruh fasilitas pabrik, butuh evakuasi penuh', 'Incident Commander / Tim ERT Pabrik', 'Pemadam Kebakaran Kota / RS Terdekat'],
        ['Tier 3 (Bencana Mayor)', 'Meluas ke pemukiman warga / mengancam lingkungan hidup', 'Direksi Perusahaan & Otoritas Pemerintah', 'Basarnas, Kepolisian, BPBD, & Disnaker']
      ]
    },
    legalPenalties: [
      'Pasal 86 UU No. 13/2003: Kewajiban hukum perusahaan menyediakan fasilitas tanggap darurat keselamatan buruh.',
      'Pemberian sanksi pencabutan izin lingkungan KLHK jika bencana kimia tidak tertangani sesuai dokumen amdal/ERP.',
      'Gugatan perdata ganti rugi miliaran rupiah dari korban atau komunitas sekitar yang terdampak insiden.'
    ],
    stepByStepGuide: [
      { step: '1. Asesmen Risiko & Pemetaan HVA', desc: 'Mengidentifikasi potensi bahaya spesifik pabrik (kebakaran, gempa, tumpahan B3).' },
      { step: '2. Pembentukan Struktur Komando ICS', desc: 'Menetapkan personel Incident Commander, tim evakuasi, pemadam, dan medis resmi.' },
      { step: '3. Penyusunan SOP Spesifik & Denah', desc: 'Membuat SOP tindakan darurat per skenario dan memasang denah evakuasi di setiap lantai.' },
      { step: '4. Pelaksanaan Simulasi Drill Berkala', desc: 'Menyelenggarakan latihan evakuasi minimal 1 kali dalam setahun dan evaluasi kelemahannya.' }
    ],
    links: [
      { href: '/kategori-pelatihan/petugas-pemadam-kebakaran-kelas-d/', anchor: 'Pelatihan Regu Pemadam Kebakaran' },
      { href: '/kategori-pelatihan/p3k-pertolongan-pertama/', anchor: 'Pelatihan Petugas P3K' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 6. Penyusunan JSA dan Permit to Work
  {
    key: 'penyusunan-jsa-dan-permit-to-work',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/penyusunan-jsa-dan-permit-to-work/',
    archetype: 'compliance_guide',
    title: 'Penyusunan JSA (Job Safety Analysis) & Sistem Permit to Work (PTW)',
    h1: 'Panduan Penyusunan Analisis Keselamatan Pekerjaan (Job Safety Analysis / JSA) & Implementasi Sistem Izin Kerja Khusus (Permit to Work / PTW)',
    meta: 'Panduan penyusunan JSA dan PTW: 4 langkah JSA, cold/hot work permit, izin kerja ketinggian, confined space permit, lifting permit & audit kepatuhan.',
    imgAlt: 'Pengawas keselamatan kerja memverifikasi dokumen Job Safety Analysis JSA dan menandatangani formulir Permit to Work di lapangan',
    related: ['penyusunan-dokumen-csms-tender', 'standar-prosedur-lockout-tagout-loto', 'ahli-k3-umum-kemnaker', 'k3-keselamatan-kerja'],
    intro: 'Job Safety Analysis (JSA / Job Hazard Analysis) dan Sistem Izin Kerja Aman (Permit to Work / PTW) adalah instrumen garis depan pengendalian bahaya operasional harian di tempat kerja. JSA membedah setiap tahapan tugas non-rutin untuk menemukan bahaya tersembunyi, sedangkan PTW memastikan seluruh persyaratan keselamatan telah diverifikasi secara tertulis sebelum pekerjaan berisiko tinggi (Hot Work, Ketinggian, Ruang Terbatas, Penggalian, Kelistrikan) diizinkan dimulai.',
    hazards: [
      '<strong>Bekerja Tanpa Izin Kerja (Unpermitted Work):</strong> Pekerjaan panas (welding) dilakukan di dekat drum kimia tanpa fire watch.',
      '<strong>JSA Generic Copy-Paste (Ineffective JSA):</strong> Dokumen JSA tidak mencerminkan kondisi lapangan riil sehingga bahaya kritis terlewatkan.',
      '<strong>Izin Kerja Kadaluarsa (Expired Permit Execution):</strong> Melanjutkan pekerjaan berisiko tinggi saat shift berganti tanpa re-validasi gas tester.',
      '<strong>Ketiadaan Isolasi Energi Sebelum Kerja:</strong> Membuka mesin tanpa konfirmasi gembok LOTO pada dokumen permit.'
    ],
    regulations: [
      '<strong>PP No. 50 Tahun 2012</strong> tentang Penerapan SMK3 (Elemen 6.1 Keselamatan Kerja Prosedur).',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Standar Internasional OSHA 1910 & ISO 45001:2018</strong>.'
    ],
    modules: [
      {
        name: 'Modul 1: Metodologi 4 Langkah Penyusunan Job Safety Analysis (JSA)',
        theory: 'Langkah 1 (Pilih Pekerjaan) -> Langkah 2 (Bagi Tahapan Kerja Berurutan) -> Langkah 3 (Identifikasi Bahaya Tiap Tahap) -> Langkah 4 (Tetapkan Tindakan Pengendalian Aman).',
        practical: 'Penyusunan dokumen JSA untuk pekerjaan penggantian motor listrik di ketinggian 6 meter.'
      },
      {
        name: 'Modul 2: Struktur Sistem Izin Kerja Aman (Permit to Work System)',
        theory: 'Jenis-jenis permit (Hot Work Permit, Confined Space Entry Permit, Working at Height Permit, Excavation Permit, Electrical/LOTO Permit, Heavy Lifting Permit).',
        practical: 'Audit dokumen formulir permit to work dan simulasi penandatanganan wewenang otorisasi permit (Permit Issuer vs Permit Receiver).'
      },
      {
        name: 'Modul 3: Inspeksi Pra-Kerja (Pre-Job Safety Meeting / Toolbox Talk) & Penutupan Izin',
        theory: 'Penyampaian briefing JSA kepada seluruh pekerja (Toolbox Meeting), prosedur revalidasi izin kerja, housekeeping dan penutupan permit resmi.',
        practical: 'Simulasi memimpin briefing keselamatan kerja (Toolbox Talk) dan verifikasi checklist keselamatan sebelum permit ditutup.'
      }
    ],
    equipment: [
      'Formulir Master Job Safety Analysis (JSA) Standar Multi-Disiplin.',
      'Set Formulir Permit to Work Berwarna (Merah: Hot Work, Biru: Cold Work, Hijau: Ketinggian, Kuning: Confined Space).',
      'Multi-Gas Detector Portabel untuk Verifikasi Gas Clearance Permit.',
      'Papan Display Izin Kerja Lapangan (Permit Board) Anti-Air.'
    ],
    participants: [
      'Supervisor Lapangan, Mandor Kerja, Safety Officer, Permit Issuer (Kepala Area Pabrik), Permit Receiver (Kontraktor/Teknisi), dan Anggota P2K3.'
    ],
    tableData: {
      headers: ['Jenis Izin Kerja (PTW)', 'Kriteria Pekerjaan Wajib Permit', 'Verifikasi Pengaman Wajib', 'Masa Berlaku Maksimum'],
      rows: [
        ['Hot Work Permit (Izin Panas)', 'Pengelasan, pemotongan gerinda, sandblasting di area berisiko api', 'Uji Gas LEL 0%, Penyiapan APAR, Fire Watcher Siaga', 'Maksimal 1 Shift Kerja (8 Jam)'],
        ['Confined Space Permit (Ruang Terbatas)', 'Masuk ke dalam tangki, bejana uap, silo, gorong-gorong drainase', 'Uji Gas 4 Parameter, Blower Ventilasi, Standby Person', 'Maksimal 1 Shift Kerja (8 Jam)'],
        ['Working at Height Permit (Ketinggian)', 'Bekerja pada ketinggian > 1.8 meter tanpa lantai tetap', 'Safety Harness Double Hook, Anchor 15 kN, Scafftag Hijau', 'Maksimal 1 Shift Kerja (8 Jam)'],
        ['Excavation Permit (Galian Tanah)', 'Menggali tanah sedalam > 1.2 meter atau dekat utilitas pipa/kabel', 'Underground Scanning Cable/Pipa, Shoring Dinding Galian', 'Maksimal 1 Minggu (Revalidasi Harian)']
      ]
    },
    legalPenalties: [
      'Penghentian langsung pekerjaan (Stop Work Authority) oleh Ahli K3 jika ditemukan pekerjaan berbahaya tanpa permit.',
      'Sanksi surat peringatan SP hingga pemutusan kontrak bagi vendor yang memalsukan tanda tangan izin kerja.',
      'Tuntutan pidana kelalaian manajemen jika terjadi kecelakaan pada aktivitas yang tidak memiliki dokumen JSA.'
    ],
    stepByStepGuide: [
      { step: '1. Pembuatan JSA Sebelum Mulai', desc: 'Mandor dan Safety Officer menyusun JSA spesifik untuk pekerjaan yang akan dilakukan.' },
      { step: '2. Pengajuan & Inspeksi Bersama', desc: 'Permit Receiver mengajukan form PTW ke Permit Issuer untuk dilakukan inspeksi fisik lapangan.' },
      { step: '3. Briefing Toolbox Talk ke Pekerja', desc: 'Menjelaskan seluruh potensi bahaya JSA kepada seluruh pekerja sebelum surat izin ditandatangani.' },
      { step: '4. Pemantauan & Penutupan Izin Kerja', desc: 'Melakukan monitoring berkala, membersihkan area kerja, dan menandatangani penutupan permit resmi.' }
    ],
    links: [
      { href: '/kategori-pelatihan/penyusunan-dokumen-csms-tender/', anchor: 'Penyusunan Dokumen CSMS' },
      { href: '/kategori-pelatihan/standar-prosedur-lockout-tagout-loto/', anchor: 'Standar Prosedur LOTO' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  }
];
