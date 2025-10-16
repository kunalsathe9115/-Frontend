import React from 'react';
import Container from '../../shared/Container';
import Button from '../../shared/Button';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            The Next Brain of Your Business
          </h1>
          <p className={styles.heroSubtitle}>
            Transform your organization with AI that understands your processes, 
            connects your systems, and guides your decisions in real-time.
          </p>
          <div className={styles.heroButtons}>
            <Button variant="primary" size="large">
              Request a Demo
            </Button>
            <Button variant="secondary" size="large">
              Watch Video
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
