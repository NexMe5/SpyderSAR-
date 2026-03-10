import { motion } from 'framer-motion';
import styles from './About.module.css';
import frames from '../data/frames';

const ABOUT_POINTS = [
  { icon: '🕷', title: 'Spider Biomechanics', desc: 'Inspired by spider limb articulation for superior terrain navigation and stability on uneven ground.' },
  { icon: '🔩', title: 'Modular Build', desc: 'PVC-frame chassis with 3D-printed joints, designed for field repairability and cost efficiency under ₹15,500.' },
  { icon: '🎓', title: 'Academic Project', desc: 'Designed by B.Tech students at ABES Engineering College, Ghaziabad under the guidance of Dr. Peeyush Singh.' },
  { icon: '🌐', title: 'Open Architecture', desc: 'Arduino Mega + NodeMCU ESP8266 brain for wireless control, extensible for future AI integration.' },
];

export default function About() {
  const bgFrame = frames[60]; // mid-sequence frame as watermark

  return (
    <section id="about" className={styles.section} style={{ '--bg-frame': `url(${bgFrame})` }}>
      <div className={styles.bgFrame} />
      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.25 }}
          className={styles.header}
        >
          <span className="section-label">Background</span>
          <h2 className="section-title">About the Project</h2>
          <div className="divider" />
          <p className="section-subtitle">
            SpiderSAR is a spider‑inspired quadruped robot engineered for search &amp; rescue
            operations in disaster zones. Drawing from nature's most adept climber, the robot
            conquers debris fields, narrow passages, and vertical surfaces where traditional
            robots fail.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {ABOUT_POINTS.map((pt, i) => (
            <motion.div
              key={pt.title}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`glass-card ${styles.card}`}
            >
              <div className={styles.icon}>{pt.icon}</div>
              <h3 className={styles.cardTitle}>{pt.title}</h3>
              <p className={styles.cardDesc}>{pt.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
