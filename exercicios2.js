/*
2) O IMC - Indicede massa Corporal é um critério da Organização de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabora um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo

IMC em adultos Condição:

- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso Normal;
- Entre 25 e 30 acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade Grave;

*/

let peso = 69.5;
let altura = 1.64;

let imc = peso / (altura * altura);
console.log(imc.toFixed(2));

if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Peso Normal");
} else if (imc >= 25 && imc < 30) {
  console.log("Acima do peso");
} else if (imc >= 30 && imc < 40) {
  console.log("Obeso");
} else {
  console.log("Obesidade Grave");
}
