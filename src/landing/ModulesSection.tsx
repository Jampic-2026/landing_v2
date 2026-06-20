import AnimatedWrapper from '../components/AnimatedWrapper';
import SectionHeader from '../components/SectionHeader';
import { landingContent } from '../config/content';
import type { Language } from '../config/content';
import { containerShell, sectionShell } from './ui';

export default function ModulesSection({ language }: { language: Language }) {
  const content = landingContent[language].modules;
  const emergency = content.cards[0];
  const telemedicine = content.cards[1];
  const history = content.cards[2];
  const professional = content.cards[3];
  const operations = content.cards[4];
  const patientApp = content.cards[5];
  const family = content.cards[6];

  return (
    <section className={sectionShell}>
      <div className={containerShell}>
        <AnimatedWrapper>
          <SectionHeader title={content.title} align="center" />
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.08}>
          <div className="mt-12 grid gap-5 lg:grid-cols-6" aria-label={content.title}>
            <article className="grid gap-6 rounded-3xl border border-red-400/20 bg-gradient-to-br from-red-500/12 via-white to-sky-500/10 p-6 shadow-xl shadow-slate-900/5 dark:via-white/[0.06] lg:col-span-3 lg:grid-cols-[1fr_220px]">
              <div>
                <span className="text-xs font-black uppercase text-red-500">{language === 'es' ? 'Sistema prioritario' : 'Priority system'}</span>
                <h3 className="mt-3 text-2xl font-black text-slate-950 dark:text-white">{emergency.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{emergency.description}</p>
              </div>
              <div className="relative min-h-64 rounded-3xl border border-slate-200 bg-white/80 p-5 dark:border-white/10 dark:bg-slate-950/80" aria-hidden="true">
                <div className="grid h-24 w-24 place-items-center rounded-full bg-red-500 text-xl font-black text-white shadow-[0_0_36px_rgba(239,68,68,0.55)]">SOS</div>
                <div className="absolute right-5 top-5 grid gap-2">
                  <span className="h-8 w-8 rounded-full bg-red-500 shadow-[0_0_24px_rgba(239,68,68,0.55)]" />
                  <span className="h-8 w-8 rounded-full bg-amber-500 shadow-[0_0_22px_rgba(245,158,11,0.48)]" />
                  <span className="h-8 w-8 rounded-full bg-emerald-500 shadow-[0_0_22px_rgba(34,197,94,0.42)]" />
                </div>
                <div className="absolute bottom-16 left-5 rounded-full bg-sky-500/10 px-3 py-2 text-xs font-black text-sky-700 dark:text-sky-300">{language === 'es' ? 'Ubicación activa' : 'Live location'}</div>
                <div className="absolute bottom-5 right-5 rounded-full bg-emerald-500/10 px-3 py-2 text-xs font-black text-emerald-700 dark:text-emerald-300">{language === 'es' ? 'Respuesta activa' : 'Active response'}</div>
              </div>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-xl shadow-slate-900/5 dark:border-white/10 dark:bg-white/[0.06] lg:col-span-3">
              <div>
                <span className="text-xs font-black uppercase text-sky-600 dark:text-sky-300">{language === 'es' ? 'Consulta digital' : 'Digital visit'}</span>
                <h3 className="mt-3 text-2xl font-black text-slate-950 dark:text-white">{telemedicine.title}</h3>
              </div>
              <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-slate-950/70" aria-hidden="true">
                <div className="grid h-40 place-items-center rounded-2xl bg-gradient-to-br from-sky-500/20 to-teal-500/20">
                  <span className="h-20 w-20 rounded-full bg-gradient-to-br from-slate-700 to-slate-950 ring-8 ring-white/60 dark:ring-white/10" />
                </div>
                <div className="mt-4 flex justify-center gap-3">
                  {[0, 1, 2].map((item) => <i key={item} className="h-10 w-10 rounded-full bg-white shadow-sm dark:bg-white/10" />)}
                </div>
                <p className="mt-4 text-center text-sm font-bold text-slate-600 dark:text-slate-300">{language === 'es' ? 'Médico conectado' : 'Doctor connected'}</p>
              </div>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-xl shadow-slate-900/5 dark:border-white/10 dark:bg-white/[0.06] lg:col-span-2">
              <div>
                <span className="text-xs font-black uppercase text-teal-700 dark:text-teal-300">{language === 'es' ? 'Evolución clínica' : 'Clinical progress'}</span>
                <h3 className="mt-3 text-xl font-black text-slate-950 dark:text-white">{history.title}</h3>
              </div>
              <div className="mt-8 grid gap-3" aria-hidden="true">
                {[80, 62, 90].map((width) => <span key={width} className="h-4 rounded-full bg-slate-200 dark:bg-white/10" style={{ width: `${width}%` }} />)}
                <div className="mt-3 h-2 rounded-full bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500" />
              </div>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-xl shadow-slate-900/5 dark:border-white/10 dark:bg-white/[0.06] lg:col-span-2">
              <div>
                <span className="text-xs font-black uppercase text-emerald-700 dark:text-emerald-300">{language === 'es' ? 'Acompañamiento' : 'Support'}</span>
                <h3 className="mt-3 text-xl font-black text-slate-950 dark:text-white">{family.title}</h3>
              </div>
              <div className="mt-8 grid place-items-center gap-4" aria-hidden="true">
                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-teal-500 text-white font-black">P</div>
                  <div className="h-1 w-14 rounded-full bg-teal-500/40" />
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-sky-500 text-white font-black">F</div>
                </div>
                <strong className="rounded-full bg-emerald-500/10 px-3 py-2 text-xs font-black text-emerald-700 dark:text-emerald-300">{language === 'es' ? 'Notificación enviada' : 'Notification sent'}</strong>
              </div>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-xl shadow-slate-900/5 dark:border-white/10 dark:bg-white/[0.06] lg:col-span-2">
              <div>
                <span className="text-xs font-black uppercase text-violet-700 dark:text-violet-300">{language === 'es' ? 'Equipo clínico' : 'Care team'}</span>
                <h3 className="mt-3 text-xl font-black text-slate-950 dark:text-white">{professional.title}</h3>
              </div>
              <div className="mt-8 grid gap-4" aria-hidden="true">
                <div className="h-5 rounded-full bg-slate-200 dark:bg-white/10" />
                <div className="h-5 w-2/3 rounded-full bg-slate-200 dark:bg-white/10" />
                <div className="flex gap-2">
                  {[0, 1, 2].map((item) => <span key={item} className="h-10 flex-1 rounded-2xl bg-violet-500/10" />)}
                </div>
              </div>
            </article>

            <article className="grid gap-6 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-cyan-950 p-6 text-white shadow-xl shadow-slate-900/10 lg:col-span-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <span className="text-xs font-black uppercase text-teal-200">{language === 'es' ? 'Operación institucional' : 'Institutional ops'}</span>
                <h3 className="mt-3 text-2xl font-black">{operations.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{operations.description}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2" aria-hidden="true">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                  <strong className="text-3xl font-black">128</strong>
                  <span className="block text-sm text-slate-300">{language === 'es' ? 'Usuarios' : 'Users'}</span>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                  <strong className="text-3xl font-black">3</strong>
                  <span className="block text-sm text-slate-300">{language === 'es' ? 'Sedes' : 'Sites'}</span>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-5 sm:col-span-2">
                  <strong className="text-xl font-black">{patientApp.title}</strong>
                  <span className="block text-sm text-slate-300">{language === 'es' ? 'App conectada al ecosistema' : 'App connected to the ecosystem'}</span>
                </div>
              </div>
            </article>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
