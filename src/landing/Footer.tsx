import type { Language } from '../config/content';

type FooterProps = {
  language: Language;
};

export default function Footer({ language }: FooterProps) {
  return (
    <footer>
      <div className="container footer-minimal">
        <div className="footer-brand">
          <strong>Hampiq</strong>
          <small>© 2026 Hampiq. Todos los derechos reservados.</small>
        </div>
        <div className="footer-icons" aria-label={language === 'es' ? 'Redes sociales' : 'Social media'}>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            f
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            ◎
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok">
            ♪
          </a>
        </div>
      </div>
    </footer>
  );
}
