import { Movie, Movie2 } from './clases';

const ps     = require('prompt-sync');
const prompt = ps();

const fs     = require('fs-extra');

let movie = new Movie2();

movie.title             = prompt('Nombre de la pélicula: ');
movie.releaseYear       = prompt('Año de lanzamiento: ');
movie.actors            = prompt('Actores: ');
movie.nationality       = prompt('País de origen: ');
movie.director          = prompt('Director: ');
movie.writer            = prompt('Escritor: ');
movie.language          = prompt('Idioma: ');
movie.plataform         = prompt('Plataforma: ');
movie.isMCU             = Boolean( prompt('Universo Marvel (true/false): ') );
movie.mainCharacterName = prompt('Actor o Actriz principal: ');
movie.producer          = prompt('Productor: ');
movie.distributor       = prompt('Distribuidor: ');
movie.genre             = prompt('Género: ');



const data = fs.readFileSync('imdbBBDD.json');

let collection = JSON.parse( data );

collection['movies'].push(movie);

let newData = JSON.stringify(collection);

fs.outputFileSync('imdbBBDD.json', newData);








