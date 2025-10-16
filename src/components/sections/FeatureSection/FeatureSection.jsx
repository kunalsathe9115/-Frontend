import React from 'react';
import Container from '../../shared/Container';
import styles from './FeatureSection.module.scss';

const FeatureSection = () => {
  const features = [
    {
      label: 'Features',
      title: 'Understands Your SOPs',
      description: 'Zaya learns your standard operating procedures and can guide team members through complex processes step by step.',
      image: '📋'
    },
    {
      label: 'Features',
      title: 'Connects Your CRM and ERP',
      description: 'Seamlessly integrates data from all your business systems to provide a complete view of your operations.',
      image: '🔗'
    },
    {
      label: 'Features',
      title: 'Retrieves Insights from Past Actions',
      description: 'Analyzes historical data to identify patterns and provide actionable recommendations for better decision making.',
      image: '🔍'
    },
    {
      label: 'Features',
      title: 'Guides Decisions in Real Time',
      description: 'Provides instant guidance and recommendations based on current context and historical patterns.',
      image: '⚡'
    }
  ];

  return (
    <section className={styles.section}>
      <Container>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureBlock}>
            <div className={styles.featureContent}>
              <div className={styles.featureLabel}>{feature.label}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
              <a href="#features" className={styles.learnMore}>Learn More</a>
            </div>
            <div className={styles.featureImage}>{feature.image}</div>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default FeatureSection;
