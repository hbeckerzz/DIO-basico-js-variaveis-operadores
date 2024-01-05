const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 1580;

const viagem = distanciaEmKm / kmPorLitros * precoCombustivel;

console.log(viagem.toFixed(2));

