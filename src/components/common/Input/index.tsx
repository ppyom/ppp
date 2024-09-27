import React from 'react';
import { IconType } from 'react-icons';
import classNames from '@/utils/classNames.ts';
import styles from './styles.module.css';

interface Props extends React.ComponentPropsWithoutRef<'input'> {
  value: string;
  setValue: (text: string) => void;
  icon?: {
    Icon: IconType;
    className?: string;
    onClick?: () => void;
  };
}

const Input = ({ setValue, icon, ...props }: Props) => {
  return (
    <div className={styles.container}>
      <input {...props} onChange={({ target }) => setValue(target.value)} />
      {icon && (
        <span
          className={classNames(styles.icon, icon.className)}
          onClick={icon.onClick}
        >
          <icon.Icon />
        </span>
      )}
    </div>
  );
};

export default Input;
