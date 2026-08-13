import coverdriveTexture from '~/assets/coverdrive-cover.gif';
import coverdriveS3Medallion from '~/assets/coverdrive-s3-medallion.png';
import coverdriveAthenaSql from '~/assets/coverdrive-athena-sql.png';
import coverdriveAirflowDag from '~/assets/coverdrive-airflow-dag.png';
import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { MetricsGrid } from '~/components/metrics-grid/metrics-grid';
import { ImageLightbox } from '~/components/image-lightbox/image-lightbox';
import { CodeTabs } from '~/components/code-tabs/code-tabs';
import { InteractiveArchitecture } from '~/components/interactive-architecture/interactive-architecture';
import { Terminal } from '~/components/terminal/terminal';
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

const title = 'Coverdrive — Shift-Left Data Quality & Cricket Analytics Lakehouse';
const description =
  'An analytical data lakehouse processing ESPN Cricinfo and Cricsheet datasets across 5,591+ T20 matches and 1,264,534+ ball-by-ball delivery records with Pandera schema gates in Apache Airflow and PySpark key-salting skew reduction.';
const roles = [
  'Lakehouse Architecture',
  'PySpark 3.5 Key-Salting',
  'Pandera Data Contracts',
  'DuckDB & dbt Core 1.8',
  'Terraform IaC (705 Lines)',
];

const metricsData = [
  { label: 'Data Volume', value: '1.26M+', description: 'Ball delivery records across 5,591 matches' },
  { label: 'Skew Mitigation', value: '-74%', description: 'Partition skew reduced via key-salting' },
  { label: 'Test Suite', value: '35 / 35', description: 'Passing PyTest suite (68.17% coverage)' },
  { label: 'Terraform IaC', value: '705 Lines', description: 'Modular AWS S3 & IAM infrastructure' },
];

const codeTabsData = [
  {
    label: 'PySpark Key-Salting',
    description: 'Appending randomized salt (_SALT_BUCKETS = 10) to skewed player join keys to distribute partition loads uniformly across Spark executors.',
    githubUrl: 'https://github.com/NADEEMTHEBA8/coverdrive/blob/main/src/ingestion/silver_pyspark_etl.py#L72-L95',
    code: `from pyspark.sql.functions import col, concat, floor, lit, rand

_SALT_BUCKETS: int = 10

# Append random salt (0 to 9) to batting join key
salted_batting_df = batting_df.withColumn(
    "salted_key",
    concat(col("player_clean"), lit("_"), floor(rand() * _SALT_BUCKETS))
)

# Replicate bowling dimension rows across all salt buckets
salts_df = spark.range(0, _SALT_BUCKETS).withColumnRenamed("id", "salt")
salted_bowling_df = bowling_df.crossJoin(salts_df).withColumn(
    "salted_key",
    concat(col("player_clean"), lit("_"), col("salt"))
)

# Perform join over salted keys and drop transient helper columns
joined_df = salted_batting_df.join(
    salted_bowling_df,
    on="salted_key",
    how="left"
).drop("salted_key", "salt", "player_clean", "bowl_player_clean")`
  },
  {
    label: 'Pandera Data Contracts',
    description: 'Enforcing Pandera schema rules inside Airflow task guards before committing raw data into Silver/Gold storage layers.',
    githubUrl: 'https://github.com/NADEEMTHEBA8/coverdrive/blob/main/src/quality/validation_rules.py#L98-L115',
    code: `import pandera.pyspark as pa

class TelemetrySchema(pa.DataFrameModel):
    event_id: pa.Field(pa.StringType, nullable=False)
    timestamp: pa.Field(pa.TimestampType, nullable=False)
    velocity: pa.Field(pa.FloatType, pa.Check.in_range(min_value=0.0, max_value=150.0))

def validate_and_write(df, target_path: str) -> None:
    validated_df = TelemetrySchema.validate(df)
    validated_df.write.format("parquet").mode("append").save(target_path)`
  }
];

const terminalLogsData = [
  {
    label: 'PyTest Integration Suite (35 Passed)',
    description: 'Execution trace of 35 automated integration & unit tests with 68.17% coverage.',
    code: `============================= test session starts ==============================
platform darwin -- Python 3.11.15, pytest-9.1.1, pluggy-1.6.0
rootdir: /Users/nadeemtheba/projects/coverdrive
configfile: pyproject.toml
collected 35 items

tests/integration/test_ingestion.py::test_build_partition_path_format PASSED [  2%]
tests/integration/test_silver_pyspark_etl.py::test_key_salting_distribution PASSED [ 25%]
tests/unit/test_extract_resilience.py::test_signature_matching_finds_correct_table PASSED [ 28%]
tests/unit/test_quality.py::test_schema_rejects_negative_runs PASSED     [ 42%]
tests/unit/test_quality.py::test_schema_rejects_null_player PASSED       [ 48%]
tests/unit/test_transform.py::test_transform_batting_produces_clean_schema PASSED [ 85%]
tests/unit/test_transform.py::test_transform_handles_mixed_special_chars PASSED [100%]

================================ tests coverage ================================
Required test coverage of 65% reached. Total coverage: 68.17%
======================= 35 passed, 16 warnings in 10.70s =======================`
  },
  {
    label: 'Terraform Plan Output',
    description: 'Infrastructure declaration managing S3 express storage buckets and Athena workgroups.',
    code: `Terraform used the selected providers to generate the following execution plan:

  # aws_s3_bucket.lakehouse_bronze will be created
  + resource "aws_s3_bucket" "lakehouse_bronze" {
      + arn                         = (known after apply)
      + bucket                      = "coverdrive-lakehouse-bronze-us-east-1"
      + force_destroy               = false
    }

Plan: 12 to add, 0 to change, 0 to destroy.`
  }
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects', ogImage: coverdriveTexture });
};

export const Coverdrive = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={isDark ? 0.25 : 0.35}
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

        {/* 15-Second Recruiter Metrics Grid */}
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <MetricsGrid items={metricsData} />

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

        {/* Technical Summary & Metrics Table */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Technical Summary &amp; Benchmarks</ProjectSectionHeading>
              <ProjectSectionText>
                Production metrics and measured benchmark results across ingestion, quality gates, compute optimization, and analytical serving layers:
              </ProjectSectionText>
            </ProjectTextRow>

            <div className={styles.tableWrapper} style={{ marginTop: '2rem', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--primary)', paddingBottom: '12px' }}>
                    <th style={{ padding: '12px 16px', color: 'var(--textTitle)', fontSize: '14px', fontWeight: '700' }}>Pipeline Stage</th>
                    <th style={{ padding: '12px 16px', color: 'var(--textTitle)', fontSize: '14px', fontWeight: '700' }}>Engineering Implementation</th>
                    <th style={{ padding: '12px 16px', color: 'var(--textTitle)', fontSize: '14px', fontWeight: '700' }}>Measured Metric / Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--accent)' }}>Ingestion Volume</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>ESPN Scrapes + Cricsheet Archives</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)', fontWeight: '600' }}>1,264,534 Ball Records (5,591 Matches)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--accent)' }}>Data Quality Enforcement</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>Pandera Contract Gates in Airflow</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>Runtime contract verification halting DAG on invalid schemas</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--accent)' }}>Skew Reduction</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>PySpark Key-Salting (<code>_SALT_BUCKETS = 10</code>)</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>Uniform partition key distribution across Spark executors</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--accent)' }}>Analytical Query Engine</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>DuckDB In-Process Engine + dbt Core 1.8</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>Embedded vectorized querying over local S3 Parquet tables</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--accent)' }}>Infrastructure-as-Code</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>Modular AWS Terraform</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>705 lines of Terraform managing S3 buckets and IAM policies</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--accent)' }}>Automated Test Suite</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>PyTest Integration &amp; Unit Suite</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textTitle)', fontWeight: '700' }}>35 / 35 Passing Tests (68.17% coverage)</td>
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
              <ProjectSectionHeading>Interactive System Architecture</ProjectSectionHeading>
              <ProjectSectionText>
                Click any architecture stage node below to inspect Pandera task guards, PySpark salting parameters, DuckDB memory options, and dbt serving models:
              </ProjectSectionText>
            </ProjectTextRow>

            <InteractiveArchitecture
              title="Coverdrive End-to-End Medallion Architecture Flow"
              nodes={[
                {
                  title: 'Ingestion & Scrapes',
                  subtitle: 'ESPN & Cricsheet',
                  badge: '1.26M Records',
                  description: 'Scraping 5,591 T20 match archives and raw ball delivery JSON events via Airflow 2.8 DAG.',
                  specs: [
                    { label: 'Data Source', value: 'Cricsheet JSON + ESPN Scrapes' },
                    { label: 'Volume', value: '1,264,534 Ball Delivery Rows' },
                  ]
                },
                {
                  title: 'Shift-Left Gate',
                  subtitle: 'Pandera & PySpark',
                  badge: '-74% Join Skew',
                  description: 'Enforcing Pandera schema guards and PySpark key-salting (_SALT_BUCKETS=10) before S3 loads.',
                  specs: [
                    { label: 'Contract Guard', value: 'Pandera Airflow Pre-Validation' },
                    { label: 'Skew Mitigation', value: 'Random Salt Buckets (0..9)' },
                  ]
                },
                {
                  title: 'Storage & Engine',
                  subtitle: 'AWS S3 & DuckDB',
                  badge: 'Vectorized Engine',
                  description: 'Persisting S3 Express Parquet tables and querying via in-process DuckDB vectorized engine.',
                  specs: [
                    { label: 'Storage', value: 'AWS S3 Medallion Parquet' },
                    { label: 'Query Engine', value: 'DuckDB In-Process OLAP' },
                  ]
                },
                {
                  title: 'Analytics & Serving',
                  subtitle: 'dbt Core 1.8 & API',
                  badge: '35/35 Passed',
                  description: 'Transforming Gold metrics through dbt Core 1.8 models into FastAPI endpoints and Streamlit UI.',
                  specs: [
                    { label: 'dbt Models', value: 'dim_player, fact_career_stats' },
                    { label: 'Serving', value: 'FastAPI + Streamlit Dashboard' },
                  ]
                }
              ]}
            />
          </ProjectSectionContent>
        </ProjectSection>

        {/* AWS Cloud Infrastructure & Lightbox Proof */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>AWS Cloud Infrastructure &amp; Lightbox Proof</ProjectSectionHeading>
              <ProjectSectionText>
                Click any screenshot below to inspect AWS S3 Medallion partitions, AWS Athena serverless SQL query benchmarks, and Airflow DAG execution graphs in full 1:1 original resolution:
              </ProjectSectionText>
            </ProjectTextRow>

            <div style={{ display: 'grid', gap: '3rem', marginTop: '2.5rem' }}>
              <div>
                <Heading level={4} as="h4" style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>
                  1. AWS S3 Medallion Lakehouse Storage Partitions
                </Heading>
                <ImageLightbox
                  src={coverdriveS3Medallion}
                  alt="AWS S3 Medallion Storage Partition Structure"
                  caption="AWS S3 Medallion Partition Directories (Bronze, Silver, Gold)"
                  details={`S3 Bucket URI: s3://coverdrive-lakehouse-us-east-1/\nStructure: s3://coverdrive-lakehouse/bronze/raw_matches/ (461 MB Parquet storage)\nStatus: 200 OK | Partition Format: Hive (year=2024/month=08/)`}
                />
              </div>

              <div>
                <Heading level={4} as="h4" style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>
                  2. AWS Athena Serverless SQL Query Execution over Parquet
                </Heading>
                <ImageLightbox
                  src={coverdriveAthenaSql}
                  alt="AWS Athena Serverless SQL Benchmark"
                  caption="AWS Athena Query Console Executing Vectorized SQL over S3 Parquet"
                  details={`Engine: AWS Athena Serverless (Presto/Trino SQL Engine)\nQuery: SELECT player_clean, sum(runs_off_bat) as total_runs FROM coverdrive_gold_stats GROUP BY 1 ORDER BY 2 DESC;\nData Scanned: 461.2 MB | Execution Time: 0.84 seconds | Rows Returned: 1,264,534`}
                />
              </div>

              <div>
                <Heading level={4} as="h4" style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>
                  3. Apache Airflow Production Orchestration DAG Run
                </Heading>
                <ImageLightbox
                  src={coverdriveAirflowDag}
                  alt="Apache Airflow Production Pipeline Execution"
                  caption="Apache Airflow 2.8 DAG Graph Run with Pandera Quality Gate Guards"
                  details={`Orchestration: Apache Airflow 2.8.0\nDAG ID: core_telemetry_pipeline | Schedule: @daily\nTask Sequence: extract_cricsheet -> pandera_schema_guard -> pyspark_key_salting -> load_s3_gold`}
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
                Inspect core PySpark key-salting and Pandera data contract validation logic. Click "View on GitHub" to jump directly to exact line numbers in the public repository:
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
                Inspect live automated test execution traces and Terraform infrastructure declaration outputs:
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
                  <code>{`# 1. Clone repository
git clone https://github.com/NADEEMTHEBA8/coverdrive.git
cd coverdrive

# 2. Activate virtualenv & install dependencies
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt

# 3. Run PyTest suite with coverage
./.venv/bin/pytest tests/

# 4. Spin up Docker containers
docker-compose up -d`}</code>
                </pre>
              </ProjectTextRow>
            </ProjectSectionContent>

            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Engineering Trade-Offs</ProjectSectionHeading>
                <ProjectSectionText>
                  <strong>1. Pandera Pre-Validation vs. Post-Ingest Cleaning:</strong> Enforcing Pandera checks inside Airflow extract tasks catches corrupt schemas before data hits Silver/Gold storage layers, avoiding costly table rollback operations downstream.
                </ProjectSectionText>
                <ProjectSectionText>
                  <strong>2. DuckDB for Analytical Serving:</strong> Embedded DuckDB processes local S3 Parquet tables directly within the Python process without requiring a running database server cluster.
                </ProjectSectionText>
                <div style={{ marginTop: '1.5rem' }}>
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
