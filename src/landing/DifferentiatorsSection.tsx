import AnimatedWrapper from '../components/AnimatedWrapper';
import SectionHeader from '../components/SectionHeader';
import { landingContent } from '../config/content';
import type { Language } from '../config/content';
import { containerShell, sectionShell } from './ui';

export default function DifferentiatorsSection({ language }: { language: Language }) {
  const content = landingContent[language].differentiators;

  return (
    <section className={sectionShell}>
      <div className={containerShell}>
        <AnimatedWrapper>
          <SectionHeader title={content.title} />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.08}>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {content.items.map((item, index) => (
              <article key={item} className="grid grid-cols-[3rem_1fr] gap-4 rounded-2xl border border-slate-200 bg-white/85 p-5 shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-white/[0.06]">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-500/10 text-sm font-black text-teal-700 dark:text-teal-300">0{index + 1}</span>
                <h3 className="self-center text-lg font-black leading-snug text-slate-950 dark:text-white">{item}</h3>
              </article>
            ))}
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
