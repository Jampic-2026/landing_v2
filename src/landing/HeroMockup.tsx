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
    <div className="hero-mockup">
      <div className="hero-mockup-frame">
        <div className="hero-mockup-header">
          <span className="status-pill">{labels.status}</span>
          <div>
            <p>{labels.eyebrow}</p>
            <strong>{labels.title}</strong>
          </div>
        </div>

        <div className="hero-mockup-grid">
          <div className="mockup-panel mockup-panel-large">
            <div className="mockup-stat">
              <span>{labels.emergencyLabel}</span>
              <strong>{labels.emergencyValue}</strong>
            </div>
            <div className="mockup-line"></div>
            <div className="mockup-detail-grid">
              <div>
                <p>{labels.consultationLabel}</p>
                <strong>{labels.consultationValue}</strong>
              </div>
              <div>
                <p>{labels.historyLabel}</p>
                <strong>{labels.historyValue}</strong>
              </div>
            </div>
          </div>

          <div className="mockup-panel">
            <p>{labels.teamLabel}</p>
            <strong>{labels.teamValue}</strong>
          </div>

          <div className="mockup-panel">
            <p>{labels.operationsLabel}</p>
            <strong>{labels.operationsValue}</strong>
          </div>
        </div>
      </div>

      <div className="hero-phone" aria-hidden="true">
        <span>{labels.status}</span>
        <strong>SOS</strong>
        <p>{labels.emergencyLabel}</p>
        <button type="button">{labels.consultationLabel}</button>
      </div>

      <div className="hero-alert-card" aria-hidden="true">
        <span>SOS</span>
        <strong>{labels.emergencyValue}</strong>
      </div>

      <div className="hero-family-card" aria-hidden="true">
        <span>Family</span>
        <strong>{labels.teamValue}</strong>
      </div>

      <div className="hero-floating-cards">
        {stats.map((stat) => (
          <div key={stat.title} className="hero-floating-card">
            <strong>{stat.title}</strong>
            <p>{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
