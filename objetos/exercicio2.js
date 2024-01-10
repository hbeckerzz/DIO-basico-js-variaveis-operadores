/*

    2) Crie uma classe para representar pessoas.
    para cada pessoa teremos os atributos nome, peso, altura
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura))
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC;

    */

class Pessoa {
  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }
  calcularIMC() {
    return this.peso / (this.altura * this.altura);
  }
  classificarIMC() {
    const imc = this.calcularIMC();
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
      return "Peso Normal";
    } else if (imc >= 25 && imc < 30) {
      return "Acima do peso";
    } else if (imc >= 30 && imc < 40) {
      return "Obeso";
    } else {
      return "Obesidade Grave";
    }
  }
}
const henrique = new Pessoa(`Henrique`, 72, 1.81);
const jose = new Pessoa("José", 70, 1.75);
console.log(jose.classificarIMC());
console.log(henrique.classificarIMC());
