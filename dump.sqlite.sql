-- TABLE
CREATE TABLE aluno(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  cgm VARCHAR(20) NOT NULL UNIQUE,
  cpf INTEGER,
  telefone INTEGER,
  serie VARCHAR(20),
  responsavel_aluno VARCHAR(150),
  telefone_responsavel INTEGER,
  data_nascimento DATE
);
CREATE TABLE demo (ID integer primary key, Name varchar(20), Hint text );
CREATE TABLE disciplina(
  id INTEGER PRIMARY key AUTOINCREMENT,
  nome TEXT NOT NULL,
  serie VARCHAR(30),
  nome_professor VARCHAR(150),
  cpf_professor INTEGER
);
CREATE TABLE encaminhamento(
  id INTEGER PRIMARY KEy AUTOINCREMENT,
  nome_aluno TEXT,
  nome_professor VARCHAR(150),
  disciplina TEXT,
  serie VARCHAR(30),
  data_encaminhamento DATE,
  horario TEXT,
  FOREIGN KEy ('nome_aluno') REFERENCES aluno('nome'),
  FOREIGN KEY ('nome_professor') REFERENCES disciplina('nome_professor'),
  FOREIGN key ('disciplina') REFERENCES disciplina('nome_disciplina'),
  FOREIGN key ('serie') REFERENCES aluno('serie')
);
CREATE TABLE responsavel(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome VARCHAR(150) NOT NULL,
  telefone INTEGER,
  id_aluno INTEGER,
  cpf INTEGER,
  FOREIGN key ('id_aluno') REFERENCES aluno ('id')
);
 
-- INDEX
 
-- TRIGGER
 
-- VIEW
 
