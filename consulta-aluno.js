//Aqui vai consultar o Aluno
async function consultarAluno() {
  const nome = document.getElementById('nome').value;
  const cgm = document.getElementById('cgm').value;
  const turma = document.getElementById('turma').value;

  const queryParams = new URLSearchParams();
  if (nome) queryParams.append('nome', nome);
  if (cgm) queryParams.append('cgm', cgm);
  if (turma) queryParams.append('materia', turma);

  // Faz a requisição para a rota de consulta
  const response = await fetch(`/consultar-alunos?${queryParams.toString()}`);

  // Verifica se a resposta foi bem sucedida
  if (!response.ok) {
      console.error('Erro ao consultar alunos:', response.statusText);
      return;
  }

  const alunos = await response.json();
  console.log('Alunos retornados:', alunos); // Adiciona log para verificar dados retornados
  const tabelaResultados = document.getElementById('resultadoConsulta');
  const tbody = tabelaResultados.querySelector('tbody');
  tbody.innerHTML = ''; // Limpa a tabela antes de adicionar resultados

  if (alunos.length > 0) {
          tabelaResultados.style.display = 'table';
          alunos.forEach(aluno => {
              const row = document.createElement('tr');
              row.innerHTML = `
                  <td>${aluno.cgm}</td>
                  <td>${aluno.nome}</td>
                  <td>${aluno.turma || '-'}</td>
              `;
              tbody.appendChild(row);
          });
        alert("ok");
      } else {
          tabelaResultados.style.display = 'none';
          alert('Nenhum aluno encontrado com os critérios informados.');
      }
} 