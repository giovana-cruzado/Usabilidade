document.addEventListener("DOMContentLoaded", function () {
    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");

    nome.addEventListener("input", () => {
        const feedback = document.getElementById("feedback-nome");
        if (nomeInput.value.trim().length >= 3) {
            nomeInput.classList.add("valid");
            nomeInput.classList.remove("invalid");
            feedback.textContent = "Nome válido";
        } else {
            nomeInput.classList.add("invalid");
            nomeInput.classList.remove("valid");
            feedback.textContent = "Nome deve ter ao menos 3 letras";
        }
    });

    emailInput.addEventListener("input", () => {
        const feedback = document.getElementById("feedback-email");
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
        if (emailValido) {
            emailInput.classList.add("valid");
            emailInput.classList.remove("invalid");
            feedback.textContent = "Email válido";
        } else {
            emailInput.classList.add("invalid");
            emailInput.classList.remove("valid");
            feedback.textContent = "Digite um email válido";
        }
    });

    document.getElementById("formulario").addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Formulário enviado com sucesso!");
    });
});