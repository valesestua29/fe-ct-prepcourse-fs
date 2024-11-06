function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  let array2=[];

  for (let i=0; i< array.length ; i++){

    array2.push(array[i].toUpperCase());
  }

  return array2;

}

module.exports = convertirStringAMayusculas;
