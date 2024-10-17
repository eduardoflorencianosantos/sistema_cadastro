-- Aqui criamos a tabela aluno
CREATE TABLE aluno(
  --Colocamos uma chave primaria em um id que e auto incrementado
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  --Aqui e o nome do aluno tipo Texto e ele não pode estar vazio
  nome TEXT NOT NULL,
  --Aqui e o cgm do aluno do tipo VARCHAR e ele não pode estar vazio e ele é unico
  cgm VARCHAR(20) NOT NULL UNIQUE,
  --Aqui e o cpf do aluno do tipo INTEGER
  cpf INTEGER,
  --Aqui e o telefone do aluno do tipo INTEGER
  telefone INTEGER,
  --Aqui e a serie do aluno do tipo VARCHAR
  serie VARCHAR(20),
  --Aqui e o nome do responsavel do tipo VARCHAR
  nome_responsavel VARCHAR(150),
  --Aqui e o telefone do responasevel do aluno do tipo INTEGER
  telefone_responsavel INTEGER,
  --Aqui e a data de nascimento do aluno tipo DATE
  data_nascimento DATE,
  --Aqui estamos indicando que existe uma chave estrangeira e aonde ela esta localizada
  FOREIGN KEY ('telefone_responsavel') REFERENCES responsavel('telefone'),
  --Aqui estamos indicando que existe uma chave estrangeira e aonde ela esta localizada
  FOREIGN KEY ('nome_responsavel') REFERENCES responsavel('nome')
);

--Aqui criamos a tabela disciplina
CREATE TABLE disciplina(
  --Colocamos uma chave primaria em um id que e auto incrementado
  id INTEGER PRIMARY key AUTOINCREMENT,
  --Aqui e o nome da disciplina tipo Texto e ele não pode estar vazio
  nome TEXT NOT NULL,
  --Aqui e a serie da disciplina do tipo VARCHAR
  serie VARCHAR(30),
  --Aqui é o nome do professor aplicador da disciplina do tipo VARCHAR
  nome_professor VARCHAR(150),
  --Aqui e o cpf do professor aplicador da disciplina do tipo INTEGER e ele não pode ser vazio
  cpf_professor INTEGER NOT NULL,
  --Aqui estamos indicando que existe uma chave estrangeira e aonde ela esta localizada
  FOREIGN KEY ('nome_professor')REFERENCES funcionario('nome'),
  --Aqui estamos indicando que existe uma chave estrangeira e aonde ela esta localizada
  FOREIGN KEY ('cpf_professor')REFERENCES funcionario('cpf')
);

--Aqui criamos a tabela encaminhamento
CREATE TABLE encaminhamento(
  --Colocamos uma chave primaria em um id que e auto incrementado
  id INTEGER PRIMARY KEy AUTOINCREMENT,
  --Aqui e o nome do aluno tipo Texto e ele não pode ser vazio
  nome_aluno TEXT NOT NULL,
  --Aqui é o nome do professor do tipo VARCHAR
  nome_professor VARCHAR(150),
  --Aqui vai ser o nome da disciplina do tipo TEXT
  disciplina TEXT,
  --Aqui vai ser a serie do aluno do tipo VARCHAR
  serie VARCHAR(30),
  --Aqui vai conter a data do encaminhamento
  data_encaminhamento DATE,
  --Aqui vai conter a hora do encaminhamento
  horario TEXT,
  --Aqui vai contar a ocorrencia do tipo VARCHAR
  pedagogico VARCHAR(200),
  --Aqui vai contar a ocorrencia do tipo VARCHAR
  monitor VARCHAR(200),
  --Aqui estamos indicando que existe uma chave estrangeira e aonde ela esta localizada
  FOREIGN KEy ('nome_aluno') REFERENCES aluno('nome'),
  --Aqui estamos indicando que existe uma chave estrangeira e aonde ela esta localizada
  FOREIGN KEY ('nome_professor') REFERENCES disciplina('nome_professor'),
  --Aqui estamos indicando que existe uma chave estrangeira e aonde ela esta localizada
  FOREIGN key ('disciplina') REFERENCES disciplina('nome_disciplina'),
  --Aqui estamos indicando que existe uma chave estrangeira e aonde ela esta localizada
  FOREIGN key ('serie') REFERENCES aluno('serie')
);

--Aqui criamos a tabela funcionario
CREATE TABLE funcionario(
  --Colocamos uma chave primaria em um id que e auto incrementado
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  --Aqui é o nome do funcionario é ele não pose ser vazio do tipo TEXT
  nome TEXT NOT NULL,
  --Aqui é o cpf do funcionario e é do tipo INTEGER
  cpf INTEGER,
  --Aqui é o telefone do funcionario do tipo INTEGER
  telefone INTEGER,
  --Aqui é o setor do funcionario do tipo TEXT e ele não pode ser vazio
  setor TEXT NOT NULL,
  --Aqui é a admissão do funcionario do tipo TEXT
  admissao TEXT
);

--Aqui criamos a tabela ocorrencia
CREATE TABLE ocorrencia(
  --Colocamos uma chave primaria em um id que e auto incrementado
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  --Aqui e o nome do aluno tipo VARCHAR e ele não pode ser vazio
  nome_aluno VARCHAR(150) NOT NULL,
  --Aqui e o nome do funcionario tipo Texto e ele não pode ser vazio
  nome_funcionario VARCHAR(150) NOT NULL,
  --Aqui é a disciplia do tipo TEXT
  disciplina TEXT,
  --Aqui é a serie do aluno do tipo VARCHAR
  serie VARCHAR(20),
  --Aqui é a data da ocorrencia do tipo DATE
  data_ocorencia DATE,
  --Aqui é o horario da ocorrencia do tipo TIME
  horario TIME,
  --Aqui é a descrição da ocorrencia do tipo TEXT
  descricao TEXT,
  --Aqui estamos indicando que existe uma chave estrangeira e aonde ela esta localizada
  FOREIGN KEy ('nome_aluno')REFERENCES aluno('nome'),
  --Aqui estamos indicando que existe uma chave estrangeira e aonde ela esta localizada
  FOREIGN KEy ('nome_funcionario')REFERENCES funcionario('nome'),
  --Aqui estamos indicando que existe uma chave estrangeira e aonde ela esta localizada
  FOREIGN KEy ('disciplina')REFERENCES disciplina('nome'),
  --Aqui estamos indicando que existe uma chave estrangeira e aonde ela esta localizada
  FOREIGN KEy ('serie')REFERENCES aluno('serie')
);

--Aqui criamos a tabela responsavel
CREATE TABLE responsavel(
  --Colocamos uma chave primaria em um id que e auto incrementado
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  --Aqui é o nome do responsavel do tipo VARCHAR e ele não pode ser vazio
  nome VARCHAR(150) NOT NULL,
  --Aqui é o telefone do responsavel do tipo INTEGER
  telefone INTEGER,
  --Aqui é o id do aluno do tipo INTEGER e ele não pode ser vazio
  id_aluno INTEGER not NULL,
  --Aqui é o cpf do responsavel do tipo INTEGER
  cpf INTEGER,
  --Aqui estamos indicando que existe uma chave estrangeira e aonde ela esta localizada
  FOREIGN key ('id_aluno') REFERENCES aluno ('id')
);
 
-- CRiamos a tabela de frequencia 
CREATE table frequencia(
  --Colocamos uma chave primaria em um id que e auto incrementado
  id INTEGER PRIMARY key AUTOINCREMENT,
  -- Aqui é o nome do aluno do tipo TEXT e ele não pode ser vazio
  nome_aluno TEXT NOT NULL,
  -- Aqui é o nome do funcionario que relatou a falta do aluno do tipo TEXT
  nome_funcionario TEXT,
  -- Aqui é o meio de contato do tipo VARCHAR e ele não pode ser vazio
  meio_contato VARCHAR(50) NOT NULL,
  --Aqui e a turma do aluno do tipo VARCHAR
  turma VARCHAR(20),
  --Aqui é a data da falta do tipo DATE e ele não pode ser vazio
  data_falta DATE NOT NULL,
  --Aqui é a data da busca do tipo DATE
  data_busca DATE,
  --Aqui é o resultado do contato do tipo TEXT
  resultado_contato TEXT,
  --Aqui estamos indicando que existe uma chave estrangeira e aonde ela esta localizada
  FOREIGN key ('nome_aluno') REFERENCES aluno('nome'),
  --Aqui estamos indicando que existe uma chave estrangeira e aonde ela esta localizada
  FOREIGN key ('nome_funcionario') REFERENCES funcionario('nome'),
  --Aqui estamos indicando que existe uma chave estrangeira e aonde ela esta localizada
  FOREIGN key ('turma') REFERENCES aluno('serie')