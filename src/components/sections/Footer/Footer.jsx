import React, { useState } from 'react';
import Container from '../../shared/Container';
import Button from '../../shared/Button';
import styles from './Footer.module.scss';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const footerLinks = {
    product: [
      { label: 'Features', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'API', href: '#' }
    ],
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Press', href: '#' }
    ],
    resources: [
      { label: 'Help Center', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Status', href: '#' },
      { label: 'Contact', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: '💼', href: '#' },
    { icon: '🐦', href: '#' },
    { icon: '📘', href: '#' }
  ];

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>Zaya</div>
            <p className={styles.footerDescription}>
              Building the future of intelligent business automation.
            </p>
          </div>
          
          <div className={styles.footerNav}>
            <div className={styles.navColumn}>
              <h4 className={styles.navTitle}>Product</h4>
              <ul className={styles.navList}>
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className={styles.navLink}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={styles.navColumn}>
              <h4 className={styles.navTitle}>Company</h4>
              <ul className={styles.navList}>
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className={styles.navLink}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={styles.navColumn}>
              <h4 className={styles.navTitle}>Resources</h4>
              <ul className={styles.navList}>
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className={styles.navLink}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className={styles.newsletter}>
            <h4 className={styles.newsletterTitle}>Stay up to date</h4>
            <form onSubmit={handleNewsletterSubmit} className={styles.newsletterForm}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={styles.newsletterInput}
                required
              />
              <Button type="submit" variant="accent" size="small">
                Subscribe
              </Button>
            </form>
            <p className={styles.newsletterDescription}>
              Get the latest updates and news delivered to your inbox.
            </p>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>&copy; 2024 Zaya. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <a href="#privacy" className={styles.footerLink}>Privacy Policy</a>
            <a href="#terms" className={styles.footerLink}>Terms of Service</a>
          </div>
          <div className={styles.footerSocial}>
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href} className={styles.socialLink}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
