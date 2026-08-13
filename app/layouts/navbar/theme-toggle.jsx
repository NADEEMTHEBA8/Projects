import { useTheme } from '~/components/theme-provider';
import { classes } from '~/utils/style';
import styles from './theme-toggle.module.css';

export const ThemeToggle = ({ isMobile, className, ...rest }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className={classes(styles.toggleBtn, className)}
      data-mobile={isMobile}
      data-theme={theme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      onClick={() => toggleTheme()}
      {...rest}
    >
      <div className={styles.iconContainer}>
        {/* Sun Icon (Visible in Light Mode) */}
        <svg
          className={classes(styles.icon, styles.sunIcon)}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" fill="currentColor" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>

        {/* Crescent Moon Icon (Visible in Dark Mode) */}
        <svg
          className={classes(styles.icon, styles.moonIcon)}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </div>
    </button>
  );
};
