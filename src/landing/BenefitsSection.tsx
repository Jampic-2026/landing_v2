import AnimatedWrapper from '../components/AnimatedWrapper';
import BenefitCard from '../components/BenefitCard';
import SectionHeader from '../components/SectionHeader';
import { landingContent } from '../config/content';
import type { Language } from '../config/content';
import { useState } from 'react';

export default function BenefitsSection({ language }: { language: Language }) {
  const content = landingContent[language].benefits;
  const [activeGroup, setActiveGroup] = useState(0);
  const selectedGroup = content.groups[activeGroup];

  return (
    <section id="beneficios" className="scroll-section">
      <div className="container">
        <AnimatedWrapper>
          <SectionHeader title={content.title} />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.08}>
          <div className="benefit-showcase">
            <div className="benefit-tabs" role="tablist" aria-label={content.title}>
              {content.groups.map((group, index) => (
                <button
                  key={group.title}
                  type="button"
                  className={activeGroup === index ? 'active' : ''}
                  onClick={() => setActiveGroup(index)}
                >
                  {group.title}
                </button>
              ))}
            </div>
            <div className="benefit-panel">
              <BenefitCard title={selectedGroup.title} items={selectedGroup.items} />
              <div className="audience-diagram">
                <span className="audience-ring audience-ring-1" />
                <span className="audience-ring audience-ring-2" />
                <div className="audience-device">
                  <span className="audience-status">{language === 'es' ? 'Perfil activo' : 'Active profile'}</span>
                  <strong>{selectedGroup.title}</strong>
                  <div className="audience-signals">
                    {selectedGroup.items.slice(0, 3).map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <p>
                    {language === 'es'
                      ? 'Información clara para tomar mejores decisiones.'
                      : 'Clear information for better decisions.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
