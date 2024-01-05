//Faça um programa para calcular o valor de uma viagem.

//você terá 3 variáveis. Sendo elas:
//1 - Preço do etanol = fonte do google 3.64
//2 - Preço da gasolina = fonte do google 5.85
//3 - O tipo de combustível que está no seu carro = ford ka flex, vou usar os dois
//4 - Gasto médio de combustível do carro por KM = fonte google
//5 - Distância em KM da viagem = Da minha casa até ubatuba, 332km

//Imprima no console o valor que será gasto para realizar esta viagem.

const precoEtanol = 3.64;
const precoGasolina = 5.85;
const kmPorLitrosEtanol = 9.2;
const kmPorLitrosGasolina = 13.4;

const viagemEmKm = 332;

const gastoTotalEtanol = (viagemEmKm / kmPorLitrosEtanol) * precoEtanol;
const gastoTotalGasolina = (viagemEmKm / kmPorLitrosGasolina) * precoGasolina;

if (gastoTotalEtanol < gastoTotalGasolina) {
  console.log(gastoTotalEtanol);
} else console.log(gastoTotalGasolina);
