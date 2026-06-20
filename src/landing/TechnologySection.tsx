import AnimatedWrapper from '../components/AnimatedWrapper';
import SectionHeader from '../components/SectionHeader';
import { landingContent } from '../config/content';
import type { Language } from '../config/content';

export default function TechnologySection({ language }: { language: Language }) {
  const content = landingContent[language].technology;
  const items = [...content.items, ...content.items];

  return (
    <section className="scroll-section technology-section">
      <div className="container">
        <AnimatedWrapper>
          <SectionHeader title={content.title} subtitle={content.subtitle} align="center" />
        </AnimatedWrapper>
      </div>
      <AnimatedWrapper delay={0.08}>
        <div className="tech-marquee" aria-label={content.title}>
          <div className="tech-track">
            {items.map((item, index) => (
              <article key={`${item.name}-${index}`} className="tech-card">
                <span className="tech-logo">{item.logo}</span>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedWrapper>
    </section>
  );
}
