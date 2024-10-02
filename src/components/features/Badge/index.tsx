import classNames from '@/utils/classNames.ts';
import type { Tag } from '@/types/blog.ts';
import styles from './styles.module.css';

interface Props {
  type: Tag;
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
