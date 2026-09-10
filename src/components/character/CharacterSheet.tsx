import { useState } from 'react';
import { BookOpen, Eye, FileText, Image as ImageIcon, Sparkles, WandSparkles, X, Zap } from 'lucide-react';
import type { CharacterProfile } from '../../types/character';
import './character-sheet.css';
import { EliphasSheet } from './EliphasSheet';
import { KazuiSheet } from './KazuiSheet';
import { KleinSheet } from './KleinSheet';

type Tab = 'visual' | 'profile' | 'history' | 'abilities' | 'extras';

const tabs: { id: Tab; label: string; icon: typeof ImageIcon }[] = [
  { id: 'visual', label: 'Visual', icon: ImageIcon },
  { id: 'profile', label: 'Expediente', icon: FileText },
  { id: 'history', label: 'Historia', icon: BookOpen },
  { id: 'abilities', label: 'Habilidades', icon: Zap },
  { id: 'extras', label: 'Extras', icon: Sparkles }
];

export function CharacterSheet({ character }: { character: CharacterProfile }) {
  if (character.theme === 'brass') return <KleinSheet character={character} />;
  if (character.theme === 'crimson') return <KazuiSheet character={character} />;
  if (character.theme === 'violet') return <EliphasSheet character={character} />;
  return <NoxSheet character={character} />;
}

function NoxSheet({ character }: { character: CharacterProfile }) {
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
          <WandSparkles size={16} /> {alternate ? 'Volver a Consejero Real' : (character.alternateLabel ?? 'El Adivino')}
        </button>
        <div className="character-hero__title">
          <p>{alternate ? 'Identidad Arcana' : character.role}</p>
          <h1>{character.name}</h1>
          <span>{alternate ? 'El Adivino' : character.alias}</span>
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
        <aside
          className="character-portrait"
          onClick={() => setSelectedImage(alternate && character.alternateImage ? character.alternateImage : character.mainImage)}
          title="Click para ampliar registro visual"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setSelectedImage(alternate && character.alternateImage ? character.alternateImage : character.mainImage);
            }
          }}
        >
          <img src={alternate && character.alternateImage ? character.alternateImage : character.mainImage} alt={`${character.name}, ${alternate ? (character.alternateLabel ?? 'El Adivino') : 'forma principal'}`} />
          <div className="character-portrait__caption">{alternate ? (character.alternateLabel ?? 'El Adivino') : 'Lairon // Consejero Real (Click para ampliar)'}</div>
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
    <p className="panel-lead">Fragmentos conservados en el archivo de {character.origin}. Selecciona una imagen para abrirla en alta resolución.</p>
    <div className="image-grid">{character.images.map((image) => <button type="button" key={image.src} onClick={() => onSelect(image.src)}><img src={image.src} alt={image.alt} /><span>{image.label}</span></button>)}</div>
  </div>;
}

function ProfilePanel({ character }: { character: CharacterProfile }) {
  const rows: [string, string][] = [
    ['Nombre', character.name],
    ['Alias', character.alias],
    ...(character.nickname ? [['Apodo', character.nickname] as [string, string]] : []),
    ['Edad', character.age],
    ...(character.sexualOrientation ? [['Orientación sexual', character.sexualOrientation] as [string, string]] : []),
    ['Raza', character.species],
    ...(character.classType ? [['Clase', character.classType] as [string, string]] : []),
    ['Afinidad elemental', character.affinity],
    ['Nivel', character.level],
    ['País de origen', character.origin],
    ...(character.residence ? [['País de residencia', character.residence] as [string, string]] : []),
    ['Profesión', character.occupation],
    ...(character.faceclaim ? [['PB / Faceclaim', character.faceclaim] as [string, string]] : [])
  ];

  return (
    <div className="panel">
      <div className="panel-heading">
        <div><p className="eyebrow">Archivo de identidad</p><h2>Expediente</h2></div>
        <FileText size={20} />
      </div>
      <div className="data-list">
        {rows.map(([label, value]) => (
          <div className="data-row" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
      <blockquote>{character.quote}</blockquote>
      <h3>Descripción física</h3>
      {character.physicalDescription.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      <h3>Perfil psicológico</h3>
      {character.psychology.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </div>
  );
}

function TextPanel({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <div className="panel">
      <div className="panel-heading"><div><p className="eyebrow">Registro de memoria</p><h2>{title}</h2></div><BookOpen size={20} /></div>
      {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </div>
  );
}

function AbilitiesPanel({ character }: { character: CharacterProfile }) {
  return (
    <div className="panel">
      <div className="panel-heading"><div><p className="eyebrow">Sistema de combate</p><h2>Habilidades Activas</h2></div><Zap size={20} /></div>
      <div className="ability-list">
        {character.abilities.map((ability) => (
          <article className="ability" key={ability.name}>
            <div>
              <span>{ability.element ?? 'Raza'}</span>
              <h3>{ability.name}</h3>
            </div>
            <p>{ability.description}</p>
            {ability.weakness && (
              <div style={{ marginTop: '10px', padding: '8px 12px', borderLeft: '2px solid #ef4444', background: 'rgba(239, 68, 68, 0.08)', fontSize: '0.85rem', color: '#fca5a5' }}>
                <strong style={{ color: '#f87171' }}>Debilidades: </strong>{ability.weakness}
              </div>
            )}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '10px' }}>
              {ability.cost && <small><strong style={{ color: 'var(--accent-bright)' }}>Consumo:</strong> {ability.cost}</small>}
              {ability.power && <small><strong style={{ color: 'var(--accent-bright)' }}>Potencia:</strong> {ability.power}</small>}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ExtrasPanel({ character }: { character: CharacterProfile }) {
  return (
    <div className="panel">
      <div className="panel-heading"><div><p className="eyebrow">Registros arcanos</p><h2>Pasiva, Artefactos y Extras</h2></div><Sparkles size={20} /></div>
      
      <h3>{character.passive.name} (Habilidad Pasiva)</h3>
      {character.passive.description.split('\n\n').map((para, i) => (
        <p key={i}>{para}</p>
      ))}

      <h3>{character.artifact.name} (Artefacto)</h3>
      <div style={{ display: 'flex', gap: '10px', margin: '8px 0 12px', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', padding: '4px 10px', border: '1px solid var(--accent)', color: 'var(--accent-bright)', background: 'rgba(0,0,0,0.35)' }}>
          Tipo: {character.artifact.type}
        </span>
        {character.artifact.grade && (
          <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', padding: '4px 10px', border: '1px solid var(--accent)', color: 'var(--accent-bright)', background: 'rgba(0,0,0,0.35)' }}>
            Rango: {character.artifact.grade}
          </span>
        )}
      </div>
      <p>{character.artifact.description}</p>
      {character.artifact.weakness && (
        <div style={{ marginTop: '10px', padding: '8px 12px', borderLeft: '2px solid #ef4444', background: 'rgba(239, 68, 68, 0.08)', fontSize: '0.85rem', color: '#fca5a5' }}>
          <strong style={{ color: '#f87171' }}>Debilidades: </strong>{character.artifact.weakness}
        </div>
      )}

      <h3>Detalles adicionales</h3>
      <ul>
        {character.extras.map((extra) => (
          <li key={extra}>{extra}</li>
        ))}
      </ul>
    </div>
  );
}
