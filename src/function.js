exports.hitung = (jamMulai, jamSelesai, kecepatanAwal) => {
    let kecepatan = kecepatanAwal;
    let jarak = 0;

    const arrMulai = [];
    const arrSelesai = [];
    let tempMulai = '';
    let tempSelesai = '';
    let x = 0;

    // konversi hh:mm:ss menjadi satuan detik
    for (let i = 0; i < jamMulai.length; i++) {
        tempMulai += jamMulai[i];
        tempSelesai += jamSelesai[i];
        if (jamMulai[i] === ':' || i === jamMulai.length - 1) {
            arrMulai[x] = parseInt(tempMulai);
            arrSelesai[x] = parseInt(tempSelesai);
            tempMulai = '';
            tempSelesai = '';
            x++;
        }
    }

    // detik = h*3600 + m*60 + s
    let detikMulai = (arrMulai[0] * 3600) + (arrMulai[1] * 60) + arrMulai[2];
    let detikSelesai = (arrSelesai[0] * 3600) + (arrSelesai[1] * 60) + arrSelesai[2];

    // JARAK setelah 5 menit
    kecepatan += 2;
    waktu = 5 * 60;
    jarak += waktu * kecepatan;

    detikMulai += waktu;

    // JARAK setiap 10 menit berikutnya dan kecepatan bertambah 1
    while (detikMulai <= detikSelesai) {
        kecepatan += 1;
        waktu = 10 * 60;
        jarak += waktu * kecepatan;

        detikMulai += waktu;
    }

    // JARAK setelah dikurangi waktu mulai melebihi waktu selesai 
    // (karena kondisi looping terakhir detikMulai > detikSelesai)
    waktu = detikMulai - detikSelesai;
    jarak -= waktu * kecepatan;

    return jarak;
}