import Header from '../Header';
import Navbar from '../Navbar';
import Footer from '../Footer';
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
