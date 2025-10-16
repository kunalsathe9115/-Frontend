import React from 'react';
import Container from '../../shared/Container';
import styles from './EnterpriseSection.module.scss';

const EnterpriseSection = () => {
  const enterpriseFeatures = [
    {
      icon: '🎯',
      title: 'Contextual',
      description: 'Understands your specific business context and processes'
    },
    {
      icon: '🛡️',
      title: 'Secure',
      description: 'Enterprise-grade security with full data control'
    },
    {
      icon: '✅',
      title: 'Compliant',
      description: 'Built to meet industry regulations and standards'
    },
    {
      icon: '⚙️',
      title: 'Scalable',
      description: 'Grows with your organization from startup to enterprise'
    }
  ];

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.enterpriseGrid}>
          <div className={styles.enterpriseContent}>
            <div className={styles.featureLabel}>Features</div>
            <h3 className={styles.title}>Why Enterprises Choose Quadroid</h3>
            <a href="#features" className={styles.learnMore}>Learn More</a>
          </div>
          <div className={styles.enterpriseFeatures}>
            {enterpriseFeatures.map((feature, index) => (
              <div key={index} className={styles.enterpriseFeature}>
                <div className={styles.enterpriseIcon}>{feature.icon}</div>
                <div className={styles.enterpriseFeatureContent}>
                  <h4 className={styles.featureTitle}>{feature.title}</h4>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EnterpriseSection;
