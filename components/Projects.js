import styles from './Projects.module.css';

export default function Projects({ projects }) {
  return (
    <section id="projects" className={styles.section}>
      <span className="section-tag">// things I&apos;ve built</span>
      <h2 className="section-title">Featured <span className="accent">Projects</span></h2>
      <div className={styles.grid}>
        {projects.map((p, i) => (
          <div className={styles.card} key={i}>
            <div className={styles.num}>{p.num}</div>
            <div className={styles.period}>{p.period}</div>
            <div className={styles.name}>{p.name}</div>
            <div className={styles.role}>{p.role}</div>
            <p className={styles.desc}>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
