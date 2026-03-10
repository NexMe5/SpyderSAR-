import { motion } from 'framer-motion';
import styles from './ProblemSolution.module.css';

const CARDS = [
  {
    icon: '⚠️',
    tag: 'The Challenge',
    title: 'Search & Rescue Limitations',
    points: [
      'Rubble and debris blocks human responders',
      'Toxic gases and structural instability create hazards',
      'Time is critical — survivors found within 72 hrs',
      'Existing wheeled robots lack terrain adaptability',
    ],
    variant: 'problem',
  },
  {
    icon: '🕷',
    tag: 'Our Solution',
    title: 'SpiderSAR: Inspired by Nature',
    points: [
      'Spider‑inspired 4‑legged locomotion for any terrain',
      'Vertical climbing via hook‑based tendon mechanism',
      'Onboard gas & IR sensors for survivor detection',
      'Compact, lightweight design under ₹15,500 budget',
    ],
    variant: 'solution',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.18, duration: 0.6, ease: 'easeOut' } }),
};

export default function ProblemSolution() {
  return (
    <section id="problem" className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className={styles.header}
        >
          <span className="section-label">Why SpiderSAR?</span>
          <h2 className="section-title">Problem &amp; Solution</h2>
          <div className="divider" />
        </motion.div>

        <div className={styles.grid}>
          {CARDS.map((card, i) => (
            <motion.div
              key={card.tag}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className={`${styles.card} ${styles[card.variant]}`}
            >
              <div className={styles.cardIcon}>{card.icon}</div>
              <span className={styles.cardTag}>{card.tag}</span>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <ul className={styles.list}>
                {card.points.map(p => <li key={p}>{p}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
