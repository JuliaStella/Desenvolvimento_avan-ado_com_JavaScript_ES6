'use strict';

// Symbols, sempre são únicos por mais iguais que pareçam;

const uniqueId = Symbol('Hi Lorena');

const uniqueId2 = Symbol('Hi, are you ?');

console.log(typeof uniqueId,uniqueId);
console.log(typeof uniqueId2,uniqueId2);
console.log(uniqueId === uniqueId2);

/**
 * Pode ser usado o symbol para construir um modulo de segurança qual só acessa quem possui o symbol
 * Object.getOwnPropertySymbols(obj) //retorna o symbol
 * Object.keys(obj) //sem retorno, symbol não aparece com chave
 * Utilização: dar comportamento de methodos Symbol para Objetos que não as possui...
 */

const obj = {
  [uniqueId] : 'Hello'
};
console.log(obj);

/** Nell known symbols : são algumas das propriedades que se podem dar ao symbols.

 * Symbol.iterator
 * Symbol.split
 * Symbol.toStringTag
 */

// Symbol.iterator

const arr = [1,2,3,4];

const itr = arr[Symbol.iterator](); // O interador é uma interface para você consumir passo a passo uma lista/estrutura de dados.

do{
  let { value, done : stop } = itr.next();
  console.log(value,"=>",stop);
  if(stop) break;
}while(true);

for(let value of arr){
  console.log(value);
}


const objetoSimples = {
  values: [1,2,3,4,5],
  [Symbol.iterator](){
    let i = 0;
    return {
      next: () => {
        i++;
        return {
          value: this.values[i-1],
          done: i > this.values.length
        };
      }
    };
  }
};

const itr2 = objetoSimples[Symbol.iterator]();
do{
  let { value, done : stop } = itr2.next();
  console.log(value,"=>",stop);
  if(stop) break;
}while(true);

for(let value of objetoSimples){
  console.log(value);
}
const arr3 = [...objetoSimples];
console.log(arr3);