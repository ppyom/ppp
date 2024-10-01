import classNames from '@/utils/classNames.ts';
import type { Tags } from '@/types/blog.ts';
import styles from './styles.module.css';

interface Props {
  type: Tags;
}

const BlogTag = ({ type }: Props) => {
  return (
    <div className={classNames(styles.tag, styles[type])}>
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

export default BlogTag;
