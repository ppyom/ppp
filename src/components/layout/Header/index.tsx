import { FiMenu } from 'react-icons/fi';
import styles from './styles.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="#">
        {/* TODO router 추가한 다음 Link로 수정 필요 */}
        <h1 hidden>PPP</h1>
        <img src="/logo.svg" alt="logo" />
      </a>
      <button className={styles.close}>
        <FiMenu />
      </button>
    </header>
  );
};
export default Header;
