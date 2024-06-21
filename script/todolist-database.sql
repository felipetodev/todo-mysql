-- Creación de la base de datos
DROP DATABASE IF EXISTS todolistdb;
CREATE DATABASE todolistdb;

-- Utilizar DB
USE todolistdb;

-- Crear tabla para cada Todo
CREATE TABLE todo (
	id binary(16) PRIMARY KEY DEFAULT (UUID_TO_BIN(UUID())),
    description VARCHAR(255) NOT NULL,
    completed TINYINT(1) NOT NULL DEFAULT 0,
    createdAt TIMESTAMP NOT NULL DEFAULT (NOW())
);

-- Añadir Todos iniciales a tabla Todo
INSERT INTO todo (id, description, completed) VALUES
(UUID_TO_BIN(UUID()), 'Terminar API Generative UI con FastAPI', 0),
(UUID_TO_BIN(UUID()), 'Terminar side project LinkedGrow', 0),
(UUID_TO_BIN(UUID()), 'Comprar licencia de GitHub Copilot', 0),
(UUID_TO_BIN(UUID()), 'Pagar suscripción de Crunchyroll y Netflix', 1);

SELECT description, completed, createdAt, BIN_TO_UUID(id) id FROM todo;