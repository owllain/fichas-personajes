import type { CharacterProfile } from '../../types/character';

export const kazui: CharacterProfile = {
  name: 'Kazui von Vitra',
  alias: 'El presagista del fin',
  role: 'Cazador de sangre',
  species: 'Vampyr hematófago',
  age: '1025 años / 19 aparentes',
  origin: 'Noctilunia',
  affinity: 'Sangre · maldición',
  level: 'Rango: Presagista del fin',
  occupation: 'Cazador · asesino',
  cardImage: 'https://i.imgur.com/0VBHHwT.jpeg',
  mainImage: 'https://i.imgur.com/XKEnemE.jpeg',
  alternateImage: 'https://i.imgur.com/y3IfRaE.jpeg',
  alternateLabel: 'La profecía carmesí',
  theme: 'crimson',
  images: [
    { src: 'https://i.imgur.com/y3IfRaE.jpeg', alt: 'Kazui von Vitra, aspecto uno', label: 'Sanguinem' },
    { src: 'https://i.imgur.com/sJnyCIn.jpeg', alt: 'Kazui von Vitra, aspecto dos', label: 'Marauder' },
    { src: 'https://i.imgur.com/uvXbOs1.jpeg', alt: 'Kazui von Vitra, aspecto tres', label: 'Hellberus' }
  ],
  quote: 'La realidad es una jaula; la sangre, al menos, recuerda cómo abrirla.',
  physicalDescription: [
    'Kazui tiene una figura delgada y atlética, piel de tono ceniza, cabello castaño oscuro erizado y ojos escarlata. Sus orejas puntiagudas y colmillos revelan la naturaleza vampyr que intenta mantener bajo control.',
    'Lleva el tatuaje de un basilisco y viste prendas oscuras adaptadas a la caza. Su presencia mezcla la elegancia de un noble caído con la tensión de alguien que nunca deja de buscar una salida.'
  ],
  psychology: [
    'Es imaginativo, inestable y vive caminando sobre el límite entre una locura abrumadora y una realidad cruel. Su deseo de escapar de la realidad afecta sus decisiones y sus vínculos.',
    'La sangre es para él alimento, arma y recuerdo. Puede mostrarse protector con quienes reconoce como propios, pero su impulso depredador y su miedo al encierro siempre están cerca.'
  ],
  history: [
    'Kazui nació en el noble clan Vitra y creció rodeado de profecías, rituales y expectativas. Sus dotes para leer presagios lo convirtieron en una herramienta valiosa y, al mismo tiempo, en una amenaza para su propia familia.',
    'La caída del clan lo obligó a huir. Sobrevivió como cazador, aprendiendo a convertir su naturaleza hematófaga en una disciplina de combate y rastreo.',
    'Con el tiempo, su nombre quedó unido a tres rituales de sangre: Sanguinem, Marauder y Hellberus. Cada uno representa una forma distinta de negociar con la maldición que lleva dentro.'
  ],
  abilities: [
    { name: 'Sanguinem', element: 'Ritual de sangre', description: 'Convierte la sangre derramada en una red de rastreo, restricción y presión sobre el enemigo.', cost: 'Ritual activo' },
    { name: 'Marauder', element: 'Cacería', description: 'Refuerza el cuerpo y la percepción para perseguir presas a través de espacios cerrados o rutas ocultas.', cost: 'Consumo de sangre' },
    { name: 'Hellberus', element: 'Maldición', description: 'Invoca una presencia triple que acosa, confunde y muerde la voluntad de un objetivo.', cost: 'Alta exigencia mental' },
    { name: 'Horror antiguo', element: 'Bendición maldita', description: 'Despierta un terror primordial en quienes quedan expuestos a su mirada y su aura vampyr.', cost: 'Efecto de miedo' },
    { name: 'Abandonado en la perdición', element: 'Bendición maldita', description: 'Aísla al objetivo en una sensación de pérdida, debilitando su capacidad de pedir ayuda o reaccionar.', cost: 'Maldición sostenida' }
  ],
  passive: { name: 'Hambre hematófaga', description: 'La sangre recupera sus fuerzas y afila sus sentidos, pero cuanto más se alimenta, más difícil resulta distinguir deseo de necesidad.' },
  artifact: { name: 'Velo Fantasma', type: 'Artefacto de caza', description: 'Una capa que desdibuja su presencia y le permite deslizarse entre sombras. La acompaña Bodhi Abismo y un vial de sangre de dragón.' },
  extras: [
    'La comida puede estar envenenada incluso cuando parece preparada con cuidado.',
    'Sufre claustrofobia y evita espacios donde no pueda encontrar una salida.',
    'Conserva un grimorio de liches que consulta como si fuera un diario.',
    'Desprecia a los elfos y evita hablar de su antigua vida como artista.',
    'La luz solar le resulta insoportable y ha creado un lenguaje propio para sus rituales.'
  ]
};
