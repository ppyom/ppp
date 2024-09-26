import React from 'react';
import classNames from '@/utils/classNames.ts';
import styles from './styles.module.css';

interface Props {
  children: React.ReactNode;
  title: string;
  hideTitle?: boolean;
  className?: string;
}

const PageLayout = ({ children, title, hideTitle, className = '' }: Props) => {
  return (
    <main className={classNames(styles.page, className)}>
      <h2 hidden={hideTitle}>{title}</h2>
      {children}
    </main>
  );
};

export default PageLayout;
