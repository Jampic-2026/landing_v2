import type { ReactNode } from 'react';

type SectionHeaderProps = {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
};

export default function SectionHeader({ badge, title, subtitle, align = 'left' }: SectionHeaderProps) {
  return (
    <div className="section-title" style={{ textAlign: align }}>
      {badge ? <span className="badge">{badge}</span> : null}
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  );
}
