import styles from './metrics-grid.module.css';

export function MetricsGrid({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((item, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.label}>{item.label}</div>
          <div className={styles.value}>{item.value}</div>
          <div className={styles.description}>{item.description}</div>
        </div>
      ))}
    </div>
  );
}
