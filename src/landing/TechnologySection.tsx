import AnimatedWrapper from '../components/AnimatedWrapper';
import SectionHeader from '../components/SectionHeader';
import { landingContent } from '../config/content';
import type { Language } from '../config/content';
import { containerShell, sectionShell } from './ui';

export default function TechnologySection({ language }: { language: Language }) {
  const content = landingContent[language].technology;
  const items = [...content.items, ...content.items];

  return (
    <section className={sectionShell}>
      <div className={containerShell}>
        <AnimatedWrapper>
          <SectionHeader title={content.title} subtitle={content.subtitle} align="center" />
        </AnimatedWrapper>
      </div>
      <AnimatedWrapper delay={0.08}>
        <div className="mt-10 overflow-hidden" aria-label={content.title}>
          <div className="flex w-max animate-marquee gap-4 px-4">
            {items.map((item, index) => (
              <article key={`${item.name}-${index}`} className="flex w-[320px] items-center gap-4 rounded-2xl border border-slate-200 bg-white/85 p-5 shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-white/[0.06]">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-slate-100 text-2xl dark:bg-white/10">{item.logo}</span>
                <div>
                  <h3 className="font-black text-slate-950 dark:text-white">{item.name}</h3>
                  <p className="mt-1 text-sm leading-5 text-slate-600 dark:text-slate-300">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedWrapper>
    </section>
  );
}
