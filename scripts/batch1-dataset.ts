export interface BatchTopicItem {
  key: string;
  title: string;
  h1: string;
  meta: string;
  imgAlt: string;
  related: string[];
  faq: { q: string; a: string }[];
  html: string;
}

export const batch1Data: BatchTopicItem[] = [
  // 1. Confined Space Entry
  {
    key: "confined-space-entry",
    title: "Pelatihan Confined Space Entry: Standar Prosedur Masuk & Bekerja Aman",
    h1: "Pelatihan Confined Space Entry: Standar Prosedur Masuk dan Bekerja Aman di Ruang Terbatas",
    meta: "Pelatihan confined space entry: identifikasi bahaya atmosfer, sistem izin kerja masuk (PTW), ventilasi mekanik, pengujian gas beracun, dan sertifikasi K3 Kemnaker.",
    imgAlt: "Pekerja industri mengenakan APD lengkap dan harness bersiap memasuki ruang terbatas dengan pengawasan safety attendant",
    related: ["gas-tester", "rescue-ruang-terbatas", "permit-to-work", "teknisi-k3-ruang-terbatas"],
    faq: [
      {
        q: "Apa saja kriteria sebuah area dikategorikan sebagai Confined Space (Ruang Terbatas)?",
        a: "Suatu area dikategorikan ruang terbatas jika memiliki akses masuk/keluar terbatas, tidak dirancang untuk ditempati pekerja secara terus-menerus, dan memiliki potensi bahaya atmosfer (kekurangan oksigen, akumulasi gas beracun/mudah terbakar) atau bahaya fisik seperti penimbunan material dan konfigurasi yang menjebak."
      },
      {
        q: "Berapa batas aman kadar oksigen sebelum diizinkan memasuki ruang terbatas?",
        a: "Berdasarkan standar K3 nasional dan OSHA, rentang konsentrasi oksigen yang aman untuk dimasuki adalah antara 19.5% hingga 23.5%. Kadar di bawah 19.5% masuk kategori asfiksia (defisiensi oksigen), sedangkan di atas 23.5% meningkatkan risiko kebakaran ekstrem (oxygen-enriched)."
      },
      {
        q: "Siapa saja personel wajib yang harus ada dalam operasi confined space entry?",
        a: "Minimal terdapat 3 peran utama: Entry Supervisor (penanggung jawab otorisasi izin kerja), Authorized Entrant (pekerja terlatih yang masuk ke dalam ruang terbatas), dan Standby Person/Attendant (petugas jaga di luar pintu masuk yang memantau komunikasi dan dilarang meninggalkan pos)."
      },
      {
        q: "Apakah sertifikat pelatihan confined space entry wajib dari Kemnaker RI?",
        a: "Untuk level Madya/Utama (Teknisi K3 Ruang Terbatas dan Pengawas), regulasi Kepdirjen Binwasnaker mewajibkan pembinaan resmi bersertifikasi Kemnaker RI. Untuk pemahaman internal kru pelaksana, in-house training kontekstual sangat disarankan untuk melatih SOP spesifik tangki/vessel perusahaan."
      }
    ],
    html: `<p>Bekerja di ruang terbatas (<em>confined space</em>) seperti tangki penyimpanan, silo, bejana tekan, gorong-gorong, dan terowongan bawah tanah merupakan salah satu aktivitas berisiko fatalitas tertinggi di sektor industri nasional. Statistik kecelakaan kerja menunjukkan bahwa lebih dari 60% korban jiwa di ruang terbatas adalah calon penyelamat (<em>would-be rescuers</em>) yang panik masuk tanpa alat pelindung diri memadai saat rekannya pingsan.</p>

<p>Pelatihan Confined Space Entry dirancang untuk membekali tim operasional, pemeliharaan (maintenance), dan pengawas K3 dengan kompetensi komprehensif mulai dari pengujian atmosfer awal, isolasi energi berbahaya (LOTO), ventilasi mekanik, hingga prosedur masuk dan kerja aman tanpa kompromi.</p>

<h2 id="urgensi-bahaya">Urgensi &amp; Karakteristik Bahaya Ruang Terbatas</h2>
<p>Ruang terbatas memiliki karakteristik spesifik yang membuat bahaya di dalamnya seringkali tidak kasat mata dan tidak berbau. Beberapa potensi bahaya kritis meliputi:</p>
<ul class="check-list">
  <li><strong>Defisiensi Oksigen (&lt;19.5%):</strong> Menyebabkan pusing, kehilangan kesadaran mendadak dalam hitungan detik, hingga kematian otak permanen.</li>
  <li><strong>Gas Beracun &amp; Mematikan:</strong> Akumulasi gas Hidrogen Sulfida (H2S), Karbon Monoksida (CO), atau uap pelarut hidrokarbon yang melebihi Nilai Ambang Batas (NAB).</li>
  <li><strong>Atmosfer Mudah Terbakar (Flammable):</strong> Konsentrasi uap atau debu mudah meledak yang melampaui batas 10% <em>Lower Explosive Limit</em> (LEL).</li>
  <li><strong>Bahaya Fisik &amp; Mekanikal:</strong> Risiko terperangkap (engulfment) oleh butiran cairan/serbuk, konfigurasi dinding menyempit, dan bagian mesin yang bergerak tiba-tiba.</li>
</ul>

<h2 id="silabus-modul">Silabus &amp; Kurikulum Pelatihan Komprehensif</h2>
<div class="table-scroll"><table>
  <tr><th>Modul</th><th>Topik Pembahasan</th><th>Praktik &amp; Simulasi</th></tr>
  <tr><td><strong>Modul 1</strong></td><td>Regulasi K3 Ruang Terbatas (Permenaker &amp; SKKNI)</td><td>Kajian studi kasus kegagalan izin kerja di industri</td></tr>
  <tr><td><strong>Modul 2</strong></td><td>Identifikasi Bahaya &amp; Pengujian Atmosfer Gas</td><td>Simulasi continuous gas testing multi-gas detector</td></tr>
  <tr><td><strong>Modul 3</strong></td><td>Isolasi Energi (LOTO) &amp; Ventilasi Mekanik (Blower/Exhauster)</td><td>Pemasangan blind flange, lock out, dan purge airflow</td></tr>
  <tr><td><strong>Modul 4</strong></td><td>Sistem Izin Masuk (Confined Space Entry Permit - PTW)</td><td>Penyusunan checklist verifikasi keselamatan dan approval</td></tr>
  <tr><td><strong>Modul 5</strong></td><td>Prosedur Komunikasi, APD Khusus (SCBA/Airline), &amp; Non-Entry Rescue</td><td>Pemasangan tripod, winch harness, dan evakuasi manikin</td></tr>
</table></div>

<h2 id="landasan-hukum">Standar Regulasi &amp; Dasar Hukum</h2>
<p>Program pelatihan ini mengacu pada landasan regulasi keselamatan ketenagakerjaan resmi di Indonesia:</p>
<ul>
  <li><strong>Undang-Undang No. 1 Tahun 1970</strong> tentang Keselamatan Kerja.</li>
  <li><strong>Keputusan Direktur Jenderal Pembinaan Pengawasan Ketenagakerjaan No. Kep. 113/DJPPK/IX/2006</strong> tentang Pedoman Teknis K3 Bekerja di Ruang Terbatas (Confined Spaces).</li>
  <li><strong>Standar OSHA 29 CFR 1910.146</strong> (Permit-Required Confined Spaces).</li>
</ul>

<h2 id="sasaran-peserta">Sasaran Peserta Pelatihan</h2>
<p>Program ini ditujukan bagi personil yang bertanggung jawab langsung atas keselamatan kerja confined space:</p>
<ul>
  <li>Operator pembersihan tangki, tangki timbun minyak, vessel kimia, dan silo bahan baku.</li>
  <li>Teknisi mekanik dan elektrikal yang melakukan pekerjaan perbaikan di dalam manhole dan saluran pipa.</li>
  <li>Safety Officer, Safety Inspector, dan Pengawas Lapangan (Supervisor).</li>
  <li>Anggota tim tanggap darurat internal (ERT) perusahaan.</li>
</ul>

<h2 id="rekomendasi-program">Program Pelatihan Terkait &amp; Lanjutan</h2>
<p>Untuk memperkuat kapabilitas tim di lapangan, program ini terintegrasi erat dengan:</p>
<p>
  <a href="/kategori-pelatihan/gas-tester/">Pelatihan Gas Tester Tersertifikasi</a>
  <a href="/kategori-pelatihan/teknisi-k3-ruang-terbatas/">Pelatihan Teknisi K3 Ruang Terbatas</a>
  <a href="/kategori-pelatihan/permit-to-work/">Pelatihan Sistem Izin Kerja (PTW)</a>
  <a href="/kategori-pelatihan/rescue-ruang-terbatas/">Pelatihan Penyelamatan di Ruang Terbatas</a>
</p>`
  },

  // 2. Teknisi K3 Ruang Terbatas
  {
    key: "teknisi-k3-ruang-terbatas",
    title: "Pelatihan Teknisi K3 Ruang Terbatas: Sertifikasi Kompetensi Resmi",
    h1: "Pelatihan Teknisi K3 Ruang Terbatas: Kompetensi Pengawasan & Operasional Bekerja di Ruang Terbatas",
    meta: "Pelatihan teknisi K3 ruang terbatas (Madya/Utama): isolasi energi, pengujian gas berkala, pengawasan masuk (safety attendant), dan sertifikasi resmi Kemnaker RI.",
    imgAlt: "Instruktur K3 menguji kadar atmosfer gas menggunakan multi-gas detector portabel di depan manhole tangki industri",
    related: ["confined-space-entry", "gas-detector", "rescue-ruang-terbatas", "permit-to-work"],
    faq: [
      {
        q: "Apa perbedaan Teknisi K3 Ruang Terbatas Madya dan Utama?",
        a: "Teknisi Madya bertugas sebagai pelaksana teknis pengujian gas, pembersihan, dan pengawasan jaga (standby person) di pintu masuk. Sedangkan Teknisi Utama memiliki kewenangan lebih tinggi dalam mengevaluasi izin masuk (Entry Supervisor), menentukan teknik isolasi energi, serta memimpin mitigasi kondisi darurat."
      },
      {
        q: "Apa tugas utama seorang Standby Person (Safety Attendant)?",
        a: "Memantau jumlah pekerja di dalam, mencatat log waktu masuk-keluar, mempertahankan komunikasi visual/suara tanpa henti, memantau gas detector berkelanjutan, dan segera memanggil tim rescue jika terjadi anomali tanpa pernah masuk ke dalam ruangan."
      },
      {
        q: "Berapa lama masa berlaku sertifikat kompetensi Teknisi K3 Ruang Terbatas?",
        a: "Sertifikat dan Surat Izin Kerja (SIK) resmi dari Kemnaker RI memiliki masa berlaku 3 tahun dan dapat diperpanjang melalui proses evaluasi dan verifikasi kepatuhan berkala."
      }
    ],
    html: `<p>Penetapan personel yang berkualifikasi sebagai <strong>Teknisi K3 Ruang Terbatas</strong> adalah kewajiban hukum mutlak bagi setiap pengelola fasilitas industri yang mengoperasikan bejana bertekanan, tangki penyimpanan, pipa proses, dan instalasi tertutup. Kegagalan menunjuk teknisi tersertifikasi dapat berakibat pada penutupan area kerja oleh Pengawas Ketenagakerjaan serta sanksi pidana ketenagakerjaan.</p>

<p>Pelatihan ini memberikan penguasaan teknis mendalam mengenai prosedur standardisasi pengawasan, teknik pengujian gas multi-sensor, manajemen sirkulasi udara mekanik, serta kepemimpinan pengawasan masuk (<em>entry monitoring</em>).</p>

<h2 id="tugas-wewenang">Tugas &amp; Tanggung Jawab Teknisi K3 Ruang Terbatas</h2>
<ul class="check-list">
  <li>Memeriksa kelayakan dan mengkalibrasi peralatan pendeteksi gas sebelum operasi dimulai.</li>
  <li>Memastikan seluruh sumber energi mekanis, hidrolik, dan elektrikal telah diisolasi total melalui prosedur LOTO.</li>
  <li>Menghitung kecukupan debit udara ventilasi mekanis (Air Changes per Hour - ACH) untuk mencegah kantong udara beracun.</li>
  <li>Mengendalikan dan menghentikan pekerjaan secara mutlak (<em>Stop Work Authority</em>) jika terjadi perubahan parameter atmosfer.</li>
</ul>

<h2 id="silabus-modul">Struktur Modul Pelatihan</h2>
<div class="table-scroll"><table>
  <tr><th>Modul</th><th>Cakupan Kompetensi</th></tr>
  <tr><td><strong>Modul 1: Kerangka Hukum &amp; Kepatuhan</strong></td><td>Permenaker K3 Ruang Terbatas, Kepdirjen 113/2006, sanksi ketidakpatuhan</td></tr>
  <tr><td><strong>Modul 2: Toksikologi &amp; Atmosfer Berbahaya</strong></td><td>Karakteristik H2S, CO, Methane, LEL, VOC, dan efek fisiologis terhadap tubuh manusia</td></tr>
  <tr><td><strong>Modul 3: Peralatan Deteksi &amp; Ventilasi</strong></td><td>Bump testing, kalibrasi multi-gas, perhitungan kapasitas blower dan ducting</td></tr>
  <tr><td><strong>Modul 4: Proteksi Diri Khusus &amp; Komunikasi</strong></td><td>Pemilihan SCBA, Airline respirator, explosion-proof lighting, dan radio intrinsik</td></tr>
  <tr><td><strong>Modul 5: Simulasi Evaluasi Masuk &amp; Logbook</strong></td><td>Praktik pengisian lembar kerja teknisi, log attendant, dan pelaporan berkala</td></tr>
</table></div>

<h2 id="program-lanjutan">Program Kompetensi Terkait</h2>
<p>Penguatan keahlian teknisi K3 ruang terbatas direkomendasikan melengkapi kualifikasi dengan:</p>
<p>
  <a href="/kategori-pelatihan/confined-space-entry/">Pelatihan Confined Space Entry</a>
  <a href="/kategori-pelatihan/gas-detector/">Pelatihan Kalibrasi Gas Detector</a>
  <a href="/kategori-pelatihan/permit-to-work/">Pelatihan Izin Kerja Aman (PTW)</a>
</p>`
  },

  // 3. Rescue Ruang Terbatas
  {
    key: "rescue-ruang-terbatas",
    title: "Pelatihan Rescue Ruang Terbatas: Penyelamatan & Evakuasi Darurat",
    h1: "Pelatihan Rescue Ruang Terbatas: Protokol Evakuasi Korban dan Tanggap Darurat di Ruang Sempit",
    meta: "Pelatihan rescue ruang terbatas: penggunaan tripod rescue, mechanical winch, SCBA darurat, evakuasi vertical/horizontal, dan pertolongan pertama henti napas.",
    imgAlt: "Tim rescue K3 melakukan simulasi pengangkatan korban dari lubang manhole menggunakan sistem tripod dan pulley haulage",
    related: ["confined-space-entry", "rescue-di-ketinggian", "cpr-dan-basic-life-support", "petugas-p3k"],
    faq: [
      {
        q: "Apa yang dimaksud dengan Non-Entry Rescue dalam ruang terbatas?",
        a: "Non-entry rescue adalah teknik penyelamatan di mana tim penyelamat menarik korban keluar menggunakan tali pengaman (retrieval line), tripod, dan winch mechanical tanpa harus ada personel lain yang masuk ke dalam ruang beracun."
      },
      {
        q: "Kapan metode Entry Rescue terpaksa harus dilakukan?",
        a: "Entry rescue dilakukan hanya jika tali penolong tersangkut, korban terhalang rintangan struktural internal tangki, atau korban membutuhkan stabilisasi medis mendesak (pemberian oksigen darurat/resusitasi) sebelum dapat dipindahkan."
      }
    ],
    html: `<p>Dalam skenario darurat di ruang terbatas, waktu adalah musuh utama. Ketika seorang pekerja tumbang akibat paparan gas beracun seperti Hidrogen Sulfida (H2S) atau anoksia oksigen murni, tim penolong hanya memiliki waktu <strong>kurang dari 4 menit</strong> sebelum korban mengalami kerusakan otak permanen atau kematian. Pelatihan Rescue Ruang Terbatas berfokus pada kecepatan respons taktis tanpa mengorbankan keselamatan tim penyelamat.</p>

<h2 id="protokol-rescue">Prinsip Emas Penyelamatan Ruang Terbatas</h2>
<ul class="check-list">
  <li><strong>Jangan Pernah Masuk Sendiri:</strong> Penyelamat dilarang keras melompat masuk ke dalam tangki tanpa SCBA dan tim pendukung di luar.</li>
  <li><strong>Prioritas Non-Entry Retrieval:</strong> Selalu gunakan mechanical retrieval system yang terpasang pada full body harness pekerja sebelum mempertimbangkan masuk manual.</li>
  <li><strong>Ventilasi Darurat Maksimal:</strong> Aktifkan blower dengan kapasitas maksimum untuk mengencerkan konsentrasi kontaminan selama proses evakuasi berlangsung.</li>
</ul>

<h2 id="silabus-praktik">Kurikulum &amp; Latihan Keterampilan Lapangan</h2>
<ul>
  <li>Pemasangan cepat Tripod Rescue &amp; Davit Arm System pada berbagai tipe lubang masuk (horizontal dan vertikal).</li>
  <li>Penggunaan Emergency Escape Breathing Apparatus (EEBA) dan Self-Contained Breathing Apparatus (SCBA) tekanan positif.</li>
  <li>Teknik pengikatan dan pemindahan korban cedera tulang belakang menggunakan spinal board sempit dan Sked Stretcher.</li>
  <li>Prosedur serah terima medis darurat kepada tim P3K dan ambulans.</li>
</ul>

<p>
  <a href="/kategori-pelatihan/confined-space-entry/">Pelatihan Confined Space Entry</a>
  <a href="/kategori-pelatihan/gas-tester/">Pelatihan Gas Tester</a>
  <a href="/kategori-pelatihan/teknisi-k3-ruang-terbatas/">Pelatihan Teknisi K3 Ruang Terbatas</a>
</p>`
  },

  // 4. Gas Tester
  {
    key: "gas-tester",
    title: "Pelatihan Gas Tester: Pengujian Atmosfer Berbahaya Tempat Kerja",
    h1: "Pelatihan Gas Tester: Prosedur Pengujian dan Pengukuran Gas Berbahaya di Ruang Terbatas",
    meta: "Pelatihan authorized gas tester: teknik pengujian gas beracun, mudah terbakar (LEL), kadar O2, stratifikasi gas, dan validasi izin kerja panas/ruang terbatas.",
    imgAlt: "Teknisi gas tester melakukan penarikan sampel udara menggunakan selang probe dan gas detector portabel",
    related: ["gas-detector", "confined-space-entry", "h2s-safety", "permit-to-work"],
    faq: [
      {
        q: "Apa yang dimaksud dengan stratifikasi gas dalam pengujian atmosfer?",
        a: "Stratifikasi gas adalah fenomena pembagian lapisan gas berdasarkan berat jenisnya terhadap udara (air density = 1.0). Gas ringan seperti Methane berada di bagian atas, gas dengan berat jenis setara seperti CO berada di tengah, dan gas berat seperti H2S serta uap hidrokarbon mengendap di dasar lantai tangki."
      },
      {
        q: "Berapa lama interval waktu pengujian gas sebelum pekerjaan dimulai?",
        a: "Standar industri mewajibkan pengujian gas dilakukan maksimal 30 menit sebelum pekerja memasuki area kerja atau sebelum pekerjaan panas (hot work) dinyalakan, serta dilakukan continuous monitoring selama pekerjaan berlangsung."
      }
    ],
    html: `<p>Peran <strong>Authorized Gas Tester (AGT)</strong> adalah benteng terdepan dalam mencegah insiden kebakaran, ledakan, dan keracunan massal di fasilitas perminyakan, petrokimia, manufaktur, dan pertambangan. Seorang Gas Tester bertanggung jawab memastikan bahwa kondisi atmosfer kerja benar-benar aman sebelum Surat Izin Kerja (Permit to Work) disetujui.</p>

<h2 id="hierarki-pengujian">Hierarki Urutan Pengujian Gas yang Benar</h2>
<p>Banyak penguji pemula melakukan kesalahan fatal dengan menguji gas beracun terlebih dahulu. Standar internasional mewajibkan urutan pengujian atmosfer yang ketat:</p>
<ol class="steps">
  <li><strong>Kandungan Oksigen (O2):</strong> Sensor gas mudah terbakar dan beberapa gas toksik membutuhkan kadar oksigen minimal untuk dapat membaca akurat. Pastikan O2 berada di 19.5% – 23.5%.</li>
  <li><strong>Gas Mudah Terbakar (Flammable Gases / LEL):</strong> Memastikan tidak ada risiko ledakan mendadak (wajib &lt;5% LEL untuk hot work, &lt;10% LEL untuk cold work).</li>
  <li><strong>Gas Toksik &amp; Beracun:</strong> Memeriksa parameter gas spesifik seperti H2S (&lt;1 ppm / 5 ppm), Carbon Monoxide (&lt;25 ppm), dan VOC.</li>
</ol>

<h2 id="materi-pelatihan">Materi &amp; Simulasi Praktik</h2>
<ul class="check-list">
  <li>Prinsip kerja sensor catalytic bead, electrochemical, dan Photoionization Detector (PID).</li>
  <li>Teknik sampling di kedalaman menggunakan probe dan aspirator pump dengan rumus sampling time (2 detik per meter selang).</li>
  <li>Pencatatan resmi lembar uji gas (Gas Testing Certificate) dan integrasi dengan sistem Permit to Work.</li>
</ul>

<p>
  <a href="/kategori-pelatihan/gas-detector/">Pelatihan Kalibrasi Gas Detector</a>
  <a href="/kategori-pelatihan/hot-work-safety/">Pelatihan Hot Work Safety</a>
  <a href="/kategori-pelatihan/permit-to-work/">Pelatihan Permit to Work</a>
</p>`
  },

  // 5. Gas Detector
  {
    key: "gas-detector",
    title: "Pelatihan Pengoperasian & Kalibrasi Gas Detector Multi-Gas",
    h1: "Pelatihan Pengoperasian, Perawatan, dan Kalibrasi Gas Detector Multi-Gas",
    meta: "Pelatihan teknis gas detector portabel: prosedur bump test harian, span calibration, penggantian sensor elektrokimia, dan penanganan alarm darurat di lapangan.",
    imgAlt: "Instruktur menunjukkan tabung gas kalibrasi dan regulator saat menguji fungsi sensor gas detector",
    related: ["gas-tester", "confined-space-entry", "chemical-safety", "h2s-safety"],
    faq: [
      {
        q: "Apa perbedaan mendasar antara Bump Test dan Full Calibration?",
        a: "Bump test (uji respon) adalah paparan singkat gas target konsentrasi tertentu untuk memverifikasi bahwa sensor merespons dan alarm berbunyi normal sebelum alat digunakan setiap hari. Sedangkan Full Calibration (kalibrasi penuh) adalah penyesuaian parameter elektronik alat menggunakan gas standar bersertifikat secara berkala (tiap 1–6 bulan)."
      }
    ],
    html: `<p>Gas detector adalah instrumen keselamatan penyelamat nyawa, namun alat ini tidak ada gunanya jika sensornya telah mengalami racun sensor (sensor poisoning), penurunan sensitivitas, atau baterai drop di tengah operasi. Pelatihan ini melatih teknisi dan petugas K3 dalam menjaga keandalan instrumen deteksi gas sesuai standar manufaktur global.</p>

<h2 id="kompetensi-kunci">Kompetensi Utama yang Dipelajari</h2>
<ul>
  <li>Prosedur Fresh Air Zero Calibration di udara terbuka yang bersih.</li>
  <li>Pelaksanaan harian Bump Test dan pencatatan audit trail instrumen.</li>
  <li>Span Calibration dengan campuran multi-gas (Methane/Pentane, CO, H2S, O2 balance N2).</li>
  <li>Penanganan zat peracun sensor catalytic (silikon, timbal, senyawa belerang).</li>
</ul>

<p>
  <a href="/kategori-pelatihan/gas-tester/">Pelatihan Gas Tester</a>
  <a href="/kategori-pelatihan/confined-space-entry/">Pelatihan Ruang Terbatas</a>
  <a href="/kategori-pelatihan/permit-to-work/">Pelatihan Permit to Work</a>
</p>`
  },

  // 6. Working at Height
  {
    key: "working-at-height",
    title: "Pelatihan Working at Height: Standar Keselamatan Bekerja di Ketinggian",
    h1: "Pelatihan Working at Height: Pencegahan Jatuh dan Prosedur Bekerja Aman di Ketinggian",
    meta: "Pelatihan working at height (TKPK/TKBT): sistem pencegah jatuh, inspeksi full body harness, shock absorber, anchor point 5000 lbs, dan regulasi Permenaker No. 9/2016.",
    imgAlt: "Pekerja konstruksi memakai full body harness ganda dan lanyard terpasang aman pada lifeline horizontal",
    related: ["bekerja-di-ketinggian", "fall-protection", "rope-access-dasar", "operator-scaffolding"],
    faq: [
      {
        q: "Berapa batas ketinggian yang wajib menerapkan prosedur Working at Height di Indonesia?",
        a: "Menurut Permenaker No. 9 Tahun 2016, bekerja pada ketinggian adalah kegiatan kerja yang dilakukan oleh tenaga kerja pada tempat kerja di permukaan tanah atau perairan yang terdapat perbedaan ketinggian dan memiliki potensi jatuh yang dapat menyebabkan cedera atau kematian (secara praktis umumnya dimulai dari ketinggian 1.8 meter ke atas)."
      },
      {
        q: "Kapan lanyard dengan shock absorber wajib digunakan?",
        a: "Lanyard dengan shock absorber (energy absorber) wajib digunakan pada sistem penahan jatuh (fall arrest system) di mana ada kemungkinan pekerja jatuh bebas, guna meredam gaya kejut pada tubuh hingga di bawah 6 kN (standar ANSI/OSHA)."
      }
    ],
    html: `<p>Jatuh dari ketinggian (<em>fall from height</em>) secara konsisten menempati peringkat pertama penyebab kematian fatalitas tertinggi di industri konstruksi, pemeliharaan gedung, dan pabrik manufaktur di Indonesia. Hampir seluruh kecelakaan fatal terjadi bukan karena ketiadaan APD, melainkan karena ketidakpahaman pekerja dalam memilih titik jangkar (anchor point), salah menghitung jarak jatuh aman (clearance distance), atau menggunakan harness yang tidak layak pakai.</p>

<h2 id="hierarki-pengendalian">Hierarki Pengendalian Bahaya Ketinggian</h2>
<ol class="steps">
  <li><strong>Eliminasi:</strong> Mendesain ulang metode kerja agar pekerjaan dapat diselesaikan dari permukaan tanah (ground level).</li>
  <li><strong>Proteksi Pasif (Fall Prevention):</strong> Memasang guardrail, barricade, dan platform kerja tertutup perancah.</li>
  <li><strong>Pembatas Gerak (Work Restraint):</strong> Menggunakan lanyard dengan panjang tetap agar pekerja secara fisik tidak dapat mendekati tepi bahaya jatuh.</li>
  <li><strong>Penahan Jatuh (Fall Arrest):</strong> Menggunakan sistem full body harness, energy absorber, dan lifeline yang mampu menahan tubuh saat jatuh terjadi.</li>
</ol>

<h2 id="kurikulum-pelatihan">Kurikulum Pelatihan Teori &amp; Praktik</h2>
<ul class="check-list">
  <li>Kepatuhan regulasi Permenaker No. 09/2016 tentang K3 Bekerja pada Ketinggian.</li>
  <li>Inspeksi visual pre-use pada webbing harness, D-ring, karabiner, dan anchor strap.</li>
  <li>Kalkulasi Total Fall Clearance Distance (Panjang Lanyard + Deceleration + Tinggi Badan + Safety Margin).</li>
  <li>Teknik pemasangan temporary lifeline horizontal dan vertical rope grab.</li>
</ul>

<p>
  <a href="/kategori-pelatihan/fall-protection/">Pelatihan Fall Protection</a>
  <a href="/kategori-pelatihan/bekerja-di-ketinggian/">Pelatihan Bekerja di Ketinggian (TKBT)</a>
  <a href="/kategori-pelatihan/rescue-di-ketinggian/">Pelatihan Rescue Ketinggian</a>
</p>`
  },

  // 7. Bekerja di Ketinggian (TKBT & TKPK)
  {
    key: "bekerja-di-ketinggian",
    title: "Pelatihan Bekerja di Ketinggian: Sertifikasi TKBT & TKPK Kemnaker",
    h1: "Pelatihan Bekerja di Ketinggian (TKBT & TKPK): Kepatuhan Regulasi Permenaker No. 9/2016",
    meta: "Pelatihan sertifikasi K3 bekerja di ketinggian: Tenaga Kerja Bangunan Tinggi (TKBT) tingkat 1 & 2, Tenaga Kerja Pada Ketinggian (TKPK), sistem perancah, dan izin kerja.",
    imgAlt: "Teknisi bangunan tinggi melakukan pekerjaan inspeksi struktur rangka baja dengan tali pengaman ganda",
    related: ["working-at-height", "rescue-di-ketinggian", "fall-protection", "operator-scaffolding"],
    faq: [
      {
        q: "Apa perbedaan kualifikasi TKBT (Bangunan Tinggi) dan TKPK (Pada Ketinggian)?",
        a: "TKBT (Tenaga Kerja Bangunan Tinggi) diperuntukkan bagi pekerja yang bekerja pada platform tetap seperti perancah, gondola, atau struktur bertangga. Sedangkan TKPK (Tenaga Kerja Pada Ketinggian) menggunakan metode akses tali (rope access) untuk bermanuver di udara bebas tanpa pijakan lantai."
      }
    ],
    html: `<p>Kepatuhan terhadap Permenaker No. 9 Tahun 2016 kini menjadi syarat mutlak dalam tender proyek EPC, konstruksi gedung, pembangkit listrik, dan industri manufaktur. Pelatihan ini memfasilitasi sertifikasi resmi kompetensi Tenaga Kerja Bangunan Tinggi (TKBT) dan pembekalan teknis keselamatan ketinggian.</p>

<h2 id="materi-pembinaan">Materi Pembinaan &amp; Praktik Lapangan</h2>
<ul>
  <li>Prinsip 100% Tie-off menggunakan double lanyard with shock absorber.</li>
  <li>Penggunaan mobile fall arrester pada tali vertikal (rope grab).</li>
  <li>Manajemen pencegahan jatuhnya perkakas kerja (Drop Object Prevention System - DROPS).</li>
  <li>Penerbitan Surat Izin Kerja Aman (SIKA) Ketinggian dan Job Safety Analysis (JSA).</li>
</ul>

<p>
  <a href="/kategori-pelatihan/working-at-height/">Pelatihan Working at Height</a>
  <a href="/kategori-pelatihan/rope-access-dasar/">Pelatihan Rope Access</a>
  <a href="/kategori-pelatihan/operator-scaffolding/">Pelatihan Operator Scaffolding</a>
</p>`
  },

  // 8. Fall Protection
  {
    key: "fall-protection",
    title: "Pelatihan Fall Protection: Perancangan & Inspeksi Sistem Proteksi Jatuh",
    h1: "Pelatihan Fall Protection: Perancangan, Pemasangan, dan Inspeksi Sistem Proteksi Jatuh",
    meta: "Pelatihan fall protection komprehensif: perhitungan clearance distance, shock absorber, anchor rating 5000 lbs, self-retracting lifeline (SRL), dan suspension trauma.",
    imgAlt: "Peralatan fall protection lengkap mencakup full body harness, self-retracting lifeline, dan karabiner baja",
    related: ["working-at-height", "rope-access-dasar", "rescue-di-ketinggian", "bekerja-di-ketinggian"],
    faq: [
      {
        q: "Berapa kekuatan beban minimal yang harus mampu ditahan oleh sebuah Anchor Point?",
        a: "Standar OSHA 1926.502 dan ANSI Z359 menetapkan bahwa titik angkur penahan jatuh (fall arrest anchor) wajib mampu menahan beban statis minimal 5.000 lbs (22.2 kN) per orang, atau dirancang oleh ahli dengan faktor keamanan minimal 2."
      },
      {
        q: "Apa bahaya dari Suspension Trauma dan seberapa cepat harus ditangani?",
        a: "Suspension trauma (harness hang syndrome) terjadi ketika korban tergantung tidak sadar atau diam di harness, menyebabkan darah terperangkap di kaki dan memotong suplai oksigen ke otak/jantung. Gejala kritis dapat mematikan dalam waktu 10-15 menit jika tidak segera ditopang trauma strap atau dievakuasi."
      }
    ],
    html: `<p>Sistem proteksi jatuh (<em>Fall Protection System</em>) bukan sekadar membeli harness di toko perlengkapan. Kegagalan memahami interaksi mekanis antara anchor point, konektor, deceleration device, dan clearance distance sering kali berujung pada benturan fatal dengan lantai kerja bawah sebelum tali penahan mengembang sempurna.</p>

<h2 id="anatomi-sistem">Anatomi ABC Sistem Proteksi Jatuh</h2>
<ul class="check-list">
  <li><strong>A - Anchorage:</strong> Struktur penahan beban (beam clamp, eyebolt, roof anchor) dengan kapasitas teruji.</li>
  <li><strong>B - Body Wear:</strong> Full Body Harness dengan posisi D-ring dorsal tepat di antara tulang belikat.</li>
  <li><strong>C - Connecting Device:</strong> Energy-absorbing lanyard atau Self-Retracting Lifeline (SRL) / Fall Arrester.</li>
  <li><strong>D - Descent &amp; Rescue:</strong> Rencana evakuasi darurat sebelum korban mengalami trauma gantung.</li>
</ul>

<p>
  <a href="/kategori-pelatihan/working-at-height/">Pelatihan Working at Height</a>
  <a href="/kategori-pelatihan/rescue-di-ketinggian/">Pelatihan Rescue Ketinggian</a>
  <a href="/kategori-pelatihan/bekerja-di-ketinggian/">Pelatihan Bekerja di Ketinggian</a>
</p>`
  },

  // 9. Rope Access Dasar
  {
    key: "rope-access-dasar",
    title: "Pelatihan Rope Access Dasar: Teknik Akses Tali Industri",
    h1: "Pelatihan Rope Access Dasar: Teknik Bermanuver Tali, Ascending, Descending, dan Changeover",
    meta: "Pelatihan akses tali industri (TKPK 1): standar SKKNI & Kemnaker, simpul tali industri, backup fall arrester device, ascending/descending, dan evakuasi dasar di tali.",
    imgAlt: "Teknisi rope access bermanuver di dinding vertikal dengan dua tali independen (working line dan safety line)",
    related: ["working-at-height", "rescue-di-ketinggian", "fall-protection", "bekerja-di-ketinggian"],
    faq: [
      {
        q: "Mengapa sistem Rope Access selalu mewajibkan penggunaan 2 tali independen?",
        a: "Prinsip dasar keselamatan akses tali adalah redundansi 100%: tali kerja (working line) menopang berat badan pekerja, sedangkan tali pengaman (safety/backup line) siap menahan pekerja seketika menggunakan mobile backup device jika tali kerja utama putus atau gagal."
      }
    ],
    html: `<p>Metode <strong>Rope Access (Akses Tali Industri)</strong> adalah solusi paling fleksibel dan efisien biaya untuk pekerjaan inspeksi NDT, pengecatan, pemeliharaan silo, dan pemasangan struktur baja pada area yang mustahil dijangkau oleh perancah atau crane keranjang.</p>

<h2 id="silabus-manuver">Keahlian Manuver yang Dikuasai</h2>
<ul>
  <li>Pemasangan simpul industri: Figure of Eight on bight/rethread, Alpine Butterfly, Double Fisherman.</li>
  <li>Teknik naik (Ascending) menggunakan chest ascender dan hand ascender with foot loop.</li>
  <li>Teknik turun (Descending) dengan descender berfitur anti-panic lock.</li>
  <li>Manuver perpindahan tali (Rope to Rope Transfer, Re-anchor, dan Deviation).</li>
</ul>

<p>
  <a href="/kategori-pelatihan/rescue-di-ketinggian/">Pelatihan Rescue di Ketinggian</a>
  <a href="/kategori-pelatihan/working-at-height/">Pelatihan Working at Height</a>
</p>`
  },

  // 10. Rescue di Ketinggian
  {
    key: "rescue-di-ketinggian",
    title: "Pelatihan Rescue di Ketinggian: Evakuasi Korban Gantung",
    h1: "Pelatihan Rescue di Ketinggian: Prosedur Evakuasi Cepat Suspension Trauma dan Penyelamatan Tali",
    meta: "Pelatihan penyelamatan di ketinggian: protokol suspension trauma, hauling system 3:1 & 4:1, pick-off rescue dari struktur perancah/menara, dan tandu basket rescue.",
    imgAlt: "Simulasi evakuasi korban tergantung di ketinggian menggunakan sistem katrol penurun terkontrol",
    related: ["rope-access-dasar", "working-at-height", "petugas-p3k", "cpr-dan-basic-life-support"],
    faq: [
      {
        q: "Bagaimana cara pertolongan pertama pada korban yang baru diselamatkan dari suspension trauma?",
        a: "Hindari langsung membaringkan korban terlentang mendatar secara tiba-tiba karena dapat memicu reflow syndrome (serbuan darah kotor terakumulasi ke jantung yang dapat menyebabkan henti jantung mendadak). Posisikan korban dalam posisi semi-duduk (W-position) selama 20–30 menit."
      }
    ],
    html: `<p>Setiap rencana kerja di ketinggian diwajibkan oleh undang-undang memiliki rencana tanggap darurat (<em>Rescue Plan</em>) tertulis yang mandiri. Mengandalkan dinas pemadam kebakaran kota sering kali terlambat karena korban yang tergantung pada harness membutuhkan penurunan dalam kurun waktu hitungan menit.</p>

<h2 id="metode-evakuasi">Metode Penyelamatan yang Dipraktikkan</h2>
<ul class="check-list">
  <li>Sistem Penurunan Cepat Terkontrol (Controlled Descent Device).</li>
  <li>Mechanical Advantage Hauling System (Sistem Katrol Maju 3:1 dan 4:1).</li>
  <li>Pick-off Rescue: Menghampiri korban, mengaitkan sistem evakuasi, memotong tali korban, dan turun bersama.</li>
  <li>Stabilisasi leher dan tulang belakang di atas tandu basket vertikal.</li>
</ul>

<p>
  <a href="/kategori-pelatihan/working-at-height/">Pelatihan Working at Height</a>
  <a href="/kategori-pelatihan/fall-protection/">Pelatihan Fall Protection</a>
</p>`
  },

  // 11. Operator Scaffolding
  {
    key: "operator-scaffolding",
    title: "Pelatihan Operator Scaffolding: Pemasangan Perancah Aman",
    h1: "Pelatihan Operator Scaffolding: Teknik Ereksi, Pembongkaran, dan Pemasangan Perancah Tabung/Frame",
    meta: "Pelatihan teknisi/operator scaffolding (perancah): standar Permenaker No. 1/1980, beban kerja aman (SWL), ikatan perancah (tie-in), pemasangan platform plank & toeboard.",
    imgAlt: "Operator scaffolder mengenakan helm dan harness sedang memasang pipa ledger dan clamp pada struktur perancah modular",
    related: ["pengawas-scaffolding", "scaffolding-inspector", "working-at-height"],
    faq: [
      {
        q: "Apa saja syarat utama landasan (foundation) perancah yang aman?",
        a: "Landasan perancah wajib ditempatkan di atas tanah yang padat/keras, menggunakan alas papan kayu (sole plate) berketebalan minimal 35-50 mm, dan pelat dasar baja (base plate) dengan dongkrak ulir (jack base) untuk meratakan ketinggian."
      }
    ],
    html: `<p>Perancah (<em>scaffolding</em>) adalah sarana kerja sementara yang menopang ribuan jam kerja di proyek konstruksi dan turnaround pabrik. Kesalahan kecil pada pemasangan klem (clamp), ketiadaan diagonal bracing, atau pengabaian sole plate dapat memicu keruntuhan progresif beruntun (progressive collapse) yang merobohkan seluruh struktur.</p>

<h2 id="modul-praktik">Materi Pelatihan Teknisi Scaffolding</h2>
<ul>
  <li>Pengenalan komponen: Standar, Ledger, Transom, Diagonal Bracing, Swivel/Fixed Clamp, dan Joint Pin.</li>
  <li>Teknik pemasangan berurutan dari leveling dasar hingga pemasangan guardrail (toprail 100-115 cm, midrail 50 cm, toeboard 15 cm).</li>
  <li>SOP pembongkaran aman dengan urutan terbalik (top-down) tanpa melempar material pipa.</li>
</ul>

<p>
  <a href="/kategori-pelatihan/pengawas-scaffolding/">Pelatihan Pengawas Scaffolding</a>
  <a href="/kategori-pelatihan/scaffolding-inspector/">Pelatihan Scaffolding Inspector</a>
</p>`
  },

  // 12. Pengawas Scaffolding
  {
    key: "pengawas-scaffolding",
    title: "Pelatihan Pengawas Scaffolding: Supervisi Struktur Perancah",
    h1: "Pelatihan Pengawas Scaffolding: Manajemen Desain Beban, Pengawasan Ereksi, dan K3 Perancah",
    meta: "Pelatihan pengawas scaffolding: perhitungan rasio stabilitas 4:1, inspeksi pengikatan struktur (tie-in), supervisi tim scaffolder, dan analisis beban hidup/mati perancah.",
    imgAlt: "Pengawas scaffolding memeriksa penguncian klem dan meninjau gambar desain perancah di lokasi kerja",
    related: ["operator-scaffolding", "scaffolding-inspector", "permit-to-work", "safety-officer-k3"],
    faq: [
      {
        q: "Kapan struktur perancah wajib diikatkan (tie-in) ke struktur bangunan permanen?",
        a: "Ketika tinggi perancah melebihi 4 kali dimensi lebar dasar terkecilnya (rasio 4:1 untuk perancah statis), struktur wajib dipasangi pengikat (ties) vertikal dan horizontal secara teratur untuk mencegah guling akibat beban angin atau dinamis."
      }
    ],
    html: `<p>Pengawas Scaffolding memegang tanggung jawab supervisi teknis dan keselamatan atas seluruh tim scaffolder. Pelatihan ini melatih kepemimpinan supervisi, pembacaan gambar kerja teknik perancah, kalkulasi beban maksimum platform (Light/Medium/Heavy Duty), dan penegakan izin kerja.</p>

<h2 id="kompetensi-supervisi">Fokus Kompetensi Pengawas</h2>
<ul class="check-list">
  <li>Kalkulasi beban mati (self-weight), beban hidup (pekerja &amp; material), dan beban lingkungan (angin).</li>
  <li>Pengawasan ereksi perancah gantung (cantilever) dan perancah bergerak (mobile tower).</li>
  <li>Mitigasi bahaya induksi listrik kabel udara bertegangan tinggi di sekitar area ereksi.</li>
</ul>

<p>
  <a href="/kategori-pelatihan/operator-scaffolding/">Pelatihan Operator Scaffolding</a>
  <a href="/kategori-pelatihan/scaffolding-inspector/">Pelatihan Scaffolding Inspector</a>
</p>`
  },

  // 13. Scaffolding Inspector
  {
    key: "scaffolding-inspector",
    title: "Pelatihan Scaffolding Inspector: Sertifikasi Inspeksi Perancah",
    h1: "Pelatihan Scaffolding Inspector: Prosedur Audit Struktur, Tagging System, dan Sertifikasi",
    meta: "Pelatihan scaffolding inspector: formulir checklist audit struktur, pengujian kelurusan plumbness, verifikasi tie-in, dan otorisasi Scaff-Tag (Green Tag / Red Tag).",
    imgAlt: "Inspector scaffolding menempelkan green tag penanda perancah aman dan menandatangani kartu inspeksi harian",
    related: ["pengawas-scaffolding", "operator-scaffolding", "safety-officer-k3"],
    faq: [
      {
        q: "Kapan saja Scaffolding Inspector wajib melakukan inspeksi ulang perancah?",
        a: "Inspeksi wajib dilakukan: (1) Selesai ereksi awal sebelum digunakan pertama kali, (2) Secara berkala tiap 7 hari sekali, (3) Setelah terjadi cuaca buruk/hujan badai atau gempa, dan (4) Setelah adanya modifikasi struktur."
      }
    ],
    html: `<p>Seorang <strong>Scaffolding Inspector</strong> adalah pemegang otoritas legal terakhir yang menentukan apakah sebuah konstruksi perancah boleh dinaiki oleh pekerja (<em>Green Tag</em>) atau dilarang keras digunakan (<em>Red Tag</em>).</p>

<h2 id="protokol-inspeksi">Prosedur Checklist Inspeksi Komprehensif</h2>
<ul>
  <li>Pemeriksaan vertikalitas tiang perancah (plumbness) dengan batas toleransi maksimal 1:300.</li>
  <li>Verifikasi ketiadaan celah pada papan lantai kerja (maximum gap &lt;25 mm).</li>
  <li>Pemeriksaan torsi kekencangan mur klem scaffolding (standar 40–50 Nm).</li>
  <li>Penerbitan laporan audit kelayakan struktur dan dokumentasi tag inspeksi.</li>
</ul>

<p>
  <a href="/kategori-pelatihan/pengawas-scaffolding/">Pelatihan Pengawas Scaffolding</a>
  <a href="/peran-jabatan/safety-officer-k3/">Pelatihan Safety Officer</a>
</p>`
  },

  // 14. Rigger
  {
    key: "rigger",
    title: "Pelatihan Rigger (Juru Ikat Beban): Sertifikasi K3 Angkat Angkut",
    h1: "Pelatihan Rigger: Teknik Pengikatan Beban, Inspeksi Sling, dan Keselamatan Lifting Operation",
    meta: "Pelatihan juru ikat beban (rigger): kalkulasi kapasitas WLL/SWL, sudut sling, inspeksi wire rope & webbing sling, rigging hardware (shackle, eyebolt), dan mitigasi pinch point.",
    imgAlt: "Rigger profesional mengenakan sarung tangan kulit sedang memasang shackle dan webbing sling pada beban industri",
    related: ["signalman", "lifting-supervisor", "operator-crane", "lifting-operation-safety"],
    faq: [
      {
        q: "Bagaimana pengaruh sudut sling terhadap kapasitas beban angkat (WLL)?",
        a: "Semakin landai/kecil sudut sling terhadap bidang horizontal, tegangan (tension) pada tiap kaki sling akan melonjak drastis. Pada sudut 60° tegangan naik 1.15x, pada sudut 45° naik 1.41x, dan pada sudut 30° tegangan melonjak menjadi 2x lipat berat beban. Sudut di bawah 30° dilarang keras dalam rigging."
      }
    ],
    html: `<p>Dalam operasi pengangkatan crane, rigger (juru ikat) adalah personel penentu stabilitas muatan. Kesalahan dalam memilih titik angkat (Center of Gravity), sling terpelintir, atau menggunakan shackle tanpa safety pin adalah pemicu utama insiden muatan terlepas (<em>dropped object</em>) yang menelan korban jiwa.</p>

<h2 id="silabus-rigger">Kurikulum Praktik Juru Ikat</h2>
<ul class="check-list">
  <li>Penentuan Titik Berat Beban (Center of Gravity - CoG) asimetris.</li>
  <li>Inspeksi kriteria penolakan (rejection criteria) wire rope sling: kinking, birdcaging, kawat putus.</li>
  <li>Metode pengikatan: Choker Hitch, Basket Hitch, dan Bridle Hitch.</li>
  <li>Penggunaan Tag Line (tali kendali) untuk memandu putaran muatan tanpa mendekati zona bahaya.</li>
</ul>

<p>
  <a href="/kategori-pelatihan/signalman/">Pelatihan Signalman Crane</a>
  <a href="/kategori-pelatihan/operator-crane/">Pelatihan Operator Crane</a>
  <a href="/kategori-pelatihan/lifting-supervisor/">Pelatihan Lifting Supervisor</a>
</p>`
  },

  // 15. Signalman
  {
    key: "signalman",
    title: "Pelatihan Signalman (Juru Sinyal Crane): Standar Isyarat Tangan & Radio",
    h1: "Pelatihan Signalman Crane: Standar Isyarat Tangan Internasional, Komunikasi Radio, dan Panduan Blind Lift",
    meta: "Pelatihan signalman crane: standar sinyal tangan ASME/Kemnaker, protokol komunikasi radio dua arah, koordinasi blind lift, dan peran jalur komando tunggal juru sinyal.",
    imgAlt: "Signalman memberikan isyarat tangan aba-aba pengangkatan beban kepada operator mobile crane",
    related: ["rigger", "operator-mobile-crane", "lifting-supervisor", "lifting-operation-safety"],
    faq: [
      {
        q: "Siapa saja yang berhak memberikan sinyal darurat (Emergency Stop) kepada operator crane?",
        a: "Meskipun seluruh aba-aba operasional hanya boleh diberikan oleh SATU juru sinyal yang ditunjuk (designated signalman), aba-aba STOP DARURAT (Emergency Stop) berhak diberikan oleh SIAPA SAJA yang melihat adanya bahaya mendadak, dan operator wajib langsung mematuhinya."
      }
    ],
    html: `<p>Kecelakaan crane sering terjadi karena miskomunikasi antara juru ikat di darat dan operator di dalam kabin. Signalman bertindak sebagai perpanjangan mata dan telinga operator, terutama pada operasi pengangkatan tanpa pandangan langsung (<em>blind lift</em>).</p>

<h2 id="standar-komunikasi">Materi Pelatihan Juru Sinyal</h2>
<ul>
  <li>Standar Isyarat Tangan Internasional: Hoist, Lower, Boom Up/Down, Swing, Telescope Extend/Retract.</li>
  <li>Protokol komunikasi radio komunikasi: 3-way communication, callout verification, dan anti-interference.</li>
  <li>Penetapan zona pandang aman juru sinyal di luar radius ayunan counterweight crane.</li>
</ul>

<p>
  <a href="/kategori-pelatihan/rigger/">Pelatihan Rigger</a>
  <a href="/kategori-pelatihan/operator-crane/">Pelatihan Operator Crane</a>
</p>`
  },

  // 16. Lifting Supervisor
  {
    key: "lifting-supervisor",
    title: "Pelatihan Lifting Supervisor: Perencanaan & Pengawasan Critical Lift",
    h1: "Pelatihan Lifting Supervisor: Pembuatan Lifting Plan, Analisis Beban Kritis, dan Supervisi Angkat Angkut",
    meta: "Pelatihan lifting supervisor: kalkulasi daya dukung tanah (ground bearing pressure), tandem lifting dua crane, crane outrigger loading, dan approval lifting plan.",
    imgAlt: "Lifting supervisor meninjau dokumen lifting plan dan menghitung radius beban sebelum operasi pengangkatan berat dimulai",
    related: ["lifting-operation-safety", "operator-mobile-crane", "rigger", "operator-crane"],
    faq: [
      {
        q: "Kapan sebuah operasi pengangkatan dikategorikan sebagai Critical Lift?",
        a: "Pengangkatan masuk kategori Critical Lift jika: (1) Beban mencapai &gt;75%–80% kapasitas tabel beban crane (load chart), (2) Menggunakan 2 crane atau lebih (tandem lift), (3) Mengangkat muatan di atas instalasi pipa bertekanan/proses aktif, (4) Mengangkat personel, atau (5) Nilai muatan sangat mahal dan berisiko tinggi."
      }
    ],
    html: `<p>Kegagalan dalam operasi pengangkatan alat berat bukan hanya menghancurkan aset bernilai miliaran rupiah, tetapi juga dapat melumpuhkan operasional pabrik. <strong>Lifting Supervisor</strong> adalah figur sentral yang merancang dan memvalidasi setiap lembar <em>Lifting Plan</em>.</p>

<h2 id="topik-kritis">Topik Kritis Pelatihan</h2>
<ul class="check-list">
  <li>Pembacaan dan verifikasi Load Chart Crane pada berbagai konfigurasi boom dan counterweight.</li>
  <li>Perhitungan Ground Bearing Pressure (GBP) dan penentuan ukuran pelat landasan (outrigger matting).</li>
  <li>Perancangan Rigging Plan dan simulasi rasio pembebanan pada Tandem Lift.</li>
  <li>Mitigasi bahaya kecepatan angin maksimum (wind speed cut-off).</li>
</ul>

<p>
  <a href="/kategori-pelatihan/lifting-operation-safety/">Pelatihan Lifting Operation Safety</a>
  <a href="/kategori-pelatihan/operator-crane/">Pelatihan Operator Crane</a>
</p>`
  },

  // 17. Lifting Operation Safety
  {
    key: "lifting-operation-safety",
    title: "Pelatihan Lifting Operation Safety: Pencegahan Kegagalan Crane",
    h1: "Pelatihan Lifting Operation Safety: Pencegahan Kegagalan Crane, Drop Object, dan Overturning",
    meta: "Pelatihan keselamatan operasi pengangkatan: 10 Golden Rules of Lifting, inspeksi rigging gear, mitigasi angin kencang, pembatasan zona bahaya, dan investigasi insiden.",
    imgAlt: "Barikade perimeter keselamatan terpasang rapi di sekitar area radius kerja mobile crane yang sedang beroperasi",
    related: ["lifting-supervisor", "operator-crane", "rigger", "operator-mobile-crane"],
    faq: [
      {
        q: "Apa penyebab nomor satu crane mobile terguling (crane tipping)?",
        a: "Penyebab nomor satu adalah perpanjangan radius kerja beban melebihi batas aman tabel beban (over-radius), amblesnya outrigger akibat tanah lunak tanpa matting yang memadai, atau kesalahan pembacaan sensor LMI."
      }
    ],
    html: `<p>Keselamatan operasi pengangkatan (<em>Lifting Operation Safety</em>) mencakup kedisiplinan ekosistem kerja yang menghubungkan operator, juru ikat, pengawas, dan pekerja di sekitar radius angkat.</p>

<h2 id="golden-rules">10 Prinsip Utama Keselamatan Pengangkatan</h2>
<ul>
  <li>Dilarang melintas atau berdiri di bawah muatan yang sedang menggantung (Never Walk Under Suspended Load).</li>
  <li>Semua rigging hardware wajib memiliki tanda SWL/WLL yang terbaca jelas dan lolos inspeksi 6 bulanan.</li>
  <li>Outrigger wajib terbentang penuh 100% (kecuali ada tabel chart khusus untuk partial outrigger).</li>
  <li>Perimeter kerja radius putar crane wajib dibarikade fisik dengan pita pengaman.</li>
</ul>

<p>
  <a href="/kategori-pelatihan/lifting-supervisor/">Pelatihan Lifting Supervisor</a>
  <a href="/kategori-pelatihan/rigger/">Pelatihan Rigger</a>
</p>`
  },

  // 18. Operator Forklift
  {
    key: "operator-forklift",
    title: "Pelatihan Operator Forklift: Sertifikasi SIO K3 Kemnaker",
    h1: "Pelatihan Operator Forklift (Kelas I & II): Teknik Manuver Aman, Stabilitas Segitiga, dan Daily Inspection",
    meta: "Pelatihan operator forklift bersertifikat SIO Kemnaker: prinsip stabilitas segitiga beban, load capacity chart, SOP manuver di rampa/tikungan, dan inspeksi harian P2H.",
    imgAlt: "Operator forklift mengenakan rompi reflektif dan sabuk pengaman sedang memindahkan palet barang di gudang",
    related: ["operator-reach-truck", "operator-pallet-stacker", "keselamatan-alat-berat"],
    faq: [
      {
        q: "Apa perbedaan lisensi Operator Forklift Kelas I dan Kelas II di Kemnaker?",
        a: "Berdasarkan Permenaker No. 8 Tahun 2020: Operator Kelas II berwenang mengoperasikan forklift dengan kapasitas angkat sampai dengan 15 ton. Sedangkan Operator Kelas I berwenang mengoperasikan forklift dengan kapasitas di atas 15 ton."
      },
      {
        q: "Mengapa posisi garpu forklift harus selalu rendah saat berjalan?",
        a: "Saat forklift bergerak tanpa atau dengan beban, garpu wajib diposisikan setinggi 15–20 cm dari lantai kerja (travelling height) dengan tiang mast dimiringkan ke belakang (tilt back) untuk menjaga titik pusat gravitasi tetap rendah di dalam segitiga stabilitas."
      }
    ],
    html: `<p>Forklift adalah peralatan material handling paling umum di industri, namun juga mencatat angka kecelakaan kerja tabrakan pejalan kaki dan unit terguling tertinggi di area logistik dan pergudangan. Pelatihan ini melatih operator menguasai kendali unit secara profesional sesuai regulasi Permenaker No. 8 Tahun 2020.</p>

<h2 id="prinsip-stabilitas">Prinsip Segitiga Stabilitas (Stability Triangle)</h2>
<p>Berbeda dengan mobil biasa, forklift bertumpu pada 3 titik poros: dua roda depan dan titik tengah as roda belakang yang berayun. Perubahan tinggi angkat muatan akan memindahkan titik berat gabungan keluar dari segitiga dan memicu guling samping seketika.</p>

<h2 id="materi-pembinaan">Materi Pelatihan Teori &amp; Praktik</h2>
<ul class="check-list">
  <li>Pemeriksaan Pra-Operasi Harian (P2H): rem, hidrolik garpu, rantai mast, klakson, dan safety seatbelt.</li>
  <li>Teknik membawa muatan menaiki dan menuruni jalur miring/rampa (beban selalu menghadap tanjakan).</li>
  <li>Manajemen blind spot, penyeberangan jalur pejalan kaki, dan batas kecepatan di dalam pabrik (maks 10-15 km/jam).</li>
</ul>

<p>
  <a href="/kategori-pelatihan/operator-reach-truck/">Pelatihan Operator Reach Truck</a>
  <a href="/kategori-pelatihan/keselamatan-alat-berat/">Pelatihan Keselamatan Alat Berat</a>
</p>`
  },

  // 19. Operator Reach Truck
  {
    key: "operator-reach-truck",
    title: "Pelatihan Operator Reach Truck: Material Handling Racking Tinggi",
    h1: "Pelatihan Operator Reach Truck: Manuver di Lorong Sempit (Narrow Aisle) dan Racking Tingkat Tinggi",
    meta: "Pelatihan reach truck gudang logistik: teknik stowing & picking pada ketinggian 8-12 meter, manajemen kapasitas beban vertikal, dan manuver lorong sempit.",
    imgAlt: "Operator mengemudikan reach truck elektrik mengambil palet barang pada sistem racking bertingkat tinggi",
    related: ["operator-forklift", "operator-pallet-stacker", "logistik-pergudangan"],
    faq: [
      {
        q: "Apa tantangan terbesar mengoperasikan Reach Truck dibanding Forklift biasa?",
        a: "Tantangan terbesar adalah de-rating kapasitas beban di ketinggian puncak (semakin tinggi mast memanjang, kapasitas angkat turun signifikan), visibilitas terbatas ke atas, dan pergerakan kemudi yang sangat responsif di lorong sempit (narrow aisle)."
      }
    ],
    html: `<p>Gudang modern berkonsep High Density Storage mengandalkan <strong>Reach Truck</strong> untuk memaksimalkan efisiensi ruang vertikal. Pelatihan ini melatih presisi operator dalam mengangkat dan meletakkan muatan di ketinggian hingga 12 meter tanpa merusak struktur racking.</p>

<h2 id="materi-reach-truck">Kompetensi yang Dipelajari</h2>
<ul>
  <li>Pembacaan grafik pengurangan beban kapasitas tiang (Residual Capacity Rating).</li>
  <li>Teknik perpanjangan mast (reach out) dan penarikan mast (reach in) saat berada di rak.</li>
  <li>Perawatan baterai elektrik litium-ion / lead-acid dan prosedur pengecasan aman di charging station.</li>
</ul>

<p>
  <a href="/kategori-pelatihan/operator-forklift/">Pelatihan Operator Forklift</a>
  <a href="/kategori-pelatihan/operator-pallet-stacker/">Pelatihan Operator Pallet Stacker</a>
</p>`
  },

  // 20. Operator Pallet Stacker
  {
    key: "operator-pallet-stacker",
    title: "Pelatihan Operator Pallet Stacker: Penanganan Material Elektrik",
    h1: "Pelatihan Operator Pallet Stacker: Operasi Walkie & Ride-On Stacker, Ergonomi, dan Anti-Crush Safety",
    meta: "Pelatihan pallet stacker elektrik: proteksi bahaya terjepit kaki (foot protection), manuver di area terbatas, tombol anti-crush belly switch, dan SOP charging.",
    imgAlt: "Pekerja mengoperasikan walkie pallet stacker elektrik memindahkan boks logistik di lorong gudang",
    related: ["operator-reach-truck", "operator-forklift", "logistik-pergudangan"],
    faq: [
      {
        q: "Apa fungsi tombol Belly Switch (Emergency Reverse) pada handle stacker?",
        a: "Belly switch adalah tombol pengaman darurat di ujung tuas kemudi yang secara otomatis membalikkan arah laju stacker menjauh dari tubuh operator jika tuas tertekan ke badan operator, guna mencegah bahaya terjepit di dinding atau rak."
      }
    ],
    html: `<p>Pallet stacker elektrik (tipe walkie maupun ride-on) sering dianggap remeh oleh pekerja gudang karena ukurannya yang kompak, padahal bobot unit bersama muatan dapat mencapai 2–3 ton dan berpotensi menghancurkan kaki pejalan kaki seketika.</p>

<h2 id="fokus-pelatihan">Fokus Keselamatan Pallet Stacker</h2>
<ul class="check-list">
  <li>SOP penggunaan tombol darurat (Belly Button Reversal Switch) dan emergency stop.</li>
  <li>Kewaspadaan bahaya terjepit kaki di bawah chasis (Foot clearance safety).</li>
  <li>Manajemen kecepatan di area sempit dan zona transisi rampa pemuatan kontainer.</li>
</ul>

<p>
  <a href="/kategori-pelatihan/operator-forklift/">Pelatihan Operator Forklift</a>
  <a href="/kategori-pelatihan/operator-reach-truck/">Pelatihan Operator Reach Truck</a>
</p>`
  },

  // 21. Operator Crane
  {
    key: "operator-crane",
    title: "Pelatihan Operator Crane: Sertifikasi SIO K3 Pesawat Angkat Angkut",
    h1: "Pelatihan Operator Crane: Kompetensi Pengoperasian, Load Chart Reading, dan Keselamatan Lifting",
    meta: "Pelatihan operator crane (SIO Kemnaker Kelas A/B/C): pemahaman Load Moment Indicator (LMI), anti-two-block system, uji fungsi rem hoisting, dan emergency stop.",
    imgAlt: "Operator crane memegang kendali joystick di dalam kabin operator memantau layar display komputer LMI",
    related: ["operator-mobile-crane", "operator-overhead-crane", "rigger", "lifting-supervisor"],
    faq: [
      {
        q: "Apa pembagian kelas lisensi Operator Crane menurut Permenaker No. 8/2020?",
        a: "Operator Crane Kelas III untuk kapasitas s.d 25 ton; Operator Kelas II untuk kapasitas &gt;25 ton s.d 100 ton; dan Operator Kelas I untuk kapasitas di atas 100 ton atau jenis crane kompleks."
      }
    ],
    html: `<p>Pengoperasian crane memerlukan konsentrasi tinggi, pemahaman fisika mekanika beban, serta ketelitian membaca sistem komputer pendukung (Load Moment Indicator). Pelatihan ini memfasilitasi pembinaan operator crane tersertifikasi resmi sesuai standar K3 nasional.</p>

<h2 id="kurikulum-crane">Kurikulum Kompetensi Operator Crane</h2>
<ul>
  <li>Pemeriksaan instrumen keselamatan wajib: Anti-Two Block (A2B), Anemometer, Level Bubble, dan Hook Safety Latch.</li>
  <li>Teknik operasi halus (smooth operation) untuk meminimalkan beban kejut (shock loading).</li>
  <li>Prosedur darurat saat terjadi kegagalan daya mesin listrik/diesel saat muatan tergantung di udara.</li>
</ul>

<p>
  <a href="/kategori-pelatihan/operator-mobile-crane/">Pelatihan Operator Mobile Crane</a>
  <a href="/kategori-pelatihan/rigger/">Pelatihan Rigger</a>
</p>`
  },

  // 22. Operator Mobile Crane
  {
    key: "operator-mobile-crane",
    title: "Pelatihan Operator Mobile Crane: Rough Terrain & All Terrain",
    h1: "Pelatihan Operator Mobile Crane: Setup Outrigger, Perhitungan Jangkauan Boom, dan Operasi Lapangan",
    meta: "Pelatihan mobile crane: perhitungan ground stability matting, defleksi boom hidrolik, manuver travel dengan beban (pick & carry), dan mitigasi kabel listrik udara.",
    imgAlt: "Mobile crane hidrolik memanjangkan boom teleskopik di area proyek konstruksi industri",
    related: ["operator-crane", "rigger", "lifting-operation-safety", "signalman"],
    faq: [
      {
        q: "Berapa jarak aman minimal mobile crane dari jaringan kabel listrik tegangan tinggi (SUTET)?",
        a: "Standar OSHA dan K3 menetapkan jarak bebas minimal 3 meter (10 kaki) untuk kabel tegangan hingga 50 kV, dan bertambah 10 cm untuk setiap kenaikan 10 kV di atasnya."
      }
    ],
    html: `<p>Mobile Crane (Truk Crane, Rough Terrain, All Terrain, Crawler Crane) adalah tulang punggung proyek konstruksi. Mobilitas unit ini menjadikannya sangat rentan terhadap kegagalan pondasi tanah jika outrigger tidak disiapkan dengan benar.</p>

<h2 id="materi-mobile-crane">Materi Pokok Pelatihan</h2>
<ul class="check-list">
  <li>Pemeriksaan kondisi tanah dan penataan bantalan outrigger (timber/steel mats).</li>
  <li>Kalkulasi sudut boom teleskopik dan pengaruh lendutan (boom deflection) terhadap pertambahan radius beban.</li>
  <li>SOP Pick and Carry (bergerak membawa beban pada crawler/rough terrain).</li>
</ul>

<p>
  <a href="/kategori-pelatihan/operator-crane/">Pelatihan Operator Crane</a>
  <a href="/kategori-pelatihan/lifting-supervisor/">Pelatihan Lifting Supervisor</a>
</p>`
  },

  // 23. Operator Overhead Crane
  {
    key: "operator-overhead-crane",
    title: "Pelatihan Operator Overhead Crane: Hoisting Pabrik Manufaktur",
    h1: "Pelatihan Operator Overhead Crane: Kontrol Pendant & Remote Wireless, Anti-Sway, dan Inspeksi Harian",
    meta: "Pelatihan overhead traveling crane (EOT): teknik meredam ayunan beban (anti-sway), inspeksi limit switch atas/bawah, wire rope drum, brake testing, dan safety pendant control.",
    imgAlt: "Pekerja di pabrik manufaktur menggunakan remote control wireless mengoperasikan overhead traveling crane",
    related: ["operator-gantry-crane", "operator-hoist", "rigger"],
    faq: [
      {
        q: "Bagaimana teknik meredam ayunan (sway) beban pada overhead crane?",
        a: "Teknik anti-sway dilakukan dengan melakukan akselerasi dan deselerasi jembatan (bridge) atau troli secara bertahap, serta melakukan counter-steering (menggerakkan crane mengikuti arah ayunan muatan saat mencapai puncak ayunan) agar tali kembali tegak lurus."
      }
    ],
    html: `<p>Overhead Crane (Electric Overhead Traveling - EOT) beroperasi tepat di atas kepala pekerja di lantai pabrik. Pelatihan ini melatih operator lantai menggunakan kontrol gantung (pendant) maupun remote wireless dengan kepatuhan keselamatan tinggi.</p>

<h2 id="silabus-eot">Silabus Pelatihan EOT Crane</h2>
<ul>
  <li>Pemeriksaan harian limit switch pengangkat atas (upper hoist limit switch).</li>
  <li>Inspeksi keausan alur drum kawat baja dan deformasi hook pembawa.</li>
  <li>SOP melintasi jalur aman (walkway path) tanpa melintasi di atas kepala orang lain.</li>
</ul>

<p>
  <a href="/kategori-pelatihan/operator-gantry-crane/">Pelatihan Operator Gantry Crane</a>
  <a href="/kategori-pelatihan/operator-hoist/">Pelatihan Operator Hoist</a>
</p>`
  },

  // 24. Operator Gantry Crane
  {
    key: "operator-gantry-crane",
    title: "Pelatihan Operator Gantry Crane: Pelabuhan & Fabrikasi Baja",
    h1: "Pelatihan Operator Gantry Crane: Pengoperasian Rel & Ban Karet (RTG), Wind Alarm Safety, dan Spreader Control",
    meta: "Pelatihan gantry crane pelabuhan & fabrikasi: sistem penguncian badai (storm clamp), penanganan kontainer/balok girder berat, dan safety travel interlock.",
    imgAlt: "Gantry crane raksasa beroperasi di atas rel memindahkan struktur balok baja besar di area fabrikasi",
    related: ["operator-overhead-crane", "operator-hoist", "rigger"],
    faq: [
      {
        q: "Apa fungsi Rail Clamp / Storm Lock pada Rail-Mounted Gantry Crane?",
        a: "Rail clamp adalah sistem pengunci mekanik/hidrolik otomatis yang mencengkeram rel ketika angin kencang melebihi batas operasional, guna mencegah crane terdorong badai (runaway crane)."
      }
    ],
    html: `<p>Gantry Crane (Portal Crane) bekerja di area terbuka pelabuhan peti kemas (RTG/RMG) dan yard fabrikasi balok beton/baja berat. Pelatihan ini melatih operator mengendalikan unit berkapasitas ratusan ton di bawah paparan cuaca dinamis.</p>

<h2 id="materi-gantry">Materi Kunci Pelatihan</h2>
<ul class="check-list">
  <li>Sistem interlock perjalanan rel dan sensor anti-tabrakan ultrasonik.</li>
  <li>SOP tanggap darurat kecepatan angin kencang (High Wind Alarm).</li>
  <li>Manuver sinkronisasi gantry travel dan trolley traverse.</li>
</ul>

<p>
  <a href="/kategori-pelatihan/operator-overhead-crane/">Pelatihan Overhead Crane</a>
  <a href="/kategori-pelatihan/rigger/">Pelatihan Rigger</a>
</p>`
  },

  // 25. Operator Hoist
  {
    key: "operator-hoist",
    title: "Pelatihan Operator Electric Hoist & Monorail: Angkat Ringan Bengkel",
    h1: "Pelatihan Operator Electric Hoist: Standar Pemasangan Beban, Chain/Rope Inspection, dan Pencegahan Overload",
    meta: "Pelatihan operator hoist gantung: kapasitas SWL monorail, inspeksi rantai aus & hook latch safety, SOP pengangkatan material bengkel, dan isolasi daya emergency.",
    imgAlt: "Teknisi bengkel mengaitkan rantai electric hoist pada blok mesin sebelum mengangkatnya ke meja kerja",
    related: ["operator-overhead-crane", "rigger", "k3-keselamatan-kerja"],
    faq: [
      {
        q: "Bolehkah rantai electric hoist digunakan melilit langsung ke beban (choker lilit)?",
        a: "Dilarang keras. Rantai beban hoist tidak boleh dililitkan langsung ke sekeliling muatan sebagai tali ikat (sling). Pengikatan muatan wajib selalu menggunakan rigging hardware terpisah (webbing sling/shackle) yang dikaitkan ke hook pengaman."
      }
    ],
    html: `<p>Electric Chain Hoist dan Wire Rope Hoist pada rel monorail adalah alat bantu harian di ribuan bengkel dan lini perakitan. Penggunaan yang salah sering menyebabkan rantai putus atau rel monorail melengkung.</p>

<h2 id="topik-hoist">Topik Pelatihan Hoist</h2>
<ul>
  <li>Pemeriksaan kelayakan kait (hook opening stretch &lt;10%) dan safety latch.</li>
  <li>Pengukuran keausan diameter mata rantai beban (load chain stretch).</li>
  <li>Larangan menarik beban secara miring (side-pulling).</li>
</ul>

<p>
  <a href="/kategori-pelatihan/operator-overhead-crane/">Pelatihan Overhead Crane</a>
  <a href="/kategori-pelatihan/rigger/">Pelatihan Rigger</a>
</p>`
  },

  // 26. Operator Excavator
  {
    key: "operator-excavator",
    title: "Pelatihan Operator Excavator: Sertifikasi SIO K3 Alat Berat",
    h1: "Pelatihan Operator Excavator: Teknik Penggalian Aman, Stabilitas Lereng, dan Inspeksi Hidrolik",
    meta: "Pelatihan operator excavator (SIO Kemnaker): zona blind spot swing 360°, pencegahan rollover di kemiringan, identifikasi utilitas pipa/kabel bawah tanah, dan daily P2H.",
    imgAlt: "Excavator hidrolik melakukan penggalian lereng tanah secara presisi di area proyek galian",
    related: ["operator-wheel-loader", "operator-bulldozer", "keselamatan-alat-berat"],
    faq: [
      {
        q: "Bagaimana posisi track excavator yang benar saat melakukan penggalian di tebing?",
        a: "Track atau rantai excavator wajib berada dalam posisi tegak lurus terhadap garis tebing/galian dengan posisi idler di depan dan final drive di belakang, guna memberikan stabilitas maksimum dan memungkinkan manuver mundur cepat jika terjadi longsoran tebing."
      }
    ],
    html: `<p>Excavator adalah alat berat paling serbaguna di pertambangan dan konstruksi, namun memiliki area titik buta (<em>blind spot</em>) putaran kabin 360° yang sangat berbahaya bagi pekerja di darat. Pelatihan ini melatih operator bekerja aman dan produktif.</p>

<h2 id="kurikulum-excavator">Kurikulum Pelatihan Operator Excavator</h2>
<ul class="check-list">
  <li>Pemeriksaan Harian (P2H) oli hidrolik, track tension, dan kebocoran silinder boom/arm/bucket.</li>
  <li>Teknik penggalian berundak (benching/trenching) untuk mencegah longsor tebing.</li>
  <li>Prosedur Call-Before-You-Dig: deteksi jaringan pipa gas dan kabel listrik bawah tanah.</li>
</ul>

<p>
  <a href="/kategori-pelatihan/operator-wheel-loader/">Pelatihan Operator Wheel Loader</a>
  <a href="/kategori-pelatihan/keselamatan-alat-berat/">Pelatihan Keselamatan Alat Berat</a>
</p>`
  },

  // 27. Operator Wheel Loader
  {
    key: "operator-wheel-loader",
    title: "Pelatihan Operator Wheel Loader: Material Curah & Agregat",
    h1: "Pelatihan Operator Wheel Loader: Teknik Loading Bucket, Articulated Steering Safety, dan Manuver Truk",
    meta: "Pelatihan wheel loader: stabilitas manuver articulated steering saat bucket penuh, penataan stockpile agregat, SOP loading ke dump truck, dan perawatan transmisi powershift.",
    imgAlt: "Wheel loader bermuatan material batu pecah melakukan manuver loading ke bak dump truck",
    related: ["operator-excavator", "operator-dump-truck", "keselamatan-alat-berat"],
    faq: [
      {
        q: "Kapan wheel loader rentan mengalami kehilangan stabilitas guling samping?",
        a: "Wheel loader sangat rentan terguling jika berbelok tajam (articulated joint berputar penuh) pada saat bucket muatan terangkat tinggi di atas permukaan tanah, terutama di permukaan tanah yang tidak rata."
      }
    ],
    html: `<p>Wheel Loader beroperasi dengan sistem kemudi artikulasi (<em>articulated steering</em>) yang membagi chasis menjadi dua bagian. Pelatihan ini memantapkan teknik loading material curah secara cepat tanpa membahayakan dump truck atau pejalan kaki.</p>

<h2 id="materi-wheel-loader">Materi Kompetensi Operator</h2>
<ul>
  <li>Teknik penetrasi bucket ke stockpile material tanpa memicu spin pada roda ban.</li>
  <li>Siklus pergerakan V-Shape Loading dan Cross Loading ke bak dump truck.</li>
  <li>Ketinggian travelling bucket (carry position) rendah di 30-40 cm saat bergerak.</li>
</ul>

<p>
  <a href="/kategori-pelatihan/operator-dump-truck/">Pelatihan Operator Dump Truck</a>
  <a href="/kategori-pelatihan/operator-excavator/">Pelatihan Operator Excavator</a>
</p>`
  },

  // 28. Operator Bulldozer
  {
    key: "operator-bulldozer",
    title: "Pelatihan Operator Bulldozer: Land Clearing & Dozing Aman",
    h1: "Pelatihan Operator Bulldozer: Teknik Dozing Lereng, Stabilitas Track Under-Carriage, dan Ripper Safety",
    meta: "Pelatihan operator bulldozer: penentuan sudut blade, teknik pendorongan tanah di jurang tebing, inspeksi track shoe, dan emergency rollover protection system (ROPS).",
    imgAlt: "Bulldozer melakukan pendorongan tanah dan perataan lahan di area pembukaan proyek konstruksi",
    related: ["operator-excavator", "operator-dump-truck", "keselamatan-alat-berat"],
    faq: [
      {
        q: "Bagaimana prosedur aman melakukan dozing di tepi tebing atau jurang (disposal edge)?",
        a: "Dilarang mendorong material melewati bibir tebing secara langsung dengan pisau blade melewati batas tepi. Sisakan gundukan pengaman (safety berm/bund wall) setinggi setengah roda/track sebagai pembatas guling."
      }
    ],
    html: `<p>Bulldozer adalah mesin perintis dalam pembukaan lahan (<em>land clearing</em>), perataan (grading), dan ripping batuan keras. Pelatihan ini melatih operator mengendalikan tenaga raksasa mesin pada lereng-lereng curam.</p>

<h2 id="silabus-dozer">Silabus Pembinaan Operator</h2>
<ul class="check-list">
  <li>Pengoperasian Straight Blade, Universal Blade, dan Semi-U Blade.</li>
  <li>Manuver naik turun lereng terjal (selalu bergerak lurus searah kemiringan lereng).</li>
  <li>Penggunaan Ripper untuk memecah lapisan batuan padat.</li>
</ul>

<p>
  <a href="/kategori-pelatihan/operator-excavator/">Pelatihan Operator Excavator</a>
  <a href="/kategori-pelatihan/keselamatan-alat-berat/">Pelatihan Keselamatan Alat Berat</a>
</p>`
  },

  // 29. Operator Dump Truck
  {
    key: "operator-dump-truck",
    title: "Pelatihan Operator Dump Truck / Hauler: Hauling Tambang & Proyek",
    h1: "Pelatihan Operator Dump Truck: Teknik Dumping di Tepi Disposal, Jarak Iring Aman, dan Retarder Braking",
    meta: "Pelatihan dump truck tambang/konstruksi: pengendalian turunan dengan engine retarder brake, manuver mundur di disposal bertebing, blind spot spion, dan tyre safety.",
    imgAlt: "Dump truck tambang berukuran besar menumpahkan muatan tanah di area disposal yang aman",
    related: ["operator-wheel-loader", "operator-excavator", "keselamatan-alat-berat"],
    faq: [
      {
        q: "Mengapa dilarang hanya mengandalkan rem kaki (service brake) saat turunan panjang bermuatan?",
        a: "Menginjak rem kaki terus menerus di turunan panjang akan menyebabkan brake fade (kanvas rem terbakar dan minyak rem mendidih akibat panas ekstrem), sehingga rem blong total. Operator wajib menggunakan Retarder Brake / Engine Exhaust Brake."
      }
    ],
    html: `<p>Dump Truck dan Articulated Hauler mengangkut ribuan ton material setiap shift. Pelatihan ini membekali pengemudi dengan teknik defensive driving alat berat, pencegahan terguling saat proses dumping, dan kepatuhan traffic management.</p>

<h2 id="topik-dump-truck">Topik Pembinaan Pengemudi Hauler</h2>
<ul>
  <li>Pemeriksaan kondisi tanah sebelum menaikkan hoist cylinder bak hidrolik.</li>
  <li>SOP jarak iring aman (minimum 3–4 panjang unit) dan komunikasi radio klakson standar tambang.</li>
  <li>Manajemen suhu dan tekanan ban raksasa (TKPH - Ton Kilometer Per Hour).</li>
</ul>

<p>
  <a href="/kategori-pelatihan/keselamatan-alat-berat/">Pelatihan Keselamatan Alat Berat</a>
  <a href="/kategori-pelatihan/operator-excavator/">Pelatihan Operator Excavator</a>
</p>`
  },

  // 30. Keselamatan Alat Berat
  {
    key: "keselamatan-alat-berat",
    title: "Pelatihan Keselamatan Alat Berat: Heavy Equipment Safety Management",
    h1: "Pelatihan Keselamatan Alat Berat: Manajemen Risiko Operasional Tambang, Konstruksi, dan Pabrik",
    meta: "Pelatihan komprehensif keselamatan alat berat: penetapan zona demarkasi, traffic management plan, inspeksi P2H, interaksi manusia-alat berat, dan mitigasi tabrakan.",
    imgAlt: "Peta rambu lalu lintas tambang dan pemisahan jalur pejalan kaki dengan zona alat berat di area proyek",
    related: ["operator-excavator", "operator-forklift", "operator-dump-truck", "job-safety-analysis-jsa"],
    faq: [
      {
        q: "Apa yang dimaksud dengan prinsip Segregasi Manusia dan Alat Berat?",
        a: "Segregasi adalah pemisahan fisik mutlak antara jalur pejalan kaki (pedestrian walkways) dan jalur operasional alat berat menggunakan pembatas beton/guardrail, rambu peringatan, dan jembatan penyeberangan untuk meniadakan titik temu tabrakan."
      }
    ],
    html: `<p>Manajemen Keselamatan Alat Berat (<em>Heavy Equipment Safety Management</em>) adalah program strategis bagi manajer proyek, safety officer, dan supervisor tambang/konstruksi untuk mencegah kecelakaan tabrakan fatal di area kerja terpadat.</p>

<h2 id="pilar-keselamatan">Pilar Pengendalian Alat Berat</h2>
<ul class="check-list">
  <li>Penyusunan Rencana Manajemen Lalu Lintas (Traffic Management Plan - TMP).</li>
  <li>Standarisasi sistem Pemeriksaan Pra-Operasi Harian (P2H / Pre-start check).</li>
  <li>Penerapan teknologi anti-tabrakan: Proximity Warning System, radar sensor, dan kamera 360°.</li>
</ul>

<p>
  <a href="/kategori-pelatihan/operator-excavator/">Pelatihan Operator Excavator</a>
  <a href="/kategori-pelatihan/operator-forklift/">Pelatihan Operator Forklift</a>
</p>`
  },

  // 31. Hot Work Safety
  {
    key: "hot-work-safety",
    title: "Pelatihan Hot Work Safety: Keselamatan Pekerjaan Panas & Pengelasan",
    h1: "Pelatihan Hot Work Safety: Pencegahan Kebakaran, Pengendalian Percikan Api, dan Gas Monitoring",
    meta: "Pelatihan pekerjaan panas (hot work): radius 11 meter (35 feet) clearance bahan mudah terbakar, penggunaan fire blanket, pemeriksaan flashback arrestor, dan fire watch.",
    imgAlt: "Pekerja melakukan pengelasan dengan pelindung fire blanket terpasang di sekitarnya dan APAR siaga di dekatnya",
    related: ["fire-watch", "permit-to-work", "welding-safety", "penggunaan-apar"],
    faq: [
      {
        q: "Berapa radius aman pembersihan bahan mudah terbakar dari titik pekerjaan panas?",
        a: "Berdasarkan standar NFPA 51B dan K3 nasional, seluruh bahan yang mudah terbakar dalam radius minimal 11 meter (35 kaki) wajib disingkirkan, atau ditutup rapat menggunakan kain tahan api (fire-resistant blanket/tarpaulin) jika tidak dapat dipindahkan."
      }
    ],
    html: `<p>Percikan api pengelasan, gerinda, dan pemotongan termal dapat terpental hingga jarak lebih dari 10 meter dan menyusup ke celah lantai atau saluran pipa yang mengandung gas/debu mudah meledak. Pelatihan Hot Work Safety mendoktrinkan protokol pencegahan kebakaran ketat.</p>

<h2 id="kurikulum-hot-work">Kurikulum Keselamatan Pekerjaan Panas</h2>
<ul>
  <li>Pemeriksaan kelayakan regulator, selang ganda, dan Flashback Arrestor pada tabung Oksigen-Asetilen.</li>
  <li>Pengujian atmosfer gas mudah terbakar (&lt;1% LEL untuk hot work) sebelum penyalaan api.</li>
  <li>Penutupan saluran drainase dan lubang gorong-gorong di sekitar lokasi kerja.</li>
</ul>

<p>
  <a href="/kategori-pelatihan/fire-watch/">Pelatihan Petugas Fire Watch</a>
  <a href="/kategori-pelatihan/permit-to-work/">Pelatihan Permit to Work</a>
</p>`
  },

  // 32. Fire Watch
  {
    key: "fire-watch",
    title: "Pelatihan Petugas Fire Watch: Pengawasan Kebakaran Pekerjaan Panas",
    h1: "Pelatihan Fire Watch: Tugas Petugas Jaga Api, Standar Siaga APAR, dan Prosedur Post-Hot Work Monitoring",
    meta: "Pelatihan fire watch (petugas jaga api): pengawasan 30-60 menit setelah pekerjaan panas selesai, keterampilan pemadaman APAR seketika, dan wewenang stop work.",
    imgAlt: "Petugas fire watch mengenakan rompi khusus berdiri siaga memegang APAR memantau percikan api las",
    related: ["hot-work-safety", "penggunaan-apar", "permit-to-work", "fire-fighting-dasar"],
    faq: [
      {
        q: "Berapa lama petugas Fire Watch wajib tetap berjaga setelah pekerjaan panas selesai?",
        a: "Standar NFPA 51B mewajibkan petugas Fire Watch tetap berada di lokasi kerja minimal selama 30 hingga 60 menit setelah pekerjaan panas selesai untuk memastikan tidak ada bara api tersembunyi (smoldering fire) yang menyala kembali."
      }
    ],
    html: `<p>Seorang <strong>Fire Watch (Petugas Jaga Api)</strong> bukan sekadar penonton di lokasi kerja. Petugas ini memiliki tugas eksklusif memantau setiap percikan api yang jatuh, memegang APAR siap pakai, dan dilarang dialihkan untuk tugas lain selama pekerjaan panas berlangsung.</p>

<h2 id="tugas-fire-watch">Tugas Pokok Petugas Jaga Api</h2>
<ul class="check-list">
  <li>Memeriksa ketersediaan minimal satu unit APAR tipe sesuai (Dry Chemical / CO2) dalam kondisi prima.</li>
  <li>Mematikan atau memadamkan seketika setiap titik api awal sebelum membesar.</li>
  <li>Mengaktifkan alarm darurat dan memandu evakuasi jika kebakaran tidak dapat dikendalikan.</li>
</ul>

<p>
  <a href="/kategori-pelatihan/hot-work-safety/">Pelatihan Hot Work Safety</a>
  <a href="/kategori-pelatihan/permit-to-work/">Pelatihan Permit to Work</a>
</p>`
  },

  // 33. Permit to Work (PTW)
  {
    key: "permit-to-work",
    title: "Pelatihan Permit to Work (PTW): Sistem Izin Kerja Berisiko Tinggi",
    h1: "Pelatihan Permit to Work (PTW): Prosedur Penerbitan, Otorisasi, Verifikasi Lapangan, dan Penutupan Izin",
    meta: "Pelatihan sistem izin kerja aman (PTW): cold work, hot work, confined space, lifting, isolation certificate, peran permit applicant, reviewer, dan issuing authority.",
    imgAlt: "Dokumen formulir Permit to Work (PTW) dengan checklist inspeksi lapangan dan tanda tangan otorisasi keselamatan",
    related: ["hot-work-safety", "confined-space-entry", "lockout-tagout-loto", "job-safety-analysis-jsa"],
    faq: [
      {
        q: "Apa saja jenis izin kerja khusus (Special Permits) yang umum di industri?",
        a: "Jenis izin kerja khusus meliputi: (1) Hot Work Permit, (2) Confined Space Entry Permit, (3) Working at Height Permit, (4) Excavation / Ground Disturbance Permit, (5) Critical Lifting Permit, dan (6) Electrical High Voltage Isolation Permit."
      }
    ],
    html: `<p>Sistem <strong>Permit to Work (PTW / Izin Kerja Aman)</strong> adalah sistem administrasi keselamatan terpenting dalam industri minyak, gas, kimia, dan manufaktur. PTW memastikan bahwa seluruh risiko telah diidentifikasi, dimitigasi, dan diverifikasi bersama di lapangan sebelum pekerjaan berisiko tinggi dimulai.</p>

<h2 id="alur-ptw">Alur Otorisasi Sistem Izin Kerja</h2>
<ol class="steps">
  <li><strong>Pengajuan (Application):</strong> Pemohon izin (Permit Applicant) melampirkan JSA, sertifikat personel, dan daftar alat.</li>
  <li><strong>Verifikasi Bersama (Joint Site Inspection):</strong> Peninjau (Safety &amp; Area Authority) memeriksa langsung ke lokasi kerja.</li>
  <li><strong>Penerbitan (Issuance):</strong> Otoritas area menandatangani persetujuan dengan batas durasi waktu tertentu.</li>
  <li><strong>Serah Terima &amp; Penutupan (Handover &amp; Closure):</strong> Verifikasi area telah bersih dan aman setelah pekerjaan selesai.</li>
</ol>

<p>
  <a href="/kategori-pelatihan/confined-space-entry/">Pelatihan Confined Space Entry</a>
  <a href="/kategori-pelatihan/hot-work-safety/">Pelatihan Hot Work Safety</a>
</p>`
  }
];
