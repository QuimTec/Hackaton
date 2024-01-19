/*
  Será atualizada com dados de jogos reais
*/
CREATE TABLE jogos (
  id_jogo INT AUTO_INCREMENT PRIMARY KEY,
  liga VARCHAR(50) NOT NULL,
  equipeA VARCHAR(50) NOT NULL,
  equipeB VARCHAR(50) NOT NULL,
  diaJogo TIMESTAMP NOT NULL,
  oddsA DECIMAL(10,2),
  oddsB DECIMAL(10,2),  
  encerrado BOOLEAN NOT NULL DEFAULT false,
  equipeVencedora VARCHAR(50),
  UNIQUE KEY (equipeA, diaJogo),
  UNIQUE KEY (equipeB, diaJogo)
);

INSERT INTO jogos (liga, equipeA, equipeB, diaJogo, oddsA, oddsB) VALUES
('Liga A','Time A', 'Time B', '2023-08-15 19:30:00', 1.80, 2.20),
('Liga A','Time C', 'Time D', '2023-08-15 21:00:00', 1.65, 3.50),
('Liga B','Time E', 'Time F', '2023-08-16 20:00:00', 2.00, 2.50),
('Liga B','Time G', 'Time H', '2023-08-17 19:30:00', 1.75, 2.00),
('Liga C','Time I', 'Time J', '2023-08-17 21:00:00', 1.90, 2.25);
