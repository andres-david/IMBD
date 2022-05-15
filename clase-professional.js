"use strict";
exports.__esModule = true;
exports.Professional = void 0;
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
