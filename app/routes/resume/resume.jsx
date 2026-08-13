import usesBackground from '~/assets/uses-background.mp4';
import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { DisplacementSphere } from '~/routes/home/displacement-sphere';
import { baseMeta } from '~/utils/meta';
import styles from './resume.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Resume — Nadeem Theba',
    description:
      'Data Engineer with 3+ years of experience in PySpark, Delta Lake, dbt, Kafka, and AWS. Download resume and cover letter.',
  });
};

const skillGroups = [
  {
    label: 'Programming & Querying',
    tags: ['Python', 'SQL', 'Spark SQL', 'pandas', 'scikit-learn', 'Pydantic', 'Bash'],
    core: ['Python', 'SQL'],
  },
  {
    label: 'Data Engineering & Lakehouse',
    tags: ['Databricks', 'PySpark', 'Delta Lake 3.x', 'Medallion Architecture', 'dbt Core', 'DuckDB', 'ETL / ELT'],
    core: ['Databricks', 'PySpark', 'Delta Lake 3.x', 'dbt Core'],
  },
  {
    label: 'Streaming & Processing',
    tags: ['Apache Kafka', 'Amazon Kinesis', 'Debezium CDC', 'PySpark Structured Streaming', 'Redis'],
    core: ['Apache Kafka', 'PySpark Structured Streaming'],
  },
  {
    label: 'Cloud & Infrastructure',
    tags: ['AWS S3', 'Kinesis', 'Lambda', 'CloudWatch', 'RDS', 'IAM', 'Snowflake', 'Docker', 'Terraform', 'CI/CD', 'GitHub Actions'],
    core: ['Terraform', 'Docker', 'GitHub Actions'],
  },
];

const projects = [
  {
    name: 'supply-chain-telemetry-pipeline',
    stack: 'AWS S3, Kinesis, Databricks, PySpark, Delta Lake, dbt, Terraform',
    period: 'Jan 2024 – Apr 2024',
    href: '/projects/supply-chain-telemetry-pipeline',
    bullets: [
      'Ingested real-time IoT sensor telemetry across 50 machines and 5 global plants into an S3 Medallion Lakehouse, calculating 24h rolling risk scores to prevent unplanned downtime.',
      'Eliminated silent streaming data loss by implementing deep response inspection and exponential backoff with jitter on Kinesis batch writes.',
      'Reduced analytical query scan volumes by 90% via physical Delta Lake partitioning on plant location and event date.',
    ],
  },
  {
    name: 'realtime-fraud-feature-store',
    stack: 'Apache Kafka, PySpark Streaming, Redis, FastAPI, dbt, Docker',
    period: 'Sep 2023 – Dec 2023',
    href: '/projects/realtime-fraud-feature-store',
    bullets: [
      'Architected an event-driven streaming feature store using Kafka and PySpark Structured Streaming with exact-once checkpointing.',
      'Served complete historical feature vectors to a FastAPI decisioning endpoint in sub-10ms latency by decoupling PostgreSQL with Redis.',
      'Ensured 100% pipeline resilience by building automated payload routing to a Kafka Dead-Letter Queue (DLQ) for replay.',
    ],
  },
  {
    name: 'coverdrive',
    stack: 'DuckDB, dbt, PySpark, Pandera, AWS S3, Apache Airflow',
    period: 'May 2023 – Aug 2023',
    href: '/projects/coverdrive',
    bullets: [
      'Mitigated executor memory skew during high-cardinality joins by engineering custom PySpark key-salting algorithms across distributed partitions.',
      'Prevented downstream pipeline corruption by 99.9% through Shift-Left Pandera data contracts in Airflow.',
      'Optimized lakehouse analytics by running dbt transformations directly on DuckDB querying Parquet on S3 at sub-second cost.',
    ],
  },
];

export const Resume = () => {
  return (
    <>
      <ProjectContainer className={styles.resume}>
        <DisplacementSphere />

        {/* ── Sticky Download Strip ─────────────────── */}
        <div className={styles.downloadStrip}>
          <Text size="s" className={styles.stripTitle}>Nadeem Theba — Data Engineer</Text>
          <div className={styles.stripButtons}>
            <a
              href="/nadeem-theba-resume.pdf"
              download="Nadeem_Theba_Resume.pdf"
              className={`${styles.downloadBtn} ${styles.downloadBtnPrimary}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 16l-5-5h3V4h4v7h3l-5 5zm-7 2h14v2H5v-2z" />
              </svg>
              Download Resume
            </a>
            <a
              href="/nadeem-theba-cover-letter.pdf"
              download="Nadeem_Theba_Cover_Letter.pdf"
              className={`${styles.downloadBtn} ${styles.downloadBtnSecondary}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
              </svg>
              Cover Letter
            </a>
          </div>
        </div>

        {/* ── Hero ─────────────────────────────────── */}
        <ProjectSection padding="top" className={styles.heroSection}>
          <ProjectSectionContent>
            <ProjectTextRow width="l" noMargin>
              <Heading level={2} as="h1" className={styles.heroName}>
                Nadeem Theba
              </Heading>
              <Text size="xl" className={styles.heroTitle}>
                Data Engineer · 3+ Years
              </Text>
              <div className={styles.contactRow}>
                {[
                  { label: 'Rajkot, India', href: null },
                  { label: 'nadeemtheba8@gmail.com', href: 'mailto:nadeemtheba8@gmail.com' },
                  { label: '+91 97149 65149', href: 'tel:+919714965149' },
                  { label: 'github.com/NADEEMTHEBA8', href: 'https://github.com/NADEEMTHEBA8' },
                  { label: 'LinkedIn', href: 'https://linkedin.com/in/nadeem-theba-602862208' },
                ].map(({ label, href }) =>
                  href ? (
                    <a key={label} href={href} className={styles.contactChip} target="_blank" rel="noopener noreferrer">
                      {label}
                    </a>
                  ) : (
                    <span key={label} className={styles.contactChip}>{label}</span>
                  )
                )}
              </div>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        {/* ── Summary ──────────────────────────────── */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="l">
              <ProjectSectionHeading>Professional Summary</ProjectSectionHeading>
              <ProjectSectionText>
                Data Engineer with hands-on experience designing and optimizing production ETL/ELT pipelines,
                lakehouses, and cloud data platforms. Proficient in Python, Advanced SQL, PySpark, dbt, Airflow,
                and AWS/GCP infrastructures. Specialized in real-time CDC streaming, vectorized query execution,
                and schema enforcement.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        {/* ── Work Experience ───────────────────────── */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="l">
              <ProjectSectionHeading>Professional Experience</ProjectSectionHeading>
              <div className={styles.experienceCard}>
                <div className={styles.accentBar} />
                <div className={styles.cardHeader}>
                  <div>
                    <Text size="l" weight="bold" className={styles.cardRole}>Data Engineer (Contract)</Text>
                    <Text size="m" className={styles.cardCompany}>Kaival Technologies | Remote</Text>
                  </div>
                  <span className={styles.cardDuration}>10/2023 – Present</span>
                </div>
                <ul className={styles.bulletList}>
                  {[
                    'Optimized high-volume enterprise batch pipelines (~500GB) using DuckDB out-of-core vectorized processing, reducing peak RAM from 32GB+ to <4GB and cutting cloud compute costs by 25%.',
                    'Engineered data validation gates using dbt tests and Pandera schema contracts, routing malformed records to Dead Letter Queues (DLQ) and maintaining 99.9% data freshness SLA.',
                    'Automated legacy data ingestion by engineering modular Python ETL pipelines, migrating 250k+ relational records weekly into cloud storage and eliminating 12 hours of manual operational overhead.',
                    'Executed cross-cloud migration of enterprise datasets to GCP BigQuery and AWS S3, refactoring batch pipelines and optimizing complex SQL joins across 50M+ rows to reduce query execution latency by 65%.',
                  ].map((point, i) => (
                    <li key={i} className={styles.bulletItem}>
                      <span className={styles.bulletDot} />
                      <Text size="l">{point}</Text>
                    </li>
                  ))}
                </ul>
              </div>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        {/* ── Technical Projects ────────────────────── */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="l">
              <ProjectSectionHeading>Technical Projects</ProjectSectionHeading>
              <div className={styles.projectsGrid}>
                {projects.map((proj) => (
                  <a key={proj.name} href={proj.href} className={styles.projectCard}>
                    <div className={styles.projectCardHeader}>
                      <Text size="l" weight="bold" className={styles.projectName}>{proj.name}</Text>
                      <Text size="s" secondary className={styles.projectPeriod}>{proj.period}</Text>
                    </div>
                    <Text size="s" secondary className={styles.projectStack}>{proj.stack}</Text>
                    <ul className={styles.projectBullets}>
                      {proj.bullets.map((b, i) => (
                        <li key={i} className={styles.projectBullet}>
                          <span className={styles.bulletDot} />
                          <Text size="m">{b}</Text>
                        </li>
                      ))}
                    </ul>
                  </a>
                ))}
              </div>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        {/* ── Technical Skills ──────────────────────── */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="l">
              <ProjectSectionHeading>Technical Skills</ProjectSectionHeading>
              <div className={styles.skillsGroups}>
                {skillGroups.map((group) => (
                  <div key={group.label} className={styles.skillGroup}>
                    <Text size="m" weight="medium">{group.label}</Text>
                    <div className={styles.tagsRow}>
                      {group.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`${styles.tag} ${group.core.includes(tag) ? styles.tagCore : ''}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        {/* ── Education ─────────────────────────────── */}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="l">
              <ProjectSectionHeading>Education</ProjectSectionHeading>
              <div className={styles.educationGrid}>
                {[
                  {
                    degree: "Master's Degree, Data Science and Analytics",
                    school: 'University of Hertfordshire, UK',
                    period: 'Sep 2021 – Sep 2023',
                  },
                  {
                    degree: 'Bachelor of Technology (B.Tech), Computer Science',
                    school: 'Marwadi University, India',
                    period: 'Aug 2016 – May 2020',
                  },
                ].map((edu) => (
                  <div key={edu.school} className={styles.educationCard}>
                    <div className={styles.eduIcon}>🎓</div>
                    <div>
                      <Text size="l" weight="bold">{edu.degree}</Text>
                      <Text size="m" className={styles.eduSchool}>{edu.school}</Text>
                      <Text size="s" secondary>{edu.period}</Text>
                    </div>
                  </div>
                ))}
              </div>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

      </ProjectContainer>
      <Footer />
    </>
  );
};
