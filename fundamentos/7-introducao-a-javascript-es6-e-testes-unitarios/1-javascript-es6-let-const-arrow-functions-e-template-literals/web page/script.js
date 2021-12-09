const button = document.querySelector('button');
const span = document.querySelector('span');
let clickCount = 0;
let frase = 'Tryber x aqui!';

const contador = () => (span.innerText = clickCount += 1);

button.addEventListener('click', contador);

//########################################################33

const array = ['Android', 'iOS', 'Architecture', 'Teach', 'Run'];

const searchX = (string, nome) => {
  const position = string.replace('x', nome);
  return position;
};
console.log(searchX(frase, 'Rafael'));

const concat = (f) => {
  f;
  let a = `Minhas 5 principais habilidades são: ${array.sort()}`;
  return a;
};

console.log(concat(searchX(frase, 'Rafael')));
