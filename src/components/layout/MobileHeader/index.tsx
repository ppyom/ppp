import Logo from '@/components/common/Logo';
import MenuButton from '@/components/common/MenuButton';
import styles from './styles.module.css';

interface Props {
  open: () => void;
}

// 모바일 화면에서 사용하기 위한 헤더
const MobileHeader = ({ open }: Props) => {
  return (
    <header className={styles.header}>
      <Logo />
      <MenuButton className={styles.open} onClick={open} />
    </header>
  );
};

export default MobileHeader;
