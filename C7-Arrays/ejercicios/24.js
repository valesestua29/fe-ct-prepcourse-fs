function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:

  
  let resultado = [];
  
  for (let i = 0; i < 10; i++) {
    
    if (i === 5 || num === 5 ) {
      continue; 
    }

    num += 2; 

    resultado.push(num);
  }

  return resultado;
}

module.exports = continueStatement;
