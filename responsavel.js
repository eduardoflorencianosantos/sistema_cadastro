// Função que faz o cadastro funcionar
async function responsavel() {
    let nome_responsavel = document.getElementById('nome-responsavel').value;
    let cpf_responsavel = document.getElementById('cpf').value;
    let nome_filho = document.getElementById('nome-filho').value;
    let cpf_filho = document.getElementById('cpf-filho').value;
    let telefone_responsavel = document.getElementById('telefone-responsavel').value;

    await fetch('/cadastrar-aluno', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome_responsavel, nome_filho, cpf_responsavel, cpf_filho, telefone_responsavel})
    });

    alert('Aluno cadastrado com sucesso!');
}