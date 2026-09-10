import type { CharacterProfile } from '../../types/character';

export const klein: CharacterProfile = {
  name: 'Klein Moretti',
  alias: 'Zhou Mingrui · Gehrman Sparrow · Sherlock Moriarty · Merlin Hermes',
  role: 'El señor de los misterios',
  species: 'Humano ascendido',
  age: 'Inmemorial · apariencia de veintitantos',
  origin: 'Tingen City, Reino de Loen',
  affinity: 'Vía del Vidente',
  level: 'Secuencia 0: El Loco',
  occupation: 'Aventurero · miembro del Club del Tarot',
  cardImage: 'https://i.imgur.com/F4iaW71.jpeg',
  mainImage: 'https://i.pinimg.com/736x/f7/1f/be/f71fbeee7cff873fd53b4e859b2641c6.jpg',
  alternateImage: 'https://i.pinimg.com/736x/a0/64/67/a0646760bab9d725efdcb522d4a89ea2.jpg',
  alternateLabel: 'El Mundo',
  theme: 'brass',
  images: [
    { src: 'https://i.pinimg.com/736x/fa/68/8d/fa688d3dadeab9fcfcce781196e234d4.jpg', alt: 'Klein como Sherlock Moriarty', label: 'Sherlock' },
    { src: 'https://i.pinimg.com/736x/a1/4a/4e/a14a4e32d54ae8679050479af5c27d66.jpg', alt: 'Klein como Gehrman Sparrow', label: 'Gehrman' },
    { src: 'https://i.pinimg.com/736x/c6/e0/40/c6e040727773a2406647fa7cd46213f1.jpg', alt: 'Klein como Merlin Hermes', label: 'Merlin' },
    { src: 'https://i.pinimg.com/736x/d3/04/fe/d304fe319418e34a5d7ff92343036a51.jpg', alt: 'Klein, registro de combate', label: 'Registro IV' }
  ],
  quote: 'La esperanza es la única luz que puede atravesar una niebla interminable.',
  physicalDescription: [
    'Klein es un joven de rasgos sobrios y mirada atenta, capaz de cambiar de identidad con la precisión de un actor consumado. Sus distintas máscaras ocultan una misma cautela y una voluntad obstinada de proteger a quienes considera su gente.',
    'Como Gehrman Sparrow proyecta la imagen de un aventurero frío y peligroso; como Sherlock Moriarty es un detective metódico; como Merlin Hermes adopta el papel de un benefactor enigmático.'
  ],
  psychology: [
    'Es prudente, protector y melancólico. Cada nuevo conocimiento le permite sobrevivir, pero también lo aleja de la normalidad que alguna vez conoció.',
    'Su humor y sus identidades son herramientas de supervivencia. Bajo ellas permanece un hombre que calcula riesgos constantemente y que prefiere cargar con el peligro antes que entregárselo a otros.'
  ],
  history: [
    'Zhou Mingrui despertó en un mundo desconocido tras un ritual de sacrificio y terminó adoptando el nombre de Klein Moretti. En Tingen se incorporó a los Vigilantes Nocturnos y descubrió un mundo de dioses, secuencias y misterios.',
    'Su camino lo llevó a convertirse en aventurero, capitán de barco y figura central del Club del Tarot. Cada identidad fue una etapa de su ascenso y una forma de mantener a salvo su humanidad.',
    'Al final de su recorrido se convirtió en El Loco, una existencia divina que sostiene una guerra silenciosa contra fuerzas antiguas y protege el frágil equilibrio del mundo.'
  ],
  abilities: [
    { name: 'Hilos espirituales', description: 'Percibe y controla hilos del cuerpo espiritual para dominar movimientos, voluntades y marionetas.', cost: 'Vía del Vidente' },
    { name: 'Proyección histórica', description: 'Convoca ecos de objetos y poderes del pasado mediante una conexión con la niebla gris.', cost: 'Alto consumo espiritual' },
    { name: 'Mil rostros', description: 'Cambia de identidad y apariencia como un Sin Rostro, adaptando cuerpo, voz y presencia.', cost: 'Secuencia de Sin Rostro' },
    { name: 'Salto de llama', description: 'Se desplaza entre llamas y utiliza el fuego como ancla para escapar o atacar.', cost: 'Vía del Mago' },
    { name: 'Adivinación', description: 'Interpreta símbolos, sueños y posibilidades para encontrar respuestas ocultas.', cost: 'Ritual y concentración' }
  ],
  passive: { name: 'La niebla gris', description: 'El espacio misterioso sobre la niebla gris amplifica sus rituales, protege su identidad y sostiene la autoridad del Loco.' },
  artifact: { name: 'Castillo de Sefirah', type: 'Dominio divino', description: 'Un palacio sobre la niebla gris que conecta creyentes, permite proyecciones históricas y sirve como santuario frente a poderes antiguos.' },
  extras: [
    'El Club del Tarot lo conoce como El Mundo.',
    'Su prudencia suele parecer cobardía hasta que llega el momento de actuar.',
    'Las monedas de oro y los amuletos son parte habitual de sus preparativos.',
    'Su mayor batalla consiste en conservar una humanidad reconocible tras cada ascenso.',
    'Archivo confidencial: propiedad del Reino de Loen.'
  ]
};
