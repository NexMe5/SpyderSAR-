import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar                from './components/Navbar';
import Hero                  from './components/Hero';
import ProblemSolution       from './components/ProblemSolution';
import About                 from './components/About';
import TechnicalOverview     from './components/TechnicalOverview';
import Features              from './components/Features';
import ComponentsBudget      from './components/ComponentsBudget';
import DevelopmentTimeline   from './components/DevelopmentTimeline';
import Team                  from './components/Team';
import Gallery               from './components/Gallery';
import Contact               from './components/Contact';
import Footer                from './components/Footer';
import frames                from './data/frames';

/* ── Section wrapper with fade+slide-up reveal ─────────────────────────── */
function RevealSection({ id, children, overlayFrame }) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.07 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Robot frame overlay on section enter */}
      {overlayFrame && (
        <motion.div
          initial={{ opacity: 0.18 }}
          whileInView={{ opacity: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${overlayFrame})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            pointerEvents: 'none',
            zIndex: 0,
            mixBlendMode: 'luminosity',
          }}
        />
      )}
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <>
      <Navbar />

      {/* Hero doesn't need a reveal wrapper – it's always visible */}
      <Hero />

      <RevealSection overlayFrame={frames[20]}>
        <ProblemSolution />
      </RevealSection>

      <RevealSection overlayFrame={frames[40]}>
        <About />
      </RevealSection>

      <RevealSection overlayFrame={frames[60]}>
        <TechnicalOverview />
      </RevealSection>

      <RevealSection overlayFrame={frames[80]}>
        <Features />
      </RevealSection>

      <RevealSection overlayFrame={frames[90]}>
        <ComponentsBudget />
      </RevealSection>

      <RevealSection overlayFrame={frames[50]}>
        <DevelopmentTimeline />
      </RevealSection>

      <RevealSection overlayFrame={frames[30]}>
        <Team />
      </RevealSection>

      <RevealSection overlayFrame={frames[10]}>
        <Gallery />
      </RevealSection>

      <RevealSection overlayFrame={frames[70]}>
        <Contact />
      </RevealSection>

      <Footer />
    </>
  );
}
