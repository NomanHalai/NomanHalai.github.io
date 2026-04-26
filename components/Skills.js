import styles from './Skills.module.css';

export default function Skills({ skills }) {
  return (
    <section id="skills" className={styles.section}>
      <span className="section-tag">// what I work with</span>
      <h2 className="section-title">Skills & <span className="accent">Tech Stack</span></h2>
      <div className={styles.grid}>
        {skills.map((skill, i) => (
          <div className={`${styles.card} ${styles[skill.color]}`} key={i}>
            <span className={styles.icon}>{skill.icon}</span>
            <div className={styles.cardTitle}>{skill.title}</div>
            <div className={styles.tags}>
              {skill.tags.map((tag, j) => (
                <span className={`${styles.tag} ${styles[skill.color + 'Tag']}`} key={j}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
