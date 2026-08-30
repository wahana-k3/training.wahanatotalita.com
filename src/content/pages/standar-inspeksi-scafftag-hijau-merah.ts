import { PageContentData } from '@/lib/types';

export const content: PageContentData = {
  key: "standar-inspeksi-scafftag-hijau-merah",
  updated: "2026-08-30",
  faq: [
    {
      "q": "Berapa lama masa berlaku satu tanda tangan pengesahan pada kartu Scafftag Hijau?",
      "a": "Masa berlaku kartu Scafftag Hijau maksimal adalah 7 (tujuh) hari kalender. Setelah 7 hari, Scaffolding Inspector bersertifikat wajib melakukan inspeksi fisik ulang secara menyeluruh sebelum menandatangani dan mencantumkan tanggal berlaku baru pada kolom registrasi kartu."
    },
    {
      "q": "Kapan perancah yang berstatus Scafftag Hijau wajib diinspeksi ulang meskipun masa 7 hari belum habis?",
      "a": "Perancah wajib diinspeksi ulang seketika jika: (1) Terjadi cuaca ekstrem seperti hujan badai angin kencang atau gempa bumi; (2) Terjadi modifikasi atau pelepasan komponen (seperti pelepasan pipa penguat/bracing oleh pihak lain); (3) Terjadi benturan oleh alat berat crane atau forklift; atau (4) Struktur perancah tidak digunakan dalam jangka waktu lama."
    },
    {
      "q": "Apa arti dari holder Scafftag yang kosong tanpa ada selipan kartu di dalamnya?",
      "a": "Holder Scafftag yang kosong secara visual menampilkan tanda larangan bawaan berwarna merah bertuliskan 'DANGER - DO NOT USE'. Kondisi holder kosong memiliki status hukum yang sama dengan Scafftag Merah: dilarang keras dinaiki oleh siapapun karena perancah sedang dalam proses perakitan, pembongkaran, atau dinyatakan rusak struktural."
    }
  ],
  html: `<div class="program-editorial-content compliance-archetype">
<p class="section-lead">Sistem penandaan kartu keselamatan perancah (<em>Scafftag Inspection System</em>) adalah instrumen kendali visual dan legalitas kelaikan struktur perancah (<em>scaffolding</em>) di proyek konstruksi, kilang migas, galangan kapal, dan fasilitas industri. Mengacu pada <strong>Permenaker No. 01/MEN/1980</strong>, <strong>Keputusan Dirjen Binwasnaker No. KEP. 45/DJPPK/IX/2008</strong>, serta standar internasional <strong>OSHA 1926.451</strong> dan <strong>BS EN 12811</strong>, sistem Scafftag memberikan kepastian visual apakah perancah aman dinaiki, memerlukan APD jatuh khusus, atau dilarang keras digunakan.</p>

<h2 id="landasan-hukum-dan-urgensi">1. Landasan Hukum & Urgensi Kepatuhan Perusahaan</h2>
<p>Kecelakaan kerja akibat keruntuhan struktur perancah atau pekerja jatuh dari platform kerja tanpa pagar pengaman merupakan salah satu penyebab fatalitas tertinggi di industri konstruksi. Ketiadaan inspeksi berkala dan pengabaian status visual kartu perancah sering kali berujung pada korban jiwa massal dan tuntutan pidana berat bagi penanggung jawab proyek.</p>
<p>Kepatuhan terhadap standar inspeksi Scafftag menjamin bahwa setiap unit perancah pipa (tube and coupler), frame scaffold, maupun modular system telah dihitung kapasitas beban kerja amannya (Safe Working Load / SWL), terpasang fondasi kokoh, dilengkapi pagar pengaman ganda (guardrail), serta diverifikasi secara legal oleh Pengawas / Inspector Perancah bersertifikat resmi.</p>
<div class="compliance-risks-callout">
<h3>Dampak Negatif & Risiko Ketidakpatuhan Legal:</h3>
<ul>
  <li><strong>Pekerja Menaiki Perancah Belum Lengkap (Incomplete Scaffold):</strong> Pekerja menaiki struktur perancah yang belum dipasang pipa silang penguat (diagonal bracing) atau papan lantai kerja karena tidak adanya tanda Scafftag Merah pada akses tangga.</li>
  <li><strong>Kelebihan Beban Muatan (Overloading Collapse):</strong> Penumpukan material batu bata atau peralatan berat melebihi kapasitas beban desain akibat ketiadaan informasi angka SWL pada kartu Scafftag Hijau.</li>
  <li><strong>Jatuh dari Ketinggian Akibat Celah Platform & Guardrail:</strong> Ketiadaan toe board (papan penahan kaki) atau kendornya klem pipa pagar pengaman yang tidak terdeteksi dalam inspeksi 7 harian.</li>
  <li><strong>Sanksi Penyegelan Struktur oleh Pengawas Ketenagakerjaan:</strong> Penghentian seluruh pekerjaan di ketinggian (Stop Work Notice) oleh Disnaker setempat akibat ketiadaan sertifikat inspeksi dan logbook perancah di lokasi proyek.</li>
</ul>
</div>

<h2 id="referensi-pasal-dan-peraturan">2. Referensi Undang-Undang & Peraturan Menteri Terkait</h2>
<p>Prosedur inspeksi, kualifikasi personil inspektur, dan kelaikan struktur perancah berlandaskan pada ketentuan regulasi resmi:</p>
<ul>
  <li><strong>Undang-Undang No. 1 Tahun 1970</strong> tentang Keselamatan Kerja (Pasal 2 dan Pasal 3 tentang Syarat K3 Konstruksi Bangunan).</li>
  <li><strong>Permenaker No. 01/MEN/1980</strong> tentang Keselamatan dan Kesehatan Kerja pada Konstruksi Bangunan (Bab II Pasal 12 hingga 26 tentang Perancah / Scaffolding).</li>
  <li><strong>Permenaker No. 9 Tahun 2016</strong> tentang Keselamatan dan Kesehatan Kerja dalam Pekerjaan pada Ketinggian.</li>
  <li><strong>Keputusan Dirjen Binwasnaker No. KEP. 45/DJPPK/IX/2008</strong> tentang Pedoman Teknis K3 Bidang Perancah (Scaffolding).</li>
  <li><strong>Standar OSHA 29 CFR 1926.451</strong> (General Requirements for Scaffolds) & <strong>OSHA 1926.454</strong> (Scaffold Training Requirements).</li>
  <li><strong>Standar British Standard BS EN 12811-1</strong> (Temporary Works Equipment - Scaffolds - Performance Requirements and General Design).</li>
</ul>

<h2 id="langkah-penerapan-dan-prosedur">3. Langkah demi Langkah Prosedur Penerapan di Perusahaan</h2>
<p>Berikut adalah 4 tahapan teknis terstruktur dalam menerapkan sistem inspeksi visual Scafftag secara konsisten di tempat kerja:</p>
<div class="syllabus-modules">
<div class="module-card">
  <h3>Modul 1: Anatomi Struktur Perancah & Dimensi Standar Guardrail</h3>
  <p><strong>Aspek Legal & Teori Prosedural:</strong> Verifikasi komponen wajib perancah pipa: pelat alas (base plate), papan alas kayu padat (sole plate), tiang vertikal (standard), pipa mendatar (ledger), pipa melintang (transom), pipa silang (diagonal bracing), serta dimensi platform kerja: lantai rapat tanpa celah > 2,5 cm, pagar pengaman atas (top guardrail 95-115 cm), pagar pengaman tengah (mid guardrail 45-55 cm), dan papan tepi penahan barang (toe board minimal 15 cm).</p>
  <p><strong>Langkah Penerapan Lapangan & Verifikasi:</strong> Praktek pengukuran dimensi fisik perancah pipa menggunakan meteran baja dan pengujian torsi kekencangan klem putar (swivel coupler) dan klem mati (right angle coupler) sebesar 40 hingga 50 Nm.</p>
</div>
<div class="module-card">
  <h3>Modul 2: Klasifikasi 3 Status Warna Scafftag & Batasan Beban SWL</h3>
  <p><strong>Aspek Legal & Teori Prosedural:</strong> Kriteria penentuan status warna: (1) SCAFFTAG HIJAU (Laik Pakai 100% aman untuk seluruh pekerja sesuai batas SWL); (2) SCAFFTAG KUNING (Perhatian Khusus / Modifikasi, hanya boleh dinaiki pekerja tertentu dengan perlindungan 100% Full Body Harness); dan (3) SCAFFTAG MERAH / HOLDER KOSONG (Dilarang Digunakan / Bahaya); serta klasifikasi beban: Light Duty (75 kg/m2), Medium Duty (150 kg/m2), dan Heavy Duty (225 kg/m2).</p>
  <p><strong>Langkah Penerapan Lapangan & Verifikasi:</strong> Pemasangan holder tag pada tiang perancah setinggi 1,5 meter dari permukaan tanah di dekat tangga akses masuk.</p>
</div>
<div class="module-card">
  <h3>Modul 3: Metodologi Siklus Inspeksi Berkala 7 Hari & Pasca Badai</h3>
  <p><strong>Aspek Legal & Teori Prosedural:</strong> Prosedur audit fisik mingguan (7-day inspection cycle), verifikasi ketiadaan pondasi tanah yang amblas, pemeriksaan korosi dan deformasi pipa, serta prosedur inspeksi darurat seketika pasca hujan lebat, badai angin berkecepatan > 15 m/s, atau gempa bumi.</p>
  <p><strong>Langkah Penerapan Lapangan & Verifikasi:</strong> Praktek pelaksanaan checklist inspeksi perancah 30 poin pada modul frame scaffold 3-tingkat dan pembaruan tanggal paraf inspektur pada kartu hijau.</p>
</div>
<div class="module-card">
  <h3>Modul 4: Tata Kelola Otoritas Inspektur, Logbook & Pencabutan Tag</h3>
  <p><strong>Aspek Legal & Teori Prosedural:</strong> Wewenang eksklusif Scaffolding Inspector bersertifikat Kemnaker / BNSP (personil lain dilarang memindahkan atau menandatangani tag), penomoran unik Scafftag Register Number, tata kelola buku log perancah (Scaffold Register Logbook), serta prosedur pencabutan kartu hijau menjadi merah jika ditemukan cacat struktural.</p>
  <p><strong>Langkah Penerapan Lapangan & Verifikasi:</strong> Pengisian lembar register perancah proyek dan simulasi pencabutan izin pakai perancah saat salah satu klem penopang terlepas.</p>
</div>
</div>

<h2 id="tabel-komparasi-dan-parameter">4. Tabel Parameter Standar, Kriteria Uji & Batas Ambang</h2>
<p>Ketentuan status warna kartu Scafftag, kriteria kelulusan teknis, dan hak akses kerja dirangkum dalam tabel komparasi berikut:</p>
<div class="table-responsive">
<table class="data-table">
  <thead>
    <tr>
      <th>Warna Kartu Scafftag</th>
      <th>Status Kelaikan Struktur</th>
      <th>Kelengkapan Komponen Fisik</th>
      <th>Ketentuan Hak Akses Pekerja</th>
      <th>Masa Berlaku Verifikasi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>SCAFFTAG HIJAU (Green)</td>
      <td>LAIK PAKAI (Safe for Use)</td>
      <td>Lengkap 100% (Baseplate, Bracing, Platform, Guardrail ganda, Toeboard, Tangga)</td>
      <td>Seluruh pekerja boleh naik sesuai kapasitas beban kerja aman (SWL)</td>
      <td>Maksimal 7 Hari Kalender (Wajib paraf baru)</td>
    </tr>
    <tr>
      <td>SCAFFTAG KUNING (Yellow)</td>
      <td>PERHATIAN KHUSUS (Caution)</td>
      <td>Ada bagian belum sempurna (contoh: guardrail dilepas sebagian untuk akses angkat)</td>
      <td>HANYA personil khusus dengan 100% Tie-Off Full Body Harness bertali ganda</td>
      <td>Sesuai izin khusus tertulis Pengawas K3 (Maksimal 24 jam)</td>
    </tr>
    <tr>
      <td>SCAFFTAG MERAH / KOSONG</td>
      <td>DILARANG DIGUNAKAN (Danger)</td>
      <td>Struktur rusak, klem longgar, bracing hilang, sedang dirakit/dibongkar</td>
      <td>DILARANG KERAS MENAIKI PERANCAH (Hanya tim scaffolder yang merakit)</td>
      <td>Tetap merah hingga lulus uji inspeksi ulang</td>
    </tr>
  </tbody>
</table>
</div>

<h2 id="manajemen-audit-dan-pelaporan-disnaker">5. Prosedur Audit Internal & Pelaporan Berkala ke Disnaker</h2>
<p>Departemen HSE proyek wajib memelihara buku register perancah (Scaffolding Master Logbook) yang mencatat seluruh identitas unit perancah di lapangan, lokasi grid struktur, tanggal pendirian, tanggal inspeksi mingguan, kapasitas SWL, serta nama inspektur yang bertanggung jawab.</p>
<p>Rekapitulasi status kelaikan perancah menjadi bagian dari Laporan P2K3 Triwulanan yang dilaporkan kepada Pengawas Ketenagakerjaan Disnaker setempat. Audit kepatuhan berkala dilakukan untuk memastikan tidak ada perancah tak bertuan (unauthorized scaffold) yang digunakan di area operasional.</p>

<h2 id="penilaian-risiko-dan-tindakan-korektif">6. Metodologi Penilaian Risiko & Tindakan Korektif (CAPA)</h2>
<p>Jika dalam inspeksi rutin ditemukan perancah yang mengalami penurunan kualitas (seperti tiang miring, klem retak, papan lantai patah, atau tanah pondasi amblas), Scaffolding Inspector wajib segera mencabut kartu Scafftag Hijau dan memasang kartu Merah atau mengosongkan holder.</p>
<p>Formulir Tindakan Korektif (CAPA) diterbitkan kepada tim fabrikator/scaffolder untuk memperbaiki kekurangan struktural. Setelah perbaikan selesai dilakukan secara fisik, inspektur melakukan uji ulang sebelum kartu hijau baru diterbitkan.</p>

<h2 id="checklist-dokumen-dan-perangkat">7. Checklist Dokumen Legal, Formulir & Alat Verifikasi</h2>
<p>Sebelum mengesahkan kartu Scafftag Hijau pada perancah, Scaffolding Inspector wajib memeriksa dan memvalidasi daftar periksa berikut:</p>
<ul>
  <li><strong>Fondasi & Tumpuan Tanah (Ground Foundation):</strong> Pastikan tanah dasar padat rata, base plate terpasang pada seluruh tiang vertikal, dan sole plate kayu tebal minimal 5 cm membentang di bawah minimal dua tiang.</li>
  <li><strong>Kelengkapan Tiang, Ledger & Pipa Silang Bracing:</strong> Seluruh tiang terpasang tegak lurus (plumb), pipa horizontal terikat kuat dengan klem mati (right angle coupler), dan diagonal bracing terpasang pada setiap interval bentang.</li>
  <li><strong>Integritas Platform Lantai Kerja (Work Deck):</strong> Papan lantai perancah (metal plank / kayu solid) terpasang rapat penuh tanpa celah lebih dari 2,5 cm, terkunci pada transom, dan mampu menahan beban kerja.</li>
  <li><strong>Sistem Pagar Pengaman Ganda & Papan Tepi (Guardrails & Toeboard):</strong> Top guardrail terpasang pada ketinggian 1 meter, mid guardrail pada ketinggian 50 cm, dan toeboard setinggi 15 cm terpasang di sepanjang sisi platform terbuka.</li>
  <li><strong>Akses Tangga Aman (Safe Ladder Access):</strong> Tersedia tangga perancah (scaffold ladder) dengan kemiringan 4:1 atau tangga trap internal berpagar pengaman dan bebas dari rintangan.</li>
</ul>

<h2 id="tanggung-jawab-manajemen-dan-tim">8. Pihak Penanggung Jawab & Alur Konsultasi Kepatuhan</h2>
<p>Penerapan standar inspeksi Scafftag melibatkan koordinasi profesional lintas peran di proyek:</p>
<ul>
  <li>Scaffolding Inspector Bersertifikat Kemnaker / BNSP (Pemegang Hak Tunggal Otoritas Tagging).</li>
  <li>Scaffolding Supervisor & Teknisi Perancah (Scaffolder Bersertifikat Kemnaker).</li>
  <li>Safety Officer Konstruksi & Ahli K3 Konstruksi.</li>
  <li>Site Project Manager, Mandor Sipil/Mekanik, dan Tenaga Kerja Pengguna Perancah.</li>
</ul>

<div class="editorial-crosslinks">
<h3>Panduan Regulasi & Pelatihan Terkait:</h3>
<div class="button-chip-grid">
  <a href="/kategori-pelatihan/lisensi-teknisi-perancah-scaffolding/" class="btn-chip" title="Lisensi Teknisi Perancah Scaffolding"><span>👉 Teknisi Perancah Scaffolding</span></a>
<a href="/kategori-pelatihan/pengawas-scaffolding/" class="btn-chip" title="Pelatihan Pengawas Scaffolding"><span>👉 Pengawas Scaffolding Kemnaker</span></a>
  <a href="/kategori-pelatihan/petugas-k3-konstruksi/" class="btn-chip" title="Pelatihan Petugas K3 Konstruksi"><span>👉 Petugas K3 Konstruksi</span></a>
  <a href="/kategori-pelatihan/prosedur-izin-kerja-ptw/" class="btn-chip" title="Prosedur Izin Kerja PTW"><span>👉 Prosedur Izin Kerja (PTW)</span></a>
  <a href="/kategori-pelatihan/penyusunan-rkk-dan-smkk-pupr/" class="btn-chip" title="Penyusunan RKK dan SMKK PUPR"><span>👉 Penyusunan RKK & SMKK</span></a>
</div>
</div>
</div>`
};
