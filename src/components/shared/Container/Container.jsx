import React from 'react';
import styles from './Container.module.scss';

const Container = ({ children, className = '', ...props }) => {
  const containerClass = `${styles.container} ${className}`.trim();

  return (
    <div className={containerClass} {...props}>
      {children}
    </div>
  );
};

export default Container;
