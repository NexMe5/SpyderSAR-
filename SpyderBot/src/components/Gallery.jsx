import { motion } from 'framer-motion';
import styles from './Gallery.module.css';
import frames from '../data/frames';
import { useState } from 'react';

// Easily add or remove images here!
// Just provide the 'src' (path to image) and a 'caption' for the overlay.
const GALLERY_IMAGES = [
  { src: frames[0],   caption: "Initial Concept" },
  { src: frames[10],  caption: "Chassis Assembly" },
  { src: frames[20],  caption: "Leg Integration" },
  { src: frames[30],  caption: "Wiring Power Bus" },
  { src: frames[40],  caption: "Servo Calibration" },
  { src: frames[50],  caption: "Gait Testing" },
  { src: frames[60],  caption: "Climbing Setup" },
  { src: frames[70],  caption: "Sensor Array" },
  { src: frames[80],  caption: "Field Trial 1" },
  { src: frames[90],  caption: "Obstacle Course" },
  { src: frames[100], caption: "Final Polish" },
  { src: frames[110], caption: "Demo Ready" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  // Helper to get image source depending on if it is an object or a direct string
  const getImgSrc = (item) => typeof item === 'string' ? item : item.src;

  return (
    <section id="gallery" className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.25 }}
          className={styles.header}
        >
          <span className="section-label">Visuals</span>
          <h2 className="section-title">Robot Gallery</h2>
          <div className="divider" />
          <p className="section-subtitle">Project development gallery. Add more images in the code anytime!</p>
        </motion.div>

        <div className={styles.grid}>
          {GALLERY_IMAGES.map((item, i) => {
            const imgSrc = getImgSrc(item);
            const caption = item.caption || `Image ${i + 1}`;
            
            return (
              <motion.button
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                viewport={{ once: true, amount: 0.1 }}
                className={styles.thumb}
                onClick={() => setLightbox(imgSrc)}
                whileHover={{ scale: 1.04, zIndex: 2 }}
              >
                <img src={imgSrc} alt={caption} />
                <div className={styles.thumbOverlay}>
                  <span>{caption}</span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          className={styles.lightbox}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setLightbox(null)}
        >
          <motion.img
            src={lightbox}
            alt="SpiderSAR robot"
            initial={{ scale: 0.85 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            onClick={e => e.stopPropagation()}
            className={styles.lightboxImg}
          />
          <button className={styles.lightboxClose} onClick={() => setLightbox(null)}>✕</button>
        </motion.div>
      )}
    </section>
  );
}
