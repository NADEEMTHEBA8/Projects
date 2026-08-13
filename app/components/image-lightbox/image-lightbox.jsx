import { useState, useEffect } from 'react';
import { ProjectImage } from '~/layouts/project';
import styles from './image-lightbox.module.css';

export function ImageLightbox({ src, alt, caption, width = 2700, height = 1746 }) {
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
    <>
      <div className={styles.trigger} onClick={() => setIsOpen(true)} title="Click to view full screen">
        <ProjectImage
          raised
          srcSet={`${src} 2700w`}
          width={width}
          height={height}
          placeholder={src}
          alt={alt}
          sizes="100vw"
        />
        <div className={styles.hintOverlay}>
          <span className={styles.hintText}>🔍 Click for 4K Ultra-HD Full Screen</span>
        </div>
      </div>

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
    </>
  );
}
