import AnimatedWrapper from '../components/AnimatedWrapper';
import SectionHeader from '../components/SectionHeader';
import { landingContent } from '../config/content';
import type { Language } from '../config/content';

export default function FamilyCareSection({ language }: { language: Language }) {
  const content = landingContent[language].familyCare;

  return (
    <section className="scroll-section family-section">
      <div className="container family-layout">
        <AnimatedWrapper>
          <div className="family-copy">
            <SectionHeader title={content.title} subtitle={content.subtitle} />
            <ul className="family-list">
              {content.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.08}>
          <div className="family-mockup">
            <div className="phone-shell">
              <div className="phone-status">{content.mockup.status}</div>
              <div className="family-profile">
                <span>{content.mockup.patient}</span>
                <strong>Valeria M.</strong>
              </div>
              <div className="family-profile relative">
                <span>{content.mockup.relative}</span>
                <strong>Carlos M.</strong>
              </div>
              <div className="family-care-note">
                <span>{content.mockup.lastCare}</span>
                <strong>Teleconsulta completada</strong>
              </div>
              <button type="button">{content.mockup.notify}</button>
            </div>
            <div className="family-pulse-card">
              <span>SOS</span>
              <strong>{language === 'es' ? 'Familiar notificado' : 'Family notified'}</strong>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
