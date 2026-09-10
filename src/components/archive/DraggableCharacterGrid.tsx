import { useEffect, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ArrowUpRight, GripVertical } from 'lucide-react';
import { Reorder } from 'motion/react';
import type { CharacterProfile } from '../../types/character';
import { characterSlug } from '../../data/characters';
import { Reveal } from '../animate-ui/Reveal';
import './draggable-character-grid.css';

const DRAG_TYPE = 'character-card';
const STORAGE_KEY = 'nexus-character-order';

type DragItem = { slug: string; index: number };

export function DraggableCharacterGrid({ characters }: { characters: CharacterProfile[] }) {
  const [ordered, setOrdered] = useState(characters);
  const [dragging, setDragging] = useState<string | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return;
    const order = JSON.parse(saved) as string[];
    const bySlug = new Map(characters.map((character) => [characterSlug(character.name), character]));
    const restored = order.map((slug) => bySlug.get(slug)).filter((character): character is CharacterProfile => Boolean(character));
    setOrdered([...restored, ...characters.filter((character) => !order.includes(characterSlug(character.name)))]);
  }, [characters]);

  function persist(next: CharacterProfile[]) {
    setOrdered(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next.map((character) => characterSlug(character.name))));
  }

  function moveCard(from: number, to: number) {
    const next = [...ordered];
    const [moved] = next.splice(from, 1);
    next.splice(to, 0, moved);
    persist(next);
  }

  return <DndProvider backend={HTML5Backend}>
    <div className="archive-order-hint"><GripVertical size={15} /> Ordena el archivo arrastrando las fichas</div>
    <Reorder.Group axis="x" values={ordered} onReorder={persist} className="archive-grid" as="div">
      {ordered.map((character, index) => <DraggableCard key={character.name} character={character} index={index} dragging={dragging === character.name} onMove={moveCard} onDragState={setDragging} />)}
    </Reorder.Group>
  </DndProvider>;
}

function DraggableCard({ character, index, dragging, onMove, onDragState }: { character: CharacterProfile; index: number; dragging: boolean; onMove: (from: number, to: number) => void; onDragState: (name: string | null) => void }) {
  const [{ isDragging }, drag] = useDrag<DragItem, void, { isDragging: boolean }>({ type: DRAG_TYPE, item: { slug: characterSlug(character.name), index }, collect: (monitor) => ({ isDragging: monitor.isDragging() }), end: () => onDragState(null) });
  const [, drop] = useDrop<DragItem>({ accept: DRAG_TYPE, hover: (item) => { if (item.index === index) return; onMove(item.index, index); item.index = index; } });
  const setRef = (node: HTMLAnchorElement | null) => { drag(drop(node)); };
  return <Reorder.Item value={character} as="a" ref={setRef} href={`/personajes/${characterSlug(character.name)}`} className={`archive-card archive-card--${character.theme} ${dragging || isDragging ? 'is-dragging' : ''}`} onDragStart={() => onDragState(character.name)}>
    <img src={character.cardImage} alt={`Retrato de ${character.name}`} />
    <Reveal className="archive-card__body" delay={index * .08}>
      <span className="archive-card__role">{character.role}</span><h2>{character.name}</h2>
      <div className="archive-card__action"><span>Acceder al expediente</span><ArrowUpRight size={18} /></div>
    </Reveal>
  </Reorder.Item>;
}
