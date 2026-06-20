import AnimatedWrapper from '../components/AnimatedWrapper';
import FeatureCard from '../components/FeatureCard';
import SectionHeader from '../components/SectionHeader';
import { landingContent } from '../config/content';
import type { Language } from '../config/content';

export default function SolutionSection({ language }: { language: Language }) {
  const content = landingContent[language].solution;

  return (
    <section className="scroll-section solution-section">
      <div className="container solution-layout">
        <AnimatedWrapper>
          <SectionHeader title={content.title} />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.08}>
          <div className="solution-content">
            <div className="ecosystem-diagram" aria-hidden="true">
              <div className="ecosystem-orbit ecosystem-orbit-1" />
              <div className="ecosystem-orbit ecosystem-orbit-2" />
              <div className="ecosystem-center">
                <span>Hampiq</span>
                <strong>{language === 'es' ? 'Ecosistema' : 'Ecosystem'}</strong>
              </div>
              {content.cards.slice(0, 6).map((item, index) => (
                <span key={item.title} className={`ecosystem-point ecosystem-point-${index + 1}`}>
                  {item.title}
                </span>
              ))}
            </div>
            <div className="feature-list">
              {content.cards.map((item, index) => (
                <FeatureCard key={item.title} title={item.title} description={item.description} index={index} />
              ))}
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
