import AnimatedWrapper from '../components/AnimatedWrapper';
import SectionHeader from '../components/SectionHeader';
import { landingContent } from '../config/content';
import type { Language } from '../config/content';

export default function DifferentiatorsSection({ language }: { language: Language }) {
  const content = landingContent[language].differentiators;

  return (
    <section className="scroll-section">
      <div className="container">
        <AnimatedWrapper>
          <SectionHeader title={content.title} />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.08}>
          <div className="differentiator-rail">
            {content.items.map((item, index) => (
              <article key={item} className="differentiator-item">
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
