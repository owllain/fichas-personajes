import type { CharacterProfile } from '../../types/character';

export const nox: CharacterProfile = {
  name: 'Nox Arcana',
  alias: 'El dragón que se tragó al sol',
  role: 'El Adivino',
  species: 'Dragón oscuro del clan negro',
  age: '3710 años / 31 aparentes',
  origin: 'Lairon',
  affinity: 'Tenebris / Lux',
  level: 'Séptimo círculo',
  occupation: 'Consejero real de Lairon',
  cardImage: 'https://i.imgur.com/6yX3C5Y.jpeg',
  mainImage: 'https://i.pinimg.com/1200x/3f/42/5e/3f425e18ddd3a396463a7e7abfb6ba6b.jpg',
  alternateImage: 'https://i.pinimg.com/1200x/70/39/d8/7039d896c122ac6ace8d0f1dbf04163a.jpg',
  alternateLabel: 'El Adivino',
  theme: 'green',
  images: [
    { src: 'https://i.pinimg.com/736x/f2/b3/36/f2b336548c3b95916bab2c789c02ed1e.jpg', alt: 'Nox Arcana, registro uno', label: 'Registro I' },
    { src: 'https://i.pinimg.com/736x/c9/54/aa/c954aa3e2723c151fe66c1463765ba26.jpg', alt: 'Nox Arcana, registro dos', label: 'Registro II' },
    { src: 'https://i.pinimg.com/1200x/70/39/d8/7039d896c122ac6ace8d0f1dbf04163a.jpg', alt: 'Nox Arcana, registro tres', label: 'Registro III' },
    { src: 'https://i.pinimg.com/736x/0f/e2/8d/0fe28d226194d9c1db0a50917809121f.jpg', alt: 'Nox Arcana, aspecto de poder', label: 'Aspecto IV' },
    { src: 'https://i.pinimg.com/736x/fe/e6/63/fee6638c5c29837a5d52e04f1ccc8596.jpg', alt: 'Nox Arcana, aspecto arcano', label: 'Aspecto V' }
  ],
  quote: 'La luz no es bondad. Es poder sin una sombra que lo contradiga.',
  physicalDescription: [
    'En su forma humana, Nox tiene el cabello negro, espeso y sedoso, peinado en mechones que caen más allá de sus hombros y cubren ligeramente el ojo derecho. Sus ojos azul grisáceos, de pupilas delgadas e inclinadas, tienen una mirada feroz y calculadora.',
    'Es delgado, atlético y de músculos definidos. Viste con meticulosidad: collar de perlas, pendiente de cruz invertida, cinturón negro con hebilla de araña de plata, pantalones oscuros y botas altas marrón oscuro. Siempre lleva un libro de hechizos dedicado a sus estudios sobre la divinidad.',
    'En su forma de dragón mide 20 metros de largo, 50 de envergadura, más de 10 metros de alto y pesa aproximadamente 25 toneladas. Sus escamas son oscuras y duras como el acero; posee cuernos dorados rematados en obsidiana, mandíbula dentada, garras afiladas y una cola semicurva con filo de espada.'
  ],
  psychology: [
    'Nox es solitario, defensivo y celoso de su hogar, pero también un mediador sabio que protege a quienes considera dignos. Su ego lo hace verse superior a cualquier criatura y disfruta demostrando su poder.',
    'Es cínico, manipulador y capaz de ocultar sus verdaderas intenciones tras la fachada de noble sacerdote. Su obsesión por la luz divina lo empuja a buscar la perfección y convertirse en rey dragón.',
    'Su ambición convive con impulsos erráticos, una necesidad de dominación y un conflicto constante entre el deseo de poder y la conciencia de las consecuencias que provoca.'
  ],
  history: [
    'Nox nació como un dragón oscuro del clan negro, criado para convertirse en alimento del líder si algún día alcanzaba la fuerza suficiente para desafiarlo. Desde el huevo albergó una ambición distinta: convertirse en el rey dragón.',
    'Cuando su clan decidió erradicar al reino de los enanos, Nox se separó del clan y vagó por el mundo en busca de poder, riquezas y una forma de superar los límites de su raza.',
    'Su camino lo llevó a Lairon, donde comenzó a estudiar la divinidad de Baldur. Descubrió que la luz podía convertirse en una herramienta decisiva para su ascenso y aprendió a emplearla de forma artificial.',
    'Con el tiempo, Nox llegó a un acuerdo con el santo papa de Lairon. El monarca le concedió un puesto elevado en el gobierno a cambio de protección, sabiduría y la bendición de un dragón para los mejores paladines y cruzados del reino.',
    'La alianza convirtió a Nox en consejero real y representante de Lairon. Sin embargo, su naturaleza Tenebris nunca desapareció: se convirtió en una semilla de corrupción dentro del terreno sagrado mientras seguía buscando la clave para perfeccionar su dominio sobre la luz.'
  ],
  abilities: [
    { name: 'Transformación en dragón oscuro', description: 'Adopta su forma completa, aumenta su defensa física y mágica, potencia su magia y obtiene vuelo de alta velocidad.', cost: '6 maná · Potencia severa' },
    { name: 'Palabras de dragón', description: 'Altera probabilidades, dados, clima, iluminación y temperatura. Puede favorecer aliados o reducir el acierto enemigo.', cost: '5 maná · Potencia potente' },
    { name: 'Aliento del dragón divino', element: 'Lux', description: 'Proyecta fuego divino que ciega durante un turno. En forma de dragón se convierte en un cono de llamarada sagrada.', cost: '5 maná humano · 7 maná dragón' },
    { name: 'Aliento del dragón sombrío', element: 'Tenebris', description: 'Libera una llama maldita que corroe la vida y provoca sueño, lujuria, ira, locura o tristeza.', cost: '5 maná humano · 7 maná dragón' },
    { name: 'Cúpula de Baldur', element: 'Clase: Sacerdote', description: 'Crea una cúpula de luz sagrada durante dos turnos. Reduce un 50% el daño mágico y cura heridas menores.', cost: '6 maná · Potencia potente' }
  ],
  passive: {
    name: 'Sinfonía de la Oscuridad y la Luz',
    description: 'Nox creó un segundo corazón mediante palabras de dragón para almacenar maná Lux. Después de usar Lux o Tenebris, la siguiente habilidad del elemento contrario puede armonizar ambos corazones y recibir una potenciación. Solo ocurre una vez cada seis turnos.'
  },
  artifact: {
    name: 'Capa del dragón refractivo',
    type: 'Imbuer · Único',
    description: 'Envuelve a Nox en divinidad, oculta su atributo Tenebris y repele fuentes externas de Tenebris. Puede debilitarse ante ataques superiores al sexto círculo o dañar a Nox si pierde el control.'
  },
  extras: [
    'Adora pasear al aire libre para escapar de sus deberes de consejero.',
    'Disfruta estudiar la divinidad y las distintas razas del mundo.',
    'Tiene interés en adoptar un papel paternal y entrenar a jóvenes huérfanos.',
    'Es hábil con las manualidades y le agrada poseer la libertad de otros.',
    'Sus ojos son grisáceos; se vuelven amarillo oscuro con Lux y negros con Tenebris.'
  ]
};
