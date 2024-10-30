// Função que faz o cadastro funcionar
async function disciplina() {
    let nome_disciplina = document.getElementById('nome-disciplina').value;
    let professor_disciplina = document.getElementById('professor-disciplina').value;
    let turma = document.getElementById('turma').value;

    await fetch('/cadastrar-aluno', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome_disciplina, professor_disciplina, turma})
    });

    alert('Aluno cadastrado com sucesso!');
}