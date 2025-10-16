import React from 'react';
import Container from '../../shared/Container';
import styles from './ProblemSection.module.scss';

const ProblemSection = () => {
  const problemCards = [
    {
      icon: '🌐',
      title: 'Data Everywhere, Answers Nowhere',
      description: 'Information scattered across multiple systems with no unified view.'
    },
    {
      icon: '👤',
      title: 'Skills Are Non-Transferable',
      description: 'Expert knowledge trapped in individual team members.'
    },
    {
      icon: '🔧',
      title: 'Tools That Don\'t Speak Together',
      description: 'Systems operate in isolation without meaningful integration.'
    },
    {
      icon: '📈',
      title: 'Growth Without Structure',
      description: 'Scaling processes without capturing institutional knowledge.'
    }
  ];

  return (
    <>
      {/* Why Work Still Feels Manual Section */}
      <section className={styles.section}>
        <Container>
          <h2 className={styles.sectionTitle}>Why Work Still Feels Manual</h2>
          <p className={styles.sectionSubtitle}>
            Despite all the tools and systems, knowledge remains siloed and processes stay disconnected.
          </p>
        </Container>
      </section>

      {/* Problem Grid Section */}
      <section className={styles.section}>
        <Container>
          <div className={styles.problemGrid}>
            <div className={styles.problemContent}>
              <h3 className={styles.problemTitle}>Knowledge Walks Out the Door</h3>
              <p className={styles.problemDescription}>
                Critical business knowledge lives in people's heads, not in your systems. 
                When team members leave, their expertise goes with them.
              </p>
              <div className={styles.problemImage}>📊</div>
            </div>
            <div className={styles.problemCards}>
              {problemCards.map((card, index) => (
                <div key={index} className={styles.problemCard}>
                  <div className={styles.problemCardIcon}>{card.icon}</div>
                  <h4 className={styles.problemCardTitle}>{card.title}</h4>
                  <p className={styles.problemCardDescription}>{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProblemSection;
