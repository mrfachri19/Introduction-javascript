const mtk = 80,
bIndonesia = 90,
bInggris = 89,
ipa = 69;
const total = mtk + bIndonesia + bInggris + ipa;
const nilaiRata2 = total / 4;
console.log(nilaiRata2);
 if ( nilaiRata2 <= 59  ){
   console.log('grade E');
 } else if ( nilaiRata2 <= 69 ){
   console.log('grade D');
 } else if ( nilaiRata2 <= 79  ){
   console.log('grade c');
 } else if ( nilaiRata2 <= 89 ){
   console.log('grade B');
 } else if ( nilaiRata2 <= 100 ){
   console.log('grade A');
 } else {
   console.log('semua nilai belom diisi');
 }