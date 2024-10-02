import Badge from 'components/features/Badge';
import { formatter } from '@/utils/datetimeFormatter.ts';
import { namedTags } from '@/types/blog.ts';
import type { Blog } from '@/types/blog.ts';
import styles from './styles.module.css';

interface Props extends Blog {}

const BlogCard = ({
  id,
  title,
  url,
  cover_image,
  tag_list,
  published_at,
  user: { name: username, profile_image },
}: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={cover_image || '/images/no_image.png'} alt={title} />
      </div>
      <div className={styles.tags}>
        {tag_list
          .sort((a, b) => (namedTags.includes(a) ? -1 : 1))
          .map((t) => (
            <Badge key={`tag_${id}_${t}`} type={t} />
          ))}
      </div>
      <p className={styles.title}>{title}</p>
      <div className={styles.info}>
        <div className={styles.img}>
          <img src={profile_image} alt={title} />
        </div>
        <span className={styles.username}>{username}</span>
        <span className={styles.date}>
          {formatter('MMM DD, YYYY', published_at)}
        </span>
      </div>
      <a className={styles.link} href={url || '#'} target="_blank" />
    </div>
  );
};

export default BlogCard;
