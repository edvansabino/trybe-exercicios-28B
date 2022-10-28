const contHead = document.getElementById("header-container");
contHead.style.backgroundColor = 'rgb(0, 176, 105)';

const importanteUrgente = document.getElementsByClassName("emergency-tasks")[0];
importanteUrgente.style.backgroundColor = 'rgb(255, 159, 132)';

const tituloEmergencia = document.querySelectorAll(".emergency-tasks h3");
for (let index = 0; index < tituloEmergencia.length; index += 1) {
  tituloEmergencia[index].style.backgroundColor = "rgb(165, 0, 243)";
}

const semUrgencia = document.querySelector(".no-emergency-tasks");
semUrgencia.style.backgroundColor = "rgb(249, 219, 94)";

const semPressa = document.querySelectorAll(
  ".no-emergency-tasks h3"
);
for (let index = 0; index < semPressa.length; index += 1) {
  semPressa[index].style.backgroundColor = "rgb(35, 37, 37)";
}

const rodape = document.getElementById("footer-container");
rodape.style.backgroundColor = "rgb(0, 53, 51)";
