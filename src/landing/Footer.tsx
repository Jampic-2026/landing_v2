import type { Language } from '../config/content';
import { containerShell } from './ui';

type FooterProps = {
  language: Language;
};

export default function Footer({ language }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-8 text-white">
      <div className={`${containerShell} flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between`}>
        <div className="grid gap-1">
          <strong className="text-lg font-black">Hampiq</strong>
          <small className="text-sm text-slate-400">© 2026 Hampiq. Todos los derechos reservados.</small>
        </div>
        <div className="flex items-center gap-3" aria-label={language === 'es' ? 'Redes sociales' : 'Social media'}>
          <a className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/10 text-base font-black transition-colors hover:bg-white/15" href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            f
          </a>
          <a className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/10 text-base font-black transition-colors hover:bg-white/15" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            ◎
          </a>
          <a className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/10 text-base font-black transition-colors hover:bg-white/15" href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok">
            ♪
          </a>
        </div>
      </div>
    </footer>
  );
}
