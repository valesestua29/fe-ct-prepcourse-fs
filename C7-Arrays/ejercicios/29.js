function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:

  // Ordenar el array de menor a mayor 
  numeros.sort((a, b) => a - b);
  
  for (let i = 0; i < numeros.length - 1; i++) {

    //si el numero es distinto al valor de su posicion
    if (numeros[i + 1] !== numeros[i] + 1) {
      return numeros[i] + 1; 
    }
  }
  return null;


}

module.exports = encontrarNumeroFaltante;