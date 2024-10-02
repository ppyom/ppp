import { FaGithub, FaRegEnvelope } from 'react-icons/fa6';
import useToast from '@/hooks/useToast.ts';
import me from '@/constants/me.ts';
import toast from '@/constants/toast.ts';
import styles from './styles.module.css';

const Footer = () => {
  const { setToast } = useToast();
  const handleCopyMail = () => {
    navigator.clipboard.writeText(me.email).then();
    setToast(toast.me.copyMail);
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <a href={me.github} target="_blank">
          <FaGithub />
        </a>
        <button onClick={handleCopyMail}>
          <FaRegEnvelope />
        </button>
      </div>
      <p className={styles.copyright}>ⓒ 2024. PPYOM. All rights reserved</p>
    </footer>
  );
};

export default Footer;
