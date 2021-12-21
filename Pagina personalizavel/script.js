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
  const space = document.querySelector('#space');
  const buttonSpace = document.querySelector('#button-space');
  const family = document.querySelector('#family');
  const buttonFamily = document.querySelector('#button-family');

  const buttonSave = document.querySelector('#button-save');

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

  function changeLineHeight() {
    let espacoFont = space.value;
    textarea.style.lineHeight = espacoFont;
  }

  function changeFontFamily() {
    let familyFont = family.value;
    textarea.style.fontFamily = familyFont;
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
  buttonSpace.addEventListener('click', changeLineHeight);
  buttonFamily.addEventListener('click', changeFontFamily);
  buttonSave.addEventListener('click', save);
};
