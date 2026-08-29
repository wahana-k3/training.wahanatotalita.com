import { MultiArchetypeProgramDetail } from './multi-archetype-renderer';

export const batch7CompliancePagesPart2: MultiArchetypeProgramDetail[] = [
  // 7. Pengukuran Nilai Ambang Batas NAB
  {
    key: 'pengukuran-nilai-ambang-batas-nab',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/pengukuran-nilai-ambang-batas-nab/',
    archetype: 'compliance_guide',
    title: 'Pengukuran Nilai Ambang Batas (NAB) Lingkungan Kerja Permenaker 5/2018',
    h1: 'Panduan Pengukuran & Pengendalian Nilai Ambang Batas (NAB) Faktor Fisika, Kimia, Biologi, Ergonomi, & Psikologi Sesuai Permenaker No. 5 Tahun 2018',
    meta: 'Panduan pengukuran NAB Permenaker 5/2018: riksa uji kebisingan sound level meter, iklim kerja ISBB, pencahayaan lux, debu & laporan lab terakreditasi.',
    imgAlt: 'Petugas higiene industri mengukur intensitas kebisingan menggunakan sound level meter terkalibrasi di area mesin produksi pabrik',
    related: ['higiene-industri', 'penerapan-ergonomi-perkantoran', 'pemeriksaan-kesehatan-kerja-mcu', 'ahli-k3-umum-kemnaker'],
    intro: 'Berdasarkan <strong>Permenaker No. 5 Tahun 2018 tentang Keselamatan dan Kesehatan Kerja Lingkungan Kerja</strong>, setiap pengurus tempat kerja <strong>wajib melakukan pengukuran dan pengujian lingkungan kerja secara berkala</strong> (minimal 1 tahun sekali). Pengukuran ini mencakup faktor fisika (kebisingan, iklim kerja panas, pencahayaan, getaran, radiasi), faktor kimia (debu, gas beracun, uap pelarut), faktor biologi, faktor ergonomi, dan faktor psikologi kerja untuk mencegah Penyakit Akibat Kerja (PAK).',
    hazards: [
      '<strong>Ketulian Permanen Akibat Kebisingan Mesin (NIHL):</strong> Bekerja di area bising > 85 dBA selama 8 jam per hari tanpa alat pelindung telinga.',
      '<strong>Tekanan Panas Ekstrem (Heat Stroke) di Ruang Boiler:</strong> Indeks Suhu Basah dan Bola (ISBB) melampaui batas toleransi fisiologis tubuh manusia.',
      '<strong>Pneumokoniosis & Silikosis Paru Akibat Debu:</strong> Inhalasi partikel debu respirabel di atas batas NAB 3 mg/m³ yang memicu fibrosis paru permanen.',
      '<strong>Kelelahan Mata & Kerusakan Penglihatan:</strong> Penerangan meja kerja di bawah standar minimal lux yang memicu kelelahan dan cacat produk.'
    ],
    regulations: [
      '<strong>Permenaker No. 5 Tahun 2018</strong> tentang Keselamatan dan Kesehatan Kerja Lingkungan Kerja.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Kepmenkes No. 1405/MENKES/SK/XI/2002</strong> tentang Persyaratan Kesehatan Lingkungan Kerja Perkantoran dan Industri.'
    ],
    modules: [
      {
        name: 'Modul 1: Landasan Hukum Permenaker 5/2018 & Nilai Ambang Batas (NAB) Faktor Fisika',
        theory: 'Definisi NAB 8 jam kerja, Batas Pemaparan Singkat (BPSD/STEL), Kadar Tertinggi (Ceiling), standar kebisingan (85 dBA), pencahayaan (Lux), getaran (m/s²).',
        practical: 'Audit komparasi hasil uji lab lingkungan kerja terhadap tabel lampiran Permenaker No. 5 Tahun 2018.'
      },
      {
        name: 'Modul 2: Metodologi Pengukuran Sampling Udara Faktor Kimia & Debu Industri',
        theory: 'Prinsip penggunaan pompa hisap personal (Personal Dust Sampler), tabung sorben kimia, cyclone pemisah partikel PM2.5/PM10, kalibrasi laju alir (Flow Rate).',
        practical: 'Simulasi pemasangan dosimeter kebisingan personal dan air sampling pump pada pakaian kerja operator selama 8 jam.'
      },
      {
        name: 'Modul 3: Hierarki Pengendalian Lingkungan Kerja & Penyusunan Laporan Disnaker',
        theory: 'Pengendalian teknis rekayasa (Engineering Control seperti LEV dan enclosure peredam), pengendalian administratif (rotasi kerja), dan APD pernapasan.',
        practical: 'Penyusunan dokumen Laporan Pengujian Lingkungan Kerja resmi untuk pelaporan berkala ke Pengawas Ketenagakerjaan Disnaker.'
      }
    ],
    equipment: [
      'Digital Sound Level Meter Type 2 & Personal Noise Dosimeter.',
      'Heat Stress Monitor (Indeks Suhu Basah dan Bola / ISBB) Digital.',
      'Precision Digital Lux Meter (Range 0 - 50.000 Lux).',
      'Personal Air Sampling Pump dengan Filter Cassette Debu Respirabel.'
    ],
    participants: [
      'Industrial Hygienist, Safety Officer Lingkungan Kerja, Dokter Perusahaan / Paramedis Pabrik, HR Manager, dan Tim Lab Lingkungan Hidup.'
    ],
    tableData: {
      headers: ['Faktor Bahaya Lingkungan', 'Parameter yang Diukur', 'Nilai Ambang Batas (NAB Permenaker 5/2018)', 'Waktu Paparan Maksimum'],
      rows: [
        ['Kebisingan Kontinu', 'Intensitas Suara (dBA)', '85 dBA (Desibel A)', '8 Jam per Hari (40 Jam/Minggu)'],
        ['Iklim Kerja Panas (Heat Stress)', 'Indeks Suhu Basah dan Bola (ISBB)', '28.0°C (Beban Kerja Berat 75% Kerja)', '8 Jam Kerja Terjadwal Istirahat'],
        ['Pencahayaan Ruang Kerja', 'Tingkat Iluminasi (Lux)', '300 Lux (Pekerjaan Kantor / Mesin Halus)', 'Sepanjang Jam Kerja Aktif'],
        ['Getaran Lengan-Tangan', 'Percepatan Getaran (m/s²)', '5.0 m/s² (Hand-Arm Vibration)', '8 Jam per Hari'],
        ['Debu Partikulat Total', 'Konsentrasi Partikel (mg/m³)', '10 mg/m³ (Total Dust Inhalabel)', '8 Jam Kerja per Hari']
      ]
    },
    legalPenalties: [
      'Penerbitan Nota Pemeriksaan oleh Pengawas Ketenagakerjaan Disnaker jika tidak melakukan riksa uji tahunan.',
      'Sanksi penghentian proses produksi jika kadar gas beracun melampaui batas Kadar Tertinggi (Ceiling).',
      'Kewajiban menanggung biaya kompensasi seumur hidup bagi pekerja yang menderita cacat fungsi paru/telinga akibat PAK.'
    ],
    stepByStepGuide: [
      { step: '1. Pemetaan Titik Sampling Pengukuran', desc: 'Menentukan titik pengukuran representatif di lantai produksi, ruang genset, dan kantor.' },
      { step: '2. Pengujian oleh PJK3 / Lab Terakreditasi', desc: 'Melaksanakan pengukuran menggunakan peralatan terkalibrasi KAN oleh Ahli K3 Lingkungan Kerja.' },
      { step: '3. Evaluasi Hasil Uji terhadap Standar NAB', desc: 'Menganalisis parameter yang melebihi NAB dan menyusun rekomendasi rekayasa teknis.' },
      { step: '4. Pelaporan Resmi ke Disnaker Provinsi', desc: 'Menyerahkan buku laporan hasil uji lingkungan kerja sebagai bukti pemenuhan regulasi.' }
    ],
    links: [
      { href: '/kategori-pelatihan/higiene-industri/', anchor: 'Pelatihan Higiene Industri' },
      { href: '/kategori-pelatihan/pemeriksaan-kesehatan-kerja-mcu/', anchor: 'Panduan Pemeriksaan Kesehatan Kerja MCU' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 8. Pemeriksaan Kesehatan Kerja MCU
  {
    key: 'pemeriksaan-kesehatan-kerja-mcu',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/pemeriksaan-kesehatan-kerja-mcu/',
    archetype: 'compliance_guide',
    title: 'Standar Pemeriksaan Kesehatan Kerja (MCU Karyawan) Permenaker 2/1980',
    h1: 'Panduan Implementasi Pemeriksaan Kesehatan Tenaga Kerja (Medical Check Up / MCU): Standar Pemeriksaan Awal, Berkala, & Khusus Sesuai Permenaker No. 2/1980',
    meta: 'Panduan MCU karyawan Permenaker 2/1980: paket MCU awal, berkala & khusus, audiometri, spirometri, rontgen paru, dokter hiperkes & pelaporan Disnaker.',
    imgAlt: 'Dokter pemeriksa kesehatan kerja melakukan tes audiometri pendengaran dan spirometri paru pada karyawan pabrik',
    related: ['pengukuran-nilai-ambang-batas-nab', 'program-pencegahan-hiv-aids-narkoba', 'penerapan-ergonomi-perkantoran', 'k3-keselamatan-kerja'],
    intro: 'Pemeriksaan Kesehatan Tenaga Kerja (Medical Check Up / MCU) merupakan kewajiban hukum yang diatur secara tegas dalam <strong>Permenaker No. PER.02/MEN/1980</strong>. Setiap pengusaha wajib menyelenggarakan pemeriksaan kesehatan bagi seluruh pekerjanya untuk menilai status kelaikan kerja (Fit to Work), mendeteksi dini Penyakit Akibat Kerja (PAK), dan memastikan penempatan tenaga kerja sesuai dengan kondisi fisik dan mentalnya.',
    hazards: [
      '<strong>Penempatan Tenaga Kerja Tidak Layak Kerja (Unfit Placement):</strong> Karyawan dengan riwayat penyakit jantung berat ditempatkan bekerja di ketinggian.',
      '<strong>Penyakit Akibat Kerja (PAK) Terlambat Terdeteksi:</strong> Kerusakan paru atau ginjal kronis baru diketahui setelah kondisi stadium lanjut tak terobati.',
      '<strong>Sanksi Pelanggaran Ketenagakerjaan dari Disnaker:</strong> Perusahaan tidak menyelenggarakan MCU berkala tahunan bagi pekerja berisiko.',
      '<strong>Wabah Penularan Penyakit di Tempat Kerja:</strong> Karyawan penderita penyakit menular aktif (TBC, Hepatitis) bekerja tanpa skrining awal.'
    ],
    regulations: [
      '<strong>Permenaker No. PER.02/MEN/1980</strong> tentang Pemeriksaan Kesehatan Tenaga Kerja dalam Penyelenggaraan Keselamatan Kerja.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja (Pasal 8).',
      '<strong>Permenaker No. PER.01/MEN/1976</strong> tentang Kewajiban Latihan Hyperkes bagi Dokter Perusahaan.'
    ],
    modules: [
      {
        name: 'Modul 1: Tiga Kategori Pemeriksaan Kesehatan Kerja Menurut Permenaker 2/1980',
        theory: 'Pemeriksaan Kesehatan Sebelum Bekerja (Awal/Pre-Employment), Pemeriksaan Kesehatan Berkala (Periodik 1 Tahun Sekali), dan Pemeriksaan Kesehatan Khusus (Paska Sakit Lama / Paparan B3 Tinggi).',
        practical: 'Penyusunan matriks paket MCU yang disesuaikan dengan profil bahaya departemen (Job Health Hazard Matrix).'
      },
      {
        name: 'Modul 2: Parameter Pemeriksaan Klinis Spesifik Bahaya Kerja (Audiometri, Spirometri, Rontgen)',
        theory: 'Uji fungsi pendengaran audiometri untuk area bising >85 dBA, uji fungsi paru spirometri untuk area debu kimia, foto rontgen thoraks ILO classification untuk debu mineral.',
        practical: 'Analisis membaca grafik audiogram hearing loss dan grafik spirometri restriksi/obstruksi paru.'
      },
      {
        name: 'Modul 3: Penentuan Kategori Kelayakan Kerja (Fit to Work) & Pelaporan Resmi Disnaker',
        theory: 'Status Fit for Job, Fit with Restriction, Temporarily Unfit, Unfit for Job, tindak lanjut pengobatan, penyusunan formulir pelaporan MCU ke Disnaker.',
        practical: 'Penyusunan format Laporan Hasil Pemeriksaan Kesehatan Tenaga Kerja resmi untuk disahkan Dokter Pemeriksa Bersertifikat Kemnaker.'
      }
    ],
    equipment: [
      'Audiometer Digital Portable & Soundproof Audiometric Testing Booth.',
      'Diagnostic Digital Spirometer dengan Disposable Mouthpieces.',
      'Checklist Matriks Health Risk Assessment (HRA) & Paket MCU.',
      'Formulir Rekomendasi Medis Kelayakan Kerja (Fit to Work Certificate).'
    ],
    participants: [
      'Dokter Perusahaan (Bersertifikat Hiperkes), Paramedis / Perawat Perusahaan, HR Manager, Safety Officer, dan Anggota Tim P2K3.'
    ],
    tableData: {
      headers: ['Jenis Pemeriksaan MCU', 'Sasaran Tenaga Kerja', 'Parameter Pengujian Wajib', 'Frekuensi Penyelenggaraan'],
      rows: [
        ['MCU Awal (Pre-Employment)', 'Calon karyawan sebelum resmi diterima bekerja', 'Fisik Lengkap, Rontgen Dada, Darah & Urin Rutin, Buta Warna', 'Sekali saat Rekrutmen'],
        ['MCU Berkala (Periodic)', 'Seluruh karyawan aktif perusahaan', 'Fisik Dokter, Darah Lengkap, Fungsi Hati/Ginjal, EKG Jantung', 'Minimal 1 Kali Setiap Tahun'],
        ['MCU Khusus (Specific Hazard)', 'Pekerja terpapar bising, radiasi, uap kimia B3, ruang terbatas', 'Audiometri Bising, Spirometri Paru, Biomarker Toksik Urin', 'Setiap 6 Bulan s.d. 1 Tahun'],
        ['MCU Purna Tugas / Mutasi', 'Pekerja akan pensiun atau pindah divisi risiko berbeda', 'Pemeriksaan komparasi status kesehatan akhir', 'Saat Mutasi atau Pensiun']
      ]
    },
    legalPenalties: [
      'Pasal 8 UU No. 1 Tahun 1970: Sanksi pidana kurungan atau denda bagi pengusaha yang tidak memeriksa kesehatan tenaga kerjanya.',
      'Kewajiban ganti rugi penuh atas klaim penyakit akibat kerja yang timbul karena tidak adanya rekam medis pembanding awal.',
      'Temuan Mayor dalam Audit SMK3 PP 50/2012 dan audit kepatuhan BPJS Ketenagakerjaan.'
    ],
    stepByStepGuide: [
      { step: '1. Pemetaan Hazard Matrix Divisi', desc: 'Menentukan siapa saja pekerja yang wajib mendapatkan tes audiometri, spirometri, atau biomarker.' },
      { step: '2. Pemilihan Provider PJK3 Kesehatan', desc: 'Bekerja sama dengan klinik/lab terakreditasi yang memiliki Dokter Pemeriksa ber-SKP Kemnaker.' },
      { step: '3. Pelaksanaan MCU On-Site / Lab', desc: 'Menyelenggarakan pemeriksaan medis menyeluruh dengan menjaga kerahasiaan data pasien (etika medis).' },
      { step: '4. Pelaporan Hasil ke Disnaker', desc: 'Menyerahkan rekapitulasi status kesehatan karyawan (tanpa membuka rekam medis rahasia) ke Disnaker.' }
    ],
    links: [
      { href: '/kategori-pelatihan/pengukuran-nilai-ambang-batas-nab/', anchor: 'Panduan Pengukuran NAB Lingkungan Kerja' },
      { href: '/kategori-pelatihan/program-pencegahan-hiv-aids-narkoba/', anchor: 'Program Pencegahan HIV/AIDS & Narkoba di Tempat Kerja' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 9. Program Pencegahan HIV AIDS Narkoba
  {
    key: 'program-pencegahan-hiv-aids-narkoba',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/program-pencegahan-hiv-aids-narkoba/',
    archetype: 'compliance_guide',
    title: 'Program Pencegahan HIV/AIDS & Narkoba di Tempat Kerja (P2-HIV/AIDS)',
    h1: 'Panduan Penyusunan Kebijakan & Program Pencegahan dan Penanggulangan HIV/AIDS serta Penyalahgunaan Narkoba di Tempat Kerja Sesuai Kepmenaker No. 68/2004',
    meta: 'Panduan program P2-HIV/AIDS & Narkoba tempat kerja: kebijakan anti-stigma Kepmenaker 68/2004, tes urine narkoba BNN, edukasi VCT & audit Disnaker.',
    imgAlt: 'Dokter perusahaan memberikan edukasi dan konseling pencegahan HIV AIDS serta bahaya narkoba kepada karyawan di aula kantor',
    related: ['pemeriksaan-kesehatan-kerja-mcu', 'penerapan-ergonomi-perkantoran', 'ahli-k3-umum-kemnaker', 'k3-keselamatan-kerja'],
    intro: 'Penyalahgunaan Narkoba dan penyebaran HIV/AIDS di tempat kerja tidak hanya mengancam kesehatan individu tenaga kerja, tetapi juga berdampak langsung pada penurunan produktivitas, peningkatan angka absensi, dan risiko kecelakaan kerja akibat penurunan konsentrasi motorik. Berdasarkan <strong>Kepmenaker No. KEP.68/MEN/IV/2004</strong> dan <strong>Permenaker No. 11/2005</strong>, setiap perusahaan <strong>wajib memiliki kebijakan dan program terstruktur pencegahan HIV/AIDS dan Narkoba</strong> tanpa melakukan stigma dan diskriminasi.',
    hazards: [
      '<strong>Kecelakaan Kerja Fatal Akibat Pengaruh Narkoba:</strong> Pengemudi alat berat atau operator mesin bekerja di bawah pengaruh zat adiktif psikotropika.',
      '<strong>Stigma & Diskriminasi Terhadap ODHA di Tempat Kerja:</strong> Pemutusan Hubungan Kerja (PHK) sepihak melanggar hukum akibat status kesehatan HIV pekerja.',
      '<strong>Penularan Penyakit Melalui Darah di Tempat Kerja:</strong> Penanganan kecelakaan kerja perdarahan oleh petugas P3K tanpa APD standar medis (sarung tangan latex).',
      '<strong>Sanksi Pemeriksaan Disnaker Terkait Kebijakan P2-HIV:</strong> Ketiadaan dokumen kebijakan resmi pencegahan HIV/AIDS dan Narkoba saat audit K3.'
    ],
    regulations: [
      '<strong>Kepmenaker No. KEP.68/MEN/IV/2004</strong> tentang Pencegahan dan Penanggulangan HIV/AIDS di Tempat Kerja.',
      '<strong>Permenaker No. PER.11/MEN/VI/2005</strong> tentang Pencegahan dan Penanggulangan Penyalahgunaan dan Peredaran Gelap Narkotika di Tempat Kerja.',
      '<strong>UU No. 13 Tahun 2003</strong> tentang Ketenagakerjaan (Pasal Perlindungan Non-Diskriminasi).'
    ],
    modules: [
      {
        name: 'Modul 1: Landasan Regulasi Kepmenaker 68/2004 & Prinsip Non-Diskriminasi',
        theory: 'Kewajiban pengusaha menyusun kebijakan tertulis, larangan tes HIV wajib untuk rekrutmen/kenaikan jabatan, prinsip Voluntary Counseling and Testing (VCT), perlindungan kerahasiaan medis.',
        practical: 'Penyusunan draf Kebijakan Perusahaan Anti-Stigma HIV/AIDS & Narkoba bertandatangan Direktur.'
      },
      {
        name: 'Modul 2: Program Edukasi, Konseling, & Fasilitasi Pengobatan Tenaga Kerja',
        theory: 'Fakta medis penularan HIV (hanya melalui darah, cairan seksual, ASI), pencegahan penularan di lingkungan kerja, prosedur rujukan terapi Antiretroviral (ARV).',
        practical: 'Penyusunan kalender program sosialisasi berkala dan modul pelatihan peer educator (pendidik sebaya).'
      },
      {
        name: 'Modul 3: Kebijakan Bebas Narkoba (Drug-Free Workplace) & SOP Tes Urine Acak',
        theory: 'Prosedur pelaksanaan tes urine narkoba acak (Random Drug Test) bekerja sama dengan BNN/Klinik resmi, rantai pengawasan sampel (Chain of Custody), program rehabilitasi.',
        practical: 'Simulasi pelaksanaan tes urine 5-panel narkoba dan prosedur konseling tertutup bagi hasil positif.'
      }
    ],
    equipment: [
      'Drug Test Urine Multi-Panel (THC, MAMP, AMP, BZO, MOP) Rapid Strip Test.',
      'Media Edukasi K3 Poster & Leaflet Resmi P2-HIV/AIDS Kemenaker.',
      'Formulir Persetujuan Tindakan Medis (Informed Consent Form) untuk Tes Sukarela.',
      'Template SOP Drug-Free Workplace & Penanganan Kasus Ketergantungan.'
    ],
    participants: [
      'HR Manager, Dokter Perusahaan / Paramedis, Serikat Pekerja (SP/SB), Safety Officer, Pengurus P2K3, dan Tim Peer Educator.'
    ],
    tableData: {
      headers: ['Pilar Program', 'Kewajiban Pokok Perusahaan', 'Tindakan yang DILARANG HUKUM', 'Regulasi Acuan'],
      rows: [
        ['Kebijakan P2-HIV/AIDS', 'Menyusun komitmen tertulis bersama serikat pekerja', 'Melakukan tes HIV wajib sebagai syarat rekrutmen', 'Kepmenaker 68/2004 Pasal 5'],
        ['Kerahasiaan Status Medis', 'Menjamin data hasil VCT hanya diketahui dokter & pasien', 'Mempublikasikan atau membuka status ODHA pekerja', 'Kepmenaker 68/2004 Pasal 4'],
        ['Program Bebas Narkoba', 'Menggelar tes urine berkala & edukasi bahaya zat adiktif', 'Menghukum tanpa opsi konseling rehabilitasi resmi', 'Permenaker 11/2005 Pasal 8'],
        ['Penghargaan K3 Zero Stigma', 'Pelaporan program P2-HIV berkala ke Disnaker', 'Melakukan PHK sepihak atas dasar status HIV positif', 'Kepmenaker 68/2004 Pasal 7']
      ]
    },
    legalPenalties: [
      'Gugatan Pengadilan Hubungan Industrial (PHI) jika melakukan PHK sepihak terhadap pekerja ODHA.',
      'Sanksi administratif dari Disnaker bagi perusahaan yang tidak memiliki program P2-HIV saat verifikasi audit.',
      'Kehilangan hak mengajukan penghargaan K3 Tingkat Nasional (Penghargaan K3 P2-HIV/AIDS Kemnaker).'
    ],
    stepByStepGuide: [
      { step: '1. Perumusan Kebijakan Tertulis', desc: 'Menyusun dokumen kebijakan perlindungan anti-stigma dan komitmen tempat kerja bebas narkoba.' },
      { step: '2. Pembentukan Tim Kerja P2-HIV & Narkoba', desc: 'Menunjuk dokter perusahaan, HR, dan perwakilan serikat pekerja sebagai tim pelaksana.' },
      { step: '3. Penyelenggaraan Edukasi & Tes Sukarela', desc: 'Mengadakan sesi seminar edukasi, pelatihan peer educator, dan fasilitasi VCT sukarela.' },
      { step: '4. Pengajuan Penghargaan K3 Kemnaker', desc: 'Mendokumentasikan seluruh kegiatan untuk evaluasi penghargaan program P2-HIV/AIDS tahunan.' }
    ],
    links: [
      { href: '/kategori-pelatihan/pemeriksaan-kesehatan-kerja-mcu/', anchor: 'Standar Pemeriksaan Kesehatan MCU' },
      { href: '/kategori-pelatihan/penerapan-ergonomi-perkantoran/', anchor: 'Penerapan Ergonomi Perkantoran' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 10. Penerapan Ergonomi Perkantoran
  {
    key: 'penerapan-ergonomi-perkantoran',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/penerapan-ergonomi-perkantoran/',
    archetype: 'compliance_guide',
    title: 'Penerapan Ergonomi Perkantoran & Penilaian Risiko RULA/REBA Permenaker 5/2018',
    h1: 'Panduan Penerapan Ergonomi Perkantoran & Evaluasi Risiko Postur Kerja (RULA, REBA, & ROSA) untuk Pencegahan Musculoskeletal Disorders (MSDs)',
    meta: 'Panduan ergonomi perkantoran Permenaker 5/2018: penataan meja kursi kerja ergonomis, penilaian postur RULA & REBA, pencegahan sakit pinggang LBP & Carpal Tunnel.',
    imgAlt: 'Karyawan kantor mendemonstrasikan postur duduk ergonomis di depan layar komputer dengan sudut pandang dan sandaran punggung yang tepat',
    related: ['pengukuran-nilai-ambang-batas-nab', 'pemeriksaan-kesehatan-kerja-mcu', 'k3-keselamatan-kerja', 'ahli-k3-umum-kemnaker'],
    intro: 'Gangguan Otot Rangka Akibat Kerja (Musculoskeletal Disorders / MSDs seperti Low Back Pain, Carpal Tunnel Syndrome, leher kaku, dan ketegangan bahu) merupakan penyebab nomor satu penurunan produktivitas dan klaim absensi sakit di sektor perkantoran, perbankan, dan call center. <strong>Permenaker No. 5 Tahun 2018 tentang K3 Lingkungan Kerja</strong> dan <strong>Permenkes No. 48 Tahun 2016</strong> mewajibkan setiap tempat kerja menerapkan standar ergonomi terpadu.',
    hazards: [
      '<strong>Nyeri Punggung Bawah Kronis (Chronic Low Back Pain):</strong> Duduk statis berjam-jam dengan posisi membungkuk tanpa penopang lumbar kursi.',
      '<strong>Sindrom Terowongan Karpal (Carpal Tunnel Syndrome):</strong> Pengetikan berulang pada keyboard dan mouse dengan pergelangan tangan menekuk tajam.',
      '<strong>Sindrom Ketegangan Mata Digital (Computer Vision Syndrome):</strong> Layar monitor silau dan jarak pandang terlalu dekat yang memicu mata kering dan pusing.',
      '<strong>Cidera Angkat Beban Manual (Manual Handling Spine Injury):</strong> Mengangkat dus dokumen arsip berat tanpa menggunakan teknik tekuk lutut.'
    ],
    regulations: [
      '<strong>Permenaker No. 5 Tahun 2018</strong> tentang K3 Lingkungan Kerja (Pasal Ergonomi Kerja).',
      '<strong>Permenkes No. 48 Tahun 2016</strong> tentang Standar Keselamatan dan Kesehatan Kerja Perkantoran.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Prinsip Dasar Biomekanika Kerja & Standar Workstation Ergonomis',
        theory: 'Prinsip posisi netral tubuh (Neutral Body Posture), aturan 90 derajat siku/lutut, penataan ketinggian monitor sejajar mata, pencahayaan bebas silau.',
        practical: 'Audit penyesuaian posisi meja, kursi hidrolik, footrest, dan posisi monitor komputer staf.'
      },
      {
        name: 'Modul 2: Metode Penilaian Risiko Postur: RULA, REBA, & ROSA (Office Ergonomics)',
        theory: 'Metode Rapid Upper Limb Assessment (RULA), Rapid Entire Body Assessment (REBA), Rapid Office Strain Assessment (ROSA), penentuan skor level tindakan (Action Level).',
        practical: 'Praktik penilaian postur kerja staf admin menggunakan aplikasi spreadsheet ROSA dan analisis foto sudut kerja.'
      },
      {
        name: 'Modul 3: Program Peregangan Otot (Office Stretching) & Manual Handling Aman',
        theory: 'Aturan 20-20-20 untuk relaksasi mata, panduan peregangan dinamis di meja kerja (Desk Stretching), batasan berat angkat manual (maksimal 15-20 kg).',
        practical: 'Demonstrasi 8 gerakan peregangan kantor dan simulasi mengangkat beban boks arsip dengan teknik power lift.'
      }
    ],
    equipment: [
      'Ergonomic Posture Goniometer Digital untuk Pengukuran Sudut Sendi.',
      'Software / Spreadsheet Formulir Penilaian ROSA, RULA, dan REBA.',
      'Contoh Aksesoris Ergonomis: Mouse Vertikal, Keyboard Gel Wrist Rest, Laptop Stand, Footrest.',
      'Lampu Digital Lux Meter untuk Pengukuran Silau Meja Komputer.'
    ],
    participants: [
      'Staf Perkantoran / HRD, Dokter Hiperkes Perusahaan, Fasilitas Manajemen Gedung, Safety Officer, dan Instruktur Senam Peregangan Pabrik.'
    ],
    tableData: {
      headers: ['Komponen Workstation Kantor', 'Standar Penataan Ergonomis Ideal', 'Penyakit Jika Tidak Sesuai', 'Standar Acuan'],
      rows: [
        ['Ketinggian Kursi Kerja', 'Kaki menapak rata di lantai, sudut lutut 90-100 derajat', 'Sirkulasi Darah Kaki Terhambat, Varises', 'Permenkes 48/2016'],
        ['Posisi Layar Monitor', 'Tepi atas layar sejajar garis mata, jarak 45 - 70 cm', 'Nyeri Leher (Text Neck), Computer Vision', 'Permenaker 5/2018'],
        ['Posisi Keyboard & Mouse', 'Pergelangan tangan lurus netral, siku membentuk 90°', 'Carpal Tunnel Syndrome (CTS), Tendinitis', 'Standar ROSA Office'],
        ['Pengangkatan Beban Manual', 'Beban didekatkan ke tubuh, tekuk lutut bukan pinggang', 'Herniasi Diskus Tulang Belakang (HNP)', 'Batas Angkat NIOSH']
      ]
    },
    caseStudy: 'Sebuah perusahaan perbankan di Jakarta Pusat berhasil menurunkan klaim absensi sakit akibat keluhan Low Back Pain hingga 55% setelah melakukan penataan ulang kursi kerja ergonomis dan menerapkan program peregangan 5 menit setiap pukul 14.00 siang.',
    stepByStepGuide: [
      { step: '1. Survei Keluhan Fisik (NMQ Questionnaire)', desc: 'Menyebarkan kuesioner Nordic Musculoskeletal Questionnaire untuk memetakan keluhan nyeri staf.' },
      { step: '2. Asesmen Postur Metode ROSA', desc: 'Mengambil foto posisi kerja harian dan menghitung skor risiko ergonomi stasiun kerja.' },
      { step: '3. Penataan Fasilitas & Pengadaan Alat', desc: 'Menyesuaikan ketinggian kursi, memberikan laptop stand, mouse vertikal, dan lampu anti-silau.' },
      { step: '4. Pelatihan Peregangan Berkala', desc: 'Melatih fasilitator peregangan di setiap divisi untuk memimpin senam peregangan harian.' }
    ],
    links: [
      { href: '/kategori-pelatihan/pengukuran-nilai-ambang-batas-nab/', anchor: 'Panduan Pengukuran NAB Lingkungan Kerja' },
      { href: '/kategori-pelatihan/pemeriksaan-kesehatan-kerja-mcu/', anchor: 'Pemeriksaan Kesehatan Kerja MCU' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 11. Pengelolaan Limbah B3 Perusahaan
  {
    key: 'pengelolaan-limbah-b3-perusahaan',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/pengelolaan-limbah-b3-perusahaan/',
    archetype: 'compliance_guide',
    title: 'Pengelolaan Limbah B3 Industri: SOP TPS, Manifest FESTA, & Neraca Limbah',
    h1: 'Panduan Pengelolaan Limbah Bahan Berbahaya dan Beracun (Limbah B3) Industri: Standar Izin TPS, Manifest Elektronik (FESTA-Online), & Kepatuhan PP No. 22 Tahun 2021',
    meta: 'Panduan pengelolaan limbah B3: tata cara penyimpanan di TPS limbah B3, pelabelan simbol GHS, manifest elektronik FESTA KLHK & neraca limbah.',
    imgAlt: 'Petugas lingkungan menginspeksi drum penyimpanan oli bekas dan limbah kimia B3 di Tempat Penyimpanan Sementara TPS berizin',
    related: ['pengendalian-bahaya-kimia-b3', 'pencegahan-tumpahan-minyak-spill-kit', 'ahli-k3-kimia', 'k3-keselamatan-kerja'],
    intro: 'Limbah Bahan Berbahaya dan Beracun (Limbah B3 seperti oli bekas, lumpur IPAL kimia, kain majun terkontaminasi, pelarut bekas, limbah medis, dan baterai aki) diatur secara sangat ketat oleh Kementerian Lingkungan Hidup dan Kehutanan (KLHK) melalui <strong>PP No. 22 Tahun 2021 tentang Penyelenggaraan Perlindungan dan Pengelolaan Lingkungan Hidup</strong>. Pelanggaran pengelolaan limbah B3 berisiko sanksi pidana penjara dan denda miliaran rupiah.',
    hazards: [
      '<strong>Sanksi Pidana Penjara & Denda Miliaran Rupiah:</strong> Membuang atau menyimpan limbah B3 tanpa izin resmi (Pasal 102 UU No. 32/2009).',
      '<strong>Pencemaran Air Tanah & Sumber Air Minum Warga:</strong> Kebocoran drum oli/kimia B3 yang merembes ke pori-pori tanah akibat ketiadaan lantai kedap.',
      '<strong>Kebakaran & Ledakan di Bangunan TPS Limbah B3:</strong> Pencampuran limbah kimia yang tidak kompatibel (misalnya asam kuat dengan pelarut organik).',
      '<strong>Penghentian Izin Lingkungan Perusahaan (AMDAL/UKL-UPL):</strong> Rapor Merah pada evaluasi Program Penilaian Peringkat Kinerja Perusahaan (PROPER).'
    ],
    regulations: [
      '<strong>Peraturan Pemerintah No. 22 Tahun 2021</strong> tentang Penyelenggaraan Perlindungan dan Pengelolaan Lingkungan Hidup (Bab Pengelolaan Limbah B3).',
      '<strong>Permen LHK No. 6 Tahun 2021</strong> tentang Tata Cara dan Persyaratan Pengelolaan Limbah Bahan Berbahaya dan Beracun.',
      '<strong>UU No. 32 Tahun 2009</strong> tentang Perlindungan dan Pengelolaan Lingkungan Hidup.'
    ],
    modules: [
      {
        name: 'Modul 1: Identifikasi Karakteristik & Kodefikasi Limbah B3 Industri',
        theory: 'Karakteristik limbah B3 (Mudah meledak, mudah menyala, reaktif, infeksius, korosif, beracun), pengkodean limbah B3 lampiran IX PP 22/2021.',
        practical: 'Pemetaan neraca inventaris limbah B3 per departemen (Oli bekas B105d, majun bekas B110d, filter oli B109d).'
      },
      {
        name: 'Modul 2: Persyaratan Teknis Tempat Penyimpanan Sementara (TPS) Limbah B3',
        theory: 'Konstruksi lantai kedap air (kemiringan 1%), sistem penampung tumpahan (secondary containment 110%), simbol & label B3, SOP tanggap darurat tumpahan.',
        practical: 'Audit kelayakan fisik bangunan TPS limbah B3 dan verifikasi penataan drum berbasis matriks kompatibilitas kimia.'
      },
      {
        name: 'Modul 3: Pengisian Manifest Elektronik (FESTA-Online) & Pelaporan Neraca Limbah B3',
        theory: 'Sistem pengangkutan berizin KLHK, alur penerbitan elektronik manifest FESTA, pengisian logbook harian, penyusunan laporan neraca per semester ke DLH/KLHK.',
        practical: 'Simulasi pembuatan akun dan input data pengangkutan limbah B3 pada sistem aplikasi web FESTA-Online KLHK.'
      }
    ],
    equipment: [
      'Set Simbol & Label Limbah B3 Standar Permen LHK No. 14 Tahun 2013.',
      'Spill Kit Drum Response 120 Liter Lengkap dengan Absorbent Pad, Pillow, & Sock.',
      'Buku Logbook Keluar-Masuk Limbah B3 Standar Berizin.',
      'Format Neraca Massa Limbah B3 & Template Laporan Semesteran DLH.'
    ],
    participants: [
      'Penanggung Jawab Pengendalian Pencemaran Lingkungan (PPPA/POPL), Safety & Environment Officer, Supervisor TPS Limbah, Maintenance Leader.'
    ],
    tableData: {
      headers: ['Kategori Limbah B3', 'Batas Waktu Penyimpanan Maksimal di TPS', 'Persyaratan Khusus Bangunan TPS', 'Regulasi Acuan'],
      rows: [
        ['Limbah B3 Dihasilkan ≥ 50 kg/hari', 'Maksimal 90 Hari Kalender', 'Wajib Lantai Beton Kedap, Saluran Ceceran, APAR', 'Permen LHK 6/2021'],
        ['Limbah B3 Dihasilkan < 50 kg/hari (Kategori 1)', 'Maksimal 180 Hari Kalender', 'Wajib Beratap Lindung Hujan, Ventilasi Memadai', 'Permen LHK 6/2021'],
        ['Limbah B3 Kategori 2 Sumber Tidak Spesifik', 'Maksimal 365 Hari Kalender', 'Pemisahan Berdasarkan Sifat Kompatibilitas', 'Permen LHK 6/2021'],
        ['Pengangkutan ke Pihak Ketiga', 'Wajib Menggunakan Transporter Berizin KLHK', 'Dilengkapi Manifest Elektronik (FESTA-Online)', 'PP No. 22/2021']
      ]
    },
    legalPenalties: [
      'Pasal 102 UU 32/2009: Pidana penjara paling singkat 1 tahun & paling lama 3 tahun serta denda Rp 1 - 3 Miliar.',
      'Pemberian sanksi paksaan pemerintah berupa penyegelan bangunan TPS oleh Pejabat Pengawas Lingkungan Hidup (PPLH).',
      'Pencabutan persetujuan lingkungan operasional pabrik jika terbukti melakukan pembuangan (dumping) liar.'
    ],
    stepByStepGuide: [
      { step: '1. Inventarisasi Jenis & Volume Limbah', desc: 'Mencatat seluruh timbulan limbah oli, filter, majun, cairan kimia, dan limbah medis.' },
      { step: '2. Pembangunan / Renovasi TPS Standar', desc: 'Membuat TPS beratap dengan lantai kedap, bak penampung tumpahan, dan simbol GHS.' },
      { step: '3. Kerja Sama Pengolah Berizin KLHK', desc: 'Melakukan MoU dengan transporter dan pemusnah limbah B3 resmi yang memiliki izin KLHK.' },
      { step: '4. Pelaporan Digital Berkala', desc: 'Mengisi logbook harian, memvalidasi manifest FESTA, dan mengirim laporan neraca semester ke DLH.' }
    ],
    links: [
      { href: '/kategori-pelatihan/pencegahan-tumpahan-minyak-spill-kit/', anchor: 'Panduan Penanganan Tumpahan Spill Kit' },
      { href: '/kategori-pelatihan/ahli-k3-kimia/', anchor: 'Pelatihan Sertifikasi Ahli K3 Kimia' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 12. Alur Klaim Kecelakaan Kerja BPJS
  {
    key: 'alur-klaim-kecelakaan-kerja-bpjs',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/alur-klaim-kecelakaan-kerja-bpjs/',
    archetype: 'compliance_guide',
    title: 'Alur Klaim Jaminan Kecelakaan Kerja (JKK) BPJS Ketenagakerjaan & Disnaker',
    h1: 'Panduan Prosedur Pelaporan & Tata Cara Klaim Jaminan Kecelakaan Kerja (JKK) BPJS Ketenagakerjaan: Batas Waktu 2x24 Jam, Form KK1, KK2, KK3, & Rumah Sakit PLKK',
    meta: 'Panduan klaim JKK BPJS Ketenagakerjaan: alur form KK1 KK2 KK3, batas lapor 2x24 jam ke Disnaker, santunan STMB, beasiswa anak & fasilitas PLKK.',
    imgAlt: 'Staf HRD memandu pengisian formulir pelaporan kecelakaan kerja Form KK1 BPJS Ketenagakerjaan bersama keluarga pekerja di rumah sakit',
    related: ['metode-investigasi-kecelakaan-scat', 'tata-cara-pelaporan-p2k3-disnaker', 'pemeriksaan-kesehatan-kerja-mcu', 'k3-keselamatan-kerja'],
    intro: 'Program Jaminan Kecelakaan Kerja (JKK) BPJS Ketenagakerjaan memberikan perlindungan komprehensif tanpa batas plafon biaya medis (Unlimited Sesuai Indikasi Medis), santunan Sementara Tidak Mampu Bekerja (STMB 100% gaji), santunan cacat, hingga beasiswa pendidikan anak bagi pekerja yang mengalami kecelakaan saat bertugas atau dalam perjalanan dinas. Namun, <strong>keterlambatan pelaporan melewati batas waktu 2x24 jam ke Disnaker dapat mengakibatkan klaim tertolak atau tertunda</strong>.',
    hazards: [
      '<strong>Klaim JKK Tertolak Akibat Terlambat Lapor (> 2x24 Jam):</strong> Pengabaian batas waktu pelaporan administratif Form KK1 ke Disnaker dan BPJS.',
      '<strong>Beban Finansial Biaya Medis Ratusan Juta Ditanggung Perusahaan:</strong> Karyawan dirawat di RS Non-Kerjasama tanpa aktivasi surat jaminan JKK.',
      '<strong>Sengketa Hukum Kasus Kecelakaan Lalu Lintas Perjalanan (Commuting Accident):</strong> Ketiadaan Laporan Polisi (LP) dan saksi rute perjalanan dinas yang sah.',
      '<strong>Hilangnya Hak Santunan Cacat & Beasiswa Anak:</strong> Kesalahan pengisian Form KK2 dan KK3 oleh dokter pemeriksa yang mengakibatkan kompensasi tidak cair.'
    ],
    regulations: [
      '<strong>PP No. 44 Tahun 2015</strong> tentang Penyelenggaraan Program Jaminan Kecelakaan Kerja dan Jaminan Kematian.',
      '<strong>PP No. 82 Tahun 2019</strong> tentang Perubahan atas PP 44/2015 (Peningkatan Manfaat Beasiswa & Santunan).',
      '<strong>UU No. 24 Tahun 2011</strong> tentang Badan Penyelenggara Jaminan Sosial (BPJS).'
    ],
    modules: [
      {
        name: 'Modul 1: Definisi Ruang Lingkup Kecelakaan Kerja & Batas Waktu Kritis 2x24 Jam',
        theory: 'Kategori kecelakaan kerja (Di Tempat Kerja, Dalam Perjalanan Dinas/Pulang-Pergi, Penyakit Akibat Kerja), batas waktu kewajiban lapor Form KK1 (Tahap I) ke Disnaker & BPJS.',
        practical: 'Simulasi pengisian cepat formulir Form KK1 dan pembuatan kronologis kecelakaan kerja bersaksi.'
      },
      {
        name: 'Modul 2: Alur Penanganan Medis di Pusat Layanan Kecelakaan Kerja (PLKK)',
        theory: 'Prosedur pendaftaran di RS PLKK menggunakan KTP & Kartu BPJS, penerbitan Surat Jaminan RS, penanganan kecelakaan lalu lintas (koordinasi Jasa Raharja vs BPJS KTK).',
        practical: 'Audit berkas administrasi rujukan rumah sakit dan koordinasi penerbitan Laporan Polisi lalu lintas.'
      },
      {
        name: 'Modul 3: Penyusunan Form KK2 (Tahap II), KK3 (Penetapan Cacat), & Pencairan Santunan',
        theory: 'Pengisian surat keterangan dokter Form KK2 setelah pasien sembuh/cacat, perhitungan santunan STMB 100% (6 bulan pertama), klaim alat ortesa/protesa, beasiswa 2 orang anak.',
        practical: 'Latihan menghitung simulasi santunan cacat fungsi/anatomis dan beasiswa pendidikan anak hingga perguruan tinggi.'
      }
    ],
    equipment: [
      'Set Formulir Resmi BPJS Ketenagakerjaan: Form KK1, Form KK2, Form KK3.',
      'Format Standar Kronologis Kejadian Kecelakaan Kerja & Berita Acara Saksi.',
      'Kalkulator Spreadsheet Simulasi Santunan Cacat & STMB BPJS.',
      'Daftar Direktori Rumah Sakit Pusat Layanan Kecelakaan Kerja (PLKK) Terdekat.'
    ],
    participants: [
      'HR Manager / HR C&B Staff, Safety Officer, Pengurus Serikat Pekerja, Dokter/Paramedis Perusahaan, dan Sekretaris P2K3.'
    ],
    tableData: {
      headers: ['Tahapan Formulir Klaim', 'Batas Waktu Pelaporan', 'Tujuan Pengiriman Berkas', 'Dokumen Pendukung Wajib'],
      rows: [
        ['Form KK1 (Tahap I - Lapor Awal)', 'Maksimal 2x24 Jam Sejak Insiden', 'Kantor BPJS Ketenagakerjaan & Disnaker Setempat', 'KTP, Kartu Peserta BPJS, Kronologis Kejadian'],
        ['Laporan Polisi (Kecelakaan Jalan)', 'Maksimal 2x24 Jam (Khusus Lalu Lintas)', 'Unit Laka Lantas Kepolisian', 'Surat Tugas / Rute Jalan Kerja, Saksi Kejadian'],
        ['Form KK2 (Tahap II - Pasca Medis)', 'Setelah Pengobatan Selesai / Sembuh', 'Kantor BPJS Ketenagakerjaan', 'Surat Keterangan Dokter, Kuitansi Obat Asli (jika ada)'],
        ['Form KK3 (Penetapan Cacat)', 'Saat Pasien Mengalami Cacat Permanen', 'Kantor BPJS & Dokter Penasihat Medis', 'Resume Medis Lengkap Dokter Spesialis Terkait']
      ]
    },
    legalPenalties: [
      'Klaim medis tidak dapat diganti oleh BPJS Ketenagakerjaan jika melampaui batas kedaluwarsa klaim (2 tahun) atau bukti fiktif.',
      'Kewajiban pengusaha menanggung seluruh biaya pengobatan dan santunan cacat secara mandiri jika lalai mendaftarkan pekerja.',
      'Sanksi administratif pelayanan publik dari pemerintah bagi perusahaan yang menunggak iuran program JKK.'
    ],
    stepByStepGuide: [
      { step: '1. Evakuasi Medis ke RS PLKK Terdekat', desc: 'Membawa korban ke RS mitra BPJS dan menunjukkan kartu kepesertaan untuk jaminan penuh.' },
      { step: '2. Pengiriman Form KK1 dalam 2x24 Jam', desc: 'Mengisi form KK1 lengkap dengan kronologis kejadian dan menyerahkannya ke Disnaker & BPJS.' },
      { step: '3. Pengumpulan Berkas Kronologi & Saksi', desc: 'Menyiapkan absen kerja, surat penugasan kerja, rekaman CCTV, dan laporan polisi jika laka lantas.' },
      { step: '4. Pengajuan Form KK2 & Pencairan Manfaat', desc: 'Menyerahkan surat sembuh dokter, form KK2, dan memproses pencairan santunan STMB/beasiswa.' }
    ],
    links: [
      { href: '/kategori-pelatihan/metode-investigasi-kecelakaan-scat/', anchor: 'Metode Investigasi Insiden SCAT' },
      { href: '/kategori-pelatihan/tata-cara-pelaporan-p2k3-disnaker/', anchor: 'Tata Cara Pelaporan P2K3 Disnaker' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 13. Metode Investigasi Kecelakaan SCAT
  {
    key: 'metode-investigasi-kecelakaan-scat',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/metode-investigasi-kecelakaan-scat/',
    archetype: 'compliance_guide',
    title: 'Metode Investigasi Kecelakaan Kerja: SCAT & Root Cause Analysis (5-Why)',
    h1: 'Panduan Investigasi Kecelakaan Kerja Menggunakan Metode Systematic Cause Analysis Technique (SCAT), Fishbone Diagram, & 5-Why Analysis',
    meta: 'Panduan investigasi kecelakaan kerja SCAT: analisis penyebab langsung, akar masalah sistem manajemen, 5-Why, interview saksi & matriks CAPA.',
    imgAlt: 'Tim investigasi kecelakaan kerja memasang garis barikade police line dan mengumpulkan barang bukti di tempat kejadian insiden pabrik',
    related: ['alur-klaim-kecelakaan-kerja-bpjs', 'panduan-audit-smk3-pp-50-2012', 'ahli-k3-umum-kemnaker', 'k3-keselamatan-kerja'],
    intro: 'Tujuan utama investigasi kecelakaan kerja bukanlah mencari siapa yang bersalah (blaming), melainkan membongkar kegagalan sistemik (root causes) agar insiden serupa tidak pernah terulang kembali di masa depan. Metode <strong>Systematic Cause Analysis Technique (SCAT)</strong> yang dikembangkan oleh DNV adalah standar global investigasi terstruktur yang menelusuri rantai sebab-akibat mulai dari kerugian, kontak insiden, penyebab langsung, penyebab dasar, hingga kegagalan kendali manajemen.',
    hazards: [
      '<strong>Kecelakaan Serupa Terulang Kembali (Repeat Incident):</strong> Investigasi hanya menyalahkan kelalaian pekerja (human error) tanpa memperbaiki SOP.',
      '<strong>Hilang atau Rusaknya Barang Bukti Fisik di TKP:</strong> Lokasi kejadian dibersihkan sebelum tim investigasi mendokumentasikan posisi alat.',
      '<strong>Keterangan Saksi Palsu Akibat Rasa Takut (Biased Interview):</strong> Teknik interogasi yang mengintimidasi membuat saksi menutupi fakta sebenarnya.',
      '<strong>Laporan Investigasi Ditolak Pengawas Disnaker / Polisi:</strong> Ketiadaan metodologi ilmiah dalam menyimpulkan urutan kronologis kejadian.'
    ],
    regulations: [
      '<strong>Permenaker No. PER.03/MEN/1998</strong> tentang Tata Cara Pelaporan dan Pemeriksaan Kecelakaan Kerja.',
      '<strong>PP No. 50 Tahun 2012</strong> tentang Penerapan SMK3 (Elemen 8 Pemantauan & Investigasi).',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.'
    ],
    modules: [
      {
        name: 'Modul 1: Tahapan Awal Tanggap TKP & Teknik Pengumpulan Bukti 4P (People, Position, Parts, Paper)',
        theory: 'Pengamanan lokasi TKP, dokumentasi foto/video 3 sudut pandang, pengumpulan data 4P (Keterangan Saksi, Posisi Alat, Pecahan Komponen, Dokumen Izin Kerja/SOP).',
        practical: 'Simulasi olah tempat kejadian perkara (TKP) mock-up kecelakaan forklift menabrak tiang racking.'
      },
      {
        name: 'Modul 2: Teknik Wawancara Saksi Metode P.E.A.C.E & Rekonstruksi Kronologis',
        theory: 'Prinsip wawancara saksi (Planning, Engage, Account, Closure, Evaluation), teknik pertanyaan terbuka (open-ended questions), penyusunan timeline kejadian menit per menit.',
        practical: 'Praktik wawancara bermain peran (role-play) antara tim investigator dengan saksi mata dan korban kecelakaan.'
      },
      {
        name: 'Modul 3: Analisis Akar Masalah Metode SCAT Chart, Fishbone, & Matriks CAPA',
        theory: 'Penggunaan diagram alir SCAT (Loss -> Contact -> Immediate Causes: Tindakan/Kondisi Tidak Aman -> Basic Causes: Faktor Pribadi/Pekerjaan -> Lack of Control Manajemen), integrasi 5-Why.',
        practical: 'Penyusunan laporan investigasi lengkap berbasis studi kasus riil insiden boiler meledak beserta rekomendasi SMART CAPA.'
      }
    ],
    equipment: [
      'Investigation Barrier Tape (Police Line K3 Kuning-Hitam).',
      'Formulir Bagan Alir SCAT (Systematic Cause Analysis Technique) Chart Resmi DNV.',
      'Alat Ukur Laser Distance Meter, Kamera Dokumentasi, & Kantong Barang Bukti.',
      'Template Laporan Resmi Pemeriksaan Kecelakaan Kerja Form 3 KK Permenaker 03/1998.'
    ],
    participants: [
      'Lead Investigator K3, Safety Officer, Kepala Departemen Terkait, Anggota P2K3, Perwakilan Serikat Pekerja, dan Perwira Keamanan Pabrik.'
    ],
    tableData: {
      headers: ['Tahapan Bagan SCAT', 'Fokus Penyelidikan', 'Contoh Kasus Riil di Lapangan', 'Tingkat Penanganan'],
      rows: [
        ['1. Dampak Kerugian (Loss)', 'Cedera fisik pekerja, kerusakan aset mesin, kerugian operasional', 'Pekerja mengalami patah tulang tangan, mesin rusak Rp 50 Juta', 'Penanganan Medis & Klaim'],
        ['2. Kontak Insiden (Contact)', 'Bentuk transfer energi berlebih yang melukai korban', 'Tangan terjepit putaran roda gigi mesin bubut (Kinetic Energy)', 'Identifikasi Titik Kontak'],
        ['3. Penyebab Langsung (Immediate)', 'Tindakan tidak aman (Unsafe Act) & Kondisi tidak aman (Unsafe Condition)', 'Tutup pelindung mesin dilepas, bekerja tanpa sarung tangan', 'Koreksi Langsung di TKP'],
        ['4. Penyebab Dasar (Basic Causes)', 'Faktor individu (kurang kompetensi) & Faktor pekerjaan (kurang pemeliharaan)', 'Tidak ada pelatihan mesin bagi operator baru, sparepart aus', 'Akar Masalah Sistemik'],
        ['5. Kurang Kendali (Lack of Control)', 'Kelemahan program K3, ketiadaan SOP, kurangnya audit pengawasan', 'SOP LOTO belum dibuat, pengawas tidak pernah menegur pelanggaran', 'Perbaikan Total Manajemen (CAPA)']
      ]
    },
    legalPenalties: [
      'Menghalangi penyelidikan kecelakaan kerja oleh Pengawas Disnaker melanggar ketentuan pidana UU No. 1 Tahun 1970.',
      'Sanksi hukum pidana bagi pimpinan perusahaan jika terbukti ada kelalaian fatal sistemik yang mengakibatkan kematian.',
      'Kewajiban pelaporan tertulis hasil investigasi dalam waktu maksimal 2x24 jam ke kantor Disnaker setempat.'
    ],
    stepByStepGuide: [
      { step: '1. Pengamanan & Isolasi Lokasi TKP', desc: 'Memasang barikade garis kuning, mematikan sumber energi, dan melarang pembersihan TKP.' },
      { step: '2. Pengumpulan Data 4P & Saksi', desc: 'Memfoto seluruh sudut, mengamankan barang bukti patahan alat, dan mewawancarai saksi mata.' },
      { step: '3. Analisis Menggunakan Bagan SCAT', desc: 'Memetakan urutan kontak, tindakan tidak aman, faktor pekerjaan, hingga kelemahan sistem manajemen.' },
      { step: '4. Penyusunan Tindakan Korektif (CAPA)', desc: 'Menetapkan rekomendasi perbaikan SMART (Specific, Measurable, Achievable, Relevant, Timed) bagi manajemen.' }
    ],
    links: [
      { href: '/kategori-pelatihan/alur-klaim-kecelakaan-kerja-bpjs/', anchor: 'Alur Klaim JKK BPJS Ketenagakerjaan' },
      { href: '/kategori-pelatihan/panduan-audit-smk3-pp-50-2012/', anchor: 'Panduan Audit SMK3 PP 50/2012' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 14. Penyusunan Safety Induction Kontraktor
  {
    key: 'penyusunan-safety-induction-kontraktor',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/penyusunan-safety-induction-kontraktor/',
    archetype: 'compliance_guide',
    title: 'Penyusunan Modul Safety Induction: Visitor, Vendor, & Kontraktor',
    h1: 'Panduan Penyusunan Modul & Tata Cara Pelaksanaan Induksi Keselamatan Kerja (Safety Induction) untuk Pengunjung (Visitor), Karyawan Baru, & Kontraktor',
    meta: 'Panduan penyusunan safety induction: video induksi K3, materi golden rules, kartu badge visitor, tes pemahaman induksi & kepatuhan SMK3.',
    imgAlt: 'Safety officer memberikan penjelasan materi safety induction dan penyerahan kartu pas tamu visitor di pos keamanan pintu masuk pabrik',
    related: ['penyusunan-dokumen-csms-tender', 'penyusunan-emergency-response-plan', 'ahli-k3-umum-kemnaker', 'k3-keselamatan-kerja'],
    intro: 'Safety Induction (Induksi Keselamatan Kerja) adalah garis pertahanan pertama perlindungan keselamatan bagi setiap orang yang melangkah masuk ke area fasilitas industri. Sebelum diizinkan memasuki area pabrik, gudang, atau proyek konstruksi, setiap Pengunjung (Visitor), Vendor, Karyawan Baru, dan Tenaga Kerja Kontraktor <strong>wajib mengikuti briefing keselamatan terstandarisasi</strong> mengenai aturan pokok K3, jalur evakuasi, dan potensi bahaya spesifik.',
    hazards: [
      '<strong>Tamu / Visitor Masuk Zona Berbahaya Tanpa APD:</strong> Pengunjung tertabrak forklift atau terpapar radiasi panas karena tidak mengetahui zonasi pabrik.',
      '<strong>Vendor Melakukan Pekerjaan Tanpa Izin (PTW):</strong> Kontraktor luar langsung menyalakan mesin las tanpa mengetahui prosedur izin kerja panas.',
      '<strong>Kepanikan Tamu Saat Sirine Darurat Berbunyi:</strong> Pengunjung berlari ke arah berlawanan dari jalur evakuasi dan titik kumpul (assembly point).',
      '<strong>Pelanggaran Golden Safety Rules:</strong> Pekerja kontraktor merokok di area rawan ledakan atau tidak mengenakan safety harness di ketinggian.'
    ],
    regulations: [
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja (Pasal 9 tentang Kewajiban Pembinaan K3 bagi Tenaga Kerja Baru & Tamu).',
      '<strong>PP No. 50 Tahun 2012</strong> tentang Penerapan SMK3 (Elemen Pelatihan & Kompetensi K3).',
      '<strong>Standar ISO 45001:2018</strong> Klausul 7.3 (Awareness).'
    ],
    modules: [
      {
        name: 'Modul 1: Struktur Materi Standar Safety Induction Berbasis Kategori Audiens',
        theory: 'Pembedaan kurikulum induksi: Visitor/Tamu Umum (5-10 menit), Karyawan Baru (1-2 jam), dan Kontraktor Lapangan High Risk (2-4 jam komprehensif).',
        practical: 'Penyusunan naskah video safety induction dan slide presentasi interaktif pabrik.'
      },
      {
        name: 'Modul 2: Penyampaian Golden Safety Rules & Protokol Kedaruratan',
        theory: 'Sepuluh aturan keselamatan mutlak (Golden Rules), tata tertib APD wajib per area, larangan merokok/ponsel, sistem bunyi sirine alarm evakuasi.',
        practical: 'Simulasi memandu sesi safety induction di pos sekuriti dan penyerahan formulir deklarasi kepatuhan tamu.'
      },
      {
        name: 'Modul 3: Evaluasi Pemahaman (Post-Test Induksi) & Penerbitan Safety Pass Badge',
        theory: 'Kriteria kelulusan tes pemahaman induksi, sistem penempelan stiker helm/kartu safety pass berfoto, masa berlaku sertifikat induksi (biasanya 6-12 bulan).',
        practical: 'Pembuatan bank soal kuis pemahaman safety induction digital (Google Form / QR Code Scan) dan verifikasi kartu akses.'
      }
    ],
    equipment: [
      'Video Animasi Safety Induction Pabrik & TV Monitor Pos Sekuriti.',
      'Kartu Pas Visitor / Kontraktor (Safety Induction Badge) dengan Lanyard Khusus.',
      'Stiker Helm Bukti Lulus Induksi K3 (Tahun Berjalan).',
      'Aplikasi / Form Kuis Digital Evaluasi Pemahaman Induksi K3.'
    ],
    participants: [
      'Safety Officer, Security Head / Satpam Pos Gerbang Utama, HR Onboarding Staff, Coordinator HSE Kontraktor, Receptionist Kantor.'
    ],
    tableData: {
      headers: ['Kategori Penerima Induksi', 'Durasi & Metode Penyampaian', 'Materi Pokok Wajib', 'Masa Berlaku Izin Masuk'],
      rows: [
        ['Visitor / Tamu Bisnis', '5 - 10 Menit (Video / Kartu Saku)', 'Jalur Evakuasi, Assembly Point, APD Wajib, Wajib Didampingi', 'Hanya Berlaku 1 Hari Kunjungan'],
        ['Karyawan Baru / Magang', '2 - 4 Jam (Presentasi & Tour Area)', 'Kebijakan K3, HIRADC Area, Hak Menolak Kerja Berbahaya', '1 Tahun (Penyegaran Tahunan)'],
        ['Kontraktor / Vendor Proyek', '1 - 2 Jam (Kelas + Kuis Tertulis)', 'SOP Permit PTW, LOTO, Ketinggian, CSMS, Sanksi Pelanggaran', '3 - 6 Bulan Sesuai Durasi Kontrak'],
        ['Pengemudi Truk Ekspedisi', '15 Menit (Briefing Logistik)', 'Batas Kecepatan 15 km/jam, APD Helm & Rompi, Ganjal Ban Truk', '6 Bulan (Kartu Driver Safety Pass)']
      ]
    },
    legalPenalties: [
      'Pasal 9 UU No. 1 Tahun 1970 mewajibkan pengurus menjelaskan kondisi bahaya kepada setiap orang yang memasuki tempat kerja.',
      'Gugatan hukum kelalaian berat jika pengunjung mengalami kecelakaan fatal di area kerja tanpa pernah diberikan safety induction resmi.',
      'Temuan Ketidaksesuaian Mayor pada audit sertifikasi SMK3 PP 50/2012 dan audit buyer internasional.'
    ],
    stepByStepGuide: [
      { step: '1. Pembuatan Modul / Video Induksi', desc: 'Menyusun materi visual ringkas yang mencakup denah evakuasi, APD wajib, dan nomor darurat.' },
      { step: '2. Digitalisasi Registrasi & Kuis', desc: 'Menyediakan sistem QR Code scan di pos satpam agar tamu mengisi kuis pemahaman mandiri.' },
      { step: '3. Penyerahan APD & Safety Badge', desc: 'Memberikan helm tamu, kacamata, rompi keselamatan, dan kartu pas tanda lulus induksi.' },
      { step: '4. Pencatatan Rekapitulasi Logbook', desc: 'Mendokumentasikan seluruh data tamu dan pekerja kontraktor yang telah diinduksi secara rapi.' }
    ],
    links: [
      { href: '/kategori-pelatihan/penyusunan-dokumen-csms-tender/', anchor: 'Penyusunan Dokumen CSMS Kontraktor' },
      { href: '/kategori-pelatihan/penyusunan-emergency-response-plan/', anchor: 'Penyusunan Rencana Tanggap Darurat ERP' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 15. Standar Riksa Uji APAR dan Hydrant
  {
    key: 'standar-riksa-uji-apar-dan-hydrant',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/standar-riksa-uji-apar-dan-hydrant/',
    archetype: 'compliance_guide',
    title: 'Standar Riksa Uji APAR & Hydrant Gedung/Pabrik Permenaker No. 4/1980',
    h1: 'Panduan Pemeriksaan, Pengujian Berkala (Riksa Uji), & Pemeliharaan Alat Pemadam Api Ringan (APAR) serta Instalasi Pipa Hydrant Kebakaran Sesuai Permenaker No. 04/1980 & Standar NFPA',
    meta: 'Panduan riksa uji APAR & hydrant: inspeksi bulanan pressure gauge, uji hidrostatis tabung 5 tahun, debit pompa hydrant, nozzle spray & standar Kemnaker.',
    imgAlt: 'Teknisi fire safety memeriksa jarum manometer tekanan pressure gauge pada tabung APAR dan kartu inspeksi bulanan',
    related: ['petugas-pemadam-kebakaran-kelas-d', 'penyusunan-emergency-response-plan', 'ahli-k3-umum-kemnaker', 'k3-keselamatan-kerja'],
    intro: 'Alat Pemadam Api Ringan (APAR) dan Instalasi Hydrant Kebakaran adalah sistem proteksi kebakaran aktif garis terdepan untuk memadamkan kobaran api awal sebelum membesar menjadi bencana katastropik. Berdasarkan <strong>Permenaker No. PER.04/MEN/1980 tentang Syarat-Syarat Pemasangan dan Pemeliharaan APAR</strong> dan <strong>Instruksi Menaker No. 11/1997</strong>, seluruh unit APAR wajib diinspeksi secara visual setiap bulan dan dilakukan uji tekan hidrostatis (Hydrostatic Test) setiap 5 tahun sekali.',
    hazards: [
      '<strong>APAR Macet Saat Kebakaran (Extinguisher Failure):</strong> Serbuk kimia kering (Dry Chemical Powder) menggumpal atau tekanan gas pendorong N2 bocor 0 bar.',
      '<strong>Tabung APAR Meledak Saat Digunakan (Corroded Cylinder Burst):</strong> Tabung APAR berkarat mengalami kegagalan struktural saat tuas pemicu ditekan.',
      '<strong>Pompa Hydrant Tidak Menyala Otomatis (Jockey/Diesel Pump Trip):</strong> Panel kontrol jockey pump mati atau katup pipa hisap utama tertutup.',
      '<strong>Selang Hydrant Bocor & Nozzle Macet:</strong> Selang kanvas lapuk atau terlipat yang pecah saat menerima tekanan air hydrant 7-10 bar.'
    ],
    regulations: [
      '<strong>Permenaker No. PER.04/MEN/1980</strong> tentang Syarat-Syarat Pemasangan dan Pemeliharaan Alat Pemadam Api Ringan.',
      '<strong>Kepmenaker No. 186/MEN/1999</strong> tentang Unit Penanggulangan Kebakaran di Tempat Kerja.',
      '<strong>Standar NFPA 10 (Portable Fire Extinguishers) & NFPA 25 (Inspection of Water-Based Fire Protection Systems)</strong>.'
    ],
    modules: [
      {
        name: 'Modul 1: Standar Pemasangan & Klasifikasi APAR Permenaker 04/1980',
        theory: 'Ketinggian pemasangan APAR (1.2 meter dari lantai), jarak penempatan maksimal 15 meter, klasifikasi kebakaran (Kelas A: Benda Padat, B: Cairan/Gas, C: Listrik, D: Logam), pemilihan media pemadam (Powder, CO2, Foam, Clean Agent).',
        practical: 'Audit posisi pemasangan APAR di lantai pabrik dan pemasangan tanda segitiga APAR tinggi 7.5 cm.'
      },
      {
        name: 'Modul 2: Prosedur Checklist Inspeksi Bulanan APAR & Uji Hidrostatis 5 Tahunan',
        theory: 'Pemeriksaan manometer jarum hijau, segel pin pengunci, selang nozzle bebas retak, pembalikan tabung powder (anti-caking), uji tekan hidrostatis bejana APAR 20-25 bar.',
        practical: 'Praktik inspeksi fisik 10 unit APAR dan pengisian kartu gantung riwayat pemeriksaan bulanan.'
      },
      {
        name: 'Modul 3: Riksa Uji Instalasi Hydrant, Pompa Pemadam (Jockey, Electric, Diesel), & Flow Test',
        theory: 'Fungsi Jockey Pump (penjaga tekanan pipa 6-8 bar), Main Electric Pump, Standby Diesel Pump, pengujian debit air (Water Flow Test) pada pilar hydrant terjauh.',
        practical: 'Simulasi start manual pompa diesel hydrant, penggelaran selang kanvas 1.5/2.5 inch, dan uji semprotan air nozzle jet-spray.'
      }
    ],
    equipment: [
      'Unit APAR Dry Chemical Powder 6 kg, CO2 5 kg, & Foam AFFF 9 Liter.',
      'Hydrostatic Test Rig Pump untuk Pengujian Bejana Tabung APAR.',
      'Pitot Tube Gauge & Water Flow Meter untuk Pengukuran Tekanan Nozzle Hydrant.',
      'Hydrant Spanner Wrench, Selang Pemadam Kanvas 2.5 Inch, & Jet-Spray Nozzle.'
    ],
    participants: [
      'Safety Officer / HSE Officer, Regu Pemadam Kebakaran Pabrik (Fire Brigade), Teknisi Plumbing & MEP Gedung, Building Supervisor, Anggota P2K3.'
    ],
    tableData: {
      headers: ['Komponen Proteksi Api', 'Frekuensi Riksa Uji Wajib', 'Parameter Standar yang Diperiksa', 'Regulasi Acuan'],
      rows: [
        ['Pemeriksaan Visual APAR', 'Setiap 1 Bulan Sekali', 'Jarum Manometer di Zona Hijau, Segel Utuh, Tidak Korosi', 'Permenaker 04/1980'],
        ['Pengisian Ulang Serbuk APAR', 'Setiap 1 s.d. 2 Tahun Sekali', 'Penggantian Media Powder & Gas Pendorong Nitrogen (N2)', 'Permenaker 04/1980'],
        ['Uji Hidrostatis Tabung APAR', 'Setiap 5 Tahun Sekali', 'Uji Tekan Air 1.5 s.d. 2x Tekanan Kerja Tabung', 'Permenaker 04/1980'],
        ['Uji Operasional Pompa Hydrant', 'Setiap 1 Minggu Sekali (Weekly Run)', 'Start Otomatis Jockey, Electric, & Diesel Pump (Pressure Drop)', 'NFPA 25 & Standar Kemnaker']
      ]
    },
    legalPenalties: [
      'Pemberian Nota Peringatan K3 jika ditemukan APAR kosong, berkarat, atau kartu inspeksi mati saat inspeksi Disnaker.',
      'Klaim asuransi kebakaran gedung dapat ditolak 100% jika investigasi membuktikan sistem proteksi kebakaran tidak terawat.',
      'Sanksi pidana kurungan bagi pengurus gedung yang tidak menyediakan sarana penanggulangan kebakaran standar.'
    ],
    stepByStepGuide: [
      { step: '1. Pembuatan Master Tagging APAR', desc: 'Memberikan nomor kode identifikasi unik dan barcode pada setiap tabung APAR di seluruh fasilitas.' },
      { step: '2. Inspeksi Rutin Bulanan', desc: 'Petugas fire safety memeriksa manometer, membalik tabung, dan memaraf kartu gantung inspeksi.' },
      { step: '3. Weekly Run Test Pompa Hydrant', desc: 'Menyalakan pompa diesel pemadam kebakaran setiap minggu untuk memastikan baterai aki dan solar siap pakai.' },
      { step: '4. Pengujian Sertifikasi oleh PJK3 Riksa Uji', desc: 'Melakukan uji hidrostatis dan sertifikasi resmi berkala bersama Pengawas K3 Spesialis Kebakaran.' }
    ],
    links: [
      { href: '/kategori-pelatihan/petugas-pemadam-kebakaran-kelas-d/', anchor: 'Pelatihan Petugas Damkar Kelas D' },
      { href: '/kategori-pelatihan/penyusunan-emergency-response-plan/', anchor: 'Penyusunan Rencana Tanggap Darurat ERP' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  },

  // 16. Standar Riksa Uji Bejana Tekan
  {
    key: 'standar-riksa-uji-bejana-tekan',
    hub: 'kategori-pelatihan',
    path: 'kategori-pelatihan/standar-riksa-uji-bejana-tekan/',
    archetype: 'compliance_guide',
    title: 'Standar Riksa Uji Bejana Tekanan & Tangki Timbun Permenaker 37/2016',
    h1: 'Panduan Pemeriksaan, Pengujian Berkala (Riksa Uji Teknis), & Sertifikasi Surat Izin Alat (SIA) Bejana Tekanan dan Tangki Timbun Sesuai Permenaker No. 37 Tahun 2016',
    meta: 'Panduan riksa uji bejana tekan: persiapan uji hidrostatis 1.5x tekanan kerja, pengukuran NDT ultrasonik, kalibrasi safety valve & penerbitan SIA Kemnaker.',
    imgAlt: 'Pengawas K3 spesialis pesawat uap dan bejana tekan memeriksa manometer uji hidrostatis pada air receiver tank bejana kompresor',
    related: ['lisensi-operator-bejana-tekan', 'lisensi-operator-boiler-uap', 'ahli-k3-umum-kemnaker', 'k3-keselamatan-kerja'],
    intro: 'Setiap Bejana Tekanan (seperti tangki kompresor udara, air receiver tank, bejana reaksi, autoclave) dan Tangki Timbun (BBM, gas LPG, cairan kimia B3) <strong>wajib melalui proses pemeriksaan dan pengujian berkala (Riksa Uji Teknis)</strong> oleh Perusahaan Jasa K3 (PJK3) terakreditasi dan Pengawas Ketenagakerjaan Spesialis untuk memperoleh <strong>Surat Izin Alat (SIA / Surat Keterangan Kelaikan K3)</strong> dari Kementerian Ketenagakerjaan RI.',
    hazards: [
      '<strong>Ledakan Pneumatis Katastropik Saat Uji Coba:</strong> Menguji bejana dengan tekanan udara (bukan air) yang dapat meledak seperti bom jika dinding retak.',
      '<strong>Penyitaan & Penghentian Operasional Mesin:</strong> Bejana beroperasi tanpa pelat izin pemakaian (SIA mati/tidak ada).',
      '<strong>Penipisan Dinding Pelat Akibat Korosi Internal:</strong> Dinding tangki kompresor yang aus dari dalam pecah mendadak saat tekanan mencapai 8 bar.',
      '<strong>Kegagalan Katup Pengaman (Safety Valve Macet):</strong> Tekanan terus naik melebihi batas kekuatan tarik logam tanpa pelepas uap otomatis.'
    ],
    regulations: [
      '<strong>Permenaker No. 37 Tahun 2016</strong> tentang Keselamatan dan Kesehatan Kerja Bejana Tekanan dan Tangki Timbun.',
      '<strong>UU No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.',
      '<strong>Standar ASME Boiler and Pressure Vessel Code (BPVC) Section VIII</strong>.'
    ],
    modules: [
      {
        name: 'Modul 1: Landasan Hukum Permenaker 37/2016 & Tahapan Riksa Uji Resmi',
        theory: 'Definisi bejana tekan wajib riksa uji, siklus pemeriksaan (Pemeriksaan Pertama, Berkala 2 Tahun/5 Tahun, Khusus Paska Reparasi), alur penerbitan Surat Keterangan Kelaikan K3.',
        practical: 'Audit berkas dokumen manufaktur (Manufacturer Data Report / MDR) dan gambar konstruksi bejana tekan.'
      },
      {
        name: 'Modul 2: Pemeriksaan Tidak Merusak (NDT) & Pengukuran Sisa Ketebalan Pelat (UT Thickness)',
        theory: 'Metode Non-Destructive Testing: Visual Inspection internal/eksternal, Ultrasonic Thickness Measurement pada 4 kuadran shell & head, Dye Penetrant sambungan lasan.',
        practical: 'Praktik pengukuran ketebalan dinding tangki kompresor menggunakan Ultrasonic Thickness Gauge dan kalkulasi ketebalan minimum yang diizinkan (Minimum Required Thickness).'
      },
      {
        name: 'Modul 3: Prosedur Uji Hidrostatis (Hydrostatic Test) & Kalibrasi Safety Valve',
        theory: 'Bahaya hydrostatic test vs pneumatic test, perhitungan tekanan uji (1.5x Tekanan Kerja Maksimum yang Diizinkan / MAWP), uji bench test setting tekanan buka Safety Relief Valve (PSV).',
        practical: 'Simulasi penyiapan pompa hydrotest manual, pengisian air bebas udara (venting), penahanan tekanan uji 1.5x selama 30 menit tanpa penurunan jarum manometer.'
      }
    ],
    equipment: [
      'Hydraulic Hydrostatic Test Pump Portable dengan Dual Calibrated Pressure Gauges.',
      'Digital Ultrasonic Thickness Gauge (Resolusi 0.01 mm) dengan Gel Couplant.',
      'Dye Penetrant Testing Kit (Cleaner, Penetrant Merah, & White Developer).',
      'Safety Relief Valve (PSV) Test Bench & Torque Wrench.'
    ],
    participants: [
      'Maintenance Utility Engineer, Ahli K3 Spesialis PUBT / PJK3, Safety Officer Pabrik, Operator Bejana Tekan, Inspektur Pabrikasi.'
    ],
    tableData: {
      headers: ['Jenis Pengujian Riksa Uji', 'Metodologi Pelaksanaan', 'Standar Batas Kelulusan', 'Periode Wajib'],
      rows: [
        ['Pemeriksaan Visual Luar & Dalam', 'Inspeksi korosi, distorsi bentuk, pitting, lasan retak', 'Bebas cacat retakan struktural & deformasi', 'Setiap 1 - 2 Tahun Sekali'],
        ['Pengukuran Ketebalan (UT Gauge)', 'Pengukuran ultrasonik dinding shell & dished head', 'Ketebalan aktual > Minimum Required Thickness (T-min)', 'Setiap 2 Tahun Sekali'],
        ['Uji Tekan Hidrostatis (Hydrotest)', 'Diisi air penuh & dipompa 1.5x MAWP selama 30 menit', 'Tidak ada kebocoran, rembesan, atau penurunan tekanan', 'Setiap 5 Tahun Sekali'],
        ['Kalibrasi Pressure Safety Valve (PSV)', 'Bench test pop-up pressure pada katup pengaman', 'Membuka tepat pada batas tekanan desain (± 3% toleransi)', 'Setiap 1 Tahun Sekali']
      ]
    },
    legalPenalties: [
      'Sanksi penyegelan bejana tekan oleh Pengawas Ketenagakerjaan jika beroperasi tanpa izin pemakaian resmi (SIA).',
      'Tuntutan pidana kelalaian terhadap pengurus perusahaan jika terjadi ledakan bejana bertekanan yang menelan korban jiwa.',
      'Penolakan klaim asuransi properti pabrik akibat tidak terpenuhinya klausul statutory inspection alat bertekanan.'
    ],
    stepByStepGuide: [
      { step: '1. Pengajuan Permohonan Riksa Uji', desc: 'Perusahaan menunjuk PJK3 resmi untuk berkoordinasi dengan Pengawas K3 Disnaker Provinsi.' },
      { step: '2. Pembersihan & Isolasi Bejana (LOTO)', desc: 'Mengosongkan tangki, membersihkan kerak internal, dan memasang blind flange isolasi total.' },
      { step: '3. Pelaksanaan NDT & Uji Hidrostatis', desc: 'Melakukan pengukuran UT ketebalan pelat dan uji tekan air 1.5x disaksikan oleh Pengawas Kemnaker.' },
      { step: '4. Penerbitan Laporan & SIA Resmi', desc: 'PJK3 menyusun buku laporan teknik dan menerbitkan Surat Keterangan Kelaikan K3 (SIA) resmi.' }
    ],
    links: [
      { href: '/kategori-pelatihan/lisensi-operator-bejana-tekan/', anchor: 'Sertifikasi Operator Bejana Tekan' },
      { href: '/kategori-pelatihan/lisensi-operator-boiler-uap/', anchor: 'Sertifikasi Operator Boiler Uap' },
      { href: '/jenis-pelatihan/in-house-training/', anchor: 'Layanan In-House Training Korporat' }
    ]
  }
];
