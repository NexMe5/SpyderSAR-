import { motion } from 'framer-motion';
import styles from './ComponentsBudget.module.css';

const ROWS = [
  { component: 'Arduino Mega 2560',          qty: 1,   unit: 750,   total: 750,   note: 'Main MCU' },
  { component: 'NodeMCU ESP8266',             qty: 1,   unit: 350,   total: 350,   note: 'Wi-Fi control' },
  { component: 'SG90 Servo Motor',            qty: 12,  unit: 80,    total: 960,   note: '3 per leg' },
  { component: 'MQ-2 Gas Sensor',             qty: 1,   unit: 120,   total: 120,   note: 'Gas/smoke' },
  { component: 'PIR Motion Sensor',           qty: 1,   unit: 80,    total: 80,    note: 'Survivor detect' },
  { component: 'Raspberry Pi Camera (opt.)',  qty: 1,   unit: 800,   total: 800,   note: 'Video stream' },
  { component: 'PVC Pipes & Fittings',        qty: 1,   unit: 400,   total: 400,   note: 'Chassis' },
  { component: '3D-Printed Parts',            qty: 1,   unit: 600,   total: 600,   note: 'Joints & mounts' },
  { component: 'LiPo 7.4V 2200mAh',          qty: 1,   unit: 900,   total: 900,   note: 'Power supply' },
  { component: 'TP4056 Charging Module',      qty: 1,   unit: 60,    total: 60,    note: 'Battery charger' },
  { component: 'L298N H-Bridge',              qty: 1,   unit: 120,   total: 120,   note: 'Motor driver' },
  { component: 'Hook & Tendon System',        qty: 1,   unit: 300,   total: 300,   note: 'Climbing' },
  { component: 'Wires, PCB, Misc.',           qty: 1,   unit: 500,   total: 500,   note: 'Electronics misc.' },
  { component: 'RC Receiver (optional)',      qty: 1,   unit: 350,   total: 350,   note: 'Wired mode' },
];

const LOW  = ROWS.reduce((a, r) => a + (r.component.includes('opt') ? 0 : r.total), 0);
const HIGH = ROWS.reduce((a, r) => a + r.total, 0);

export default function ComponentsBudget() {
  return (
    <section id="budget" className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className={styles.header}
        >
          <span className="section-label">Bill of Materials</span>
          <h2 className="section-title">Components &amp; Budget</h2>
          <div className="divider" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          viewport={{ once: true, amount: 0.1 }}
          className={styles.tableWrap}
        >
          <table className={styles.table}>
            <thead>
              <tr>
                <th>#</th>
                <th>Component</th>
                <th>Qty</th>
                <th>Unit (₹)</th>
                <th>Total (₹)</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={row.component} className={row.component.includes('opt') ? styles.optRow : ''}>
                  <td className={styles.num}>{i + 1}</td>
                  <td className={styles.name}>{row.component}</td>
                  <td className={styles.center}>{row.qty}</td>
                  <td className={styles.center}>₹{row.unit.toLocaleString()}</td>
                  <td className={styles.center}>₹{row.total.toLocaleString()}</td>
                  <td className={styles.note}>{row.note}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className={styles.totalRow}>
                <td colSpan={4} className={styles.totalLabel}>Total Estimated Cost</td>
                <td className={styles.totalVal}>₹{LOW.toLocaleString()} – ₹{HIGH.toLocaleString()}</td>
                <td />
              </tr>
            </tfoot>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
