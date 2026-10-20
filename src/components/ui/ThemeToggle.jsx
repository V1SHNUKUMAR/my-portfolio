import { useTheme } from '../../hooks/useTheme'

/** Sun / moon button that switches between light and dark mode. */
export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className={`flex h-[1.8em] w-[1.8em] cursor-pointer items-center justify-center rounded-full border border-[rgba(128,128,128,0.4)] bg-white/30 text-[2em] text-inherit [transition:.2s] hover:text-tomato hover:[text-shadow:0px_0px_10px_tomato] dark:bg-white/10 ${className}`}
    >
      <i className={`fa-solid ${isDark ? 'fa-sun' : 'fa-moon'} text-[1em]`} aria-hidden="true" />
    </button>
  )
}
