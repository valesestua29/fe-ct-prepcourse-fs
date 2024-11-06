function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:

  let array2=[];

  for(let i = 0; i<array.length ; i++){

    array2.push(array[i]*2);
    
  }

  return array2


}

module.exports = duplicarElementos;
