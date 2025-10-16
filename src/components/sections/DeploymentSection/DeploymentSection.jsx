import React from 'react';
import Container from '../../shared/Container';
import styles from './DeploymentSection.module.scss';

const DeploymentSection = () => {
  const deploymentOptions = [
    {
      icon: '🚀',
      title: 'Flexible Deployment',
      description: 'Deploy on-premises, in the cloud, or hybrid to meet your security requirements.',
      link: 'Read More'
    },
    {
      icon: '🔧',
      title: 'LLM Agnostic and Cloud Independent',
      description: 'Works with any large language model and cloud provider you choose.',
      link: 'Read More'
    },
    {
      icon: '📋',
      title: 'Governance Ready',
      description: 'Built-in controls for data governance, audit trails, and compliance.',
      link: 'Read More'
    },
    {
      icon: '⚡',
      title: 'Faster Time to Value',
      description: 'Get up and running in weeks, not months, with our proven implementation process.',
      link: 'Read More'
    }
  ];

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.deploymentCards}>
          {deploymentOptions.map((option, index) => (
            <div key={index} className={styles.deploymentCard}>
              <div className={styles.deploymentImage}>{option.icon}</div>
              <h4 className={styles.deploymentTitle}>{option.title}</h4>
              <p className={styles.deploymentDescription}>{option.description}</p>
              <a href="#features" className={styles.readMore}>{option.link}</a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DeploymentSection;
