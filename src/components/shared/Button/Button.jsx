import React from 'react';
import styles from './Button.module.scss';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  className = '', 
  onClick, 
  type = 'button',
  disabled = false,
  ...props 
}) => {
  const buttonClass = `
    ${styles.button} 
    ${styles[variant]} 
    ${styles[size]} 
    ${className}
  `.trim();

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
