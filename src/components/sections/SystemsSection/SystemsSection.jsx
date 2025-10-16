import React from 'react';
import Container from '../../shared/Container';
import Button from '../../shared/Button';
import styles from './SystemsSection.module.scss';

const SystemsSection = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <h2 className={styles.title}>
            You've built the systems, now build the intelligence that connects them.
          </h2>
          <p className={styles.subtitle}>
            Zaya creates a unified brain for your organization that understands your processes, 
            learns from your data, and guides your team's decisions.
          </p>
          <Button variant="primary" size="large">
            Request a Demo
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default SystemsSection;
