# Praktikum

## Problem 1 - Analysis

```
class user {
    var id;
    var username;
    var password;
}

class userservice {
    user[] users = [];

    user[] getallusers() {
        return users;
    }

    user getuserbyid(userid){
        return users.filter(userid);
    }
}
```

Berikut adalah code yang diberikan untuk dianalisis. Kode tersebut bertujuan untuk membuat class User dan class UserService. Class User berfungsi untuk menambahkan User berdasarkan attribut id, username dan password. Sedangkan class UserService berfungsi untuk mengelola class User yang telah dibuat. Kode tersebut tidak menggunakan kebiasaan penulisan yang disarankan. Ada beberapa kekurangan penulisan dalam kode tersebut, yaitu.

### 1. Penulisan class
Menurut aturan yang disarankan, untuk menuliskan class sebaiknya menggunakan PascalCase, pada kode ini masih menggunakan huruf kecil semua.

Selain itu, class yang dituliskan pada kode di atas tidak mempunyai constructor, sehingga tidak bisa menentukan nilai attributenya.

### 2. Penulisan Variabel
Dalam penamaan variabel, sebaiknya menggunakan camelCase.

Menurut aturan airbnb javascript style, dalam membuat variabel sebaiknya menggunakan let atau const. Namun, pada kasus ini karena membuat variabelnya di dalam class, maka harus menggunakan keyword this.

### 3. Penulisan Method
Dalam penamaan method, sebaiknya menggunakan camelCase. Selain itu, tidak perlu menuliskan kata "user" di depan methodnya, karena codenya tidak bisa berfungsi. Dalam mengembalikan nilai yang dihasilkan dari sebuah method, harus menggunakan keyword this.

### 4. Perbaikan Kode
Kode di atas apabila dicoba masih banyak terdapat error, serta kodenya belum berfungsi dengan seharusnya. Ada beberapa perbaikan yang dilakukan yaitu hal-hal yang telah disebutkan di atas dan memperbaiki method filternya.

Berikut adalah kode yang telah diperbaiki. 

[Problem 1](./problem1.js)

Apabila kode tersebut diuji dengan kode berikut.

```
const user1 = new User(1, "A", 123);
const user2 = new User(2, "B", 123);
const user3 = new User(3, "C", 123);
const user4 = new User(4, "D", 123);

userService = new UserService([user1, user2, user3, user4]);
console.log(userService.getAllUsers());
console.log(userService.getUserById(1));
```

Maka, output yang dihasilkan adalah sebagai berikut.

![Output Problem 1](./../screenshots/output-1.png)

## Problem 2 - Rewrite

```
class kendaraan {
    var totalroda = 0;
    var kecepatanperjam = 0;
}

class mobil extends kendaraan {
    void berjalan(){
        tambahkecepatan(10);
    }

    tambahkecepatan(var kecepatanbaru){
        kecepatanperjam = kecepatanperjam + kecepatanbaru;
    }
}

void main() {
    mobilcepatn = new mobil();
    mobilcepat.berjalan();
    mobilcepat.berjalan();
    mobilcepat.berjalan();

    mobillamban = new mobil();
    mobillamban.berjalan();
}
```

Pada problem 2, dilakukan perbaikan kode diatas. 

Dalam kode di atas ada beberapa perbaikan yang dilakukan, yaitu.
1. Melakukan penamaan class dengan PascalCase.
2. Melakukan penamaan variabel dan method dengan camelCase.
3. Membuat constructor untuk class Kendaraan dan Mobil.
4. Memberikan keyword this pada attribut class parent serta memberikan keyword super() untuk mewariskan atribut parent ke class yg diextends.
5. Menghilangkan keyword var di parameter yang ada pada method tambahKecepatan, karena menurut airbnb javascript style parameter tidak perlu keyword var.
6. Menggunakan operator addition assignment (+=) pada method tambahKecepatan.
7. Mengganti void main() menjadi function main(), karena main() disini hanya berfungsi sebagai function biasa. Dalam Javascript sebenarnya tidak ada main() seperti bahasa C atau Java.

Berikut ini adalah hasil perbaikan kode problem 2.

[Problem 2](./problem2.js)

Outputnya adalah sebagai berikut

![Output Problem 2](./../screenshots/output-2.png)



