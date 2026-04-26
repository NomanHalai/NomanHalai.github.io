import styles from './Stats.module.css';

export default function Stats({ stats }) {
  return (
    <div className={styles.bar}>
      {stats.map((s, i) => (
        <div className={styles.item} key={i}>
          <div className={styles.num}>{s.num}</div>
          <div className={styles.label}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}
