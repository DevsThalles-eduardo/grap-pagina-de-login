// validacao.js
function validarFormulario() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regexEmail.test(email)) {
        alert("Por favor, insira um email válido.");
        return false;
    }

    if (senha.length < 8) {
        alert("A senha deve ter no mínimo 8 caracteres.");
        return false;
    }

    alert("Login bem-sucedido!");
    return true;
}
