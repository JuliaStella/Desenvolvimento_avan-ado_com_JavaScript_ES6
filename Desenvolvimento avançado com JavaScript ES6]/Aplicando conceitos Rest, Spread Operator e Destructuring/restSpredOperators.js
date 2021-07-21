'use strict';

//antigamente
function soma(a,b){
  var value = 0;
  for (var i = 0; i<arguments.length;i++){
    value += arguments[i];
  }
  return value;
}
console.log(soma(2,3,3,4,5));

//ES6 - REST OPERATOR (...parametros)

const newSoma = (...param) => param.reduce((acumulator,value) => acumulator + value,0);
console.log(newSoma(2,3,3,4,5));

//ES6 - SPRED OPERATOR (...parametros)
const arr1 = [1,2,3,4];
const arr2 = [...arr1, 5, 6 ,7];
console.log(arr2);

const obj = {
  test:123,
  subObj: {
    test:123
  }
};

//const obj2 = {...obj}; //quando executa o spred sem especificar, o ponteiro do subObj permanece o mesmo
const obj2 = {...obj, subObj: {...obj.subObj}}; //para não alterar a segunda propriedade, cuidado com clone
console.log(obj);
console.log(obj2);
console.log('---------------------');
obj2.test = 456;
obj2.subObj.test = 456;
console.log(obj);
console.log(obj2);
