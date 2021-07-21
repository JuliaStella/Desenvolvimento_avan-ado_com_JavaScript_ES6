//Antigamente...
var arr = ['Apple','Banana','Orange',['tomato']];
var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

var arr2 = [{nome:'Apple',type:'fruit',color:['green','red']},{nome:'Banana',type:'fruit',color:['green','yellow']},{nome:'Orange',type:'fruit',color:['green','orange']},{nome:'tomato',type:'fruit',color:'red'}];
var fruit1 = arr2[0].nome;
const {nome} = arr2[2];
console.log(fruit1,nome);

//Destructuring Assignment
const [apple2, banana2, orange2, [tomato2]] = ['Apple','Banana','Orange',['tomato']];

const obj = {
  name: 'Tomas Edson',
  props:{
    age:26,
    colors:['black','blue'] //atenção ao misturar objeto com array
  }
}
const {name} = obj;
const {name:name2} = obj;
const { props :{ age: age2 } } = obj;
const { props :{ colors: [c1] } } = obj; //atenção ao misturar objeto com array

console.log(apple,apple2);
console.log(tomato,tomato2);
console.log(obj.name,name,name2);
console.log(age2);
console.log(c1);

const somaLog = ({a,b}) => console.log(`resultado da soma de {a:${a}, b:${b}} é: ${a+b}`);
somaLog({a:3,b:10}); //chamando a função de soma passando um objeto como parametro