function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  let array2=[];
  let valor;

  for (let i=0; i<array.length; i++){

    if(array[i]%2==0){
      valor = array[i];

      array2.push(valor);
    }

  }

  return array2;

}

module.exports = filtrarNumerosPares;
