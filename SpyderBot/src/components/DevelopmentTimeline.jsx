import { motion } from 'framer-motion';
import styles from './DevelopmentTimeline.module.css';

const STEPS = [
  { num: 1, title: 'Concept & Research',   desc: 'Literature review on spider locomotion, SAR needs, and existing quadruped robots.' },
  { num: 2, title: 'Design & CAD',         desc: 'PVC chassis design, servo placement, leg geometry optimized for stability.' },
  { num: 3, title: 'Component Sourcing',   desc: 'Bill of materials finalized; components ordered within ₹15,500 budget.' },
  { num: 4, title: 'Mechanical Assembly',  desc: 'Chassis build, servo bracket mounting, hook/tendon climbing mechanism assembly.' },
  { num: 5, title: 'Electronics & Wiring', desc: 'Arduino Mega wiring, power bus, NodeMCU Wi-Fi integration and testing.' },
  { num: 6, title: 'Software & Gait',      desc: 'PWM servo control firmware, spider-gait algorithm, remote control interface.' },
  { num: 7, title: 'Testing & Demo',       desc: 'Field trials on rubble, wall-climb tests, sensor validation and final demo.' },
];

const WEEKS = [
  { week: 'W1', tasks: ['Concept', 'Research'] },
  { week: 'W2', tasks: ['Design', 'CAD'] },
  { week: 'W3', tasks: ['Sourcing'] },
  { week: 'W4', tasks: ['Assembly'] },
  { week: 'W5', tasks: ['Electronics'] },
  { week: 'W6', tasks: ['Software'] },
  { week: 'W7', tasks: ['Testing', 'Demo'] },
];

export default function DevelopmentTimeline() {
  return (
    <section id="timeline" className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className={styles.header}
        >
          <span className="section-label">Roadmap</span>
          <h2 className="section-title">Development Process</h2>
          <div className="divider" />
        </motion.div>

        {/* Vertical steps */}
        <div className={styles.steps}>
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className={styles.step}
            >
              <div className={styles.stepNum}>{step.num}</div>
              <div className={styles.stepLine} />
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Week bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className={styles.weekBar}
        >
          {WEEKS.map((w, i) => (
            <motion.div
              key={w.week}
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              transition={{ delay: 0.35 + i * 0.07, duration: 0.4 }}
              viewport={{ once: true }}
              className={styles.week}
            >
              <span className={styles.weekLabel}>{w.week}</span>
              {w.tasks.map(t => (
                <span key={t} className={styles.weekTask}>{t}</span>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
