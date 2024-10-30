// Função que faz o cadastro funcionar
async function turma() {
    let turma = document.getElementById('turma').value;
    let ano_letivo = document.getElementById('ano-letivo').value;
    let curso = document.getElementById('curso').value;

    await fetch('/cadastrar-aluno', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ turma, ano_letivo, curso})
    });
}