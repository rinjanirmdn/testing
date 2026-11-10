/* ==========================================================================
   Interaksi halaman — JavaScript biasa, tanpa library.
   1. Menu mobile   2. Filter portofolio   3. Modal studi kasus   4. Formulir
   ========================================================================== */
(function () {
  "use strict";

  /* ---------- Tahun hak cipta ---------- */
  var tahun = document.getElementById("tahun");
  if (tahun) tahun.textContent = String(new Date().getFullYear());

  /* ---------- 1. Menu mobile ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("menu-mobile");

  function setMenu(open) {
    menu.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.querySelector(".nav-toggle__label").textContent = open ? "Tutup" : "Menu";
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      setMenu(menu.hidden);
    });
    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !menu.hidden) {
        setMenu(false);
        toggle.focus();
      }
    });
  }

  /* ---------- Penanda menu aktif, tombol "Ke atas", dan CTA bawah ---------- */
  var navLinks = document.querySelectorAll(".nav a");
  var toTop = document.getElementById("ke-atas");
  var bottomCta = document.getElementById("cta-bawah");
  var contactSection = document.getElementById("kontak");

  function onScroll() {
    // Section aktif = section terakhir yang bagian atasnya sudah melewati header
    var current = "";
    navLinks.forEach(function (link) {
      var section = document.querySelector(link.getAttribute("href"));
      if (section && section.getBoundingClientRect().top <= 140) current = link.getAttribute("href");
    });
    navLinks.forEach(function (link) {
      if (link.getAttribute("href") === current) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });

    if (toTop) toTop.hidden = window.scrollY < 700;

    // Sembunyikan CTA bawah saat formulir kontak sudah terlihat
    if (bottomCta && contactSection) {
      var rect = contactSection.getBoundingClientRect();
      bottomCta.classList.toggle("is-hidden", window.scrollY < 500 || rect.top < window.innerHeight * 0.75);
    }
  }
  var ticking = false;
  window.addEventListener("scroll", function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      onScroll();
      ticking = false;
    });
  }, { passive: true });
  onScroll();

  /* ---------- 2. Filter portofolio ---------- */
  var filters = document.querySelectorAll(".filter");
  var cards = document.querySelectorAll("#portofolio-daftar > li");
  var status = document.getElementById("portofolio-status");

  filters.forEach(function (button) {
    button.addEventListener("click", function () {
      var category = button.dataset.filter;
      var shown = 0;
      filters.forEach(function (other) {
        other.setAttribute("aria-pressed", String(other === button));
      });
      cards.forEach(function (card) {
        var match = category === "all" || card.dataset.category === category;
        card.hidden = !match;
        if (match) shown += 1;
      });
      if (status) status.textContent = shown + " studi kasus ditampilkan";
    });
  });

  /* ---------- 3. Modal studi kasus (<dialog> bawaan peramban) ---------- */
  document.querySelectorAll("[data-open-dialog]").forEach(function (button) {
    button.addEventListener("click", function () {
      var dialog = document.getElementById(button.dataset.openDialog);
      if (dialog && typeof dialog.showModal === "function") dialog.showModal();
    });
  });
  document.querySelectorAll("dialog").forEach(function (dialog) {
    dialog.addEventListener("click", function (event) {
      // Klik tombol tutup, atau klik latar di luar panel
      if (event.target.closest("[data-close-dialog]") || event.target === dialog) dialog.close();
    });
  });

  /* ---------- 4. Formulir permintaan penawaran ---------- */

  /**
   * Mengirim permintaan penawaran.
   *
   * SAAT INI BELUM TERHUBUNG KE MANA PUN: fungsi ini hanya menunggu sebentar
   * lalu mengembalikan sukses. Tidak ada data yang dikirim atau disimpan.
   *
   * CARA MENYAMBUNGKAN (GitHub Pages tidak punya server, jadi perlu layanan luar):
   *   a) Layanan formulir (mis. Formspree, Basin, Getform) atau Google Apps Script:
   *      ganti isi fungsi ini dengan
   *
   *        return fetch("URL_ENDPOINT_ANDA", {
   *          method: "POST",
   *          headers: { "Content-Type": "application/json", Accept: "application/json" },
   *          body: JSON.stringify(data),
   *        }).then(function (res) { return { ok: res.ok }; });
   *
   *   b) Server/API milik perusahaan: sama seperti di atas, arahkan ke URL API Anda.
   *
   * Sebelum dipakai sungguhan, tambahkan proteksi spam di sisi layanan/server
   * dan sesuaikan pernyataan privasi dengan UU Pelindungan Data Pribadi.
   */
  function submitInquiry(data) {
    // PLACEHOLDER — ganti sebelum produksi
    void data;
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve({ ok: true });
      }, 1200);
    });
  }

  var form = document.getElementById("form-penawaran");
  if (!form) return;

  var summary = document.getElementById("form-ringkasan");
  var failed = document.getElementById("form-gagal");
  var success = document.getElementById("form-sukses");
  var submit = document.getElementById("form-kirim");
  var FIELDS = ["name", "organization", "email", "phone", "eventType", "attendees", "date", "message"];
  var sending = false;

  function validate(v) {
    var e = {};
    if (!v.name) e.name = "Nama lengkap wajib diisi.";
    if (!v.organization) e.organization = "Nama instansi atau perusahaan wajib diisi.";

    if (!v.email) e.email = "Email wajib diisi.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) e.email = "Format email tidak valid. Contoh: nama@instansi.go.id";

    var digits = v.phone.replace(/\D/g, "");
    if (!v.phone) e.phone = "Nomor telepon wajib diisi.";
    else if (!/^[+\d\s().-]+$/.test(v.phone) || digits.length < 8 || digits.length > 15) {
      e.phone = "Nomor telepon tidak valid. Gunakan 8–15 digit angka.";
    }

    if (!v.eventType) e.eventType = "Pilih jenis acara.";
    if (!v.attendees) e.attendees = "Pilih perkiraan jumlah peserta.";

    if (v.date) {
      var now = new Date();
      var today = now.getFullYear() + "-" + String(now.getMonth() + 1).padStart(2, "0") + "-" + String(now.getDate()).padStart(2, "0");
      if (v.date < today) e.date = "Tanggal pelaksanaan tidak boleh sudah lewat.";
    }

    if (!v.message) e.message = "Pesan wajib diisi.";
    else if (v.message.length < 20) e.message = "Pesan terlalu singkat. Tulis minimal 20 karakter.";
    return e;
  }

  function showFieldError(name, message) {
    var input = document.getElementById("f-" + name);
    var error = document.getElementById("e-" + name);
    error.textContent = message || "";
    error.hidden = !message;
    if (message) {
      input.setAttribute("aria-invalid", "true");
      input.setAttribute("aria-describedby", "e-" + name);
    } else {
      input.removeAttribute("aria-invalid");
      input.removeAttribute("aria-describedby");
    }
  }

  function setSending(state) {
    sending = state;
    submit.setAttribute("aria-disabled", String(state));
    submit.querySelector(".spinner").hidden = !state;
    submit.querySelector(".icon").style.display = state ? "none" : "";
    submit.querySelector("[data-label]").textContent = state ? "Mengirim…" : "Kirim Permintaan";
  }

  // Hapus galat sebuah kolom begitu pengguna memperbaikinya
  FIELDS.forEach(function (name) {
    document.getElementById("f-" + name).addEventListener("input", function () {
      showFieldError(name, "");
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (sending) return;

    var values = {};
    FIELDS.forEach(function (name) {
      values[name] = form.elements[name].value.trim();
    });

    var errors = validate(values);
    var list = summary.querySelector("ul");
    list.textContent = "";
    failed.hidden = true;

    FIELDS.forEach(function (name) {
      showFieldError(name, errors[name]);
      if (errors[name]) {
        var item = document.createElement("li");
        var link = document.createElement("a");
        link.href = "#f-" + name;
        link.textContent = errors[name];
        item.appendChild(link);
        list.appendChild(item);
      }
    });

    if (Object.keys(errors).length > 0) {
      summary.hidden = false;
      summary.focus();
      return;
    }
    summary.hidden = true;

    setSending(true);
    submitInquiry(values)
      .then(function (result) {
        if (!result || !result.ok) throw new Error("gagal");
        form.hidden = true;
        success.hidden = false;
        success.focus();
      })
      .catch(function () {
        failed.hidden = false;
      })
      .then(function () {
        setSending(false);
      });
  });

  document.getElementById("form-ulang").addEventListener("click", function () {
    form.reset();
    success.hidden = true;
    form.hidden = false;
    document.getElementById("f-name").focus();
  });
})();
