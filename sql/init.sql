CREATE TABLE livros (
  id int primary key auto_increment,
  titulo_livro varchar(200) NOT NULL,
  quantidade int DEFAULT 0,
  preco float DEFAULT 0.00,
  link varchar(255) NOT NULL DEFAULT ""
);

INSERT INTO livros(titulo_livro, quantidade, preco) VALUES
("SHIGENKI NO KYOJIN", 50, 120.54),
("As Crônicas de Nárnia", 20, 70.30),
("O príncipe", 32, 57.00);

CREATE TABLE users (
  id int primary key auto_increment,
  username varchar(80) NOT NULL,
  user_key varchar(80) NOT NULL
);

