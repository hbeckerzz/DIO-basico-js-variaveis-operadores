function escreverMeuNome(nome) {
  return "Meu Nome é " + nome;
}

escreverMeuNome("Henrique");

function verificarIdade(idade) {
  if (idade >= 18) {
    console.log(escreverMeuNome("Henrique ") + "e sou maior de idade");
  } else {
    console.log(escreverMeuNome("Henrique ") + "e sou menor de idade");
  }
}

verificarIdade(19);
