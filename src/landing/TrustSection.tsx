import AnimatedWrapper from '../components/AnimatedWrapper';
import SectionHeader from '../components/SectionHeader';
import { landingContent } from '../config/content';
import type { Language } from '../config/content';

export default function TrustSection({ language }: { language: Language }) {
  const content = landingContent[language].trust;

  return (
    <section className="scroll-section trust-section">
      <div className="container">
        <AnimatedWrapper>
          <SectionHeader title={content.title} />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.08}>
          <div className="trust-layout">
            <div className="security-stack" aria-hidden="true">
              <span>Acceso</span>
              <span>Permisos</span>
              <span>Historial</span>
              <strong>Hampiq</strong>
            </div>
            <div className="grid-3 trust-grid">
              {content.cards.map((item, index) => (
                <article key={item} className="module-card">
                  <span className="card-kicker">0{index + 1}</span>
                  <h3>{item}</h3>
                </article>
              ))}
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
