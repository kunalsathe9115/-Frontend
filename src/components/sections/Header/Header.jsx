import React, { useState } from 'react';
import Container from '../../shared/Container';
import Button from '../../shared/Button';
import styles from './Header.module.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
            <a href="#home" className={styles.logo}>
              logo
            </a>
          
          <div className={`${styles.navMenu} ${isMenuOpen ? styles.navMenuOpen : ''}`}>
            <a href="#solutions" className={styles.navLink}>
              Solutions
            </a>
            <a href="#company" className={styles.navLink}>
              Company
            </a>
            <a href="#resources" className={styles.navLink}>
              Resources
            </a>
            <Button variant="accent" size="small">
              Contact Us
            </Button>
          </div>

          <button 
            className={styles.mobileMenuButton}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
          </button>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
