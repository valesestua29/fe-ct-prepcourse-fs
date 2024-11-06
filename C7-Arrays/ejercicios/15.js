function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  let mayor=array[0], indmayor=0;

  for (let i=0; i<array.length; i++){
    if(array[i]>mayor){
      mayor=array[i];
      indmayor=i;
    }
  }

  return indmayor;



}

module.exports = encontrarIndiceMayor;
