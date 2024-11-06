function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:

  let array2 = [];
  
  for (let i=(array.length)-1; i>=0 ; i--){ 
    array2.push(array[i]);
  }

  return array2;

}

module.exports = invertirArray;
