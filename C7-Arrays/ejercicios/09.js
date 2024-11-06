function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:

   // Genera un índice aleatorio entre 0 y la longitud del array - 1
   let i = Math.floor(Math.random() * array.length);
   
   // Devuelve el elemento en el índice aleatorio
   return array[i];


}

module.exports = obtenerElementoAleatorio;
