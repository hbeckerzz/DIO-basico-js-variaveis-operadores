//arrays - listas de conteudos
//listas são representadas por []

const alunos = [`Claudio`, "Henrique", "Josefa"];

alunos.push("Renan");
//adiciona em ultimo lugar um item
alunos.shift();
//remove o primeiro item
alunos.pop();
//remove o ultimo item
console.log(alunos);

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

console.log(notas.length);
//length = contar a quantidade de coisas dentro de uma array/lista