// Adicione a tag h1 com o texto Exercício - JavaScript DOM como filho da tag body;
const tittle = () => {
  let tittleContent = document.createElement("h1");
  console.log(tittleContent);
  document.getElementsByTagName("h1");
  document.body.appendChild(tittleContent);
  tittleContent.innerText = "Exercício - JavaScript DOM";
};
tittle();
// Adicione a tag main com a classe main-content como filho da tag body;
const addMain = () => {
  let setMain = document.createElement('main');
  setMain.className = 'main-content';
  document.body.appendChild(setMain);
}
addMain();

// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const addSection = () => {
  let setSection = document.createElement('section');
  setSection.className = 'center-content';
  document.appendChild(setSection);
}
addSection();

// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;
// Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
