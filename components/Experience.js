import styles from './Experience.module.css';

export default function Experience({ experience }) {
  return (
    <section id="experience" className={styles.section}>
      <span className="section-tag">// where I&apos;ve worked</span>
      <h2 className="section-title">Work <span className="accent">Experience</span></h2>
      <div className={styles.timeline}>
        {experience.map((exp, i) => (
          <div className={styles.item} key={i}>
            <div className={styles.date}>{exp.period}</div>
            <div className={`${styles.dot} ${styles[exp.color + 'Dot']}`}></div>
            <div className={styles.body}>
              <div className={styles.role}>{exp.role}</div>
              <div className={styles.company}>{exp.company}</div>
              <p className={styles.desc}>{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
