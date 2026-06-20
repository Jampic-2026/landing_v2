type FeatureCardProps = {
  title: string;
  description: string;
  index?: number;
};

export default function FeatureCard({ title, description, index = 0 }: FeatureCardProps) {
  return (
    <article className="feature-card">
      <span className="card-kicker">0{index + 1}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
