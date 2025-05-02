const calculadora = require("../models/calculadora");

test("somar 2+2 deve ser 4 ", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
  // console.log(resultado);
});

test("somar 5 + 100 deve ser 105 ", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
  // console.log(resultado);
});

test("somar 'banana' + 100 deve ser erro ", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Erro");
  // console.log(resultado);
});

test("subtrair 'null' - 50 deve ser erro", () => {
  const resultado = calculadora.subtrair(null, 50);
  expect(resultado).toBe("errrrro");
  // console.log(resultado);
});

test("dividir numero1 / 0 deve ser um Infinity do tipo 'numero' ", () => {
  const resultado = calculadora.dividir(10, 0);
  console.log(resultado);
  console.log(typeof resultado);
  expect(resultado).toBe(Infinity);
  expect(typeof resultado).toBe("number");
});
