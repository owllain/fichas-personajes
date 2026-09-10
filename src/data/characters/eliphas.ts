import type { CharacterProfile } from '../../types/character';

export const eliphas: CharacterProfile = {
  name: 'Eliphas Lévi',
  alias: 'De la biblioteca maldita',
  nickname: 'Sabelotodo insufrible',
  role: 'Tercer oficio, Erudito',
  species: 'Draumyr',
  classType: 'Sabio',
  age: '6015 años · Aparenta: 36 años',
  sexualOrientation: 'Bisexual',
  origin: 'Meltor',
  residence: 'Nómada',
  affinity: 'Tenebris / Éter',
  level: '7to círculo de maná',
  occupation: 'Tercer oficio, Erudito',
  faceclaim: 'Frankenstein – Noblesse',
  cardImage: 'https://i.imgur.com/XOirDde.jpeg',
  mainImage: 'https://i.pinimg.com/1200x/3e/76/6e/3e766e98480eaaff35400e4af5141533.jpg',
  alternateImage: 'https://i.imgur.com/92D61G8.jpeg',
  alternateLabel: 'La forma Draumyr',
  theme: 'violet',
  images: [
    { src: 'https://i.imgur.com/9ujLdq3.jpeg', alt: 'Eliphas Lévi, aspecto formal', label: 'Registro I' },
    { src: 'https://i.imgur.com/QaVnRGR.jpeg', alt: 'Eliphas Lévi, estudio erudito', label: 'Registro II' },
    { src: 'https://i.pinimg.com/1200x/bc/80/5c/bc805c4e44a3013bb66825ac90211df6.jpg', alt: 'Eliphas Lévi, manifestación de poder', label: 'Registro III' },
    { src: 'https://i.imgur.com/tRlDLSE.jpeg', alt: 'Eliphas Lévi, transmutación Draumyr', label: 'Registro IV' },
    { src: 'https://i.imgur.com/noTEHRj.jpeg', alt: 'Eliphas Lévi, archivo prohibido', label: 'Registro V' }
  ],
  quote: 'La prueba mayor de la auténtica grandeza del hombre está en la percepción de su propia pequeñez.',
  physicalDescription: [
    'Eliphas es un hombre alto y delgado, de unos 1.90 metros de altura. Su cuerpo está bien proporcionado y tiene una complexión atlética, denotando que se mantiene en excelente forma física. La forma de su rostro es alargada, de ojos color azul opacados por la edad, con rasgos finos y apariencia aún jovial con signos de madurez en su piel. Tiene labios finos, pálidos, y boca pequeña contraria a su labia, con cabellos lacios, largos y dorados, revueltos al son del viento.',
    'En cuanto a su vestimenta, suele llevar trajes elegantes y formales de color negro o blanco, con una camisa blanca de cuello alto y una corbata delgada con un nudo Windsor perfecto. Lleva zapatos de vestir negros brillantes y siempre un par de guantes blancos que resaltan su refinamiento. En su cintura porta una hebilla plateada de gran tamaño, reloj de pulsera de alta calidad, cadena dorada en el bolsillo de la chaqueta y gafas rectangulares de montura negra para el estudio.',
    'En su verdadera forma es un humanoide de sombras, una monstruosidad purpúrea que inspira terror absoluto. Cuando está bajo control, sus ojos brillan con una luz malévola; al perder el control, su mirada se vuelve vacía, sin iris ni pupila. Puede variar su tamaño hasta alcanzar los 3 metros con 12 centímetros. En ese estado, sus brazos alargados reemplazan sus manos por cuchillas de casi un metro de largo o tentáculos envolventes. Su cabello asemeja tentáculos suspendidos en agua y su piel de sombras tiene símbolos arcanos grabados.'
  ],
  psychology: [
    'En antaño fue una persona leal a quienes servía como maestro, calculador y racional, para quien la curiosidad es la meta suprema. Como erudito antepone el conocimiento a todo lo demás, creyendo firmemente que debe compartirse y no guardarse en estantes empolvados. Posee una deducción extraordinaria que fluye de modo natural, aunque su mente hiperactiva a veces lo encierra en bucles redundantes.',
    'En cuanto a sentimientos es denso de entender: la empatía ajena suele confundirlo, confundiéndola con envidia o celos. Considera el aislamiento un arma peligrosa, por lo que aprecia la vida al aire libre y el estudio bajo las estrellas. Su responsabilidad es una pesada carga por los oscuros secretos que custodia.',
    'Es un idealista empedernido con principios sólidos que contrastan con las imposiciones imperiales. No obstante, influido por su alter ego, tiene problemas de rabia e impaciencia reprimida: la bestia en su interior entiende la nobleza por salvajismo. Su ira surge del miedo a morir y del temor al rechazo por ser único en su especie.',
    'Pese a ello, Eliphas encuentra en su verdadera forma una hipótesis de estudio para comprender y adaptarse. Posee manías notorias: habla despacio y pausa las vocales cuando una persona agota su paciencia para hacerla sentir como un idiota, y su lengua mordaz roza la insolencia para irritar a otros y hacerlos hablar de más.'
  ],
  history: [
    'Heredero de las tradiciones científicas de Meltor, Eliphas dedicó siglos a la investigación pionera en historia, alquimia, astronomía, botánica e ingeniería, alcanzando el 7to círculo de maná y la maestría como Sabio.',
    'Durante años fue instructor y mentor de jóvenes prodigios, formando a las mejores mentes de su era. Sin embargo, su mayor tragedia nació del fruto de su propia enseñanza: su discípulo más brillante terminó convirtiéndose en su mayor y más despiadado enemigo tras la revelación de conocimientos prohibidos.',
    'Sus obras literarias y tratados científicos fueron perseguidos y catalogados como textos malditos por las autoridades imperiales. Eliphas abandonó Meltor y adoptó una vida nómada errante, estudiando los vacíos climáticos y las fallas entre planos mientras convive con la pesadilla Draumyr en su sangre.',
    'Hoy recorre el continente como un sabelotodo errante que evita la violencia innecesaria, pero que cuando desenvaina su poder y desata la brecha dimensional, demuestra por qué su nombre sigue siendo temido por los emperadores.'
  ],
  abilities: [
    {
      name: 'Reflejo Dimensional',
      element: 'Clase: Sabio',
      description: 'El Sabio crea un reflejo dimensional tangible de sí mismo que imita sus movimientos y habilidades a la perfección. Al ser Draumyr, separa a su alter ego de sí: si está en forma humana refleja su forma Draumyr y viceversa, permitiendo atacar y defenderse con duplicidad táctica.',
      cost: '6 maná por turno activo',
      weakness: 'Resiste únicamente 2 impactos de habilidades. Requiere concentración constante; si pierde el control en forma Draumyr solo dura un turno.',
      power: 'Severa'
    },
    {
      name: 'Viento áureo - Acceleratio',
      element: 'Éter',
      description: 'Infunde el maná del viento en el cuerpo, reduciendo la fricción del aire a cero y aumentando espectacularmente la velocidad de desplazamiento y agilidad sobrehumana.',
      cost: '4 maná',
      weakness: 'Dura 3 turnos y exige 1 turno de descanso. Vientos meteorológicos fuertes pueden desestabilizar la brisa; maniobrar a alta velocidad resulta complejo.',
      power: 'Potente'
    },
    {
      name: 'Lanzas de Nocturnidad',
      element: 'Tenebris',
      description: 'Crea hasta 7 lanzas de sombras (2 m de largo por 30 cm de ancho) arrojadas a velocidad hipersónica que explotan en ondas de choque y oscuridad cegadora. Puede unificar todas en una única lanza colosal a gran escala.',
      cost: '7 maná',
      weakness: 'La versión máxima unificada requiere 3 turnos de descanso; la versión normal requiere 1 turno. La explosión puede dañar a aliados cercanos.',
      power: 'Severa'
    },
    {
      name: 'Umbral del origen',
      element: 'Raza: Draumyr',
      description: 'Retorna a su verdadera forma como humanoide de pesadilla de hasta 3.12 metros con brazos de cuchillas o tentáculos. Su fuerza y resistencia se multiplican y provoca un aura de pánico que reduce la probabilidad de acierto enemigo a la mitad.',
      cost: '5 maná',
      weakness: 'Límite de 3 turnos. El maná Tenebris descontrola su estabilidad mental y fatiga su conciencia con rapidez.',
      power: 'Severa'
    },
    {
      name: 'Portador de la lanza oscura',
      element: 'Raza: Draumyr',
      description: 'Invoca una lanza de sombras de doble punta de 2 metros que cae del cielo. Al impactar genera una onda de choque expansiva de 6 metros que infunde terror mortal e irracionalidad en quien la rodea.',
      cost: '3 maná en forma humana · 6 maná en forma Draumyr',
      weakness: 'No distingue aliados de enemigos. Provoca a Eliphas la sensación constante de ser devorado por su alter ego. Requiere 2 turnos de descanso tras 2 turnos de uso.',
      power: 'Moderada a Severa'
    }
  ],
  passive: {
    name: 'Anomalía dimensional (Brecha dimensional)',
    description: 'Como maestro en la manipulación dimensional, Eliphas abre portales bajo sus pies que le permiten intercambiar su ubicación instantáneamente con un objetivo seleccionado cada cinco turnos, evadiendo ataques o reubicando enemigos.'
  },
  artifact: {
    name: 'Sin artefacto externo',
    type: 'Intelecto Puro',
    grade: 'Propio',
    description: 'Eliphas no utiliza armas ni artefactos externos. Considera que las herramientas ajenas limitan la pureza de la investigación, confiando exclusivamente en su intelecto de Sabio de 7to círculo y en las facultades de su alter ego Draumyr.'
  },
  extras: [
    'Cita: "La ciencia no nos ha enseñado aún si la locura es o no lo más sublime de la inteligencia."',
    'Gustos: Leer al aire libre, probar cosas nuevas, la grandeza en la simpleza y lo extraordinario en lo complicado.',
    'Disgustos: Quienes son sumisos ante su propia naturaleza y quienes no buscan el cambio.',
    'Metas: Descubrir la verdad primordial del mundo.',
    'En antaño fue un famoso escritor; sus obras se perdieron o fueron catalogadas como malditas por el imperio.',
    'Fue instructor de jóvenes durante siglos; su mayor enemigo fue una vez su discípulo más querido.',
    'Tiene un sentido de la orientación absolutamente desastroso: se pierde con frecuencia.',
    'Le fascina hablar con sarcasmo pausado para exasperar a sus interlocutores.',
    'Es un combatiente letal, pero solo desenvaina las armas si el asunto no tiene otro remedio.'
  ]
};
