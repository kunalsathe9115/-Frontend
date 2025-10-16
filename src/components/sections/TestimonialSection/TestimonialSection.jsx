import React from 'react';
import Container from '../../shared/Container';
import styles from './TestimonialSection.module.scss';

const TestimonialSection = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialContent}>
            <h3 className={styles.title}>
              Quadroid isn't theory. It's powering real companies today.
            </h3>
            <p className={styles.description}>
              Leading enterprises are already using Zaya to transform their operations, 
              reduce manual work, and make better decisions faster.
            </p>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialLabel}>Testimonials</div>
            <p className={styles.testimonialText}>
              "Zaya has revolutionized how we handle customer inquiries. Response times 
              are down 80% and customer satisfaction is at an all-time high."
            </p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorAvatar}>JD</div>
              <div className={styles.authorInfo}>
                <h4>Jane Doe</h4>
                <p>CEO, Company Name</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;
