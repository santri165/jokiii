/**
 * SITTA UT - Aplikasi Pemesanan Bahan Ajar Universitas Terbuka
 * File: app.js
 * Deskripsi: Logika aplikasi dan manipulasi DOM untuk semua halaman
 */

/**
 * Mengubah format tanggal string ke format Indonesia
 * @param {string} dateString - Tanggal dalam format YYYY-MM-DD
 * @returns {string} Tanggal terformat (contoh: "25 Agustus 2025")
 */
function formatDateLabel(dateString) {
  return new Date(dateString).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

/**
 * Menampilkan modal dengan menambahkan class "open"
 * @param {string} id - ID elemen modal-backdrop
 */
function showModal(id) {
  document.getElementById(id)?.classList.add("open");
}

/**
 * Menyembunyikan modal dengan menghapus class "open"
 * @param {string} id - ID elemen modal-backdrop
 */
function closeModal(id) {
  document.getElementById(id)?.classList.remove("open");
}

/**
 * Menampilkan greeting dinamis berdasarkan waktu lokal
 * - 00:00 - 11:59 → "Selamat Pagi"
 * - 12:00 - 14:59 → "Selamat Siang"
 * - 15:00 - 23:59 → "Selamat Sore"
 */
function setGreeting() {
  const greeting = document.getElementById("greeting");
  if (!greeting) return;
  const now = new Date();
  const hour = now.getHours();
  const label = hour < 12 ? "Pagi" : hour < 15 ? "Siang" : "Sore";
  greeting.textContent = `Selamat ${label}, ${greeting.dataset.name || "Pengguna"}!`;
}

/**
 * Detect mobile devices for performance optimizations
 */
function isMobileDevice() {
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    ) || window.innerWidth <= 768
  );
}

/**
 * Advanced Animation Functions - God Level Animations
 */

/**
 * Intersection Observer for scroll-triggered animations
 */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up");
      }
    });
  }, observerOptions);

  // Observe all cards and sections
  document
    .querySelectorAll(".card, .menu-card, .info-card, .page-card")
    .forEach((card) => {
      observer.observe(card);
    });
}

/**
 * Add loading animation to buttons
 */
function addLoadingStates() {
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      if (this.tagName === "A" && this.href) {
        // Add fade-out effect for navigation
        document.body.classList.add("fade-out");
      } else {
        // Add loading state for form buttons
        this.classList.add("loading");
        setTimeout(() => {
          this.classList.remove("loading");
        }, 2000);
      }
    });
  });
}

/**
 * Enhanced hover effects with sound-like feedback
 */
function initHoverEffects() {
  document.querySelectorAll(".menu-card, .card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px) rotateX(5deg)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) rotateX(0)";
    });
  });
}

/**
 * Typing animation for dynamic text
 */
function initTypingAnimation() {
  const elements = document.querySelectorAll(".typing");
  elements.forEach((element) => {
    const text = element.textContent;
    element.textContent = "";
    element.style.width = "0";

    setTimeout(() => {
      element.style.width = text.length + "ch";
      let i = 0;
      const timer = setInterval(() => {
        element.textContent = text.substring(0, i + 1);
        i++;
        if (i >= text.length) {
          clearInterval(timer);
          element.style.borderRight = "none";
        }
      }, 50);
    }, 500);
  });
}

/**
 * Progress bar animation for monitoring
 */
function animateProgressBars() {
  document.querySelectorAll(".progress-fill").forEach((bar) => {
    const width = bar.style.width || "0%";
    bar.style.width = "0%";
    setTimeout(() => {
      bar.style.width = width;
    }, 300);
  });
}

/**
 * Parallax effect for background elements
 */
function initParallaxEffect() {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll(".parallax-element");

    parallaxElements.forEach((element) => {
      const rate = scrolled * -0.5;
      element.style.transform = `translateY(${rate}px)`;
    });
  });
}

/**
 * Advanced particle animation
 */
function initParticleAnimation() {
  const particles = document.querySelectorAll(".particle");

  particles.forEach((particle, index) => {
    // Randomize animation properties
    const delay = Math.random() * 20;
    const duration = 15 + Math.random() * 10;

    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;

    // Randomize position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
  });
}

/**
 * Smooth page transitions
 */
function initPageTransitions() {
  // Add transition class on page load
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "1";
  }, 100);

  // Handle navigation clicks
  document.querySelectorAll("a[href]").forEach((link) => {
    link.addEventListener("click", function (e) {
      if (this.hostname === window.location.hostname) {
        e.preventDefault();
        document.body.style.opacity = "0";

        setTimeout(() => {
          window.location.href = this.href;
        }, 300);
      }
    });
  });
}

/**
 * Enhanced form interactions
 */
function initFormEnhancements() {
  document.querySelectorAll("input, select, textarea").forEach((field) => {
    field.addEventListener("focus", function () {
      this.parentElement.classList.add("focused");
    });

    field.addEventListener("blur", function () {
      if (!this.value) {
        this.parentElement.classList.remove("focused");
      }
    });
  });
}

/**
 * Dynamic background animation
 */
function initDynamicBackground() {
  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX / window.innerWidth;
    mouseY = e.clientY / window.innerHeight;

    document.documentElement.style.setProperty("--mouse-x", mouseX);
    document.documentElement.style.setProperty("--mouse-y", mouseY);
  });
}

/**
 * Initialize all advanced animations
 */
function initAdvancedAnimations() {
  const mobile = isMobileDevice();

  // Reduce animations on mobile for better performance
  if (!mobile) {
    initScrollAnimations();
    initParallaxEffect();
    initParticleAnimation();
  }

  addLoadingStates();
  initHoverEffects();
  initTypingAnimation();
  animateProgressBars();
  initPageTransitions();
  initFormEnhancements();
  initDynamicBackground();
}

/**
 * Inisialisasi event listeners untuk halaman login
 * - Handle form submit (validasi email/password)
 * - Setup modal untuk "Lupa Password" dan "Daftar Akun"
 */
function initLoginPage() {
  const form = document.getElementById("login-form");

  // Event listener untuk form submit
  form?.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Cari pengguna di dataPengguna yang sesuai email & password
    const user = dataPengguna.find(
      (user) => user.email === email && user.password === password,
    );

    if (!user) {
      alert("Email/password yang anda masukkan salah.");
      return;
    }

    // Simpan data pengguna ke localStorage
    localStorage.setItem(
      "sittaUser",
      JSON.stringify({ nama: user.nama, role: user.role, lokasi: user.lokasi }),
    );
    window.location.href = "dashboard.html";
  });

  // Setup modal "Lupa Password"
  document
    .getElementById("show-forgot")
    ?.addEventListener("click", () => showModal("modal-forgot"));

  // Setup modal "Daftar Akun"
  document
    .getElementById("show-register")
    ?.addEventListener("click", () => showModal("modal-register"));

  // Setup close buttons di modal
  document.querySelectorAll(".modal-close").forEach((button) => {
    button.addEventListener("click", () =>
      closeModal(button.closest(".modal-backdrop")?.id),
    );
  });

  // Setup backdrop click untuk menutup modal
  document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (event) => {
      if (event.target === backdrop) backdrop.classList.remove("open");
    });
  });
}

/**
 * Inisialisasi halaman dashboard
 * - Tampilkan greeting dinamis
 * - Tampilkan profil pengguna dari localStorage
 * - Hitung dan tampilkan statistik (pengguna, stok, DO)
 */
function initDashboardPage() {
  setGreeting();

  // Ambil data pengguna dari localStorage
  const userData = JSON.parse(localStorage.getItem("sittaUser") || "null");

  // Tampilkan profil pengguna
  const profile = document.getElementById("profile-summary");
  if (profile && userData) {
    profile.innerHTML = `<strong>${userData.nama}</strong><span>${userData.role} • ${userData.lokasi}</span>`;
  }

  // Ambil element untuk statistik
  const usersCountEl = document
    .getElementById("dashboard-count-users")
    ?.querySelector(".value");
  const stockCountEl = document
    .getElementById("dashboard-count-stock")
    ?.querySelector(".value");
  const deliveriesCountEl = document
    .getElementById("dashboard-count-deliveries")
    ?.querySelector(".value");

  // Set nilai statistik dari data dummy
  if (usersCountEl) usersCountEl.textContent = dataPengguna.length;
  if (stockCountEl) stockCountEl.textContent = dataBahanAjar.length;
  if (deliveriesCountEl)
    deliveriesCountEl.textContent = Object.keys(dataTracking).length;
}

/**
 * Merender detail tracking pengiriman secara dinamis
 * @param {Object|null} result - Data tracking dari dataTracking object
 */
function renderTracking(result) {
  const details = document.getElementById("tracking-details");
  if (!details) return;
  if (!result) {
    details.innerHTML = `<div class="alert">Nomor DO tidak ditemukan. Silakan periksa kembali nomor yang Anda masukkan.</div>`;
    return;
  }

  // Mapping status ke persentase progress bar
  const progressMap = {
    "Dalam Perjalanan": 60,
    Dikirim: 100,
    "Menunggu Pengiriman": 20,
  };
  const progress = progressMap[result.status] || 50;

  // Generate HTML detail tracking
  details.innerHTML = `
    <div class="panel">
      <div class="grid-2">
        <!-- Kartu informasi mahasiswa dan status -->
        <div>
          <div class="status-card">
            <strong>Nama Mahasiswa</strong>
            <div class="value">${result.nama}</div>
            <span>Status Pengiriman</span>
            <div class="status-pill ${result.status === "Dikirim" ? "complete" : "in-progress"}">${result.status}</div>
          </div>
        </div>
        <!-- Kartu detail pengiriman -->
        <div>
          <div class="status-card">
            <strong>Detail Pengiriman</strong>
            <p><strong>Ekspedisi:</strong> ${result.ekspedisi}</p>
            <p><strong>Tanggal Kirim:</strong> ${formatDateLabel(result.tanggalKirim)}</p>
            <p><strong>Jenis Paket:</strong> ${result.paket}</p>
            <p><strong>Total Bayar:</strong> ${result.total}</p>
          </div>
        </div>
      </div>
      <!-- Progress bar tracking -->
      <div style="margin-top: 18px;">
        <strong>Progress Pengiriman</strong>
        <div class="progress-bar" style="margin-top: 10px;"><div class="progress-fill" style="width:${progress}%"></div></div>
      </div>
      <!-- Riwayat perjalanan -->
      <div style="margin-top: 22px;">
        <strong>Riwayat Perjalanan</strong>
        <div class="list-box">${result.perjalanan
          .map(
            (step) => `
              <div class="list-item">
                <strong>${step.waktu}</strong>
                <span>${step.keterangan}</span>
              </div>
            `,
          )
          .join("")}</div>
      </div>
    </div>`;
}

/**
 * Inisialisasi halaman tracking
 * - Setup form submit untuk pencarian nomor DO
 * - Render hasil dengan renderTracking()
 */
function initTrackingPage() {
  const form = document.getElementById("tracking-form");

  form?.addEventListener("submit", function (event) {
    event.preventDefault();
    // Ambil nomor DO dari input
    const number = document.getElementById("do-number").value.trim();
    // Cari dan render tracking data
    renderTracking(dataTracking[number]);
  });
}

/**
 * Merender tabel stok bahan ajar secara dinamis
 * Loop melalui array dataBahanAjar dan generate baris <tr> untuk setiap item
 */
function renderStockTable() {
  const tableBody = document.getElementById("stock-table-body");
  if (!tableBody) return;

  // Generate baris tabel dari dataBahanAjar
  tableBody.innerHTML = dataBahanAjar
    .map(
      (item, index) => `
        <tr>
          <td>${index + 1}</td>
          <td><img src="${item.cover}" alt="${item.namaBarang}" class="cover-thumb"></td>
          <td>${item.kodeLokasi}</td>
          <td>${item.kodeBarang}</td>
          <td>${item.namaBarang}</td>
          <td>${item.jenisBarang}</td>
          <td>${item.edisi}</td>
          <td>${item.stok}</td>
        </tr>`,
    )
    .join("");
}

/**
 * Inisialisasi halaman stok
 * - Render tabel stok awal
 * - Setup form submit untuk tambah stok baru
 * - Validasi input, push ke dataBahanAjar, dan re-render tabel
 */
function initStockPage() {
  renderStockTable();
  const form = document.getElementById("stock-form");

  form?.addEventListener("submit", function (event) {
    event.preventDefault();

    // Ambil semua nilai input
    const kodeLokasi = document.getElementById("kode-lokasi").value.trim();
    const kodeBarang = document.getElementById("kode-barang").value.trim();
    const namaBarang = document.getElementById("nama-barang").value.trim();
    const jenisBarang = document.getElementById("jenis-barang").value.trim();
    const edisi = document.getElementById("edisi").value.trim();
    const stok = parseInt(document.getElementById("stok").value, 10);
    // Default cover jika tidak diisi
    const cover =
      document.getElementById("cover-url").value.trim() ||
      "img/pengantar_komunikasi.jpg";

    // Validasi: semua field harus terisi dan stok harus angka valid
    if (
      !kodeLokasi ||
      !kodeBarang ||
      !namaBarang ||
      !jenisBarang ||
      !edisi ||
      Number.isNaN(stok)
    ) {
      alert("Lengkapi semua kolom untuk menambahkan stok baru.");
      return;
    }

    // Push data baru ke array dataBahanAjar
    dataBahanAjar.push({
      kodeLokasi,
      kodeBarang,
      namaBarang,
      jenisBarang,
      edisi,
      stok,
      cover,
    });

    // Re-render tabel untuk menampilkan data baru
    renderStockTable();

    // Reset form ke state awal
    form.reset();

    // Tampilkan alert sukses
    alert("Stok bahan ajar baru berhasil ditambahkan.");
  });
}

/**
 * Render tabel monitoring progress DO
 */
function renderMonitoringTable() {
  const tableBody = document
    .getElementById("monitoring-table")
    .querySelector("tbody");
  if (!tableBody) return;

  tableBody.innerHTML = dataMonitoring
    .map(
      (item) => `
        <tr>
          <td>${item.nomorDO}</td>
          <td>${item.nama}</td>
          <td>${item.paket}</td>
          <td>
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${item.progress}%"></div>
            </div>
            <span>${item.progress}%</span>
          </td>
          <td><span class="status-${item.status.toLowerCase().replace(" ", "-")}">${item.status}</span></td>
          <td>${formatDateLabel(item.tanggal)}</td>
        </tr>`,
    )
    .join("");
}

/**
 * Render tabel rekap bahan ajar
 */
function renderRekapTable() {
  const tableBody = document
    .getElementById("rekap-table")
    .querySelector("tbody");
  if (!tableBody) return;

  tableBody.innerHTML = dataRekap
    .map(
      (item) => `
        <tr>
          <td>${item.kodeLokasi}</td>
          <td>${item.namaLokasi}</td>
          <td>${item.totalStok}</td>
          <td>${item.jenisBarang}</td>
          <td>${item.edisi}</td>
        </tr>`,
    )
    .join("");
}

/**
 * Render tabel histori transaksi
 */
function renderHistoriTable() {
  const tableBody = document
    .getElementById("histori-table")
    .querySelector("tbody");
  if (!tableBody) return;

  tableBody.innerHTML = dataHistori
    .map(
      (item) => `
        <tr>
          <td>${formatDateLabel(item.tanggal)}</td>
          <td>${item.jenis}</td>
          <td>${item.kodeBarang}</td>
          <td>${item.namaBarang}</td>
          <td>${item.jumlah}</td>
          <td>${item.lokasi}</td>
          <td>${item.keterangan}</td>
        </tr>`,
    )
    .join("");
}

/**
 * Inisialisasi halaman laporan
 */
function initLaporanPage() {
  renderMonitoringTable();
  renderRekapTable();
}

/**
 * Inisialisasi halaman histori
 */
function initHistoriPage() {
  renderHistoriTable();
}

/**
 * Fungsi inisialisasi utama yang dipanggil saat DOM siap
 * Baca data-page attribute dari <body> dan panggil init function yang sesuai
 */
function initApp() {
  setGreeting();
  initAdvancedAnimations();
  const pageType = document.body.dataset.page;

  // Panggil init function sesuai halaman
  if (pageType === "login") initLoginPage();
  if (pageType === "dashboard") initDashboardPage();
  if (pageType === "tracking") initTrackingPage();
  if (pageType === "stok") initStockPage();
  if (pageType === "laporan") initLaporanPage();
  if (pageType === "histori") initHistoriPage();
}

// Panggil initApp setelah DOM siap
document.addEventListener("DOMContentLoaded", initApp);
