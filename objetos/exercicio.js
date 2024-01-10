/*
    1- Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustivel por quilometro rodado.
    Crie um método que dado a quantidade de quilometros e o preco do combustivel nos de o valor gasto em reais para realizar este percurso.

*/

class Carro {
  constructor(marca, cor, mediaPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.mediaPorKm = mediaPorKm;
  }
  calcularGastoMedio(distanciaEmKm, precoCombustivel) {
    return distanciaEmKm * this.mediaPorKm * precoCombustivel;
  }
}

const mcqueen = new Carro("Corvette", "vermelho", 1 / 12);
console.log(mcqueen);
console.log(mcqueen.calcularGastoMedio(350, 5.56));
const BMW320i = new Carro("BMW", "prata", 1 / 9);
console.log(BMW320i);
console.log(BMW320i.calcularGastoMedio(350, 5.56));
