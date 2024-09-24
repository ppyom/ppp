import { FaGithub, FaRegEnvelope } from 'react-icons/fa6';
import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <a href="https://github.com/ppyom" target="_blank">
          <FaGithub />
        </a>
        <button>
          {/* TODO 메일주소 복사 기능 추가 필요 */}
          <FaRegEnvelope />
        </button>
      </div>
      <p className={styles.copyright}>ⓒ 2024. PPYOM. All rights reserved</p>
    </footer>
  );
};

export default Footer;
