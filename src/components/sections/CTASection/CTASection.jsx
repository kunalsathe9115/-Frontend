import React from 'react';
import Button from '../../shared/Button';
import styles from './CTASection.module.scss';

const CTASection = () => {
  return (
    <section className={styles.splitCta}>
      <div className={styles.ctaContent}>
        <h3 className={styles.title}>Medium length heading goes here</h3>
        <p className={styles.description}>
          Ready to transform your organization with AI? Get started with Zaya today 
          and see the difference intelligent automation can make.
        </p>
        <Button variant="primary" size="large">
          Request a Demo
        </Button>
      </div>
      <div className={styles.ctaImage}>📱</div>
    </section>
  );
};

export default CTASection;
