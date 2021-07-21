//PROMISSES

const facaAlgoPromisse = () => new Promise((resolve,reject)=> {
  //throw new Error ('algo promisse esta errado...');
  setTimeout(function(){
    resolve('Primeiro dado Promisse');
  },1100);
});

const facaOutroPromisse = () => new Promise((resolve,reject)=> {
  //throw new Error ('algo promisse esta errado...');
  setTimeout(function(){
    resolve('Segundo dado Promisse');
  },1000);
});

//processamento sequencial
facaAlgoPromisse()
.then(data => {console.log(data.split('')); return facaOutroPromisse()})
.then(data => console.log(data.split('')))
.catch(error => console.log('ixi deu erro...: ', error));

//processamento paralelo
Promise.all([facaAlgoPromisse(),facaOutroPromisse()])
.then((data) => {
  console.log("==============================================");
  data.forEach(dado => console.log(dado.split('')));
})
.catch(error => console.log('ixi deu erro...: ', error));

//processamento concorrente, quem resolver primeiro retorna os valores
Promise.race([facaAlgoPromisse(),facaOutroPromisse()])
.then((data) => {
  console.log("==============================================");
  console.log(data);
})
.catch(error => console.log('ixi deu erro...: ', error));

//CALBACK


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