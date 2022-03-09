# 08 Javascript Refreshment

## Resume

Dalam materi ini dipelajari:
1. Apa itu Javascript
2. Class, Method, Function, Asynchronous Javascript
3. Javascript Document Object Model (DOM)

### Apa itu Javascript

Javascript adalah bahasa pemrograman yang High-level, Scripting, Untype dan Interpreted. Javascript dapat digunakan pada website dengan menghubungkannya ke HTML.

Javascript tidak perlu menentukan tipe data dalam mendeklrasaikan variabel. Javascript memiliki 3 cara dalam mendeklarasikan variabelnya yaitu var, let dan const. Javascript dapat menampilkan hasil outputnya pada command line dengan menggunakan kode console.log();

Dalam menentukan letak variabel di dalam Javascript, terdapat sesuatu yang dipanggil dengan scoping. Scoping adalah ruang lingkup variabel. Scoping terdiri dari 3, global scope yang bisa digunakan dalam seluruh kode, function scope yang bisa digunakan dalam function dan block scope yang bisa digunakan dalam kurung kurawal {}.

### Function, Class, Synchronous dan Asynchronous Javascript

Function adalah sebuah serangkaian kode yang dapat digunakan berkali-kali. Cara mendeklarasikan function terbagi menjadi dua, yaitu dengan menggunakan keyword function dan arrow function. Cara memanggil function juga hanya perlu memanggil nama functionnya saja. Function memiliki parameter yang dapat digunakan di dalam functionnya. Selain itu, function dapat mengembalikan nilai dengan menggunakan keyword return. Berikut adalah contoh function.

``
function contoh(param1) {
    return param1;
}
contoh(param1);
``

Class adalah suatu prototype terhadap object yang akan dibuat. Class terdiri dari method dan attribute. Method adalah fungsi yang dapat digunakan di dalam class, sedangkan attribute adalah variabel yang membentuk suatu class. Di dalam class, terdapat juga constructor function. Constructor function merupakan suatu function yang akan otomatis berjalan ketika kita menginisialisasi atau membuat suatu object dari class. Untuk menginisialisasi object dari class dapat digunakan keyword new.

Synchronous Javascript merupakan cara menjalankan kode sesuai dengan urutan kode yang telah dituliskan. Sedangkan Asynchoronous Javascript merupakan cara menjalankan kode tidak sesuai urutan melainkan dengan waktu proses. Pada asynchronous banyak keyword yang dapat digunakan, seperti Promise, async, await, then, catch dan finally.

### Javascript Document Object Model (DOM)

DOM adalah API pada HTML yang menggambarkan halaman web menjadi sebuah objek. DOM dapat digunakan untuk mengubah tampilan dengan menggunakan javascript. Ada beberapa hal yang dapat dilakukan dengan menggunakan DOM, yaitu.

1. DOM Selection Method
DOM selection method digunakan untuk mengambil elemen HTML yang akan diubah. DOM selection method dapat memilih elemen HTML berdasarkan id, tag name, class. Salah satu method yang dapat digunakan adalah querySelector().

2. DOM Manipulation
DOM manipulation sebuah cara yang digunakan untuk mengubah konten ataupun styling terhadap elemen HTML yang telah kita pilih. Ada beberapa hal yang dapat diubah, yaitu isi dari tag html menggunakan innerHTML, merubah style css dengan menggunakan style, mengubah attribute dengan setAttribute dan mengubah class dengan menggunakan classList.add() ataupun classList.remove().

3. DOM Event
DOM event adalah sebuah trigger yang digunakan supaya kode javascript yang telah kita buat dapat berjalan. Ada beberapa jenis DOM event, yaitu onclick, onchange, onblur, onmouseover dan masih banyak lagi. Jenis DOM event bisa melalui mouse ataupun keyboard.

## Praktikum

Penjelasan mengenai praktikum terdapat pada file berikut.

[Praktikum](./praktikum/readme.md)