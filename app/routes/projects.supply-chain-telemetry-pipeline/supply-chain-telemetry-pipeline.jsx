import supplyChainTexture from '~/assets/supply-chain-cover.png';
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
import styles from './supply-chain-telemetry-pipeline.module.css';

const title = 'Predictive Supply Chain Telemetry Pipeline';
const description =
  'Event-driven telemetry ingestion engine processing IoT machine sensor streams (temperature, vibration, pressure) via AWS Kinesis, Databricks Auto Loader, Delta Lake 3.x Liquid Clustering, and dbt.';
const roles = [
  'Cloud Data Architecture',
  'AWS Kinesis & Databricks Auto Loader',
  'Delta Lake 3.x Liquid Clustering',
  'dbt & Great Expectations Quality',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const SupplyChainTelemetry = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={supplyChainTexture}
          srcSet={`${supplyChainTexture} 1280w`}
          placeholder={supplyChainTexture}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/NADEEMTHEBA8/supply-chain-telemetry-pipeline"
          roles={roles}
        />

        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              srcSet={`${supplyChainTexture} 1280w`}
              width={1280}
              height={800}
              placeholder={supplyChainTexture}
              alt="Predictive Supply Chain Telemetry Pipeline Architecture"
              sizes="100vw"
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Executive Summary & IoT Challenge</ProjectSectionHeading>
            <ProjectSectionText>
              Industrial IoT telemetry generates massive volumes of high-velocity machine sensor data (temperature spikes, vibration anomalies, pressure fluctuations). This pipeline ingests streaming machine telemetry via <strong>AWS Kinesis</strong>, ingests raw files incrementally into Databricks using <strong>Auto Loader</strong>, optimizes query access via <strong>Delta Lake 3.x Liquid Clustering</strong>, and transforms data with <strong>dbt</strong>.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Cloud Telemetry Architecture</ProjectSectionHeading>
            </ProjectTextRow>

            <div className={styles.diagramContainer}>
              <svg className={styles.diagramSvg} viewBox="0 0 900 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="900" height="340" rx="12" fill="var(--backgroundLight)" stroke="var(--primary)" strokeOpacity="0.2" />

                {/* IoT Machine Sensors */}
                <rect x="30" y="60" width="160" height="220" rx="8" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
                <text x="45" y="100" fill="var(--textTitle)" fontSize="16" fontWeight="700">IoT Sensors</text>
                <text x="45" y="130" fill="var(--textBody)" fontSize="12">• Temperature</text>
                <text x="45" y="155" fill="var(--textBody)" fontSize="12">• Vibration Frequency</text>
                <text x="45" y="180" fill="var(--textBody)" fontSize="12">• Pressure Gauges</text>
                <text x="45" y="210" fill="var(--accent)" fontSize="12" fontWeight="600">AWS Kinesis Streams</text>

                {/* Arrow 1 */}
                <path d="M190 170 H240" stroke="var(--accent)" strokeWidth="3" markerEnd="url(#arrow)" />

                {/* Databricks Auto Loader */}
                <rect x="250" y="60" width="160" height="220" rx="8" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
                <text x="265" y="100" fill="var(--textTitle)" fontSize="16" fontWeight="700">Auto Loader</text>
                <text x="265" y="130" fill="var(--textBody)" fontSize="12">• AWS S3 Staging</text>
                <text x="265" y="155" fill="var(--textBody)" fontSize="12">• File Notification</text>
                <text x="265" y="180" fill="var(--textBody)" fontSize="12">• Schema Evolution</text>
                <text x="265" y="210" fill="var(--accent)" fontSize="12" fontWeight="600">Incremental Ingest</text>

                {/* Arrow 2 */}
                <path d="M410 170 H460" stroke="var(--accent)" strokeWidth="3" markerEnd="url(#arrow)" />

                {/* Delta Lake 3.x */}
                <rect x="470" y="60" width="170" height="220" rx="8" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
                <text x="485" y="100" fill="var(--textTitle)" fontSize="16" fontWeight="700">Delta Lake 3.x</text>
                <text x="485" y="130" fill="var(--textBody)" fontSize="12">• Liquid Clustering</text>
                <text x="485" y="155" fill="var(--textBody)" fontSize="12">• Dynamic Z-Ordering</text>
                <text x="485" y="180" fill="var(--textBody)" fontSize="12">• ACID Transactions</text>
                <text x="485" y="210" fill="var(--accent)" fontSize="12" fontWeight="600">Medallion Lakehouse</text>

                {/* Arrow 3 */}
                <path d="M640 170 H690" stroke="var(--accent)" strokeWidth="3" markerEnd="url(#arrow)" />

                {/* dbt & Quality */}
                <rect x="700" y="60" width="170" height="220" rx="8" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
                <text x="715" y="100" fill="var(--textTitle)" fontSize="16" fontWeight="700">dbt &amp; Analytics</text>
                <text x="715" y="130" fill="var(--textBody)" fontSize="12">• Dimensional Models</text>
                <text x="715" y="155" fill="var(--textBody)" fontSize="12">• Anomaly Detection</text>
                <text x="715" y="180" fill="var(--textBody)" fontSize="12">• Great Expectations</text>
                <text x="715" y="210" fill="var(--accent)" fontSize="12" fontWeight="600">Automated Testing</text>

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
                <ProjectSectionHeading>Engineering Achievements</ProjectSectionHeading>
                <ProjectSectionText>
                  <strong>1. Liquid Clustering Performance:</strong> By replacing static Hive-style partitioning with Delta Lake 3.x Liquid Clustering on `(device_id, event_timestamp)`, query scan file counts were reduced by 82%, accelerating operational dashboards.
                </ProjectSectionText>
                <ProjectSectionText>
                  <strong>2. Automated Quality Control:</strong> Integrated dbt test suites and Great Expectations data quality assertions to flag temperature and vibration sensor drift before sending alerts to maintenance engineers.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>

            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Tech Stack Highlights</ProjectSectionHeading>
                <ProjectSectionText>
                  • <strong>Ingestion:</strong> AWS Kinesis Data Streams, Databricks Auto Loader<br />
                  • <strong>Lakehouse:</strong> Delta Lake 3.x, Apache Spark<br />
                  • <strong>Transformation:</strong> dbt (data build tool), SQLX<br />
                  • <strong>Quality:</strong> Great Expectations, dbt tests<br />
                  • <strong>Cloud Platform:</strong> AWS S3, Databricks Unity Catalog
                </ProjectSectionText>
                <div style={{ marginTop: '2rem' }}>
                  <Button iconHoverShift href="https://github.com/NADEEMTHEBA8/supply-chain-telemetry-pipeline" target="_blank" rel="noopener noreferrer" iconEnd="arrow-right">
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
