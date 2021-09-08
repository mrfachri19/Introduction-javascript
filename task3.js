let printSegitiga = 5;
if (typeof (printSegitiga) == 'number' && printSegitiga > 0) {
  for(let i = printSegitiga; i >=  0; i--){
      let a = '';
    for(let j = 1; j <= i; j++){
        a += j;    
    } 
  console.log(a);
  } 
}else {
console.log('bukan angka');
}
