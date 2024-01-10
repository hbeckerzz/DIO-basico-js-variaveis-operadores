const pessoa = {
  nome: "Henrique Santos Cardoso Becker",
  idade: 19,

  descrever: function () {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  },
};
//coleção dinamica de chaves, podendo colocar mais objetos em uma unica variavel, sendo direcionada a tal
//função dentro de objeto, chamado de método
pessoa.descrever = function () {
  console.log(`Meu nome é ${this.nome}`);
};
//para usar this é preciso colocar crase
pessoa.descrever();


//podesse incrementar mais objetos fazendo referencia a variavel com a denominação pós ponto, referindosse a chave
//nome.chave - chave sendo o nome do objeto e resultado designado
