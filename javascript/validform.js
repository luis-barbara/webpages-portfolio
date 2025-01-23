document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    let valid = true;

    // Captura os campos do formulário
    const firstName = document.getElementById("fname").value.trim();
    const lastName = document.getElementById("lname").value.trim();

    // Expressão regular: apenas letras e um único espaço entre palavras
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;

    // Limpa mensagens anteriores
    document.querySelectorAll(".error").forEach(el => el.remove());

    // Validação com regex
    if (!nameRegex.test(firstName)) {
      showError("fname", "O primeiro nome deve conter apenas letras e espaços válidos.");
      valid = false;
    }

    if (!nameRegex.test(lastName)) {
      showError("lname", "O sobrenome deve conter apenas letras e espaços válidos.");
      valid = false;
    }

    if (!valid) {
      event.preventDefault();  // Impede envio se houver erro
    } else {
      alert("Formulário validado com sucesso!");
    }
  });

  function showError(inputId, message) {
    const inputField = document.getElementById(inputId);
    const errorMsg = document.createElement("div");
    errorMsg.className = "error";
    errorMsg.style.color = "red";
    errorMsg.style.marginTop = "5px";
    errorMsg.innerText = message;
    inputField.parentNode.appendChild(errorMsg);
  }
});


