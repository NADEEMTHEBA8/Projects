import coverdriveTexture from '~/assets/coverdrive-cover.gif';
import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Text } from '~/components/text';
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
import styles from './coverdrive.module.css';

const title = 'Coverdrive — Shift-Left Lakehouse';
const description =
  'Analytical data lakehouse processing 1.26M+ delivery records across 5,591 T20 cricket matches with Pandera quality gates in Apache Airflow and PySpark key-salting skew reduction.';
const roles = [
  'Lakehouse Architecture',
  'Data Engineering',
  'PySpark & Delta Lake 3.x',
  'Shift-Left Quality Control',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Coverdrive = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={coverdriveTexture}
          srcSet={`${coverdriveTexture} 1280w`}
          placeholder={coverdriveTexture}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/NADEEMTHEBA8/coverdrive"
          roles={roles}
        />

        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              srcSet={`${coverdriveTexture} 1280w`}
              width={1280}
              height={800}
              placeholder={coverdriveTexture}
              alt="Coverdrive Shift-Left Lakehouse Architecture Overview"
              sizes="100vw"
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Executive Summary & Architecture</ProjectSectionHeading>
            <ProjectSectionText>
              Coverdrive is a production-grade analytical data lakehouse processing over 1,260,000 delivery-level cricket events across 5,591 T20 matches. Built around the <strong>Medallion Architecture (Bronze -&gt; Silver -&gt; Gold)</strong>, the system enforces a strict <strong>Shift-Left Data Quality</strong> paradigm, stopping corrupt or schema-violating data at ingestion in Airflow DAG gates before it propagates downstream.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Medallion Pipeline Flow</ProjectSectionHeading>
            </ProjectTextRow>

            <div className={styles.diagramContainer}>
              <svg className={styles.diagramSvg} viewBox="0 0 900 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="900" height="320" rx="12" fill="var(--backgroundLight)" stroke="var(--primary)" strokeOpacity="0.2" />
                
                {/* Bronze Layer */}
                <rect x="40" y="50" width="220" height="220" rx="8" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
                <text x="60" y="90" fill="var(--textTitle)" fontSize="18" fontWeight="700">BRONZE LAYER</text>
                <text x="60" y="120" fill="var(--textBody)" fontSize="13">• Raw JSON/CSV Ingestion</text>
                <text x="60" y="145" fill="var(--textBody)" fontSize="13">• Schema Enforcement</text>
                <text x="60" y="170" fill="var(--textBody)" fontSize="13">• Pandera Pre-Validation</text>
                <text x="60" y="195" fill="var(--accent)" fontSize="13" fontWeight="600">Delta Lake 3.x Append</text>

                {/* Arrow 1 */}
                <path d="M270 160 H320" stroke="var(--accent)" strokeWidth="3" markerEnd="url(#arrow)" />

                {/* Silver Layer */}
                <rect x="340" y="50" width="220" height="220" rx="8" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
                <text x="360" y="90" fill="var(--textTitle)" fontSize="18" fontWeight="700">SILVER LAYER</text>
                <text x="360" y="120" fill="var(--textBody)" fontSize="13">• PySpark Key-Salting</text>
                <text x="360" y="145" fill="var(--textBody)" fontSize="13">• Data Skew Reduction</text>
                <text x="360" y="170" fill="var(--textBody)" fontSize="13">• Deduplication &amp; Cleaning</text>
                <text x="360" y="195" fill="var(--accent)" fontSize="13" fontWeight="600">Liquid Clustering</text>

                {/* Arrow 2 */}
                <path d="M570 160 H620" stroke="var(--accent)" strokeWidth="3" markerEnd="url(#arrow)" />

                {/* Gold Layer */}
                <rect x="640" y="50" width="220" height="220" rx="8" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
                <text x="660" y="90" fill="var(--textTitle)" fontSize="18" fontWeight="700">GOLD LAYER</text>
                <text x="660" y="120" fill="var(--textBody)" fontSize="13">• Analytical Data Marts</text>
                <text x="660" y="145" fill="var(--textBody)" fontSize="13">• Player &amp; Team Metrics</text>
                <text x="660" y="170" fill="var(--textBody)" fontSize="13">• Fast DuckDB OLAP Queries</text>
                <text x="660" y="195" fill="var(--accent)" fontSize="13" fontWeight="600">Power BI / Streamlit</text>

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
                <ProjectSectionHeading>Key Engineering Achievements</ProjectSectionHeading>
                <ProjectSectionText>
                  <strong>1. PySpark Key-Salting Skew Mitigation:</strong> By applying a randomized salt factor to high-frequency bowler and team join keys, partition skew in PySpark shuffle operations was reduced by over 74%, eliminating worker node out-of-memory errors during large dataset aggregations.
                </ProjectSectionText>
                <ProjectSectionText>
                  <strong>2. Shift-Left Pandera Data Contracts:</strong> Pandera schemas run in Airflow task guards before writing raw payloads into Bronze storage, catching missing fields and invalid data types before computation occurs.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>

            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Tech Stack Highlights</ProjectSectionHeading>
                <ProjectSectionText>
                  • <strong>Engine:</strong> Apache Spark (PySpark), Delta Lake 3.x, DuckDB<br />
                  • <strong>Orchestration:</strong> Apache Airflow, Docker Compose<br />
                  • <strong>Quality:</strong> Pandera Data Contracts, Great Expectations<br />
                  • <strong>Storage:</strong> MinIO (S3 API Compliant), Parquet<br />
                  • <strong>Analytics:</strong> Streamlit Dashboard, DuckDB SQL
                </ProjectSectionText>
                <div style={{ marginTop: '2rem' }}>
                  <Button iconHoverShift href="https://github.com/NADEEMTHEBA8/coverdrive" target="_blank" rel="noopener noreferrer" iconEnd="arrow-right">
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
