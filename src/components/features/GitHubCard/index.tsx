import type { GitHub } from '@/types/github.ts';
import styles from './styles.module.css';

interface Props extends GitHub {}

const GitHubCard = ({
  name,
  description,
  owner: { avatar_url, login },
}: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src="/images/github_logo.png" alt="gh logo" />
        <div className={styles.avatar}>
          <img src={avatar_url} alt={login} />
        </div>
      </div>
      <div className={styles.repo}>
        <p className={styles.title}>{name}</p>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
};

export default GitHubCard;
