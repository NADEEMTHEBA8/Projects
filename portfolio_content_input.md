# Portfolio Content Master Input File

Fill out or edit any of the fields below. Once complete, return this file content to me, and I will safely integrate all changes into your codebase without breaking any animations, layouts, or build processes!

---

## 👤 Section 1: Personal & Contact Information

- **Full Name:** Nadeem Theba
- **Primary Role Title:** Data Engineer
- **Sub-Roles / Disciplines:**
  - BI Analyst
  - ML Engineer
  - Data Architect
  - Cloud Developer
- **Email:** nadeemtheba8@gmail.com
- **Phone:** +91 97149 65149
- **Location:** Rajkot, India
- **GitHub Profile URL:** https://github.com/NADEEMTHEBA8
- **LinkedIn Profile URL:** https://linkedin.com/in/nadeem-theba-602862208
- **Medium Profile URL:** https://medium.com/@nadeemtheba8

---

## 📝 Section 2: Homepage Hero & About Me Story

- **Hero Tagline:** Data Engineering portfolio of Nadeem Theba — architecting real-time streaming pipelines, medallion lakehouses, and high-performance analytical systems.
- **Bio Greeting:** Hi there
- **Bio Paragraph 1:**
  > I’m **Nadeem Theba**, a Data Engineer with 3+ years of experience architecting scalable ETL/ELT pipelines, real-time event streaming systems, and Medallion Lakehouses on AWS, Databricks, and GCP. Currently engineering at Kaival Technologies, where I focus on distributed data processing, Shift-Left data contracts, and cloud cost optimization (FinOps).
- **Bio Paragraph 2:**
  > I hold a Master’s degree in Data Science & Analytics from the University of Hertfordshire (UK) and a B.Tech in Computer Science. My technical toolkit includes Python, PySpark, Delta Lake 3.x, dbt, DuckDB, Apache Kafka, Terraform, and Docker.

---

## 🚀 Section 3: 4 Main Case Studies

### Case Study 1: Coverdrive — Shift-Left Lakehouse
- **Title:** Coverdrive — Shift-Left Lakehouse
- **Short Summary (Homepage):** Analytical data lakehouse processing 1.26M+ delivery records across 5,591 T20 matches with Pandera quality gates in Airflow and PySpark key-salting skew reduction.
- **Tech Stack:** DuckDB, dbt, PySpark, Pandera, AWS S3, Apache Airflow
- **GitHub Repo URL:** https://github.com/NADEEMTHEBA8/coverdrive
- **Key Achievements / Bullet Points:**
  1. Mitigated executor memory skew during high-cardinality joins by engineering custom PySpark key-salting algorithms across distributed partitions.
  2. Prevented downstream pipeline corruption by 99.9% through Shift-Left Pandera data contracts in Airflow.
  3. Optimized lakehouse analytics by running dbt transformations directly on DuckDB querying Parquet on S3 at sub-second execution cost.

### Case Study 2: Real-Time Fraud Feature Store
- **Title:** Real-Time Fraud Feature Store
- **Short Summary (Homepage):** Event-driven streaming feature store capturing PostgreSQL CDC via Debezium and Kafka, computing PySpark aggregations, and serving Redis vectors via FastAPI in sub-10ms.
- **Tech Stack:** Apache Kafka, PySpark Streaming, Redis, FastAPI, dbt, Docker
- **GitHub Repo URL:** https://github.com/NADEEMTHEBA8/realtime-fraud-feature-store
- **Key Achievements / Bullet Points:**
  1. Architected an event-driven streaming feature store using Kafka and PySpark Structured Streaming with exact-once checkpointing.
  2. Served complete historical feature vectors to a FastAPI decisioning endpoint in sub-10ms latency by decoupling PostgreSQL with Redis.
  3. Ensured 100% pipeline resilience by building automated payload routing to a Kafka Dead-Letter Queue (DLQ) for replay.

### Case Study 3: Credit Risk Default Analytics Pipeline
- **Title:** Credit Risk Default Analytics Pipeline
- **Short Summary (Homepage):** Out-of-core financial ML pipeline processing 57M records under 4GB RAM via embedded DuckDB, numeric downcasting, XGBoost asymmetric F-beta thresholding (beta=2.5), and safety floors.
- **Tech Stack:** DuckDB, XGBoost, Python, pandas, Scikit-learn, MLflow
- **GitHub Repo URL:** https://github.com/NADEEMTHEBA8/credit-risk-analysis
- **Key Achievements / Bullet Points:**
  1. Engineered out-of-core financial pipeline processing 57M records under 4GB RAM via embedded DuckDB and numeric downcasting.
  2. Optimized credit default detection using XGBoost with asymmetric F-beta thresholding (beta=2.5) to minimize high-cost default false negatives.
  3. Deployed automated safety floors preventing false rejection of qualified credit applicants.

### Case Study 4: Predictive Supply Chain Telemetry
- **Title:** Predictive Supply Chain Telemetry
- **Short Summary (Homepage):** Event-driven telemetry ingestion engine processing IoT machine sensor streams (temp, vibration, pressure) via AWS Kinesis, Databricks Auto Loader, Delta Lake 3.x Liquid Clustering, and dbt.
- **Tech Stack:** AWS S3, Kinesis, Databricks, PySpark, Delta Lake, dbt, Terraform
- **GitHub Repo URL:** https://github.com/NADEEMTHEBA8/supply-chain-telemetry-pipeline
- **Key Achievements / Bullet Points:**
  1. Ingested real-time IoT sensor telemetry across 50 machines and 5 global plants into an S3 Medallion Lakehouse, calculating 24h rolling risk scores to prevent unplanned downtime.
  2. Eliminated silent streaming data loss by implementing deep response inspection and exponential backoff with jitter on Kinesis batch writes.
  3. Reduced analytical query scan volumes by 90% via physical Delta Lake partitioning on plant location and event date.

---

## 🗄️ Section 4: Project Vault (15 Secondary / Open-Source Projects)

1. **PySpark Skew Optimizer** — Category: *Data Engineering* — Tags: PySpark, Apache Spark, Key Salting, FinOps — URL: https://github.com/NADEEMTHEBA8/pyspark-skew-optimizer
2. **Airflow Pandera Shift-Left Operator** — Category: *Data Engineering* — Tags: Apache Airflow, Pandera, Shift-Left, Python — URL: https://github.com/NADEEMTHEBA8/airflow-pandera-operator
3. **DuckDB Delta CLI Query Tool** — Category: *Tools & Infrastructure* — Tags: DuckDB, Delta Lake, CLI, Rust/Python — URL: https://github.com/NADEEMTHEBA8/duckdb-delta-cli
4. **Debezium CDC Kafka Streaming Kit** — Category: *Streaming & CDC* — Tags: Debezium, PostgreSQL, Kafka, CDC — URL: https://github.com/NADEEMTHEBA8/debezium-kafka-connector-kit
5. **dbt Data Quality & Profiling Macros** — Category: *Data Engineering* — Tags: dbt, SQL, Data Quality, Snowflake — URL: https://github.com/NADEEMTHEBA8/dbt-data-quality-toolkit
6. **AWS FinOps Kinesis Cost Exporter** — Category: *Tools & Infrastructure* — Tags: AWS Lambda, AWS Kinesis, FinOps, S3 — URL: https://github.com/NADEEMTHEBA8/aws-finops-cost-exporter
7. **Redis Vector Feature Serving API** — Category: *ML & Analytics* — Tags: FastAPI, Redis Vector, Python, REST API — URL: https://github.com/NADEEMTHEBA8/redis-vector-search-fastapi
8. **Databricks Auto Loader IoT Bridge** — Category: *Streaming & CDC* — Tags: Databricks, Auto Loader, AWS Kinesis, Delta Lake — URL: https://github.com/NADEEMTHEBA8/kinesis-auto-loader-bridge
9. **MLflow Asymmetric Risk Registry** — Category: *ML & Analytics* — Tags: MLflow, XGBoost, Optuna, Financial ML — URL: https://github.com/NADEEMTHEBA8/mlflow-xgboost-registry
10. **Fast Parquet Metadata Validator** — Category: *Tools & Infrastructure* — Tags: Parquet, CLI, Python, Data Quality — URL: https://github.com/NADEEMTHEBA8/fast-parquet-validator
11. **Spark Hive-to-Iceberg Migration Tool** — Category: *Data Engineering* — Tags: Apache Iceberg, PySpark, Hive Metastore, BigData — URL: https://github.com/NADEEMTHEBA8/spark-iceberg-migration-tool
12. **Great Expectations Airflow Pipeline** — Category: *Data Engineering* — Tags: Great Expectations, Airflow, Data Quality, Python — URL: https://github.com/NADEEMTHEBA8/great-expectations-airflow-dag
13. **Streamlit Lakehouse Metric Viewer** — Category: *ML & Analytics* — Tags: Streamlit, DuckDB, Delta Lake, Python — URL: https://github.com/NADEEMTHEBA8/streamlit-lakehouse-dashboard
14. **ClickHouse Real-Time Log Ingestor** — Category: *Streaming & CDC* — Tags: ClickHouse, Vector, Nginx, OLAP — URL: https://github.com/NADEEMTHEBA8/clickhouse-log-ingestor
15. **Terraform GCP Data Platform Module** — Category: *Tools & Infrastructure* — Tags: Terraform, GCP, BigQuery, Infrastructure as Code — URL: https://github.com/NADEEMTHEBA8/terraform-gcp-data-platform

---

## 💼 Section 5: Resume & Experience

- **Professional Summary:**
  > Data Engineer with 3+ years of experience architecting scalable ETL/ELT pipelines, event-driven streaming architectures, and Medallion Lakehouses on AWS & Databricks. Highly proficient in Databricks, PySpark, SQL, Delta Lake, dbt, AWS (Lambda, CloudWatch, S3, Kinesis), and Terraform. Experienced in ingesting high-frequency IoT sensor telemetry, constructing real-time customer routing logic, and optimizing physical lakehouse storage layouts.

- **Work Experience 1:**
  - **Role:** Data Engineer
  - **Company:** Kaival Technologies — Remote (London / India)
  - **Period:** Oct 2023 – Present
  - **Bullet Points:**
    1. Engineered scalable ETL pipelines utilizing Python and SQL to process over 500GB of daily data, successfully reducing complex batch runtimes from 12hrs to 7.2hrs and cutting compute costs by 25%.
    2. Implemented strict data quality rules using programmatic validation, successfully preventing 99.9% of anomalies from reaching production dashboards.
    3. Architected scalable data integration workflows using Python, consolidating 250k+ legacy records from disparate enterprise source systems into a centralized schema.
    4. Achieved zero-downtime production releases by architecting automated CI/CD pipelines via GitHub Actions & Docker.

- **Education:**
  1. **Master's Degree, Data Science and Analytics** | University of Hertfordshire, UK | Sep 2021 – Sep 2023
  2. **Bachelor of Technology (B.Tech), Computer Science** | Marwadi University, India | Aug 2016 – May 2020

---

## 🛠️ Section 6: Developer Setup & Uses Page (/uses)

- **Data Engineering & Streaming Tools:**
  - PySpark 3.5 & Databricks
  - Delta Lake 3.x
  - Apache Kafka & Debezium CDC
  - dbt Core 1.8 & DuckDB
  - Redis 7.0
- **Cloud & DevOps:**
  - AWS (S3, Kinesis, RDS, Lambda, CloudWatch, IAM)
  - Terraform IaC
  - Apache Airflow 2.8
  - Docker & GitHub Actions
- **Engineering Environment:**
  - OS: macOS (Apple Silicon)
  - Languages: Python 3.11+, Advanced SQL, Spark SQL, Bash
  - IDE: VS Code / Antigravity IDE
  - Databases: PostgreSQL, DuckDB, Redis, AWS Athena, Delta Lake
  - Quality Frameworks: PyTest, Pandera, Great Expectations, dbt tests

---

## 📰 Section 7: Articles & Blog Posts

1. **Article 1 Title:** Shift-Left Data Quality in Production Airflow Pipelines
   - **Date:** 2024-04-15
   - **Description:** How enforcing Shift-Left Pandera schema validation gates before Bronze storage prevents downstream pipeline failure.
2. **Article 2 Title:** Building a Sub-10ms Streaming Feature Store with Kafka & Redis
   - **Date:** 2023-12-20
   - **Description:** Decoupling PostgreSQL operational databases from real-time ML inference using Kafka, PySpark Structured Streaming, and Redis vector caching.
