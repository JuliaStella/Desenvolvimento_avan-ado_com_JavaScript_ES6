/**
 * fetch, api para realizar requisições utilizando promisses
 * só vai acusar erros no catch se for erros de rede.
 * caso contrario não cai no catch...
 */ 
//fetch('./data1.json',{method: 'POST',headers: '',body: JSON.stringify(data) });
fetch('./data.json')
.then(responseStream =>{
    if (responseStream.status === 200){
      console.log(responseStream);
      // return responseStream.json().then(data=>{console.log(data);});
      return responseStream.json();
    }else{
      throw new Error('num tem nada ai pra processar,,,');
    }
  })
  .then(data=>{
    console.log(data);
  })
.catch(error => console.log('ixi deu erro...: ', error));

//ES7 - Async / Await

const simpleFunc2 = async () => new Promise((resolve, reject) => {
  setTimeout(() =>{
    resolve(54321);
  },3000);
});

const simpleFunc = async () => {
const data = await simpleFunc2();
  //throw new Error('Oh NO');
  return data;
};

simpleFunc().then(data => console.log(data)).catch(error => console.log('ixi deu erro...: ', error));


//EventEmitter - NODE
const EventEmitter = require('events');

const emitter = new EventEmitter();
emitter.on('User logged',data =>{ console.log(data);})
emitter.emit('User logged',{user:'teste'});

class Users extends EventEmitter{
  userLogger(data){
    setTimeout(()=>{
      this.emit('User logged',data);
    },2000);
  };
};


const teste2 = new Users();
teste2.on('User logged',data =>{ console.log(data);})
// teste2.once('User logged',data =>{ console.log(data);}) //1 vez apenas emite
teste2.userLogger({user:'teste2'});
teste2.userLogger({user:'teste3'});


//EventTarget => similar para uso em Browsers