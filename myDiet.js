// Create function maintenaceCalorie untuk menghitung kalori hairan user, input berupa data diri user dalam bentuk object.
// rumus menghitung kalori harian
// Untuk laki-laki: 66,5 + (13,75 x berat badan dalam kilogram) + (5,003 x tinggi badan dalam cm) – (6,75 x usia)
// Untuk wanita: 655,1 + (9,563 x berat badan dalam kilogram) + (1,850 x tinggi badan dalam cm) – (4,676 x usia)

function maintenaceCalorie(user) {
    //your code here
}

// angka kalori harian user .

// !======================================================
// Hitung total kalori yang dikosumsi oleh user pada function calorieConsume, dengan input berupa makanan yang dikonsumsi oleh user, inputan berupa objet. dan hasil output nya adalah jumlah kalori bertipe data number
function calorieConsume(makanan) {
    let db_makanan = [
        { nama: "Bubur Ayam", calorie: 200 },
        { nama: "Bubur Sum-Sum", calorie: 178 },
        { nama: "Sate Padang", calorie: 466 },
        { nama: "Nasi Uduk", calorie: 506 },
        { nama: "Nasi Padang", calorie: 500 },
        { nama: "Nasi Goreng", calorie: 267 },
        { nama: "Mie Instan", calorie: 168 },
        { nama: "Mie Goreng", calorie: 211 },
        { nama: "Gado-Gado", calorie: 295 },
        { nama: "Siomay", calorie: 361 },
        // { nama: "", calorie: 211 }, lanjutin kalo ada tambahan
    ];
    //your code here
}

// !======================================================
/* panggil sub function sebelumnya untuk di proses pada funtion dietku. 
jika kalori yang dikonsumsi lebih kecil dari pada kalori maintenance/harian. maka tamplikan
"SELAMAT, KAMU BERHASIL DIET HARI INI"
jika tidak (sebaliknya) , maka tampilkan 
"KAMU MELEBIHI BATAS KALORI HARIAN KAMU, YUK LEBIH KONSISTEN LAGI"
*/
function dietku(user, makanan) {
    //your code here
}

let user = {
    nama: "padila",
    gender: "pria",
    umur: 25,
    berat: 64,
};

const makanan = {
    makanPagi: "Bubur ayam",
    makanSiang: "Nasi padang",
    makanMalam: "Nasi goreng",
};

// atau
// let user1 = {
//     nama: "padila",
//     gender: "pria",
//     umur: 25,
//     berat: 64,
//     makanan: {
//         makanPagi: "Bubur ayam",
//         makanSiang: "Nasi padang",
//         makanMalam: "Nasi goreng",
//     },
// };
