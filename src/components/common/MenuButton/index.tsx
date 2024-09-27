import React from 'react';
import { FiMenu } from 'react-icons/fi';
import classNames from '@/utils/classNames.ts';
import styles from './styles.module.css';

interface Props extends React.ComponentPropsWithoutRef<'button'> {}

// Header/MobileHeader의 close/open 버튼
const MenuButton = ({ className = '', ...props }: Props) => {
  return (
    <button {...props} className={classNames(styles.button, className)}>
      <FiMenu />
    </button>
  );
};

export default MenuButton;
