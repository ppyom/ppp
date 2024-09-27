import Logo from '@/components/common/Logo';
import MenuButton from '@/components/common/MenuButton';
import styles from './styles.module.css';

interface Props {
  close: () => void;
}

// Sidebar 내부에 들어가있는 헤더
const Header = ({ close }: Props) => {
  return (
    <header className={styles.header}>
      <h1 hidden>PPP</h1>
      <Logo />
      <MenuButton className={styles.close} onClick={close} />
    </header>
  );
};
export default Header;
