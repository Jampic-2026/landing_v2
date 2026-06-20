import AnimatedWrapper from '../components/AnimatedWrapper';
import SectionHeader from '../components/SectionHeader';
import { landingContent } from '../config/content';
import type { Language } from '../config/content';

export default function TeamSection({ language }: { language: Language }) {
  const content = landingContent[language].team;

  return (
    <section className="scroll-section team-section">
      <div className="container">
        <AnimatedWrapper>
          <SectionHeader title={content.title} subtitle={content.subtitle} />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.08}>
          <div className="team-grid">
            {content.members.map((member, index) => (
              <article key={member.role} className="team-card">
                <div className="member-photo">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <h3>{member.name}</h3>
                  <strong>{member.role}</strong>
                  <p>{member.description}</p>
                </div>
              </article>
            ))}
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
