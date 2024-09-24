import { FiMenu } from 'react-icons/fi';
import styles from './styles.module.css';
import React from 'react';

interface Props extends Partial<HTMLButtonElement> {}

const MenuButton = ({ className = '', ...props }: Props) => {
  return (
    <button {...props} className={`${styles.button} ${className}`}>
      <FiMenu />
    </button>
  );
};

export default MenuButton;
