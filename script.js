document.addEventListener("DOMContentLoaded", function () {
    const cadastroForm = document.getElementById("cadastro");
    const loginForm = document.getElementById("login-form");

    if (cadastroForm && loginForm) {
        const cadastroFormSubmit = document.getElementById("cadastro");
        const loginFormSubmit = document.getElementById("login");

        cadastroFormSubmit.addEventListener("submit", function (e) {
            e.preventDefault();
            // Aqui você deve adicionar a lógica de processamento do formulário de cadastro.
            // Após o cadastro bem-sucedido, você pode exibir a tela de login.
            cadastroForm.style.display = "none";
            loginForm.style.display = "block";
        });

        loginFormSubmit.addEventListener("submit", function (e) {
            e.preventDefault();
            // Aqui você deve adicionar a lógica de autenticação do usuário.
            // Supondo que o login seja bem-sucedido, você pode redirecionar o usuário para a página inicial.
            window.location.href = "home.html"; // Substitua "home.html" pelo URL da sua página inicial.
        });
    }
});
