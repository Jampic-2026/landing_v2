import AnimatedWrapper from '../components/AnimatedWrapper';
import { landingContent } from '../config/content';
import type { Language } from '../config/content';
import { containerShell, sectionShell } from './ui';

export default function MissionVisionSection({ language }: { language: Language }) {
  const content = landingContent[language].missionVision;

  return (
    <section className={sectionShell}>
      <div className={`${containerShell} grid items-stretch gap-6 lg:grid-cols-2`}>
        <AnimatedWrapper className="h-full">
          <article className="flex h-full min-h-[330px] flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 dark:border-white/10 dark:bg-white/[0.06]">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-teal-500 to-sky-500 text-xl font-black text-white shadow-lg shadow-teal-500/20">
              M
            </span>

            <h2 className="mt-12 text-3xl font-black text-slate-950 dark:text-white">
              {content.missionTitle}
            </h2>

            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              {content.mission}
            </p>
          </article>
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.08} className="h-full">
          <article className="flex h-full min-h-[330px] flex-col rounded-3xl border border-teal-200 bg-gradient-to-br from-teal-50 via-white to-sky-50 p-8 shadow-xl shadow-teal-900/5 dark:border-white/10 dark:bg-gradient-to-br dark:from-slate-900 dark:to-cyan-950 dark:text-white dark:shadow-slate-900/10">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-teal-100 text-xl font-black text-teal-700 ring-1 ring-teal-500/15 dark:bg-white/10 dark:text-teal-200 dark:ring-white/15">
              V
            </span>

            <h2 className="mt-12 text-3xl font-black text-slate-950 dark:text-white">
              {content.visionTitle}
            </h2>

            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              {content.vision}
            </p>
          </article>
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.14} className="lg:col-span-2">
          <strong className="block rounded-3xl border border-teal-300/40 bg-teal-50 p-6 text-center text-xl font-black text-teal-800 shadow-sm dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-200">
            {content.tagline}
          </strong>
        </AnimatedWrapper>
      </div>
    </section>
  );
}