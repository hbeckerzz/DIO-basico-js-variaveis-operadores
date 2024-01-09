function incrementarJuros(valor, percentualJuros) {
  //função, direcionar um comando em especifico para ser rodado
  //podendo resolver soluções e retornando o resultado
  const valorDeAcrescimo = (percentualJuros / 100) * valor;
  return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 30));

//chamar função de main, para organização
//todas as funções auxiliares dentro da função principal main
