import { motion } from 'framer-motion';
import styles from './Features.module.css';

const FEATURES = [
  {
    icon: '🦿',
    title: 'Adaptive Locomotion',
    desc: 'Spider‑gait algorithm enables movement across rubble, sand, mud and inclined surfaces with 12 servo‑actuated joints.',
    badges: ['12 Servos', 'Multi‑terrain'],
  },
  {
    icon: '🪝',
    title: 'Vertical Climbing',
    desc: 'Hook‑based tendon mechanism allows the robot to scale vertical walls and pipes — critical in collapsed structure scenarios.',
    badges: ['Hook System', 'Wall Scaling'],
  },
  {
    icon: '🔍',
    title: 'Search & Detection',
    desc: 'MQ‑2 gas sensor detects smoke and toxic gases; PIR motion sensor identifies survivor heat signatures in debris.',
    badges: ['MQ‑2 Gas', 'PIR Motion'],
  },
  {
    icon: '🛡️',
    title: 'Safety & Robustness',
    desc: 'PVC chassis withstands impact loads; modular joints for field repairs; emergency e‑stop via Wi‑Fi command.',
    badges: ['Impact Proof', 'E‑Stop'],
  },
];

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.25 }}
          className={styles.header}
        >
          <span className="section-label">Capabilities</span>
          <h2 className="section-title">Features &amp; Capabilities</h2>
          <div className="divider" />
        </motion.div>

        <div className={styles.grid}>
          {FEATURES.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`glass-card ${styles.card}`}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className={styles.featIcon}>{feat.icon}</div>
              <h3 className={styles.cardTitle}>{feat.title}</h3>
              <p className={styles.cardDesc}>{feat.desc}</p>
              <div className={styles.badges}>
                {feat.badges.map(b => <span key={b} className={styles.badge}>{b}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
