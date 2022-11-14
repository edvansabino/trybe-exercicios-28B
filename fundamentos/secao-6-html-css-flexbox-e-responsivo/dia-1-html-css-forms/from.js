function formSubmit(event) {
  event.preventDefault();
  const validationForm = textInputValidation();
  if (validationForm === false) {
    alert("Dados inválidos!");
  } else {
    alert(
      "Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip."
    );
  }
}

function clearFields() {
  const formElements = document.querySelectorAll("input");
  const textArea = document.querySelector("textarea");
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = "";
    userInput.checked = false;
  }
  textArea.value = "";
}

function enableSubmit() {
  const submitBtn = document.querySelector("#submit-btn");
  const agreementCheck = document.querySelector("#agreement");
  submitBtn.disabled = !agreement.checked;

  //* Outra solução possível
  // submitBtn.disabled = false;
  // agreementCheck.disabled = false;
}

function textInputValidation() {
  const email = document.querySelector("#email").value.length;
  const invalidEmail = email < 10 || email > 50;

  const name = document.querySelector("#fullName").value.length;
  const invalidName = name < 10 || name > 40;

  const reason = document.querySelector("#whyWon").value.length;
  const invalidReason = reason > 500;

  if (invalidEmail || invalidName || invalidReason) {
    return false;
  } else {
    return true;
  }
}

window.onload = () => {
  const clearButton = document.querySelector("#clear-btn");
  clearButton.addEventListener("click", clearFields);
  const submitButton = document.querySelector("#submit-btn");
  submitButton.addEventListener("click", formSubmit);
  const agreement = document.querySelector("#agreement");
  agreement.addEventListener("change", enableSubmit);
};
