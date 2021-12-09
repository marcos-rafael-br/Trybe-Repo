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

//####################################

/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const sortoddsAndEvens = (array) => {
  ordenedArray = array.sort((a, b) => a - b);

  return ordenedArray;
};

const resultado = sortoddsAndEvens(oddsAndEvens);

console.log(
  `Os números ${resultado} se encontram ordenados de forma crescente !`
);  */

/* const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const compare = (array) => {
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        let aux = array[i];
        array[i] = array[j];
        array[j] = aux;
      }
    }
  }
  return array;
};

console.log(compare(oddsAndEvens)); */

//####################################

//Retornar fatorial

/* let number = 5;

const fatorial = (value) => {
  let result = 1;
  for (i = 2; i <= value; i++) {
    result *= i;
  }
  return result;
};
console.log(fatorial(number));
 */

//não entendi o funcionamento da função abaixo

/* const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5)); */

//Criar função que retorne maior palavra de uma frase

const frase = 'Eu tenho a forçaaaaa';

const bigWord = (frase) => {
  const separar = frase.split(' ');
  let maxLength = 0;
  let result = '';

  for (let i = 0; i < separar.length; i++) {
    if (separar[i].length > maxLength) {
      maxLength = separar[i].length;
      result = separar[i];
    }
  }
  return result;
};

console.log(bigWord(frase));
