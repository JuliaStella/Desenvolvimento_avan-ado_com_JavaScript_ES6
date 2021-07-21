window.addEventListener('load', function () {
  console.log('start');
});



const obj = {
  prop1 : 'Curso DIO ES6'
};
console.log(obj);

//###=========================================###//
const prop1 = 'Curso DIO ES6'
const obj2 = {
  //prop1 : prop1 // quando o key é igual o value, não é necessario repetir com o ES6
  prop1
};
console.log(obj2);

//###=========================================###//
const method1 = (val) => console.log(val);
const obj3 = {
  method1
};
obj3.method1("loucura isso meu...");
obj3.method1("+++++++++++++++++++++++++++++++");

//###=========================================###//

const calc1 = {
  soma : function soma(a,b){
    return a + b;
  }
};

const calc2 = {
  soma(a,b){
    return a + b;
  }
};

const calc3 = {
  soma: (a,b) => (a + b),
  subt: (a,b) => (a - b),
  mult: (a,b) => (a * b),
  divs: (a,b) => (a / b),
  rest: (a,b) => (a % b)
};

console.log('3 + 2 =',calc1.soma(3,2));
console.log('3 + 2 =',calc2.soma(3,2));
console.log('3 + 2 =',calc3.soma(3,2));
console.log('3 - 2 =',calc3.subt(3,2));
console.log('3 * 2 =',calc3.mult(3,2));
console.log('3 / 2 =',calc3.divs(3,2));
console.log('3 % 2 =',calc3.rest(3,2));
console.log("+++++++++++++++++++++++++++++++");
//SEM ES6
var propName = 'teste';
var objTeste = [];
objTeste[propName + '01'] = 'propValue1';
console.log(objTeste);
//COM ES6
var objTeste2 = {
  [`${propName}02`] : 'propValue2'
};
console.log(objTeste2);