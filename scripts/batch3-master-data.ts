import { ProgramDetail } from './master-batch1-data';
import { batch3ConstructionAndMining } from './batch3-part2-data';
import { batch3ManagementAndSpecialized } from './batch3-part3-data';

export const batch3List: ProgramDetail[] = [
  // 67. Higiene Industri
  {
    key: 'higiene-industri',
    title: 'Pelatihan Higiene Industri: Pengukuran Faktor Fisika & Kimia Lingkungan Kerja',
    h1: 'Pelatihan Higiene Industri: Pemantauan Faktor Fisika, Kimia, Biologi, Ergonomi, dan Kepatuhan Permenaker No. 5/2018',
    meta: 'Pelatihan higiene industri: pengukuran kebisingan dosimeter, indeks suhu basah dan bola (ISBB), pencahayaan lux meter, sampling debu partikulat, dan standar NAB Permenaker No. 5/2018.',
    imgAlt: 'Industrial hygienist mengoperasikan sound level meter dan heat stress monitor ISBB di area lantai produksi pabrik',
    related: ['pengukuran-kebisingan-dan-getaran', 'pengukuran-kualitas-udara-ruangan', 'dokter-perusahaan-hiperkes', 'ergonomi-industri'],
    intro: 'Higiene Industri adalah disiplin ilmu antisipasi, rekognisi, evaluasi, dan pengendalian bahaya lingkungan kerja yang dapat memicu Penyakit Akibat Kerja (PAK) kronis. Berdasarkan <strong>Permenaker No. 5 Tahun 2018 tentang K3 Lingkungan Kerja</strong>, setiap perusahaan wajib melakukan pengukuran rutin faktor fisika, kimia, biologi, ergonomi, dan psikologi kerja menggunakan metodologi terkalibrasi.',
    hazards: [
      '<strong>Ketulian Permanen Akibat Bising (Noise-Induced Hearing Loss):</strong> Paparan bising di atas 85 dBA secara terus menerus menghancurkan sel rambut koklea telinga.',
      '<strong>Tekanan Panas Ekstrem (Heat Stroke):</strong> Bekerja di dekat furnace/boiler dengan ISBB >30°C memicu kegagalan termoregulasi tubuh dan koma.',
      '<strong>Pneumokoniosis Akibat Debu Respirabel:</strong> Inhalasi partikel silika dan asbes di bawah 10 mikron memicu fibrosis paru permanen.'
    ],
    regulations: [
      '<strong>Permenaker No. 5 Tahun 2018</strong> tentang Keselamatan dan Kesehatan Kerja Lingkungan Kerja.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Standar ACGIH TLVs and BEIs</strong> (Threshold Limit Values).'
    ],
    modules: [
      {
        name: 'Modul 1: Kerangka Hukum K3 Lingkungan Kerja & Standar NAB',
        theory: 'Definisi Nilai Ambang Batas (NAB), Batas Pemaparan Singkat (BPSD/STEL), Kadar Tertinggi (Ceiling), kewajiban pelaporan Disnaker.',
        practical: 'Audit komparasi hasil uji laboratorium lingkungan kerja terhadap lampiran Permenaker 5/2018.'
      },
      {
        name: 'Modul 2: Metodologi Pengukuran Faktor Fisika Lingkungan Kerja',
        theory: 'Pengukuran kebisingan (Sound Level Meter & Noise Dosimeter), Iklim Kerja (Heat Stress ISBB), Pencahayaan (Lux Meter), Getaran.',
        practical: 'Praktik pengukuran intensitas pencahayaan meja kerja dan perhitungan kebutuhan titik lampu.'
      },
      {
        name: 'Modul 3: Sampling Udara Kontaminan Kimia (Air Sampling)',
        theory: 'Pompa hisap udara personal (Personal Dust Sampler), siklon pemisah debu PM10/PM2.5, tabung sorben kimia.',
        practical: 'Kalibrasi laju aliran pompa hisap udara menggunakan primary flow calibrator.'
      }
    ],
    equipment: [
      'Sound Level Meter Type 2 Terkalibrasi & Noise Dosimeter.',
      'Heat Stress Monitor (Indeks Suhu Basah dan Bola / ISBB).',
      'Digital Lux Meter Presisi Tinggi (0 - 50.000 Lux).',
      'Personal Air Sampling Pump dengan Filter Cassette & Cyclone.'
    ],
    participants: [
      'Industrial Hygienist, Safety Officer, Dokter Perusahaan / Paramedis Pabrik, dan Tim Lab Lingkungan.'
    ],
    tableData: {
      headers: ['Faktor Bahaya Fisika', 'Parameter yang Diukur', 'Nilai Ambang Batas (NAB Permenaker 5/2018)', 'Waktu Paparan Maksimum'],
      rows: [
        ['Kebisingan Kontinu', 'Intensitas Suara (dBA)', '85 dBA', '8 Jam per Hari (40 Jam/Minggu)'],
        ['Tekanan Panas (Iklim Kerja)', 'Indeks ISBB (°C)', '28.0°C (Beban Kerja Berat 75% Kerja)', '8 Jam dengan istirahat teratur'],
        ['Pencahayaan Ruang Kerja', 'Tingkat Iluminasi (Lux)', '300 Lux (Pekerjaan Kantor / Mesin Halus)', 'Sepanjang jam kerja aktif'],
        ['Getaran Lengan-Tangan', 'Percepatan (m/s²)', '5.0 m/s²', '8 Jam per Hari']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/pengukuran-kebisingan-dan-getaran/', label: 'Pelatihan Pengukuran Kebisingan' },
      { href: '/kategori-pelatihan/pengukuran-kualitas-udara-ruangan/', label: 'Pelatihan Kualitas Udara IAQ' },
      { href: '/kategori-pelatihan/dokter-perusahaan-hiperkes/', label: 'Pelatihan Hiperkes Dokter' }
    ],
    faqs: [
      {
        q: 'Berapa frekuensi wajib pengukuran K3 Lingkungan Kerja di perusahaan?',
        a: 'Berdasarkan Permenaker No. 5 Tahun 2018, pengukuran dan pengujian lingkungan kerja wajib dilaksanakan sekurang-kurangnya 1 (satu) tahun sekali oleh Lembaga Penguji K3 yang terakreditasi atau Pengawas Ketenagakerjaan Spesialis K3 Lingkungan Kerja.'
      }
    ]
  },

  // 68. Petugas P3K di Tempat Kerja
  {
    key: 'petugas-p3k-di-tempat-kerja',
    title: 'Pelatihan Petugas P3K di Tempat Kerja: Sertifikasi Resmi Kemnaker RI',
    h1: 'Pelatihan Petugas P3K di Tempat Kerja: Sertifikasi Lisensi Kemnaker RI, CPR/AED, Balut Bidai, dan Tata Kelola Kotak P3K',
    meta: 'Pelatihan Petugas P3K tempat kerja bersertifikat Kemnaker: resusitasi jantung paru (CPR), penggunaan AED, penanganan fraktur/pendarahan, luka bakar, dan standar Permenaker No. 15/2008.',
    imgAlt: 'Petugas P3K bersertifikat mempraktikkan kompresi dada resusitasi jantung paru (CPR) pada manekin pelatihan medis',
    related: ['dokter-perusahaan-hiperkes', 'pemeriksaan-kesehatan-kerja-mcu', 'emergency-response-team'],
    intro: 'Kecelakaan kerja fatal sering kali berakar dari keterlambatan pertolongan pertama pada kurun waktu emas (<em>Golden Hour Period</em>) 5 hingga 10 menit awal pasca trauma. Berdasarkan <strong>Permenaker No. Per.15/MEN/VIII/2008</strong>, setiap pengusaha wajib menyediakan Petugas P3K yang memiliki lisensi resmi dari Kementerian Ketenagakerjaan RI.',
    hazards: [
      '<strong>Kematian Akibat Henti Jantung Mendadak:</strong> Ketiadaan tindakan CPR berkualitas sebelum ambulans tiba.',
      '<strong>Syok Hipovolemik Akibat Pendarahan Masif:</strong> Gagal menghentikan pendarahan arteri dalam 3 menit.',
      '<strong>Kelumpuhan Permanen Pasca Cedera Tulang Belakang:</strong> Memindahkan korban jatuh dari ketinggian tanpa scoop stretcher dan cervical collar.'
    ],
    regulations: [
      '<strong>Permenaker No. Per.15/MEN/VIII/2008</strong> tentang Pertolongan Pertama pada Kecelakaan di Tempat Kerja.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Pedoman AHA (American Heart Association) CPR & ECC Guidelines</strong>.'
    ],
    modules: [
      {
        name: 'Modul 1: Anatomi Dasar Tubuh Manusia & Penilaian Korban (DRCAB)',
        theory: 'Danger -> Response -> Circulation -> Airway -> Breathing. Penilaian kesadaran AVPU, cek nadi karotis.',
        practical: 'Drill primary survey dan secondary survey korban pingsan di lantai kerja.'
      },
      {
        name: 'Modul 2: Resusitasi Jantung Paru (CPR/RJP) & Pengoperasian AED',
        theory: 'Kompresi dada 30:2 kecepatan 100-120x/menit kedalaman 5-6 cm, penempatan elektroda Automated External Defibrillator (AED).',
        practical: 'Praktik CPR berkualitas tinggi pada manekin digital dengan sensor feedback dan AED trainer.'
      },
      {
        name: 'Modul 3: Penanganan Pendarahan, Syok & Balut Bidai Fraktur',
        theory: 'Direct pressure, tourniquet arteri darurat, pembalutan mitela, pembidaian fraktur tulang tertutup/terbuka.',
        practical: 'Praktik pembidaian patah tulang paha dan pemasangan torniket pada pendarahan arteri masif.'
      },
      {
        name: 'Modul 4: Evakuasi Medis & Standarisasi Kotak P3K (Bentuk A, B, C)',
        theory: 'Teknik Log-Roll spineboard, pengangkatan stretcher berempat, daftar 21 item wajib isi Kotak P3K Permenaker 15/2008.',
        practical: 'Audit kelengkapan obat dan peralatan pada Kotak P3K Tipe C (100 pekerja).'
      }
    ],
    equipment: [
      'Manekin CPR Dewasa & Anak dengan Feedback Monitor Elektronik.',
      'AED (Automated External Defibrillator) Trainer Unit.',
      'Long Spine Board, Cervical Collar, dan Scoop Stretcher.',
      'Kotak P3K Standar Kemnaker RI Lengkap (Tipe A, B, dan C).'
    ],
    participants: [
      'Petugas P3K Perusahaan, Security, HR Staff, Safety Officer, dan Anggota Emergency Response Team.'
    ],
    tableData: {
      headers: ['Tipe Kotak P3K', 'Kapasitas Jumlah Pekerja', 'Penempatan yang Direkomendasikan', 'Kelengkapan Wajib'],
      rows: [
        ['Kotak P3K Bentuk A', 'Untuk 25 Tenaga Kerja / Kurang', 'Ruang kantor kecil, pos security, mobil operasional', '21 Item obat luar & pembalut'],
        ['Kotak P3K Bentuk B', 'Untuk 50 Tenaga Kerja / Kurang', 'Lantai pabrik manufaktur, bengkel, laboratorium', 'Jumlah isi 2x lipat dari Kotak A'],
        ['Kotak P3K Bentuk C', 'Untuk 100 Tenaga Kerja / Kurang', 'Klinik perusahaan, gudang besar, proyek konstruksi', 'Jumlah isi 4x lipat dari Kotak A']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/dokter-perusahaan-hiperkes/', label: 'Pelatihan Hiperkes Dokter' },
      { href: '/kategori-pelatihan/pemeriksaan-kesehatan-kerja-mcu/', label: 'Pelatihan MCU Tenaga Kerja' },
      { href: '/kategori-pelatihan/emergency-response-team/', label: 'Pelatihan Emergency Response Team' }
    ],
    faqs: [
      {
        q: 'Berapa rasio jumlah Petugas P3K yang wajib disediakan perusahaan menurut Permenaker 15/2008?',
        a: 'Untuk tempat kerja dengan potensi bahaya rendah: 1 orang petugas P3K untuk setiap 25–150 pekerja. Untuk tempat kerja dengan potensi bahaya tinggi (konstruksi, pertambangan, kimia, manufaktur berat): 1 orang petugas P3K untuk setiap 100 pekerja atau kurang.'
      }
    ]
  },

  // 69. Dokter Perusahaan Hiperkes
  {
    key: 'dokter-perusahaan-hiperkes',
    title: 'Pelatihan Hiperkes Dokter & Paramedis Perusahaan: Sertifikasi Kemnaker RI',
    h1: 'Pelatihan Hiperkes Dokter & Paramedis Perusahaan: Manajemen Pelayanan Kesehatan Kerja dan Diagnosis Penyakit Akibat Kerja (PAK)',
    meta: 'Pelatihan Hiperkes (Higiene Perusahaan dan Kesehatan Kerja) dokter & paramedis bersertifikat Kemnaker: Permenaker No. 1/1976 & No. 1/1979, 7 langkah diagnosis PAK, dan klinik perusahaan.',
    imgAlt: 'Dokter perusahaan berjas medis memeriksa hasil rontgen toraks paru dan data audiometri karyawan di klinik perusahaan',
    related: ['petugas-p3k-di-tempat-kerja', 'spirometri-dan-kesehatan-paru-kerja', 'audiometri-dan-hearing-conservation', 'pemeriksaan-kesehatan-kerja-mcu'],
    intro: 'Berdasarkan <strong>Permenaker No. 01 Tahun 1976 (untuk Dokter) dan Permenaker No. 01 Tahun 1979 (untuk Paramedis)</strong>, seluruh tenaga medis yang bertugas melayani kesehatan tenaga kerja di perusahaan wajib memiliki sertifikat pelatihan <strong>Hiperkes (Higiene Perusahaan dan Kesehatan Kerja)</strong> resmi dari Kementerian Ketenagakerjaan RI.',
    hazards: [
      '<strong>Kegagalan Deteksi Dini Penyakit Akibat Kerja (PAK):</strong> Gejala asma kerja atau dermatitis kontak terabaikan hingga menjadi cacat fungsi menetap.',
      '<strong>Penyelenggaraan Klinik Tanpa Izin Operasional:</strong> Klinik pabrik beroperasi tanpa pengesahan izin penyelenggaraan pelayanan kesehatan kerja Disnaker.',
      '<strong>Fit-to-Work Fiktif:</strong> Menilai pekerja laik kerja (Fit to Work) tanpa pemeriksaan organ spesifik terhadap pajanan bahaya kerja.'
    ],
    regulations: [
      '<strong>Permenaker No. Per.01/MEN/1976</strong> tentang Kewajiban Latihan Hiperkes Bagi Dokter Perusahaan.',
      '<strong>Permenaker No. Per.01/MEN/1979</strong> tentang Kewajiban Latihan Hiperkes Bagi Paramedis Perusahaan.',
      '<strong>Permenaker No. Per.03/MEN/1982</strong> tentang Pelayanan Kesehatan Kerja.',
      '<strong>Perpres No. 7 Tahun 2019</strong> tentang Penyakit Akibat Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Kerangka Regulasi Kesehatan Kerja & Pelayanan Kesehatan',
        theory: 'Struktur Pelayanan Kesehatan Kerja (PKK), kewajiban pelaporan PAK, integrasi BPJS Ketenagakerjaan JKK-PAK.',
        practical: 'Audit kelayakan fasilitas dan tata kelola Klinik Kesehatan Kerja Perusahaan.'
      },
      {
        name: 'Modul 2: Metodologi 7 Langkah Penegakan Diagnosis PAK (Perpres 7/2019)',
        theory: '1. Diagnosis Klinis -> 2. Pajanan di Tempat Kerja -> 3. Hubungan Pajanan & Penyakit -> 4. Besaran Pajanan -> 5. Faktor Individu -> 6. Pajanan Luar -> 7. Kesimpulan PAK.',
        practical: 'Studi kasus penetapan diagnosis PAK pada pekerja industri cat (toksisitas pelarut benzena).'
      },
      {
        name: 'Modul 3: Program Promotif, Preventif & Kuratif Kesehatan Kerja',
        theory: 'Gizi kerja, ergonomi perkantoran/pabrik, pencegahan HIV/AIDS & TBC di tempat kerja, program return-to-work.',
        practical: 'Penyusunan program tahunan Occupational Health Management Plan.'
      }
    ],
    equipment: ['Audiometer Skrining, Spirometer Digital, Vision Screener, dan Panduan ICD-10 Occupational Diseases.'],
    participants: ['Dokter Umum, Dokter Spesialis Okupasi (Sp.Ok), Perawat / Bidan Klinik Perusahaan, dan HSE Health Lead.'],
    tableData: {
      headers: ['Langkah Diagnosis PAK', 'Aktivitas Dokter Perusahaan', 'Output Rekam Medis'],
      rows: [
        ['Langkah 1 & 2', 'Penegakan diagnosis klinis & anamnesis riwayat pajanan kerja lengkap', 'Resume medis & daftar riwayat pekerjaan'],
        ['Langkah 3 & 4', 'Evaluasi bukti hubungan kausal pajanan dan hasil ukur higiene industri', 'Analisis dosis-respons pajanan kerja'],
        ['Langkah 5 & 6', 'Penilaian riwayat genetik, hobi, dan pekerjaan sampingan', 'Eksklusi faktor non-okupasi'],
        ['Langkah 7', 'Penetapan vonis resmi Penyakit Akibat Kerja (PAK)', 'Laporan resmi Formulir Klaim JKK BPJS Ketenagakerjaan']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/petugas-p3k-di-tempat-kerja/', label: 'Pelatihan Petugas P3K' },
      { href: '/kategori-pelatihan/pemeriksaan-kesehatan-kerja-mcu/', label: 'Pelatihan MCU Tenaga Kerja' },
      { href: '/kategori-pelatihan/spirometri-dan-kesehatan-paru-kerja/', label: 'Pelatihan Spirometri' }
    ],
    faqs: [
      {
        q: 'Apa perbedaan mendasar antara Penyakit Akibat Kerja (PAK) dan Penyakit Terkait Kerja (Work-Related Disease)?',
        a: 'Penyakit Akibat Kerja (PAK) adalah penyakit yang murni disebabkan oleh pajanan faktor bahaya di tempat kerja (faktor pekerjaan adalah penyebab utama mutlak, misal Silikosis karena debu silika). Sedangkan Penyakit Terkait Kerja adalah penyakit umum yang diperberat oleh kondisi lingkungan kerja (misal Asma bronkiale yang kambuh akibat debu pabrik).'
      }
    ]
  },

  // 70. Audiometri & Hearing Conservation
  {
    key: 'audiometri-dan-hearing-conservation',
    title: 'Pelatihan Hearing Conservation Program & Audiometri Industri',
    h1: 'Pelatihan Hearing Conservation Program (HCP): Pengujian Audiometri Nada Murni, Analisis STS, dan Pengendalian Bising',
    meta: 'Pelatihan hearing conservation program (HCP): uji audiometri nada murni (pure-tone audiometry), interpretasi Standard Threshold Shift (STS), pemilihan NRR earplug/earmuff, dan regulasi Permenaker No. 5/2018.',
    imgAlt: 'Audiometris melakukan pengujian pendengaran nada murni pada pekerja yang duduk di dalam bilik kedap suara (audiometric booth)',
    related: ['pengukuran-kebisingan-dan-getaran', 'higiene-industri', 'dokter-perusahaan-hiperkes'],
    intro: 'Penyakit Tuli Akibat Bising (<em>Noise-Induced Hearing Loss / NIHL</em>) bersifat permanen, tidak dapat disembuhkan secara medis, dan merayap perlahan tanpa rasa sakit. Program Konservasi Pendengaran (<em>Hearing Conservation Program / HCP</em>) adalah strategi terpadu yang diwajibkan bagi seluruh industri dengan tingkat kebisingan melebihi 85 dBA.',
    hazards: [
      '<strong>Pergeseran Ambang Dengar Permanen (PTS):</strong> Kerusakan permanen pada frekuensi 4000 Hz (Acoustic Notch) yang meluas ke frekuensi percakapan.',
      '<strong>Tinnitus Kronis:</strong> Dengingan telinga terus menerus yang memicu stres kerja berat dan gangguan tidur pekerja.',
      '<strong>Kegagalan Reduksi APD (Derating NRR):</strong> Pekerja salah memasang earplug sehingga perlindungan riil turun hingga 70% di bawah label pabrik.'
    ],
    regulations: ['<strong>Permenaker No. 5 Tahun 2018</strong>.', '<strong>Standar OSHA 29 CFR 1910.95</strong> (Occupational Noise Exposure).', '<strong>Standar NIOSH Criteria for a Recommended Standard - Occupational Noise Exposure</strong>.'],
    modules: [
      {
        name: 'Modul 1: 5 Pilar Hearing Conservation Program (HCP)',
        theory: '1. Pemantauan Bising -> 2. Pengendalian Rekayasa/Admin -> 3. Uji Audiometri -> 4. Pemilihan APD Pendengaran -> 5. Edukasi.',
        practical: 'Audit kepatuhan implementasi HCP di fasilitas manufaktur berintensitas bising tinggi.'
      },
      {
        name: 'Modul 2: Pengoperasian Audiometer & Analisis Baseline vs Annual',
        theory: 'Frekuensi uji 500, 1000, 2000, 3000, 4000, 6000, 8000 Hz, kriteria Standard Threshold Shift (STS: pergeseran rata-rata 10 dB pada 2k, 3k, 4k Hz).',
        practical: 'Praktik pengujian audiometri nada murni dalam soundproof booth dan plotting kurva audiogram.'
      }
    ],
    equipment: ['Pure-Tone Diagnostic Audiometer terkalibrasi ANSI.', 'Soundproof Audiometric Testing Booth.', 'Earplug Fit-Testing System.'],
    participants: ['Dokter Perusahaan, Paramedis Hiperkes, Safety Officer, dan Industrial Hygienist.'],
    tableData: {
      headers: ['Tingkat Derajat Ketulian (Audiogram)', 'Ambang Dengar Rata-Rata (dB)', 'Dampak Fungsional Pendengaran'],
      rows: [
        ['Normal', '0 – 25 dB', 'Dapat mendengar bisikan halus dengan jelas'],
        ['Tuli Ringan (Mild)', '26 – 40 dB', 'Sulit mendengar suara bisikan atau percakapan di tempat ramai'],
        ['Tuli Sedang (Moderate)', '41 – 55 dB', 'Sulit mendengar percakapan normal tanpa bantuan'],
        ['Tuli Berat (Severe)', '56 – 70 dB', 'Hanya mendengar suara teriakan keras'],
        ['Tuli Sangat Berat (Profound)', '> 90 dB', 'Tidak dapat mendengar suara percakapan sama sekali']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/pengukuran-kebisingan-dan-getaran/', label: 'Pelatihan Pengukuran Kebisingan' },
      { href: '/kategori-pelatihan/dokter-perusahaan-hiperkes/', label: 'Pelatihan Hiperkes Dokter' }
    ],
    faqs: [
      {
        q: 'Kapan seorang pekerja dinyatakan mengalami Standard Threshold Shift (STS)?',
        a: 'Pekerja dinyatakan mengalami STS menurut standar OSHA/K3 jika terjadi perubahan rata-rata ambang dengar sebesar 10 dB atau lebih pada frekuensi 2000, 3000, dan 4000 Hz pada salah satu atau kedua telinga dibandingkan dengan audiogram dasar (baseline).'
      }
    ]
  },

  // 71. Spirometri & Kesehatan Paru Kerja
  {
    key: 'spirometri-dan-kesehatan-paru-kerja',
    title: 'Pelatihan Pemeriksaan Kesehatan Paru Kerja & Spirometri',
    h1: 'Pelatihan Spirometri Industri: Uji Fungsi Paru (FVC/FEV1), Deteksi Dini Asma Kerja & Penyakit Paru Obstruktif/Restriktif',
    meta: 'Pelatihan spirometri kerja: teknik uji FVC, FEV1, FEV1/FVC ratio, kurva volume-waktu, kriteria keberterimaan ATS/ERS, dan surveilans kesehatan paru pekerja terpapar debu.',
    imgAlt: 'Paramedis memandu pekerja melakukan hembusan napas paksa ke dalam corong spirometer digital',
    related: ['higiene-industri', 'dokter-perusahaan-hiperkes', 'pemeriksaan-kesehatan-kerja-mcu'],
    intro: 'Penyakit Paru Akibat Kerja seperti Silikosis, Asbestosis, Bisinosis (debu kapas), dan Asma Akibat Kerja berkembang secara lambat namun merusak fungsi ventilasi paru secara permanen. Pengujian fungsi paru berkala dengan <strong>Spirometri Terstandar ATS/ERS</strong> merupakan metode skrining wajib untuk pekerja yang terpapar debu, uap kimia, dan gas iritan.',
    hazards: [
      '<strong>Restriksi Paru Permanen:</strong> Jaringan paru mengeras (fibrosis) sehingga kapasitas vital paru (FVC) anjlok drastis.',
      '<strong>Obstruksi Saluran Napas Parah:</strong> Penyempitan bronkus kronis yang menurunkan volume hembus detik pertama (FEV1).',
      '<strong>Hasil Uji False-Negative:</strong> Kesalahan manuver tiupan pekerja menghasilkan data kapasitas paru yang bias dan tidak valid.'
    ],
    regulations: ['<strong>Permenaker No. 5 Tahun 2018</strong>.', '<strong>Standar ATS/ERS Task Force: Standardization of Spirometry</strong>.'],
    modules: [
      {
        name: 'Modul 1: Fisiologi Sistem Pernapasan & Parameter Spirometri',
        theory: 'Forced Vital Capacity (FVC), Forced Expiratory Volume in 1 Second (FEV1), rasio FEV1/FVC, Peak Expiratory Flow (PEF), Lower Limit of Normal (LLN).',
        practical: 'Interpretasi kurva grafik Volume-Time dan Flow-Volume Loop normal vs patologis.'
      },
      {
        name: 'Modul 2: Kriteria Kualitas & Keberterimaan Uji ATS/ERS',
        theory: 'Kriteria Acceptability (Start of test bebas ragu, durasi hembus min 6 detik) dan Repeatability (Selisih 2 nilai tertinggi < 150 mL).',
        practical: 'Praktik manuver instruksi hembusan napas paksa pada subjek uji hingga mencapai 3 kurva acceptable.'
      }
    ],
    equipment: ['Diagnostic Digital Spirometer dengan Disposable Turbine / Pneumotachograph.', 'Kalibrator Syringe Presisi 3 Liter.', 'Nose Clip & Disposable Mouthpiece Filter.'],
    participants: ['Dokter Perusahaan, Paramedis Hiperkes, dan Staff Laboratorium Medis Kerja.'],
    tableData: {
      headers: ['Pola Gangguan Fungsi Paru', 'Nilai FVC (% Prediksi)', 'Nilai FEV1 (% Prediksi)', 'Rasio FEV1/FVC (%)'],
      rows: [
        ['Normal', '>= 80%', '>= 80%', '>= 70% (atau > LLN)'],
        ['Pola Obstruktif (Asma/PPOK)', 'Normal (>= 80%)', 'Menurun (< 80%)', 'Menurun (< 70%)'],
        ['Pola Restriktif (Silikosis/Fibrosis)', 'Menurun (< 80%)', 'Menurun (< 80%)', 'Normal / Meningkat (>= 70%)'],
        ['Pola Campuran (Mixed)', 'Menurun (< 80%)', 'Menurun (< 80%)', 'Menurun (< 70%)']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/dokter-perusahaan-hiperkes/', label: 'Pelatihan Hiperkes Dokter' },
      { href: '/kategori-pelatihan/higiene-industri/', label: 'Pelatihan Higiene Industri' }
    ],
    faqs: [
      {
        q: 'Berapa kali pengulangan manuver tiupan yang harus dilakukan dalam satu sesi pemeriksaan spirometri?',
        a: 'Sesuai standar ATS/ERS, pasien wajib melakukan manuver hembusan napas paksa minimal 3 kali dan maksimal 8 kali percobaan hingga diperoleh minimal 3 manuver yang memenuhi kriteria keberterimaan (acceptable) dengan selisih dua nilai FVC dan FEV1 tertinggi tidak lebih dari 150 mL (repeatable).'
      }
    ]
  },

  // 72. Pengukuran Kebisingan & Getaran
  {
    key: 'pengukuran-kebisingan-dan-getaran',
    title: 'Pelatihan Pengukuran Kebisingan & Getaran Tempat Kerja',
    h1: 'Pelatihan Pengukuran Kebisingan & Getaran: Pemetaan Noise Mapping, Dosimeter Dosis Harian, dan Human Vibration Permenaker No. 5/2018',
    meta: 'Pelatihan teknis pengukuran bising dan getaran: kalibrasi Sound Level Meter (SLM), noise mapping kontur kebisingan, pengukuran Hand-Arm Vibration (HAV) dan Whole-Body Vibration (WBV).',
    imgAlt: 'Teknisi higiene industri memegang sound level meter melakukan pengukuran intensitas bising di dekat turbin generator',
    related: ['audiometri-dan-hearing-conservation', 'higiene-industri', 'ergonomi-industri'],
    intro: 'Kebisingan mesin industri dan getaran mekanis (baik getaran seluruh tubuh pada alat berat maupun getaran tangan-lengan pada peralatan pneumatik) merusak saraf dan pembuluh darah secara permanen jika tidak diukur dan dikendalikan sesuai regulasi <strong>Permenaker No. 5 Tahun 2018</strong>.',
    hazards: [
      '<strong>Sindrom Jari Putih (Hand-Arm Vibration Syndrome / HAVS):</strong> Kerusakan saraf dan pembuluh darah jari tangan akibat getaran bor/jackhammer.',
      '<strong>Kerusakan Tulang Belakang Akibat Whole-Body Vibration (WBV):</strong> Getaran kabin alat berat tambang memicu spondylosis tulang belakang.',
      '<strong>Noise Induced Hearing Loss (NIHL):</strong> Ketulian akibat kebisingan kontinu di atas 85 dBA.'
    ],
    regulations: ['<strong>Permenaker No. 5 Tahun 2018</strong>.', '<strong>Standar ISO 5349</strong> (Hand-Arm Vibration) dan <strong>ISO 2631</strong> (Whole-Body Vibration).'],
    modules: [
      {
        name: 'Modul 1: Fisika Bunyi, Pembobotan Akustik & Kalibrasi',
        theory: 'Frekuensi (Hz), Tekanan Suara (dB), Pembobotan A, C, Z; Time Weighting Fast/Slow/Impulse, Leq, Lavg.',
        practical: 'Kalibrasi akustik Sound Level Meter menggunakan calibrator 94 dB / 114 dB pada 1000 Hz.'
      },
      {
        name: 'Modul 2: Pemetaan Kebisingan Fasilitas (Noise Mapping Grid)',
        theory: 'Metode grid 5x5 meter, penarikan garis isobar kebisingan, zonasi wajib APD Ear Protection (>85 dBA).',
        practical: 'Pembuatan peta kontur kebisingan 2D lantai pabrik menggunakan software interpolasi.'
      },
      {
        name: 'Modul 3: Pengukuran Getaran Mekanis (HAV & WBV)',
        theory: 'Akselerasi getaran triaksial (sumbu X, Y, Z), nilai ekuivalen A(8), batas NAB Hand-Arm 5 m/s² dan Whole-Body 0.5 m/s².',
        practical: 'Pengukuran getaran gerinda tangan menggunakan triaxial accelerometer sensor.'
      }
    ],
    equipment: ['Sound Level Meter Class 1 dengan Octave Band Filter.', 'Acoustic Calibrator 94/114 dB.', 'Human Vibration Meter Triaxial (HAV & WBV Pads).'],
    participants: ['Safety Officer, Industrial Hygienist, Facility Engineer, dan Teknisi K3 Lingkungan Kerja.'],
    tableData: {
      headers: ['Jenis Paparan Fisika', 'Alat Ukur Standar', 'Nilai Ambang Batas (NAB)', 'Efek Patologis Jika Melampaui'],
      rows: [
        ['Kebisingan Kontinu', 'Sound Level Meter / Noise Dosimeter', '85 dBA (8 Jam Kerja)', 'Noise-Induced Hearing Loss (Tuli Permanen)'],
        ['Kebisingan Impulsif / Dentuman', 'Peak Sound Level Meter', '140 dBC Peak', 'Ruptur membran timpani gendang telinga seketika'],
        ['Getaran Tangan-Lengan (HAV)', 'Triaxial Accelerometer Adapter', '5.0 m/s² (8 Jam Kerja)', 'Hand-Arm Vibration Syndrome (White Finger Disease)'],
        ['Getaran Seluruh Tubuh (WBV)', 'Seat Pad Accelerometer ISO 2631', '0.5 m/s² (8 Jam Kerja)', 'Nyeri pinggang bawah kronis & herniasi diskus']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/audiometri-dan-hearing-conservation/', label: 'Pelatihan Audiometri' },
      { href: '/kategori-pelatihan/higiene-industri/', label: 'Pelatihan Higiene Industri' }
    ],
    faqs: [
      {
        q: 'Berapa kenaikan intensitas bising yang memotong waktu paparan aman menjadi setengahnya (Exchange Rate)?',
        a: 'Berdasarkan Permenaker No. 5 Tahun 2018 dan standar ACGIH, digunakan exchange rate 3 dB: jika kebisingan naik 3 dB (dari 85 dBA menjadi 88 dBA), waktu paparan kerja maksimum yang diizinkan terpangkas separuhnya dari 8 jam menjadi 4 jam per hari.'
      }
    ]
  },

  // 73. Pengukuran Kualitas Udara Ruangan (IAQ)
  {
    key: 'pengukuran-kualitas-udara-ruangan',
    title: 'Pelatihan Pengukuran Kualitas Udara Dalam Ruang (IAQ)',
    h1: 'Pelatihan Indoor Air Quality (IAQ): Parameter Karbon Dioksida, VOCs, Jamur/Bakteri, dan Standar Permenaker No. 5/2018',
    meta: 'Pelatihan indoor air quality (IAQ): pengukuran konsentrasi CO2, karbon monoksida, senyawa organik volatil (TVOC), formaldehida, mikrobiologi udara, dan laju ventilasi gedung.',
    imgAlt: 'Auditor kualitas udara memantau instrumen IAQ meter mendeteksi konsentrasi CO2 dan TVOC di dalam ruang kantor ber-AC',
    related: ['higiene-industri', 'pengendalian-vektor-dan-sanitasi-industri', 'k3-perkantoran-dan-gedung-pemerintah'],
    intro: 'Kualitas Udara Dalam Ruang (<em>Indoor Air Quality / IAQ</em>) yang buruk di gedung perkantoran, rumah sakit, dan ruang kontrol industri memicu fenomena <em>Sick Building Syndrome (SBS)</em>—seperti pusing massal, kelelahan kronis, iritasi mata, dan penurunan konsentrasi kerja hingga 30%.',
    hazards: [
      '<strong>Akumulasi Gas Karbon Dioksida (CO2 > 1000 ppm):</strong> Ventilasi udara segar yang buruk menyebabkan kantuk parah, sesak napas, dan penurunan kognitif.',
      '<strong>Paparan Senyawa Organik Volatil (TVOC):</strong> Emisi kimiawi dari cat, lem karpet, dan pembersih memicu iritasi saluran napas kronis.',
      '<strong>Kontaminasi Jamur & Spora Biologis (Mold Infestation):</strong> Saluran ducting AC lembab menyebarkan spora Aspergillus dan Legionella.'
    ],
    regulations: ['<strong>Permenaker No. 5 Tahun 2018</strong> (Standar Kualitas Udara Ruang Perkantoran).', '<strong>Permenkes No. 48 Tahun 2016</strong> tentang Standar K3 Perkantoran.', '<strong>Standar ASHRAE 62.1</strong> (Ventilation for Acceptable Indoor Air Quality).'],
    modules: [
      {
        name: 'Modul 1: Parameter Kimia & Fisika Udara Dalam Ruang',
        theory: 'Suhu (23-26°C), Kelembaban (40-60% RH), CO2 (<1000 ppm), CO (<9 ppm), Formaldehida, TVOC, Partikulat PM2.5/PM10.',
        practical: 'Audit pengukuran real-time multi-parameter IAQ pada 10 ruangan kantor berbeda.'
      },
      {
        name: 'Modul 2: Evaluasi Laju Pertukaran Udara & Sistem Tata Udara (HVAC)',
        theory: 'Air Changes per Hour (ACH), pasokan udara segar (Outdoor Air Flow), inspeksi kebersihan filter HEPA dan cooling coil.',
        practical: 'Pengukuran debit aliran udara pada diffuser AC menggunakan balometer capture hood.'
      }
    ],
    equipment: ['Multi-Parameter IAQ Monitor (CO2, CO, Temp, RH, TVOC, PM2.5).', 'Air Flow Capture Hood (Balometer).', 'Microbial Air Sampler.'],
    participants: ['Building Manager, HSE Officer, Facility Engineer, dan Teknisi HVAC Gedung.'],
    tableData: {
      headers: ['Parameter Kualitas Udara Ruang', 'Nilai Standar Maksimal (Permenaker 5/2018)', 'Dampak Jika Melebihi Batas'],
      rows: [
        ['Karbon Dioksida (CO2)', 'Maksimal 1.000 ppm', 'Mengantuk, sakit kepala berat, penurunan fokus tajam'],
        ['Karbon Monoksida (CO)', 'Maksimal 9.0 ppm', 'Keracunan hipoksia jaringan, pusing, mual'],
        ['Total VOC (TVOC)', 'Maksimal 3.0 ppm', 'Iritasi membran mukosa mata/hidung, alergi kronis'],
        ['Partikulat Debu PM2.5', 'Maksimal 0.035 mg/m³ (35 µg/m³)', 'Penyumbatan alveoli paru, gangguan kardiovaskular'],
        ['Total Bakteri / Jamur Udara', 'Maksimal 700 CFU/m³ (Bakteri) / 1000 (Jamur)', 'Infeksi pernapasan, asma bronkiale, Sick Building Syndrome']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/higiene-industri/', label: 'Pelatihan Higiene Industri' },
      { href: '/kategori-pelatihan/k3-perkantoran-dan-gedung-pemerintah/', label: 'Pelatihan K3 Perkantoran' }
    ],
    faqs: [
      {
        q: 'Apa indikator paling cepat untuk mengetahui apakah ventilasi udara di dalam gedung memadai atau tidak?',
        a: 'Indikator paling cepat adalah konsentrasi gas Karbon Dioksida (CO2). Jika kadar CO2 di dalam ruangan ber-AC melampaui 1.000 ppm, hal ini membuktikan bahwa laju pertukaran udara segar dari luar (fresh air intake) sangat kurang dan ventilasi tidak memadai.'
      }
    ]
  },

  // 74. Sanitasi Industri & Vektor Penyakit
  {
    key: 'pengendalian-vektor-dan-sanitasi-industri',
    title: 'Pelatihan Sanitasi Industri & Pengendalian Vektor Penyakit',
    h1: 'Pelatihan Sanitasi Tempat Kerja & Pengendalian Vektor: Higiene Kantin Pabrik, Pengelolaan Air Bersih, dan Pest Control Terpadu',
    meta: 'Pelatihan sanitasi industri: higiene kantin/katering pabrik, uji kualitas air minum industri, pengelolaan limbah domestik, dan integrated pest management (IPM).',
    imgAlt: 'Petugas sanitasi industri memeriksa kebersihan fasilitas dapur kantin pabrik dan mengambil sampel uji air minum',
    related: ['higiene-industri', 'k3-industri-makanan-dan-minuman', 'pengelolaan-limbah-b3'],
    intro: 'Wabah keracunan makanan massal di kantin pabrik atau penyebaran penyakit tular vektor (Demam Berdarah, Leptospirosis, Malaria di camp tambang/perkebunan) dapat melumpuhkan operasional ratusan karyawan sekaligus. Pelatihan Sanitasi Industri mendoktrinkan tata kelola fasilitas sanitasi yang higienis dan terstandar.',
    hazards: [
      '<strong>Keracunan Makanan Massal Karyawan:</strong> Kontaminasi silang bakteri Salmonella/E. Coli dari katering yang tidak memenuhi standar higiene sanitasi pangan.',
      '<strong>Wabah Leptospirosis dari Hama Tikus:</strong> Kencing tikus di gudang penyimpanan mencemari kemasan makanan dan air kerja.',
      '<strong>Kontaminasi Air Bersih:</strong> Sumur air pabrik tercemar bakteri coliform akibat rembesan septic tank yang terlalu dekat (<10 meter).'
    ],
    regulations: ['<strong>Permenaker No. 5 Tahun 2018</strong> (Standar Fasilitas Kebersihan Tempat Kerja).', '<strong>Permenkes No. 2 Tahun 2023</strong> tentang Peraturan Pelaksanaan PP No. 66/2014 tentang Kesehatan Lingkungan.'],
    modules: [
      {
        name: 'Modul 1: Standar Fasilitas Sanitasi Tempat Kerja Permenaker 5/2018',
        theory: 'Rasio jumlah jamban/toilet per jumlah pekerja (1:15, 2:35, dst), pemisahan toilet pria/wanita, ruang ganti pakaian, sarana air bersih.',
        practical: 'Audit rasio kecukupan fasilitas toilet dan sarana cuci tangan di pabrik padat karya.'
      },
      {
        name: 'Modul 2: Higiene Sanitasi Pangan & Kantin Pabrik',
        theory: 'Prinsip Hazard Analysis and Critical Control Point (HACCP) kantin, suhu penyimpanan bahan mentah vs matang, sertifikat laik higiene katering.',
        practical: 'Uji swab kebersihan alat makan menggunakan ATP bioluminescence hygiene luminometer.'
      }
    ],
    equipment: ['ATP Surface Hygiene Swab Luminometer.', 'Water Quality Test Kit (E. Coli, pH, Kekeruhan).'],
    participants: ['Petugas Sanitasi, HSE Officer, Tim GA/Fasilitas, Pengelola Kantin Pabrik, dan Camp Coordinator Tambang.'],
    tableData: {
      headers: ['Jumlah Tenaga Kerja', 'Jumlah Minimal Jamban / Toilet Wajib (Permenaker 5/2018)', 'Kebutuhan Air Bersih'],
      rows: [
        ['1 – 15 Orang', 'Minimal 1 Unit Toilet', 'Minimal 40 Liter / Orang / Hari'],
        ['16 – 35 Orang', 'Minimal 2 Unit Toilet', 'Minimal 40 Liter / Orang / Hari'],
        ['36 – 55 Orang', 'Minimal 3 Unit Toilet', 'Minimal 40 Liter / Orang / Hari'],
        ['56 – 80 Orang', 'Minimal 4 Unit Toilet', 'Minimal 40 Liter / Orang / Hari'],
        ['Setiap tambahan 40 orang', '+ 1 Unit Toilet Tambahan', 'Kapasitas reservoir air memadai']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/higiene-industri/', label: 'Pelatihan Higiene Industri' },
      { href: '/kategori-pelatihan/k3-industri-makanan-dan-minuman/', label: 'Pelatihan K3 Industri Makanan' }
    ],
    faqs: [
      {
        q: 'Berapa jarak minimal antara sumber air bersih dan septic tank / tempat pembuangan kotoran di tempat kerja?',
        a: 'Berdasarkan standar sanitasi lingkungan kesehatan kerja, jarak horizontal minimal antara sumur air bersih dan septic tank atau sumber pencemar tanah lainnya adalah sekurang-kurangnya 10 (sepuluh) meter pada tanah lempung biasa atau lebih jauh pada tanah berpasir/berbatu.'
      }
    ]
  },

  // 75. MCU Tenaga Kerja
  {
    key: 'pemeriksaan-kesehatan-kerja-mcu',
    title: 'Pelatihan Manajemen Medical Check-Up (MCU) Tenaga Kerja',
    h1: 'Pelatihan Manajemen Medical Check-Up (MCU) Tenaga Kerja: Desain Paket Pemeriksaan Khusus, Analisis Data Kesehatan, dan Kepatuhan Permenaker No. 2/1980',
    meta: 'Pelatihan manajemen MCU tenaga kerja: perancangan MCU Pra-Kerja, Berkala, Khusus, kriteria status Fit to Work (Fit, Fit with Restriction, Unfit), dan tren epidemiologi kesehatan kerja.',
    imgAlt: 'Dokter spesialis okupasi menganalisis tren data agregat hasil Medical Check-Up tahunan ribuan karyawan',
    related: ['dokter-perusahaan-hiperkes', 'petugas-p3k-di-tempat-kerja', 'spirometri-dan-kesehatan-paru-kerja', 'audiometri-dan-hearing-conservation'],
    intro: 'Pemeriksaan Kesehatan Tenaga Kerja (<em>Medical Check-Up / MCU</em>) bukan sekadar formalitas tahunan, melainkan instrumen hukum dan medis untuk menilai kelaikan kerja (<em>Fit to Work</em>), mendeteksi dini Penyakit Akibat Kerja, serta melindungi perusahaan dari tuntutan hukum kompensasi kecelakaan.',
    hazards: [
      '<strong>Salah Menempatkan Pekerja Unfit di Area Kritis:</strong> Menempatkan pekerja dengan riwayat epilepsi/hipertensi berat sebagai operator crane atau di ketinggian.',
      '<strong>Paket MCU yang Tidak Tepat Sasaran:</strong> Memberikan paket MCU generik tanpa memeriksa biomarker pajanan kimia/kebisingan spesifik.',
      '<strong>Kebocoran Kerahasiaan Data Medis:</strong> Menyebarkan riwayat diagnosis penyakit sensitif pekerja tanpa informed consent.'
    ],
    regulations: ['<strong>Permenaker No. Per.02/MEN/1980</strong> tentang Pemeriksaan Kesehatan Tenaga Kerja dalam Penyelenggaraan Keselamatan Kerja.', '<strong>UU No. 1 Tahun 1970</strong>.'],
    modules: [
      {
        name: 'Modul 1: Jenis Pemeriksaan Kesehatan Tenaga Kerja (Permenaker 02/1980)',
        theory: 'Pemeriksaan Awal (Pre-Employment), Pemeriksaan Berkala (Annual MCU), Pemeriksaan Khusus (Pajanan Spesifik), Pemeriksaan Purna Bakti.',
        practical: 'Perancangan matriks paket MCU berbasis profil risiko bahaya departemen (Job Hazard Profile).'
      },
      {
        name: 'Modul 2: Kategori Status Kelaikan Kerja (Fit-to-Work Determination)',
        theory: 'Kriteria Fit for Work, Fit with Restrictions (Pembatasan Tugas), Temporarily Unfit (Tidak Laik Sementara), Permanently Unfit.',
        practical: 'Studi kasus penetapan status Fit-to-Work pada pekerja diabetes yang ditugaskan di offshore rig.'
      }
    ],
    equipment: ['Software Analisis Data Agregat MCU & Trend Tracker Kesehatan Kerja.', 'Format Baku Pelaporan MCU Kemnaker RI.'],
    participants: ['HR Manager, Dokter Perusahaan, HSE Lead, dan Paramedis Perusahaan.'],
    tableData: {
      headers: ['Pajanan Bahaya Kerja Spesifik', 'Paket Pemeriksaan Khusus Wajib', 'Biomarker / Target Organ'],
      rows: [
        ['Pajanan Debu Silika / Asbes / Tambang', 'Spirometri + Rontgen Toraks Standar ILO', 'Fungsi kapasitas paru & opasitas jaringan paru'],
        ['Pajanan Kebisingan > 85 dBA', 'Pure-Tone Audiometri Skrining', 'Ambang dengar frekuensi 500 – 8000 Hz'],
        ['Pajanan Pelarut Organik (Benzena/Toluen)', 'Uji Fungsi Hati (SGOT/SGPT) & Urin Metabolit', 'Enzim transaminase & asam fenol urin'],
        ['Pekerja Ketinggian / Ruang Terbatas', 'EKG Jantung, Romberg Test, Uji Buta Warna', 'Sistem kardiovaskular & keseimbangan vestibuler']
      ]
    },
    links: [
      { href: '/kategori-pelatihan/dokter-perusahaan-hiperkes/', label: 'Pelatihan Hiperkes Dokter' },
      { href: '/kategori-pelatihan/spirometri-dan-kesehatan-paru-kerja/', label: 'Pelatihan Spirometri' }
    ],
    faqs: [
      {
        q: 'Apakah perusahaan wajib melaporkan hasil Medical Check-Up tahunan ke Disnaker?',
        a: 'Ya. Berdasarkan Permenaker No. 02 Tahun 1980, perusahaan melalui Dokter Pemeriksa Kesehatan Tenaga Kerja yang ditunjuk wajib menyampaikan laporan hasil pemeriksaan kesehatan berkala tenaga kerja kepada Kepala Kantor Dinas Ketenagakerjaan setempat sekurang-kurangnya 1 (satu) tahun sekali.'
      }
    ]
  },
  ...batch3ConstructionAndMining,
  ...batch3ManagementAndSpecialized
];

console.log(`Loaded TOTAL ${batch3List.length} master programs for Batch 3.`);
