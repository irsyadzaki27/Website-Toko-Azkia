// Tombol promo di halaman Beranda
const promoButton = document.querySelector("#promoButton");

if (promoButton) {
    promoButton.addEventListener("click", () => {
        // Ganti teks tombol saat diklik
        promoButton.textContent = "Promo Beli 1 Gratis 1!";

        // Catatan untuk cek di Console
        console.log("Tombol promo Toko Azkia diklik.");
    });
}
