import Logo from '../../common/Logo';
import MenuButton from '../../common/MenuButton';
import styles from './styles.module.css';

interface Props {
  open: () => void;
}

const MobileHeader = ({ open }: Props) => {
  return (
    <header className={styles.header}>
      <Logo />
      <MenuButton className={styles.open} onClick={open} />
    </header>
  );
};

export default MobileHeader;
