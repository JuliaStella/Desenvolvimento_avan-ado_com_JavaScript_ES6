class CustomError extends Error{
  constructor({message,data}){
    super(message);
    this.data = data;
  }
}


try {
  //console.log(name); //ERROR: Cannot access 'name' before initialization
  //const name = 'Joao canabraba';
  throw new CustomError({message: 'Erro Customizado', data:{type:'ixi... deu erro'}})
} catch (error) {
  console.log(error);
}finally{
  console.log('sempre executa...');
}

console.log('nao e executado por conta do erro, se não for tratado pelo bloco try...')