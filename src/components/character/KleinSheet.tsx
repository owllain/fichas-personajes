import { useState } from 'react';
import { Cog, Eye, FileText, ScrollText, X, ShieldAlert, Sparkles } from 'lucide-react';
import type { CharacterProfile } from '../../types/character';
import './legacy-sheets.css';

type KleinTab = 'file' | 'psyche' | 'inventory' | 'record';

export function KleinSheet({ character }: { character: CharacterProfile }) {
  const [tab, setTab] = useState<KleinTab>('file');
  const [image, setImage] = useState<string | null>(null);

  const labels: { id: KleinTab; label: string; icon: typeof FileText }[] = [
    { id: 'file', label: 'Expediente', icon: FileText },
    { id: 'psyche', label: 'Psique', icon: Eye },
    { id: 'inventory', label: 'Arsenal', icon: Cog },
    { id: 'record', label: 'Registro', icon: ScrollText }
  ];

  return (
    <main className="legacy-sheet klein-sheet">
      <div className="klein-screw screw-a" />
      <div className="klein-screw screw-b" />
      <div className="klein-screw screw-c" />
      <div className="klein-screw screw-d" />

      <header className="klein-header" style={{ backgroundImage: `url(${character.mainImage})` }}>
        <div className="klein-gear">
          <Cog size={30} />
        </div>
        <div className="klein-name">
          <small>{character.role}</small>
          <h1>{character.name}</h1>
          <span>{character.level}</span>
        </div>
      </header>

      <nav className="klein-tabs">
        {labels.map(({ id, label, icon: Icon }) => (
          <button
            type="button"
            key={id}
            className={tab === id ? 'is-active' : ''}
            onClick={() => setTab(id)}
          >
            <Icon size={15} />
            {label}
          </button>
        ))}
      </nav>

      <section className="klein-paper">
        {/* Pestaña: Expediente Oficial de Loen */}
        {tab === 'file' && (
          <>
            <div className="klein-dossier-header">
              <span className="klein-seal-stamp">CONFIDENCIAL // CLASE 0</span>
              <h2>Expediente Oficial de Identificación</h2>
              <p className="klein-subheader-text">REINO DE LOEN · ARCHIVO CLASIFICADO DEL CLUB DEL TAROT</p>
            </div>

            <div className="klein-table-container">
              <table className="klein-dossier-table">
                <tbody>
                  <tr>
                    <th>Nombre Real</th>
                    <td><strong>Klein Moretti</strong> <span className="klein-alt-name">(Zhou Mingrui)</span></td>
                    <th>Secuencia Actual</th>
                    <td><span className="klein-tag-seq">{character.level}</span></td>
                  </tr>
                  <tr>
                    <th>Vía Divina</th>
                    <td><span className="klein-tag-path">{character.affinity}</span></td>
                    <th>Afiliación</th>
                    <td>Club del Tarot <em className="klein-seat">· El Mundo</em></td>
                  </tr>
                  <tr>
                    <th>Máscaras Operativas</th>
                    <td colSpan={3}>
                      <div className="klein-alias-pills">
                        <span>Gehrman Sparrow</span>
                        <span>Sherlock Moriarty</span>
                        <span>Merlin Hermes</span>
                        <span>Dwayne Dantès</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>Origen Territorial</th>
                    <td>{character.origin}</td>
                    <th>Nivel de Peligro</th>
                    <td><span className="klein-threat-high">Deidad Trascendental (Clase 0)</span></td>
                  </tr>
                  <tr>
                    <th>Dominio Divino</th>
                    <td colSpan={3}>{character.artifact.name} &mdash; <em>{character.passive.name}</em></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <KleinGallery character={character} onSelect={setImage} />
          </>
        )}

        {/* Pestaña: Psique y Máscaras */}
        {tab === 'psyche' && (
          <>
            <h2>Psique, Máscaras y Disociación</h2>
            {character.psychology.map((text) => (
              <p className="dropcap" key={text}>{text}</p>
            ))}
            <div className="klein-quote">{character.quote}</div>
          </>
        )}

        {/* Pestaña: Artefactos Sellados y Arsenal de Contención */}
        {tab === 'inventory' && (
          <>
            <div className="klein-dossier-header">
              <span className="klein-seal-stamp">REGISTRO DE CONTENCIÓN</span>
              <h2>Artefactos Sellados y Reliquias</h2>
              <p className="klein-subheader-text">ARSENAL PERSONAL DEL SEÑOR DE LOS MISTERIOS</p>
            </div>

            <div className="klein-table-container">
              <table className="klein-containment-table">
                <thead>
                  <tr>
                    <th>Artefacto / Reliquia</th>
                    <th>Grado</th>
                    <th>Habilidad Arcana</th>
                    <th>Precio / Efecto Secundario</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="klein-table-item"><strong>Guante de Hambre</strong></td>
                    <td><span className="klein-grade grade-2">Grado 2</span></td>
                    <td>Pastoreo de almas y uso de secuencias de habilidades de los caídos.</td>
                    <td className="klein-danger-text">Debe devorar carne y sangre humana tras cada uso prolongado.</td>
                  </tr>
                  <tr>
                    <td className="klein-table-item"><strong>Bastón de las Estrellas</strong></td>
                    <td><span className="klein-grade grade-1">Grado 1</span></td>
                    <td>Teletransportación espacial instantánea a cualquier coordenada visualizada.</td>
                    <td className="klein-danger-text">Riesgo de desviación dimensional si se distrae la mente un instante.</td>
                  </tr>
                  <tr>
                    <td className="klein-table-item"><strong>Silbato de Azik</strong></td>
                    <td><span className="klein-grade grade-3">Grado 3</span></td>
                    <td>Comunicación directa con el Inframundo y convocatoria de carteros espirituales.</td>
                    <td>Atracción gravitatoria pasiva de espíritus errantes.</td>
                  </tr>
                  <tr>
                    <td className="klein-table-item"><strong>Carta del Loco</strong></td>
                    <td><span className="klein-grade grade-0">Grado 0</span></td>
                    <td>Carta de la Blasfemia; resonancia y mando sobre el Castillo de Sefirah.</td>
                    <td className="klein-danger-text">Convergencia divina de beyonders de alta secuencia.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="klein-consumables-section">
              <div className="klein-consumables-title">
                <Sparkles size={14} />
                <h3>Herramientas de Campaña y Amuletos</h3>
              </div>
              <div className="klein-consumables-grid">
                <div className="klein-consumable-chip">
                  <strong>Monedas de Oro de Loen</strong>
                  <small>Anclaje adivinatorio y destino</small>
                </div>
                <div className="klein-consumable-chip">
                  <strong>Amuletos de Paz Espiritual</strong>
                  <small>Plata pura tallada en Tingen</small>
                </div>
                <div className="klein-consumable-chip">
                  <strong>Espejo de Arrodes</strong>
                  <small>Artefacto mágico interrogador</small>
                </div>
                <div className="klein-consumable-chip">
                  <strong>Cerillas de Salto de Llama</strong>
                  <small>Vía del Mago · Desplazamiento</small>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Pestaña: Registro Histórico y Vía del Vidente */}
        {tab === 'record' && (
          <>
            <div className="klein-dossier-header">
              <span className="klein-seal-stamp">VÍA DE ASCENSO</span>
              <h2>Registro Histórico y Secuencias</h2>
              <p className="klein-subheader-text">PROGRESIÓN DE LA VÍA DEL VIDENTE (SEER PATHWAY)</p>
            </div>

            <div className="klein-table-container">
              <table className="klein-sequence-table">
                <thead>
                  <tr>
                    <th>Secuencia</th>
                    <th>Denominación</th>
                    <th>Capacidad Principal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="klein-seq-num">Sec. 9</span></td>
                    <td><strong>Vidente</strong></td>
                    <td>Adivinación por péndulo, lectura de sueños y cartas del Tarot.</td>
                  </tr>
                  <tr>
                    <td><span className="klein-seq-num">Sec. 8</span></td>
                    <td><strong>Payaso</strong></td>
                    <td>Control cinético, agilidad sobrehumana y balance absoluto.</td>
                  </tr>
                  <tr>
                    <td><span className="klein-seq-num">Sec. 7</span></td>
                    <td><strong>Mago</strong></td>
                    <td>Salto entre llamas, balas de aire y sustitución por muñeco de papel.</td>
                  </tr>
                  <tr>
                    <td><span className="klein-seq-num">Sec. 6</span></td>
                    <td><strong>Sin Rostro</strong></td>
                    <td>Mimetización física perfecta, adaptación de voz y aura.</td>
                  </tr>
                  <tr>
                    <td><span className="klein-seq-num">Sec. 5</span></td>
                    <td><strong>Marionetista</strong></td>
                    <td>Control de hilos espirituales y manipulación de cuerpos.</td>
                  </tr>
                  <tr>
                    <td><span className="klein-seq-num seq-god">Sec. 0</span></td>
                    <td><strong className="klein-god-title">El Loco</strong></td>
                    <td>Autoridad de los Milagros, Historia y la Niebla Gris.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="klein-history-narrative">
              {character.history.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>

            <div className="klein-stamp">
              PROPIEDAD DEL REINO DE LOEN<br />
              ARCHIVO CONFIDENCIAL CLASE 0 &mdash; VIGILANTES NOCTURNOS
            </div>
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

function KleinGallery({ character, onSelect }: { character: CharacterProfile; onSelect: (src: string) => void }) {
  return (
    <div className="klein-gallery">
      <h3>Registro Visual de Identidades</h3>
      {character.images.slice(0, 3).map((image) => (
        <button type="button" key={image.src} onClick={() => onSelect(image.src)}>
          <img src={image.src} alt={image.alt} />
          <span>{image.label}</span>
        </button>
      ))}
    </div>
  );
}
