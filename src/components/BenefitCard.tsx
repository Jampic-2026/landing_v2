type BenefitCardProps = {
  title: string;
  items: string[];
};

export default function BenefitCard({ title, items }: BenefitCardProps) {
  return (
    <article className="benefit-card">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
