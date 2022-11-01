// arquivo script.js
// Acesse o elemento elementoOndeVoceEsta.
let currentElement = document.querySelector('#elementoOndeVoceEsta');
  console.log(currentElement);

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let elementoPai = document.querySelector('#elementoOndeVoceEsta').parentElement;
  elementoPai.style.backgroundColor = "gray";
  console.log(elementoPai);

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

// Acesse o primeiroFilho a partir de pai.
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
// Agora acesse o terceiroFilho a partir de pai.

document.getElementById("stark_childs").firstChild.innerText;
