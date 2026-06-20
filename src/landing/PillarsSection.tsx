import AnimatedWrapper from '../components/AnimatedWrapper';
import SectionHeader from '../components/SectionHeader';
import { landingContent } from '../config/content';
import type { Language } from '../config/content';
import { containerShell, sectionShell } from './ui';

export default function PillarsSection({ language }: { language: Language }) {
  const content = landingContent[language].pillars;

  return (
    <section className={sectionShell}>
      <div className={containerShell}>
        <AnimatedWrapper>
          <SectionHeader title={content.title} subtitle={content.subtitle} align="center" />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.08}>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {content.items.map((item, index) => (
              <article key={item.title} className="min-h-[240px] rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-white/[0.06]">
                <span className="text-xs font-black text-teal-700 dark:text-teal-300">0{index + 1}</span>
                <h3 className="mt-10 text-xl font-black text-slate-950 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
