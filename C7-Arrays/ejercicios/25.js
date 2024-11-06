function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:


  let contador=0;

  for (let i = 0; i<numeros.length; i++){

    if(numeros[i]%2!=0){
      continue;
    }

    contador++;

  }

  return contador;

}

module.exports = contarParesConContinue;
