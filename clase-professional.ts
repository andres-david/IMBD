
export class Professional {
    public name       : string;
    public age        : number;
    public genre      : string;
    public weight     : number;
    public height     : number;
    public hairColor  : string;
    public eyeColor   : string;
    public race       : string;
    public isRetired  : boolean;
    public nationality: string;
    public oscarNumber: number;
    public profession : string;

    constructor( name: string, age: number, genre: string, weight: number, height: number, hairColor: string, eyeColor: string, race: string, isRetired: boolean, nationality: string, oscarNumber: number, profession: string ){
        this.name        = name;
        this.age         = age; 
        this.genre       = genre;
        this.weight      = weight;
        this.height      = height;
        this.hairColor   = hairColor;
        this.eyeColor    = eyeColor;
        this.race        = race;
        this.isRetired   = isRetired;
        this.nationality = nationality;
        this.oscarNumber = oscarNumber;
        this.profession  = profession;
    }

    printAll(): void{
        console.log(`name: ${this.name}
        age: ${this.age}
        genre: ${this.genre}
        weight: ${this.weight}
        height: ${this.height}
        hairColor: ${this.hairColor}
        eyeColor: ${this.eyeColor}
        race: ${this.race}
        isRetired: ${this.isRetired}
        nationality: ${this.nationality}
        oscarNumber: ${this.oscarNumber}
        profession: ${this.profession}`);
    }

}


export class Movie{
    public title            : string;
    public releaseYear      : number;
    public actors           : Professional[];
    public nationality      : string;
    public director         : Professional;
    public writer           : Professional;
    public language         : string;
    public plataform        : string;
    public isMCU            : boolean;
    public mainCharacterName: Professional;
    public producer         : Professional;
    public distributor      : string;
    public genre            : string;

    constructor(title: string, releaseYear: number, nationality: string, genre: string){
        this.title       = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre       = genre;
    }

    setTitle(title: string): void{
        this.title = title;
    }

    setReleaseYear( releaseYear: number ){
        this.releaseYear = releaseYear;
    }

    setActors( actors: Professional[] ){
        this.actors = actors;
    }

    setNationality( nationality: string ){
        this.nationality = nationality;
    }

    setDirector( director: Professional ){
        this.director = director;
    }

    setWriter( writer: Professional ){
        this.writer = writer;
    }

    setLanguage( language: string ){
        this.language = language;
    }

    setPlatarform( plataform: string ){
        this.plataform = plataform;
    }

    setIsMCU( isMcu: boolean ){
        this.isMCU = isMcu;
    }

    setMainCharacterName( mainCharacter: Professional ){
        this.mainCharacterName = mainCharacter;
    }

    setProducer( producer: Professional ){
        this.producer = producer;
    }

    setDistributor( distributor: string){
        this.distributor = distributor;
    }
    setGenre( genre: string ){
        this.genre = genre;
    }

    printInfo(): void{
        console.log(`Title: ${this.title}
        ReleaseYear: ${this.releaseYear}
        Actors: ${this.actors}
        Nacionality: ${this.nationality}
        Director: ${this.director}
        Write: ${this.language}
        Language: ${this.plataform}
        Plataform: ${this.plataform}
        IsMCU: ${this.isMCU}
        Main Character Name: ${this.mainCharacterName}
        Producer: ${this.producer}
        Distributor: ${this.distributor}
        Genre: ${this.genre}
        `)
    }
    

}
