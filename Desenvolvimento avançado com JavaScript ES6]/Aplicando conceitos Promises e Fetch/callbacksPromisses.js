// Callback

function doSomething(callback) {
  setTimeout(function() {
    // did something/fez algo
    callback('Nada')
  }, 1000);
}

function doOtherThing(callback) {
  setTimeout(function() {
    // did other thing//fez outra coisa
    callback('Será mesmo')
  }, 1000);
}

function doAll() { // sendo que essa função acaba ficando muito complicada.

  try{ 
doSomething(function (data) {
    var processedData = data.split('');
  try{ // acaba filtrando
    doOtherThing(function (data2) {
    var processedData2 = data2.split('');
  try { 
    setTimeout(function(data) {
      console.log(processedData, processedData2);
    }, 1000);

    } catch (err){}
  });
  
  } catch (err){}

 });

 } catch (err){}
}

doAll();

// Fazer novamente o código acima com promisses, "fica mais facil".

const facaAlgoPromisse = () => new Promise((resolve,reject)=> {
  //throw new Error ('algo promisse esta errado...');
  setTimeout(function(){
    resolve('Nada');
  },1100);
});
  
const facaOutroPromisse = () => new Promise((resolve,reject)=> {
  //throw new Error ('algo promisse esta errado...');
  setTimeout(function(){
    resolve('Será mesmo');
  },1000);
});

// Processamento sequencial

facaAlgoPromisse()
.then(data => {console.log(data.split('')); return facaOutroPromisse()})
.then(data => console.log(data.split('')))
.catch(error => console.log('ixi deu erro...: ', error));


/* OBS: uma promisse pode ter três status

 - Pending: quando estar pendente(em execução);
 - Fulfilled:
 - Rejected:

 */

// Processamento paralelo

Promise.all([facaAlgoPromisse(),facaOutroPromisse()])
.then((data) => {
  console.log("==============================================");
  data.forEach(dado => console.log(dado.split('')));
})
.catch(error => console.log('ixi deu erro...: ', error));

// processamento concorrente, quem resolver primeiro retorna os valores

Promise.race([facaAlgoPromisse(),facaOutroPromisse()])
.then((data) => {
  console.log("==============================================");
  console.log(data);
})
.catch(error => console.log('ixi deu erro...: ', error));

// Calback


function facaAlgo(callback){
  setTimeout(function(){
    callback('Primeiro dado');
  },1000);
}

function facaOutroAlgo(callback){
  setTimeout(function(){
    callback('Segundo dado');
  },1000);
}

function execucao(){
  try {
    facaAlgo(function(data){
      console.log("==============================================");
      var processar = data.split('');
      
      try {
        facaOutroAlgo(function(data){
          var processar2 = data.split('');
          try {
            setTimeout(function(){
              console.log('foi',processar,processar2);
            },1000);
          } catch (error) {
            console.log(error,'3');
          }
        });
      } catch (error) {
        console.log(error,'2');
      }
    });
  } catch (error) {
    console.log(error,'1');
  }
}
execucao();