/* 
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição do pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- A vista Débito, recebe 10% de desconto;
- A vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/

const precoEtiqueta = 500;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
  console.log(precoEtiqueta - (precoEtiqueta * 0.1));
} else if (formaDePagamento === 2) {
  console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (formaDePagamento === 3) {
  console.log(precoEtiqueta);
} else if (formaDePagamento === 4) {
  console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}
