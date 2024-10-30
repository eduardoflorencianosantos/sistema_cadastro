// Função que faz o cadastro funcionar
function aluno() {
    let nome_aluno = document.getElementById('nome-aluno').value;
    let cpf = document.getElementById('cpf').value;
    let telefone = document.getElementById('telefone').value;
    let cgm = document.getElementById('cgm').value;
    let turma = document.getElementById('turma').value;
    let responsavel = document.getElementById('responsavel').value;
    let telefone_responsavel = document.getElementById('telefone-responsavel').value;
    let data_nascimento = document.getElementById('data-nascimento').value;
}

let responsaveis = []; // Array para armazenar os responsáveis

        function adicionarInputs() {
            const container = document.getElementById("input-container");
            const div = document.createElement("div");
            div.className = "input-group";

            // Título para o responsável
            const responsavelCount = document.querySelectorAll('#input-container .input-group').length + 1;
            const title = document.createElement("h4");
            title.textContent = `Responsável ${responsavelCount}`;
            div.appendChild(title);

            // Campo para Nome do Responsável
            const inputNome = document.createElement("input");
            inputNome.type = "text";
            inputNome.placeholder = "Nome do responsável";
            inputNome.name = `responsavel_nome_${responsavelCount}`;
            div.appendChild(inputNome);

            // Campo para CPF
            const inputCPF = document.createElement("input");
            inputCPF.type = "text";
            inputCPF.placeholder = "CPF";
            inputCPF.name = `responsavel_cpf_${responsavelCount}`;
            div.appendChild(inputCPF);

            // Campo para Telefone do Responsável
            const inputTelefone = document.createElement("input");
            inputTelefone.type = "text";
            inputTelefone.placeholder = "Telefone do responsável";
            inputTelefone.name = `responsavel_telefone_${responsavelCount}`;
            div.appendChild(inputTelefone);

            // Adiciona o grupo de inputs ao contêiner principal
            container.appendChild(div);
            document.getElementById("remove-btn").style.display = "block"; // Exibe o botão de remover
        }

        function removerInputs() {
            const container = document.getElementById("input-container");
            if (container.lastChild) {
                container.removeChild(container.lastChild);
            }
            if (!container.lastChild) {
                document.getElementById("remove-btn").style.display = "none"; // Oculta o botão se não houver mais inputs
            }
        }

        function cadastrarAluno() {
            const nomeAluno = document.getElementById("nome-aluno").value;
            const cpfAluno = document.getElementById("cpf").value;
            const telefoneAluno = document.getElementById("telefone").value;
            const cgm = document.getElementById("cgm").value;
            const turma = document.getElementById("turma").value;
            const dataNascimento = document.getElementById("data-nascimento").value;

            // Responsável principal
            const responsavelPrincipal = {
                nome: document.getElementById("responsavel").value,
                cpf: document.getElementById("cpf-responsavel").value,
                telefone: document.getElementById("telefone-responsavel").value
            };
            responsaveis.push(responsavelPrincipal); // Adiciona o responsável principal à lista

            // Adiciona os responsáveis adicionais
            const inputsResponsaveis = document.querySelectorAll('#input-container .input-group');
            inputsResponsaveis.forEach((inputGroup, index) => {
                const nome = inputGroup.children[1].value; // O segundo input é o nome
                const cpf = inputGroup.children[2].value; // O terceiro input é o CPF
                const telefone = inputGroup.children[3].value; // O quarto input é o telefone
                responsaveis.push({ nome, cpf, telefone });
            });

            // Exibe os responsáveis cadastrados
            const containerResponsaveis = document.getElementById("responsaveis-cadastrados");
            containerResponsaveis.innerHTML = ""; // Limpa os responsáveis cadastrados antes de mostrar
            responsaveis.forEach((resp, index) => {
                const div = document.createElement("div");
                div.innerHTML = `<strong>Responsável ${index + 1}:</strong> ${resp.nome} - CPF: ${resp.cpf} - Telefone: ${resp.telefone}`;
                containerResponsaveis.appendChild(div);
            });

            // Limpa o formulário após o cadastro
            document.getElementById("aluno-form").reset();
            responsaveis = []; // Reseta a lista de responsáveis
        }
