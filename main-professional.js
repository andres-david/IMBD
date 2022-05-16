"use strict";
exports.__esModule = true;
exports.producerM2 = exports.writerM2 = exports.directorM2 = exports.actores2 = exports.mainCharacter2 = exports.producer = exports.writer = exports.director = exports.actores = exports.mainCharacter = void 0;
var clases_1 = require("./clases");
/****************     Profesionales Movie1      ****************** */
exports.mainCharacter = new clases_1.Professional('Lonardo', 1980, 'Masculino', 80, 1.80, 'Rubio', 'Verdes', 'Actuación', false, 'Americana', 10, 'Actor');
var actor2 = new clases_1.Professional('Maria', 1992, 'Femenino', 70, 1.60, 'Negro', 'Cafés', 'Actuación', false, 'Francesa', 2, 'Actriz');
var actor3 = new clases_1.Professional('Pedro', 1970, 'Masculino', 90, 1.90, 'Castaño', 'Azules', 'Actuación', true, 'España', 4, 'Actor');
exports.actores = [exports.mainCharacter, actor2, actor3];
exports.director = new clases_1.Professional('Juanito', 1965, 'Masculino', 85, 1.70, 'Blanco', 'Grises', 'Dirección', false, 'Australia', 4, 'Director');
exports.writer = new clases_1.Professional('Ramona', 1992, 'Femenino', 60, 1.70, 'Castaño', 'Verdes', 'Escritora', false, 'Colombia', 2, 'Escritora');
exports.producer = new clases_1.Professional('Virginia', 2001, 'Femenino', 50, 1.65, 'Castaño', 'Azul', 'Producción', true, 'Venezuela', 8, 'Productora');
/**********************        Profesionales Movie2         *************************** */
exports.mainCharacter2 = new clases_1.Professional('Martina', 1982, 'Femenino', 65, 1.65, 'Negro', 'Cafés', 'Actuación', false, 'Alemana', 1, 'Actiz');
var actorM2 = new clases_1.Professional('Fercho', 1991, 'Masculino', 70, 1.75, 'Castaño', 'Gris', 'Acutación', true, 'Italiana', 2, 'Actor');
var actorM3 = new clases_1.Professional('David', 1990, 'Masculino', 85, 1.80, 'Rojo', 'Verde', 'Actuación', false, 'Portuguesa', 1, 'Actor');
exports.actores2 = [exports.mainCharacter2, actorM2, actorM3];
exports.directorM2 = new clases_1.Professional('Rin', 1995, 'Femenino', 52, 1.65, 'Negro', 'Grises', 'Dirección', true, 'Japonesa', 0, 'Directora');
exports.writerM2 = new clases_1.Professional('Alejandro', 1978, 'Masculino', 75, 1.92, 'Rubio', 'Negros', 'Escritor', false, 'Polaca', 2, 'Escritor');
exports.producerM2 = new clases_1.Professional('Damian', 1998, 'Masculino', 76, 1.85, 'Negro', 'Azules', 'Producción', true, 'Hungaro', 3, 'Productor');
