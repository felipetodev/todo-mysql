-- Creación de la base de datos
DROP DATABASE IF EXISTS todolistdb;
CREATE DATABASE todolistdb;

-- Utilizar DB
USE todolistdb;

-- Crear tabla para cada Todo
CREATE TABLE todo (
	id binary(16) PRIMARY KEY DEFAULT (UUID_TO_BIN(UUID())),
    description VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Añadir Todos iniciales a tabla Todo
INSERT INTO todo (id, description, completed) VALUES
(UUID_TO_BIN(UUID()), 'Retomar clases de inglés', false),
(UUID_TO_BIN(UUID()), 'Reordenar el escritorio', false),
(UUID_TO_BIN(UUID()), 'Pasar a comprar papas, huevos, salsa, aceite y harina.', false),
(UUID_TO_BIN(UUID()), 'Comprar útiles escolares antes del lunes 25 de marzo', true);

SELECT description, completed, createdAt, BIN_TO_UUID(id) id FROM todo;