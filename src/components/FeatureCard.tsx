type FeatureCardProps = {
  title: string;
  description: string;
  index?: number;
};

export default function FeatureCard({ title, description, index = 0 }: FeatureCardProps) {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/85 p-5 shadow-lg shadow-slate-900/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.06]">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/10 text-xs font-black text-teal-700 dark:text-teal-300">
        0{index + 1}
      </span>
      <h3 className="mt-5 text-lg font-black leading-snug text-slate-950 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
    </article>
  );
}
