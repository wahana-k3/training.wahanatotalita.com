import { PageContentData } from '@/lib/types';

export const content: PageContentData = {
  key: "gas-tester",
  updated: "2026-08-29",
  faq: [
  {
    "q": "Apa yang dimaksud dengan stratifikasi gas dalam pengujian atmosfer?",
    "a": "Stratifikasi gas adalah fenomena pembagian lapisan gas berdasarkan berat jenisnya terhadap udara (air density = 1.0). Gas ringan seperti Methane berada di bagian atas, gas dengan berat jenis setara seperti CO berada di tengah, dan gas berat seperti H2S serta uap hidrokarbon mengendap di dasar lantai tangki."
  },
  {
    "q": "Berapa lama interval waktu pengujian gas sebelum pekerjaan dimulai?",
    "a": "Standar industri mewajibkan pengujian gas dilakukan maksimal 30 menit sebelum pekerja memasuki area kerja atau sebelum pekerjaan panas (hot work) dinyalakan, serta dilakukan continuous monitoring selama pekerjaan berlangsung."
  }
],
  html: "<p>Peran <strong>Authorized Gas Tester (AGT)</strong> adalah benteng terdepan dalam mencegah insiden kebakaran, ledakan, dan keracunan massal di fasilitas perminyakan, petrokimia, manufaktur, dan pertambangan. Seorang Gas Tester bertanggung jawab memastikan bahwa kondisi atmosfer kerja benar-benar aman sebelum Surat Izin Kerja (Permit to Work) disetujui.</p>\n\n<h2 id=\"hierarki-pengujian\">Hierarki Urutan Pengujian Gas yang Benar</h2>\n<p>Banyak penguji pemula melakukan kesalahan fatal dengan menguji gas beracun terlebih dahulu. Standar internasional mewajibkan urutan pengujian atmosfer yang ketat:</p>\n<ol class=\"steps\">\n  <li><strong>Kandungan Oksigen (O2):</strong> Sensor gas mudah terbakar dan beberapa gas toksik membutuhkan kadar oksigen minimal untuk dapat membaca akurat. Pastikan O2 berada di 19.5% – 23.5%.</li>\n  <li><strong>Gas Mudah Terbakar (Flammable Gases / LEL):</strong> Memastikan tidak ada risiko ledakan mendadak (wajib &lt;5% LEL untuk hot work, &lt;10% LEL untuk cold work).</li>\n  <li><strong>Gas Toksik &amp; Beracun:</strong> Memeriksa parameter gas spesifik seperti H2S (&lt;1 ppm / 5 ppm), Carbon Monoxide (&lt;25 ppm), dan VOC.</li>\n</ol>\n\n<h2 id=\"materi-pelatihan\">Materi &amp; Simulasi Praktik</h2>\n<ul class=\"check-list\">\n  <li>Prinsip kerja sensor catalytic bead, electrochemical, dan Photoionization Detector (PID).</li>\n  <li>Teknik sampling di kedalaman menggunakan probe dan aspirator pump dengan rumus sampling time (2 detik per meter selang).</li>\n  <li>Pencatatan resmi lembar uji gas (Gas Testing Certificate) dan integrasi dengan sistem Permit to Work.</li>\n</ul>\n\n<p>\n  <a href=\"/kategori-pelatihan/gas-detector/\">Pelatihan Kalibrasi Gas Detector</a>\n  <a href=\"/kategori-pelatihan/hot-work-safety/\">Pelatihan Hot Work Safety</a>\n  <a href=\"/kategori-pelatihan/permit-to-work/\">Pelatihan Permit to Work</a>\n</p>"
};
