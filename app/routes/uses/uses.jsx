import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses & Technical Stack"
          description="A detailed overview of the core technologies, distributed compute engines, streaming frameworks, and cloud tools I rely on to build resilient data pipelines and lakehouses."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Data Engineering & Streaming</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://spark.apache.org/">PySpark 3.5 & Databricks</Link>: My primary engines for large-scale batch and Structured Streaming ETL jobs across multi-terabyte datasets.
                  </ListItem>
                  <ListItem>
                    <Link href="https://delta.io/">Delta Lake 3.x</Link>: Open-source storage layer enabling ACID transactions, time travel, and Liquid Clustering layout optimizations.
                  </ListItem>
                  <ListItem>
                    <Link href="https://kafka.apache.org/">Apache Kafka (KRaft)</Link> & <Link href="https://debezium.io/">Debezium CDC</Link>: Used for capturing database mutations and building event-driven streaming feature stores.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.getdbt.com/">dbt Core 1.8</Link> & <Link href="https://duckdb.org/">DuckDB</Link>: For transformation modeling, data quality tests, and out-of-core OLAP analytics.
                  </ListItem>
                  <ListItem>
                    <Link href="https://redis.io/">Redis 7.0</Link>: Key-value caching store for sub-10ms real-time feature vector serving to inference endpoints.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Cloud & DevOps</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://aws.amazon.com/">AWS (S3, Kinesis, RDS, Lambda, CloudWatch, IAM)</Link>: Cloud infrastructure foundation for hosting data lakes and streaming ingestion pipelines.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.terraform.io/">Terraform IaC</Link>: Declarative infrastructure provisioning ensuring 100% reproducible dev/staging/prod environments.
                  </ListItem>
                  <ListItem>
                    <Link href="https://airflow.apache.org/">Apache Airflow 2.8</Link>: DAG orchestration for scheduling batch pipelines and enforcing Shift-Left Pandera data contracts.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.docker.com/">Docker & GitHub Actions</Link>: Containerized local development environments and zero-downtime CI/CD release pipelines.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Engineering Environment</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Primary OS</TableHeadCell>
                    <TableCell>macOS (Apple Silicon)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Primary Languages</TableHeadCell>
                    <TableCell>Python 3.11+, Advanced SQL, Spark SQL, Bash</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>IDE & Editor</TableHeadCell>
                    <TableCell>VS Code / Antigravity IDE with Monokai Pro</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Database Engines</TableHeadCell>
                    <TableCell>PostgreSQL, DuckDB, Redis, AWS Athena, Delta Lake</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Quality & Testing</TableHeadCell>
                    <TableCell>PyTest, Pandera, Great Expectations, dbt tests</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
