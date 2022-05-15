import { Professional } from './clase-professional';



/****************     Profesionales Movie1      ****************** */


export let mainCharacter: Professional = new Professional('Lonardo', 1980, 'Masculino', 80, 1.80, 'Rubio', 'Verdes', 'Actuación', false, 'Americana', 10, 'Actor');

let actor2: Professional = new Professional('Maria', 1992, 'Femenino', 70, 1.60, 'Negro', 'Cafés', 'Actuación', false, 'Francesa', 2, 'Actriz');

let actor3: Professional = new Professional('Pedro', 1970, 'Masculino', 90, 1.90, 'Castaño', 'Azules', 'Actuación', true, 'España', 4, 'Actor');

export let actores: Professional[] = [mainCharacter, actor2, actor3];

export let director: Professional = new Professional('Juanito', 1965, 'Masculino', 85, 1.70, 'Blanco', 'Grises', 'Dirección', false, 'Australia', 4, 'Director');

export let writer: Professional = new Professional('Ramona', 1992, 'Femenino', 60, 1.70, 'Castaño', 'Verdes', 'Escritora', false, 'Colombia', 2, 'Escritora');

export let producer: Professional = new Professional('Virginia', 2001, 'Femenino', 50, 1.65, 'Castaño', 'Azul', 'Producción', true, 'Venezuela', 8, 'Productora');


/**********************        Profesionales Movie2         *************************** */


export let mainCharacter2: Professional = new Professional('Martina', 1982, 'Femenino', 65, 1.65, 'Negro', 'Cafés', 'Actuación', false, 'Alemana', 1, 'Actiz');

let actorM2: Professional = new Professional('Fercho', 1991, 'Masculino', 70, 1.75, 'Castaño', 'Gris', 'Acutación', true, 'Italiana', 2, 'Actor');

let actorM3: Professional = new Professional('David', 1990, 'Masculino', 85, 1.80, 'Rojo', 'Verde', 'Actuación', false, 'Portuguesa', 1, 'Actor');

export let actores2: Professional[] = [mainCharacter2, actorM2, actorM3];

export let directorM2: Professional = new Professional('Rin', 1995, 'Femenino', 52, 1.65, 'Negro', 'Grises', 'Dirección', true, 'Japonesa', 0, 'Directora');

export let writerM2: Professional = new Professional('Alejandro', 1978, 'Masculino', 75, 1.92, 'Rubio', 'Negros', 'Escritor', false, 'Polaca', 2, 'Escritor');

export let producerM2: Professional = new Professional('Damian', 1998, 'Masculino', 76, 1.85, 'Negro', 'Azules', 'Producción', true, 'Hungaro', 3, 'Productor' );




