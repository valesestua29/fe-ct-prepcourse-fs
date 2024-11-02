function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

  // Los números menores que 2 no son primos.
  if (numero < 2) return false;

  // Verificamos si "numero" tiene algún divisor desde 2 hasta su raíz cuadrada.
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false; 
    }
  }

  return true;

}

module.exports = esNumeroPrimo;
