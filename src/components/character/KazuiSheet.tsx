import { useState } from 'react';
import { BookOpen, BriefcaseBusiness, HeartPulse, Sparkles, UserRound, X, Zap } from 'lucide-react';
import type { CharacterProfile } from '../../types/character';
import './legacy-sheets.css';

type KazuiTab = 'description' | 'history' | 'abilities' | 'inventory' | 'extras';

export function KazuiSheet({ character }: { character: CharacterProfile }) {
  const [tab, setTab] = useState<KazuiTab>('description');
  const [slide, setSlide] = useState(0);
  const [image, setImage] = useState<string | null>(null);
  const labels: { id: KazuiTab; label: string; icon: typeof UserRound }[] = [
    { id: 'description', label: 'Descripción', icon: UserRound }, { id: 'history', label: 'Historia', icon: BookOpen },
    { id: 'abilities', label: 'Habilidades', icon: Zap }, { id: 'inventory', label: 'Inventario', icon: BriefcaseBusiness }, { id: 'extras', label: 'Extras', icon: Sparkles }
  ];
  const sliderImage = character.images[slide % character.images.length];
  return <main className="legacy-sheet kazui-sheet">
    <header className="kazui-header" style={{ backgroundImage: `url(${character.mainImage})` }}><div className="kazui-banner-glow" /><h1>{character.name}</h1><span>{character.role}</span></header>
    <section className="kazui-identity"><div className="kazui-slider"><img src={sliderImage.src} alt={sliderImage.alt} onClick={() => setImage(sliderImage.src)} /><div>{character.images.slice(0, 3).map((entry, index) => <button type="button" aria-label={`Ver ${entry.label}`} className={index === slide % 3 ? 'is-active' : ''} key={entry.src} onClick={() => setSlide(index)} />)}</div></div><div className="kazui-facts"><strong>{character.level}</strong><h2>{character.name}</h2><p>{character.species}</p><p>{character.age}</p><p>{character.origin}</p></div></section>
    <nav className="kazui-tabs">{labels.map(({ id, label, icon: Icon }) => <button type="button" className={tab === id ? 'is-active' : ''} key={id} onClick={() => setTab(id)}><Icon size={16} />{label}</button>)}</nav>
    <section className="kazui-panel">
      {tab === 'description' && <><h2>Descripción</h2>{character.physicalDescription.map((text) => <p key={text}>{text}</p>)}<h3>Psicología</h3>{character.psychology.map((text) => <p key={text}>{text}</p>)}</>}
      {tab === 'history' && <><h2>Historia</h2>{character.history.map((text) => <p key={text}>{text}</p>)}</>}
      {tab === 'abilities' && <><h2>Rituales y bendiciones</h2>{character.abilities.map((ability) => <article className="kazui-ability" key={ability.name}><HeartPulse size={17} /><div><h3>{ability.name}</h3><p>{ability.description}</p><small>{ability.cost}</small></div></article>)}</>}
      {tab === 'inventory' && <><h2>Inventario</h2><div className="kazui-inventory"><span>Velo Fantasma</span><span>Bodhi Abismo</span><span>Vial de sangre de dragón</span><span>Grimorio de liches</span><span>Vestimenta de trofeos</span></div><p>{character.artifact.description}</p></>}
      {tab === 'extras' && <><h2>Extras</h2><ul>{character.extras.map((text) => <li key={text}>{text}</li>)}</ul><p className="kazui-quote">{character.quote}</p></>}
    </section>
    {image && <div className="legacy-lightbox" onClick={() => setImage(null)}><button type="button" onClick={() => setImage(null)} aria-label="Cerrar"><X /></button><img src={image} alt="Registro ampliado" onClick={(event) => event.stopPropagation()} /></div>}
  </main>;
}
