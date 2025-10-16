import React, { useState } from 'react';
import Container from '../../shared/Container';
import Button from '../../shared/Button';
import styles from './ContactSection.module.scss';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    terms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.contactGrid}>
          <div className={styles.contactForm}>
            <div className={styles.contactLabel}>Contact</div>
            <h2 className={styles.title}>Reach out</h2>
            <p className={styles.subtitle}>
              Ready to get started? We'd love to hear from you. Send us a message 
              and we'll respond as soon as possible.
            </p>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={styles.textarea}
                  required
                />
              </div>
              <div className={styles.checkboxGroup}>
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleInputChange}
                  className={styles.checkbox}
                  required
                />
                <label htmlFor="terms" className={styles.checkboxLabel}>
                  I agree to the terms and conditions
                </label>
              </div>
              <Button type="submit" variant="accent" size="large">
                Submit
              </Button>
            </form>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <h4 className={styles.contactTitle}>Email</h4>
              <p className={styles.contactText}>hello@zaya.ai</p>
              <a href="mailto:hello@zaya.ai" className={styles.contactLink}>Send us an email</a>
            </div>
            <div className={styles.contactItem}>
              <h4 className={styles.contactTitle}>Phone</h4>
              <p className={styles.contactText}>+1 (555) 123-4567</p>
              <a href="tel:+15551234567" className={styles.contactLink}>Call us</a>
            </div>
            <div className={styles.contactItem}>
              <h4 className={styles.contactTitle}>Office</h4>
              <p className={styles.contactText}>123 Business Street</p>
              <p className={styles.contactText}>San Francisco, CA 94105</p>
              <a href="#contact" className={styles.contactLink}>Get directions</a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
