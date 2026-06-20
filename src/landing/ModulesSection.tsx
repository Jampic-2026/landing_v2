import AnimatedWrapper from '../components/AnimatedWrapper';
import SectionHeader from '../components/SectionHeader';
import { landingContent } from '../config/content';
import type { Language } from '../config/content';

export default function ModulesSection({ language }: { language: Language }) {
  const content = landingContent[language].modules;
  const emergency = content.cards[0];
  const telemedicine = content.cards[1];
  const history = content.cards[2];
  const professional = content.cards[3];
  const operations = content.cards[4];
  const patientApp = content.cards[5];
  const family = content.cards[6];

  return (
    <section className="scroll-section modules-section">
      <div className="container">
        <AnimatedWrapper>
          <SectionHeader title={content.title} align="center" />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.08}>
          <div className="modules-showcase" aria-label={content.title}>
            <article className="product-module module-emergency">
              <div className="module-copy">
                <span>{language === 'es' ? 'Sistema prioritario' : 'Priority system'}</span>
                <h3>{emergency.title}</h3>
                <p>{emergency.description}</p>
              </div>
              <div className="emergency-interface" aria-hidden="true">
                <div className="sos-button">SOS</div>
                <div className="semaphore-mini">
                  <span className="red" />
                  <span className="yellow" />
                  <span className="green" />
                </div>
                <div className="location-chip">{language === 'es' ? 'Ubicación activa' : 'Live location'}</div>
                <div className="response-chip">{language === 'es' ? 'Respuesta activa' : 'Active response'}</div>
              </div>
            </article>

            <article className="product-module module-telemedicine">
              <div className="module-copy">
                <span>{language === 'es' ? 'Consulta digital' : 'Digital visit'}</span>
                <h3>{telemedicine.title}</h3>
              </div>
              <div className="video-ui" aria-hidden="true">
                <div className="doctor-video">
                  <span />
                </div>
                <div className="call-controls">
                  <i />
                  <i />
                  <i />
                </div>
                <p>{language === 'es' ? 'Médico conectado' : 'Doctor connected'}</p>
              </div>
            </article>

            <article className="product-module module-history">
              <div className="module-copy">
                <span>{language === 'es' ? 'Evolución clínica' : 'Clinical progress'}</span>
                <h3>{history.title}</h3>
              </div>
              <div className="history-ui" aria-hidden="true">
                <span />
                <span />
                <span />
                <div className="history-line" />
              </div>
            </article>

            <article className="product-module module-family">
              <div className="module-copy">
                <span>{language === 'es' ? 'Acompañamiento' : 'Support'}</span>
                <h3>{family.title}</h3>
              </div>
              <div className="family-ui" aria-hidden="true">
                <div className="person patient">P</div>
                <div className="family-connector" />
                <div className="person relative">F</div>
                <strong>{language === 'es' ? 'Notificación enviada' : 'Notification sent'}</strong>
              </div>
            </article>

            <article className="product-module module-professional">
              <div className="module-copy">
                <span>{language === 'es' ? 'Equipo clínico' : 'Care team'}</span>
                <h3>{professional.title}</h3>
              </div>
              <div className="professional-ui" aria-hidden="true">
                <div className="schedule-row" />
                <div className="schedule-row short" />
                <div className="patient-pills">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </article>

            <article className="product-module module-operations">
              <div className="module-copy">
                <span>{language === 'es' ? 'Operación institucional' : 'Institutional ops'}</span>
                <h3>{operations.title}</h3>
                <p>{operations.description}</p>
              </div>
              <div className="operations-ui" aria-hidden="true">
                <div className="metric-block">
                  <strong>128</strong>
                  <span>{language === 'es' ? 'Usuarios' : 'Users'}</span>
                </div>
                <div className="metric-block">
                  <strong>3</strong>
                  <span>{language === 'es' ? 'Sedes' : 'Sites'}</span>
                </div>
                <div className="metric-block wide">
                  <strong>{patientApp.title}</strong>
                  <span>{language === 'es' ? 'App conectada al ecosistema' : 'App connected to the ecosystem'}</span>
                </div>
              </div>
            </article>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
