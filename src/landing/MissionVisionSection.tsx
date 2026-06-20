import AnimatedWrapper from '../components/AnimatedWrapper';
import { landingContent } from '../config/content';
import type { Language } from '../config/content';
import { containerShell, sectionShell } from './ui';

export default function MissionVisionSection({ language }: { language: Language }) {
  const content = landingContent[language].missionVision;

  return (
    <section className={sectionShell}>
      <div className={`${containerShell} grid gap-6 lg:grid-cols-2`}>
        <AnimatedWrapper>
          <article className="min-h-[300px] rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 dark:border-white/10 dark:bg-white/[0.06]">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-teal-500 to-sky-500 text-xl font-black text-white shadow-lg shadow-teal-500/20">M</span>
            <h2 className="mt-12 text-3xl font-black text-slate-950 dark:text-white">{content.missionTitle}</h2>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">{content.mission}</p>
          </article>
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.08}>
          <article className="min-h-[300px] rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-cyan-950 p-8 text-white shadow-xl shadow-slate-900/10 dark:border-white/10">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-xl font-black text-teal-200 ring-1 ring-white/15">V</span>
            <h2 className="mt-12 text-3xl font-black">{content.visionTitle}</h2>
            <p className="mt-4 leading-8 text-slate-300">{content.vision}</p>
          </article>
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.14} className="lg:col-span-2">
          <strong className="block rounded-3xl border border-teal-400/20 bg-teal-400/10 p-6 text-center text-xl font-black text-teal-800 dark:text-teal-200">
            {content.tagline}
          </strong>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
