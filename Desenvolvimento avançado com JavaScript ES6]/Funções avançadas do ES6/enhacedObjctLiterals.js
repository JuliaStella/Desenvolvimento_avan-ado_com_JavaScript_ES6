// Maneira antiga

var prop1 = 'Stela';

var obj = {
    prop1: prop1
};

console.log(obj);

// Atualmente

 
function method1() {
    console.log('method called');
}

var obj1 = {
    method1
};

obj1.method1();
 

// Outra formar

var obj2 = {
    sum: function sum(a, b) {
        return a + b;
    }
};

console.log(obj2.sum(3, 2));

// Encurtando o exemplo acima

var obj3 = {
    sum(a, b) {
        return a + b;
    }
};

console.log(obj3.sum(2, 10));


// Maneira antiga

var propName = 'test';

var obj4 = {};

obj4[propName] = 'prop value';

console.log(obj4);

// Atualmente

var propName1 = 'test';

var obj5 = {
    [propName1]: 'prop value' // Diminui bastante o tamanho do código.
};

console.log(obj5);




















