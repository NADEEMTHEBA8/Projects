import { useState } from 'react';
import styles from './code-tabs.module.css';

export function CodeTabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const currentTab = tabs[activeTab];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentTab.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code', err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.tabList}>
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              className={`${styles.tabButton} ${idx === activeTab ? styles.active : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className={styles.actions}>
          {currentTab.githubUrl && (
            <a
              href={currentTab.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubLink}
              title="Inspect on GitHub"
            >
              🔗 View on GitHub
            </a>
          )}
          <button className={styles.copyButton} onClick={handleCopy}>
            {copied ? '✓ Copied!' : '📋 Copy Code'}
          </button>
        </div>
      </div>

      <div className={styles.content}>
        {currentTab.description && (
          <p className={styles.description}>{currentTab.description}</p>
        )}
        <pre className={styles.pre}>
          <code>{currentTab.code}</code>
        </pre>
      </div>
    </div>
  );
}
