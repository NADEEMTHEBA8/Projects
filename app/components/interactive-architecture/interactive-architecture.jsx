import { useState } from 'react';
import styles from './interactive-architecture.module.css';

export function InteractiveArchitecture({ nodes, title }) {
  const [activeNode, setActiveNode] = useState(0);

  const currentNode = nodes[activeNode];

  return (
    <div className={styles.container}>
      <div className={styles.headerTitle}>{title || 'Interactive Architecture Flowchart (Click Nodes for Details)'}</div>

      <div className={styles.flowGrid}>
        {nodes.map((node, idx) => (
          <div
            key={idx}
            className={`${styles.nodeCard} ${idx === activeNode ? styles.active : ''}`}
            onClick={() => setActiveNode(idx)}
          >
            <div className={styles.nodeStep}>STAGE 0{idx + 1}</div>
            <div className={styles.nodeTitle}>{node.title}</div>
            <div className={styles.nodeSubtitle}>{node.subtitle}</div>
          </div>
        ))}
      </div>

      <div className={styles.detailBox}>
        <div className={styles.detailHeader}>
          <span className={styles.detailTitle}>STAGE 0{activeNode + 1}: {currentNode.title}</span>
          <span className={styles.detailBadge}>{currentNode.badge}</span>
        </div>
        <p className={styles.detailDesc}>{currentNode.description}</p>
        
        {currentNode.specs && (
          <div className={styles.specGrid}>
            {currentNode.specs.map((spec, i) => (
              <div key={i} className={styles.specItem}>
                <span className={styles.specLabel}>{spec.label}:</span>
                <span className={styles.specVal}>{spec.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
