import AnimatedWrapper from '../components/AnimatedWrapper';
import { landingContent } from '../config/content';
import type { Language } from '../config/content';

export default function MissionVisionSection({ language }: { language: Language }) {
  const content = landingContent[language].missionVision;

  return (
    <section className="scroll-section mission-section">
      <div className="container mission-grid">
        <AnimatedWrapper>
          <article className="mission-card mission-card-primary">
            <span className="mission-icon">M</span>
            <h2>{content.missionTitle}</h2>
            <p>{content.mission}</p>
          </article>
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.08}>
          <article className="mission-card mission-card-secondary">
            <span className="mission-icon">V</span>
            <h2>{content.visionTitle}</h2>
            <p>{content.vision}</p>
          </article>
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.14} className="mission-tagline">
          <strong>{content.tagline}</strong>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
