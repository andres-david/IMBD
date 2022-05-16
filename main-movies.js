"use strict";
exports.__esModule = true;
exports.imdb = void 0;
var clases_1 = require("./clases");
var main_movie_1 = require("./main-movie");
exports.imdb = new clases_1.Imdb([main_movie_1.movie1, main_movie_1.movie2]);
/**********************  AVANZADO  ********************* */
var fs = require('fs-extra');
var imdbJS = JSON.stringify(exports.imdb);
fs.outputFileSync('imdbBBDD.json', imdbJS);
var data = fs.readFileSync('./imdbBBDD.json', 'utf8');
// console.log(data);
var imbd2 = JSON.parse(data);
