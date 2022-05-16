"use strict";
exports.__esModule = true;
var clases_1 = require("./clases");
var ps = require('prompt-sync');
var prompt = ps();
var fs = require('fs-extra');
var movie = new clases_1.Movie2();
movie.title = prompt('Nombre de la pélicula: ');
movie.releaseYear = prompt('Año de lanzamiento: ');
movie.actors = prompt('Actores: ');
movie.nationality = prompt('País de origen: ');
movie.director = prompt('Director: ');
movie.writer = prompt('Escritor: ');
movie.language = prompt('Idioma: ');
movie.plataform = prompt('Plataforma: ');
movie.isMCU = Boolean(prompt('Universo Marvel (true/false): '));
movie.mainCharacterName = prompt('Actor o Actriz principal: ');
movie.producer = prompt('Productor: ');
movie.distributor = prompt('Distribuidor: ');
movie.genre = prompt('Género: ');
var data = fs.readFileSync('imdbBBDD.json');
var collection = JSON.parse(data);
collection['movies'].push(movie);
var newData = JSON.stringify(collection);
fs.outputFileSync('imdbBBDD.json', newData);