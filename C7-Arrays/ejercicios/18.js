function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:


  let suma=0, promedio=0, longitud=resultadosTest.length;
  
  for (let i=0; i<resultadosTest.length; i++){
    
    suma=suma+resultadosTest[i];

  }
  
  promedio = suma / longitud ;

  return promedio;


}

module.exports = promedioResultadosTest;
