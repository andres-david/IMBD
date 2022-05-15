"use strict";
exports.__esModule = true;
exports.Imdb = exports.Movie = exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarNumber, profession) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarNumber = oscarNumber;
        this.profession = profession;
    }
    Professional.prototype.printAll = function () {
        console.log("name: ".concat(this.name, "\n        age: ").concat(this.age, "\n        genre: ").concat(this.genre, "\n        weight: ").concat(this.weight, "\n        height: ").concat(this.height, "\n        hairColor: ").concat(this.hairColor, "\n        eyeColor: ").concat(this.eyeColor, "\n        race: ").concat(this.race, "\n        isRetired: ").concat(this.isRetired, "\n        nationality: ").concat(this.nationality, "\n        oscarNumber: ").concat(this.oscarNumber, "\n        profession: ").concat(this.profession));
    };
    return Professional;
}());
exports.Professional = Professional;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nationality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
    }
    Movie.prototype.setTitle = function (title) {
        this.title = title;
    };
    Movie.prototype.setReleaseYear = function (releaseYear) {
        this.releaseYear = releaseYear;
    };
    Movie.prototype.setActors = function (actors) {
        this.actors = actors;
    };
    Movie.prototype.setNationality = function (nationality) {
        this.nationality = nationality;
    };
    Movie.prototype.setDirector = function (director) {
        this.director = director;
    };
    Movie.prototype.setWriter = function (writer) {
        this.writer = writer;
    };
    Movie.prototype.setLanguage = function (language) {
        this.language = language;
    };
    Movie.prototype.setPlatarform = function (plataform) {
        this.plataform = plataform;
    };
    Movie.prototype.setIsMCU = function (isMcu) {
        this.isMCU = isMcu;
    };
    Movie.prototype.setMainCharacterName = function (mainCharacter) {
        this.mainCharacterName = mainCharacter;
    };
    Movie.prototype.setProducer = function (producer) {
        this.producer = producer;
    };
    Movie.prototype.setDistributor = function (distributor) {
        this.distributor = distributor;
    };
    Movie.prototype.setGenre = function (genre) {
        this.genre = genre;
    };
    Movie.prototype.printInfo = function () {
        console.log("Title: ".concat(this.title, "\n        ReleaseYear: ").concat(this.releaseYear, "\n        Actors: ").concat(this.actors, "\n        Nacionality: ").concat(this.nationality, "\n        Director: ").concat(this.director, "\n        Write: ").concat(this.language, "\n        Language: ").concat(this.plataform, "\n        Plataform: ").concat(this.plataform, "\n        IsMCU: ").concat(this.isMCU, "\n        Main Character Name: ").concat(this.mainCharacterName, "\n        Producer: ").concat(this.producer, "\n        Distributor: ").concat(this.distributor, "\n        Genre: ").concat(this.genre, "\n        "));
    };
    return Movie;
}());
exports.Movie = Movie;
var Imdb = /** @class */ (function () {
    function Imdb(movies) {
        this.movies = movies;
    }
    return Imdb;
}());
exports.Imdb = Imdb;
