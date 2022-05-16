"use strict";
exports.__esModule = true;
exports.imdb = void 0;
var clase_professional_1 = require("./clase-professional");
var main_movie_1 = require("./main-movie");
var fs = require('fs-extra');
exports.imdb = new clase_professional_1.Imdb([main_movie_1.movie1, main_movie_1.movie2]);
/**********************  AVANZADO  ********************* */
var imdbJS = JSON.stringify(exports.imdb);
fs.outputFileSync('imdbBBDD.json', imdbJS);
var data = fs.readFileSync('./imdbBBDD.json', 'utf8');
console.log(data);
