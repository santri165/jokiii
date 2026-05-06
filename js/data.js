/**
 * SITTA UT - Data Dummy untuk Testing
 * File: data.js
 * Deskripsi: Berisi data dummy pengguna, bahan ajar, dan tracking pengiriman
 */

/**
 * Array berisi 5 pengguna dummy untuk login testing
 *
 * Struktur:
 * - id: number (unique identifier)
 * - nama: string (nama pengguna)
 * - email: string (email untuk login)
 * - password: string (password untuk login)
 * - role: string (UPBJJ-UT, Puslaba, Fakultas, Administrator)
 * - lokasi: string (lokasi pengguna)
 *
 * Coba login dengan:
 * Email: rina@ut.ac.id | Password: rina123
 * Email: admin@ut.ac.id | Password: admin123
 */
var dataPengguna = [
  {
    id: 1,
    nama: "Rina Wulandari",
    email: "rina@ut.ac.id",
    password: "rina123",
    role: "UPBJJ-UT",
    lokasi: "UPBJJ Jakarta",
  },
  {
    id: 2,
    nama: "Agus Pranoto",
    email: "agus@ut.ac.id",
    password: "agus123",
    role: "UPBJJ-UT",
    lokasi: "UPBJJ Makassar",
  },
  {
    id: 3,
    nama: "Siti Marlina",
    email: "siti@ut.ac.id",
    password: "siti123",
    role: "Puslaba",
    lokasi: "Pusat",
  },
  {
    id: 4,
    nama: "Doni Setiawan",
    email: "doni@ut.ac.id",
    password: "doni123",
    role: "Fakultas",
    lokasi: "FISIP",
  },
  {
    id: 5,
    nama: "Admin SITTA",
    email: "admin@ut.ac.id",
    password: "admin123",
    role: "Administrator",
    lokasi: "Pusat",
  },
];

/**
 * Array berisi 5 bahan ajar dummy untuk tampilan stok
 * Ditampilkan secara dinamis di halaman stok.html menggunakan renderStockTable()
 *
 * Struktur:
 * - kodeLokasi: string (kode lokasi UPBJJ)
 * - kodeBarang: string (kode mata kuliah/barang)
 * - namaBarang: string (nama mata kuliah/barang)
 * - jenisBarang: string (tipe barang, misal: BMP)
 * - edisi: string (nomor edisi)
 * - stok: number (jumlah stok)
 * - cover: string (path ke gambar cover)
 */
var dataBahanAjar = [
  {
    kodeLokasi: "0TMP01",
    kodeBarang: "ASIP4301",
    namaBarang: "Pengantar Ilmu Komunikasi",
    jenisBarang: "BMP",
    edisi: "2",
    stok: 548,
    cover: "img/pengantar_komunikasi.jpg",
  },
  {
    kodeLokasi: "0JKT01",
    kodeBarang: "EKMA4216",
    namaBarang: "Manajemen Keuangan",
    jenisBarang: "BMP",
    edisi: "3",
    stok: 392,
    cover: "img/manajemen_keuangan.jpg",
  },
  {
    kodeLokasi: "0SBY02",
    kodeBarang: "EKMA4310",
    namaBarang: "Kepemimpinan",
    jenisBarang: "BMP",
    edisi: "1",
    stok: 278,
    cover: "img/kepemimpinan.jpg",
  },
  {
    kodeLokasi: "0MLG01",
    kodeBarang: "BIOL4211",
    namaBarang: "Mikrobiologi Dasar",
    jenisBarang: "BMP",
    edisi: "2",
    stok: 165,
    cover: "img/mikrobiologi.jpg",
  },
  {
    kodeLokasi: "0UPBJJBDG",
    kodeBarang: "PAUD4401",
    namaBarang: "Perkembangan Anak Usia Dini",
    jenisBarang: "BMP",
    edisi: "4",
    stok: 204,
    cover: "img/paud_perkembangan.jpeg",
  },
];

/**
 * Object berisi data tracking pengiriman dengan nomor DO sebagai key
 * Digunakan untuk simulasi tracking di halaman tracking.html
 *
 * Struktur:
 * {
 *   "nomorDO": {
 *     nomorDO: string - nomor Delivery Order (identifier)
 *     nama: string - nama penerima/mahasiswa
 *     status: string - status pengiriman (Dalam Perjalanan / Dikirim / Menunggu Pengiriman)
 *     ekspedisi: string - nama jasa pengiriman (JNE, Pos Indonesia, dll)
 *     tanggalKirim: string - tanggal pengiriman (format YYYY-MM-DD)
 *     paket: string - kode paket/bahan ajar yang dikirim
 *     total: string - total biaya pengiriman
 *     perjalanan: array - riwayat perjalanan paket
 *       - waktu: string (format YYYY-MM-DD HH:MM:SS)
 *       - keterangan: string (deskripsi status pengiriman)
 *   }
 * }
 *
 * Coba cari tracking dengan nomor:
 * 2023001234 atau 2023005678
 */
var dataTracking = {
  2023001234: {
    nomorDO: "2023001234",
    nama: "Rina Wulandari",
    status: "Dalam Perjalanan",
    ekspedisi: "JNE",
    tanggalKirim: "2025-08-25",
    paket: "0JKT01",
    total: "Rp 180.000",
    perjalanan: [
      {
        waktu: "2025-08-25 10:12:20",
        keterangan:
          "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka",
      },
      {
        waktu: "2025-08-25 14:07:56",
        keterangan: "Tiba di Hub: TANGERANG SELATAN",
      },
      {
        waktu: "2025-08-25 10:12:20",
        keterangan: "Diteruskan ke Kantor Jakarta Selatan",
      },
    ],
  },
  2023005678: {
    nomorDO: "2023001234",
    nama: "Agus Pranoto",
    status: "Dikirim",
    ekspedisi: "Pos Indonesia",
    tanggalKirim: "2025-08-25",
    paket: "0UPBJJBDG",
    total: "Rp 220.000",
    perjalanan: [
      {
        waktu: "2025-08-25 10:12:20",
        keterangan:
          "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka",
      },
      {
        waktu: "2025-08-25 14:07:56",
        keterangan: "Tiba di Hub: TANGERANG SELATAN",
      },
      {
        waktu: "2025-08-25 16:30:10",
        keterangan: "Diteruskan ke Kantor Kota Bandung",
      },
      {
        waktu: "2025-08-26 12:15:33",
        keterangan: "Tiba di Hub: Kota BANDUNG",
      },
      {
        waktu: "2025-08-26 15:06:12",
        keterangan: "Proses antar ke Cimahi",
      },
      {
        waktu: "2025-08-26 20:00:00",
        keterangan: "Selesai Antar. Penerima: Agus Pranoto",
      },
    ],
  },
};

/**
 * Array berisi data monitoring progress DO bahan ajar
 * Digunakan untuk laporan monitoring di halaman laporan.html
 *
 * Struktur:
 * - nomorDO: string (nomor Delivery Order)
 * - nama: string (nama penerima)
 * - paket: string (kode paket)
 * - progress: number (persentase progress, 0-100)
 * - status: string (status pengiriman)
 * - tanggal: string (tanggal update terakhir)
 */
var dataMonitoring = [
  {
    nomorDO: "2023001234",
    nama: "Rina Wulandari",
    paket: "0JKT01",
    progress: 75,
    status: "Dalam Perjalanan",
    tanggal: "2025-08-25",
  },
  {
    nomorDO: "2023005678",
    nama: "Agus Pranoto",
    paket: "0UPBJJBDG",
    progress: 100,
    status: "Selesai",
    tanggal: "2025-08-26",
  },
  {
    nomorDO: "2023009012",
    nama: "Siti Marlina",
    paket: "0TMP01",
    progress: 50,
    status: "Menunggu Pengiriman",
    tanggal: "2025-08-24",
  },
];

/**
 * Array berisi data rekap bahan ajar
 * Digunakan untuk laporan rekap di halaman laporan.html
 *
 * Struktur:
 * - kodeLokasi: string (kode lokasi)
 * - namaLokasi: string (nama lokasi)
 * - totalStok: number (total stok)
 * - jenisBarang: string (jenis barang)
 * - edisi: string (edisi)
 */
var dataRekap = [
  {
    kodeLokasi: "0TMP01",
    namaLokasi: "UPBJJ Tangerang",
    totalStok: 548,
    jenisBarang: "BMP",
    edisi: "2",
  },
  {
    kodeLokasi: "0JKT01",
    namaLokasi: "UPBJJ Jakarta",
    totalStok: 392,
    jenisBarang: "BMP",
    edisi: "3",
  },
  {
    kodeLokasi: "0SBY02",
    namaLokasi: "UPBJJ Surabaya",
    totalStok: 278,
    jenisBarang: "BMP",
    edisi: "1",
  },
  {
    kodeLokasi: "0MLG01",
    namaLokasi: "UPBJJ Malang",
    totalStok: 165,
    jenisBarang: "BMP",
    edisi: "2",
  },
  {
    kodeLokasi: "0UPBJJBDG",
    namaLokasi: "UPBJJ Bandung",
    totalStok: 204,
    jenisBarang: "BMP",
    edisi: "4",
  },
];

/**
 * Array berisi data histori transaksi bahan ajar
 * Digunakan untuk halaman histori.html
 *
 * Struktur:
 * - id: number (unique identifier)
 * - tanggal: string (tanggal transaksi)
 * - jenis: string (jenis transaksi: Masuk/Keluar)
 * - kodeBarang: string (kode barang)
 * - namaBarang: string (nama barang)
 * - jumlah: number (jumlah barang)
 * - lokasi: string (lokasi transaksi)
 * - keterangan: string (keterangan tambahan)
 */
var dataHistori = [
  {
    id: 1,
    tanggal: "2025-08-20",
    jenis: "Masuk",
    kodeBarang: "ASIP4301",
    namaBarang: "Pengantar Ilmu Komunikasi",
    jumlah: 100,
    lokasi: "UPBJJ Tangerang",
    keterangan: "Penerimaan dari pusat",
  },
  {
    id: 2,
    tanggal: "2025-08-21",
    jenis: "Keluar",
    kodeBarang: "EKMA4216",
    namaBarang: "Manajemen Keuangan",
    jumlah: 50,
    lokasi: "UPBJJ Jakarta",
    keterangan: "Pengiriman ke mahasiswa",
  },
  {
    id: 3,
    tanggal: "2025-08-22",
    jenis: "Masuk",
    kodeBarang: "EKMA4310",
    namaBarang: "Kepemimpinan",
    jumlah: 200,
    lokasi: "UPBJJ Surabaya",
    keterangan: "Restock",
  },
  {
    id: 4,
    tanggal: "2025-08-23",
    jenis: "Keluar",
    kodeBarang: "BIOL4211",
    namaBarang: "Mikrobiologi Dasar",
    jumlah: 30,
    lokasi: "UPBJJ Malang",
    keterangan: "Distribusi",
  },
  {
    id: 5,
    tanggal: "2025-08-24",
    jenis: "Masuk",
    kodeBarang: "PAUD4401",
    namaBarang: "Perkembangan Anak Usia Dini",
    jumlah: 150,
    lokasi: "UPBJJ Bandung",
    keterangan: "Penerimaan baru",
  },
];
