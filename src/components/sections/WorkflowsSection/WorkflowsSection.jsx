import React from 'react';
import Container from '../../shared/Container';
import styles from './WorkflowsSection.module.scss';

const WorkflowsSection = () => {
  const workflows = [
    {
      icon: '📊',
      title: 'Sales Process Optimization',
      description: 'Streamline lead qualification and follow-up processes'
    },
    {
      icon: '💬',
      title: 'Customer Support Enhancement',
      description: 'Provide instant, accurate responses to customer inquiries'
    },
    {
      icon: '⚖️',
      title: 'Compliance Management',
      description: 'Ensure adherence to regulations and internal policies'
    },
    {
      icon: '📄',
      title: 'Document Processing',
      description: 'Automate document review and approval workflows'
    }
  ];

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <h2 className={styles.title}>Real Workflows. Real Impact.</h2>
          <p className={styles.subtitle}>
            See how Zaya transforms actual business processes across different departments 
            and industries.
          </p>
          <div className={styles.workflowCards}>
            {workflows.map((workflow, index) => (
              <div key={index} className={styles.workflowCard}>
                <div className={styles.workflowIcon}>{workflow.icon}</div>
                <h4 className={styles.workflowTitle}>{workflow.title}</h4>
                <p className={styles.workflowDescription}>{workflow.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WorkflowsSection;
