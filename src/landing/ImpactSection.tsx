import AnimatedWrapper from '../components/AnimatedWrapper';
import SectionHeader from '../components/SectionHeader';
import { landingContent } from '../config/content';
import type { Language } from '../config/content';

export default function ImpactSection({ language }: { language: Language }) {
  const content = landingContent[language].impact;

  return (
    <section className="scroll-section impact-section">
      <div className="container">
        <AnimatedWrapper>
          <SectionHeader title={content.title} align="center" />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.08}>
          <div className="impact-dashboard">
            <div className="impact-orbital" aria-hidden="true">
              <span className="impact-ring impact-ring-1" />
              <span className="impact-ring impact-ring-2" />
              <span className="impact-ring impact-ring-3" />
              <strong>Hampiq</strong>
            </div>
            <div className="impact-grid">
              {content.metrics.map((metric, index) => (
                <article key={metric.value} className={`impact-card impact-card-${index + 1}`}>
                  <span>0{index + 1}</span>
                  <strong>{metric.value}</strong>
                  <p>{metric.label}</p>
                  <div className="impact-meter" aria-hidden="true">
                    <i />
                  </div>
                </article>
              ))}
            </div>
          </div>
          <p className="impact-note">
            <span>{language === 'es' ? 'Proyección' : 'Projection'}</span>
            {content.note}
          </p>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
