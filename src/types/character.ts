export type CharacterTheme = 'green' | 'brass' | 'crimson' | 'violet';

export interface CharacterImage {
  src: string;
  alt: string;
  label: string;
}

export interface CharacterAbility {
  name: string;
  element?: string;
  description: string;
  cost?: string;
}

export interface CharacterProfile {
  name: string;
  alias: string;
  role: string;
  species: string;
  age: string;
  origin: string;
  affinity: string;
  level: string;
  occupation: string;
  cardImage: string;
  mainImage: string;
  alternateImage?: string;
  alternateLabel?: string;
  images: CharacterImage[];
  quote: string;
  physicalDescription: string[];
  psychology: string[];
  history: string[];
  abilities: CharacterAbility[];
  passive: { name: string; description: string };
  artifact: { name: string; type: string; description: string };
  extras: string[];
  theme: CharacterTheme;
}
