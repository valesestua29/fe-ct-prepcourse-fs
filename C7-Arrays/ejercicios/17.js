function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:



  let valorFinal=0;

  for (let i=0; i<arrayOfNums.length; i++){

    valorFinal = valorFinal + arrayOfNums[i];
  }


  return valorFinal;


}

module.exports = agregarNumeros;
