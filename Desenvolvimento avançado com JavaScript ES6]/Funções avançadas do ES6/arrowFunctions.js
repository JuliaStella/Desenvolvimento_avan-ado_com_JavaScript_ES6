/* --ARROW FUNCTION--

Uma expressão arrow function possui 
uma sintaxe mais curta quando comparada a uma 
expressão de função (function expression) e não 
tem seu próprio this, arguments, super ou new.target. 
  Estas expressões de funções são melhor aplicadas para 
funções que não sejam métodos, e elas não podem 
ser usadas como construtoras (constructors).
*/

// Modo antigo de fazer função

function log(value) {
  console.log(value);
}
log("teste");

// Função anônima, pois atribuía a uma variável

var soma = function (a, b) {
  return a + b;
}
console.log(soma(2, 3));

// Arrow functions 

var sum = (a, b) => a + b; // Não precisa colocar a palavra function.

console.log(sum(5, 15));

// Agora se for colocar variáveis, if ... . É preciso colocar as chaves.

var sum = (a, b) => {
  var x = 10;

  if (a > b) {
  }

  return a + b;
}
console.log(sum(5, 15));

// Se for colocar um argumento, não precisa colocar parentes

var sum = a => a;

console.log(sum(5, 15));

// Objeto com o return implícito

var createObj = () => ({ test: 123 });

console.log(createObj());

// Função construtora 

function Car() {
  this.foo = 'bar'
}

console.log(new Car()); // OBS: Não é possível fazer isso com arrow function.

// Como não é possível fazer também isso na arrow function 

log('teste');

// OBS: forma antinga

function log(value) {
  console.log(value);
}


// Contexto de invocação

var obj = {
  showCotext: function showCotext() {
    this.log('teste');
  
 setTimeout(function() { // Exemplo de invocar esse método apos um segundo;
   this.log('alter 100ms');
}, 1000); // porém como é que tem o this, se ela não aceita?

  },
   log: function log(value) {
    console.log(value);
  }
};

obj.showCotext();

// Continuação do exemplo

var obj = {
  showCotext: function showCotext() {
    this.log('teste');
  
 setTimeout(function() { // 
   console.log(this);
}.bind(this), 1000); // Permite fixar o contexto da função.
// Porém era complicado para os programadores lembrarem. 
  },
   log: function log(value) {
    console.log(value);
  }
};

obj.showCotext();
 
// Com a introdução do arrow function

var obj = {
  showCotext: function showCotext() {
    this.log('teste');
  
    // this = obj

 setTimeout(() => { // 
   this.log('alter 100ms');
}, 1000); // 

  },
   log: function log(value) {
    console.log(value);
  }
};

obj.showCotext();

