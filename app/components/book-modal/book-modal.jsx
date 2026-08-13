import { useState, useEffect } from 'react';
import styles from './book-modal.module.css';

export function BookModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className={styles.header}>
          <div className={styles.badge}>🤝 GET IN TOUCH</div>
          <h2 className={styles.title}>Book an Intro Call / Hire Me</h2>
          <p className={styles.subtitle}>
            Select your preferred channel to discuss Senior Data Engineering roles, Lakehouse architecture consulting, or freelance projects:
          </p>
        </div>

        <div className={styles.grid}>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.cardIcon}>📅</div>
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>Schedule 15-Min Intro Call</div>
              <div className={styles.cardDesc}>Pick a time directly on Calendly for technical discussions</div>
            </div>
            <div className={styles.arrow}>→</div>
          </a>

          <a href="mailto:nadeemtheba8@gmail.com" className={styles.card}>
            <div className={styles.cardIcon}>✉️</div>
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>Send an Email</div>
              <div className={styles.cardDesc}>nadeemtheba8@gmail.com</div>
            </div>
            <div className={styles.arrow}>→</div>
          </a>

          <a
            href="https://linkedin.com/in/nadeem-theba"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.cardIcon}>💼</div>
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>Connect on LinkedIn</div>
              <div className={styles.cardDesc}>linkedin.com/in/nadeem-theba</div>
            </div>
            <div className={styles.arrow}>→</div>
          </a>

          <a
            href="https://github.com/NADEEMTHEBA8"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.cardIcon}>🐙</div>
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>GitHub Repositories</div>
              <div className={styles.cardDesc}>github.com/NADEEMTHEBA8</div>
            </div>
            <div className={styles.arrow}>→</div>
          </a>
        </div>
      </div>
    </div>
  );
}
