const { gets, print } = require("./funcoes-auxiliares");

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
  const numerosSorteado = gets();
  numerosSorteados.push(numerosSorteado);
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
  const numerosSorteado = numerosSorteados[i];
  if (numerosSorteado > maiorValor) {
    maiorValor = numerosSorteado;
  }
}

print(maiorValor);
/*
    Uma sala contem 5alunos e para cada aluno foi sorteado um número de 1 - 100.
    Faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior número sorteado.

    Dados de entrada:
    5
    50
    10
    98
    23

    Saída:
    98

*/
