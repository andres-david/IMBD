import { Movie } from "./clase-professional";
import { actores, actores2, director, directorM2, mainCharacter, mainCharacter2, producer, producerM2, writer, writerM2 } from "./main-professional";


export let movie1 = new Movie('inception', 2010, 'Estados Unidos', 'suspenso');

movie1.setActors(actores);
movie1.setDirector(director);
movie1.setWriter(writer);
movie1.setLanguage('Inglés');
movie1.setPlatarform('HBO');
movie1.setIsMCU(false);
movie1.setDistributor('Caramelo Studio');
movie1.printInfo();

// movie2

export let movie2 = new Movie('El gato volador', 2015, 'Republica Checa', 'Acción');

movie2.setActors(actores2);
movie2.setDirector(directorM2);
movie2.setWriter(writerM2);
movie2.setLanguage('Español');
movie2.setPlatarform('Netflix');
movie2.setIsMCU(true);
movie2.setDistributor('Camello Studio');
movie2.printInfo();


