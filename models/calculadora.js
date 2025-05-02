function somar(numero1, numero2) {
  if (typeof numero1 !== "number") {
    return "Erro";
  }
  return numero1 + numero2;
}

exports.somar = somar;

// = - igual atribuição, serve para atribuir valor a alguma coisa
// == - comparação fraca, compara dois valores apenas quanto ao valor, ignorando o tipo
//    10 == '10'; // true — compara o valor, ignora o tipo (número vs string)
//=== - comparação forte, compara considerando o tipo e o valor
//     10 === '10'; // false — tipos diferentes (number !== string)

function subtrair(numero1, numero2) {
  if (numero1 == null) {
    return "errrrro";
  }
  return numero1 - numero2;
}

exports.subtrair = subtrair;

function dividir(numero1, numero2) {
  if (numero2 === 0) {
    var resultadoDiv = 50 / 0;
    return resultadoDiv;
  }
  return numero1 / numero2;
}

exports.dividir = dividir;
