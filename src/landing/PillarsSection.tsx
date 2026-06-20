import AnimatedWrapper from '../components/AnimatedWrapper';
import SectionHeader from '../components/SectionHeader';
import { landingContent } from '../config/content';
import type { Language } from '../config/content';

export default function PillarsSection({ language }: { language: Language }) {
  const content = landingContent[language].pillars;

  return (
    <section className="scroll-section pillars-section">
      <div className="container">
        <AnimatedWrapper>
          <SectionHeader title={content.title} subtitle={content.subtitle} align="center" />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.08}>
          <div className="pillars-grid">
            {content.items.map((item, index) => (
              <article key={item.title} className="pillar-card">
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
