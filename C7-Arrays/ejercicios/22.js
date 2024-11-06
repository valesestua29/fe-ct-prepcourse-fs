function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

  let array2=[];

  for (let i = 0 ; i <=10 ; i++ ){

    let valor = i*6;

    array2.push(valor);

  }

  return array2;

}

module.exports = tablaDelSeis;
