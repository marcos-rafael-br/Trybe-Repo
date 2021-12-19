window.onload = function () {
  const body = document.querySelector('body');
  const main = document.querySelector('main');
  const textarea = document.querySelector('#textarea');
  const corDeFundo = document.querySelector('#bgcolor');
  const buttonCorDeFundo = document.querySelector('#button-bgcolor');
  const cor = document.querySelector('#color');
  const buttonCor = document.querySelector('#button-color');
  const font = document.querySelector('#font');
  const buttonFont = document.querySelector('#button-font');
  const buttonSave = document.querySelector('#button-save');

  console.log(main);

  function changeBgColor() {
    let cor = corDeFundo.value;
    main.style.backgroundColor = cor;
  }
  function changeColor() {
    let corLetra = cor.value;
    textarea.style.color = corLetra;
  }
  function changeFont() {
    let tamanhoFont = font.value;
    textarea.style.fontSize = `${tamanhoFont}px`;
  }

  function save() {
    let values = document.querySelector('body');
    console.log(values.innerHTML);
    localStorage.setItem('items', values.innerHTML);
  }

  function load() {
    let recover = localStorage.getItem('items');
    if (recover) {
      body.innerHTML = recover;
    }
  }
  load();

  buttonCorDeFundo.addEventListener('click', changeBgColor);
  buttonCor.addEventListener('click', changeColor);
  buttonFont.addEventListener('click', changeFont);
  buttonSave.addEventListener('click', save);
};
