import AnimatedWrapper from '../components/AnimatedWrapper';
import SectionHeader from '../components/SectionHeader';
import { landingContent } from '../config/content';
import type { Language } from '../config/content';

export default function ProblemSection({ language }: { language: Language }) {
  const content = landingContent[language].problem;

  return (
    <section id="soluciones" className="scroll-section problem-section">
      <div className="container problem-layout">
        <AnimatedWrapper>
          <SectionHeader title={content.title} subtitle={content.subtitle} />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.08}>
          <div className="friction-map">
            <div className="friction-core">
              <span>{language === 'es' ? 'Paciente' : 'Patient'}</span>
              <strong>{language === 'es' ? 'Necesita atención' : 'Needs care'}</strong>
            </div>
            {content.items.map((item, index) => (
              <article key={item} className={`friction-node friction-node-${index + 1}`}>
                <span>0{index + 1}</span>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
