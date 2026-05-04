function formatDateLabel(dateString) {
  return new Date(dateString).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function showModal(id) {
  document.getElementById(id)?.classList.add("open");
}

function closeModal(id) {
  document.getElementById(id)?.classList.remove("open");
}

function setGreeting() {
  const greeting = document.getElementById("greeting");
  if (!greeting) return;
  const now = new Date();
  const hour = now.getHours();
  const label = hour < 12 ? "Pagi" : hour < 15 ? "Siang" : "Sore";
  greeting.textContent = `Selamat ${label}, selamat datang di SITTA UT`;
}

function initLoginPage() {
  const form = document.getElementById("login-form");
  form?.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const user = dataPengguna.find(
      (user) => user.email === email && user.password === password,
    );
    if (!user) {
      alert("Email/password yang anda masukkan salah.");
      return;
    }
    localStorage.setItem(
      "sittaUser",
      JSON.stringify({ nama: user.nama, role: user.role, lokasi: user.lokasi }),
    );
    window.location.href = "dashboard.html";
  });

  document
    .getElementById("show-forgot")
    ?.addEventListener("click", () => showModal("modal-forgot"));
  document
    .getElementById("show-register")
    ?.addEventListener("click", () => showModal("modal-register"));
  document.querySelectorAll(".modal-close").forEach((button) => {
    button.addEventListener("click", () =>
      closeModal(button.closest(".modal-backdrop")?.id),
    );
  });
  document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (event) => {
      if (event.target === backdrop) backdrop.classList.remove("open");
    });
  });
}

function initDashboardPage() {
  setGreeting();
  const userData = JSON.parse(localStorage.getItem("sittaUser") || "null");
  const profile = document.getElementById("profile-summary");
  if (profile && userData) {
    profile.innerHTML = `<strong>${userData.nama}</strong><span>${userData.role} • ${userData.lokasi}</span>`;
  }
  const usersCountEl = document
    .getElementById("dashboard-count-users")
    ?.querySelector(".value");
  const stockCountEl = document
    .getElementById("dashboard-count-stock")
    ?.querySelector(".value");
  const deliveriesCountEl = document
    .getElementById("dashboard-count-deliveries")
    ?.querySelector(".value");

  if (usersCountEl) usersCountEl.textContent = dataPengguna.length;
  if (stockCountEl) stockCountEl.textContent = dataBahanAjar.length;
  if (deliveriesCountEl)
    deliveriesCountEl.textContent = Object.keys(dataTracking).length;
}

function renderTracking(result) {
  const details = document.getElementById("tracking-details");
  if (!details) return;
  if (!result) {
    details.innerHTML = `<div class="alert">Nomor DO tidak ditemukan. Silakan periksa kembali nomor yang Anda masukkan.</div>`;
    return;
  }
  const progressMap = {
    "Dalam Perjalanan": 60,
    Dikirim: 100,
    "Menunggu Pengiriman": 20,
  };
  const progress = progressMap[result.status] || 50;
  details.innerHTML = `
    <div class="panel">
      <div class="grid-2">
        <div>
          <div class="status-card">
            <strong>Nama Mahasiswa</strong>
            <div class="value">${result.nama}</div>
            <span>Status Pengiriman</span>
            <div class="status-pill ${result.status === "Dikirim" ? "complete" : "in-progress"}">${result.status}</div>
          </div>
        </div>
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
      <div style="margin-top: 18px;">
        <strong>Progress Pengiriman</strong>
        <div class="progress-bar" style="margin-top: 10px;"><div class="progress-fill" style="width:${progress}%"></div></div>
      </div>
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

function initTrackingPage() {
  const form = document.getElementById("tracking-form");
  form?.addEventListener("submit", function (event) {
    event.preventDefault();
    const number = document.getElementById("do-number").value.trim();
    renderTracking(dataTracking[number]);
  });
}

function renderStockTable() {
  const tableBody = document.getElementById("stock-table-body");
  if (!tableBody) return;
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

function initStockPage() {
  renderStockTable();
  const form = document.getElementById("stock-form");
  form?.addEventListener("submit", function (event) {
    event.preventDefault();
    const kodeLokasi = document.getElementById("kode-lokasi").value.trim();
    const kodeBarang = document.getElementById("kode-barang").value.trim();
    const namaBarang = document.getElementById("nama-barang").value.trim();
    const jenisBarang = document.getElementById("jenis-barang").value.trim();
    const edisi = document.getElementById("edisi").value.trim();
    const stok = parseInt(document.getElementById("stok").value, 10);
    const cover =
      document.getElementById("cover-url").value.trim() ||
      "img/pengantar_komunikasi.jpg";
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
    dataBahanAjar.push({
      kodeLokasi,
      kodeBarang,
      namaBarang,
      jenisBarang,
      edisi,
      stok,
      cover,
    });
    renderStockTable();
    form.reset();
    alert("Stok bahan ajar baru berhasil ditambahkan.");
  });
}

function initApp() {
  setGreeting();
  const pageType = document.body.dataset.page;
  if (pageType === "login") initLoginPage();
  if (pageType === "dashboard") initDashboardPage();
  if (pageType === "tracking") initTrackingPage();
  if (pageType === "stok") initStockPage();
}

document.addEventListener("DOMContentLoaded", initApp);
