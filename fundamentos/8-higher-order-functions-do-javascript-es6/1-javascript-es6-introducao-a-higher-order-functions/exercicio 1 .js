const newEmployees = (cb) => {
  const employees = {
    id1: cb('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: cb('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: cb('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

const infos = (nomeCompleto) => {
  const nameForEmail = nomeCompleto.toLowerCase().split(' ').join('_');
  return { nomeCompleto, email: `${nameForEmail}@trybe,com.br` };
};

console.log(newEmployees(infos));
