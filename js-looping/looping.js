/*
1. Kita sudah mengetahui bahwa banyaknya user maksimal adalah 100.
Buat sebuah program yang menampilkan teks ‘User ke - 1 … User ke - 100’ pada setiap baris di halaman HTML.
Lakukan FOR LOOP pada Javascript.
	document.write
*/

// for (let i = 1; i <= 100; i++) {
//   document.write(`${i} <br>`);
// }

/*
2. Lakukan pengulangan menggunakan FOR LOOP untuk melakukan penambahan nilai sebanyak 10 kali.
Nilai awal = 0
Pengulangan = 10 kali
Nilai awal ditambah 2 setiap pengulangan
Tampilan hasil penambahan pada setiap pengulangan

0 2 4 6 8 10 12 14 16 18
*/
// for (let nilaiAwal = 0; nilaiAwal < 20; nilaiAwal = nilaiAwal + 2) {
//   console.log(nilaiAwal);
// }

/* 
3. Lakukan pengulangan dengan FOR LOOP yang melakukan iterasi dari 0..20.
Setiap iterasi/pengulangan lakukan pengecekan apakah nilai tersebut ganjil atau genap.
Tampilkan keterangan ganjil dan genap pada sebuah nilai setiap pengulangan

Modulus, dan if
*/
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(`${i} Ganjil`);
//   } else {
//     console.log(`${i} Genap`);
//   }
// }

/*
4. Tampilkan sebuah Konfirmasi Pop Up kepada user menggunakan confirm();
Berikan teks ‘Apakah anda mau mengulang’ pada box confirm
Jika user memilih ‘OK’ maka program akan terus menampilan pop up yang sama
Jika user memilih ‘Cancel’ maka program akan menampilkan teks ‘Perulangan sudah dilakukan sebanyak …(jumlah klik OK yang dilakukan user)

Variable isinya confirm
Variable count 
While didalemnya ngecek confirm
Setiap click ngitung count
Count++ setiap di klik
*/

// let userAction = confirm("Apakah anda mau mengulang");
// let count = 0;
// while (userAction == true) {
//   count++;
//   userAction = confirm("Apakah anda mau mengulang");
// }
// alert(`Perulangan sudah dilakukan sebanyak ${count}`);

/*
5. Tampilkan prompt() untuk meminta inputan dari user. Tampilan teks ‘Sebutkan kepanjangan dari nama IB (Impact Byte)?’
Lakukan pengecekan apakah jawaban dari user sudah benar
Jika benar, tampilkan alert ‘Selamat jawaban kamu benar’
Jika salah, lakukan pengulangan untuk menampilkan prompt() yg sama hingga jawaban dari user benar
	
Variable isinya prompt
While
Prompt
Misal bener, break
*/
// let inputUser = prompt("Sebutkan kepanjangan dari nama IB ?");
// while (inputUser) {
//   switch (inputUser) {
//     case "Impact Byte":
//       alert("Selamat jawaban kamu benar");
//       break;
//     default:
//       inputUser = prompt("Sebutkan kepanjangan dari nama IB ?");
//   }
// }
