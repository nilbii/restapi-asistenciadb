CREATE DATABASE IF NOT EXISTS asistenciasdb;

USE asistenciasdb;

CREATE TABLE alumno (
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (45) DEFAULT NULL,
    apellido VARCHAR (45) DEFAULT NULL,
    asistencia VARCHAR (11) DEFAULT NULL,
    PRIMARY KEY (id)
); 

DESCRIBE alumno;

INSERT INTO alumno VALUES
    (1, 'Marcelo', 'Cordoba', 'Si asistió'),
    (2, 'Lara', 'Cordoba', 'Si asistió'),
    (3, 'Micaela', 'Ramirez', 'No asistió'),
    (4, 'Dionel', 'Pramparo', 'Si asistió');