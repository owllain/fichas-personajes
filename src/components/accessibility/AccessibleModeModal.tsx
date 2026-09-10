import { useState, useEffect } from 'react';
import { Accessibility, Eye, Sparkles, X, Volume2, Type, Check } from 'lucide-react';

export function AccessibleModeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [largeText, setLargeText] = useState(false);

  useEffect(() => {
    const savedContrast = localStorage.getItem('nexus-a11y-contrast') === 'true';
    const savedMotion = localStorage.getItem('nexus-a11y-motion') === 'true';
    const savedText = localStorage.getItem('nexus-a11y-text') === 'true';

    setHighContrast(savedContrast);
    setReducedMotion(savedMotion);
    setLargeText(savedText);

    applyClasses(savedContrast, savedMotion, savedText);
  }, []);

  function applyClasses(contrast: boolean, motion: boolean, text: boolean) {
    const root = document.documentElement;
    root.classList.toggle('a11y-high-contrast', contrast);
    root.classList.toggle('a11y-reduced-motion', motion);
    root.classList.toggle('a11y-large-text', text);
  }

  function toggleContrast() {
    const next = !highContrast;
    setHighContrast(next);
    localStorage.setItem('nexus-a11y-contrast', String(next));
    applyClasses(next, reducedMotion, largeText);
  }

  function toggleMotion() {
    const next = !reducedMotion;
    setReducedMotion(next);
    localStorage.setItem('nexus-a11y-motion', String(next));
    applyClasses(highContrast, next, largeText);
  }

  function toggleText() {
    const next = !largeText;
    setLargeText(next);
    localStorage.setItem('nexus-a11y-text', String(next));
    applyClasses(highContrast, reducedMotion, next);
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className="a11y-trigger-btn"
        onClick={() => setIsOpen(true)}
        aria-label="Abrir panel de Modo Accesible y descripción para lectores de pantalla"
        aria-expanded={isOpen}
      >
        <Accessibility size={16} />
        <span>Modo Accesible // A11y</span>
      </button>

      {isOpen && (
        <div
          className="a11y-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="a11y-title"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="a11y-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="a11y-modal-header">
              <div className="a11y-modal-title-wrap">
                <Accessibility size={22} className="a11y-icon-glow" />
                <div>
                  <span className="a11y-eyebrow">Guía de Accesibilidad & Modos de Lectura</span>
                  <h2 id="a11y-title">NEXUS // Modo Accesible</h2>
                </div>
              </div>
              <button
                type="button"
                className="a11y-close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Cerrar panel de accesibilidad"
              >
                <X size={18} />
              </button>
            </header>

            <div className="a11y-modal-body">
              <section className="a11y-section a11y-description-box">
                <div className="a11y-section-title">
                  <Volume2 size={16} />
                  <h3>Descripción del Archivo y Guía para Lectores de Pantalla</h3>
                </div>
                <p>
                  <strong>NEXUS</strong> es un archivo interactivo que preserva los registros biográficos,
                  capacidades arcanas, inventarios clasificados y perfiles psicológicos de cuatro entidades trascendentales:
                </p>
                <ul className="a11y-character-list">
                  <li>
                    <strong>Klein Moretti:</strong> <em>El Señor de los Misterios / Secuencia 0: El Loco</em>. Ficha de estilo victoriano-steampunk con registro de identidades clasificadas y artefactos sellados del Reino de Loen.
                  </li>
                  <li>
                    <strong>Kazui von Vitra:</strong> <em>El Presagista del Fin</em>. Ficha gótica vampírica carmesí con registro de sangre, genealogía del clan Vitra y rituales hematófagos.
                  </li>
                  <li>
                    <strong>Eliphas Lévi:</strong> <em>De la Biblioteca Maldita / Nattmara Sha</em>. Ficha alquímica de estética púrpura y dorada, con laboratorio viviente y transmutación de estados.
                  </li>
                  <li>
                    <strong>Nox Arcana:</strong> <em>El Adivino / Dragón Oscuro del Clan Negro</em>. Ficha bio-arcana esmeralda con metamorfosis dual de Luz sagrada y Oscuridad primordial.
                  </li>
                </ul>
              </section>

              <section className="a11y-section">
                <div className="a11y-section-title">
                  <Sparkles size={16} />
                  <h3>Preferencias de Visualización y Confort</h3>
                </div>
                <div className="a11y-toggles-grid">
                  <button
                    type="button"
                    className={`a11y-toggle-card ${highContrast ? 'is-active' : ''}`}
                    onClick={toggleContrast}
                    aria-pressed={highContrast}
                  >
                    <div className="a11y-toggle-check">
                      {highContrast && <Check size={14} />}
                    </div>
                    <div>
                      <strong>Alto Contraste y Nitidez</strong>
                      <p>Aumenta los contrastes de texto y líneas, eliminando transparencias difusas para facilitar la lectura.</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    className={`a11y-toggle-card ${reducedMotion ? 'is-active' : ''}`}
                    onClick={toggleMotion}
                    aria-pressed={reducedMotion}
                  >
                    <div className="a11y-toggle-check">
                      {reducedMotion && <Check size={14} />}
                    </div>
                    <div>
                      <strong>Reducir Movimiento y Parpadeos</strong>
                      <p>Detiene las rotaciones de engranajes, pulsos de auras y animaciones continuas de fondo.</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    className={`a11y-toggle-card ${largeText ? 'is-active' : ''}`}
                    onClick={toggleText}
                    aria-pressed={largeText}
                  >
                    <div className="a11y-toggle-check">
                      {largeText && <Check size={14} />}
                    </div>
                    <div>
                      <strong>Tipografía Ampliada</strong>
                      <p>Incrementa la escala del texto y espaciado entre líneas para una lectura más descansada.</p>
                    </div>
                  </button>
                </div>
              </section>

              <section className="a11y-section a11y-keyboard-guide">
                <div className="a11y-section-title">
                  <Type size={16} />
                  <h3>Navegación por Teclado</h3>
                </div>
                <p>
                  Usa la tecla <kbd>Tab</kbd> para desplazarte secuencialmente entre tarjetas y pestañas.
                  Pulsa <kbd>Enter</kbd> o <kbd>Espacio</kbd> para activar expedientes o cambiar pestañas.
                  Pulsa <kbd>Esc</kbd> en cualquier momento para cerrar visores o este panel.
                </p>
              </section>
            </div>

            <footer className="a11y-modal-footer">
              <button
                type="button"
                className="a11y-accept-btn"
                onClick={() => setIsOpen(false)}
              >
                Entendido // Continuar al Archivo
              </button>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}
