import Logo from '../../common/Logo';
import MenuButton from '../../common/MenuButton';
import styles from './styles.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 hidden>PPP</h1>
      <Logo />
      <MenuButton className={styles.close} />
    </header>
  );
};
export default Header;
