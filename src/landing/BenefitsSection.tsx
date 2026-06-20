import AnimatedWrapper from '../components/AnimatedWrapper';
import SectionHeader from '../components/SectionHeader';
import { landingContent } from '../config/content';
import type { Language } from '../config/content';
import { Activity, Building2, HeartHandshake, UsersRound } from 'lucide-react';
import { containerShell, sectionShell } from './ui';

const benefitIcons = [UsersRound, HeartHandshake, Activity, Building2];

export default function BenefitsSection({ language }: { language: Language }) {
  const content = landingContent[language].benefits;

  return (
    <section id="beneficios" className={sectionShell}>
      <div className={containerShell}>
        <AnimatedWrapper>
          <SectionHeader title={content.title} />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.08}>
          <div className="-mx-4 mt-10 flex snap-x gap-5 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 xl:grid-cols-4">
            {content.groups.map((group, index) => {
              const Icon = benefitIcons[index] ?? UsersRound;

              return (
                <article
                  key={group.title}
                  className="min-w-[280px] snap-start rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-white/[0.06] md:min-w-0"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br from-teal-500 to-sky-500 text-white shadow-lg shadow-teal-500/20">
                      <Icon size={30} strokeWidth={2.3} />
                    </div>
                    <div className="grid h-16 w-20 grid-cols-3 items-end gap-1 rounded-2xl bg-slate-100 p-2 dark:bg-white/[0.06]" aria-hidden="true">
                      {[45, 78, 58].map((height) => (
                        <span key={height} className="rounded-full bg-teal-500/70" style={{ height: `${height}%` }} />
                      ))}
                    </div>
                  </div>
                  <h3 className="mt-8 text-xl font-black text-slate-950 dark:text-white">{group.title}</h3>
                  <ul className="mt-5 grid gap-3">
                    {group.items.slice(0, 3).map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 rounded-2xl border border-teal-400/20 bg-teal-400/10 p-3 text-xs font-black text-teal-700 dark:text-teal-300">
                    {language === 'es' ? 'Perfil conectado' : 'Connected profile'}
                  </div>
                </article>
              );
            })}
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
