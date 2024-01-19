CREATE TABLE usuarios (
	id_user INT AUTO_INCREMENT PRIMARY KEY,
    primeiroNome VARCHAR(255) NOT NULL,
    sobrenome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    apelido VARCHAR(255) NOT NULL,
    cpf VARCHAR(11) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    dataNascimento DATE NOT NULL,
	saldo DECIMAL(10,2) DEFAULT 0,
	pontos SMALLINT UNSIGNED NOT NULL DEFAULT 0 CHECK (pontos <= 5000)
);


INSERT INTO usuarios (primeiroNome, sobrenome, email, apelido, cpf, senha, dataNascimento, saldo, pontos)
VALUES
    ('João', 'Silva', 'joaosilva@email.com', 'joaosilva123', '12345678901', '123456', '1990-01-01', 100.00, 0),
    ('Maria', 'Souza', 'mariasouza@email.com', 'mariasouza123', '98765432100', '123456', '1985-05-15', 50.00, 0),
    ('Pedro', 'Oliveira', 'pedrooliveira@email.com', 'pedrooliveira123', '01234567899', '123456', '1992-08-22', 200.00, 0),
    ('Ana', 'Pereira', 'anapereira@email.com', 'anapereira123', '11111111111', '123456', '1998-03-10', 0.00, 0),
    ('Carlos', 'Barbosa', 'carlosbarbosa@email.com', 'carlosbarbosa123', '22222222222', '123456', '1980-12-05', 350.00, 0);



