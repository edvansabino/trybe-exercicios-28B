/*
      Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
      - document.getElementById()
      - document.getElementsByClassName()
      - document.getElementsByTagName() */

//! 1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

function changeText() {
  let paragraph = document.getElementsByTagName("p")[1];
  paragraph.innerText =
    "Pretendo estar trabalhando em uma empresa multinacional ou internacional com uma remuneração acima dos R$ 3500,00 e quitando regularmente meu curso na Trybe, estudando e aprendendo novas tecnologias, novos paradigmas de programação evoluindo e me firmando como um profissional de sucesso.";
}
changeText();

//  !2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function yellowSquare() {
  let colorSquare = document.getElementsByClassName("main-content")[0];
  colorSquare.style.background = "rgb(76,164,109)";
}
yellowSquare();

//! 3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.

function redSquare() {
  let changeColorSquare = document.getElementsByClassName("center-content")[0];
  changeColorSquare.style.background = "white";
}
redSquare();

//! 4. Crie e execute uma função que corrija o texto da tag <h1>.

function correctText() {
  let textCorrect = document.getElementsByTagName("h1")[0];
  textCorrect.innerText = "Exercíco - JavaScript";
}
correctText();

//! 5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.

function changeLetters() {
  let bigLetters = document.getElementsByTagName("p")[0];
  bigLetters.innerHTML = bigLetters.innerHTML.toLocaleUpperCase();
}
changeLetters();

//! 6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.

function paragraphTags() {
  let elements = document.getElementsByTagName("p");
  for (let index = 0; index < elements.length; index += 1) {
    console.log(elements[index].innerHTML);
  }
}
paragraphTags();
