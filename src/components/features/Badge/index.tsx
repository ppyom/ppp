import classNames from '@/utils/classNames.ts';
import type { Tags } from '@/types/blog.ts';
import styles from './styles.module.css';

interface Props {
  type: Tags;
}

const Badge = ({ type }: Props) => {
  return (
    <div className={classNames(styles.badge, styles[type])}>
      {type === 'javascript'
        ? 'JavaScript'
        : type === 'react'
          ? 'React'
          : type === 'html'
            ? 'HTML'
            : type === 'css'
              ? 'CSS'
              : type}
    </div>
  );
};

export default Badge;
