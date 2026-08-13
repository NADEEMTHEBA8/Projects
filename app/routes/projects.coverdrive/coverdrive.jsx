import coverdriveTexture from '~/assets/coverdrive-cover.gif';
import coverdriveS3Medallion from '~/assets/coverdrive-s3-medallion.png';
import coverdriveAthenaSql from '~/assets/coverdrive-athena-sql.png';
import coverdriveAirflowDag from '~/assets/coverdrive-airflow-dag.png';
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

        {/* Technical Summary & Metrics Table */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Technical Summary &amp; Metrics</ProjectSectionHeading>
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
              <ProjectSectionHeading>System Architecture</ProjectSectionHeading>
              <ProjectSectionText>
                End-to-end Medallion pipeline architecture from raw JSON/CSV scrapes through Airflow task guards, PySpark salting, S3 Parquet storage, DuckDB OLAP, and dbt analytics model rendering:
              </ProjectSectionText>
            </ProjectTextRow>

            <div className={styles.diagramContainer} style={{ marginTop: '2rem' }}>
              <svg className={styles.diagramSvg} viewBox="0 0 900 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="900" height="340" rx="12" fill="var(--backgroundLight)" stroke="var(--primary)" strokeOpacity="0.2" />
                
                {/* 1. Ingestion */}
                <rect x="30" y="40" width="180" height="260" rx="8" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
                <text x="50" y="75" fill="var(--textTitle)" fontSize="15" fontWeight="700">1. INGESTION</text>
                <text x="50" y="110" fill="var(--textBody)" fontSize="12">• Cricsheet Archives</text>
                <text x="50" y="130" fill="var(--textBody)" fontSize="12">  (1.26M Delivery Rows)</text>
                <text x="50" y="160" fill="var(--textBody)" fontSize="12">• ESPN Cricinfo Scraper</text>
                <text x="50" y="180" fill="var(--textBody)" fontSize="12">  (Player Telemetry)</text>
                <text x="50" y="220" fill="var(--accent)" fontSize="12" fontWeight="600">Airflow 2.8 DAG</text>

                {/* Arrow 1 */}
                <path d="M210 170 H240" stroke="var(--accent)" strokeWidth="3" markerEnd="url(#arrow)" />

                {/* 2. Quality & Salting */}
                <rect x="250" y="40" width="190" height="260" rx="8" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
                <text x="270" y="75" fill="var(--textTitle)" fontSize="15" fontWeight="700">2. SHIFT-LEFT GATE</text>
                <text x="270" y="110" fill="var(--textBody)" fontSize="12">• Pandera Contracts</text>
                <text x="270" y="130" fill="var(--textBody)" fontSize="12">  (validation_rules.py)</text>
                <text x="270" y="165" fill="var(--textBody)" fontSize="12">• S3 Quarantine Guard</text>
                <text x="270" y="205" fill="var(--textBody)" fontSize="12">• PySpark Key-Salting</text>
                <text x="270" y="225" fill="var(--accent)" fontSize="12" fontWeight="600">(_SALT_BUCKETS = 10)</text>

                {/* Arrow 2 */}
                <path d="M440 170 H470" stroke="var(--accent)" strokeWidth="3" markerEnd="url(#arrow)" />

                {/* 3. Storage */}
                <rect x="480" y="40" width="180" height="260" rx="8" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
                <text x="500" y="75" fill="var(--textTitle)" fontSize="15" fontWeight="700">3. STORAGE</text>
                <text x="500" y="110" fill="var(--textBody)" fontSize="12">• AWS S3 Bucket</text>
                <text x="500" y="130" fill="var(--textBody)" fontSize="12">  (461 MB Parquet)</text>
                <text x="500" y="165" fill="var(--textBody)" fontSize="12">• DuckDB In-Process</text>
                <text x="500" y="185" fill="var(--textBody)" fontSize="12">  Vectorized Engine</text>
                <text x="500" y="220" fill="var(--accent)" fontSize="12" fontWeight="600">S3 Express Parquet</text>

                {/* Arrow 3 */}
                <path d="M660 170 H690" stroke="var(--accent)" strokeWidth="3" markerEnd="url(#arrow)" />

                {/* 4. Serving */}
                <rect x="700" y="40" width="170" height="260" rx="8" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
                <text x="720" y="75" fill="var(--textTitle)" fontSize="15" fontWeight="700">4. ANALYTICS</text>
                <text x="720" y="110" fill="var(--textBody)" fontSize="12">• dbt Core 1.8</text>
                <text x="720" y="130" fill="var(--textBody)" fontSize="12">  (dim_player, fact)</text>
                <text x="720" y="165" fill="var(--textBody)" fontSize="12">• Career Stats Mart</text>
                <text x="720" y="205" fill="var(--textBody)" fontSize="12">• Streamlit Dashboard</text>
                <text x="720" y="225" fill="var(--accent)" fontSize="12" fontWeight="600">FastAPI JSON API</text>

                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--accent)" />
                  </marker>
                </defs>
              </svg>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        {/* AWS Cloud Infrastructure & Console Proof */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>AWS Cloud Infrastructure &amp; Console Execution</ProjectSectionHeading>
              <ProjectSectionText>
                Real production console screenshots of AWS S3 Medallion storage partitions, AWS Athena SQL analytical query benchmarks, and Apache Airflow DAG execution graphs:
              </ProjectSectionText>
            </ProjectTextRow>

            <div style={{ display: 'grid', gap: '3rem', marginTop: '2.5rem' }}>
              <div>
                <Heading level={4} as="h4" style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>
                  1. AWS S3 Medallion Lakehouse Storage Partitions
                </Heading>
                <ProjectImage
                  raised
                  srcSet={`${coverdriveS3Medallion} 1280w`}
                  width={1280}
                  height={720}
                  placeholder={coverdriveS3Medallion}
                  alt="AWS S3 Medallion Storage Partition Structure"
                  sizes="100vw"
                />
              </div>

              <div>
                <Heading level={4} as="h4" style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>
                  2. AWS Athena Serverless SQL Query Execution over Parquet
                </Heading>
                <ProjectImage
                  raised
                  srcSet={`${coverdriveAthenaSql} 1280w`}
                  width={1280}
                  height={720}
                  placeholder={coverdriveAthenaSql}
                  alt="AWS Athena Serverless SQL Benchmark"
                  sizes="100vw"
                />
              </div>

              <div>
                <Heading level={4} as="h4" style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>
                  3. Apache Airflow Production Orchestration DAG Run
                </Heading>
                <ProjectImage
                  raised
                  srcSet={`${coverdriveAirflowDag} 1280w`}
                  width={1280}
                  height={720}
                  placeholder={coverdriveAirflowDag}
                  alt="Apache Airflow Production Pipeline Execution"
                  sizes="100vw"
                />
              </div>
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
                  1. PySpark Join Skew Reduction (<code>src/ingestion/silver_pyspark_etl.py</code>)
                </Heading>
                <Text size="s" style={{ marginBottom: '1rem' }}>
                  Joining batting fact tables with player dimension tables introduces join skew due to prolific players appearing in orders-of-magnitude more rows. A key-salting algorithm distributes skewed join keys evenly across partitions:
                </Text>
                <pre style={{ background: 'var(--backgroundLight)', border: '1px solid var(--border)', padding: '1.25rem', borderRadius: '8px', overflowX: 'auto', fontSize: '13px', fontFamily: 'monospace', color: 'var(--textBody)' }}>
                  <code>{`from pyspark.sql.functions import col, concat, floor, lit, rand

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
).drop("salted_key", "salt", "player_clean", "bowl_player_clean")`}</code>
                </pre>
              </div>

              <div>
                <Heading level={4} as="h4" style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>
                  2. Pandera Data Contract Validation (<code>src/quality/validation_rules.py</code>)
                </Heading>
                <Text size="s" style={{ marginBottom: '1rem' }}>
                  Data quality contracts validate column data types and numeric range bounds before data is committed to Silver/Gold layers:
                </Text>
                <pre style={{ background: 'var(--backgroundLight)', border: '1px solid var(--border)', padding: '1.25rem', borderRadius: '8px', overflowX: 'auto', fontSize: '13px', fontFamily: 'monospace', color: 'var(--textBody)' }}>
                  <code>{`import pandera.pyspark as pa

class TelemetrySchema(pa.DataFrameModel):
    event_id: pa.Field(pa.StringType, nullable=False)
    timestamp: pa.Field(pa.TimestampType, nullable=False)
    velocity: pa.Field(pa.FloatType, pa.Check.in_range(min_value=0.0, max_value=150.0))

def validate_and_write(df, target_path: str) -> None:
    validated_df = TelemetrySchema.validate(df)
    validated_df.write.format("parquet").mode("append").save(target_path)`}</code>
                </pre>
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        {/* PyTest Verification & Test Suite */}
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>PyTest Integration &amp; Unit Test Suite Output</ProjectSectionHeading>
              <ProjectSectionText>
                Execution trace of the 35 automated integration/unit tests validating scraping resilience, data transformations, Pandera quality gates, and PySpark salting:
              </ProjectSectionText>
            </ProjectTextRow>

            <pre style={{ background: '#090D16', border: '1px solid #1E293B', padding: '1.5rem', borderRadius: '10px', overflowX: 'auto', fontSize: '12px', fontFamily: 'monospace', color: '#38BDF8', marginTop: '1.5rem', lineHeight: '1.5' }}>
              <code>{`============================= test session starts ==============================
platform darwin -- Python 3.11.15, pytest-9.1.1, pluggy-1.6.0
rootdir: /Users/nadeemtheba/projects/coverdrive
configfile: pyproject.toml
plugins: mock-3.15.1, cov-7.1.0, typeguard-4.5.2, anyio-4.14.2
collected 35 items

tests/integration/test_ingestion.py::test_build_partition_path_format PASSED [  2%]
tests/integration/test_ingestion.py::test_build_partition_path_silver_layer PASSED [  5%]
tests/integration/test_ingestion.py::test_load_from_fixtures_drops_unnamed_columns PASSED [  8%]
tests/integration/test_ingestion.py::test_load_from_fixtures_missing_raises PASSED [ 11%]
tests/integration/test_ingestion.py::test_write_bronze_is_idempotent PASSED [ 14%]
tests/integration/test_ingestion.py::test_write_bronze_round_trip PASSED [ 17%]
tests/integration/test_ingestion.py::test_parse_html_table_index_out_of_range PASSED [ 20%]
tests/integration/test_ingestion.py::test_fetch_page_retries_on_503 PASSED [ 22%]
tests/integration/test_silver_pyspark_etl.py::test_key_salting_distribution PASSED [ 25%]
tests/unit/test_extract_resilience.py::test_signature_matching_finds_correct_table_despite_decoy_tables PASSED [ 28%]
tests/unit/test_extract_resilience.py::test_signature_matching_raises_schema_drift_error_when_missing PASSED [ 31%]
tests/unit/test_extract_resilience.py::test_open_meteo_api_retries_on_rate_limit_429 PASSED [ 34%]
tests/unit/test_quality.py::test_validate_batting_passes_on_clean_fixture PASSED [ 37%]
tests/unit/test_quality.py::test_validate_bowling_passes_on_clean_fixture PASSED [ 40%]
tests/unit/test_quality.py::test_schema_rejects_negative_runs PASSED     [ 42%]
tests/unit/test_quality.py::test_schema_rejects_runs_above_ceiling PASSED [ 45%]
tests/unit/test_quality.py::test_schema_rejects_null_player PASSED       [ 48%]
tests/unit/test_quality.py::test_schema_rejects_invalid_career_span PASSED [ 51%]
tests/unit/test_quality.py::test_row_count_check_fails_below_threshold PASSED [ 54%]
tests/unit/test_quality.py::test_null_ratio_check_fails_above_threshold PASSED [ 57%]
tests/unit/test_quality.py::test_null_ratio_check_passes_when_below_threshold PASSED [ 60%]
tests/unit/test_quality.py::test_quality_failure_exception_is_distinguishable PASSED [ 62%]
tests/unit/test_quality.py::test_validate_table_unknown_table_raises PASSED [ 65%]
tests/unit/test_transform.py::test_split_player_country PASSED           [ 68%]
tests/unit/test_transform.py::test_split_player_country_no_tag PASSED    [ 71%]
tests/unit/test_transform.py::test_parse_span PASSED                     [ 74%]
tests/unit/test_transform.py::test_parse_span_malformed_yields_nulls PASSED [ 77%]
tests/unit/test_transform.py::test_strip_plus_suffix_flags_lower_bound PASSED [ 80%]
tests/unit/test_transform.py::test_strip_star_suffix_flags_not_out PASSED [ 82%]
tests/unit/test_transform.py::test_transform_batting_produces_clean_schema PASSED [ 85%]
tests/unit/test_transform.py::test_transform_batting_dedupes_on_natural_key PASSED [ 88%]
tests/unit/test_transform.py::test_transform_batting_idempotent PASSED   [ 91%]
tests/unit/test_transform.py::test_transform_bowling_filters_zero_wickets PASSED [ 94%]
tests/unit/test_transform.py::test_transform_bowling_extracts_country PASSED [ 97%]
tests/unit/test_transform.py::test_transform_handles_mixed_special_chars PASSED [100%]

================================ tests coverage ================================
Required test coverage of 65% reached. Total coverage: 68.17%
======================= 35 passed, 16 warnings in 10.70s =======================`}</code>
            </pre>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Quickstart & Trade-offs */}
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Quickstart &amp; Local Setup</ProjectSectionHeading>
                <pre style={{ background: 'var(--backgroundLight)', border: '1px solid var(--border)', padding: '1rem', borderRadius: '8px', overflowX: 'auto', fontSize: '12px', fontFamily: 'monospace', color: 'var(--textBody)' }}>
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
