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
      viewBox="0 0 34 34"
      ref={ref}
      {...props}
    >
      <rect className={styles.bgRect} width="34" height="34" rx="8" />
      <path
        className={styles.nPath}
        d="M6 5h6.5l10.5 15V5H28v24h-6.5L11 14v15H6Z"
      />
    </svg>
  );
});
