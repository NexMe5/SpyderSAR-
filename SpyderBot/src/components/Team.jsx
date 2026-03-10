import { motion } from 'framer-motion';
import styles from './Team.module.css';

const GUIDE = {
  name: 'Dr. Peeyush Singh',
  role: 'Project Guide',
  dept: 'Electronics & Communication Engineering',
  college: 'VIT-AP University Amarawati',
  icon: '👨‍🏫',
};

const MEMBERS = [
  { name: 'Harsh Agarwal',    id: '221100',  role: 'Team Lead & Firmware' },
  { name: 'Rakshali Patidar',     id: '221101',  role: 'Mechanical Design' },
  { name: 'Nandini Mourya',    id: '221102',  role: 'Electronics & Wiring' },
  { name: 'Mohit Nehete',     id: '221103',  role: 'Software & Gait' },
  { name: 'Aaditya Verma',      id: '221104',  role: 'Sensors & Detection' },
];

export default function Team() {
  return (
    <section id="team" className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.25 }}
          className={styles.header}
        >
          <span className="section-label">People</span>
          <h2 className="section-title">Team &amp; Guide</h2>
          <div className="divider" />
        </motion.div>

        {/* Guide */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.3 }}
          className={`glass-card ${styles.guideCard}`}
        >
          <div className={styles.guideIcon}>{GUIDE.icon}</div>
          <div className={styles.guideInfo}>
            <span className={styles.guideTag}>Project Guide</span>
            <h3 className={styles.guideName}>{GUIDE.name}</h3>
            <p className={styles.guideDept}>{GUIDE.dept}</p>
            <p className={styles.guideCollege}>{GUIDE.college}</p>
          </div>
        </motion.div>

        {/* Members */}
        <div className={styles.membersLabel}>Team Members</div>
        <div className={styles.membersGrid}>
          {MEMBERS.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.09, duration: 0.45 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`glass-card ${styles.memberCard}`}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className={styles.avatar}>{m.name.charAt(0)}</div>
              <div>
                <h4 className={styles.memberName}>{m.name}</h4>
                <p className={styles.memberId}>Roll: {m.id}</p>
                <span className={styles.memberRole}>{m.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
