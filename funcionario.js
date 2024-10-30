// Função que faz o cadastro funcionar
async function funcionario() {
    let nome_funcionario = document.getElementById('nome-funcionario').value;
    let cpf_funcionario = document.getElementById('cpf').value;
    let telefone_funcionario = document.getElementById('telefone').value;
    let setor = document.getElementById('setor').value;
    let admissao = document.getElementById('admissao').value;

    await fetch('/cadastrar-aluno', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome_funcionario, cpf_funcionario, telefone_funcionario, setor, admissao})
    });

    alert('Aluno cadastrado com sucesso!');
}