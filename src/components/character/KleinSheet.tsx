import { useState } from 'react';
import { Cog, Eye, FileText, ScrollText, X } from 'lucide-react';
import type { CharacterProfile } from '../../types/character';
import './legacy-sheets.css';

type KleinTab = 'file' | 'psyche' | 'inventory' | 'record';

export function KleinSheet({ character }: { character: CharacterProfile }) {
  const [tab, setTab] = useState<KleinTab>('file');
  const [image, setImage] = useState<string | null>(null);
  const labels: { id: KleinTab; label: string; icon: typeof FileText }[] = [
    { id: 'file', label: 'Expediente', icon: FileText }, { id: 'psyche', label: 'Psique', icon: Eye },
    { id: 'inventory', label: 'Inventario', icon: Cog }, { id: 'record', label: 'Registro', icon: ScrollText }
  ];
  return <main className="legacy-sheet klein-sheet">
    <div className="klein-screw screw-a" /><div className="klein-screw screw-b" /><div className="klein-screw screw-c" /><div className="klein-screw screw-d" />
    <header className="klein-header" style={{ backgroundImage: `url(${character.mainImage})` }}>
      <div className="klein-gear"><Cog size={30} /></div><div className="klein-name"><small>{character.role}</small><h1>{character.name}</h1><span>{character.level}</span></div>
    </header>
    <nav className="klein-tabs">{labels.map(({ id, label, icon: Icon }) => <button type="button" key={id} className={tab === id ? 'is-active' : ''} onClick={() => setTab(id)}><Icon size={15} />{label}</button>)}</nav>
    <section className="klein-paper">
      {tab === 'file' && <><h2>Datos de Identificación</h2><div className="klein-data">{[['Nombre real', character.name], ['Alias', character.alias], ['Edad', character.age], ['Origen', character.origin], ['Afiliación', 'Club del Tarot · El Mundo'], ['Vía', character.affinity]].map(([label, value]) => <div key={label}><b>{label}</b><span>{value}</span></div>)}</div><KleinGallery character={character} onSelect={setImage} /></>}
      {tab === 'psyche' && <><h2>Psique y máscaras</h2>{character.psychology.map((text) => <p className="dropcap" key={text}>{text}</p>)}<div className="klein-quote">{character.quote}</div></>}
      {tab === 'inventory' && <><h2>Inventario del viajero</h2><div className="klein-columns"><ul><li>Guante de Hambre</li><li>Bastón de las Estrellas</li><li>Silbato de Azik</li><li>Carta del Loco</li></ul><ul><li>Proyección histórica</li><li>Monedas de oro</li><li>Amuletos de adivinación</li><li>Objetos del Club del Tarot</li></ul></div><h3>Equipo y reliquias</h3><p>Artefactos reunidos durante sus fases de Vigilante Nocturno, aventurero y capitán del mar.</p></>}
      {tab === 'record' && <><h2>Registro histórico</h2>{character.history.map((text) => <p key={text}>{text}</p>)}<div className="klein-stamp">PROPIEDAD DEL REINO DE LOEN<br />ARCHIVO CONFIDENCIAL CLASE 0</div></>}
    </section>
    {image && <div className="legacy-lightbox" onClick={() => setImage(null)}><button type="button" onClick={() => setImage(null)} aria-label="Cerrar"><X /></button><img src={image} alt="Registro ampliado" onClick={(event) => event.stopPropagation()} /></div>}
  </main>;
}

function KleinGallery({ character, onSelect }: { character: CharacterProfile; onSelect: (src: string) => void }) {
  return <div className="klein-gallery"><h3>Registro visual</h3>{character.images.slice(0, 3).map((image) => <button type="button" key={image.src} onClick={() => onSelect(image.src)}><img src={image.src} alt={image.alt} /><span>{image.label}</span></button>)}</div>;
}
