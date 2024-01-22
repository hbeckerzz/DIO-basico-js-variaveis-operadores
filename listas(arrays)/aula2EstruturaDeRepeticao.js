//const nome = "Vitor Johansen Guerra";

//for (let i = 0; i < nome.length; i++) {
//primeira parte = variavel de controle
//booleano, continuo até o limite
//soma até o limite
//console.log(nome[i]);
//}
const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(9);
notas.push(5);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  soma = soma + nota;
}
console.log(soma);
const media = soma / notas.length;
console.log(media);
