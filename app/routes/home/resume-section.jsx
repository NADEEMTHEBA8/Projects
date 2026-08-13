import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { useState } from 'react';
import styles from './resume-section.module.css';

export const ResumeSection = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.resumeSection}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <Heading className={styles.title} data-visible={visible} level={2} id={titleId}>
                <DecoderText text="Resume & Experience" start={visible} delay={300} />
              </Heading>
              <Text className={styles.description} data-visible={visible} size="l" as="p">
                Proven track record in building high-throughput batch and real-time streaming data architectures across AWS, GCP, and Databricks. Expert in PySpark skew optimization, Delta Lake 3.x, and Shift-Left quality gates.
              </Text>
              <div className={styles.buttonGroup}>
                <Button
                  secondary
                  data-visible={visible}
                  href="/resume"
                  icon="chevron-right"
                >
                  View Interactive Resume
                </Button>
                <Button
                  data-visible={visible}
                  href="/nadeem-theba-resume.pdf"
                  download="Nadeem_Theba_Resume.pdf"
                  target="_blank"
                  icon="send"
                >
                  Download Resume PDF
                </Button>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.cardGrid}>
                <div className={styles.statCard}>
                  <div className={styles.statHeader}>Experience</div>
                  <div className={styles.statTitle}>3+ Years in Data Engineering</div>
                  <div className={styles.statText}>Data Engineer at Kaival Technologies architecting production ETL/ELT pipelines, streaming CDC, and Medallion Lakehouses.</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statHeader}>Education</div>
                  <div className={styles.statTitle}>M.Sc Data Science & Analytics</div>
                  <div className={styles.statText}>University of Hertfordshire, UK (Graduated 2023) | B.Tech Computer Engineering.</div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statHeader}>Core Stack</div>
                  <div className={styles.statTitle}>PySpark • Delta Lake • dbt • Kafka</div>
                  <div className={styles.statText}>AWS (S3, Kinesis, Glue, Lambda), GCP (BigQuery), DuckDB, Redis Vector, FastAPI, Terraform, Docker.</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
