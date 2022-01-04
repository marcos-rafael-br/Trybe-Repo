const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparador = (gabarito, respostas) => {
  if (gabarito === respostas) {
    return 1;
  }
  if (gabarito === 'N.A') {
    return 0;
  }
  return -0.5;
};

const pontuador = (gabarito, respostas, callback) => {
  let pontos = 0;
  for (let i = 0; i < gabarito.length; i += 1) {
    const callbackReturn = callback(gabarito[i],respostas[i]);
    pontos += callbackReturn
  }
  return pontos
};

pontuador(RIGHT_ANSWERS,STUDENT_ANSWERS,comparador)