var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = true; //Nomor 1b mengubah false menjadi true supaya kondisi if berjalan
let lengkap_arr = [a, b, nama, terdaftar];
let asal = "Indonesia"; //Memindahkan variabel asal keluar function supaya bisa digunakan di luar function

function perkenalan(){
    return console.log(
        "perkenalkan nama saya " +
        nama +
        " nomor urut " + 
        a + 
        " sekarang sedang mengikuti " +
        b + 
        " berasal dari " + 
        asal
    );
}

if (terdaftar === true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
// nama = b; --> Menghapus line 26 karena tidak bisa mengganti nilai dari const
console.log("array = ", lengkap_arr[2]); //Nomor 1a mengambil array index 2
console.log("asal diakses = " + asal);
console.log("a adalah = " + a);
console.log("b adalah = " + b);
perkenalan(); //Nomor 1c memanggil function
