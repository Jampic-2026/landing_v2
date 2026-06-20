import AnimatedWrapper from '../components/AnimatedWrapper';
import SectionHeader from '../components/SectionHeader';
import { landingContent } from '../config/content';
import type { Language } from '../config/content';

export default function EmergencySystemSection({ language }: { language: Language }) {
  const content = landingContent[language].emergencySystem;

  return (
    <section className="scroll-section emergency-section">
      <div className="container emergency-layout">
        <AnimatedWrapper>
          <SectionHeader title={content.title} subtitle={content.subtitle} />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.08}>
          <div className="triage-console">
            <div className="triage-radar" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="triage-stack">
              {content.levels.map((level, index) => (
                <article key={level.title} className={`triage-level triage-${level.color}`}>
                  <div>
                    <span className="triage-code">0{index + 1}</span>
                    <h3>{level.title}</h3>
                  </div>
                  <ul>
                    {level.examples.map((example) => (
                      <li key={example}>{example}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <aside className="triage-side-note">
              <span>{language === 'es' ? 'Coordinación inteligente' : 'Smart coordination'}</span>
              <strong>{content.sideNote}</strong>
            </aside>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
