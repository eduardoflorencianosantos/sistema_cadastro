// Função que faz o cadastro funcionar
async function ocorrencia() {
    let nome_aluno = document.getElementById('nome-aluno').value;
    let nome_professor = document.getElementById('nome-professor').value;
    let disciplina = document.getElementById('disciplina').value;
    let turma = document.getElementById('turma').value;
    let data_ocorrencia = document.getElementById('data-ocorrencia').value;
    let horario_ocorrencia = document.getElementById('horario-ocorrencia').value;
    let descricao_ocorrencia = document.getElementById('descricao-ocorrencia').value;

    await fetch('/cadastrar-aluno', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({nome_aluno, nome_professor, disciplina, turma, data_ocorrencia, horario_ocorrencia, descricao_ocorrencia})
    });

    alert('Ocorrencia cadastrada com sucesso!');
    
}