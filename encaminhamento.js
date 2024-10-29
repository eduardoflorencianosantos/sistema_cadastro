// Função que faz o cadastro funcionar
async function encaminhamento() {
    let nome_aluno = document.getElementById('nome-aluno').value;
    let nome_professor = document.getElementById('nome-professor').value;
    let disciplina = document.getElementById('disciplina').value;
    let turma = document.getElementById('turma').value;
    let data_ocorrencia = document.getElementById('data-ocorrencia').value;
    let horario_ocorrencia = document.getElementById('horario-ocorrencia').value;
    let ocorrencia_pedagogica = document.getElementById('ocorrencia-pedagogica').value;
    let ocorrencia_monitores = document.getElementById('ocorrencia-monitores').value;
    let outro = document.getElementById('outro').value;
    let punicao = document.getElementById('punicao').value;


    await fetch('/cadastrar-aluno', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome_aluno, nome_professor, disciplina, turma, data_ocorrencia, horario_ocorrencia, ocorrencia_pedagogica, ocorrencia_monitores, outro, punicao})
    });

    alert('Aluno cadastrado com sucesso!');
}