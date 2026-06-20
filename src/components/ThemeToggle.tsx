import type { Theme } from '../config/content';

type ThemeToggleProps = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export default function ThemeToggle({ theme, setTheme }: ThemeToggleProps) {
  const nextTheme = theme === 'light' ? 'dark' : 'light';

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
      onClick={() => setTheme(nextTheme)}
    >
      <span />
    </button>
  );
}
