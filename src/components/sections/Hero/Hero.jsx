import React from 'react';
import Container from '../../shared/Container';
import Button from '../../shared/Button';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container style={{
       marginLeft: '10px'
      }}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            The Next Brain of Your Business
          </h1>
          <p className={styles.heroSubtitle}>
          Quadroid turns your company’s knowledge, data, and playbooks into intelligent workflows that think and act like your best team members 24/7
          </p>
          <div className={styles.heroButtons}>
            <Button variant="primary" size="large">
            Design Your First Agent
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
