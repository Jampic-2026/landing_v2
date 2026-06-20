import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import MissionVisionSection from './MissionVisionSection';
import EmergencySystemSection from './EmergencySystemSection';
import FamilyCareSection from './FamilyCareSection';
import ProblemSection from './ProblemSection';
import SolutionSection from './SolutionSection';
import HowItWorksSection from './HowItWorksSection';
import ModulesSection from './ModulesSection';
import PillarsSection from './PillarsSection';
import BenefitsSection from './BenefitsSection';
import DifferentiatorsSection from './DifferentiatorsSection';
import TrustSection from './TrustSection';
import TechnologySection from './TechnologySection';
import PartnersSection from './PartnersSection';
import TeamSection from './TeamSection';
import ImpactSection from './ImpactSection';
import FinalCTASection from './FinalCTASection';
import Footer from './Footer';
import type { Language, Theme } from '../config/content';

export default function LandingPage() {
  const [language, setLanguage] = useState<Language>('es');
  const [theme, setThemeState] = useState<Theme>('light');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('hampiq-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setThemeState(savedTheme);
    }
  }, []);

  const setTheme = (nextTheme: Theme) => {
    setThemeState(nextTheme);
    window.localStorage.setItem('hampiq-theme', nextTheme);
  };

  return (
    <div data-theme={theme}>
      <Navbar language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} />
      <main>
        <HeroSection language={language} />
        <MissionVisionSection language={language} />
        <EmergencySystemSection language={language} />
        <FamilyCareSection language={language} />
        <ProblemSection language={language} />
        <SolutionSection language={language} />
        <PillarsSection language={language} />
        <HowItWorksSection language={language} />
        <ModulesSection language={language} />
        <BenefitsSection language={language} />
        <DifferentiatorsSection language={language} />
        <TrustSection language={language} />
        <TechnologySection language={language} />
        <PartnersSection language={language} />
        <ImpactSection language={language} />
        <TeamSection language={language} />
        <FinalCTASection language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}
