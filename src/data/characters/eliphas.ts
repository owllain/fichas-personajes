import type { CharacterProfile } from '../../types/character';

export const eliphas: CharacterProfile = {
  name: 'Eliphas Lévi',
  alias: 'The Haunted One',
  role: 'De la biblioteca maldita',
  species: 'Nattmara - Sha',
  age: '1870 años / 30 aparentes',
  origin: 'Noctilunia',
  affinity: 'Waidan · alquimia interna',
  level: 'Intelecto táctico',
  occupation: 'Erudito · alquimista errante',
  cardImage: 'https://i.imgur.com/XOirDde.jpeg',
  mainImage: 'https://i.pinimg.com/1200x/3e/76/6e/3e766e98480eaaff35400e4af5141533.jpg',
  alternateImage: 'https://i.imgur.com/92D61G8.jpeg',
  alternateLabel: 'La naturaleza Sha',
  theme: 'violet',
  images: [
    { src: 'https://i.imgur.com/9ujLdq3.jpeg', alt: 'Eliphas Lévi, registro uno', label: 'Archivo I' },
    { src: 'https://i.imgur.com/QaVnRGR.jpeg', alt: 'Eliphas Lévi, registro dos', label: 'Archivo II' },
    { src: 'https://i.pinimg.com/1200x/bc/80/5c/bc805c4e44a3013bb66825ac90211df6.jpg', alt: 'Eliphas Lévi, registro tres', label: 'Archivo III' },
    { src: 'https://i.imgur.com/tRlDLSE.jpeg', alt: 'Eliphas Lévi, registro cuatro', label: 'Archivo IV' },
    { src: 'https://i.imgur.com/noTEHRj.jpeg', alt: 'Eliphas Lévi, registro cinco', label: 'Archivo V' }
  ],
  quote: 'La ciencia todavía no nos ha enseñado si la locura es o no lo más sublime de la inteligencia.',
  physicalDescription: [
    'Eliphas tiene rasgos finos, ojos azules opacados por la edad y cabellos lacios y dorados. Viste ropas nobles desgastadas, predominando los colores oscuros, como si la elegancia de otra época hubiera sobrevivido a su dueño.',
    'Su forma real es una monstruosidad purpúrea de facciones afiladas. Cuando pierde el control, su tamaño crece y sus ojos pierden el iris, revelando la naturaleza Sha que mantiene oculta.'
  ],
  psychology: [
    'Es brillante, sarcástico y profundamente solitario. Vive entre la lógica y una locura que no termina de nombrar, siempre midiendo el mundo como un problema que podría resolverse con suficiente estudio.',
    'Teme a la muerte más de lo que admite. Su obsesión por el conocimiento es tanto una búsqueda de trascendencia como una forma de retrasar el momento de enfrentarse a sus propios errores.'
  ],
  history: [
    'Heredero de un clan de eruditos, Eliphas nació bajo la estrella de la genialidad. Estudió Waidan, la alquimia interna, con la esperanza de elevar la condición de su raza.',
    'La codicia de su mentor provocó la traición que destruyó a su clan. Sus secretos fueron robados y vendidos a patrocinadores oscuros, y la tragedia dejó al primogénito en la locura mientras Eliphas quedaba condenado a vagar.',
    'Desde entonces viaja y estudia los vacíos climáticos, enviando cartas a un hogar que nunca podrá recuperar. Quienes controlan su tierra son ahora los mismos que lo persiguen.'
  ],
  abilities: [
    { name: 'Intelecto táctico', element: 'Mente', description: 'Analiza debilidades estructurales y anatómicas en segundos para convertir el entorno en un arma.', cost: 'Siempre activo' },
    { name: 'Manipulación de densidad', element: 'Alquimia', description: 'Altera la densidad ósea y muscular a voluntad para cambiar su resistencia, fuerza y movilidad.', cost: 'Consumo físico' },
    { name: 'Regeneración alquímica', element: 'Waidan', description: 'Recompone tejidos consumiendo energía vital a una velocidad antinatural.', cost: 'Energía vital' },
    { name: 'Naturaleza Sha', element: 'Transformación', description: 'Libera la forma púrpura y afilada de su especie cuando la fachada humana ya no basta.', cost: 'Riesgo de descontrol' }
  ],
  passive: { name: 'Laboratorio viviente', description: 'El cuerpo de Eliphas funciona como un laboratorio de alquimia interna. Cada herida, experimento y error modifica su comprensión de la materia.' },
  artifact: { name: 'Kit alquímico y bastón-estoque', type: 'Equipo de investigación', description: 'Viales de suero fluorescente, un grimorio de alquimia prohibida y una hoja de plata oculta para los asuntos que no puede resolver con palabras.' },
  extras: [
    'Fue un escritor famoso; hoy sus obras se consideran prohibidas.',
    'Durante años fue mentor de jóvenes vampyr.',
    'Su sarcasmo suele ocultar una preocupación genuina por sus discípulos.',
    'Tiene un sentido de la orientación desastroso.',
    'Solo se levanta en armas cuando el asunto ya no tiene remedio.'
  ]
};
