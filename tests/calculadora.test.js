const calculadora = require("../models/calculadora");

test("somar 2+2 deve ser 4 ", () => {
  const resultado = calculadora.somar(2, 2);
  console.log(resultado);
});
