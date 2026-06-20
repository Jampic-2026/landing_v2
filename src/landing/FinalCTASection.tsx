import AnimatedWrapper from '../components/AnimatedWrapper';
import SectionHeader from '../components/SectionHeader';
import { landingContent } from '../config/content';
import type { Language } from '../config/content';

export default function FinalCTASection({ language }: { language: Language }) {
  const content = landingContent[language].finalCta;

  return (
    <section className="section-cta">
      <div className="container">
        <AnimatedWrapper>
          <div className="cta-card">
            <div className="cta-copy">
              <SectionHeader title={content.title} subtitle={content.subtitle} />
              <div className="hero-actions">
                <a className="btn btn-primary" href="#contacto">
                  {content.primaryCta}
                </a>
                <a className="btn btn-secondary" href="#contacto">
                  {content.secondaryCta}
                </a>
              </div>
            </div>
            <div className="cta-mini-mockup" aria-hidden="true">
              <span>24/7</span>
              <strong>SOS</strong>
              <p>Care connected</p>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
