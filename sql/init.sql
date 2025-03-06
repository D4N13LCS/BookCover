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
  username varchar(80) NOT NULL UNIQUE,
  user_key varchar(80) NOT NULL
);

CREATE TABLE cart_items (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  item VARCHAR(100) DEFAULT '',
  qtd_item INT DEFAULT 0,
  preco DECIMAL(10,2) DEFAULT 0.00,
  link VARCHAR(255) DEFAULT '',
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
