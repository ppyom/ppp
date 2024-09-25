import React from 'react';
import { IconType } from 'react-icons';
import classNames from '@/utils/classNames.ts';
import styles from './styles.module.css';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  children?: React.ReactNode;
  Icon?: IconType;
  active?: boolean;
}

const Button = ({
  className = '',
  Icon,
  children,
  active,
  ...props
}: Props) => {
  return (
    <button
      {...props}
      className={classNames(
        styles.button,
        Icon && styles.icon,
        active && styles.active,
        className,
      )}
    >
      {Icon ? <Icon /> : children}
    </button>
  );
};

export default Button;
