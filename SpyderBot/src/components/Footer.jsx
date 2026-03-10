import styles from './Footer.module.css';

const LINKS = [
  { href: '#home',      label: 'Home' },
  { href: '#about',     label: 'About' },
  { href: '#technical', label: 'Technical' },
  { href: '#features',  label: 'Features' },
  { href: '#team',      label: 'Team' },
  { href: '#contact',   label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <span>🕷</span> Spider<span className={styles.accent}>SAR</span>
        </div>
        <p className={styles.tagline}>
          Quadruped Search &amp; Rescue Robot · VIT-AP University Amarawati
        </p>
        <nav className={styles.links}>
          {LINKS.map(l => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <div className={styles.divLine} />
        <p className={styles.copy}>
          © 2026 SpiderSAR Project Team · All Rights Reserved ·
          <span className={styles.smallAccent}> Made with ♥ at VIT-AP University Amarawati</span>
        </p>
      </div>
    </footer>
  );
}
