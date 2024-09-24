import Header from '../Header';
import Navbar from '../Navbar';
import Footer from '../Footer';
import styles from './styles.module.css';

const Sidebar = () => {
  return (
    // TODO 모바일에서 Sidebar 열리는 기능 구현 필요
    <div className={`${styles.sidebar} ${false ? styles.active : ''}`}>
      <Header />
      <Navbar />
      <Footer />
    </div>
  );
};

export default Sidebar;
