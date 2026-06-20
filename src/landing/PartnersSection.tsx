import AnimatedWrapper from '../components/AnimatedWrapper';
import SectionHeader from '../components/SectionHeader';
import { landingContent } from '../config/content';
import type { Language } from '../config/content';

export default function PartnersSection({ language }: { language: Language }) {
  const content = landingContent[language].partners;

  return (
    <section className="scroll-section partners-section">
      <div className="container">
        <AnimatedWrapper>
          <SectionHeader title={content.title} subtitle={content.subtitle} align="center" />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.08}>
          <div className="partners-strip">
            {content.items.map((item) => (
              <div key={item} className="partner-logo">
                {item}
              </div>
            ))}
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
