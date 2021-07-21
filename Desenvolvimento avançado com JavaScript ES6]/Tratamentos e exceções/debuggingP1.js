//mostrou o debug do webBrowser... ai ai ....
console.log('Black text');
console.warn('Yellow text with alert');
console.error('Erro: Xpto');

console.trace(); //saber onde está sendo executado o console.

console.group('meu Grupo');
console.log('Vai Curinthia');
console.log('Palmeiras ainda não tem mundial...')
console.groupEnd('meu Grupo');

console.time('LogTime');
setTimeout(()=>{
  console.timeEnd('LogTime')
},500);

console.table(['Jonas broder','musica de genero duvidoso']);
console.assert(1===0,'Ops, deu ruim');
console.log('%c styled log','color:blue;');