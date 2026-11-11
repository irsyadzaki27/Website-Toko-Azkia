// Ambil form dan area preview
const form = document.querySelector("#form-kontak");
const preview = document.querySelector("#preview-form");

form.addEventListener("submit", (event) => {
    // Cegah halaman reload
    event.preventDefault();

    // Baca data form lewat atribut name
    const data = new FormData(form);

    // Tampilkan data di area preview
    preview.textContent = [
        `Nama: ${data.get("nama")}`,
        `Email: ${data.get("email")}`,
        `WhatsApp: ${data.get("whatsapp")}`,
        `Produk: ${data.get("paket")}`,
        `Topik: ${data.get("topik")}`,
        `Waktu dihubungi: ${data.get("waktu")}`,
        `Pesan: ${data.get("pesan")}`,
    ].join("\n");
});
