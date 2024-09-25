import Logo from '@/components/common/Logo';
import MenuButton from '@/components/common/MenuButton';
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
