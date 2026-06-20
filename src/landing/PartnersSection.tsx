import AnimatedWrapper from '../components/AnimatedWrapper';
import SectionHeader from '../components/SectionHeader';
import { landingContent } from '../config/content';
import type { Language } from '../config/content';
import { containerShell, sectionShell } from './ui';

export default function PartnersSection({ language }: { language: Language }) {
  const content = landingContent[language].partners;

  return (
    <section className={sectionShell}>
      <div className={containerShell}>
        <AnimatedWrapper>
          <SectionHeader title={content.title} subtitle={content.subtitle} align="center" />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.08}>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.items.map((item) => (
              <div key={item} className="grid min-h-28 place-items-center rounded-2xl border border-slate-200 bg-white/85 p-5 text-center text-sm font-black text-slate-700 shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
