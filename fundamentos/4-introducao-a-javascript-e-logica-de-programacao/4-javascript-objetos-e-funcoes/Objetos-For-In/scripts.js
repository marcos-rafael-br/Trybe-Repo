// console.log("Bem vinda," + " " + info.personagem);

//info.recorrente = "sim"; // pode isso arnaldo?

//console.log(info);

/* uso do for in mostrando chaves
for (const key in info) {
  console.log(key);
}

uso do for in mostrando valores das chaves
for (const key in info) {
    console.log(info[key]);
  } */

//

/* let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};
//não entendi a questão do for in ler tambem informações do info 2
for (let properties in info) {
  if (
    properties === "recorrente" &&
    info[properties] === "Sim" &&
    info2[properties] === "Sim"
  ) {
    console.log("Ambos recorrentes");
  } else {
    console.log(info[properties] + " e " + info2[properties]);
  }
}

//Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'". / adicionar umm novo livro wm livro favoritos, com {}

 */
let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};

/* console.log(
  "O livro favorito de " +
    leitor.nome +
    " " +
    leitor.sobrenome +
    " se chama '" +
    leitor.livrosFavoritos[0].titulo +
    "''"
); */

leitor.livrosFavoritos.push({
  titulo: "Harry Potter e o Prisioneiro de Azkaban",
  autor: "JK Rowling",
  editor: "Rocco",
});

//console.table(leitor.livrosFavoritos[1]);

console.log(
  leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos."
);
