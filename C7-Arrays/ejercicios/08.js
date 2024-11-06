function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:


   for (let i = 0 ; i<array.length; i++){

      let valor=array[i];

      if (num==valor){
         return i;
      }

   }
   return -1;

}

module.exports = encontrarElemento;
