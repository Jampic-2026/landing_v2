import AnimatedWrapper from '../components/AnimatedWrapper';
import SectionHeader from '../components/SectionHeader';
import { landingContent } from '../config/content';
import type { Language } from '../config/content';
import { containerShell, sectionShell } from './ui';

export default function TeamSection({ language }: { language: Language }) {
  const content = landingContent[language].team;

  return (
    <section className={sectionShell}>
      <div className={containerShell}>
        <AnimatedWrapper>
          <SectionHeader title={content.title} subtitle={content.subtitle} />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.08}>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {content.members.map((member, index) => (
              <article key={member.role} className="grid gap-5 rounded-3xl border border-slate-200 bg-white/85 p-5 shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-white/[0.06] sm:grid-cols-[112px_1fr]">
                <div className="grid h-32 place-items-end rounded-2xl bg-gradient-to-br from-teal-500/25 to-sky-500/25 p-4 sm:h-full">
                  <span className="text-2xl font-black text-teal-700 dark:text-teal-200">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-950 dark:text-white">{member.name}</h3>
                  <strong className="mt-2 block text-sm font-black text-teal-700 dark:text-teal-300">{member.role}</strong>
                  <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{member.description}</p>
                </div>
              </article>
            ))}
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
