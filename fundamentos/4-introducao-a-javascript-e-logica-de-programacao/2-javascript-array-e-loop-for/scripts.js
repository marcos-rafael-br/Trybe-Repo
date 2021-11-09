//percorra o array imprimindo todos os valores nele contidos com a função console.log();

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  console.log(element);
}

for (const n of numbers) {
  console.log(n);
}*/

//some todos os valores contidos no array e imprima o resultado;

/*let soma = 0;

for (let i = 0; i < numbers.length; i++) {
  soma += numbers[i];
}
console.log(soma);*/

/*calcule e imprima a média aritmética dos valores contidos no array;*/

/* let soma = 0;

for (let i = 0; i < numbers.length; i++) {
  soma += numbers[i];
}
console.log(soma / numbers.length); */

/* Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"; */

/* let soma = 0;

for (let i = 0; i < numbers.length; i++) {
  soma += numbers[i];
}
if (soma > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}
 */

/* Com for , descubra qual o maior valor contido no array e imprima-o; */

/* let maiorValor = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > maiorValor) {
    maiorValor = numbers[i];
  }
}

console.log(maiorValor); */

/* Quantos valores impares tem no array e imprima, se não tiver, faça msg nenhum valor impar encontrado.  */

/* let impar = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    impar += 1;
  }
  else{console.log("Nenhum valor impar encontrado")}
}
console.log(impar); */

//for, menor valor contido na array e imprimir

/* let menorValor = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < menorValor) {
    menorValor = numbers[i];
  }
}
console.log(menorValor); */

//com for, criar array que vá de 1 a 25 e imprimir resultado. depois divida cada item por 2

/* let number = [];
for (let i = 0; i <= 25; i++) {
  number.push(i);
  console.log(number[i] / 2);
} */

//ordene a array em ordem crescente e imprima valores

for (let i = 1; i < numbers.length; i += 1) {
  for (let j = 0; j < i; j += 1) {
    if (numbers[i] < numbers[j]) {
      let position = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = position;
    }
  }
}
console.log(numbers);

//ordene a array em ordem decrescente e imprima valores

/*for (let i = 1; i < numbers.length; i += 1) {
  for (let j = 0; j < i; j += 1) {
    if (numbers[i] > numbers[j]) {
      let position = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = position;
    }
  }
}
console.log(numbers); */

//multiplicar pares vizinhos ( da para fazer por for ? )

/* let novaArray = [];

for (let i = 1; i < numbers.length; i++) {
  for (let j = 0; j < i; j++) {
    let mult = numbers[i] * numbers[j];
    novaArray.push(mult);
  }
}
console.log(novaArray); */

/* let novaArray = [];

for (let i = 0; i < numbers.length; i++) {
  if (i + 1 < numbers.length) {
    novaArray.push(numbers[i] * numbers[i + 1]);
  } else {
    novaArray.push(numbers[i] * 2);
  }
}
console.log(novaArray); */
