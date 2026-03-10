import { useState, useRef, useCallback } from 'react';
import { useImageSequencePlayer } from '../hooks/useImageSequencePlayer';
import { useInView } from '../hooks/useInView';
import frames from '../data/frames';
import styles from './Hero.module.css';

export default function Hero() {
  const { ref: heroRef, inView } = useInView({ threshold: 0.2 });
  const { currentFrameSrc, isPlaying, play, pause, nudge } = useImageSequencePlayer(
    frames, 15, inView
  );

  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const throttleRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (throttleRef.current) return;
    throttleRef.current = setTimeout(() => {
      throttleRef.current = null;
      const rect = e.currentTarget.getBoundingClientRect();
      const cx = (e.clientX - rect.left) / rect.width  - 0.5;
      const cy = (e.clientY - rect.top)  / rect.height - 0.5;
      setParallax({ x: cx * 18, y: cy * 12 });
    }, 16);
  }, []);

  const handleMouseLeave = () => setParallax({ x: 0, y: 0 });

  const handleHoverFrame = (dir) => nudge(dir * 3);

  return (
    <section
      id="home"
      ref={heroRef}
      className={styles.hero}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated background gradient orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.gridOverlay} />

      <div className={styles.content}>
        {/* Left: Text */}
        <div className={styles.left}>
          <span className="section-label">Quadruped Robotics · Search &amp; Rescue</span>
          <h1 className={styles.title}>
            Spider<span className={styles.titleAccent}>SAR</span>
          </h1>
          <p className={styles.subtitle}>
            A spider‑inspired quadruped robot built for disaster response —
            navigating rubble, climbing walls, and locating survivors where
            conventional robots cannot.
          </p>
          <div className={styles.stats}>
            {[
              { val: '120', label: 'Animation Frames' },
              { val: '15fps', label: 'Playback Speed' },
              { val: '₹15K', label: 'Budget Target' },
            ].map(s => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statVal}>{s.val}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
          <div className={styles.ctaRow}>
            <a href="#technical" className="accent-btn">Explore Tech ↓</a>
            <a href="#team"      className="ghost-btn">Meet the Team</a>
          </div>
        </div>

        {/* Right: Robot Animation */}
        <div
          className={styles.right}
          onMouseEnter={() => handleHoverFrame(1)}
          onMouseLeave={() => handleHoverFrame(-1)}
        >
          <div
            className={styles.parallaxBg}
            style={{ transform: `translate(${parallax.x * 0.5}px, ${parallax.y * 0.5}px)` }}
          />
          <div
            className={styles.frameWrapper}
            style={{ transform: `translate(${-parallax.x * 0.4}px, ${-parallax.y * 0.3}px)` }}
          >
            <img
              src={currentFrameSrc}
              alt="SpiderSAR robot animation"
              className={styles.robotFrame}
              draggable={false}
            />
            {/* Glow reflection */}
            <div className={styles.glow} />
          </div>

          {/* Play/Pause */}
          <button
            className={styles.playBtn}
            onClick={isPlaying ? pause : play}
            aria-label={isPlaying ? 'Pause animation' : 'Play animation'}
          >
            {isPlaying ? '⏸' : '▶'}
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint}>
        <span>Scroll to explore</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
