import AnimatedWrapper from '../components/AnimatedWrapper';
import HeroMockup from './HeroMockup';
import { landingContent } from '../config/content';
import type { Language } from '../config/content';

type HeroSectionProps = {
  language: Language;
};

export default function HeroSection({ language }: HeroSectionProps) {
  const content = landingContent[language].hero;

  return (
    <section id="inicio" className="hero-section">
      <div className="container split-2">
        <AnimatedWrapper>
          <div className="hero-copy">
            <span className="badge">{content.badge}</span>
            <h1>{content.title}</h1>
            <p>{content.subtitle}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contacto">
                {content.primaryCta}
              </a>
              <a className="btn btn-secondary" href="#como-funciona">
                {content.secondaryCta}
              </a>
            </div>
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.1}>
          <HeroMockup stats={content.stats} labels={content.mockup} />
        </AnimatedWrapper>
      </div>
    </section>
  );
}
