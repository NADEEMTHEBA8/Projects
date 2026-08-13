import coverdriveTexture from '~/assets/coverdrive-cover.gif';
import fraudTexture from '~/assets/fraud-cover.gif';
import creditRiskTexture from '~/assets/credit-risk-cover.gif';
import supplyChainTexture from '~/assets/supply-chain-cover.gif';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { ProjectVault } from '~/components/project-vault';
import { Terminal } from '~/components/terminal/terminal';
import { ResumeSection } from './resume-section';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

import macbookProGlb from '~/assets/macbook-pro.glb';

// Prefetch 3D models and draco decoder wasm
export const links = () => {
  return [
    {
      rel: 'preload',
      href: macbookProGlb,
      as: 'fetch',
      type: 'model/gltf-binary',
      crossOrigin: 'anonymous',
    },
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
        title="Coverdrive — Cricket Analytics Lakehouse"
        description="A PySpark and DuckDB data lakehouse hosted on AWS S3 processing 1.26M+ ball-by-ball T20 cricket delivery records. Uses Apache Airflow for daily batch orchestration, Pandera schema gates to block bad data before storage, and PySpark key-salting to eliminate executor memory skew on large joins."
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
        description="An event-driven streaming feature store deployed on AWS capturing PostgreSQL database changes via Debezium and Apache Kafka. Computes rolling window aggregations in PySpark Structured Streaming and caches feature vectors in Redis to serve a FastAPI fraud scoring API in under 10ms."
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
        title="Credit Risk Analytics Pipeline"
        description="A memory-efficient financial ML data pipeline processing 57M loan records under 4GB RAM using embedded DuckDB and AWS S3 storage. Applies integer downcasting to optimize memory usage and pairs with an XGBoost decision model tuned specifically to detect high-cost credit defaults."
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
        description="An AWS & Databricks telemetry pipeline ingesting 50,000 IoT sensor events/second using AWS Kinesis and Databricks Auto Loader into S3 Delta Lake tables. Runs dbt dimensional models with automated quarantine routing to catch malformed data streams and highlight machine failure risks."
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
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
        <Terminal />
      </div>
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
