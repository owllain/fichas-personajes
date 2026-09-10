import { useState } from 'react';
import { BookOpen, Eye, FileText, Image as ImageIcon, Sparkles, WandSparkles, X, Zap } from 'lucide-react';
import type { CharacterProfile } from '../../types/character';
import './character-sheet.css';

type Tab = 'visual' | 'profile' | 'history' | 'abilities' | 'extras';

const tabs: { id: Tab; label: string; icon: typeof ImageIcon }[] = [
  { id: 'visual', label: 'Visual', icon: ImageIcon },
  { id: 'profile', label: 'Expediente', icon: FileText },
  { id: 'history', label: 'Historia', icon: BookOpen },
  { id: 'abilities', label: 'Habilidades', icon: Zap },
  { id: 'extras', label: 'Extras', icon: Sparkles }
];

export function CharacterSheet({ character }: { character: CharacterProfile }) {
  const [activeTab, setActiveTab] = useState<Tab>('visual');
  const [alternate, setAlternate] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const accentMode = alternate && character.theme === 'green' ? 'alternate' : character.theme;

  return (
    <main className={`character-sheet character-sheet--${accentMode}`}>
      <header className="character-hero">
        <div className="character-hero__image" style={{ backgroundImage: `url(${character.mainImage})` }} />
        {character.alternateImage && <div className="character-hero__image character-hero__image--alternate" style={{ backgroundImage: `url(${character.alternateImage})` }} />}
        <div className="character-hero__veil" />
        <button className="state-switch" type="button" onClick={() => setAlternate((value) => !value)} aria-pressed={alternate}>
          <WandSparkles size={16} /> {alternate ? 'Volver a Nox' : character.alternateLabel}
        </button>
        <div className="character-hero__title">
          <p>{alternate ? 'Estado arcano' : character.role}</p>
          <h1>{character.name}</h1>
          <span>{character.alias}</span>
        </div>
      </header>

      <nav className="character-tabs" aria-label="Secciones de la ficha">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button className={activeTab === id ? 'is-active' : ''} key={id} type="button" onClick={() => setActiveTab(id)}>
            <Icon size={17} /> <span>{label}</span>
          </button>
        ))}
      </nav>

      <div className="character-workspace">
        <aside className="character-portrait">
          <img src={alternate ? character.alternateImage : character.mainImage} alt={`${character.name}, ${alternate ? character.alternateLabel : 'forma principal'}`} />
          <div className="character-portrait__caption">{alternate ? character.alternateLabel : 'Lairon // Registro principal'}</div>
        </aside>

        <section className="character-content" aria-live="polite">
          {activeTab === 'visual' && <VisualPanel character={character} onSelect={setSelectedImage} />}
          {activeTab === 'profile' && <ProfilePanel character={character} />}
          {activeTab === 'history' && <TextPanel title="Historia" paragraphs={character.history} />}
          {activeTab === 'abilities' && <AbilitiesPanel character={character} />}
          {activeTab === 'extras' && <ExtrasPanel character={character} />}
        </section>
      </div>

      {selectedImage && <div className="image-lightbox" role="dialog" aria-modal="true" aria-label="Imagen ampliada" onClick={() => setSelectedImage(null)}>
        <button type="button" className="image-lightbox__close" onClick={() => setSelectedImage(null)} aria-label="Cerrar imagen"><X /></button>
        <img src={selectedImage} alt="Registro visual ampliado" onClick={(event) => event.stopPropagation()} />
      </div>}
    </main>
  );
}

function VisualPanel({ character, onSelect }: { character: CharacterProfile; onSelect: (src: string) => void }) {
  return <div className="panel panel--visual">
    <div className="panel-heading"><div><p className="eyebrow">Archivo visual</p><h2>Registros de {character.name}</h2></div><Eye size={20} /></div>
    <p className="panel-lead">Fragmentos conservados en el archivo de {character.origin}. Selecciona uno para abrirlo.</p>
    <div className="image-grid">{character.images.map((image) => <button type="button" key={image.src} onClick={() => onSelect(image.src)}><img src={image.src} alt={image.alt} /><span>{image.label}</span></button>)}</div>
  </div>;
}

function ProfilePanel({ character }: { character: CharacterProfile }) {
  const rows = [['Nombre', character.name], ['Alias', character.alias], ['Edad', character.age], ['Raza', character.species], ['Afinidad', character.affinity], ['Nivel', character.level], ['Origen', character.origin], ['Profesión', character.occupation]];
  return <div className="panel"><div className="panel-heading"><div><p className="eyebrow">Archivo de identidad</p><h2>Expediente</h2></div><FileText size={20} /></div><div className="data-list">{rows.map(([label, value]) => <div className="data-row" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div><blockquote>{character.quote}</blockquote><h3>Descripción física</h3>{character.physicalDescription.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<h3>Perfil psicológico</h3>{character.psychology.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>;
}

function TextPanel({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return <div className="panel"><div className="panel-heading"><div><p className="eyebrow">Registro de memoria</p><h2>{title}</h2></div><BookOpen size={20} /></div>{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>;
}

function AbilitiesPanel({ character }: { character: CharacterProfile }) {
  return <div className="panel"><div className="panel-heading"><div><p className="eyebrow">Sistema de combate</p><h2>Habilidades</h2></div><Zap size={20} /></div><div className="ability-list">{character.abilities.map((ability) => <article className="ability" key={ability.name}><div><span>{ability.element ?? 'Raza'}</span><h3>{ability.name}</h3></div><p>{ability.description}</p>{ability.cost && <small>{ability.cost}</small>}</article>)}</div></div>;
}

function ExtrasPanel({ character }: { character: CharacterProfile }) {
  return <div className="panel"><div className="panel-heading"><div><p className="eyebrow">Registros restringidos</p><h2>Pasiva y artefacto</h2></div><Sparkles size={20} /></div><h3>{character.passive.name}</h3><p>{character.passive.description}</p><h3>{character.artifact.name}</h3><p><strong>{character.artifact.type}</strong>. {character.artifact.description}</p><h3>Detalles adicionales</h3><ul>{character.extras.map((extra) => <li key={extra}>{extra}</li>)}</ul></div>;
}
