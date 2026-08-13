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
                    <Link href="https://spark.apache.org/">PySpark 3.5 & Databricks</Link>: Primary tools for building batch and streaming ETL jobs across large datasets.
                  </ListItem>
                  <ListItem>
                    <Link href="https://delta.io/">Delta Lake 3.x</Link>: Storage format for managing Delta tables with schema enforcement and table version history.
                  </ListItem>
                  <ListItem>
                    <Link href="https://kafka.apache.org/">Apache Kafka & Debezium CDC</Link>: Used for capturing database changes and routing real-time event streams into feature stores.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.getdbt.com/">dbt Core 1.8 & DuckDB</Link>: Used for SQL data transformation models, quality testing, and fast analytical queries.
                  </ListItem>
                  <ListItem>
                    <Link href="https://redis.io/">Redis 7.0</Link>: In-memory caching store used to serve real-time feature vectors in under 10ms.
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
                    <Link href="https://aws.amazon.com/">AWS (S3, Kinesis, RDS, Lambda, CloudWatch, IAM)</Link>: Primary cloud stack for hosting data lakes, streaming ingestion, and serverless jobs.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.terraform.io/">Terraform IaC</Link>: Declarative Infrastructure as Code tool for managing AWS and GCP cloud resources.
                  </ListItem>
                  <ListItem>
                    <Link href="https://airflow.apache.org/">Apache Airflow 2.8</Link>: Orchestrates daily batch DAGs and schedules data quality validation pipelines.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.docker.com/">Docker & GitHub Actions</Link>: Used for containerized local development setups and automated testing in CI/CD pipelines.
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
                    <TableCell>Python 3.11+, SQL, Spark SQL, Bash</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>IDE & Editor</TableHeadCell>
                    <TableCell>VS Code</TableCell>
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
