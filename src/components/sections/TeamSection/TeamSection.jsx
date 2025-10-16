import React from 'react';
import Container from '../../shared/Container';
import styles from './TeamSection.module.scss';

const TeamSection = () => {
  const teamMembers = [
    {
      id: '01',
      name: 'Daniel Rodriguez',
      title: 'Chief Technology Officer',
      description: 'Former AI researcher at Google with 15+ years in machine learning.',
      social: ['💼', '🐦', '📧']
    },
    {
      id: '02',
      name: 'Sarah Chen',
      title: 'Head of Product',
      description: 'Enterprise software veteran with expertise in workflow automation.',
      social: ['💼', '🐦', '📧']
    },
    {
      id: '03',
      name: 'Michael Thompson',
      title: 'Chief Data Officer',
      description: 'Data science leader with experience at Fortune 500 companies.',
      social: ['💼', '🐦', '📧']
    },
    {
      id: '04',
      name: 'Emily Watson',
      title: 'VP of Engineering',
      description: 'Full-stack engineer with expertise in scalable AI systems.',
      social: ['💼', '🐦', '📧']
    }
  ];

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.teamGrid}>
          <div className={styles.teamContent}>
            <div className={styles.teamLabel}>Team</div>
            <h3 className={styles.title}>Our architects</h3>
            <p className={styles.description}>
              The minds behind Zaya bring decades of experience in AI, enterprise software, 
              and business process optimization.
            </p>
          </div>
          <div className={styles.teamMembers}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.teamMember}>
                <div className={styles.memberAvatar}>{member.id}</div>
                <div className={styles.memberInfo}>
                  <h4 className={styles.memberName}>{member.name}</h4>
                  <p className={styles.memberTitle}>{member.title}</p>
                  <p className={styles.memberDescription}>{member.description}</p>
                  <div className={styles.memberSocial}>
                    {member.social.map((icon, iconIndex) => (
                      <span key={iconIndex} className={styles.socialIcon}>{icon}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;
