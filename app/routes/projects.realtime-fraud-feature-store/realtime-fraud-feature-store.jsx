import fraudTexture from '~/assets/fraud-cover.png';
import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { useTheme } from '~/components/theme-provider';
import styles from './realtime-fraud-feature-store.module.css';

const title = 'Real-Time Fraud Feature Store';
const description =
  'Event-driven streaming feature store capturing PostgreSQL CDC via Debezium and Kafka, computing PySpark aggregations, and serving Redis vectors via FastAPI in sub-10ms latency.';
const roles = [
  'Event Streaming Architecture',
  'PySpark Structured Streaming',
  'Debezium CDC & Kafka',
  'Low-Latency Feature Serving',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const RealtimeFraudFeatureStore = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={fraudTexture}
          srcSet={`${fraudTexture} 1280w`}
          placeholder={fraudTexture}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/NADEEMTHEBA8/realtime-fraud-feature-store"
          roles={roles}
        />

        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              srcSet={`${fraudTexture} 1280w`}
              width={1280}
              height={800}
              placeholder={fraudTexture}
              alt="Real-Time Fraud Feature Store Architecture"
              sizes="100vw"
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Executive Summary & Problem Statement</ProjectSectionHeading>
            <ProjectSectionText>
              In financial transaction processing, fraud detection ML models require instant access to user transaction velocity, location anomalies, and rolling spending amounts. Batch feature computation is too slow. This project implements an <strong>Event-Driven Real-Time Feature Store</strong> capable of capturing database changes instantly and serving vector features in <strong>sub-10ms API latency</strong>.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Streaming System Architecture</ProjectSectionHeading>
            </ProjectTextRow>

            <div className={styles.diagramContainer}>
              <svg className={styles.diagramSvg} viewBox="0 0 900 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="900" height="340" rx="12" fill="var(--backgroundLight)" stroke="var(--primary)" strokeOpacity="0.2" />

                {/* PostgreSQL CDC */}
                <rect x="30" y="60" width="160" height="220" rx="8" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
                <text x="45" y="100" fill="var(--textTitle)" fontSize="16" fontWeight="700">PostgreSQL DB</text>
                <text x="45" y="130" fill="var(--textBody)" fontSize="12">• Write-Ahead Log</text>
                <text x="45" y="155" fill="var(--textBody)" fontSize="12">• Debezium CDC</text>
                <text x="45" y="180" fill="var(--textBody)" fontSize="12">• Zero Code Injection</text>
                <text x="45" y="210" fill="var(--accent)" fontSize="12" fontWeight="600">WAL Streaming</text>

                {/* Arrow 1 */}
                <path d="M190 170 H240" stroke="var(--accent)" strokeWidth="3" markerEnd="url(#arrow)" />

                {/* Apache Kafka */}
                <rect x="250" y="60" width="160" height="220" rx="8" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
                <text x="265" y="100" fill="var(--textTitle)" fontSize="16" fontWeight="700">Apache Kafka</text>
                <text x="265" y="130" fill="var(--textBody)" fontSize="12">• Event Topics</text>
                <text x="265" y="155" fill="var(--textBody)" fontSize="12">• Partition Scaling</text>
                <text x="265" y="180" fill="var(--textBody)" fontSize="12">• Schema Registry</text>
                <text x="265" y="210" fill="var(--accent)" fontSize="12" fontWeight="600">Event Bus</text>

                {/* Arrow 2 */}
                <path d="M410 170 H460" stroke="var(--accent)" strokeWidth="3" markerEnd="url(#arrow)" />

                {/* PySpark Streaming */}
                <rect x="470" y="60" width="170" height="220" rx="8" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
                <text x="485" y="100" fill="var(--textTitle)" fontSize="16" fontWeight="700">PySpark Stream</text>
                <text x="485" y="130" fill="var(--textBody)" fontSize="12">• Sliding Windows</text>
                <text x="485" y="155" fill="var(--textBody)" fontSize="12">• Watermarking</text>
                <text x="485" y="180" fill="var(--textBody)" fontSize="12">• Velocity Features</text>
                <text x="485" y="210" fill="var(--accent)" fontSize="12" fontWeight="600">Stateful Processing</text>

                {/* Arrow 3 */}
                <path d="M640 170 H690" stroke="var(--accent)" strokeWidth="3" markerEnd="url(#arrow)" />

                {/* Redis & FastAPI */}
                <rect x="700" y="60" width="170" height="220" rx="8" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
                <text x="715" y="100" fill="var(--textTitle)" fontSize="16" fontWeight="700">Redis &amp; FastAPI</text>
                <text x="715" y="130" fill="var(--textBody)" fontSize="12">• In-Memory Vector</text>
                <text x="715" y="155" fill="var(--textBody)" fontSize="12">• Sub-10ms Serving</text>
                <text x="715" y="180" fill="var(--textBody)" fontSize="12">• REST API Endpoint</text>
                <text x="715" y="210" fill="var(--accent)" fontSize="12" fontWeight="600">Low-Latency Serving</text>

                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--accent)" />
                  </marker>
                </defs>
              </svg>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Engineering Highlights</ProjectSectionHeading>
                <ProjectSectionText>
                  <strong>1. Zero Data Loss CDC:</strong> Debezium connector captures row-level inserts and updates directly from PostgreSQL WAL logs without impacting core application throughput.
                </ProjectSectionText>
                <ProjectSectionText>
                  <strong>2. Watermarked Sliding Window Aggregations:</strong> PySpark Structured Streaming calculates 5-minute, 1-hour, and 24-hour transaction frequency and dollar velocity metrics using event-time watermarking to handle late-arriving events seamlessly.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>

            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Tech Stack Highlights</ProjectSectionHeading>
                <ProjectSectionText>
                  • <strong>Streaming:</strong> Apache Kafka, Debezium CDC<br />
                  • <strong>Processing:</strong> PySpark Structured Streaming<br />
                  • <strong>Store:</strong> Redis In-Memory Vector Store<br />
                  • <strong>Serving:</strong> FastAPI (Async Python REST API)<br />
                  • <strong>Containerization:</strong> Docker Compose, Healthchecks
                </ProjectSectionText>
                <div style={{ marginTop: '2rem' }}>
                  <Button iconHoverShift href="https://github.com/NADEEMTHEBA8/realtime-fraud-feature-store" target="_blank" rel="noopener noreferrer" iconEnd="arrow-right">
                    View GitHub Repository
                  </Button>
                </div>
              </ProjectTextRow>
            </ProjectSectionContent>
          </ProjectSectionColumns>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
