//3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".

/* let player1 = "pedra";
let player2 = "papel";

if (player1 == "pedra" && player2 == "papel") {
  console.log("Player 2 won");
} else if (player1 == "pedra" && player2 == "tesoura") {
  console.log("Player 1 won");
} else if (player1 == "pedra" && player2 == "pedra") {
  console.log("A Ties");
} */

/* Fazer quadrado de lados 5 */

/* let n = 5;
let simbolo = "*";
let linha = "";

for (let i = 0; i < n; i += 1) {
  linha = linha + simbolo;
}

for (let i = 0; i < n; i += 1) {
  console.log(linha);
} */

//Fazer triangulo de base 5

/* let n = 5;
let simbolo = "*";
let linha = "";

for (let i = 0; i < n; i++) {
  linha = linha + simbolo;
  console.log(linha);
} */

//Inverta o lado do triangulo retangulo

/* let n = 5;
let symbol = "*";
let inputLine = "";
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + " ";
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = "";
  inputPosition -= 1;
} */

//fazer uma pirâmide com n(*) de base

/* let n = 5;
let symbol = "*";
let inputLine = "";

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + " ";
    }
  }
  console.log(inputLine);
  inputLine = "";
  controlRight += 1;
  controlLeft -= 1;
} */

//fazer uma pirâmide com n(*) de base, vazia no meio
