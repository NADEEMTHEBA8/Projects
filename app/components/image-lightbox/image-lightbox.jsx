import { useState, useEffect } from 'react';
import styles from './image-lightbox.module.css';

export function ImageLightbox({ src, alt, caption, details }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        setIsOpen(false);
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
  }, [isOpen]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.trigger} onClick={() => setIsOpen(true)} title="Click to open full resolution preview">
        <img
          src={src}
          alt={alt}
          className={styles.triggerImage}
          loading="lazy"
          decoding="async"
        />
        <div className={styles.hintOverlay}>
          <span className={styles.hintText}>🔍 Click for Original Full-Resolution View</span>
        </div>
      </div>

      {details && (
        <div className={styles.detailsBox}>
          <div className={styles.detailsHeader}>Console Data &amp; Path Callout</div>
          <pre className={styles.detailsCode}>
            <code>{details}</code>
          </pre>
        </div>
      )}

      {isOpen && (
        <div className={styles.lightboxModal} onClick={() => setIsOpen(false)}>
          <button
            className={styles.closeButton}
            onClick={() => setIsOpen(false)}
            aria-label="Close Fullscreen View"
          >
            ✕
          </button>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <img src={src} alt={alt} className={styles.lightboxImage} />
            {caption && <div className={styles.lightboxCaption}>{caption}</div>}
          </div>
        </div>
      )}
    </div>
  );
}
