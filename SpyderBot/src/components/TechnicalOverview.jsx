import { motion } from 'framer-motion';
import styles from './TechnicalOverview.module.css';

const TECH_CARDS = [
  {
    icon: '🧠',
    title: 'Processing & Control',
    items: [
      'Arduino Mega 2560 – main controller',
      'NodeMCU ESP8266 – Wi‑Fi & remote control',
      'RC Receiver (optional wired mode)',
    ],
  },
  {
    icon: '🔧',
    title: 'Mechanical & Structural',
    items: [
      'PVC pipe chassis – lightweight & rigid',
      '3D‑printed servo brackets & joints',
      'Hook/tendon climbing attachment',
    ],
  },
  {
    icon: '⚙️',
    title: 'Actuators',
    items: [
      '12 × SG90 servo motors (3 per leg)',
      'Dedicated servo power bus',
      'PWM‑based gait control firmware',
    ],
  },
  {
    icon: '📡',
    title: 'Sensors',
    items: [
      'MQ‑2 Gas sensor (smoke/LPG/CO)',
      'IR PIR motion sensor',
      'Raspberry Pi Camera (optional stream)',
    ],
  },
  {
    icon: '⚡',
    title: 'Electrical',
    items: [
      '7.4 V 2200 mAh LiPo battery',
      'L298N H‑bridge (future drive expansion)',
      'TP4056 charging module',
    ],
  },
];

export default function TechnicalOverview() {
  return (
    <section id="technical" className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.25 }}
          className={styles.header}
        >
          <span className="section-label">Engineering</span>
          <h2 className="section-title">Technical Overview</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Five integrated subsystems power SpiderSAR's locomotion, sensing,
            and control — all within a sub-₹15,500 budget.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {TECH_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.09, duration: 0.55 }}
              viewport={{ once: true, amount: 0.15 }}
              className={`glass-card ${styles.card}`}
              whileHover={{ y: -8, rotateX: 1, rotateY: 1 }}
            >
              <div className={styles.iconWrap}>
                <span className={styles.icon}>{card.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <ul className={styles.list}>
                {card.items.map(it => <li key={it}>{it}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
