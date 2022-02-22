# 02 Version Control and Branch Management (Git)

## Resume

Dalam materi ini dipelajari:
1. Perkenalan Version Control System
2. Penyimpanan pada Github
3. Branch dan Merge pada Github

### Perkenalan Version Control System
Sebuah control system yang digunakan untuk mengatur versi dari source code program, salah satu version control system yang sering digunakan oleh developer adalah Github. Selain itu, version control system juga dapat digunakan bagi software developer untuk membuat program secara bersama-sama

### Penyimpanan pada Github
Github memiliki folder yang dapat digunakan untuk menyimpan software yang sedang dikembangkan, folder itu biasa disebut dengan nama repository. Github memiliki 3 tahapan dalam penyimpanannya, pertama adalah working directory, lalu staging area dan terakhir repository. Untuk memindahkan program dari working directory ke staging area, dapat digunakan fungsi git add. Untuk memindahkan dari staging area ke repository menggunakan fungsi git commit.

### Branch dan Merge pada Github
Github memiliki branch yang artinya cabang dari program-program yang sudah dibuat. Branch dalam best practicenya terdapat 3, yaitu master, development dan feature (penambahan fitur). Branch dapat dibuat dengan menggunakan command git branch, dapat dihapus dengan menambah command -D. Selain itu, branch juga dapat digabungkan atau merge.

## Task

Pada task praktikum materi ini dilakukan pembuatan dan merge pada branch
1. Membuat repository baru dan memasukan project html sebagai master,
2. Membuat repository kedua untuk development,
3. Membuat repository ketiga dengan nama featureA untuk penambahan fitur, lalu dimerge dengan branch development,
4. Membuat repository keempat dengan nama featureB untuk penambahan fitur, lalu dimerge dengan branch development

Output
![screenshot-network](https://user-images.githubusercontent.com/59776144/155056369-683ab7f2-4a4c-4363-bca9-ab09b947cdd4.png)
