import styles from './Hero.module.css';

export default function Hero({ data }) {
  return (
    <section className={styles.hero}>
      <div className={styles.gridBg}></div>
      <div className={styles.orb}></div>
      <div className={styles.content}>
        {data.available && (
          <div className={styles.badge}>Available for opportunities</div>
        )}
        <h1 className={styles.name}>
          {data.name.split(' ')[0]}<br />
          <span className={styles.accent}>{data.name.split(' ')[1]}.</span>
        </h1>
        <p className={styles.title}>
          <span>{data.title}</span> · {data.subtitle}
        </p>
        <p className={styles.desc}>{data.about}</p>
        <div className={styles.ctas}>
          <a href={`mailto:${data.email}`} className="btn-primary">Get in touch →</a>
          <a href={data.linkedin} target="_blank" rel="noreferrer" className="btn-outline">LinkedIn ↗</a>
        </div>
      </div>
    </section>
  );
}
