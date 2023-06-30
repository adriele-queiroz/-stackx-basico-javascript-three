// Soma dos números inteiros de 1 a n
function somaNumeros(n) {
  // Sua implementação aqui
  if (n ===1){
    return 1;
  } else {
    return n + somaNumeros (n - 1);
  }
}

// Verifica se um número é par
function ehPar(number) {
  // Sua implementação aqui
  if (number === 0) {
    return true;
  } else if  (number === 1){
    return false;
   } else {
    return ehPar(number - 2);
   }
}

function fibonacci(n) {
  // Sua implementação aqui
  if (n <= 1){
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

module.exports = { somaNumeros, ehPar, fibonacci };