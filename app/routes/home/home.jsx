import coverdriveTexture from '~/assets/coverdrive-cover.png';
import fraudTexture from '~/assets/fraud-cover.png';
import creditRiskTexture from '~/assets/credit-risk-cover.png';
import supplyChainTexture from '~/assets/supply-chain-cover.png';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { ProjectVault } from '~/components/project-vault';
import { ResumeSection } from './resume-section';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoder wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Data Engineer + BI & ML Specialist',
    description: `Data Engineering portfolio of ${config.name} — architecting real-time streaming pipelines, medallion lakehouses, and high-performance analytical systems.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const resume = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, resume, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      if (section.current) sectionObserver.observe(section.current);
    });

    if (intro.current) indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Coverdrive — Shift-Left Lakehouse"
        description="Analytical data lakehouse processing 1.26M+ delivery records across 5,591 T20 matches with Pandera quality gates in Airflow and PySpark key-salting skew reduction."
        buttonText="Explore case study"
        buttonLink="/projects/coverdrive"
        model={{
          type: 'laptop',
          alt: 'Coverdrive Data Lakehouse Architecture',
          textures: [
            {
              srcSet: `${coverdriveTexture} 1280w`,
              placeholder: coverdriveTexture,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Real-Time Fraud Feature Store"
        description="Event-driven streaming feature store capturing PostgreSQL CDC via Debezium and Kafka, computing PySpark aggregations, and serving Redis vectors via FastAPI in sub-10ms."
        buttonText="Explore case study"
        buttonLink="/projects/realtime-fraud-feature-store"
        model={{
          type: 'laptop',
          alt: 'Real-Time Fraud Feature Store Pipeline',
          textures: [
            {
              srcSet: `${fraudTexture} 1280w`,
              placeholder: fraudTexture,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Credit Risk Default Analytics Pipeline"
        description="Out-of-core financial ML pipeline processing 57M records under 4GB RAM via embedded DuckDB, numeric downcasting, XGBoost asymmetric F-beta thresholding (beta=2.5), and safety floors."
        buttonText="Explore case study"
        buttonLink="/projects/credit-risk-analysis"
        model={{
          type: 'laptop',
          alt: 'Credit Risk Pipeline Architecture',
          textures: [
            {
              srcSet: `${creditRiskTexture} 1280w`,
              placeholder: creditRiskTexture,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Predictive Supply Chain Telemetry"
        description="Event-driven telemetry ingestion engine processing IoT machine sensor streams (temp, vibration, pressure) via AWS Kinesis, Databricks Auto Loader, Delta Lake 3.x Liquid Clustering, and dbt."
        buttonText="Explore case study"
        buttonLink="/projects/supply-chain-telemetry-pipeline"
        model={{
          type: 'laptop',
          alt: 'Supply Chain Telemetry Architecture',
          textures: [
            {
              srcSet: `${supplyChainTexture} 1280w`,
              placeholder: supplyChainTexture,
            },
          ],
        }}
      />
      <ProjectVault />
      <ResumeSection
        sectionRef={resume}
        visible={visibleSections.includes(resume.current)}
        id="resume"
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
