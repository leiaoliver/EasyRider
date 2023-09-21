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

document.addEventListener("DOMContentLoaded", function () {
    const senhaInput = document.getElementById("senha");
    const togglePassword = document.getElementById("togglePassword");

    togglePassword.addEventListener("click", function () {
        if (senhaInput.type === "password") {
            senhaInput.type = "text";
            togglePassword.classList.remove("fa-eye");
            togglePassword.classList.add("fa-eye-slash");
        } else {
            senhaInput.type = "password";
            togglePassword.classList.remove("fa-eye-slash");
            togglePassword.classList.add("fa-eye");
        }
    });
});


//blur header
window.addEventListener('scroll', function() {
    var header = document.querySelector('header.header-color');
    
    if (window.scrollY > 0) {
        header.classList.add('shadow');
    } else {
        header.classList.remove('shadow');
    }
});


//ler mais 
$(document).ready(function() {
    var $text = $('#text');
    var $toggleButton = $('#toggle-button');
    
    $toggleButton.click(function() {
        $text.toggleClass('expanded');
        if ($text.hasClass('expanded')) {
            $toggleButton.text('Mostrar menos');
        } else {
            $toggleButton.text('Ler mais');
        }
    });
});
