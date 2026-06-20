type ModuleCardProps = {
  title: string;
  description: string;
  index?: number;
};

export default function ModuleCard({ title, description, index = 0 }: ModuleCardProps) {
  const chips = ['Core', 'Seguro', 'Escalable'];

  return (
    <article className={`module-card module-card-${index + 1}`}>
      <span className="card-kicker">0{index + 1}</span>
      <div className="module-visual" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="module-chips">
        {chips.map((chip) => (
          <span key={chip}>{chip}</span>
        ))}
      </div>
    </article>
  );
}
