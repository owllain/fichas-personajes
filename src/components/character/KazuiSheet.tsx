import { useState } from 'react';
import { BookOpen, BriefcaseBusiness, HeartPulse, Sparkles, UserRound, X, Zap, ShieldAlert, Award, Skull, AlertTriangle } from 'lucide-react';
import type { CharacterProfile } from '../../types/character';
import './legacy-sheets.css';

type KazuiTab = 'description' | 'history' | 'abilities' | 'inventory' | 'extras';

export function KazuiSheet({ character }: { character: CharacterProfile }) {
  const [tab, setTab] = useState<KazuiTab>('description');
  const [slide, setSlide] = useState(0);
  const [image, setImage] = useState<string | null>(null);

  const labels: { id: KazuiTab; label: string; icon: typeof UserRound }[] = [
    { id: 'description', label: 'Descripción', icon: UserRound },
    { id: 'history', label: 'Historia', icon: BookOpen },
    { id: 'abilities', label: 'Habilidades', icon: Zap },
    { id: 'inventory', label: 'Arsenal', icon: BriefcaseBusiness },
    { id: 'extras', label: 'Notas', icon: Sparkles }
  ];

  const sliderImage = character.images[slide % character.images.length];

  return (
    <main className="legacy-sheet kazui-sheet">
      <header className="kazui-header" style={{ backgroundImage: `url(${character.mainImage})` }}>
        <div className="kazui-banner-glow" />
        <h1>{character.name}</h1>
        <span>{character.role}</span>
      </header>

      <section className="kazui-identity">
        <div className="kazui-slider">
          <img
            src={sliderImage.src}
            alt={sliderImage.alt}
            onClick={() => setImage(sliderImage.src)}
          />
          <div>
            {character.images.slice(0, 3).map((entry, index) => (
              <button
                type="button"
                aria-label={`Ver ${entry.label}`}
                className={index === slide % 3 ? 'is-active' : ''}
                key={entry.src}
                onClick={() => setSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Tabla estructurada de Atributos Vampíricos Oficiales */}
        <div className="kazui-facts">
          <div className="kazui-facts-header">
            <strong>{character.level}</strong>
            <h2>{character.name}</h2>
            <small className="kazui-facts-sub">{character.alias}</small>
          </div>
          <div className="kazui-badge-grid">
            <div className="kazui-badge-card">
              <span className="kazui-badge-label">Nivel</span>
              <span className="kazui-badge-value">{character.level}</span>
            </div>
            <div className="kazui-badge-card">
              <span className="kazui-badge-label">Raza / Clase</span>
              <span className="kazui-badge-value">{character.species} · {character.classType ?? 'Brujo'}</span>
            </div>
            <div className="kazui-badge-card">
              <span className="kazui-badge-label">Edad</span>
              <span className="kazui-badge-value">{character.age}</span>
            </div>
            <div className="kazui-badge-card">
              <span className="kazui-badge-label">Orientación</span>
              <span className="kazui-badge-value">{character.sexualOrientation ?? 'Bisexual'}</span>
            </div>
            <div className="kazui-badge-card">
              <span className="kazui-badge-label">Afinidad</span>
              <span className="kazui-badge-value">{character.affinity}</span>
            </div>
            <div className="kazui-badge-card">
              <span className="kazui-badge-label">Origen / Residencia</span>
              <span className="kazui-badge-value">{character.origin} &rarr; {character.residence ?? 'Kargas'}</span>
            </div>
            <div className="kazui-badge-card kazui-badge-card--full">
              <span className="kazui-badge-label">Oficio</span>
              <span className="kazui-badge-value">{character.occupation}</span>
            </div>
            <div className="kazui-badge-card kazui-badge-card--full">
              <span className="kazui-badge-label">PB / Faceclaim</span>
              <span className="kazui-badge-value">{character.faceclaim ?? 'Male mage / Dungeon fighter online'}</span>
            </div>
          </div>
        </div>
      </section>

      <nav className="kazui-tabs">
        {labels.map(({ id, label, icon: Icon }) => (
          <button
            type="button"
            className={tab === id ? 'is-active' : ''}
            key={id}
            onClick={() => setTab(id)}
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
      </nav>

      <section className="kazui-panel">
        {/* Descripción Física y Perfil Psicológico */}
        {tab === 'description' && (
          <>
            <div className="kazui-quote-lead">
              &ldquo;{character.quote}&rdquo;
            </div>

            <div className="kazui-metrics-bar">
              <div><span>Altura</span><strong>1.52 m</strong></div>
              <div><span>Peso</span><strong>41 kg</strong></div>
              <div><span>Ojos</span><strong>Escarlata</strong></div>
              <div><span>Piel</span><strong>Ceniciento</strong></div>
              <div><span>Cabello</span><strong>Puntiagudo oscuro</strong></div>
            </div>

            <h2>Descripción Física y Presencia</h2>
            {character.physicalDescription.map((text) => (
              <p key={text}>{text}</p>
            ))}

            <h3>Psicología, Demencia y Cordura</h3>
            {character.psychology.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </>
        )}

        {/* Historia y Trascendencia */}
        {tab === 'history' && (
          <>
            <h2>Crónica del Presagista del Fin</h2>
            <div className="kazui-history-lore">
              {character.history.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </>
        )}

        {/* Tabla estructurada de Habilidades y Rituales */}
        {tab === 'abilities' && (
          <>
            <h2>Habilidades Activas y Magia Tenebris</h2>
            <div className="kazui-table-container">
              <table className="kazui-combat-table">
                <thead>
                  <tr>
                    <th style={{ width: '38%' }}>Habilidad & Afinidad</th>
                    <th style={{ width: '62%' }}>Efecto, Consumo y Limitaciones</th>
                  </tr>
                </thead>
                <tbody>
                  {character.abilities.map((ability) => (
                    <tr key={ability.name}>
                      <td className="kazui-table-lead-cell">
                        <div className="kazui-ability-name-row">
                          <HeartPulse size={16} />
                          <strong>{ability.name}</strong>
                        </div>
                        <div className="kazui-ability-tags">
                          <span className="kazui-element-pill">{ability.element ?? 'Tenebris'}</span>
                          {ability.cost && <span className="kazui-cost-tag">{ability.cost}</span>}
                        </div>
                      </td>
                      <td className="kazui-table-desc-cell">
                        <p className="kazui-ability-desc">{ability.description}</p>
                        {ability.weakness && (
                          <div className="kazui-table-weakness">
                            <AlertTriangle size={14} />
                            <span><strong>Debilidades:</strong> {ability.weakness}</span>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Habilidad Pasiva Oficial: Umbra */}
            <div className="kazui-passive-box">
              <div className="kazui-passive-title">
                <Award size={16} />
                <h3>Habilidad Pasiva: {character.passive.name}</h3>
              </div>
              <p>{character.passive.description}</p>
            </div>
          </>
        )}

        {/* Arsenal y Artefactos */}
        {tab === 'inventory' && (
          <>
            <h2>Regalías y Arsenal del Presagista</h2>

            {/* Artefacto Principal Oficial: Infusor de sangre demoniaca */}
            <div className="kazui-artifact-focus">
              <div className="kazui-artifact-header">
                <ShieldAlert size={18} />
                <div>
                  <h3>{character.artifact.name}</h3>
                  <small className="kazui-relic-badge">{character.artifact.type} · Grado {character.artifact.grade ?? 'Único'}</small>
                </div>
              </div>
              <p className="kazui-artifact-body">{character.artifact.description}</p>
              {character.artifact.weakness && (
                <div className="kazui-artifact-danger">
                  <Skull size={14} />
                  <span><strong>Efectos Secundarios:</strong> {character.artifact.weakness}</span>
                </div>
              )}
            </div>

            <h3>Artilugios y Trofeos Dimensionales</h3>
            <div className="kazui-table-container">
              <table className="kazui-relics-table">
                <thead>
                  <tr>
                    <th>Artilugio / Trofeo</th>
                    <th>Categoría</th>
                    <th>Efecto y Utilidad</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="kazui-table-name"><strong>Velo Fantasma</strong></td>
                    <td><span className="kazui-relic-badge">Artefacto de Caza</span></td>
                    <td>Capa que desdibuja presencia física y térmica para deslizarse entre sombras.</td>
                  </tr>
                  <tr>
                    <td className="kazui-table-name"><strong>Bodhi Abismo</strong></td>
                    <td><span className="kazui-relic-badge">Reliquia de Clan</span></td>
                    <td>Semilla petrificada que resuena alertando ante presencias divinas o demoníacas.</td>
                  </tr>
                  <tr>
                    <td className="kazui-table-name"><strong>Vial de sangre de dragón</strong></td>
                    <td><span className="kazui-relic-badge">Catalizador</span></td>
                    <td>Concentrado que acelera la regeneración celular en emergencias extremas.</td>
                  </tr>
                  <tr>
                    <td className="kazui-table-name"><strong>Grimorio de liches</strong></td>
                    <td><span className="kazui-relic-badge">Tomo Prohibido</span></td>
                    <td>Registro de nigromancia y anatomía mágica consultado como diario de viaje.</td>
                  </tr>
                  <tr>
                    <td className="kazui-table-name"><strong>Vestimenta de trofeos y plumas</strong></td>
                    <td><span className="kazui-relic-badge">Indumentaria</span></td>
                    <td>Prendas decoradas con plumas de fénix y cuervos con artilugios para el viaje dimensional.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Extras y Notas */}
        {tab === 'extras' && (
          <>
            <div className="kazui-quote-lead">
              &ldquo;Ningún nuevo horror puede ser más terrible que la tortura diaria de lo cotidiano.&rdquo;
            </div>
            <h2>Notas de Archivo y Comportamiento</h2>
            <ul className="kazui-extras-list">
              {character.extras.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </>
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
