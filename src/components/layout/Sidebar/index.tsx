import Header from '@/components/layout/Header';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import styles from './styles.module.css';

interface Props {
  isOpen: boolean;
  close: () => void;
}

const Sidebar = ({ isOpen, close }: Props) => {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.active : ''}`}>
      <Header close={close} />
      <Navbar />
      <Footer />
    </div>
  );
};

export default Sidebar;
