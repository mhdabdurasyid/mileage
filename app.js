const jarak = require('./src/function');

const jamMulai = '10:12:21';
const jamSelesai = '12:00:00';
const kecepatanAwal = 6;

// JARAK dalam satuan m
console.log(`Jarak tempuh = ${jarak.hitung(jamMulai, jamSelesai, kecepatanAwal)} m`);

// JARAK dalam satuan km
const jarakKM = jarak.hitung(jamMulai, jamSelesai, kecepatanAwal) / 1000;
console.log(`Jarak tempuh = ${jarakKM} km`);