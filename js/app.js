"use strict";

console.log("P09 JavaScript aktif");

// Data produk Toko Azkia (array of object)
const produkUmkm = [
    { nama: "Good Day Latte Original", kategori: "Kopi Sachet", harga: 5000, stok: 20, unggulan: true, deskripsi: "Minuman serbuk rasa kopi latte varian original, kemasan 22 g." },
    { nama: "Good Day Latte Butterscotch", kategori: "Kopi Sachet", harga: 5000, stok: 20, unggulan: false, deskripsi: "Minuman serbuk rasa kopi latte varian butterscotch, kemasan 22 g." },
    { nama: "Good Day Cappuccino", kategori: "Kopi Sachet", harga: 5000, stok: 20, unggulan: false, deskripsi: "Minuman serbuk kopi cappuccino dengan butiran cokelat (cocoa granules)." },
    { nama: "Kapal Api Special Mix", kategori: "Kopi Sachet", harga: 4000, stok: 20, unggulan: true, deskripsi: "Kopi bubuk dengan gula varian Special Mix dalam kemasan sachet." },
    { nama: "Mama Lemon", kategori: "Rumah Tangga", harga: 10000, stok: 20, unggulan: false, deskripsi: "Sabun cuci piring cair aroma jeruk nipis, kemasan refill 950 g." },
    { nama: "Rapika", kategori: "Rumah Tangga", harga: 8000, stok: 20, unggulan: false, deskripsi: "Pelembut dan pewangi pakaian So Klin Rapika Biang kemasan 60 ml." },
];

// Lihat data mentah di Console
console.table(produkUmkm);

// Format angka jadi rupiah
function formatRupiah(nilai) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(nilai);
}

// Tes cepat di Console
console.log(formatRupiah(produkUmkm[0].harga));

// Tentukan status stok dari jumlah stok
function statusStok(stok) {
    if (stok === 0) {
        return { label: "Habis", className: "empty" };
    }

    if (stok <= 5) {
        return { label: "Stok terbatas", className: "warning" };
    }

    return { label: "Tersedia", className: "" };
}

// Label kategori produk
function labelKategori(kategori) {
    switch (kategori) {
        case "Kopi Sachet":
            return "Minuman kopi sachet";
        case "Rumah Tangga":
            return "Kebutuhan rumah tangga";
        default:
            return "Produk UMKM";
    }
}

// Tampilkan produk ke halaman
function renderProduk() {
    const grid = document.querySelector("#produk-dinamis");
    const ringkasan = document.querySelector("#produk-ringkasan");

    // Halaman lain tidak punya target, jadi berhenti
    if (!grid || !ringkasan) {
        return;
    }

    let jumlahTersedia = 0;
    let markup = "";

    for (const produk of produkUmkm) {
        const status = statusStok(produk.stok);
        const kategori = labelKategori(produk.kategori);
        const labelAksi = produk.stok > 0 ? "Siap dipesan" : "Hubungi admin";
        const badgeUnggulan = produk.unggulan
            ? '<span class="product-badge">Produk unggulan</span>'
            : "";

        if (produk.stok > 0) {
            jumlahTersedia = jumlahTersedia + 1;
        }

        markup = markup + `
            <article class="js-product-card">
                ${badgeUnggulan}
                <h3>${produk.nama}</h3>
                <p>${kategori}</p>
                <p>${produk.deskripsi}</p>
                <p class="price">${formatRupiah(produk.harga)}</p>
                <span class="stock-badge ${status.className}">${status.label}</span>
                <p>${labelAksi}</p>
            </article>
        `;
    }

    grid.innerHTML = markup;
    ringkasan.textContent = `${jumlahTersedia} produk tersedia dari ${produkUmkm.length} data.`;
}

document.addEventListener("DOMContentLoaded", renderProduk);