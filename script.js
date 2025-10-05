// Menunggu semua elemen HTML dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', function() {

    // --- FUNGSI UNTUK MENU (SIDEBAR) ---
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    // Jika tombol menu ada di halaman
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            // Tambah atau hapus kelas 'active' pada sidebar untuk memunculkannya
            sidebar.classList.toggle('active');
        });
    }

    // --- FUNGSI UNTUK JADWAL OTOMATIS ---
    // Fungsi ini hanya berjalan jika ada elemen jadwal di halaman (hanya di index.html)
    const scheduleContainer = document.querySelector('main');
    if (scheduleContainer && scheduleContainer.querySelector('.day-schedule')) {
        
        function tampilkanJadwalHariIni() {
            // Dapatkan hari ini (0=Minggu, 1=Senin, 2=Selasa, dst.)
            const hariIni = new Date().getDay();

            // Mapping dari angka ke ID elemen HTML
            // Minggu (0) dan Sabtu (6) dianggap hari libur
            const namaHari = {
                0: 'libur',  // Minggu
                1: 'libur', 
                2: 'selasa',
                3: 'libur',
                4: 'kamis',
                5: 'jumat',
                6: 'sabtu'   // Sabtu
            };

            const idJadwalHariIni = namaHari[hariIni];

            // Sembunyikan semua jadwal terlebih dahulu
            const semuaJadwal = document.querySelectorAll('.day-schedule');
            semuaJadwal.forEach(jadwal => {
                jadwal.classList.remove('active');
            });

            // Tampilkan jadwal untuk hari ini
            const jadwalHariIni = document.getElementById(idJadwalHariIni);
            if (jadwalHariIni) {
                jadwalHariIni.classList.add('active');
            } else {
                // Jika karena suatu alasan jadwal tidak ditemukan, tampilkan pesan libur
                document.getElementById('libur').classList.add('active');
            }
        }

        // Panggil fungsi saat halaman pertama kali dimuat
        tampilkanJadwalHariIni();
    }
});
