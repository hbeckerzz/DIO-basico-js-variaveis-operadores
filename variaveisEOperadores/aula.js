const numero = 0;

const numeroDivisivelPor5 = (numero % 5) === 0;
// um = para atribuir
//dois = para igualdade, ignora o tipo de variavel
//tres = usado para igualdade, não ignora o tipo das variaveis
if (numero === 0 ){
    console.log('O número é inválido')
} else if (numeroDivisivelPor5) {
    console.log('Sim');
} else {
    console.log('Não')
}


