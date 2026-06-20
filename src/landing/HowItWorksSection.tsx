import AnimatedWrapper from '../components/AnimatedWrapper';
import SectionHeader from '../components/SectionHeader';
import { landingContent } from '../config/content';
import type { Language } from '../config/content';

export default function HowItWorksSection({ language }: { language: Language }) {
  const content = landingContent[language].howItWorks;

  return (
    <section id="como-funciona" className="scroll-section">
      <div className="container">
        <AnimatedWrapper>
          <SectionHeader title={content.title} />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.08}>
          <div className="care-flow">
            <div className="care-flow-line" />
            {content.steps.map((step, index) => (
              <article key={step.title} className="flow-step">
                <span>0{index + 1}</span>
                <div className="flow-icon" aria-hidden="true" />
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
