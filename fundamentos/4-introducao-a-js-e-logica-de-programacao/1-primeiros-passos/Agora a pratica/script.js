let a = 2;
let b = 3;

let soma = a + b; /*adição*/
let subtracao = a - b; /*subtração*/
let multiplicacao = a * b; /*multiplicação*/
let divisao = a / b; /*divisão*/
let modulo = a ** b; /*modulo*/

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo);

/*soma de 3 angulos de um triangulo deve ser 180*/

let a1 = -1;
let a2 = 60;
let a3 = 90;

if (a1 < 0 || a2 < 0 || a3 < 0) {
  console.log("angulo invalido inserido");
} else if (a1 + a2 + a3 === 180) {
  console.log("O objeto é um triangulo");
} else {
  console.log("O objeto não é um triangulo");
}

/* receber nome de peça de xadrez (maiúsculo ou minusculo) e retornar seu movimento*/

let peça = "CAvalo";

switch (peça.toLowerCase()) {
  case "cavalo":
    console.log("movimento em L");
    break;
  case "bispo":
    console.log("movimento em diagonais");
    break;
  case "rei":
    console.log("Você move apenas uma casa");
    break;
  default:
    console.log("essa não é uma peça de xadrez");
    break;
}

/*converter nota em % para A a F*/

const nota = 51;

if (nota < 0) {
  console.log("ERRO");
} else if (nota > 100) {
  console.log("ERRO");
} else if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 700) {
  console.log("C");
} else if (nota >= 60) {
  console.log("D");
} else if (nota >= 50) {
  console.log("E");
} else {
  console.log("F");
}

/*programa que defina 3 numeros em constantes e retorna true se uma delas for par, se nao retorna false*/

const n1 = 1;
const n2 = 3;
const n3 = 5;

let premissa = false;

if (n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0) {
  premissa = true;
}
console.log(premissa);

/*programa que defina 3 numeros em constantes e retorna true se uma delas for impar, se nao retorna false*/

const n4 = 2;
const n5 = 4;
const n6 = 6;

let premissa1 = false;

if (n4 % 2 !== 0 || n5 % 2 !== 0 || n6 % 2 !== 0) {
  premissa1 = true;
}
console.log(premissa1);

/*dois valores em duas constantes diferentes: o custo de produto e seu valor de venda. calcular quanto de lucro a empresa tera ao vender 1000 unidades*/

const custo = 0;
const valor = 20;

const custoReajustado = custo * 1.2;

if (custo <= 0 || valor <= 0) {
  console.log("ERRO, digite valores maior que zero");
} else {
  const lucro = (valor - custoReajustado) * 1000;
  console.log(lucro);
}
/*dado o salario bruto, calcule o liquido*/

let inss;
let ir;

const bruto = 4450;

if (bruto <= 1556.94) {
  inss = bruto * 0.08;
} else if (1556.95 < bruto < 2594.92) {
  inss = bruto * 0.09;
} else if (2594.93 < bruto < 5189.82) {
  inss = bruto * 0.11;
} else {
  inss = 570.88;
}
const liquido = bruto - inss;

if (liquido <= 1903.98) {
  ir = 0;
} else if (liquido <= 2826.65) {
  ir = liquido * 0.075 - 142.8;
} else if (liquido <= 3751.05) {
  ir = liquido * 0.15 - 354.8;
} else if (liquido <= 4664.68) {
  ir = liquido * 0.225 - 636.13;
} else {
  ir = liquido * 0.275 - 869.36;
}

console.log("Salario:" + (liquido - ir));
