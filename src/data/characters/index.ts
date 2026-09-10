import { eliphas } from './eliphas';
import { kazui } from './kazui';
import { klein } from './klein';
import { nox } from './nox';

export const characters = [klein, kazui, eliphas, nox];

export function characterSlug(name: string) {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export const charactersBySlug = new Map(characters.map((character) => [characterSlug(character.name), character]));
