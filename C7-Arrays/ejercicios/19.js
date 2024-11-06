function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:

  // Si no hay argumentos, devolvemos 0
  if (arguments.length == 0) return 0;

  // Si hay solo un argumento, lo devolvemos directamente
  if (arguments.length == 1) return arguments[0];

  // Inicializamos el producto con el primer argumento
  let producto = 1;

  // Recorremos todos los argumentos y los multiplicamos
  for (let i = 0; i < arguments.length; i++) {
    producto *= arguments[i];
  }

  return producto;


}

module.exports = multiplicarArgumentos;
