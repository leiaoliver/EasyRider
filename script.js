    document.addEventListener("DOMContentLoaded", function () {
        const cadastroForm = document.getElementById("cadastro");
        const loginForm = document.getElementById("login");

        const usuariosCadastrados = []; // Armazena os dados de cadastro dos usuários

        if (cadastroForm && loginForm) {
            const cadastroFormSubmit = document.getElementById("cadastro-submit");
            const loginFormSubmit = document.getElementById("login-submit");

            cadastroFormSubmit.addEventListener("click", function (e) {
                e.preventDefault();
                const nome = document.getElementById("nome").value;
                const email = document.getElementById("email").value;
                const senha = document.getElementById("senha").value;

                // Verifica se todos os campos do cadastro estão preenchidos
                if (!nome || !email || !senha) {
                    alert("Preencha todos os campos para se cadastrar.");
                    return;
                }

                // Armazena os dados de cadastro
                usuariosCadastrados.push({ nome, email, senha });

                // Limpa os campos do formulário de cadastro
                document.getElementById("nome").value = "";
                document.getElementById("email").value = "";
                document.getElementById("senha").value = "";

                // Exibe a tela de login após o cadastro bem-sucedido
                cadastroForm.style.display = "none";
                loginForm.style.display = "block";
            });

            loginFormSubmit.addEventListener("click", function (e) {
                e.preventDefault();
                const emailLogin = document.getElementById("email-login").value;
                const senhaLogin = document.getElementById("senha-login").value;

                // Verifica se o email e a senha correspondem a algum usuário cadastrado
                const usuarioEncontrado = usuariosCadastrados.find(
                    (usuario) => usuario.email === emailLogin && usuario.senha === senhaLogin
                );

                if (usuarioEncontrado) {
                    // Redireciona o usuário para a página inicial em caso de sucesso
                    window.location.href = "home.html";
                } else {
                    // Exibe uma mensagem de erro em caso de falha na autenticação
                    alert("Email ou senha incorretos. Tente novamente.");
                }
            });
        }
    });

    //eyes
    document.addEventListener("DOMContentLoaded", function () {
        const senhaInputCadastro = document.getElementById("senha");
        const togglePasswordCadastro = document.getElementById("togglePasswordCadastro");

        const senhaInputLogin = document.getElementById("senha-login");
        const togglePasswordLogin = document.getElementById("togglePasswordLogin");

        togglePasswordCadastro.addEventListener("click", function () {
            togglePasswordVisibility(senhaInputCadastro, togglePasswordCadastro);
        });

        togglePasswordLogin.addEventListener("click", function () {
            togglePasswordVisibility(senhaInputLogin, togglePasswordLogin);
        });

        function togglePasswordVisibility(inputField, toggleButton) {
            if (inputField.type === "password") {
                inputField.type = "text";
                toggleButton.classList.remove("fa-eye");
                toggleButton.classList.add("fa-eye-slash");
            } else {
                inputField.type = "password";
                toggleButton.classList.remove("fa-eye-slash");
                toggleButton.classList.add("fa-eye");
            }
        }
    });

    //check
    const meuCheckbox = document.getElementById("meuCheckbox");
    const minhaLabel = document.querySelector("label[for='meuCheckbox']");

    minhaLabel.addEventListener("click", function () {
        meuCheckbox.checked = !meuCheckbox.checked;
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
            nome: "Harley-Davidson",
            bateria: "95%",
            quilometragem: "235 km"
        },
        {
            imagem: "./assets/srf.png",
            nome: "Zero SR/F Elétrica ",
            bateria: "98%",
            quilometragem: "259 km"
        },
        {
            imagem: "./assets/energica0.png",
            nome: "Energica Ego",
            bateria: "97%",
            quilometragem: "200 km"
        },
        {
            imagem: "./assets/Super-Soco.png",
            nome: "TC Super Soco",
            bateria: "80%",
            quilometragem: "375 km"
        },
        {
            imagem: "./assets/Otto-Bike-MCR.png",
            nome: "Otto Bike MCR",
            bateria: "80%",
            quilometragem: "375 km"
        },

        {
            imagem: "./assets/Emmo-Knight.png",
            nome: "Emmo Knight Sport",
            bateria: "80%",
            quilometragem: "375 km"
        },

    {
        imagem: "./assets/Fuell-Flow.png",
        nome: "Fuell Flow",
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
            <img style="width:60px; height: 40px;" id="imgmoto" src=${moto.imagem} />
            <h2 style="width:110px;">${moto.nome}</h2>
            <p> <span style="opacity: 60%;">Nível de Bateria:</span> ${moto.bateria}</p>
            <p><span style="opacity: 60%;">Quilômetros Rodados: </span>${moto.quilometragem}</p>
        `;

        // Adicione a moto à lista de motos
        motosList.appendChild(motoDiv);

        // Adicione um ouvinte de eventos de clique a cada moto
        motoDiv.addEventListener("click", function () {
            // Atualize as informações na div de aluguel com os detalhes da moto clicada
            // Dentro do evento de clique da moto
    const imagemMoto = document.getElementById("imagem");
    const nomeMotoInfo = document.getElementById("nomeMoto");
    const bateriaMotoInfo = document.getElementById("bateria");
    const quilometragemMotoInfo = document.getElementById("quilometragemInfo");

    imagemMoto.src = moto.imagem; // Atualiza a imagem da moto
    nomeMotoInfo.textContent = moto.nome;
    bateriaMotoInfo.textContent = `${moto.bateria} ~ ${moto.quilometragem}`;
        });
    });




    //google maps
    // Função de inicialização do mapa
    function initMap() {
        var map = L.map('map').setView([-23.550520, -46.633308], 13); // Coordenadas iniciais e nível de zoom

        // Adicione um mapa base (por exemplo, OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Adicione marcadores clicáveis ao mapa (exemplo)
        var marker = L.marker([-23.550520, -46.633308]).addTo(map);
        marker.bindPopup('Estação 1').openPopup(); // Abre uma janela de informações ao clicar no marcador

        // Adicione mais marcadores e funcionalidades conforme necessário
    }
    
    // Chame a função de inicialização quando a página for carregada
    window.onload = initMap;



    //ano rodapé
    document.addEventListener("DOMContentLoaded", function () {
        const anoSpan = document.getElementById("ano");

        if (anoSpan) {
            const anoAtual = new Date().getFullYear();
            anoSpan.textContent = `@${anoAtual} São Paulo`;
        }
    });


    //modal
   // JavaScript to open the voucher modal when the button is clicked
const openVoucherButton = document.getElementById('open-voucher-modal');
const voucherModal = document.getElementById('voucher-modal');
const voucherSection = document.getElementById('voucher-section');

openVoucherButton.addEventListener('click', function () {
  voucherSection.style.display = 'block'; // Display the voucher section
  voucherModal.style.display = 'block'; // Display the modal
});

// JavaScript to close the modal when clicking outside of it
voucherSection.addEventListener('click', function (event) {
  if (event.target === voucherSection) {
    voucherSection.style.display = 'none';
    voucherModal.style.display = 'none';
  }
});


// JavaScript to display an alert when clicking the "Aplicar" button inside the modal
const aplicarButton = document.getElementById('aplication'); // Add an ID to the Aplicar button
aplicarButton.addEventListener('click', function () {
  const voucherText = document.querySelector('.inserir-voucher-text'); // Select the element to update
  const randomCode = generateRandomCode(8); // Generate a random code
  voucherText.textContent = randomCode; // Update the text with the generated code
  alert("Cupom aplicado com sucesso!"); // Display the alert
});

// JavaScript to close the modal when clicking the "X" button inside the modal
const closeModalButton = document.getElementById('close');
closeModalButton.addEventListener('click', function () {
  voucherSection.style.display = 'none';
  voucherModal.style.display = 'none';
});

// JavaScript to generate a random alphanumeric code and set it as the initial value of the input field
const voucherInput = document.getElementById('voucher-input');

// Function to generate a random alphanumeric code
function generateRandomCode(length) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    result += charset[randomIndex];
  }
  return result;
}

// Set the initial value of the input field to a random alphanumeric code with the desired length
const codeLength = 8; // You can adjust the length as needed
voucherInput.value = generateRandomCode(codeLength);


//options color

  $(document).ready(function() {
    $("#escolhaPlano").select2({
      templateSelection: function(data, container) {
        // Apply hover effect based on the selected option
        if (data.id === "basico") {
          $(container).css("background-color", "#26A6D1");
          $(container).css("color", "white");
        } else if (data.id === "padrao") {
          $(container).css("background-color", "#e5126f");
          $(container).css("color", "white");
        } else if (data.id === "avancado") {
          $(container).css("background-color", "#f1c50e");
          $(container).css("color", "white");
        }
        return data.text;
      }
    });
  });
