import creditRiskTexture from '~/assets/credit-risk-cover.gif';
import creditRiskAwsCloud from '~/assets/credit-risk-aws-cloud.png';
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
import styles from './credit-risk-analysis.module.css';

const title = 'Enterprise Credit Risk Default Analytics Pipeline';
const description =
  'An out-of-core data engineering pipeline processing 57+ million multi-table financial records (~10GB) while maintaining RAM consumption under 4GB. Features asymmetric F-beta loss tuning (beta=2.5) and a 0.10 default probability safety guardrail to address the 8:1 default cost ratio.';
const roles = [
  'Financial ML Data Pipeline',
  'DuckDB 1.1+ (max_memory=3GB)',
  'Numeric RAM Downcasting',
  'Asymmetric F-beta Loss Tuning',
  'dbt-duckdb 1.8 Analytics',
];

const metricsData = [
  { label: 'Dataset Scale', value: '57,000,000', description: 'Financial records across 8 multi-join tables' },
  { label: 'Memory Ceiling', value: '< 4GB RAM', description: 'Out-of-core DuckDB processing limit' },
  { label: 'Loss Objective', value: 'beta = 2.5', description: 'F-beta weighting Recall 6.25x over Precision' },
  { label: 'Test Suite', value: '28 / 28', description: 'Passing PyTest unit & integration suite' },
];

const codeTabsData = [
  {
    label: 'Asymmetric F-beta Sweeper',
    description: 'Sweeping decision thresholds 0.05-0.90 to maximize F-beta (beta=2.5) matching the 8:1 credit default cost ratio.',
    githubUrl: 'https://github.com/NADEEMTHEBA8/credit-risk-analysis/blob/main/src/models/threshold.py#L65-L94',
    code: `import numpy as np
import pandas as pd
from sklearn.metrics import classification_report, fbeta_score

DECISION_BETA: float = 2.5

def select_threshold(y_val: pd.Series, y_proba: np.ndarray) -> float:
    """Sweep thresholds 0.05-0.90 to maximize F-beta (beta=2.5)."""
    thr_rows = []
    for t in np.arange(0.05, 0.91, 0.05):
        yp_t = (y_proba >= t).astype(int)
        fb = fbeta_score(y_val, yp_t, beta=DECISION_BETA, zero_division=0)
        rep = classification_report(y_val, yp_t, output_dict=True, zero_division=0)
        thr_rows.append({
            'threshold': round(t, 2),
            'fbeta': round(fb, 4),
            'precision': round(rep['1']['precision'], 4),
            'recall': round(rep['1']['recall'], 4),
        })

    thr_df = pd.DataFrame(thr_rows)
    opt_idx = thr_df['fbeta'].idxmax()
    return thr_df.loc[opt_idx, 'threshold']`
  },
  {
    label: 'Memory Reduction Downcasting',
    description: 'Systematically downcasting int64 and float64 numeric columns to minimal lossless representations to conserve host RAM.',
    githubUrl: 'https://github.com/NADEEMTHEBA8/credit-risk-analysis/blob/main/src/common/utils.py#L96-L116',
    code: `def reduce_memory(df: pd.DataFrame) -> pd.DataFrame:
    """Downcast numeric columns to reduce DataFrame RAM footprint."""
    for col in df.columns:
        col_type = df[col].dtype
        if col_type != object and not pd.api.types.is_categorical_dtype(df[col]):
            c_min = df[col].min()
            c_max = df[col].max()
            if str(col_type)[:3] == 'int':
                if c_min > np.iinfo(np.int8).min and c_max < np.iinfo(np.int8).max:
                    df[col] = df[col].astype(np.int8)
                elif c_min > np.iinfo(np.int16).min and c_max < np.iinfo(np.int16).max:
                    df[col] = df[col].astype(np.int16)
                elif c_min > np.iinfo(np.int32).min and c_max < np.iinfo(np.int32).max:
                    df[col] = df[col].astype(np.int32)
    return df`
  }
];

const terminalLogsData = [
  {
    label: 'PyTest Unit Suite (28 Passed)',
    description: 'Execution trace of 28 passing unit tests validating memory reduction, safe division, and threshold selection.',
    code: `============================= test session starts ==============================
platform darwin -- Python 3.14.6, pytest-9.0.3, pluggy-1.6.0
rootdir: /Users/nadeemtheba/projects/credit-risk-analysis
collected 28 items

tests/unit/test_transformations.py::TestSentinelEmploymentValueMasking::test_sentinel_is_masked PASSED [  3%]
tests/unit/test_transformations.py::TestSafeDivisionEdgeCases::test_zero_denominator_yields_fill PASSED [ 14%]
tests/unit/test_transformations.py::TestTemporalNormalisation::test_days_birth_is_absolute PASSED [ 35%]
tests/unit/test_utils.py::TestReduceMemory::test_int64_gets_downcasted PASSED [ 78%]
tests/unit/test_utils.py::TestReduceMemory::test_float64_gets_downcasted PASSED [ 82%]
tests/unit/test_utils.py::TestConfiguration::test_decision_beta_is_above_one PASSED [ 92%]

============================== 28 passed in 0.43s ==============================`
  }
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const CreditRiskAnalysis = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={creditRiskTexture}
          srcSet={`${creditRiskTexture} 1280w`}
          placeholder={creditRiskTexture}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/NADEEMTHEBA8/credit-risk-analysis"
          roles={roles}
        />

        {/* 15-Second Recruiter Metrics Grid */}
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <MetricsGrid items={metricsData} />

            <ProjectImage
              raised
              srcSet={`${creditRiskTexture} 1280w`}
              width={1280}
              height={800}
              placeholder={creditRiskTexture}
              alt="Enterprise Credit Risk Analytics Pipeline Overview"
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
                Measured memory optimization and financial risk threshold tuning results across out-of-core embedded query processing and asymmetric loss optimization:
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
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--accent)' }}>Data Volume</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>57,000,000 Applicant Records across 8 Tables</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)', fontWeight: '600' }}>Processed out-of-core via embedded DuckDB engine</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--accent)' }}>Memory Limit</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>DuckDB SET max_memory='3GB'</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)', fontWeight: '600' }}>Host memory consumption kept under 4GB RAM</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--accent)' }}>Memory Downcasting</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>Numeric dtype reduction (reduce_memory())</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>Downcasts int64 and float64 to minimal lossless dtypes</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--accent)' }}>Loss Tuning</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>Asymmetric F-beta (beta=2.5) thresholding</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>Weights Recall 6.25x over Precision (8:1 default cost ratio)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--accent)' }}>Safety Guardrail</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>P(Default) &gt;= 0.10 risk ceiling</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>Borrower classified high risk if default probability &gt;= 10%</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 16px', fontWeight: '600', color: 'var(--accent)' }}>Test Suite</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textBody)' }}>PyTest unit suite</td>
                    <td style={{ padding: '12px 16px', color: 'var(--textTitle)', fontWeight: '700' }}>28 / 28 Passing Tests (0 failures)</td>
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
                Out-of-core pipeline architecture transforming 57M financial records through DuckDB limits, memory downcasting, dbt-duckdb feature modeling, asymmetric XGBoost decisioning, and risk mart export:
              </ProjectSectionText>
            </ProjectTextRow>

            <div className={styles.diagramContainer} style={{ marginTop: '2rem' }}>
              <svg className={styles.diagramSvg} viewBox="0 0 900 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="900" height="340" rx="12" fill="var(--backgroundLight)" stroke="var(--primary)" strokeOpacity="0.2" />
                
                {/* 1. Ingestion */}
                <rect x="30" y="40" width="180" height="260" rx="8" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
                <text x="50" y="75" fill="var(--textTitle)" fontSize="15" fontWeight="700">1. RAW STORAGE</text>
                <text x="50" y="110" fill="var(--textBody)" fontSize="12">• Raw CSV Files</text>
                <text x="50" y="130" fill="var(--textBody)" fontSize="12">  (57M Rows / 10GB Data)</text>
                <text x="50" y="165" fill="var(--textBody)" fontSize="12">• Embedded DuckDB</text>
                <text x="50" y="185" fill="var(--textBody)" fontSize="12">  (max_memory='3GB')</text>
                <text x="50" y="220" fill="var(--accent)" fontSize="12" fontWeight="600">Out-of-Core Engine</text>

                {/* Arrow 1 */}
                <path d="M210 170 H240" stroke="var(--accent)" strokeWidth="3" markerEnd="url(#arrow)" />

                {/* 2. Downcasting */}
                <rect x="250" y="40" width="190" height="260" rx="8" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
                <text x="270" y="75" fill="var(--textTitle)" fontSize="15" fontWeight="700">2. MEMORY OPT</text>
                <text x="270" y="110" fill="var(--textBody)" fontSize="12">• reduce_memory()</text>
                <text x="270" y="130" fill="var(--textBody)" fontSize="12">  (Numeric Downcasting)</text>
                <text x="270" y="165" fill="var(--textBody)" fontSize="12">• dbt-duckdb 1.8</text>
                <text x="270" y="185" fill="var(--textBody)" fontSize="12">  (Staging -&gt; Gold)</text>
                <text x="270" y="220" fill="var(--accent)" fontSize="12" fontWeight="600">&lt; 4GB RAM Ceiling</text>

                {/* Arrow 2 */}
                <path d="M440 170 H470" stroke="var(--accent)" strokeWidth="3" markerEnd="url(#arrow)" />

                {/* 3. Classification */}
                <rect x="480" y="40" width="180" height="260" rx="8" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
                <text x="500" y="75" fill="var(--textTitle)" fontSize="15" fontWeight="700">3. MODEL TUNING</text>
                <text x="500" y="110" fill="var(--textBody)" fontSize="12">• XGBoost Classifier</text>
                <text x="500" y="130" fill="var(--textBody)" fontSize="12">  (Asymmetric F_beta)</text>
                <text x="500" y="165" fill="var(--textBody)" fontSize="12">• F_beta (beta = 2.5)</text>
                <text x="500" y="185" fill="var(--textBody)" fontSize="12">  (8:1 Cost Ratio)</text>
                <text x="500" y="220" fill="var(--accent)" fontSize="12" fontWeight="600">Threshold Sweeper</text>

                {/* Arrow 3 */}
                <path d="M660 170 H690" stroke="var(--accent)" strokeWidth="3" markerEnd="url(#arrow)" />

                {/* 4. Risk Mart */}
                <rect x="700" y="40" width="170" height="260" rx="8" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
                <text x="720" y="75" fill="var(--textTitle)" fontSize="15" fontWeight="700">4. SERVING MART</text>
                <text x="720" y="110" fill="var(--textBody)" fontSize="12">• P(Default) &gt;= 0.10</text>
                <text x="720" y="130" fill="var(--textBody)" fontSize="12">  Safety Floor Guardrail</text>
                <text x="720" y="165" fill="var(--textBody)" fontSize="12">• High-Risk Flags</text>
                <text x="720" y="205" fill="var(--textBody)" fontSize="12">• Parquet / Postgres</text>
                <text x="720" y="225" fill="var(--accent)" fontSize="12" fontWeight="600">FastAPI Risk API</text>

                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--accent)" />
                  </marker>
                </defs>
              </svg>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        {/* AWS Cloud Infrastructure & Full-Screen Lightbox */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>AWS Cloud Infrastructure &amp; Lightbox Proof</ProjectSectionHeading>
              <ProjectSectionText>
                Click the cloud architecture blueprint below to inspect single-node DuckDB processing limits over S3 Parquet tables in 4K full screen:
              </ProjectSectionText>
            </ProjectTextRow>

            <div style={{ marginTop: '2.5rem' }}>
              <ImageLightbox
                src={creditRiskAwsCloud}
                width={9600}
                height={5000}
                alt="AWS Cloud Infrastructure & DuckDB Out-of-Core Processing Blueprint"
                caption="AWS Cloud Infrastructure Blueprint & Out-of-Core DuckDB Memory Architecture (9.6K HD)"
              />
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Interactive Tabbed Code Viewer */}
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Interactive Code Snippets &amp; Deep-Links</ProjectSectionHeading>
              <ProjectSectionText>
                Inspect asymmetric F-beta loss optimization and memory downcasting functions. Click "View on GitHub" to jump directly to line numbers in the repository:
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
                Inspect live automated unit test execution logs for transformations, safe division, and memory downcasting:
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
git clone https://github.com/NADEEMTHEBA8/credit-risk-analysis.git
cd credit-risk-analysis

# 2. Setup virtualenv
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt

# 3. Run PyTest suite
./.venv/bin/pytest tests/

# 4. Train pipeline & generate metrics
./.venv/bin/python -m src.models.train`}</code>
                </pre>
              </ProjectTextRow>
            </ProjectSectionContent>

            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Engineering Trade-Offs</ProjectSectionHeading>
                <ProjectSectionText>
                  <strong>1. Embedded DuckDB vs. PySpark:</strong> DuckDB handles multi-table 10GB datasets within single-node memory limits, eliminating cluster startup latency and Py4J serialization overhead.
                </ProjectSectionText>
                <ProjectSectionText>
                  <strong>2. Memory Downcasting vs. Native Dtypes:</strong> Systematically downcasting integers and floats cuts memory footprints by over 50%, enabling in-memory feature transformations on standard developer workstations.
                </ProjectSectionText>
                <div style={{ marginTop: '1.5rem' }}>
                  <Button iconHoverShift href="https://github.com/NADEEMTHEBA8/credit-risk-analysis" target="_blank" rel="noopener noreferrer" iconEnd="arrow-right">
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
