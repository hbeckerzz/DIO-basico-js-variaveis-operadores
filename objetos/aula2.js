class Pessoa {
  constructor(nome, idade, anoDeNascimento) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2023 - idade;
  }
  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    return;
  }
}
//classe é a definição, instancia é a ocorrencia, sendo assim as caracteristicas

function compararPessoas(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
  } else if (p2.idade > p1.idade) {
    console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
  } else {
    console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
  }
}
const henrique = new Pessoa("Henrique", 19);
const eduardo = new Pessoa("Eduardo", 25);

compararPessoas(henrique, eduardo);
