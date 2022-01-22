import React from 'react';

const compromissos = [
  'ler o course',
  'assistir aula ao vivo',
  'fazer exercícios',
  'buscar conteúdo extra',
];

const Task = (value) => {
  return <li>{value}</li>;
};

function App() {
  return <ul>{compromissos.map((item) => Task(item))} </ul>;
}

export default App;
