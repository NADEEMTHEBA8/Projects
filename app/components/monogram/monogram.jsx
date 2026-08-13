import { forwardRef } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  return (
    <svg
      aria-label="Nadeem Theba — Monogram Logo"
      className={classes(styles.monogram, className)}
      width="34"
      height="34"
      viewBox="0 0 64 64"
      ref={ref}
      {...props}
    >
      <defs>
        <linearGradient id="monogramGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00e5ff" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <rect className={styles.bgRect} width="64" height="64" rx="16" />
      <path className={styles.nPath} d="M14 12h9l18 25.5V12h9v40h-9L23 26.5V52h-9Z" />
      <circle className={styles.nodeCircle} cx="18.5" cy="18.5" r="3.5" />
      <circle className={styles.nodeCircle} cx="45.5" cy="45.5" r="3.5" />
    </svg>
  );
});
