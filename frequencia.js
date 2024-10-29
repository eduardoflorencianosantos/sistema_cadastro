// Função que faz o cadastro funcionar
async function frequencia() {
    let nome_aluno = document.getElementById('nome-aluno').value;
    let responsavel_busca = document.getElementById('responsavel-busca').value;
    let contato_responsavel = document.getElementById('contato-responsavel').value;
    let turma = document.getElementById('turma').value;
    let busca_ativa = document.getElementById('busca-ativa').value;
    let meio_contato = document.getElementById('meio-contato').value;
    let resultado_contato = document.getElementById('resultado-contato').value;
    let dataFalta = document.getElementById('data-falta').value;

    await fetch('/cadastrar-aluno', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome_aluno, responsavel_busca, contato_responsavel, turma, busca_ativa, meio_contato, resultado_contato, dataFalta})
    });

    alert('Aluno cadastrado com sucesso!');
}