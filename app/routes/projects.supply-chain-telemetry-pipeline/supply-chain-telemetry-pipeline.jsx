import supplyChainTexture from '~/assets/supply-chain-cover.gif';
import supplyChainDatabricksAutoloader from '~/assets/supply-chain-databricks-autoloader.png';
import supplyChainDatabricksLeaderboard from '~/assets/supply-chain-databricks-leaderboard.png';
import supplyChainDatabricksDashboard from '~/assets/supply-chain-databricks-dashboard.png';
import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { MetricsGrid } from '~/components/metrics-grid/metrics-grid';
import { ImageLightbox } from '~/components/image-lightbox/image-lightbox';
import { CodeTabs } from '~/components/code-tabs/code-tabs';
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
  'An event-driven telemetry pipeline ingesting IoT machine sensor streams alongside PostgreSQL ERP CDC. Processes payloads through a Medallion Lakehouse on AWS S3 and Databricks with composite physical Delta partitioning and Auto Loader schema tracking.';
const roles = [
  'IoT Telemetry & CDC Pipeline',
  'AWS Kinesis Data Streams',
  'Databricks Auto Loader 15.x',
  'Delta Lake 3.x Composite Partitioning',
  'dbt Core 1.8 & Databricks Asset Bundles',
];

const metricsData = [
  { label: 'Throughput', value: '50,000 / sec', description: 'IoT machine telemetry event stream' },
  { label: 'Partition Strategy', value: '(plant_id, date)', description: 'Composite physical Delta partition pruning' },
  { label: 'Asset Management', value: 'Databricks DABs', description: 'Declarative Databricks bundle manifests' },
  { label: 'Test Suite', value: '5 / 5', description: 'Passing PyTest integration test suite' },
];

const codeTabsData = [
  {
    label: 'Multi-Threaded Ingestion Runner',
    description: 'Issuing batched IoT telemetry events to Kinesis Data Streams or S3 using a ThreadPoolExecutor with 16 parallel workers.',
    githubUrl: 'https://github.com/NADEEMTHEBA8/supply-chain-telemetry-pipeline/blob/main/src/ingestion/run.py#L66-L82',
    code: `from concurrent.futures import ThreadPoolExecutor
from src.ingestion.generator import TelemetryGenerator

def submit_batch(batch_index: int):
    batch = [generator.generate_machine_event() for _ in range(batch_size)]
    producer.send_batch(batch)
    return len(batch)

with ThreadPoolExecutor(max_workers=16) as executor:
    futures = [executor.submit(submit_batch, i) for i in range(num_batches)]
    for f in futures:
        f.result()`
  },
  {
    label: 'Physical Delta Partitioning',
    description: 'Enforcing composite physical partitioning by (plant_id, event_date) to restrict file scans during regional operational queries.',
    githubUrl: 'https://github.com/NADEEMTHEBA8/supply-chain-telemetry-pipeline/blob/main/src/models/silver_streaming.py#L85-L98',
    code: `spark.readStream.format("cloudFiles") \\
    .option("cloudFiles.format", "json") \\
    .schema(TELEMETRY_SCHEMA) \\
    .load("s3://lakehouse/raw_telemetry/") \\
    .writeStream.format("delta") \\
    .partitionBy("plant_id", "event_date") \\
    .start("s3://lakehouse/silver_telemetry/")`
  }
];

const terminalLogsData = [
  {
    label: 'PyTest Suite Output (5 Passed)',
    description: 'Execution log confirming all ingestion producers, schema drift handling, and profile generators pass cleanly.',
    code: `============================= test session starts ==============================
platform darwin -- Python 3.11.15, pytest-9.1.1, pluggy-1.6.0
rootdir: /Users/nadeemtheba/projects/supply-chain-telemetry-pipeline
collected 5 items

tests/unit/test_telemetry_pipeline.py::test_profile_factory_reproducibility PASSED    [ 20%]
tests/unit/test_telemetry_pipeline.py::test_telemetry_event_generation PASSED          [ 40%]
tests/unit/test_telemetry_pipeline.py::test_telemetry_schema_drift_extra_fields PASSED [ 60%]
tests/unit/test_telemetry_pipeline.py::test_kinesis_producer_partial_batch_retry_success PASSED [ 80%]
tests/unit/test_telemetry_pipeline.py::test_s3_producer_send_success PASSED             [100%]

============================== 5 passed in 0.38s ===============================`
  },
  {
    label: 'Databricks DABs Bundle Validation',
    description: 'Validating Databricks Asset Bundle target configurations before deployment.',
    code: `Executing databricks bundle validate --target dev...
Validation OK
Name: supply-chain-telemetry-pipeline
Target: dev
Workspace: https://adb-123456789.azuredatabricks.net`
  }
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

        {/* 15-Second Recruiter Metrics Grid */}
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <MetricsGrid items={metricsData} />

            <ProjectImage
              raised
              srcSet={`${supplyChainTexture} 1280w`}
              width={1280}
              height={800}
              placeholder={supplyChainTexture}
              alt="Predictive Supply Chain Telemetry Architecture Overview"
              sizes="100vw"
            />
          </ProjectSectionContent>
        </ProjectSection>

        {/* Technical Summary & Metrics Table */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Technical Summary &amp; Operational Metrics</ProjectSectionHeading>
              <ProjectSectionText>
                Measured operational metrics across telemetry ingestion, Auto Loader schema enforcement, physical partition pruning, and business serving:
              </ProjectSectionText>
            </ProjectTextRow>

            <div style={{ marginTop: '2rem', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--primary)', paddingBottom: '12px' }}>
                    <th style={{ padding: '12px 16px', color: 'var(--textTitle)', fontSize: '14px', fontWeight: '700' }}>Component</th>
                    <th style={{ padding: '12px 16px', color: 'var(--textTitle)', fontSize: '14px', fontWeight: '700' }}>Architecture Choice</th>
                    <th style={{ padding: '12px 16px', color: 'var(--textTitle)', fontSize: '14px', fontWeight: '700' }}>Operational Metric</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--accent)' }}>Ingestion Layer</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>AWS Kinesis Data Streams + Threaded S3 Producer</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)', fontWeight: '600' }}>Multi-threaded telemetry ingestion emitting batch events across factory units</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--accent)' }}>Storage &amp; Lakehouse</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>AWS S3 + Delta Lake 3.x</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>Composite physical partitioning PARTITIONED BY (plant_id, event_date)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--accent)' }}>Transformation Engine</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>Databricks PySpark Structured Streaming</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>Continuous rolling machine risk metrics and dbt transformations</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--accent)' }}>Data Quality &amp; Isolation</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>Databricks Auto Loader Schema Tracking</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>Malformed JSON payloads routed to quarantine storage without pipeline panics</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--accent)' }}>Test Suite</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>PyTest Integration Suite</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textTitle)', fontWeight: '700' }}>5 / 5 Passing Tests (producer retries, profile generation, drift)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        {/* System Architecture Section */}
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>System Architecture</ProjectSectionHeading>
              <ProjectSectionText>
                Streaming Medallion architecture flowing from edge IoT sensors and ERP CDC through AWS Kinesis, Databricks Auto Loader, Delta Lake (Bronze/Silver/Gold), dbt Core 1.8, and ERP sync:
              </ProjectSectionText>
            </ProjectTextRow>

            <div className={styles.diagramContainer} style={{ marginTop: '2rem' }}>
              <svg className={styles.diagramSvg} viewBox="0 0 900 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="900" height="340" rx="12" fill="var(--backgroundLight)" stroke="var(--primary)" strokeOpacity="0.2" />
                
                {/* 1. Ingestion */}
                <rect x="30" y="40" width="180" height="260" rx="8" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
                <text x="50" y="75" fill="var(--textTitle)" fontSize="15" fontWeight="700">1. INGESTION</text>
                <text x="50" y="110" fill="var(--textBody)" fontSize="12">• IoT Edge Sensors</text>
                <text x="50" y="130" fill="var(--textBody)" fontSize="12">  (Temp, Vibration, Press)</text>
                <text x="50" y="165" fill="var(--textBody)" fontSize="12">• PostgreSQL ERP CDC</text>
                <text x="50" y="185" fill="var(--textBody)" fontSize="12">  (Workorders)</text>
                <text x="50" y="220" fill="var(--accent)" fontSize="12" fontWeight="600">AWS Kinesis Shards</text>

                {/* Arrow 1 */}
                <path d="M210 170 H240" stroke="var(--accent)" strokeWidth="3" markerEnd="url(#arrow)" />

                {/* 2. Databricks Auto Loader */}
                <rect x="250" y="40" width="190" height="260" rx="8" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
                <text x="270" y="75" fill="var(--textTitle)" fontSize="15" fontWeight="700">2. AUTO LOADER</text>
                <text x="270" y="110" fill="var(--textBody)" fontSize="12">• Databricks Auto Loader</text>
                <text x="270" y="130" fill="var(--textBody)" fontSize="12">  (cloudFiles JSON)</text>
                <text x="270" y="165" fill="var(--textBody)" fontSize="12">• Schema Tracking</text>
                <text x="270" y="185" fill="var(--textBody)" fontSize="12">  (Rescue Column)</text>
                <text x="270" y="220" fill="var(--accent)" fontSize="12" fontWeight="600">Runtime Inference</text>

                {/* Arrow 2 */}
                <path d="M440 170 H470" stroke="var(--accent)" strokeWidth="3" markerEnd="url(#arrow)" />

                {/* 3. Storage */}
                <rect x="480" y="40" width="180" height="260" rx="8" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
                <text x="500" y="75" fill="var(--textTitle)" fontSize="15" fontWeight="700">3. DELTA LAKE</text>
                <text x="500" y="110" fill="var(--textBody)" fontSize="12">• Bronze: Raw Parquet</text>
                <text x="500" y="135" fill="var(--textBody)" fontSize="12">• Silver: Structured</text>
                <text x="500" y="160" fill="var(--textBody)" fontSize="12">• Gold: 24h Failure Risk</text>
                <text x="500" y="205" fill="var(--textBody)" fontSize="12">• Composite Partition</text>
                <text x="500" y="225" fill="var(--accent)" fontSize="12" fontWeight="600">(plant_id, date)</text>

                {/* Arrow 3 */}
                <path d="M660 170 H690" stroke="var(--accent)" strokeWidth="3" markerEnd="url(#arrow)" />

                {/* 4. Serving */}
                <rect x="700" y="40" width="170" height="260" rx="8" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
                <text x="720" y="75" fill="var(--textTitle)" fontSize="15" fontWeight="700">4. SERVING</text>
                <text x="720" y="110" fill="var(--textBody)" fontSize="12">• dbt Core 1.8</text>
                <text x="720" y="130" fill="var(--textBody)" fontSize="12">  (Transformations)</text>
                <text x="720" y="165" fill="var(--textBody)" fontSize="12">• PostgreSQL ERP Sync</text>
                <text x="720" y="205" fill="var(--textBody)" fontSize="12">• Risk Dashboard</text>
                <text x="720" y="225" fill="var(--accent)" fontSize="12" fontWeight="600">Actionable Signals</text>

                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--accent)" />
                  </marker>
                </defs>
              </svg>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        {/* AWS & Databricks Cloud Infrastructure & Full-Screen Lightbox */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Databricks &amp; AWS Cloud Infrastructure Lightbox Proof</ProjectSectionHeading>
              <ProjectSectionText>
                Click any screenshot below to inspect Databricks Auto Loader JSON streaming, Gold risk leaderboard aggregations, and Databricks SQL analytics dashboards in 4K full screen:
              </ProjectSectionText>
            </ProjectTextRow>

            <div style={{ display: 'grid', gap: '3rem', marginTop: '2.5rem' }}>
              <div>
                <Heading level={4} as="h4" style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>
                  1. Databricks Auto Loader Micro-Batch JSON Ingestion (4K HD)
                </Heading>
                <ImageLightbox
                  src={supplyChainDatabricksAutoloader}
                  width={3420}
                  height={2214}
                  alt="Databricks Auto Loader Micro-Batch Ingestion Console"
                  caption="Databricks Auto Loader (cloudFiles) Micro-Batch Telemetry Ingestion Console"
                />
              </div>

              <div>
                <Heading level={4} as="h4" style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>
                  2. Databricks Gold Layer Machine Risk Leaderboard Aggregations (4K HD)
                </Heading>
                <ImageLightbox
                  src={supplyChainDatabricksLeaderboard}
                  width={3420}
                  height={2214}
                  alt="Databricks Gold Layer Machine Risk Leaderboard"
                  caption="Databricks Gold Layer Windowed Telemetry Aggregations & Machine Failure Leaderboard"
                />
              </div>

              <div>
                <Heading level={4} as="h4" style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>
                  3. Databricks SQL Analytics &amp; IoT Telemetry Dashboard (4K HD)
                </Heading>
                <ImageLightbox
                  src={supplyChainDatabricksDashboard}
                  width={3420}
                  height={2214}
                  alt="Databricks SQL Analytics Telemetry Dashboard"
                  caption="Databricks SQL Analytics Console displaying real-time IoT factory telemetry metrics"
                />
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Interactive Tabbed Code Viewer */}
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Interactive Code Snippets &amp; Deep-Links</ProjectSectionHeading>
              <ProjectSectionText>
                Inspect multi-threaded ingestion and Delta physical partition pruning. Click "View on GitHub" to jump directly to line numbers in the repository:
              </ProjectSectionText>
            </ProjectTextRow>

            <CodeTabs tabs={codeTabsData} />
          </ProjectSectionContent>
        </ProjectSection>

        {/* Interactive Terminal Verification Drawer */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Interactive Terminal Log &amp; Build Verification</ProjectSectionHeading>
              <ProjectSectionText>
                Inspect live automated test execution logs and Databricks Asset Bundle validation outputs:
              </ProjectSectionText>
            </ProjectTextRow>

            <CodeTabs tabs={terminalLogsData} />
          </ProjectSectionContent>
        </ProjectSection>

        {/* Quickstart & Trade-offs */}
        <ProjectSection light={isDark}>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Quickstart Guide</ProjectSectionHeading>
                <pre style={{ background: '#090d16', border: '1px solid #1e293b', padding: '1rem', borderRadius: '8px', overflowX: 'auto', fontSize: '12px', fontFamily: 'monospace', color: '#38bdf8' }}>
                  <code>{`# 1. Clone repository & virtualenv
git clone https://github.com/NADEEMTHEBA8/supply-chain-telemetry-pipeline.git
cd supply-chain-telemetry-pipeline
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt

# 2. Run local telemetry generator
python -m src.ingestion.run --events 100

# 3. Execute PyTest suite
./.venv/bin/pytest tests/

# 4. Validate Databricks Asset Bundle (DAB)
databricks bundle validate --target dev`}</code>
                </pre>
              </ProjectTextRow>
            </ProjectSectionContent>

            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Engineering Trade-Offs</ProjectSectionHeading>
                <ProjectSectionText>
                  <strong>1. S3 Staging vs. Direct Stream Processing:</strong> Writing raw telemetry to S3 before downstream processing provides a cost-effective queue buffer that avoids keeping expensive Databricks clusters continuously active during low-volume hours.
                </ProjectSectionText>
                <ProjectSectionText>
                  <strong>2. Composite Partitioning:</strong> Partitioning by <code>(plant_id, event_date)</code> aligns directly with query filtering patterns while avoiding over-partitioning into thousands of sub-megabyte files.
                </ProjectSectionText>
                <div style={{ marginTop: '1.5rem' }}>
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
