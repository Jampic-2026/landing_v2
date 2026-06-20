type HeroMockupProps = {
  stats: { title: string; description: string }[];
  labels: {
    status: string;
    eyebrow: string;
    title: string;
    emergencyLabel: string;
    emergencyValue: string;
    consultationLabel: string;
    consultationValue: string;
    historyLabel: string;
    historyValue: string;
    teamLabel: string;
    teamValue: string;
    operationsLabel: string;
    operationsValue: string;
  };
};

export default function HeroMockup({ stats, labels }: HeroMockupProps) {
  return (
    <div className="relative grid min-h-[560px] place-items-center">
      <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950 p-5 shadow-2xl shadow-black/30">
        <div className="flex items-start justify-between gap-4 text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-2 text-xs font-black text-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {labels.status}
          </span>
          <div>
            <p className="text-sm font-bold text-slate-400">{labels.eyebrow}</p>
            <strong className="block text-lg font-black">{labels.title}</strong>
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-[1.05fr_0.95fr]">
          <div className="grid min-h-[330px] gap-5 rounded-2xl border border-white/10 bg-white/10 p-5 sm:row-span-2">
            <div>
              <span className="text-xs font-bold text-slate-400">{labels.emergencyLabel}</span>
              <strong className="mt-1 block text-3xl font-black text-red-200">{labels.emergencyValue}</strong>
            </div>
            <div className="relative h-36 overflow-hidden rounded-2xl bg-white/5">
              <div className="absolute left-4 right-4 top-1/2 h-1 rounded-full bg-gradient-to-r from-red-500 via-amber-500 to-teal-400 shadow-[0_0_28px_rgba(56,189,248,0.38)]" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-xs font-bold text-slate-400">{labels.consultationLabel}</p>
                <strong className="mt-1 block text-sm font-black text-white">{labels.consultationValue}</strong>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-xs font-bold text-slate-400">{labels.historyLabel}</p>
                <strong className="mt-1 block text-sm font-black text-white">{labels.historyValue}</strong>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
            <p className="text-xs font-bold text-slate-400">{labels.teamLabel}</p>
            <strong className="mt-2 block text-base font-black text-white">{labels.teamValue}</strong>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
            <p className="text-xs font-bold text-slate-400">{labels.operationsLabel}</p>
            <strong className="mt-2 block text-base font-black text-white">{labels.operationsValue}</strong>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 hidden w-40 rounded-3xl border border-white/10 bg-white/10 p-4 text-white shadow-2xl backdrop-blur sm:grid">
        <span className="w-fit rounded-full bg-emerald-400/10 px-2 py-1 text-xs font-black text-emerald-200">{labels.status}</span>
        <strong className="my-3 grid h-16 w-16 place-items-center rounded-full bg-red-500 font-black shadow-[0_0_28px_rgba(239,68,68,0.55)]">SOS</strong>
        <p className="text-xs text-slate-300">{labels.emergencyLabel}</p>
        <button type="button" className="mt-3 rounded-full bg-gradient-to-r from-teal-500 to-sky-500 px-3 py-2 text-xs font-black">{labels.consultationLabel}</button>
      </div>

      <div className="absolute right-4 top-16 rounded-2xl border border-white/10 bg-white/10 p-4 text-white shadow-2xl backdrop-blur" aria-hidden="true">
        <span className="text-xs font-black text-red-200">SOS</span>
        <strong className="block text-sm font-black">{labels.emergencyValue}</strong>
      </div>

      <div className="absolute bottom-40 right-0 hidden rounded-2xl border border-white/10 bg-white/10 p-4 text-white shadow-2xl backdrop-blur md:block" aria-hidden="true">
        <span className="text-xs font-black text-teal-200">Family</span>
        <strong className="block text-sm font-black">{labels.teamValue}</strong>
      </div>

      <div className="absolute bottom-0 right-0 grid w-80 max-w-[58%] gap-3">
        {stats.map((stat) => (
          <div key={stat.title} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-white shadow-2xl backdrop-blur">
            <strong className="block text-sm font-black">{stat.title}</strong>
            <p className="mt-1 text-xs leading-5 text-slate-300">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
