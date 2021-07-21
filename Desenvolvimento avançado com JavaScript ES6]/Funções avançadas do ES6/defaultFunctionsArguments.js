// Antigamete

function multiply(a, b) {
  return a * b;
}

console.log(multiply(5, 5));

// e se caso não tivesse um parâmetro

function multiply(a, b) {
  b = b || 1; // colocava um operador lógico e assim caso um segundo parâmetro.
  return a * b;
}

console.log(multiply(5));

// Seria um forma perigosa

var mult = function (a, b) {
  b = typeof b === 'undefined' ? 1 : b; // essa forma funciona mas fica complexo realizar as validações para tratamento dos parâmetros.
  return a * b;
}

console.log(mult(2)); // retorna NaN, pois falta um parametro

// Atual, garante uma forma padão

var mult2 = function (a = 2, b = a) { // utilizando o ES6 pode ser atribuido valor já na definição dos parâmetros
  return a * b;
}
console.log(mult2(undefined, 3)); // dessa forma gerar erro.
console.log(mult2());


// Lazy evaluation

function randomNumber() {
  console.log('gerando numero...');
  return Math.random() * 10;
}

var mult3 = function (a = randomNumber(), b = a) { //utilizando o ES6 pode ser atribuído valor já na definição dos parâmetros

  return a * b;
}
console.log(mult3());
console.log(mult3());
