import creditRiskTexture from '~/assets/credit-risk-cover.gif';
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
import styles from './credit-risk-analysis.module.css';

const title = 'Credit Risk Default Analytics Pipeline';
const description =
  'Out-of-core financial ML pipeline processing 57M records under 4GB RAM via embedded DuckDB, numeric downcasting, XGBoost asymmetric F-beta thresholding (beta=2.5), and safety floors.';
const roles = [
  'Financial ML Architecture',
  'DuckDB Out-of-Core Processing',
  'Asymmetric Risk Modeling',
  'FinOps Memory Optimization',
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

        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              srcSet={`${creditRiskTexture} 1280w`}
              width={1280}
              height={800}
              placeholder={creditRiskTexture}
              alt="Credit Risk Default Analytics Pipeline Overview"
              sizes="100vw"
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Executive Summary & Technical Innovation</ProjectSectionHeading>
            <ProjectSectionText>
              Processing 57,000,000 credit records typically demands expensive high-memory server clusters. This project demonstrates how <strong>out-of-core embedded DuckDB SQL</strong> and aggressive <strong>numeric downcasting (float64 -&gt; float32, int64 -&gt; int8/int16)</strong> enable complete end-to-end data transformation, feature engineering, and model training in <strong>under 4GB RAM</strong>.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Out-of-Core Pipeline Architecture</ProjectSectionHeading>
            </ProjectTextRow>

            <div className={styles.diagramContainer}>
              <svg className={styles.diagramSvg} viewBox="0 0 900 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="900" height="320" rx="12" fill="var(--backgroundLight)" stroke="var(--primary)" strokeOpacity="0.2" />

                {/* 57M Parquet Datasets */}
                <rect x="40" y="50" width="220" height="220" rx="8" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
                <text x="60" y="90" fill="var(--textTitle)" fontSize="18" fontWeight="700">57M RAW PAYLOADS</text>
                <text x="60" y="120" fill="var(--textBody)" fontSize="13">• Partitioned Parquet</text>
                <text x="60" y="145" fill="var(--textBody)" fontSize="13">• Credit Statements</text>
                <text x="60" y="170" fill="var(--textBody)" fontSize="13">• Customer Default Labels</text>
                <text x="60" y="195" fill="var(--accent)" fontSize="13" fontWeight="600">Disk-Backed Storage</text>

                {/* Arrow 1 */}
                <path d="M270 160 H320" stroke="var(--accent)" strokeWidth="3" markerEnd="url(#arrow)" />

                {/* DuckDB Engine */}
                <rect x="340" y="50" width="220" height="220" rx="8" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
                <text x="360" y="90" fill="var(--textTitle)" fontSize="18" fontWeight="700">DUCKDB ENGINE</text>
                <text x="360" y="120" fill="var(--textBody)" fontSize="13">• Out-of-Core SQL</text>
                <text x="360" y="145" fill="var(--textBody)" fontSize="13">• Memory Cap &lt; 4GB</text>
                <text x="360" y="170" fill="var(--textBody)" fontSize="13">• Numeric Downcasting</text>
                <text x="360" y="195" fill="var(--accent)" fontSize="13" fontWeight="600">Zero-Copy Arrow Export</text>

                {/* Arrow 2 */}
                <path d="M570 160 H620" stroke="var(--accent)" strokeWidth="3" markerEnd="url(#arrow)" />

                {/* XGBoost & Risk Thresholding */}
                <rect x="640" y="50" width="220" height="220" rx="8" fill="var(--background)" stroke="var(--primary)" strokeWidth="2" />
                <text x="660" y="90" fill="var(--textTitle)" fontSize="18" fontWeight="700">RISK ENGINE</text>
                <text x="660" y="120" fill="var(--textBody)" fontSize="13">• XGBoost Classifier</text>
                <text x="660" y="145" fill="var(--textBody)" fontSize="13">• Asymmetric F-beta (β=2.5)</text>
                <text x="660" y="170" fill="var(--textBody)" fontSize="13">• Safety Default Floors</text>
                <text x="660" y="195" fill="var(--accent)" fontSize="13" fontWeight="600">Financial Risk Shield</text>

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
                <ProjectSectionHeading>Asymmetric Risk Optimization</ProjectSectionHeading>
                <ProjectSectionText>
                  In credit risk modeling, a <strong>False Negative</strong> (failing to predict a default) costs 10x to 50x more than a False Positive (requesting extra verification).
                </ProjectSectionText>
                <ProjectSectionText>
                  By optimizing the classification threshold using an asymmetric <strong>F-beta metric (\(\beta = 2.5\))</strong>, the model heavily penalizes missed defaults, maximizing financial protection while maintaining precision.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>

            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>Tech Stack Highlights</ProjectSectionHeading>
                <ProjectSectionText>
                  • <strong>Processing:</strong> DuckDB (Embedded Vectorized Engine)<br />
                  • <strong>ML Framework:</strong> XGBoost, LightGBM, Scikit-Learn<br />
                  • <strong>Data Format:</strong> Apache Arrow, Parquet<br />
                  • <strong>Optimization:</strong> Optuna Hyperparameter Tuning<br />
                  • <strong>Cost Efficiency:</strong> 90% cloud RAM cost reduction
                </ProjectSectionText>
                <div style={{ marginTop: '2rem' }}>
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
