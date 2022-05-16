import { Imdb } from "./clase-professional";
import { movie1, movie2 } from "./main-movie";



export let imdb: Imdb = new Imdb([movie1, movie2]);


/**********************  AVANZADO  ********************* */

const fs = require('fs-extra');

let imdbJS = JSON.stringify(imdb);

fs.outputFileSync('imdbBBDD.json', imdbJS);

const data = fs.readFileSync('./imdbBBDD.json', 'utf8');
console.log(data);


let imbd2: Imdb = JSON.parse(data);




