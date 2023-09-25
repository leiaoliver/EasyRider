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


//
// Array de motos elétricas com informações reais
const motos = [
    {
        imagem: "./assets/harley-davidson.png",
        nome: "Harley-Davidson LiveWire",
        bateria: "95%",
        quilometragem: "235 km"
    },
    {
        nome: "Zero SR/F",
        bateria: "98%",
        quilometragem: "259 km"
    },
    {
        nome: "Energica Ego",
        bateria: "97%",
        quilometragem: "200 km"
    },
    {
        nome: "Tesla Model S Plaid",
        bateria: "80%",
        quilometragem: "375 km"
    }
];

// Encontre o elemento pai onde as motos serão inseridas
const motosList = document.getElementById("motos-list");

// Use a função forEach para criar elementos HTML para cada moto
motos.forEach(moto => {
    const motoDiv = document.createElement("div");
    motoDiv.classList.add("moto");

    motoDiv.innerHTML = `
        <img>${moto.imagem}
        <h2>${moto.nome}</h2>
        <p>Nível de Bateria: ${moto.bateria}</p>
        <p>Quilômetros Rodados: ${moto.quilometragem}</p>
    `;

    // Adicione a moto à lista de motos
    motosList.appendChild(motoDiv);

    // Adicione um ouvinte de eventos de clique a cada moto
    motoDiv.addEventListener("click", function () {
        // Atualize as informações na div de aluguel com os detalhes da moto clicada
        const nomeMotoInfo = document.getElementById("nomeMoto");
        const bateriaMotoInfo = document.getElementById("bateria");
        const quilometragemMotoInfo = document.getElementById("quilometragemInfo");

        nomeMotoInfo.textContent = moto.nome;
        bateriaMotoInfo.textContent = `${moto.bateria} ~ ${moto.quilometragem}`;
    });
});

//whatsaap
document.addEventListener("DOMContentLoaded", function () {
    const reservarButton = document.getElementById("reservar-button");

    if (reservarButton) {
        reservarButton.addEventListener("click", function () {
            // Número de telefone para o qual você deseja enviar a mensagem, incluindo o código do país (por exemplo, +551234567890).
            const numeroWhatsApp = "SEU_NUMERO_DE_TELEFONE_AQUI";
            
            // Mensagem predefinida que será enviada
            const mensagem = "Olá, estou interessado em reservar uma moto.";

            // Crie o link do WhatsApp com o número e a mensagem
            const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

            // Redirecione o usuário para o link do WhatsApp
            window.location.href = linkWhatsApp;
        });
    }
});
