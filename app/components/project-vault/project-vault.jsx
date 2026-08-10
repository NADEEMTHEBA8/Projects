import { useState } from 'react';
import { Button } from '~/components/button';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Section } from '~/components/section';
import projectsData from '~/data/projects.json';
import styles from './project-vault.module.css';

const categories = [
  'All',
  'Data Engineering',
  'Streaming & CDC',
  'ML & Analytics',
  'Tools & Infrastructure',
];

export function ProjectVault({ title = 'More Engineering Projects & Tools', showSearch = true }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projectsData.filter(project => {
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <Section className={styles.vaultSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Heading level={2} as="h2" className={styles.title}>
            {title}
          </Heading>
          <Text className={styles.description} size="l">
            Explore 15 open-source data utilities, custom Airflow operators, streaming connectors, DuckDB tools, and FinOps scripts.
          </Text>

          {showSearch && (
            <div className={styles.searchWrapper}>
              <input
                type="text"
                placeholder="Search projects by tech (e.g. Spark, Kafka, DuckDB)..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>
          )}

          <div className={styles.filterTabs}>
            {categories.map(cat => (
              <button
                key={cat}
                type="button"
                className={styles.tabButton}
                data-active={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {filteredProjects.map(project => (
            <div key={project.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.categoryBadge}>{project.category}</span>
              </div>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDescription}>{project.description}</p>
              <div className={styles.tagList}>
                {project.tags.map(tag => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className={styles.cardFooter}>
                <Button
                  secondary
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon="chevron-right"
                >
                  View Repository
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className={styles.noResults}>
            <Text size="l">No projects matching your filter criteria.</Text>
          </div>
        )}
      </div>
    </Section>
  );
}
