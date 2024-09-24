import Header from '../Header';
import Navbar from '../Navbar';
import Footer from '../Footer';
import styles from './styles.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Header />
      <Navbar />
      <Footer />
    </div>
  );
};

export default Sidebar;
