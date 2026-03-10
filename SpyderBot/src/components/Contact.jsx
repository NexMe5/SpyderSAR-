import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

const INITIAL = { name: '', email: '', institution: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm]       = useState(INITIAL);
  const [errors, setErrors]   = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setSubmitted(true);
    // In production: POST to backend / email service
  };

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    setErrors(err => ({ ...err, [e.target.name]: undefined }));
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.25 }}
          className={styles.header}
        >
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">Contact Us</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Interested in SpiderSAR? Have questions or collaboration ideas?
            We'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          viewport={{ once: true, amount: 0.15 }}
          className={`glass-card ${styles.formCard}`}
        >
          {submitted ? (
            <div className={styles.success}>
              <span className={styles.successIcon}>✅</span>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. We'll get back to you soon.</p>
              <button className="accent-btn" onClick={() => { setForm(INITIAL); setSubmitted(false); }}>
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className={styles.form}>
              <div className={styles.row}>
                <Field label="Name *"     name="name"        type="text"  value={form.name}        onChange={handleChange} error={errors.name} />
                <Field label="Email *"    name="email"       type="email" value={form.email}       onChange={handleChange} error={errors.email} />
              </div>
              <div className={styles.row}>
                <Field label="Institution" name="institution" type="text" value={form.institution}  onChange={handleChange} />
                <Field label="Subject"     name="subject"     type="text" value={form.subject}      onChange={handleChange} />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.message ? styles.inputError : ''}`}
                  placeholder="Tell us about your interest in SpiderSAR..."
                />
                {errors.message && <span className={styles.error}>{errors.message}</span>}
              </div>
              <button type="submit" className={`accent-btn ${styles.submit}`}>
                Send Message →
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', value, onChange, error }) {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`${styles.input} ${error ? styles.inputError : ''}`}
        placeholder={label.replace(' *', '')}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
