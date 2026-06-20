import { useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';
import { landingContent, type Language, type Theme } from '../config/content';

type NavbarProps = {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export default function Navbar({ language, setLanguage, theme, setTheme }: NavbarProps) {
  const content = landingContent[language].nav;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <div className="navbar-brand">
          <span className="brand-mark">H</span>
          <span className="brand-copy">
            <strong>Hampiq</strong>
            <small>{language === 'es' ? 'Ecosistema HealthTech' : 'HealthTech ecosystem'}</small>
          </span>
        </div>

        <div className="nav-links" aria-expanded={menuOpen}>
          {content.links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <div className="language-toggle">
            {(['es', 'en'] as Language[]).map((lang) => (
              <button
                key={lang}
                type="button"
                className={language === lang ? 'active' : ''}
                onClick={() => setLanguage(lang)}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <a className="btn btn-primary nav-cta" href="#contacto">
            {content.cta}
          </a>
          <button
            type="button"
            className="menu-button"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
