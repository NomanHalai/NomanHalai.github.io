import styles from './Contact.module.css';

export default function Contact({ data }) {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.orb}></div>
      <div className={styles.content}>
        <span className="section-tag">// let&apos;s connect</span>
        <h2 className="section-title">Get In <span className="accent">Touch</span></h2>
        <p className={styles.sub}>I&apos;m always open to interesting opportunities, collaborations, and conversations. Drop me a message!</p>
        <a href={`mailto:${data.email}`} className={styles.email}>{data.email}</a>
        <div className={styles.links}>
          <a href={data.linkedin} target="_blank" rel="noreferrer" className="btn-primary">LinkedIn ↗</a>
          <a href={`tel:${data.phone}`} className="btn-outline">{data.phone}</a>
        </div>
      </div>
    </section>
  );
}
