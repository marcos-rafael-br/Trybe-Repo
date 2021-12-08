/* function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

const testingScope1 = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
};
testingScope1(true); */

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const sortoddsAndEvens = (array) => {
  ordenedArray = array.sort((a, b) => a - b);

  return ordenedArray;
};

const resultado = sortoddsAndEvens(oddsAndEvens);

console.log(
  `Os números ${oddsAndEvens} se encontram ordenados de forma crescente !`
); // será necessário alterar essa linha 😉
