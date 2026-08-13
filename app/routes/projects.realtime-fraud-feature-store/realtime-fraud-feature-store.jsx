import fraudTexture from '~/assets/fraud-cover.gif';
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
import styles from './realtime-fraud-feature-store.module.css';

const title = 'Real-Time Financial Fraud Feature Store';
const description =
  'An event-driven feature store capturing PostgreSQL database changes via Debezium CDC, streaming events through Apache Kafka (KRaft mode), computing stateful windowed aggregations in PySpark, writing Delta Lake tables, and caching low-latency feature vectors in Redis for sub-10ms FastAPI ML inference.';
const roles = [
  'Event-Driven Architecture',
  'Debezium CDC & Kafka KRaft',
  'PySpark Structured Streaming',
  'Redis 7.0 Pipeline Caching',
  'FastAPI Serving Microservice',
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
              alt="Real-Time Fraud Feature Store Architecture Overview"
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
                Production metrics and operational benchmark results across streaming CDC, feature serving, data masking, and error handling:
              </ProjectSectionText>
            </ProjectTextRow>

            <div style={{ marginTop: '2rem', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--primary)', paddingBottom: '12px' }}>
                    <th style={{ padding: '12px 16px', color: 'var(--textTitle)', fontSize: '14px', fontWeight: '700' }}>Component</th>
                    <th style={{ padding: '12px 16px', color: 'var(--textTitle)', fontSize: '14px', fontWeight: '700' }}>Engineering Implementation</th>
                    <th style={{ padding: '12px 16px', color: 'var(--textTitle)', fontSize: '14px', fontWeight: '700' }}>Operational Metric / Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--accent)' }}>CDC Capture</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>Debezium PostgreSQL WAL streaming</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)', fontWeight: '600' }}>Continuous change capture without table locks</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--accent)' }}>Stream Processing</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>PySpark Structured Streaming</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>Micro-batch ingestion with state stored in RocksDB</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--accent)' }}>Feature Serving</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>Redis 7.0 pipeline writes + FastAPI</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)', fontWeight: '600' }}>Sub-10ms feature vector lookup (x-process-time-ms)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--accent)' }}>Data Governance</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>SHA-256 PII Hashing</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>device_id and ip_address hashed deterministically</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--accent)' }}>Data Quality Gate</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>Dead Letter Queue (DLQ) routing</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>Unparseable JSON routed to transactions.dead_letter topic</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--accent)' }}>Test Suite</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>PyTest unit &amp; streaming suite</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textTitle)', fontWeight: '700' }}>11 / 11 Passing Tests (0 failures)</td>
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
                Event-driven feature pipeline mapping database changes from PostgreSQL WAL logs through Debezium CDC, Kafka KRaft, PySpark stateful streaming, Redis feature store, and FastAPI inference serving:
              </ProjectSectionText>
            </ProjectTextRow>

            <div className={styles.diagramContainer} style={{ marginTop: '2rem' }}>
              <svg className={styles.diagramSvg} viewBox="0 0 900 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="900" height="340" rx="12" fill="var(--backgroundLight)" stroke="var(--primary)" strokeOpacity="0.2" />
                
                {/* 1. Ingress */}
                <rect x="30" y="40" width="180" height="260" rx="8" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
                <text x="50" y="75" fill="var(--textTitle)" fontSize="15" fontWeight="700">1. INGRESS &amp; CDC</text>
                <text x="50" y="110" fill="var(--textBody)" fontSize="12">• PostgreSQL Primary</text>
                <text x="50" y="130" fill="var(--textBody)" fontSize="12">  (WAL Change Logs)</text>
                <text x="50" y="165" fill="var(--textBody)" fontSize="12">• Debezium Connector</text>
                <text x="50" y="205" fill="var(--textBody)" fontSize="12">• Apache Kafka</text>
                <text x="50" y="225" fill="var(--accent)" fontSize="12" fontWeight="600">(KRaft Mode)</text>

                {/* Arrow 1 */}
                <path d="M210 170 H240" stroke="var(--accent)" strokeWidth="3" markerEnd="url(#arrow)" />

                {/* 2. Streaming Compute */}
                <rect x="250" y="40" width="190" height="260" rx="8" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
                <text x="270" y="75" fill="var(--textTitle)" fontSize="15" fontWeight="700">2. STREAM COMPUTE</text>
                <text x="270" y="110" fill="var(--textBody)" fontSize="12">• PySpark Streaming</text>
                <text x="270" y="130" fill="var(--textBody)" fontSize="12">  (State in RocksDB)</text>
                <text x="270" y="165" fill="var(--textBody)" fontSize="12">• Window Aggregations</text>
                <text x="270" y="185" fill="var(--textBody)" fontSize="12">  (1h count, 24h sum)</text>
                <text x="270" y="220" fill="var(--accent)" fontSize="12" fontWeight="600">Kafka DLQ Router</text>

                {/* Arrow 2 */}
                <path d="M440 170 H470" stroke="var(--accent)" strokeWidth="3" markerEnd="url(#arrow)" />

                {/* 3. Storage & Cache */}
                <rect x="480" y="40" width="180" height="260" rx="8" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
                <text x="500" y="75" fill="var(--textTitle)" fontSize="15" fontWeight="700">3. CACHE &amp; LAKE</text>
                <text x="500" y="110" fill="var(--textBody)" fontSize="12">• Redis 7.0 Cache</text>
                <text x="500" y="130" fill="var(--textBody)" fontSize="12">  (Sub-10ms Pipeline)</text>
                <text x="500" y="165" fill="var(--textBody)" fontSize="12">• MinIO Delta Lake</text>
                <text x="500" y="185" fill="var(--textBody)" fontSize="12">  (Historical Parquet)</text>
                <text x="500" y="220" fill="var(--accent)" fontSize="12" fontWeight="600">24h Key TTL</text>

                {/* Arrow 3 */}
                <path d="M660 170 H690" stroke="var(--accent)" strokeWidth="3" markerEnd="url(#arrow)" />

                {/* 4. Serving */}
                <rect x="700" y="40" width="170" height="260" rx="8" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
                <text x="720" y="75" fill="var(--textTitle)" fontSize="15" fontWeight="700">4. ML SERVING</text>
                <text x="720" y="110" fill="var(--textBody)" fontSize="12">• FastAPI Microservice</text>
                <text x="720" y="130" fill="var(--textBody)" fontSize="12">  (/v1/features/user)</text>
                <text x="720" y="165" fill="var(--textBody)" fontSize="12">• Fraud Model Inference</text>
                <text x="720" y="205" fill="var(--textBody)" fontSize="12">• Sub-10ms Latency</text>
                <text x="720" y="225" fill="var(--accent)" fontSize="12" fontWeight="600">x-process-time-ms</text>

                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--accent)" />
                  </marker>
                </defs>
              </svg>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Code Highlights Section */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Key Implementation Code Highlights</ProjectSectionHeading>
            </ProjectTextRow>

            <div style={{ display: 'grid', gap: '2.5rem', marginTop: '1.5rem' }}>
              <div>
                <Heading level={4} as="h4" style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>
                  1. Redis Pipelined Writes (<code>src/common/redis_loader.py</code>)
                </Heading>
                <Text size="s" style={{ marginBottom: '1rem' }}>
                  Feature vectors are written to Redis using non-transactional pipelining to avoid individual network round trips per key write:
                </Text>
                <pre style={{ background: 'var(--backgroundLight)', border: '1px solid var(--border)', padding: '1.25rem', borderRadius: '8px', overflowX: 'auto', fontSize: '13px', fontFamily: 'monospace', color: 'var(--textBody)' }}>
                  <code>{`import redis

def write_features_to_redis(partition_iterator, redis_host: str, redis_port: int):
    r = redis.Redis(host=redis_host, port=redis_port, socket_connect_timeout=1)
    pipe = r.pipeline(transaction=False)
    
    for record in partition_iterator:
        user_key = f"user:features:{record['user_id']}"
        pipe.hset(
            user_key,
            mapping={
                "tx_count_1h": record["tx_count_1h"],
                "avg_amount_24h": record["avg_amount_24h"],
                "last_updated": record["event_timestamp"],
            }
        )
        pipe.expire(user_key, 86400)
        
    pipe.execute()`}</code>
                </pre>
              </div>

              <div>
                <Heading level={4} as="h4" style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>
                  2. PII Hashing &amp; Schema Validation (<code>src/models/bronze_ingest.py</code>)
                </Heading>
                <Text size="s" style={{ marginBottom: '1rem' }}>
                  Sensitive attributes (<code>device_id</code> and <code>ip_address</code>) are masked with SHA-256 prior to landing in the Delta Lake storage layer:
                </Text>
                <pre style={{ background: 'var(--backgroundLight)', border: '1px solid var(--border)', padding: '1.25rem', borderRadius: '8px', overflowX: 'auto', fontSize: '13px', fontFamily: 'monospace', color: 'var(--textBody)' }}>
                  <code>{`from pyspark.sql.functions import col, sha2

def mask_pii(df: DataFrame) -> DataFrame:
    return df.withColumn("device_id", sha2(col("device_id"), 256)) \\
             .withColumn("ip_address", sha2(col("ip_address"), 256))`}</code>
                </pre>
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        {/* PyTest Verification & Test Suite */}
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>PyTest Verification Output</ProjectSectionHeading>
              <ProjectSectionText>
                Execution log confirming all profile generators, transaction schemas, PII hashing routines, and PySpark DLQ transformations pass cleanly:
              </ProjectSectionText>
            </ProjectTextRow>

            <pre style={{ background: '#090D16', border: '1px solid #1E293B', padding: '1.5rem', borderRadius: '10px', overflowX: 'auto', fontSize: '12px', fontFamily: 'monospace', color: '#38BDF8', marginTop: '1.5rem', lineHeight: '1.5' }}>
              <code>{`============================= test session starts ==============================
platform darwin -- Python 3.11.15, pytest-9.1.1, pluggy-1.6.0
rootdir: /Users/nadeemtheba/projects/realtime-fraud-feature-store
configfile: pyproject.toml
plugins: cov-7.1.0, anyio-4.14.1, Faker-40.23.0
collected 11 items

tests/unit/test_profiles.py::test_basic_user_creation PASSED             [  9%]
tests/unit/test_profiles.py::test_basic_merchant_creation PASSED         [ 18%]
tests/unit/test_profiles.py::test_distributions_look_realistic PASSED    [ 27%]
tests/unit/test_profiles.py::test_seed_determinism_for_non_id_fields PASSED[ 36%]
tests/unit/test_schemas.py::test_valid_transaction PASSED                [ 45%]
tests/unit/test_schemas.py::test_negative_amount_rejected PASSED         [ 54%]
tests/unit/test_schemas.py::test_invalid_currency_rejected PASSED         [ 63%]
tests/unit/test_schemas.py::test_future_timestamp_rejected PASSED        [ 72%]
tests/unit/test_schemas.py::test_too_many_decimals_rejected PASSED      [ 81%]
tests/unit/test_spark_transforms.py::test_parse_and_validate_routes_malformed_json_to_dlq PASSED [ 90%]
tests/unit/test_spark_transforms.py::test_mask_pii_hashes_sensitive_fields_deterministically PASSED [100%]

======================== 11 passed in 4.47s ========================`}</code>
            </pre>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Quickstart & Trade-offs */}
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Quickstart Guide</ProjectSectionHeading>
                <pre style={{ background: 'var(--backgroundLight)', border: '1px solid var(--border)', padding: '1rem', borderRadius: '8px', overflowX: 'auto', fontSize: '12px', fontFamily: 'monospace', color: 'var(--textBody)' }}>
                  <code>{`# 1. Clone repository & start containers
git clone https://github.com/NADEEMTHEBA8/realtime-fraud-feature-store.git
cd realtime-fraud-feature-store
docker-compose up -d

# 2. Seed Postgres & register Debezium CDC
./.venv/bin/python -m src.ingestion.seed_reference
./infra/debezium/register-connector.sh

# 3. Run PySpark Bronze stream
./.venv/bin/python -m src.models.bronze_ingest --once

# 4. Start FastAPI server & run PyTest
./.venv/bin/uvicorn src.models.feature_api:app --host 0.0.0.0 --port 8000 &
./.venv/bin/pytest tests/`}</code>
                </pre>
              </ProjectTextRow>
            </ProjectSectionContent>

            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Engineering Trade-Offs</ProjectSectionHeading>
                <ProjectSectionText>
                  <strong>1. Redis Key Expiration (TTL):</strong> Redis keys are configured with a 24-hour TTL (<code>86400</code> seconds). This ensures inactive user profiles expire automatically, keeping Redis RAM footprints focused on active users.
                </ProjectSectionText>
                <ProjectSectionText>
                  <strong>2. KRaft Mode over ZooKeeper:</strong> Operating Kafka in KRaft mode simplifies cluster administration by removing the separate ZooKeeper metadata service.
                </ProjectSectionText>
                <div style={{ marginTop: '1.5rem' }}>
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
