function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:


  let valor;
  let array2 = [];

  for (let i=0; i<array.length; i++){
    
    valor=array[i]*i;
    array2.push(valor);

  }

  return array2;

}

module.exports = multiplicarElementosPorIndice;
