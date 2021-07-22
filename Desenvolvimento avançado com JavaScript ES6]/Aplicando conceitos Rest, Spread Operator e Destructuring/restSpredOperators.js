// Modo antigo
function sum(a, b) {
  return a + b;
}
console.log(sum(5, 10));
 
// Modo não normal de usar argumentos 

function sum1(a, b) {
  console.log(arguments); // e o proto dele e object.
  return a + b;
}
console.log(sum1(5, 7, 10 ,48));

// Modo normal de usar argumentos 

function som2(a,b){
  var value = 0;
  
  for (var i = 0; i<arguments.length;i++){ // Os arguments dentro da função, são todos os argumento da função.
    value += arguments[i];
  }
  return value;
}
console.log(som2(2,3,3,4,5));

//ES6 - REST OPERATOR (...parametros) 

function sumA(...args) {
  console.log(args); // diferendo do arguments ele retonar o proto como array.
}
console.log(sumA(5, 7, 10 ,48));

// Maneira mais "composta"

const newSoma = (...param) => param.reduce((acc,value) => acc + value,0);
console.log(newSoma(2,3,3,4,5));

// transforma o resto em array.

const sumAgain = (a, b, ...rest) =>{ 
  console.log(a, b, rest);
}
console.log(sumAgain(2,3,3,4,5));

//ES6 - SPRED OPERATOR (...parametros) ele pega a todos os itens do array e transfoma em parâmetros.

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sumB = (...rest) => {
  return multiply(...rest);
};
console.log(sumB(2,3,3,4,5));

// Pode ser usado em strings, arrays, objects e objetos iteraveis.

// Strings

const str = "Oi Júlia"

function logArgs(...args) {
  console.log(args);
}

logArgs(...str);

// Arrays

const arr = [1,2,3,4];


function logArgsB(a, b, c, d) {
  console.log(a, b, c, d);
}

logArgsB(...arr);

// se usa também para construir um array

const arr2 = [...arr, 5, 6 ,7];

console.log(arr2);


// Objetos iteraveis

const obj = {
  test: 123
};

const obj2 = {
   ...obj,
   test: 456
}

console.log(obj2);

const objA = {
  test:123,
  subObj: {
    test:123
  }
};

//const objB = {...obj}; //quando executa o spred sem especificar, o ponteiro do subObj permanece o mesmo
const objB = {...obj, 
  subObj: {...obj.subObj}}; //para não alterar a segunda propriedade, cuidado com clone

console.log(objA);

console.log('---------------------');

objB.test = 456;

objB.subObj.test = 456;

console.log(objA);

console.log(objB);
