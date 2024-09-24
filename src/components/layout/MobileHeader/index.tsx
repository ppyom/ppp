import Logo from '../../common/Logo';
import MenuButton from '../../common/MenuButton';
import styles from './styles.module.css';

const MobileHeader = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <MenuButton className={styles.open} />
    </header>
  );
};

export default MobileHeader;
