import styles from './Footer.module.css';

export default function Footer({ data }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>NH</div>
      <div className={styles.copy}>© {new Date().getFullYear()} {data.name} · {data.location}</div>
    </footer>
  );
}
