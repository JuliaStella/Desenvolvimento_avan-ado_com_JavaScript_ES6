'use strict';
 
 // Generators:  pode gerar e construir a interface de geração do objetos.
 
function* hello(){ // o * influência nisto
  console.log('Hello');
  yield 1; // consegue pausar e execultar em partes
  console.log('From');
  yield 2;
  console.log('Function');

  const valor = yield 3;
  console.log(valor);
}

const it = hello();

console.log(it.next()); // faz básicamnte a mesma coisa, consegue pausar e execultar em partes
console.log(it.next());
console.log(it.next());
console.log(it.next('vlr Outside'));


function* naturalNumbers(){
  let number = 0;

  while(true){
    let res = yield number;
    number++;
    if (res){
      console.log(`parando em ${number}`);
      break;
    }
  }
}

const it2 = naturalNumbers();
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next(true));
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());


const objetoGenerator = {
  values: [1,2,3,4,5],
  *[Symbol.iterator](){
    for (let i = 0; i < this.values.length; i++) {
      yield this.values[i]
    }
  }
};
for(let value of objetoGenerator){
  console.log(value);
}

// pode também usar o generators como uma forma de construir interadores.