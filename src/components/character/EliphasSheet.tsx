import { useState } from 'react';
import type { ReactNode } from 'react';
import { BookOpen, FileText, Image as ImageIcon, Sparkles, X, Zap, ShieldAlert, Award } from 'lucide-react';
import type { CharacterProfile } from '../../types/character';
import './legacy-sheets.css';

type EliphasTab = 'visual' | 'profile' | 'history' | 'abilities' | 'extras';

export function EliphasSheet({ character }: { character: CharacterProfile }) {
  const [tab, setTab] = useState<EliphasTab>('visual');
  const [alternate, setAlternate] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  const labels: { id: EliphasTab; icon: typeof ImageIcon; label: string }[] = [
    { id: 'visual', icon: ImageIcon, label: 'Registro visual' },
    { id: 'profile', icon: FileText, label: 'Expediente' },
    { id: 'history', icon: BookOpen, label: 'Historia' },
    { id: 'abilities', icon: Zap, label: 'Capacidades' },
    { id: 'extras', icon: Sparkles, label: 'Notas extra' }
  ];

  const profileRows: [string, string][] = [
    ['Nombre', character.name],
    ['Alias heroico', character.alias],
    ...(character.nickname ? [['Apodo', character.nickname] as [string, string]] : []),
    ['Raza / Especie', character.species],
    ['Clase', character.classType ?? 'Sabio'],
    ['Nivel de Poder', character.level],
    ['Afinidad Elemental', character.affinity],
    ['Edad', character.age],
    ['Orientación', character.sexualOrientation ?? 'Bisexual'],
    ['País de Origen', character.origin],
    ['Residencia', character.residence ?? 'Nómada'],
    ['Oficio', character.occupation],
    ['PB / Faceclaim', character.faceclaim ?? 'Frankenstein – Noblesse']
  ];

  return (
    <main className={`legacy-sheet eliphas-sheet ${alternate ? 'is-sha' : ''}`}>
      <header className="eliphas-header" style={{ backgroundImage: `url(${alternate ? character.alternateImage : character.mainImage})` }}>
        <button className="eliphas-switch" type="button" onClick={() => setAlternate((value) => !value)}>
          {alternate ? 'FORMA HUMANA' : 'TRANSFORMAR EN DRAUMYR'}
        </button>
        <div>
          <h1>{character.name}</h1>
          <span>{alternate ? character.alternateLabel : character.alias}</span>
        </div>
      </header>

      <nav className="eliphas-tabs">
        {labels.map(({ id, icon: Icon, label }) => (
          <button
            type="button"
            key={id}
            className={tab === id ? 'is-active' : ''}
            title={label}
            onClick={() => setTab(id)}
          >
            <Icon size={17} />
          </button>
        ))}
      </nav>

      <section className="eliphas-body">
        {tab === 'visual' && (
          <div className="eliphas-hive">
            {character.images.map((entry) => (
              <button type="button" key={entry.src} onClick={() => setImage(entry.src)}>
                <img src={entry.src} alt={entry.alt} />
                <span>{entry.label}</span>
              </button>
            ))}
          </div>
        )}

        {tab === 'profile' && (
          <EliphasPanel title="Expediente del Erudito">
            <div className="eliphas-data">
              {profileRows.map(([label, value]) => (
                <div key={label}>
                  <b>{label}</b>
                  <span>{value}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '18px' }}>
              <h3 style={{ color: '#fbbf24', fontFamily: 'Cinzel', fontSize: '1rem', margin: '14px 0 6px' }}>Descripción Física</h3>
              {character.physicalDescription.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
              <h3 style={{ color: '#fbbf24', fontFamily: 'Cinzel', fontSize: '1rem', margin: '14px 0 6px' }}>Perfil Psicológico</h3>
              {character.psychology.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </EliphasPanel>
        )}

        {tab === 'history' && (
          <EliphasPanel title="Historia y Crónica de Meltor">
            {character.history.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </EliphasPanel>
        )}

        {tab === 'abilities' && (
          <EliphasPanel title="Capacidades, Magia y Raza">
            {character.abilities.map((ability) => (
              <article className="eliphas-ability" key={ability.name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3>{ability.name}</h3>
                  <span style={{ color: '#fbbf24', fontSize: '0.7rem', border: '1px solid #581c87', padding: '1px 6px', borderRadius: '4px' }}>{ability.element}</span>
                </div>
                <p>{ability.description}</p>
                {ability.weakness && (
                  <p style={{ color: '#d8b4fe', fontSize: '0.78rem', fontStyle: 'italic', margin: '4px 0' }}>
                    <strong>Limitaciones:</strong> {ability.weakness}
                  </p>
                )}
                <small>{ability.cost}</small>
              </article>
            ))}
            <div style={{ marginTop: '18px', padding: '12px', background: 'rgba(88, 28, 135, 0.25)', border: '1px solid #a855f7', borderRadius: '6px' }}>
              <h3 style={{ margin: '0 0 4px', color: '#fbbf24', fontFamily: 'Cinzel', fontSize: '0.95rem' }}>Habilidad Pasiva: {character.passive.name}</h3>
              <p style={{ margin: 0, fontSize: '0.84rem' }}>{character.passive.description}</p>
            </div>
          </EliphasPanel>
        )}

        {tab === 'extras' && (
          <EliphasPanel title="Notas del Erudito & Extras">
            <p className="eliphas-quote">{character.quote}</p>
            <ul>
              {character.extras.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </EliphasPanel>
        )}
      </section>

      {image && (
        <div className="legacy-lightbox" onClick={() => setImage(null)}>
          <button type="button" onClick={() => setImage(null)} aria-label="Cerrar">
            <X />
          </button>
          <img src={image} alt="Registro ampliado" onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </main>
  );
}

function EliphasPanel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="eliphas-modal">
      <button type="button" className="eliphas-close" onClick={() => undefined} aria-label="Panel activo">
        <X size={15} />
      </button>
      <h2>{title}</h2>
      <div>{children}</div>
    </article>
  );
}
