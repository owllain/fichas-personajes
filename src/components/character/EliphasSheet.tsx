import { useState } from 'react';
import type { ReactNode } from 'react';
import { BookOpen, FileText, Image as ImageIcon, Sparkles, X, Zap } from 'lucide-react';
import type { CharacterProfile } from '../../types/character';
import './legacy-sheets.css';

type EliphasTab = 'visual' | 'profile' | 'history' | 'abilities' | 'extras';

export function EliphasSheet({ character }: { character: CharacterProfile }) {
  const [tab, setTab] = useState<EliphasTab>('visual');
  const [alternate, setAlternate] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const labels: { id: EliphasTab; icon: typeof ImageIcon; label: string }[] = [
    { id: 'visual', icon: ImageIcon, label: 'Registro visual' }, { id: 'profile', icon: FileText, label: 'Expediente' }, { id: 'history', icon: BookOpen, label: 'Historia' }, { id: 'abilities', icon: Zap, label: 'Capacidades' }, { id: 'extras', icon: Sparkles, label: 'Notas extra' }
  ];
  return <main className={`legacy-sheet eliphas-sheet ${alternate ? 'is-sha' : ''}`}>
    <header className="eliphas-header" style={{ backgroundImage: `url(${alternate ? character.alternateImage : character.mainImage})` }}><button className="eliphas-switch" type="button" onClick={() => setAlternate((value) => !value)}>{alternate ? 'VOLVER A ELIPHAS' : 'IDENTITY SWITCH'}</button><div><h1>{character.name}</h1><span>{alternate ? character.alternateLabel : character.alias}</span></div></header>
    <nav className="eliphas-tabs">{labels.map(({ id, icon: Icon, label }) => <button type="button" key={id} className={tab === id ? 'is-active' : ''} title={label} onClick={() => setTab(id)}><Icon size={17} /></button>)}</nav>
    <section className="eliphas-body">
      {tab === 'visual' && <div className="eliphas-hive">{character.images.map((entry) => <button type="button" key={entry.src} onClick={() => setImage(entry.src)}><img src={entry.src} alt={entry.alt} /><span>{entry.label}</span></button>)}</div>}
      {tab === 'profile' && <EliphasPanel title="Expediente"><div className="eliphas-data">{[['Nombre', character.name], ['Especie', character.species], ['Edad', character.age], ['Nacionalidad', character.origin], ['Tendencia', 'Heterosexual'], ['PB', 'Frankenstein · Noblesse']].map(([label, value]) => <div key={label}><b>{label}</b><span>{value}</span></div>)}</div><p>{character.physicalDescription[0]}</p><p>{character.physicalDescription[1]}</p></EliphasPanel>}
      {tab === 'history' && <EliphasPanel title="Historia">{character.history.map((text) => <p key={text}>{text}</p>)}</EliphasPanel>}
      {tab === 'abilities' && <EliphasPanel title="Capacidades y equipo">{character.abilities.map((ability) => <article className="eliphas-ability" key={ability.name}><h3>{ability.name}</h3><p>{ability.description}</p><small>{ability.cost}</small></article>)}</EliphasPanel>}
      {tab === 'extras' && <EliphasPanel title="Notas extra"><p className="eliphas-quote">{character.quote}</p><ul>{character.extras.map((text) => <li key={text}>{text}</li>)}</ul></EliphasPanel>}
    </section>
    {image && <div className="legacy-lightbox" onClick={() => setImage(null)}><button type="button" onClick={() => setImage(null)} aria-label="Cerrar"><X /></button><img src={image} alt="Registro ampliado" onClick={(event) => event.stopPropagation()} /></div>}
  </main>;
}

function EliphasPanel({ title, children }: { title: string; children: ReactNode }) { return <article className="eliphas-modal"><button type="button" className="eliphas-close" onClick={() => undefined} aria-label="Panel activo"><X size={15} /></button><h2>{title}</h2><div>{children}</div></article>; }
