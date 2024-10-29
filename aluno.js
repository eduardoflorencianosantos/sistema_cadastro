// Função que faz o cadastro funcionar
async function aluno() {
    let nome_aluno = document.getElementById('nome-aluno').value;
    let cpf = document.getElementById('cpf').value;
    let telefone = document.getElementById('telefone').value;
    let cgm = document.getElementById('cgm').value;
    let serie = document.getElementById('turma').value;
    let responsavel = document.getElementById('responsavel').value;
    let telefone_responsavel = document.getElementById('telefone-responsavel').value;
    let data_nascimento = document.getElementById('data-nascimento').value;

    await fetch('/cadastrar-aluno', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cgm, nome_aluno, cpf, telefone, serie, responsavel, telefone_responsavel, data_nascimento})
    });
  
    alert('Aluno cadastrado com sucesso!');
  }